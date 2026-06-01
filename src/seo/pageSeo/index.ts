import type { SeoProps } from "../Seo";
import { serviceSchema } from "../schema";
import { warehouses } from "@/content/warehouses";
import { buildSeoFromWarehouse } from "../buildSeoFromContent";

/** Page-level SEO config shape — same as <Seo> props plus the route key. */
export type PageSeo = SeoProps;

/**
 * Central registry of per-page SEO. Every page passes through here
 * so unique titles / descriptions / canonicals / OG / schema are
 * enforced in one place.
 *
 * Note: BreadcrumbList schema is auto-generated for every route by
 * `<Seo>` via `resolveBreadcrumbs(pathname)`. CollectionPage, WebPage,
 * ItemList, etc. are auto-mapped by route pattern in `schemaResolver`.
 * Only declare `schemas: []` here for page-specific schemas like
 * `Service` / `LocalBusiness`.
 *
 * Add a new entry per route. Title 10-60 chars, description 50-160 chars.
 */
export const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: "Full-Stack Supply Chain Partner for Brands Growing Across India",
    description:
      "Most brands outgrow their logistics setup before they outgrow their market. AAJ SCM is the one partner that scales with every stage of your supply chain.",
    ogTitle: "AAJ SCM | Full-Stack Supply Chain Partner for Modern Indian Brands",
    ogDescription:
      "AAJ SCM combines technology, infrastructure and operational expertise to help brands build supply chains that scale with growth, demand spikes and evolving customer expectations.",
  },

  "/services": {
    title: "Responsive 3PL, Warehousing and Supply Chain Services in India",
    description:
      "From warehousing & fulfillment to transportation and quick commerce, AAJ SCM helps brands build integrated supply chain operations that scale across India.",
    ogTitle: "3PL and Supply Chain Services in India Designed to Keep Your Brand Ahead",
    ogDescription:
      "AAJ SCM brings warehousing, fulfillment, transportation and quick commerce operations together through one connected supply chain ecosystem built for speed, visibility and operational control.",
  },
  "/services/warehousing": {
    title: "Warehousing Services in India Focused on Accuracy & Control",
    description:
      "AAJ SCM provides warehousing services in India with scan-based operations, real-time inventory visibility and integrated fulfillment and transportation support.",
    ogTitle: "Warehousing Services in India for Faster, More Reliable Operations",
    ogDescription:
      "Technology-driven warehousing services with real-time tracking, barcode verification and fulfillment-ready infrastructure across India.",
    schemas: [
      serviceSchema({
        name: "Warehousing",
        description:
          "Multi-client and dedicated warehousing across India with WMS-driven inventory accuracy.",
        path: "/services/warehousing",
      }),
    ],
  },
  "/services/b2b-warehousing": {
    title: "B2B Warehousing Services in India for Complex Bulk Distribution",
    description:
      "AAJ SCM provides B2B warehousing services in India with system-driven inventory control, bulk order management and structured distribution operations.",
    ogTitle: "B2B Warehousing Services That Bring Control to Distribution Operations",
    ogDescription:
      "AAJ SCM helps businesses manage high-volume B2B distribution through structured warehousing systems, WMS-driven operations, and process discipline.",
    schemas: [
      serviceSchema({
        name: "B2B Warehousing",
        description: "Bulk storage and distribution warehousing for B2B brands.",
        path: "/services/b2b-warehousing",
      }),
    ],
  },
  "/services/b2c-warehousing": {
    title: "B2C Warehousing Services for Same-Day & Hyperlocal Fulfillment",
    description:
      "B2C fulfillment and warehousing services in India designed to support same-day dispatch & delivery, inventory accuracy and scalable order management.",
    ogTitle: "B2C Warehousing and Fulfillment That Balances Speed, Accuracy & Scale",
    ogDescription:
      "AAJ SCM helps ecommerce and D2C brands improve dispatch speed, reduce RTO and manage fulfillment through connected warehousing operations.",
    schemas: [
      serviceSchema({
        name: "B2C Warehousing",
        description: "Each-pick warehousing for D2C and online brands.",
        path: "/services/b2c-warehousing",
      }),
    ],
  },
  "/services/ecommerce-fulfillment": {
    title: "Ecommerce Fulfillment Service in India Across Every Sales Channel",
    description:
      "Ecommerce fulfillment operations across marketplaces, D2C, and omnichannel. Multi-location inventory, scan-based processing, and SLA-driven dispatch.",
    ogTitle:
      "Ecommerce Fulfillment Service for Scalable D2C & Marketplace Operations",
    ogDescription:
      "Multi-location ecommerce fulfillment with synchronized inventory, scan-based operations, and SLA-driven dispatch across every sales channel you operate.",
    schemas: [
      serviceSchema({
        name: "E-commerce Fulfillment",
        description: "Pick, pack and ship operations for online brands.",
        path: "/services/ecommerce-fulfillment",
      }),
    ],
  },
  "/services/ecommerce-delivery": {
    title: "E-commerce Delivery Services in India | AAJ SCM",
    description:
      "Last-mile e-commerce delivery across major Indian cities with tracking, COD and reverse-logistics support.",
    robots: "noindex, nofollow",
    schemas: [
      serviceSchema({
        name: "E-commerce Delivery",
        description: "Last-mile e-commerce delivery across India.",
        path: "/services/ecommerce-delivery",
      }),
    ],
  },
  "/services/same-day-delivery": {
    title: "Same-Day Delivery Service for Brands That Can't Afford Delays",
    description:
      "AAJ SCM helps brands achieve same-day delivery through faster operational coordination, inventory readiness, and dispatch synchronization.",
    ogTitle: "Same-Day Delivery Service for High-Pressure Ecommerce Operations",
    ogDescription:
      "AAJ SCM supports same-day delivery operations through structured fulfilment workflows designed for high-order-volume businesses.",
    schemas: [
      serviceSchema({
        name: "Same Day Delivery",
        description:
          "Hyper-fast same-day and next-day delivery across Indian metros.",
        path: "/services/same-day-delivery",
      }),
    ],
  },
  "/services/transportation": {
    title: "Transportation & Trucking Services | AAJ SCM",
    description:
      "FTL, LTL and intra-city transportation services across India with real-time visibility and SLA tracking.",
    robots: "noindex, nofollow",
    schemas: [
      serviceSchema({
        name: "Transportation",
        description: "FTL, LTL and intracity transport services.",
        path: "/services/transportation",
      }),
    ],
  },
  "/services/value-added": {
    title: "Value Added Services for Brands Managing Complex Order Preparation",
    description:
      "AAJ SCM helps brands handle custom order preparation while maintaining fulfilment speed and operational continuity.",
    ogTitle: "Value Added Services for Marketplace, Retail & B2B Readiness",
    ogDescription:
      "Prepare products for dispatch, retail shelves and online marketplaces through integrated value added services managed within AAJ SCM warehouses.",
    schemas: [
      serviceSchema({
        name: "Value Added Services",
        description: "Kitting, labelling, QC and custom packaging.",
        path: "/services/value-added",
      }),
    ],
  },
  "/services/returns-management": {
    title: "Returns Management Service That Prevents Inventory Leakage",
    description:
      "AAJ SCM helps brands process returns products through structured camera enabled verification, recovery workflows and inventory-level accountability.",
    ogTitle: "Reverse Logistics Without Operational Discipline Gets Expensive Fast",
    ogDescription:
      "AAJ SCM helps brands manage returns through verification-led workflows designed to improve recovery and inventory visibility.",
    schemas: [
      serviceSchema({
        name: "Returns Management",
        description: "Reverse logistics and returns processing.",
        path: "/services/returns-management",
      }),
    ],
  },

  "/warehouses": {
    title: "AAJ SCM Warehouse Network Behind Faster Fulfillment Across India",
    description:
      "AAJ SCM operates a Pan India warehouse and dark store network that reduces transit time, improves delivery speed and optimizes inventory distribution.",
    ogTitle: "AAJ SCM Warehouse Network Powering Faster & Accurate Fulfillment in India",
    ogDescription:
      "From regional fulfillment to quick commerce operations, AAJ SCM helps businesses move inventory faster through a connected Pan India warehouse network.",
    robots: "noindex, nofollow",
  },

  "/capabilities": {
    title: "Technology & Operational Capabilities Behind the AAJ SCM Network",
    description:
      "Explore the warehousing, logistics & technology capabilities that help AAJ SCM manage high-volume operations with speed, accuracy & operational consistency",
    ogTitle: "Technology & Operational Capabilities Behind High-Volume Operations",
    ogDescription:
      "From WMS and TMS integrations to scan-based operations and real-time visibility, AAJ SCM combines technology and execution to manage supply chains at scale.",
  },
  "/capabilities/technology": {
    title: "Technology & Integrations | AAJ SCM",
    description:
      "Modern WMS, TMS and seamless integrations with marketplaces, ERPs and shipping partners across India.",
  },
  "/capabilities/technology/wms": {
    title: "Warehouse Management System (WMS) | AAJ SCM",
    description:
      "Our WMS delivers SKU-level inventory accuracy, real-time dashboards and automation-ready warehouse operations.",
    robots: "noindex, nofollow",
  },
  "/capabilities/technology/tms": {
    title: "Transportation Management System (TMS) | AAJ SCM",
    description:
      "Our TMS orchestrates FTL, LTL and last-mile transportation with route optimisation and real-time tracking.",
    robots: "noindex, nofollow",
  },
  "/capabilities/operations": {
    title: "Warehouse Operations & KPIs | AAJ SCM",
    description:
      "KPI-driven warehouse operations with measurable SLAs on inventory accuracy, dispatch and order quality.",
  },

  "/sustainability": {
    title: "Sustainable Logistics & Green Warehousing Initiatives | AAJ SCM",
    description:
      "AAJ SCM integrates sustainability into warehousing, transportation & daily operations through responsible processes and environmentally conscious practices",
    ogTitle: "The Green Initiatives Behind the AAJ SCM Supply Chain Network",
    ogDescription:
      "From paperless operations and optimized transportation to energy-efficient warehouses, AAJ SCM is building a more sustainable supply chain across India.",
  },
  "/clients": {
    title: "Client Testimonials | What Businesses Say About Working With AAJ",
    description:
      "Client testimonials and operational experiences from businesses working with AAJ SCM across logistics, fulfillment and warehousing operations.",
    ogTitle: "Real Client Stories from Across the AAJ SCM Network",
    ogDescription:
      "From warehousing and fulfillment to transportation and operations, discover how businesses experience working with AAJ SCM across India.",
  },

  "/blog": {
    title: "Supply Chain Insights & Blog | AAJ SCM",
    description:
      "Insights on warehousing, e-commerce fulfillment, logistics technology and India supply chain trends.",
    robots: "noindex, nofollow",
  },
  "/glossary": {
    title: "Supply Chain & Logistics Glossary | AAJ SCM",
    description:
      "A reference glossary of supply chain, warehousing, e-commerce fulfillment and logistics terms used in India.",
    robots: "noindex, nofollow",
  },
  "/newsroom": {
    title: "Newsroom | AAJ SCM",
    description:
      "Latest news, announcements and press coverage from AAJ Supply Chain Management.",
    robots: "noindex, nofollow",
  },

  "/about-us": {
    title: "About AAJ SCM | Story & Purpose Behind a Structured Supply Chain",
    description:
      "AAJ SCM was built to solve operational gaps in supply chain operations through structured processes, connected systems, and scalable infrastructure.",
    ogTitle: "The Story Behind AAJ SCM’s Approach to Supply Chain Operations",
    ogDescription:
      "From a single warehouse in 2008 to a connected supply chain network, discover the philosophy and operational thinking behind AAJ SCM.",
  },
  "/careers": {
    title: "Careers at AAJ SCM | Build the Future of Supply Chain Operations",
    description:
      "Explore career opportunities at AAJ SCM across warehousing, logistics, operations, technology, HR, marketing and supply chain management.",
    ogTitle: "Careers at AAJ SCM Across Operations, Technology & Logistics",
    ogDescription:
      "Explore opportunities across warehousing, logistics, technology, transportation and operations at one of India’s fastest-growing supply chain company.",
  },
  "/contact-us": {
    title: "Connect With AAJ SCM Team About Your Supply Chain Requirements",
    description:
      "Talk to AAJ SCM about your logistics, warehousing and fulfillment requirements and get reliable and scalable solutions for your business.",
    ogTitle: "Contact AAJ SCM for Warehousing, Fulfillment & Logistics Support",
    ogDescription:
      "Get in touch with AAJ SCM to discuss warehousing, fulfillment, transportation and supply chain operations across India.",
  },
};

