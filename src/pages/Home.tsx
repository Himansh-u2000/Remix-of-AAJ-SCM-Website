import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gauge,
  ShieldCheck,
  Truck,
  Warehouse,
  Boxes,
  Layers,
  Repeat,
  Network,
  Zap,
  TrendingUp,
  Quote,
  Sparkles,
  Star,
  LayoutGrid,
  Plug,
} from "lucide-react";
import { ShoppingBag, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SectionHeader from "@/components/SectionHeader";
import heroImg640Avif from "@/assets/hero-warehouse-640.avif";
import heroImg960Avif from "@/assets/hero-warehouse-960.avif";
import heroImg1280Avif from "@/assets/hero-warehouse-1280.avif";
import heroImg640Webp from "@/assets/hero-warehouse-640.webp";
import heroImg960Webp from "@/assets/hero-warehouse-960.webp";
import heroImg1280Webp from "@/assets/hero-warehouse-1280.webp";
import heroImgJpg from "@/assets/hero-warehouse-opt.jpg";
import certIntertek from "@/assets/cert-intertek.jpg";
import certIso27001 from "@/assets/cert-iso-27001.jpg";
import certIso9001 from "@/assets/cert-iso-9001.jpg";
import solWarehousing from "@/assets/solution-warehousing.jpg";
import solFulfillment from "@/assets/solution-fulfillment.jpg";
import solB2B from "@/assets/solution-b2b.jpg";
import solTransport from "@/assets/solution-transport.jpg";
import solReturns from "@/assets/solution-returns.jpg";
import logoBiozone from "@/assets/clients/biozone.webp";
import logoBloomsbury from "@/assets/clients/bloomsbury.png";
import logoHarper from "@/assets/clients/harpercollins.webp";
import logoCambridge from "@/assets/clients/cambridge.png";
import logoScholastic from "@/assets/clients/scholastic.png";
import logoTynor from "@/assets/clients/tynor.png";
import logoMuddy from "@/assets/clients/muddy-waters.avif";
import logoApaapi from "@/assets/clients/apaapi.webp";
import logoPanMacmillan from "@/assets/clients/pan-macmillan.png";
import logoSaaki from "@/assets/clients/saaki.avif";
import logoPearson from "@/assets/clients/pearson.jpg";
import logoBezome from "@/assets/clients/Bezome.png";
import logoBluOne from "@/assets/clients/BluOne.png";
import logoChupps from "@/assets/clients/Chupps.png";
import logoExcel from "@/assets/clients/Excel.png";
import logoHachette from "@/assets/clients/Hachette.png";
import logoNextEducation from "@/assets/clients/NextEducation.png";
import logoPhysicsWallah from "@/assets/clients/PhysicsWallah.png";
import logoSpringer from "@/assets/clients/Springer.png";
import logoVissco from "@/assets/clients/Vissco.png";
import logoWoltersKluwer from "@/assets/clients/WoltersKluwer.png";
import logoRelx from "@/assets/clients/Relx.png";
import logoImpex from "@/assets/clients/Impex.png";

const Home = () => {
  return (
    <>
      <Seo {...pageSeo["/"]} />
      <Hero />
      <RunSupplyChain />
      <Stats />
      <EnterpriseAccess />
      <PeakReadiness />
      <GrowthPartner />
      <TechExecution />
      <HealthScore />
      <Testimonials />
      <ValueAdded />
      <SolutionsCards />
      <FinalCTA />
    </>
  );
};

/* ============ Section 1: HERO ============ */
const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    {/* Decorative layers */}
    <div className="bg-grid absolute inset-0 -z-10 opacity-[0.35]" />

    <div className="container grid items-center gap-10 py-10 lg:grid-cols-12 lg:py-14">
      <div className="lg:col-span-7">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-ink shadow-card">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
            Pan-India 3PL
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-ink shadow-card">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" strokeWidth={2.5} />
            5-star rated
          </span>
        </div>

        <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] md:text-6xl lg:text-[68px]">
          Reliable, Cost-Effective &amp;{" "}
          <span className="relative whitespace-nowrap text-primary">
            Tech-Enabled
            <svg
              aria-hidden
              viewBox="0 0 220 12"
              className="absolute -bottom-2 left-0 h-3 w-full"
              preserveAspectRatio="none"
            >
              <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>{" "}
          Supply Chain Management
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Your business has a promising future - your supply chain shouldn&rsquo;t be the weak link. Pan-India reach,
          5-star ratings and the new gold standards of <span className="font-medium text-ink">same-day and same-hour deliveries</span>{" "}
          shouldn&rsquo;t be reserved for the top brands. That&rsquo;s exactly why we exist.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg" variant="destructive" className="group h-12 pl-6 pr-3 text-sm font-semibold shadow-elevated">
            <Link to="/contact-us">
              Level up your supply chain
              <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="group h-12 border-ink/15 pl-6 pr-5 text-sm font-semibold">
            <Link to="/services">
              Explore our services
              <LayoutGrid className="ml-3 h-4 w-4 text-ink transition-transform group-hover:scale-110" strokeWidth={2.5} />
            </Link>
          </Button>
        </div>

        <SocialProofRow />

      </div>

      {/* Hero visual */}
      <div className="relative lg:col-span-5">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
          <picture>
            <source
              type="image/avif"
              srcSet={`${heroImg640Avif} 640w, ${heroImg960Avif} 960w, ${heroImg1280Avif} 1280w`}
              sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, (min-width: 640px) 90vw, 100vw"
            />
            <source
              type="image/webp"
              srcSet={`${heroImg640Webp} 640w, ${heroImg960Webp} 960w, ${heroImg1280Webp} 1280w`}
              sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, (min-width: 640px) 90vw, 100vw"
            />
            <img
              src={heroImgJpg}
              alt="Modern enterprise warehouse with workers using tablets"
              width={1280}
              height={880}
              decoding="async"
              {...({ fetchpriority: "high" } as Record<string, string>)}
              className="h-[460px] w-full object-cover"
            />
          </picture>
          {/* Floating stat card */}
          <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-primary/30 bg-[hsl(357_100%_97%)] p-4 shadow-card backdrop-blur">
            <div className="grid grid-cols-3 divide-x divide-primary/20">
              <MiniRed v="95%" l="On-time" />
              <MiniRed v="99.75%" l="Accuracy" />
              <MiniRed v="12+" l="Locations" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Full-width services strip */}
    <ServicesStrip />
  </section>
);

