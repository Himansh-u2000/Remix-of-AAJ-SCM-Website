import type { ComponentType } from "react";

/**
 * Single source of truth for client-side route → dynamic import().
 * Used by:
 *   - `src/AppRoutesLazy.tsx` to construct `React.lazy` components
 *     (so each route gets its own JS chunk).
 *   - `src/main.tsx` to preload the matched route's chunk BEFORE
 *     calling `hydrateRoot`, so the prerendered body hydrates
 *     without a Suspense fallback flash (zero CLS, zero mismatch).
 *
 * Dynamic segments (`/blog/:slug`, `/glossary/:term`,
 * `/newsroom/:slug`) are resolved via `matchLoaderForPath`.
 */

export type Loader = () => Promise<{ default: ComponentType<unknown> }>;

export const routeLoaders: Record<string, Loader> = {
  "/": () => import("./pages/Home"),

  "/services": () => import("./pages/services/Index"),
  "/services/warehousing": () => import("./pages/services/Warehousing"),
  "/services/b2b-warehousing": () => import("./pages/services/B2BWarehousing"),
  "/services/b2c-warehousing": () => import("./pages/services/B2CWarehousing"),
  "/services/ecommerce-fulfillment": () =>
    import("./pages/services/EcommerceFulfillment"),
  "/services/ecommerce-delivery": () =>
    import("./pages/services/EcommerceDelivery"),
  "/services/same-day-delivery": () =>
    import("./pages/services/SameDayNextDayDelivery"),
  "/services/transportation": () => import("./pages/services/Transportation"),
  "/services/value-added": () =>
    import("./pages/services/ValueAddedServices"),
  "/services/returns-management": () =>
    import("./pages/services/ReturnsManagement"),

  "/warehouses": () => import("./pages/warehouses/Index"),
  "/warehouses/delhi": () => import("./pages/warehouses/Delhi"),
  "/warehouses/noida": () => import("./pages/warehouses/Noida"),
  "/warehouses/gurgaon": () => import("./pages/warehouses/Gurgaon"),
  "/warehouses/ghaziabad": () => import("./pages/warehouses/Ghaziabad"),
  "/warehouses/kundli": () => import("./pages/warehouses/Kundli"),
  "/warehouses/sonipat": () => import("./pages/warehouses/Sonipat"),
  "/warehouses/rohtak": () => import("./pages/warehouses/Rohtak"),
  "/warehouses/bangalore": () => import("./pages/warehouses/Bangalore"),
  "/warehouses/bhiwandi": () => import("./pages/warehouses/Bhiwandi"),
  "/warehouses/hyderabad": () => import("./pages/warehouses/Hyderabad"),
  "/warehouses/chennai": () => import("./pages/warehouses/Chennai"),
  "/warehouses/kolkata": () => import("./pages/warehouses/Kolkata"),

  "/capabilities": () => import("./pages/capabilities/Index"),
  "/capabilities/technology": () => import("./pages/capabilities/Technology"),
  "/capabilities/technology/wms": () =>
    import("./pages/capabilities/technology/WMS"),
  "/capabilities/technology/tms": () =>
    import("./pages/capabilities/technology/TMS"),
  "/capabilities/operations": () => import("./pages/capabilities/Operations"),

  "/sustainability": () => import("./pages/Sustainability"),
  "/clients": () => import("./pages/Clients"),

  "/blog": () => import("./pages/blog/Index"),
  "/glossary": () => import("./pages/glossary/Index"),
  "/newsroom": () => import("./pages/newsroom/Index"),

  "/about-us": () => import("./pages/AboutUs"),
  "/careers": () => import("./pages/Careers"),
  "/contact-us": () => import("./pages/ContactUs"),
};

/**
 * Resolve the loader to preload for a given URL pathname, including
 * the three dynamic route patterns and the NotFound fallback.
 */
export function matchLoaderForPath(pathname: string): Loader {
  const exact = routeLoaders[pathname];
  if (exact) return exact;
  if (pathname.startsWith("/blog/")) return () => import("./pages/blog/Detail");
  if (pathname.startsWith("/glossary/"))
    return () => import("./pages/glossary/Detail");
  if (pathname.startsWith("/newsroom/"))
    return () => import("./pages/newsroom/Detail");
  return () => import("./pages/NotFound");
}