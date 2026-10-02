import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the route's content render first, then scroll to the anchor.
      const id = hash.slice(1);
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
