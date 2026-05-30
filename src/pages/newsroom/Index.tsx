import { useEffect, useMemo, useState } from "react";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Mail,
  Newspaper,
  Pin,
  Send,
  Sparkles,
  Radio,
  TrendingUp,
  Award,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "sonner";

type Category =
  | "Achievements"
  | "Expansions"
  | "Milestones"
  | "Press & Media"
  | "People & Culture"
  | "Technology"
  | "Sustainability";

const categories: ("All" | Category)[] = [
  "All",
  "Achievements",
  "Expansions",
  "Milestones",
  "Press & Media",
  "People & Culture",
  "Technology",
  "Sustainability",
];

type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string; // display
  year: number;
  readTime: string;
};

const featured = {
  slug: "aaj-opens-11th-warehouse-chennai",
  category: "Expansions" as Category,
  title: "AAJ Opens Its 11th Warehouse - Expanding the Network to Chennai",
  excerpt:
    "AAJ's newest facility in Chennai adds 80,000 sq ft of warehousing capacity to the southern corridor - bringing same-day and next-day delivery reach to Tamil Nadu and Andhra Pradesh.",
  date: "May 2025",
  readTime: "3 min read",
  stats: [
    { label: "Sq ft added", value: "80K" },
    { label: "States covered", value: "2" },
    { label: "Delivery SLA", value: "<24h" },
  ],
};

const stories: Story[] = [
  {
    slug: "aaj-scm-irec-d2c-india-2026",
    title: "AAJ SCM Team Exhibits in IReC X D2C India 2026",
    excerpt:
      "Our team showcased AAJ's pan-India fulfillment stack and met 200+ D2C founders at India's largest retail commerce expo.",
    category: "Press & Media",
    date: "23–24 April 2026",
    year: 2026,
    readTime: "2 min read",
  },
  {
    slug: "tallest-warehouse-gurgaon",
    title: "AAJ SCM Launches India's Tallest Warehouse in Gurgaon",
    excerpt:
      "A 22-metre clear-height facility in Gurgaon unlocks vertical storage density and powers next-day delivery across NCR.",
    category: "Milestones",
    date: "11 April 2026",
    year: 2026,
    readTime: "2 min read",
  },
  {
    slug: "wms-3-launch",
    title: "AAJ WMS 3.0 Goes Live Across the Network",
    excerpt:
      "A rebuilt warehouse management platform - real-time inventory, mobile pick-pack, and a unified ops console for clients.",
    category: "Technology",
    date: "12 March 2026",
    year: 2026,
    readTime: "3 min read",
  },
  {
    slug: "great-place-to-work-2026",
    title: "AAJ Recognised as a Great Place to Work® 2026",
    excerpt:
      "Independent certification recognises AAJ's culture of trust, ownership and operational excellence.",
    category: "Achievements",
    date: "02 February 2026",
    year: 2026,
    readTime: "2 min read",
  },
  {
    slug: "solar-rooftop-bhiwandi",
    title: "Bhiwandi Hub Switches On 1.2 MW of Rooftop Solar",
    excerpt:
      "The new solar installation will offset ~1,800 tonnes of CO₂ annually across our Mumbai operations.",
    category: "Sustainability",
    date: "18 November 2025",
    year: 2025,
    readTime: "2 min read",
  },
  {
    slug: "100-million-orders",
    title: "AAJ Crosses 100 Million Orders Fulfilled",
    excerpt:
      "A network-wide milestone - over 100M orders shipped across 11 cities, with 99.4% on-time accuracy.",
    category: "Milestones",
    date: "30 September 2025",
    year: 2025,
    readTime: "2 min read",
  },
  {
    slug: "leadership-coo-appointment",
    title: "AAJ Appoints New COO to Lead Operations",
    excerpt:
      "A 20-year supply chain veteran joins AAJ's leadership to scale our pan-India operations.",
    category: "People & Culture",
    date: "14 August 2025",
    year: 2025,
    readTime: "2 min read",
  },
  {
    slug: "ev-fleet-rollout",
    title: "AAJ Rolls Out 200 EVs for Last-Mile Delivery",
    excerpt:
      "An all-electric last-mile fleet across Delhi, Bangalore and Hyderabad - a step toward our 2030 net-zero goal.",
    category: "Sustainability",
    date: "10 June 2025",
    year: 2025,
    readTime: "3 min read",
  },
];

