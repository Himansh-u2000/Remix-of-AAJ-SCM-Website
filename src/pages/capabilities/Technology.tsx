import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Network,
  Package,
  Plug,
  Quote,
  Radio,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Workflow,
  XCircle,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoBiozone from "@/assets/clients/biozone.webp";
import logoBloomsbury from "@/assets/clients/bloomsbury.png";
import logoHarper from "@/assets/clients/harpercollins.webp";

const Page = () => (
  <>
    <Seo {...pageSeo["/capabilities/technology"]} />
    <Hero />
    <ConnectedSystems />
    <Ecosystem />
    <Integrations />
    <Scale />
    <Outcomes />
    <FAQ />
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

    <div className="container grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-28">
      <div className="lg:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Tech &amp; Integration
        </div>

        <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] md:text-6xl lg:text-[64px]">
          Technology That Connects Your{" "}
          <span className="relative whitespace-nowrap text-primary">
            Entire Supply Chain
            <svg
              aria-hidden
              viewBox="0 0 220 12"
              className="absolute -bottom-2 left-0 h-3 w-full"
              preserveAspectRatio="none"
            >
              <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          .
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          From warehousing to transportation, our integrated technology ecosystem brings
          <span className="font-medium text-ink"> visibility, accuracy and control</span> across every
          stage of operations.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg" variant="destructive" className="group h-12 px-6 text-sm font-semibold shadow-elevated">
            <Link to="/contact-us">
              Request a Tech Demo <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 border-ink/15 px-6 text-sm font-semibold">
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>
      </div>

      {/* Visual: orbiting node diagram */}
      <div className="relative lg:col-span-5">
        <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <OrbitDiagram />
      </div>
    </div>

    {/* Moving black stats strip */}
    <StatsMarquee />
  </section>
);

