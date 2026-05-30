import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  ScanLine,
  Activity,
  MapPin,
  Layers,
  TrendingUp,
  ShieldCheck,
  Workflow,
  RotateCcw,
  PackageCheck,
  Boxes,
  Truck,
  Gauge,
  CheckCircle2,
  Timer,
  ClipboardCheck,
  AlertTriangle,
  Wrench,
  Package,
  Recycle,
  BarChart3,
  Headphones,
  Settings2,
  Rocket,
  PlugZap,
  Sparkles,
  Globe2,
  Users,
  PhoneCall,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { warehouses } from "@/config/sitemap";
import heroImg from "@/assets/services/b2c-hero.jpg";

const Page = () => (
  <>
    <Seo {...pageSeo["/services/b2c-warehousing"]} />
    <Hero />
    <UspStrip />
    <ModernDemands />
    <WhyChoose />
    <Marketplaces />
    <BreakAndFix />
    <GrowthLever />
    <SpeedAccuracy />
    <ReturnsRTO />
    <Network />
    <ThreeSteps />
    <Testimonials />
    <FAQs />
    <FinalCTA />
  </>
);

export default Page;

/* ============ HERO ============ */
const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
    <div className="bg-grid absolute inset-0 -z-10 opacity-[0.3]" />
    <div className="absolute -top-24 right-0 -z-10 h-[460px] w-[460px] rounded-full bg-primary/10 blur-3xl" />

    <div className="container py-14 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            B2C Warehousing &amp; Fulfilment
          </div>

          <h1 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] md:text-5xl lg:text-[58px]">
            Built for{" "}
            <span className="relative whitespace-nowrap text-primary">
              Same-Day
              <svg aria-hidden viewBox="0 0 220 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
                <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            &amp; Hyperlocal Delivery.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Store inventory closer to demand, process orders faster, and enable
            same-day and next-day delivery across your key markets.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Reduce RTO, speed up dispatch, and improve order accuracy with a
            warehousing setup aligned to modern delivery expectations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group h-12 px-6 text-sm font-semibold">
              <Link to="/contact-us">
                Start Your Fulfilment Setup <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-sm font-semibold">
              <a href="#network">Explore Our Network</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><PackageCheck className="h-4 w-4 text-primary" /> 99.5% order accuracy</span>
            <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Same-day dispatch</span>
            <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4 text-primary" /> 12-city network</span>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
            <img
              src={heroImg}
              alt="Ecommerce fulfilment warehouse with conveyor, pickers and dispatch rider"
              width={1280}
              height={960}
              className="h-auto w-full"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-card backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Timer className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Orders processed
                </div>
                <div className="text-sm font-semibold text-ink">
                  Within hours, not days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ USP MARQUEE STRIP ============ */
const USPS = [
  { icon: Zap, label: "Same-Day Dispatch Capability" },
  { icon: MapPin, label: "Multi-Location Fulfillment" },
  { icon: PackageCheck, label: "99.5% Order Accuracy" },
  { icon: PlugZap, label: "20+ Marketplace Integrations" },
  { icon: Gauge, label: "SLA-Driven Operations" },
  { icon: RotateCcw, label: "Reduced RTO with Smart Fulfillment" },
];

