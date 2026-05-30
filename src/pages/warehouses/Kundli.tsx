import { useEffect, useRef, useState } from "react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Truck,
  Zap,
  PackageCheck,
  Boxes,
  ScanLine,
  Layers,
  Route as RouteIcon,
  Building2,
  ClipboardCheck,
  Workflow,
  Phone,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  Factory,
  Gauge,
  Network,
  Rocket,
  TrendingUp,
  Clock,
  Warehouse,
  Box,
  Gift,
  Undo2,
  Compass,
  Anchor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/SectionHeader";

// Kundli client logos (13 total — free rotation)
import ppPubLogo from "@/assets/clients-kundli/PPPublications.png";
import augusstoLogo from "@/assets/clients-kundli/Augussto.png";
import boldfitLogo from "@/assets/clients-kundli/Boldfit.png";
import enggmechLogo from "@/assets/clients-kundli/Enggmech.png";
import ewNutritionLogo from "@/assets/clients-kundli/EWNutrition.png";
import harperKundliLogo from "@/assets/clients-kundli/HarperCollins.png";
import lexisLogo from "@/assets/clients-kundli/LexisNexis.png";
import nextEduKundliLogo from "@/assets/clients-kundli/NextEducation.png";
import panMacmillanLogo from "@/assets/clients-kundli/PanMacmillan.png";
import uoloLogo from "@/assets/clients-kundli/Uolo.png";
import ratnaSagarLogo from "@/assets/clients-kundli/RatnaSagar.png";
import simonLogo from "@/assets/clients-kundli/Simon.png";
import stockareaLogo from "@/assets/clients-kundli/Stockarea.png";
import NetworkPresenceSection from "@/components/NetworkPresenceSection";

const trustBar = [
  { label: "1.5 Lakh+ Sq. Ft." },
  { label: "24x7 Operations" },
  { label: "Same-Day Dispatch" },
  { label: "NCR & North India Reach" },
];

const whyKundli = [
  { title: "Strategic Connectivity", desc: "Reach Delhi NCR, Haryana, Punjab and nearby markets from one logistics hub.", icon: Compass },
  { title: "Faster Fulfilment", desc: "Enable same-day & next-day deliveries with direct highway access.", icon: Zap },
  { title: "Efficient Stock Movement", desc: "Keep inventory moving faster with streamlined warehouse operations.", icon: Workflow },
  { title: "Scalable Operations", desc: "Manage growing regional distribution without operational bottlenecks.", icon: Network },
];

const corridors = [
  { code: "NH-44", route: "Kundli – Panipat – Chandigarh", desc: "India's longest national highway connects Kundli with major industrial and consumption markets across Haryana and Punjab for faster interstate distribution." },
  { code: "KMP Expy", route: "Kundli – Manesar – Palwal", desc: "Critical freight bypass corridor helping transport movement avoid Delhi congestion while connecting major NCR industrial and logistics zones efficiently." },
  { code: "NH-709B", route: "Kundli – Baghpat – Shamli", desc: "Supports regional freight movement across Western Uttar Pradesh and Haryana with improved transit speed and industrial connectivity." },
  { code: "NCR Access", route: "Kundli – Delhi NCR", desc: "Urban extension connectivity enhances freight movement between Kundli and NCR, enabling quicker dispatch and reduced transit delays for high-frequency deliveries." },
];

const industrialZones = ["Rai", "Barhi", "Bahalgarh", "HSIIDC Kundli", "Murthal Belt", "Sector 57 Industrial Area"];
const logisticsCorridors = ["KMP Belt", "NH-44 Corridor", "Sonipat Connectivity", "Delhi Border Access", "Panipat Route", "Samalkha Corridor"];

const facilityStats = [
  { value: "1.5L+", unit: "Sq. Ft.", label: "Strategically located in Kundli (Sonipat)", icon: Warehouse },
  { value: "24x7", unit: "", label: "Operations for industry-best TAT", icon: Clock },
  { value: "Modern", unit: "", label: "Racking + advanced material handling", icon: Layers },
  { value: "Quick Commerce", unit: "", label: "Same-day & next-day ready", icon: Rocket },
];

