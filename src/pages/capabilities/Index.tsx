import { useEffect } from "react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  Truck,
  Repeat,
  Plug,
  ScanLine,
  ClipboardCheck,
  ShieldCheck,
  Activity,
  BarChart3,
  Boxes,
  CheckCircle2,
  Eye,
  Gauge,
  Layers,
  Leaf,
  LineChart,
  Lock,
  MapPin,
  PackageCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
  AlertTriangle,
  Camera,
  Network,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const CapabilitiesPage = () => {
  return (
    <>
      <Seo {...pageSeo["/capabilities"]} />
      
      <Hero />
      <StatusBar />
      <ProblemSection />
      <TechStack />
      <DashboardSection />
      <OperationalCapabilities />
      <ScaleSection />
      <FinalCTA />
    </>
  );
};

export default CapabilitiesPage;

/* ================= HERO ================= */
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
            <Cpu className="h-3.5 w-3.5" /> Technology & Capabilities
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.15] md:text-5xl lg:text-[56px] lg:leading-[1.05]">
            Technology that powers{" "}
            <span className="text-primary">operations at scale.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From warehouse to delivery, our technology and processes work
            together to give you accuracy, visibility and control across your
            entire supply chain.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <a href="#tech-stack">
                Explore Our Capabilities
                <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact-us">Request a Demo</Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </div>
  </section>
);

const HeroVisual = () => (
  <div className="relative">
    <div className="grid grid-cols-2 gap-4">
      {[
        { icon: Cpu, label: "WMS", note: "Warehouse OS" },
        { icon: Truck, label: "TMS", note: "Transport" },
        { icon: Repeat, label: "RMS", note: "Returns" },
        { icon: Plug, label: "Integrations", note: "60+ platforms" },
      ].map((s) => (
        <div
          key={s.label}
          className="card-accent-top group rounded-2xl border border-border bg-background p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
        >
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
            <s.icon className="h-5 w-5" />
          </div>
          <div className="mt-4 font-display text-lg font-semibold">{s.label}</div>
          <div className="mt-1 text-sm text-muted-foreground">{s.note}</div>
        </div>
      ))}
    </div>
    <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-gradient-to-br from-primary/5 via-transparent to-accent/10 blur-2xl" />
  </div>
);

