import { brand } from "../brand";
import { buildCanonical } from "../buildCanonical";
import { siteConfig } from "../siteConfig";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.canonicalBase}/#organization`,
    name: brand.name,
    legalName: brand.legalName,
    url: brand.url,
    logo: brand.logo,
    description: brand.description,
    email: brand.email,
    telephone: brand.phone,
    foundingDate: brand.foundingDate,
    sameAs: brand.sameAs,
    address: {
      "@type": "PostalAddress",
      ...brand.address,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: brand.phone,
        email: brand.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.canonicalBase}/#website`,
    url: siteConfig.canonicalBase,
    name: brand.name,
    publisher: { "@id": `${siteConfig.canonicalBase}/#organization` },
    inLanguage: siteConfig.defaultLocale,
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
  serviceType?: string;
  audience?: string;
  offers?: Array<{ name: string; description?: string; path?: string; price?: string; priceCurrency?: string }>;
  aggregateRating?: { ratingValue: number; reviewCount: number };
}

export function serviceSchema(input: ServiceSchemaInput): JsonLd {
  const url = buildCanonical(input.path);
  const out: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: input.name,
    description: input.description,
    url,
    areaServed: input.areaServed ?? "IN",
    provider: { "@id": `${siteConfig.canonicalBase}/#organization` },
  };
  if (input.serviceType) out.serviceType = input.serviceType;
  if (input.audience) out.audience = { "@type": "Audience", audienceType: input.audience };
  if (input.offers?.length) {
    out.offers = input.offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      description: o.description,
      url: o.path ? buildCanonical(o.path) : undefined,
      price: o.price,
      priceCurrency: o.priceCurrency,
    }));
  }
  if (input.aggregateRating) {
    out.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: input.aggregateRating.ratingValue,
      reviewCount: input.aggregateRating.reviewCount,
    };
  }
  return out;
}

/* ---------- New schema builders ---------- */

export interface WebPageSchemaInput {
  name: string;
  description: string;
  path: string;
  /** WebPage subtype. Defaults to "WebPage". */
  type?:
    | "WebPage"
    | "AboutPage"
    | "ContactPage"
    | "CollectionPage"
    | "FAQPage"
    | "ProfilePage"
    | "ItemPage";
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

export function webPageSchema(input: WebPageSchemaInput): JsonLd {
  const url = buildCanonical(input.path);
  const out: JsonLd = {
    "@context": "https://schema.org",
    "@type": input.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": `${siteConfig.canonicalBase}/#website` },
    inLanguage: siteConfig.defaultLocale,
    breadcrumb: { "@id": `${url}#breadcrumb` },
  };
  if (input.image) out.primaryImageOfPage = { "@type": "ImageObject", url: input.image };
  if (input.datePublished) out.datePublished = input.datePublished;
  if (input.dateModified) out.dateModified = input.dateModified;
  return out;
}

export interface ItemListItem {
  name: string;
  path: string;
  description?: string;
}

export interface ItemListSchemaInput {
  name: string;
  path: string;
  items: ItemListItem[];
  itemListOrder?: "Ascending" | "Descending" | "Unordered";
}

export function itemListSchema(input: ItemListSchemaInput): JsonLd {
  const url = buildCanonical(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name: input.name,
    itemListOrder: `https://schema.org/Item${input.itemListOrder ?? "Unordered"}`,
    numberOfItems: input.items.length,
    itemListElement: input.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: buildCanonical(it.path),
      ...(it.description ? { description: it.description } : {}),
    })),
  };
}

export interface CollectionPageSchemaInput {
  name: string;
  description: string;
  path: string;
  items?: ItemListItem[];
}

export function collectionPageSchema(input: CollectionPageSchemaInput): JsonLd {
  const url = buildCanonical(input.path);
  const out: JsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collectionpage`,
    url,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": `${siteConfig.canonicalBase}/#website` },
    inLanguage: siteConfig.defaultLocale,
    breadcrumb: { "@id": `${url}#breadcrumb` },
  };
  if (input.items?.length) {
    out.mainEntity = itemListSchema({
      name: input.name,
      path: input.path,
      items: input.items,
    });
  }
  return out;
}

export interface ServiceCatalogOffer {
  name: string;
  description?: string;
  path: string;
}

export interface ServiceWithOfferCatalogInput {
  name: string;
  description: string;
  path: string;
  offers: ServiceCatalogOffer[];
  areaServed?: string;
}

export function serviceWithOfferCatalogSchema(
  input: ServiceWithOfferCatalogInput,
): JsonLd {
  const url = buildCanonical(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: input.name,
    description: input.description,
    url,
    areaServed: input.areaServed ?? "IN",
    provider: { "@id": `${siteConfig.canonicalBase}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${input.name} — Catalog`,
      itemListElement: input.offers.map((o, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: o.name,
          description: o.description,
          url: buildCanonical(o.path),
          provider: { "@id": `${siteConfig.canonicalBase}/#organization` },
        },
      })),
    },
  };
}

/** BreadcrumbList builder that uses a stable @id tied to the page URL. */
export function breadcrumbSchemaForPath(
  path: string,
  crumbs: BreadcrumbCrumb[],
): JsonLd {
  const url = buildCanonical(path);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: buildCanonical(c.path),
    })),
  };
}

export interface BreadcrumbCrumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: BreadcrumbCrumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: buildCanonical(c.path),
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FaqItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
}

export function articleSchema(input: ArticleSchemaInput): JsonLd {
  const url = buildCanonical(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: url,
    image: input.image ?? brand.defaultOgImage,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Organization",
      name: input.authorName ?? brand.name,
    },
    publisher: { "@id": `${siteConfig.canonicalBase}/#organization` },
  };
}

export interface LocalBusinessInput {
  name: string;
  path: string;
  city: string;
  region?: string;
}

export function localBusinessSchema(input: LocalBusinessInput): JsonLd {
  const url = buildCanonical(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: input.name,
    url,
    parentOrganization: { "@id": `${siteConfig.canonicalBase}/#organization` },
    address: {
      "@type": "PostalAddress",
      addressLocality: input.city,
      addressRegion: input.region,
      addressCountry: "IN",
    },
  };
}