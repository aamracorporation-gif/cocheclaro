-- CocheClaro · esquema inicial (§9 del Plan Maestro)
-- Reproduce el modelo de datos del proveedor local (src/data/*.ts).
-- El proyecto ARRANCA sin Supabase; esto es para cuando se quiera escalar.

create type publish_status as enum ('draft', 'needs_review', 'published');
create type data_status   as enum ('demo', 'verified');
create type fuel_type     as enum ('gasolina','diesel','hibrido','hibrido-enchufable','electrico','glp');
create type transmission  as enum ('manual','automatico');
create type drivetrain    as enum ('delantera','trasera','total');
create type severity      as enum ('baja','media','alta');
create type confidence    as enum ('anecdotica','moderada','solida');
create type source_type   as enum ('fabricante','homologacion','boletin-tecnico','medio-tecnico','organismo-publico','comunidad');

create table brands (
  id       text primary key,
  slug     text not null unique,
  name     text not null,
  country  text not null
);

create table models (
  id         text primary key,
  brand_id   text not null references brands(id) on delete cascade,
  slug       text not null,
  name       text not null,
  body_type  text not null,
  unique (brand_id, slug)
);

create table engines (
  id             text primary key,
  slug           text not null unique,
  code           text not null,
  fuel           fuel_type not null,
  displacement_cc int not null check (displacement_cc > 0),
  cylinders      int not null check (cylinders > 0),
  power_kw       int,
  power_hp       int not null check (power_hp > 0),
  torque_nm      int,
  architecture   text not null,
  summary        text not null,
  data_status    data_status not null default 'demo'
);

create table generations (
  id           text primary key,
  model_id     text not null references models(id) on delete cascade,
  code         text not null,
  slug         text not null,
  start_year   int not null,
  end_year     int,
  one_liner    text not null,
  intro        text not null,
  verdict      text not null,
  strengths    jsonb not null default '[]',
  watchouts    jsonb not null default '[]',
  faq          jsonb not null default '[]',
  status       publish_status not null default 'draft',
  data_status  data_status not null default 'demo',
  reviewed_at  date not null,
  body_type    text not null,
  length_mm    int,
  boot_litres  int,
  unique (model_id, slug),
  check (end_year is null or end_year >= start_year)
);

create table generation_engines (
  generation_id text not null references generations(id) on delete cascade,
  engine_id     text not null references engines(id) on delete cascade,
  trim_label    text not null,
  transmission  transmission not null,
  drivetrain    drivetrain not null,
  start_year    int not null,
  end_year      int,
  consumption   numeric(4,1),
  primary key (generation_id, engine_id, trim_label)
);

create table sources (
  id           text primary key,
  url          text not null check (url ~ '^https?://'),
  title        text not null,
  publisher    text not null,
  published_at date,
  accessed_at  date not null,
  source_type  source_type not null
);

create table maintenance_items (
  id              text primary key,
  engine_id       text references engines(id) on delete cascade,
  generation_id   text references generations(id) on delete cascade,
  item            text not null,
  interval_km     int,
  interval_months int,
  notes           text,
  source_id       text references sources(id),
  check (engine_id is not null or generation_id is not null)
);

create table known_issues (
  id            text primary key,
  engine_id     text references engines(id) on delete cascade,
  generation_id text references generations(id) on delete cascade,
  title         text not null,
  symptoms      text not null,
  cause         text not null,
  severity      severity not null,
  mileage_min   int,
  mileage_max   int,
  cost_min      int,
  cost_max      int,
  confidence    confidence not null,
  status        publish_status not null default 'draft',
  check (engine_id is not null or generation_id is not null),
  check (cost_min is null or cost_max is null or cost_min <= cost_max)
);

create table issue_sources (
  issue_id  text not null references known_issues(id) on delete cascade,
  source_id text not null references sources(id) on delete cascade,
  note      text,
  primary key (issue_id, source_id)
);

create table comparisons (
  id                 text primary key,
  slug               text not null unique,
  left_generation_id  text not null references generations(id) on delete cascade,
  right_generation_id text not null references generations(id) on delete cascade,
  editorial_summary   text not null,
  takeaways           jsonb not null default '[]',
  status              publish_status not null default 'draft',
  reviewed_at         date not null,
  check (left_generation_id <> right_generation_id)
);

create table editorial_blocks (
  id          bigint generated always as identity primary key,
  entity_type text not null,
  entity_id   text not null,
  block_key   text not null,
  body_md     text not null,
  author      text,
  reviewed_at date,
  unique (entity_type, entity_id, block_key)
);

-- Índices de acceso habitual
create index on models (brand_id);
create index on generations (model_id, status);
create index on generation_engines (engine_id);
create index on known_issues (engine_id);
create index on known_issues (generation_id);
create index on maintenance_items (engine_id);
create index on maintenance_items (generation_id);

-- Solo lo publicado es legible por el público (§8.2). El panel usa la service key.
alter table brands              enable row level security;
alter table models              enable row level security;
alter table engines             enable row level security;
alter table generations         enable row level security;
alter table generation_engines  enable row level security;
alter table sources             enable row level security;
alter table maintenance_items   enable row level security;
alter table known_issues        enable row level security;
alter table issue_sources       enable row level security;
alter table comparisons         enable row level security;
alter table editorial_blocks    enable row level security;

create policy "public read brands"  on brands  for select using (true);
create policy "public read models"  on models  for select using (true);
create policy "public read engines" on engines for select using (true);
create policy "public read gen-engines" on generation_engines for select using (true);
create policy "public read sources" on sources for select using (true);
create policy "public read generations published" on generations
  for select using (status = 'published');
create policy "public read issues published" on known_issues
  for select using (status = 'published');
create policy "public read comparisons published" on comparisons
  for select using (status = 'published');
create policy "public read maintenance" on maintenance_items for select using (true);
create policy "public read issue-sources" on issue_sources for select using (true);
create policy "public read editorial" on editorial_blocks for select using (true);
