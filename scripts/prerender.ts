/**
 * Build-time prerender of route-specific <head> AND <body> markup.
 *
 * Runs as a `postbuild` hook AFTER `vite build` (client) AND
 * `vite build --ssr src/entry-server.tsx --outDir dist-ssr` (server).
 *
 * For every static route in `src/seo/pageSeo`, writes
 * `dist/<route>/index.html` containing:
 *
 * Each route HTML contains:
 *   - per-route <head> built from the registry via buildHeadHtml
 *   - sitewide Organization + WebSite JSON-LD inlined once per page
 *   - a real server-rendered React body injected into
 *     `<div id="root" data-prerendered-body="true">…</div>`
 *
 * Effect: non-JS crawlers (LinkedIn, Slack, Facebook, X, Bing) and
 * AI crawlers (ChatGPT, Claude, Perplexity, Google AI Overviews) see
 * the full page — title, meta, schema, headings, paragraphs, lists,
 * internal links — in the raw HTML response, with zero JS executed.
 *
 * Dynamic routes (/blog/:slug, /glossary/:term, /newsroom/:slug) are
 * NOT prerendered. The host's SPA fallback serves the bare
 * `dist/index.html` for those, which uses `createRoot` instead of
 * `hydrateRoot` (see src/main.tsx) — unchanged behavior.
 */

import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  statSync,
} from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { pageSeo, assertUniqueSeo } from "../src/seo/pageSeo";
import { buildHeadHtml } from "../src/seo/buildHeadHtml";
import { listAllDynamicContent } from "../src/content/source";
import {
  buildSeoFromBlogPost,
  buildSeoFromGlossaryTerm,
  buildSeoFromNewsItem,
} from "../src/seo/buildSeoFromContent";
import type { SeoProps } from "../src/seo/Seo";
import Beasties from "beasties";

const DIST = resolve("dist");
const SSR_DIST = resolve("dist-ssr");
const TEMPLATE_PATH = resolve(DIST, "index.html");
const SSR_ENTRY = resolve(SSR_DIST, "entry-server.js");
const MANIFEST_PATH = resolve(DIST, ".vite", "manifest.json");

// Per-route raw HTML budget. Warn over soft, fail over hard.
// Inlined critical CSS pushes per-route size up; budgets adjusted.
const SOFT_BUDGET_BYTES = 120 * 1024;
const HARD_BUDGET_BYTES = 320 * 1024;

function fail(msg: string): never {
  console.error(`[prerender] ${msg}`);
  process.exit(1);
}

if (!existsSync(TEMPLATE_PATH)) {
  fail(`dist/index.html not found — run \`vite build\` before this script.`);
}
if (!existsSync(SSR_ENTRY)) {
  fail(
    `dist-ssr/entry-server.js not found — run \`vite build --ssr src/entry-server.tsx --outDir dist-ssr\` before this script.`,
  );
}

/**
 * Map every route path → the client JS chunk Vite emitted for its
 * page module, so we can emit a `<link rel="modulepreload">` per
 * route. This shaves an RTT off hydration: the matched route's
 * chunk fetch starts in parallel with the main entry script,
 * instead of waiting for main.tsx to call its dynamic import.
 */
type ViteManifestEntry = { file: string; src?: string };
let manifest: Record<string, ViteManifestEntry> = {};
if (existsSync(MANIFEST_PATH)) {
  manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8")) as Record<
    string,
    ViteManifestEntry
  >;
}

