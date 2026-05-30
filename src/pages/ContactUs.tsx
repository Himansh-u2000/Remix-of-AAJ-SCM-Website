import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import {
  ArrowRight,
  Warehouse,
  Zap,
  Network,
  ShoppingCart,
  Briefcase,
  Mail,
  Phone,
  Headphones,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  Send,
  Sparkles,
  Search,
  Handshake,
  CalendarCheck,
  Rocket,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const tiles = [
  {
    icon: Warehouse,
    title: "Pan-India Warehousing & Fulfillment",
    desc: "12+ locations, 10,00,000+ sq ft - B2B, B2C and omnichannel operations under one roof",
    value: "Warehousing",
  },
  {
    icon: Zap,
    title: "Same Day, Next Day & Quick Commerce Delivery",
    desc: "Dark store network and extended dispatch windows built for speed-first fulfillment",
    value: "Quick Commerce",
  },
  {
    icon: Network,
    title: "End-to-End Supply Chain Management",
    desc: "From inbound processing to last-mile delivery - one partner, one system, complete visibility",
    value: "End-to-End Supply Chain",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce & Omnichannel Fulfillment",
    desc: "60+ marketplace integrations - Amazon, Flipkart, Shopify and more, all in one unified flow",
    value: "eCommerce Fulfillment",
  },
  {
    icon: Briefcase,
    title: "If You're Looking to Build a Career in Supply Chain",
    desc: "Explore open roles across operations, technology, account management and more",
    value: "Careers",
    href: "/careers",
  },
];

const directContacts = [
  {
    icon: Mail,
    title: "General enquiries",
    primary: "info@aajscm.com",
    secondary: "Sales, partnerships and new business",
    href: "mailto:info@aajscm.com",
  },
  {
    icon: Phone,
    title: "Phone",
    primary: "+91 8586967796",
    secondary: "Mon – Sat, 9 AM – 7 PM IST",
    href: "tel:+918586967796",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "+91 8586967796",
    secondary: "Quick chat - Mon to Sat, 9 AM – 7 PM IST",
    href: "https://wa.me/918586967796",
  },
  {
    icon: Headphones,
    title: "Existing clients",
    primary: "Support via account manager",
    secondary: "Contact your dedicated point of contact directly",
  },
];

const timeline = [
  {
    icon: Search,
    when: "Within 4 hours",
    text: "A member of our team reads your submission and assigns it to the right person based on what you need, not who's available first.",
  },
  {
    icon: Handshake,
    when: "Within 1 business day",
    text: "We reach out by email or phone to understand your requirements better - no pitch, just questions.",
  },
  {
    icon: CalendarCheck,
    when: "Within 3–5 days",
    text: "We share a customised supply chain solution mapped to your volumes, locations and delivery requirements.",
  },
  {
    icon: Rocket,
    when: "When you're ready",
    text: "We move to onboarding at your pace, on your timeline. No pressure to decide before you're comfortable.",
  },
];

const cities = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Kolkata",
  "Chennai",
  "Noida",
  "Ghaziabad",
  "Sonipat",
  "Rohtak",
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/aaj-supplychain/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/aaj_scm/" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@aajscm" },
];

