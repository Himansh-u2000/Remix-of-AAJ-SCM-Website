import { Link } from "react-router-dom";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import {
  ArrowRight,
  AlertTriangle,
  Boxes,
  Truck,
  Warehouse,
  Cpu,
  ShieldCheck,
  Eye,
  Settings,
  Gauge,
  Compass,
  Target,
  Award,
  CheckCircle2,
  Users,
  FileCheck2,
  ClipboardList,
  HardHat,
  Search,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import heroImg from "@/assets/about-hero.jpg";
import leaderAnil from "@/assets/leader-anil-jain.webp";
import leaderAnamika from "@/assets/leader-anamika-jain.jpeg";
import leaderAtishay from "@/assets/leader-atishay-jain.webp";

const AboutUs = () => {
  return (
    <>
      <Seo {...pageSeo["/about-us"]} />
      <Hero />
      <Story />
      <Philosophy />
      <MissionVision />
      <Leadership />
      <Certifications />
      <FinalCTA />
    </>
  );
};

/* ============ HERO ============ */
const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-surface">
    {/* Soft decorative background */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 opacity-[0.5]" />
      <div className="absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
    </div>

    <div className="container py-11 lg:py-14">
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">About Us</span>
      </nav>

      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Our Story · Since 2008
          </div>
          <h1 className="mt-6 font-display text-[40px] font-semibold text-foreground md:text-6xl lg:text-[64px]">
            Built To Fix What{" "}
            <span className="relative inline-block text-primary">
              Logistics
              <span className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-primary/15" />
            </span>{" "}
            Was Missing
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Most businesses don't fail because of demand. They struggle because their supply chain
            can't keep up. AAJ was built to change that.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group">
              <Link to="/contact-us">
                Talk To Our Team <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>

        {/* Right: image card with floating stats */}
        <div className="relative lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-accent/15 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-elevated">
              <img
                src={heroImg}
                alt="AAJ SCM modern warehouse facility"
                className="h-[360px] w-full object-cover md:h-[460px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-background/85">
                  Modern, Compliant, Tech-Enabled
                </div>
                <div className="mt-1 font-display text-lg font-semibold text-background">
                  Warehouses Built For Scale
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-6 top-8 hidden rounded-2xl border border-border bg-background/95 p-4 shadow-elevated backdrop-blur md:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">ISO Certified</div>
                  <div className="text-sm font-semibold text-foreground">9001 · 27001</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {[
          { v: "2008", l: "Founded" },
          { v: "13+", l: "Warehouse Locations" },
          { v: "End-To-End", l: "Supply Chain" },
          { v: "100%", l: "ISO-Compliant Operations" },
        ].map((s) => (
          <div key={s.l} className="bg-background px-6 py-6">
            <div className="font-display text-2xl font-semibold text-foreground md:text-3xl">{s.v}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ STORY ============ */
const challenges = [
  { icon: Boxes, label: "Stock Mismatches" },
  { icon: Truck, label: "Delayed Dispatches" },
  { icon: Users, label: "Poor Vendor Coordination" },
  { icon: Eye, label: "No Real-Time Visibility" },
];

const pillars = [
  { icon: Warehouse, label: "Warehousing" },
  { icon: Boxes, label: "Fulfillment" },
  { icon: Truck, label: "Transportation" },
  { icon: Cpu, label: "Technology" },
];

const Story = () => (
  <section className="border-b border-border bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        eyebrow="Our Story"
        title="From A Single Warehouse To An End-To-End Supply Chain Partner"
        description="When AAJ opened its first warehouse in 2008, logistics in India was largely fragmented. Warehousing, transportation, and fulfillment operated in silos. Inventory visibility was limited. Execution depended more on people than strategy."
      />

      {/* Problem We Saw - light grey variation */}
      <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
        <div className="grid gap-0 lg:grid-cols-12">
          <div className="relative p-8 md:p-10 lg:col-span-5 lg:border-r lg:border-border">
            <div className="bg-dots absolute inset-0 opacity-40" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <AlertTriangle className="h-3.5 w-3.5" />
                The Problem We Saw
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-foreground md:text-3xl">
                Fragmented Logistics <br />No Scalability
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                For growing businesses, broken handoffs between warehousing, transport and
                fulfillment created constant friction - and capped how fast they could grow.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border lg:col-span-7">
            {challenges.map((c) => (
              <div
                key={c.label}
                className="group relative bg-background p-6 transition-colors hover:bg-surface md:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/20">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="mt-5 font-display text-base font-semibold text-foreground md:text-lg">
                  {c.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Common before AAJ</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              That's where AAJ began - not as just another 3PL provider, but as a company focused on
              bringing <span className="text-foreground font-medium">structure, strategy, and reliability</span> into supply chain operations.
            </p>
            <p>
              Over the years, we have grown organically - evolving from managing storage to building
              integrated supply chain solutions for India's most demanding brands.
            </p>
            <p>
              Today, AAJ operates as an end-to-end supply chain partner. The supply chain is not
              about the movement of goods - it's about <span className="text-foreground font-medium">control, predictability, and the ability to scale without disruption.</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-3">
            {pillars.map((p) => (
              <div key={p.label} className="group rounded-xl border border-border bg-background p-5 text-center transition-shadow hover:shadow-card">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </span>
                <div className="mt-3 text-sm font-semibold text-foreground">{p.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Four elements. One unified system.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ============ PHILOSOPHY ============ */
const beliefs = [
  {
    icon: Boxes,
    title: "Logistics Is Not Just Storage",
    body: "Storing inventory is easy. Managing it efficiently at scale is not. Real value comes from strategies that bring control to movement, improve accuracy, and increase speed.",
  },
  {
    icon: Settings,
    title: "Systems Drive Scale",
    body: "Business growth is driven by tech-enabled processes. Standardised systems and SOPs make operations consistent, repeatable and scalable.",
  },
  {
    icon: Eye,
    title: "Visibility Creates Control",
    body: "When businesses see their inventory, orders, and movement in real time, they make better decisions and reduce risk across the chain.",
  },
  {
    icon: Gauge,
    title: "Execution Defines Reliability",
    body: "Plans don't build trust. Execution does. Consistency matters in every process, every dispatch, and every count.",
  },
];

const Philosophy = () => (
  <section className="border-b border-border bg-surface py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        eyebrow="Our Core Philosophy"
        title="We Treat Logistics As A Strategic Driver Of Growth"
        description="Supply chain decisions have a direct impact on business growth. These four beliefs guide how we operate every day."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {beliefs.map((b, i) => (
          <Card key={b.title} className="rounded-2xl border-border shadow-card transition-shadow hover:shadow-elevated">
            <CardContent className="p-7">
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{b.body}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft p-8 md:p-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              A Supply Chain Partner Should Go Beyond Storage
            </div>
            <p className="mt-2 font-display text-xl font-semibold text-foreground md:text-2xl">
              We don't wait for instructions. We identify gaps, suggest improvements, and act
              proactively - because in logistics, prevention is better than correction.
            </p>
          </div>
          <ShieldCheck className="hidden h-14 w-14 shrink-0 text-primary md:block" />
        </div>
      </div>
    </div>
  </section>
);

/* ============ MISSION & VISION ============ */
const MissionVision = () => (
  <section className="border-b border-border bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        eyebrow="Mission & Vision"
        title="What We Aim To Build"
        description="A supply chain ecosystem where reliability, technology and access combine to make growth predictable."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-card md:p-10">
          <div className="bg-dots absolute inset-0 opacity-40" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Target className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Mission</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight md:text-3xl">
              Simplify Supply Chain Operations Through Technology, Discipline & Scalable Infrastructure
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We make the supply chain more reliable, accessible, and responsive - so businesses can
              function with clarity, control, and confidence, regardless of size or growth stage.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-card md:p-10">
          <div className="bg-dots absolute inset-0 opacity-40" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
                <Compass className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Our Vision</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight md:text-3xl">
              A Supply Chain That Powers Growth - Not One That Limits It
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                "Operations that are reliable, predictable and tech-driven.",
                "Businesses that respond faster to changing demand and markets.",
                "Enterprise-grade logistics access for growing businesses & SMEs.",
              ].map((v) => (
                <li key={v} className="flex items-start gap-3 text-base text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ LEADERSHIP ============ */
const leaders = [
  { name: "Anil Jain", role: "Founder", img: leaderAnil },
  { name: "Anamika Jain", role: "CEO", img: leaderAnamika },
  { name: "Atishay Jain", role: "CTO & CFO", img: leaderAtishay },
];

const Leadership = () => (
  <section className="border-b border-border bg-surface py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        eyebrow="Leadership"
        title="Direction That Drives Execution"
        description="Strong systems need strong direction. AAJ is built and led by professionals with deep experience in warehousing, logistics, and supply chain management."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((l) => (
          <Card key={l.name} className="rounded-2xl border-border bg-background shadow-card transition-shadow hover:shadow-elevated">
            <CardContent className="p-6">
              <div className="relative h-72 overflow-hidden rounded-xl bg-secondary">
                <img
                  src={l.img}
                  alt={`${l.name} - ${l.role} at AAJ SCM`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5">
                <div className="font-display text-lg font-semibold">{l.name}</div>
                <div className="mt-1 text-sm text-primary">{l.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

/* ============ CERTIFICATIONS ============ */
const standards = [
  { icon: FileCheck2, label: "ISO-Certified Processes" },
  { icon: ClipboardList, label: "Standardized Warehouse Management Practices" },
  { icon: HardHat, label: "Safety & Compliance Protocols" },
  { icon: Search, label: "Structured Audit & Quality Control Systems" },
];

const awards = [
  { year: "2018", title: "Gold Certified Warehouse", body: "CII Institute of Logistics" },
  { year: "2019", title: "UP Logistics Leadership Award", body: "World Leadership Congress" },
  { year: "2020", title: "Warehousing Excellence Award", body: "Inflection Awards" },
  { year: "2023", title: "Best Tech-Driven 3PL Service Provider", body: "Scale Awards, CII" },
  { year: "2023", title: "Best Warehousing Company", body: "India Cargo Awards" },
];

const Certifications = () => (
  <section className="border-b border-border bg-background py-11 lg:py-14">
    <div className="container">
      <SectionHeader
        eyebrow="Certifications & Recognition"
        title="Reliability That's Verified - Not Claimed"
        description="Every process at AAJ is built on compliance, standardization, and consistent execution. Our supply chain operations are designed to meet industry benchmarks every single day."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Across All Warehouse Facilities
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold">
              Standards We Operate By
            </h3>
            <ul className="mt-6 space-y-3">
              {standards.map((s) => (
                <li key={s.label} className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="self-center text-sm font-medium text-foreground">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Award className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-semibold">Recognized For Operational Excellence</h3>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Our commitment to structured, process-driven supply chain operations has been recognized
            across the industry.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {awards.map((a) => (
              <div
                key={a.title + a.year}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-elevated"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Trophy className="h-5 w-5" />
                  </span>
                  <span className="inline-flex items-center rounded-full border border-primary/20 bg-background px-2.5 py-1 text-[11px] font-semibold tracking-wider text-primary">
                    {a.year}
                  </span>
                </div>
                <div className="mt-5 font-display text-base font-semibold leading-snug text-foreground">
                  {a.title}
                </div>
                <div className="mt-1.5 text-sm text-muted-foreground">{a.body}</div>
                <div className="mt-5 h-px w-full bg-border" />
                <div className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Industry Recognition
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ FINAL CTA ============ */
const FinalCTA = () => (
  <section className="bg-background py-11 lg:py-14">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background shadow-elevated md:p-16">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="bg-grid absolute inset-0 opacity-[0.06]" />

        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3 py-1.5 text-xs font-medium text-background/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Let's Talk
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-background md:text-4xl lg:text-5xl">
              Looking For A Supply Chain Company You Can Rely On?
            </h2>
            <p className="mt-5 max-w-2xl text-base text-background/75 md:text-lg">
              Your business is growing. Your supply chain should keep up - without adding complexity.
              Let's build a stronger supply chain for your business.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
            <Button asChild size="lg" className="group w-full lg:w-auto">
              <Link to="/contact-us">
                Speak With Our Experts <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground lg:w-auto">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
