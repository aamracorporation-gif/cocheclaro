-- CocheClaro — esquema inicial (§9 del Plan Maestro).
-- Ejecutar en el editor SQL de Supabase, o con `supabase db push` /
-- `psql "$DATABASE_URL" -f supabase/migrations/0001_init.sql`.
--
-- Usa IDs de texto (slugs/códigos), no UUID: así el generador de seed
-- (`npm run db:seed:generate`) puede volcar el dataset de demostración
-- (`src/data/*.ts`) tal cual, sin reasignar identificadores.

begin;

create table if not exists sources (
  id            text primary key,
  url           text not null check (url ~ '^https?://'),
  title         text not null,
  publisher     text not null,
  published_at  date,
  accessed_at   date not null,
  source_type   text not null check (source_type in (
                  'fabricante', 'homologacion', 'boletin-tecnico',
                  'medio-tecnico', 'organismo-publico', 'comunidad'
                ))
);

create table if not exists brands (
  id       text primary key,
  slug     text not null unique,
  name     text not null,
  country  text not null
);

create table if not exists models (
  id         text primary key,
  brand_id   text not null references brands(id) on delete cascade,
  slug       text not null,
  name       text not null,
  body_type  text not null,
  unique (brand_id, slug)
);
create index if not exists models_brand_id_idx on models(brand_id);

create table if not exists generations (
  id          text primary key,
  model_id    text not null references models(id) on delete cascade,
  code        text not null,
  slug        text not null,
  start_year  int not null,
  end_year    int,
  one_liner   text not null default '',
  intro       text not null default '',
  verdict     text not null default '',
  strengths   text[] not null default '{}',
  watchouts   text[] not null default '{}',
  faq         jsonb not null default '[]',
  status      text not null default 'draft' check (status in ('draft', 'needs_review', 'published')),
  data_status text not null default 'demo' check (data_status in ('demo', 'verified')),
  reviewed_at date not null default current_date,
  body_type   text not null default '',
  length_mm   int,
  boot_litres int,
  unique (model_id, slug),
  check (end_year is null or end_year >= start_year)
);
create index if not exists generations_model_id_idx on generations(model_id);
create index if not exists generations_status_idx on generations(status);

create table if not exists engines (
  id              text primary key,
  slug            text not null unique,
  code            text not null,
  fuel            text not null check (fuel in (
                    'gasolina', 'diesel', 'hibrido', 'hibrido-enchufable', 'electrico', 'glp'
                  )),
  displacement_cc int not null default 0 check (displacement_cc >= 0),
  cylinders       int not null default 0,
  power_kw        int,
  power_hp        int not null check (power_hp > 0),
  torque_nm       int,
  architecture    text not null default '',
  summary         text not null default '',
  data_status     text not null default 'demo' check (data_status in ('demo', 'verified'))
);

create table if not exists generation_engines (
  generation_id text not null references generations(id) on delete cascade,
  engine_id     text not null references engines(id) on delete cascade,
  trim_label    text not null,
  transmission  text not null check (transmission in ('manual', 'automatico')),
  drivetrain    text not null check (drivetrain in ('delantera', 'trasera', 'total')),
  start_year    int not null,
  end_year      int,
  consumption   numeric,
  primary key (generation_id, engine_id, trim_label)
);
create index if not exists generation_engines_engine_id_idx on generation_engines(engine_id);

create table if not exists maintenance_items (
  id               text primary key,
  engine_id        text references engines(id) on delete cascade,
  generation_id    text references generations(id) on delete cascade,
  item             text not null,
  interval_km      int,
  interval_months  int,
  notes            text,
  source_id        text references sources(id) on delete set null,
  check (engine_id is not null or generation_id is not null)
);
create index if not exists maintenance_items_engine_id_idx on maintenance_items(engine_id);
create index if not exists maintenance_items_generation_id_idx on maintenance_items(generation_id);

create table if not exists known_issues (
  id            text primary key,
  engine_id     text references engines(id) on delete cascade,
  generation_id text references generations(id) on delete cascade,
  title         text not null,
  symptoms      text not null default '',
  cause         text not null default '',
  severity      text not null check (severity in ('baja', 'media', 'alta')),
  mileage_min   int,
  mileage_max   int,
  cost_min      int,
  cost_max      int,
  confidence    text not null check (confidence in ('anecdotica', 'moderada', 'solida')),
  status        text not null default 'draft' check (status in ('draft', 'needs_review', 'published')),
  check (engine_id is not null or generation_id is not null),
  check (cost_min is null or cost_max is null or cost_min <= cost_max),
  check (mileage_min is null or mileage_max is null or mileage_min <= mileage_max)
);
create index if not exists known_issues_engine_id_idx on known_issues(engine_id);
create index if not exists known_issues_generation_id_idx on known_issues(generation_id);
create index if not exists known_issues_status_idx on known_issues(status);

create table if not exists issue_sources (
  issue_id   text not null references known_issues(id) on delete cascade,
  source_id  text not null references sources(id) on delete cascade,
  note       text,
  primary key (issue_id, source_id)
);

create table if not exists comparisons (
  id                   text primary key,
  slug                 text not null unique,
  left_generation_id   text not null references generations(id) on delete cascade,
  right_generation_id  text not null references generations(id) on delete cascade,
  editorial_summary    text not null default '',
  takeaways            text[] not null default '{}',
  status               text not null default 'draft' check (status in ('draft', 'needs_review', 'published')),
  reviewed_at          date not null default current_date,
  check (left_generation_id <> right_generation_id)
);
create index if not exists comparisons_status_idx on comparisons(status);

-- ── Row Level Security ──────────────────────────────────────────────────
-- La clave anon (pública, usada por el sitio) solo puede LEER, y solo el
-- contenido publicado en las entidades con flujo editorial. Las tablas de
-- apoyo (marcas, modelos, motores, fuentes, mantenimiento, relaciones) no
-- tienen estado propio: son legibles siempre, igual que hace hoy el
-- proveedor local (`src/lib/db/local.ts`). Los escritos del panel /admin
-- usan la service role key, que ignora RLS — nunca expongas esa clave al
-- navegador.

alter table brands enable row level security;
alter table models enable row level security;
alter table generations enable row level security;
alter table engines enable row level security;
alter table generation_engines enable row level security;
alter table maintenance_items enable row level security;
alter table known_issues enable row level security;
alter table sources enable row level security;
alter table issue_sources enable row level security;
alter table comparisons enable row level security;

create policy "public read brands" on brands for select using (true);
create policy "public read models" on models for select using (true);
create policy "public read engines" on engines for select using (true);
create policy "public read generation_engines" on generation_engines for select using (true);
create policy "public read maintenance_items" on maintenance_items for select using (true);
create policy "public read sources" on sources for select using (true);
create policy "public read issue_sources" on issue_sources for select using (true);

create policy "public read published generations" on generations
  for select using (status = 'published');
create policy "public read published known_issues" on known_issues
  for select using (status = 'published');
create policy "public read published comparisons" on comparisons
  for select using (status = 'published');

commit;