const routeToPageModule: Record<string, string> = {
  "/": "src/pages/Home.tsx",
  "/services": "src/pages/services/Index.tsx",
  "/services/warehousing": "src/pages/services/Warehousing.tsx",
  "/services/b2b-warehousing": "src/pages/services/B2BWarehousing.tsx",
  "/services/b2c-warehousing": "src/pages/services/B2CWarehousing.tsx",
  "/services/ecommerce-fulfillment": "src/pages/services/EcommerceFulfillment.tsx",
  "/services/ecommerce-delivery": "src/pages/services/EcommerceDelivery.tsx",
  "/services/same-day-delivery": "src/pages/services/SameDayNextDayDelivery.tsx",
  "/services/transportation": "src/pages/services/Transportation.tsx",
  "/services/value-added": "src/pages/services/ValueAddedServices.tsx",
  "/services/returns-management": "src/pages/services/ReturnsManagement.tsx",
  "/warehouses": "src/pages/warehouses/Index.tsx",
  "/warehouses/delhi": "src/pages/warehouses/Delhi.tsx",
  "/warehouses/noida": "src/pages/warehouses/Noida.tsx",
  "/warehouses/gurgaon": "src/pages/warehouses/Gurgaon.tsx",
  "/warehouses/ghaziabad": "src/pages/warehouses/Ghaziabad.tsx",
  "/warehouses/kundli": "src/pages/warehouses/Kundli.tsx",
  "/warehouses/sonipat": "src/pages/warehouses/Sonipat.tsx",
  "/warehouses/rohtak": "src/pages/warehouses/Rohtak.tsx",
  "/warehouses/bangalore": "src/pages/warehouses/Bangalore.tsx",
  "/warehouses/bhiwandi": "src/pages/warehouses/Bhiwandi.tsx",
  "/warehouses/hyderabad": "src/pages/warehouses/Hyderabad.tsx",
  "/warehouses/chennai": "src/pages/warehouses/Chennai.tsx",
  "/warehouses/kolkata": "src/pages/warehouses/Kolkata.tsx",
  "/capabilities": "src/pages/capabilities/Index.tsx",
  "/capabilities/technology": "src/pages/capabilities/Technology.tsx",
  "/capabilities/technology/wms": "src/pages/capabilities/technology/WMS.tsx",
  "/capabilities/technology/tms": "src/pages/capabilities/technology/TMS.tsx",
  "/capabilities/operations": "src/pages/capabilities/Operations.tsx",
  "/sustainability": "src/pages/Sustainability.tsx",
  "/clients": "src/pages/Clients.tsx",
  "/blog": "src/pages/blog/Index.tsx",
  "/glossary": "src/pages/glossary/Index.tsx",
  "/newsroom": "src/pages/newsroom/Index.tsx",
  "/about-us": "src/pages/AboutUs.tsx",
  "/careers": "src/pages/Careers.tsx",
  "/contact-us": "src/pages/ContactUs.tsx",
};

function preloadTagForRoute(route: string): string {
  const src = routeToPageModule[route];
  if (!src) return "";
  const entry = manifest[src];
  if (!entry?.file) return "";
  return `    <link rel="modulepreload" crossorigin href="/${entry.file}" data-prerendered="true" />`;
}

/**
 * Find a Vite-hashed asset that matches a logical filename, e.g.
 * `hero-warehouse-640.avif` → `/assets/hero-warehouse-640-<hash>.avif`.
 * Returns null if the asset is not present in the manifest.
 */
function findHashedAsset(logicalName: string): string | null {
  // Direct match by source key first (Vite manifests imports under their src path).
  const direct = manifest[`src/assets/${logicalName}`];
  if (direct?.file) return `/${direct.file}`;
  // Fallback: scan emitted file names for a matching basename.
  for (const entry of Object.values(manifest)) {
    const file = entry.file;
    if (!file) continue;
    const base = file.split("/").pop() ?? file;
    const stripped = base.replace(/-[A-Za-z0-9_-]{6,}\.(?=[^.]+$)/, ".");
    if (stripped === logicalName) return `/${file}`;
  }
  return null;
}

/**
 * Per-route LCP image preload hints. Emits a <link rel="preload"
 * as="image" imagesrcset="…" imagesizes="…" fetchpriority="high">
 * so the browser preloader discovers the hero before JS parses.
 * Must match the route's <picture> srcset/sizes byte-for-byte to
 * avoid double-downloads.
 */
