import { Link } from "react-router-dom";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Boxes,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Cog,
  FileBarChart,
  Gauge,
  LayoutGrid,
  LineChart,
  Network,
  Package,
  PackageCheck,
  PackageSearch,
  PlugZap,
  Quote,
  RefreshCcw,
  Rocket,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Truck,
  Warehouse,
  Workflow,
} from "lucide-react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

const Page = () => (
  <>
    <Seo {...pageSeo["/capabilities/operations"]} />
    <Hero />
    <KpiMarquee />
    <WhyKpis />
    <KpiBento />
    <ReportingCycle />
    <Capabilities />
    <Onboarding />
    <Testimonials />
    <FinalCTA />
  </>
);

export default Page;

/* ============ HERO ============ */
const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
    <div className="bg-grid absolute inset-0 -z-10 opacity-[0.35]" />
    <div className="absolute -top-24 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />

    <div className="container grid items-center gap-10 py-20 lg:grid-cols-12 lg:gap-14 lg:py-28">
      <div className="lg:col-span-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          KPIs &amp; Capabilities
        </div>

        <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] md:text-5xl lg:text-[52px]">
          Performance You Can See.{" "}
          <span className="relative inline-block text-primary">
            Capabilities You Can Count On.
            <svg aria-hidden viewBox="0 0 220 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
              <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          At AAJ, every partnership is built on defined KPIs, transparent reporting and a structured
          onboarding process that gets you operational in
          <span className="font-medium text-ink"> weeks, not months</span>. Here&rsquo;s exactly what
          you can hold us to.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg" variant="destructive" className="group h-12 px-6 text-sm font-semibold shadow-elevated">
            <Link to="/contact-us">
              Get a Custom Onboarding Plan <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 border-ink/15 px-6 text-sm font-semibold">
            <a href="#kpi-standards">View Our KPI Standards</a>
          </Button>
        </div>
      </div>

      {/* Right: KPI dashboard mock */}
      <div className="lg:col-span-6">
        <KpiDashboardMock />
      </div>
    </div>
  </section>
);

