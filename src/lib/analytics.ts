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
function trackEvent(eventName: string, params: object = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

const PENDING_LEAD_KEY = "rp_pending_lead";

interface PendingLead {
  form_type: "contact" | "quote";
  service?: string;
}

/** Called from inside each form's onSubmit, synchronously, right before the
 * native POST to Web3Forms is allowed through (never on a validation
 * failure, since those call preventDefault and return early before this
 * would run). This is the only place that writes this key.
 *
 * Deliberately NOT a URL query param: a query string is visitor-controlled
 * input — anyone can type /thank-you?form_type=contact into a browser and
 * that must never produce a conversion. sessionStorage written by this
 * exact function, from this exact tab, moments before a real submission, is
 * not something an outside visitor can forge by constructing a URL. */
export function markPendingLead(lead: PendingLead) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(PENDING_LEAD_KEY, JSON.stringify(lead));
  } catch {
    // sessionStorage unavailable (private browsing, etc) — generate_lead just won't fire for this submission.
  }
}

/** Called once on /thank-you mount. Fires generate_lead only if this exact
 * tab has a pending lead recorded by markPendingLead — i.e. only if this
 * session actually ran a form through to a successful native submission.
 * Immediately consumes (removes) the entry, so a refresh of /thank-you, or
 * revisiting a bookmarked/shared link to it, finds nothing pending and
 * correctly does not fire again. A manually constructed URL with made-up
 * query params has no way to create this sessionStorage entry, so it cannot
 * trigger a conversion either. */
export function consumePendingLead() {
  if (typeof window === "undefined") return;
  let pending: PendingLead | null = null;
  try {
    const raw = window.sessionStorage.getItem(PENDING_LEAD_KEY);
    if (raw) pending = JSON.parse(raw) as PendingLead;
    window.sessionStorage.removeItem(PENDING_LEAD_KEY);
  } catch {
    return;
  }
  if (!pending || (pending.form_type !== "contact" && pending.form_type !== "quote")) return;
  trackEvent("generate_lead", pending);
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
