import type { NormalizedEstimate } from "./validation";

interface ResendSendResult {
  ok: boolean;
  /** Safe-to-log reason; never includes the API key or Resend's raw error body. */
  reason?: string;
}

async function sendViaResend(
  apiKey: string,
  payload: { from: string; to: string; subject: string; text: string; html: string; reply_to?: string },
): Promise<ResendSendResult> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { ok: false, reason: `resend_http_${res.status}` };
    }
    return { ok: true };
  } catch {
    return { ok: false, reason: "resend_network_error" };
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatTimestamp(date: Date): string {
  return date.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  }) + " Pacific";
}

/** The internal operational notification the business actually acts on. */
export async function sendLeadNotification(
  apiKey: string,
  fromEmail: string,
  toEmail: string,
  data: NormalizedEstimate,
): Promise<ResendSendResult> {
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const timestamp = formatTimestamp(new Date());

  const textLines = [
    "REFINED PAINTING — NEW ESTIMATE REQUEST",
    "",
    `Name: ${fullName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `ZIP: ${data.zip}`,
    `Requested service: ${data.serviceLabel}`,
    `Timeline: ${data.timelineLabel}`,
    `Project details: ${data.details || "(none provided)"}`,
    `Submitted: ${timestamp}`,
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 15px; color: #14212c; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">Refined Painting — New Estimate Request</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        <tr><td style="padding: 4px 12px 4px 0; color: #666;">Name</td><td><strong>${escapeHtml(fullName)}</strong></td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #666;">Phone</td><td><a href="tel:${escapeHtml(data.phoneDigits)}">${escapeHtml(data.phone)}</a></td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #666;">Email</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #666;">ZIP</td><td>${escapeHtml(data.zip)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #666;">Requested service</td><td>${escapeHtml(data.serviceLabel)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #666;">Timeline</td><td>${escapeHtml(data.timelineLabel)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #666; vertical-align: top;">Project details</td><td>${escapeHtml(data.details || "(none provided)")}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #666;">Submitted</td><td>${escapeHtml(timestamp)}</td></tr>
      </table>
    </div>
  `.trim();

  return sendViaResend(apiKey, {
    from: fromEmail,
    to: toEmail,
    subject: `New estimate request — ${fullName} (${data.serviceLabel})`,
    text: textLines.join("\n"),
    html,
    reply_to: data.email,
  });
}

/**
 * Best-effort courtesy confirmation to the visitor. Callers should treat a
 * failure here as non-fatal — the lead itself already reached the business
 * via sendLeadNotification, and a flaky confirmation send shouldn't turn a
 * successful submission into an error for the visitor.
 */
export async function sendCustomerConfirmation(
  apiKey: string,
  fromEmail: string,
  data: NormalizedEstimate,
): Promise<ResendSendResult> {
  const text =
    `Hi ${data.firstName},\n\n` +
    "We received your estimate request. A member of the Refined Painting team will review the details you submitted and follow up using the contact information provided.\n\n" +
    `Summary:\n- Service: ${data.serviceLabel}\n- Timeline: ${data.timelineLabel}\n- ZIP: ${data.zip}\n\n` +
    "Refined Painting";

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 15px; color: #14212c; line-height: 1.6;">
      <p>Hi ${escapeHtml(data.firstName)},</p>
      <p>We received your estimate request. A member of the Refined Painting team will review the
      details you submitted and follow up using the contact information provided.</p>
      <p style="margin: 20px 0; padding: 12px 16px; background: #f1f3f4; border-radius: 4px;">
        <strong>Service:</strong> ${escapeHtml(data.serviceLabel)}<br />
        <strong>Timeline:</strong> ${escapeHtml(data.timelineLabel)}<br />
        <strong>ZIP:</strong> ${escapeHtml(data.zip)}
      </p>
      <p>— Refined Painting</p>
    </div>
  `.trim();

  return sendViaResend(apiKey, {
    from: fromEmail,
    to: data.email,
    subject: "We received your estimate request — Refined Painting",
    text,
    html,
  });
}
