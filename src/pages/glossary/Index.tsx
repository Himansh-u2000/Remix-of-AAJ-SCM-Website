import { useEffect, useMemo, useState } from "react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import { Link } from "react-router-dom";
import { ArrowRight, Search, BookOpen, Sparkles, X, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Category =
  | "Warehousing"
  | "Fulfillment"
  | "Transportation"
  | "Technology"
  | "Inventory"
  | "Quick Commerce"
  | "Returns"
  | "Operations"
  | "Finance & Compliance";

type Term = {
  term: string;
  short: string;
  definition: string;
  category: Category;
};

const TERMS: Term[] = [
  // Warehousing
  { term: "3PL", short: "Third-Party Logistics", category: "Warehousing", definition: "An external provider that manages warehousing, fulfillment and transportation on behalf of a brand, so the brand can focus on product, marketing and growth." },
  { term: "Bonded Warehouse", short: "Customs-supervised storage", category: "Warehousing", definition: "A facility where imported goods can be stored without paying customs duty until they are cleared for the domestic market or re-exported." },
  { term: "Cross-Docking", short: "Receive and ship without storing", category: "Warehousing", definition: "A practice where inbound shipments are unloaded and directly loaded onto outbound vehicles with little or no storage in between, reducing handling and dwell time." },
  { term: "Dark Store", short: "Store-format micro-warehouse", category: "Warehousing", definition: "A retail-style facility closed to the public, used purely to fulfill online and quick-commerce orders for the surrounding catchment." },
  { term: "Multi-Client Facility", short: "Shared warehouse footprint", category: "Warehousing", definition: "A single warehouse where multiple brands operate under shared infrastructure, manpower and technology with strict inventory segregation." },
  { term: "Fulfillment Center", short: "Order-ready warehouse", category: "Warehousing", definition: "A facility designed for high-velocity pick, pack and ship of online orders, with layouts and processes optimized for SKU-level operations." },

  // Fulfillment
  { term: "Pick & Pack", short: "Order assembly process", category: "Fulfillment", definition: "The end-to-end process of selecting items from storage locations and packing them into shipment-ready cartons against an order." },
  { term: "Wave Picking", short: "Batched picking strategy", category: "Fulfillment", definition: "Grouping orders into 'waves' that are picked together to balance workload, vehicle cut-offs and SLA windows." },
  { term: "Order Cut-off", short: "Daily SLA boundary", category: "Fulfillment", definition: "The latest time an order can be received and still be picked, packed and dispatched on the same day." },
  { term: "SLA", short: "Service Level Agreement", category: "Fulfillment", definition: "A measurable commitment between a 3PL and a brand on parameters like dispatch time, delivery time, accuracy and availability." },
  { term: "Omnichannel Fulfillment", short: "One inventory, all channels", category: "Fulfillment", definition: "A model where a single pool of inventory serves D2C, marketplace, retail and quick-commerce orders from the same facility." },
  { term: "Kitting & Bundling", short: "Value-added assembly", category: "Fulfillment", definition: "Combining multiple SKUs into a single sellable unit — for promos, subscription boxes or marketplace combos — before shipping." },

  // Transportation
  { term: "FTL", short: "Full Truck Load", category: "Transportation", definition: "A movement where a single shipper books an entire vehicle, ideal for high-volume, time-sensitive lanes." },
  { term: "LTL", short: "Less-than-Truck Load", category: "Transportation", definition: "Consolidated transport where multiple shippers share vehicle space, optimizing cost for smaller shipments." },
  { term: "Last Mile", short: "Final leg to consumer", category: "Transportation", definition: "The final stretch of delivery from a local hub or store to the end customer's address — usually the costliest and most service-sensitive leg." },
  { term: "Mid Mile", short: "Hub-to-hub movement", category: "Transportation", definition: "Inter-city or hub-to-hub freight movement that connects origin warehouses to delivery hubs." },
  { term: "Hub & Spoke", short: "Network design model", category: "Transportation", definition: "A logistics network where shipments flow through central hubs before being distributed to smaller spoke locations for delivery." },
  { term: "TAT", short: "Turn Around Time", category: "Transportation", definition: "The total time taken to complete a defined cycle — order to dispatch, pickup to delivery, or return to refund." },

  // Technology
  { term: "WMS", short: "Warehouse Management System", category: "Technology", definition: "Software that controls and tracks every movement inside a warehouse — receiving, putaway, picking, packing, dispatch and inventory accuracy." },
  { term: "TMS", short: "Transportation Management System", category: "Technology", definition: "Software that plans, executes and tracks freight movement across vehicles, lanes, carriers and SLAs." },
  { term: "OMS", short: "Order Management System", category: "Technology", definition: "Software that orchestrates orders across channels, allocates them to the best fulfillment node and tracks them through delivery." },
  { term: "API Integration", short: "System-to-system connection", category: "Technology", definition: "A real-time link between a brand's storefront, ERP or marketplace and the 3PL's WMS/TMS for orders, inventory and tracking sync." },
  { term: "EDI", short: "Electronic Data Interchange", category: "Technology", definition: "A standardized format for exchanging documents like purchase orders, ASNs and invoices between enterprise systems." },
  { term: "Control Tower", short: "Unified visibility layer", category: "Technology", definition: "A centralized dashboard that gives end-to-end visibility across orders, inventory, transport and exceptions in real time." },

  // Inventory
  { term: "SKU", short: "Stock Keeping Unit", category: "Inventory", definition: "A unique identifier for each distinct product variant — by size, color, pack or configuration — used for tracking and reporting." },
  { term: "FEFO", short: "First Expiry, First Out", category: "Inventory", definition: "An inventory rotation rule where items closest to their expiry date are picked first — critical for FMCG, pharma and food." },
  { term: "FIFO", short: "First In, First Out", category: "Inventory", definition: "An inventory rotation rule where the oldest stock is dispatched first, minimizing aging and obsolescence." },
  { term: "Safety Stock", short: "Buffer inventory", category: "Inventory", definition: "Extra inventory held to absorb demand spikes, supplier delays or forecast errors without stocking out." },
  { term: "Inventory Accuracy", short: "System vs physical match", category: "Inventory", definition: "The percentage match between inventory recorded in the WMS and actual physical stock on the shelf — a core warehouse KPI." },
  { term: "Cycle Count", short: "Rolling stock audit", category: "Inventory", definition: "A continuous, sample-based stock-counting method that replaces full annual inventory shutdowns." },
  { term: "ABC Analysis", short: "Velocity-based classification", category: "Inventory", definition: "Segmenting SKUs into A, B and C classes by sales velocity or value, to drive slotting, replenishment and counting strategy." },

  // Quick Commerce
  { term: "Q-Commerce", short: "Quick Commerce", category: "Quick Commerce", definition: "A fulfillment model promising delivery in minutes — typically 10–30 — powered by hyperlocal dark stores and dense rider networks." },
  { term: "Micro-Fulfillment", short: "Small, dense, fast", category: "Quick Commerce", definition: "Compact urban facilities of 2,000–10,000 sq ft optimized for ultra-fast pick and pack of high-velocity SKUs." },
  { term: "Catchment", short: "Service radius of a store", category: "Quick Commerce", definition: "The geographic area a dark store or hub can serve within its promised delivery time, usually 1.5–3 km." },
  { term: "Rider Allocation", short: "Order-to-rider matching", category: "Quick Commerce", definition: "Algorithmic assignment of incoming orders to available riders, balancing distance, batching and SLA risk." },

  // Returns
  { term: "Reverse Logistics", short: "Goods flowing backward", category: "Returns", definition: "The end-to-end process of moving products from the customer back to the warehouse for refund, refurb, restock or disposal." },
  { term: "RTO", short: "Return To Origin", category: "Returns", definition: "An order that fails delivery and is shipped back to the seller's warehouse — a major cost driver in COD-heavy ecommerce." },
  { term: "QC Grading", short: "Returns quality check", category: "Returns", definition: "A structured inspection of returned items to grade them as resellable, refurbishable or scrap — protecting catalog quality." },
  { term: "Refurbishment", short: "Return-to-shelf restoration", category: "Returns", definition: "Cleaning, repackaging or minor repair of returned units so they can be put back into sellable inventory." },

  // Operations
  { term: "On-Time Dispatch", short: "Order shipped within SLA", category: "Operations", definition: "Percentage of orders dispatched within the agreed cut-off — the upstream KPI that drives on-time delivery." },
  { term: "Fill Rate", short: "Order completeness", category: "Operations", definition: "Percentage of ordered units that were actually shipped against demand — measures stock availability and allocation." },
  { term: "Dock-to-Stock", short: "Inbound speed", category: "Operations", definition: "The time taken from a vehicle arriving at the dock to the goods being available as sellable stock in the WMS." },
  { term: "Peak Readiness", short: "Sale-event preparedness", category: "Operations", definition: "The set of capacity, manpower, slotting and tech actions taken to handle 5–10x volume during sale events without breaking SLA." },
  { term: "Slotting", short: "Where each SKU sits", category: "Operations", definition: "The discipline of assigning the right storage location to each SKU based on velocity, size and pick path to maximize productivity." },

  // Finance & Compliance
  { term: "GST E-Way Bill", short: "Goods movement document", category: "Finance & Compliance", definition: "A government-mandated electronic document required for inter-state movement of goods above a defined value threshold in India." },
  { term: "ASN", short: "Advance Shipping Notice", category: "Finance & Compliance", definition: "A pre-arrival document sent by the supplier listing exactly what's coming, enabling faster and more accurate inbound processing." },
  { term: "POD", short: "Proof of Delivery", category: "Finance & Compliance", definition: "Signed or digital confirmation that a shipment was delivered to the consignee — used for billing, disputes and SLA closure." },
  { term: "Cost-to-Serve", short: "True per-order cost", category: "Finance & Compliance", definition: "The fully-loaded cost of fulfilling one order — storage, labor, packing, freight, returns — used to price and to optimize." },
];

const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Warehousing",
  "Fulfillment",
  "Transportation",
  "Technology",
  "Inventory",
  "Quick Commerce",
  "Returns",
  "Operations",
  "Finance & Compliance",
];