const handles = [
  { title: "QC & Inventory Storage", desc: "Bulk inbound is verified and stored with barcode-level tracking, keeping stock updated in real time and ready for movement.", icon: ScanLine, span: "md:col-span-2" },
  { title: "Pick & Pack Operations", desc: "Handles single-item and multi-SKU orders with accuracy, including support for custom and branded packaging.", icon: PackageCheck, span: "" },
  { title: "Same-Day Dispatch", desc: "24x7 operations process and dispatch orders placed before the defined cut-off the same day.", icon: Zap, span: "" },
  { title: "Kitting & Bundling", desc: "Pre-assembled kits, combo packs and promotional bundles are prepared in advance for faster order processing.", icon: Gift, span: "" },
  { title: "Returns Management", desc: "Returns are checked through defined QC steps and routed for restocking or disposal based on condition.", icon: Undo2, span: "" },
  { title: "B2B Fulfilment & Bulk Dispatch", desc: "Supports bulk order processing for distributors, retail chains and marketplace replenishments including FBA.", icon: Boxes, span: "md:col-span-2" },
];

const builtFor = [
  { tag: "Quick Commerce", title: "Quick commerce and hyperlocal delivery brands", desc: "Operations that require sub-hour or same-day dispatch need a warehouse strategically located within NCR's core delivery network.", icon: Zap },
  { tag: "Marketplaces", title: "Marketplace sellers with strong NCR order flow", desc: "Amazon, Flipkart, Meesho, Myntra orders concentrated in North India zones.", icon: Box },
  { tag: "Cross-Region", title: "Brands shipping from South or West India to North India", desc: "Facing 2–4 day delivery timelines and higher transit delays.", icon: TrendingUp },
  { tag: "High RTO", title: "Brands seeing higher RTO in North India regions", desc: "Delivery failures due to longer routes and delayed fulfilment.", icon: RefreshCw },
  { tag: "Scaling", title: "Growing brands handling rising order volume in NCR", desc: "Increasing demand that needs closer inventory placement for stability and speed.", icon: Rocket },
];

const stayOnTrack = [
  { title: "Inbound Validation", desc: "Every shipment is verified before entering operations.", icon: ClipboardCheck },
  { title: "Movement-Based Storage", desc: "Inventory is placed based on how it moves.", icon: Layers },
  { title: "Defined Picking Flow", desc: "Orders follow fixed routes and methods.", icon: RouteIcon },
  { title: "Pre-Dispatch QC", desc: "Orders are verified before leaving the warehouse.", icon: ShieldCheck },
  { title: "Planned Dispatch", desc: "Orders are grouped and scheduled in advance.", icon: Truck },
  { title: "Real-Time Tracking", desc: "Every movement is recorded and visible.", icon: Gauge },
];

const operations = [
  { title: "Planned Dispatch Cycles", desc: "In a high-volume market like Kundli, dispatch needs to follow fixed cycles to meet same-day, next-day and quick commerce SLAs without delays or congestion." },
  { title: "Movement-Level Inventory Tracking", desc: "With faster inventory rotation across NCR, tracking movement at every step ensures stock accuracy during high-frequency order processing." },
  { title: "Batch & SKU Accuracy at Every Step", desc: "Multi-SKU and distributor-driven orders in North India demand strict accuracy to avoid returns and fulfilment errors." },
  { title: "Multi-Distributor Order Structuring", desc: "Serving multiple regions from Kundli requires structured order handling for different distributors, cities and shipment types." },
  { title: "Transport-Aligned Dispatch Planning", desc: "Kundli's dense transport network allows faster movement, but only when dispatch is aligned with route availability and carrier schedules." },
];

