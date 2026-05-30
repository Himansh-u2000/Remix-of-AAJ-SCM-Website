import { siteConfig } from "./siteConfig";

/**
 * Centralized brand data. Consumed by:
 * - Organization JSON-LD (sitewide)
 * - Service / LocalBusiness schema providers
 * - Footer / contact components if they choose to read from here
 * - Default OG image fallback
 *
 * Update this file to propagate brand changes everywhere.
 */
export const brand = {
  legalName: "AAJ Supply Chain Management Pvt. Ltd.",
  name: "AAJ Supply Chain Management",
  shortName: "AAJ SCM",
  url: siteConfig.canonicalBase,
  logo: `${siteConfig.canonicalBase}/og/logo.png`,
  defaultOgImage: `${siteConfig.canonicalBase}/og/aaj-supply-chain-management.webp`,
  defaultOgImageAlt: "AAJ Supply Chain Management",
  description:
    "End-to-end supply chain, warehousing, and fulfillment services across India.",
  email: "info@aajscm.com",
  phone: "+91-85869-67796",
  foundingDate: "2010",
  sameAs: [
    "https://in.linkedin.com/company/aaj-supplychain",
    "https://www.instagram.com/aaj_scm/",
    "https://www.youtube.com/@aajscm",
  ] as string[],
  address: {
    streetAddress: "D-107, Block D, Preet Vihar",
    addressLocality: "Delhi",
    addressRegion: "DL",
    postalCode: "110092",
    addressCountry: "IN",
  },
} as const;

export type Brand = typeof brand;