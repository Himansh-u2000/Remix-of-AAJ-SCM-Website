/**
 * Single source of truth for the production canonical domain.
 * Every canonical URL, sitemap entry, og:url, twitter:url, JSON-LD @id
 * and redirect target is derived from this constant.
 *
 * Locked to https://www.aajscm.com per approved SEO architecture.
 * Do NOT hardcode this URL anywhere else in the codebase.
 */
export const siteConfig = {
  canonicalBase: "https://www.aajscm.com",
  defaultLocale: "en-IN",
  supportedLocales: ["en-IN"] as const,
  twitterHandle: "@aajscm",
} as const;

export type SiteConfig = typeof siteConfig;