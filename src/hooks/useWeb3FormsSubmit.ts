import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { markPendingLead, trackLead } from "../lib/analytics";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const SUBMIT_TIMEOUT_MS = 20000;

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface UseWeb3FormsSubmitOptions {
  formType: "contact" | "quote";
  /** A service category label (e.g. "Interior Painting"), not any PII — this
   * is the only thing passed through to the generate_lead event alongside
   * form_type. Never pass name/email/phone/message here. */
  service?: string;
  /** What to do once Web3Forms confirms success. "navigate" (default) records
   * a pending lead and goes to /thank-you, where generate_lead fires. "stay"
   * keeps the visitor on the current page (the quote modal shows its own
   * success screen): generate_lead fires here, once, and `status` becomes
   * "success". */
  onSuccess?: "navigate" | "stay";
}

/** Submits to Web3Forms' JSON API directly (instead of letting the browser
 * natively POST and follow Web3Forms' own redirect) so the actual response
 * can be inspected: generate_lead only fires once `result.success === true`
 * comes back, never on a validation error, a non-success response, a
 * network failure, or a timeout. The <form>'s native action/method/redirect
 * attributes are left in place in both callers as a no-JS fallback — this
 * hook's caller always calls preventDefault() when JS is running, so the
 * native path only ever matters if JS didn't load at all. */
export function useWeb3FormsSubmit({ formType, service, onSuccess = "navigate" }: UseWeb3FormsSubmitOptions) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  // Checked synchronously (not just via the `status` state, which wouldn't
  // have committed yet if a double-click fires two calls in the same tick)
  // so a second submit attempt while one is already in flight is a no-op.
  const inFlightRef = useRef(false);
  // In "stay" mode a confirmed success must not be submittable again (and
  // must not fire a second generate_lead) until the caller calls reset().
  const succeededRef = useRef(false);

  const submit = useCallback(
    async (payload: Record<string, unknown>) => {
      if (inFlightRef.current || succeededRef.current) return;
      inFlightRef.current = true;
      setStatus("submitting");
      setErrorMessage(null);

      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

      try {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        let result: { success?: boolean; message?: string } | null = null;
        try {
          result = await response.json();
        } catch {
          // Non-JSON body — falls through to the failure branch below.
        }

        if (response.ok && result?.success) {
          if (onSuccess === "stay") {
            succeededRef.current = true;
            trackLead({ form_type: formType, service });
            setStatus("success");
            return;
          }
          markPendingLead({ form_type: formType, service });
          navigate("/thank-you");
          return;
        }

        setStatus("error");
        setErrorMessage(result?.message || "We couldn't send your request. Please try again or call us directly.");
      } catch (err) {
        setStatus("error");
        setErrorMessage(
          err instanceof DOMException && err.name === "AbortError"
            ? "That took longer than expected. Please try again or call us directly."
            : "We couldn't reach the server. Check your connection and try again, or call us directly.",
        );
      } finally {
        window.clearTimeout(timeoutId);
        inFlightRef.current = false;
      }
    },
    [formType, service, onSuccess, navigate],
  );

  const reset = useCallback(() => {
    succeededRef.current = false;
    setStatus("idle");
    setErrorMessage(null);
  }, []);

  return { status, errorMessage, submit, reset, isSubmitting: status === "submitting" };
}
