import Link from "next/link";

/** Se muestra cuando una sección de edición del panel requiere Supabase. */
export function ProviderGate() {
  return (
    <div className="card mt-6 max-w-xl">
      <h1 className="h2">Edición no disponible en modo local</h1>
      <p className="prose-block mt-2 text-sm">
        El proveedor de datos activo es <code>local</code> (<code>src/data/*.ts</code>), que es
        código fuente versionado, no una base de datos: no se puede escribir en tiempo de
        ejecución. Para editar desde aquí:
      </p>
      <ol className="prose-block mt-3 list-decimal space-y-1 pl-5 text-sm">
        <li>
          Crea un proyecto en{" "}
          <a href="https://supabase.com" className="link" target="_blank" rel="noreferrer">
            supabase.com
          </a>{" "}
          y ejecuta <code>supabase/migrations/0001_init.sql</code>.
        </li>
        <li>
          Genera el dataset de demostración con <code>npm run db:seed:generate</code> y ejecútalo
          contra tu proyecto (<code>supabase/seed/seed_demo.sql</code>).
        </li>
        <li>
          Configura <code>DATA_PROVIDER=supabase</code> y las claves de Supabase en{" "}
          <code>.env.local</code> (ver <code>.env.example</code>).
        </li>
      </ol>
      <p className="mt-3 text-sm">
        <Link href="/admin" className="link">
          ← Volver a la consola
        </Link>
      </p>
    </div>
  );
}
