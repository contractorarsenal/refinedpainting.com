import { useEffect } from "react";
import { trackClickToCall } from "../../lib/analytics";

/** Tracks every click-to-call without instrumenting each "Call Now" button
 * individually: one delegated listener at the document root catches clicks
 * that bubble up through any tel: link, site-wide, including ones added
 * later without needing new tracking code. */
export function ConversionTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!link) return;
      trackClickToCall(link.getAttribute("href")?.replace(/^tel:/, "") ?? "");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
