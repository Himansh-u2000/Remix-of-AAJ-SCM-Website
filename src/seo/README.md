# SEO infrastructure

Centralized, type-safe SEO for every route. Single source of truth for
canonical domain, brand data, schema, sitemap and per-page metadata.

## Build-time prerender (Option B — Vite 5 / React 18 / Tailwind 3)

After `vite build`, `scripts/prerender.ts` runs as a `postbuild` hook
and writes one HTML file per registry route into `dist/`:

```
dist/index.html                        — /
dist/about-us/index.html               — /about-us
dist/warehouses/delhi/index.html       — /warehouses/delhi
...                                    (37 routes today)
```

Each file is the same Vite shell (CSS / JS module tags preserved) with
a route-specific `<head>` built from the `pageSeo` registry via
`buildHeadHtml.ts`. Non-JS crawlers (LinkedIn, Slack, Facebook, X,
Bing) and AI crawlers (ChatGPT, Claude, Perplexity, Google AI) see
real per-route `<title>`, description, canonical, og:*, twitter:* and
JSON-LD blocks (page schemas + sitewide Organization + WebSite) in
the raw HTML response — no JS execution required.

Lovable's hosting auto-serves the matching `dist/<route>/index.html`
file when present and falls back to `dist/index.html` otherwise, so
SPA routing still works for any URL not in the registry.

### Hydration: zero duplicates

Every prerendered tag carries `data-prerendered="true"`. `src/main.tsx`
strips them once on boot, BEFORE React mounts, so react-helmet-async
becomes the sole owner of the head after hydration. Result: no
duplicate canonical, no duplicate JSON-LD, no duplicate og/twitter
tags after the page hydrates. SEO crawlers that don't run JS see the
prerendered head; users and JS crawlers see Helmet's identical
output.

### Dynamic routes (intentionally NOT prerendered)

`/blog/:slug`, `/glossary/:term`, `/newsroom/:slug` keep the existing
CSR + Helmet fallback. They will be wired into the prerender pipeline
once CMS integration lands and a real content list is available.

### Adding a new prerendered route

1. Add the React Router `<Route>` in `src/App.tsx`.
2. Add an entry to `src/seo/pageSeo/index.ts`.
3. `bun run build` — the postbuild hook automatically emits
   `dist/<route>/index.html`. No script edits needed.

### Files NOT to edit directly (prerender system)

- `scripts/prerender.ts` — splices route head into the Vite shell;
  changing the splice rules can break CSS/JS asset references.
- `src/seo/buildHeadHtml.ts` — keep the `data-prerendered="true"`
  marker on every tag, otherwise the runtime cleanup in `main.tsx`
  can't strip them and duplicates leak in.
- `src/main.tsx` cleanup line — remove only after the prerender
  system itself is removed.

## Locked production domain

`https://www.aajscm.com` — set once in `src/seo/siteConfig.ts`.
Every canonical, sitemap entry, og:url, twitter:url, JSON-LD `@id`
and redirect target is derived from this constant. Do not hardcode
the URL anywhere else.

## Folder map

```
src/seo/
  siteConfig.ts        domain, locale, twitter handle (locked)
  brand.ts             organization data (logo, address, social)
  buildCanonical.ts    URL normaliser (host, scheme, slashes, query)
  redirects.ts         legacy → new URL table
  Seo.tsx              <Seo {...} /> component used by every page
  SeoProvider.tsx      sitewide JSON-LD + HelmetProvider wrapper
  schema/index.ts      Organization, WebSite, Service, Breadcrumb,
                       FAQ, Article, LocalBusiness builders
  pageSeo/index.ts     page registry — title/description/og/schemas
                       per route + assertUniqueSeo() validator

scripts/generate-sitemap.ts  runs on predev + prebuild

public/
  robots.txt           Allow: / + Sitemap: line
  sitemap.xml          generated — do not hand-edit
  og/                  drop OG images here (default.jpg fallback)
```

## Add a new page

1. Add the React Router `<Route>` in `src/App.tsx`.
2. Add it to `src/config/sitemap.ts` so breadcrumbs auto-resolve.
3. Add a registry entry in `src/seo/pageSeo/index.ts`:
   ```ts
   "/new-page": {
     title: "Page Title (≤60 chars)",
     description: "50–160 char description.",
     schemas: [breadcrumbSchema(crumbsFor("/new-page"))],
   },
   ```
4. In the page component: `<Seo {...pageSeo["/new-page"]} />`.
5. Run `bun run build` — `assertUniqueSeo()` fails the build on
   duplicate or out-of-bounds metadata.

## Add a redirect

Append to `src/seo/redirects.ts`:
```ts
{ from: "/old-url", to: "/new-url", status: 301 }
```
The sitemap automatically excludes the `from` path.

## Add a new schema type

Add a builder to `src/seo/schema/index.ts`, then reference it in the
page's `schemas:` array.

## Replace an OG image

Drop the file in `public/og/<filename>.jpg` and set
`ogImage: "/og/<filename>.jpg"` in the page registry. Default is the
brand fallback `/og/default.jpg`.

## CMS migration (future)

Detail pages (`/blog/:slug` etc.) currently inherit a sane fallback
from `PagePlaceholder`. When the CMS connects, write a
`mapCmsToPageSeo()` adapter that returns a `PageSeo` object — the
rest of the system (canonical, schema, sitemap, validation) keeps
working unchanged.

## Files NOT to edit directly

- `index.html` per-page tags — use the registry.
- `public/sitemap.xml` — regenerated each build.
- `src/seo/buildCanonical.ts` rules — would silently break every URL.
- `siteConfig.canonicalBase` — locked to `https://www.aajscm.com`.

## Validation

- `assertUniqueSeo()` — runs in `generate-sitemap.ts` and tests.
- `src/test/seo.test.ts` — registry uniqueness, canonical rules,
  redirect integrity, locked domain.
- Manual: Lighthouse SEO, Google Rich Results Test, view-source on
  staging, Facebook / LinkedIn / X debuggers post-cutover.