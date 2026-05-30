import { useEffect, useState } from "react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Truck,
  Clock,
  IndianRupee,
  PackageCheck,
  Smile,
  TrendingUp,
  Move,
  Boxes,
  Route,
  Send,
  Scale,
  Cpu,
  Radio,
  ScanLine,
  RefreshCw,
  Link2,
  Navigation,
  FileCheck2,
  Ruler,
  Building2,
  Sparkles,
  Warehouse as WarehouseIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "@/components/SectionHeader";

/* =========================================================
 * WAREHOUSING NETWORK PAGE
 * ========================================================= */
const WarehousingNetwork = () => {
  return (
    <>
      <Seo {...pageSeo["/warehouses"]} />
      
      <Hero />
      <WhyLocation />
      <NetworkMap />
      <NetworkLogic />
      <Technology />
      <UseCases />
      <FAQs />
      <FinalCTA />
    </>
  );
};

/* ============ HERO ============ */
const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-surface">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 opacity-[0.45]" />
      <div className="absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
    </div>

    <div className="container py-11 lg:py-14">
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Warehousing Network</span>
      </nav>

      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Pan-India Warehousing Network
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] md:text-5xl lg:text-[56px]">
            A Pan-India Warehousing And{" "}
            <span className="text-primary">Dark Store Network</span> That Moves
            Your Business Faster
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Warehouses located closer to where your customers are - helping you
            deliver quickly, save costs and keep things running without delays.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group">
              <Link to="/contact-us">
                Get A Custom Network Plan
                <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#network-map">Explore The Network</a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-border bg-background p-6 shadow-elevated">
            <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-card">
              <Sparkles className="h-3 w-3" /> Network Snapshot
            </div>
            <div className="mt-2 grid grid-cols-1 gap-4">
              <SnapshotRow icon={<Building2 className="h-5 w-5" />} value="11" label="Warehouse Locations" />
              <SnapshotRow icon={<Ruler className="h-5 w-5" />} value="1mn+" label="Sq. Ft. Of Infrastructure" />
              <SnapshotRow icon={<MapPin className="h-5 w-5" />} value="20,000+" label="Serviceable Pin Codes" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Status bar */}
    <div className="border-t border-border bg-background">
      <div className="container grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
        <StatusItem icon={<Building2 className="h-5 w-5" />} value="11" label="Locations" />
        <StatusItem icon={<Ruler className="h-5 w-5" />} value="1 Million+ Sq. Ft." label="Infrastructure" />
        <StatusItem icon={<MapPin className="h-5 w-5" />} value="20,000+" label="Serviceable Pin Codes" />
      </div>
    </div>
  </section>
);

const SnapshotRow = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4">
    <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary-soft text-primary">{icon}</div>
    <div>
      <div className="font-display text-2xl font-semibold leading-none">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  </div>
);

const StatusItem = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-4 px-2 py-5 md:px-8">
    <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">{icon}</div>
    <div>
      <div className="font-display text-lg font-semibold leading-tight">{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  </div>
);

/* ============ WHY LOCATION ============ */
const benefits = [
  { icon: Clock, label: "Same-Day & Next-Day Delivery" },
  { icon: Truck, label: "Reduced Transit Time" },
  { icon: IndianRupee, label: "Lower Shipping Zones" },
  { icon: PackageCheck, label: "Higher Delivery Success Rate" },
  { icon: Smile, label: "Better Customer Experience" },
  { icon: TrendingUp, label: "Competitive Advantage" },
  { icon: Move, label: "Operational Flexibility" },
];

const WhyLocation = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Location Strategy"
            title="Why Location Is A Supply Chain Decision"
            description="Most businesses focus on how to store rather than where to store. A warehouse in the wrong location adds days and costs to every shipment."
          />
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.label}
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-4 transition-all hover:border-primary/30 hover:bg-background hover:shadow-card"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium text-foreground">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ INTERACTIVE MAP ============ */
type Warehouse = {
  slug: string;
  city: string;
  address: string;
  size: string;
  feature: string;
  // % positions on the stylized India panel
  x: number;
  y: number;
};

