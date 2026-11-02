-- CoastAI multi-tenant SaaS schema
create extension if not exists pgcrypto;

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  owner_id uuid not null references auth.users(id) on delete cascade,
  country text not null default 'Kenya',
  currency text not null default 'KES',
  plan text not null default 'starter' check (plan in ('starter','growth','business')),
  created_at timestamptz not null default now()
);

create table if not exists public.workspace_members (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'owner' check (role in ('owner','admin','agent')),
  created_at timestamptz not null default now(),
  primary key (workspace_id,user_id)
);

create table if not exists public.assistants (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name text not null default 'Business Assistant',
  instructions text not null default 'You are a helpful customer support assistant.',
  welcome_message text not null default 'Hello! How can I help you today?',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.knowledge_documents (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  assistant_id uuid references public.assistants(id) on delete set null,
  title text not null,
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name text,
  email text,
  phone text,
  source text not null default 'manual',
  status text not null default 'new' check (status in ('new','contacted','qualified','won','lost')),
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  assistant_id uuid references public.assistants(id) on delete set null,
  channel text not null default 'website',
  customer_name text,
  customer_contact text,
  status text not null default 'open' check (status in ('open','resolved','handoff')),
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  role text not null check (role in ('user','assistant','agent','system')),
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null unique references public.workspaces(id) on delete cascade,
  provider text not null default 'manual',
  provider_reference text,
  status text not null default 'trial' check (status in ('trial','active','past_due','cancelled')),
  current_period_end timestamptz,
  created_at timestamptz not null default now()
);

create or replace function public.is_workspace_member(target_workspace uuid)
returns boolean language sql stable security definer set search_path = public
as $$
  select exists(select 1 from public.workspace_members m where m.workspace_id = target_workspace and m.user_id = auth.uid())
      or exists(select 1 from public.workspaces w where w.id = target_workspace and w.owner_id = auth.uid());
$$;

alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.assistants enable row level security;
alter table public.knowledge_documents enable row level security;
alter table public.leads enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.subscriptions enable row level security;

create policy "members read workspaces" on public.workspaces for select using (public.is_workspace_member(id));
create policy "authenticated create own workspace" on public.workspaces for insert to authenticated with check (owner_id = auth.uid());
create policy "owners update workspace" on public.workspaces for update to authenticated using (owner_id = auth.uid()) with check (owner_id = auth.uid());
create policy "members read membership" on public.workspace_members for select using (public.is_workspace_member(workspace_id));
create policy "owners manage membership" on public.workspace_members for all to authenticated using (exists(select 1 from public.workspaces w where w.id=workspace_id and w.owner_id=auth.uid())) with check (exists(select 1 from public.workspaces w where w.id=workspace_id and w.owner_id=auth.uid()));

create policy "workspace scoped assistants" on public.assistants for all to authenticated using (public.is_workspace_member(workspace_id)) with check (public.is_workspace_member(workspace_id));
create policy "workspace scoped knowledge" on public.knowledge_documents for all to authenticated using (public.is_workspace_member(workspace_id)) with check (public.is_workspace_member(workspace_id));
create policy "workspace scoped leads" on public.leads for all to authenticated using (public.is_workspace_member(workspace_id)) with check (public.is_workspace_member(workspace_id));
create policy "workspace scoped conversations" on public.conversations for all to authenticated using (public.is_workspace_member(workspace_id)) with check (public.is_workspace_member(workspace_id));
create policy "workspace scoped messages" on public.messages for all to authenticated using (public.is_workspace_member(workspace_id)) with check (public.is_workspace_member(workspace_id));
create policy "workspace scoped subscriptions" on public.subscriptions for select to authenticated using (public.is_workspace_member(workspace_id));

create or replace function public.create_workspace_for_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
declare workspace_id uuid; business_name text;
begin
  business_name := coalesce(new.raw_user_meta_data->>'business_name', split_part(coalesce(new.email,'business'), '@', 1) || '''s workspace');
  insert into public.workspaces(name,slug,owner_id)
  values (business_name, lower(regexp_replace(business_name, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || substr(gen_random_uuid()::text,1,8), new.id)
  returning id into workspace_id;
  insert into public.workspace_members(workspace_id,user_id,role) values(workspace_id,new.id,'owner');
  insert into public.assistants(workspace_id,name) values(workspace_id,business_name || ' Assistant');
  insert into public.subscriptions(workspace_id,status) values(workspace_id,'trial');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_coastai on auth.users;
create trigger on_auth_user_created_coastai after insert on auth.users for each row execute procedure public.create_workspace_for_new_user();
