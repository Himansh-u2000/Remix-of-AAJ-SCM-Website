import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Zap,
  Layers,
  Activity,
  Workflow,
  Truck,
  PackageCheck,
  Timer,
  PlugZap,
  ShieldCheck,
  Gauge,
  MapPin,
  TrendingDown,
  Star,
  Rocket,
  ShoppingBag,
  Store,
  Repeat,
  Cog,
  Network,
  Search,
  CheckCircle2,
  Clock,
  Loader2,
} from "lucide-react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import FaqSection from "@/components/FaqSection";
import { pageFaqs } from "@/seo/pageFaqs";
import heroImg from "@/assets/services/same-day-hero.jpg";

const FAQS = pageFaqs["/services/same-day-delivery"];

const Page = () => (
  <>
    <Seo {...pageSeo["/services/same-day-delivery"]} />
    <Hero />
    <UspStrip />
    <SyncFailure />
    <CostOfDelay />
    <HowItWorks />
    <BuiltForBrands />
    <MetroCoverage />
    <Technology />
    {/* Client testimonial section hidden for now — to be added later */}
    <FaqSection items={FAQS} />
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
            Same-Day Delivery Service
          </div>

          <h1 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] md:text-5xl lg:text-[58px]">
            Same-Day Delivery Service for{" "}
            <span className="relative whitespace-nowrap text-primary">
              High-Volume
              <svg aria-hidden viewBox="0 0 220 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
                <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Order Operations
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Process, pick, pack, and dispatch orders within the same day using
            structured fulfilment operations made for speed and accuracy.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Express delivery shipping service for ecommerce, marketplace, and
            quick commerce brands managing daily order flow.
          </p>

          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            {[
              { icon: Zap, label: "Same-Day Order Processing" },
              { icon: Layers, label: "Multi-Channel Order Handling" },
              { icon: Workflow, label: "Structured Dispatch Cycles" },
            ].map((f) => (
              <li key={f.label} className="inline-flex items-center gap-2 font-medium text-ink">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-3.5 w-3.5" />
                </span>
                {f.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group h-12 px-6 text-sm font-semibold">
              <Link to="/contact-us">
                Schedule a Quick Call <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
            <img
              src={heroImg}
              alt="Same-day delivery fulfilment warehouse with conveyor and dispatch riders"
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
                  Dispatched
                </div>
                <div className="text-sm font-semibold text-ink">
                  Same day, every day
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ TRUST BAR (marquee) ============ */
const TRUST = [
  { icon: ShieldCheck, label: "20+ Years Experience" },
  { icon: Star, label: "200+ Brands" },
  { icon: MapPin, label: "100+ Cities Covered" },
  { icon: Gauge, label: "90% On-Time Delivery" },
];

const UspStrip = () => {
  const loop = [...TRUST, ...TRUST, ...TRUST];
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

/* ============ SECTION 2 — SYNC FAILURE ============ */
const FAILURES = [
  "Orders Don't Enter Processing on Time",
  "Inventory Isn't Ready for Immediate Picking",
  "Multiple Sales Channels Slow Down Order Flow",
  "Dispatch Is Not Aligned with Delivery Movement",
];

const SyncFailure = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            title={
              <>
                Same-Day Delivery Fails When Fulfilment and Delivery{" "}
                <span className="text-primary">Don't Work Together</span>
              </>
            }
            description="Same-day delivery doesn't fail because of slow delivery. It fails when fulfilment, dispatch, and last mile don't move together."
          />
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            Even when same day shipping service capacity exists, the order isn't
            ready in time.
          </p>
          <p className="mt-5 rounded-xl border-l-4 border-primary bg-card p-5 text-sm font-semibold leading-relaxed text-ink shadow-card md:text-base">
            At AAJ Supply Chain Management, fulfillment, dispatch cycles, and
            last-mile movement are structured to run in sync.
          </p>
        </div>
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            In Most Operations
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {FAILURES.map((p) => (
              <li
                key={p}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-destructive/10 text-destructive">
                  <Timer className="h-4 w-4" strokeWidth={2.25} />
                </span>
                <span className="pt-1 text-sm font-semibold leading-snug text-ink">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ============ SECTION 3 — COST OF DELAY ============ */
const COSTS = [
  { icon: TrendingDown, k: "Revenue Loss", v: "Customers don't complain — they simply don't order again." },
  { icon: Repeat, k: "Higher Returns", v: "Late orders push up RTO and reverse-logistics cost." },
  { icon: Star, k: "Lower Ratings", v: "Marketplace ratings drop with every missed promise." },
];

const CostOfDelay = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Every Delayed Order Has a Cost.{" "}
            <span className="text-primary">Most Brands Only See It Later.</span>
          </>
        }
        description="When an order doesn't arrive on time, customers don't always complain. They simply don't order again. Delayed deliveries increase return rates, damage marketplace ratings, and push buyers toward brands that deliver faster."
      />
      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {COSTS.map((c) => (
          <div
            key={c.k}
            className="card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <span className="icon-tile h-12 w-12">
              <c.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">
              {c.k}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {c.v}
            </p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-foreground/85">
        For ecommerce brands managing daily order flow, slow fulfillment directly
        affects revenue, retention, and platform visibility. Same-day delivery
        service fixes this by building a fulfilment system where speed is the
        default, not an exception.
      </p>
    </div>
  </section>
);

/* ============ SECTION 4 — HOW IT WORKS ============ */
const PILLARS = [
  {
    icon: PlugZap,
    title: "WMS-Based Order Sync Across Channels",
    body: "Orders from D2C, marketplaces, and quick commerce platforms are synced into a unified WMS, allowing immediate processing without manual intervention or delay.",
  },
  {
    icon: Activity,
    title: "Real-Time Inventory Visibility",
    body: "Inventory is tracked at SKU level in real time, ensuring only available stock enters the same-day fulfilment flow.",
  },
  {
    icon: PackageCheck,
    title: "Processing and Picking Without Queue Build-Up",
    body: "Orders move into picking as they are received, supported by structured workflows that prevent backlog during high-volume periods.",
  },
  {
    icon: Workflow,
    title: "TMS-Driven Dispatch Planning",
    body: "Dispatch is not reactive. TMS-driven planning aligns order readiness with delivery windows, ensuring timely handover.",
  },
  {
    icon: Truck,
    title: "Courier Allocation Based on SLA and Location",
    body: "With 20+ courier partners integrated, shipments are automatically assigned based on delivery timelines, serviceability, and pin code coverage.",
  },
  {
    icon: Network,
    title: "Aligned Handover with Last-Mile Network",
    body: "Orders move from packing to courier handover in defined windows, ensuring same-day dispatch is consistently met.",
  },
];

const HowItWorks = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            AAJ Runs Same-Day Delivery Service Through{" "}
            <span className="text-primary">
              Integrated Fulfilment and Dispatch Operations
            </span>
          </>
        }
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <span className="icon-tile h-12 w-12">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
            <p.icon className="icon-watermark" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 5 — BUILT FOR BRANDS ============ */
const BRANDS = [
  { icon: ShoppingBag, title: "D2C Brands", body: "Delivery experience is your brand experience. Same-day delivery service builds repeat purchase rate." },
  { icon: Store, title: "Marketplace Sellers", body: "Same-day delivery affects seller ratings and buybox visibility directly." },
  { icon: Rocket, title: "Quick Commerce Suppliers", body: "Tight fulfilment windows mean delays don't just lose orders; they affect supplier standing." },
  { icon: TrendingDown, title: "High-Volume Ecommerce Brands", body: "Built for operations managing high daily order volumes across multiple channels." },
  { icon: Repeat, title: "Subscription Brands", body: "When customers expect delivery on a specific day, missing that window breaks trust." },
];

const BuiltForBrands = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Built for Brands Where{" "}
            <span className="text-primary">Delivery Speed Matters Revenue</span>
          </>
        }
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {BRANDS.map((b) => (
          <div
            key={b.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <b.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">
              {b.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 7 — TECHNOLOGY ============ */
/* ============ SECTION 6 — METRO COVERAGE ============ */
const MetroCoverage = () => (
  <section className="relative overflow-hidden border-b border-border bg-background py-16 md:py-20">
    <div className="bg-grid absolute inset-0 opacity-[0.25]" />
    <div className="absolute -left-24 top-1/3 -z-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
    <div className="container relative">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeader
            title={
              <>
                Same-Day Delivery Across India's{" "}
                <span className="text-primary">Major Metro Cities</span>
              </>
            }
            description="Our same-day delivery network currently covers major metro cities across India, with fulfillment centers positioned to minimize last-mile distance and meet end-of-day delivery windows."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group h-12 px-6 text-sm font-semibold">
              <Link to="/contact-us">
                Check Serviceability <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Want to know if we cover your city or zone? Talk to our team.
          </p>
        </div>

        <div className="lg:col-span-6">
          <ServiceabilityChecker />
        </div>
      </div>
    </div>
  </section>
);

/* ============ Serviceability Checker (black, interactive) ============ */
const NCR_CITIES = [
  "delhi", "new delhi", "gurgaon", "gurugram", "noida", "greater noida",
  "ghaziabad", "faridabad", "sonipat", "sonepat", "bahadurgarh", "manesar",
  "kundli", "rohtak",
];

// NCR pincode prefixes (first 3 digits)
const NCR_PIN_PREFIXES = [
  "110", // Delhi
  "111", // Delhi
  "121", // Faridabad
  "122", // Gurgaon / Gurugram
  "123", // Mahendragarh / Rewari fringe
  "124", // Rohtak / Bahadurgarh
  "131", // Sonipat
  "201", // Ghaziabad / Noida / Greater Noida
  "203", // Bulandshahr fringe
];

type CheckResult =
  | { status: "ncr"; label: string }
  | { status: "non-ncr"; label: string }
  | { status: "invalid" };

const checkServiceability = (raw: string): CheckResult => {
  const q = raw.trim().toLowerCase();
  if (!q) return { status: "invalid" };

  // Pincode path: 6 digits
  if (/^\d{3,6}$/.test(q)) {
    if (q.length !== 6) return { status: "invalid" };
    const prefix = q.slice(0, 3);
    if (NCR_PIN_PREFIXES.includes(prefix)) {
      return { status: "ncr", label: `Pincode ${q}` };
    }
    return { status: "non-ncr", label: `Pincode ${q}` };
  }

  // City name path
  if (!/^[a-z\s().-]{2,}$/.test(q)) return { status: "invalid" };
  const match = NCR_CITIES.find((c) => q.includes(c));
  if (match) {
    const pretty = match.replace(/\b\w/g, (m) => m.toUpperCase());
    return { status: "ncr", label: pretty };
  }
  return { status: "non-ncr", label: raw.trim().replace(/\b\w/g, (m) => m.toUpperCase()) };
};

const ServiceabilityChecker = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [loading, setLoading] = useState(false);

  const placeholder = useMemo(
    () => "Enter city or 6-digit pincode (e.g. Gurgaon or 122001)",
    [],
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    // Simulated lookup for tactile feedback
    window.setTimeout(() => {
      setResult(checkServiceability(value));
      setLoading(false);
    }, 450);
  };

  const reset = () => {
    setValue("");
    setResult(null);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-7 shadow-elevated md:p-9">
      {/* ambient bg */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(0 0% 100% / 0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
            <MapPin className="h-5 w-5" />
          </span>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Serviceability Check
            </div>
            <div className="font-display text-lg font-semibold text-white">
              Do We Deliver to Your City?
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-6">
          <label htmlFor="serviceability-input" className="sr-only">
            City or pincode
          </label>
          <div className="group flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] p-2 transition focus-within:border-primary/60 focus-within:bg-white/[0.06]">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-white/70">
              <Search className="h-4 w-4" />
            </span>
            <input
              id="serviceability-input"
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (result) setResult(null);
              }}
              maxLength={60}
              placeholder={placeholder}
              className="min-w-0 flex-1 bg-transparent px-1 text-sm font-medium text-white placeholder:text-white/40 focus:outline-none"
              autoComplete="off"
              inputMode="text"
            />
            <Button
              type="submit"
              size="sm"
              disabled={loading || !value.trim()}
              className="h-9 shrink-0 bg-primary px-4 text-xs font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>Check <ArrowRight className="ml-1 h-3.5 w-3.5" /></>
              )}
            </Button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
              Quick try:
            </span>
            {["Gurgaon", "Noida", "122001", "Bangalore"].map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => {
                  setValue(s);
                  setResult(null);
                }}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-white/75 transition hover:border-primary/50 hover:bg-primary/10 hover:text-white"
              >
                {s}
              </button>
            ))}
          </div>
        </form>

        {/* Result */}
        <div className="mt-5 min-h-[112px]">
          {!result && !loading && (
            <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4 text-xs leading-relaxed text-white/55">
              Enter your city or 6-digit pincode to check same-day delivery
              availability in your area.
            </div>
          )}

          {loading && (
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-sm text-white/75">
              <Loader2 className="h-4 w-4 animate-spin text-primary" />
              Checking serviceability…
            </div>
          )}

          {result?.status === "ncr" && (
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.08] p-4">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300/80">
                    Same-Day Available
                  </div>
                  <div className="mt-0.5 font-display text-base font-semibold text-white">
                    {result.label} is in our NCR same-day zone
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    Orders placed before our daily cut-off are picked, packed,
                    and dispatched the same day for end-of-day delivery.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="h-8 bg-primary px-3 text-[11px] font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                      <Link to="/contact-us">Talk to Sales</Link>
                    </Button>
                    <button
                      type="button"
                      onClick={reset}
                      className="h-8 rounded-md border border-white/15 px-3 text-[11px] font-semibold text-white/75 hover:bg-white/[0.06]"
                    >
                      Check another
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {result?.status === "non-ncr" && (
            <div className="rounded-2xl border border-primary/30 bg-primary/[0.08] p-4">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Expanding Soon
                  </div>
                  <div className="mt-0.5 font-display text-base font-semibold text-white">
                    Same-day for {result.label} is rolling out
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    Same-day delivery is currently live in NCR. We're actively
                    expanding to more metros and Tier-2 hubs. Next-day and
                    standard delivery are already available here.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="h-8 bg-primary px-3 text-[11px] font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                      <Link to="/contact-us">Request Coverage</Link>
                    </Button>
                    <button
                      type="button"
                      onClick={reset}
                      className="h-8 rounded-md border border-white/15 px-3 text-[11px] font-semibold text-white/75 hover:bg-white/[0.06]"
                    >
                      Check another
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {result?.status === "invalid" && (
            <div className="rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] p-4 text-sm text-amber-200/90">
              Please enter a valid city name or a 6-digit pincode.
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
          <Network className="h-3.5 w-3.5 text-primary" />
          Live NCR same-day · Expanding pan-India
        </div>
      </div>
    </div>
  );
};

/* ============ SECTION 7 — TECHNOLOGY ============ */
const TECH = [
  {
    icon: Cog,
    title: "In-House WMS",
    body: "Our warehouse management system tracks every SKU, order, and movement in real time. Inventory is always order-ready. No manual stock checks, no fulfilment delays caused by visibility gaps.",
  },
  {
    icon: Truck,
    title: "In-House TMS",
    body: "Our transport management system plans and executes dispatch without manual coordination. Orders are aligned to delivery windows automatically, keeping express shipping timelines intact even during high-volume periods.",
  },
  {
    icon: Workflow,
    title: "WMS + TMS Integration",
    body: "Both systems run connected. When an order is packed and ready, dispatch planning is already in motion. This eliminates the gap between fulfilment and delivery that causes most same-day failures.",
  },
  {
    icon: PlugZap,
    title: "20+ Courier Partners",
    body: "Shipments are allocated to same-day courier partners based on fast delivery SLA, pin code serviceability, and real-time capacity. Not manual selection.",
  },
];

const Technology = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Technology That Keeps Same-Day Operations{" "}
            <span className="text-primary">Running Without Breaks</span>
          </>
        }
        description="Same-day delivery service at scale requires more than fast picking. It requires systems that talk to each other in real time, from the moment an order arrives to the moment it leaves the facility."
      />
      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {TECH.map((t) => (
          <div
            key={t.title}
            className="group flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated md:p-7"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <t.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ FINAL CTA ============ */
const FinalCTA = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-ink p-10 text-white shadow-elevated md:p-14">
        <div className="bg-grid absolute inset-0 opacity-[0.08]" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_auto]">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              See How Same-Day Delivery Can{" "}
              <span className="text-primary">Work for Your Operations</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              We review your current order flow, fulfilment setup, and delivery
              timelines to identify how express shipping and same-day delivery
              can be implemented without disruption.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" className="group h-12 bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              <Link to="/contact-us">
                Schedule a Quick Call <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);