function lcpPreloadForRoute(route: string): string {
  if (route !== "/") return "";
  const a640 = findHashedAsset("hero-warehouse-640.avif");
  const a960 = findHashedAsset("hero-warehouse-960.avif");
  const a1280 = findHashedAsset("hero-warehouse-1280.avif");
  if (!a640 || !a960 || !a1280) return "";
  const srcset = `${a640} 640w, ${a960} 960w, ${a1280} 1280w`;
  return `    <link rel="preload" as="image" type="image/avif" imagesrcset="${srcset}" imagesizes="(min-width: 1024px) 42vw, 100vw" fetchpriority="high" data-prerendered="true" />`;
}

const errors = assertUniqueSeo();
if (errors.length) {
  fail(`SEO registry validation failed:\n  - ${errors.join("\n  - ")}`);
}

const template = readFileSync(TEMPLATE_PATH, "utf8");

const { render } = (await import(pathToFileURL(SSR_ENTRY).href)) as {
  render: (url: string) => { html: string };
};

/**
 * Replace everything between </meta charset> ... </head> with our
 * route-specific head, while preserving:
 *   - <meta charset>
 *   - <meta viewport>
 *   - any <link rel="icon"> / <link rel="modulepreload"> / asset
 *     <link rel="stylesheet"> tags Vite injected
 *   - any other <link> Vite injected for asset hints
 *
 * Strategy: keep every <link> tag Vite emitted, plus the two base
 * meta tags (charset, viewport), and replace everything else inside
 * <head> with our generated meta + schemas.
 */
