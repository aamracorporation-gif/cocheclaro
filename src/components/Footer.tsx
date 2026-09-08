import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50">
      <div className="container-page py-10 text-sm text-ink-soft">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {site.footer.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
        <p className="mt-6 max-w-prose text-ink-faint">
          {site.name} es una base de conocimiento sobre coches usados en España. Los datos
          técnicos se acompañan de fuentes y fecha de revisión. Nombre y marca provisionales:
          verificar antes de uso comercial.
        </p>
        <p className="mt-2 text-ink-faint">
          © {new Date().getFullYear()} {site.name}. Contenido informativo, no asesoramiento de compra
          ni financiero.
        </p>
      </div>
    </footer>
  );
}