const warehouses: Warehouse[] = [
  // x,y are % positions calibrated to /india-map.svg using its geoViewBox
  // (lng range 68.184–97.418, lat range 6.754–37.084)
  { slug: "delhi",     city: "Delhi",     address: "Delhi NCR",          size: "30,000 sq. ft.", feature: "Central NCR distribution hub",       x: 30.88, y: 27.93 },
  { slug: "noida",     city: "Noida",     address: "Greater Noida, UP",  size: "90,000 sq. ft.",  feature: "E-commerce fulfillment center",      x: 31.26, y: 28.10 },
  { slug: "gurgaon",   city: "Gurgaon",   address: "Gurugram, HR",       size: "100,000 sq. ft.", feature: "Tallest warehouse in India",         x: 30.27, y: 28.50 },
  { slug: "kundli",    city: "Kundli",    address: "Sonipat, HR",        size: "150,000 sq. ft.",  feature: "Multi-client B2B hub",               x: 30.54, y: 27.15 },
  { slug: "sonipat",   city: "Sonipat",   address: "Sonipat, HR",        size: "110,000 sq. ft.",  feature: "Bulk storage facility",              x: 30.23, y: 26.75 },
  { slug: "rohtak",    city: "Rohtak",    address: "Rohtak, HR",         size: "60,000 sq. ft.",  feature: "North India dark store",             x: 28.76, y: 27.04 },
  { slug: "ghaziabad", city: "Ghaziabad", address: "Ghaziabad, UP",      size: "200,000 sq. ft.",  feature: "NCR east-side dark store",           x: 31.40, y: 27.72 },
  { slug: "bhiwandi",  city: "Bhiwandi",  address: "Thane, MH",          size: "100,000 sq. ft.", feature: "Largest e-commerce fulfillment hub", x: 16.69, y: 58.65 },
  { slug: "bangalore", city: "Bangalore", address: "Bengaluru, KA",      size: "150,000 sq. ft.", feature: "South India omnichannel hub",        x: 32.18, y: 79.46 },
  { slug: "hyderabad", city: "Hyderabad", address: "Hyderabad, TS",      size: "55,000 sq. ft.",  feature: "Quick commerce dark store",          x: 35.26, y: 64.89 },
  { slug: "chennai",   city: "Chennai",   address: "Chennai, TN",        size: "10,000 sq. ft.",  feature: "East coast export gateway",          x: 41.36, y: 79.10 },
  { slug: "kolkata",   city: "Kolkata",   address: "Kolkata, WB",        size: "50,000 sq. ft.", feature: "East India distribution hub",        x: 68.91, y: 47.91 },
];

