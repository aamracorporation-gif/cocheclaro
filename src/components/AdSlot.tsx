import { ads } from "@/lib/site";

interface Props {
  /** Identificador de la posición, p. ej. "generacion-tras-resumen". */
  slot: string;
  /** Alto reservado en px para evitar CLS (§12). Siempre se reserva el espacio. */
  minHeight?: number;
  className?: string;
}

/**
 * Hueco de anuncio. Reserva SIEMPRE sus dimensiones para no provocar layout
 * shift. Los scripts de AdSense solo se cargan si:
 *   1) NEXT_PUBLIC_ADS_ENABLED === "true"
 *   2) hay un client id configurado
 *   3) (en producción real) la CMP ha registrado consentimiento — pendiente de integrar.
 *
 * Con los anuncios desactivados el componente ocupa el mismo espacio pero
 * no pinta nada visible ni carga red.
 */
export function AdSlot({ slot, minHeight = 280, className = "" }: Props) {
  const active = ads.enabled && ads.client.length > 0;

  return (
    <aside
      aria-label="Espacio publicitario"
      data-ad-slot={slot}
      className={`my-6 flex items-center justify-center rounded-md border border-dashed border-neutral-200 text-xs text-neutral-400 ${className}`}
      style={{ minHeight }}
    >
      {active ? (
        // Placeholder de integración: aquí iría <ins class="adsbygoogle" …/> tras
        // cargar el script y confirmar consentimiento. Se deja explícito para no
        // activar red sin CMP.
        <span data-ad-state="ready">Publicidad</span>
      ) : (
        <span data-ad-state="disabled">Espacio reservado para publicidad</span>
      )}
    </aside>
  );
}
