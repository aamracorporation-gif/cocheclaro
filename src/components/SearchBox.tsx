"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";
import type { SearchResult } from "@/lib/types";

interface Props {
  size?: "lg" | "sm";
  placeholder?: string;
  initialQuery?: string;
  autoFocus?: boolean;
}

const KIND_LABEL: Record<SearchResult["kind"], string> = {
  generation: "Generación",
  engine: "Motor",
  model: "Modelo",
  brand: "Marca",
};

export function SearchBox({
  size = "lg",
  placeholder = "Ej. BMW 320d 2018, B47, qué motor lleva un 518d…",
  initialQuery = "",
  autoFocus = false,
}: Props) {
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      return;
    }
    const controller = new AbortController();
    const t = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(q)}`, { signal: controller.signal })
        .then((r) => (r.ok ? r.json() : { results: [] }))
        .then((data: { results: SearchResult[] }) => {
          setResults(data.results);
          setOpen(true);
          setActive(-1);
        })
        .catch(() => undefined);
    }, 150);
    return () => {
      controller.abort();
      clearTimeout(t);
    };
  }, [query]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function go(href: string, term: string) {
    track("vehicle_search", { term, target: href });
    setOpen(false);
    router.push(href);
  }

  function submit() {
    const q = query.trim();
    if (!q) return;
    if (active >= 0 && results[active]) {
      go(results[active].href, q);
    } else {
      track("vehicle_search", { term: q, target: "/buscar" });
      router.push(`/buscar?q=${encodeURIComponent(q)}`);
    }
  }

  const inputCls =
    size === "lg"
      ? "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3.5 text-lg shadow-sm"
      : "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-base";

  return (
    <div ref={boxRef} className="relative">
      <div className="flex gap-2">
        <input
          type="search"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          autoFocus={autoFocus}
          className={inputCls}
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, results.length - 1));
              setOpen(true);
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, -1));
            } else if (e.key === "Enter") {
              e.preventDefault();
              submit();
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
        />
        <button type="button" className="btn shrink-0" onClick={submit}>
          Buscar
        </button>
      </div>

      {open && results.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-20 mt-1 max-h-96 w-full overflow-auto rounded-lg border border-neutral-200 bg-white py-1 shadow-lg"
        >
          {results.map((r, i) => (
            <li key={r.href} role="option" aria-selected={i === active}>
              <button
                type="button"
                className={`flex w-full items-baseline justify-between gap-3 px-4 py-2 text-left ${
                  i === active ? "bg-accent-soft" : "hover:bg-neutral-50"
                }`}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r.href, query.trim())}
              >
                <span>
                  <span className="font-medium text-ink">{r.title}</span>{" "}
                  <span className="text-sm text-ink-faint">· {r.subtitle}</span>
                </span>
                <span className="shrink-0 text-xs uppercase tracking-wide text-ink-faint">
                  {KIND_LABEL[r.kind]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
