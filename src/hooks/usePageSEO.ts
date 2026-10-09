import { useEffect } from "react";

interface PageSEOOptions {
  title: string;
  description: string;
  /** Absolute canonical URL for this page. */
  canonical: string;
  /** JSON-LD objects to inject as separate <script type="application/ld+json"> tags. */
  schema?: object[];
}

function setMeta(selector: string, create: () => HTMLElement, content: string) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Like useDocumentMeta, but adds canonical + Open Graph tags and optional
 * JSON-LD schema — used by blog pages only, so it can't affect the rest of
 * the site. Everything it creates is tagged data-seo-managed so it's cleanly
 * removed/replaced on route change instead of accumulating across pages. */
export function usePageSEO({ title, description, canonical, schema }: PageSEOOptions) {
  useEffect(() => {
    document.title = title;

    setMeta(
      'meta[name="description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        return m;
      },
      description,
    );

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    setMeta(
      'meta[property="og:title"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:title");
        return m;
      },
      title,
    );
    setMeta(
      'meta[property="og:description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:description");
        return m;
      },
      description,
    );
    setMeta(
      'meta[property="og:url"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:url");
        return m;
      },
      canonical,
    );

    const schemaNodes: HTMLScriptElement[] = [];
    (schema ?? []).forEach((obj) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-managed", "true");
      script.textContent = JSON.stringify(obj);
      document.head.appendChild(script);
      schemaNodes.push(script);
    });

    return () => {
      schemaNodes.forEach((node) => node.remove());
    };
  }, [title, description, canonical, schema]);
}
