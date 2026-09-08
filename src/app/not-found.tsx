import Link from "next/link";
import { Container } from "@/components/Container";
import { SearchBox } from "@/components/SearchBox";

export default function NotFound() {
  return (
    <Container>
      <div className="py-12">
        <p className="eyebrow">Error 404</p>
        <h1 className="h1 mt-1">No encontramos esa página</h1>
        <p className="prose-block mt-3">
          Puede que el modelo o el motor todavía no tengan ficha publicada, o que la dirección
          sea incorrecta. Prueba a buscar el coche:
        </p>
        <div className="mt-6 max-w-2xl">
          <SearchBox />
        </div>
        <p className="mt-6 text-sm">
          <Link href="/" className="link">
            Volver al inicio
          </Link>{" "}
          ·{" "}
          <Link href="/coches" className="link">
            Ver todas las marcas
          </Link>
        </p>
      </div>
    </Container>
  );
}