const UspStrip = () => {
  const loop = [...USPS, ...USPS, ...USPS];
  return (
    <section className="border-y border-border bg-ink py-5 text-white">
      <div
        className="relative overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-10">
          {loop.map((u, i) => {
            const Icon = u.icon;
            return (
              <div key={i} className="flex shrink-0 items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold tracking-wide text-white/90">
                  {u.label}
                </span>
                <span className="ml-6 inline-block h-1.5 w-1.5 rounded-full bg-primary/70" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ============ MODERN DEMANDS ============ */
const DEMANDS = [
  { icon: Zap, title: "Fast Order Processing", body: "Process and dispatch orders within hours to support same-day and next-day delivery timelines." },
  { icon: ScanLine, title: "SKU-Level Accuracy", body: "Ensure every order is picked and packed correctly to reduce returns and improve customer experience." },
  { icon: Activity, title: "Real-Time Inventory", body: "Track stock across all channels and locations without mismatches or delays." },
  { icon: MapPin, title: "Multi-Location Fulfilment", body: "Store inventory closer to demand zones to reduce delivery timelines and enable hyperlocal shipping." },
  { icon: Layers, title: "Unified Order Management", body: "Manage orders from all sales channels in one workflow without operational gaps." },
  { icon: TrendingUp, title: "Peak-Ready Operations", body: "Handle high order volumes, festive spikes, and flash sales without delays or breakdowns." },
];

const ModernDemands = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>What Modern Ecommerce <span className="text-primary">Fulfilment Demands</span> Today?</>}
        description="Customers expect faster deliveries, and that starts from the warehouse. Fast execution, accurate fulfilment, and complete control over inventory decide how well you scale."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {DEMANDS.map((d) => (
          <div
            key={d.title}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <span className="icon-tile h-12 w-12">
              <d.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{d.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            <d.icon className="icon-watermark" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ WHY GROWING BRANDS CHOOSE AAJ ============ */
const WHY_POINTS = [
  "Fulfilment Designed Around Your Order Flow",
  "Focus on Reducing RTO, Not Just Shipping Orders",
  "Operations That Stay Stable During Peak Sales",
  "Inventory That Matches Reality, Not Just System Data",
  "Returns That Get Processed, Not Piled Up",
  "Execution Over Promises",
];

const WhyChoose = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            title={<>Why Growing Brands Choose AAJ for <span className="text-primary">B2C Fulfilment</span></>}
            description="Most fulfilment setups are built to process orders. Modern B2C brands need fulfilment that supports faster dispatch, better accuracy, and consistent performance as you scale."
          />
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            That's where{" "}
            <span className="font-semibold text-ink">AAJ Supply Chain Management</span>{" "}
            makes the difference.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="group">
              <Link to="/contact-us">
                Talk to a B2C Specialist <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid gap-3 sm:grid-cols-2">
            {WHY_POINTS.map((p) => (
              <li
                key={p}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.25} />
                </span>
                <span className="pt-1 text-sm font-semibold leading-snug text-ink">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ============ MARKETPLACES ============ */
const MARKETPLACES = [
  "Amazon", "Flipkart", "Myntra", "Ajio", "Nykaa", "Meesho",
  "JioMart", "Snapdeal", "eBay", "Walmart Marketplace", "Etsy",
  "Shopify", "WooCommerce",
];

const Marketplaces = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>From Marketplace to Website, <span className="text-primary">Everything Works in Sync</span></>}
        description="Connect all your sales channels, sync inventory in real time, and meet marketplace standards without operational gaps. When integration and compliance work together, orders get processed faster, dispatch delays reduce, and marketplace SLAs become easier to meet."
      />

      <div className="mx-auto mt-12 max-w-5xl">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
          <div className="flex flex-wrap justify-center gap-3">
            {MARKETPLACES.map((m) => (
              <span
                key={m}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-card"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary transition-transform group-hover:scale-150" />
                {m}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
            {[
              { icon: PlugZap, k: "20+", v: "Marketplace integrations" },
              { icon: Activity, k: "Real-time", v: "Inventory sync" },
              { icon: ShieldCheck, k: "100%", v: "Marketplace SLA compliance" },
            ].map((s) => (
              <div key={s.v} className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-semibold text-primary">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ BREAK & FIX ============ */
const BREAK_FIX = [
  { icon: ScanLine, p: "Wrong SKU Picked", pd: "Leads to returns, reverse logistics, and lost trust.", f: "Barcode-based picking and multi-level checks ensure every order goes out correct." },
  { icon: Timer, p: "Order Dispatched Late", pd: "Delays deliveries and increases cancellations.", f: "Priority-based processing and same-day dispatch keep orders moving without delays." },
  { icon: Package, p: "Poor Packaging", pd: "Damaged products and bad customer experience.", f: "Standardized packaging with quality checks ensures safe delivery and better unboxing." },
  { icon: Recycle, p: "No Return QC Process", pd: "Returned items block inventory and cash.", f: "Structured return QC and fast restocking help recover inventory and reduce losses." },
  { icon: Activity, p: "Inventory Not Updated Properly", pd: "Overselling and stockouts create chaos.", f: "Real-time inventory sync across all channels prevents mismatch and cancellations." },
];

const BreakAndFix = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Where B2C Operations Break - and <span className="text-primary">How to Fix Them</span></>}
        description="In B2C, small mistakes don't stay small - they multiply with every order."
      />

      <div className="mx-auto mt-12 max-w-5xl space-y-4">
        {BREAK_FIX.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.p}
              className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated md:grid-cols-[1fr_auto_1fr]"
            >
              {/* Problem */}
              <div className="p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-destructive/10 text-destructive">
                    <AlertTriangle className="h-5 w-5" />
                  </span>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-destructive">
                    The Break
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink md:text-xl">
                  {b.p}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.pd}</p>
              </div>

              {/* Divider with icon */}
              <div className="relative hidden items-center justify-center px-2 md:flex">
                <div className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-border" />
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-border bg-background text-primary shadow-card">
                  <Icon className="h-5 w-5" />
                </span>
              </div>

              {/* Fix */}
              <div className="bg-secondary/40 p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Wrench className="h-5 w-5" />
                  </span>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Our Fix
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-[15px]">
                  {b.f}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border bg-ink p-8 text-white shadow-elevated md:p-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
              Fix These B2C Fulfilment Gaps Before They Slow Your Growth
            </h3>
            <p className="mt-2 text-sm text-white/75 md:text-base">
              See how AAJ Supply Chain Management optimises your B2C order fulfilment operations.
            </p>
          </div>
          <Button asChild size="lg" className="group h-12 shrink-0 px-6 font-semibold">
            <Link to="/contact-us">
              Contact Us <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ============ GROWTH LEVER ============ */
const LEVERS = [
  { from: "Faster Dispatch", to: "More Delivered Orders", icon: Zap },
  { from: "Accurate Orders", to: "Fewer Returns", icon: PackageCheck },
  { from: "Better Experience", to: "Repeat Customers", icon: Users },
  { from: "Scalable Operations", to: "Growth Without Risk", icon: Rocket },
];

const GrowthLever = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Fulfillment Is Not a Cost - <span className="text-primary">It's a Growth Lever</span></>}
        description="Most B2C or ecommerce businesses try to reduce fulfillment costs. But the real impact shows up in lost orders, returns, and customer experience."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {LEVERS.map((l) => {
          const Icon = l.icon;
          return (
            <div
              key={l.from}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-5 text-sm font-semibold text-muted-foreground">
                {l.from}
              </div>
              <div className="mt-2 flex items-center gap-2 font-display text-lg font-semibold text-ink">
                <ArrowRight className="h-4 w-4 text-primary" />
                {l.to}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-foreground/85 md:text-lg">
        When fulfillment works right, it doesn't just save cost - it helps you{" "}
        <span className="font-semibold text-primary">grow faster.</span>
      </p>

      <div className="mt-8 flex justify-center">
        <Button asChild size="lg" className="group">
          <Link to="/contact-us">
            Let's Build a Scalable Fulfillment <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ============ SPEED + ACCURACY ============ */
const SPEED_ACCURACY = [
  { icon: Zap, k: "Speed alone creates more returns", v: "Quick dispatch with wrong picking increases RTO and customer complaints." },
  { icon: ShieldCheck, k: "Accuracy protects your margins", v: "Right SKU, correct quantity, proper packaging reduces losses and rework." },
  { icon: Gauge, k: "Balance drives real performance", v: "Fast processing with controlled accuracy keeps deliveries on track and customers satisfied." },
];

const SpeedAccuracy = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <SectionHeader
            title={<>Speed With Accuracy: <span className="text-primary">The Real Challenge in B2C</span></>}
            description="Speed without accuracy breaks your fulfilment. Fast delivery means nothing if the order is wrong or delayed at dispatch."
          />
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Gauge className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-2xl font-semibold text-ink">Speed × Accuracy</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Reliable. Scalable. Profitable.</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ol className="relative space-y-5 border-l-2 border-dashed border-border pl-8">
            {SPEED_ACCURACY.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.k} className="relative">
                  <span className="absolute -left-[42px] grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-primary shadow-card">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      0{i + 1}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink md:text-xl">
                      {s.k}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {s.v}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-8 text-base leading-relaxed text-foreground/85">
            When speed and accuracy work together, fulfilment becomes{" "}
            <span className="font-semibold text-primary">reliable, scalable, and profitable</span>{" "}
            as well.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ============ RETURNS & RTO ============ */
const RETURNS = [
  { icon: ClipboardCheck, k: "Address Validation and Order Verification", v: "Validate pin code, flag high-risk orders, and confirm COD orders to reduce failed deliveries." },
  { icon: Truck, k: "Courier Allocation Based on Performance", v: "Assign shipments based on courier success rate by region to improve delivery success." },
  { icon: RotateCcw, k: "Structured Reverse Logistics Flow", v: "Move returns back to warehouse fast and keep the cycle active." },
  { icon: ShieldCheck, k: "QC on Every Return", v: "Check product condition and identify resale, repair, or discard." },
  { icon: Boxes, k: "Fast Restocking Logic", v: "Put sellable inventory back into stock quickly to reduce dead inventory." },
  { icon: PhoneCall, k: "NDR Management Process", v: "Take quick action on failed delivery attempts and reattempt orders to reduce RTO." },
  { icon: BarChart3, k: "Return and RTO Tracking Visibility", v: "Track status at every stage and avoid inventory and reconciliation issues." },
];

const ReturnsRTO = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Returns and RTO Handling That <span className="text-primary">Protects Your Margins</span></>}
        description="Returns and failed deliveries increase costs fast. Control the process and recover value from every order."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {RETURNS.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.k}
              className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <span className="icon-tile h-11 w-11">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug text-ink md:text-lg">
                {r.k}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.v}</p>
              <Icon className="icon-watermark" />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ============ NETWORK / WAREHOUSES ============ */
const Network = () => (
  <section id="network" className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            title={<>Store Your Inventory <span className="text-primary">Closer to Customers</span> for Faster Delivery</>}
            description="A distributed warehouse network helps you process and dispatch orders faster, making same-day and next-day delivery more achievable."
          />
          <p className="mt-5 text-base leading-relaxed text-foreground/85">
            By positioning inventory near your customers, you enable{" "}
            <span className="font-semibold text-ink">hyperlocal delivery capabilities</span>{" "}
            and reduce dependence on long-distance shipping.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/warehouses">
                Explore All Locations <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-elevated md:p-8">
            <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  <MapPin className="h-3.5 w-3.5" /> Pan-India coverage
                </div>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {warehouses.length} cities
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {warehouses.map((w) => (
                  <Link
                    key={w.path}
                    to={w.path}
                    className="group flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {w.label}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ THREE STEPS ============ */
const STEPS = [
  { icon: ClipboardCheck, k: "Requirement Understanding", v: "We understand your SKU mix, order volume, sales channels, and delivery expectations." },
  { icon: Settings2, k: "System Integration and Setup", v: "Connect your marketplaces and website, set up inventory, and align fulfilment workflows." },
  { icon: Rocket, k: "Go Live with Fulfilment", v: "Start processing, packing, and dispatching orders without delays." },
];

const ThreeSteps = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Start Your B2C Warehousing &amp; Fulfilment in <span className="text-primary">3 Simple Steps</span></>}
        description="Get your operations live quickly with a structured onboarding process made for fast execution."
      />

      <div className="relative mx-auto mt-14 max-w-6xl">
        {/* Connecting line */}
        <div className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
        <div className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.k}
                className="group relative rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-[68px] w-[68px] place-items-center rounded-2xl bg-primary text-primary-foreground shadow-elevated">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="font-display text-5xl font-semibold leading-none text-primary/15">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink md:text-xl">
                  {s.k}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.v}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

/* ============ TESTIMONIALS ============ */
const TESTIMONIALS = [
  {
    q: "AAJ has been our warehousing and logistics partner since the inception of Bloomsbury in India. They have successfully managed a 20x growth in our warehousing requirements without major hurdles.",
    a: "Mahendra Lodha",
    c: "CFO & Operations Head, Bloomsbury Publishing India",
  },
  {
    q: "AAJ has worked consistently in the background to provide excellent service and competitive shipping rates. Using AAJ as our distribution hub for Central Asia has opened a new line of business for us.",
    a: "Anu Chauhan",
    c: "Supply Chain Manager, Biozone International Limited",
  },
  {
    q: "Their efficient management and dedicated team have been invaluable in supporting our operations. The strategic spread of AAJ's warehouse facilities is definitely going to play a big role as we expand.",
    a: "Amanpreet Wraich",
    c: "Founder, Muddy Waters Pvt. Ltd.",
  },
  {
    q: "The AAJ team provided invaluable support by storing and manually managing our inventory with exceptional accuracy. This demonstrates AAJ's adaptability and willingness to go beyond standard processes.",
    a: "Tanmana Sarma",
    c: "Founder, Apaapi Threads of Glory",
  },
  {
    q: "We processed more than 1 million units from AAJ's warehouse in Feb 2022 - TAT achievement of 97.34% against a budgeted 95%, in a month with 3 fewer working days.",
    a: "Ankur Kashyap",
    c: "Sr. VP Operations, Cambridge University Press India",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];
  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="container">
        <SectionHeader
          align="center"
          title={<>Fulfilment That <span className="text-primary">Earns Client Trust</span></>}
          description="Brands across categories rely on AAJ to keep their B2C operations running."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-elevated md:p-12">
            <Sparkles className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 text-primary/[0.05]" />
            <div className="relative">
              <div className="text-6xl leading-none text-primary/30">&ldquo;</div>
              <p className="mt-2 font-display text-lg leading-relaxed text-ink md:text-2xl md:leading-snug">
                {t.q}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 font-display text-base font-semibold text-primary">
                  {t.a.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-ink">{t.a}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.c}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {TESTIMONIALS.map((tt, i) => (
              <button
                key={tt.a}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
                  active === i
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-ink",
                )}
              >
                {tt.a.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ FAQS ============ */
const FAQ_ITEMS = [
  { q: "How much control will I have over my inventory and orders?", a: "You get complete visibility into inventory, order status, and returns through a centralized system with real-time updates." },
  { q: "Can I shift from my current 3PL or in-house setup without disruption?", a: "Yes. We plan the transition, align inventory movement, and ensure fulfilment continues without impacting your orders." },
  { q: "How do you handle sudden spikes in order volume during sales?", a: "We prepare manpower, picking zones, and dispatch planning in advance to handle high volumes." },
  { q: "How do you minimize losses from returns and RTO?", a: "We combine order verification, courier performance allocation, and structured return QC to reduce failed deliveries and recover inventory faster." },
  { q: "Will I get visibility into return status and recover inventory?", a: "Yes. You can track returns, QC status, and restock inventory to avoid confusion and revenue loss." },
  { q: "Can I customize fulfilment based on my product type or category?", a: "Yes. We align processes based on your SKU type, packaging needs, and order behaviors." },
  { q: "What if I sell on multiple platforms and add new channels later?", a: "You can connect additional channels anytime and manage them within the same fulfilment setup." },
  { q: "Is this suitable for both small and high-volume ecommerce brands?", a: "Yes. The setup adapts based on your current scale and grows with your order volume." },
  { q: "How quickly can I get started with AAJ SCM fulfilment?", a: "Once requirements are aligned and integration is complete, you can go live and start processing orders within a short timeframe." },
  { q: "Can your warehousing support same-day order processing and dispatch?", a: "Yes. Our fulfilment setup is designed to process and dispatch orders within hours, helping you meet same-day and next-day delivery expectations based on your serviceable locations." },
  { q: "How does your warehouse network support faster and hyperlocal delivery?", a: "We position inventory closer to high-demand locations through a multi-location warehouse network. This helps reduce delivery timelines and enables faster, localized deliveries across key regions." },
];

const FAQs = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Frequently Asked <span className="text-primary">Questions</span></>}
        description="Everything you need to know about onboarding, scaling and operating B2C fulfilment with AAJ SCM."
      />
      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
          {FAQ_ITEMS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-sm transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-background"
            >
              <AccordionTrigger className="text-left font-display text-base font-semibold text-ink hover:no-underline md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

/* ============ FINAL CTA ============ */
const FinalCTA = () => (
  <section className="relative overflow-hidden bg-ink text-white">
    <div
      className="absolute inset-0 -z-0 opacity-[0.18]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--accent)) 0%, transparent 50%)",
      }}
    />
    <div
      className="absolute inset-0 -z-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
    <div className="container relative py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          <Zap className="h-3.5 w-3.5" />
          B2C Fulfilment Partner
        </div>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-[44px]">
          Fix Your B2C Warehousing and Fulfilment Before It Slows Down Your{" "}
          <span className="text-primary">Growth.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
          Partner with AAJ Supply Chain Management to build a faster, more
          accurate, and more scalable ecommerce fulfilment engine.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="group h-12 px-6 text-sm font-semibold shadow-elevated">
            <Link to="/contact-us">
              Start Your Fulfilment Setup <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/services/warehousing">
              Explore Our Warehousing Services <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);