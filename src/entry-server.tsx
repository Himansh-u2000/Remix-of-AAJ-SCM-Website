import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "./AppRoutes";
import "./index.css";

/**
 * SSR entry — used by `scripts/prerender.ts` at build time only.
 *
 * Renders the shared `<AppRoutes>` tree (same as the client) under
 * `<StaticRouter>` for a given URL and returns an HTML string. The
 * client then hydrates that markup with `hydrateRoot` from
 * `src/main.tsx`, so the DOM produced here MUST be byte-identical
 * to the first client render.
 *
 * Notes
 * - Toaster/Sonner are intentionally omitted: they only attach
 *   browser portals, never render visible markup, and including
 *   them on the server adds a portal container that would not
 *   exist client-side until after mount → hydration mismatch.
 * - HelmetProvider wraps the tree so `<Seo>` (which uses Helmet)
 *   does not crash during SSR. We discard Helmet's collected head
 *   output — head is already built deterministically by
 *   `buildHeadHtml` from the SEO registry.
 * - QueryClient is created per render to avoid cross-route cache
 *   bleed in the build loop.
 */

// Radix UI components call useLayoutEffect at module level. On the
// server React logs a noisy warning; aliasing to useEffect during SSR
// is the React-recommended workaround and is safe because effects do
// not run during renderToString anyway.
if (typeof window === "undefined") {
  (React as { useLayoutEffect: typeof React.useEffect }).useLayoutEffect =
    React.useEffect;
}

export interface RenderResult {
  html: string;
}

export function render(url: string): RenderResult {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
  });
  const helmetContext: Record<string, unknown> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  return { html };
}