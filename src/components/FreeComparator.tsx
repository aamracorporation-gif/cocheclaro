"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import type { GenerationSummary } from "@/lib/compare";

const ROWS: Array<{ key: keyof GenerationSummary; label: string }> = [
  { key: "years", label: "Años" },
  { key: "body", label: "Carrocería" },
  { key: "fuels", label: "Combustibles" },
  { key: "power", label: "Potencias" },
  { key: "consumption", label: "Consumo homologado" },
  { key: "boot", label: "Maletero" },
];

export function FreeComparator({ items }: { items: GenerationSummary[] }) {
  const [leftId, setLeftId] = useState<string>(items[0]?.id ?? "");
  const [rightId, setRightId] = useState<string>(items[1]?.id ?? "");

  const left = items.find((i) => i.id === leftId) ?? null;
  const right = items.find((i) => i.id === rightId) ?? null;

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Picker
          label="Coche A"
          items={items}
          value={leftId}
          onChange={(v) => {
            setLeftId(v);
            track("comparison_start", { side: "a", generation: v });
          }}
        />
        <Picker
          label="Coche B"
          items={items}
          value={rightId}
          onChange={(v) => {
            setRightId(v);
            track("comparison_start", { side: "b", generation: v });
          }}
        />
      </div>

      {left && right && (
        <>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[left, right].map((s) => (
              <div key={s.id} className="card">
                <Link href={s.href} className="link font-semibold">
                  {s.title}
                </Link>
                <p className="mt-1 text-sm text-ink-soft">{s.verdict}</p>
              </div>
            ))}
          </div>

          <div className="table-wrap mt-4">
            <table className="data-table">
              <thead>
                <tr>
                  <th></th>
                  <th>{left.title}</th>
                  <th>{right.title}</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.key}>
                    <th scope="row" className="text-ink">
                      {row.label}
                    </th>
                    <td>{left[row.key] as string}</td>
                    <td>{right[row.key] as string}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="text-ink">
                    Averías documentadas
                  </th>
                  <td>
                    {left.issuesTotal} ({left.issuesHigh} graves)
                  </td>
                  <td>
                    {right.issuesTotal} ({right.issuesHigh} graves)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function Picker({
  label,
  items,
  value,
  onChange,
}: {
  label: string;
  items: GenerationSummary[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">{label}</span>
      <select
        className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {items.map((i) => (
          <option key={i.id} value={i.id}>
            {i.title} ({i.years})
          </option>
        ))}
      </select>
    </label>
  );
}
