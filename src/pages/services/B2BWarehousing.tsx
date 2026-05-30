import { useEffect, useState } from "react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  PackageSearch,
  ShieldCheck,
  Boxes,
  ScanLine,
  ClipboardCheck,
  Truck,
  Cpu,
  Workflow,
  Target,
  Building2,
  Layers,
  Network,
  Zap,
  PackageCheck,
  Repeat,
  MapPin,
  Ruler,
  Sparkles,
  Warehouse as WarehouseIcon,
  AlertTriangle,
  Calendar,
  Route,
  Gauge,
  Boxes as BoxesIcon,
  Activity,
  Settings2,
  Eye,
  Bell,
  PlugZap,
  ClipboardList,
  Rocket,
  FileSearch,
  Wrench,
  CircuitBoard,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/SectionHeader";

import bluOneLogo from "@/assets/clients/BluOne.png";
import cambridgeLogo from "@/assets/clients/Cambridge.png";
import chuppsLogo from "@/assets/clients/Chupps.png";
import excelLogo from "@/assets/clients/Excel.png";
import hachetteLogo from "@/assets/clients/Hachette.png";
import harperCollinsLogo from "@/assets/clients/HarperCollins.png";
import harscoLogo from "@/assets/clients/Harsco.png";
import impexLogo from "@/assets/clients/Impex.png";
import nextEducationLogo from "@/assets/clients/NextEducation.png";
import bezomeLogo from "@/assets/clients/Bezome.png";
import relxLogo from "@/assets/clients/Relx.png";
import springerLogo from "@/assets/clients/Springer.png";
import visscoLogo from "@/assets/clients/Vissco.png";
import wareLogo from "@/assets/clients/Ware.png";
import woltersKluwerLogo from "@/assets/clients/WoltersKluwer.png";
import panMacmillanLogo from "@/assets/clients/PanMacmillan.png";
import physicsWallahLogo from "@/assets/clients/PhysicsWallah.png";

/* =========================================================
 * /services/b2b-warehousing
 * ========================================================= */
const B2BWarehousing = () => {
  return (
    <>
      <Seo {...pageSeo["/services/b2b-warehousing"]} />
      
      <Hero />
      <ClientLogosStrip />
      <NotBulkStorage />
      <OperationalControl />
      <WhereOpsFails />
      <ControlledDistribution />
      <InsideWarehouse />
      <DifferenceMakes />
      <TechCapabilities />
      <NetworkMap />
      <TransitionProcess />
      <FAQs />
      <FinalCTA />
    </>
  );
};

/* ============ HERO ============ */
const heroStats = [
  { value: "90%+", label: "Order to delivery TAT", icon: <Gauge className="h-5 w-5" /> },
  { value: "99.5%+", label: "Fulfillment percentage", icon: <PackageCheck className="h-5 w-5" /> },
  { value: "99.5%+", label: "Inventory accuracy", icon: <Target className="h-5 w-5" /> },
  { value: "<24 hr", label: "Dock to stock", icon: <Zap className="h-5 w-5" /> },
];

const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-surface">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 opacity-[0.4]" />
      <div className="absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
    </div>
    <div className="container py-11 lg:py-14">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Building2 className="h-3.5 w-3.5" /> B2B Warehousing
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.15] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            B2B Warehousing for{" "}
            <span className="text-primary">supply chains of scale and complexity.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Manage high volumes, complex orders, and multi-location distribution
            with clarity, consistency, and system-led execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <Link to="/contact-us">
                Talk to a B2B Specialist
                <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#network-map">Explore Our Network</a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-background p-5 shadow-card"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary">
                  {s.icon}
                </div>
                <div className="mt-4 font-display text-3xl font-semibold leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ CLIENT LOGOS ============ */
