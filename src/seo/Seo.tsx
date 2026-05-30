import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { brand } from "./brand";
import { buildCanonical } from "./buildCanonical";
import { siteConfig } from "./siteConfig";
import { resolveBreadcrumbs, type Crumb } from "./breadcrumbs";
import { breadcrumbSchemaForPath, faqSchema, type FaqItem } from "./schema";
import { resolveAutoSchemas } from "./schemaResolver";
import { getFaqsForRoute } from "./pageFaqs";

export type RobotsDirective =
  | "index, follow"
  | "noindex, follow"
  | "noindex, nofollow"
  | "index, nofollow";

export interface SeoProps {
  /** 10-60 chars. Required. */
  title: string;
  /** 50-160 chars. Required. */
  description: string;
  /** Override the canonical (defaults to current pathname). */
  canonicalPath?: string;
  /** Absolute URL or path to OG image. Defaults to brand fallback. */
  ogImage?: string;
  /** og:type. Defaults to "website". */
  ogType?: "website" | "article" | "profile";
  /** Defaults to "index, follow". */
  robots?: RobotsDirective;
  /** twitter:card. Defaults to summary_large_image. */
  twitterCard?: "summary" | "summary_large_image";
  /** Per-page JSON-LD blocks. */
  schemas?: Array<Record<string, unknown>>;
  /** Optional locale alternates (future i18n). */
  alternates?: Array<{ hrefLang: string; path: string }>;
  /** Distinct OG title (defaults to title). */
  ogTitle?: string;
  /** Distinct OG description (defaults to description). */
  ogDescription?: string;
  /** OG image alt text. Defaults to brand fallback alt. */
  ogImageAlt?: string;
  /** Distinct Twitter title (defaults to ogTitle or title). */
  twitterTitle?: string;
  /** Distinct Twitter description (defaults to ogDescription or description). */
  twitterDescription?: string;
  /** Distinct Twitter image (defaults to ogImage / brand fallback). */
  twitterImage?: string;
  /** FAQ items — emits FAQPage schema. Pass `false` to suppress auto-FAQ for this route. */
  faqs?: FaqItem[] | false;
  /** Breadcrumb override. `false` disables auto-breadcrumb; array replaces it. */
  breadcrumbs?: Crumb[] | false;
  /** Disable the auto schema resolver for this page (defaults to enabled). */
  disableAutoSchemas?: boolean;
  /** Used to label dynamic-route leaves in auto-breadcrumbs. */
  breadcrumbLeafLabel?: string;
}

function resolveOg(image?: string): string {
  if (!image) return brand.defaultOgImage;
  if (image.startsWith("http")) return image;
  return `${siteConfig.canonicalBase}${image.startsWith("/") ? image : `/${image}`}`;
}

export const Seo = ({
  title,
  description,
  canonicalPath,
  ogImage,
  ogType = "website",
  robots = "index, follow",
  twitterCard = "summary_large_image",
  schemas,
  alternates,
  ogTitle,
  ogDescription,
  ogImageAlt,
  twitterTitle,
  twitterDescription,
  twitterImage,
  faqs,
  breadcrumbs,
  disableAutoSchemas,
  breadcrumbLeafLabel,
}: SeoProps) => {
  const { pathname } = useLocation();
  const canonical = buildCanonical(canonicalPath ?? pathname);
  const image = resolveOg(ogImage);
  const twImage = twitterImage ? resolveOg(twitterImage) : image;
  const imageAlt = ogImageAlt ?? brand.defaultOgImageAlt;

  const finalOgTitle = ogTitle ?? title;
  const finalOgDescription = ogDescription ?? description;
  const finalTwTitle = twitterTitle ?? finalOgTitle;
  const finalTwDescription = twitterDescription ?? finalOgDescription;

  // ---- Auto schema stack ----
  const allSchemas: Array<Record<string, unknown>> = [];

  // 1. Auto-breadcrumb (unless disabled or overridden)
  if (breadcrumbs !== false) {
    const crumbs =
      Array.isArray(breadcrumbs) && breadcrumbs.length > 0
        ? breadcrumbs
        : resolveBreadcrumbs(pathname, breadcrumbLeafLabel ?? title);
    if (crumbs.length > 1) {
      allSchemas.push(breadcrumbSchemaForPath(pathname, crumbs));
    }
  }

  // 2. Route-pattern auto schemas
  if (!disableAutoSchemas) {
    allSchemas.push(
      ...resolveAutoSchemas(pathname, { title, description }),
    );
  }

  // 3. Explicit page schemas (overrides / extras)
  if (schemas?.length) allSchemas.push(...schemas);

  // 4. FAQ schema (explicit prop wins, else registry)
  const resolvedFaqs =
    faqs === false ? undefined : faqs ?? getFaqsForRoute(pathname);
  if (resolvedFaqs?.length) {
    allSchemas.push(faqSchema(resolvedFaqs));
  }

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:locale" content={siteConfig.defaultLocale.replace("-", "_")} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTwTitle} />
      <meta name="twitter:description" content={finalTwDescription} />
      <meta name="twitter:image" content={twImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
      {siteConfig.twitterHandle && (
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
      )}

      {alternates?.map((a) => (
        <link
          key={a.hrefLang}
          rel="alternate"
          hrefLang={a.hrefLang}
          href={buildCanonical(a.path)}
        />
      ))}

      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;