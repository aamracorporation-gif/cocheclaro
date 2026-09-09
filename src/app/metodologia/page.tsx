import type { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Metodología",
  description: `Cómo ${site.name} obtiene, verifica y clasifica los datos técnicos de cada coche: fuentes permitidas, niveles de evidencia y flujo editorial.`,
  path: "/metodologia",
});

export default function MethodologyPage() {
  return (
    <Prose
      title="Metodología"
      path="/metodologia"
      intro={`Así construimos y revisamos las fichas de ${site.name}.`}
    >
      <h2>Principio</h2>
      <p>
        No competimos escribiendo más texto que nadie. Cada ficha se apoya en datos
        estructurados (código de motor, potencia, par, intervalos, averías con síntomas y
        gravedad) y cada dato crítico puede vincularse a una fuente y a una fecha de revisión.
      </p>

      <h2>Fuentes que usamos</h2>
      <ul>
        <li>Documentación y comunicados oficiales del fabricante.</li>
        <li>Fichas de homologación y datos de organismos públicos cuando existen.</li>
        <li>Boletines técnicos de servicio y campañas o llamadas a revisión de fuentes fiables.</li>
        <li>Medios técnicos reputados como fuente secundaria, citados y contrastados.</li>
        <li>
          Experiencias de propietarios solo como evidencia anecdótica, nunca como hecho
          estadístico por sí solas.
        </li>
      </ul>
      <p>
        Evitamos copiar fichas de la competencia, reutilizar descripciones ajenas o rellenar
        huecos con estimaciones presentadas como hechos.
      </p>

      <h2>Niveles de evidencia de una avería</h2>
      <ul>
        <li>
          <strong>Sólida:</strong> respaldada por documentación del fabricante, boletines
          técnicos o campañas oficiales.
        </li>
        <li>
          <strong>Moderada:</strong> patrón coherente entre medios técnicos y comunidades de
          propietarios, sin confirmación oficial.
        </li>
        <li>
          <strong>Anecdótica:</strong> casos aislados; se menciona con cautela y no se
          presenta como problema generalizado.
        </li>
      </ul>

      <h2>Flujo editorial</h2>
      <ul>
        <li>Se crea la entidad y se añaden los campos estructurados con su fuente.</li>
        <li>El &laquo;veredicto&raquo; y los puntos de compra se redactan a partir de los datos.</li>
        <li>Validaciones automáticas: potencia &gt; 0, años coherentes, URLs válidas, sin duplicados.</li>
        <li>
          Estados <code>borrador → en revisión → publicado</code>. Solo lo publicado genera URL
          indexable y entra en el sitemap.
        </li>
      </ul>

      <h2>Cuando no hay dato</h2>
      <p>
        Preferimos mostrar &laquo;sin dato&raquo; antes que inventar una cifra. Las
        calculadoras no rellenan por ti los importes de seguro o mantenimiento.
      </p>

      <h2>Estado actual</h2>
      <p>
        Muchas fichas están marcadas como <strong>&laquo;ficha en revisión&raquo;</strong>: los
        campos técnicos y las averías son un punto de partida editorial que estamos contrastando
        con documentación oficial y fecha de revisión. Mientras tengan esa marca, trátalas como
        una guía orientativa, no como cifras cerradas, y verifica siempre el vehículo concreto
        antes de comprar.
      </p>
      <p>
        Las secciones de <strong>campañas y llamadas a revisión</strong> proceden de la base de
        datos pública de la NHTSA de Estados Unidos y se etiquetan como tales: son datos del
        mercado estadounidense y no sustituyen a una comprobación del historial del vehículo en
        España.
      </p>
    </Prose>
  );
}
