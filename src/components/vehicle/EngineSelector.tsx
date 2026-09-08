"use client";

import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";

interface Option {
  slug: string;
  label: string;
}

/** Selector de motor del hero de la ficha (§6.2). Navega a la ficha de motor. */
export function EngineSelector({
  options,
  vehicleLabel,
}: {
  options: Option[];
  vehicleLabel: string;
}) {
  const router = useRouter();
  if (options.length === 0) return null;

  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="text-ink-faint">Ver motor:</span>
      <select
        className="rounded-md border border-neutral-300 bg-white px-3 py-1.5"
        defaultValue=""
        onChange={(e) => {
          const slug = e.target.value;
          if (!slug) return;
          track("engine_select", { vehicle: vehicleLabel, engine: slug });
          router.push(`/motores/${slug}`);
        }}
      >
        <option value="" disabled>
          Elegir motor…
        </option>
        {options.map((o) => (
          <option key={o.slug} value={o.slug}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
