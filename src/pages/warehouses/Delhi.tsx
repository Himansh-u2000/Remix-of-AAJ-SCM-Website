import { useEffect, useRef, useState } from "react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
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
  AlertTriangle,
  PlugZap,
  Phone,
  Sparkles,
  Activity,
  Target,
  ShieldCheck,
  RefreshCw,
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

// Delhi client logos (new)
import daakitLogo from "@/assets/clients-delhi/Daakit.webp";
import infiniteMarketingLogo from "@/assets/clients-delhi/InfiniteMarketing.webp";
import manisaBeauteLogo from "@/assets/clients-delhi/ManisaBeaute.webp";
import natureCareLogo from "@/assets/clients-delhi/NatureCare.webp";
import radBeveragesLogo from "@/assets/clients-delhi/RadBeverages.webp";
import talkingSoxLogo from "@/assets/clients-delhi/TalkingSox.webp";
// Recycled client logos
import bezomeLogo from "@/assets/clients/Bezome.png";
import bluOneLogo from "@/assets/clients/BluOne.png";
import cambridgeLogo from "@/assets/clients/Cambridge.png";
import chuppsLogo from "@/assets/clients/Chupps.png";
import excelLogo from "@/assets/clients/Excel.png";
import hachetteLogo from "@/assets/clients/Hachette.png";
import harscoLogo from "@/assets/clients/Harsco.png";
import impexLogo from "@/assets/clients/Impex.png";
import nextEducationLogo from "@/assets/clients/NextEducation.png";
import physicsWallahLogo from "@/assets/clients/PhysicsWallah.png";
import relxLogo from "@/assets/clients/Relx.png";
import springerLogo from "@/assets/clients/Springer.png";
import NetworkPresenceSection from "@/components/NetworkPresenceSection";

const trustBar = [
  { label: "200+ Brands" },
  { label: "2 Delhi Locations" },
  { label: "Same-Day Delivery Across NCR" },
  { label: "99%+ Dispatch Accuracy" },
];

const flowSteps = [
  { title: "Inventory Near Demand", icon: MapPin },
  { title: "Shorter Distance", icon: Route },
  { title: "Faster Dispatch", icon: Zap },
  { title: "Higher Delivery Success", icon: PackageCheck },
];

const operationsList = [
  "Inventory is verified before it enters active operations - no unconfirmed stock moves into the fulfilment flow",
  "Storage is aligned to actual SKU movement, not static allocation - fast-moving products stay accessible at all times",
  "Picking follows defined paths - maintain same-day delivery regardless of volume",
  "Orders are checked before dispatch - accuracy is built into the process, not caught at the end",
  "Dispatch runs on planned cycles - courier handovers stay on schedule even when order flow increases",
];

const infrastructure = [
  { title: "Structured Racking System", desc: "Racking is organized for SKU-level placement, making inventory easy to locate and access without delays.", icon: Layers },
  { title: "Movement-Aligned Layout", desc: "The warehouse layout is planned around how inventory flows, reducing unnecessary movement across zones.", icon: Workflow },
  { title: "Material Handling Equipment", desc: "Handling equipment supports smooth inbound and outbound movement, especially during high-volume operations.", icon: Truck },
  { title: "Dedicated Packing Zones", desc: "Packing areas are separated and structured to handle continuous order flow without overlap or delays.", icon: Boxes },
  { title: "Staging & Dispatch Areas", desc: "Orders are staged in defined zones before dispatch, preventing congestion and misrouting.", icon: ClipboardCheck },
  { title: "Continuous Operations Setup", desc: "Operations run without fixed downtime, allowing order processing to continue as demand fluctuates.", icon: Activity },
];