const groupByYear = (items: Story[]) => {
  const map = new Map<number, Story[]>();
  items.forEach((s) => {
    if (!map.has(s.year)) map.set(s.year, []);
    map.get(s.year)!.push(s);
  });
  return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
};

const NewsroomIndex = () => {
  const [active, setActive] = useState<"All" | Category>("All");
  const [email, setEmail] = useState("");
  const filtered = useMemo(
    () => (active === "All" ? stories : stories.filter((s) => s.category === active)),
    [active],
  );
  const grouped = useMemo(() => groupByYear(filtered), [filtered]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're on the list. Welcome aboard!");
    setEmail("");
  };

  return (
    <>
      <Seo {...pageSeo["/newsroom"]} />
      
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/60">
        {/* Subtle grid pattern for editorial texture */}
        <div className="absolute inset-0 bg-grid opacity-[0.5]" aria-hidden />
        {/* Soft primary wash in the corner - flat, no gradient */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/[0.07]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/[0.08]"
          aria-hidden
        />
        {/* Editorial rule lines */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-border md:block" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-border md:block" aria-hidden />

        <div className="container relative mx-auto px-6 py-16 md:py-24 lg:py-28">
          {/* Top meta bar: live ticker */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <Radio className="h-3.5 w-3.5 text-primary" />
              The AAJ Newsroom · Live
            </div>
            <div className="hidden items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:flex">
              <span>{stories.length}+ stories</span>
              <span className="h-3 w-px bg-border" />
              <span>Updated weekly</span>
            </div>
          </div>

          <div className="grid items-center gap-12 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-10">
            {/* Left: editorial headline */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-primary"
                  suppressHydrationWarning
                >
                  Issue · {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}
                </span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-[68px] lg:leading-[1.02]">
                The latest from{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">AAJ Supply Chain</span>
                  <span
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-primary/25 md:bottom-2 md:h-4"
                    aria-hidden
                  />
                </span>
                , in one feed.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Company announcements, warehouse openings, client milestones, awards, leadership
                updates - everything worth knowing, straight from the team.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#stories"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-elevated"
                >
                  Browse all stories
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#newsletter"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Sparkles className="h-4 w-4" />
                  Subscribe to updates
                </a>
              </div>
            </div>

            {/* Right: stacked headline collage */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto h-[420px] max-w-md md:h-[460px]">
                {/* Back card */}
                <div className="absolute right-0 top-0 w-[78%] -rotate-3 rounded-2xl border border-border bg-card p-5 shadow-card transition-transform duration-500 hover:-translate-y-1 hover:rotate-[-2deg]">
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    <Leaf className="h-3.5 w-3.5" />
                    Sustainability
                  </div>
                  <p className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                    1.2 MW of rooftop solar live at Bhiwandi hub.
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    <span>Nov 2025</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Middle card */}
                <div className="absolute left-0 top-20 w-[80%] rotate-2 rounded-2xl border border-border bg-card p-5 shadow-card transition-transform duration-500 hover:-translate-y-1 hover:rotate-1">
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    <Award className="h-3.5 w-3.5" />
                    Achievement
                  </div>
                  <p className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                    Recognised as a Great Place to Work® 2026.
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    <span>Feb 2026</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Front card - accent */}
                <div className="absolute bottom-0 right-2 w-[82%] -rotate-1 rounded-2xl border border-primary bg-ink p-6 text-primary-foreground shadow-elevated transition-transform duration-500 hover:-translate-y-1 hover:rotate-0">
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/80">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Milestone · Just in
                  </div>
                  <p className="mt-3 font-display text-xl font-semibold leading-snug">
                    India's tallest warehouse opens in Gurgaon - 22m clear height.
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-primary-foreground/15 pt-4 text-[11px] uppercase tracking-[0.14em] text-primary-foreground/70">
                    <span>11 Apr 2026</span>
                    <span className="inline-flex items-center gap-1 text-primary-foreground">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* Decorative dot grid behind */}
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 bg-dots opacity-80"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 bg-dots opacity-80"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <SectionHeader title="Latest from AAJ" />

          <article className="group relative mt-10 grid overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated md:grid-cols-2">
            {/* Text */}
            <div className="relative flex flex-col justify-between p-8 md:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                    <Pin className="h-3 w-3" />
                    Pinned
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {featured.category} · {featured.date}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-[1.2] text-ink md:text-3xl lg:text-[34px] lg:leading-[1.15]">
                  {featured.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {featured.excerpt}
                </p>

                <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {featured.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {s.label}
                      </dt>
                      <dd className="mt-1 font-display text-2xl font-semibold text-ink md:text-3xl">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {featured.readTime}
                </div>
                <Link
                  to={`/newsroom/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                >
                  Read the full story
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual */}
            <Link
              to={`/newsroom/${featured.slug}`}
              className="relative min-h-[280px] overflow-hidden bg-ink md:min-h-full"
              aria-label={featured.title}
            >
              <div
                className="absolute inset-0 bg-grid opacity-[0.18]"
                style={{ filter: "invert(1)" }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent" aria-hidden />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-primary/15 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                  <Newspaper className="h-14 w-14 text-primary-foreground" strokeWidth={1.4} />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-primary-foreground/90">
                <span className="text-xs uppercase tracking-[0.18em]">Featured story</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          </article>
        </div>
      </section>

      {/* All stories with sticky filter */}
      <section id="stories" className="bg-background">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <SectionHeader title="All Stories" />

          {/* Filter pills */}
          <div className="sticky top-16 z-20 -mx-6 mt-8 border-y border-border bg-background/85 px-6 py-4 backdrop-blur md:top-20">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={`group/pill inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-card"
                        : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:text-ink"
                    }`}
                  >
                    {cat}
                    {isActive && (
                      <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary-foreground/20 px-1.5 text-[11px] font-semibold">
                        {cat === "All" ? stories.length : stories.filter((s) => s.category === cat).length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grouped grid */}
          <div className="mt-12 space-y-16">
            {grouped.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
                No stories in this category yet. Check back soon.
              </div>
            )}
            {grouped.map(([year, items]) => (
              <div key={year}>
                <div className="flex items-center gap-4">
                  <h3 className="font-display text-3xl font-semibold text-ink md:text-4xl">{year}</h3>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {items.length} {items.length === 1 ? "story" : "stories"}
                  </span>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/newsroom/${s.slug}`}
                      className="card-interactive card-accent-top group relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card"
                    >
                      <span className="inline-flex w-fit items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                        {s.category}
                      </span>
                      <h4 className="mt-5 font-display text-xl font-semibold leading-[1.25] text-ink transition-colors duration-300 group-hover:text-primary">
                        {s.title}
                      </h4>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {s.excerpt}
                      </p>
                      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {s.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {s.readTime}
                        </span>
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:gap-3 group-hover:opacity-100">
                        Read more
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Press contact */}
          <div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-secondary/50 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Press contact
              </div>
              <p className="mt-2 text-base text-ink md:text-lg">
                For press enquiries, interviews or media requests
              </p>
            </div>
            <a
              href="mailto:info@aajscm.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-card"
            >
              <Mail className="h-4 w-4" />
              info@aajscm.com
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="relative overflow-hidden border-t border-border bg-ink text-primary-foreground">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl"
          aria-hidden
        />
        <div className="container relative mx-auto px-6 py-11 md:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
              <Sparkles className="h-3.5 w-3.5" />
              Stay in the loop
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] text-primary-foreground md:text-5xl md:leading-[1.1]">
              New openings, milestones and supply chain insights - straight to your inbox
            </h2>
            <p className="mt-5 text-base text-primary-foreground/70 md:text-lg">
              No spam. Unsubscribe anytime.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-12 flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/40"
              />
              <Button type="submit" size="lg" className="h-12 px-6">
                Subscribe
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsroomIndex;
