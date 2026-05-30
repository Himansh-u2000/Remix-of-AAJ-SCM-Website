create table public.zoho_jobs_cache (
  key text primary key,
  payload jsonb not null,
  fetched_at timestamptz not null default now()
);

alter table public.zoho_jobs_cache enable row level security;
-- intentionally no policies: only service role (edge function) accesses this table