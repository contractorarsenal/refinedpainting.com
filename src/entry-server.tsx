import { renderToString } from "react-dom/server";
import { Document } from "./entry-server/Document";
import { getCategoriesWithPosts, blogPosts } from "./content/blog/posts";
import { serviceSlugs } from "./lib/content";

/** Renders the app for a single fixed URL. No browser APIs are touched —
 * every browser-only call in this codebase is effect/callback-gated, so a
 * plain synchronous render pass never reaches them. Used only by
 * scripts/prerender.mjs, never shipped to the browser. */
export function render(url: string): string {
  return renderToString(<Document url={url} />);
}

/** Every known, public, indexable route — derived from the same data the
 * site itself already uses (serviceSlugs, blogPosts, getCategoriesWithPosts)
 * rather than a separately maintained list, so a new blog post or service
 * just needs to exist in its real data source to also get prerendered and
 * added to the sitemap (see scripts/prerender.mjs). Deliberately excludes
 * /thank-you (never indexable, only ever reached via a real form
 * submission) and unpublished location pages (see content/locations). */
export function getRoutes(): string[] {
  const staticRoutes = ["/", "/services", "/projects", "/about", "/contact", "/faq", "/blog"];
  const serviceRoutes = Object.values(serviceSlugs).map((slug) => `/services/${slug}`);
  const blogPostRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const blogCategoryRoutes = getCategoriesWithPosts().map((slug) => `/blog/category/${slug}`);
  return [...staticRoutes, ...serviceRoutes, ...blogPostRoutes, ...blogCategoryRoutes];
}
