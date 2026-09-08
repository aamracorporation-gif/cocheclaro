/**
 * Aviso de dataset de demostración. El Plan Maestro exige no presentar datos
 * inventados como reales (§8, §20). Mientras el contenido sea "demo" se muestra
 * este banner de forma visible.
 */
export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900 ${className}`}
    >
      <strong>Datos de demostración.</strong> Las cifras y averías de esta ficha son
      orientativas y sirven para probar el producto. No las uses para decidir una compra
      hasta que estén verificadas con fuente.
    </div>
  );
}