const migrationSteps = [
  { title: "Understanding the Current Setup", desc: "Current operations, order flow and inventory movement are reviewed to identify gaps and dependencies." },
  { title: "Process Alignment", desc: "Workflows are aligned to match how orders, inventory and dispatch will run from the Kundli warehouse." },
  { title: "Pilot Run", desc: "A controlled rollout is done with limited volume to validate accuracy, timelines and coordination." },
  { title: "Full-Scale Execution", desc: "Operations are gradually scaled once stability is achieved, ensuring no disruption to ongoing fulfilment." },
];

const faqs = [
  { q: "How does Kundli's proximity to the KMP Expressway improve regional distribution efficiency?", a: "Kundli's direct access to the KMP corridor helps reduce freight congestion, improve route flexibility and accelerate shipment movement across NCR and North India." },
  { q: "Can your Kundli warehouse support centralised inventory management for multiple North India sales regions?", a: "Yes. Brands can manage inventory for different regional markets from a single warehouse while maintaining structured fulfilment and dispatch operations." },
  { q: "How do you manage operational efficiency during high inbound inventory movement at the Kundli warehouse?", a: "Inbound workflows are planned through scheduled unloading, organised stock verification and coordinated inventory processing to avoid operational bottlenecks." },
  { q: "Can brands use your Kundli warehouse for inventory pre-positioning before large-scale ecommerce campaigns?", a: "Yes. Inventory can be strategically inwarded and prepared in advance to support faster dispatch operations during festive sales and promotional campaigns." },
  { q: "How does AAJ Kundli support brands handling rapid inventory turnover across multiple product categories?", a: "Inventory movement is managed through structured storage allocation, SKU-level visibility and workflow planning to maintain fulfilment speed and stock accuracy." },
  { q: "Can your Kundli warehouse support route-wise shipment segregation for improved freight movement?", a: "Yes. Orders can be organised and dispatched based on transport routes, regional delivery zones and shipment priority for smoother logistics operations." },
  { q: "How do you maintain warehouse productivity during sudden spikes in order and dispatch volume?", a: "Operations are scaled through additional manpower allocation, dispatch coordination and optimised workflow management during temporary demand surges." },
  { q: "Can your Kundli warehouse help brands improve delivery performance across emerging industrial and consumption hubs?", a: "Yes. Kundli's strategic location helps brands strengthen fulfilment reach and delivery timelines across growing industrial and consumption markets in North India." },
];

