
# SEO Architecture Audit & Implementation Plan

## 1. Current Architecture Assessment

This project is NOT a typical CSR-only Vite app. It already has a sophisticated SEO pipeline:

- **`src/entry-server.tsx`** — real SSR entry using `renderToString`, `StaticRouter`, `HelmetProvider`, `QueryClientProvider`. Builds via `vite build --ssr`.
- **`scripts/prerender.ts`** — postbuild script that renders every static route in `src/seo/pageSeo` to `dist/<route>/index.html` with:
  - Per-route `<head>` (title, description, canonical, OG, Twitter, JSON-LD) built deterministically from a registry via `src/seo/buildHeadHtml.ts`.
  - Real server-rendered React body (not just meta tags).
  - Critical CSS inlining via Beasties.
  - Route-specific modulepreload + LCP image preloads.
- **`src/seo/Seo.tsx`** — runtime Helmet-based component that mirrors the registry for the client (so hydrated nav between routes keeps tags correct).
- **`src/seo/pageSeo/index.ts`** — central registry: title / description / OG / Twitter / robots / schemas per route, with uniqueness assertions.
- **`scripts/generate-sitemap.ts`** + `public/sitemap.xml` — sitemap generated pre-build/dev.
- 38 static routes are prerendered. Dynamic routes (`/blog/:slug`, `/glossary/:term`, `/newsroom/:slug`) currently fall back to the SPA shell.

**Verdict: this is already Option B (SSG) executed correctly. SEO meta in the initial HTML response is already solved for every static route.**

## 2. Lovable Hosting Limitations (the real blocker)

True request-time SSR is **not** supported on Lovable Hosting — it is a static CDN with SPA fallback. Concretely:

- No Node server runtime at request time → no per-request `renderToString`.
- No hosting-level rewrite rules → `/services/warehousing` (no trailing slash, no `.html`) is served the root `dist/index.html` SPA shell instead of `dist/services/warehousing/index.html`. This is why crawlers may see the wrong meta on clean URLs.
- No `_redirects` / `vercel.json` / Cloudflare Workers / Netlify `_headers` honored by Lovable Hosting.

So **the SSG output is correct; the hosting layer cannot serve it under clean URLs.** Two paths exist:

| Path | What changes | SEO outcome |
|------|--------------|-------------|
| **Stay on Lovable Hosting** | Nothing at hosting layer. Link only to canonical `/.../` trailing-slash form, or accept that bare clean URLs serve the SPA shell (client still hydrates correct meta via `<Seo>`, but non-JS crawlers see the root shell). | Partial. JS-executing crawlers (Googlebot) fine; LinkedIn/Slack/X/Bing previews unreliable on bare clean URLs. |
| **Move hosting to Cloudflare Pages / Netlify / Vercel** | Point GoDaddy DNS at the new host. Add a one-line rewrite (`/:path -> /:path/index.html`). Keep all current Lovable code. | Full. Every static route returns prerendered HTML in the initial response. |

**True request-time SSR (Option A)** would require a Node host (Cloudflare Workers w/ adapter, Vercel, Render). It is overkill — SSG already gives the same SEO HTML at zero runtime cost.

## 3. Recommended Architecture (realistic, in priority order)

**Option B — Static Site Generation (what you already have, finished out).** The 90% case is already implemented. The remaining 10% is:

1. Extend prerender to **dynamic data-driven routes** (warehouse city pages, blog posts, glossary entries) by reading from a data source at build time.
2. Wire that same data source into the runtime `useQuery` calls so client and SSG share one source of truth.
3. Add a **CMS-ready abstraction** (`src/content/`) so today's data lives in TS files and tomorrow can come from Supabase / Sanity / Contentful with zero frontend changes.
4. Solve the hosting-layer clean-URL issue (move hosting OR add trailing-slash canonicals OR both).

Option A (true SSR) is not justified. Option C/D are downgrades from what exists.

## 4. Folder Structure Changes

```text
src/
  content/                        NEW — single source of truth for page data
    types.ts                      Warehouse, BlogPost, GlossaryTerm interfaces
    source.ts                     getWarehouse(slug), listWarehouses(), getBlogPost(slug)
                                  switchable: local TS today, Supabase tomorrow
    warehouses/
      delhi.ts, gurgaon.ts, ...   per-warehouse content + SEO fields
  seo/
    pageSeo/
      index.ts                    EXISTING — static routes
      dynamic.ts                  NEW — buildSeoFromWarehouse(warehouse), etc.
    useDynamicSeo.ts              NEW — hook: useQuery + <Seo> wiring helper
  pages/warehouses/
    [city].tsx                    NEW pattern — single dynamic component
                                  (replaces 12 per-city files once migrated)
scripts/
  prerender.ts                    UPDATED — also iterate dynamic content sources
  generate-sitemap.ts             UPDATED — pull dynamic routes from same source
```

## 5. Required Package Additions

