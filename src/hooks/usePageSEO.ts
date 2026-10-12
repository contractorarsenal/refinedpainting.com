import { useEffect } from "react";
import defaultOgImage from "../assets/images/home-hero-poster.webp";
import { SITE_URL } from "../lib/content";

// Used whenever a page has no image of its own to share (About's team photo
// slot, Contact, FAQ, Thank You, 404). Prevents pages from either showing no
// preview image at all or carrying over a stale one from whatever page was
// visited previously — see the og:image handling below.
const DEFAULT_OG_IMAGE = `${SITE_URL}${defaultOgImage}`;

interface PageSEOOptions {
  title: string;
  description: string;
  /** Absolute canonical URL for this page. */
  canonical: string;
  /** Absolute URL to an Open Graph preview image. Omitted when no appropriate image exists for the page. */
  image?: string;
  /** Set true for pages that should never appear in search results (e.g. /thank-you). Defaults to indexable. */
  noindex?: boolean;
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

function metaByName(name: string) {
  return () => {
    const m = document.createElement("meta");
    m.setAttribute("name", name);
    return m;
  };
}

function metaByProperty(property: string) {
  return () => {
    const m = document.createElement("meta");
    m.setAttribute("property", property);
    return m;
  };
}

/** Sets the document title/description plus canonical, Open Graph, robots
 * indexing directives, and optional JSON-LD schema. Used on every page —
 * every tag it manages is unconditionally set on every call, in
 * either direction (indexable vs noindex, with vs without an image), so
 * navigating between pages never leaves a stale tag from the previous one. */
export function usePageSEO({ title, description, canonical, image, noindex = false, schema }: PageSEOOptions) {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', metaByName("description"), description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    setMeta('meta[name="robots"]', metaByName("robots"), noindex ? "noindex, follow" : "index, follow");

    setMeta('meta[property="og:title"]', metaByProperty("og:title"), title);
    setMeta('meta[property="og:description"]', metaByProperty("og:description"), description);
    setMeta('meta[property="og:url"]', metaByProperty("og:url"), canonical);

    setMeta('meta[property="og:image"]', metaByProperty("og:image"), image ?? DEFAULT_OG_IMAGE);

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
  }, [title, description, canonical, image, noindex, schema]);
}
