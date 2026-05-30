import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Sun,
  Lightbulb,
  ShieldCheck,
  Layers,
  FileX2,
  FileCheck2,
  Package,
  Recycle,
  ClipboardCheck,
  Route,
  Truck,
  MapPin,
  RotateCcw,
  Sparkles,
  HardHat,
  GraduationCap,
  Home,
  Users,
  Scale,
  Building2,
  HeartHandshake,
} from "lucide-react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/sustainability/hero.jpg";
import { TrendingDown, Globe2, Zap } from "lucide-react";

const Page = () => (
  <>
    <Seo {...pageSeo["/sustainability"]} />
    <Hero />
    <Pillars />
    <ImpactStatement />
    <PillarSections />
    <SocialResponsibility />
    <FinalCTA />
  </>
);

export default Page;

/* ============ HERO ============ */
const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(60% 80% at 100% 0%, hsl(150 55% 94%) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, hsl(var(--secondary)) 0%, transparent 60%)",
      }}
    />
    <div className="bg-grid absolute inset-0 -z-10 opacity-[0.3]" />
    <div className="absolute -top-24 right-0 -z-10 h-[440px] w-[440px] rounded-full bg-emerald-500/10 blur-3xl" />

    <div className="container py-12 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="font-display text-[40px] font-semibold leading-[1.05] md:text-5xl lg:text-[58px]">
            A Supply Chain That Works for{" "}
            <span className="relative whitespace-nowrap text-emerald-700">
              Business
              <svg
                aria-hidden
                viewBox="0 0 220 12"
                className="absolute -bottom-2 left-0 h-3 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 110 -2 218 8"
                  stroke="hsl(150 55% 40%)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            and for the{" "}
            <span className="text-emerald-700">Planet</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            At AAJ Supply Chain Management, sustainability isn&rsquo;t a separate
            initiative - it&rsquo;s built into how we warehouse, how we
            operate and how we grow. From energy-efficient facilities to
            paperless operations, we&rsquo;re reducing our environmental
            footprint one process at a time.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="group h-12 bg-emerald-700 px-6 text-sm font-semibold text-white shadow-elevated hover:bg-emerald-800"
            >
              <a href="#pillars">
                Read Our Sustainability Commitments{" "}
                <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-ink/15 px-6 text-sm font-semibold"
            >
              <Link to="/contact-us">Talk to Us About Green Warehousing</Link>
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-emerald-200/40 via-transparent to-amber-100/40" />
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
            <img
              src={heroImg}
              alt="Sustainable warehouse with solar panels, wind turbine and electric delivery truck"
              width={1280}
              height={1024}
              className="h-auto w-full"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-card backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Leaf className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Built into operations
                </div>
                <div className="text-sm font-semibold text-ink">
                  Not a side initiative
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ 4 CORE PILLARS ANCHOR ============ */
const PILLARS = [
  {
    icon: Sun,
    title: "Green Infrastructure",
    desc: "Energy-efficient warehouses, solar energy and smart facility design.",
    tags: ["Solar", "LED", "Smart design"],
  },
  {
    icon: Recycle,
    title: "Responsible Operations",
    desc: "Paperless processes, waste reduction and sustainable packaging.",
    tags: ["100% Paperless", "Digital POD", "Recyclable"],
  },
  {
    icon: Route,
    title: "Sustainable Transportation",
    desc: "AAJ Swift fleet optimisation using AI to reduce fuel consumption and emissions.",
    tags: ["AI routing", "Load consolidation", "Lower RTO"],
  },
  {
    icon: HeartHandshake,
    title: "People & Community",
    desc: "Employee welfare, inclusive growth and social responsibility.",
    tags: ["Safe workplaces", "Local hiring", "Women workforce"],
  },
];

