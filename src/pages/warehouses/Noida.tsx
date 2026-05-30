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
  ClipboardCheck,
  Workflow,
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

// Randomised logo pool — pulled from multiple warehouse pages
import bloomsburyLogo from "@/assets/clients-v2/Bloomsbury.png";
import cambridgeLogo from "@/assets/clients-v2/Cambridge.png";
import hachetteLogo from "@/assets/clients-v2/Hachette.png";
import harperCollinsV2 from "@/assets/clients-v2/HarperCollins.png";
import harscoLogo from "@/assets/clients-v2/Harsco.png";
import nextEducationV2 from "@/assets/clients-v2/NextEducation.png";
import panMacmillanV2 from "@/assets/clients-v2/PanMacmillan.png";
import pearsonLogo from "@/assets/clients-v2/Pearson.png";
import physicsWallahLogo from "@/assets/clients-v2/PhysicsWallah.png";
import relxLogo from "@/assets/clients-v2/Relx.png";
import springerLogo from "@/assets/clients-v2/Springer.png";
import tynorLogo from "@/assets/clients-v2/Tynor.png";
import visscoLogo from "@/assets/clients-v2/Vissco.png";
import woltersKluwerLogo from "@/assets/clients-v2/WoltersKluwer.png";
import boldfitLogo from "@/assets/clients-kundli/Boldfit.png";
import lexisNexisLogo from "@/assets/clients-kundli/LexisNexis.png";
import stockareaLogo from "@/assets/clients-kundli/Stockarea.png";
import farmleyLogo from "@/assets/clients-hyderabad/Farmley.png";
import portronicsLogo from "@/assets/clients-hyderabad/Portronics.png";
import knitrootLogo from "@/assets/clients-hyderabad/Knitroot.png";
import beingHumanLogo from "@/assets/clients-hyderabad/BeingHuman.png";
import chuppsLogo from "@/assets/clients-bhiwandi/Chupps.png";
import NetworkPresenceSection from "@/components/NetworkPresenceSection";

const trustBar = [
  { label: "60,000+ Sq. Ft." },
  { label: "24x7 Operations" },
  { label: "Same-Day Dispatch" },
  { label: "NCR & North India Reach" },
];

const whyNoida = [
  { title: "NCR Connectivity", desc: "Reach Delhi NCR and major North Indian markets from one strategic hub.", icon: Compass },
  { title: "Rapid Fulfilment", desc: "Enable same-day & next-day deliveries with strong expressway connectivity.", icon: Zap },
  { title: "Faster Inventory Rotation", desc: "Keep stock moving efficiently with streamlined warehouse operations.", icon: Workflow },
  { title: "Scalable Operations", desc: "Expand regional distribution without increasing operational complexity.", icon: Network },
];

const corridors = [
  { code: "Yamuna Expy", route: "Noida – Mathura – Agra", desc: "A high-speed freight corridor connecting Noida with major consumption and industrial zones across Uttar Pradesh, supporting faster regional deliveries." },
  { code: "Eastern Peripheral Expy", route: "Noida – Ghaziabad – Kundli", desc: "Critical bypass corridor helping freight avoid Delhi congestion while connecting NCR industrial regions and interstate transport routes efficiently." },
  { code: "NH-9", route: "Noida – Hapur – Lucknow", desc: "One of North India's busiest freight routes supporting rapid movement towards Uttar Pradesh's high-demand ecommerce and retail markets." },
  { code: "Noida–Gr. Noida Expy", route: "Noida – Greater Noida", desc: "A key logistics corridor connecting warehouses, industrial sectors, manufacturing clusters and distribution hubs with faster transit movement." },
];

const industrialZones = ["Sector 63", "Ecotech", "Surajpur", "Sector 80", "Phase II", "Kasna"];
const logisticsCorridors = ["Greater Noida", "Dadri Corridor", "Jewar Belt", "NH-9 Belt", "Yamuna Expressway Zone", "Ghaziabad Connectivity"];

const facilityStats = [
  { value: "60K+", unit: "Sq. Ft.", label: "Strategically located in Noida", icon: Warehouse },
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
  { tag: "Scaling", title: "Growing brands handling rising order volume in NCR", desc: "Increasing demand that needs closer inventory placement for stability.", icon: Rocket },
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
  { title: "Planned Dispatch Cycles", desc: "In a high-volume market like Noida, dispatch needs to follow fixed cycles to meet same-day, next-day and quick commerce SLAs without delays or congestion." },
  { title: "Movement-Level Inventory Tracking", desc: "With faster inventory rotation across NCR, tracking movement at every step ensures stock accuracy during high-frequency order processing." },
  { title: "Batch & SKU Accuracy at Every Step", desc: "Multi-SKU and distributor-driven orders in North India demand strict accuracy to avoid returns and fulfilment errors." },
  { title: "Multi-Distributor Order Structuring", desc: "Serving multiple regions from Noida requires structured order handling for different distributors, cities and shipment types." },
  { title: "Transport-Aligned Dispatch Planning", desc: "Noida's dense transport network allows faster movement, but only when dispatch is aligned with route availability and carrier schedules." },
];