function rewriteHead(html: string, headHtml: string): string {
  const headStart = html.indexOf("<head>");
  const headEnd = html.indexOf("</head>");
  if (headStart === -1 || headEnd === -1) {
    fail("template missing <head>...</head>");
  }

  const headInner = html.slice(headStart + "<head>".length, headEnd);

  // Preserve only Vite-emitted asset tags (anything <link ...> and
  // <script type="module" ...> that ended up in the head).
  const preserved: string[] = [];

  // Charset + viewport — required, always preserve first.
  preserved.push(`    <meta charset="UTF-8" />`);
  preserved.push(
    `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
  );

  // Preserve every <link> and any in-head <script type="module">
  // emitted by Vite (CSS, modulepreload, favicon hints, etc.).
  const linkRe = /<link\b[^>]*\/?>(?:<\/link>)?/gi;
  const scriptRe = /<script\b[^>]*?(?:\/>|>[\s\S]*?<\/script>)/gi;
  for (const m of headInner.match(linkRe) ?? []) preserved.push(`    ${m.trim()}`);
  for (const m of headInner.match(scriptRe) ?? []) preserved.push(`    ${m.trim()}`);

  const newHead = `<head>\n${preserved.join("\n")}\n\n${headHtml}\n  </head>`;
  return html.slice(0, headStart) + newHead + html.slice(headEnd + "</head>".length);
}

/**
 * Replace the empty `<div id="root"></div>` Vite emits with a
 * `<div id="root" data-prerendered-body="true">…rendered…</div>`.
 * src/main.tsx reads that attribute to decide hydrateRoot vs
 * createRoot.
 */
function injectBody(html: string, bodyHtml: string): string {
  const re = /<div id="root">\s*<\/div>/;
  if (!re.test(html)) {
    fail('template missing <div id="root"></div>');
  }
  return html.replace(
    re,
    `<div id="root" data-prerendered-body="true">${bodyHtml}</div>`,
  );
}

function outputPathFor(route: string): string {
  if (route === "/") return resolve(DIST, "index.html");
  // Strip leading slash; nested dirs get auto-created.
  return resolve(DIST, route.replace(/^\//, ""), "index.html");
}

let written = 0;
const skipped: string[] = [];
const oversize: Array<{ route: string; bytes: number }> = [];
const warned: Array<{ route: string; bytes: number }> = [];

/**
 * Beasties inlines above-the-fold CSS into <style> and rewrites the
 * external <link rel="stylesheet"> to load async (media="print" +
 * onload swap). This kills the ~650 ms render-blocking CSS request
 * on slow 4G mobile, the single biggest remaining FCP/SI win.
 */
const beasties = new Beasties({
  path: DIST,
  publicPath: "/",
  // 'media' rewrites <link> to media="print" then swaps to "all"
  // on load — the most compatible async-CSS pattern.
  preload: "media",
  // Inline critical fonts and small assets; prune unused rules.
  pruneSource: false,
  reduceInlineStyles: false,
  mergeStylesheets: true,
  inlineFonts: false,
  logLevel: "silent",
});

for (const [route, seo] of Object.entries(pageSeo)) {
  // Skip dynamic routes (anything containing :param or *).
  if (route.includes(":") || route.includes("*")) {
    skipped.push(route);
    continue;
  }

  const headHtml = buildHeadHtml(seo, route, { includeSitewideSchema: true });
  const preload = preloadTagForRoute(route);
  const lcp = lcpPreloadForRoute(route);
  const headWithPreload = [lcp, preload, headHtml].filter(Boolean).join("\n");
  let html = rewriteHead(template, headWithPreload);

  let bodyHtml = "";
  try {
    bodyHtml = render(route).html;
  } catch (err) {
    fail(
      `SSR render failed for ${route}: ${(err as Error).stack ?? String(err)}`,
    );
  }
  html = injectBody(html, bodyHtml);

  // Inline critical CSS *after* the body is injected so beasties can
  // see which selectors are actually used on this route.
  try {
    html = await beasties.process(html);
  } catch (err) {
    console.warn(
      `[prerender] beasties failed for ${route}: ${(err as Error).message}; serving uninlined CSS`,
    );
  }

  const outPath = outputPathFor(route);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
  written += 1;

  const bytes = statSync(outPath).size;
  if (bytes > HARD_BUDGET_BYTES) oversize.push({ route, bytes });
  else if (bytes > SOFT_BUDGET_BYTES) warned.push({ route, bytes });
}

// ---- Dynamic content routes (blog / glossary / news) ----
// Warehouses already flow through pageSeo above; we skip them here
// to avoid double-prerendering the same file.
const dynamic = await listAllDynamicContent();
for (const entry of dynamic) {
  if (entry.kind === "warehouse") continue;

  let seo: SeoProps;
  switch (entry.kind) {
    case "blog":
      seo = buildSeoFromBlogPost(entry.data);
      break;
    case "glossary":
      seo = buildSeoFromGlossaryTerm(entry.data);
      break;
    case "news":
      seo = buildSeoFromNewsItem(entry.data);
      break;
  }

  const headHtml = buildHeadHtml(seo, entry.route, {
    includeSitewideSchema: true,
  });
  let html = rewriteHead(template, headHtml);

  let bodyHtml = "";
  try {
    bodyHtml = render(entry.route).html;
  } catch (err) {
    fail(
      `SSR render failed for ${entry.route}: ${(err as Error).stack ?? String(err)}`,
    );
  }
  html = injectBody(html, bodyHtml);

  try {
    html = await beasties.process(html);
  } catch (err) {
    console.warn(
      `[prerender] beasties failed for ${entry.route}: ${(err as Error).message}; serving uninlined CSS`,
    );
  }

  const outPath = outputPathFor(entry.route);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
  written += 1;

  const bytes = statSync(outPath).size;
  if (bytes > HARD_BUDGET_BYTES) oversize.push({ route: entry.route, bytes });
  else if (bytes > SOFT_BUDGET_BYTES)
    warned.push({ route: entry.route, bytes });
}

for (const { route, bytes } of warned) {
  console.warn(
    `[prerender] warn: ${route} = ${(bytes / 1024).toFixed(1)} KB (> ${SOFT_BUDGET_BYTES / 1024} KB soft budget)`,
  );
}
if (oversize.length) {
  for (const { route, bytes } of oversize) {
    console.error(
      `[prerender] FAIL: ${route} = ${(bytes / 1024).toFixed(1)} KB (> 200 KB hard budget)`,
    );
  }
  process.exit(1);
}

console.log(
  `[prerender] wrote ${written} route HTML file(s) under dist/ with rendered <body>` +
    (skipped.length ? `; skipped dynamic routes: ${skipped.join(", ")}` : ""),
);