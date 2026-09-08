"use client";

import { useId } from "react";

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  hint?: string;
}

export function NumberField({
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  suffix,
  hint,
}: NumberFieldProps) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <div className="mt-1 flex items-center gap-2">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          className="w-full rounded-md border border-neutral-300 px-3 py-2"
          value={Number.isFinite(value) ? value : ""}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const n = e.target.valueAsNumber;
            onChange(Number.isNaN(n) ? 0 : n);
          }}
        />
        {suffix && <span className="shrink-0 text-sm text-ink-faint">{suffix}</span>}
      </div>
      {hint && <p className="mt-1 text-xs text-ink-faint">{hint}</p>}
    </div>
  );
}

export function ResultRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between border-b border-neutral-200 py-2 ${
        strong ? "text-ink" : "text-ink-soft"
      }`}
    >
      <span className={strong ? "font-semibold" : ""}>{label}</span>
      <span className={strong ? "text-lg font-bold" : "font-medium"}>{value}</span>
    </div>
  );
}