// ---- Warehouse city pages ----
// Sourced from src/content/warehouses.ts so SEO + content stay in
// sync; the same array drives prerender, sitemap, and the runtime
// page (via @/content/source).
for (const w of warehouses) {
  pageSeo[`/warehouses/${w.slug}`] = buildSeoFromWarehouse(w);
}

/**
 * Build-time uniqueness assertion. Throws if two routes share a
 * title, description or canonical. Imported by tests + sitemap script.
 */
export function assertUniqueSeo() {
  const seen = {
    title: new Map<string, string>(),
    desc: new Map<string, string>(),
  };
  const errors: string[] = [];
  for (const [route, cfg] of Object.entries(pageSeo)) {
    if (cfg.title.length < 10 || cfg.title.length > 70) {
      errors.push(`title length out of bounds (${cfg.title.length}) on ${route}`);
    }
    if (cfg.description.length < 50 || cfg.description.length > 170) {
      errors.push(
        `description length out of bounds (${cfg.description.length}) on ${route}`,
      );
    }
    const t = seen.title.get(cfg.title);
    if (t) errors.push(`duplicate title between ${t} and ${route}`);
    else seen.title.set(cfg.title, route);
    const d = seen.desc.get(cfg.description);
    if (d) errors.push(`duplicate description between ${d} and ${route}`);
    else seen.desc.set(cfg.description, route);
  }
  return errors;
}