const Page = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<"All" | Category>("All");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TERMS.filter((t) => {
      const inCat = active === "All" || t.category === active;
      if (!inCat) return false;
      if (!q) return true;
      return (
        t.term.toLowerCase().includes(q) ||
        t.short.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
    });
  }, [query, active]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: TERMS.length };
    for (const t of TERMS) map[t.category] = (map[t.category] || 0) + 1;
    return map;
  }, []);

  return (
    <>
      <Seo {...pageSeo["/glossary"]} />
      
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="bg-dots absolute inset-0 -z-10 opacity-50" />

        <div className="relative px-4 py-12 lg:py-16">
          {/* Full-width hero card */}
          <div className="relative mx-auto w-full overflow-hidden rounded-[28px] border border-border bg-background/70 px-6 py-12 shadow-elevated backdrop-blur md:px-12 lg:px-16 lg:py-16">
            {/* Decorative blobs inside the card */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            {/* Floating term chips — anchored to card corners */}
            <span className="pointer-events-none absolute left-6 top-6 hidden animate-float-y rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] font-medium text-muted-foreground shadow-card md:inline-flex">
              WMS
            </span>
            <span
              className="pointer-events-none absolute right-8 top-10 hidden animate-float-y rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] font-medium text-muted-foreground shadow-card md:inline-flex"
              style={{ animationDelay: "0.6s" }}
            >
              FEFO
            </span>
            <span
              className="pointer-events-none absolute bottom-8 left-10 hidden animate-float-y rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] font-medium text-muted-foreground shadow-card md:inline-flex"
              style={{ animationDelay: "1.2s" }}
            >
              Dark Store
            </span>
            <span
              className="pointer-events-none absolute bottom-6 right-10 hidden animate-float-y rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] font-medium text-muted-foreground shadow-card md:inline-flex"
              style={{ animationDelay: "0.3s" }}
            >
              TAT
            </span>

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-card">
                <BookOpen className="h-3.5 w-3.5 text-primary" />
                Glossary
                <span className="text-muted-foreground/50">/</span>
                <span className="text-muted-foreground">{TERMS.length} terms</span>
              </div>
              <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.08] md:text-[40px] lg:text-[48px]">
                Your Reference Guide to{" "}
                <span className="relative whitespace-nowrap text-primary">
                  Supply Chain
                  <svg
                    className="absolute -bottom-1 left-0 h-2 w-full text-primary/70"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M2 6 Q50 1 100 4 T198 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                , Warehousing &amp; Logistics.
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Every term you'll come across in supply chain, warehousing and logistics —
                explained clearly. <span className="text-foreground">No jargon. No fluff.</span>
              </p>

              {/* Premium black search */}
              <div className="mx-auto mt-7 max-w-xl">
                <label htmlFor="glossary-search" className="sr-only">
                  Search glossary
                </label>
                <div className="group relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/60 via-ink/20 to-primary/60 opacity-30 blur-md transition-opacity duration-300 group-focus-within:opacity-80"
                  />
                  <div className="relative flex items-center rounded-2xl border border-ink/80 bg-ink shadow-[0_24px_60px_-24px_hsl(0_0%_0%/0.55)] transition-all focus-within:border-primary">
                    <Search className="ml-5 h-5 w-5 shrink-0 text-white/50 transition-colors group-focus-within:text-primary" />
                    <Input
                      id="glossary-search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder='Search a term — "3PL", "last mile", "FEFO"'
                      className="h-14 border-0 bg-transparent text-base text-white placeholder:text-white/40 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {query ? (
                      <button
                        type="button"
                        aria-label="Clear search"
                        onClick={() => setQuery("")}
                        className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    ) : (
                      <kbd className="mr-4 hidden items-center gap-1 rounded-md border border-white/15 bg-white/[0.06] px-2 py-1 font-mono text-[10px] font-medium text-white/60 sm:inline-flex">
                        <Command className="h-3 w-3" />
                        K
                      </kbd>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    Live filter
                  </span>
                  <span className="h-3 w-px bg-border" />
                  <span>{CATEGORIES.length - 1} categories</span>
                  <span className="h-3 w-px bg-border" />
                  <span className="inline-flex items-center gap-1.5">
                    Try:
                    {["3PL", "FEFO", "Dark Store"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setQuery(s)}
                        className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-foreground/80 transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                      >
                        {s}
                      </button>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER PILLS + GRID */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container py-12 lg:py-16">
          <div className="sticky top-16 z-20 mb-10 py-2">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((c) => {
                const isActive = active === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActive(c)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-card"
                        : "border-border bg-background text-foreground/80 hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {c}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                        isActive ? "bg-white/20 text-white" : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {counts[c] ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results meta */}
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              {active === "All" ? "All terms" : active}
            </h2>
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{" "}
              {TERMS.length} terms
              {query && (
                <>
                  {" "}for "<span className="text-foreground">{query}</span>"
                </>
              )}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-background p-14 text-center">
              <p className="font-display text-xl">No matches yet.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a different keyword or clear the filters.
              </p>
              <Button
                variant="outline"
                className="mt-5"
                onClick={() => {
                  setQuery("");
                  setActive("All");
                }}
              >
                Reset filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((t) => (
                <article
                  key={t.term}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-elevated"
                >
                  {/* Decorative hover blob */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary transition-colors group-hover:bg-white/15 group-hover:text-white">
                      {t.category}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground/70 transition-colors group-hover:text-white/70">
                      {t.term.length <= 5 ? "ACRONYM" : "TERM"}
                    </span>
                  </div>
                  <h3 className="relative font-display text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-white">
                    {t.term}
                  </h3>
                  <p className="relative mt-1 text-sm font-medium text-primary/90 transition-colors group-hover:text-white/90">
                    {t.short}
                  </p>
                  <p className="relative mt-4 text-sm leading-relaxed text-foreground/80 transition-colors group-hover:text-white/85">
                    {t.definition}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-grid absolute inset-0 opacity-[0.06]" />
        <div className="absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="container relative py-11 lg:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Final CTA
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              Know the Terms. Now <span className="text-primary">See Them in Action.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              AAJ runs supply chains that apply every concept in this glossary — at scale, across
              India, every day.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="group h-12 rounded-full px-7 text-base">
                <Link to="/services">
                  Explore our Services
                  <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/30 bg-transparent px-7 text-base text-white hover:bg-white hover:text-ink"
              >
                <Link to="/contact-us">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
