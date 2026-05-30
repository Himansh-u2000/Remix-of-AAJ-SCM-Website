import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  ScanLine,
  Activity,
  MapPin,
  Layers,
  ShieldCheck,
  RotateCcw,
  PackageCheck,
  Boxes,
  Truck,
  Gauge,
  Timer,
  ClipboardCheck,
  AlertTriangle,
  Wrench,
  Recycle,
  BarChart3,
  Settings2,
  Rocket,
  PlugZap,
  Sparkles,
  Globe2,
  Users,
  Camera,
  FileSearch,
  CalendarClock,
  TrendingUp,
  Store,
  Smartphone,
  Building2,
  Bike,
  Network as NetworkIcon,
  CheckCircle2,
  Eye,
  LineChart,
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
import heroImg from "@/assets/services/b2c-hero.jpg";

// Ecommerce client logos
import muddyWaterLogo from "@/assets/clients-ecommerce/MuddyWater.png";
import nesternLogo from "@/assets/clients-ecommerce/Nestern.png";
import sandboxLogo from "@/assets/clients-ecommerce/Sandbox.png";
import talkingSoxLogo from "@/assets/clients-ecommerce/TalkingSox.png";
import dipsyLogo from "@/assets/clients-ecommerce/Dipsy.png";
import evoGirlLogo from "@/assets/clients-ecommerce/EvoGirl.png";
import mileCollectiveLogo from "@/assets/clients-ecommerce/MileCollective.png";

