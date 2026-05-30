import { allRoutes } from "@/config/sitemap";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Auto-derive breadcrumb crumbs from a pathname using the central
 * `allRoutes` registry for labels. Falls back to a prettified slug
 * for unknown segments (e.g. dynamic /blog/:slug).
 *
 * Examples:
 *   /                         -> [Home]
 *   /services/warehousing     -> [Home, Services, Warehousing]
 *   /blog/some-post-slug      -> [Home, Blog, Some Post Slug]
 */
export function resolveBreadcrumbs(pathname: string, leafLabel?: string): Crumb[] {
  const out: Crumb[] = [{ name: "Home", path: "/" }];
  if (pathname === "/" || pathname === "") return out;

  const segs = pathname.split("/").filter(Boolean);
  let acc = "";
  segs.forEach((seg, idx) => {
    acc += "/" + seg;
    const isLeaf = idx === segs.length - 1;
    const match = allRoutes.find((r) => r.path === acc);
    out.push({
      name: match?.label ?? (isLeaf && leafLabel ? leafLabel : prettify(seg)),
      path: acc,
    });
  });
  return out;
}

function prettify(seg: string): string {
  return seg.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}