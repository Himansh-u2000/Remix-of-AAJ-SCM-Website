import { describe, it, expect } from "vitest";
import { pageSeo, assertUniqueSeo } from "@/seo/pageSeo";
import { buildCanonical } from "@/seo/buildCanonical";
import { buildHeadHtml } from "@/seo/buildHeadHtml";
import { siteConfig } from "@/seo/siteConfig";
import { redirects } from "@/seo/redirects";

describe("SEO registry", () => {
  it("has no duplicate or out-of-bounds metadata", () => {
    expect(assertUniqueSeo()).toEqual([]);
  });

  it("every canonical points at the locked production domain", () => {
    for (const path of Object.keys(pageSeo)) {
      expect(buildCanonical(path)).toMatch(/^https:\/\/www\.aajscm\.com/);
    }
  });
});

describe("buildHeadHtml", () => {
  it("keeps the warehousing network page noindex", () => {
    const html = buildHeadHtml(pageSeo["/warehouses"], "/warehouses");

    expect(html).toContain('name="robots" content="noindex, nofollow"');
  });

  it("uses social metadata overrides in prerendered production HTML", () => {
    const html = buildHeadHtml(pageSeo["/"], "/");

    expect(html).toContain(
      'property="og:title" content="AAJ SCM | Full-Stack Supply Chain Partner for Modern Indian Brands"',
    );
    expect(html).toContain(
      'name="twitter:title" content="AAJ SCM | Full-Stack Supply Chain Partner for Modern Indian Brands"',
    );
    expect(html).toContain('property="og:image:alt"');
    expect(html).toContain('name="twitter:image:alt"');
  });
});

describe("buildCanonical", () => {
  it("rewrites apex and preview hosts to www.aajscm.com", () => {
    expect(buildCanonical("https://aajscm.com/services")).toBe(
      "https://www.aajscm.com/services",
    );
    expect(
      buildCanonical("https://id-preview--abc.lovable.app/services"),
    ).toBe("https://www.aajscm.com/services");
  });

  it("strips trailing slash except root", () => {
    expect(buildCanonical("/services/")).toBe("https://www.aajscm.com/services");
    expect(buildCanonical("/")).toBe("https://www.aajscm.com/");
  });

  it("strips query and fragment by default", () => {
    expect(buildCanonical("/blog?utm=x#top")).toBe(
      "https://www.aajscm.com/blog",
    );
  });
});

describe("siteConfig", () => {
  it("locks canonical domain to https://www.aajscm.com", () => {
    expect(siteConfig.canonicalBase).toBe("https://www.aajscm.com");
  });
});

describe("redirects", () => {
  it("never points a redirect at itself or another redirect's from", () => {
    const froms = new Set(redirects.map((r) => r.from));
    for (const r of redirects) {
      expect(r.from).not.toBe(r.to);
      expect(froms.has(r.to)).toBe(false);
    }
  });

  it("every redirect target exists in the page registry", () => {
    for (const r of redirects) {
      expect(pageSeo[r.to]).toBeDefined();
    }
  });
});
