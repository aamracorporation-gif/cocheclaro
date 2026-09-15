import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Acceso al panel",
  description: "Acceso protegido a la consola editorial.",
  path: "/admin/login",
  noindex: true,
});

const ERRORS: Record<string, string> = {
  invalid: "Contraseña incorrecta.",
  "no-config": "ADMIN_PASSWORD no está configurado en el servidor (ver .env.example).",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>;
}) {
  const params = await searchParams;
  const error = params.error ? ERRORS[params.error] ?? "No se pudo iniciar sesión." : null;
  const from = params.from && params.from.startsWith("/admin") ? params.from : "/admin";

  return (
    <Container>
      <div className="mx-auto max-w-sm">
        <h1 className="h1">Acceso al panel</h1>
        <p className="prose-block mt-2 text-sm">
          Consola editorial de CocheClaro. Acceso restringido: no está indexada y no forma parte
          del sitio público.
        </p>

        {error && (
          <p className="mt-4 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800">
            {error}
          </p>
        )}

        <form action="/api/admin/login" method="post" className="mt-6 space-y-4">
          <input type="hidden" name="from" value={from} />
          <div>
            <label htmlFor="password" className="text-sm font-medium text-ink">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-accent"
            />
          </div>
          <button type="submit" className="btn w-full">
            Entrar
          </button>
        </form>
      </div>
    </Container>
  );
}
