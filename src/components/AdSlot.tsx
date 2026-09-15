"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { ads } from "@/lib/site";
import { getConsent, subscribeConsent, type ConsentChoice } from "@/lib/consent";

interface Props {
  /** Identificador de la posición, p. ej. "generacion-tras-resumen". */
  slot: string;
  /** Alto reservado en px para evitar CLS (§12). Siempre se reserva el espacio. */
  minHeight?: number;
  className?: string;
}

const configured = ads.enabled && ads.client.length > 0;

/**
 * Hueco de anuncio. Reserva SIEMPRE sus dimensiones para no provocar layout
 * shift. El `<ins class="adsbygoogle">` real y el script de AdSense solo se
 * cargan cuando se cumplen las tres condiciones:
 *   1) NEXT_PUBLIC_ADS_ENABLED === "true"
 *   2) hay un client id configurado (NEXT_PUBLIC_ADSENSE_CLIENT)
 *   3) el usuario ha aceptado cookies no necesarias en `<ConsentBanner>`
 *      (sustituir por la señal de una CMP certificada antes de producción
 *      real en el EEE, ver `lib/consent.ts`).
 *
 * Con cualquiera de las tres condiciones sin cumplir, el componente ocupa el
 * mismo espacio pero no pinta nada visible ni carga red.
 */
export function AdSlot({ slot, minHeight = 280, className = "" }: Props) {
  const [consent, setConsentState] = useState<ConsentChoice>(null);

  useEffect(() => {
    setConsentState(getConsent());
    return subscribeConsent(setConsentState);
  }, []);

  const active = configured && consent === "accepted";

  return (
    <aside
      aria-label="Espacio publicitario"
      data-ad-slot={slot}
      className={`my-6 flex items-center justify-center rounded-md border border-dashed border-neutral-200 text-xs text-neutral-400 ${className}`}
      style={{ minHeight }}
    >
      {active ? (
        <>
          <Script
            id="adsbygoogle-loader"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ads.client}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", minHeight }}
            data-ad-client={ads.client}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
            ref={(el) => {
              if (!el || el.dataset.pushed) return;
              el.dataset.pushed = "true";
              try {
                (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle =
                  (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle || [];
                (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle.push({});
              } catch {
                /* el script aún no ha cargado; adsbygoogle.js procesará los <ins> pendientes */
              }
            }}
          />
        </>
      ) : (
        <span data-ad-state="disabled">Espacio reservado para publicidad</span>
      )}
    </aside>
  );
}
