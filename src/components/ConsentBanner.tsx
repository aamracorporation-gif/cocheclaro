"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cocheclaro.consent.v1";

type Choice = "accepted" | "rejected" | null;

/**
 * Primera capa de consentimiento (§14). Aceptar y Rechazar tienen el mismo
 * peso visual. Este componente NO carga cookies ni scripts: solo guarda la
 * elección para que una CMP certificada (Google CMP / TCF de IAB) se integre
 * encima antes de activar anuncios personalizados en el EEE.
 */
export function ConsentBanner() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setChoice((localStorage.getItem(STORAGE_KEY) as Choice) ?? null);
    } catch {
      /* almacenamiento no disponible: se mostrará el banner */
    }
    setReady(true);
  }, []);

  function decide(value: Exclude<Choice, null>) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* sin persistencia: se volverá a preguntar */
    }
    setChoice(value);
  }

  if (!ready || choice) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur"
    >
      <div className="container-page flex flex-col gap-3 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-prose text-ink-soft">
          Usamos cookies propias para el funcionamiento del sitio. Si en el futuro se activa
          publicidad, se pedirá tu consentimiento con una plataforma certificada antes de usar
          cookies no necesarias.{" "}
          <a href="/cookies" className="link">
            Más información
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" className="btn-outline px-3 py-1.5" onClick={() => decide("rejected")}>
            Rechazar
          </button>
          <button type="button" className="btn-outline px-3 py-1.5" onClick={() => (window.location.href = "/cookies")}>
            Configurar
          </button>
          <button type="button" className="btn px-3 py-1.5" onClick={() => decide("accepted")}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
