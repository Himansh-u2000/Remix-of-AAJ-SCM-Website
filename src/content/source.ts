/**
 * The single content I/O boundary.
 *
 * Every page and every build script that needs page data calls one of
 * these functions. They return Promises today (even though the data is
 * local) so that swapping the implementation to Supabase / a CMS later
 * does not change any call site.
 *
 * Future swap looks like:
 *   export async function listWarehouses() {
 *     const { data, error } = await supabase.from("warehouses").select("*");
 *     if (error) throw error;
 *     return data.map(toWarehouse);
 *   }
 *
 * Nothing in `src/pages/**`, `scripts/prerender.ts`, or
 * `scripts/generate-sitemap.ts` needs to change.
 */

import { warehouses } from "./warehouses";
import { blogPosts } from "./blog";
import { glossaryTerms } from "./glossary";
import { newsItems } from "./newsroom";
import type {
  BlogPost,
  DynamicContent,
  GlossaryTerm,
  NewsItem,
  Warehouse,
} from "./types";

// ---- Warehouses ----
export async function listWarehouses(): Promise<Warehouse[]> {
  return warehouses;
}
export async function getWarehouse(slug: string): Promise<Warehouse | null> {
  return warehouses.find((w) => w.slug === slug) ?? null;
}

// ---- Blog ----
export async function listBlogPosts(): Promise<BlogPost[]> {
  return blogPosts;
}
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

// ---- Glossary ----
export async function listGlossaryTerms(): Promise<GlossaryTerm[]> {
  return glossaryTerms;
}
export async function getGlossaryTerm(
  slug: string,
): Promise<GlossaryTerm | null> {
  return glossaryTerms.find((g) => g.slug === slug) ?? null;
}

// ---- Newsroom ----
export async function listNewsItems(): Promise<NewsItem[]> {
  return newsItems;
}
export async function getNewsItem(slug: string): Promise<NewsItem | null> {
  return newsItems.find((n) => n.slug === slug) ?? null;
}

/**
 * Aggregate every routable dynamic content entry. Used by:
 *  - `scripts/prerender.ts` to write per-entry `<route>/index.html`
 *  - `scripts/generate-sitemap.ts` to add per-entry `<url>` rows
 *
 * Add a new content kind in three steps: define the type in
 * `types.ts`, expose `list*` here, then append to this aggregator.
 */
export async function listAllDynamicContent(): Promise<DynamicContent[]> {
  const [ws, posts, terms, news] = await Promise.all([
    listWarehouses(),
    listBlogPosts(),
    listGlossaryTerms(),
    listNewsItems(),
  ]);
  return [
    ...ws.map<DynamicContent>((data) => ({
      kind: "warehouse",
      route: `/warehouses/${data.slug}`,
      data,
    })),
    ...posts.map<DynamicContent>((data) => ({
      kind: "blog",
      route: `/blog/${data.slug}`,
      data,
    })),
    ...terms.map<DynamicContent>((data) => ({
      kind: "glossary",
      route: `/glossary/${data.slug}`,
      data,
    })),
    ...news.map<DynamicContent>((data) => ({
      kind: "news",
      route: `/newsroom/${data.slug}`,
      data,
    })),
  ];
}