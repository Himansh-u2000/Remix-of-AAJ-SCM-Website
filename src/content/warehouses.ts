import type { Warehouse } from "./types";

/**
 * Source of truth for warehouse city pages.
 *
 * Today: typed local modules.
 * Tomorrow: replace this array with a Supabase query in
 *   `src/content/source.ts` — call sites do not change.
 *
 * Each entry's `seo` block drives BOTH the runtime <Seo> tags AND
 * the build-time prerendered <head>, via `buildSeoFromWarehouse`.
 */
export const warehouses: Warehouse[] = [
  {
    slug: "delhi",
    city: "Delhi",
    region: "DL",
    seo: {
      title: "Warehouse in Delhi for Same-Day & Quick Commerce Fulfilment",
      description:
        "AAJ SCM operates warehouse and fulfilment centers in Delhi NCR designed for same-day delivery, quick commerce operations and faster order movement.",
      ogTitle: "Warehouse Services in Delhi NCR for Faster Ecommerce Fulfilment",
      ogDescription:
        "From hyperlocal dispatch to marketplace fulfilment, AAJ SCM supports fast-moving ecommerce operations through Delhi-based fulfilment centers.",
    },
  },
  {
    slug: "noida",
    city: "Noida",
    region: "UP",
    seo: {
      title: "Noida Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Noida. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
  {
    slug: "gurgaon",
    city: "Gurgaon",
    region: "HR",
    seo: {
      title: "Gurgaon Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Gurgaon. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
  {
    slug: "ghaziabad",
    city: "Ghaziabad",
    region: "UP",
    seo: {
      title: "Ghaziabad Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Ghaziabad. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
  {
    slug: "kundli",
    city: "Kundli",
    region: "HR",
    seo: {
      title: "Kundli Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Kundli. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
  {
    slug: "sonipat",
    city: "Sonipat",
    region: "HR",
    seo: {
      title: "Sonipat Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Sonipat. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
  {
    slug: "rohtak",
    city: "Rohtak",
    region: "HR",
    seo: {
      title: "Rohtak Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Rohtak. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
  {
    slug: "bangalore",
    city: "Bangalore",
    region: "KA",
    seo: {
      title: "Bangalore Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Bangalore. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
  {
    slug: "bhiwandi",
    city: "Bhiwandi",
    region: "MH",
    seo: {
      title: "Bhiwandi Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Bhiwandi. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
  {
    slug: "hyderabad",
    city: "Hyderabad",
    region: "TS",
    seo: {
      title: "Hyderabad Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Hyderabad. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
  {
    slug: "chennai",
    city: "Chennai",
    region: "TN",
    seo: {
      title: "Chennai Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Chennai. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
  {
    slug: "kolkata",
    city: "Kolkata",
    region: "WB",
    seo: {
      title: "Kolkata Warehouse | Warehousing & Fulfillment | AAJ SCM",
      description:
        "AAJ SCM warehousing and fulfillment services in Kolkata. Multi-client and dedicated facilities with WMS-driven operations.",
    },
  },
];