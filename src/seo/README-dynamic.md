# Dynamic SEO + content abstraction

## Files

```
src/content/
  types.ts          ContentSeo + Warehouse / BlogPost / GlossaryTerm / NewsItem
  source.ts         async list*/get* — swap to Supabase later, no call-site changes
  warehouses.ts     12 city entries (single source of truth)
  blog.ts           empty array — append posts to publish
  glossary.ts       empty array
  newsroom.ts       empty array

src/seo/
  pageSeo/index.ts        static route registry (existing)
  buildSeoFromContent.ts  maps ContentSeo → SeoProps
  useDynamicSeo.tsx       <DynamicSeo seo={...} /> wrapper
  Seo.tsx                 runtime react-helmet-async component (existing)
  buildHeadHtml.ts        build-time string head used by prerender (existing)
```

## ContentSeo contract

Every routable entity carries a `seo` block:

```ts
{
  title:           string  // 10–60 chars
  description:     string  // 50–160 chars
  canonicalPath?:  string  // default: the route path
  ogTitle?:        string
  ogDescription?:  string
  ogImage?:        string  // absolute or /-prefixed
  ogImageAlt?:     string
  ogType?:         "website" | "article" | "profile"
  twitterTitle?:   string
  twitterDescription?: string
  twitterImage?:   string
  robots?:         "index, follow" | "noindex, follow" | ...
}
```

The same shape feeds runtime `<Seo>`, build-time `buildHeadHtml`, and
sitemap generation. No duplication.

## Publishing a blog post (example)

1. Append an entry to `src/content/blog.ts`:

   ```ts
   {
     slug: "warehousing-trends-2026",
     publishedAt: "2026-01-15",
     heading: "Warehousing trends shaping Indian supply chains in 2026",
     excerpt: "Five operational shifts we are seeing this year...",
     body: "<p>...</p>",
     seo: {
       title: "Warehousing Trends Shaping Indian Supply Chains in 2026",
       description: "Five operational shifts AAJ SCM is seeing across India's warehousing and fulfilment networks this year.",
       ogType: "article",
     },
   }
   ```

2. `bun run build` — the post is automatically:
   - Prerendered to `dist/blog/<slug>/index.html` with correct meta + body
   - Added to `public/sitemap.xml`
   - Resolvable by `getBlogPost(slug)` in the runtime page

## Using SEO inside a route component

```tsx
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogPost } from "@/content/source";
import { DynamicSeo } from "@/seo/useDynamicSeo";
import { buildSeoFromBlogPost } from "@/seo/buildSeoFromContent";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getBlogPost(slug!),
    enabled: !!slug,
  });
  return (
    <>
      <DynamicSeo seo={post ? buildSeoFromBlogPost(post) : null} />
      {post ? <article>…</article> : <p>Not found</p>}
    </>
  );
}
```

## Future CMS migration

Replace the body of each `list*` / `get*` in `src/content/source.ts`
with a Supabase / Sanity / Contentful call. Nothing else changes.

## Hosting caveat (Lovable Hosting)

Lovable Hosting serves a SPA fallback for clean URLs without trailing
slashes. Prerendered HTML at `dist/blog/<slug>/index.html` is served
for `/blog/<slug>/`, but `/blog/<slug>` may receive the root SPA shell.
JS-executing crawlers (Googlebot) still get correct meta after
hydration; non-JS social crawlers (LinkedIn, Slack, X) only get
correct previews when the trailing-slash URL is shared. Migrating to
Cloudflare Pages / Netlify removes the caveat.