const orderJourney = [
  { title: "Inventory Receipt & Verification", desc: "Inventory is received, checked, and mapped at SKU level before entering active storage, ensuring accuracy from the start.", icon: ScanLine },
  { title: "Smart Storage Placement", desc: "Products are placed based on how frequently they move, keeping fast-moving SKUs ready for quick picking and dispatch.", icon: Layers },
  { title: "Order Flow from Multiple Channels", desc: "Orders come in from your website, marketplaces, and quick commerce platforms - all handled within the same system without delays.", icon: PlugZap },
  { title: "Rapid Picking & Packing", desc: "Orders are picked through fixed paths and packed as per channel requirements, including marketplace labelling and custom packaging.", icon: PackageCheck },
  { title: "Dispatch Execution", desc: "Orders are grouped, staged, and handed over in planned cycles aligned with courier and hyperlocal delivery timelines.", icon: Truck },
  { title: "Returns & Reprocessing", desc: "Returned inventory is checked and routed back into usable stock or further action based on defined quality checks.", icon: RefreshCw },
];

const earlySigns = [
  "Orders are concentrated in NCR",
  "Multiple sales channels are creating confusion",
  "Order volume is increasing but delays are visible",
  "Shipping to North India from other regions",
  "Returns and delivery failures are rising",
];

const integrations = [
  { group: "Marketplaces", items: ["Amazon", "Flipkart", "Meesho", "Myntra", "Nykaa", "JioMart"] },
  { group: "Courier & Logistics Partners", items: ["20+ Courier Partners"] },
  { group: "D2C & Storefront Platforms", items: ["Shopify", "WooCommerce", "Unicommerce", "WordPress"] },
];

const locations = [
  {
    name: "AAJ Supply Chain Management – Bamnoli, Delhi",
    zone: "West & South Delhi NCR Access",
    address: "KH NO. 171/1, 171/2/1 Extended Lal Dora of Village Front Phirni Road, Bamnoli, Delhi 110045",
    description:
      "Situated closer to Gurgaon and Dwarka Expressway, this warehouse in West Delhi enables faster reach across Gurgaon, West and South NCR. It allows efficient movement towards Gurgaon, Dwarka, and nearby zones, while also supporting outbound connectivity towards Rajasthan and beyond.",
    embed: "https://www.google.com/maps?q=AAJ+Supply+Chain+Management+Bamnoli+Delhi+110045&output=embed",
    link: "https://maps.app.goo.gl/wZUq2eQXzgEyUxfQA",
  },
  {
    name: "AAJ Supply Chain Management – Ghazipur, Delhi",
    zone: "East Delhi NCR Access",
    address: "Plot No 427, Pocket C, IFC, Ghazipur, Delhi – 110096",
    description:
      "Located near the Delhi–Meerut Expressway, this dark store warehouse in East Delhi enables faster movement towards Noida, Ghaziabad, and East NCR zones where order density is consistently high. It supports quicker dispatch into these regions while also allowing smooth outbound flow towards UP markets.",
    embed: "https://www.google.com/maps?q=Plot+No+427+Pocket+C+IFC+Ghazipur+Delhi+110096&output=embed",
    link: "https://maps.google.com/?cid=14426663829770549388",
  },
];

const faqs = [
  { q: "Do I need a Delhi GST registration to store inventory here?", a: "Not always. You can usually add the Delhi warehouse as an Additional Place of Business (APOB) under your existing GST." },
  { q: "How is COD handled for deliveries within Delhi NCR?", a: "COD orders are processed through courier partners, and reconciliation is shared based on their settlement cycles with clear reporting." },
  { q: "Will I be able to track inventory stored in your Delhi warehouse in real time?", a: "Yes. You get real-time visibility of stock levels, order status, and dispatch tracking through system reports." },
  { q: "Can I send inventory directly to your Delhi warehouse from another city?", a: "Yes. Inventory can be shipped directly to the Delhi facility and processed without requiring a local office setup." },
  { q: "What kind of brands use your Delhi fulfilment centers?", a: "Primarily D2C brands, marketplace sellers, and quick commerce suppliers operating at moderate to high order volumes across NCR and North India." },
];

