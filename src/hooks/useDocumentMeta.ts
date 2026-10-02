import { useEffect } from "react";

/** Sets the document title and meta description for the current route. No SSR, so this only takes effect after hydration — index.html's static tags serve as the pre-JS fallback. */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [title, description]);
}
