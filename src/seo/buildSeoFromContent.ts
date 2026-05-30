import type { SeoProps } from "./Seo";
import type {
  BlogPost,
  ContentSeo,
  GlossaryTerm,
  NewsItem,
  Warehouse,
} from "@/content/types";
import { localBusinessSchema } from "./schema";

/**
 * Map the universal `ContentSeo` block to the runtime `SeoProps` shape.
 * One mapper per content kind so each can layer in route-aware schemas.
 */
function toSeoProps(
  seo: ContentSeo,
  canonicalPath: string,
  extras: Partial<SeoProps> = {},
): SeoProps {
  return {
    title: seo.title,
    description: seo.description,
    canonicalPath: seo.canonicalPath ?? canonicalPath,
    ogTitle: seo.ogTitle,
    ogDescription: seo.ogDescription,
    ogImage: seo.ogImage,
    ogImageAlt: seo.ogImageAlt,
    ogType: seo.ogType,
    twitterTitle: seo.twitterTitle,
    twitterDescription: seo.twitterDescription,
    twitterImage: seo.twitterImage,
    robots: seo.robots,
    ...extras,
  };
}

/** Warehouse city page → SeoProps (with LocalBusiness JSON-LD). */
export function buildSeoFromWarehouse(w: Warehouse): SeoProps {
  const path = `/warehouses/${w.slug}`;
  return toSeoProps(w.seo, path, {
    schemas: [
      localBusinessSchema({
        name: `AAJ SCM — ${w.city} Warehouse`,
        path,
        city: w.city,
        region: w.region,
      }),
    ],
  });
}

/** Blog post → SeoProps with og:type=article. */
export function buildSeoFromBlogPost(p: BlogPost): SeoProps {
  return toSeoProps(p.seo, `/blog/${p.slug}`, {
    ogType: p.seo.ogType ?? "article",
  });
}

/** Glossary term → SeoProps. */
export function buildSeoFromGlossaryTerm(g: GlossaryTerm): SeoProps {
  return toSeoProps(g.seo, `/glossary/${g.slug}`);
}

/** News item → SeoProps with og:type=article. */
export function buildSeoFromNewsItem(n: NewsItem): SeoProps {
  return toSeoProps(n.seo, `/newsroom/${n.slug}`, {
    ogType: n.seo.ogType ?? "article",
  });
}