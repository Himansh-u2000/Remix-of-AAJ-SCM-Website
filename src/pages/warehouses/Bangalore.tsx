import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Truck,
  Zap,
  PackageCheck,
  Boxes,
  ScanLine,
  Layers,
  Route,
  Building2,
  ClipboardCheck,
  Workflow,
  Phone,
  Sparkles,
  Activity,
  Target,
  ShieldCheck,
  RefreshCw,
  Factory,
  Gauge,
  Network,
  Repeat,
  Rocket,
  TrendingUp,
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
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";

import harperCollinsLogo from "@/assets/clients-bangalore/HarperCollins.webp";
import k12Logo from "@/assets/clients-bangalore/K12.webp";
import kalaIndiaLogo from "@/assets/clients-bangalore/KalaIndia.webp";
import marketGateLogo from "@/assets/clients-bangalore/MarketGate.webp";
import oswaalLogo from "@/assets/clients-bangalore/OswaalBooks.webp";
import sandboxLogo from "@/assets/clients-bangalore/Sandbox.webp";
import benvenutoLogo from "@/assets/clients-bangalore/Benvenuto.webp";
import crosswordLogo from "@/assets/clients-bangalore/Crossword.webp";
import greenwayLogo from "@/assets/clients-bangalore/Greenway.webp";
import waareeLogo from "@/assets/clients-bangalore/Waaree.webp";
import varsyaLogo from "@/assets/clients-bangalore/Varsya.webp";
import NetworkPresenceSection from "@/components/NetworkPresenceSection";

const trustBar = [
  { label: "1.5 Lakh+ Sq. Ft." },
  { label: "24x7 Operations" },
  { label: "Same-Day Dispatch" },
  { label: "South India Coverage" },
];

const advantages = [
  { title: "South India Reach", desc: "Serve key southern markets from one strategic hub", icon: MapPin },
  { title: "Faster Deliveries", desc: "Enable same-day & next-day fulfilment with strong connectivity", icon: Zap },
  { title: "Better Inventory Flow", desc: "Move stock faster with streamlined operations", icon: Workflow },
  { title: "More Control", desc: "Manage multi-location operations with ease", icon: Target },
];

const highways = [
  {
    code: "NH-44",
    route: "Bangalore – Hyderabad – Nagpur",
    desc: "One of India's most important freight corridors connecting Karnataka with Telangana and Central India. Enables fast movement to Hyderabad and strong connectivity for expanding ecommerce demand.",
  },
  {
    code: "NH-48",
    route: "Bangalore – Chennai – Vellore",
    desc: "Critical route connecting Bangalore to Tamil Nadu's major industrial and consumption hubs. Supports high-frequency deliveries to Chennai and surrounding manufacturing clusters.",
  },
  {
    code: "NH-75",
    route: "Bangalore – Hassan – Mangalore",
    desc: "Provides direct connectivity to Karnataka's coastal belt and port-linked freight movement, improving supply chain access for exports and regional distribution.",
  },
  {
    code: "NICE Road",
    route: "Tumkur Road – Hosur Road Connectivity",
    desc: "Bangalore's key bypass corridor that helps freight avoid city congestion while connecting major industrial zones, warehouses, and transport routes efficiently.",
  },
];

const industrialHubs = [
  "Peenya Industrial Area",
  "Bommasandra Industrial Area",
  "Electronic City",
  "Whitefield",
  "Nelamangala",
  "Hoskote",
];

const logisticsCorridors = [
  "Hosur",
  "Tumkur Road",
  "Devanahalli",
  "Doddaballapur",
  "Bidadi",
  "Malur",
];

const facilityHighlights = [
  { title: "1.5 Lakh+ Sq. Ft.", desc: "Warehouse space strategically located in Bangalore", icon: Building2 },
  { title: "24x7 Operations", desc: "Continuous running so you get industry best TAT", icon: Activity },
  { title: "Modern Racking", desc: "Advanced material handling machines and structured racking", icon: Layers },
  { title: "Quick Commerce Ready", desc: "Supports same-day and next-day delivery commitments", icon: Zap },
];

