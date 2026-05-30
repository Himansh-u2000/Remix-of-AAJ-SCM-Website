import type { BlogPost } from "./types";

/**
 * Blog posts source.
 *
 * Start empty so no broken /blog/<slug> URLs ship. Each entry added
 * here will be:
 *  - Prerendered to `dist/blog/<slug>/index.html` at build
 *  - Added to `public/sitemap.xml`
 *  - Resolvable by `getBlogPost(slug)` in the runtime page
 *
 * Example shape:
 *
 *   {
 *     slug: "warehousing-trends-2026",
 *     publishedAt: "2026-01-15",
 *     heading: "Warehousing trends shaping Indian supply chains in 2026",
 *     excerpt: "Five operational shifts AAJ SCM is seeing across...",
 *     body: "<p>...</p>",
 *     seo: {
 *       title: "Warehousing Trends Shaping Indian Supply Chains in 2026",
 *       description: "Five operational shifts AAJ SCM is seeing across India's warehousing and fulfilment networks this year.",
 *       ogType: "article",
 *     },
 *   }
 */
export const blogPosts: BlogPost[] = [];