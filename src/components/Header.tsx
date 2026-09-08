import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink">
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-md bg-accent text-sm text-white"
          >
            CC
          </span>
          <span>{site.name}</span>
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-4 text-sm">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink-soft hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link href="/buscar" className="btn-outline px-3 py-1.5 text-sm">
            Buscar
          </Link>
        </nav>
      </div>
    </header>
  );
}