const Delhi = () => {
  return (
    <>
      <Seo {...pageSeo["/warehouses/delhi"]} />
      <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-[image:var(--gradient-hero)]">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="container relative mx-auto px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <nav className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/warehouses" className="hover:text-foreground">Warehousing Network</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Delhi</span>
          </nav>

          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <MapPin className="h-3.5 w-3.5" /> Delhi · NCR
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px]">
                Warehouse in Delhi Built for{" "}
                <span className="text-primary">Same-Day &amp; Quick Commerce</span>{" "}
                Fulfilment
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Store inventory inside Delhi, closer to where your orders actually come from. AAJ's fulfilment centers in Delhi operate as urban dispatch hubs - built for high-frequency ecommerce, quick commerce brands, and marketplace sellers who can't afford slow deliveries.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="group h-12 px-6">
                  <Link to="/contact-us">
                    Schedule a Quick Discussion <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6">
                  <a href="#locations">View Delhi Locations</a>
                </Button>
              </div>
            </div>

            {/* Hero stat card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-elevated md:p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Delhi Network Snapshot
                </div>
                <div className="mt-5 grid grid-cols-2 gap-5">
                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <div className="text-3xl font-semibold text-ink">30K</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Sq. Ft. Total Capacity</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <div className="text-3xl font-semibold text-ink">2</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Strategic Locations</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <div className="text-3xl font-semibold text-ink">99%+</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Dispatch Accuracy</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <div className="text-3xl font-semibold text-ink">Same-Day</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Delivery Across NCR</div>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3 rounded-xl bg-primary/5 p-4 text-sm text-foreground">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>East &amp; West Delhi presence - dispatch in the right direction from the start.</span>
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

      <ClientLogos />

      {/* SECTION 2 - Dark store network */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Dark store-led model"
            title={<>How AAJ's Delhi Warehouses Operate Like a <span className="text-primary">Dark Store Network</span></>}
            description="In high-frequency ecommerce, delivery speed depends on how close your inventory is to your customers, not how large your warehouse is. A well-located warehouse in Delhi NCR often performs better than a larger facility located farther from demand."
            align="center"
            className="mx-auto"
          />

          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-base leading-relaxed text-muted-foreground">
            <p>AAJ's warehouses and fulfilment centers in Delhi operate within high-demand NCR zones, keeping inventory closer to active order clusters and reducing last-mile distance.</p>
            <p>This enables faster order movement and supports same-day and next-day fulfilment without relying on long-haul transport. The result is smoother order flow, better delivery success rates, and more predictable operations.</p>
            <p className="text-foreground">
              <strong>Think of it as a dark store model - but built for full ecommerce operations.</strong> Inventory is positioned, not just stored.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="mt-14">
            <div className="grid gap-4 md:grid-cols-4 md:gap-3">
              {flowSteps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="relative">
                    <div className="group h-full rounded-2xl border border-border bg-card p-6 text-center shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Step {i + 1}</div>
                      <div className="mt-1 font-display text-lg font-semibold text-ink">{s.title}</div>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-primary md:block">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Two locations */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Where it matters"
            title={<>From Hyperlocal Orders to Regional Dispatch, <span className="text-primary">We Keep Everything Moving</span></>}
            description="Not all warehouse service providers in Delhi NCR deliver the same operational advantage. What matters is where your inventory is positioned within the city."
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                tag: "East Delhi NCR",
                title: "Ghazipur Location",
                desc: "Located near the Delhi–Meerut Expressway, this dark store warehouse in East Delhi enables faster movement towards Noida, Ghaziabad, and East NCR zones where order density is consistently high. It supports quicker dispatch into these regions while also allowing smooth outbound flow towards UP markets.",
                regions: ["Noida", "Ghaziabad", "East NCR", "UP Markets"],
              },
              {
                tag: "West & South Delhi NCR",
                title: "Bamnoli Location",
                desc: "Situated closer to Gurgaon and Dwarka Expressway, this warehouse in West Delhi enables faster reach across Gurgaon, West and South NCR. It allows efficient movement towards Gurgaon, Dwarka, and nearby zones, while also supporting outbound connectivity towards Rajasthan and beyond.",
                regions: ["Gurgaon", "Dwarka", "South NCR", "Rajasthan"],
              },
            ].map((loc) => (
              <Card key={loc.title} className="overflow-hidden border-border shadow-card transition hover:shadow-elevated">
                <CardContent className="p-7 md:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    <MapPin className="h-3.5 w-3.5" /> {loc.tag}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{loc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{loc.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {loc.regions.map((r) => (
                      <span key={r} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
                        {r}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-primary/20 bg-card p-6 text-center text-base text-foreground md:p-8">
            <strong>Together, both locations function like a dark store warehouse network</strong> - ensuring orders dispatch in the right direction from the start, without adding routing distance.
          </div>
        </div>
      </section>

      {/* SECTION 4 - Peak day consistency */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Built for spikes"
                title={<>Same Consistency - <span className="text-primary">Even During Peak Sale Days</span></>}
                description="In quick commerce and high-frequency ecommerce, order flow doesn't increase gradually - it spikes. A system that works at 500 orders/day often breaks at 2,000. That's where most traditional warehouse companies in Delhi struggle."
              />
              <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Activity className="h-4 w-4" /> 500 → 2,000+ orders/day
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  At our Delhi facilities, operations are designed to stay stable when order volume increases suddenly.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3">
                {operationsList.map((item) => (
                  <li key={item} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Infrastructure */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Infrastructure"
            title={<>Infrastructure That Supports <span className="text-primary">Accuracy, Movement &amp; Scale</span></>}
            description="A dark store-ready fulfilment center in Delhi needs infrastructure that supports movement - not just capacity."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {infrastructure.map((it) => {
              const Icon = it.icon;
              return (
                <Card key={it.title} className="border-border shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Order journey */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Order journey"
            title={<>From Inbound to Dispatch - <span className="text-primary">How Orders Move</span> Inside Our Delhi Warehouse</>}
            align="center"
            className="mx-auto"
          />
          <div className="relative mt-14">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 via-border to-primary/30 lg:block" aria-hidden />
            <div className="space-y-8">
              {orderJourney.map((s, i) => {
                const Icon = s.icon;
                const left = i % 2 === 0;
                return (
                  <div key={s.title} className="relative grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className={left ? "lg:pr-12 lg:text-right" : "lg:order-2 lg:pl-12"}>
                      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                        <div className="flex items-center gap-3 lg:justify-start">
                          {left ? (
                            <>
                              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Step 0{i + 1}</span>
                            </>
                          ) : (
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Step 0{i + 1}</span>
                          )}
                        </div>
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

      {/* SECTION 7 - Early signs */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Diagnose the gaps"
                title={<>Early Signs Your Warehousing &amp; Fulfilment <span className="text-primary">Can't Keep Up</span></>}
                description="These are often indicators that your current warehouse company in Delhi is no longer aligned with your order flow."
              />
            </div>
            <div className="lg:col-span-7">
              <ol className="space-y-3">
                {earlySigns.map((s, i) => (
                  <li key={s} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {i + 1}
                    </span>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <AlertTriangle className="h-4 w-4 text-accent" />
                      {s}
                    </div>
                  </li>
                ))}
              </ol>

              {/* Inline CTA */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-primary/20 bg-card p-7 shadow-elevated md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">See Where Your Current Operations Can Improve</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We review your current order flow, inventory placement, and dispatch timelines to identify where delays and inefficiencies are coming from.
                    </p>
                  </div>
                  <Button asChild size="lg" className="group shrink-0">
                    <Link to="/contact-us">
                      Schedule a Quick Discussion <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - Integrations */}
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Integrations"
            title={<>Connects with <span className="text-primary">Every Platform</span> You Already Sell On</>}
            description="Whether you sell on marketplaces, run a D2C website, or fulfil quick commerce demand, our ecommerce warehouses in Delhi connect with your existing platforms without disruption."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {integrations.map((g) => (
              <Card key={g.group} className="border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    <PlugZap className="h-4 w-4" /> {g.group}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span key={it} className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-foreground">
                        {it}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Locations w/ embedded maps */}
      <section id="locations" className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Visit us"
            title={<>Our <span className="text-primary">Warehouse Network</span> in Delhi</>}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {locations.map((l) => (
              <Card key={l.name} className="overflow-hidden border-border shadow-card">
                <div className="aspect-[16/10] w-full overflow-hidden bg-secondary">
                  <iframe
                    title={l.name}
                    src={l.embed}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <CardContent className="p-6 md:p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    <Building2 className="h-3.5 w-3.5" /> {l.zone}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">{l.name}</h3>
                  <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{l.address}</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild variant="outline" size="sm">
                      <a href={l.link} target="_blank" rel="noreferrer">
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
            ))}
          </div>
        </div>
      </section>

      {/* HIDDEN: Testimonial section temporarily hidden — will be re-enabled once client testimonials are finalised. */}
      {false && (
      <section className="bg-background py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Proof in performance"
            title={<>Same-Day Delivery Isn't a Promise Here. <span className="text-primary">Ask the Brands Using It</span></>}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-secondary/40 p-10 text-center text-sm text-muted-foreground">
            <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-3">Client testimonials from brands shipping out of Delhi will appear here soon.</p>
          </div>
        </div>
      </section>
      )}

      {/* Network presence — links to other city pages; current city scrolls to top */}
      <NetworkPresenceSection currentSlug="delhi" />

      {/* FAQs */}
      <section className="bg-secondary/40 py-11 md:py-14">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="FAQs"
            title={<>Quick Answers About <span className="text-primary">Our Delhi Warehousing</span></>}
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

      {/* Final CTA */}
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
                  <Sparkles className="h-3.5 w-3.5" /> Ready when you are
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                  Move Your Delhi Inventory Closer to Your Customers
                </h3>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                  Tell us where your orders are concentrated and we'll show you how a Delhi-based dark store fulfilment setup can reduce your delivery times.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
                <Button asChild size="lg" className="group h-12 px-6">
                  <Link to="/contact-us">
                    Get a Quote <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
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

export default Delhi;

/* =========== CLIENT LOGOS =========== */
const ClientLogos = () => {
  const logos: { src: string; alt: string; className?: string }[] = [
    { src: daakitLogo, alt: "DAAKit" },
    { src: infiniteMarketingLogo, alt: "Infinite Marketing" },
    { src: manisaBeauteLogo, alt: "Manisa Beaute Co." },
    { src: natureCareLogo, alt: "Nature Care" },
    { src: radBeveragesLogo, alt: "RAD Beverages" },
    { src: talkingSoxLogo, alt: "Talking Sox" },
    { src: bezomeLogo, alt: "Bezome" },
    { src: bluOneLogo, alt: "BluOne", className: "md:h-[84%] md:w-[84%]" },
    { src: cambridgeLogo, alt: "Cambridge" },
    { src: chuppsLogo, alt: "Chupps" },
    { src: excelLogo, alt: "Excel", className: "md:h-[82%] md:w-[82%]" },
    { src: hachetteLogo, alt: "Hachette" },
    { src: harscoLogo, alt: "Harsco" },
    { src: impexLogo, alt: "Impex", className: "md:h-[82%] md:w-[82%]" },
    { src: nextEducationLogo, alt: "Next Education" },
    { src: physicsWallahLogo, alt: "PhysicsWallah" },
    { src: relxLogo, alt: "Relx" },
    { src: springerLogo, alt: "Springer" },
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