const KpiDashboardMock = () => (
  <div className="relative">
    <div className="absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-primary/15 via-transparent to-accent/15 blur-2xl" />
    <div className="rounded-[28px] border border-border bg-card/90 p-5 shadow-elevated backdrop-blur md:p-7">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Live KPI Dashboard</span>
        </div>
        <Gauge className="h-4 w-4 text-primary" />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          { l: "Inventory Accuracy", v: "99.5%", t: "Target 99%", up: true },
          { l: "On-Time Dispatch", v: "97.3%", t: "Target 95%", up: true },
          { l: "Dock-to-Stock", v: "18 hrs", t: "Target <24h", up: true },
          { l: "SLA Compliance", v: "99.1%", t: "Target 98%", up: true },
        ].map((k) => (
          <div key={k.l} className="rounded-2xl border border-border bg-background p-4">
            <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{k.l}</div>
            <div className="mt-1 font-display text-2xl font-semibold text-ink">{k.v}</div>
            <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-600">
              <TrendingUp className="h-3 w-3" /> {k.t}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-border bg-background p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-ink">7-Day TAT Trend</span>
          <span className="text-emerald-600">+2.1%</span>
        </div>
        <svg viewBox="0 0 220 56" className="mt-3 h-14 w-full">
          <defs>
            <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 40 L30 32 L60 36 L90 22 L120 28 L150 14 L180 18 L220 8"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0 40 L30 32 L60 36 L90 22 L120 28 L150 14 L180 18 L220 8 L220 56 L0 56 Z"
            fill="url(#spark)"
          />
        </svg>
      </div>
    </div>
  </div>
);

/* ============ MARQUEE STRIP ============ */
const KpiMarquee = () => {
  const items = [
    "99.5% inventory accuracy",
    "95%+ TAT achievement",
    "<24 hrs dock-to-stock",
    "30-day go-live commitment",
    "100% scan-based operations",
    "Zero paper records",
  ];
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative border-y border-border bg-ink py-5">
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-10 [animation-duration:42s] hover:[animation-play-state:paused] md:gap-14">
          {loop.map((t, i) => (
            <div key={i} className="flex items-center gap-10 md:gap-14">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white md:text-base">
                {t}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============ WHY KPIS (highlighted full-width strip) ============ */
const WhyKpis = () => (
  <section className="relative overflow-hidden bg-primary/5">
    <div className="bg-dots absolute inset-0 opacity-60" />
    <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
    <div className="container relative grid items-center gap-8 py-14 md:grid-cols-[auto,1fr] md:gap-12 md:py-16">
      <div className="flex items-center gap-4">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-elevated md:h-16 md:w-16">
          <Target className="h-7 w-7 md:h-8 md:w-8" />
        </div>
        <div className="hidden h-16 w-px bg-border md:block" />
      </div>
      <div>
        <h2 className="font-display text-2xl font-semibold leading-tight text-ink md:text-[32px] lg:text-[36px]">
          A 3PL without defined KPIs is a vendor.{" "}
          <span className="text-primary">One with them is a partner.</span>
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Most supply chain problems don&rsquo;t announce themselves - they accumulate silently in
          metrics no one is tracking. KPIs change that. They give you visibility, hold us accountable
          and keep our operations aligned with your goals.
        </p>
      </div>
    </div>
  </section>
);

/* ============ KPI BENTO ============ */
type Kpi = {
  v: string;
  l: string;
  d: string;
  industry?: string;
  icon: typeof Gauge;
  span?: string;
  tone?: "dark" | "primary" | "light";
};

const KpiBento = () => {
  const kpis: Kpi[] = [
    {
      v: "99.5%",
      l: "Inventory Accuracy",
      d: "Physical stock vs WMS count, tracked through scan-based operations and continuous cycle counting.",
      industry: "95–98%",
      icon: PackageCheck,
      span: "md:col-span-2 md:row-span-2",
      tone: "dark",
    },
    {
      v: "97%+",
      l: "On-Time Dispatch (TAT)",
      d: "Orders dispatched within the agreed turnaround window.",
      industry: "92–95%",
      icon: Timer,
      span: "md:col-span-2",
      tone: "primary",
    },
    {
      v: "99.5%",
      l: "Order Accuracy",
      d: "Orders dispatched without pick, pack or dispatch errors, verified by barcode scan and outward weight QC.",
      industry: "98–99%",
      icon: ScanLine,
      span: "md:col-span-2",
    },
    {
      v: "<24 hrs",
      l: "Dock-to-Stock Time",
      d: "From dock arrival to put-away and pick-ready, tracked per inward shipment.",
      industry: "24–48 hrs",
      icon: Warehouse,
      span: "md:col-span-2",
    },
    {
      v: "≤0.5%",
      l: "Inventory Shrinkage",
      d: "Loss to damage, misplacement or error, controlled through CCTV, restricted access and scan verification.",
      industry: "≤1%",
      icon: ShieldCheck,
      span: "md:col-span-2",
    },
    {
      v: "24–48h",
      l: "Return Processing Time",
      d: "Returns received, inspected, QC-graded and restocked or flagged, fully documented at every step.",
      icon: RefreshCcw,
      span: "md:col-span-2",
    },
    {
      v: "↑ Max",
      l: "SLA Compliance Rate",
      d: "Percentage of agreed SLAs met across inward, outward, accuracy and TAT - reviewed weekly &amp; quarterly.",
      icon: CheckCircle2,
      span: "md:col-span-2",
      tone: "primary",
    },
    {
      v: "Live",
      l: "Fill Rate",
      d: "Orders fulfilled completely from available stock - tracked per SKU and channel, reported monthly.",
      icon: LineChart,
      span: "md:col-span-2",
    },
  ];
  return (
    <section id="kpi-standards" className="bg-background">
      <div className="container py-24">
        <SectionHeader
          align="center"
          title={<>The Numbers That Tell You Whether Your <span className="text-primary">Supply Chain Is Working</span></>}
          description="Every AAJ client has a defined KPI set agreed at onboarding. They are tracked continuously, reported on a live dashboard and reviewed together in regular performance calls."
        />

        <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-6 md:gap-6">
          {kpis.map((k) => (
            <KpiTile key={k.l} kpi={k} />
          ))}
        </div>

        <p className="mt-10 flex items-start gap-3 rounded-2xl border border-dashed border-border bg-surface p-5 text-sm text-muted-foreground">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          All KPI benchmarks are agreed per client at onboarding - targets may vary by business type, volume and service level.
        </p>
      </div>
    </section>
  );
};

const KpiTile = ({ kpi }: { kpi: Kpi }) => {
  const Icon = kpi.icon;
  const isDark = kpi.tone === "dark";
  const isPrimary = kpi.tone === "primary";
  const base = isDark
    ? "bg-ink text-white border-ink"
    : isPrimary
    ? "bg-primary text-primary-foreground border-primary"
    : "bg-card text-ink border-border";
  return (
    <article
      className={`group relative overflow-hidden rounded-[28px] border p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated md:p-7 ${kpi.span ?? ""} ${base}`}
    >
      <div className="pointer-events-none absolute -right-6 -bottom-6 opacity-[0.08] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.14]">
        <Icon className="h-40 w-40" />
      </div>
      <div className="relative flex h-full flex-col">
        <div className="mt-auto">
          <div className={`font-display font-semibold leading-none ${kpi.span?.includes("row-span-2") ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"}`}>
            {kpi.v}
          </div>
          <div className={`mt-2 font-display text-base font-semibold md:text-lg ${isDark || isPrimary ? "text-white" : "text-ink"}`}>
            {kpi.l}
          </div>
          <p
            className={`mt-2 text-xs leading-relaxed md:text-sm ${
              isDark || isPrimary ? "text-white/80" : "text-muted-foreground"
            }`}
            dangerouslySetInnerHTML={{ __html: kpi.d }}
          />
          {kpi.industry && (
            <div
              className={`mt-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                isDark || isPrimary
                  ? "border-white/25 text-white/85"
                  : "border-border text-muted-foreground"
              }`}
            >
              <span className="opacity-70">Industry</span>
              <span className="font-semibold">{kpi.industry}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

/* ============ REPORTING CYCLE ============ */
const ReportingCycle = () => {
  const cycles = [
    {
      cadence: "Daily",
      title: "Live Dashboard",
      icon: Activity,
      points: [
        "Inventory levels, order status &amp; dispatch confirmations",
        "Exceptions surfaced in real time via Power BI",
        "Always available - no request needed",
      ],
    },
    {
      cadence: "Weekly",
      title: "Operational Review",
      icon: ClipboardList,
      points: [
        "Order accuracy, TAT, dock-to-stock &amp; shipping performance",
        "Reviewed with your dedicated account manager",
        "Issues flagged and actioned immediately",
      ],
    },
    {
      cadence: "Monthly",
      title: "Performance Report",
      icon: FileBarChart,
      points: [
        "Inventory accuracy, returns &amp; demand patterns",
        "Cost per unit shared as a formal report",
        "With written commentary from the AAJ team",
      ],
    },
    {
      cadence: "Quarterly",
      title: "SLA & Business Review",
      icon: BarChart3,
      points: [
        "Full KPI performance vs agreed benchmarks",
        "SLA compliance &amp; trend analysis",
        "Strategic alignment with your roadmap",
      ],
    },
    {
      cadence: "Annually",
      title: "Strategic Partnership Review",
      icon: CalendarCheck,
      points: [
        "Pricing structure &amp; capability roadmap",
        "Network expansion &amp; long-term strategy",
        "Reviewed together as partners, not vendor &amp; client",
      ],
    },
  ];
  return (
    <section className="bg-surface">
      <div className="container py-24">
        <SectionHeader
          title={<>You Always Know How We&rsquo;re Performing. <span className="text-primary">Because We Tell You Before You Have to Ask</span></>}
          description="AAJ approaches performance reporting as an ongoing process. Through live data, consistent review cycles and proactive communication, our teams stay ahead of issues before they escalate."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {cycles.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="icon-tile h-12 w-12">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {c.cadence}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink md:text-[22px]">
                      {c.title}
                    </h3>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {c.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span dangerouslySetInnerHTML={{ __html: p }} />
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ============ CAPABILITIES (asymmetric, interactive) ============ */
const Capabilities = () => {
  const caps = [
    {
      tag: "Inbound",
      title: "Receiving & Inward Processing",
      icon: PackageSearch,
      points: [
        "PO-based receiving with scan verification",
        "Dock-to-stock in under 24 hours",
        "Weight-based inward QC on every shipment",
        "Damage documentation with photographic proof",
      ],
    },
    {
      tag: "Storage",
      title: "Warehousing & Inventory",
      icon: Warehouse,
      points: [
        "WMS-driven putaway - FIFO, FEFO, zone-based",
        "Batch &amp; expiry tracking with system alerts",
        "Continuous cycle counting - no year-end audits",
        "100,000+ active SKUs managed simultaneously",
      ],
    },
    {
      tag: "Outbound",
      title: "Picking, Packing & Dispatch",
      icon: Package,
      points: [
        "Scan-verified picking - location + item confirmed",
        "Weight-based outward QC before every dispatch",
        "Same-day dispatch with extended cut-off windows",
        "90-day video footage at every packing station",
      ],
    },
    {
      tag: "Transport",
      title: "Transportation & Last Mile",
      icon: Truck,
      points: [
        "Intelligent courier allocation via in-house TMS",
        "Route optimisation for speed and cost",
        "Live shipment tracking from pickup to delivery",
        "NDR management to reduce RTO rates",
      ],
    },
    {
      tag: "Returns",
      title: "Returns & Reverse Logistics",
      icon: RefreshCcw,
      points: [
        "Dedicated reverse logistics workflows",
        "3-step QC - inspect, grade, restock or flag",
        "Returns processed within 24&ndash;48 hours of receipt",
        "Full documentation and credit note generation",
      ],
    },
    {
      tag: "Value-add",
      title: "Value-Added Services",
      icon: Sparkles,
      points: [
        "Kitting, bundling and assembly",
        "Branded and custom packaging",
        "Labeling, shrink wrapping and re-boxing",
        "Just-in-Time packing on confirmed orders",
      ],
    },
    {
      tag: "Technology",
      title: "Systems & Integration",
      icon: PlugZap,
      points: [
        "60+ marketplace and ERP integrations",
        "In-house WMS, OMS &amp; TMS - fully connected",
        "Power BI dashboard - live client access",
        "Open API for custom platform connections",
      ],
    },
    {
      tag: "Network",
      title: "Pan-India Network & Scale",
      icon: Network,
      points: [
        "11 warehouse locations across major cities",
        "800,000+ sq ft of operational infrastructure",
        "24×7 operations across all facilities",
        "Multi-location inventory with centralised visibility",
      ],
    },
  ];
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="bg-grid absolute inset-0 opacity-[0.25]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <LayoutGrid className="h-3.5 w-3.5" /> Our Capabilities
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-ink md:text-4xl lg:text-[44px]">
            A set of capabilities your business can <span className="text-primary">actually rely on.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            AAJ SCM&rsquo;s capabilities span the full supply chain - from the moment goods arrive
            at our dock to the moment they reach your customer. Every capability is live, operational
            and proven at scale.
          </p>
        </div>

        {/* Auto-scrolling infinite marquee */}
        <div className="relative mt-12 -mx-4 overflow-hidden md:-mx-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-40" />
          <div className="group flex w-max animate-marquee gap-5 px-4 pb-6 [animation-duration:60s] hover:[animation-play-state:paused] md:px-8">
            {[...caps, ...caps].map((c, i) => {
              const Icon = c.icon;
              return (
                <article
                  key={`${c.title}-${i}`}
                  className="group/card relative w-[300px] shrink-0 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated md:w-[340px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-ink">
                    {c.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {c.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span dangerouslySetInnerHTML={{ __html: p }} />
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ ONBOARDING (stacked sticky cards like Home) ============ */
const Onboarding = () => {
  const steps = [
    {
      n: "Step 1",
      t: "Discovery",
      tagline: "We start by learning exactly how your supply chain currently works - and where it doesn&rsquo;t.",
      icon: PackageSearch,
      points: [
        "Order volumes, SKU profiles &amp; seasonal demand patterns reviewed",
        "Current pain points, SLA expectations &amp; growth plans discussed",
        "KPI benchmarks agreed - accuracy, TAT, reporting cadence",
        "Special requirements identified - batch, expiry, custom packaging, returns",
      ],
      gradient: "linear-gradient(135deg, hsl(213 11% 96%) 0%, hsl(213 11% 88%) 100%)",
    },
    {
      n: "Step 2",
      t: "Solution Design",
      tagline: "A customised operational plan built around your business - not a standard template applied to everyone.",
      icon: Workflow,
      points: [
        "Warehouse location(s) selected based on demand geography &amp; SLAs",
        "Storage zoning, putaway rules &amp; picking logic configured for your SKU profile",
        "SOPs written and documented for your specific product types",
        "Courier selection &amp; TMS routing rules set up by delivery zone",
      ],
      gradient: "linear-gradient(135deg, hsl(357 65% 94%) 0%, hsl(357 55% 88%) 100%)",
    },
    {
      n: "Step 3",
      t: "Technology Integration",
      tagline: "Your marketplaces, ERP and storefronts connected to AAJ&rsquo;s WMS and TMS - tested before a single order is processed.",
      icon: PlugZap,
      points: [
        "WMS, OMS &amp; TMS integration with your platforms completed and tested",
        "Power BI dashboard configured with your KPIs and reporting preferences",
        "Your team given dashboard access with a full walkthrough session",
        "Integration costs covered by AAJ up to the agreed threshold",
      ],
      gradient: "linear-gradient(135deg, hsl(0 0% 95%) 0%, hsl(0 0% 88%) 100%)",
    },
    {
      n: "Step 4",
      t: "Inventory Inward & Go-Live",
      tagline: "Inventory received, barcoded, binned and cycle-counted. Pilot orders processed under live monitoring before full operations begin.",
      icon: Boxes,
      points: [
        "Inward shipment received, QC-checked and put-away within 24 hours",
        "Each SKU barcoded, allocated a bin location and entered into WMS",
        "Pilot batch of orders processed with AAJ team monitoring every step",
        "Process gaps identified and corrected before full volume goes live",
      ],
      gradient: "linear-gradient(135deg, hsl(45 56% 92%) 0%, hsl(45 56% 82%) 100%)",
    },
    {
      n: "Post Go-Live",
      t: "Continuous Improvement",
      tagline: "Your dedicated account manager proactively tracks KPIs, flags issues and drives continuous improvement.",
      icon: Cog,
      points: [
        "Weekly operational reviews: TAT, accuracy and exception reports",
        "Monthly performance reports with commentary and recommendations",
        "Quarterly SLA review",
        "Continuous SOP improvement as your business evolves",
      ],
      gradient: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 14%) 100%)",
      dark: true,
    },
  ];

  return (
    <section className="bg-background">
      <div className="container py-24">
        <SectionHeader
          eyebrow="Onboarding"
          title={<>A Structured Onboarding Process That Gets You <span className="text-primary">Operational Fast</span></>}
          description="Switching supply chain partners is a significant decision - the transition is often the part businesses worry about most. Here's exactly how we handle it, step by step, with timelines you can hold us to."
        />

        <div className="mt-14 [perspective:1200px]">
          {steps.map((s, i) => {
            return (
              <div
                key={s.t}
                className="sticky"
                style={{
                  top: `${96 + i * 28}px`,
                  paddingBottom: i === steps.length - 1 ? 0 : "24px",
                  zIndex: i + 1,
                }}
              >
                <article
                  className={`group relative overflow-hidden rounded-[28px] border shadow-elevated transition-transform duration-500 ease-out hover:-translate-y-1 ${
                    s.dark ? "border-white/10" : "border-white/60"
                  }`}
                  style={{ background: s.gradient }}
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl transition-transform duration-700 group-hover:scale-110" />
                  <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/20 blur-3xl transition-transform duration-700 group-hover:-translate-y-2" />

                  <div className="relative grid gap-8 p-8 md:gap-10 md:p-12">
                    <div>
                      <span
                        className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] shadow-sm backdrop-blur ${
                          s.dark ? "bg-white/15 text-white" : "bg-white/70 text-primary"
                        }`}
                      >
                        {s.n}
                      </span>
                      <h3
                        className={`mt-3 font-display text-2xl font-semibold leading-tight md:text-3xl lg:text-[34px] ${
                          s.dark ? "text-white" : "text-ink"
                        }`}
                      >
                        {s.t}
                      </h3>
                      <p
                        className={`mt-4 max-w-3xl font-display text-lg font-medium leading-snug md:text-2xl lg:text-[26px] ${
                          s.dark ? "text-white" : "text-ink"
                        }`}
                        dangerouslySetInnerHTML={{ __html: s.tagline }}
                      />
                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {s.points.map((p, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2.5 text-sm ${
                              s.dark ? "text-white/85" : "text-ink/80"
                            }`}
                          >
                            <CheckCircle2
                              className={`mt-0.5 h-4 w-4 shrink-0 ${s.dark ? "text-primary" : "text-primary"}`}
                            />
                            <span dangerouslySetInnerHTML={{ __html: p }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Button asChild size="lg" variant="destructive" className="group h-12 px-6 font-semibold shadow-elevated">
            <Link to="/contact-us">
              Get a Custom Onboarding Plan <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ============ TESTIMONIALS ============ */
const Testimonials = () => {
  const items = [
    {
      q: "We processed over 1 million units in a single month - in just our 4th month of operations. Our TAT achievement was 97.34%, against a 95% target.",
      who: "Operations Head",
      role: "Leading D2C Brand",
      stat: { v: "97.34%", l: "TAT achieved" },
    },
    {
      q: "2019 to 2022 were incredibly dynamic years for us. Your team stood by us every step - navigating challenges and helping us continue our growth trajectory.",
      who: "Senior Leader",
      role: "FMCG Client",
      stat: { v: "4 yrs", l: "Partnership" },
    },
  ];
  return (
    <section className="bg-surface">
      <div className="container py-24">
        <SectionHeader
          align="center"
          title={<>The benchmarks we set are <span className="text-primary">the ones we&rsquo;re held to</span></>}
          description="Here's what that looks like in practice."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated md:p-10"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/20" />
              <p
                className="font-display text-lg leading-snug text-ink md:text-xl"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${t.q}&rdquo;` }}
              />
              <div className="mt-8 flex items-end justify-between gap-6 border-t border-border pt-6">
                <div>
                  <div className="font-semibold text-ink">{t.who}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl font-semibold text-primary">{t.stat.v}</div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{t.stat.l}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ FINAL CTA ============ */
const FinalCTA = () => (
  <section className="relative overflow-hidden bg-foreground py-11 lg:py-14">
    <div className="pointer-events-none absolute inset-0 -z-0">
      <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-accent/20 blur-3xl" />
      <div className="bg-grid absolute inset-0 opacity-[0.06]" />
    </div>
    <div className="container relative">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-background/80">
          <Rocket className="h-3.5 w-3.5" /> Let&rsquo;s get started
        </div>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-background md:text-4xl lg:text-5xl">
          Let&rsquo;s build your onboarding plan -{" "}
          <span className="text-primary">and the KPIs that come with it.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-background/75 md:text-lg">
          Tell us your current supply chain setup and we&rsquo;ll map out an onboarding plan, agree
          your KPI benchmarks and get you operational in weeks.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="group h-12 px-6 font-semibold">
            <Link to="/contact-us">
              Get a Custom Onboarding Plan <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 border-background/30 bg-transparent px-6 font-semibold text-background hover:bg-background hover:text-foreground">
            <Link to="/contact-us">Talk to Our Expert</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
