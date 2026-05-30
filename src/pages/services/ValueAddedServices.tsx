import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  PackageOpen,
  Tags,
  Layers,
  Gift,
  ShieldCheck,
  PackageCheck,
  Building2,
  Store,
  Sparkles,
  Zap,
  Workflow,
  ClipboardList,
  Settings2,
  Activity,
  CheckCircle2,
} from "lucide-react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import FaqSection from "@/components/FaqSection";
import { pageFaqs } from "@/seo/pageFaqs";
import heroImg from "@/assets/services/vas-hero.jpg";

const FAQS = pageFaqs["/services/value-added"];

const Page = () => (
  <>
    <Seo {...pageSeo["/services/value-added"]} />
    <Hero />
    <TrustStrip />
    <ServicesGrid />
    <OneRoof />
    <Channels />
    <ExecutionFlow />
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
            Value Added Services
          </div>

          <h1 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] md:text-5xl lg:text-[58px]">
            Value Added Services for Brands That Need{" "}
            <span className="relative whitespace-nowrap text-primary">
              More Than Storage
              <svg aria-hidden viewBox="0 0 220 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
                <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether you're preparing marketplace-ready shipments, building product
            bundles, or managing B2B order customization, AAJ's value-added services
            keep your operations moving without adding complexity.
          </p>

          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            {[
              { icon: Boxes, label: "Kitting & Bundling" },
              { icon: Tags, label: "Marketplace Labelling" },
              { icon: ShieldCheck, label: "Integrated Quality Check" },
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
                Scope My VAS Requirement <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
            <img
              src={heroImg}
              alt="AAJ SCM warehouse value added services area with kitting and bundling operations"
              width={1280}
              height={960}
              className="h-auto w-full"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-card backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Runs in parallel
                </div>
                <div className="text-sm font-semibold text-ink">
                  No impact on dispatch SLAs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ TRUST STRIP (marquee) ============ */
const TRUST = [
  { icon: PackageCheck, label: "7 Integrated VAS Capabilities" },
  { icon: Workflow, label: "Storage · VAS · Dispatch Under One Roof" },
  { icon: ShieldCheck, label: "QC at Every Stage" },
  { icon: Activity, label: "Runs Parallel to Fulfilment" },
];

const TrustStrip = () => {
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

/* ============ SECTION 2 — SERVICES GRID ============ */
const SERVICES = [
  {
    icon: Boxes,
    title: "Kitting and Bundling",
    body: "Multi-SKU and single-SKU bundling at high volumes. Built for promotional sets, product bundles and marketplace-ready kits.",
  },
  {
    icon: PackageOpen,
    title: "Repackaging",
    body: "Covers damaged packaging, channel requirements and return repackaging. Every unit repacked to exact specifications.",
  },
  {
    icon: Tags,
    title: "Labelling",
    body: "Marketplace and brand labelling with barcode, QR and custom label printing available across SKU types.",
  },
  {
    icon: Layers,
    title: "Consolidation",
    body: "B2B and ecommerce consolidation both managed for efficient outbound movement and reduced freight cost.",
  },
  {
    icon: Gift,
    title: "Custom Packaging",
    body: "Marketplace-compliant and brand-specific packaging handled as per channel requirements without disrupting dispatch.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Check",
    body: "Integrated at every stage. Issues are caught before dispatch, not after the order has reached the customer.",
  },
  {
    icon: Sparkles,
    title: "Gift Wrapping",
    body: "Year-round availability with customization options, handled without impacting dispatch timelines or order accuracy.",
  },
];

const ServicesGrid = () => (
  <section id="services" className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Value-Added Services That Prepare Your Orders for{" "}
            <span className="text-primary">Every Channel</span>
          </>
        }
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <span className="icon-tile h-12 w-12">
              <s.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {s.body}
            </p>
            <s.icon className="icon-watermark" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 3 — ONE ROOF ============ */
const OneRoof = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            title={
              <>
                Storage, Value-Added Services and Dispatch{" "}
                <span className="text-primary">Without Switching Vendors</span>
              </>
            }
            description="Using a separate vendor for value added services means your inventory leaves the warehouse, gets processed elsewhere, and returns before it can be dispatched. Every transfer adds time, every handover adds risk."
          />
          <p className="mt-5 rounded-xl border-l-4 border-primary bg-card p-5 text-sm font-semibold leading-relaxed text-ink shadow-card md:text-base">
            At AAJ, value added services run inside the same facility as your
            storage and dispatch — managed by one team, tracked in one system.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-5">
            {[
              {
                icon: Workflow,
                title: "One Continuous Flow",
                body: "Inventory moves from storage to processing to outbound in one continuous flow — no external transfers, no coordination dependencies.",
              },
              {
                icon: Building2,
                title: "One Facility, One Team",
                body: "VAS, storage and dispatch operate inside the same warehouse with a single accountable operations team.",
              },
              {
                icon: Settings2,
                title: "One System of Record",
                body: "Every movement — storage, VAS activity and dispatch — is tracked inside AAJ's WMS for full traceability.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ SECTION 4 — CHANNELS ============ */
const CHANNELS = [
  {
    icon: Store,
    tag: "Marketplace Sellers",
    title: "Platform-Compliant Prep, Every Time",
    body: "FBA prep, labelling, barcoding, kitting and repackaging handled as per platform compliance requirements. Every unit prepared to marketplace standards before it leaves the facility.",
  },
  {
    icon: Gift,
    tag: "D2C Brands",
    title: "Brand Experience Built Into Every Order",
    body: "Custom packaging, gift wrapping, kitting, bundling and labelling managed to your brand specifications. Every order prepared to reflect your brand experience before it reaches the customer.",
  },
  {
    icon: Building2,
    tag: "B2B Operations",
    title: "Bulk-Ready, Distribution-Aligned",
    body: "Consolidation, repackaging and quality checks handled for bulk outbound movements. Every shipment prepared accurately for distributor, retailer or institutional buyer requirements.",
  },
  {
    icon: Zap,
    tag: "Quick Commerce",
    title: "Time-Sensitive Prep Without Delays",
    body: "Kitting, bundling, repackaging and labelling handled for high-frequency, time-sensitive fulfilment. Every unit ready for quick commerce platform requirements without delays.",
  },
];

const Channels = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Value Added Services Aligned to{" "}
            <span className="text-primary">Every Channel You Sell On</span>
          </>
        }
        description="Whether you sell on marketplaces, run a D2C store, manage B2B distribution, or supply quick commerce platforms, every channel comes with its own preparation requirements. AAJ handles all of them within the same operation."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        {CHANNELS.map((c) => (
          <div
            key={c.tag}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className="icon-tile h-12 w-12">
                <c.icon className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                {c.tag}
              </span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">
              {c.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {c.body}
            </p>
            <c.icon className="icon-watermark" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 5 — EXECUTION FLOW ============ */
const STEPS = [
  {
    icon: ClipboardList,
    title: "Scoped Before Execution",
    body: "Requirements are scoped based on SKU, quantity, handling complexity and channel-specific needs before execution begins.",
  },
  {
    icon: Settings2,
    title: "Aligned In-System",
    body: "Instructions are aligned within the system and assigned directly to operations — removing dependency on manual communication or repeated follow-ups.",
  },
  {
    icon: Activity,
    title: "Tracked Through Workflow",
    body: "Activities such as kitting, labelling and consolidation are tracked within the workflow, ensuring visibility at every stage.",
  },
  {
    icon: CheckCircle2,
    title: "Verified Before It Moves",
    body: "Execution is verified before the order moves forward, so additional handling does not impact accuracy or create downstream errors.",
  },
];

const ExecutionFlow = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            From Requirement to Execution,{" "}
            <span className="text-primary">Every Step Is Defined</span>
          </>
        }
        description="At AAJ, every value-added service requirement is handled through a defined execution flow — not ad-hoc coordination."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div
            key={s.title}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <div className="flex items-center justify-between">
              <span className="icon-tile h-12 w-12">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-semibold tabular-nums text-primary/30">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 font-display text-base font-semibold text-ink">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {s.body}
            </p>
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
              Share Your Requirement and Get a{" "}
              <span className="text-primary">Clear Scope</span> Before Committing
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              Share your requirements, quantity and channel specifications. Our
              team reviews it and gets back with a clear scope before any work
              begins.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button
              asChild
              size="lg"
              className="group h-12 bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/contact-us">
                Connect With Us <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);