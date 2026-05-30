import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  Cpu,
  Crown,
  DollarSign,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Home,
  Layers,
  LineChart,
  MapPin,
  Mic,
  Network,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import ambitionBoxLogo from "@/assets/ambitionbox-logo.png";
import roleWarehouseImg from "@/assets/roles/warehouse-ops.jpg";
import roleTechImg from "@/assets/roles/technology.jpg";
import roleClientImg from "@/assets/roles/client-success.jpg";
import roleBdImg from "@/assets/roles/business-dev.jpg";
import roleTransportImg from "@/assets/roles/transportation.jpg";
import roleFinanceImg from "@/assets/roles/finance.jpg";
import roleHrImg from "@/assets/roles/hr.jpg";
import roleMarketingImg from "@/assets/roles/marketing.jpg";
import roleVendorImg from "@/assets/roles/vendor.jpg";

const JOBS_URL = "https://aajenterprises.zohorecruit.in/jobs/Careers";
const MAIL_URL = "mailto:hrsupport@aajscm.com";

type Opening = {
  title: string;
  department?: string | null;
  location?: string | null;
  employment_type?: string | null;
  apply_url?: string | null;
};

const pickIcon = (text: string) => {
  const t = text.toLowerCase();
  if (/warehouse|operation|wms|dispatch|inbound|outbound/.test(t)) return Warehouse;
  if (/engineer|developer|software|tech|wms|tms|data|it\b/.test(t)) return Cpu;
  if (/client|success|account|service/.test(t)) return HeartHandshake;
  if (/business|sales|growth|bd\b|development/.test(t)) return TrendingUp;
  if (/transport|logistics|fleet|driver|delivery/.test(t)) return Truck;
  if (/hr|people|talent|recruit/.test(t)) return Users;
  if (/finance|accounts|payroll/.test(t)) return DollarSign;
  return Briefcase;
};

const useOpenings = () => {
  const [openings, setOpenings] = useState<Opening[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let cancelled = false;
    import("@/integrations/supabase/client")
      .then(({ supabase }) => supabase.functions.invoke("get-zoho-openings"))
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) setOpenings([]);
        else setOpenings((data?.openings as Opening[]) ?? []);
      })
      .catch(() => !cancelled && setOpenings([]))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);
  return { openings, loading };
};

const Page = () => (
  <>
    <Seo {...pageSeo["/careers"]} />
    <Hero />
    <WhyAAJ />
    <Roles />
    <Values />
    <Growth />
    <Inclusion />
    <CultureGrid />
    <Benefits />
    <Testimonials />
    <OpenRoles />
    <FAQ />
    <FinalCTA />
  </>
);

export default Page;