const handles = [
  { title: "QC & Inventory Storage", desc: "Bulk inbound is verified and stored with barcode-level tracking, keeping stock updated in real time and ready for movement.", icon: ScanLine },
  { title: "Pick & Pack Operations", desc: "Handles both single-item and multi-SKU orders with accuracy, including support for custom and branded packaging.", icon: PackageCheck },
  { title: "Same-Day Dispatch", desc: "As a warehouse company in Bangalore running 24x7 operations, orders placed before the defined cut-off are processed and dispatched the same day.", icon: Zap },
  { title: "Kitting & Bundling", desc: "Pre-assembled kits, combo packs, and promotional bundles are prepared in advance for faster order processing.", icon: Boxes },
  { title: "Returns Management", desc: "Returns are checked through defined QC steps and routed for restocking or disposal based on condition.", icon: RefreshCw },
  { title: "B2B Fulfillment & Bulk Dispatch", desc: "Supports bulk order processing for distributors, retail chains, and marketplace replenishments including FBA.", icon: Truck },
];

const builtForBrands = [
  {
    title: "Quick commerce and hyperlocal delivery brands",
    desc: "Operations that require sub-hour or same-day dispatch need a warehouse strategically located within Bangalore's core delivery network.",
  },
  {
    title: "Marketplace sellers with strong Bangalore order flow",
    desc: "Amazon, Flipkart, Meesho, Myntra orders concentrated in South India zones.",
  },
  {
    title: "Brands shipping from North or West India to South India",
    desc: "Facing 2–4 day delivery timelines and higher transit delays.",
  },
  {
    title: "Brands seeing higher RTO in South India regions",
    desc: "Delivery failures due to longer routes and delayed fulfillment.",
  },
  {
    title: "Growing brands handling rising order volume in Bangalore",
    desc: "Increasing demand that needs closer inventory placement for stability.",
  },
];

const operationsList = [
  { title: "Inbound Validation", desc: "Every shipment is verified before entering operations" },
  { title: "Movement-Based Storage", desc: "Inventory is placed based on how it moves" },
  { title: "Defined Picking Flow", desc: "Orders follow fixed routes and methods" },
  { title: "Pre-Dispatch Quality Check", desc: "Orders are verified before leaving the warehouse" },
  { title: "Planned Dispatch Execution", desc: "Orders are grouped and scheduled in advance" },
  { title: "Real-Time System Tracking", desc: "Every movement is recorded and visible" },
];

const scalePractices = [
  { title: "Planned Dispatch Cycles", desc: "In a fast-moving market like Bangalore, structured dispatch planning helps meet same-day, next-day, and ecommerce delivery timelines without operational bottlenecks.", icon: Repeat },
  { title: "Real Time Inventory Tracking", desc: "High inventory movement across South India requires continuous tracking to maintain stock visibility and accuracy during rapid order processing.", icon: Gauge },
  { title: "Batch & SKU Accuracy at Every Step", desc: "Multi-category and high-frequency fulfilment operations demand precise SKU and batch handling to reduce errors, returns, and dispatch mismatches.", icon: Target },
  { title: "Multi-Distributor Order Structuring", desc: "Serving multiple South Indian markets from Bangalore requires streamlined order processing across different cities, distributors, and shipment priorities.", icon: Network },
  { title: "Transport-Aligned Dispatch Planning", desc: "Bangalore's strong highway connectivity supports faster movement when warehouse dispatch is aligned with carrier schedules and delivery routes.", icon: Route },
];