const Page = () => (
  <>
    <Seo {...pageSeo["/services/ecommerce-fulfillment"]} />
    <Hero />
    <ClientLogos />
    <Synchronization />
    <Omnichannel />
    <SystemsAsOne />
    <Placement />
    <PeakPlanning />
    <Returns />
    <Enterprise />
    <CommerceModels />
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
            Ecommerce Fulfillment Service
          </div>

          <h1 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] md:text-5xl lg:text-[58px]">
            Ecommerce Fulfillment for Scalable{" "}
            <span className="relative whitespace-nowrap text-primary">
              Marketplace
              <svg aria-hidden viewBox="0 0 220 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
                <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            &amp; D2C Operations
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Improve fulfillment speed, inventory coordination, and delivery
            movement across multiple sales channels with omnichannel &amp;
            ecommerce fulfillment operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group h-12 px-6 text-sm font-semibold">
              <Link to="/contact-us">
                Explore Fulfillment Network <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-sm font-semibold">
              <a href="#network">View Our Network</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><PackageCheck className="h-4 w-4 text-primary" /> 99.75% inventory accuracy</span>
            <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> 95% on-time dispatch</span>
            <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4 text-primary" /> Go live in 72 hours</span>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
            <img
              src={heroImg}
              alt="Ecommerce fulfillment warehouse operations with scan-based picking and dispatch"
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
                  Synchronized
                </div>
                <div className="text-sm font-semibold text-ink">
                  WMS · OMS · TMS in sync
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ CLIENT LOGOS (cycling) ============ */
const ClientLogos = () => {
  const logos: { src: string; alt: string; className?: string }[] = [
    { src: muddyWaterLogo, alt: "Muddy Water Co" },
    { src: nesternLogo, alt: "Nestern" },
    { src: sandboxLogo, alt: "The Sandbox Clothing Co." },
    { src: talkingSoxLogo, alt: "Talking Sox" },
    { src: dipsyLogo, alt: "Dipsy" },
    { src: evoGirlLogo, alt: "EvoGirl" },
    { src: mileCollectiveLogo, alt: "Mile Collective" },
  ];
  const SLOTS = 6;
  const [indices, setIndices] = useState<number[]>(() =>
    Array.from({ length: SLOTS }, (_, i) => i % logos.length)
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
    <section className="relative overflow-hidden border-y border-border bg-background py-10 md:py-12">
      <div className="container relative">
        <div className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Ecommerce brands fulfilling with AAJ SCM
        </div>
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
                    className={`h-full w-full object-contain ${logo.className ?? ""}`}
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

/* ============ SECTION 2 — SYNCHRONIZATION ============ */
const SYNC_POINTS = [
  {
    icon: MapPin,
    title: "Stock Positioned Where Demand Is",
    body: "Inventory placement driven by pincode demand and order velocity, not by which warehouse has available space.",
  },
  {
    icon: Truck,
    title: "Courier Allocation on the Same Clock",
    body: "Carrier assignment runs in sync with fulfillment execution, with zero handoff gap between pack-out and pickup.",
  },
  {
    icon: RotateCcw,
    title: "Reverse Flow With Forward Accountability",
    body: "Returns processed with the same SLA discipline as outbound orders so recovered inventory is back to sellable fast.",
  },
  {
    icon: Eye,
    title: "Visibility That Doesn't Wait",
    body: "Live dashboards on inventory, orders, dispatch and SLA — no end-of-day reports, no surprises the next morning.",
  },
];

const Synchronization = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Order Fulfillment Performance Depends on{" "}
            <span className="text-primary">Operational Synchronization</span>
          </>
        }
        description="Most fulfillment breakdowns are not warehouse problems; they are coordination problems. At AAJ SCM, inventory positioning, fulfillment execution and transportation allocation run as one connected operation — not three separate handoffs."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {SYNC_POINTS.map((d) => (
          <div
            key={d.title}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <span className="icon-tile h-12 w-12">
              <d.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">
              {d.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {d.body}
            </p>
            <d.icon className="icon-watermark" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 3 — OMNICHANNEL ============ */
const CHANNELS = [
  {
    icon: Store,
    name: "Marketplace Fulfillment",
    body: "Amazon, Flipkart, Meesho, Myntra — orders sync directly, inventory deducted in real time, SLA mapped per platform.",
  },
  {
    icon: Smartphone,
    name: "D2C Fulfillment",
    body: "Website and WhatsApp commerce orders processed through the same fulfillment flow as your marketplace volume — no separate stock pool.",
  },
  {
    icon: Building2,
    name: "Retail & B2B Replenishment",
    body: "Bulk dispatch, invoice-level tracking and retailer-specific packing compliance — without breaking the inventory sync.",
  },
  {
    icon: Bike,
    name: "Hyperlocal & Same-Day",
    body: "Regional nodes enabled for sub-4-hour and same-day execution where delivery speed is the product.",
  },
];

const Omnichannel = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Omnichannel Fulfillment{" "}
            <span className="text-primary">Without Inventory Fragmentation</span>
          </>
        }
        description="Selling across marketplaces, D2C, retail and hyperlocal channels usually creates one unavoidable problem — inventory split across pools that don't talk to each other. AAJ SCM runs a single inventory layer across every active channel, so every order draws from one source of truth."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {CHANNELS.map((c) => (
          <div
            key={c.name}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-ink md:text-xl">
                {c.name}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 4 — SYSTEMS AS ONE ============ */
const SYSTEMS = [
  {
    icon: NetworkIcon,
    title: "WMS and TMS on the Same Operational Clock",
    body: "Warehouse execution and courier allocation running in sync — no handoff gap between fulfillment and transportation.",
  },
  {
    icon: ScanLine,
    title: "Scan-Based Operations From Inward to Dispatch",
    body: "Barcode validation at inward, scan-assisted picking, packing verification, zero manual dispatch confirmation.",
  },
  {
    icon: PlugZap,
    title: "Every Selling Channel Connected — Including Yours",
    body: "Marketplace plug-ins, API integrations and in-house onboarding support for storefronts of any stack.",
  },
  {
    icon: LineChart,
    title: "Visibility Across Every Fulfillment Stage",
    body: "Live inventory, order SLA tracking, dispatch reports, courier performance and fulfillment analytics in one view.",
  },
];

const SystemsAsOne = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Every Order Moves Faster When{" "}
            <span className="text-primary">WMS, OMS, and TMS Work as One</span>
          </>
        }
        description="Connected systems mean fewer handoffs, fewer manual confirmations and fewer places for an order to silently fall behind."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        {SYSTEMS.map((s) => (
          <div
            key={s.title}
            className="group flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated md:p-7"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-card">
              <s.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold leading-snug text-ink md:text-lg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 5 — INVENTORY PLACEMENT ============ */
const SINGLE = [
  "Stock ships from one central warehouse regardless of where the order originates",
  "Longer transit zones on every non-local order",
  "Higher per-shipment cost",
  "Increased SLA breach risk on marketplace orders",
  "Courier speed becomes the only differentiator",
];

const REGIONAL = [
  "Stock allocated across fulfillment locations based on pincode demand and order velocity",
  "Nearest fulfillable location processes every order",
  "Fewer transit zones, lower shipping cost",
  "Stronger marketplace SLA compliance",
  "Same-day and hyperlocal delivery viable in key metros",
];

const Placement = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Delivery Speed Is an{" "}
            <span className="text-primary">Inventory Placement Decision</span>, Not a Courier Decision
          </>
        }
        description="When all stocks are held in one location, every order outside that region pays the price in transit time, shipping cost and SLA risk. Regional distribution changes that equation at the inventory level, not the courier level."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
        {/* Single location */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-destructive/10 text-destructive">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-destructive">
                The Old Way
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink md:text-xl">
                Single Location Fulfillment
              </h3>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {SINGLE.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/70" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Regional */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-7 shadow-elevated">
          <span className="absolute inset-x-0 top-0 h-[3px] bg-primary" />
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <NetworkIcon className="h-5 w-5" />
            </span>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                The AAJ SCM Way
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink md:text-xl">
                Regionally Distributed Fulfillment
              </h3>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {REGIONAL.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Same-day cross-link */}
      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-start gap-4 rounded-2xl border border-border bg-secondary/50 p-6 md:flex-row md:items-center md:justify-between md:p-7">
        <p className="text-sm leading-relaxed text-foreground/85 md:text-base">
          Brands requiring same-day delivery execution in high-demand cities can move to AAJ SCM's hyperlocal fulfillment operations for sub-4-hour dispatch capability.
        </p>
        <Button asChild size="lg" className="group shrink-0">
          <Link to="/services/same-day-delivery">
            Explore Same-Day Delivery <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ============ SECTION 6 — PEAK PLANNING ============ */
const PEAK = [
  {
    icon: CalendarClock,
    t: "30 Days Before the Sale Opens",
    v: "Demand forecasting and SKU velocity analysis underway, channel-wise order trend review, inventory pre-positioning across regional locations.",
  },
  {
    icon: Layers,
    t: "Dedicated Peak Fulfillment Zones",
    v: "Additional processing areas allocated per sale event, pick-pack stations scaled to projected order volume, no shared floor with standard operations.",
  },
  {
    icon: Truck,
    t: "Courier Capacity Pre-Negotiated",
    v: "Shipping volume committed with carriers before the sale, dispatch sequences mapped by region and SLA tier, no last-minute courier scramble.",
  },
  {
    icon: Activity,
    t: "Same-Day Operational Adjustment",
    v: "Live order flow monitoring throughout the sale window, capacity corrections within the same shift, dispatch prioritization adjusted in real time.",
  },
];

const PeakPlanning = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            High-Volume Sales Are Planned From{" "}
            <span className="text-primary">Data and Trends</span>, Not Managed in the Moment
          </>
        }
        description="Peak fulfillment performance is an outcome of pre-sale planning, not in-sale reaction."
      />

      <div className="relative mx-auto mt-14 max-w-6xl">
        <div className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
        <div className="grid gap-6 lg:grid-cols-4">
          {PEAK.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.t}
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
                <h3 className="mt-6 font-display text-base font-semibold text-ink md:text-lg">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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

/* ============ SECTION 7 — RETURNS ============ */
const RETURNS = [
  {
    icon: Camera,
    t: "Camera-Enabled Return Verification",
    v: "Every return is processed on camera-enabled tables with recorded footage available for up to 90 days. What arrived, its condition and what was done with it is fully documented.",
  },
  {
    icon: FileSearch,
    t: "Dispute Documentation Support",
    v: "Fake returns, condition mismatches and damaged units are flagged with photo and video evidence at inspection — giving you what you need to raise disputes on Amazon, Flipkart or any marketplace.",
  },
  {
    icon: Recycle,
    t: "Inventory Recovery Without Reconciliation Delays",
    v: "Returns that pass inspection are updated at SKU level and back in active inventory within 24 to 48 hours. Unsellable units are quarantined, documented and actioned per your instructions.",
  },
];

const Returns = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Reverse Logistics Handled with the Same{" "}
            <span className="text-primary">Accountability as Order Fulfillment</span>
          </>
        }
        description="A return that is not properly verified, documented and processed is inventory you have already lost. AAJ SCM treats every return as an operational task with a defined outcome."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
        {RETURNS.map((r) => (
          <div
            key={r.t}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <span className="icon-tile h-12 w-12">
              <r.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-base font-semibold leading-snug text-ink md:text-lg">
              {r.t}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {r.v}
            </p>
            <r.icon className="icon-watermark" />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild size="lg" variant="outline" className="group">
          <Link to="/services/returns-management">
            Explore Returns Management <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ============ SECTION 8 — ENTERPRISE WITHOUT COMMITMENTS ============ */
const ENTERPRISE = [
  {
    icon: ShieldCheck,
    k: "99.75%",
    t: "Inventory Accuracy Backed by SLA",
    v: "Tracked daily across every fulfillment location through scan-based operations and cycle counts.",
  },
  {
    icon: Gauge,
    k: "95%",
    t: "On-Time Dispatch Performance",
    v: "Measured per order, per channel, per location. SLA adherence reported transparently through your client dashboard.",
  },
  {
    icon: Rocket,
    k: "72 hrs",
    t: "Go Live in 72 Hours",
    v: "From integration setup to first dispatch in 72 hours. AAJ SCM's in-house team handles platform connections, inward coordination and system configuration end to end.",
  },
  {
    icon: Boxes,
    k: "Pay-as-you-use",
    t: "Only Pay for What You Use",
    v: "No minimum storage commitment, no lock-in period, no flat monthly retainer. Cost is tied to your order volume and space utilization.",
  },
  {
    icon: BarChart3,
    k: "Line-item",
    t: "Transparent Pricing Structure",
    v: "Storage, pick-pack, dispatch and value-added services billed separately with clear line-item reporting. No bundled pricing.",
  },
  {
    icon: Users,
    k: "1:1",
    t: "One Point of Contact",
    v: "A dedicated account manager owns warehouse operations, courier coordination, returns, integrations and peak sale planning.",
  },
  {
    icon: Settings2,
    k: "Same OS",
    t: "Same Infrastructure, Any Scale",
    v: "A D2C brand at 500 orders/month and a marketplace seller at 50,000 orders/month run on the same WMS, the same scan-based floor and the same SLA framework.",
  },
];

const Enterprise = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Enterprise-Grade Fulfillment Operations Without{" "}
            <span className="text-primary">Enterprise-Grade Commitments</span>
          </>
        }
        description="Most enterprise-grade ecommerce fulfillment companies come with long contracts, high minimums and rigid commercial terms that price out growing brands. AAJ SCM operates differently."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ENTERPRISE.map((e) => {
          const Icon = e.icon;
          return (
            <div
              key={e.t}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-display text-xs font-semibold text-primary">
                  {e.k}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug text-ink md:text-lg">
                {e.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.v}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ============ SECTION 9 — COMMERCE MODELS ============ */
const MODELS = [
  { icon: Smartphone, t: "D2C Brands" },
  { icon: Store, t: "Marketplace Sellers" },
  { icon: Building2, t: "Retail Commerce" },
  { icon: Bike, t: "Quick Commerce" },
  { icon: NetworkIcon, t: "B2B Ecommerce" },
  { icon: Layers, t: "High SKU Brands" },
  { icon: TrendingUp, t: "High Volume Operations" },
];

const CommerceModels = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Ecommerce Fulfillment Service That Work Across{" "}
            <span className="text-primary">Every Commerce Model</span>
          </>
        }
        description="Whether you sell direct, through marketplaces, in retail or via quick commerce, the same fulfillment engine adapts to your channel mix."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MODELS.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.t}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-display text-base font-semibold text-ink">
                {m.t}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ============ FAQS ============ */
const FAQ_ITEMS = [
  {
    q: "What product categories does AAJ SCM handle?",
    a: "AAJ SCM handles most product categories including apparel, electronics, FMCG, beauty, home, toys and general merchandise. We do not currently handle perishables, non-vegetarian products, leather, flammable, hazardous or temperature-sensitive products.",
  },
  {
    q: "Is there a minimum order volume requirement to get started?",
    a: "No. Brands at any order volume can onboard with AAJ SCM. You pay for what your operation uses.",
  },
  {
    q: "How do you handle COD order reconciliation and remittance?",
    a: "COD reconciliation and remittance follow standard industry timelines as per courier partner cycles. All COD transactions are tracked and reported through your client dashboard.",
  },
  {
    q: "Do you provide packaging materials or does the brand supply their own?",
    a: "Both options are available. AAJ SCM can supply standard packaging materials or work with brand-supplied packaging based on your operational preference.",
  },
  {
    q: "Can we run kitting, bundling or custom packaging operations inside the warehouse?",
    a: "Yes. Kitting, bundling and custom packaging are handled as value-added services within the fulfillment facility without disrupting standard order processing.",
  },
  {
    q: "What courier partners does AAJ SCM work with and can we bring our own?",
    a: "AAJ SCM works with 20+ courier partners across India. If you have an existing courier relationship you want to retain, that can be accommodated within the operation.",
  },
  {
    q: "Is temperature-controlled or specialized storage available for sensitive products?",
    a: "Temperature-controlled storage is not currently available at AAJ SCM facilities. Brands with temperature-sensitive inventory requirements would need to evaluate this separately before onboarding.",
  },
];

const FAQs = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Frequently Asked <span className="text-primary">Questions</span></>}
        description="Everything you need to know about onboarding, scaling and operating ecommerce fulfillment with AAJ SCM."
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
          <Sparkles className="h-3.5 w-3.5" />
          Ecommerce Fulfillment Partner
        </div>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-[44px]">
          Simplify Ecommerce &amp; Omnichannel Fulfillment Operations Across{" "}
          <span className="text-primary">Sales Channels</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
          Support ecommerce growth with synchronized fulfillment, inventory movement and regional delivery operations across marketplaces, D2C channels and omnichannel commerce networks.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="group h-12 px-6 text-sm font-semibold shadow-elevated">
            <Link to="/contact-us">
              Request Fulfillment Consultation <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/warehouses">
              Explore Our Network <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);