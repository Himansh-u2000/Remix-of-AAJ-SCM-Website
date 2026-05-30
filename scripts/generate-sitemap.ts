/**
 * Generates public/sitemap.xml from the centralized SEO registry.
 * Runs via predev / prebuild scripts.
 *
 * Source of truth:
 *   - URLs       : src/seo/pageSeo/index.ts  (every static route)
 *   - Domain     : src/seo/siteConfig.ts     (https://www.aajscm.com)
 *   - Redirects  : src/seo/redirects.ts      (excluded from sitemap)
 *
 * Dynamic detail routes (/blog/:slug, /glossary/:term, /newsroom/:slug)
 * will be appended here once the CMS adapter exists.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { pageSeo, assertUniqueSeo } from "../src/seo/pageSeo";
import { buildCanonical } from "../src/seo/buildCanonical";
import { redirects } from "../src/seo/redirects";
import { listAllDynamicContent } from "../src/content/source";

const errors = assertUniqueSeo();
if (errors.length) {
  console.error("[sitemap] SEO registry has issues:");
  errors.forEach((e) => console.error("  - " + e));
  process.exit(1);
}

const redirectFroms = new Set(redirects.map((r) => r.from));
const today = new Date().toISOString().slice(0, 10);

const staticEntries = Object.entries(pageSeo)
  .filter(([path, cfg]) => {
    if (redirectFroms.has(path)) return false;
    // Default <Seo> robots is now "index, follow" (post go-live).
    // Exclude only pages explicitly marked noindex.
    if (cfg.robots && cfg.robots.startsWith("noindex")) return false;
    return true;
  })
  .map(([path]) => ({
    loc: buildCanonical(path),
    lastmod: today,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? "1.0" : path.split("/").length === 2 ? "0.8" : "0.6",
  }));

// Dynamic content (blog posts, glossary, news) is sourced from
// src/content/source.ts so today's local TS arrays and tomorrow's
// Supabase tables both flow into the sitemap with zero changes here.
// Warehouse city pages are already registered in pageSeo (also from
// the same content source) so they're picked up above — skip them here
// to avoid duplicate entries.
const dynamic = await listAllDynamicContent();
const dynamicEntries = dynamic
  .filter((d) => d.kind !== "warehouse")
  .filter((d) => {
    const robots = d.data.seo.robots;
    return !robots || !robots.startsWith("noindex");
  })
  .map((d) => ({
    loc: buildCanonical(d.route),
    lastmod:
      (d.data as { updatedAt?: string }).updatedAt ??
      (d.data as { publishedAt?: string }).publishedAt ??
      today,
    changefreq: "monthly",
    priority: "0.6",
  }));

const entries = [...staticEntries, ...dynamicEntries];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      "  <url>",
      `    <loc>${e.loc}</loc>`,
      `    <lastmod>${e.lastmod}</lastmod>`,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      "  </url>",
    ].join("\n"),
  ),
  `</urlset>`,
].join("\n");

const out = resolve("public/sitemap.xml");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, xml);
console.log(`[sitemap] wrote ${entries.length} entries -> ${out}`);