import { Link } from "react-router-dom";
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

type Loc = { name: string; slug: string; img: string };

const ALL_LOCATIONS: Loc[] = [
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

type Props = {
  /** When provided, that city is moved to the 12th (last) position and clicking it scrolls to top. */
  currentSlug?: string;
};

const NetworkPresenceSection = ({ currentSlug }: Props) => {
  const locations: Loc[] = currentSlug
    ? [
        ...ALL_LOCATIONS.filter((l) => l.slug !== currentSlug),
        ...ALL_LOCATIONS.filter((l) => l.slug === currentSlug),
      ]
    : ALL_LOCATIONS;

  const handleCurrentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-background">
      <div className="container py-10 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            align="center"
            className="mx-auto"
            title={
              <>
                Explore Our Presence Across India for{" "}
                <span className="text-primary">Faster Deliveries</span>
              </>
            }
          />
        </div>

        <div className="relative mx-auto mt-8 max-w-5xl">
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
            {locations.map((loc) => (
              <div key={loc.slug} className="border-b border-r border-border/80" />
            ))}
          </div>
          <ul className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            {locations.map((loc) => {
              const isCurrent = loc.slug === currentSlug;
              return (
                <li key={loc.slug} className="flex justify-center py-6 md:py-7">
                  <Link
                    to={`/warehouses/${loc.slug}`}
                    onClick={isCurrent ? handleCurrentClick : undefined}
                    aria-label={
                      isCurrent
                        ? `Back to top of ${loc.name} page`
                        : `${loc.name} warehouse`
                    }
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
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NetworkPresenceSection;