const ServicesStrip = () => {
  const items: { label: string; to?: string }[] = [
    { label: "B2B Warehousing", to: "/services/b2b-warehousing" },
    { label: "B2C Warehousing", to: "/services/b2c-warehousing" },
    { label: "Warehousing", to: "/services/warehousing" },
    { label: "Same Day Delivery" },
    { label: "E-commerce Fulfillment" },
    { label: "Transportation" },
  ];

  return (
    <div className="w-full px-4 py-5 sm:px-6 sm:py-6">
      <div
        className="mx-auto w-full max-w-[1400px] rounded-2xl border border-[hsl(350_80%_88%)] bg-[hsl(350_100%_98%)] p-1.5 shadow-card"
      >
        <div className="grid grid-cols-2 sm:flex sm:flex-nowrap sm:items-stretch">
          {items.map(({ label, to }, i) => {
            const base =
              "relative flex items-center justify-center whitespace-nowrap px-3 py-2.5 text-center font-display text-[10px] font-bold uppercase tracking-[0.06em] text-ink transition-colors hover:text-primary sm:flex-1 sm:px-3 sm:py-3 sm:text-[11px] sm:tracking-[0.08em] md:px-4 md:text-xs";
            // Separator: on mobile (2 cols), add right border to first col and bottom border to top row.
            // On desktop, add left border to every item except first.
            const isLeftCol = i % 2 === 0;
            const isTopRow = i < items.length - 2;
            const sep =
              `${isLeftCol ? "border-r border-[hsl(350_80%_88%)]" : ""} ${isTopRow ? "border-b border-[hsl(350_80%_88%)]" : ""} sm:border-b-0 sm:border-r-0 ${i !== 0 ? "sm:border-l sm:border-[hsl(350_80%_88%)]" : ""}`;
            const cls = `${base} ${sep}`;
            return to ? (
              <Link key={label} to={to} className={cls}>
                {label}
              </Link>
            ) : (
              <button key={label} type="button" className={cls}>
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CornerBrackets = ({ dashed = false }: { dashed?: boolean }) => {
  const style = dashed ? "border-dashed" : "border-solid";
  const color = "border-primary";
  return (
    <>
      <span aria-hidden className={`pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 ${style} ${color}`} />
      <span aria-hidden className={`pointer-events-none absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 ${style} ${color}`} />
      <span aria-hidden className={`pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 ${style} ${color}`} />
      <span aria-hidden className={`pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 ${style} ${color}`} />
    </>
  );
};

const Mini = ({ v, l }: { v: string; l: string }) => (
  <div className="px-3 text-center first:pl-0 last:pr-0">
    <div className="font-display text-lg font-semibold text-ink">{v}</div>
    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{l}</div>
  </div>
);

const MiniRed = ({ v, l }: { v: string; l: string }) => (
  <div className="px-3 text-center first:pl-0 last:pr-0">
    <div className="font-display text-lg font-semibold text-primary">{v}</div>
    <div className="text-[11px] font-semibold uppercase tracking-wider text-primary/80">{l}</div>
  </div>
);

const AVATAR_IMAGES = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=68",
];

const SocialProofRow = () => {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
      <Link
        to="/clients"
        aria-label="See our 200+ trusted brands"
        className="group inline-flex items-center gap-3"
      >
        <div className="flex -space-x-2">
          {AVATAR_IMAGES.map((src, i) => (
            <span
              key={`${src}-${i}`}
              className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-white shadow-elevated ring-1 ring-border transition-transform group-hover:-translate-y-0.5"
              style={{ zIndex: 10 - i }}
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </span>
          ))}
        </div>
        <span className="text-sm font-medium text-ink/80 group-hover:text-primary">
          Trusted by <span className="font-semibold text-ink group-hover:text-primary">200+ Brands</span>
        </span>
      </Link>

      <div className="inline-flex items-center gap-2 text-sm font-medium text-ink/80">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Sparkles className="lucide lucide-plug text-[#c11f27] w-[18px] h-[18px]" strokeWidth={2.5} />
        </span>
        <span><span className="font-semibold text-ink">60+</span> Platform Integrations</span>
      </div>
    </div>
  );
};

/* ============ Section 2 ============ */
const RunSupplyChain = () => {
  const items = [
    {
      eyebrow: "Dependable Team",
      title: "Your Dependable Extended Team",
      body: "We don't wait to be told. We propose SOP improvements, take initiative and show up round the clock when it matters most.",
    },
    {
      eyebrow: "Inventory Accuracy",
      title: "Inventory Always On-Point",
      body: "Tech-driven cycle counts keep accuracy ahead of demand. As you scale, our infrastructure scales with you - without missing a beat.",
    },
    {
      eyebrow: "Real-Time Visibility",
      title: "Real-Time Visibility, Predictable Ops",
      body: "Our integrated WMS, TMS and RMS deliver real-time analytics, so blind spots never become risk.",
    },
  ];
  return (
    <section className="bg-surface">
      <div className="container py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left billboard */}
          <div className="relative lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-background p-10 text-ink shadow-elevated md:p-12">
                {/* Pink translucent checkered pattern */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--primary) / 0.10) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.10) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur">
                    The AAJ Difference
                  </span>
                  <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.05] text-ink md:text-[44px] lg:text-[48px]">
                    Why Brands Choose AAJ Supply Chain Management
                  </h2>
                  <p className="mt-7 max-w-sm text-base leading-relaxed text-muted-foreground">
                    We run the supply chain so you can run your business - dependable teams, accurate inventory and real-time visibility, every day.
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="group mt-9 h-12 bg-primary px-6 font-semibold text-primary-foreground shadow-elevated hover:bg-primary/90"
                  >
                    <Link to="/services">
                      Explore our services <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right numbered cards */}
          <div className="lg:col-span-7">
            <div className="flex h-full flex-col gap-4">
              {items.map(({ eyebrow, title, body }, i) => (
                <article
                  key={title}
                  className="group relative flex flex-1 items-center gap-6 overflow-hidden rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated md:gap-7 md:p-6"
                >
                  <span className="relative shrink-0 font-display text-[52px] font-semibold leading-none text-primary/90 transition-transform duration-500 group-hover:scale-105 md:text-[60px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative min-w-0 flex-1">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary/80 md:text-[11px]">
                      {eyebrow}
                    </div>
                    <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink md:text-lg">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground md:text-sm">
                      {body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ Section 3: STATS ============ */
type CountUpProps = { end: number; prefix?: string; suffix?: string; smallSuffix?: string; decimals?: number; duration?: number };
const CountUp = ({ end, prefix = "", suffix = "", smallSuffix = "", decimals = 0, duration = 1800 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - startTime) / duration);
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
      {smallSuffix && <span className="text-[55%] font-bold">{smallSuffix}</span>}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { end: 200, suffix: "+", l: "SUPPLY CHAINS MANAGED\n" },
    { end: 99.75, suffix: "%", decimals: 2, l: "INVENTORY ACCURACY\n" },
    { end: 24, suffix: "/7", l: "OPERATIONAL WAREHOUSES\n" },
    { end: 60, prefix: "<", smallSuffix: " min", l: "QUICK COMMERCE DISPATCH\n" },
    { end: 1, suffix: "M+", smallSuffix: " sq ft", l: "PAN-INDIA NETWORK\n" },
    { end: 95, suffix: "%", l: "ON-TIME DELIVERY\n" },
  ];
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="bg-dots absolute inset-0 -z-10 opacity-60" />
      <div className="absolute -left-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="container py-14">
        <SectionHeader
          eyebrow="Performance"
          title={<>Performance You Can <span className="text-primary">Measure</span>.<br className="hidden md:block" /> Reliability You Can <span className="text-primary">Trust</span></>}
        />

        <div className="relative mt-12 grid grid-cols-2 sm:grid-cols-3">
          {/* Vertical divider at 1/2 (mobile only) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 w-px sm:hidden"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, hsl(var(--border)) 10%, hsl(var(--border)) 90%, transparent 100%)",
            }}
          />
          {/* Horizontal dividers at 1/3 and 2/3 (mobile only, between 3 rows) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/3 h-px sm:hidden"
            style={{
              background: "linear-gradient(to right, transparent 0%, hsl(var(--border)) 10%, hsl(var(--border)) 90%, transparent 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-2/3 h-px sm:hidden"
            style={{
              background: "linear-gradient(to right, transparent 0%, hsl(var(--border)) 10%, hsl(var(--border)) 90%, transparent 100%)",
            }}
          />
          {/* Faded vertical dividers (sm+, between 3 columns) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px sm:block"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, hsl(var(--border)) 15%, hsl(var(--border)) 85%, transparent 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px sm:block"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, hsl(var(--border)) 15%, hsl(var(--border)) 85%, transparent 100%)",
            }}
          />
          {/* Faded horizontal divider between the 2 rows (sm+) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px sm:block"
            style={{
              background: "linear-gradient(to right, transparent 0%, hsl(var(--border)) 15%, hsl(var(--border)) 85%, transparent 100%)",
            }}
          />
          {stats.map((s) => (
            <div key={s.l} className="px-4 py-10 text-center sm:px-6 sm:py-12">
              <div className="font-display text-4xl font-extrabold leading-none tracking-tight text-primary md:text-5xl">
                <CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} smallSuffix={(s as any).smallSuffix} decimals={s.decimals} />
              </div>
              <div className="mt-4 whitespace-pre-line text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-muted-foreground md:text-xs">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ Section 4 ============ */
const EnterpriseAccess = () => {
  const features = [
    "Barcode scan-based inward & outward",
    "Integrated warehousing & transportation",
    "Batch-level & SKU-level visibility",
    "Advanced KPI dashboards & analytics",
    "Compliant fulfillment centers & warehouses",
    "Quick commerce - pick, pack, dispatch soon",
    "Pay-per-use flexibility",
    "No lock-in contracts",
  ];
  return (
    <section className="bg-surface">
      <div className="container grid gap-10 py-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Built for growth"
            title={<>Enterprise-Grade Supply Chain - <span className="text-primary">Accessible to Every</span> Growing Business</>}
            description="SMEs and growing businesses often compromise on process discipline due to cost. We provide enterprise-grade infrastructure without enterprise-level fixed costs - because businesses don't lack ambition, they lack access."
          />
          <Button asChild className="group mt-9 h-12 px-6 font-semibold" variant="destructive" size="lg">
            <Link to="/services">
              View all solutions <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f}
                className="group flex h-full items-center gap-3 rounded-xl border border-border bg-background p-4 transition-all hover:border-ink/20 hover:shadow-card"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="flex-1 text-center text-sm font-medium text-ink">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ Section 5: Peak Readiness ============ */
const PeakReadiness = () => {
  const pillars = [
    {
      head: "Capacity",
      items: ["Forecast-based capacity planning", "Buffer space for high-volume cycles"],
    },
    {
      head: "Workforce",
      items: ["Pre-trained surge manpower pools", "Extended shift frameworks"],
    },
    {
      head: "Execution",
      items: ["Real-time dispatch", "TAT monitoring"],
    },
    {
      head: "Visibility",
      items: ["Integrated WMS & TMS", "Live ops dashboards"],
    },
  ];
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container py-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left text */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <SectionHeader
                eyebrow="Peak readiness"
                title={<>When Volume Spikes, <span className="text-primary">Structure Leads</span></>}
                description="Festive cycles and campaign spikes test logistics partners. Weak systems slow down - strong systems scale up. At AAJ, peak readiness isn't reactive. It's pre-engineered."
              />
              <Button
                asChild
                size="lg"
                className="group mt-8 h-12 bg-ink px-6 font-semibold text-background hover:bg-ink/90"
              >
                <Link to="/capabilities">
                  See how we scale <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right boxed grid */}
          <div className="lg:col-span-7">
            <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Center node with dashed corner brackets */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background sm:flex"
              >
                <CornerBrackets dashed />
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-elevated">
                  <span className="font-display text-[10px] font-semibold uppercase tracking-[0.18em]">
                    AAJ
                  </span>
                </div>
              </div>

              {pillars.map(({ head, items }, idx) => {
                const rightAlign = idx === 1 || idx === 3;
                return (
                <div
                  key={head}
                  className={`relative rounded-none border border-ink/15 bg-background p-6 transition-all hover:border-ink/30 md:p-7 ${rightAlign ? "text-right" : ""}`}
                >
                  <CornerBrackets />
                  <div className="font-display text-[12px] font-bold uppercase tracking-[0.18em] text-primary">
                    {head}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {items.map((t) => (
                      <li key={t} className="text-sm leading-relaxed text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ Section 6: 7 partner reasons ============ */
type PartnerItem = { t: string; b: string; gradient: string; dark?: boolean };
const PartnerCards = ({ items }: { items: PartnerItem[] }) => {
  const refs = useRef<Array<HTMLElement | null>>([]);
  const [collapsed, setCollapsed] = useState<boolean[]>(() => items.map(() => false));
  useEffect(() => {
    const onScroll = () => {
      const next: boolean[] = items.map((_, i) => {
        const el = refs.current[i];
        const nextEl = refs.current[i + 1];
        if (!el || !nextEl) return false;
        const stickyTop = 96 + i * 56;
        const headerH = 56;
        return nextEl.getBoundingClientRect().top <= stickyTop + headerH;
      });
      setCollapsed((prev) =>
        prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);
  return (
    <div className="mt-14 [perspective:1200px]">
      {items.map((it, i) => (
        <div
          key={it.t}
          className="sticky"
          style={{
            top: `${96 + i * 56}px`,
            paddingBottom: i === items.length - 1 ? 0 : "24px",
            zIndex: i + 1,
          }}
        >
          <article
            ref={(el) => (refs.current[i] = el)}
            className={`group relative overflow-hidden rounded-[28px] border shadow-elevated transition-transform duration-500 ease-out hover:-translate-y-1 ${
              it.dark ? "border-white/10" : "border-white/60"
            }`}
            style={{ background: it.gradient }}
          >
            {/* Compact header — visible only when collapsed (next card stacked above) */}
            <div
              className={`relative flex items-center gap-3 border-b px-6 py-3 transition-opacity duration-300 md:gap-4 md:px-8 ${
                it.dark ? "border-white/10" : "border-ink/5"
              } ${collapsed[i] ? "opacity-100" : "pointer-events-none opacity-0"}`}
              aria-hidden={!collapsed[i]}
            >
              <h3
                className={`truncate font-display text-base font-semibold leading-tight md:text-lg ${
                  it.dark ? "text-white" : "text-ink"
                }`}
              >
                {it.t}
              </h3>
            </div>

            <div className="relative grid gap-8 p-8 md:grid-cols-[1fr,auto] md:items-center md:gap-10 md:p-12 md:pt-10">
              <div>
                <h3
                  className={`font-display text-2xl font-semibold leading-tight md:text-3xl lg:text-[34px] ${
                    it.dark ? "text-white" : "text-ink"
                  }`}
                >
                  {it.t}
                </h3>
                <p
                  className={`mt-3 max-w-2xl text-sm leading-relaxed md:text-base ${
                    it.dark ? "text-white/80" : "text-ink/75"
                  }`}
                  dangerouslySetInnerHTML={{ __html: it.b }}
                />
              </div>

              <div
                className={`hidden h-20 w-20 shrink-0 items-center justify-center rounded-2xl font-display text-3xl font-bold shadow-sm backdrop-blur transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 md:flex ${
                  it.dark ? "bg-white/15 text-white" : "bg-white/60 text-ink/80"
                }`}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

const GrowthPartner = () => {
  const items = [
    {
      t: "Flexible to Start",
      b: "No lock-in contracts. Pay-per-use pricing. Start operations without long-term obligations or risk.",
      gradient: "hsl(357 60% 95%)",
    },
    {
      t: "Built to Scale",
      b: "New locations, higher volumes, expanded needs - never switch partners just because you&rsquo;ve outgrown the last one.",
      gradient: "hsl(0 0% 94%)",
    },
    {
      t: "Round the Clock Operations",
      b: "24-hour warehouse operations give you the agility to handle requests that can&rsquo;t wait until morning.",
      gradient: "hsl(357 55% 93%)",
    },
    {
      t: "Q-Commerce Capable, Day One",
      b: "Operations structured around tight execution windows - speed never comes at the cost of accuracy.",
      gradient: "hsl(0 0% 92%)",
    },
    {
      t: "Tech-Driven Visibility & Control",
      b: "Integrated WMS and TMS deliver complete control and visibility across your logistics operations.",
      gradient: "hsl(357 60% 91%)",
    },
    {
      t: "Same Standards at Every Scale",
      b: "SME or large enterprise - the same SOP-driven systems and operational discipline apply.",
      gradient: "hsl(0 0% 90%)",
    },
    {
      t: "Dynamic Supply Chain Experts",
      b: "A young, proactive, solution-driven team that goes the extra mile so you don&rsquo;t have to worry.",
      gradient: "hsl(0 0% 10%)",
      dark: true,
    },
  ];
  return (
    <section className="bg-surface">
      <div className="container py-14">
        <SectionHeader
          eyebrow="The right 3PL partner"
          title={<>Growing Together Starts With the <span className="text-primary">Right 3PL Partner</span></>}
          description="A growing business needs a supply chain that keeps up. Requirements change overnight, forecasts fail - you need a partner who not only understands this, but can deal with it. Here's how we've helped 200+ brands stay ahead."
        />

        <PartnerCards items={items} />
      </div>
    </section>
  );
};

/* ============ Section 7: Tech ============ */
const TechExecution = () => {
  const features = [
    "API integrations: 60+ marketplaces, 10+ ERPs, 20+ transporters",
    "Live time-stamped tracking at every operational step",
    "Batch & expiry tracking using FIFO / FEFO logic",
    "Barcode scanning for accurate inbound, picking and dispatch",
    "Advanced inventory logic and automated cycle counts",
    "Warehouse location management and inventory rules in WMS",
    "Client access to live reports and dashboards",
  ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const TECH_INTERVAL = 2200;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % features.length);
    }, TECH_INTERVAL);
    return () => clearInterval(id);
  }, [paused, features.length]);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + features.length) % features.length);
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container px-4 py-16 sm:px-6 md:py-14">
        <div className="grid gap-10 rounded-3xl border border-border bg-surface p-5 shadow-card sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-12">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <SectionHeader
            eyebrow="Technology"
            title={<>Where Technology Meets <span className="text-primary">Execution</span></>}
            description="Blind spots increase costs - we optimize your operations. Our integrated WMS, TMS and RMS track every warehouse action across completely paperless, technology-driven facilities."
          />

          <div
            className="mt-9 min-h-[120px]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Technology capabilities"
          >
            <div className="flex min-h-[64px] items-center rounded-2xl border border-primary/20 bg-background px-4 py-2 sm:min-h-0 sm:px-5 sm:py-2.5">
              <p
                key={index}
                className="animate-fade-in-up text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {features[index]}
              </p>
            </div>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-border" aria-hidden>
              <div
                key={index}
                className="h-full origin-left bg-primary"
                style={{
                  animation: `progress-fill ${TECH_INTERVAL}ms linear forwards`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous capability"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-ink transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next capability"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-ink transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <Button asChild className="h-12 rounded-full px-5 text-xs font-semibold uppercase tracking-wider sm:px-7 sm:text-sm" variant="destructive" size="lg">
              <Link to="/capabilities">
                Know more about our capabilities
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="overflow-hidden rounded-2xl border border-border bg-background p-3 shadow-elevated sm:p-5 lg:p-7">
            <DashboardMock />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

const DashboardMock = () => (
  <div className="rounded-xl border border-border bg-background p-4 shadow-card sm:p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="text-sm font-semibold text-ink">Live Operations</span>
      </div>
      <span className="text-xs text-muted-foreground">Updated just now</span>
    </div>
    <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
      {[
        { l: "Orders today", v: "12,480" },
        { l: "On-time", v: "96.2%" },
        { l: "Inv. accuracy", v: "99.81%" },
      ].map((m) => (
        <div key={m.l} className="min-w-0 rounded-lg border border-border bg-surface p-2 sm:p-3">
          <div className="truncate text-[9px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[10px]">{m.l}</div>
          <div className="mt-1 font-display text-base font-semibold text-ink sm:text-xl">{m.v}</div>
        </div>
      ))}
    </div>
    <div className="mt-6">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-medium text-ink">Dispatch throughput</span>
        <span className="text-muted-foreground">last 24h</span>
      </div>
      <div className="flex h-28 items-end gap-1.5">
        {[40, 55, 38, 62, 70, 48, 80, 72, 90, 65, 78, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-primary"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
    <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
      <div className="rounded-lg border border-border p-3">
        <div className="text-muted-foreground">FIFO / FEFO</div>
        <div className="mt-1 font-semibold text-ink">Active</div>
      </div>
      <div className="rounded-lg border border-border p-3">
        <div className="text-muted-foreground">Integrations</div>
        <div className="mt-1 font-semibold text-ink">60+ marketplaces</div>
      </div>
    </div>
  </div>
);

/* ============ Section 8: Health Score ============ */
const HealthScore = () => {
  const [vals, setVals] = useState({ orders: "", warehouses: "", otd: "", tat: "", stockouts: "" });
  const [score, setScore] = useState<number | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const orders = Number(vals.orders) || 0;
    const warehouses = Number(vals.warehouses) || 0;
    const otd = Number(vals.otd) || 0;
    const tat = Number(vals.tat) || 0;
    const stockouts = Number(vals.stockouts) || 0;

    let s = 0;
    s += Math.min(20, Math.log10(Math.max(orders, 1)) * 5);
    s += Math.min(15, warehouses * 3);
    s += Math.min(35, (otd / 100) * 35);
    s += Math.max(0, 20 - tat * 4);
    s += Math.max(0, 10 - stockouts);
    // Hard cap at 92 - internal benchmark ceiling for this self-check.
    setScore(Math.round(Math.min(92, Math.max(0, s))));
  };

  const band =
    score === null
      ? null
      : score >= 85
      ? { label: "Good", copy: "Strong supply chain fundamentals. You're operating in the top quartile of pan-India 3PL benchmarks - there's still room to widen the gap." }
      : score >= 75
      ? { label: "Fair", copy: "Solid base, with clear room to improve. Small process and tech fixes can lift on-time delivery and inventory accuracy meaningfully." }
      : { label: "Needs significant improvement", copy: "Your operations are leaking time and margin. Process gaps and visibility issues are likely costing you customers - let's fix that." };

  return (
    <section id="health-score" className="relative overflow-hidden bg-surface">
      <div className="bg-grid absolute inset-0 -z-10 opacity-30" />
      <div className="container py-14">
        <div className="mx-auto grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* LEFT: header + form */}
          <div>
            <SectionHeader
              eyebrow="Supply chain health check"
              title={<>How Strong Is Your Supply Chain, <span className="text-primary">Really?</span></>}
              description="Answer five quick questions and get an instant benchmark of your operations. Even a one-point improvement can mean faster deliveries, fewer returns and happier customers."
            />
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>Takes 30 seconds</Badge>
              <Badge>Instant result</Badge>
              <Badge>No sign-up</Badge>
            </div>

            <form onSubmit={submit} className="mt-5 rounded-2xl border border-border bg-background p-5 shadow-card md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Step {step} of 2
                </span>
                <div className="flex gap-1.5" aria-hidden>
                  <span className={`h-1.5 w-8 rounded-full ${step >= 1 ? "bg-primary" : "bg-border"}`} />
                  <span className={`h-1.5 w-8 rounded-full ${step >= 2 ? "bg-primary" : "bg-border"}`} />
                </div>
              </div>

              {step === 1 ? (
                <div className="grid gap-4">
                  <Field label="Orders shipped per month" id="orders" placeholder="e.g. 25,000" value={vals.orders}
                    onChange={(v) => setVals({ ...vals, orders: v })} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Number of warehouses" id="warehouses" placeholder="e.g. 3"
                      value={vals.warehouses} onChange={(v) => setVals({ ...vals, warehouses: v })} />
                    <Field label="Stockouts per year" id="stockouts" placeholder="e.g. 4" value={vals.stockouts}
                      onChange={(v) => setVals({ ...vals, stockouts: v })} />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="lg"
                    className="group mt-2 h-12 w-full font-semibold"
                    onClick={() => setStep(2)}
                  >
                    Next <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4">
                  <Field label="Order processing time (days)" id="tat" placeholder="e.g. 1" value={vals.tat}
                    onChange={(v) => setVals({ ...vals, tat: v })} />
                  <Field label="On-time delivery rate (%)" id="otd" placeholder="e.g. 92" value={vals.otd}
                    onChange={(v) => setVals({ ...vals, otd: v })} />
                  <div className="mt-2 flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="h-12 flex-1 font-semibold"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button type="submit" variant="destructive" size="lg" className="h-12 flex-[2] font-semibold">
                      Calculate my score
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* RIGHT: large placeholder / result card */}
          <div>
            {score === null ? (
              <HealthPlaceholder />
            ) : (
              <HealthResult score={score} band={band!} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const HealthPlaceholder = () => (
  <div className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-ink p-7 text-primary-foreground shadow-elevated md:p-8">
    <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

    <div className="relative">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur">
        <Activity className="h-3.5 w-3.5 text-primary" /> Benchmark preview
      </span>
      <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
        Your benchmark<br />appears here
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
        Fill the form to see how your supply chain stacks up against pan-India 3PL benchmarks.
      </p>
    </div>

    {/* Decorative gauge */}
    <div className="relative mx-auto mt-6 grid w-full max-w-[260px] place-items-center">
      <svg viewBox="0 0 200 120" className="w-full">
        <path
          d="M20 110 A 80 80 0 0 1 180 110"
          fill="none"
          stroke="hsl(0 0% 100% / 0.12)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M20 110 A 80 80 0 0 1 180 110"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray="251.3"
          strokeDashoffset="80"
          className="opacity-80"
          style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.85)) drop-shadow(0 0 18px hsl(var(--primary) / 0.45))" }}
        />
      </svg>
      <div className="absolute bottom-1 text-center">
        <div className="font-display text-4xl font-semibold leading-none text-white/40">-</div>
      </div>
    </div>

    <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
      <PreviewStat v="200+" l="Brands benchmarked" />
      <a
        href="#health-score"
        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.6)] transition-transform hover:-translate-y-0.5"
      >
        Now check your score <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  </div>
);

const PreviewStat = ({ v, l }: { v: string; l: string }) => (
  <div>
    <div className="font-display text-xl font-semibold text-white md:text-2xl">{v}</div>
    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] leading-tight text-white/60">
      {l}
    </div>
  </div>
);

const HealthResult = ({
  score,
  band,
}: {
  score: number;
  band: { label: string; copy: string };
}) => {
  // Arc geometry - half-circle, length ≈ 251.3 (π·r, r=80)
  const ARC_LEN = 251.3;
  const pct = Math.min(1, score / 92);
  const offset = ARC_LEN * (1 - pct);

  // Animated count-up for the score numeral
  const [displayed, setDisplayed] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplayed(score * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplayed(score);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [score]);

  // Animate the arc from 0 → offset on mount
  const [animatedOffset, setAnimatedOffset] = useState(ARC_LEN);
  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimatedOffset(offset));
    return () => cancelAnimationFrame(id);
  }, [offset]);

  return (
    <div className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-ink p-7 text-primary-foreground shadow-elevated md:p-8">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
          Your score
        </span>
        <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {band.label}
        </span>
      </div>

      <div className="relative mx-auto grid w-full max-w-[280px] place-items-center">
        <svg viewBox="0 0 200 120" className="w-full">
          <path
            d="M20 110 A 80 80 0 0 1 180 110"
            fill="none"
            stroke="hsl(0 0% 100% / 0.12)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M20 110 A 80 80 0 0 1 180 110"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={ARC_LEN}
            strokeDashoffset={animatedOffset}
            style={{
              transition: "stroke-dashoffset 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
              filter: "drop-shadow(0 0 10px hsl(var(--primary) / 0.9)) drop-shadow(0 0 22px hsl(var(--primary) / 0.55))",
            }}
          />
        </svg>
        <div className="absolute bottom-0 text-center">
          <div className="font-display text-5xl font-semibold leading-none text-white tabular-nums md:text-6xl">
            {Math.round(displayed)}
          </div>
        </div>
      </div>

      <div className="relative">
        <p className="text-sm leading-relaxed text-white/75 md:text-base">
          {band.copy}
        </p>
        <Button asChild variant="destructive" size="lg" className="group mt-5 h-12 w-full font-semibold">
          <Link to="/contact-us">
            Let&rsquo;s improve your score together <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80">
    <Sparkles className="h-3 w-3 text-primary" /> {children}
  </span>
);

const Field = ({ label, id, placeholder, value, onChange }: { label: string; id: string; placeholder: string; value: string; onChange: (v: string) => void }) => (
  <div>
    <Label htmlFor={id} className="text-sm font-medium text-ink">{label}</Label>
    <Input id={id} inputMode="numeric" placeholder={placeholder} value={value}
      onChange={(e) => onChange(e.target.value)} className="mt-2 h-11" />
  </div>
);

/* ============ Section 9: Testimonials ============ */
const Testimonials = () => {
  const rowA = [
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
      q: "2019-2022 have been so dynamic with a new challenge at every turn, and your team have stood by us every step of the way and helped navigate through all of them ensuring we continue our growth trajectory.",
      a: "Anantha Padmanabhan",
      c: "CEO, Harper Collins Publishers India",
      logo: logoHarper,
    },
    {
      q: "Expecting to find a fault, I was surprised that this organization was the 1st in 25 years that I was able to discern any issues. I found the team open and transparent in their dealings.",
      a: "Chris Jones",
      c: "Global Supply Chain Director, Cambridge University Press India",
      logo: logoCambridge,
    },
    {
      q: "We began with AAJ in 2015 when we were in urgent need of a 3PL partner. We never had to look back. I would recommend their services to anyone looking for a responsible 3PL partner.",
      a: "Praveen Kumar",
      c: "Operations Head, Scholastic India Pvt. Ltd.",
      logo: logoScholastic,
    },
    {
      q: "Despite challenges around road entries, new customers, and high dealer expectations, the team at AAJ remained focused and committed to their responsibilities from day one.",
      a: "Jaspreet Singh",
      c: "Senior Manager, Tynor Orthotics Pvt. Ltd.",
      logo: logoTynor,
    },
  ];

  const rowB = [
    {
      q: "We processed more than 1 million units from AAJ's warehouse in Feb 2022 - TAT achievement of 97.34% against a budgeted 95%, in a month with 3 fewer working days. Looking forward to repeating this performance.",
      a: "Ankur Kashyap",
      c: "Sr. VP Operations, Cambridge University Press India",
      logo: logoCambridge,
    },
    {
      q: "Their efficient management and dedicated team have been invaluable in supporting our operations. The strategic spread of AAJ's warehouse facilities is definitely going to play a big role as we expand.",
      a: "Amanpreet Wraich",
      c: "Founder, Muddy Waters Pvt. Ltd.",
      logo: logoMuddy,
      darkLogo: true,
    },
    {
      q: "The AAJ team provided invaluable support by storing and manually managing our inventory with exceptional accuracy. This demonstrates AAJ's adaptability and willingness to go beyond standard processes.",
      a: "Tanmana Sarma",
      c: "Founder, Apaapi Threads of Glory",
      logo: logoApaapi,
    },
    {
      q: "Thank you for a splendid tour of your very impressive facility. It's good to know we are in such good hands in India!",
      a: "Jonathan Atkins",
      c: "International Director, Pan Macmillan Publishing India",
      logo: logoPanMacmillan,
    },
    {
      q: "When we visited the facility, we were 100% satisfied with the alignment and process of the warehouse. AAJ rose to the occasion and has done a brilliant job. Without your team we wouldn't have been this successful.",
      a: "Deekshith Reddy",
      c: "Manager, Saaki Lifestyle Pvt. Ltd.",
      logo: logoSaaki,
    },
    {
      q: "For protection of our sales during relocation we set up parallel shipping with AAJ and the agreed project timelines were met from both operations and systems standpoints. In future we won't hesitate to avail their services.",
      a: "Glenn Ciprani",
      c: "VP Distribution, Pearson India Education Services",
      logo: logoPearson,
    },
  ];

  return (
    <section className="bg-secondary/60">
      <div className="py-14">
        <div className="container">
        <SectionHeader
          eyebrow="Trust"
          title={<>Why Should You Take <span className="text-primary">Our Word</span> for It?</>}
          description="Trust is built over time - and it's where every great partnership begins. Here's what our clients say."
        />
        </div>

        {/* Dual scrolling strips */}
        <div
          className="relative mt-14 space-y-6"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <TestimonialStrip items={rowA} direction="left" />
          <TestimonialStrip items={rowB} direction="right" />
        </div>

        <div className="container">
        <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="grid gap-8 p-7 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-background">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">Certified &amp; Compliant Operations</div>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                    ISO-aligned processes, audited fulfillment centers, and full regulatory compliance across our network.
                  </p>
                </div>
              </div>
              <Button asChild variant="destructive" size="lg" className="group h-12 shrink-0 px-6 font-semibold">
                <Link to="/clients">
                  Read More Client Stories <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              {[
                { src: certIso9001, alt: "ISO 9001:2015 Quality Management System certification", label: "ISO 9001:2015", sub: "Quality Management System" },
                { src: certIso27001, alt: "ISO/IEC 27001:2022 Information Security Management System certification", label: "ISO/IEC 27001:2022", sub: "Information Security Mgmt." },
                { src: certIntertek, alt: "Intertek Workplace Performance Score 93% - Sonipat warehouse facility", label: "Intertek Certified", sub: "93% - Sonipat Facility" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
                  <img src={c.src} alt={c.alt} loading="lazy" decoding="async" width={80} height={80} className="h-20 w-20 shrink-0 object-contain" />
                  <div>
                    <div className="text-sm font-semibold text-ink">{c.label}</div>
                    <div className="text-xs text-muted-foreground">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialStrip = ({
  items,
  direction,
}: {
  items: { q: string; a: string; c: string; logo?: string; darkLogo?: boolean }[];
  direction: "left" | "right";
}) => {
  const loop = [...items, ...items];
  return (
    <div className="group/strip overflow-hidden">
      <div
        className={`flex w-max gap-6 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        } [animation-play-state:running] hover:[animation-play-state:paused]`}
      >
        {loop.map((q, i) => (
          <article
            key={i}
            className="relative flex w-[360px] shrink-0 flex-col justify-between rounded-3xl border border-border bg-background p-7 shadow-sm md:w-[420px]"
          >
            {q.logo && (
              <div
                className={`mb-5 flex h-20 w-[200px] items-center justify-center rounded-xl px-2 ${
                  q.darkLogo ? "bg-ink" : "bg-background"
                }`}
              >
                <img
                  src={q.logo}
                  alt={`${q.c} logo`}
                  loading="lazy"
                  decoding="async"
                  width={200}
                  height={80}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            )}
            <p className="text-sm leading-relaxed text-ink">{q.q}</p>
            <div className="mt-6 border-t border-border pt-4">
              <div className="text-sm font-semibold uppercase tracking-wide text-ink">
                {q.a}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {q.c}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

/* ============ Storage to Growth ============ */
const ValueAdded = () => {
  const items = [
    "Kitting & bundling for promotional campaigns",
    "Custom packaging & marketplace-ready labelling",
    "Quality inspection & batch management",
    "Reverse logistics with return QC",
    "SKU rationalization support",
    "Performance dashboards for smarter decisions",
  ];
  return (
    <>
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="container py-12 md:py-16">
        <div className="overflow-hidden rounded-[28px] border border-primary/40 bg-background">
          <div className="grid lg:grid-cols-12 lg:items-stretch">
            {/* Left: heading + body */}
            <div className="border-b border-primary/40 p-8 md:p-10 lg:col-span-6 lg:border-b-0 lg:border-r lg:p-12">
              <h2 className="font-display text-3xl font-semibold leading-[1.2] text-ink md:text-4xl lg:text-[40px]">
                From Storage Partner to{" "}
                <span className="text-primary">Growth Partner.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Most businesses start with a basic ask: &lsquo;Store my
                inventory and dispatch orders.&rsquo; Real growth demands more.
                When volumes rise, returns spike and SKUs multiply, storage
                alone doesn&rsquo;t solve complexity.
              </p>
            </div>

            {/* Right: 3x2 grid sharing borders, no icons */}
            <div className="h-full lg:col-span-6">
              <div className="grid h-full auto-rows-fr grid-cols-2 grid-rows-3">
                {items.map((i, idx) => {
                  const isRightCol = idx % 2 === 1;
                  const isLastRow = idx >= 4;
                  return (
                    <div
                      key={i}
                      className={[
                        "flex items-center p-5 transition-colors duration-200 md:p-6",
                        "hover:bg-primary hover:text-primary-foreground",
                        isRightCol ? "" : "border-r border-primary/40",
                        isLastRow ? "" : "border-b border-primary/40",
                      ].join(" ")}
                    >
                      <span className="text-sm font-semibold leading-snug md:text-[15px]">
                        {i}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Full-width black strip */}
    <section className="bg-foreground py-5">
      <div className="container flex flex-wrap items-center justify-center gap-3 text-center">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
          <TrendingUp className="h-4 w-4" />
        </span>
        <span className="font-display text-base font-semibold text-background md:text-lg">
          We don&rsquo;t just store. We enable growth.
        </span>
      </div>
    </section>
    </>
  );
};

/* ============ Solutions cards ============ */
const SolutionsCards = () => {
  const cards = [
    { icon: Warehouse, t: "Warehousing", b: "Smart, scalable storage with real-time inventory visibility.", to: "/services/warehousing", img: solWarehousing },
    { icon: Boxes, t: "B2C Warehousing", b: "Fast order processing with marketplace integrations.", to: "/services/b2c-warehousing", img: solFulfillment },
    { icon: Network, t: "B2B Distribution", b: "Bulk order management with accuracy and speed.", to: "/services/b2b-warehousing", img: solB2B },
    { icon: Truck, t: "Transportation", b: "Express dispatch and same-day delivery for your brand.", to: "/services/transportation", img: solTransport },
  ];

  // Duplicate the list so the marquee loops seamlessly
  const loop = [...cards, ...cards];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const draggedDistRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const halfWidthRef = useRef(0);

  // Auto-scroll + drag-to-scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);

    const baseSpeed = 110; // px/sec
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!draggingRef.current) {
        if (Math.abs(velocityRef.current) > 5) {
          offsetRef.current += velocityRef.current * dt;
          velocityRef.current *= Math.pow(0.0025, dt); // smooth decay
        } else {
          velocityRef.current = 0;
          offsetRef.current -= baseSpeed * dt;
        }
      }
      const hw = halfWidthRef.current;
      if (hw > 0) {
        while (offsetRef.current <= -hw) offsetRef.current += hw;
        while (offsetRef.current > 0) offsetRef.current -= hw;
      }
      track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    draggedDistRef.current = 0;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const now = performance.now();
    const dx = e.clientX - lastXRef.current;
    const dt = Math.max(1, now - lastTimeRef.current) / 1000;
    lastXRef.current = e.clientX;
    lastTimeRef.current = now;
    offsetRef.current += dx;
    draggedDistRef.current += Math.abs(dx);
    // weighted velocity (px/sec) — multiplier amplifies swipe momentum
    velocityRef.current = (dx / dt) * 1.2;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };
  const onCardClickCapture = (e: React.MouseEvent) => {
    if (draggedDistRef.current > 8) {
      e.preventDefault();
      e.stopPropagation();
    }
    draggedDistRef.current = 0;
  };

  // Continuously emphasize the card closest to the viewport center.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const viewportCenter = window.innerWidth / 2;
      // Influence radius - within this distance from center, scale ramps up.
      const radius = Math.min(window.innerWidth * 0.35, 520);
      cardRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const dist = Math.abs(center - viewportCenter);
        const proximity = Math.max(0, 1 - dist / radius); // 0..1
        const eased = proximity * proximity * (3 - 2 * proximity); // smoothstep
        const scale = 1 + 0.18 * eased;
        const lift = -10 * eased;
        el.style.transform = `translateY(${lift}px) scale(${scale})`;
        el.style.zIndex = eased > 0.5 ? "5" : "1";
        el.style.boxShadow =
          eased > 0.4
            ? `0 30px 60px -20px hsl(0 0% 0% / ${0.18 + 0.12 * eased})`
            : "";
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="bg-background">
      <div className="container py-14">
        <SectionHeader
          align="center"
          title={<>The Right Supply Chain Partner for <span className="text-primary">Every Stage</span> of Your Growth</>}
        />
      </div>

      {/* Full-bleed marquee with side fades */}
      <div className="relative -mt-2 pb-20 md:pb-24">
        {/* Left & right white fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-48 lg:w-64" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-48 lg:w-64" />

        <div className="group/marquee overflow-hidden">
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="flex w-max cursor-grab touch-pan-y select-none items-center gap-12 px-12 py-16 active:cursor-grabbing md:gap-16 md:px-16"
            style={{ willChange: "transform" }}
          >
            {loop.map(({ icon: Icon, t, b, to, img }, idx) => (
              <Link
                key={`${t}-${idx}`}
                ref={(el) => (cardRefs.current[idx] = el)}
                to={to}
                aria-label={t}
                draggable={false}
                onClickCapture={onCardClickCapture}
                onDragStart={(e) => e.preventDefault()}
                style={{ willChange: "transform" }}
                className="group/card relative block h-[420px] w-[280px] shrink-0 overflow-hidden rounded-3xl border border-border bg-card shadow-card md:h-[460px] md:w-[300px]"
              >
                {/* Image */}
                <img
                  src={img}
                  alt={t}
                  loading="lazy"
                  width={768}
                  height={960}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-110"
                />
                {/* Gradient overlay for legibility */}
                <div className="absolute inset-0 bg-ink/60" />

                {/* Icon chip top-right */}
                <div className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/90 text-primary backdrop-blur transition-all duration-300 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                {/* Content bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                    {t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    {b}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover/card:opacity-100">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ Final CTA ============ */
const FinalCTA = () => (
  <section className="relative overflow-hidden bg-foreground py-12 lg:py-14">
    <div className="bg-grid pointer-events-none absolute inset-0 -z-0 opacity-[0.06]" />
    <div className="container relative">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold leading-[1.1] text-background md:text-4xl lg:text-5xl">
          Let&rsquo;s build a supply chain that{" "}
          <span className="text-primary">keeps up with your ambition.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-background/75 md:text-lg">
          Talk to an AAJ supply chain expert and get a tailored proposal within 24 hours - no commitment, just clarity on what is possible for your brand.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="group h-12 px-6 font-semibold">
            <Link to="/contact-us">
              Get a free quote <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-background/30 bg-transparent px-6 font-semibold text-background hover:bg-background hover:text-foreground"
          >
            <Link to="/services">Explore services</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