const Pillars = () => {
  const [active, setActive] = useState(0);
  const A = PILLARS[active];
  return (
    <section id="pillars" className="border-b border-border bg-surface">
      <div className="container py-12 lg:py-16">
        <SectionHeader
          align="center"
          title={
            <>
              Four Pillars of Our{" "}
              <span className="text-primary">Sustainability Promise</span>
            </>
          }
          description="A connected framework that turns sustainability from a slogan into a daily operating standard across every warehouse, every dispatch, every kilometer."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Left: dynamic anchor card */}
          <div className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-ink p-8 text-white shadow-elevated">
              <div
                className="absolute inset-0 -z-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 10%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
                  backgroundSize: "32px 32px, 48px 48px",
                }}
              />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur">
                  <A.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-[34px]">
                  {A.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/80">
                  {A.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {A.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 interactive tiles */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              const isActive = i === active;
              return (
                <button
                  type="button"
                  key={p.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border bg-background p-6 text-left transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-elevated",
                    isActive
                      ? "border-primary/50 shadow-elevated ring-2 ring-primary/20"
                      : "border-border",
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h4 className="mt-5 font-display text-lg font-semibold text-ink">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-[3px] origin-left transition-transform duration-500",
                      "bg-primary",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ IMPACT STATEMENT ============ */
const ImpactStatement = () => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.25]" />
    <div className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/[0.06] blur-3xl" />
    <div className="container py-12 lg:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-semibold leading-[1.15] md:text-4xl lg:text-[44px]">
          Every warehouse, every dispatch, every kilometer has an{" "}
          <span className="text-primary">environmental cost</span>.
          We&rsquo;re working to reduce ours
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Logistics and warehousing are energy-intensive by nature. As a
          company moving 10 crore+ units a year, we recognise the scale of our
          footprint - and the responsibility that comes with it.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          { icon: TrendingDown, k: "10 Cr+", v: "Units moved annually" },
          { icon: Globe2, k: "12", v: "Cities under operation" },
          { icon: Zap, k: "1,200+", v: "People we're responsible for" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.k}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              <Icon className="pointer-events-none absolute -right-3 -bottom-3 h-28 w-28 text-primary/[0.05] transition-all duration-500 group-hover:scale-110 group-hover:text-primary/[0.09]" />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-5 font-display text-4xl font-semibold text-primary">
                {s.k}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ============ PILLAR DEEP DIVES (collapsible, rich content) ============ */
type PillarItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};
type PillarSection = {
  n: string;
  eyebrow: string;
  title: string;
  intro: string;
  accent: string; // tailwind accent classes
  metric: { k: string; v: string };
  items: PillarItem[];
};

const PILLAR_SECTIONS: PillarSection[] = [
  {
    n: "01",
    eyebrow: "Pillar 1 · Green Infrastructure",
    title:
      "Warehouses designed to minimise environmental impact and use less energy.",
    intro:
      "Our commitment to green warehousing is reflected in how every AAJ Supply Chain facility is designed, operated and managed.",
    accent: "emerald",
    metric: { k: "Solar-ready", v: "facilities across the network" },
    items: [
      {
        icon: Sun,
        title: "Solar energy",
        desc: "Cuts grid dependence and carbon emissions across our facilities.",
      },
      {
        icon: Lightbulb,
        title: "LED lighting",
        desc: "Lower energy use, longer lifespan and less waste over time.",
      },
      {
        icon: ShieldCheck,
        title: "Safety compliant",
        desc: "Built to meet fire, safety and environmental standards.",
      },
      {
        icon: Layers,
        title: "Optimised storage",
        desc: "High-density racking reduces space needed per unit stored.",
      },
    ],
  },
  {
    n: "02",
    eyebrow: "Pillar 2 · Responsible Operations",
    title: "100% paperless. Not just more efficient - more responsible.",
    intro:
      "Our shift to fully scan-based, paperless operations wasn't just driven by accuracy and speed. Its environmental impact is just as significant - millions of paper records eliminated every year.",
    accent: "emerald",
    metric: { k: "0", v: "physical paper records generated" },
    items: [
      {
        icon: FileX2,
        title: "100% paperless ops",
        desc: "Scan-based workflows with no physical paper records on the floor.",
      },
      {
        icon: FileCheck2,
        title: "Digital PODs",
        desc: "Stored digitally for 1-7 years - no paper trails to manage.",
      },
      {
        icon: Package,
        title: "Right-sized packaging",
        desc: "Less material waste per shipment with dimension-matched cartons.",
      },
      {
        icon: Recycle,
        title: "Sustainable packaging",
        desc: "Recyclable and biodegradable material guidance for clients.",
      },
      {
        icon: ClipboardCheck,
        title: "High inventory accuracy",
        desc: "Fewer errors mean fewer return trips and wasted movement.",
      },
    ],
  },
  {
    n: "03",
    eyebrow: "Pillar 3 · Sustainable Transportation",
    title:
      "Every kilometer we optimise is a step towards a cleaner supply chain.",
    intro:
      "Most supply chain emissions come from transportation. With AAJ Swift, we minimise unnecessary movement, consolidate loads and optimise routes to lower the carbon impact of every delivery.",
    accent: "emerald",
    metric: { k: "AI-routed", v: "AAJ Swift dispatches every day" },
    items: [
      {
        icon: Route,
        title: "Route optimisation",
        desc: "Smarter AI-driven routing reduces distance and fuel consumption.",
      },
      {
        icon: Truck,
        title: "Load consolidation",
        desc: "Higher fill rates mean fewer vehicles on the road per shipment.",
      },
      {
        icon: MapPin,
        title: "Pan-India network",
        desc: "Inventory closer to customers cuts last-mile distance and time.",
      },
      {
        icon: RotateCcw,
        title: "Reduced RTOs",
        desc: "Better accuracy lowers failed deliveries and avoidable return trips.",
      },
      {
        icon: Sparkles,
        title: "Future focus",
        desc: "Actively exploring cleaner, low-emission fleet options.",
      },
    ],
  },
  {
    n: "04",
    eyebrow: "Pillar 4 · People & Community",
    title:
      "Taking care of people is as important as taking care of the planet.",
    intro:
      "Our commitment to sustainability extends beyond the environment - to the 1,200+ people who make AAJ SCM&rsquo;s operations run every day. Safe workplaces, fair practices and opportunities for growth are non-negotiable for us.",
    accent: "emerald",
    metric: { k: "1,200+", v: "people across operations" },
    items: [
      {
        icon: HardHat,
        title: "Safe workplaces",
        desc: "Fire-safe, ventilated, ergonomic and regularly audited facilities.",
      },
      {
        icon: GraduationCap,
        title: "Employee training",
        desc: "Ongoing SOP training and continuous skill upskilling programs.",
      },
      {
        icon: Home,
        title: "Local hiring",
        desc: "Prioritising employment from communities near each warehouse.",
      },
      {
        icon: Users,
        title: "Women workforce",
        desc: "Actively increasing representation across operational roles.",
      },
      {
        icon: Scale,
        title: "Fair labour practices",
        desc: "Transparent pay, regulated hours and full legal compliance.",
      },
    ],
  },
];

const PillarSections = () => {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="border-b border-border bg-background">
      <div className="container py-12 lg:py-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          {PILLAR_SECTIONS.map((p, i) => {
            const isOpen = open === i;
            return (
              <div
                key={p.eyebrow}
                className="group border-b border-border bg-card transition-colors last:border-b-0 hover:bg-secondary/30"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-10 md:py-6"
                >
                  <h3
                    className="font-display text-lg font-semibold text-primary md:text-2xl"
                    dangerouslySetInnerHTML={{ __html: p.title }}
                  />
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all",
                      isOpen
                        ? "rotate-45 border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-ink group-hover:border-primary/40",
                    )}
                  >
                    <span className="text-2xl leading-none">+</span>
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 md:px-10 md:pb-8">
                      <p
                        className="max-w-3xl text-base leading-relaxed text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: p.intro }}
                      />
                      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        <ul className="divide-y divide-border">
                          {p.items.map((it) => {
                            const ItIcon = it.icon;
                            return (
                              <li key={it.title} className="flex items-start gap-4 px-5 py-4 md:px-6 md:py-5">
                                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                  <ItIcon className="h-4 w-4" />
                                </span>
                                <div>
                                  <p className="font-display text-base font-semibold text-ink md:text-lg">
                                    {it.title}
                                  </p>
                                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                                    {it.desc}
                                  </p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="mt-6 inline-flex items-baseline gap-3 rounded-full bg-primary px-5 py-2.5 shadow-elevated">
                        <span className="font-display text-2xl font-semibold text-primary-foreground">
                          {p.metric.k}
                        </span>
                        <span className="text-sm text-primary-foreground/85">{p.metric.v}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ============ SOCIAL RESPONSIBILITY ============ */
const COMMUNITY = [
  {
    icon: Home,
    title: "Local hiring",
    desc: "Prioritising employment from communities near each warehouse, creating direct economic benefit where we operate.",
  },
  {
    icon: GraduationCap,
    title: "Skill development",
    desc: "Training and warehouse operations skilling for local youth, building employability beyond AAJ.",
  },
  {
    icon: Users,
    title: "Women empowerment",
    desc: "Initiatives supporting women's employment, training and career growth within AAJ SCM's operations.",
  },
];

const SocialResponsibility = () => {
  const [active, setActive] = useState(0);
  const c = COMMUNITY[active];
  const Icon = c.icon;
  return (
    <section className="border-b border-border bg-secondary/40 py-12 md:py-16">
      <div className="container">
        <SectionHeader
          align="center"
          title={
            <>
              Beyond business, our responsibility to the{" "}
              <span className="text-primary">communities</span> around us.
            </>
          }
          description="Our warehouses are present across 12 cities in India. The communities around each location are part of our ecosystem - and we take that responsibility seriously."
          className="mx-auto"
        />

        {/* Pill switcher */}
        <div className="mt-8 flex justify-center">
          <div className="grid w-full max-w-xl grid-cols-3 gap-1 rounded-full border border-border bg-background p-1.5 shadow-card">
            {COMMUNITY.map((cc, i) => (
              <button
                key={cc.title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "w-full rounded-full px-3 py-2.5 text-center text-sm font-semibold transition-colors",
                  active === i
                    ? "bg-primary text-primary-foreground shadow-elevated"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {cc.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
            <div className="grid gap-0 md:grid-cols-[1fr_280px]">
              <div className="p-8 md:p-12">
                <h3 className="font-display text-2xl font-semibold leading-snug text-ink md:text-[28px]">
                  {c.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {c.desc}
                </p>
              </div>
              <div className="relative hidden border-l border-border bg-secondary/50 p-8 md:flex md:flex-col md:justify-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-5 flex items-center gap-1.5">
                  {COMMUNITY.map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        i === active ? "w-8 bg-primary" : "w-3 bg-border",
                      )}
                    />
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

/* ============ FINAL CTA ============ */
const FinalCTA = () => (
  <section className="relative overflow-hidden bg-ink text-white">
    <div
      className="absolute inset-0 -z-0 opacity-[0.18]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--accent)) 0%, transparent 50%)",
      }}
    />
    <div
      className="absolute inset-0 -z-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
    <div className="container relative py-14 lg:py-18">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          <Leaf className="h-3.5 w-3.5" />
          Sustainable 3PL Partner
        </div>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-[44px]">
          Ready to work with a 3PL that takes sustainability as seriously as you
          do?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
          Team up with AAJ SCM to streamline your supply chain - making it
          more efficient and precise while staying environmentally responsible.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="group h-12 bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-elevated hover:bg-primary/90"
          >
            <Link to="/contact-us">
              Talk to Us About Green Warehousing{" "}
              <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/services/warehousing">
              Explore Our Warehousing Services{" "}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