const ContactUs = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ lookingFor: "" });
  const hubspotContainerRef = useRef<HTMLDivElement>(null);

  // Load HubSpot embed script + create the form
  useEffect(() => {
    const SCRIPT_SRC = "https://js-na2.hsforms.net/forms/embed/v2.js";
    const TARGET_ID = "hubspot-contact-form";

    const createForm = () => {
      const w = window as unknown as { hbspt?: { forms: { create: (o: Record<string, unknown>) => void } } };
      if (!w.hbspt || !hubspotContainerRef.current) return;
      hubspotContainerRef.current.innerHTML = "";
      w.hbspt.forms.create({
        portalId: "5950148",
        formId: "9de4ce4a-e9f3-4b02-b6cf-940234a1a83f",
        region: "na2",
        target: `#${TARGET_ID}`,
      });
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      createForm();
    } else {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.charset = "utf-8";
      s.type = "text/javascript";
      s.onload = createForm;
      document.body.appendChild(s);
    }
  }, []);

  const handleTileClick = (value: string) => {
    setForm((f) => ({ ...f, lookingFor: value }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-background">
      <Seo {...pageSeo["/contact-us"]} />
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="bg-grid absolute inset-0 -z-10 opacity-[0.35]" aria-hidden />
        <div className="absolute -top-24 right-0 -z-10 h-[440px] w-[440px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 left-0 -z-10 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="container relative mx-auto px-6 pb-14 pt-12 md:pb-20 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Let's talk supply chain
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-[56px]">
              Most Supply Chain Problems Are{" "}
              <span className="relative inline-block whitespace-nowrap text-primary">
                More Solvable
                <svg aria-hidden viewBox="0 0 220 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
                  <path d="M2 8 Q 110 -2 218 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Than They Seem.
            </h1>
            <p className="mt-6 font-display text-2xl text-foreground md:text-3xl">
              Let's start the conversation.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether you're exploring warehousing options, planning a quick commerce setup, or just want to understand what AAJ can do for your business - we're here to help.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="group h-12 rounded-full px-6 shadow-elevated" onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}>
                Share your requirements <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-ink/15 px-6">
                <a href="#direct">Reach us directly</a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> Response within 1 business day</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 12+ warehouses, pan-India</span>
              <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4 text-primary" /> Dedicated account managers</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - Tiles + Form */}
      <section ref={formRef} className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-secondary/40 to-transparent" aria-hidden />
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>So What Brings You Here <span className="text-primary">Today?</span></>}
            description="We offer end-to-end supply chain solutions and every great partnership starts with one conversation."
            align="center"
            className="mx-auto"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* LEFT - Tiles */}
            <div className="flex flex-col gap-3 lg:col-span-5 lg:h-full">
              {tiles.map((t) => {
                const Icon = t.icon;
                const active = form.lookingFor === t.value;
                const isLink = Boolean(t.href);
                const tileClass = `group relative w-full flex-1 min-h-[88px] overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-elevated ${
                  active ? "border-primary bg-card shadow-elevated" : "border-border bg-card"
                }`;
                const inner = (
                  <>
                    <span
                      className={`absolute inset-y-0 left-0 w-1 transition-all duration-300 ${
                        active ? "bg-primary" : "bg-transparent group-hover:bg-primary"
                      }`}
                      aria-hidden
                    />
                    <Icon
                      className="pointer-events-none absolute -right-3 -bottom-3 h-24 w-24 text-primary/[0.05] transition-all duration-500 group-hover:scale-110 group-hover:text-primary/[0.09]"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    <div className="relative flex h-full items-center gap-4">
                      <div
                        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          active
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                            : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-display text-[15px] font-semibold leading-snug text-ink md:text-base">{t.title}</div>
                        <div className="mt-1 text-[13px] leading-snug text-muted-foreground">{t.desc}</div>
                      </div>
                      {isLink && (
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                      )}
                    </div>
                  </>
                );
                return t.href ? (
                  <Link key={t.title} to={t.href} className={tileClass}>
                    {inner}
                  </Link>
                ) : (
                  <button
                    key={t.title}
                    type="button"
                    onClick={() => handleTileClick(t.value)}
                    className={tileClass}
                  >
                    {inner}
                  </button>
                );
              })}
            </div>

            {/* RIGHT - Form */}
            <div className="lg:col-span-7">
              <div className="relative h-full">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" aria-hidden />
                <Card className="relative h-full overflow-hidden border-border shadow-elevated">
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary to-accent" aria-hidden />
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      <Send className="h-3.5 w-3.5" /> Share Your Requirements
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                      Fill in a few details
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Our team will reach out within 1 business day.
                    </p>
                    <div id="hubspot-contact-form" ref={hubspotContainerRef} className="mt-6" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - Timeline */}
      <section className="relative overflow-hidden border-y border-border bg-secondary/40 py-16 md:py-24">
        <div className="bg-grid absolute inset-0 -z-10 opacity-[0.25]" aria-hidden />
        <div className="absolute -top-20 right-10 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" aria-hidden />
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>Here's What Happens the Moment You <span className="text-primary">Hit Send</span></>}
            description="A quick look at what the next 48 hours look like after you reach out."
            align="center"
            className="mx-auto"
          />

          <div className="relative mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line on desktop */}
            <div className="absolute left-10 right-10 top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" aria-hidden />
            {timeline.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={t.when} className="group relative flex flex-col">
                  {/* Step indicator */}
                  <div className="relative z-10 mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="absolute -right-1 -top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-ink text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  {/* Card */}
                  <div className="relative mt-6 flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:bg-primary group-hover:shadow-elevated">
                    <div className="font-display text-base font-semibold text-ink transition-colors group-hover:text-primary-foreground">{t.when}</div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/90">{t.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION - Direct contact */}
      <section id="direct" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>Prefer to Reach Us <span className="text-primary">Directly?</span></>}
            description="Our team is available Monday to Saturday, 9 AM – 7 PM IST."
            align="center"
            className="mx-auto"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {directContacts.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
                  <Icon
                    className="pointer-events-none absolute -right-4 -bottom-4 h-32 w-32 text-primary/[0.05] transition-all duration-500 group-hover:scale-110 group-hover:text-primary/[0.08]"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {c.title}
                    </div>
                    <div className="mt-2 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                      {c.primary}
                    </div>
                    <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.secondary}</div>
                    {c.href && (
                      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                        Get in touch <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.title} href={c.href}>{inner}</a>
              ) : (
                <div key={c.title}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION - Cities */}
      <section className="relative overflow-hidden border-t border-border bg-surface py-16 md:py-24">
        <div className="bg-dots absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="container mx-auto px-6">
          <SectionHeader
            title={<>We're Present Across India. Chances Are <span className="text-primary">We're Already Near You</span></>}
            align="center"
            className="mx-auto"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <div key={city} className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-card transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-elevated">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {city}
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="outline" className="group h-12 rounded-full px-6">
              <Link to="/warehouses">
                Explore our warehouse network <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION - Social */}
      <section className="relative overflow-hidden border-t border-border bg-secondary/40 py-16 md:py-24">
        <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" aria-hidden />
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              title={<>Not Ready to Reach Out Yet? <span className="text-primary">Follow Along</span></>}
              description="We share supply chain insights, warehouse updates and industry perspective regularly. A good way to get a feel for how we think before getting in touch."
              align="center"
              className="mx-auto"
            />

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-card transition hover:-translate-y-1 hover:border-primary/30 hover:text-primary hover:shadow-elevated"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-primary transition group-hover:border-primary/30 group-hover:bg-primary/5">
                      <Icon className="h-5 w-5" />
                    </span>
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
