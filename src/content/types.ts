/**
 * Content + SEO type contracts.
 *
 * Every piece of routable content (warehouse city, blog post,
 * glossary term, news item) carries a `seo` block in the shape
 * `<Seo>` expects. The same shape is consumed by:
 *
 *  - runtime client renders (via `useDynamicSeo` + `<Seo>`)
 *  - build-time prerender (via `buildHeadHtml`)
 *  - sitemap generation (via `buildCanonical`)
 *
 * Adding a CMS later means swapping `src/content/source.ts` to fetch
 * from Supabase / Sanity / etc. — the SEO contract does not change.
 */

export interface ContentSeo {
  /** 10–60 chars. */
  title: string;
  /** 50–160 chars. */
  description: string;
  /** Defaults to the route path. */
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Absolute URL or /-prefixed path; falls back to brand default. */
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: "website" | "article" | "profile";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?:
    | "index, follow"
    | "noindex, follow"
    | "noindex, nofollow"
    | "index, nofollow";
}

/** A warehouse city page (/warehouses/<slug>). */
export interface Warehouse {
  slug: string;
  city: string;
  /** Two-letter Indian state code, e.g. "DL", "HR", "KA". */
  region?: string;
  /** Optional copy fields surfaced on the page. */
  intro?: string;
  highlights?: string[];
  seo: ContentSeo;
}

/** A long-form blog post (/blog/<slug>). */
export interface BlogPost {
  slug: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  /** Heading shown on the page (may differ from seo.title). */
  heading: string;
  /** Plain-text excerpt for cards / fallback meta. */
  excerpt: string;
  /** Rich body. HTML or markdown — owners decide. */
  body?: string;
  seo: ContentSeo;
}

/** A glossary entry (/glossary/<term>). */
export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  seo: ContentSeo;
}

/** A press / newsroom item (/newsroom/<slug>). */
export interface NewsItem {
  slug: string;
  publishedAt: string;
  heading: string;
  excerpt: string;
  body?: string;
  seo: ContentSeo;
}

/** Discriminated union for prerender/sitemap iteration. */
export type DynamicContent =
  | { kind: "warehouse"; route: string; data: Warehouse }
  | { kind: "blog"; route: string; data: BlogPost }
  | { kind: "glossary"; route: string; data: GlossaryTerm }
  | { kind: "news"; route: string; data: NewsItem };