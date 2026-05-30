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

const whyRohtak = [
  { title: "Regional Reach", desc: "Serve Haryana, Delhi NCR, Punjab and nearby markets from one strategic location.", icon: Compass },
  { title: "Faster Deliveries", desc: "Enable same-day & next-day fulfilment through strong highway connectivity.", icon: Zap },
  { title: "Efficient Inventory Flow", desc: "Keep stock moving faster with streamlined warehouse operations.", icon: Workflow },
  { title: "Operational Scalability", desc: "Manage growing distribution requirements without increasing supply chain complexity.", icon: Network },
];

const corridors = [
  { code: "NH-9", route: "Rohtak – Bahadurgarh – Delhi", desc: "A major freight route connecting Rohtak with Delhi NCR and Uttar Pradesh markets, supporting faster regional and interstate deliveries." },
  { code: "NH-352", route: "Rohtak – Jind – Narwana", desc: "Important industrial corridor improving freight movement across Haryana's manufacturing and agricultural regions with faster transit efficiency." },
  { code: "KMP Expressway", route: "Rohtak – Kundli – Manesar", desc: "Provides direct access to NCR logistics corridors while helping freight bypass inner-city congestion and improve dispatch speed." },
  { code: "Rohtak Bypass", route: "Industrial Belt – Highways", desc: "Enhances freight movement between warehouses, industrial zones and major highways for smoother regional distribution operations." },
];

const industrialZones = ["IMT Rohtak", "Sampla Industrial Area", "HSIIDC Industrial Estate", "Delhi Road Belt", "Kalanaur Road", "Sector 3 Industrial Area"];
const logisticsCorridors = ["KMP Connectivity", "Delhi NCR Access", "Bahadurgarh Route", "Jind Corridor", "Sonipat Connectivity", "Jhajjar Belt"];

const facilityStats = [
  { value: "60K+", unit: "Sq. Ft.", label: "Strategically located in Rohtak", icon: Warehouse },
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
  { title: "Planned Dispatch Cycles", desc: "In a high-volume market like Rohtak, dispatch needs to follow fixed cycles to meet same-day, next-day and quick commerce SLAs without delays or congestion." },
  { title: "Movement-Level Inventory Tracking", desc: "With faster inventory rotation across NCR, tracking movement at every step ensures stock accuracy during high-frequency order processing." },
  { title: "Batch & SKU Accuracy at Every Step", desc: "Multi-SKU and distributor-driven orders in North India demand strict accuracy to avoid returns and fulfilment errors." },
  { title: "Multi-Distributor Order Structuring", desc: "Serving multiple regions from Rohtak requires structured order handling for different distributors, cities and shipment types." },
  { title: "Transport-Aligned Dispatch Planning", desc: "Rohtak's dense transport network allows faster movement, but only when dispatch is aligned with route availability and carrier schedules." },
];

const migrationSteps = [
  { title: "Understanding the Current Setup", desc: "Current operations, order flow and inventory movement are reviewed to identify gaps and dependencies." },
  { title: "Process Alignment", desc: "Workflows are aligned to match how orders, inventory and dispatch will run from the Rohtak warehouse." },
  { title: "Pilot Run", desc: "A controlled rollout is done with limited volume to validate accuracy, timelines and coordination." },
  { title: "Full-Scale Execution", desc: "Operations are gradually scaled once stability is achieved, ensuring no disruption to ongoing fulfilment." },
];

const faqs = [
  { q: "How does Rohtak's strategic location help brands optimize freight movement across North India?", a: "Rohtak's connectivity to major highways and industrial corridors helps improve shipment flow, reduce transit bottlenecks and strengthen regional distribution efficiency." },
  { q: "Can your Rohtak warehouse support inventory staging for large distributor or wholesale dispatch cycles?", a: "Yes. Inventory can be pre-positioned and organized in advance to support scheduled bulk dispatches for distributors, wholesalers and regional supply networks." },
  { q: "How does AAJ Rohtak improve operational flexibility for brands with changing regional demand patterns?", a: "Warehouse operations can adapt through flexible storage allocation, scalable fulfilment workflows and inventory redistribution planning based on regional demand shifts." },
  { q: "Can your Rohtak warehouse support centralized fulfilment for brands serving both urban and rural North India markets?", a: "Yes. Inventory can be centrally managed in Rohtak while supporting dispatch operations across metro cities, tier-2 locations and rural delivery regions." },
  { q: "How do you optimize dispatch movement for high-volume regional shipments from Rohtak?", a: "Dispatch workflows are aligned with transport routing, shipment prioritization and loading coordination to maintain efficient freight movement during large-volume operations." },
  { q: "Can brands use your Rohtak warehouse to improve supply chain responsiveness during seasonal demand fluctuations?", a: "Yes. Inventory positioning and fulfilment operations can be adjusted quickly during seasonal sales spikes, regional demand changes and temporary volume surges." },
  { q: "How does AAJ Rohtak help brands improve inventory visibility across large-scale regional operations?", a: "Inventory movement, stock allocation and dispatch activity are tracked through structured warehouse workflows for improved operational visibility and coordination." },
  { q: "Can your Rohtak warehouse support brands consolidating inventory from multiple suppliers into a single fulfilment operation?", a: "Yes. Inventory from different suppliers and manufacturing locations can be inwarded, organized and managed through centralized warehouse operations." },
];

