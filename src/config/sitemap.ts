export type NavLeaf = {
  label: string;
  path: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  path?: string; // present if the group itself has a landing page
  children: NavNode[];
};

export type NavNode = NavLeaf | NavGroup;

export const isGroup = (n: NavNode): n is NavGroup =>
  (n as NavGroup).children !== undefined;

export const services: NavLeaf[] = [
  { label: "Warehousing", path: "/services/warehousing" },
  { label: "B2B Warehousing", path: "/services/b2b-warehousing" },
  { label: "B2C Warehousing", path: "/services/b2c-warehousing" },
  { label: "Ecommerce Fulfillment", path: "/services/ecommerce-fulfillment" },
  { label: "Same-Day Delivery", path: "/services/same-day-delivery" },
  { label: "Value Added Services", path: "/services/value-added" },
  { label: "Returns Management", path: "/services/returns-management" },
];

export const warehouses: NavLeaf[] = [
  { label: "Delhi", path: "/warehouses/delhi" },
  { label: "Noida", path: "/warehouses/noida" },
  { label: "Gurgaon", path: "/warehouses/gurgaon" },
  { label: "Ghaziabad", path: "/warehouses/ghaziabad" },
  { label: "Kundli", path: "/warehouses/kundli" },
  { label: "Sonipat", path: "/warehouses/sonipat" },
  { label: "Rohtak", path: "/warehouses/rohtak" },
  { label: "Bhiwandi", path: "/warehouses/bhiwandi" },
  { label: "Bangalore", path: "/warehouses/bangalore" },
  { label: "Hyderabad", path: "/warehouses/hyderabad" },
  { label: "Chennai", path: "/warehouses/chennai" },
  { label: "Kolkata", path: "/warehouses/kolkata" },
];

export const capabilities: NavLeaf[] = [
  { label: "Technology", path: "/capabilities/technology" },
  { label: "Operations", path: "/capabilities/operations" },
];

export const resources: NavLeaf[] = [];

export const company: NavLeaf[] = [
  { label: "About Us", path: "/about-us" },
  { label: "Careers", path: "/careers" },
];

export const primaryNav: NavGroup[] = [
  { label: "Services", path: "/services", children: services },
  { label: "Warehousing Network", path: "/warehouses", children: warehouses },
  { label: "Capabilities", path: "/capabilities", children: capabilities },
  { label: "Sustainability", path: "/sustainability", children: [] },
  { label: "Clients", path: "/clients", children: [] },
  { label: "Company", children: company },
];

// Flat list used to render breadcrumbs and labels
export const allRoutes: { path: string; label: string; parent?: string }[] = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  ...services.map((s) => ({ ...s, parent: "/services" })),
  { path: "/warehouses", label: "Warehousing Network" },
  ...warehouses.map((w) => ({ ...w, parent: "/warehouses" })),
  { path: "/capabilities", label: "Capabilities" },
  ...capabilities.map((c) => ({ ...c, parent: "/capabilities" })),
  { path: "/sustainability", label: "Sustainability" },
  { path: "/clients", label: "Clients & Case Studies" },
  { path: "/about-us", label: "About Us" },
  { path: "/careers", label: "Careers" },
  { path: "/contact-us", label: "Contact Us" },
];