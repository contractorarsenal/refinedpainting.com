import { sendCustomerConfirmation, sendLeadNotification } from "../_lib/email";
import {
  isHoneypotTripped,
  isRateLimited,
  isSubmittedTooFast,
  recordSuccessfulSend,
  wasRecentlySuccessful,
} from "../_lib/spam";
import { verifyTurnstileToken } from "../_lib/turnstile";
import { validateEstimate } from "../_lib/validation";

interface Env {
  RESEND_API_KEY: string;
  LEAD_NOTIFICATION_EMAIL: string;
  LEAD_FROM_EMAIL: string;
  TURNSTILE_SECRET_KEY?: string;
}

const MAX_BODY_BYTES = 50_000; // generous for text-only fields; no file upload is accepted here.

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const GENERIC_ERROR_MESSAGE = "Something went wrong while sending your request. Please try again.";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "payload_too_large", message: "Submission too large." }, 413);
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return json({ ok: false, error: "bad_request", message: "Invalid request." }, 400);
  }

  let body: unknown;
  try {
    const rawText = await request.text();
    if (rawText.length > MAX_BODY_BYTES) {
      return json({ ok: false, error: "payload_too_large", message: "Submission too large." }, 413);
    }
    body = JSON.parse(rawText);
  } catch {
    return json({ ok: false, error: "bad_request", message: "Invalid request." }, 400);
  }

  const b = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {};

  // Bot signals: both are handled by silently accepting without actually
  // sending anything, so we don't tip off automated submitters.
  if (isHoneypotTripped(b.website) || isSubmittedTooFast(b.formOpenedAt)) {
    return json({ ok: true }, 200);
  }

  const clientIp = request.headers.get("CF-Connecting-IP") ?? "unknown";
  if (isRateLimited(clientIp)) {
    return json(
      { ok: false, error: "rate_limited", message: "Too many requests. Please wait a moment and try again." },
      429,
    );
  }

  const result = validateEstimate(body);
  if (!result.ok) {
    return json({ ok: false, error: "validation", fieldErrors: result.fieldErrors }, 400);
  }
  const data = result.data;

  if (env.TURNSTILE_SECRET_KEY) {
    const verified = await verifyTurnstileToken(
      typeof b.turnstileToken === "string" ? b.turnstileToken : undefined,
      env.TURNSTILE_SECRET_KEY,
      clientIp,
    );
    if (!verified) {
      return json(
        { ok: false, error: "spam_check_failed", message: "We couldn't verify your submission. Please try again." },
        400,
      );
    }
  }

  // Accidental double-click / resubmit of the same person within the last
  // minute: only short-circuit if that earlier submission actually
  // succeeded. A retry after a genuine failure must still really retry —
  // otherwise we'd tell a visitor "success" for a lead that was never sent.
  if (wasRecentlySuccessful(data.email, data.phoneDigits)) {
    return json({ ok: true }, 200);
  }

  if (!env.RESEND_API_KEY || !env.LEAD_NOTIFICATION_EMAIL || !env.LEAD_FROM_EMAIL) {
    console.error("estimate endpoint misconfigured: missing RESEND_API_KEY, LEAD_NOTIFICATION_EMAIL, or LEAD_FROM_EMAIL");
    return json({ ok: false, error: "server", message: GENERIC_ERROR_MESSAGE }, 500);
  }

  const leadResult = await sendLeadNotification(env.RESEND_API_KEY, env.LEAD_FROM_EMAIL, env.LEAD_NOTIFICATION_EMAIL, data);
  if (!leadResult.ok) {
    console.error(`estimate lead notification failed: ${leadResult.reason}`);
    return json({ ok: false, error: "delivery_failed", message: GENERIC_ERROR_MESSAGE }, 502);
  }
  recordSuccessfulSend(data.email, data.phoneDigits);

  // Best-effort only — do not fail the request if this one send fails.
  const confirmationResult = await sendCustomerConfirmation(env.RESEND_API_KEY, env.LEAD_FROM_EMAIL, data);
  if (!confirmationResult.ok) {
    console.error(`estimate customer confirmation failed: ${confirmationResult.reason}`);
  }

  return json({ ok: true }, 200);
};

export const onRequestGet: PagesFunction = async () => json({ ok: false, error: "method_not_allowed" }, 405);
