"use client";

import { useActionState } from "react";
import type { Confidence, Engine, KnownIssue, Severity, Source } from "@/lib/types";
import type { ActionState } from "@/app/admin/actions";
import type { AdminGenerationRow } from "@/lib/db/supabase-admin";

const SEVERITIES: Severity[] = ["baja", "media", "alta"];
const CONFIDENCES: Confidence[] = ["anecdotica", "moderada", "solida"];

interface Props {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  initial?: KnownIssue;
  engines: Engine[];
  generations: AdminGenerationRow[];
  sources: Source[];
}

export function KnownIssueForm({ action, initial, engines, generations, sources }: Props) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(action, {});

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <p className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800">
          {state.error}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="id">
            Id (slug)
          </label>
          <input
            id="id"
            name="id"
            defaultValue={initial?.id}
            required
            disabled={Boolean(initial)}
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm disabled:bg-neutral-100"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-ink" htmlFor="status">
            Estado
          </label>
          <select
            id="status"
            name="status"
            defaultValue={initial?.status ?? "draft"}
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          >
            <option value="draft">Borrador</option>
            <option value="needs_review">En revisión</option>
            <option value="published">Publicado</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-ink" htmlFor="generationId">
            Generación (opcional)
          </label>
          <select
            id="generationId"
            name="generationId"
            defaultValue={initial?.generationId ?? ""}
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          >
            <option value="">—</option>
            {generations.map((g) => (
              <option key={g.id} value={g.id}>
                {g.brandName} {g.modelName} {g.code}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-ink" htmlFor="engineId">
            Motor (opcional)
          </label>
          <select
            id="engineId"
            name="engineId"
            defaultValue={initial?.engineId ?? ""}
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          >
            <option value="">—</option>
            {engines.map((e) => (
              <option key={e.id} value={e.id}>
                {e.code}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="text-xs text-ink-faint">Debe rellenarse generación o motor (al menos uno).</p>

      <TextField label="Título" name="title" defaultValue={initial?.title} required />
      <TextArea label="Síntomas" name="symptoms" defaultValue={initial?.symptoms} required />
      <TextArea label="Causa" name="cause" defaultValue={initial?.cause} required />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="severity">
            Gravedad
          </label>
          <select
            id="severity"
            name="severity"
            defaultValue={initial?.severity ?? "media"}
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          >
            {SEVERITIES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="confidence">
            Confianza de evidencia
          </label>
          <select
            id="confidence"
            name="confidence"
            defaultValue={initial?.confidence ?? "anecdotica"}
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          >
            {CONFIDENCES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <NumberField label="Km mín." name="mileageMin" defaultValue={initial?.mileageMin} />
        <NumberField label="Km máx." name="mileageMax" defaultValue={initial?.mileageMax} />
        <NumberField label="Coste mín. (€)" name="costMin" defaultValue={initial?.costMin} />
        <NumberField label="Coste máx. (€)" name="costMax" defaultValue={initial?.costMax} />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-ink">
          Fuentes (obligatorio para publicar)
        </legend>
        <div className="mt-2 space-y-1">
          {sources.map((s) => (
            <label key={s.id} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="sourceIds"
                value={s.id}
                defaultChecked={initial?.sourceIds.includes(s.id)}
              />
              {s.title}
            </label>
          ))}
        </div>
      </fieldset>

      <button type="submit" disabled={pending} className="btn disabled:opacity-60">
        {pending ? "Guardando…" : "Guardar avería"}
      </button>
    </form>
  );
}

function TextField({
  label, name, defaultValue, required,
}: { label: string; name: string; defaultValue?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
      />
    </div>
  );
}

function TextArea({
  label, name, defaultValue, required,
}: { label: string; name: string; defaultValue?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        rows={3}
        className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
      />
    </div>
  );
}

function NumberField({
  label, name, defaultValue,
}: { label: string; name: string; defaultValue?: number }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="number"
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
      />
    </div>
  );
}
