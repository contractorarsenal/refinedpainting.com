// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// For every route in entry-server's getRoutes(), renders the real React
// tree to a string and writes a genuinely page-specific dist/<route>/index.html
// — not a copy of the generic shell, and not a post-hoc crawl/snapshot of a
// running browser. The homepage route overwrites dist/index.html itself.
//
// Adding a new blog post or service doesn't require touching this file:
// getRoutes() derives the list from the same data the rest of the site
// already uses (see entry-server.tsx).
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(projectRoot, "dist");
const templatePath = join(distDir, "index.html");
const SITE_URL = "https://refinedpainting.co";

const { render, getRoutes } = await import(join(projectRoot, "dist-ssr", "entry-server.js"));

const rawTemplate = await readFile(templatePath, "utf-8");

// These exist in the static template as fallbacks for anything that somehow
// renders without going through PageSEO. Every real route's SSR output
// hoists its own <title>/og:title/og:description/meta[description], so the
// static ones have to come out first — otherwise every prerendered page
// would ship two of each, which is invalid and actively bad for SEO
// (crawlers are left to guess which one is authoritative).
function stripStaticFallbackTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/, "")
    .replace(/<meta\s+property="og:title"[^>]*\/>\s*/, "")
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>\s*/, "");
}

function extractBetween(html, openTagRegex, closeTag) {
  const openMatch = html.match(openTagRegex);
  if (!openMatch) throw new Error(`Could not find opening tag matching ${openTagRegex}`);
  const start = openMatch.index + openMatch[0].length;
  const end = html.indexOf(closeTag, start);
  if (end === -1) throw new Error(`Could not find closing tag ${closeTag}`);
  return html.slice(start, end);
}

const baseTemplate = stripStaticFallbackTags(rawTemplate);

function outputPathFor(route) {
  if (route === "/") return join(distDir, "index.html");
  // "/services/interior-painting" -> dist/services/interior-painting/index.html
  return join(distDir, ...route.split("/").filter(Boolean), "index.html");
}

const routes = getRoutes();
const results = [];

for (const route of routes) {
  const rendered = render(route);

  const headInner = extractBetween(rendered, /<head[^>]*>/, "</head>");
  const bodyInner = extractBetween(rendered, /<body[^>]*>/, "</body>");
  // bodyInner is exactly `<div id="root">...app html...</div>` (see
  // entry-server.tsx's Document) — trim only the outer wrapper tags, not a
  // non-greedy middle match, so nested </div>s in the real content can't
  // truncate it early.
  const appInner = bodyInner.replace(/^<div id="root">/, "").replace(/<\/div>\s*$/, "");

  let page = baseTemplate.replace("</head>", `${headInner}</head>`);
  page = page.replace('<div id="root"></div>', `<div id="root">${appInner}</div>`);

  const outPath = outputPathFor(route);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, page, "utf-8");
  results.push({ route, outPath: outPath.replace(projectRoot + "/", ""), bytes: page.length });
}

console.log(`Prerendered ${results.length} routes:`);
for (const r of results) {
  console.log(`  ${r.route.padEnd(45)} -> ${r.outPath} (${r.bytes.toLocaleString()} bytes)`);
}

// Generated from the exact same route list every page above was rendered
// from, so a new blog post or service can't drift out of sync with the
// sitemap the way a hand-maintained public/sitemap.xml could (and had).
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${SITE_URL}${route === "/" ? "" : route}</loc></url>`),
  "</urlset>",
  "",
].join("\n");
await writeFile(join(distDir, "sitemap.xml"), sitemap, "utf-8");
console.log(`Wrote dist/sitemap.xml (${routes.length} URLs)`);
