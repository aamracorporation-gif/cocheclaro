/**
 * Aviso de ficha en revisión. El Plan Maestro (§8, §11.2, §20) exige no
 * presentar datos sin verificar como hechos comprobados. Mientras una ficha
 * tenga `dataStatus: "demo"`, se muestra este aviso: los campos estructurados
 * son un punto de partida editorial pendiente de contrastar con fuente oficial.
 */
export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900 ${className}`}
    >
      <strong>Ficha en revisión.</strong> Los datos técnicos y las averías son un punto de
      partida orientativo y se están contrastando con documentación oficial. Trátalos como una
      guía, no como cifras cerradas, y verifica siempre el vehículo concreto antes de comprar.
    </div>
  );
}
