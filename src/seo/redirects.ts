import { buildCanonical } from "./buildCanonical";

export interface Redirect {
  from: string;
  to: string;
  status?: 301 | 302;
}

/**
 * Centrally managed redirect table. Add legacy URLs here when paths
 * change. The sitemap excludes `from` paths, and a future prerender
 * step would emit meta-refresh snapshots with canonical pointing at
 * the destination.
 */
export const redirects: Redirect[] = [
  {
    from: "/services/omnichannel-fulfillment",
    to: "/services/same-day-delivery",
    status: 301,
  },
  {
    from: "/services/same-day-next-day-delivery",
    to: "/services/same-day-delivery",
    status: 301,
  },
];

export function resolveRedirect(from: string): string | null {
  const hit = redirects.find((r) => r.from === from);
  return hit ? buildCanonical(hit.to) : null;
}