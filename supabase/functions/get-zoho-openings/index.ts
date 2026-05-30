import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const CAREERS_URL = "https://aajenterprises.zohorecruit.in/jobs/Careers";
const CACHE_KEY = "careers";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

type Opening = {
  title: string;
  department?: string | null;
  location?: string | null;
  employment_type?: string | null;
  apply_url?: string | null;
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

async function scrapeFromFirecrawl(apiKey: string): Promise<Opening[]> {
  const res = await fetch("https://api.firecrawl.dev/v2/scrape", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: CAREERS_URL,
      onlyMainContent: true,
      waitFor: 3500,
      formats: [
        {
          type: "json",
          prompt:
            "Extract every job opening listed on this Zoho Recruit careers page. For each, return title, department, location, employment_type (full-time/part-time/contract if shown), and apply_url (absolute URL to the job's apply/details page on zohorecruit.in). Return an empty array if no openings are visible.",
          schema: {
            type: "object",
            properties: {
              openings: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    department: { type: "string" },
                    location: { type: "string" },
                    employment_type: { type: "string" },
                    apply_url: { type: "string" },
                  },
                  required: ["title"],
                },
              },
            },
            required: ["openings"],
          },
        },
      ],
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(
      `Firecrawl ${res.status}: ${JSON.stringify(data).slice(0, 400)}`,
    );
  }
  const extracted =
    (data?.data?.json?.openings as Opening[] | undefined) ??
    (data?.json?.openings as Opening[] | undefined) ??
    [];
  return extracted.filter((o) => o && typeof o.title === "string" && o.title.trim());
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const url = new URL(req.url);
    const force = url.searchParams.get("force") === "1";

    // 1. Try cache
    if (!force) {
      const { data: cached } = await supabase
        .from("zoho_jobs_cache")
        .select("payload, fetched_at")
        .eq("key", CACHE_KEY)
        .maybeSingle();

      if (cached?.fetched_at) {
        const age = Date.now() - new Date(cached.fetched_at).getTime();
        if (age < CACHE_TTL_MS) {
          return json({
            openings: (cached.payload as { openings: Opening[] }).openings ?? [],
            cached: true,
            fetched_at: cached.fetched_at,
          });
        }
      }
    }

    // 2. Fresh scrape
    const apiKey = Deno.env.get("FIRECRAWL_API_KEY");
    if (!apiKey) {
      return json({ openings: [], error: "FIRECRAWL_API_KEY missing" });
    }

    let openings: Opening[] = [];
    try {
      openings = await scrapeFromFirecrawl(apiKey);
    } catch (err) {
      console.error("Firecrawl scrape failed:", err);
      // Fall back to last cached payload if we have one, even if expired
      const { data: stale } = await supabase
        .from("zoho_jobs_cache")
        .select("payload, fetched_at")
        .eq("key", CACHE_KEY)
        .maybeSingle();
      if (stale) {
        return json({
          openings: (stale.payload as { openings: Opening[] }).openings ?? [],
          cached: true,
          stale: true,
          fetched_at: stale.fetched_at,
          error: String(err),
        });
      }
      return json({ openings: [], error: String(err) });
    }

    const payload = { openings };
    await supabase
      .from("zoho_jobs_cache")
      .upsert({ key: CACHE_KEY, payload, fetched_at: new Date().toISOString() });

    return json({ openings, cached: false, fetched_at: new Date().toISOString() });
  } catch (err) {
    console.error("get-zoho-openings error:", err);
    return json({ openings: [], error: String(err) });
  }
});