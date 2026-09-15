"use client";

import { useActionState } from "react";
import type { Source } from "@/lib/types";
import type { ActionState } from "@/app/admin/actions";

const SOURCE_TYPES: Source["sourceType"][] = [
  "fabricante", "homologacion", "boletin-tecnico", "medio-tecnico", "organismo-publico", "comunidad",
];

interface Props {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  initial?: Source;
}

export function SourceForm({ action, initial }: Props) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(action, {});

  return (
    <form action={formAction} className="card space-y-3" key={initial?.id ?? "new"}>
      <h2 className="h3">{initial ? "Editar fuente" : "Nueva fuente"}</h2>

      {state.error && (
        <p className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800">
          {state.error}
        </p>
      )}

      <Field label="Id (slug)" name="id" defaultValue={initial?.id} required disabled={Boolean(initial)} />
      <Field label="URL" name="url" type="url" defaultValue={initial?.url} required />
      <Field label="Título" name="title" defaultValue={initial?.title} required />
      <Field label="Editor/publisher" name="publisher" defaultValue={initial?.publisher} required />
      <Field label="Fecha de publicación (opcional)" name="publishedAt" type="date" defaultValue={initial?.publishedAt} />
      <Field label="Fecha de consulta" name="accessedAt" type="date" defaultValue={initial?.accessedAt} required />

      <div>
        <label className="text-sm font-medium text-ink">Tipo de fuente</label>
        <select
          name="sourceType"
          defaultValue={initial?.sourceType ?? SOURCE_TYPES[0]}
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
        >
          {SOURCE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" disabled={pending} className="btn w-full disabled:opacity-60">
        {pending ? "Guardando…" : "Guardar"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue,
  required,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm disabled:bg-neutral-100"
      />
    </div>
  );
}
