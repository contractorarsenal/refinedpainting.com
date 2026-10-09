declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-TCE6S4DT0K";

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