const OrbitDiagram = () => {
  const nodes = [
    { icon: ShoppingBag, label: "OMS", a: 0 },
    { icon: Boxes, label: "WMS", a: 72 },
    { icon: Truck, label: "Swift TMS", a: 144 },
    { icon: Plug, label: "APIs", a: 216 },
    { icon: Database, label: "ERP", a: 288 },
  ];
  const R = 130;
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-[440px] items-center justify-center rounded-2xl border border-border bg-background shadow-elevated">
      <svg viewBox="-200 -200 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          </radialGradient>
        </defs>
        <circle cx="0" cy="0" r={R + 40} fill="url(#ringGlow)" />
        <circle cx="0" cy="0" r={R} fill="none" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1.2" className="animate-flow-dash" />
        {nodes.map((n, i) => {
          const next = nodes[(i + 1) % nodes.length];
          const x1 = Math.cos((n.a * Math.PI) / 180) * R;
          const y1 = Math.sin((n.a * Math.PI) / 180) * R;
          const x2 = Math.cos((next.a * Math.PI) / 180) * R;
          const y2 = Math.sin((next.a * Math.PI) / 180) * R;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary) / 0.18)" strokeWidth="1" />;
        })}
      </svg>
      {/* Center hub */}
      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-ink text-background shadow-elevated">
        <div className="text-center">
          <Network className="mx-auto h-6 w-6" />
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider">AAJ Core</div>
        </div>
      </div>
      {nodes.map(({ icon: Icon, label, a }, i) => {
        const x = Math.cos((a * Math.PI) / 180) * R;
        const y = Math.sin((a * Math.PI) / 180) * R;
        return (
          <div
            key={label}
            className="absolute flex flex-col items-center"
            style={{ transform: `translate(${x}px, ${y}px)`, animationDelay: `${i * 0.4}s` }}
          >
            <div className="animate-float-y inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary shadow-card" style={{ animationDelay: `${i * 0.3}s` }}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-1.5 rounded-full bg-background/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink shadow-sm">
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const StatsMarquee = () => {
  const items = [
    "60+ integrations",
    "100% scan-based & paperless",
    "99.5% inventory accuracy",
    "Real-time visibility across all locations",
    "In-house WMS, OMS & TMS",
    "24×7 system uptime",
  ];
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative border-t border-border bg-ink py-5">
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-10 [animation-duration:40s] hover:[animation-play-state:paused] md:gap-14">
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

/* ============ SECTION 2: Connected systems comparison + quote ============ */
const ConnectedSystems = () => {
  const rows = [
    {
      bad: "Manual coordination between teams and platforms",
      good: "Automated flow from order to dispatch, no manual handoffs",
    },
    {
      bad: "No real-time visibility into stock or order status",
      good: "Live inventory, order and shipment data in one view",
    },
    {
      bad: "Delays and errors from disconnected data",
      good: "Errors caught at source before they reach the customer",
    },
    {
      bad: "Multiple systems that don't talk to each other",
      good: "WMS, OMS and TMS connected as one system",
    },
  ];
  return (
    <section className="bg-surface">
      <div className="container py-24">
        <SectionHeader
          align="center"
          title={<>Connected Systems Create <span className="text-primary">Smarter Supply Chains</span></>}
          description="Supply chains become difficult to manage when inventory, orders and transportation operate independently."
        />

        <div className="mx-auto mt-14 grid max-w-5xl overflow-hidden rounded-2xl border border-border bg-background shadow-card md:grid-cols-2">
          <div className="border-b border-border bg-secondary/60 p-6 md:border-b-0 md:border-r">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <XCircle className="h-4 w-4 text-ink/40" /> Without integration
            </div>
          </div>
          <div className="bg-background p-6">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
              <CheckCircle2 className="h-4 w-4" /> With AAJ SCM connected stack
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="contents">
              <div className="border-t border-border bg-secondary/40 p-6 text-sm text-ink/70 md:border-r">
                {r.bad}
              </div>
              <div className="border-t border-border p-6 text-sm font-medium text-ink">
                {r.good}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-bleed quote strip */}
      <div className="relative overflow-hidden bg-ink py-14">
        <div className="bg-dots absolute inset-0 opacity-[0.06]" />
        <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="container flex items-center justify-center gap-4">
          <Quote className="hidden h-10 w-10 shrink-0 text-primary md:block" />
          <p className="text-center font-display text-2xl font-semibold leading-snug text-white md:text-4xl">
            Integrated System Unlocks <span className="text-primary">Speed</span>,{" "}
            <span className="text-primary">Accuracy</span> and{" "}
            <span className="text-primary">Control.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 3: Ecosystem with animated process flow ============ */
const Ecosystem = () => {
  const stages = [
    { icon: ShoppingBag, label: "Order placed" },
    { icon: Workflow, label: "OMS routes" },
    { icon: Boxes, label: "WMS picks & packs" },
    { icon: Truck, label: "Swift dispatches" },
    { icon: Package, label: "Customer receives" },
  ];

  const cards = [
    {
      icon: Workflow,
      title: "OMS",
      tag: "Order Management",
      points: [
        "Multi-channel order intake and processing",
        "Real-time order sync across all platforms",
        "Unified order flow from marketplace to dispatch",
        "Priority-based routing and allocation logic",
      ],
    },
    {
      icon: Boxes,
      title: "WMS",
      tag: "Warehouse Management",
      points: [
        "Live inventory visibility across all locations",
        "100% barcode-based — zero manual entry",
        "WMS-driven picking, putaway & storage logic",
        "Batch, expiry and weight-based QC",
      ],
    },
    {
      icon: Truck,
      title: "AAJ Swift",
      tag: "Transportation",
      points: [
        "Live shipment tracking from pickup to delivery",
        "Intelligent courier allocation by zone and TAT",
        "Route optimisation for cost and speed",
        "SLA monitoring with real-time breach alerts",
      ],
    },
    {
      icon: Plug,
      title: "Connectivity & APIs",
      tag: "Integrations",
      points: [
        "60+ marketplace and platform integrations",
        "ERP connectivity: SAP, Tally and more",
        "Open API for custom connections",
        "Bi-directional sync — no manual imports",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-background">
      <div className="container py-24">
        <SectionHeader
          align="center"
          title={<>Our Connected <span className="text-primary">Technology Ecosystem</span></>}
          description="Our WMS, OMS, TMS and integration layer work together to ensure smooth inventory flow, order management, and shipment visibility."
        />

        {/* Animated flow */}
        <div className="mt-14 overflow-x-auto">
          <div className="mx-auto flex min-w-[760px] max-w-5xl items-center justify-between gap-2 rounded-2xl border border-border bg-surface p-6 md:p-8">
            {stages.map((s, i) => (
              <div key={s.label} className="flex flex-1 items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="animate-node-pulse relative flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-primary shadow-card ring-1 ring-primary/20">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-3 max-w-[110px] text-xs font-semibold uppercase tracking-wider text-ink">
                    {s.label}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <svg viewBox="0 0 120 20" className="mx-1 h-5 flex-1" preserveAspectRatio="none">
                    <line x1="0" y1="10" x2="110" y2="10" stroke="hsl(var(--primary) / 0.35)" strokeWidth="2" className="animate-flow-dash" />
                    <polygon points="110,4 120,10 110,16" fill="hsl(var(--primary))" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Four pillar cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map(({ icon: Icon, title, tag, points }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:border-primary/40 hover:shadow-elevated"
            >
              <span className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <Icon className="icon-watermark h-32 w-32" strokeWidth={1.5} />

              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {tag}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{title}</h3>
              <span className="mt-2 block h-[3px] w-10 rounded-full bg-primary transition-all duration-500 group-hover:w-20" />

              <ul className="mt-6 space-y-3">
                {points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-lg p-2 text-sm text-ink/85 transition-all duration-300 group-hover:bg-primary-soft/40 group-hover:text-ink hover:!bg-primary/10"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 4: Integrations ============ */
const Integrations = () => {
  const groups = [
    {
      icon: ShoppingBag,
      title: "Marketplaces & storefronts",
      items: ["Shopify", "WooCommerce", "Amazon", "Flipkart", "Myntra", "Meesho", "Ajio", "Nykaa", "JioMart"],
    },
    {
      icon: Database,
      title: "ERP & business systems",
      items: ["Unicommerce", "Custom ERP via API", "SAP", "Tally"],
    },
    {
      icon: Truck,
      title: "Courier & logistics partners",
      items: ["Delhivery", "Blue Dart", "Ecom Express", "XpressBees", "DTDC", "20+ more"],
    },
  ];
  const terms = [
    { icon: Sparkles, t: "Free of charge", d: "Integration setup costs covered by AAJ up to a defined threshold — onboarding never delayed by tech costs." },
    { icon: Code2, t: "Open API", d: "Connect any platform not listed above. No additional development overhead on your side." },
    { icon: Zap, t: "Go-live in days", d: "Most integrations are completed and tested within the first week of onboarding." },
  ];
  return (
    <section className="bg-secondary/60">
      <div className="container py-24">
        <SectionHeader
          align="center"
          title={<>Your Platforms. Our System. <span className="text-primary">Zero Manual Work</span> Between Them</>}
          description="We connect with your existing marketplaces, storefronts, ERPs and courier partners so orders flow in and data flows back automatically — with no manual imports or duplicate entry."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {groups.map(({ icon: Icon, title, items }) => (
            <div key={title} className="group rounded-2xl border border-border bg-background p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background hover:text-primary hover:shadow-card"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {terms.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-4 rounded-2xl border border-border bg-background p-6">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-background">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="destructive" className="group h-12 px-6 font-semibold">
            <Link to="/contact-us">
              Check if we integrate with your platform <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 5: Scale ============ */
type CountUpProps = { end: number; suffix?: string; prefix?: string; decimals?: number; duration?: number };
const CountUp = ({ end, suffix = "", prefix = "", decimals = 0, duration = 1800 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(end * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setValue(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Scale = () => {
  const stats = [
    { end: 10, suffix: " Cr+", l: "Units dispatched annually" },
    { end: 200000, suffix: "+", l: "Active SKUs" },
    { end: 11, suffix: "", l: "Locations coordinated centrally" },
    { end: 24, suffix: "×7", l: "Uninterrupted operations" },
  ];
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-0 bg-grid opacity-[0.06]" />
      <div className="absolute -left-20 top-1/3 -z-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 -z-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="container relative z-10 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-[44px]">
            Built for <span className="text-primary">10 Crore Units</span> a Year.
            <br className="hidden md:block" /> Ready for Yours Right Now
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
            Our automation doesn't just handle scale — it was built for it. From 1,000 orders a month to
            10 lakh, the same system runs without manual bottlenecks, coordination failures or
            accuracy loss.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.06]">
              <div className="font-display text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
                <CountUp end={s.end} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 6: Outcomes + testimonials ============ */
const Outcomes = () => {
  const items = [
    { icon: Zap, t: "Faster fulfilment", d: "Automated routing, extended dispatch windows and scan-based picking reduce order-to-dispatch time significantly." },
    { icon: ScanLine, t: "Fewer errors", d: "Scan verification at every touchpoint and outward weight QC catch wrong dispatches before they leave the facility." },
    { icon: Gauge, t: "99.5% inventory accuracy", d: "Maintained through continuous cycle counting, system reconciliation and live SKU-level tracking." },
    { icon: ShieldCheck, t: "Better customer experience", d: "Accurate orders, faster deliveries and live tracking — the three things end customers care about most." },
  ];
  const quotes = [
    {
      q: "AAJ has worked consistently in the background to provide excellent service and competitive shipping rates. Using AAJ as our distribution hub for Central Asia has opened a new line of business for Biozone.",
      a: "Anu Chauhan",
      c: "Supply Chain Manager, Biozone International Limited",
      logo: logoBiozone,
      darkLogo: true,
    },
    {
      q: "AAJ has been our warehousing and logistics partner since the inception of Bloomsbury in India. They have successfully managed a 20x growth in our warehousing requirements without major hurdles.",
      a: "Mahendra Lodha",
      c: "CFO & Operations Head, Bloomsbury Publishing India",
      logo: logoBloomsbury,
    },
    {
      q: "2019-2022 have been so dynamic with a new challenge at every turn, and your team have stood by us every step of the way and helped navigate through all of them.",
      a: "Anantha Padmanabhan",
      c: "CEO, Harper Collins Publishers India",
      logo: logoHarper,
    },
  ];
  return (
    <section className="bg-background">
      <div className="container py-24">
        <SectionHeader
          title={<>What Changes When Your Supply Chain Runs on the <span className="text-primary">Right Technology</span></>}
          description="Technology is the infrastructure. These are the results businesses see when it's working correctly from the first month of operations."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-2xl border border-border bg-background p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-lg font-semibold text-ink">{t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <article key={i} className="relative flex flex-col rounded-2xl border border-border bg-surface p-7 shadow-sm">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" />
              <div className={`mb-5 flex h-16 w-[160px] items-center justify-center rounded-lg px-2 ${q.darkLogo ? "bg-ink" : "bg-background"}`}>
                <img src={q.logo} alt={`${q.c} logo`} loading="lazy" className="max-h-12 max-w-full object-contain" />
              </div>
              <p className="text-sm leading-relaxed text-ink">{q.q}</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold uppercase tracking-wide text-ink">{q.a}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{q.c}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 7: FAQ ============ */
const FAQ = () => {
  const items = [
    {
      q: "Is the WMS built in-house or is it a third-party tool?",
      a: "Fully in-house. It has been built and refined over 20 years of live operations.",
    },
    {
      q: "How long does integration take before we can go live?",
      a: "Most integrations are completed within the first week of onboarding.",
    },
    {
      q: "Do we get access to the dashboard or only reports?",
      a: "You get direct access to all the reports. Custom dashboards are available on request.",
    },
    {
      q: "What happens if there is a system downtime?",
      a: "Our systems run 24×7 with redundancy built in. In the rare event of disruption, our operations team has manual fallback protocols to ensure continuity.",
    },
    {
      q: "Do you offer a technology demo before we commit?",
      a: "Yes. Request a demo and our team will walk you through the WMS, TMS and dashboard before any commercial discussion.",
    },
  ];
  return (
    <section className="bg-surface">
      <div className="container py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              title={<>Answer to all the questions about <span className="text-primary">our technology</span></>}
              description="The most common questions teams ask us during the evaluation phase — answered upfront."
            />
            <Button asChild variant="destructive" size="lg" className="group mt-8 h-12 px-6 font-semibold">
              <Link to="/contact-us">
                Talk to our experts <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-background px-2 shadow-sm">
              {items.map((it, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-b-0">
                  <AccordionTrigger className="px-4 text-left font-display text-base font-semibold text-ink hover:no-underline md:text-lg">
                    {it.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {it.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 8: Final CTA ============ */
const FinalCTA = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="container py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-ink p-10 text-white shadow-elevated md:p-16">
        <div className="bg-grid absolute inset-0 opacity-[0.05]" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
              <Radio className="h-3.5 w-3.5 text-primary" /> Live walkthrough · 30 min
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-[44px]">
              See the Technology Before You Decide.{" "}
              <span className="text-primary">No Commitment Required.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Request a walkthrough of AAJ's WMS, OMS, TMS and reporting dashboard. See how it
              connects to your existing platforms in a live demo — before any commercial discussion.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4">
            <Button asChild size="lg" variant="destructive" className="group h-12 px-6 font-semibold shadow-elevated">
              <Link to="/contact-us">
                Talk to Our Expert <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-white/20 bg-white/5 px-6 font-semibold text-white hover:bg-white/10 hover:text-white">
              <Link to="/capabilities/technology/tms">Explore TMS</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-white/20 bg-white/5 px-6 font-semibold text-white hover:bg-white/10 hover:text-white">
              <Link to="/capabilities/technology/wms">Explore WMS</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);