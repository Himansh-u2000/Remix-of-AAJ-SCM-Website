import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, ShieldCheck, TrendingUp, Boxes, Truck } from "lucide-react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

import aajLogo from "@/assets/aaj-logo.png";
import logoHarper from "@/assets/clients-v2/HarperCollins.png";
import logoCambridge from "@/assets/clients-v2/Cambridge.png";
import logoBloomsbury from "@/assets/clients-v2/Bloomsbury.png";
import logoPanMacmillan from "@/assets/clients-v2/PanMacmillan.png";
import logoPearson from "@/assets/clients-v2/Pearson.png";
import logoHachette from "@/assets/clients-v2/Hachette.png";
import logoSpringer from "@/assets/clients-v2/Springer.png";
import logoWolters from "@/assets/clients-v2/WoltersKluwer.png";
import logoRelx from "@/assets/clients-v2/Relx.png";
import logoPW from "@/assets/clients-v2/PhysicsWallah.png";
import logoNextEd from "@/assets/clients-v2/NextEducation.png";
import logoBiozone from "@/assets/clients-v2/Biozone.png";
import logoTynor from "@/assets/clients-v2/Tynor.png";
import logoVissco from "@/assets/clients-v2/Vissco.png";
import logoHarsco from "@/assets/clients-v2/Harsco.png";
import logoMuddy from "@/assets/clients-v2/MuddyWater.png";
import logoChupps from "@/assets/clients-v2/Chupps.png";
import logoBluOne from "@/assets/clients-v2/BluOne.png";
import logoBezome from "@/assets/clients-v2/Bezome.png";
import logoExcel from "@/assets/clients-v2/Excel.png";
import logoAnanda from "@/assets/clients-v2/AnandaBharti.png";
import logoApaapi from "@/assets/clients-v2/Apaapi.png";
import logoImpex from "@/assets/clients-v2/Impex.png";
import logoSaaki from "@/assets/clients-v2/Saaki.png";
import logoVarsya from "@/assets/clients-v2/Varsya.png";
import logoWare from "@/assets/clients-v2/Ware.png";
import logoScholastic from "@/assets/clients/scholastic.png";

const Page = () => (
  <>
    <Seo {...pageSeo["/clients"]} />
    <Hero />
    <LogoHoneycomb />
    <Testimonials />
    <CaseStudies />
    <FinalCTA />
  </>
);

export default Page;

/* ============ HERO ============ */
const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="bg-grid absolute inset-0 -z-10 opacity-[0.35]" />
    <div className="absolute -top-24 right-0 -z-10 h-[440px] w-[440px] rounded-full bg-primary/5 blur-3xl" />
    <div className="container py-14 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          200+ brands · Trusted across categories
        </div>
        <h1 className="mt-6 font-display text-[36px] font-semibold leading-[1.1] md:text-5xl lg:text-[54px]">
          The Operational Impact Businesses Experienced After{" "}
          <span className="relative inline-block text-primary">
            Switching to AAJ SCM
            <svg aria-hidden viewBox="0 0 220 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
              <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          The real value of a supply chain partner shows up in operational outcomes. These testimonials and case studies reflect how businesses improved execution, visibility and reliability with AAJ Supply Chain Management.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="destructive" className="group h-12 px-6 font-semibold">
            <Link to="/contact-us">
              Talk with our team <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 border-ink/15 px-6 font-semibold">
            <a href="#testimonials">Read client stories</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ============ HONEYCOMB LOGO GRID ============ */
// Pointy-top hexagons tiled in honeycomb pattern.
// Each hex: viewBox 100 x 115.47 (aspect 1 : √3/2 inverse = 1 : 1.1547).
// Rounded corners via quadratic curves at each vertex (r ≈ 6 units).
const HEX_PATH =
  "M 44.8 3 Q 50 0 55.2 3 L 94.8 25.87 Q 100 28.87 100 34.87 L 100 80.6 Q 100 86.6 94.8 89.6 L 55.2 112.47 Q 50 115.47 44.8 112.47 L 5.2 89.6 Q 0 86.6 0 80.6 L 0 34.87 Q 0 28.87 5.2 25.87 Z";

type HexItem = { src: string; alt: string };

const leftHive: HexItem[] = [
  // Row 1 (top)
  { src: logoHarper, alt: "HarperCollins" },
  { src: logoCambridge, alt: "Cambridge University Press" },
  { src: logoPearson, alt: "Pearson" },
  // Row 2 (offset)
  { src: logoBloomsbury, alt: "Bloomsbury" },
  { src: logoPanMacmillan, alt: "Pan Macmillan" },
  { src: logoHachette, alt: "Hachette" },
  // Row 3
  { src: logoSpringer, alt: "Springer" },
  { src: logoWolters, alt: "Wolters Kluwer" },
  { src: logoRelx, alt: "RELX" },
];

const rightHive: HexItem[] = [
  // Row 1
  { src: logoPW, alt: "Physics Wallah" },
  { src: logoNextEd, alt: "Next Education" },
  { src: logoBiozone, alt: "Biozone" },
  // Row 2 (offset)
  { src: logoTynor, alt: "Tynor" },
  { src: logoVissco, alt: "Vissco" },
  { src: logoHarsco, alt: "Harsco" },
  // Row 3
  { src: logoMuddy, alt: "Muddy Water" },
  { src: logoChupps, alt: "Chupps" },
  { src: logoBluOne, alt: "BluOne" },
];

