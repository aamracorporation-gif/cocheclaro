import { NextResponse } from "next/server";
import { search } from "@/lib/search";

/** Sugerencias de búsqueda para el buscador con autocompletado. */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const results = search(q, 8);
  return NextResponse.json(
    { results },
    { headers: { "Cache-Control": "public, max-age=300, s-maxage=3600" } },
  );
}
