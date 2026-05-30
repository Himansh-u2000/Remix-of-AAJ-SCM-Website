import { services, warehouses } from "@/config/sitemap";
import { brand } from "./brand";
import {
  collectionPageSchema,
  itemListSchema,
  webPageSchema,
  type WebPageSchemaInput,
} from "./schema";

type JsonLd = Record<string, unknown>;

/**
 * Auto-map a route to a sensible default schema set. Runs in addition
 * to whatever the page declares explicitly via `schemas: []`. Keeps
 * data entry minimal — pages don't need to know which schema type
 * applies to them.
 *
 * Returns [] when no auto-schema applies (the page declares its own,
 * e.g. Service for /services/* or LocalBusiness for /warehouses/*).
 */
export function resolveAutoSchemas(
  pathname: string,
  ctx: { title: string; description: string },
): JsonLd[] {
  // Home: sitewide Organization + WebSite already cover it.
  if (pathname === "/") return [];

  // /services/* and /warehouses/* leaves emit Service / LocalBusiness
  // from pageSeo entries already — don't double-stack.
  if (/^\/services\/[^/]+$/.test(pathname)) return [];
  if (/^\/warehouses\/[^/]+$/.test(pathname)) return [];

  // List hubs
  if (pathname === "/services") {
    return [
      collectionPageSchema({
        name: ctx.title,
        description: ctx.description,
        path: pathname,
        items: services.map((s) => ({ name: s.label, path: s.path })),
      }),
    ];
  }
  if (pathname === "/warehouses") {
    return [
      collectionPageSchema({
        name: ctx.title,
        description: ctx.description,
        path: pathname,
        items: warehouses.map((w) => ({ name: w.label, path: w.path })),
      }),
    ];
  }
  if (pathname === "/capabilities") {
    return [
      collectionPageSchema({
        name: ctx.title,
        description: ctx.description,
        path: pathname,
        items: [
          { name: "Technology & Integrations", path: "/capabilities/technology" },
          { name: "Operations / KPI", path: "/capabilities/operations" },
        ],
      }),
    ];
  }
  if (pathname === "/blog" || pathname === "/glossary" || pathname === "/newsroom") {
    return [
      collectionPageSchema({
        name: ctx.title,
        description: ctx.description,
        path: pathname,
      }),
    ];
  }

  // Specific WebPage subtypes
  const subtypeMap: Record<string, WebPageSchemaInput["type"]> = {
    "/about-us": "AboutPage",
    "/contact-us": "ContactPage",
  };

  return [
    webPageSchema({
      name: ctx.title,
      description: ctx.description,
      path: pathname,
      type: subtypeMap[pathname] ?? "WebPage",
      image: brand.defaultOgImage,
    }),
  ];
}

/** Public helper for building a one-off ItemList outside the resolver. */
export { itemListSchema };