/* ================= STATUS BAR ================= */
const StatusBar = () => {
  const items = [
    { icon: Target, text: "99.5% inventory accuracy" },
    { icon: ScanLine, text: "100% scan-based operations" },
    { icon: PackageCheck, text: "10 Cr+ units annually" },
    { icon: Leaf, text: "Paperless operations" },
  ];
  const loop = [...items, ...items, ...items];
  return (
    <section className="border-b border-border bg-foreground py-3 text-background">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
          {loop.map((it, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium">
              <it.icon className="h-4 w-4 text-primary" />
              <span>{it.text}</span>
              <span className="ml-12 h-1 w-1 rounded-full bg-background/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= PROBLEM SECTION ================= */
const ProblemSection = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Understanding the Problem"
        title={
          <>
            Your warehousing challenges might actually be{" "}
            <span className="text-primary">technology challenges.</span>
          </>
        }
        description="When your systems can't keep up with growing volumes, everyday operations quietly become costly inefficiencies and missed opportunities."
      />

      <div className="mx-auto mt-14 max-w-5xl">
        <div className="rounded-2xl border border-border bg-background p-8 shadow-card lg:p-10">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-display text-2xl font-semibold">
              What it takes to scale
            </h3>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Network, text: "Connected systems across operations" },
              { icon: ClipboardCheck, text: "SOP-driven execution" },
              { icon: Eye, text: "Real-time visibility and control" },
              { icon: ScanLine, text: "Scan-based and error-free processes" },
            ].map((p) => (
              <div
                key={p.text}
                className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-background text-primary">
                  <p.icon className="h-4 w-4" />
                </div>
                <p className="pt-1 text-sm font-medium leading-relaxed text-foreground">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ================= TECH STACK ================= */
type StackBlock = {
  icon: React.ElementType;
  title: string;
  tag: string;
  points: string[];
};

const stackBlocks: StackBlock[] = [
  {
    icon: Cpu,
    title: "Warehouse Management System",
    tag: "WMS",
    points: [
      "Live inventory tracking",
      "WMS-driven putaway with multiple rules (FIFO, FEFO, zone-based)",
      "System-generated pick lists",
      "100% barcode scanning at every touchpoint",
      "Continuous cycle counting",
      "2 hours to 24 hour dispatches",
    ],
  },
  {
    icon: Truck,
    title: "Transport Management System",
    tag: "TMS",
    points: [
      "Fully integrated with WMS",
      "Real-time shipment tracking",
      "SLA monitoring and breach alerts",
      "Pan-India courier network (20,000+ pincode support)",
    ],
  },
  {
    icon: Repeat,
    title: "Returns Management System",
    tag: "RMS",
    points: [
      "Integrated with WMS",
      "Process returns in a dedicated warehouse",
      "3-step quality check process for returned items",
      "Packet-wise tracking and visibility of returns and RTO",
    ],
  },
  {
    icon: Plug,
    title: "Integration Layer",
    tag: "API",
    points: [
      "60+ marketplace integrations (Amazon, Flipkart, Myntra and more)",
      "D2C platform integrations (Shopify, WooCommerce and other storefronts)",
      "Courier partner integrations (20+ courier partners)",
      "Bi-directional data sync - orders, inventory and dispatches, all automated",
    ],
  },
];

const TechStack = () => (
  <section id="tech-stack" className="bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Tech Stack"
        title={
          <>
            A seamlessly connected{" "}
            <span className="text-primary">technology ecosystem.</span>
          </>
        }
        description="Our systems are designed to work together, giving you complete visibility and control across your supply chain."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {stackBlocks.map((b) => (
          <div
            key={b.title}
            className="card-accent-top group relative overflow-hidden rounded-2xl border border-border bg-background p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated lg:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-2xl transition group-hover:bg-primary/10" />
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                <b.icon className="h-6 w-6" />
              </div>
              <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {b.tag}
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold leading-snug md:text-2xl">
              {b.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {b.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ================= DASHBOARD ================= */
const DashboardSection = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Dashboard"
        title={
          <>
            Faster decisions start with{" "}
            <span className="text-primary">better visibility.</span>
          </>
        }
        description="Track inventory, movement, returns and demand trends through a centralized dashboard built for faster, smarter decisions."
      />

      <div className="mx-auto mt-12 max-w-5xl">
        <div className="rounded-2xl border border-border bg-background p-3 shadow-elevated md:p-4">
          <div className="rounded-xl bg-foreground p-4 md:p-6">
            {/* Window chrome */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-background/60">
                AAJ Control Tower
              </span>
              <Activity className="h-3.5 w-3.5 text-background/60" />
            </div>

            {/* KPI row */}
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {[
                { label: "Inventory accuracy", value: "99.5%", icon: Target },
                { label: "Orders today", value: "12,480", icon: PackageCheck },
                { label: "Active SKUs", value: "1,02,300", icon: Boxes },
                { label: "On-time dispatch", value: "98.7%", icon: Gauge },
              ].map((k) => (
                <div
                  key={k.label}
                  className="rounded-lg border border-background/10 bg-background/5 p-3"
                >
                  <div className="flex items-center justify-between text-background/70">
                    <span className="text-[10px] font-semibold uppercase tracking-wider">
                      {k.label}
                    </span>
                    <k.icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="mt-2 font-display text-xl font-semibold text-background">
                    {k.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart + side panel */}
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-background/10 bg-background/5 p-4 md:col-span-2">
                <div className="flex items-center justify-between text-background/70">
                  <span className="text-[11px] font-semibold uppercase tracking-wider">
                    Throughput - last 14 days
                  </span>
                  <LineChart className="h-3.5 w-3.5" />
                </div>
                {/* SVG bar chart */}
                <svg viewBox="0 0 280 90" className="mt-3 h-28 w-full">
                  {Array.from({ length: 14 }).map((_, i) => {
                    const heights = [38, 52, 44, 60, 48, 70, 58, 66, 54, 72, 64, 80, 68, 76];
                    const h = heights[i];
                    return (
                      <rect
                        key={i}
                        x={i * 20 + 4}
                        y={90 - h}
                        width={12}
                        height={h}
                        rx={2}
                        className="fill-primary/80"
                      />
                    );
                  })}
                </svg>
              </div>
              <div className="rounded-lg border border-background/10 bg-background/5 p-4">
                <div className="flex items-center justify-between text-background/70">
                  <span className="text-[11px] font-semibold uppercase tracking-wider">
                    Live alerts
                  </span>
                  <BarChart3 className="h-3.5 w-3.5" />
                </div>
                <ul className="mt-3 space-y-2 text-[11px] text-background/80">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Low stock - 14 SKUs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    SLA breach risk - 2
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-background/60" />
                    Returns pending QC - 38
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-center text-[10px] uppercase tracking-wider text-background/50">
              Placeholder - live dashboard preview coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ================= OPERATIONAL CAPABILITIES ================= */
const operationalItems = [
  { icon: ClipboardCheck, text: "SOP-based execution" },
  { icon: ShieldCheck, text: "Regular internal operations audits" },
  { icon: Gauge, text: "Weight-based QC at inward and outward" },
  { icon: Leaf, text: "Green warehousing practices" },
  { icon: AlertTriangle, text: "Discrepancy flagging and exception management" },
  { icon: MapPin, text: "Minimal ODA (Out of Delivery Area) restrictions" },
  { icon: Camera, text: "100% CCTV surveillance and fire safety compliance" },
];

const OperationalCapabilities = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        eyebrow="Operational Capabilities"
        title={
          <>
            Technology is only half the story.{" "}
            <span className="text-primary">How we operate is the other half.</span>
          </>
        }
        description="Our operations are designed to deliver consistent performance, from routine daily orders to massive volume surges."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {operationalItems.map((it) => (
          <div
            key={it.text}
            className="group flex items-start gap-4 rounded-2xl border border-border bg-background p-5 shadow-card transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <it.icon className="h-5 w-5" />
            </div>
            <p className="pt-2 text-sm font-medium leading-relaxed text-foreground">
              {it.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ================= SCALE ================= */
const ScaleSection = () => (
  <section className="relative overflow-hidden bg-secondary py-11 lg:py-14">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-60" />
    <div className="container">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Scale"
            title={
              <>
                Technology built to handle{" "}
                <span className="text-primary">10 crore units a year</span>{" "}
                doesn't struggle.
              </>
            }
            description="Scale from a few thousand to a million orders effortlessly. We absorb the pressure of volume spikes, so you never lose speed or accuracy - and you run your business with complete confidence."
          />

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { value: "10 Cr+", label: "Units / year" },
              { value: "1L+", label: "Active SKUs" },
              { value: "11", label: "Locations" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-background p-5 text-center shadow-card"
              >
                <div className="font-display text-2xl font-semibold leading-none text-foreground md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Layers, text: "100,000+ active SKUs managed simultaneously across the network" },
              { icon: RefreshCw, text: "Multi-location load balancing" },
              { icon: Zap, text: "Rapid onboarding for new clients and SKU categories" },
              { icon: Workflow, text: "Peak season readiness" },
              { icon: Target, text: "Consistent accuracy at volume" },
              { icon: Lock, text: "Resilient, audited and secure operations" },
            ].map((c) => (
              <div
                key={c.text}
                className="rounded-xl border border-border bg-background p-5 shadow-card"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                  <c.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-foreground">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ================= FINAL CTA ================= */
const FinalCTA = () => (
  <section className="relative overflow-hidden bg-foreground py-11 lg:py-14">
    <div className="pointer-events-none absolute inset-0 -z-0">
      <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-accent/20 blur-3xl" />
      <div className="bg-grid absolute inset-0 opacity-[0.06]" />
    </div>
    <div className="container relative">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background/80">
          <Sparkles className="h-3.5 w-3.5" /> Live Walkthrough
        </div>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-background md:text-4xl lg:text-5xl">
          See the technology behind AAJ,{" "}
          <span className="text-primary">before you decide.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-background/75 md:text-lg">
          Get a walkthrough of our WMS and reporting dashboard and see how it
          connects to your existing platforms - before you commit to anything.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="group">
            <Link to="/contact-us">
              Request a Tech Demo
              <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"
          >
            <Link to="/contact-us">Talk to Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