const migrationSteps = [
  { title: "Understanding the Current Setup", desc: "Current operations, order flow and inventory movement are reviewed to identify gaps and dependencies." },
  { title: "Process Alignment", desc: "Workflows are aligned to match how orders, inventory and dispatch will run from the Noida warehouse." },
  { title: "Pilot Run", desc: "A controlled rollout is done with limited volume to validate accuracy, timelines and coordination." },
  { title: "Full-Scale Execution", desc: "Operations are gradually scaled once stability is achieved, ensuring no disruption to ongoing fulfilment." },
];

const faqs = [
  { q: "How does Noida's expressway connectivity improve fulfilment speed for NCR and North India orders?", a: "Noida's direct access to major expressways and freight corridors helps reduce transit delays and improve delivery timelines across NCR and nearby North Indian markets." },
  { q: "Can your Noida warehouse support inventory positioning before large-scale ecommerce sales events?", a: "Yes. Inventory can be inwarded and strategically positioned in advance to support faster order processing during flash sales, festive campaigns and promotional events." },
  { q: "How does AAJ Noida manage fulfilment operations for brands handling rapid business growth?", a: "Warehouse operations are designed to scale through flexible storage allocation, structured inventory workflows and coordinated dispatch planning as order volumes increase." },
  { q: "Can your Noida warehouse support regional stock transfers across multiple fulfilment centres?", a: "Yes. Inventory can be redistributed between Noida and other regional warehouses through planned stock movement coordination and operational tracking." },
  { q: "How do you manage warehouse efficiency during simultaneous inbound and outbound inventory movement?", a: "Inbound and outbound operations are aligned through planned dock scheduling, organised handling workflows and dispatch coordination to maintain operational continuity." },
  { q: "Can brands use your Noida warehouse to reduce long-distance shipping dependency from other regions?", a: "Yes. Storing inventory closer to NCR and North India demand centres helps improve fulfilment speed and reduce long-haul delivery timelines." },
  { q: "How does AAJ Noida support brands managing inventory across multiple product categories?", a: "Different inventory categories can be handled through structured storage allocation and separate operational workflows while maintaining centralised fulfilment visibility." },
  { q: "Can your Noida warehouse help brands improve delivery performance across emerging tier-2 North Indian markets?", a: "Yes. Strategic inventory placement in Noida helps brands strengthen fulfilment reach and delivery timelines across growing tier-2 and tier-3 consumption markets." },
];

