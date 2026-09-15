"use client";

import { useActionState } from "react";
import { previewImportAction, applyImportAction, type ImportState } from "@/app/admin/importar/actions";

const initial: ImportState = { phase: "idle" };

export function ImportForm() {
  const [previewState, previewAction, previewPending] = useActionState(previewImportAction, initial);
  const [applyState, applyAction, applyPending] = useActionState(applyImportAction, initial);

  const state = applyState.phase !== "idle" ? applyState : previewState;

  return (
    <div className="space-y-6">
      <form action={previewAction} className="card space-y-3">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="file">
            Archivo .csv
          </label>
          <input id="file" name="file" type="file" accept=".csv,text/csv" className="mt-1 block text-sm" />
        </div>
        <p className="text-xs text-ink-faint">o pega el contenido directamente:</p>
        <textarea
          name="csvText"
          rows={6}
          placeholder="entity,slug,brand_slug,model_slug,generation_code,engine_code,field,value,..."
          className="w-full rounded-md border border-neutral-300 px-3 py-2 font-mono text-xs"
        />
        <button type="submit" disabled={previewPending} className="btn disabled:opacity-60">
          {previewPending ? "Analizando…" : "Previsualizar"}
        </button>
      </form>

      {state.phase === "error" && (
        <p className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800">
          {state.message}
        </p>
      )}

      {state.phase === "done" && (
        <p className="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          {state.message}
        </p>
      )}

      {state.phase === "preview" && state.plan && (
        <div className="card space-y-4">
          <h2 className="h3">Vista previa</h2>
          {state.message && <p className="text-sm text-amber-700">{state.message}</p>}

          <Summary
            label="Fuentes a crear/actualizar"
            items={state.plan.sources.map((s) => `${s.id} — ${s.title}`)}
          />
          <Summary
            label="Averías a crear/actualizar"
            items={state.plan.knownIssues.map((i) => `${i.id} — ${i.title} (${i.status})`)}
          />
          <Summary
            label="Mantenimiento a crear/actualizar"
            items={state.plan.maintenanceItems.map((m) => `${m.id} — ${m.item}`)}
          />

          {state.plan.warnings.length > 0 && (
            <Issues label="Avisos (no bloquean la importación)" items={state.plan.warnings} tone="amber" />
          )}
          {state.plan.errors.length > 0 && (
            <Issues label="Errores (deben corregirse)" items={state.plan.errors} tone="red" />
          )}

          <form action={applyAction}>
            <input type="hidden" name="csvText" value={state.csvText} />
            <button
              type="submit"
              disabled={state.plan.errors.length > 0 || applyPending}
              className="btn disabled:opacity-60"
            >
              {applyPending ? "Importando…" : "Confirmar importación"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function Summary({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink">
        {label} ({items.length})
      </h3>
      <ul className="mt-1 list-disc pl-5 text-sm text-ink-soft">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Issues({
  label, items, tone,
}: { label: string; items: Array<{ row: number; message: string }>; tone: "amber" | "red" }) {
  const cls = tone === "red" ? "text-red-800" : "text-amber-800";
  return (
    <div>
      <h3 className={`text-sm font-semibold ${cls}`}>{label}</h3>
      <ul className={`mt-1 list-disc pl-5 text-sm ${cls}`}>
        {items.map((i, idx) => (
          <li key={idx}>
            {i.row > 0 ? `Fila ${i.row}: ` : ""}
            {i.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
