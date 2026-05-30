import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { allRoutes } from "@/config/sitemap";
import Seo from "@/seo/Seo";
import { pageSeo } from "@/seo/pageSeo";
import { brand } from "@/seo/brand";

type Props = { title: string; description?: string };

const PagePlaceholder = ({ title, description }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${title} | AAJ SCM`;
  }, [title]);

  const crumbs = buildCrumbs(pathname, title);
  // Resolve SEO from the central registry. Fallback for dynamic routes
  // (/blog/:slug, /glossary/:term, /newsroom/:slug) uses the page's own
  // title/description so each detail page still ships unique metadata.
  const seo =
    pageSeo[pathname] ??
    {
      title: `${title} | ${brand.name}`,
      description:
        description ??
        `${title} at ${brand.name}. End-to-end supply chain, warehousing and fulfillment across India.`,
    };

  return (
    <div className="container py-16">
      <Seo {...seo} />
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {crumbs.map((c, i) => (
          <span key={c.path + i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
            {i === crumbs.length - 1 ? (
              <span className="text-foreground">{c.label}</span>
            ) : (
              <Link to={c.path} className="hover:text-foreground">
                {c.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      {description && <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>}
      <div className="mt-10 rounded-lg border border-dashed border-border bg-secondary/30 p-8 text-sm text-muted-foreground">
        Page structure ready. Design coming soon.
        <div className="mt-2 font-mono text-xs">{pathname}</div>
      </div>
    </div>
  );
};

function buildCrumbs(pathname: string, fallbackTitle: string) {
  const crumbs: { path: string; label: string }[] = [{ path: "/", label: "Home" }];
  if (pathname === "/") return crumbs;

  const segments = pathname.split("/").filter(Boolean);
  let acc = "";
  segments.forEach((seg, idx) => {
    acc += "/" + seg;
    const match = allRoutes.find((r) => r.path === acc);
    crumbs.push({
      path: acc,
      label: match?.label ?? (idx === segments.length - 1 ? fallbackTitle : prettify(seg)),
    });
  });
  return crumbs;
}

function prettify(seg: string) {
  return seg.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

export default PagePlaceholder;
