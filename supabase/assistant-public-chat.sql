-- CoastAI public assistant publishing and knowledge access.
-- Run this once in the SQL Editor of the CoastAI Supabase project.

alter table public.assistants
  add column if not exists is_public boolean not null default false;

-- Anonymous visitors may read only assistants that their workspace owner
-- has explicitly published and that are currently active.
drop policy if exists "public read published assistants" on public.assistants;
create policy "public read published assistants"
  on public.assistants
  for select
  to anon, authenticated
  using (is_public = true and is_active = true);

-- Public visitors may read only knowledge linked to a published active
-- assistant, or workspace-wide knowledge explicitly shared with that workspace's
-- published active assistants. Existing member policies remain in place.
drop policy if exists "public read published assistant knowledge" on public.knowledge_documents;
create policy "public read published assistant knowledge"
  on public.knowledge_documents
  for select
  to anon, authenticated
  using (
    (
      assistant_id is null
      and exists (
        select 1
        from public.assistants a
        where a.workspace_id = knowledge_documents.workspace_id
          and a.is_public = true
          and a.is_active = true
      )
    )
    or exists (
      select 1
      from public.assistants a
      where a.id = knowledge_documents.assistant_id
        and a.workspace_id = knowledge_documents.workspace_id
        and a.is_public = true
        and a.is_active = true
    )
  );
