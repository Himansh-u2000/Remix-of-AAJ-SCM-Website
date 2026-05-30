import { useEffect, useState } from "react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  X,
  PackageSearch,
  ShieldCheck,
  Boxes,
  ScanLine,
  ClipboardCheck,
  Truck,
  Cpu,
  Workflow,
  Target,
  Link2,
  Quote,
  Star,
  Building2,
  Users,
  Layers,
  Network,
  Zap,
  PackageCheck,
  Repeat,
  MapPin,
  Ruler,
  Sparkles,
  Warehouse as WarehouseIcon,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/SectionHeader";
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

/* =========================================================
 * /services/warehousing
 * ========================================================= */
const WarehousingService = () => {
  return (
    <>
      <Seo {...pageSeo["/services/warehousing"]} />
      
      <Hero />
      <ClientLogosStrip />
      <ModernWarehousing />
      <AssumptionVsReality />
      <Structure />
      <ProcessFlow />
      <NetworkMap />
      <WarehousingTypes />
      <AccuracyEngine />
      <ScaleSection />
      <Testimonials />
      <FAQs />
      <FinalCTA />
    </>
  );
};

/* ============ HERO ============ */
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
            <WarehouseIcon className="h-3.5 w-3.5" /> Warehousing Services
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.15] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Your warehouse shouldn't just store goods.{" "}
            <span className="text-primary">It should move your business forward.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Most warehouses stop at storage. AAJ helps you go further by
            controlling inventory, ensuring accuracy and dispatching on time -
            every single day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <a href="#network-map">
                Explore Our Facilities
                <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact-us">Talk to Our Expert</Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <StatTile value="99.5%" label="Inventory accuracy" icon={<Target className="h-5 w-5" />} />
              <StatTile value="10 Cr+" label="Units dispatched / yr" icon={<PackageCheck className="h-5 w-5" />} />
              <StatTile value="11" label="Pan-India locations" icon={<MapPin className="h-5 w-5" />} />
              <StatTile value="24×7" label="Operations" icon={<Zap className="h-5 w-5" />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StatTile = ({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-background p-5 shadow-card">
    <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary">{icon}</div>
    <div className="mt-4 font-display text-3xl font-semibold leading-none">{value}</div>
    <div className="mt-2 text-sm text-muted-foreground">{label}</div>
  </div>
);

/* ============ CLIENT LOGOS STRIP ============ */
import bluOneLogo from "@/assets/clients/BluOne.png";
import cambridgeLogo from "@/assets/clients/Cambridge.png";
import chuppsLogo from "@/assets/clients/Chupps.png";
import excelLogo from "@/assets/clients/Excel.png";
import hachetteLogo from "@/assets/clients/Hachette.png";
import harperCollinsLogo from "@/assets/clients/HarperCollins.png";
import harscoLogo from "@/assets/clients/Harsco.png";
import impexLogo from "@/assets/clients/Impex.png";
import nextEducationLogo from "@/assets/clients/NextEducation.png";
import bezomeLogo from "@/assets/clients/Bezome.png";
import relxLogo from "@/assets/clients/Relx.png";
import springerLogo from "@/assets/clients/Springer.png";
import visscoLogo from "@/assets/clients/Vissco.png";
import wareLogo from "@/assets/clients/Ware.png";
import woltersKluwerLogo from "@/assets/clients/WoltersKluwer.png";
import panMacmillanLogo from "@/assets/clients/PanMacmillan.png";
import physicsWallahLogo from "@/assets/clients/PhysicsWallah.png";

const ClientLogosStrip = () => {
  const logos = [
    { src: bluOneLogo, alt: "BluOne" },
    { src: cambridgeLogo, alt: "Cambridge University Press" },
    { src: chuppsLogo, alt: "Chupps Footwear" },
    { src: excelLogo, alt: "Excel Polymers" },
    { src: hachetteLogo, alt: "Hachette Book Group" },
    { src: harperCollinsLogo, alt: "HarperCollins Publishers" },
    { src: harscoLogo, alt: "Harsco" },
    { src: impexLogo, alt: "Impex" },
    { src: nextEducationLogo, alt: "Next Education" },
    { src: bezomeLogo, alt: "Bezomè" },
    { src: relxLogo, alt: "RELX" },
    { src: springerLogo, alt: "Springer" },
    { src: visscoLogo, alt: "Vissco" },
    { src: wareLogo, alt: "Ware" },
    { src: woltersKluwerLogo, alt: "Wolters Kluwer" },
    { src: panMacmillanLogo, alt: "Pan Macmillan" },
    { src: physicsWallahLogo, alt: "Physics Wallah" },
  ];
  const loop = [...logos, ...logos];
  return (
    <section className="border-b border-border bg-background py-12">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by <span className="font-semibold text-foreground">60+ brands</span> across FMCG,
          e-commerce, publishing, healthcare & more
        </p>
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-12">
            {loop.map((logo, i) => (
              <div
                key={i}
                className="grid h-16 w-40 shrink-0 place-items-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-12 max-w-[140px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 2 - MODERN WAREHOUSING ============ */
const ModernWarehousing = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="What Modern Warehousing Looks Like"
            title={
              <>
                Modern warehousing runs on <span className="text-primary">accuracy, technology and processes</span> that keep everything moving.
              </>
            }
          />
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Real warehousing means knowing exactly what you have, where it is
              and what's moving - so nothing ever catches you off guard.
            </p>
            <p>
              It's where inventory control, accuracy and speed come together to
              power your entire supply chain.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Target, label: "Accuracy", value: "99.5%" },
              { icon: Cpu, label: "WMS Driven", value: "100%" },
              { icon: ScanLine, label: "Scan Verified", value: "Every SKU" },
              { icon: Repeat, label: "Reconciled", value: "Real-time" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-background p-5 shadow-card"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-xl font-semibold">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ SECTION 3 - ASSUMPTION vs REALITY ============ */
const myths = [
  { myth: "We just need a place to keep stock.", reality: "A nerve center for your entire supply chain." },
  { myth: "Any warehouse will do.", reality: "The difference between on-time and lost orders." },
  { myth: "We'll manage inventory ourselves.", reality: "Live SKU tracking with zero-error ambitions." },
  { myth: "Warehousing is a cost center.", reality: "A growth enabler, not just a cost line." },
  { myth: "As long as goods go in and out, it works.", reality: "Speed, accuracy and readiness - every single day." },
];

const AssumptionVsReality = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="The Reality Check"
        title={
          <>
            What you <span className="text-muted-foreground line-through decoration-primary/60">think</span> warehousing is vs. what it actually is
          </>
        }
        description="Most operational pain comes from outdated assumptions about what a warehouse should do. Here's how the real picture looks."
        className="mb-14"
      />

      <div className="mx-auto max-w-5xl space-y-3">
        {/* Header row */}
        <div className="hidden grid-cols-2 gap-4 px-2 text-xs font-semibold uppercase tracking-wider md:grid">
          <div className="flex items-center gap-2 text-muted-foreground">
            <X className="h-4 w-4" /> What businesses assume
          </div>
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-4 w-4" /> What warehousing actually is
          </div>
        </div>

        {myths.map((m, i) => (
          <div
            key={i}
            className="grid gap-3 md:grid-cols-2 md:gap-4"
          >
            <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/60 p-5">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-background text-muted-foreground">
                <X className="h-4 w-4" />
              </span>
              <p className="text-sm italic text-muted-foreground md:text-base">"{m.myth}"</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary-soft p-5">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <p className="text-sm font-medium text-foreground md:text-base">{m.reality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 4 - STRUCTURE ============ */
const structure = [
  {
    icon: Cpu,
    title: "System-driven processes",
    body: "Every action is recorded, tracked and validated by our WMS.",
  },
  {
    icon: ClipboardCheck,
    title: "SOP-based execution",
    body: "Our teams follow standard operating procedures, ensuring uniformity in every process.",
  },
  {
    icon: Target,
    title: "Accuracy-first approach",
    body: "We operate at 99.5% inventory accuracy. Scan-based, paperless and auditable at every step.",
  },
  {
    icon: Link2,
    title: "Transport & fulfillment integration",
    body: "Our WMS talks to our TMS. Warehouse and delivery work as one interconnected solution.",
  },
];

const Structure = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Operational Structure"
        title="How we bring structure to warehousing operations"
        description="Predictable outcomes don't come from effort alone - they come from the systems behind the effort."
        className="mb-14"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {structure.map((s, i) => (
          <div
            key={s.title}
            className="group relative h-full rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-elevated"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 5 - ANIMATED PROCESS FLOW ============ */
const flowSteps = [
  { icon: PackageSearch, title: "Inbound Processing", caption: "Goods received, unloaded & logged into WMS." },
  { icon: ShieldCheck, title: "Quality Checks", caption: "Weight & condition QC before stock is accepted." },
  { icon: Boxes, title: "Putaway & Storage", caption: "System-guided putaway to optimal bin locations." },
  { icon: ScanLine, title: "Inventory Tracking", caption: "Live SKU visibility with scan-based audits." },
  { icon: ClipboardCheck, title: "Picking & Packing", caption: "Rule-based picking, weight-verified packing." },
  { icon: Truck, title: "Dispatch Management", caption: "TMS-routed dispatch via the nearest hub." },
];

const ProcessFlow = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % flowSteps.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-11 lg:py-14">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="container relative">
        <SectionHeader
          align="center"
          eyebrow="A Day Inside An AAJ Warehouse"
          title="From inbound dock to dispatch lane - the journey of every order"
          description="Hover or watch as the order flows through six tightly-orchestrated stages, each owned by a system, an SOP and a verified handoff."
          className="mb-14"
        />

        {/* DESKTOP / TABLET - Horizontal animated flow */}
        <div className="relative hidden md:block">
          {/* Animated dashed connector line */}
          <svg
            className="absolute left-0 right-0 top-[58px] h-1 w-full"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line x1="0" y1="2" x2="1000" y2="2" stroke="hsl(var(--border))" strokeWidth="2" />
            <line
              x1="0"
              y1="2"
              x2="1000"
              y2="2"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              className="animate-flow-dash"
            />
          </svg>

          <div className="grid grid-cols-6 gap-3">
            {flowSteps.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  type="button"
                  key={s.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex flex-col items-center text-center"
                >
                  <div
                    className={`relative grid h-28 w-28 place-items-center rounded-full border-2 bg-background transition-all duration-300 ${
                      isActive
                        ? "border-primary scale-105 animate-node-pulse"
                        : "border-border group-hover:border-primary/50"
                    }`}
                  >
                    <div
                      className={`grid h-20 w-20 place-items-center rounded-full transition-colors ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70"
                      }`}
                    >
                      <s.icon className="h-8 w-8" />
                    </div>
                    <span
                      className={`absolute -top-2 -right-1 grid h-7 w-7 place-items-center rounded-full text-[11px] font-semibold shadow-card ${
                        isActive
                          ? "bg-foreground text-background"
                          : "bg-background text-foreground/70 border border-border"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3
                    className={`mt-5 font-display text-sm font-semibold leading-tight transition-colors ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-[14rem] text-xs leading-relaxed text-muted-foreground transition-opacity ${
                      isActive ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {s.caption}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE - Vertical timeline */}
        <div className="md:hidden">
          <div className="relative ml-6 border-l-2 border-dashed border-border pl-8">
            {flowSteps.map((s, i) => {
              const isActive = i === active;
              return (
                <div key={s.title} className="relative pb-8 last:pb-0">
                  <div
                    className={`absolute -left-[44px] grid h-12 w-12 place-items-center rounded-full border-2 bg-background ${
                      isActive ? "border-primary animate-node-pulse" : "border-border"
                    }`}
                  >
                    <div
                      className={`grid h-8 w-8 place-items-center rounded-full ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70"
                      }`}
                    >
                      <s.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-1 font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.caption}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ SECTION 6 - NETWORK LOCATIONS GRID ============ */
const NETWORK_LOCATIONS: { name: string; slug: string; img: string }[] = [
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

const NetworkMap = () => (
  <section id="network-map" className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Pan-India Coverage"
        title="Strategically located warehouses for faster deliveries"
        description="Warehouses across 12 key cities, strategically located to keep your inventory closer to your customers."
        className="mb-12"
      />

      <div className="relative mx-auto mt-4 max-w-5xl">
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
          {NETWORK_LOCATIONS.map((loc) => (
            <div key={loc.slug} className="border-b border-r border-border/80" />
          ))}
        </div>
        <ul className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          {NETWORK_LOCATIONS.map((loc) => (
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
    </div>
  </section>
);

/* ============ SECTION 7 - WAREHOUSING TYPES ============ */
const types = [
  { icon: Building2, title: "B2B Warehousing", body: "Bulk dispatch to distributors and retail chains with proper documentation and turnaround time." },
  { icon: Users, title: "B2C Warehousing", body: "Individual order fulfillment and dispatch for D2C and e-commerce clients." },
  { icon: Layers, title: "Shared Warehousing", body: "Cost-efficient space shared across clients. Ideal when a dedicated facility isn't needed." },
  { icon: Network, title: "Multi-location Warehousing", body: "A pan-India warehouse network, centrally managed - with one point of access." },
  { icon: Workflow, title: "Distribution Warehousing", body: "Designed for speed: goods move in, get sorted and head out with minimal waiting time." },
  { icon: PackageCheck, title: "Fulfillment-ready Warehouses", body: "Set up for kitting, labeling, shrink wrapping and same-day dispatch." },
  { icon: Repeat, title: "Omnichannel Warehousing", body: "Online + offline channels run from one shared inventory. No duplication, no gaps." },
  { icon: ShoppingCart, title: "Ecommerce Warehousing", body: "Marketplace and D2C-ready operations with pick, pack and dispatch tuned to SLA windows." },
  { icon: Zap, title: "Quick Commerce Warehousing", body: "Dark store-style setups for ultra-fast dispatch on 10-30 minute delivery promises." },
];

const WarehousingTypes = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Built For Action"
        title="Warehousing built for action and total inventory control"
        description="Whether you're shipping pallets to retailers or individual parcels to consumers, we cater to all your needs."
        className="mb-14"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {types.map((t) => (
          <div
            key={t.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <t.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 8 - ACCURACY ENGINE ============ */
const accuracyPillars = [
  { icon: Repeat, title: "Cycle counting", body: "Regular counts of active SKUs catch discrepancies before they become problems." },
  { icon: ScanLine, title: "Barcode scanning", body: "Every pick, putaway and dispatch is scanned and verified - no manual data entry, no manual errors." },
  { icon: Target, title: "SKU-level tracking", body: "We monitor every SKU - weight, expiry and movement at every stage." },
  { icon: Cpu, title: "System reconciliation", body: "WMS continuously reconciles against physical inventory, flagging and fixing fast." },
];

const AccuracyEngine = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Inventory Accuracy"
            title={
              <>
                How we maintain{" "}
                <span className="text-primary">99.5% inventory accuracy</span>
              </>
            }
            description="Accuracy comes from processes and habits designed to get it right every time - not from luck or last-minute audits."
          />
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-4 shadow-card">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-3xl font-semibold leading-none">99.5%</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Verified inventory accuracy
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {accuracyPillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-background p-6 shadow-card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ SECTION 9 - SCALE ============ */
const scalePoints = [
  "Operate completely paperless, scan-based processes",
  "WMS-driven putaway and picking",
  "Multiple putaway and picking rules",
  "Weight-based QC during inward and outward processes",
  "24×7 operations to meet strict turnaround times",
  "Batch and expiry tracking",
  "Warehouse and transport management - fully integrated",
];

const ScaleSection = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="The Scale Challenge"
            title="Where most warehouses fail at scale"
            description="Most warehouses work fine at low volumes. But scale up orders and the cracks show fast - manual processes break down, coordination gets messy and errors slip through. By the time it's visible, the damage is done."
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { v: "10 Cr+", l: "Units / yr" },
              { v: "24×7", l: "Operations" },
              { v: "11", l: "Locations" },
              { v: "0", l: "Manual entry" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-surface p-5">
                <div className="font-display text-2xl font-semibold">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Zap className="h-3.5 w-3.5" /> How AAJ Handles Scale
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold leading-tight md:text-3xl">
            We dispatch close to <span className="text-primary">10 crore units per year</span> - without losing the plot
          </h3>
          <ul className="mt-6 space-y-3">
            {scalePoints.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ============ SECTION 10 - TESTIMONIALS (outline) ============ */
const testimonialPlaceholders = [
  { name: "Client Name", role: "Designation, Company", body: "Client testimony coming soon - will describe how AAJ helped scale operations, improve accuracy or reduce dispatch time." },
  { name: "Client Name", role: "Designation, Company", body: "Client testimony coming soon - will speak to onboarding speed, system integration and day-to-day reliability." },
  { name: "Client Name", role: "Designation, Company", body: "Client testimony coming soon - will highlight a specific result (e.g. peak-season volume handled, % improvement in TAT)." },
];

const Testimonials = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="In Their Words"
        title="Testimonials from the businesses that scaled with us."
        description="Real stories from brands across FMCG, e-commerce, publishing and healthcare."
        className="mb-14"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonialPlaceholders.map((t, i) => (
          <Card key={i} className="border-border shadow-card">
            <CardContent className="flex h-full flex-col p-7">
              <Quote className="h-7 w-7 text-primary/60" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground italic">
                "{t.body}"
              </p>
              <div className="mt-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft font-semibold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-center text-xs uppercase tracking-wider text-muted-foreground">
        Outline only - actual client testimonies to be added.
      </p>
    </div>
  </section>
);

/* ============ SECTION 11 - FAQs ============ */
const faqs = [
  {
    q: "Do you work with businesses of all sizes, including startups?",
    a: "Yes. We believe in growing together. There's no minimum volume requirement.",
  },
  {
    q: "What types of products do you handle as a warehousing company?",
    a: "FMCG, apparel, books, healthcare, personal care, automotive, chemicals and e-commerce. If your product has specific needs, just talk to us.",
  },
  {
    q: "Are there hidden charges like racking fees or tech setup costs?",
    a: "No. Everything is agreed upfront with our warehousing service. No surprise invoices.",
  },
  {
    q: "Can you handle returns and reverse logistics?",
    a: "Yes. Returns are inspected, segregated and either restocked or flagged - fully documented at every step.",
  },
  {
    q: "What happens to damaged goods that come back?",
    a: "Every return is QC-checked and categorised as sellable, repairable or write-off. Nothing gets restocked without passing inspection.",
  },
  {
    q: "Are your warehouses GST-compliant? Can you support e-way bill generation?",
    a: "Yes to both. Our warehouse service in India ensures every outward dispatch is fully documented and audit-ready.",
  },
];

const FAQs = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="FAQs"
            title="Frequently asked questions"
            description="Quick answers to the things prospective clients ask most. Don't see yours? Reach out - we'll get back within one working day."
          />
          <Button asChild variant="outline" className="group mt-8">
            <Link to="/contact-us">
              Ask Us Anything <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
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

/* ============ FINAL CTA ============ */
const FinalCTA = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/60 px-6 py-16 shadow-card md:px-12 lg:px-16 lg:py-20">
        {/* Decorative layers */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-[380px] w-[380px] rounded-full bg-accent/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "radial-gradient(hsl(var(--ink) / 0.08) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Ready when you are
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] text-ink md:text-4xl lg:text-5xl">
              Let's build a warehouse operation
              <br className="hidden md:block" />
              <span className="text-primary"> your business can rely on.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From inbound processing to last-mile dispatch - get a warehousing
              solution built around how your business actually works.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
            <Button asChild size="lg" className="group w-full sm:w-auto lg:w-full">
              <Link to="/contact-us">
                Get Started Today
                <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-ink/15 bg-background/60 backdrop-blur hover:bg-background sm:w-auto lg:w-full"
            >
              <Link to="/contact-us">Talk to Our Expert</Link>
            </Button>
            <p className="mt-1 text-center text-xs text-muted-foreground lg:text-right">
              Reply within 1 working day
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WarehousingService;