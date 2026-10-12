declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

// These must also be kept in sync with the literal values in index.html's
// <head> (the Google tag and Clarity snippets both have to run before any
// bundled JS executes, so they can't import these constants directly).
export const GA_MEASUREMENT_ID = "G-X3HQQ4CQDB";
export const CLARITY_PROJECT_ID = "ywohcflaev";

/** Sends a GA4 page_view for a client-side route change. The base gtag.js
 * snippet in index.html already fires the first page_view on initial script
 * load, so this is only for SPA navigations after that (see
 * RouteAnalytics.tsx, which skips the first pathname it sees). */
export function trackPageview(path: string, title: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: title,
  });
}

/** Generic GA4 custom-event sender. Every conversion-tracking call below
 * goes through this so there's one place that guards against gtag not being
 * ready yet (ad blockers, slow script load, etc). */
function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

const LEAD_NONCE_KEY = "rp_last_lead_nonce";

/** Fired once per confirmed Web3Forms redirect to /thank-you — never on
 * form validation errors or failed submissions, since those never reach
 * /thank-you in the first place (see ContactForm.tsx / QuoteModal.tsx, both
 * native-POST forms with no client-side success faking).
 *
 * `nonce` is the `lead=` timestamp each form stamps onto its own redirect
 * URL at submit time. Refreshing /thank-you re-mounts the page with the same
 * nonce still in the URL, so this skips firing again for that nonce — a
 * genuinely new submission later in the session gets a fresh nonce and
 * tracks normally. */
export function trackGenerateLead(params: { form_type: "contact" | "quote"; service?: string; nonce: string | null }) {
  if (!params.nonce) return;
  if (typeof window !== "undefined") {
    try {
      if (window.sessionStorage.getItem(LEAD_NONCE_KEY) === params.nonce) return;
      window.sessionStorage.setItem(LEAD_NONCE_KEY, params.nonce);
    } catch {
      // sessionStorage unavailable (private browsing, etc) — fall through and track anyway.
    }
  }
  const { nonce: _nonce, ...eventParams } = params;
  trackEvent("generate_lead", eventParams);
}

/** Fired from the single openQuoteModal() chokepoint in QuoteModalContext,
 * so every "Free Estimate" CTA and every quote-modal open are the same
 * underlying action here — in this codebase there is no path that opens the
 * modal without a CTA click, and no CTA click that doesn't open it, so a
 * second, separately-named event would just double-count the same action. */
export function trackQuoteModalOpen(params: { preset_service?: string | null; page_path: string }) {
  trackEvent("quote_modal_open", params);
}

/** Fired via event delegation (see ConversionTracking.tsx) on any click
 * through a tel: link, covering every "Call Now" button site-wide without
 * having to instrument each one individually. */
export function trackClickToCall(phoneNumber: string) {
  trackEvent("click_to_call", { phone_number: phoneNumber });
}
