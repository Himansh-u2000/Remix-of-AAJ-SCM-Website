import { siteConfig } from "./siteConfig";

export interface CanonicalOptions {
  /** Keep the query string. Default false. */
  keepQuery?: boolean;
}

/**
 * Normalises any path into a canonical absolute URL on the locked
 * production domain. This is the ONLY function that should produce
 * canonical / og:url / sitemap / JSON-LD @id strings.
 *
 * Rules:
 *  - Always https
 *  - Always www.aajscm.com (apex / preview hosts get rewritten)
 *  - Lowercase host
 *  - No trailing slash (except root "/")
 *  - Strips query / fragment unless { keepQuery: true }
 *  - Collapses duplicate slashes
 */
export function buildCanonical(
  pathOrUrl: string,
  opts: CanonicalOptions = {},
): string {
  const base = new URL(siteConfig.canonicalBase);

  let path: string;
  let search = "";

  try {
    const u = new URL(pathOrUrl, siteConfig.canonicalBase);
    path = u.pathname;
    search = opts.keepQuery ? u.search : "";
  } catch {
    path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  }

  // collapse duplicate slashes
  path = path.replace(/\/{2,}/g, "/");

  // strip trailing slash except for root
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return `${base.protocol}//${base.host.toLowerCase()}${path}${search}`;
}