const transitionSteps = [
  { title: "Understanding the Current Setup", desc: "Current operations, order flow, and inventory movement are reviewed to identify gaps and dependencies.", icon: ClipboardCheck },
  { title: "Process Alignment", desc: "Workflows are aligned to match how orders, inventory, and dispatch will run from the Bangalore warehouse.", icon: Workflow },
  { title: "Pilot Run", desc: "A controlled rollout is done with limited volume to validate accuracy, timelines, and coordination.", icon: Rocket },
  { title: "Full-Scale Execution", desc: "Operations are gradually scaled once stability is achieved, ensuring no disruption to ongoing fulfillment.", icon: TrendingUp },
];

const faqs = [
  { q: "How does Bangalore's traffic and industrial layout impact warehouse dispatch planning?", a: "Dispatch operations are planned around transport movement windows, route availability, and carrier schedules to reduce delays caused by city congestion and industrial traffic flow." },
  { q: "Can AAJ Bangalore warehouse support launch-day fulfilment for new product releases or promotional campaigns?", a: "Yes. Inventory positioning, packing workflows, and dispatch planning can be aligned in advance to support high-volume launch-day order processing." },
  { q: "How does AAJ handle inventory that moves at very different speeds within the same warehouse?", a: "Fast-moving and slow-moving SKUs are stored and managed separately based on inventory rotation patterns to improve operational efficiency and picking speed." },
  { q: "Does AAJ support pre-dispatch quality checks before inventory leaves the Bangalore warehouse?", a: "Yes. Inventory can go through verification and quality inspection processes before dispatch based on brand-specific operational requirements." },
  { q: "How does AAJ manage courier allocation when delivery timelines vary across South Indian regions?", a: "Courier partners are selected based on regional serviceability, transit timelines, shipment priority, and operational performance requirements." },
  { q: "Can the Bangalore warehouse support brands transitioning from in-house fulfilment to outsourced warehousing?", a: "Yes. Operational workflows, inventory migration, and fulfilment processes can be structured gradually to ensure a smooth transition from in-house operations." },
];

const location = {
  name: "AAJ Supply Chain Management – Nelamangala, Bangalore",
  zone: "South India Hub",
  address: "Sy No. 34/2, 34/9, 34/10, NS Warehouse, Mahimapur Village, Thyamagondlu Hobli, Nelamangala Taluk, near Namaste Hotel, Bengaluru, Karnataka 562111",
  embed: "https://www.google.com/maps?q=AAJ+Supply+Chain+Management+Pvt.+Ltd.+Warehouse+Bangalore&ll=13.1817398,77.2847975&z=18&output=embed",
  link: "https://maps.app.goo.gl/orao8sJzwrXVDURg8",
};

