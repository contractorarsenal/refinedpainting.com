import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageview } from "../../lib/analytics";

/** Fires a GA4 page_view on real client-side route changes only.
 *
 * The base gtag.js snippet (index.html) already sends one page_view when it
 * first loads, so the pathname this effect sees on mount is that same
 * initial view — tracking it again would double-count it. The `first` ref
 * skips that one and only reports actual pathname changes after it,
 * matching how ScrollToTop treats navigation. Keying off `pathname` alone
 * (not `hash`) means in-page anchor jumps don't fire extra events, and
 * React StrictMode's double-invoke in dev is harmless here since the second
 * run sees the same pathname as `lastPath` and is skipped. */
export function RouteAnalytics() {
  const { pathname } = useLocation();
  const first = useRef(true);
  const lastPath = useRef(pathname);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      lastPath.current = pathname;
      return;
    }
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    // Deferred one tick: this effect (a sibling of <Routes>) commits before
    // the new page's own useDocumentMeta effect sets document.title, so
    // reading it synchronously here would report the previous page's title.
    const id = window.setTimeout(() => trackPageview(pathname, document.title), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
