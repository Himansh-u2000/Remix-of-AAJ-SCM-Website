import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Star,
  Gauge,
  Camera,
  ClipboardCheck,
  PackageSearch,
  PackageX,
  RefreshCw,
  FileWarning,
  AlertTriangle,
  FileSearch,
  ScrollText,
  PackageCheck,
  Wrench,
  Trash2,
  TrendingDown,
  ShieldAlert,
  Eye,
  Activity,
  Truck,
  Network,
  CalendarClock,
  Store,
  Building2,
  Receipt,
  FileCheck,
  AlertCircle,
  Cog,
  LayoutDashboard,
  FileSpreadsheet,
  PlugZap,
} from "lucide-react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import FaqSection from "@/components/FaqSection";
import { pageFaqs } from "@/seo/pageFaqs";
import heroImg from "@/assets/services/returns-hero.jpg";

const FAQS = pageFaqs["/services/returns-management"];

const Page = () => (
  <>
    <Seo {...pageSeo["/services/returns-management"]} />
    <Hero />
    <TrustStrip />
    <VerifiedReturns />
    <DamagedFakeReturns />
    <NextSteps />
    <BusinessImpact />
    <ReversePickup />
    <MarketplaceReturns />
    <B2BReturns />
    <ReturnsVisibility />
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
            Returns Management Services
          </div>

          <h1 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] md:text-5xl lg:text-[58px]">
            Controlled Returns Process That{" "}
            <span className="relative whitespace-nowrap text-primary">
              Prevents Inventory Loss
              <svg aria-hidden viewBox="0 0 220 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
                <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            and Delays
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Unprocessed returns create losses. AAJ ensures every unit is
            verified, accounted for, and back in circulation without delay.
          </p>

          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            {[
              { icon: Camera, label: "Camera-Enabled Verification" },
              { icon: ClipboardCheck, label: "Dispute-Ready Documentation" },
              { icon: RefreshCw, label: "SKU-Level Restock Recovery" },
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
                Find Your Returns Leakage <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
            <img
              src={heroImg}
              alt="Returns inspection bay with camera-enabled tables and organized return inventory"
              width={1280}
              height={960}
              className="h-auto w-full"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-card backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Recovery
                </div>
                <div className="text-sm font-semibold text-ink">
                  98% restock rate
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
  { icon: ShieldCheck, label: "100% Proof and Accountability" },
  { icon: MapPin, label: "19,000+ Pin Code Serviceable" },
  { icon: Star, label: "10+ Marketplace Integrations for Return Sync" },
  { icon: Gauge, label: "98% Restock Recovery Rate" },
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

/* ============ SECTION 2 — VERIFIED RETURNS ============ */
const VERIFY_STEPS = [
  {
    icon: ClipboardCheck,
    title: "Logged and Validated in System",
    body: "Each return is first logged and validated in the system, ensuring complete traceability across the returns logistics process.",
  },
  {
    icon: Camera,
    title: "Processed on Camera-Enabled Tables",
    body: "All returned orders are processed on camera-enabled tables. Recorded footage is available for client access, audit, and dispute use for up to 90 days.",
  },
  {
    icon: PackageSearch,
    title: "Inspected and Categorized",
    body: "Products are inspected and categorized based on condition, allowing clear decisions on restocking, rejection, or further handling.",
  },
  {
    icon: RefreshCw,
    title: "Inventory Updated at SKU Level",
    body: "Once verified, inventory is updated at SKU level so that only saleable stock moves back into active inventory.",
  },
  {
    icon: PackageX,
    title: "Unsellable Stock Routed and Logged",
    body: "Items that cannot be restocked are flagged and routed for disposal, return to brand, or further review; nothing leaves the system unaccounted for.",
  },
];

const VerifiedReturns = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Every Return Is Verified Before It{" "}
            <span className="text-primary">Re-Enters Your Inventory</span>
          </>
        }
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {VERIFY_STEPS.map((p) => (
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

/* ============ SECTION 3 — DAMAGED & FAKE RETURNS ============ */
const FLAG_STEPS = [
  {
    icon: AlertTriangle,
    title: "Return Condition Validation",
    body: "Returns that don't match original dispatch condition, used products, wrong items, or visibly damaged units, are flagged immediately with documented evidence.",
  },
  {
    icon: FileSearch,
    title: "Dispute-Ready Documentation",
    body: "Flagged returns are packaged with photo and video evidence and inspection records, giving you everything needed to raise a dispute on Amazon, Flipkart, or any other marketplace.",
  },
  {
    icon: ScrollText,
    title: "Return Discrepancy Reporting",
    body: "Every flagged return is logged in a discrepancy report shared with you, so you have a clear record of losses, disputes raised, and outcomes.",
  },
];

const DamagedFakeReturns = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            title={
              <>
                Damaged and Fake Returns Are Identified at the{" "}
                <span className="text-primary">Inspection Stage</span>
              </>
            }
            description="At AAJ Supply Chain Management, inspection is not just a checkpoint. Identifying a fake or damaged return is only half the job."
          />
          <p className="mt-5 rounded-xl border-l-4 border-primary bg-card p-5 text-sm font-semibold leading-relaxed text-ink shadow-card md:text-base">
            How it gets documented and reported determines whether you recover
            the loss in your ecommerce returns management.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-5">
            {FLAG_STEPS.map((f) => (
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

/* ============ SECTION 4 — NEXT STEPS AFTER INSPECTION ============ */
const OUTCOMES = [
  {
    icon: PackageCheck,
    tag: "Sellable",
    title: "Back to Active Inventory",
    body: "Passes inspection. Updated at SKU level. Back in active inventory immediately. Ready to sell again.",
    tone: "emerald",
  },
  {
    icon: Wrench,
    tag: "Repairable / Repackageable",
    title: "Flagged for Your Review",
    body: "Minor damage or packaging issues. Flagged for your review. Actioned based on your instructions, repack, relabel, or hold.",
    tone: "primary",
  },
  {
    icon: Trash2,
    tag: "Unsellable",
    title: "Quarantined and Documented",
    body: "Damaged beyond recovery. Quarantined, documented, and routed for disposal or return to brand. Fully logged so you know exactly what was lost and why.",
    tone: "destructive",
  },
] as const;

const toneClass: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/30",
  primary: "bg-primary/10 text-primary ring-primary/30",
  destructive: "bg-destructive/10 text-destructive ring-destructive/30",
};

const NextSteps = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            After Inspection, Every Return Has a{" "}
            <span className="text-primary">Defined Next Step</span>
          </>
        }
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
        {OUTCOMES.map((o) => (
          <div
            key={o.tag}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
          >
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ring-1 ${toneClass[o.tone]}`}
            >
              <o.icon className="h-3.5 w-3.5" />
              {o.tag}
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">
              {o.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {o.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 5 — BUSINESS IMPACT ============ */
const IMPACT = [
  {
    icon: TrendingDown,
    title: "Fewer Unrecoverable Losses",
    body: "Returns that would otherwise be written off are identified with clear condition evidence, making them eligible for recovery instead of loss.",
  },
  {
    icon: ShieldAlert,
    title: "Stronger Dispute Success Rate",
    body: "Photo, video, and inspection-backed documentation increase the chances of successful claims across marketplaces like Amazon and Flipkart.",
  },
  {
    icon: Eye,
    title: "Clear Visibility on Returns Impact",
    body: "Every flagged return is tracked and reported, giving you a clear view of where losses are happening and how they are being recovered.",
  },
  {
    icon: FileWarning,
    title: "Reduced Inventory Write-Offs",
    body: "Accurate inspection ensures sellable inventory is not incorrectly marked as unsellable, preventing unnecessary write-offs.",
  },
];

const BusinessImpact = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            The Business Impact of{" "}
            <span className="text-primary">Getting Returns Right</span>
          </>
        }
        description="Structured inspection and documentation in a 3PL returns management setup don't just organize returns. They directly reduce losses and improve dispute outcomes."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {IMPACT.map((c) => (
          <div
            key={c.title}
            className="card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <span className="icon-tile h-12 w-12">
              <c.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-base font-semibold text-ink">
              {c.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 6 — REVERSE PICKUP ============ */
const PICKUP = [
  {
    icon: Network,
    title: "Reverse Pickup Arranged Through Courier Network",
    body: "Return pickups are routed through our 20+ courier partners based on pin code coverage and serviceability. No manual courier selection needed.",
  },
  {
    icon: MapPin,
    title: "Pickup From Customer Address",
    body: "The return is collected directly from the customer's location. No drop-off points, no customer coordination burden on your team.",
  },
  {
    icon: CalendarClock,
    title: "Automatically Scheduled",
    body: "Once a return request is initiated, pickup is scheduled automatically. No manual intervention required at any stage.",
  },
  {
    icon: Store,
    title: "Marketplace and Brand-Initiated Returns Both Handled",
    body: "Whether the return originates from a marketplace platform or directly from your brand, both are processed through the same collection and verification flow.",
  },
  {
    icon: Truck,
    title: "Tracked From Pickup to Warehouse",
    body: "Every return is tracked in transit, so you know exactly where it is before it reaches the facility.",
  },
];

const ReversePickup = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Reverse Logistics That Covers{" "}
            <span className="text-primary">Every Pin Code You Sell To</span>
          </>
        }
        description="Every return starts with a pickup as part of the reverse logistics flow. We arrange reverse logistics pickup through our courier network, schedule it automatically, and track the return from customer address to warehouse without manual follow-up on your end."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PICKUP.map((p) => (
          <div
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-base font-semibold text-ink">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 7 — MARKETPLACE RETURNS ============ */
const MARKET = [
  {
    icon: Store,
    title: "Marketplace-Initiated Returns Received and Processed",
    body: "Returns initiated by Amazon, Flipkart, Meesho, Myntra, Nykaa, and other platforms are received directly at our warehouses and processed as per each platform's return guidelines.",
  },
  {
    icon: PackageX,
    title: "RTO Handled Separately From Customer Returns",
    body: "Return to Origin shipments are processed through a separate flow, ensuring they don't get mixed with customer-initiated returns and are restocked or actioned correctly.",
  },
  {
    icon: Receipt,
    title: "Reconciliation Against Marketplace Return Reports",
    body: "Every return received is reconciled against marketplace return reports, giving you a clear match between what the platform recorded and what physically arrived at the warehouse.",
  },
  {
    icon: FileCheck,
    title: "Compliance-Ready Documentation Per Platform",
    body: "Each return is processed and documented as per the specific requirements of the originating marketplace, keeping your seller account compliant and dispute ready.",
  },
  {
    icon: AlertCircle,
    title: "Discrepancy Flagging Across Platforms",
    body: "Any mismatch between marketplace records and physical receipt is flagged immediately with supporting evidence for dispute filing.",
  },
];

const MarketplaceReturns = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Marketplace Returns Processed{" "}
            <span className="text-primary">Without Compliance Gaps</span>
          </>
        }
        description="Returns from marketplaces don't follow a single standard within returns logistics operations. Each platform has its own rules, timelines, and documentation requirements, and missing them leads to gaps in inventory, remittance, and seller performance."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {MARKET.map((m) => (
          <div
            key={m.title}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <span className="icon-tile h-12 w-12">
              <m.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-base font-semibold text-ink">
              {m.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {m.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 8 — B2B RETURNS ============ */
const B2B_POINTS = [
  "Bulk returns from distributors, retailers, modern trade, and institutional buyers received and logged at SKU level",
  "Every unit inspected individually for damage, expiry, or condition mismatch",
  "Unsold stock assessed, segregated, and restocked or flagged based on condition",
  "Transit-damaged returns documented with photo and video evidence",
  "Repackaging and relabeling handled within the same operation",
  "Complete documentation prepared for credit note issuance and settlement accuracy",
];

const B2BReturns = () => (
  <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
    <div className="container">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            title={
              <>
                B2B Returns Handled With the Same Precision as{" "}
                <span className="text-primary">Forward Logistics</span>
              </>
            }
            description="B2B returns are higher in volume, more complex in handling, and carry greater inventory risk than individual customer returns. Our operations are built to process bulk returns accurately as part of large-scale reverse logistics."
          />
          <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <Building2 className="h-5 w-5" />
            </span>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Built For
              </div>
              <div className="text-sm font-semibold text-ink">
                Distributors · Modern Trade · Institutional Buyers
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid gap-3 sm:grid-cols-2">
            {B2B_POINTS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <PackageCheck className="h-4 w-4" />
                </span>
                <span className="pt-0.5 text-sm font-medium leading-snug text-ink">
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

/* ============ SECTION 9 — RETURNS VISIBILITY ============ */
const VISIBILITY = [
  {
    icon: Cog,
    title: "In-House WMS",
    body: "Every return logged and tracked from receipt to restock inside AAJ's warehouse management system.",
  },
  {
    icon: LayoutDashboard,
    title: "Client Dashboard",
    body: "Stock levels, return status, inspection outcomes, and discrepancy reports available anytime through your dedicated portal.",
  },
  {
    icon: FileSpreadsheet,
    title: "Automated Reporting",
    body: "Reports generated and updated automatically. No manual sharing cycles.",
  },
  {
    icon: PlugZap,
    title: "Marketplace Return Sync",
    body: "Return flows from all platforms sync directly into AAJ's WMS automatically.",
  },
];

const ReturnsVisibility = () => (
  <section className="border-b border-border bg-background py-16 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={
          <>
            Returns Visibility That{" "}
            <span className="text-primary">Doesn't Depend on Manual Updates</span>
          </>
        }
        description="Every return moving through AAJ's facility is tracked as part of our returns management services, updated, and visible through your dashboard in real time. No manual follow-up, no waiting for reports."
      />
      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {VISIBILITY.map((v) => (
          <div
            key={v.title}
            className="group flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated md:p-7"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <v.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.body}
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
              Your Returns Are Costing You{" "}
              <span className="text-primary">More Than You Think</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              We break down where your returns are turning into losses, failed
              disputes, and delayed inventory, and show you how to bring them
              back under control.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" className="group h-12 bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              <Link to="/contact-us">
                Find Your Returns Leakage <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);