const extraHive: HexItem[] = [
  { src: logoBezome, alt: "Bezome" },
  { src: logoExcel, alt: "Excel Polymers" },
  { src: logoAnanda, alt: "Ananda Bharti" },
  { src: logoApaapi, alt: "Apaapi" },
  { src: logoImpex, alt: "Impex" },
  { src: logoSaaki, alt: "Saaki" },
  { src: logoVarsya, alt: "Varsya" },
  { src: logoWare, alt: "Ware" },
];

const Hex = ({
  src,
  alt,
  variant = "logo",
  size = "sm",
}: {
  src?: string;
  alt: string;
  variant?: "logo" | "aaj";
  size?: "sm" | "md" | "lg";
}) => {
  const widths = { sm: "w-[104px] md:w-[124px]", md: "w-[88px] md:w-[104px]", lg: "w-[210px] md:w-[260px]" };
  const isAaj = variant === "aaj";
  return (
    <div className={`group relative shrink-0 ${widths[size]} aspect-[1/1.1547]`}>
      {/* Subtle outer ring */}
      <svg viewBox="0 0 100 115.47" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path
          d={HEX_PATH}
          fill="none"
          stroke={isAaj ? "hsl(var(--primary))" : "hsl(var(--border))"}
          strokeWidth="1.4"
          className={isAaj ? "" : "transition-colors duration-300 group-hover:stroke-[hsl(var(--primary)/0.5)]"}
        />
      </svg>
      {/* Filled hex face */}
      <svg
        viewBox="0 0 100 115.47"
        preserveAspectRatio="none"
        className="absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)] transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <path
          d={HEX_PATH}
          className={isAaj ? "fill-primary" : "fill-card"}
          style={
            isAaj
              ? { filter: "drop-shadow(0 10px 24px hsl(var(--primary) / 0.35))" }
              : { filter: "drop-shadow(0 4px 10px hsl(0 0% 0% / 0.06))" }
          }
        />
      </svg>
      {src && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ padding: isAaj ? "20%" : size === "md" ? "16%" : "15%" }}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full object-contain"
            style={isAaj ? { filter: "brightness(0) invert(1)" } : undefined}
          />
        </div>
      )}
    </div>
  );
};

// 3 rows × 3 hexes, brick-offset to form honeycomb.
// Vertical overlap = H/4 (~28.87% of width). Horizontal offset = W/2 on row 2.
const HexCluster = ({ items, mirror = false }: { items: HexItem[]; mirror?: boolean }) => {
  const rows = [items.slice(0, 3), items.slice(3, 6), items.slice(6, 9)];
  // Row 2 offset direction: for left cluster shift left (toward center), for right cluster shift right (toward center).
  // mirror=true => right cluster, offset row 2 toward the LEFT (negative x) so it nests near AAJ.
  // Offset middle row AWAY from the AAJ center so logos don't slide under it.
  const offsetCls = mirror
    ? "translate-x-[31px] md:translate-x-[37px]"
    : "-translate-x-[31px] md:-translate-x-[37px]";
  return (
    <div className="flex flex-col items-center">
      {rows.map((row, r) => (
        <div
          key={r}
          className={[
            "flex gap-1",
            r > 0 ? "-mt-[30px] md:-mt-[36px]" : "",
            r === 1 ? offsetCls : "",
          ].join(" ")}
        >
          {row.map((it) => (
            <Hex key={it.alt} {...it} />
          ))}
        </div>
      ))}
    </div>
  );
};

// Mobile honeycomb: 3-row brick (3 / 2 / 3) using all 18 main logos in chunks of 8.
const MobileHive = ({ items }: { items: HexItem[] }) => {
  // Take 8 items, arrange 3 / 2 / 3 honeycomb
  const rows = [items.slice(0, 3), items.slice(3, 5), items.slice(5, 8)];
  return (
    <div className="flex flex-col items-center">
      {rows.map((row, r) => (
        <div
          key={r}
          className={["flex gap-1", r > 0 ? "-mt-[22px]" : ""].join(" ")}
        >
          {row.map((it) => (
            <Hex key={it.alt} {...it} size="md" />
          ))}
        </div>
      ))}
    </div>
  );
};

const LogoHoneycomb = () => (
  <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Trusted by Businesses Across <span className="text-primary">Ecommerce, B2B & Fulfilment Operations</span></>}
        description="From global publishers to fast-scaling D2C brands, AAJ SCM runs supply chains for businesses that can't afford to slow down."
      />

      {/* Honeycomb layout — desktop (xl) */}
      <div className="relative mt-16 hidden items-center justify-center gap-2 xl:flex">
        <HexCluster items={leftHive} />
        <div className="relative z-10">
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-full bg-primary/15 blur-3xl"
          />
          <Hex src={aajLogo} alt="AAJ Supply Chain Management" variant="aaj" size="lg" />
        </div>
        <HexCluster items={rightHive} mirror />
      </div>

      {/* Tablet (md-lg): stacked clusters around center */}
      <div className="mt-12 flex flex-col items-center gap-6 xl:hidden">
        <Hex src={aajLogo} alt="AAJ Supply Chain Management" variant="aaj" size="lg" />
        <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-4 md:gap-x-10">
          <MobileHive items={leftHive} />
          <MobileHive items={rightHive} />
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
        200+ supply chains managed across publishing, education, healthcare, D2C, electronics and industrial categories.
      </p>
    </div>
  </section>
);