const Bangalore = () => {
  return (
    <>
      <Seo {...pageSeo["/warehouses/bangalore"]} />
      <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid absolute inset-0 opacity-[0.4]" />
          <div className="absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container relative mx-auto px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <nav className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/warehouses" className="hover:text-foreground">Warehousing Network</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Bangalore</span>
          </nav>

          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <MapPin className="h-3.5 w-3.5" /> Bangalore · Karnataka
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px]">
                Optimize Your Supply Chain with Scalable{" "}
                <span className="text-primary">Warehouse Services in Bangalore</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Achieve accurate inventory management, faster dispatch cycles, and scalable same-day fulfilment capabilities with streamlined warehouse operations built for Bangalore's growing business demands.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Trusted warehouse company in Bangalore delivering seamless operations for high-volume inventory and time-critical dispatch requirements.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="group h-12 px-6">
                  <Link to="/contact-us">
                    Schedule a Quick Discussion <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6">
                  <a href="#location">View Bangalore Location</a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-elevated md:p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Bangalore Facility Snapshot
                </div>
                <div className="mt-5 grid grid-cols-2 gap-5">
                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <div className="text-3xl font-semibold text-ink">1.5L+</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Sq. Ft. Capacity</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <div className="text-3xl font-semibold text-ink">24x7</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Running Operations</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <div className="text-3xl font-semibold text-ink">Same-Day</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Dispatch Ready</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <div className="text-3xl font-semibold text-ink">South India</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Hub Coverage</div>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3 rounded-xl bg-primary/5 p-4 text-sm text-foreground">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Strategically located in Nelamangala — direct access to NH-48 and South India freight corridors.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-t border-border bg-card/60 backdrop-blur">
          <div className="container mx-auto grid grid-cols-2 gap-4 px-6 py-5 md:grid-cols-4 md:gap-8">
            {trustBar.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <ClientLogos />

      {/* SECTION 2 - Advantages */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>Bangalore Works Better When Your <span className="text-primary">Supply Chain Needs Agility</span></>}
            description="Bangalore gives your supply chain speed and scalability, but without structured warehousing services, that advantage cannot turn into consistently reliable operations."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => {
              const Icon = a.icon;
              return (
                <Card key={a.title} className="group border-border shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 - Highway Network */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>How Bangalore's Highway Network Keeps Your <span className="text-primary">Inventory Moving Faster</span> Across South India</>}
            description="Bangalore sits at the center of South India's most important industrial and consumption corridors. For ecommerce, retail, and quick commerce operations, these transport corridors enable faster fulfilment, better inventory movement, and wider same-day and next-day delivery coverage."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {highways.map((h) => (
              <Card key={h.code} className="border-border shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
                <CardContent className="p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                      <Route className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-display text-xl font-semibold text-ink">{h.code}</div>
                      <div className="mt-0.5 text-sm font-medium text-primary">{h.route}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Industrial Ecosystem */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>Bangalore's Industrial Ecosystem and <span className="text-primary">What It Means for Your Inventory</span></>}
            description="Bangalore's warehousing strength comes not only from its location, but from the industrial ecosystem built around manufacturing, technology, retail, and ecommerce movement. For businesses using warehouse services in Bangalore, this ecosystem enables quicker inbound movement, faster carrier pickups, and better access to multiple logistics partners."
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="border-border shadow-card">
              <CardContent className="p-7 md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Factory className="h-3.5 w-3.5" /> Industrial Hubs
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">Bangalore Industrial Hubs</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {industrialHubs.map((h) => (
                    <span key={h} className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-foreground">
                      {h}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-border shadow-card">
              <CardContent className="p-7 md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  <Network className="h-3.5 w-3.5" /> Logistics Corridors
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">Bangalore Logistics Corridors</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {logisticsCorridors.map((c) => (
                    <span key={c} className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-foreground">
                      {c}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Facility Highlights */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>Warehouse Facility in Bangalore — <span className="text-primary">That Supports Faster Movement</span></>}
            description="AAJ Supply Chain Management Pvt. Ltd. — Warehouse company in Bangalore"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {facilityHighlights.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="group border-border shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 - What We Handle */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>What We Handle at Our <span className="text-primary">Warehouse in Bangalore</span></>}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {handles.map((h) => {
              const Icon = h.icon;
              return (
                <Card key={h.title} className="group border-border shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Built For Brands - Collapsible */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>Built for Brands Handling <span className="text-primary">Growing Demand Across South India</span></>}
            description="If your operations involve South India demand, faster delivery expectations, or rising order volume, AAJ warehousing company in Bangalore is built to support that shift."
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {builtForBrands.map((b, i) => (
                <AccordionItem key={i} value={`b-${i}`} className="rounded-xl border border-border bg-card px-5 shadow-card">
                  <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline">
                    {b.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {b.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 8 - How Ops Stay on Track */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>This is How Operations <span className="text-primary">Stay on Track</span>, Every Single Day</>}
            description="This structure doesn't slow operations down. It's what keeps them consistent when volumes are high and timelines are tight."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {operationsList.map((o, i) => (
              <div key={o.title} className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink">{o.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Scale practices */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>How AAJ Runs Warehouse Operations That <span className="text-primary">Scale in Bangalore</span></>}
            description="These are the operational practices that keep our warehouse services in Bangalore efficient as your order volumes, SKUs, and regional distribution demands continue to grow."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {scalePractices.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title} className="group border-border shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10 - Transition timeline */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>Move Operations to Bangalore Warehouse <span className="text-primary">Without Disrupting Orders</span></>}
            description="A structured transition designed to protect your delivery timelines and customer experience throughout the switch."
            align="center"
            className="mx-auto"
          />
          <div className="relative mt-14">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 via-border to-primary/30 lg:block" aria-hidden />
            <div className="space-y-8">
              {transitionSteps.map((s, i) => {
                const Icon = s.icon;
                const left = i % 2 === 0;
                return (
                  <div key={s.title} className="relative grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className={left ? "lg:pr-12 lg:text-right" : "lg:order-2 lg:pl-12"}>
                      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Step 0{i + 1}</span>
                        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{s.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                    <div className={`hidden lg:flex ${left ? "" : "lg:order-1"} items-center justify-center`}>
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-elevated">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>Our <span className="text-primary">Warehouse Network</span> in Bangalore</>}
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 max-w-4xl">
            <Card className="overflow-hidden border-border shadow-card">
              <div className="aspect-[16/9] w-full overflow-hidden bg-secondary">
                <iframe
                  title={location.name}
                  src={location.embed}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <CardContent className="p-6 md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Building2 className="h-3.5 w-3.5" /> {location.zone}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{location.name}</h3>
                <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{location.address}</span>
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={location.link} target="_blank" rel="noreferrer">
                      Open in Google Maps <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <Link to="/contact-us">
                      <Phone className="mr-1 h-3.5 w-3.5" /> Talk to Site Team
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HIDDEN: Testimonial section temporarily hidden — will be re-enabled once client testimonials are finalised. */}
      {false && (
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>What Brands Say About <span className="text-primary">Operating from Bangalore</span></>}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-secondary/40 p-10 text-center text-sm text-muted-foreground">
            <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-3">Client testimonials from brands operating out of Bangalore will appear here soon.</p>
          </div>
        </div>
      </section>
      )}

      {/* Network presence — links to other city pages; current city scrolls to top */}
      <NetworkPresenceSection currentSlug="bangalore" />

      {/* FAQs */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>Quick Answers About <span className="text-primary">Our Bangalore Warehousing</span></>}
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline">
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
      </section>

      {/* FINAL CTA */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-elevated md:p-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 100% 0%, hsl(var(--primary-soft)) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, hsl(var(--secondary)) 0%, transparent 60%)",
              }}
              aria-hidden
            />
            <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Let's Audit Your Current Setup
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                  Review Your Warehouse Flow for South India Fulfilment
                </h3>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                  We'll identify gaps in inventory, dispatch, coordination, and same-day fulfilment readiness — then show you how Bangalore can fix them.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
                <Button asChild size="lg" className="group h-12 px-6">
                  <Link to="/contact-us">
                    Schedule a Quick Call <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6">
                  <Link to="/warehouses">View All Locations</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

/* =========== CLIENT LOGOS =========== */
const ClientLogos = () => {
  const logos = [
    { src: harperCollinsLogo, alt: "HarperCollins Publishers" },
    { src: oswaalLogo, alt: "Oswaal Books" },
    { src: crosswordLogo, alt: "Crossword" },
    { src: k12Logo, alt: "K12" },
    { src: kalaIndiaLogo, alt: "Kala India" },
    { src: marketGateLogo, alt: "Market Gate" },
    { src: sandboxLogo, alt: "Sandbox" },
    { src: benvenutoLogo, alt: "Benvenuto" },
    { src: greenwayLogo, alt: "Greenway" },
    { src: waareeLogo, alt: "Waaree" },
    { src: varsyaLogo, alt: "Varsya" },
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
    <section className="relative overflow-hidden border-y border-border bg-background py-8 md:py-10">
      <div className="container relative">
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
                    className="h-full w-full object-contain"
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

export default Bangalore;
