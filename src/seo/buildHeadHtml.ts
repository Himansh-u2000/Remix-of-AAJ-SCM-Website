import { brand } from "./brand";
import { resolveBreadcrumbs } from "./breadcrumbs";
import { buildCanonical } from "./buildCanonical";
import { getFaqsForRoute } from "./pageFaqs";
import {
  breadcrumbSchemaForPath,
  faqSchema,
  organizationSchema,
  websiteSchema,
} from "./schema";
import { resolveAutoSchemas } from "./schemaResolver";
import { siteConfig } from "./siteConfig";
import type { SeoProps } from "./Seo";

/**
 * Pure HTML-string builder for a route's <head> contents.
 *
 * Used by the build-time prerender script (`scripts/prerender.ts`)
 * to write per-route `<head>` markup into `dist/<route>/index.html`
 * BEFORE the SPA hydrates. This guarantees that non-JS crawlers and
 * social scrapers (LinkedIn, Slack, Facebook, X, Bing, ChatGPT,
 * Claude, Perplexity) see route-specific:
 *   - <title>
 *   - <meta name="description">
 *   - <link rel="canonical">
 *   - <meta property="og:*">
 *   - <meta name="twitter:*">
 *   - JSON-LD blocks (page schemas + sitewide Organization + WebSite)
 *
 * Reads its inputs from the SAME registry (`src/seo/pageSeo`) and the
 * SAME helpers (`buildCanonical`, `brand`, `siteConfig`,
 * `schema/*`) that `<Seo>` uses at runtime. Output is identical to
 * what react-helmet-async injects after hydration, so there is no
 * duplicate metadata once Helmet's deduper runs (it matches on
 * `name`/`property`).
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeJsonLd(s: string): string {
  // Prevent </script> injection inside JSON-LD blocks.
  return s.replace(/</g, "\\u003c");
}

function resolveOg(image?: string): string {
  if (!image) return brand.defaultOgImage;
  if (image.startsWith("http")) return image;
  return `${siteConfig.canonicalBase}${image.startsWith("/") ? image : `/${image}`}`;
}

export interface BuildHeadOptions {
  /**
   * If true, emit the sitewide Organization + WebSite JSON-LD blocks
   * inline alongside the per-page schemas. The runtime SeoProvider
   * does this client-side; the prerender does it server-side.
   */
  includeSitewideSchema?: boolean;
}

/**
 * Build the route-specific head HTML fragment.
 *
 * Returns a string of `<title>`, `<meta>`, `<link>`, and
 * `<script type="application/ld+json">` tags — no surrounding
 * `<head>`. The prerender script splices this into the Vite-built
 * `index.html`, replacing the sitewide fallback head.
 */
export function buildHeadHtml(
  seo: SeoProps,
  pathname: string,
  opts: BuildHeadOptions = {},
): string {
  const canonical = buildCanonical(seo.canonicalPath ?? pathname);
  const image = resolveOg(seo.ogImage);
  const ogType = seo.ogType ?? "website";
  const robots = seo.robots ?? "noindex, nofollow";
  const twitterCard = seo.twitterCard ?? "summary_large_image";
  const locale = siteConfig.defaultLocale.replace("-", "_");
  const finalOgTitle = seo.ogTitle ?? seo.title;
  const finalOgDescription = seo.ogDescription ?? seo.description;
  const finalTwitterTitle = seo.twitterTitle ?? finalOgTitle;
  const finalTwitterDescription = seo.twitterDescription ?? finalOgDescription;
  const twitterImage = seo.twitterImage ? resolveOg(seo.twitterImage) : image;
  const imageAlt = seo.ogImageAlt ?? brand.defaultOgImageAlt;

  const lines: string[] = [
    `    <title>${escapeHtml(seo.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(seo.description)}" data-prerendered="true" />`,
    `    <meta name="robots" content="${escapeHtml(robots)}" data-prerendered="true" />`,
    `    <link rel="canonical" href="${escapeHtml(canonical)}" data-prerendered="true" />`,
    ``,
    `    <meta property="og:type" content="${escapeHtml(ogType)}" data-prerendered="true" />`,
    `    <meta property="og:title" content="${escapeHtml(finalOgTitle)}" data-prerendered="true" />`,
    `    <meta property="og:description" content="${escapeHtml(finalOgDescription)}" data-prerendered="true" />`,
    `    <meta property="og:url" content="${escapeHtml(canonical)}" data-prerendered="true" />`,
    `    <meta property="og:image" content="${escapeHtml(image)}" data-prerendered="true" />`,
    `    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}" data-prerendered="true" />`,
    `    <meta property="og:site_name" content="${escapeHtml(brand.name)}" data-prerendered="true" />`,
    `    <meta property="og:locale" content="${escapeHtml(locale)}" data-prerendered="true" />`,
    ``,
    `    <meta name="twitter:card" content="${escapeHtml(twitterCard)}" data-prerendered="true" />`,
    `    <meta name="twitter:title" content="${escapeHtml(finalTwitterTitle)}" data-prerendered="true" />`,
    `    <meta name="twitter:description" content="${escapeHtml(finalTwitterDescription)}" data-prerendered="true" />`,
    `    <meta name="twitter:image" content="${escapeHtml(twitterImage)}" data-prerendered="true" />`,
    `    <meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" data-prerendered="true" />`,
  ];

  if (siteConfig.twitterHandle) {
    lines.push(
      `    <meta name="twitter:site" content="${escapeHtml(siteConfig.twitterHandle)}" data-prerendered="true" />`,
    );
  }

  if (seo.alternates?.length) {
    lines.push(``);
    for (const a of seo.alternates) {
      lines.push(
        `    <link rel="alternate" hreflang="${escapeHtml(a.hrefLang)}" href="${escapeHtml(buildCanonical(a.path))}" data-prerendered="true" />`,
      );
    }
  }

  const schemas: Array<Record<string, unknown>> = [];
  if (opts.includeSitewideSchema) {
    schemas.push(organizationSchema(), websiteSchema());
  }

  if (seo.breadcrumbs !== false) {
    const crumbs =
      Array.isArray(seo.breadcrumbs) && seo.breadcrumbs.length > 0
        ? seo.breadcrumbs
        : resolveBreadcrumbs(pathname, seo.breadcrumbLeafLabel ?? seo.title);
    if (crumbs.length > 1) {
      schemas.push(breadcrumbSchemaForPath(pathname, crumbs));
    }
  }

  if (!seo.disableAutoSchemas) {
    schemas.push(
      ...resolveAutoSchemas(pathname, {
        title: seo.title,
        description: seo.description,
      }),
    );
  }

  if (seo.schemas?.length) schemas.push(...seo.schemas);

  const resolvedFaqs =
    seo.faqs === false ? undefined : seo.faqs ?? getFaqsForRoute(pathname);
  if (resolvedFaqs?.length) {
    schemas.push(faqSchema(resolvedFaqs));
  }

  if (schemas.length) {
    lines.push(``);
    for (const s of schemas) {
      lines.push(
        `    <script type="application/ld+json" data-prerendered="true">${escapeJsonLd(JSON.stringify(s))}</script>`,
      );
    }
  }

  return lines.join("\n");
}