/* ============ TESTIMONIALS ============ */
const testimonials = [
  {
    q: "AAJ has worked consistently in the background to provide excellent service and competitive shipping rates. Using AAJ as our distribution hub for Central Asia has opened a new line of business for Biozone.",
    a: "Anu Chauhan",
    c: "Supply Chain Manager, Biozone International Limited",
    logo: logoBiozone,
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
  },
  {
    q: "The AAJ team provided invaluable support by storing and manually managing our inventory with exceptional accuracy. This demonstrates AAJ's adaptability and willingness to go beyond standard processes.",
    a: "Tanmana Sarma",
    c: "Founder, Apaapi Threads of Glory",
    logo: logoApaapi,
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
  {
    q: "Thank you for a splendid tour of your very impressive facility. It's good to know we are in such good hands in India!",
    a: "Jonathan Atkins",
    c: "International Director, Pan Macmillan Publishing India",
    logo: logoPanMacmillan,
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[number] }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated">
      <Quote className="h-7 w-7 shrink-0 text-primary/40" aria-hidden />
      <p
        className={`mt-3 text-[15px] leading-relaxed text-ink ${open ? "" : "line-clamp-2"}`}
      >
        {t.q}
      </p>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mt-2 inline-flex w-fit items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
      >
        {open ? "Read less" : "Read more"}
        <ArrowRight className={`h-3 w-3 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
        <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-md bg-background">
          <img
            src={t.logo}
            alt={`${t.c} logo`}
            loading="lazy"
            className="max-h-10 max-w-full object-contain"
          />
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-ink">{t.a}</div>
          <div className="truncate text-[11px] uppercase tracking-wider text-muted-foreground">{t.c}</div>
        </div>
      </div>
    </article>
  );
};

const Testimonials = () => (
  <section id="testimonials" className="border-b border-border bg-background py-14 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Operational Experiences Shared by <span className="text-primary">Our Clients</span></>}
        description="Real words from supply chain leaders, founders and operations heads who run their business on AAJ SCM."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  </section>
);

/* ============ CASE STUDIES ============ */
const cases = [
  {
    icon: Boxes,
    tag: "Publishing · B2B Warehousing",
    title: "20x Growth Without Operational Strain",
    body: "A leading publisher scaled warehousing requirements 20x over the partnership — onboarded new categories, expanded SKUs and held inventory accuracy throughout.",
    metric: "20x",
    metricLabel: "warehousing scale-up",
  },
  {
    icon: TrendingUp,
    tag: "Education · Peak Throughput",
    title: "1M+ Units Dispatched in 25 Working Days",
    body: "During peak academic season, our team processed over 1 million units in a short month and held 97.34% TAT against a budgeted 95% — without overtime escalations.",
    metric: "97.34%",
    metricLabel: "TAT vs 95% target",
  },
  {
    icon: Truck,
    tag: "D2C · Multi-City Fulfilment",
    title: "Pan-India Reach for a Growing D2C Brand",
    body: "A founder-led D2C brand moved from single-warehouse operations to multi-city fulfilment with AAJ — cutting delivery TAT and unlocking new geographies confidently.",
    metric: "5 cities",
    metricLabel: "fulfilment footprint",
  },
];

const CaseStudies = () => (
  <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Real Supply Chain Improvements <span className="text-primary">Across Different Business Models</span></>}
        description="Snapshots of operational outcomes delivered for businesses across publishing, education, healthcare and D2C."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <article
            key={c.title}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
          >
            <span className="icon-tile h-12 w-12">
              <c.icon className="h-5 w-5" />
            </span>
            <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">{c.tag}</div>
            <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink">{c.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            <div className="mt-6 flex items-baseline gap-3 border-t border-border pt-5">
              <span className="font-display text-3xl font-semibold text-primary">{c.metric}</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{c.metricLabel}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============ FINAL CTA ============ */
const FinalCTA = () => (
  <section className="bg-background py-14 md:py-20">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.04] p-10 text-center shadow-elevated md:p-14">
        <div className="absolute -top-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
          <ShieldCheck className="h-3.5 w-3.5" /> Trusted partner
        </span>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink md:text-[40px]">
          Looking for More Stability Across Your <span className="text-primary">Supply Chain Operations?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Talk with our team about your warehousing, fulfilment or transportation needs — and see how AAJ SCM can fit into your business.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="destructive" className="group h-12 px-6 font-semibold">
            <Link to="/contact-us">
              Talk with our team <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 border-ink/20 px-6 font-semibold">
            <Link to="/services">Explore our services</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);