None. Everything needed is installed: `react-helmet-async`, `@tanstack/react-query`, `react-router-dom`, `tsx`, prerender pipeline.

When CMS migration happens later: add `@supabase/supabase-js` (already present) or the CMS SDK.

## 6. Implementation Approach

### 6a. Unified content source

`src/content/source.ts` exposes typed async functions:

```ts
export async function getWarehouse(slug: string): Promise<Warehouse>
export async function listWarehouses(): Promise<Warehouse[]>
```

Today these read from local TS modules. The function signature is async so a future swap to `supabase.from('warehouses').select()` requires zero call-site changes.

Each `Warehouse` carries:
```ts
{
  slug, city, region, hero, services, ...,
  seo: { title, description, canonical?, ogTitle?, ogDescription?, ogImage?, robots? }
}
```

### 6b. Route-level SEO contract

Two ways to declare SEO, both fed by one registry:

- **Static routes** — keep `pageSeo` registry as-is.
- **Dynamic routes** — page component calls:

```tsx
const { data: warehouse } = useQuery({
  queryKey: ["warehouse", slug],
  queryFn: () => getWarehouse(slug),
});

useDynamicSeo(warehouse && buildSeoFromWarehouse(warehouse));
```

`buildSeoFromWarehouse` maps `warehouse.seo.*` → the same `SeoProps` shape used by static routes. One mapper, one component, one head pipeline.

### 6c. TanStack Query + SSG integration

At build time `scripts/prerender.ts`:

1. Calls `listWarehouses()` → for each, calls `getWarehouse(slug)`.
2. Seeds a `QueryClient` with `queryClient.setQueryData(["warehouse", slug], data)` before `render(url)`.
3. Builds head from `buildSeoFromWarehouse(data)` via `buildHeadHtml`.
4. Writes `dist/warehouses/<slug>/index.html` with correct meta + rendered body + (optional) dehydrated query state for instant client hydration.

At runtime the client `useQuery` finds the same data (either dehydrated or refetched) — no flash, no mismatch.

### 6d. Sitemap

`scripts/generate-sitemap.ts` imports `listWarehouses()` / `listBlogPosts()` from the same `src/content/source.ts` and emits one `<url>` per entry. Adding a warehouse in the CMS later automatically appears in the sitemap on next build.

### 6e. Canonicals

Already centralized via `src/seo/buildCanonical.ts` + `siteConfig.canonicalBase`. Dynamic pages emit `<link rel="canonical" href="https://www.aajscm.com/warehouses/<slug>" />` from the same builder.

### 6f. Hosting clean-URL fix

Decision required (see Question 1 below). Recommendation: **Cloudflare Pages** — free, drop-in for `dist/`, auto-serves `/:path/index.html`, keeps GoDaddy as registrar with a DNS change. Lovable Cloud (Supabase) backend continues to work unchanged.

## 7. Example: Dynamic Warehouse Page

```tsx
// src/pages/warehouses/[city].tsx
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getWarehouse } from "@/content/source";
import { useDynamicSeo, buildSeoFromWarehouse } from "@/seo/useDynamicSeo";

export default function WarehouseCityPage() {
  const { city } = useParams<{ city: string }>();
  const { data: warehouse } = useQuery({
    queryKey: ["warehouse", city],
    queryFn: () => getWarehouse(city!),
    enabled: !!city,
  });

  useDynamicSeo(warehouse && buildSeoFromWarehouse(warehouse));

  if (!warehouse) return null;
  return <WarehouseTemplate warehouse={warehouse} />;
}
```

## 8. Migration Steps

1. Introduce `src/content/` with current warehouse data extracted from the 12 per-city components.
2. Add `useDynamicSeo` + `buildSeoFromWarehouse` mapper.
3. Replace 12 `pages/warehouses/<City>.tsx` files with one `[city].tsx` route in `AppRoutes`.
4. Update `scripts/prerender.ts` to iterate `listWarehouses()` and seed QueryClient before render.
5. Update `scripts/generate-sitemap.ts` to read from the same source.
6. Repeat pattern for `/blog/:slug`, `/glossary/:term`, `/newsroom/:slug` when content is ready.
7. Decide on hosting (see Question 1) and either migrate or accept the clean-URL caveat.
8. Re-enable crawlers in `public/robots.txt` (currently `Disallow: /`).

## 9. Questions Before I Build

1. **Hosting decision** — stay on Lovable Hosting (clean-URL caveat) or migrate to Cloudflare Pages/Netlify? Without this, SEO HTML still doesn't reach crawlers on bare clean URLs no matter how good the meta system is.
2. **Scope of this build** — do you want me to (a) just build the dynamic SEO + content abstraction for the existing 12 warehouse pages, or (b) also wire it for `/blog`, `/glossary`, `/newsroom` (which currently have no real content sources)?
3. **CMS target** — should the content abstraction be designed against Supabase (Lovable Cloud) specifically, or kept generic for any CMS?

Once you confirm those, I'll implement.