const Noida = () => {
  return (
    <>
      <Seo {...pageSeo["/warehouses/noida"]} />
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
            <span className="text-foreground">Noida</span>
          </nav>

          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <MapPin className="h-3.5 w-3.5" /> Noida · Uttar Pradesh, NCR
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px]">
                Scale Your Supply Chain with{" "}
                <span className="text-primary">Smart Warehouse Services</span>{" "}
                in Noida
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Improve fulfilment speed, inventory accuracy and dispatch efficiency with warehouse operations designed for Noida's fast-growing ecommerce and industrial ecosystem.
              </p>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                Trusted warehouse company in Noida handling high-volume inventory, multi-SKU operations and time-sensitive dispatch requirements with operational efficiency.
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

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-elevated md:p-8">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full opacity-70"
                  style={{ background: "radial-gradient(closest-side, hsl(var(--primary-soft)), transparent)" }}
                  aria-hidden
                />
                <div className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Noida Hub Snapshot
                </div>

                <div className="relative mt-6">
                  <div className="flex items-end gap-2">
                    <div className="font-display text-6xl font-semibold leading-none text-ink">60K+</div>
                    <div className="pb-2 text-sm font-medium text-muted-foreground">sq. ft.<br/>warehouse</div>
                  </div>

                  <div className="mt-7 rounded-2xl border border-border bg-secondary/40 p-4">
                    <div className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      <span>Delhi</span><span>Noida</span><span>Agra</span>
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
                    <span>Positioned along the Yamuna Expressway and Noida–Greater Noida corridor — Delhi NCR, UP and tier-2 markets within reach.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                eyebrow="Why Noida"
                title={<>Noida Creates Faster and <span className="text-primary">Smarter Supply Chain Movement</span></>}
                description="Noida gives businesses speed and regional connectivity, but without structured warehousing services in Noida, maintaining reliable fulfilment performance becomes difficult as demand grows."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {whyNoida.map((w, i) => {
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

      {/* SECTION 3 */}
      <section className="relative overflow-hidden bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Highway connectivity"
            title={<>How Noida's Transport Network Accelerates Inventory Movement <span className="text-primary">Across North India</span></>}
            description="Noida is strategically connected to some of North India's most important freight and industrial corridors. Its expressway and highway infrastructure enables faster fulfilment, smoother inventory movement and wider same-day and next-day delivery coverage across NCR and beyond."
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

      {/* SECTION 4 */}
      <section className="relative overflow-hidden bg-background py-11 md:py-14">
        <div aria-hidden className="pointer-events-none absolute -right-10 top-6 select-none font-display text-[180px] font-bold leading-none text-primary/[0.04] md:text-[260px]">04</div>
        <div className="container relative mx-auto px-6">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="Industrial ecosystem"
              title={<>Noida's Industrial Ecosystem and <span className="text-primary">What It Means for Your Inventory</span></>}
              description="Sector 63, Ecotech and Surajpur are densely connected with transporters, courier hubs, packaging vendors and industrial clusters — enabling faster inbound freight, shorter carrier pickup windows and better access to multiple logistics partners."
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
                  <h3 className="font-display text-lg font-semibold text-ink">Noida Clusters We Operate Near</h3>
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

      {/* SECTION 5 - Facility (no map) */}
      <section id="facility" className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Our facility"
            title={<>A Warehouse Facility in Noida That Supports <span className="text-primary">Faster Movement Across NCR</span></>}
            align="center"
            className="mx-auto"
          />

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {facilityStats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display text-2xl font-semibold text-ink">{s.value}<span className="ml-1 text-sm font-medium text-muted-foreground">{s.unit}</span></div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="What we handle"
            title={<>Operations We Run at Our <span className="text-primary">Noida Warehouse</span></>}
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

      {/* SECTION 7 */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Built for scale"
            title={<>Built for Brands Handling <span className="text-primary">Growing Demand Across North India</span></>}
            description="If your operations involve North India demand, faster delivery expectations or rising order volume, AAJ's warehousing company in Noida is built to support that shift."
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

      {/* SECTION 8 */}
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

      {/* SECTION 9 */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="How AAJ runs Noida"
            title={<>Operational Practices That <span className="text-primary">Scale with Your Volume</span></>}
            description="These are the operational principles that keep our warehouse services in Noida reliable as your volume and SKU count grow."
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

      {/* SECTION 10 */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Move without disruption"
            title={<>Move Operations to Our Noida Warehouse <span className="text-primary">Without Disrupting Orders</span></>}
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
            title={<>Hear from Brands Shipping Out of <span className="text-primary">Our Noida Hub</span></>}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
            <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-3">Client testimonials from brands shipping out of Noida will appear here soon.</p>
          </div>
        </div>
      </section>
      )}

      {/* Network presence — links to other city pages; current city scrolls to top */}
      <NetworkPresenceSection currentSlug="noida" />

      {/* FAQs */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="FAQs"
            title={<>Quick Answers About <span className="text-primary">Our Noida Warehousing</span></>}
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
                  We review inventory, dispatch, coordination and same-day fulfilment readiness — then show you what shifting to Noida could change.
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

export default Noida;

/* =========== CLIENT LOGOS — Noida (randomised pool) =========== */
// Fisher-Yates shuffle (returns a new array)
const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ClientLogos = () => {
  const allLogos: { src: string; alt: string }[] = [
    { src: bloomsburyLogo, alt: "Bloomsbury" },
    { src: cambridgeLogo, alt: "Cambridge University Press" },
    { src: hachetteLogo, alt: "Hachette" },
    { src: harperCollinsV2, alt: "HarperCollins" },
    { src: harscoLogo, alt: "Harsco" },
    { src: nextEducationV2, alt: "Next Education" },
    { src: panMacmillanV2, alt: "Pan Macmillan" },
    { src: pearsonLogo, alt: "Pearson" },
    { src: physicsWallahLogo, alt: "Physics Wallah" },
    { src: relxLogo, alt: "Relx" },
    { src: springerLogo, alt: "Springer" },
    { src: tynorLogo, alt: "Tynor" },
    { src: visscoLogo, alt: "Vissco" },
    { src: woltersKluwerLogo, alt: "Wolters Kluwer" },
    { src: boldfitLogo, alt: "Boldfit" },
    { src: lexisNexisLogo, alt: "LexisNexis" },
    { src: stockareaLogo, alt: "Stockarea" },
    { src: farmleyLogo, alt: "Farmley" },
    { src: portronicsLogo, alt: "Portronics" },
    { src: knitrootLogo, alt: "Knitroot" },
    { src: beingHumanLogo, alt: "Being Human" },
    { src: chuppsLogo, alt: "Chupps" },
  ];

  const SLOTS = 6;

  // Stable randomised order chosen once per mount
  const orderRef = useRef<number[]>(shuffle(allLogos.map((_, i) => i)));

  const [indices, setIndices] = useState<number[]>(() =>
    Array.from({ length: SLOTS }, (_, i) => orderRef.current[i]),
  );
  const nextRef = useRef<number>(SLOTS);

  const handleIter = (slotIdx: number) => {
    setIndices((prev) => {
      const next = [...prev];
      const order = orderRef.current;
      next[slotIdx] = order[nextRef.current % order.length];
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
            const logo = allLogos[logoIdx];
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