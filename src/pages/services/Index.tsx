import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Cpu,
  Eye,
  Gauge,
  Layers,
  MapPin,
  Network as NetworkIcon,
  Package,
  PackageCheck,
  RefreshCcw,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Store,
  Timer,
  Truck,
  TrendingDown,
  Workflow,
  Zap,
} from "lucide-react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import b2bImg from "@/assets/setup/b2b.jpg";
import b2cImg from "@/assets/setup/b2c.jpg";
import quickImg from "@/assets/setup/quick.jpg";
import omniImg from "@/assets/setup/omni.jpg";
import samedayImg from "@/assets/setup/sameday.jpg";
import transportImg from "@/assets/setup/transport.jpg";
import ecomImg from "@/assets/setup/ecom.jpg";
import packingImg from "@/assets/setup/packing.jpg";
import returnsImg from "@/assets/setup/returns.jpg";
import faqIllustration from "@/assets/faq-illustration.jpg";

const Page = () => (
  <>
    <Seo {...pageSeo["/services"]} />
    <Hero />
    <FindSetup />
    <StruggleVsSolution />
    <WhatChanges />
    <Industries />
    <Outcomes />
    <NetworkSection />
    <Onboarding />
    <FAQ />
    <FinalCTA />
  </>
);

export default Page;

/* ============ SECTION 1 — HERO ============ */
const HERO_STATS = [
  "Pan-India Fulfillment & Dark Store Network",
  "10 Lac+ Sq. Ft. Warehouse space",
  "99.5% Inventory Accuracy",
  "Trusted by 100+ Businesses",
  "60+ E-Commerce Marketplace Integrations",
  "1,00,000+ SKUs Managed",
  "100 Mn+ Orders Dispatched Annually",
  "20,000+ Pin Codes Serviceable",
  "20+ Trusted Logistics Partners",
  "Same-day & Next-day Delivery",
  "1 Mn+ Tons Shipped Annually",
];