const Rohtak = () => {
  return (
    <>
      <Seo {...pageSeo["/warehouses/rohtak"]} />
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
            <span className="text-foreground">Rohtak</span>
          </nav>

          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <MapPin className="h-3.5 w-3.5" /> Rohtak · Haryana, NCR
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px]">
                Accelerate Your Distribution Network with{" "}
                <span className="text-primary">Warehouse Services</span>{" "}
                in Rohtak
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Improve inventory flow, streamline dispatch operations and scale fulfilment efficiently with warehouse solutions built for Rohtak's expanding industrial and logistics ecosystem.
              </p>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                Reliable warehouse company in Rohtak supporting high-volume storage, fast-moving inventory and time-sensitive fulfilment operations with operational precision.
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
                  <Sparkles className="h-3.5 w-3.5" /> Rohtak Hub Snapshot
                </div>

                <div className="relative mt-6">
                  <div className="flex items-end gap-2">
                    <div className="font-display text-6xl font-semibold leading-none text-ink">60K+</div>
                    <div className="pb-2 text-sm font-medium text-muted-foreground">sq. ft.<br/>warehouse</div>
                  </div>

                  <div className="mt-7 rounded-2xl border border-border bg-secondary/40 p-4">
                    <div className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      <span>Delhi</span><span>Rohtak</span><span>Hisar</span>
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
                    <span>Positioned along NH-9 and KMP Expressway corridor — Delhi NCR, Haryana, Punjab and tier-2 markets within reach.</span>
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
                eyebrow="Why Rohtak"
                title={<>Rohtak Creates Faster and <span className="text-primary">Smarter Supply Chain Movement</span></>}
                description="Rohtak gives businesses speed and regional connectivity, but without structured warehousing services in Rohtak, maintaining reliable fulfilment performance becomes difficult as demand grows."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {whyRohtak.map((w, i) => {
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
            title={<>How Rohtak's Transport Network Accelerates Inventory Movement <span className="text-primary">Across North India</span></>}
            description="Rohtak is strategically connected to North India's key freight and industrial corridors. Its direct highway connectivity to Delhi NCR, Haryana, Punjab and Rajasthan makes it a growing hub for regional distribution and large-scale fulfilment operations."
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
              title={<>Rohtak's Industrial Ecosystem and <span className="text-primary">What It Means for Your Inventory</span></>}
              description="HSIIDC Industrial Estate, Sampla and IMT Rohtak are densely connected with transporters, courier hubs, packaging vendors and industrial units — enabling faster inbound freight, shorter carrier pickup windows and better access to multiple logistics partners."
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
                  <h3 className="font-display text-lg font-semibold text-ink">Rohtak Clusters We Operate Near</h3>
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
            title={<>A Warehouse Facility in Rohtak That Supports <span className="text-primary">Faster Movement Across NCR</span></>}
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
            title={<>Operations We Run at Our <span className="text-primary">Rohtak Warehouse</span></>}
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
            description="If your operations involve North India demand, faster delivery expectations or rising order volume, AAJ's warehousing company in Rohtak is built to support that shift."
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
            eyebrow="How AAJ runs Rohtak"
            title={<>Operational Practices That <span className="text-primary">Scale with Your Volume</span></>}
            description="These are the operational principles that keep our warehouse services in Rohtak reliable as your volume and SKU count grow."
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
            title={<>Move Operations to Our Rohtak Warehouse <span className="text-primary">Without Disrupting Orders</span></>}
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
            title={<>Hear from Brands Shipping Out of <span className="text-primary">Our Rohtak Hub</span></>}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
            <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-3">Client testimonials from brands shipping out of Rohtak will appear here soon.</p>
          </div>
        </div>
      </section>
      )}

      {/* Network presence — links to other city pages; current city scrolls to top */}
      <NetworkPresenceSection currentSlug="rohtak" />

      {/* FAQs */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="FAQs"
            title={<>Quick Answers About <span className="text-primary">Our Rohtak Warehousing</span></>}
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
                  We review inventory, dispatch, coordination and same-day fulfilment readiness — then show you what shifting to Rohtak could change.
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

export default Rohtak;

/* =========== CLIENT LOGOS — Rohtak (randomised pool) =========== */
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