const Kundli = () => {
  return (
    <>
      <Seo {...pageSeo["/warehouses/kundli"]} />
      <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-[image:var(--gradient-hero)]">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="container relative mx-auto px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <nav className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/warehouses" className="hover:text-foreground">Warehousing Network</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Kundli</span>
          </nav>

          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <MapPin className="h-3.5 w-3.5" /> Kundli · Sonipat, Haryana
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px]">
                Build a Faster and Smarter Supply Chain with{" "}
                <span className="text-primary">Warehouse Services</span>{" "}
                in Kundli
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Streamline inventory movement, accelerate order dispatch and scale fulfilment operations with warehouse solutions tailored for Kundli's strategic logistics corridor.
              </p>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                Reliable warehouse company in Kundli supporting high-volume storage, complex order processing and time-critical fulfilment operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="group h-12 px-6">
                  <Link to="/contact-us">
                    Schedule a Quick Call <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6">
                  <a href="#facility">View Facility</a>
                </Button>
              </div>
            </div>

            {/* Hero snapshot card — Kundli corridor motif */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-elevated md:p-8">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full opacity-70"
                  style={{ background: "radial-gradient(closest-side, hsl(var(--primary-soft)), transparent)" }}
                  aria-hidden
                />
                <div className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Kundli Hub Snapshot
                </div>

                <div className="relative mt-6">
                  <div className="flex items-end gap-2">
                    <div className="font-display text-6xl font-semibold leading-none text-ink">1.5L</div>
                    <div className="pb-2 text-sm font-medium text-muted-foreground">sq. ft.<br/>warehouse</div>
                  </div>

                  {/* corridor strip */}
                  <div className="mt-7 rounded-2xl border border-border bg-secondary/40 p-4">
                    <div className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      <span>Delhi</span><span>Kundli</span><span>Panipat</span>
                    </div>
                    <div className="relative h-2 overflow-hidden rounded-full bg-background">
                      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary via-primary/40 to-primary" />
                      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-primary shadow" />
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                      <Stat n="24x7" l="Operations" />
                      <Stat n="Same-Day" l="Dispatch" />
                      <Stat n="6+" l="Industrial Zones" />
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-primary/5 p-4 text-sm text-foreground">
                    <Anchor className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Positioned at the gateway of NH-44 and the KMP Expressway — NCR, Haryana and Punjab's biggest consumption markets within reach.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-t border-border bg-card/60 backdrop-blur">
          <div className="container mx-auto grid grid-cols-2 gap-4 px-6 py-5 md:grid-cols-4 md:gap-8">
            {trustBar.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* SECTION 2 */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Why Kundli"
                title={<>Kundli Strengthens Supply Chain Efficiency <span className="text-primary">Across North India</span></>}
                description="Kundli offers strong freight connectivity and industrial access, but without structured warehousing services in Kundli, maintaining reliable and scalable fulfilment operations becomes difficult."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {whyKundli.map((w, i) => {
                  const Icon = w.icon;
                  return (
                    <div key={w.title} className={`group relative rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated ${i % 2 === 1 ? "sm:mt-8" : ""}`}>
                      <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground shadow">0{i + 1}</div>
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="mt-3 font-display text-lg font-semibold text-ink">{w.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Road network */}
      <section className="relative overflow-hidden bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Highway connectivity"
            title={<>How Kundli's Transport Network Accelerates Inventory Movement <span className="text-primary">Across North India</span></>}
            description="Kundli is strategically positioned along North India's major freight and industrial corridors — connecting Delhi NCR, Haryana, Punjab and nearby consumption markets for faster fulfilment and wider same-day and next-day delivery coverage."
            align="center"
            className="mx-auto"
          />

          <div className="relative mt-14">
            <div className="pointer-events-none absolute left-0 right-0 top-[42px] hidden h-[2px] bg-[repeating-linear-gradient(90deg,hsl(var(--primary))_0_14px,transparent_14px_28px)] md:block" aria-hidden />
            <div className="grid gap-6 md:grid-cols-4 md:gap-5">
              {corridors.map((c) => (
                <div key={c.code} className="group relative">
                  <div className="relative z-10 mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-2xl border-4 border-background bg-primary text-primary-foreground shadow-elevated transition group-hover:scale-105">
                    <RouteIcon className="h-7 w-7" />
                  </div>
                  <div className="mt-5 rounded-2xl border border-border bg-card p-5 text-center shadow-card">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{c.code}</div>
                    <div className="mt-2 font-display text-base font-semibold text-ink">{c.route}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Industrial ecosystem */}
      <section className="relative overflow-hidden bg-background py-11 md:py-14">
        <div aria-hidden className="pointer-events-none absolute -right-10 top-6 select-none font-display text-[180px] font-bold leading-none text-primary/[0.04] md:text-[260px]">04</div>
        <div className="container relative mx-auto px-6">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="Industrial ecosystem"
              title={<>Kundli's Industrial Ecosystem and <span className="text-primary">What It Means for Your Inventory</span></>}
              description="Rai, Barhi and Bahalgarh are densely connected with transporters, courier hubs, packaging vendors and industrial clusters — creating an environment optimised for large-scale inventory movement, faster inbound freight and shorter carrier pickup windows."
            />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Factory className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Industrial zones</div>
                  <h3 className="font-display text-lg font-semibold text-ink">Kundli Clusters We Operate Near</h3>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {industrialZones.map((z) => (
                  <span key={z} className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:bg-primary/5">
                    {z}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Network className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Logistics corridors</div>
                  <h3 className="font-display text-lg font-semibold text-ink">Movement Reach from Our Hub</h3>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {logisticsCorridors.map((z) => (
                  <span key={z} className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:bg-primary/5">
                    {z}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Facility */}
      <section id="facility" className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Our facility"
            title={<>A Warehouse Facility in Kundli That Supports <span className="text-primary">Faster Movement Across NCR</span></>}
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] w-full bg-secondary lg:h-full">
                  <iframe
                    title="AAJ Supply Chain Management – Kundli"
                    src="https://maps.google.com/maps?q=AAJ+Supply+Chain+Management+Kundli+Akbarpur+Barota+Sonipat&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="p-7 md:p-10 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Building2 className="h-3.5 w-3.5" /> Kundli, Sonipat, Haryana
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">AAJ Supply Chain Management – Kundli Warehouse</h3>
                <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Akbarpur Barota, Near Bol Bham Dharam Kanta, Sector 42, Sonipat, Haryana 131001, India</span>
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {facilityStats.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="rounded-2xl border border-border bg-secondary/50 p-4">
                        <Icon className="h-5 w-5 text-primary" />
                        <div className="mt-3 font-display text-xl font-semibold text-ink">{s.value}<span className="ml-1 text-sm font-medium text-muted-foreground">{s.unit}</span></div>
                        <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href="https://maps.app.goo.gl/vUAkKukuq5A19Y1u7" target="_blank" rel="noreferrer">
                      Open in Google Maps <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <Link to="/contact-us">
                      <Phone className="mr-1 h-3.5 w-3.5" /> Talk to Site Team
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - What we handle */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="What we handle"
            title={<>Operations We Run at Our <span className="text-primary">Kundli Warehouse</span></>}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {handles.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className={`group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated ${h.span}`}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Built for brands */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Built for scale"
            title={<>Built for Brands Handling <span className="text-primary">Growing Demand Across North India</span></>}
            description="If your operations involve North India demand, faster delivery expectations or rising order volume, AAJ's warehousing company in Kundli is built to support that shift."
            align="center"
            className="mx-auto"
          />

          <div className="mx-auto mt-12 max-w-5xl space-y-4">
            {builtFor.map((b, i) => {
              const Icon = b.icon;
              const left = i % 2 === 0;
              return (
                <div key={b.title} className={`group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition hover:border-primary/40 hover:shadow-elevated md:flex-row md:items-center md:gap-8 md:p-7 ${left ? "" : "md:flex-row-reverse"}`}>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className={`flex-1 ${left ? "" : "md:text-right"}`}>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{b.tag}</div>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8 - Stay on track */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="How operations stay on track"
            title={<>The Discipline That Keeps <span className="text-primary">Every Day Consistent</span></>}
            description="This structure doesn't slow operations down — it's what keeps them consistent when volumes are high and timelines are tight."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {stayOnTrack.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="group relative rounded-2xl border border-border bg-card p-5 text-center shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                  <div className="mx-auto -mt-9 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-elevated">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Step 0{i + 1}</div>
                  <h3 className="mt-1 font-display text-sm font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9 - How AAJ runs Kundli */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="How AAJ runs Kundli"
            title={<>Operational Practices That <span className="text-primary">Scale with Your Volume</span></>}
            description="These are the operational principles that keep our warehouse services in Kundli reliable as your volume and SKU count grow."
            align="center"
            className="mx-auto"
          />

          <div className="mx-auto mt-12 max-w-4xl divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            {operations.map((o, i) => (
              <div key={o.title} className="group grid grid-cols-[auto_1fr] items-start gap-6 p-6 md:gap-10 md:p-8">
                <div className="font-display text-4xl font-semibold text-primary/30 transition group-hover:text-primary md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink md:text-xl">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - Migration */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Move without disruption"
            title={<>Move Operations to Our Kundli Warehouse <span className="text-primary">Without Disrupting Orders</span></>}
            align="center"
            className="mx-auto"
          />
          <div className="relative mt-14">
            <div className="absolute left-6 right-6 top-[28px] hidden h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 md:block" aria-hidden />
            <div className="grid gap-8 md:grid-cols-4 md:gap-5">
              {migrationSteps.map((s, i) => (
                <div key={s.title} className="text-center">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-primary font-display text-lg font-semibold text-primary-foreground shadow-elevated">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIDDEN: Testimonial section temporarily hidden — will be re-enabled once client testimonials are finalised. */}
      {false && (
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Proof in performance"
            title={<>Hear from Brands Shipping Out of <span className="text-primary">Our Kundli Hub</span></>}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
            <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-3">Client testimonials from brands shipping out of Kundli will appear here soon.</p>
          </div>
        </div>
      </section>
      )}

      {/* Network presence — links to other city pages; current city scrolls to top */}
      <NetworkPresenceSection currentSlug="kundli" />

      {/* FAQs */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="FAQs"
            title={<>Quick Answers About <span className="text-primary">Our Kundli Warehousing</span></>}
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-elevated md:p-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 100% 0%, hsl(var(--primary-soft)) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, hsl(var(--secondary)) 0%, transparent 60%)",
              }}
              aria-hidden
            />
            <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Let's audit your current warehouse setup
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                  Review Your Warehouse Flow for Gaps in Dispatch and Same-Day Readiness
                </h3>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                  We review inventory, dispatch, coordination and same-day fulfilment readiness — then show you what shifting to Kundli could change.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
                <Button asChild size="lg" className="group h-12 px-6">
                  <Link to="/contact-us">
                    Schedule a Quick Call <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6">
                  <Link to="/warehouses">View All Locations</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

const Stat = ({ n, l }: { n: string; l: string }) => (
  <div>
    <div className="font-display text-lg font-semibold text-ink">{n}</div>
    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
  </div>
);

export default Kundli;

/* =========== CLIENT LOGOS — free rotation across 13 logos =========== */
const ClientLogos = () => {
  const logos: { src: string; alt: string }[] = [
    { src: ppPubLogo, alt: "P.P. Publications" },
    { src: augusstoLogo, alt: "Augussto" },
    { src: boldfitLogo, alt: "Boldfit" },
    { src: enggmechLogo, alt: "Enggmech" },
    { src: ewNutritionLogo, alt: "EW Nutrition" },
    { src: harperKundliLogo, alt: "HarperCollins Publishers" },
    { src: lexisLogo, alt: "LexisNexis" },
    { src: nextEduKundliLogo, alt: "Next Education" },
    { src: panMacmillanLogo, alt: "Pan Macmillan" },
    { src: uoloLogo, alt: "Uolo" },
    { src: ratnaSagarLogo, alt: "Ratna Sagar" },
    { src: simonLogo, alt: "Simon Publishing" },
    { src: stockareaLogo, alt: "Stockarea" },
  ];
  const SLOTS = 6;

  const [indices, setIndices] = useState<number[]>(() =>
    Array.from({ length: SLOTS }, (_, i) => i)
  );
  const nextRef = useRef<number>(SLOTS);

  const handleIter = (slotIdx: number) => {
    setIndices((prev) => {
      const next = [...prev];
      next[slotIdx] = nextRef.current % logos.length;
      nextRef.current += 1;
      return next;
    });
  };

  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-8 md:py-10">
      <div className="container relative">
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 md:grid-cols-6 md:gap-8">
          {Array.from({ length: SLOTS }).map((_, slotIdx) => {
            const logoIdx = indices[slotIdx];
            const logo = logos[logoIdx];
            return (
              <div
                key={slotIdx}
                className="relative h-12 overflow-hidden px-1 sm:h-20 sm:px-2 md:h-[82px]"
              >
                <div
                  className="absolute inset-0 grid place-items-center animate-logo-roll"
                  style={{ animationDelay: `${slotIdx * 0.1}s` }}
                  onAnimationIteration={() => handleIter(slotIdx)}
                >
                  <img
                    key={logoIdx}
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};