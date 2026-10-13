import defaultOgImage from "../../assets/images/home-hero-poster.webp";
import { SITE_URL } from "../../lib/content";

// Used whenever a page has no image of its own to share (About's team photo
// slot, Contact, FAQ, Thank You, 404).
const DEFAULT_OG_IMAGE = `${SITE_URL}${defaultOgImage}`;

interface PageSEOProps {
  title: string;
  description: string;
  /** Absolute canonical URL for this page. */
  canonical: string;
  /** Absolute URL to an Open Graph preview image. Falls back to a sitewide default when omitted. */
  image?: string;
  /** Set true for pages that should never appear in search results (e.g. /thank-you). Defaults to indexable. */
  noindex?: boolean;
  /** JSON-LD objects to inject as separate <script type="application/ld+json"> tags. */
  schema?: object[];
}

/** Renders <title>/<meta>/<link>/<script> tags directly as plain JSX, placed
 * wherever this component sits in the tree. React 19 natively hoists these
 * into the document's real <head> — on the client (including on every SPA
 * route change, with automatic removal of the previous page's tags) and
 * during server rendering with renderToString, as long as the tree being
 * rendered has a real <head> ancestor (see entry-server.tsx). This replaced
 * a hand-rolled DOM-mutating useEffect hook, which never ran during
 * prerendering (effects don't execute in renderToString) and would have
 * left every prerendered page with empty metadata. */
export function PageSEO({ title, description, canonical, image, noindex = false, schema }: PageSEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image ?? DEFAULT_OG_IMAGE} />
      {(schema ?? []).map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </>
  );
}