/* ============ HERO ============ */
const Hero = () => {
  const { openings, loading } = useOpenings();
  const list = (openings ?? []).slice(0, 4);
  const hasLive = !loading && list.length > 0;
  return (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
    <div className="bg-grid absolute inset-0 -z-10 opacity-[0.35]" />
    <div className="absolute -top-24 right-0 -z-10 h-[440px] w-[440px] rounded-full bg-primary/5 blur-3xl" />

    <div className="container grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
      <div className="lg:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          We are hiring across 11 cities
        </div>

        <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] md:text-5xl lg:text-[56px]">
          Build a Career in the Industry That{" "}
          <span className="relative inline-block text-primary">
            Keeps India Moving
            <svg aria-hidden viewBox="0 0 220 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
              <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          AAJ Supply Chain Management is one of India's fastest-growing 3PL companies. We're looking for people who are curious, accountable and genuinely excited about making supply chain work better. If that sounds like you, let's talk.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="group rounded-full">
            <a href={JOBS_URL} target="_blank" rel="noreferrer">
              View Open Positions <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="#culture">Learn About Our Culture</a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 11 cities</span>
          <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> 800+ teammates</span>
          <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-primary" /> 4.3/5 rated by women on AmbitionBox</span>
        </div>
      </div>

      {/* Visual: stacked job cards */}
      <div className="relative lg:col-span-5">
        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" />

          <div className="rounded-3xl border border-border bg-card p-6 shadow-elevated">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Now Hiring
              </div>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {loading ? "Loading…" : hasLive ? "Live" : "Portal"}
              </span>
            </div>

            {loading ? (
              <ul className="mt-5 space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background p-3.5"
                  >
                    <span className="h-9 w-9 animate-pulse rounded-lg bg-muted" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-2/3 animate-pulse rounded bg-muted" />
                      <div className="h-2.5 w-1/3 animate-pulse rounded bg-muted" />
                    </div>
                  </li>
                ))}
              </ul>
            ) : hasLive ? (
              <ul className="mt-5 space-y-3">
                {list.map((j, idx) => {
                  const Icon = pickIcon(`${j.title} ${j.department ?? ""}`);
                  const href = j.apply_url || JOBS_URL;
                  return (
                    <li key={`${j.title}-${idx}`}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-border bg-background p-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
                      >
                        <div className="flex items-center gap-3">
                          <span className="icon-tile h-9 w-9">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-ink">{j.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {j.location || j.department || "View details"}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="mt-5 rounded-2xl border border-dashed border-border bg-background p-5 text-center">
                <span className="icon-tile mx-auto mb-3 h-10 w-10">
                  <Briefcase className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-ink">
                  Explore live openings
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  We post new roles regularly on our careers portal.
                </p>
              </div>
            )}

            <a
              href={JOBS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              {hasLive ? "Browse all open roles" : "Visit our careers portal"}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

/* ============ WHY ============ */
const whyItems = [
  {
    icon: Rocket,
    title: "Real impact from day one",
    body: "Our teams handle operations at scale. Every decision you make has a direct effect on client outcomes and customer deliveries.",
  },
  {
    icon: Network,
    title: "Cross-functional exposure",
    body: "Work alongside operations, technology, client management and logistics teams, building a rounded understanding of supply chain.",
  },
  {
    icon: Cpu,
    title: "Technology-driven environment",
    body: "You'll work with in-house WMS, TMS and reporting systems. The tech is modern and constantly being improved.",
  },
  {
    icon: TrendingUp,
    title: "Result oriented culture",
    body: "People who show up, take ownership and get results move quickly regardless of tenure or background.",
  },
];

const WhyAAJ = () => (
  <section className="relative border-b border-border bg-secondary/40 py-11 md:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Why Build Your Career at <span className="text-primary">AAJ Supply Chain Management?</span></>}
        description="Supply chain is one of the most dynamic sectors in India right now, and AAJ SCM is one of the most ambitious companies in it. Here's why people choose to build their careers here."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {whyItems.map((it) => (
          <div
            key={it.title}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <span className="icon-tile h-12 w-12">
              <it.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            <it.icon className="icon-watermark" />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 text-center">
        <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
          India's 3PL sector is projected to reach{" "}
          <span className="font-semibold text-primary">USD 61 billion by 2030</span>. Building expertise here now positions you ahead of a decade of opportunity.
        </p>
      </div>
    </div>
  </section>
);

/* ============ ROLES ============ */
const roles = [
  { title: "Warehouse Operations", body: "Inbound, putaway, picking, packing, dispatch and floor management. Our warehouse teams own the physical reality of every order.", image: roleWarehouseImg },
  { title: "Technology & Software", body: "Building and improving WMS, TMS and reporting tools, in-house. Ship features that 800+ teammates use every single day.", image: roleTechImg },
  { title: "Client Success", body: "Single point of contact for client relationships, resolving issues and growing partnerships across brands and categories.", image: roleClientImg },
  { title: "Business Development", body: "Identifying new clients, building proposals and closing partnerships across B2B and B2C. Bring the next brand on board.", image: roleBdImg },
  { title: "Transportation - AAJ Swift", body: "PTL transport operations, courier coordination and TMS management. Keep India's freight moving on time.", image: roleTransportImg },
  { title: "Finance & Compliance", body: "Billing, P&L, GST compliance, auditing and financial reporting across the entire warehouse and transport network.", image: roleFinanceImg },
  { title: "Human Resources", body: "Hiring, onboarding, training and employee welfare across 11 locations and a 24x7 operation.", image: roleHrImg },
  { title: "Marketing", body: "Brand strategy, digital marketing, performance campaigns, content and lead generation for a fast-scaling 3PL.", image: roleMarketingImg },
  { title: "Vendor Management", body: "Fleet partner onboarding, compliance, rate negotiations and performance tracking across the country.", image: roleVendorImg },
];

const Roles = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="border-b border-border bg-background py-11 md:py-14">
      <div className="container">
        <SectionHeader
          align="center"
          title={<>Whether you're an operations expert, a tech builder or a client partner, <span className="text-primary">there's a role for you</span></>}
          description="Click any function to see what the work looks like inside AAJ."
        />

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          {roles.map((r, i) => {
            const isActive = active === i;
            return (
              <div
                key={r.title}
                className={`group border-b border-border last:border-b-0 transition-colors ${
                  isActive ? "bg-ink text-white" : "bg-card hover:bg-secondary/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-10 md:py-6"
                >
                  <h3 className={`font-display text-lg font-semibold md:text-2xl ${isActive ? "text-white" : "text-ink"}`}>
                    {r.title}
                  </h3>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isActive
                        ? "rotate-45 border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-ink group-hover:border-primary/40"
                    }`}
                  >
                    <span className="text-2xl leading-none">+</span>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid items-center gap-6 px-6 pb-8 md:grid-cols-2 md:gap-10 md:px-10 md:pb-10">
                      <p className="text-base leading-relaxed text-white/80">
                        {r.body}
                      </p>
                      <div className="overflow-hidden rounded-2xl">
                        <img
                          src={r.image}
                          alt={r.title}
                          loading="lazy"
                          width={1024}
                          height={768}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="group rounded-full">
            <a href={JOBS_URL} target="_blank" rel="noreferrer">
              Browse all open roles <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ============ VALUES (flip cards) ============ */
const values = [
  { title: "Strive For Excellence", body: "We embrace the philosophy of continuous improvement, where every day is an opportunity to refine and enhance overall impact." },
  { title: "Working on Feedback", body: "We don't just ask for feedback; we actively seek it. We analyze and implement suggestions so everyone feels heard." },
  { title: "Fairness & Transparency", body: "Our culture encourages transparency, empowering every employee to admit mistakes, learn from them and contribute to continuous improvement." },
  { title: "Honor Your Word", body: "We stand by our commitments. Saying what we do and doing what we say is not just a mantra, it's our practice." },
  { title: "Lead By Example", body: "By fostering open communication, we align individual goals with our company's overarching vision." },
  { title: "Deep Dive", body: "Curiosity sparks creativity, drives exploration and leads to breakthrough solutions." },
  { title: "Action Bias", body: "From processes to products, our team is always looking for ways to enhance efficiency and effectiveness." },
  { title: "Team Development", body: "Structured training programs designed to enhance skills, foster innovation and align the team with the evolving needs of our industry." },
  { title: "Being Open & Candid", body: "Sharing your thoughts and feedback openly is welcomed. Honest communication leads to continuous improvement." },
];

const Values = () => (
  <section id="culture" className="border-b border-border bg-secondary/40 py-11 md:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>We hire for attitude and train for skill. <span className="text-primary">But the culture is non-negotiable</span></>}
        description="Nine values that show up in how we operate, hire and grow."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="group h-56 [perspective:1200px]">
            <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-7 text-center shadow-card [backface-visibility:hidden]">
                <span className="mb-4 inline-block h-[3px] w-10 rounded-full bg-primary" />
                <h3 className="font-display text-2xl font-semibold leading-tight text-ink md:text-[26px]">{v.title}</h3>
              </div>
              {/* Back */}
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-primary/30 bg-primary p-7 text-center text-primary-foreground shadow-elevated [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className="text-sm leading-relaxed">{v.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
        We've hired some of our best people from unexpected backgrounds. If you think you're right for AAJ, make the case.
      </p>
    </div>
  </section>
);

/* ============ GROWTH ============ */
const growthBlocks = [
  { icon: Crown, label: "Internal promotions" },
  { icon: Layers, label: "Cross-functional exposure" },
  { icon: GraduationCap, label: "On-the-job training" },
  { icon: MapPin, label: "Multi-city exposure" },
  { icon: LineChart, label: "Bi-annual appraisals" },
];

const Growth = () => (
  <section className="relative overflow-hidden border-b border-border bg-background py-11 md:py-14">
    <div className="absolute inset-0 -z-10 bg-dots opacity-50" />
    <div className="container">
      <SectionHeader
        align="center"
        title={<>We grow fast. <span className="text-primary">We want the people who built that growth to grow with it</span></>}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {growthBlocks.map((b) => (
          <div
            key={b.label}
            className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
          >
            <span className="icon-tile h-14 w-14">
              <b.icon className="h-6 w-6" />
            </span>
            <p className="mt-4 text-sm font-semibold text-ink">{b.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ INCLUSION ============ */
const inclusion = [
  { icon: Users, title: "Women in operations and leadership" },
  { icon: Home, title: "Local hiring" },
  { icon: GraduationCap, title: "Entry-level accessibility" },
  { icon: BadgeCheck, title: "Equal opportunity" },
  { icon: ShieldCheck, title: "Safe workplace for all" },
];

const Inclusion = () => (
  <section className="border-b border-border bg-secondary/40 py-11 md:py-14">
    <div className="container grid items-center gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <SectionHeader
          title={<>Shaped by Balance: <span className="text-primary">A More Inclusive Supply Chain</span></>}
          description="AAJ SCM is committed to building a workplace that reflects the diversity of India, in gender, background, experience level and geography."
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
        {inclusion.map((i) => (
          <div
            key={i.title}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated"
          >
            <span className="icon-tile h-11 w-11 shrink-0">
              <i.icon className="h-5 w-5" />
            </span>
            <p className="text-sm font-semibold text-ink">{i.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ CULTURE GRID ============ */
const cultureTiles = [
  { title: "Warehouse floor culture", body: "Teams that take operations seriously and look out for each other.", icon: Warehouse },
  { title: "Recognition of performance", body: "Top performers across all functions are recognised, named and celebrated.", icon: Award },
  { title: "Safety-first environment", body: "All facilities are CCTV-monitored, fire-compliant and maintained to the highest safety standards.", icon: ShieldCheck },
  { title: "Diverse and inclusive", body: "Teams across gender, background and experience level with active support for women in operations and management.", icon: Users, badge: true },
  { title: "Festive celebrations", body: "Diwali, Eid, team milestones and performance recognitions.", icon: Sparkles },
  { title: "Multi-city teams", body: "11 locations across India working as one operating system.", icon: Building2 },
];

const AmbitionBoxBadge = () => (
  <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-border bg-background py-1.5 pl-2 pr-4 shadow-card">
    <img src={ambitionBoxLogo} alt="AmbitionBox" className="h-6 w-auto" />
    <div className="flex items-center gap-1.5">
      <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
        <Star className="h-3 w-3 fill-current" /> 4.3
      </span>
      <span className="text-xs font-medium text-foreground/80">by female employees</span>
    </div>
  </div>
);

const CultureGrid = () => (
  <section className="border-b border-border bg-background py-11 md:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>The Culture Is Shaped by the People in It - <span className="text-primary">and We're Proud of It</span></>}
        description="A snapshot of what day-to-day life at AAJ looks and feels like across locations, functions and shifts."
      />

      <div className="mt-12 grid gap-7 md:grid-cols-2">
        {cultureTiles.map((t) => (
          <div
            key={t.title}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
          >
            <div className="flex h-72 items-center justify-center rounded-2xl bg-secondary/60 md:h-80">
              <t.icon className="h-20 w-20 text-primary/30" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{t.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t.body}</p>
            {t.badge && <AmbitionBoxBadge />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ BENEFITS ============ */
const benefits = [
  { icon: Award, title: "Performance-Based Rewards", body: "Through Vantage Circle, high performers are recognised and rewarded with both monetary and non-monetary benefits tied directly to the impact they create." },
  { icon: Rocket, title: "Fast Growth & Mid-Year Appraisals", body: "High-potential employees are identified through our HIPO Policy and rewarded with mid-year appraisals, so standout performance is never made to wait." },
  { icon: GraduationCap, title: "Financially Supported Learning", body: "Under our Knowledge Enhancement Policy (KEP), AAJ Supply Chain financially supports employees who pursue relevant certification courses." },
  { icon: Mic, title: "Anonymous Employee Listening", body: "Infeedo AI gives every team member a confidential channel to share feedback, concerns or ideas so every voice reaches the right people, without hesitation." },
  { icon: Home, title: "Mobility & Accommodation Support", body: "Warehouse employees receive mobility and accommodation benefits because the people who keep our operations running deserve to be taken care of beyond the shift." },
  { icon: ShieldCheck, title: "Statutory Benefits & Compliance", body: "Full PF, ESI and statutory entitlements, in order, on time and without exception across all locations and employment levels." },
];

const Benefits = () => (
  <section className="border-b border-border bg-secondary/40 py-11 md:py-14">
    <div className="container">
      <SectionHeader
        align="center"
        title={<>Benefits & <span className="text-primary">What We Offer</span></>}
        description="We invest in the people who keep this operation running."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="group card-accent-top card-interactive relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <span className="icon-tile h-12 w-12">
              <b.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{b.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            <b.icon className="icon-watermark" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ TESTIMONIALS (pill switcher) ============ */
const testimonials = [
  {
    pill: "Warehouse Manager",
    quote: "I never imagined I'd be managing a team this size. AAJ gave me the training, the technology and the trust to grow into this role. The work is challenging but it's real, and when an order goes out perfectly, you feel the success.",
    name: "Operations Leader",
    role: "Warehouse Manager",
    note: "Joined as a warehouse associate in 2016. Now manages a 50-person shift.",
  },
  {
    pill: "HR Executive Lead",
    quote: "Hiring for a 24x7 operation across 11 cities is genuinely complex. But it's also where you learn the most. Every role here has real stakes, and finding the right people for that environment keeps me sharp.",
    name: "People Partner",
    role: "HR Executive Lead",
    note: "3 years at AAJ. Manages hiring and onboarding across all locations.",
  },
  {
    pill: "Business Development",
    quote: "What makes selling AAJ easy is that the product actually delivers. Every client I've onboarded has stayed, and that says more about the operations team than anything I could pitch in a meeting.",
    name: "Growth Lead",
    role: "Business Development Manager",
    note: "8 years at AAJ SCM. Joined as an executive lead, now heads entire business development team.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="border-b border-border bg-background py-11 md:py-14">
      <div className="container">
        <SectionHeader
          align="center"
          title={<>Don't Take Our Word for It. <span className="text-primary">Hear from the People Who Work Here</span></>}
          description="Real stories from real team members across functions, cities and levels of experience."
        />

        {/* Pill switcher - centered */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-border bg-secondary/70 p-1.5 shadow-card">
            {testimonials.map((tt, i) => (
              <button
                key={tt.pill}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === i ? "bg-primary text-primary-foreground shadow-elevated" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {tt.pill}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
            {/* Decorative side stripe */}
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary to-accent" />
            <div className="grid gap-0 md:grid-cols-[1fr_280px]">
              <div className="p-8 md:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Star className="h-3 w-3 fill-current" /> Employee story
                </span>
                <p className="mt-6 font-display text-xl leading-snug text-ink md:text-[26px] md:leading-[1.35]">
                  {t.quote}
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-primary">{t.role}</p>
                  </div>
                </div>
              </div>
              <div className="relative hidden border-l border-border bg-secondary/50 p-8 md:flex md:flex-col md:justify-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Background</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{t.note}</p>
                <div className="mt-6 flex items-center gap-1.5">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === active ? "w-8 bg-primary" : "w-3 bg-border"
                      }`}
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

/* ============ OPEN ROLES CTA ============ */
const OpenRoles = () => (
  <section className="border-b border-border bg-secondary/40 py-11 md:py-14">
    <div className="container">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-10 text-center shadow-elevated md:p-14">
        <SectionHeader
          align="center"
          title={<>We're hiring across <span className="text-primary">functions and cities</span></>}
          description="Browse current openings by function, city or experience level. If you don't see a role that fits, we still want to hear from you."
          className="mx-auto"
        />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="group rounded-full">
            <a href={JOBS_URL} target="_blank" rel="noreferrer">
              See all vacancies <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href={MAIL_URL}>
              <Send className="mr-2 h-4 w-4" /> Send us your CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ============ FAQ ============ */
const faqs = [
  { q: "Do you hire freshers?", a: "Yes. We welcome fresh graduates and train them through a structured onboarding program." },
  { q: "What happens in the first 30 days?", a: "Structured onboarding, SOP training, system walkthrough and a dedicated buddy to guide you through." },
  { q: "Can I apply if I don't see a suitable opening?", a: "Yes. Send us your CV and we'll reach out when a relevant role opens up." },
  { q: "Do you offer internships?", a: "Yes. We take on interns across operations, technology and management functions." },
  { q: "What does AAJ look for beyond qualifications?", a: "Ownership, reliability and a genuine interest in how operations work." },
  { q: "Is there a minimum experience requirement?", a: "Not for floor roles. For corporate functions, requirements vary by position." },
];

const FAQ = () => (
  <section className="border-b border-border bg-background py-11 md:py-14">
    <div className="container">
      <SectionHeader align="center" title="Frequently Asked Questions" />
      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-2 shadow-card">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border last:border-b-0">
              <AccordionTrigger className="px-4 py-5 text-left text-base font-semibold text-ink hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

/* ============ FINAL CTA ============ */
const FinalCTA = () => (
  <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
    <div className="absolute inset-0 -z-10 opacity-20" style={{ background: "var(--gradient-hero)" }} />
    <div className="absolute -top-32 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl" />
    <div className="container text-center">
      <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[44px]">
        Ready to join the team that keeps India's supply chains moving?
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg" className="group rounded-full">
          <a href={JOBS_URL} target="_blank" rel="noreferrer">
            View all open roles <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-ink">
          <a href={MAIL_URL}>
            <Send className="mr-2 h-4 w-4" /> Send us your CV
          </a>
        </Button>
      </div>
    </div>
  </section>
);