const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
    <div className="bg-grid absolute inset-0 -z-10 opacity-[0.35]" />
    <div className="absolute -top-24 right-0 -z-10 h-[440px] w-[440px] rounded-full bg-primary/5 blur-3xl" />

    <div className="container py-14 lg:py-20">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            End-to-End Supply Chain · One Partner
          </div>

          <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] md:text-5xl lg:text-[60px]">
            Your End-to-End{" "}
            <span className="relative whitespace-nowrap text-primary">
              Supply Chain Partner
              <svg aria-hidden viewBox="0 0 280 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
                <path d="M2 8 Q 140 -2 278 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            in India.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            <span className="font-semibold text-ink">
              3PL, Warehousing, Fulfillment, Transportation, Dark Stores, Same-Day &amp; Next-Day Delivery.
            </span>{" "}
            One partner. One system. Complete control from the moment your inventory arrives to the moment it reaches your customer.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["3PL","Warehousing","Fulfillment","Transportation","Dark Stores","Same-Day & Next-Day"].map((k) => (
              <span key={k} className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                {k}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="destructive" className="group h-12 px-6 text-sm font-semibold shadow-elevated">
              <Link to="/contact-us">
                Get a Custom Supply Chain Plan <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-ink/15 px-6 text-sm font-semibold">
              <a href="#find-setup">Find your setup</a>
            </Button>
          </div>
        </div>

        {/* Right: stat constellation */}
        <div className="relative lg:col-span-5">
          <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="rounded-2xl border border-border bg-background/95 p-6 shadow-elevated backdrop-blur">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                AAJ at a glance
              </span>
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-2.5">
              {HERO_STATS.map((s) => (
                <li
                  key={s}
                  className="group flex items-start gap-3 rounded-lg border border-transparent px-2 py-1.5 text-sm text-ink transition-colors hover:border-border hover:bg-surface"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="font-medium leading-snug">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ SECTION 2 — FIND THE RIGHT SETUP (interactive) ============ */
type Req = {
  q: string;
  rec: { label: string; to: string }[];
  explain: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
};

const REQS: Req[] = [
  {
    icon: Building2,
    q: "I manage bulk distribution (B2B)",
    rec: [
      { label: "B2B Warehousing", to: "/services/b2b-warehousing" },
    ],
    explain: "Efficient bulk storage, distributor fulfillment and reliable movement across regions.",
    image: b2bImg,
  },
  {
    icon: Store,
    q: "I sell online (B2C or eCommerce)",
    rec: [
      { label: "B2C Warehousing", to: "/services/b2c-warehousing" },
    ],
    explain: "Fast order processing, same-day &amp; next-day delivery, last-mile dispatch and returns management.",
    image: b2cImg,
  },
  {
    icon: Zap,
    q: "I am looking for quick commerce services",
    rec: [
      { label: "B2C Warehousing", to: "/services/b2c-warehousing" },
    ],
    explain: "Slot-based delivery, hyperlocal hubs and rapid pick-pack-dispatch from the closest dark store.",
    image: quickImg,
  },
  {
    icon: Layers,
    q: "I sell across multiple channels",
    rec: [{ label: "Talk to our team", to: "/contact-us" }],
    explain: "Track and manage your inventory across marketplaces, retail and direct channels - from one source of truth.",
    image: omniImg,
  },
  {
    icon: Timer,
    q: "I need same-day or next-day delivery",
    rec: [
      { label: "B2C Warehousing", to: "/services/b2c-warehousing" },
    ],
    explain: "Fulfillment from the nearest dark store, express courier allocation and extended dispatch windows to meet tight promises.",
    image: samedayImg,
  },
  {
    icon: Truck,
    q: "I need only B2B transportation",
    rec: [{ label: "Talk to our team", to: "/contact-us" }],
    explain: "Bulk movement across regions with optimised routing, FTL and LTL options.",
    image: transportImg,
  },
  {
    icon: Package,
    q: "I need only eCommerce delivery service",
    rec: [{ label: "Talk to our team", to: "/contact-us" }],
    explain: "Fast, reliable last-mile delivery with COD, tracking and seamless RTO handling.",
    image: ecomImg,
  },
  {
    icon: PackageCheck,
    q: "I need packaging support aligned to dispatch",
    rec: [{ label: "Talk to our team", to: "/contact-us" }],
    explain: "On-demand packing that cuts inventory and storage costs, aligned with real order flow.",
    image: packingImg,
  },
  {
    icon: RefreshCcw,
    q: "I need help with returns & reverse logistics",
    rec: [{ label: "Talk to our team", to: "/contact-us" }],
    explain: "Efficient reverse pickups, quality checks, grading and faster restocking back into sellable inventory.",
    image: returnsImg,
  },
];

const FindSetup = () => {
  const [active, setActive] = useState(0);
  const cur = REQS[active];
  const Icon = cur.icon;
  return (
    <section id="find-setup" className="bg-surface">
      <div className="container py-16">
        <SectionHeader
          title={<>Find the Right Supply Chain <span className="text-primary">Setup for Your Business</span></>}
          description="Tell us who you are. We'll show the exact mix of services that fits how you actually move inventory."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Left: requirement list */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background shadow-card">
              {REQS.map((r, i) => {
                const isActive = i === active;
                const IIcon = r.icon;
                return (
                  <li key={r.q}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`group flex w-full items-center gap-4 px-5 py-4 text-left transition-colors ${
                        isActive ? "bg-primary/5" : "hover:bg-surface"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                          isActive
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-surface text-ink"
                        }`}
                      >
                        <IIcon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 font-display text-base font-semibold text-ink md:text-lg">
                        {r.q}
                      </span>
                      <ArrowUpRight
                        className={`h-5 w-5 transition-all ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        } group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: sticky recommendation panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 flex h-full min-h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-elevated lg:min-h-[640px]">
              {/* Image area */}
              <div className="relative h-56 w-full overflow-hidden md:h-64">
                <img
                  key={cur.image}
                  src={cur.image}
                  alt={cur.q}
                  loading="lazy"
                  width={896}
                  height={512}
                  className="absolute inset-0 h-full w-full object-cover animate-fade-in-up"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-background/95 text-primary shadow-elevated ring-1 ring-border">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Recommended for you
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink md:text-[26px]">
                  {cur.q}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: cur.explain }}
                />
                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {cur.rec.map((r) => (
                    <Link
                      key={r.to + r.label}
                      to={r.to}
                      className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
                    >
                      {r.label}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
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
};

/* ============ SECTION 3 — STRUGGLE vs SOLUTION (sticky reveal) ============ */
const STRUGGLES = [
  "Setups don't scale with growth",
  "Visibility across operations is lost",
  "Coordination between vendors fails",
  "Costs rise due to inefficiencies",
  "No integration with modern quick commerce networks",
  "Inability to meet same-day & next-day delivery expectations",
];

const SOLUTION_POINTS = [
  { icon: NetworkIcon, t: "Integrated supply chain infrastructure" },
  { icon: Eye, t: "Real-time information across every node" },
  { icon: Gauge, t: "Faster, fact-based decisions" },
  { icon: TrendingDown, t: "Lower cost-to-serve as you scale" },
];

const StruggleVsSolution = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // when top of track hits viewport top -> 0; when bottom leaves -> 1
      const total = rect.height - vh;
      const passed = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? passed / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 0 .. 1 -> translate from 100% (right) to ~-15% (covers ~85% of left card on large screens)
  const slide = Math.min(1, Math.max(0, (progress - 0.15) / 0.55));
  const tx = 100 - slide * 100; // % of own width

  return (
    <section className="bg-background">
      <div className="container py-16">
        <SectionHeader
          title={<>Why Supply Chains Often <span className="text-primary">Struggle as Businesses Grow</span></>}
          description="As you scale, the cracks show. Here is what changes when one connected partner takes ownership end-to-end."
        />

        {/* Long scroll track for the reveal */}
        <div ref={trackRef} className="relative mt-10 h-[140vh]">
          <div className="sticky top-24 h-[62vh] min-h-[520px]">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-surface shadow-elevated">
              {/* Struggle card (base) */}
              <div className="absolute inset-0 flex flex-col p-6 md:p-10 lg:p-12">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  The problem
                </div>
                <h3 className="mt-4 max-w-xl font-display text-2xl font-semibold leading-tight text-ink md:text-3xl lg:text-[38px]">
                  Growth breaks the supply chain that got you here
                </h3>
                <ul className="mt-6 grid max-w-2xl gap-3 md:grid-cols-2">
                  {STRUGGLES.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 rounded-xl border border-border bg-background p-3 text-sm font-semibold text-ink"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <ChevronDown className="h-4 w-4 rotate-180" />
                      </span>
                      <span className="leading-snug">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution card (slides in) */}
              <div
                className="absolute inset-y-0 right-0 w-full md:w-[85%] lg:w-[88%] overflow-hidden rounded-l-3xl bg-ink p-5 text-white shadow-elevated md:p-8 lg:p-10"
                style={{ transform: `translateX(${tx}%)`, transition: "transform 80ms linear" }}
              >
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
                <div className="relative flex h-full flex-col">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    How AAJ solves it
                  </div>
                  <h3 className="mt-3 max-w-2xl font-display text-xl font-semibold leading-tight text-white md:text-2xl lg:text-[28px]">
                    Built as one solution. Not managed as separate services
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                    An integrated supply chain that runs as a unified network - with real-time information across every operation, so you monitor everything and make faster, better decisions.
                  </p>
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {SOLUTION_POINTS.map(({ icon: I, t }) => (
                      <div key={t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2.5">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <I className="h-4 w-4" />
                        </span>
                        <span className="text-xs font-semibold leading-snug text-white">{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <div className="inline-flex items-center gap-3 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-elevated md:text-sm">
                      Result: Efficiency, control &amp; scalability
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 4 — WHAT CHANGES ============ */
const WhatChanges = () => {
  const pillars = [
    { icon: Eye, t: "Accurate, traceable inventory" },
    { icon: Rocket, t: "Faster, more reliable deliveries" },
    { icon: Gauge, t: "Decisions on facts, not guesses" },
    { icon: TrendingDown, t: "Predictable, controlled costs" },
  ];
  return (
    <section className="bg-surface">
      <div className="container py-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              title={<>What Changes When Your Supply Chain <span className="text-primary">Starts Working Right</span></>}
              description="Operations become smooth. Inventory is accurate and easy to trace, deliveries are faster and more reliable and you operate on facts instead of guesses. A predictable workflow where costs are under control - so you grow with confidence."
            />
          </div>
          <div className="lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map(({ icon: I, t }) => (
                <div
                  key={t}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
                >
                  <span className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <I className="h-6 w-6" />
                  </span>
                  <p className="mt-5 font-display text-lg font-semibold leading-snug text-ink">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 5 — INDUSTRIES (orbit / marquee mix) ============ */
const INDUSTRIES = [
  { name: "Quick Commerce", note: "10-min to same-day fulfillment" },
  { name: "Retail & Distribution", note: "Pan-India distributor coverage" },
  { name: "FMCG & Consumer Goods", note: "High-velocity SKU handling" },
  { name: "eCommerce & B2C", note: "Marketplace + D2C integrations" },
  { name: "Healthcare & Pharma", note: "Compliant, audit-ready ops" },
  { name: "Publishing & Books", note: "Title-level inventory accuracy" },
  { name: "Lifestyle & Fashion", note: "Season cycles, returns built-in" },
];

const Industries = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="bg-dots absolute inset-0 -z-10 opacity-60" />
    <div className="container py-16">
      <SectionHeader
        align="center"
        className="mx-auto"
        title={<>Built for the Industries That <span className="text-primary">Move India</span></>}
        description="We design supply chain solutions for a wide range of industries - adapting to their specific operating models, compliance needs and customer expectations."
      />

      <div className="mt-12">
        {/* Marquee with hover-pause */}
        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex animate-marquee gap-5 [animation-duration:60s] group-hover:[animation-play-state:paused]">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
              <IndustryChip key={ind.name + i} name={ind.name} note={ind.note} />
            ))}
          </div>
        </div>
        <div className="mt-5 group relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex animate-marquee-reverse gap-5 [animation-duration:75s] group-hover:[animation-play-state:paused]">
            {[...INDUSTRIES.slice().reverse(), ...INDUSTRIES].map((ind, i) => (
              <IndustryChip key={"r-" + ind.name + i} name={ind.name} note={ind.note} muted />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const IndustryChip = ({ name, note, muted = false }: { name: string; note: string; muted?: boolean }) => (
  <div
    className={`flex min-w-[260px] shrink-0 flex-col gap-1 rounded-2xl border px-5 py-4 shadow-card ${
      muted ? "border-border bg-surface" : "border-border bg-background"
    }`}
  >
    <div className="font-display text-base font-semibold text-ink">{name}</div>
    <div className="text-xs text-muted-foreground">{note}</div>
  </div>
);

/* ============ SECTION 6 — OUTCOMES (What you get / What powers it) ============ */
const OUTCOMES = [
  "End-to-end visibility and control across your supply chain",
  "Faster, more reliable order fulfillment",
  "Scalable operations that grow with your business",
  "Better coordination across warehousing and transportation",
  "Measurable improvements in efficiency and performance",
  "Same-day and next-day delivery capability",
  "Reduced packaging waste and storage costs via JIT packing",
];

const POWERS = [
  { icon: ClipboardList, t: "SOP-driven execution across all operations" },
  { icon: NetworkIcon, t: "Pan-India warehousing & logistics network" },
  { icon: Layers, t: "Scalable infrastructure across locations" },
  { icon: Cpu, t: "Seamless integration with existing logistics" },
  { icon: ShieldCheck, t: "Consistent, reliable operational performance" },
  { icon: Zap, t: "Dark store network & hyperlocal hubs" },
  { icon: PackageCheck, t: "Just-in-Time packing workflows" },
];

const Outcomes = () => (
  <section className="bg-surface">
    <div className="container py-16">
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl font-semibold leading-[1.15] text-ink md:text-4xl lg:text-[44px]">
          What you&rsquo;re actually getting when you{" "}
          <span className="text-primary">work with AAJ SCM.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          Built around outcomes, not just operations. Here&rsquo;s what businesses experience with a connected supply chain partner.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Outcomes */}
        <div className="rounded-2xl border border-border bg-background p-7 shadow-card md:p-9">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
              What this means for your business
            </h3>
          </div>
          <ul className="mt-7 space-y-3">
            {OUTCOMES.map((o) => (
              <li key={o} className="flex items-start gap-3 text-sm leading-relaxed text-foreground md:text-[15px]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {o}
              </li>
            ))}
          </ul>
        </div>
        {/* Powers */}
        <div className="rounded-2xl border border-border bg-background p-7 shadow-card md:p-9">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
              <Settings2 className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
              What powers this
            </h3>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {POWERS.map(({ icon: I, t }) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <I className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium leading-snug text-ink">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ SECTION 7 — NETWORK (modern locations) ============ */
import whBhiwandi from "@/assets/warehouses/bhiwandi.png";
import whBangalore from "@/assets/warehouses/bangalore.png";
import whDelhi from "@/assets/warehouses/delhi.png";
import whHyderabad from "@/assets/warehouses/hyderabad.png";
import whSonipat from "@/assets/warehouses/sonipat.png";
import whRohtak from "@/assets/warehouses/rohtak.png";
import whKolkata from "@/assets/warehouses/kolkata.png";
import whKundli from "@/assets/warehouses/kundli.png";
import whGhaziabad from "@/assets/warehouses/ghaziabad.png";
import whChennai from "@/assets/warehouses/chennai.png";
import whNoida from "@/assets/warehouses/noida.png";
import whGurgaon from "@/assets/warehouses/gurgaon.png";

const LOCATIONS: { name: string; slug: string; img: string }[] = [
  { name: "Bhiwandi", slug: "bhiwandi", img: whBhiwandi },
  { name: "Bangalore", slug: "bangalore", img: whBangalore },
  { name: "Delhi", slug: "delhi", img: whDelhi },
  { name: "Hyderabad", slug: "hyderabad", img: whHyderabad },
  { name: "Sonipat", slug: "sonipat", img: whSonipat },
  { name: "Rohtak", slug: "rohtak", img: whRohtak },
  { name: "Kolkata", slug: "kolkata", img: whKolkata },
  { name: "Kundli", slug: "kundli", img: whKundli },
  { name: "Ghaziabad", slug: "ghaziabad", img: whGhaziabad },
  { name: "Chennai", slug: "chennai", img: whChennai },
  { name: "Noida", slug: "noida", img: whNoida },
  { name: "Gurgaon", slug: "gurgaon", img: whGurgaon },
];

const NetworkSection = () => (
  <section className="bg-background">
    <div className="container py-10 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeader
          align="center"
          className="mx-auto"
          title={<>Explore Our Presence Across India for <span className="text-primary">Faster Deliveries</span></>}
        />
      </div>

      <div className="relative mx-auto mt-8 max-w-5xl">
        {/* Faded grid lines — drawn as cell borders, masked to fade at edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 85% at center, black 30%, transparent 92%)",
            maskImage:
              "radial-gradient(ellipse 70% 85% at center, black 30%, transparent 92%)",
          }}
        >
          {LOCATIONS.map((loc) => (
            <div key={loc.slug} className="border-b border-r border-border/80" />
          ))}
        </div>
        <ul className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          {LOCATIONS.map((loc) => (
            <li key={loc.slug} className="flex justify-center py-8">
              <Link
                to={`/warehouses/${loc.slug}`}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <span className="relative block h-20 w-20 overflow-hidden rounded-full ring-1 ring-border transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:ring-2 group-hover:ring-primary/60 group-hover:shadow-[0_18px_40px_-12px_hsl(var(--primary)/0.45)] sm:h-24 sm:w-24">
                  <img
                    src={loc.img}
                    alt={`${loc.name} warehouse`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />
                </span>
                <span className="font-display text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-primary">
                  {loc.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg" variant="destructive" className="group h-12 px-6 font-semibold">
          <Link to="/contact-us">
            Streamline your logistics <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-12 border-ink/15 px-6 font-semibold">
          <Link to="/warehouses">Explore warehouses</Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ============ SECTION 8 — ONBOARDING FLOW ============ */
const STEPS = [
  { icon: ClipboardList, t: "Understanding your business", d: "Order volume, peaks, channels and the daily challenges you face." },
  { icon: Workflow, t: "Designing the right solution", d: "A customised supply chain strategy aligned to your goals." },
  { icon: ShieldCheck, t: "SOP setup", d: "Structured processes for accuracy, consistency and smooth ops." },
  { icon: Cpu, t: "System integration", d: "We integrate with your ERP, OMS and marketplaces." },
  { icon: Rocket, t: "Going live with confidence", d: "Launch with full visibility and ongoing performance tracking." },
];

const Onboarding = () => (
  <section className="overflow-x-clip bg-surface">
    <div className="container py-16">
      <SectionHeader
        align="center"
        className="mx-auto"
        title={<>What Happens Once You <span className="text-primary">Get Started</span></>}
        description="A structured onboarding that gets you live without the usual chaos."
      />

      <div className="mt-12">
        {/* Desktop horizontal flow */}
        <div className="relative mx-auto hidden max-w-5xl px-4 py-4 lg:block">
          <ol className="relative grid grid-cols-5 gap-3">
            {STEPS.map((s, i) => (
              <li key={s.t} className="relative flex min-w-0 flex-col items-center px-1 text-center">
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-[27px] left-1/2 z-0 h-0.5 w-full"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to right, hsl(var(--primary)) 0 8px, transparent 8px 16px)",
                    }}
                  />
                )}
                <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-background ring-2 ring-primary text-primary animate-node-pulse">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 font-display text-sm font-semibold leading-snug text-ink lg:text-base">
                  {s.t}
                </h3>
                <p className="mt-2 break-words text-xs leading-relaxed text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile vertical */}
        <ol className="relative space-y-6 lg:hidden">
          <span className="absolute left-7 top-2 bottom-2 w-px bg-border" />
          {STEPS.map((s, i) => (
            <li key={s.t} className="relative flex gap-4">
              <span className="relative z-10 mt-1 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background ring-2 ring-primary text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-ink">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

/* ============ SECTION 9 — FAQ ============ */
const FAQS = [
  {
    q: "How do you handle sudden sales spikes?",
    a: "Our shared-user facilities allow us to scale labour and storage space up or down to meet seasonal demand.",
  },
  {
    q: "What security measures are in place?",
    a: "All hubs feature 24/7 CCTV, restricted biometric access, fire-prevention systems and regular safety audits.",
  },
  {
    q: "Do you provide custom packaging?",
    a: "Yes - specialised kitting, branded packaging for D2C and reinforced crating for fragile B2B goods.",
  },
  {
    q: "How do you enable same-day and next-day delivery?",
    a: "Through inventory positioned at the right location, extended dispatch windows and automatic courier allocation via our TMS.",
  },
  {
    q: "How does quick commerce appointment delivery work?",
    a: "Orders are assigned specific 2-4 hour delivery slots and dispatched from our nearest dark store - ensuring precise, on-time delivery every time.",
  },
  {
    q: "How are returns (RTO) processed?",
    a: "Returned items are QC-checked, graded (Sellable / Damaged) and restocked or sidelined within 24-48 hrs.",
  },
  {
    q: "Can you help with GST registration (APOB)?",
    a: "Yes. We provide the documentation to register our warehouses as Additional Places of Business on your GST.",
  },
];

const FAQ = () => (
  <section className="bg-background">
    <div className="container py-16">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader
            title={<>Frequently Asked <span className="text-primary">Questions</span></>}
            description="Answers to the most common questions about onboarding, operations and delivery."
          />
          <div className="mt-8 hidden overflow-hidden rounded-2xl border border-border bg-surface lg:block">
            <img
              src={faqIllustration}
              alt="Integrated supply chain network across India"
              loading="lazy"
              width={1024}
              height={1024}
              className="mx-auto block h-56 w-auto max-w-full object-contain"
            />
          </div>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible defaultValue="item-0" className="overflow-hidden rounded-2xl border border-border bg-background shadow-card">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border last:border-b-0">
                <AccordionTrigger className="px-6 py-5 text-left font-display text-base font-semibold text-ink hover:no-underline md:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
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

/* ============ SECTION 10 — FINAL CTA ============ */
const FinalCTA = () => (
  <section className="bg-surface">
    <div className="container py-14">
      <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white shadow-elevated md:p-14">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Let&rsquo;s build your plan
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-white md:text-4xl lg:text-[48px]">
              Not Sure What You Need?{" "}
              <span className="text-primary">Let&rsquo;s Map It Together.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              Get a customised solution with our flexible 3PL services, designed to support your business goals.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Button asChild size="lg" variant="destructive" className="group h-12 px-6 font-semibold shadow-elevated">
              <Link to="/contact-us">
                Talk to our expert <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-white/25 bg-transparent px-6 font-semibold text-white hover:bg-white hover:text-ink">
              <Link to="/contact-us">Get a free consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