const ClientLogosStrip = () => {
  const logos = [
    { src: bluOneLogo, alt: "BluOne" },
    { src: cambridgeLogo, alt: "Cambridge University Press" },
    { src: chuppsLogo, alt: "Chupps Footwear" },
    { src: excelLogo, alt: "Excel Polymers" },
    { src: hachetteLogo, alt: "Hachette Book Group" },
    { src: harperCollinsLogo, alt: "HarperCollins Publishers" },
    { src: harscoLogo, alt: "Harsco" },
    { src: impexLogo, alt: "Impex" },
    { src: nextEducationLogo, alt: "Next Education" },
    { src: bezomeLogo, alt: "Bezomè" },
    { src: relxLogo, alt: "RELX" },
    { src: springerLogo, alt: "Springer" },
    { src: visscoLogo, alt: "Vissco" },
    { src: wareLogo, alt: "Ware" },
    { src: woltersKluwerLogo, alt: "Wolters Kluwer" },
    { src: panMacmillanLogo, alt: "Pan Macmillan" },
    { src: physicsWallahLogo, alt: "Physics Wallah" },
  ];
  const loop = [...logos, ...logos];
  return (
    <section className="border-b border-border bg-background py-12">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground">
          B2B operations trusted by{" "}
          <span className="font-semibold text-foreground">leading brands</span>{" "}
          across publishing, FMCG, healthcare, industrial & more
        </p>
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-12">
            {loop.map((logo, i) => (
              <div key={i} className="grid h-16 w-40 shrink-0 place-items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-12 max-w-[140px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 2 - NOT BULK STORAGE ============ */
const NotBulkStorage = () => {
  const points = [
    "In B2B warehousing, every movement impacts your distribution - not just your inventory.",
    "B2B warehousing is defined not by storage, but by how efficiently inventory moves at scale.",
    "B2B warehousing is less about space and more about control, coordination, and consistency.",
  ];
  return (
    <section className="bg-secondary py-11 lg:py-14">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="The B2B Distinction"
              title={
                <>
                  B2B warehousing is{" "}
                  <span className="text-primary">not the same as bulk storage.</span>
                </>
              }
              description="Unlike simple warehousing, B2B operations involve bulk movement, structured dispatch cycles, and distributor-level fulfilment."
            />
          </div>
          <div className="lg:col-span-6">
            <ul className="space-y-4">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 shadow-card"
                >
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground md:text-base">
                    {p}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 3 - OPERATIONAL CONTROL ============ */
const controlPoints = [
  { icon: Target, title: "Consistent inventory accuracy", body: "Across every location and every SKU, every day." },
  { icon: Calendar, title: "Dispatch predictability", body: "TAT discipline that holds firm through volume swings." },
  { icon: BoxesIcon, title: "Bulk order management", body: "Multi-SKU, multi-quantity orders handled with precision." },
  { icon: ScanLine, title: "SKU & batch-level visibility", body: "Full traceability at every stage of movement." },
  { icon: ClipboardCheck, title: "Month & year-end readiness", body: "Audit-ready reconciliations, no surprises." },
];

const OperationalControl = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Operational Control"
        title={
          <>
            B2B warehousing isn't about space -{" "}
            <span className="text-primary">it's about operational control.</span>
          </>
        }
        description="The five things that decide whether your B2B operation runs smoothly or constantly firefights."
        className="mb-14"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {controlPoints.map((p, i) => (
          <div
            key={p.title}
            className="card-accent-top group relative h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-base font-semibold leading-snug">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 4 - WHERE OPS FAILS ============ */
const failures = [
  {
    icon: ScanLine,
    title: "Inventory inaccuracy is not a counting problem",
    body: "It usually comes from poor system control, manual tracking, and lack of regular reconciliation.",
    result: "Stock mismatches, incorrect availability, and planning issues.",
  },
  {
    icon: Calendar,
    title: "Dispatch delays are not just about speed",
    body: "They often happen due to poor planning, unstructured workflows, and lack of process discipline.",
    result: "Missed timelines and disrupted distribution cycles.",
  },
  {
    icon: AlertTriangle,
    title: "Wrong batch or SKU dispatch is a process failure",
    body: "Without proper system validation and picking controls, errors become inevitable.",
    result: "Returns, penalties, and loss of trust with distributors.",
  },
  {
    icon: TrendingUp,
    title: "Operations break when they scale without structure",
    body: "What works at low volume fails when order complexity increases.",
    result: "Chaos, dependency on people, and inconsistent performance.",
  },
];

const WhereOpsFails = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Insight"
        title="Where B2B warehouse operations fail"
        description="Most warehousing issues don't come from volume. They come from lack of systems, process discipline, and operational visibility."
        className="mb-14"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {failures.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-border bg-background p-7 shadow-card"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
                <div className="mt-4 flex items-start gap-2 rounded-lg border-l-2 border-primary bg-primary-soft/60 px-3 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Result
                  </span>
                  <span className="text-sm text-foreground">{f.result}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 5 - CONTROLLED DISTRIBUTION ============ */
const distributionBlocks = [
  {
    icon: Calendar,
    title: "Dispatch is planned, not reactive",
    body: "Most warehouses operate reactively. We work on dispatch cycles, cut-off discipline, and load planning.",
    bullets: [
      "Orders grouped, prioritized, and scheduled",
      "Scientific, scan-based picking methods",
      "Dispatch aligned with distribution timelines, WMS-driven",
      "Last-minute chaos avoided",
    ],
    result: "Your downstream supply chain stays predictable.",
  },
  {
    icon: Activity,
    title: "Inventory is controlled at movement level",
    body: "Inventory accuracy doesn't come from counting - it comes from how inventory moves inside the warehouse.",
    bullets: [
      "Every movement time-stamped in WMS (inward → storage → picking → dispatch)",
      "Batch and SKU logic enforced at each step",
      "Errors prevented, not corrected later",
    ],
    result: "You don't discover problems after dispatch.",
  },
  {
    icon: Network,
    title: "Designed for distributor-level complexity",
    body: "B2B isn't single-order shipping. It involves multiple distributors, varied order sizes, and location-specific dispatch.",
    bullets: [
      "Order wave planning",
      "Picking route planning for faster picking",
      "Multi-user packing",
      "Weight-based QC",
      "Controlled shipment planning",
    ],
    result: "Your distribution network runs smoothly, not manually.",
  },
  {
    icon: Boxes,
    title: "Bulk handling without losing control",
    body: "Handling volume is easy. Maintaining control at scale is not.",
    bullets: [
      "Process large inward shipments efficiently",
      "Manage bulk storage without misplacement",
      "Execute high-volume dispatch without errors",
    ],
    result: "Scale does not break your operations.",
  },
  {
    icon: Layers,
    title: "Multi-location operations without fragmentation",
    body: "Most businesses struggle when they expand across cities. We bring everything under one operating model.",
    bullets: [
      "Unified inventory view",
      "Consistent processes across warehouses",
      "Centralized control",
    ],
    result: "Growth does not create operational gaps.",
  },
  {
    icon: Settings2,
    title: "Operations that don't depend on individuals",
    body: "Many warehouses run on people. When people change, performance drops.",
    bullets: [
      "SOP-led execution",
      "WMS-controlled warehousing processes",
      "Reduced dependency on individuals",
    ],
    result: "Consistency remains intact, regardless of scale.",
  },
];

const ControlledDistribution = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="From Storage To Distribution"
        title="Where bulk storage becomes controlled B2B distribution"
        description="Most warehouses are built to store inventory. We build operations that control how that inventory moves across your distribution network - because in B2B, the difference is in how well operations are controlled at scale."
        className="mb-14"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {distributionBlocks.map((b, i) => (
          <div
            key={b.title}
            className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all hover:border-primary/40 hover:shadow-elevated"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <b.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold leading-snug">
                  {b.title}
                </h3>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {b.body}
            </p>
            <ul className="mt-5 space-y-2">
              {b.bullets.map((bp) => (
                <li key={bp} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{bp}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-2 rounded-lg border-l-2 border-primary bg-primary-soft/60 px-3 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Result
              </span>
              <span className="text-sm text-foreground">{b.result}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 6 - INSIDE WAREHOUSE (animated) ============ */
const insideSteps = [
  { icon: PackageSearch, title: "Inbound & Quality Control", caption: "Every shipment is verified, checked, and recorded before entering storage." },
  { icon: Boxes, title: "Putaway & Storage Logic", caption: "Inventory is placed based on predefined rules." },
  { icon: Layers, title: "Slotting & Inventory Organization", caption: "High-demand and critical SKUs strategically positioned for picking efficiency." },
  { icon: ClipboardCheck, title: "Picking & Order Processing", caption: "Optimized bulk and forward picking ensures speed and accuracy." },
  { icon: Repeat, title: "Replenishment", caption: "WMS-guided replenishments keep stock available where it's needed." },
  { icon: ShieldCheck, title: "Weight-based QC", caption: "Every packed carton is weighed and saved in WMS in real time." },
  { icon: Truck, title: "Dispatch Staging & Execution", caption: "Orders staged and dispatched systematically to meet timelines." },
  { icon: Route, title: "Intelligent Transporter Allocation", caption: "TMS allocates transporters based on past performance and serviceability." },
];

const InsideWarehouse = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % insideSteps.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-secondary py-11 lg:py-14">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="container relative">
        <SectionHeader
          align="center"
          eyebrow="Inside An AAJ B2B Warehouse"
          title="What actually happens inside an AAJ warehouse"
          description="B2B warehousing is more than storing goods. It involves structured operations, from inbound inspections to dispatch planning."
          className="mb-14"
        />

        {/* DESKTOP / TABLET - flow grid (2 rows of 4) */}
        <div className="relative hidden md:block">
          <div className="grid grid-cols-4 gap-x-3 gap-y-12">
            {insideSteps.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  type="button"
                  key={s.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex flex-col items-center text-center"
                >
                  <div
                    className={`relative grid h-24 w-24 place-items-center rounded-full border-2 bg-background transition-all duration-300 ${
                      isActive
                        ? "border-primary scale-105 animate-node-pulse"
                        : "border-border group-hover:border-primary/50"
                    }`}
                  >
                    <div
                      className={`grid h-16 w-16 place-items-center rounded-full transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground/70"
                      }`}
                    >
                      <s.icon className="h-7 w-7" />
                    </div>
                    <span
                      className={`absolute -top-2 -right-1 grid h-7 w-7 place-items-center rounded-full text-[11px] font-semibold shadow-card ${
                        isActive
                          ? "bg-foreground text-background"
                          : "bg-background text-foreground/70 border border-border"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3
                    className={`mt-4 font-display text-sm font-semibold leading-tight transition-colors ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-[14rem] text-xs leading-relaxed text-muted-foreground transition-opacity ${
                      isActive ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {s.caption}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE - vertical timeline */}
        <div className="md:hidden">
          <div className="relative ml-6 border-l-2 border-dashed border-border pl-8">
            {insideSteps.map((s, i) => {
              const isActive = i === active;
              return (
                <div key={s.title} className="relative pb-8 last:pb-0">
                  <div
                    className={`absolute -left-[44px] grid h-12 w-12 place-items-center rounded-full border-2 bg-background ${
                      isActive ? "border-primary animate-node-pulse" : "border-border"
                    }`}
                  >
                    <div
                      className={`grid h-8 w-8 place-items-center rounded-full ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70"
                      }`}
                    >
                      <s.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-1 font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.caption}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 7 - DIFFERENCE STRUCTURED MAKES ============ */
const differences = [
  {
    icon: Calendar,
    title: "Consistent dispatch that supports your distribution cycles",
    body: "Orders move on schedule, not based on last-minute coordination.",
  },
  {
    icon: Target,
    title: "Accurate inventory across locations",
    body: "No more stock mismatches or uncertainty in stocks.",
  },
  {
    icon: Zap,
    title: "Faster movement without operational bottlenecks",
    body: "Bulk orders are processed and dispatched with speed.",
  },
  {
    icon: TrendingUp,
    title: "Stable operations while you scale",
    body: "As volume increases, your operations don't break.",
  },
];

const DifferenceMakes = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="The Outcome"
        title="The difference a structured B2B warehousing system makes"
        description="What you actually get when systems, SOPs and discipline come together."
        className="mb-14"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {differences.map((d) => (
          <div
            key={d.title}
            className="card-accent-top group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
              <d.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-base font-semibold leading-snug">
              {d.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {d.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 8 - TECH CAPABILITIES ============ */
const techPoints = [
  { icon: Calendar, text: "Dispatch cycle planning aligned with distribution timelines" },
  { icon: Eye, text: "Unified inventory visibility across multi-location operations" },
  { icon: Boxes, text: "Multi-line bulk order processing for complex B2B requirements" },
  { icon: ShieldCheck, text: "Quality check with real-time WMS visibility - inward & outward" },
  { icon: Network, text: "Centralized coordination between warehousing and transportation systems" },
  { icon: Activity, text: "Real-time dashboards for end-to-end operational visibility" },
  { icon: PlugZap, text: "Seamless ERP and system integrations for continuous data flow" },
  { icon: Bell, text: "System-driven alerts for operational exceptions and delays" },
  { icon: Workflow, text: "Configurable workflows tailored to different business models" },
  { icon: CircuitBoard, text: "Centralized control across inventory, orders, and dispatch" },
];

const TechCapabilities = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Technology Stack"
            title={
              <>
                Technology that keeps bulk operations{" "}
                <span className="text-primary">transparent and controlled</span>
              </>
            }
            description="A connected stack - WMS, TMS, ERP integrations and exception alerts - that gives you a single, reliable view of every order and every movement."
          />
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-4 shadow-card">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-2xl font-semibold leading-none">
                WMS + TMS + ERP
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                One integrated control plane
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {techPoints.map((t) => (
              <div
                key={t.text}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 shadow-card"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                  <t.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {t.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ SECTION 9 - NETWORK MAP (borrowed) ============ */
type Warehouse = {
  slug: string;
  city: string;
  address: string;
  size: string;
  feature: string;
  x: number;
  y: number;
};

const warehouses: Warehouse[] = [
  { slug: "delhi",     city: "Delhi",     address: "Delhi NCR",          size: "30,000 sq. ft.", feature: "Central NCR distribution hub",       x: 30.88, y: 27.93 },
  { slug: "noida",     city: "Noida",     address: "Greater Noida, UP",  size: "90,000 sq. ft.",  feature: "B2B distributor fulfillment",        x: 31.26, y: 28.10 },
  { slug: "gurgaon",   city: "Gurgaon",   address: "Gurugram, HR",       size: "100,000 sq. ft.", feature: "Tallest warehouse in India",         x: 30.27, y: 28.50 },
  { slug: "kundli",    city: "Kundli",    address: "Sonipat, HR",        size: "150,000 sq. ft.",  feature: "Multi-client B2B hub",               x: 30.54, y: 27.15 },
  { slug: "sonipat",   city: "Sonipat",   address: "Sonipat, HR",        size: "110,000 sq. ft.",  feature: "Bulk storage facility",              x: 30.23, y: 26.75 },
  { slug: "rohtak",    city: "Rohtak",    address: "Rohtak, HR",         size: "60,000 sq. ft.",  feature: "North India distribution node",      x: 28.76, y: 27.04 },
  { slug: "ghaziabad", city: "Ghaziabad", address: "Ghaziabad, UP",      size: "200,000 sq. ft.",  feature: "NCR east-side B2B node",             x: 31.40, y: 27.72 },
  { slug: "bhiwandi",  city: "Bhiwandi",  address: "Thane, MH",          size: "100,000 sq. ft.", feature: "Largest west-India B2B hub",         x: 16.69, y: 58.65 },
  { slug: "bangalore", city: "Bangalore", address: "Bengaluru, KA",      size: "150,000 sq. ft.", feature: "South India distribution hub",       x: 32.18, y: 79.46 },
  { slug: "hyderabad", city: "Hyderabad", address: "Hyderabad, TS",      size: "55,000 sq. ft.",  feature: "Central-south B2B hub",              x: 35.26, y: 64.89 },
  { slug: "chennai",   city: "Chennai",   address: "Chennai, TN",        size: "10,000 sq. ft.",  feature: "East-coast distribution gateway",    x: 41.36, y: 79.10 },
  { slug: "kolkata",   city: "Kolkata",   address: "Kolkata, WB",        size: "50,000 sq. ft.", feature: "East India distribution hub",        x: 68.91, y: 47.91 },
];

const networkWarehouses = [
  { city: "Delhi", address: "Delhi NCR", size: "30,000 sq. ft.", feature: "B2B fulfilment node" },
  { city: "Noida", address: "Noida, UP", size: "55,000 sq. ft.", feature: "Electronics & B2B hub" },
  { city: "Gurgaon", address: "Gurgaon, HR", size: "100,000 sq. ft.", feature: "Distribution hub for NCR" },
  { city: "Kundli", address: "Kundli, HR", size: "150,000 sq. ft.", feature: "High-volume north India node" },
  { city: "Sonipat", address: "Sonipat, HR", size: "110,000 sq. ft.", feature: "Bulk storage facility" },
  { city: "Rohtak", address: "Rohtak, HR", size: "60,000 sq. ft.", feature: "North India distribution node" },
  { city: "Ghaziabad", address: "Ghaziabad, UP", size: "200,000 sq. ft.", feature: "NCR east-side B2B node" },
  { city: "Bhiwandi", address: "Thane, MH", size: "100,000 sq. ft.", feature: "Largest west-India B2B hub" },
  { city: "Bangalore", address: "Bengaluru, KA", size: "150,000 sq. ft.", feature: "South India distribution hub" },
  { city: "Hyderabad", address: "Hyderabad, TS", size: "55,000 sq. ft.", feature: "Central-south B2B hub" },
  { city: "Chennai", address: "Chennai, TN", size: "10,000 sq. ft.", feature: "East-coast distribution gateway" },
  { city: "Kolkata", address: "Kolkata, WB", size: "50,000 sq. ft.", feature: "East India distribution hub" },
];

const NetworkMap = () => (
  <section id="network-map" className="bg-secondary py-14 lg:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Pan-India Coverage"
        title={<>
          Optimized warehouse network for{" "}
          <span className="text-primary">simplifying B2B distribution</span>
        </>}
        description="Our warehouses are strategically located to reduce transit time, optimize distribution, and support multi-location bulk operations."
        className="mb-10"
      />

      {/* Graphic illustration */}
      <div className="relative mx-auto mb-10 flex max-w-4xl items-center justify-center gap-2 md:gap-4">
        {/* Connection lines */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 hidden h-4 -translate-y-1/2 rounded-full bg-primary/5 blur-lg md:block" />

        {/* Warehouse icon cluster */}
        <div className="grid place-items-center rounded-2xl border border-border bg-background p-4 shadow-card md:p-5">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground md:h-12 md:w-12">
            <Building2 className="h-5 w-5" />
          </div>
          <span className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground md:text-xs">
            North
          </span>
          <span className="text-xs font-semibold text-foreground">7 Centres</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="h-px w-8 bg-gradient-to-r from-primary to-accent md:w-16" />
          <Truck className="h-4 w-4 text-primary md:h-5 md:w-5" />
          <div className="h-px w-8 bg-gradient-to-r from-primary to-accent md:w-16" />
        </div>

        <div className="grid place-items-center rounded-2xl border border-border bg-background p-4 shadow-card md:p-5">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground md:h-12 md:w-12">
            <WarehouseIcon className="h-5 w-5" />
          </div>
          <span className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground md:text-xs">
            West
          </span>
          <span className="text-xs font-semibold text-foreground">1 Hub</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="h-px w-8 bg-gradient-to-r from-accent to-primary md:w-16" />
          <Truck className="h-4 w-4 text-accent md:h-5 md:w-5" />
          <div className="h-px w-8 bg-gradient-to-r from-accent to-primary md:w-16" />
        </div>

        <div className="grid place-items-center rounded-2xl border border-border bg-background p-4 shadow-card md:p-5">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground md:h-12 md:w-12">
            <Building2 className="h-5 w-5" />
          </div>
          <span className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground md:text-xs">
            South
          </span>
          <span className="text-xs font-semibold text-foreground">3 Centres</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="h-px w-8 bg-gradient-to-r from-primary to-accent md:w-16" />
          <Truck className="h-4 w-4 text-primary md:h-5 md:w-5" />
          <div className="h-px w-8 bg-gradient-to-r from-primary to-accent md:w-16" />
        </div>

        <div className="grid place-items-center rounded-2xl border border-border bg-background p-4 shadow-card md:p-5">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground md:h-12 md:w-12">
            <WarehouseIcon className="h-5 w-5" />
          </div>
          <span className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground md:text-xs">
            East
          </span>
          <span className="text-xs font-semibold text-foreground">1 Hub</span>
        </div>
      </div>

      {/* Compact location grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {networkWarehouses.map((w) => (
          <Link
            key={w.city}
            to={`/warehouses/${w.city.toLowerCase()}`}
            className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3.5 shadow-card transition-all hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-elevated"
          >
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-foreground">{w.city}</div>
              <div className="truncate text-xs text-muted-foreground">{w.size}</div>
            </div>
            <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline" className="group">
          <Link to="/warehouses">
            View Full Network
            <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          </Link>
        </Button>
      </div>
    </div>
  </section>
);
/* ============ SECTION 10 - TRANSITION PROCESS ============ */
const transitionSteps = [
  { icon: FileSearch, title: "Understanding your operational requirements", body: "Deep-dive into your current setup, volumes, SLAs, and pain points." },
  { icon: ClipboardList, title: "Designing a customized warehousing plan", body: "Layout, slotting, processes and SLAs tailored to your business model." },
  { icon: Settings2, title: "SOP alignment & system configuration", body: "WMS, TMS and integrations configured to match your workflows." },
  { icon: Wrench, title: "Pilot run & process validation", body: "Controlled pilot to validate processes before full cutover." },
  { icon: Rocket, title: "Go-live & operational stabilization", body: "Smooth go-live with hands-on support until the operation is steady." },
];

const TransitionProcess = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Transition With Confidence"
        title="A step-by-step transition process for B2B operations"
        description="Transitioning B2B warehousing operations can be complex. At AAJ, we follow a structured approach to ensure a smooth shift, stable execution, and minimal supply chain disruption."
        className="mb-14"
      />

      <div className="relative">
        {/* connecting line desktop */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {transitionSteps.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-center text-center">
              <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-primary bg-background shadow-card">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <span className="absolute top-0 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-foreground text-[11px] font-semibold text-background">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ============ SECTION 11 - FAQs ============ */
const faqs = [
  {
    q: "What should I consider before choosing a B2B warehousing partner?",
    a: "Look beyond storage. Evaluate dispatch discipline, system maturity (WMS/TMS), inventory accuracy track record, multi-location coverage, and how the partner handles process exceptions. References from clients with comparable scale matter more than brochures.",
  },
  {
    q: "Can you customize warehousing operations based on our business model?",
    a: "Yes. Our SOPs, WMS workflows, picking/packing logic and dispatch cycles are configured to your distribution model - whether you serve distributors, modern trade, large-format retail or a mix.",
  },
  {
    q: "How do you handle seasonal spikes or sudden increases in order volume?",
    a: "Our operations are designed for elasticity - additional manpower from a trained pool, extended shifts, wave-based picking and pre-aligned transporter capacity ensure peaks don't break TAT.",
  },
  {
    q: "How do I know if my supply chain issues are coming from warehousing or other factors?",
    a: "We start with a structured operational diagnostic - order data, dispatch records, accuracy logs and exception trends - to isolate where time and accuracy are actually being lost before recommending changes.",
  },
  {
    q: "What happens if my business model changes after onboarding?",
    a: "Our setup is configurable, not hard-coded. SKUs, channels, dispatch rules and integrations can be reconfigured without re-implementing the operation from scratch.",
  },
  {
    q: "Is it possible to improve distribution performance without increasing warehousing costs?",
    a: "Yes - most gains come from better process design, slotting, wave planning and TMS-driven dispatch rather than additional space or headcount. Cost-to-serve typically improves alongside SLA performance.",
  },
];

const FAQs = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="FAQs"
            title="Frequently asked questions"
            description="The questions B2B leaders ask us most often. Don't see yours? Reach out - we'll respond within one working day."
          />
          <Button asChild variant="outline" className="group mt-8">
            <Link to="/contact-us">
              Ask Us Anything <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold">
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
    </div>
  </section>
);

/* ============ FINAL CTA ============ */
const FinalCTA = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/60 px-6 py-16 shadow-card md:px-12 lg:px-16 lg:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-[380px] w-[380px] rounded-full bg-accent/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "radial-gradient(hsl(var(--ink) / 0.08) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Built for B2B scale
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] text-ink md:text-4xl lg:text-5xl">
              Ready to strengthen your
              <br className="hidden md:block" />
              <span className="text-primary"> B2B warehousing operations?</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Let's understand your current setup and design a warehousing
              solution that actually works at scale.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
            <Button asChild size="lg" className="group w-full sm:w-auto lg:w-full">
              <Link to="/contact-us">
                Get Started
                <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-ink/15 bg-background/60 backdrop-blur hover:bg-background sm:w-auto lg:w-full"
            >
              <Link to="/contact-us">Talk to Our Expert</Link>
            </Button>
            <p className="mt-1 text-center text-xs text-muted-foreground lg:text-right">
              Reply within 1 working day
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default B2BWarehousing;