const NetworkMap = () => {
  const [selected, setSelected] = useState<Warehouse>(warehouses[2]);

  return (
    <section id="network-map" className="bg-secondary py-11 lg:py-14">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Interactive Network"
          title="Our Warehouse Network Across India"
          description="From the north to the south and the east to the west, our 11 warehouse locations are positioned to cater to India's busiest demand hubs."
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Map panel */}
          <div className="lg:col-span-7">
            <div
              className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-card"
              style={{ aspectRatio: "611.86 / 695.7" }}
            >
              <div className="bg-dots absolute inset-0 opacity-60" />
              {/* Real outline of India - recolored to muted primary tone */}
              <img
                src="/india-map.svg"
                alt="Outline map of India showing AAJ SCM warehouse locations"
                className="absolute inset-0 h-full w-full"
                style={{
                  // Recolor the black silhouette into a soft primary fill
                  filter:
                    "brightness(0) saturate(100%) invert(34%) sepia(76%) saturate(1932%) hue-rotate(347deg) brightness(92%) contrast(96%) opacity(0.16)",
                }}
              />

              {/* Markers */}
              {warehouses.map((w) => {
                const isActive = selected.slug === w.slug;
                return (
                  <Link
                    key={w.slug}
                    to={`/warehouses/${w.slug}`}
                    onMouseEnter={() => setSelected(w)}
                    onFocus={() => setSelected(w)}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${w.x}%`, top: `${w.y}%`, zIndex: isActive ? 30 : 10 }}
                    aria-label={`${w.city} warehouse - view details`}
                  >
                    {isActive && (
                      <span
                        className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 animate-ping"
                        style={{ width: 36, height: 36, animationDuration: "2.2s" }}
                      />
                    )}
                    <span
                      className={`relative grid place-items-center rounded-md border shadow-card transition-all ${
                        isActive
                          ? "h-8 w-8 border-primary bg-primary text-primary-foreground scale-110"
                          : "h-7 w-7 border-primary/60 bg-background text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      }`}
                    >
                      <WarehouseIcon className={isActive ? "h-4 w-4" : "h-3.5 w-3.5"} />
                    </span>
                    <span
                      className={`pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-semibold transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground opacity-100"
                          : "bg-background/95 text-foreground shadow-card opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {w.city}
                    </span>
                  </Link>
                );
              })}

              <div className="absolute bottom-4 left-4 rounded-lg border border-border bg-background/95 px-3 py-2 text-xs text-muted-foreground backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-md border border-primary bg-primary text-primary-foreground">
                    <WarehouseIcon className="h-3 w-3" />
                  </span>
                  Hover or tap a marker to view details
                </div>
              </div>
            </div>
          </div>

          {/* Detail card */}
          <div className="lg:col-span-5">
            <Card className="h-full border-border shadow-card">
              <CardContent className="flex h-full flex-col p-7">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <MapPin className="h-3.5 w-3.5" /> {selected.address}
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">
                  {selected.city} Warehouse
                </h3>
                <div className="mt-6 grid gap-4">
                  <DetailRow icon={<Ruler className="h-4 w-4" />} label="Facility Size" value={selected.size} />
                  <DetailRow icon={<Sparkles className="h-4 w-4" />} label="Standout Feature" value={selected.feature} />
                  <DetailRow icon={<MapPin className="h-4 w-4" />} label="Address" value={selected.address} />
                </div>

                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap items-center gap-2">
                    {warehouses.map((w) => (
                      <button
                        key={w.slug}
                        type="button"
                        onClick={() => setSelected(w)}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                          selected.slug === w.slug
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                        }`}
                      >
                        {w.city}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild className="group">
                      <Link to={`/warehouses/${selected.slug}`}>
                        See {selected.city} Details
                        <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/contact-us">Need Coverage In Multiple Cities?</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3 border-b border-border pb-4 last:border-b-0 last:pb-0">
    <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary-soft text-primary">{icon}</div>
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-sm font-medium text-foreground">{value}</div>
    </div>
  </div>
);

/* ============ NETWORK LOGIC ============ */
const logicSteps = [
  {
    icon: Boxes,
    title: "Inventory Distribution Strategy",
    body:
      "Before the first carton enters our facility, a distribution analysis is conducted. Based on your historical order data, customer geography and product mix, our experts recommend how your inventory should be split across locations.",
  },
  {
    icon: Route,
    title: "Order Routing Logic",
    body:
      "When an order is received, our system identifies the optimal fulfillment location based on three criteria: proximity to the delivery pin code, available inventory at that location and current facility capacity.",
  },
  {
    icon: Send,
    title: "Nearest Warehouse Dispatch",
    body:
      "Every order is dispatched from the warehouse closest to the delivery address. This reduces transit time, lowers freight zone costs and increases the probability of successful first-attempt delivery.",
  },
  {
    icon: Scale,
    title: "Load Balancing",
    body:
      "During peak periods such as sale events or festive seasons, order volumes can spike unpredictably. Our network distributes fulfillment workload across multiple locations to prevent bottlenecks.",
  },
];

const NetworkLogic = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Network Logic"
        title="How The Network Works"
        description="Every shipment that leaves an AAJ SCM warehouse follows a logic designed to get it there faster, cheaper and with fewer exceptions."
        className="mb-14"
      />

      <div className="relative">
        {/* Connecting line on lg+ */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {logicSteps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="relative h-full rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
              {i < logicSteps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-primary shadow-card">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg" className="group">
          <Link to="/contact-us">
            See How We'd Plan Your Network
            <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ============ TECHNOLOGY ============ */
const wmsFeatures = [
  { icon: Radio, label: "Live inventory visibility across all locations" },
  { icon: Link2, label: "Seamless order integration with 60+ marketplaces" },
  { icon: ScanLine, label: "Intelligent, scanning-based cycle counts" },
  { icon: RefreshCw, label: "End-to-end returns management in one system" },
];
const tmsFeatures = [
  { icon: Link2, label: "Integrated with WMS - dispatch and transport connected" },
  { icon: Navigation, label: "Real-time shipment tracking across carriers" },
  { icon: Route, label: "Automated courier allocation by pin code, zone & rate" },
  { icon: FileCheck2, label: "Digital POD management and storage for 1–7 years" },
];

const Technology = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="Underlying Technology"
        title="Technology That Connects The Network"
        description="Our in-house WMS and TMS are not off-the-shelf platforms. They're purpose-built around how Indian supply chains work - and continuously improved with real operational data from our pan-India locations."
        className="mb-12"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <TechCard
          tag="Warehouse Management System"
          title="WMS"
          icon={<Cpu className="h-6 w-6" />}
          features={wmsFeatures}
        />
        <TechCard
          tag="Transport Management System"
          title="TMS"
          icon={<Truck className="h-6 w-6" />}
          features={tmsFeatures}
        />
      </div>
    </div>
  </section>
);

const TechCard = ({
  tag,
  title,
  icon,
  features,
}: {
  tag: string;
  title: string;
  icon: React.ReactNode;
  features: { icon: React.ComponentType<{ className?: string }>; label: string }[];
}) => (
  <Card className="overflow-hidden border-border shadow-card">
    <CardContent className="p-0">
      <div className="flex items-center gap-4 border-b border-border bg-background p-7">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
          {icon}
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{tag}</div>
          <div className="mt-0.5 font-display text-2xl font-semibold leading-tight">{title}</div>
        </div>
      </div>
      <ul className="divide-y divide-border bg-background">
        {features.map((f) => (
          <li key={f.label} className="flex items-start gap-3 p-5">
            <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary-soft text-primary">
              <f.icon className="h-4 w-4" />
            </div>
            <span className="text-sm leading-relaxed text-foreground">{f.label}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

/* ============ USE CASES ============ */
const useCases = [
  {
    id: "b2b",
    short: "B2B Distributor",
    title: "B2B Distributor - Regional Fulfillment At Scale",
    challenge:
      "Relying on a single Delhi NCR warehouse caused 5–7 day transit times to major hubs like Mumbai, Bangalore and Chennai. This inflated freight costs and strained critical dealer relationships.",
    approach:
      "Our team analysed the order data and decentralised inventory across the four major hubs (Delhi NCR, Mumbai, Bangalore, Kolkata). Each facility was then optimized for B2B bulk dispatch with seamless integration.",
    outcome:
      "Transit times to key markets dropped from 5–7 days to just 2–3 days, with shorter freight zones significantly reducing per-shipment costs.",
  },
  {
    id: "omni",
    short: "Omni-Channel Brand",
    title: "Omni-Channel Brand - Unified Inventory Across Channels",
    challenge:
      "Managing separate inventory for e-commerce and B2B created constant friction. One channel would run out of stock while the other sat on excess - leading to lost sales and higher carrying costs.",
    approach:
      "We used our WMS to consolidate all stock into a unified inventory pool. Smart allocation logic was configured to route both marketplace and B2B retail orders based on channel priority.",
    outcome:
      "Dynamic allocation reduced stockouts and lost sales. With a centralized view of orders and fulfillment, the team could forecast more accurately and decide faster.",
  },
  {
    id: "qcom",
    short: "Quick Commerce Brand",
    title: "Quick Commerce Brand - Onboarding Into Quick Commerce",
    challenge:
      "An established FMCG brand wanted to enter quick commerce but their entire supply chain was built for standard 3-day delivery. They needed a partner who could build the capability - not just store the goods.",
    approach:
      "We mapped order data to identify where quick commerce demand was strongest, narrowed down the SKU set to the 40 highest-velocity products and re-engineered picking and dispatch workflows for speed. The first 30 days ran as a supervised pilot with daily TAT and accuracy reviews.",
    outcome:
      "The brand went from 3-day fulfillment to same-day capability in under 6 weeks, with the first orders dispatched within 30 days of the brief - and zero new infrastructure investment from the client.",
  },
];

const UseCases = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        eyebrow="In Practice"
        title="How Businesses Use The AAJ Supply Chain Network"
        description="Different goals. Different industries. The same network - configured to deliver."
        className="mb-12"
      />

      <Tabs defaultValue="b2b" className="w-full">
        <div className="flex justify-center">
          <TabsList className="h-auto flex-wrap gap-1 bg-secondary p-1.5">
            {useCases.map((c) => (
              <TabsTrigger
                key={c.id}
                value={c.id}
                className="rounded-md px-4 py-2 text-sm data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-card"
              >
                {c.short}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {useCases.map((c) => (
          <TabsContent key={c.id} value={c.id} className="mt-10">
            <Card className="border-border shadow-card">
              <CardContent className="p-8 lg:p-10">
                <h3 className="font-display text-2xl font-semibold leading-tight md:text-3xl">
                  {c.title}
                </h3>
                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  <UseCaseBlock label="Challenge" body={c.challenge} tone="muted" />
                  <UseCaseBlock label="Our Approach" body={c.approach} tone="muted" />
                  <UseCaseBlock label="Outcome" body={c.outcome} tone="primary" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg" className="group">
          <Link to="/clients">
            See How We've Helped Businesses Like Yours
            <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/clients">View Client Stories</Link>
        </Button>
      </div>
    </div>
  </section>
);

const UseCaseBlock = ({
  label,
  body,
  tone,
}: {
  label: string;
  body: string;
  tone: "muted" | "primary";
}) => (
  <div
    className={`rounded-xl border p-6 ${
      tone === "primary"
        ? "border-primary/20 bg-primary-soft"
        : "border-border bg-surface"
    }`}
  >
    <div
      className={`text-xs font-semibold uppercase tracking-wider ${
        tone === "primary" ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {label}
    </div>
    <p className="mt-3 text-sm leading-relaxed text-foreground">{body}</p>
  </div>
);

/* ============ FAQs ============ */
const faqs = [
  {
    q: "Can I start with just one warehouse and expand my network later?",
    a: "Yes. You can launch in a single facility and add new locations as you grow. Our unified WMS ensures a seamless transition with zero extra tech integration.",
  },
  {
    q: "How long does it take to go live at a new AAJ SCM warehouse location?",
    a: "Most clients are operationally live within 1–2 weeks of onboarding, depending on integration complexity and incoming inventory volume. AAJ manages the setup process end to end.",
  },
  {
    q: "Which courier partners does AAJ Supply Chain work with?",
    a: "AAJ Swift enables seamless logistics by integrating with all major courier and PTL partners across India, including Delhivery, Blue Dart, Ekart, Xpressbees and more.",
  },
  {
    q: "Do you support FEFO/FIFO and batch management?",
    a: "Yes. Our WMS supports strict SKU-level configurations for First In, First Out (FIFO) and First Expire, First Out (FEFO) to minimize wastage for shelf-life-sensitive goods.",
  },
  {
    q: "How do you handle sudden, unplanned volume spikes?",
    a: "Our shared warehousing model and agile workforce provide an instant buffer. We quickly reallocate resources to absorb unexpected order surges while maintaining strict SLAs.",
  },
];

const FAQs = () => (
  <section className="bg-secondary py-11 lg:py-14">
    <div className="container">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="Frequently Asked"
            title="Questions We Hear Most Often"
            description="Quick answers to the most common questions about onboarding, integrations and operations."
          />
          <Button asChild size="lg" className="group mt-8">
            <Link to="/contact-us">
              Talk To Our Team
              <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
        </div>
        <div className="lg:col-span-8">
          <div className="rounded-2xl border border-border bg-background px-6 shadow-card">
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-b last:border-b-0">
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ FINAL CTA ============ */
const FinalCTA = () => (
  <section className="relative overflow-hidden bg-foreground py-11 lg:py-14">
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.08]">
      <div className="bg-grid absolute inset-0" />
    </div>
    <div className="container relative">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-background">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Build Your Network
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-background md:text-4xl lg:text-5xl">
            Ready To Take Your Supply Chain Pan-India?
          </h2>
          <p className="mt-5 max-w-2xl text-base text-background/75 md:text-lg">
            Share your requirements and our team will map out the right
            locations, inventory split and TAT targets for your business.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
          <Button asChild size="lg" className="group w-full lg:w-auto">
            <Link to="/contact-us">
              Get A Custom Network Plan <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground lg:w-auto"
          >
            <Link to="/contact-us">Talk To Our Expert</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default WarehousingNetwork;
