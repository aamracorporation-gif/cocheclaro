import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";

/** Contenedor sencillo para páginas de texto (legales, metodología, etc.). */
export function Prose({
  title,
  path,
  intro,
  children,
}: {
  title: string;
  path: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <Container>
      <Breadcrumbs crumbs={[{ name: "Inicio", path: "/" }, { name: title, path }]} />
      <h1 className="h1 mt-3">{title}</h1>
      {intro && <p className="prose-block mt-3">{intro}</p>}
      <div className="prose-block mt-6 space-y-4 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-accent [&_a]:underline">
        {children}
      </div>
    </Container>
  );
}
