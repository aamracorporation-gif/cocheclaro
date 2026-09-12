import type { Generation } from "@/lib/types";

const REVIEWED = "2026-09-01";

/**
 * Generaciones. Dataset de DEMOSTRACIÓN: los textos son plausibles y están
 * redactados a partir de los campos estructurados, pero deben revisarse y
 * respaldarse con fuentes antes de publicar en producción (status: published).
 */

/** Atajo para las fichas ampliadas: fija los campos de estado por defecto. */
function g(
  x: Omit<Generation, "status" | "dataStatus" | "reviewedAt"> &
    Partial<Pick<Generation, "status" | "dataStatus" | "reviewedAt">>,
): Generation {
  return { status: "published", dataStatus: "demo", reviewedAt: REVIEWED, ...x };
}

const baseGenerations: Generation[] = [
  /* ── BMW ─────────────────────────────────────────────────── */
  {
    id: "bmw:serie-1:f40", modelId: "bmw:serie-1", code: "F40", slug: "f40",
    startYear: 2019, endYear: 2024, bodyType: "Compacto 5 puertas", lengthMm: 4319, bootLitres: 380,
    oneLiner: "El primer Serie 1 con tracción delantera: más espacio dentro, menos sabor 'BMW' al volante.",
    intro:
      "La tercera generación del BMW Serie 1 (F40) abandonó la tracción trasera de sus antecesores y pasó a la plataforma delantera UKL compartida con MINI y el X1. A cambio ganó habitabilidad trasera y maletero. Tiene sentido para quien quiere un compacto premium bien acabado y con buena tecnología, y no le importa perder el tacto trasero. El comprador debe fijarse en el motor concreto (los 118i/118d son los más razonables) y en el estado de la caja automática de doble embrague en las versiones más potentes.",
    verdict:
      "Compacto premium sólido y práctico si aceptas que ya no conduce como un Serie 1 clásico. El 118d es la versión más equilibrada de ocasión.",
    strengths: ["Interior bien acabado y con buena multimedia", "Más espacio atrás y mejor maletero que la generación anterior", "Motores diésel muy sobrios en viaje"],
    watchouts: ["Cadena de distribución y EGR en el B47 diésel", "Tirones o retenciones de la caja DCT en frío en versiones potentes", "Neumáticos runflat caros de reemplazar"],
    faq: [
      { q: "¿El Serie 1 F40 tiene tracción trasera?", a: "No. Es el primer Serie 1 con tracción delantera (o total xDrive en las versiones tope). Si buscas tracción trasera necesitas un F20/F21 anterior." },
      { q: "¿Qué motor lleva el 118d F40?", a: "El diésel 2.0 de la familia B47 (código B47D20), con unos 150 CV y 350 Nm." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "bmw:serie-2-gran-coupe:f44", modelId: "bmw:serie-2-gran-coupe", code: "F44", slug: "f44",
    startYear: 2020, endYear: 2024, bodyType: "Berlina 4 puertas", lengthMm: 4526, bootLitres: 430,
    oneLiner: "Un Serie 1 con carrocería de berlina-coupé y portón: imagen a cambio de espacio en las plazas traseras.",
    intro:
      "El Serie 2 Gran Coupé (F44) comparte plataforma y mecánicas con el Serie 1 F40, pero con una carrocería de cuatro puertas de línea coupé y portón trasero. Es una compra emocional: se elige por diseño. Mecánicamente valen los mismos consejos que para el Serie 1: elegir bien el motor y revisar la caja automática.",
    verdict: "Misma base que el Serie 1 F40 con carrocería más atractiva y algo menos de espacio útil atrás. Elige el motor con cabeza.",
    strengths: ["Estética diferenciada frente a compactos convencionales", "Buen equipamiento tecnológico", "Comportamiento seguro y previsible"],
    watchouts: ["Altura libre trasera justa para adultos altos", "Mismos puntos mecánicos que el Serie 1 F40", "Precio de ocasión aún alto respecto a alternativas"],
    faq: [
      { q: "¿Es lo mismo que un Serie 1?", a: "Comparte plataforma y motores con el Serie 1 F40, pero con carrocería de berlina-coupé de cuatro puertas." },
      { q: "¿Cabe bien una familia?", a: "Delante va sobrado; atrás el espacio para la cabeza es ajustado por la caída del techo." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "bmw:serie-3:g20", modelId: "bmw:serie-3", code: "G20", slug: "g20",
    startYear: 2019, endYear: 2024, bodyType: "Berlina 4 puertas", lengthMm: 4709, bootLitres: 480,
    oneLiner: "La berlina de referencia por dinámica y consumo: el 320d G20 sigue siendo el patrón a batir.",
    intro:
      "La séptima generación del BMW Serie 3 (G20) mantiene la tracción trasera y afina el equilibrio entre confort y dinámica. Es una de las berlinas más buscadas de ocasión en España por su combinación de imagen, tacto de conducción y consumos bajos en autovía. El comprador debe centrarse en el 320d por versatilidad, revisar el historial de mantenimiento con sellos oficiales y comprobar el estado de la cadena de distribución del diésel y de la caja automática ZF de 8 marchas.",
    verdict:
      "Sigue siendo la berlina de referencia para quien hace kilómetros. El 320d G20 con mantenimiento al día es una compra muy sólida.",
    strengths: ["Tracción trasera y chasis muy equilibrado", "Consumo de autovía muy bajo en el 320d", "Caja automática ZF de 8 marchas excelente"],
    watchouts: ["Cadena de distribución del B47 (revisar ruido en frío)", "Fugas por la bomba de agua eléctrica en el B48 gasolina", "Costes de mantenimiento y neumáticos superiores a la media"],
    faq: [
      { q: "¿Qué motor lleva el BMW 320d G20?", a: "El diésel 2.0 turbo de la familia B47 (B47D20), con unos 190 CV y 400 Nm, asociado casi siempre a la caja automática de 8 marchas." },
      { q: "¿El 320d G20 tiene distribución por correa o cadena?", a: "Por cadena, situada en la parte trasera del motor. Conviene atender a cualquier ruido metálico en arranque en frío y usar el aceite y los intervalos que indica la marca." },
      { q: "¿Es mejor el 318d o el 320d?", a: "El 320d ofrece bastante más empuje por muy poco más de consumo. El 318d tiene sentido si el precio de compra es sensiblemente menor." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "bmw:serie-3:f30", modelId: "bmw:serie-3", code: "F30", slug: "f30",
    startYear: 2012, endYear: 2019, bodyType: "Berlina 4 puertas", lengthMm: 4633, bootLitres: 480,
    oneLiner: "El Serie 3 de ocasión más abundante: buenas dinámicas y motores conocidos, con puntos débiles bien identificados.",
    intro:
      "La sexta generación del Serie 3 (F30) es hoy una de las berlinas de segunda mano más ofertadas en España. Mecánicamente hay dos mundos: los primeros motores N47 diésel, con fama de cadena de distribución delicada, y los posteriores B47, más fiables. En gasolina, el N20 y luego el B48. Es una compra interesante por precio si se elige bien el motor y se revisa el historial.",
    verdict: "Compra racional si aciertas con el motor: busca preferentemente B47 diésel o B48 gasolina y huye de un N47 sin historial de cadena.",
    strengths: ["Oferta amplia y precios ya contenidos", "Dinámica de conducción muy buena para su antigüedad", "Motores B47/B48 con buena reputación"],
    watchouts: ["Cadena de distribución en los diésel N47 (2012-2014)", "Consumo de aceite y carbonilla en gasolina de inyección directa", "Fugas de la caja de aguas que mojan la electrónica bajo el salpicadero"],
    faq: [
      { q: "¿Qué motores del Serie 3 F30 hay que evitar?", a: "El diésel N47 de los primeros años sin historial claro de la cadena de distribución. Los B47 posteriores son más tranquilos." },
      { q: "¿El 320d F30 es fiable?", a: "Con el motor B47 (a partir de 2015 aproximadamente) y mantenimiento correcto, es una mecánica robusta y muy sobria." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "bmw:serie-5:g30", modelId: "bmw:serie-5", code: "G30", slug: "g30",
    startYear: 2017, endYear: 2023, bodyType: "Berlina 4 puertas", lengthMm: 4936, bootLitres: 530,
    oneLiner: "Berlina grande de viaje: el 520d G30 combina consumo de compacto con espacio y confort de representación.",
    intro:
      "La séptima generación del Serie 5 (G30) es una berlina de gran turismo muy capaz para quien hace muchos kilómetros de autovía. El 520d ofrece consumos sorprendentemente bajos para el tamaño del coche; el 530d añade el refinamiento del seis en línea. Hay que vigilar el equipamiento (muchas unidades muy equipadas encarecen las reparaciones) y el estado de la suspensión neumática trasera si la monta.",
    verdict: "Mucho coche por el dinero en el mercado de ocasión. El 520d es la opción sensata; el 530d, el capricho razonable.",
    strengths: ["Confort y aislamiento de nivel superior", "520d con consumos muy bajos para su tamaño", "Tecnología de asistencia a la conducción avanzada"],
    watchouts: ["Suspensión neumática trasera (coste elevado si falla)", "EGR y cadena en el B47 diésel", "Reparaciones de electrónica y equipamiento caras"],
    faq: [
      { q: "¿Cuánto consume un 520d G30?", a: "En viaje puede moverse en torno a 5-5,5 l/100 km reales según conducción; en uso mixto sube ligeramente." },
      { q: "¿Merece la pena el 530d frente al 520d?", a: "El 530d es más suave y contundente, pero más caro de comprar y mantener. Para uso normal, el 520d cumple de sobra." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },

  /* ── Audi ────────────────────────────────────────────────── */
  {
    id: "audi:a3:8y", modelId: "audi:a3", code: "8Y", slug: "8y",
    startYear: 2020, bodyType: "Compacto (Sportback y Sedán)", lengthMm: 4343, bootLitres: 380,
    oneLiner: "El compacto premium 'de manual': acabados, tecnología y el conocido 2.0 TDI para quien hace kilómetros.",
    intro:
      "La cuarta generación del Audi A3 (8Y) usa la plataforma MQB evo del Grupo VW, compartida con Golf 8, León 4 y Octavia 4. Es una compra racional: buena percepción de calidad, mecánicas conocidas y red de servicio amplia. El comprador debe decidir entre el 1.5 TSI (gasolina, uso urbano-mixto) y el 2.0 TDI (diésel, muchos kilómetros), y revisar el comportamiento de la caja S tronic en las versiones que la montan.",
    verdict: "Opción segura de compacto premium. 30 TDI/35 TDI para carretera, 35 TFSI para ciudad. Revisa la S tronic y el software actualizado.",
    strengths: ["Calidad percibida y tecnología a bordo", "2.0 TDI muy sobrio en viaje", "Piezas y servicio disponibles en toda España"],
    watchouts: ["Tirones del 1.5 TSI a baja carga en primeras series (actualización de software)", "Mantenimiento de EGR/AdBlue en el 2.0 TDI", "Mecatrónica de la caja S tronic en unidades con mucho uso urbano"],
    faq: [
      { q: "¿Qué diferencia hay entre el A3 8Y y el Golf 8?", a: "Comparten plataforma, motores y cajas. Cambian el diseño, los acabados interiores y el ajuste de suspensión; a nivel mecánico los consejos de compra son casi idénticos." },
      { q: "¿1.5 TSI o 2.0 TDI en el A3 8Y?", a: "El 1.5 TSI para uso mayoritariamente urbano y pocos kilómetros al año; el 2.0 TDI si haces más de 20.000 km anuales con mucha carretera." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "audi:a3:8v", modelId: "audi:a3", code: "8V", slug: "8v",
    startYear: 2012, endYear: 2020, bodyType: "Compacto (Sportback, Sedán, Cabrio)", lengthMm: 4310, bootLitres: 380,
    oneLiner: "Uno de los compactos premium de ocasión más vendidos: mecánica MQB conocida y amplia oferta.",
    intro:
      "La tercera generación del A3 (8V) inauguró la plataforma MQB y es hoy una compra de ocasión muy habitual. Los motores 1.6 TDI y 2.0 TDI (familia EA288) y el 1.4/1.5 TSI en gasolina están muy rodados. Conviene comprobar consumo de aceite en algunos gasolina antiguos y el estado de la distribución.",
    verdict: "Compra de ocasión madura y previsible. El 2.0 TDI EA288 con historial es de lo más recomendable del segmento por ese precio.",
    strengths: ["Amplísima oferta y precios ajustados", "Mecánicas diésel EA288 sobrias y conocidas", "Buena habitabilidad para su tamaño"],
    watchouts: ["Consumo de aceite en gasolina EA211 de primeras series", "Volante bimasa y EGR en diésel con muchos kilómetros", "Desgaste de la mecatrónica DSG en uso urbano intensivo"],
    faq: [
      { q: "¿El A3 8V 1.6 TDI es fiable?", a: "Con mantenimiento correcto es un diésel sobrio y duradero; sufre más si el uso es solo urbano y de trayectos cortos por el filtro de partículas." },
      { q: "¿Lleva correa o cadena de distribución?", a: "Los diésel EA288 y los TSI EA211 usan correa con intervalo de sustitución; respétalo aunque el coche vaya bien." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "audi:a4:b9", modelId: "audi:a4", code: "B9", slug: "b9",
    startYear: 2015, endYear: 2023, bodyType: "Berlina y Avant", lengthMm: 4762, bootLitres: 460,
    oneLiner: "La berlina premium 'de kilómetros': 2.0 TDI, buen aislamiento y consumo bajo en autovía.",
    intro:
      "La generación B9 del Audi A4 es una de las berlinas premium más compradas por profesionales que hacen muchos kilómetros. El 2.0 TDI (150 o 190 CV) es el motor lógico; el 35 TFSI gasolina para quien rueda menos. Revisar el sistema AdBlue, la EGR y —en versiones quattro— el estado del embrague Haldex y de la transmisión.",
    verdict: "Berlina de viaje muy competente. El 2.0 TDI 190 CV con caja S tronic y mantenimiento oficial es la combinación más buscada.",
    strengths: ["Aislamiento y confort de marcha de nivel alto", "2.0 TDI con consumos de autovía muy bajos", "Interior duradero y bien construido"],
    watchouts: ["Averías del sistema AdBlue/SCR en algunas unidades", "Consumo de aceite en el 2.0 TFSI de primeras series", "Coste de mantenimiento de la tracción quattro"],
    faq: [
      { q: "¿A4 2.0 TDI de 150 o 190 CV?", a: "El de 190 CV va notablemente más holgado y suele venir con caja automática; el de 150 CV es suficiente para uso tranquilo y algo más barato de comprar." },
      { q: "¿El A4 B9 gasta mucho aceite?", a: "Los diésel no deberían; en algunos 2.0 TFSI gasolina de los primeros años sí conviene vigilar el nivel entre revisiones." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "audi:a5:f5", modelId: "audi:a5", code: "F5", slug: "f5",
    startYear: 2016, endYear: 2024, bodyType: "Coupé, Sportback y Cabrio", lengthMm: 4733, bootLitres: 465,
    oneLiner: "El A4 B9 con carrocería más atractiva: mismo fondo mecánico, imagen de coupé y Sportback práctico.",
    intro:
      "El Audi A5 F5 comparte plataforma y mecánicas con el A4 B9. El Sportback de cinco puertas es el más práctico y buscado. Valen los mismos consejos que para el A4: elegir entre 2.0 TDI y gasolina según kilómetros, y revisar AdBlue, distribución y, en quattro, la transmisión.",
    verdict: "Si te gusta la estética y no necesitas el maletero de un Avant, es un A4 B9 con más encanto. El 40 TDI Sportback es la versión estrella de ocasión.",
    strengths: ["Diseño más deseable que la berlina equivalente", "Sportback combina línea coupé y portón práctico", "Mecánicas compartidas con el A4, bien conocidas"],
    watchouts: ["Mismos puntos que el A4 B9 (AdBlue, EGR, distribución)", "Cabrio: revisar capota y sellados", "Precio de ocasión con prima respecto al A4"],
    faq: [
      { q: "¿El A5 Sportback es un coupé?", a: "Es una carrocería de cinco puertas con portón y línea de coupé; combina estética e maletero práctico." },
      { q: "¿Comparte motor con el A4?", a: "Sí, la gama mecánica es esencialmente la misma que la del A4 B9." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },

  /* ── Mercedes-Benz ───────────────────────────────────────── */
  {
    id: "mercedes-benz:clase-a:w177", modelId: "mercedes-benz:clase-a", code: "W177", slug: "w177",
    startYear: 2018, endYear: 2025, bodyType: "Compacto 5 puertas y Sedán", lengthMm: 4419, bootLitres: 370,
    oneLiner: "Compacto premium con el salpicadero MBUX de dos pantallas: mucha imagen, mecánica a elegir con cuidado.",
    intro:
      "La cuarta generación de la Clase A (W177) marcó tendencia por su interior digital. Mecánicamente comparte diésel con Renault en las versiones de acceso (180 d) y estrena el OM654 propio en las superiores (200 d). En gasolina, el 1.3 co-desarrollado con Renault (160/180) y el 2.0 M264 (250). El comprador debe revisar la caja de doble embrague 7G-DCT y el mantenimiento del sistema AdBlue.",
    verdict: "Atractivo por diseño y tecnología. El A 200 d con el OM654 propio es la versión diésel a buscar; evita cadenas de mantenimiento incompletas.",
    strengths: ["Interior MBUX moderno y bien acabado", "OM654 (200 d) muy silencioso y sobrio", "Buena insonorización para un compacto"],
    watchouts: ["Tirones de la caja 7G-DCT en frío y en maniobras", "Motor 1.3 (base Renault) con historial de consumo de aceite en algunos lotes", "Reparaciones de electrónica y pantallas caras"],
    faq: [
      { q: "¿Qué motor lleva el Mercedes A 180 d?", a: "Un diésel 1.5 de origen Renault (familia OM608), con unos 95-116 CV según año." },
      { q: "¿La caja automática de la Clase A da problemas?", a: "La 7G-DCT de doble embrague puede mostrar tirones a baja velocidad; conviene probar en frío y revisar si tiene actualizaciones de software aplicadas." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "mercedes-benz:cla:c118", modelId: "mercedes-benz:cla", code: "C118", slug: "c118",
    startYear: 2019, endYear: 2025, bodyType: "Berlina coupé y Shooting Brake", lengthMm: 4688, bootLitres: 460,
    oneLiner: "La Clase A con silueta de coupé de cuatro puertas: se compra por diseño, mecánica idéntica.",
    intro:
      "El CLA C118 comparte plataforma y motores con la Clase A W177, con una carrocería más baja y estilizada. El Shooting Brake añade practicidad. Los consejos de compra son los mismos que para la Clase A: elegir bien el motor, revisar la 7G-DCT y el mantenimiento del AdBlue.",
    verdict: "Un Clase A más deseable estéticamente y algo menos práctico. El CLA 200 d Shooting Brake es la versión más equilibrada de ocasión.",
    strengths: ["Diseño exterior muy logrado", "Shooting Brake combina estética y maletero", "Mismo interior tecnológico que la Clase A"],
    watchouts: ["Visibilidad trasera y acceso a plazas traseras justos", "Mismos puntos mecánicos que la Clase A W177", "Precio de ocasión elevado"],
    faq: [
      { q: "¿El CLA es más grande que la Clase A?", a: "Es más largo y más bajo; por dentro el espacio para la cabeza atrás es más ajustado." },
      { q: "¿Shooting Brake o berlina?", a: "El Shooting Brake ofrece un maletero más útil y mejor acceso, con la misma estética de coupé en el lateral." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "mercedes-benz:clase-c:w206", modelId: "mercedes-benz:clase-c", code: "W206", slug: "w206",
    startYear: 2021, bodyType: "Berlina y Estate", lengthMm: 4751, bootLitres: 455,
    oneLiner: "Berlina premium con interior 'de Clase S en pequeño': toda la gama microhibridada.",
    intro:
      "La quinta generación de la Clase C (W206) apuesta por un interior muy digital y una gama de motores 2.0 (gasolina M264 y diésel OM654) con hibridación ligera de 48 V, además de variantes híbridas enchufables. Es una compra premium para quien prioriza confort y tecnología. Hay que valorar la complejidad electrónica y el coste de reparación fuera de garantía.",
    verdict: "Berlina de gama alta muy completa y confortable. El C 220 d es la opción de ocasión más razonable para hacer kilómetros.",
    strengths: ["Confort de marcha y aislamiento sobresalientes", "Diésel OM654 sobrio y refinado", "Interior tecnológico muy cuidado"],
    watchouts: ["Complejidad del sistema de 48 V y su electrónica", "Coste de reparaciones fuera de garantía", "Maletero reducido en las versiones híbridas enchufables"],
    faq: [
      { q: "¿Todas las Clase C W206 son híbridas?", a: "Todas llevan al menos hibridación ligera de 48 V; además hay versiones híbridas enchufables con autonomía eléctrica real de varias decenas de kilómetros." },
      { q: "¿Qué autonomía eléctrica tiene la C 300 e?", a: "La híbrida enchufable homologa en torno a 100 km WLTP; en uso real suele quedarse algo por debajo." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },

  /* ── Volkswagen ──────────────────────────────────────────── */
  {
    id: "volkswagen:golf:mk8", modelId: "volkswagen:golf", code: "Mk8", slug: "mk8",
    startYear: 2020, bodyType: "Compacto 5 puertas y Variant", lengthMm: 4284, bootLitres: 381,
    oneLiner: "El compacto de referencia: mecánica intachable, interior digital que dividió a los compradores.",
    intro:
      "La octava generación del Golf mantiene la plataforma MQB evo y la gama de motores 1.0/1.5 TSI, 2.0 TDI y variantes mild-hybrid eTSI. Es un coche mecánicamente muy competente; la polémica se centró en el interior táctil y el software de infoentretenimiento de las primeras series, mejorado con actualizaciones. El comprador debe verificar que el sistema multimedia esté actualizado y probar la respuesta de la caja DSG.",
    verdict: "Sigue siendo el patrón del segmento a nivel mecánico. Busca una unidad con el software al día y elige eTSI o TDI según kilómetros.",
    strengths: ["Motores TSI/TDI muy conocidos y con buena red de servicio", "Comportamiento equilibrado y buen aislamiento", "Consumos contenidos, sobre todo en eTSI y TDI"],
    watchouts: ["Software de infoentretenimiento de las primeras series (2020-2021)", "Tirones del 1.5 TSI a baja carga sin la actualización aplicada", "Climatización y controles táctiles poco intuitivos"],
    faq: [
      { q: "¿El Golf 8 tiene problemas de software?", a: "Las primeras series (2020-2021) tuvieron fallos de infoentretenimiento y conectividad. Volkswagen publicó actualizaciones; conviene confirmar que estén instaladas." },
      { q: "¿Qué es un Golf eTSI?", a: "Una versión gasolina TSI con hibridación ligera de 48 V y caja DSG, que permite navegar 'a vela' con el motor parado y reduce algo el consumo." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "volkswagen:golf:mk7", modelId: "volkswagen:golf", code: "Mk7", slug: "mk7",
    startYear: 2012, endYear: 2020, bodyType: "Compacto 5 puertas y Variant", lengthMm: 4258, bootLitres: 380,
    oneLiner: "Probablemente el compacto de ocasión más recomendable por precio: mecánica MQB muy rodada.",
    intro:
      "La séptima generación del Golf es una de las compras de ocasión más seguras del mercado español. Motores 1.2/1.4 TSI, 1.6/2.0 TDI (EA288) y la deportiva GTI. Hay que distinguir el pre-restyling del restyling de 2017 (mejor multimedia) y vigilar consumo de aceite en algunos TSI antiguos y la mecatrónica DSG.",
    verdict: "Compra de ocasión de bajo riesgo si el historial está claro. El 1.6 TDI o el 1.5 TSI del restyling son las apuestas más tranquilas.",
    strengths: ["Fiabilidad global y red de talleres enorme", "Amplísima oferta en todos los presupuestos", "Buen confort y aislamiento para su antigüedad"],
    watchouts: ["Consumo de aceite en 1.4 TSI de primeras series", "Mecatrónica DSG (DQ200) en uso urbano intensivo", "Bomba de agua/termostato de plástico en TSI"],
    faq: [
      { q: "¿Qué Golf 7 comprar de segunda mano?", a: "Preferiblemente del restyling (2017 en adelante), con motor 1.6 TDI o 1.5 TSI y caja manual o DSG con historial de mantenimiento." },
      { q: "¿El DSG del Golf 7 da problemas?", a: "La caja seca DQ200 puede necesitar reparación de mecatrónica en coches muy urbanos; la DSG húmeda de las versiones más potentes es más robusta." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "volkswagen:polo:aw", modelId: "volkswagen:polo", code: "AW (Mk6)", slug: "aw",
    startYear: 2017, bodyType: "Utilitario 5 puertas", lengthMm: 4053, bootLitres: 351,
    oneLiner: "Utilitario 'que parece un Golf pequeño': espacio, seguridad y el 1.0 TSI como motor lógico.",
    intro:
      "La sexta generación del Polo (plataforma MQB A0) creció hasta ofrecer un maletero y una habitabilidad notables para el segmento B. El 1.0 TSI de 95/110 CV es el motor recomendable; el 1.0 MPI atmosférico se queda corto con carga. Revisar el software multimedia del restyling de 2021 y el estado de la caja DSG si la monta.",
    verdict: "Uno de los mejores utilitarios para uso familiar ocasional. El 1.0 TSI 95/110 con caja manual es la compra más equilibrada.",
    strengths: ["Espacio interior y maletero de referencia en el segmento", "1.0 TSI elástico y sobrio", "Buena dotación de seguridad en versiones recientes"],
    watchouts: ["1.0 MPI atmosférico justo de fuerza con el coche cargado", "Carbonilla en admisión del TSI con uso solo urbano", "Multimedia de primeras series algo lenta"],
    faq: [
      { q: "¿El Polo AW es tan grande como un Golf antiguo?", a: "En habitabilidad y maletero se acerca mucho a un Golf de hace dos generaciones." },
      { q: "¿1.0 MPI o 1.0 TSI?", a: "El TSI turbo es claramente preferible salvo que el uso sea exclusivamente urbano y sin carga; el MPI atmosférico rinde poco en cuesta o cargado." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "volkswagen:tiguan:ad1", modelId: "volkswagen:tiguan", code: "AD1 (Mk2)", slug: "ad1",
    startYear: 2016, endYear: 2024, bodyType: "SUV", lengthMm: 4509, bootLitres: 615,
    oneLiner: "El SUV familiar 'sin sorpresas': maletero grande, mecánica MQB conocida y buena imagen de ocasión.",
    intro:
      "La segunda generación del Tiguan es uno de los SUV compactos más vendidos de la década en España. Motores 1.5 TSI, 2.0 TSI y 2.0 TDI, con tracción delantera o total 4Motion. El comprador debe elegir motor según kilómetros, revisar el embrague Haldex y la caja DSG, y confirmar el estado del software del restyling de 2020.",
    verdict: "SUV familiar de bajo riesgo. El 2.0 TDI 150 4Motion para quien hace kilómetros; el 1.5 TSI para uso urbano-mixto.",
    strengths: ["Maletero muy amplio y modularidad de asientos", "Mecánicas TSI/TDI muy conocidas", "Buena habitabilidad y confort"],
    watchouts: ["Mantenimiento del Haldex (aceite) en versiones 4Motion", "Mecatrónica DSG en uso urbano", "Bomba de agua de los TSI"],
    faq: [
      { q: "¿El Tiguan 4Motion necesita mantenimiento especial?", a: "Sí, el embrague Haldex de la tracción total requiere cambio de aceite periódico que muchos propietarios omiten." },
      { q: "¿Qué maletero tiene el Tiguan Mk2?", a: "En torno a 615 litros con los asientos traseros adelantados, uno de los mejores del segmento." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },

  /* ── SEAT / CUPRA / Škoda ────────────────────────────────── */
  {
    id: "seat:ibiza:kj", modelId: "seat:ibiza", code: "KJ (6F)", slug: "kj",
    startYear: 2017, bodyType: "Utilitario 5 puertas", lengthMm: 4059, bootLitres: 355,
    oneLiner: "El 'Polo español': misma base MQB A0, precio algo más ajustado y estética más joven.",
    intro:
      "La quinta generación del SEAT Ibiza comparte plataforma MQB A0 con el Polo AW. Motores 1.0 MPI, 1.0 TSI y 1.5 TSI. El 1.0 TSI de 95/110 CV es la opción lógica. Revisar multimedia del restyling de 2021 y el estado de embrague y caja.",
    verdict: "Utilitario racional y bien resuelto. El 1.0 TSI 95 con caja manual es la compra más sensata de ocasión.",
    strengths: ["Buen espacio y maletero para el segmento", "1.0 TSI sobrio y suficiente", "Precio de ocasión más contenido que el Polo"],
    watchouts: ["1.0 MPI flojo con carga o en cuesta", "Carbonilla en admisión del TSI en uso urbano", "Plásticos interiores algo justos en versiones básicas"],
    faq: [
      { q: "¿La Ibiza KJ es igual que el Polo?", a: "Comparten plataforma, motores y muchas piezas. Cambian diseño, ajuste de chasis y equipamiento; los consejos mecánicos son equivalentes." },
      { q: "¿Qué motor de la Ibiza es más recomendable?", a: "El 1.0 TSI de 95 o 110 CV, por equilibrio entre prestaciones, consumo y fiabilidad." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "seat:leon:kl", modelId: "seat:leon", code: "KL (Mk4)", slug: "kl",
    startYear: 2020, bodyType: "Compacto 5 puertas y Sportstourer", lengthMm: 4368, bootLitres: 380,
    oneLiner: "El compacto 'valor seguro' del Grupo VW en clave deportiva y a mejor precio que Golf o A3.",
    intro:
      "La cuarta generación del SEAT León (KL) comparte plataforma MQB evo con Golf 8, A3 8Y y Octavia 4. Gama 1.0/1.5 TSI, eTSI mild-hybrid, 2.0 TDI y la híbrida enchufable e-Hybrid. Mismo consejo que en sus hermanos: verificar software de infoentretenimiento y probar la DSG.",
    verdict: "Toda la mecánica del Golf 8 con una imagen más dinámica y precio de ocasión inferior. El 2.0 TDI 150 o el 1.5 eTSI son las apuestas seguras.",
    strengths: ["Mecánicas compartidas con Golf/A3, bien conocidas", "Sportstourer con maletero muy útil", "Precio de ocasión atractivo frente a sus hermanos premium"],
    watchouts: ["Software multimedia de las primeras series", "Tirones del 1.5 TSI sin actualización", "e-Hybrid: revisar salud de la batería y cargador"],
    faq: [
      { q: "¿El León Mk4 comparte motor con el Golf 8?", a: "Sí, la gama mecánica y las cajas de cambio son esencialmente las mismas." },
      { q: "¿Merece la pena el León e-Hybrid de ocasión?", a: "Si puedes cargarlo a diario y haces trayectos cortos, el consumo se desploma; si no vas a enchufarlo, no compensa el sobreprecio ni el peso extra." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "seat:ateca:5fp", modelId: "seat:ateca", code: "5FP", slug: "5fp",
    startYear: 2016, bodyType: "SUV", lengthMm: 4386, bootLitres: 510,
    oneLiner: "SUV compacto sobre base de León: dinámico de conducir y con mecánicas del Grupo VW.",
    intro:
      "El SEAT Ateca comparte plataforma MQB con León, Golf y Tiguan. Motores 1.0/1.5 TSI, 2.0 TSI y 2.0 TDI, con opción de tracción total 4Drive. Es de los SUV compactos más agradables de conducir. Revisar Haldex en 4Drive y la caja DSG.",
    verdict: "SUV compacto equilibrado y bien resuelto. El 1.5 TSI para ciudad y el 2.0 TDI 4Drive para quien necesita tracción y kilómetros.",
    strengths: ["Comportamiento dinámico por encima de la media del segmento", "Buen maletero y habitabilidad", "Mecánicas conocidas y red de servicio amplia"],
    watchouts: ["Mantenimiento del Haldex en 4Drive", "Mecatrónica DSG en uso urbano", "Multimedia básica algo pobre en versiones de acceso"],
    faq: [
      { q: "¿El Ateca es un Tiguan más barato?", a: "Comparten plataforma y motores, pero el Ateca es algo más corto, más económico y con un ajuste de chasis más dinámico." },
      { q: "¿Necesito la tracción total 4Drive?", a: "Solo si vives en zona de nieve habitual, arrastras remolque o haces pistas; para uso normal, la tracción delantera basta y consume menos." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "cupra:formentor:km7", modelId: "cupra:formentor", code: "KM7", slug: "km7",
    startYear: 2020, bodyType: "SUV coupé", lengthMm: 4450, bootLitres: 420,
    oneLiner: "El primer modelo propio de CUPRA: SUV coupé con gama que va del 1.5 TSI al VZ de más de 300 CV.",
    intro:
      "El CUPRA Formentor usa plataforma MQB evo. La gama abarca desde el 1.5 TSI cumplidor hasta el 2.0 TSI VZ de altas prestaciones con tracción total, pasando por híbridos enchufables e-Hybrid. El comprador debe definir muy bien qué versión quiere: el coste de mantenimiento y neumáticos de un VZ no tiene nada que ver con el de un 1.5.",
    verdict: "SUV coupé con personalidad. El 1.5 TSI 150 para uso normal; el VZ solo si asumes su consumo, sus gomas y su seguro.",
    strengths: ["Diseño diferenciado y buena calidad percibida", "Gama muy amplia de prestaciones", "Chasis capaz y divertido en versiones altas"],
    watchouts: ["Costes de neumáticos y frenos elevados en VZ", "Software de infoentretenimiento de primeras series", "e-Hybrid: maletero reducido y necesidad de cargar para amortizarlo"],
    faq: [
      { q: "¿Qué motor lleva el Formentor VZ?", a: "El 2.0 TSI de la familia EA888 con 310-333 CV según versión y año, con tracción total y caja DSG." },
      { q: "¿El Formentor 1.5 TSI es suficiente?", a: "Para uso diario y viajes sí; mueve el coche con soltura aunque no ofrezca las prestaciones de las versiones VZ." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "cupra:leon:kl", modelId: "cupra:leon", code: "KL", slug: "kl",
    startYear: 2020, bodyType: "Compacto 5 puertas y Sportstourer", lengthMm: 4368, bootLitres: 380,
    oneLiner: "El León deportivo hecho marca aparte: del 1.5 eTSI al 2.0 TSI de 300 CV y el e-Hybrid enchufable.",
    intro:
      "El CUPRA León comparte plataforma con el SEAT León KL pero con enfoque prestacional. Las versiones más buscadas son el 2.0 TSI de 245/300 CV y el e-Hybrid. Revisar embrague/caja DSG, salud de la batería en e-Hybrid y estado de frenos y neumáticos en las versiones potentes.",
    verdict: "Compacto deportivo con buena relación prestaciones/precio en ocasión. El 2.0 TSI 245 es el punto dulce; el 300 exige más presupuesto de uso.",
    strengths: ["Prestaciones altas por el dinero", "Base MQB conocida y fiable", "Sportstourer une deportividad y maletero"],
    watchouts: ["Desgaste de neumáticos y frenos", "Software multimedia de primeras series", "e-Hybrid: revisar batería y cargador"],
    faq: [
      { q: "¿CUPRA León o Formentor?", a: "Comparten mecánica; el León es más ligero y ágil, el Formentor tiene imagen de SUV y postura de conducción más alta." },
      { q: "¿El 2.0 TSI de 300 CV lleva tracción total?", a: "En carrocería Sportstourer sí; en 5 puertas la versión de 300 CV suele ser de tracción delantera con diferencial autoblocante." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "skoda:octavia:nx", modelId: "skoda:octavia", code: "NX (Mk4)", slug: "nx",
    startYear: 2019, bodyType: "Berlina liftback y Combi", lengthMm: 4689, bootLitres: 600,
    oneLiner: "El rey del maletero por el dinero: espacio de segmento superior con mecánica del Grupo VW.",
    intro:
      "La cuarta generación del Škoda Octavia sobre MQB evo es la referencia en relación espacio/precio. Motores 1.0/1.5 TSI, eTSI, 2.0 TDI y e-Tec/e-Hybrid. El 2.0 TDI 150 es el motor lógico para quien hace kilómetros; el Combi ofrece un maletero enorme. Revisar software multimedia y caja DSG.",
    verdict: "La compra racional definitiva si necesitas espacio. Octavia Combi 2.0 TDI 150 con historial es de lo más recomendable del mercado.",
    strengths: ["Maletero y habitabilidad de clase superior", "2.0 TDI muy sobrio en viaje", "Detalles prácticos 'Simply Clever'"],
    watchouts: ["Software de infoentretenimiento de primeras series", "Tirones del 1.5 TSI sin actualización", "Mecatrónica DSG en uso urbano intensivo"],
    faq: [
      { q: "¿Qué maletero tiene el Octavia Combi Mk4?", a: "En torno a 640 litros en el Combi y 600 en el liftback, cifras de segmento superior." },
      { q: "¿El Octavia es un Golf con más maletero?", a: "Comparte plataforma y motores con el Golf 8, con más longitud, más espacio y precio más ajustado." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "skoda:karoq:nu", modelId: "skoda:karoq", code: "NU", slug: "nu",
    startYear: 2017, bodyType: "SUV", lengthMm: 4382, bootLitres: 521,
    oneLiner: "SUV compacto práctico y sin dramas: el Ateca checo, con asientos traseros VarioFlex opcionales.",
    intro:
      "El Škoda Karoq comparte plataforma MQB con Ateca y Tiguan. Motores 1.0/1.5 TSI y 2.0 TDI, con opción 4x4. Los asientos traseros VarioFlex (extraíbles individualmente) son un plus de practicidad poco común. Revisar Haldex en 4x4 y caja DSG.",
    verdict: "SUV familiar racional y bien acabado. El 1.5 TSI para ciudad y el 2.0 TDI 150 para carretera; busca los asientos VarioFlex si priorizas modularidad.",
    strengths: ["Practicidad y modularidad (VarioFlex)", "Buen maletero y habitabilidad", "Mecánicas del Grupo VW bien conocidas"],
    watchouts: ["Mantenimiento del Haldex en 4x4", "Mecatrónica DSG en uso urbano", "Multimedia básica pobre en acabados de acceso"],
    faq: [
      { q: "¿Qué son los asientos VarioFlex del Karoq?", a: "Tres asientos traseros independientes que se deslizan y se pueden extraer del coche por completo, dejando una zona de carga plana muy amplia." },
      { q: "¿El Karoq es igual que el SEAT Ateca?", a: "Comparten plataforma y motores; cambian diseño, equipamiento y algunos detalles de practicidad." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },

  /* ── Toyota ──────────────────────────────────────────────── */
  {
    id: "toyota:corolla:e210", modelId: "toyota:corolla", code: "E210", slug: "e210",
    startYear: 2019, bodyType: "Compacto 5 puertas, Sedán y Touring Sports", lengthMm: 4370, bootLitres: 361,
    oneLiner: "El compacto híbrido de referencia por fiabilidad y consumo urbano: casi cero sorpresas mecánicas.",
    intro:
      "La duodécima generación del Toyota Corolla (E210) se vende en España casi exclusivamente con mecánica híbrida (1.8 de 122 CV y 2.0 de 152/196 CV de sistema). Es una de las compras de ocasión más tranquilas que existen: sin embrague convencional, sin correa de distribución, sin turbo y con baterías que están demostrando gran durabilidad. El Touring Sports añade practicidad.",
    verdict: "Si buscas tranquilidad y bajo consumo urbano, es difícil de superar. El 1.8 para ciudad; el 2.0 si quieres más brío en carretera.",
    strengths: ["Fiabilidad mecánica sobresaliente", "Consumo urbano muy bajo (frecuentemente 4-5 l/100 km)", "Mantenimiento barato y espaciado"],
    watchouts: ["El cambio e-CVT 'estira' de revoluciones al acelerar con fuerza", "Maletero justo en la carrocería 5 puertas", "Insonorización mejorable frente a rivales premium"],
    faq: [
      { q: "¿Cuánto dura la batería del Corolla híbrido?", a: "La batería de tracción está diseñada para la vida del coche; hay muchas unidades con más de 200.000 km sin sustituirla. Toyota ofrece extensión de garantía si se hacen las revisiones oficiales." },
      { q: "¿El Corolla híbrido se enchufa?", a: "No. Es un híbrido autorrecargable: recupera energía en frenadas y retenciones, no necesita cable." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "toyota:yaris:xp210", modelId: "toyota:yaris", code: "XP210", slug: "xp210",
    startYear: 2020, bodyType: "Utilitario 5 puertas", lengthMm: 3940, bootLitres: 286,
    oneLiner: "Utilitario híbrido con consumos de récord en ciudad y la fiabilidad marca de la casa.",
    intro:
      "La cuarta generación del Toyota Yaris estrena plataforma GA-B y mecánica híbrida 1.5 de 116 CV de sistema (además de un 1.5 gasolina de acceso). En ciudad es de los coches de combustión más eficientes que se pueden comprar. El maletero es pequeño y el espacio trasero justo; a cambio, muy poco que temer mecánicamente.",
    verdict: "El utilitario ideal para uso urbano y periurbano. El híbrido 116 con etiqueta ECO es la versión a buscar.",
    strengths: ["Consumo urbano excepcional", "Fiabilidad y mantenimiento económico", "Buena dotación de seguridad (Toyota Safety Sense)"],
    watchouts: ["Maletero y plazas traseras reducidos", "Ruido de motor al acelerar con fuerza (e-CVT)", "Tacto de plásticos interiores algo justo"],
    faq: [
      { q: "¿El Yaris híbrido tiene etiqueta ECO?", a: "Sí, el Yaris híbrido autorrecargable tiene etiqueta ECO de la DGT." },
      { q: "¿Yaris híbrido o Yaris 1.5 gasolina?", a: "El híbrido consume bastante menos en ciudad y tiene mejor etiqueta; el 1.5 gasolina puro solo compensa si el precio de compra es muy inferior y el uso es de carretera." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "toyota:c-hr:ngx10", modelId: "toyota:c-hr", code: "AX10 (2ª gen)", slug: "ax10",
    startYear: 2023, bodyType: "SUV coupé", lengthMm: 4362, bootLitres: 388,
    oneLiner: "SUV coupé de diseño rompedor con mecánica híbrida Toyota y opción enchufable.",
    intro:
      "La segunda generación del Toyota C-HR mantiene la apuesta por el diseño llamativo y añade una versión híbrida enchufable a las híbridas 1.8 y 2.0 convencionales. Comparte la fiabilidad del resto de la gama híbrida de Toyota. La visibilidad trasera y el espacio para la cabeza atrás siguen siendo puntos flojos.",
    verdict: "Si te entra por los ojos, la mecánica no te va a dar disgustos. El 2.0 híbrido es la versión más equilibrada; el PHEV solo si vas a enchufarlo.",
    strengths: ["Diseño exterior muy diferenciado", "Fiabilidad de la mecánica híbrida Toyota", "Buen equipamiento de serie"],
    watchouts: ["Visibilidad trasera reducida", "Espacio para la cabeza en plazas traseras justo", "PHEV: sobreprecio que solo se amortiza cargando a diario"],
    faq: [
      { q: "¿El C-HR se enchufa?", a: "La segunda generación ofrece una versión híbrida enchufable (PHEV) además de las híbridas autorrecargables." },
      { q: "¿Cuánto consume el C-HR híbrido?", a: "En uso mixto ronda 5 l/100 km; en ciudad puede bajar de esa cifra con conducción suave." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },

  /* ── Nissan ──────────────────────────────────────────────── */
  {
    id: "nissan:qashqai:j12", modelId: "nissan:qashqai", code: "J12", slug: "j12",
    startYear: 2021, bodyType: "SUV", lengthMm: 4425, bootLitres: 504,
    oneLiner: "El SUV que inventó el segmento, ahora con micro-hibridación y el peculiar sistema e-Power.",
    intro:
      "La tercera generación del Nissan Qashqai (J12) ofrece el 1.3 TCe mild-hybrid (co-desarrollado con Mercedes) y el sistema e-Power, en el que un motor de gasolina actúa solo como generador y las ruedas las mueve un motor eléctrico. El comprador debe entender bien la diferencia: el e-Power conduce como un eléctrico pero reposta gasolina, con consumos buenos en ciudad y más altos en autopista.",
    verdict: "SUV familiar bien resuelto. El 1.3 TCe 140 para uso convencional; el e-Power si haces mucha ciudad y te gusta el tacto eléctrico.",
    strengths: ["Habitabilidad y maletero holgados", "e-Power ofrece conducción suave tipo eléctrico", "Buen equipamiento tecnológico"],
    watchouts: ["Consumo del e-Power en autopista más alto de lo esperado", "Historial de consumo de aceite del 1.3 TCe en primeras series", "CVT en versiones TCe con caja automática: tacto 'elástico'"],
    faq: [
      { q: "¿Cómo funciona el Qashqai e-Power?", a: "Un motor de gasolina genera electricidad y un motor eléctrico mueve las ruedas. No se enchufa y no tiene modo puramente térmico a las ruedas." },
      { q: "¿El 1.3 TCe del Qashqai da problemas?", a: "Las primeras series del 1.3 TCe (2019-2021, también en Renault) tuvieron casos de consumo de aceite; en el J12 conviene revisar niveles e historial." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "nissan:juke:f16", modelId: "nissan:juke", code: "F16", slug: "f16",
    startYear: 2019, bodyType: "SUV", lengthMm: 4210, bootLitres: 422,
    oneLiner: "SUV pequeño de diseño atrevido sobre plataforma de Clio: motor 1.0 TCe y opción híbrida.",
    intro:
      "La segunda generación del Nissan Juke se apoya en la plataforma CMF-B de la Alianza (Clio, Captur). Motor 1.0 TCe de 114 CV y, desde 2022, una versión híbrida 1.6. Más práctico que el Juke original pero aún con maletero y plazas traseras algo justos. Revisar la caja DCT de doble embrague en las versiones automáticas.",
    verdict: "SUV urbano con personalidad. El 1.0 TCe manual para uso sencillo; el híbrido si haces mucha ciudad.",
    strengths: ["Diseño diferenciado", "Plataforma moderna compartida con Clio/Captur", "Versión híbrida eficiente en ciudad"],
    watchouts: ["Caja DCT de doble embrague en versiones automáticas", "Espacio trasero y maletero ajustados", "1.0 TCe algo justo con el coche cargado"],
    faq: [
      { q: "¿El Juke comparte mecánica con el Clio?", a: "Sí, comparte plataforma CMF-B y el motor 1.0 TCe con Clio y Captur." },
      { q: "¿Hay Juke híbrido?", a: "Desde 2022 se ofrece el Juke Hybrid con el sistema E-Tech 1.6 de la Alianza." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },

  /* ── Peugeot ─────────────────────────────────────────────── */
  {
    id: "peugeot:208:p21", modelId: "peugeot:208", code: "P21 (2ª gen)", slug: "p21",
    startYear: 2019, bodyType: "Utilitario 5 puertas", lengthMm: 4055, bootLitres: 311,
    oneLiner: "Utilitario de diseño e interior i-Cockpit; motor PureTech 1.2 con un asterisco importante sobre la correa.",
    intro:
      "La segunda generación del Peugeot 208 ofrece gasolina PureTech 1.2, diésel BlueHDi 1.5 y la variante eléctrica e-208. El PureTech 1.2 turbo tiene buenas prestaciones y consumo, pero las series de 2019-2021 arrastran la mala fama de la correa de distribución 'húmeda' (bañada en aceite), que puede degradarse antes de tiempo y obstruir el circuito de lubricación. Es imprescindible comprobar si se ha sustituido y con qué kit.",
    verdict: "Bonito y bien equipado, pero con el PureTech 1.2 hay que verificar sí o sí el estado y el historial de la correa de distribución.",
    strengths: ["Diseño exterior e interior atractivos", "PureTech 1.2 elástico y sobrio si está sano", "e-208 como opción eléctrica urbana"],
    watchouts: ["Correa de distribución 'húmeda' del PureTech (series 2019-2021)", "Volante pequeño del i-Cockpit incómodo para algunas posturas", "Multimedia lenta en versiones de acceso"],
    faq: [
      { q: "¿Qué problema tiene la correa del Peugeot 208 PureTech?", a: "En motores 1.2 PureTech de 2019-2021, la correa de distribución va bañada en aceite y puede deshacerse antes de lo previsto, soltando partículas que obstruyen el filtro de aceite y la bomba. Conviene revisarla y adelantarse a su sustitución con el kit actualizado." },
      { q: "¿El BlueHDi 1.5 del 208 es más fiable?", a: "El diésel 1.5 no tiene ese problema de correa, pero exige cuidar el sistema AdBlue y no es ideal para uso solo urbano." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "peugeot:308:p5", modelId: "peugeot:308", code: "P5 (3ª gen)", slug: "p5",
    startYear: 2021, bodyType: "Compacto 5 puertas y SW", lengthMm: 4367, bootLitres: 412,
    oneLiner: "Compacto de imagen renovada con PureTech, BlueHDi e híbrido enchufable; SW muy práctico.",
    intro:
      "La tercera generación del Peugeot 308 estrena la plataforma EMP2 evolucionada y una imagen más afilada. Gama PureTech 1.2, BlueHDi 1.5, híbrido enchufable y, más tarde, híbrido de 48 V. El PureTech de esta etapa cambió a cadena de distribución en algunas versiones, lo que reduce (que no elimina) la preocupación del motor anterior. El SW ofrece un maletero excelente.",
    verdict: "Compacto atractivo y bien planteado. Verifica si el PureTech de la unidad concreta lleva cadena o correa y su historial.",
    strengths: ["Diseño y calidad percibida al alza", "SW con maletero muy amplio", "Consumos contenidos en BlueHDi y en el mHEV"],
    watchouts: ["Confirmar tipo de distribución del PureTech (cadena/correa) según año y versión", "Ergonomía del i-Cockpit no gusta a todo el mundo", "PHEV: maletero y precio penalizados si no se carga"],
    faq: [
      { q: "¿El PureTech del 308 nuevo sigue teniendo el problema de la correa?", a: "Stellantis fue introduciendo mejoras y cadena en parte de la gama. Hay que verificar la ficha del motor concreto y su plan de mantenimiento." },
      { q: "¿Qué maletero tiene el 308 SW?", a: "En torno a 600 litros, de los mejores del segmento de familiares compactos." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "peugeot:3008:p84", modelId: "peugeot:3008", code: "P84 (2ª gen)", slug: "p84",
    startYear: 2016, endYear: 2023, bodyType: "SUV", lengthMm: 4447, bootLitres: 520,
    oneLiner: "SUV compacto de interior vistoso y buen maletero; gama PureTech, BlueHDi e híbrido enchufable.",
    intro:
      "La segunda generación del Peugeot 3008 destacó por su interior i-Cockpit y su relación equipamiento/precio. Motores PureTech 1.2/1.6, BlueHDi 1.5/2.0 e híbrido enchufable Hybrid/Hybrid4. Aplican las mismas cautelas del PureTech con la correa en las primeras series y del sistema AdBlue en los diésel.",
    verdict: "SUV familiar con mucho gancho visual. El BlueHDi 1.5/2.0 con historial es la opción más tranquila; con PureTech, revisar correa.",
    strengths: ["Interior llamativo y bien equipado", "Buen maletero y habitabilidad", "BlueHDi 2.0 con buena reputación de fiabilidad"],
    watchouts: ["Correa 'húmeda' del PureTech en series iniciales", "Sistema AdBlue/SCR en los diésel", "Hybrid4: coste de mantenimiento y batería"],
    faq: [
      { q: "¿Qué motor del 3008 es más fiable?", a: "El diésel BlueHDi 2.0 tiene muy buena reputación; el 1.5 BlueHDi también, cuidando AdBlue. En gasolina, verificar el estado de la correa del PureTech." },
      { q: "¿El 3008 Hybrid4 tiene tracción total?", a: "Sí, el Hybrid4 añade un motor eléctrico en el eje trasero que le da tracción total en determinadas condiciones." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },

  /* ── Renault / Dacia ─────────────────────────────────────── */
  {
    id: "renault:clio:bja", modelId: "renault:clio", code: "BJA (5ª gen)", slug: "bja",
    startYear: 2019, bodyType: "Utilitario 5 puertas", lengthMm: 4050, bootLitres: 391,
    oneLiner: "Utilitario superventas con buen interior, maletero de referencia y una eficiente versión híbrida E-Tech.",
    intro:
      "La quinta generación del Renault Clio sobre plataforma CMF-B ofrece gasolina TCe 1.0, GLP, y el híbrido E-Tech 1.6, uno de los sistemas más eficientes del segmento en ciudad. El maletero es de los mayores de su clase. Revisar el 1.3 TCe (en versiones que lo montan) por el historial de consumo de aceite en primeras series y el tacto de la caja EDC de doble embrague.",
    verdict: "Uno de los mejores utilitarios del mercado. El E-Tech híbrido para ciudad, el TCe 90/100 para uso sencillo, el GLP para minimizar coste por kilómetro.",
    strengths: ["Maletero y habitabilidad de referencia", "Híbrido E-Tech muy eficiente en ciudad", "Interior bien acabado para el segmento"],
    watchouts: ["Consumo de aceite del 1.3 TCe en primeras series", "Caja EDC de doble embrague: tirones a baja velocidad", "Multimedia básica pobre en acabados de acceso"],
    faq: [
      { q: "¿El Clio E-Tech se enchufa?", a: "No. Es un híbrido autorrecargable con una pequeña batería que se carga en marcha; tiene etiqueta ECO." },
      { q: "¿Qué motor lleva el Clio TCe 90?", a: "El tricilíndrico 1.0 TCe turbo (familia H4D), con unos 90-100 CV según año." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "renault:megane:bfb", modelId: "renault:megane", code: "BFB (4ª gen)", slug: "bfb",
    startYear: 2016, endYear: 2022, bodyType: "Compacto 5 puertas y Sport Tourer", lengthMm: 4359, bootLitres: 384,
    oneLiner: "Compacto cómodo y de buen maletero (sobre todo el familiar), con el conocido 1.5 dCi como motor lógico.",
    intro:
      "La cuarta generación del Renault Mégane ofrece gasolina TCe 1.2/1.3 y diésel 1.5/1.6 dCi, además de una versión híbrida enchufable E-Tech al final de su vida comercial. El 1.5 dCi (Blue dCi en las últimas series) es un diésel muy sobrio y probado. El Sport Tourer familiar tiene un maletero muy útil. Revisar caja EDC y, en dCi, turbo y volante bimasa con kilómetros.",
    verdict: "Compacto confortable y sin grandes sorpresas. El Blue dCi 115 con historial es la compra racional; el Sport Tourer si necesitas maletero.",
    strengths: ["Confort de suspensión por encima de la media", "1.5 dCi muy sobrio y conocido", "Sport Tourer con buen maletero"],
    watchouts: ["Consumo de aceite del 1.3 TCe en primeras series", "Caja EDC de doble embrague en uso urbano", "Turbo y volante bimasa del dCi con muchos kilómetros"],
    faq: [
      { q: "¿El 1.5 dCi del Mégane es fiable?", a: "Es uno de los diésel más fabricados de Europa; con mantenimiento correcto es muy duradero. Sufre más en uso exclusivamente urbano por el filtro de partículas." },
      { q: "¿Qué maletero tiene el Mégane Sport Tourer?", a: "En torno a 550-580 litros, de los mejores entre los familiares compactos." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "renault:captur:hjb", modelId: "renault:captur", code: "HJB (2ª gen)", slug: "hjb",
    startYear: 2019, bodyType: "SUV", lengthMm: 4227, bootLitres: 422,
    oneLiner: "SUV urbano práctico con banqueta trasera deslizante y una eficiente versión híbrida E-Tech.",
    intro:
      "La segunda generación del Renault Captur comparte plataforma CMF-B con el Clio. Ofrece TCe 1.0/1.3, GLP, híbrido E-Tech y también híbrido enchufable E-Tech Plug-in. La banqueta trasera corredera permite priorizar espacio para las piernas o para el maletero. Revisar el 1.3 TCe (consumo de aceite en primeras series) y la caja EDC.",
    verdict: "SUV pequeño versátil y bien resuelto. El E-Tech híbrido para ciudad; el TCe 90/GLP para minimizar coste; el PHEV solo si lo enchufas.",
    strengths: ["Modularidad de la banqueta trasera deslizante", "Híbrido E-Tech eficiente en ciudad", "Buena imagen y calidad percibida"],
    watchouts: ["Consumo de aceite del 1.3 TCe en primeras series", "Caja EDC de doble embrague en uso urbano", "PHEV: maletero reducido y sobreprecio si no se carga"],
    faq: [
      { q: "¿El Captur comparte mecánica con el Clio?", a: "Sí, plataforma CMF-B y toda la gama de motores, incluidos el híbrido E-Tech y el TCe." },
      { q: "¿Hay Captur híbrido enchufable?", a: "Sí, el E-Tech Plug-in con una autonomía eléctrica de unas pocas decenas de kilómetros." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "dacia:sandero:b8", modelId: "dacia:sandero", code: "B8 (3ª gen)", slug: "b8",
    startYear: 2020, bodyType: "Utilitario 5 puertas", lengthMm: 4088, bootLitres: 328,
    oneLiner: "El coche nuevo más barato del mercado, ahora con plataforma moderna y mecánica probada del Grupo Renault.",
    intro:
      "La tercera generación del Dacia Sandero adopta la plataforma CMF-B del Clio, lo que mejora mucho seguridad y comportamiento. Motores TCe 1.0 gasolina y, sobre todo, la versión ECO-G bifuel gasolina/GLP, muy popular por su bajo coste por kilómetro. Mecánica sencilla y barata de mantener; equipamiento justo pero suficiente.",
    verdict: "Imbatible en coste de uso, sobre todo en GLP. El TCe 100 ECO-G es la versión estrella para quien quiere gastar poco.",
    strengths: ["Coste de compra y mantenimiento muy bajo", "Versión GLP con gran ahorro de combustible", "Plataforma moderna compartida con Clio"],
    watchouts: ["Insonorización y materiales básicos", "TCe 90/100 justo con el coche muy cargado", "Equipamiento de asistencias limitado en acabados de acceso"],
    faq: [
      { q: "¿El Sandero GLP pierde maletero?", a: "El depósito de GLP se aloja en el hueco de la rueda de repuesto, por lo que el maletero apenas se ve afectado." },
      { q: "¿Cuánto se ahorra con el Sandero GLP?", a: "El GLP cuesta aproximadamente la mitad por litro que la gasolina; aunque el consumo en litros sube algo, el gasto por kilómetro baja de forma notable." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "dacia:duster:hm", modelId: "dacia:duster", code: "HM (3ª gen)", slug: "hm",
    startYear: 2024, bodyType: "SUV", lengthMm: 4343, bootLitres: 472,
    oneLiner: "SUV con capacidad real fuera del asfalto a precio de utilitario; ahora con opción híbrida.",
    intro:
      "La tercera generación del Dacia Duster estrena la plataforma CMF-B y añade una versión híbrida 1.6 a la gama TCe y ECO-G GLP. Mantiene una opción 4x4 con reductora poco habitual en el segmento por el precio. Es un coche honesto: pocas florituras, buen despeje y mecánica conocida.",
    verdict: "El SUV más coche-por-el-dinero del mercado. TCe/ECO-G para uso normal; 4x4 si de verdad pisas tierra; híbrido para ciudad.",
    strengths: ["Relación capacidad/precio imbatible", "Opción 4x4 real poco común a este precio", "Mecánicas probadas del Grupo Renault"],
    watchouts: ["Materiales y insonorización básicos", "Híbrido: menos capacidad todoterreno que el 4x4", "Equipamiento de asistencias limitado en acabados bajos"],
    faq: [
      { q: "¿El Duster híbrido tiene tracción total?", a: "No. La versión híbrida es de tracción delantera; la tracción total 4x4 se ofrece con motores TCe/ECO-G." },
      { q: "¿El Duster 4x4 lleva reductora?", a: "Monta un sistema de tracción total con modos de conducción; no es un todoterreno con reductora clásica, pero su capacidad en pista supera a la media de SUV del segmento." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },

  /* ── Ford ────────────────────────────────────────────────── */
  {
    id: "ford:focus:mk4", modelId: "ford:focus", code: "Mk4", slug: "mk4",
    startYear: 2018, endYear: 2025, bodyType: "Compacto 5 puertas y Sportbreak", lengthMm: 4378, bootLitres: 375,
    oneLiner: "El compacto que mejor se conduce de su segmento; 1.0 EcoBoost y 1.5 EcoBlue como motores lógicos.",
    intro:
      "La cuarta generación del Ford Focus destaca por su comportamiento dinámico y su confort de marcha. Motores 1.0 EcoBoost gasolina (con mHEV de 48 V desde 2020) y 1.5 EcoBlue diésel. El EcoBoost 1.0 de esta etapa resolvió los problemas de refrigeración de generaciones anteriores; el EcoBlue 1.5 usa correa de distribución 'húmeda' con intervalo estricto.",
    verdict: "Si valoras cómo se conduce un coche, es la referencia del segmento. 1.0 EcoBoost mHEV para uso mixto; 1.5 EcoBlue para muchos kilómetros, cuidando la correa.",
    strengths: ["Dinámica y tacto de conducción sobresalientes", "1.0 EcoBoost mHEV suave y sobrio", "Buen confort de suspensión"],
    watchouts: ["Correa de distribución 'húmeda' del 1.5 EcoBlue (intervalo estricto)", "Caja automática de 8 marchas: revisar tacto y actualizaciones", "Multimedia SYNC 3 algo desfasada en las primeras series"],
    faq: [
      { q: "¿El 1.0 EcoBoost del Focus Mk4 da problemas de refrigeración?", a: "Los fallos del tubo de degas que afectaron a generaciones anteriores están corregidos en el Focus Mk4, especialmente en las versiones mHEV de 48 V." },
      { q: "¿Cada cuánto se cambia la correa del 1.5 EcoBlue?", a: "Es una correa bañada en aceite con un intervalo de sustitución que conviene respetar de forma estricta (consultar el plan de mantenimiento de la unidad concreta)." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "ford:fiesta:mk8", modelId: "ford:fiesta", code: "Mk8", slug: "mk8",
    startYear: 2017, endYear: 2023, bodyType: "Utilitario 3 y 5 puertas", lengthMm: 4040, bootLitres: 292,
    oneLiner: "El utilitario más divertido de conducir de su época; 1.0 EcoBoost con o sin microhibridación.",
    intro:
      "La octava (y última) generación del Ford Fiesta mantiene el chasis más aplaudido del segmento B. Motor 1.0 EcoBoost gasolina en varias potencias, con mHEV de 48 V desde 2020, y la deportiva ST. El interior envejeció regular en materiales y multimedia, pero mecánicamente es una compra sólida en las series recientes.",
    verdict: "El utilitario para quien disfruta conduciendo. El 1.0 EcoBoost 100/125 mHEV es la compra más equilibrada de ocasión.",
    strengths: ["Comportamiento y dirección de referencia en el segmento", "1.0 EcoBoost elástico y sobrio", "Buena disponibilidad de recambios"],
    watchouts: ["Materiales interiores y multimedia justos", "Refrigeración del EcoBoost en series 2017-2019 (revisar historial)", "Plazas traseras y maletero pequeños"],
    faq: [
      { q: "¿El Fiesta Mk8 es fiable?", a: "En líneas generales sí, sobre todo a partir de 2020 con la microhibridación. Conviene revisar el historial de refrigeración en las primeras unidades." },
      { q: "¿Fiesta o Polo?", a: "El Fiesta gana en tacto de conducción; el Polo ofrece más espacio, mejor interior y una imagen de ocasión algo más valorada." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "ford:puma:mk1", modelId: "ford:puma", code: "Mk1", slug: "mk1",
    startYear: 2019, bodyType: "SUV", lengthMm: 4186, bootLitres: 456,
    oneLiner: "SUV pequeño sobre base de Fiesta: se conduce como un utilitario ágil y tiene un maletero con truco.",
    intro:
      "El Ford Puma toma el chasis del Fiesta Mk8 y añade carrocería de SUV y el 'MegaBox', un compartimento adicional impermeable bajo el suelo del maletero. Motor 1.0 EcoBoost mHEV de 48 V y, más tarde, una versión híbrida completa. Hereda las virtudes dinámicas del Fiesta con más espacio y practicidad.",
    verdict: "De los SUV pequeños más agradables de conducir. El 1.0 EcoBoost mHEV 125/155 es la compra lógica de ocasión.",
    strengths: ["Comportamiento ágil heredado del Fiesta", "Maletero grande y práctico (MegaBox)", "1.0 EcoBoost mHEV sobrio"],
    watchouts: ["Materiales interiores mejorables", "Refrigeración del EcoBoost en primeras unidades (revisar historial)", "Confort de suspensión algo firme"],
    faq: [
      { q: "¿Qué es el MegaBox del Ford Puma?", a: "Un compartimento adicional de unos 80 litros bajo el suelo del maletero, impermeable y con desagüe, útil para objetos sucios o mojados." },
      { q: "¿El Puma comparte mecánica con el Fiesta?", a: "Sí, comparte plataforma y el motor 1.0 EcoBoost; el Puma añade carrocería de SUV y más practicidad." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },

  /* ── Hyundai / Kia ──────────────────────────────────────── */
  {
    id: "hyundai:tucson:nx4", modelId: "hyundai:tucson", code: "NX4", slug: "nx4",
    startYear: 2020, bodyType: "SUV", lengthMm: 4500, bootLitres: 620,
    oneLiner: "SUV familiar de diseño rompedor, gama muy amplia (gasolina, diésel, 48 V, híbrido y enchufable) y garantía larga.",
    intro:
      "La cuarta generación del Hyundai Tucson (NX4) ofrece una de las gamas de motores más completas del segmento: 1.6 T-GDi gasolina, 1.6 CRDi diésel (con 48 V opcional), híbrido 1.6 y híbrido enchufable. Buen espacio, buen maletero y la garantía de 5 años de la marca como respaldo. Revisar la caja DCT de doble embrague en las versiones que la montan.",
    verdict: "SUV familiar muy completo y con respaldo de garantía. El híbrido 1.6 para uso mixto-urbano; el 1.6 CRDi para muchos kilómetros.",
    strengths: ["Gama de motores muy amplia", "Espacio y maletero generosos", "Garantía de fábrica de 5 años"],
    watchouts: ["Caja DCT de doble embrague: tacto en maniobras y en frío", "Híbrido enchufable: sobreprecio si no se carga", "Consumo del 1.6 T-GDi gasolina en autopista"],
    faq: [
      { q: "¿Qué motor del Tucson es más recomendable?", a: "El híbrido 1.6 para quien hace ciudad y uso mixto; el 1.6 CRDi diésel para quien supera los 20.000 km anuales con mucha carretera." },
      { q: "¿El Tucson mantiene la garantía si lo compro de segunda mano?", a: "La garantía de 5 años de Hyundai es de fábrica y se transfiere al nuevo propietario mientras esté vigente y se hayan respetado las revisiones." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "hyundai:i30:pd", modelId: "hyundai:i30", code: "PD", slug: "pd",
    startYear: 2017, endYear: 2024, bodyType: "Compacto 5 puertas, Fastback y Tourer", lengthMm: 4340, bootLitres: 395,
    oneLiner: "Compacto racional con garantía larga; 1.0/1.5 T-GDi gasolina y la deportiva i30 N como guinda.",
    intro:
      "La tercera generación del Hyundai i30 (PD) es un compacto sin grandes alardes pero muy bien resuelto, con garantía de fábrica de 5 años. Motores 1.0 T-GDi, 1.5 T-GDi (con 48 V) y, en su día, 1.6 CRDi diésel. La versión i30 N es una deportiva muy valorada. El Tourer familiar tiene buen maletero.",
    verdict: "Compra racional de compacto con respaldo de garantía. El 1.0 T-GDi para ciudad, el 1.5 T-GDi mHEV para uso mixto; el i30 N si buscas diversión.",
    strengths: ["Garantía de fábrica de 5 años", "Comportamiento equilibrado y buen confort", "Tourer con maletero amplio"],
    watchouts: ["Carbonilla en admisión de los T-GDi con uso solo urbano", "Multimedia básica en acabados de acceso", "i30 N: consumo de neumáticos y frenos"],
    faq: [
      { q: "¿El i30 es fiable?", a: "Tiene buena reputación de fiabilidad y el respaldo de la garantía de 5 años de Hyundai; los motores T-GDi requieren cuidar el aceite y evitar el uso exclusivamente de trayectos cortos." },
      { q: "¿Qué diferencia hay entre el i30 y el i30 Fastback?", a: "El Fastback es una carrocería de cinco puertas con línea de coupé y el techo más bajo; pierde algo de espacio para la cabeza atrás." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "kia:sportage:nq5", modelId: "kia:sportage", code: "NQ5", slug: "nq5",
    startYear: 2021, bodyType: "SUV", lengthMm: 4515, bootLitres: 591,
    oneLiner: "El hermano del Tucson con 7 años de garantía: misma mecánica, diseño distinto y respaldo aún mayor.",
    intro:
      "La quinta generación del Kia Sportage (NQ5) comparte plataforma y motores con el Hyundai Tucson NX4: 1.6 T-GDi, 1.6 CRDi con 48 V, híbrido 1.6 e híbrido enchufable. Su gran baza es la garantía de 7 años de Kia. Espacio y maletero generosos. Revisar la caja DCT de doble embrague.",
    verdict: "Si te convence sobre el Tucson, la garantía de 7 años inclina la balanza. El híbrido 1.6 para uso mixto; el 1.6 CRDi para carretera.",
    strengths: ["Garantía de fábrica de 7 años", "Mecánicas compartidas con el Tucson, bien conocidas", "Espacio y equipamiento generosos"],
    watchouts: ["Caja DCT de doble embrague en maniobras y en frío", "Híbrido enchufable: solo rentable cargándolo", "Consumo del 1.6 T-GDi gasolina en viaje"],
    faq: [
      { q: "¿El Sportage y el Tucson son el mismo coche?", a: "Comparten plataforma, motores y cajas. Cambian el diseño exterior e interior, el ajuste de suspensión y, sobre todo, la garantía (7 años Kia frente a 5 años Hyundai)." },
      { q: "¿La garantía de 7 años se transfiere al comprar de segunda mano?", a: "Sí, es una garantía de fábrica ligada al coche y se transfiere mientras esté vigente y con las revisiones al día." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
  {
    id: "kia:ceed:cd", modelId: "kia:ceed", code: "CD", slug: "cd",
    startYear: 2018, endYear: 2024, bodyType: "Compacto 5 puertas, SW y Fastback (ProCeed)", lengthMm: 4310, bootLitres: 395,
    oneLiner: "Compacto con 7 años de garantía; hermano del i30 con carrocería SW muy práctica.",
    intro:
      "La tercera generación del Kia Ceed (CD) comparte plataforma y motores con el Hyundai i30: 1.0/1.5 T-GDi gasolina, 1.6 CRDi diésel e híbrido enchufable en el Ceed SW. Su ventaja es la garantía de 7 años de Kia. El Ceed SW (familiar) y el ProCeed (shooting brake) amplían la oferta de carrocerías.",
    verdict: "Compra racional de compacto con la garantía más larga del mercado. El 1.0 T-GDi para ciudad y el 1.5 T-GDi mHEV para uso mixto.",
    strengths: ["Garantía de fábrica de 7 años", "Gama de carrocerías variada (5p, SW, ProCeed)", "Mecánicas compartidas con el i30, conocidas"],
    watchouts: ["Carbonilla en admisión de los T-GDi con uso solo urbano", "Multimedia básica en acabados de acceso", "PHEV solo en Ceed SW y solo rentable cargándolo"],
    faq: [
      { q: "¿El Ceed es igual que el i30?", a: "Comparten plataforma, motores y cajas; cambian diseño, equipamiento y la garantía (7 años Kia frente a 5 de Hyundai)." },
      { q: "¿Qué es el ProCeed?", a: "Una carrocería tipo shooting brake (familiar de línea deportiva y techo bajo) derivada del Ceed, solo disponible en acabados altos." },
    ],
    status: "published", dataStatus: "demo", reviewedAt: REVIEWED,
  },
];

/* ═══════════════════════════════════════════════════════════════
   FICHAS AMPLIADAS — más marcas, más modelos y generaciones
   anteriores muy presentes en el mercado de ocasión español.
   Mismo criterio: datos orientativos pendientes de verificar.
   ═══════════════════════════════════════════════════════════════ */
const extraGenerations: Generation[] = [
  /* ── Generaciones anteriores de modelos ya presentes ────── */
  g({
    id: "volkswagen:golf:mk6", modelId: "volkswagen:golf", code: "Mk6 (5K)", slug: "mk6",
    startYear: 2008, endYear: 2012, bodyType: "Compacto 5 puertas y Variant", lengthMm: 4199, bootLitres: 350,
    oneLiner: "El Golf de ocasión barato por excelencia: bien construido, pero con motores TSI y DSG de esa época a vigilar.",
    intro:
      "La sexta generación del Golf es un usado muy asequible y todavía sólido de carrocería. La clave está en el motor: el 1.4 TSI (EA111) arrastra fama de cadena de distribución y consumo de aceite, mientras que el 1.6 TDI y sobre todo el 1.9/2.0 TDI son más tranquilos. La caja DSG seca (DQ200) puede necesitar reparación de mecatrónica.",
    verdict: "Compra de bajo coste si eliges un diésel o un 1.2 TSI con historial y evitas el 1.4 TSI Twincharger sin facturas de cadena.",
    strengths: ["Precio de ocasión muy bajo", "Carrocería y acabados que envejecen bien", "Diésel 1.6/2.0 TDI sobrios y conocidos"],
    watchouts: ["Cadena de distribución y consumo de aceite en el 1.4 TSI (EA111)", "Mecatrónica de la DSG DQ200 en uso urbano", "Bomba de agua y termostato de plástico en los TSI"],
    faq: [
      { q: "¿Qué motor del Golf 6 evitar?", a: "El 1.4 TSI Twincharger (150-160 CV) sin historial de la cadena de distribución. El 1.2 TSI posterior y los diésel dan menos sustos." },
      { q: "¿El Golf 6 1.6 TDI es fiable?", a: "Con mantenimiento correcto es un diésel duradero; sufre en uso solo urbano por el filtro de partículas." },
    ],
  }),
  g({
    id: "volkswagen:polo:6r", modelId: "volkswagen:polo", code: "6R / 6C", slug: "6r",
    startYear: 2009, endYear: 2017, bodyType: "Utilitario 5 puertas", lengthMm: 3970, bootLitres: 280,
    oneLiner: "Utilitario robusto y con buen precio de ocasión; el 1.2 TSI de primeras series pide revisar la cadena.",
    intro:
      "La quinta generación del Polo es un usado muy habitual en España. Motores 1.2 (atmosférico y TSI), 1.4 y 1.2/1.6 TDI. El 1.2 TSI de 2010-2014 tuvo problemas de cadena de distribución; el restyling de 2014 (6C) mejoró multimedia y detalles.",
    verdict: "Buen utilitario de ocasión con el 1.2 atmosférico o un TDI; con 1.2 TSI, pedir facturas de la cadena.",
    strengths: ["Fiabilidad general y red de talleres amplia", "Buen comportamiento y aislamiento para el segmento", "Oferta abundante y barata"],
    watchouts: ["Cadena de distribución del 1.2 TSI (2010-2014)", "Multimedia básica en versiones anteriores al restyling", "Óxido en bajos en unidades mal cuidadas"],
    faq: [
      { q: "¿El Polo 6R 1.2 TSI da problemas?", a: "Las series 2010-2014 tuvieron fallos de cadena de distribución. Conviene revisar si se ha sustituido o elegir el 1.2 atmosférico." },
      { q: "¿Diferencia entre 6R y 6C?", a: "El 6C es el restyling de 2014: mejor multimedia, algún motor nuevo y retoques estéticos." },
    ],
  }),
  g({
    id: "seat:ibiza:6j", modelId: "seat:ibiza", code: "6J / 6P", slug: "6j",
    startYear: 2008, endYear: 2017, bodyType: "Utilitario 3 y 5 puertas", lengthMm: 4052, bootLitres: 292,
    oneLiner: "El utilitario de ocasión más común en España: barato de comprar y mantener, con motores VAG conocidos.",
    intro:
      "La cuarta generación del SEAT Ibiza compartió plataforma PQ25 con el Polo 6R. Motores 1.2/1.4 gasolina, 1.2/1.4 TSI y 1.2/1.6 TDI. El restyling de 2015 (6P) estrenó la familia EA211. Aplican las mismas cautelas de cadena en el 1.2 TSI antiguo.",
    verdict: "Compra de coste mínimo con el 1.2 atmosférico o el 1.6 TDI; con 1.2 TSI de primeras series, revisar la cadena.",
    strengths: ["Coste de compra y mantenimiento muy bajo", "Piezas y talleres en todas partes", "Motores TDI sobrios"],
    watchouts: ["Cadena de distribución del 1.2 TSI EA111", "Plásticos y multimedia básicos en las series iniciales", "Embragues y volante bimasa en diésel con muchos km"],
    faq: [
      { q: "¿La Ibiza 6J es fiable?", a: "Mecánicamente sí, sobre todo con motores atmosféricos o diésel. El punto flojo son los acabados y el 1.2 TSI antiguo." },
      { q: "¿Qué es la Ibiza 6P?", a: "El restyling de 2015, con motores de la familia EA211 (1.0 y 1.4 TSI, 1.4 TDI) y mejor equipamiento." },
    ],
  }),
  g({
    id: "seat:leon:5f", modelId: "seat:leon", code: "5F (Mk3)", slug: "5f",
    startYear: 2012, endYear: 2020, bodyType: "Compacto 3/5 puertas y ST", lengthMm: 4263, bootLitres: 380,
    oneLiner: "Compacto de ocasión muy recomendable: plataforma MQB, motores conocidos y precio por debajo de Golf VII y A3 8V.",
    intro:
      "La tercera generación del León comparte la plataforma MQB con el Golf VII. Gama 1.0/1.2/1.4 TSI, 1.6/2.0 TDI y las deportivas Cupra. El restyling de 2016 mejoró la multimedia. El ST (familiar) tiene un maletero muy útil.",
    verdict: "De lo mejor en relación calidad/precio del usado compacto. El 1.6 TDI o el 1.4 TSI del restyling son apuestas seguras.",
    strengths: ["Mecánicas MQB compartidas con Golf VII, bien conocidas", "Precio de ocasión inferior a sus hermanos premium", "ST con buen maletero"],
    watchouts: ["Consumo de aceite en 1.4 TSI de primeras series", "Mecatrónica DSG DQ200 en uso urbano", "Multimedia lenta antes del restyling de 2016"],
    faq: [
      { q: "¿El León Mk3 es un Golf VII más barato?", a: "Comparten plataforma y motores; el León suele salir más económico a igualdad de año y motor." },
      { q: "¿1.6 TDI o 1.4 TSI en el León 5F?", a: "El 1.6 TDI para muchos kilómetros de carretera; el 1.4 TSI para uso mixto y menos kilómetros al año." },
    ],
  }),
  g({
    id: "audi:a4:b8", modelId: "audi:a4", code: "B8", slug: "b8",
    startYear: 2007, endYear: 2015, bodyType: "Berlina y Avant", lengthMm: 4703, bootLitres: 480,
    oneLiner: "Berlina premium de ocasión asentada; el 2.0 TDI common-rail es el motor a buscar, el 2.0 TFSI antiguo consume aceite.",
    intro:
      "La generación B8 del A4 es un usado premium abundante. El 2.0 TDI evolucionó de bomba-inyector a common-rail (más suave y fiable). En gasolina, el 1.8/2.0 TFSI de esos años tiene fama de consumo de aceite por los segmentos. La tracción quattro añade coste de mantenimiento.",
    verdict: "Compra sólida con el 2.0 TDI common-rail (a partir de 2011 aprox.) y mantenimiento documentado.",
    strengths: ["Aislamiento y sensación de solidez", "2.0 TDI common-rail sobrio y suave", "Interior duradero"],
    watchouts: ["Consumo de aceite en 1.8/2.0 TFSI (segmentos)", "Cadena de distribución del TFSI en la zona trasera del motor", "Volante bimasa y EGR en diésel con kilómetros"],
    faq: [
      { q: "¿El A4 B8 2.0 TFSI gasta aceite?", a: "Muchas unidades 2008-2011 sí, por el diseño de los segmentos. Audi aplicó mejoras; conviene comprobar consumo antes de comprar." },
      { q: "¿Qué 2.0 TDI del A4 B8 comprar?", a: "El common-rail (CJC/CGL) a partir de 2011 aproximadamente, más refinado que el bomba-inyector inicial." },
    ],
  }),
  g({
    id: "bmw:serie-1:f20", modelId: "bmw:serie-1", code: "F20 / F21", slug: "f20",
    startYear: 2011, endYear: 2019, bodyType: "Compacto 3 y 5 puertas", lengthMm: 4324, bootLitres: 360,
    oneLiner: "El último Serie 1 con tracción trasera: tacto de conducción único en el segmento, con los puntos débiles del N47 diésel.",
    intro:
      "La segunda generación del Serie 1 (F20/F21) mantuvo la tracción trasera. Los diésel N47 de los primeros años tienen fama de cadena de distribución; los B47 posteriores, más tranquilos. En gasolina, del N13 al B38/B48. El restyling de 2015 mejoró faros y multimedia.",
    verdict: "El compacto para quien disfruta conduciendo. Busca 118d/120d con motor B47 o un 120i, y revisa el historial de cadena si es N47.",
    strengths: ["Tracción trasera y equilibrio de chasis", "Motores B47/B48 fiables", "Buen valor de reventa"],
    watchouts: ["Cadena de distribución del diésel N47 (2011-2014)", "Espacio trasero y maletero justos", "Neumáticos runflat caros"],
    faq: [
      { q: "¿El Serie 1 F20 es de tracción trasera?", a: "Sí, es el último Serie 1 con propulsión trasera (salvo variantes xDrive). El F40 posterior pasó a tracción delantera." },
      { q: "¿Qué motor diésel del F20 evitar?", a: "El N47 de los primeros años sin historial de la cadena de distribución. El B47 (desde 2015 aprox.) es más fiable." },
    ],
  }),
  g({
    id: "mercedes-benz:clase-c:w205", modelId: "mercedes-benz:clase-c", code: "W205", slug: "w205",
    startYear: 2014, endYear: 2021, bodyType: "Berlina y Estate", lengthMm: 4686, bootLitres: 480,
    oneLiner: "Berlina premium de ocasión muy deseada; el C 220 d (OM651 primero, OM654 después) es el motor de kilómetros.",
    intro:
      "La cuarta generación de la Clase C ofreció un salto de calidad percibida. Diésel OM651 2.1 hasta 2018 y OM654 2.0 (más refinado) después. El restyling de 2018 estrenó multimedia y motores. Vigilar la suspensión (algunas con neumática AIRMATIC) y el sistema de admisión de los diésel.",
    verdict: "Mucho coche premium por el dinero. El C 220 d con OM654 (2018 en adelante) es la opción más equilibrada.",
    strengths: ["Confort y aislamiento notables", "Interior con buena calidad percibida", "Amplia oferta de carrocerías y acabados"],
    watchouts: ["Colector de admisión y EGR en los diésel OM651", "Suspensión neumática AIRMATIC (coste si falla)", "Reparaciones de electrónica caras fuera de garantía"],
    faq: [
      { q: "¿OM651 u OM654 en el C 220 d W205?", a: "El OM654 (desde 2018) es bastante más silencioso y moderno. El OM651 anterior es más ruidoso pero muy probado." },
      { q: "¿La Clase C W205 tiene problemas de óxido?", a: "Algunas unidades de primeros años tuvieron corrosión prematura en zonas puntuales; conviene revisar bajos y bordes de puertas." },
    ],
  }),
  g({
    id: "nissan:qashqai:j11", modelId: "nissan:qashqai", code: "J11", slug: "j11",
    startYear: 2013, endYear: 2021, bodyType: "SUV", lengthMm: 4377, bootLitres: 430,
    oneLiner: "El SUV compacto más vendido de su época en España: práctico y cómodo, con el 1.5 dCi y el 1.2/1.3 DIG-T como motores.",
    intro:
      "La segunda generación del Qashqai fue un superventas. Motores 1.5 dCi y 1.6 dCi diésel, 1.2 y 1.3 DIG-T gasolina. La caja CVT (Xtronic) de algunas versiones tiene tacto elástico y conviene probarla bien. El 1.2 DIG-T de primeras series tuvo consumo de aceite.",
    verdict: "SUV familiar de ocasión muy racional. El 1.5 dCi con caja manual es la compra más tranquila.",
    strengths: ["Habitabilidad y confort de marcha", "1.5 dCi muy sobrio", "Oferta enorme y precios contenidos"],
    watchouts: ["Consumo de aceite en el 1.2 DIG-T (2014-2016)", "Caja CVT Xtronic: tacto y fiabilidad a largo plazo", "Turbo y volante bimasa del dCi con kilómetros"],
    faq: [
      { q: "¿El Qashqai J11 con cambio automático es fiable?", a: "La caja CVT Xtronic funciona bien mantenida, pero es cara de reparar y su tacto no gusta a todos. Pruébala en frío y en caliente." },
      { q: "¿Qué motor del Qashqai J11 comprar?", a: "El 1.5 dCi para carretera y el 1.2/1.3 DIG-T para uso urbano-mixto, revisando niveles de aceite en los 1.2 antiguos." },
    ],
  }),
  g({
    id: "renault:clio:iv", modelId: "renault:clio", code: "IV (BH)", slug: "iv",
    startYear: 2012, endYear: 2019, bodyType: "Utilitario 5 puertas", lengthMm: 4062, bootLitres: 300,
    oneLiner: "Utilitario de ocasión atractivo y barato; el 1.5 dCi es un diésel de referencia, el 0.9/1.2 TCe pide revisar aceite.",
    intro:
      "La cuarta generación del Clio popularizó el diseño de 5 puertas con manillas traseras ocultas. Motores 0.9 y 1.2 TCe gasolina, 1.5 dCi diésel y 1.2 16V atmosférico. El 1.2 TCe (H5Ft) tuvo consumo de aceite y averías de segmentos en varias unidades.",
    verdict: "Compra de bajo coste con el 1.5 dCi o el 0.9 TCe con historial; vigilar niveles de aceite en los TCe.",
    strengths: ["Diseño atractivo y buen maletero para el segmento", "1.5 dCi muy sobrio y conocido", "Precio de ocasión bajo"],
    watchouts: ["Consumo de aceite y segmentos en el 1.2 TCe (2013-2018)", "Caja automática EDC: tirones a baja velocidad", "Electrónica y multimedia con fallos ocasionales"],
    faq: [
      { q: "¿El Clio IV 1.2 TCe da problemas?", a: "Varias unidades 2013-2018 consumen aceite por desgaste de segmentos. Revisar historial y nivel entre cambios." },
      { q: "¿El 1.5 dCi del Clio IV es fiable?", a: "Es uno de los diésel más fabricados de Europa; muy duradero con mantenimiento, algo menos indicado para uso solo urbano." },
    ],
  }),
  g({
    id: "peugeot:308:t9", modelId: "peugeot:308", code: "T9 (Mk2)", slug: "t9",
    startYear: 2013, endYear: 2021, bodyType: "Compacto 5 puertas y SW", lengthMm: 4253, bootLitres: 420,
    oneLiner: "Compacto premiado en su lanzamiento; el 1.6 BlueHDi es un diésel muy sobrio, el 1.2 PureTech pide revisar la correa.",
    intro:
      "La segunda generación del 308 destacó por su ligereza y bajo consumo. Motores 1.2 PureTech gasolina y 1.5/1.6 BlueHDi diésel. El PureTech de esta etapa arrastra el asunto de la correa de distribución 'húmeda'. El SW familiar tiene un maletero excelente.",
    verdict: "Compacto eficiente y agradable. El 1.6 BlueHDi con historial es la opción más tranquila; con PureTech, verificar la correa.",
    strengths: ["Consumo real muy bajo", "SW con maletero de referencia", "Buen confort de suspensión"],
    watchouts: ["Correa de distribución 'húmeda' del 1.2 PureTech", "Sistema AdBlue en los BlueHDi", "Ergonomía del i-Cockpit no gusta a todos"],
    faq: [
      { q: "¿El 308 T9 PureTech tiene el problema de la correa?", a: "Sí, las unidades 2014-2021 con 1.2 PureTech deben revisar el estado y el historial de la correa de distribución bañada en aceite." },
      { q: "¿Qué maletero tiene el 308 SW T9?", a: "En torno a 610 litros, uno de los mejores del segmento de familiares compactos." },
    ],
  }),
  g({
    id: "ford:focus:mk3", modelId: "ford:focus", code: "Mk3", slug: "mk3",
    startYear: 2011, endYear: 2018, bodyType: "Compacto 5 puertas y Sportbreak", lengthMm: 4358, bootLitres: 316,
    oneLiner: "El compacto que mejor se conducía de su época; el 1.6 TDCi es sobrio, el 1.0 EcoBoost antiguo pide revisar la refrigeración.",
    intro:
      "La tercera generación del Focus mantuvo el listón dinámico alto. Motores 1.0 y 1.5/1.6 EcoBoost gasolina y 1.5/1.6 TDCi diésel. Los 1.0 EcoBoost de 2012-2017 tuvieron problemas de refrigeración (tubo de degas). El restyling de 2014 mejoró interior y multimedia.",
    verdict: "Compra por dinámica de conducción; el 1.6 TDCi con historial es la opción más tranquila, revisando refrigeración si es 1.0 EcoBoost.",
    strengths: ["Comportamiento y tacto de conducción de referencia", "1.6 TDCi sobrio", "Buen confort de suspensión"],
    watchouts: ["Refrigeración del 1.0 EcoBoost (2012-2017)", "Caja automática Powershift de doble embrague seco (tirones)", "Multimedia SYNC anterior al restyling"],
    faq: [
      { q: "¿La caja automática del Focus Mk3 da problemas?", a: "La Powershift de doble embrague seco tuvo tirones y desgaste; muchas unidades recibieron campañas. Pruébala con calma o elige el manual." },
      { q: "¿El 1.0 EcoBoost del Focus Mk3 es fiable?", a: "Las series 2012-2017 tuvieron fallos de refrigeración. Revisar historial de degas y bomba de agua." },
    ],
  }),
  g({
    id: "dacia:sandero:b52", modelId: "dacia:sandero", code: "B52 (2ª gen)", slug: "b52",
    startYear: 2012, endYear: 2020, bodyType: "Utilitario 5 puertas", lengthMm: 4069, bootLitres: 320,
    oneLiner: "El coche nuevo más barato de su década, ahora usado a precio de risa; mecánica Renault sencilla y conocida.",
    intro:
      "La segunda generación del Sandero usó plataforma del Clio III/IV. Motores 1.0/1.2 16V, 0.9 TCe, 1.5 dCi y la popular versión GLP. Equipamiento y materiales básicos, pero mecánica barata de mantener.",
    verdict: "Coste de uso mínimo, sobre todo en GLP o 1.5 dCi. Perfecto para quien quiere gastar lo justo.",
    strengths: ["Precio de compra y mantenimiento muy bajos", "Versión GLP con gran ahorro", "Mecánica Renault sencilla"],
    watchouts: ["Materiales e insonorización pobres", "0.9 TCe: revisar niveles de aceite", "Equipamiento de seguridad limitado en acabados bajos"],
    faq: [
      { q: "¿El Sandero B52 GLP merece la pena?", a: "Sí si haces kilómetros: el GLP cuesta la mitad por litro y el depósito va en el hueco de la rueda de repuesto, sin perder maletero." },
      { q: "¿Es fiable?", a: "Mecánicamente sí, con motores Renault muy probados. Lo justo son los acabados y el confort." },
    ],
  }),
  g({
    id: "dacia:duster:hs", modelId: "dacia:duster", code: "HS (2ª gen)", slug: "hs",
    startYear: 2017, endYear: 2024, bodyType: "SUV", lengthMm: 4341, bootLitres: 445,
    oneLiner: "SUV con capacidad real fuera del asfalto a precio de utilitario; opción 4x4 poco común en el segmento.",
    intro:
      "La segunda generación del Duster mejoró mucho el interior y el aislamiento respecto a la primera. Motores TCe 1.0/1.3 gasolina, ECO-G GLP, Blue dCi 1.5 diésel y opción 4x4. Coche honesto y funcional.",
    verdict: "El SUV más coche-por-el-dinero de ocasión. TCe/GLP para uso normal, 4x4 si de verdad pisas tierra.",
    strengths: ["Relación capacidad/precio imbatible", "Opción 4x4 real poco habitual a este precio", "Mecánicas del Grupo Renault probadas"],
    watchouts: ["Materiales e insonorización todavía básicos", "1.3 TCe: revisar historial en primeras series", "Equipamiento de asistencias limitado en acabados bajos"],
    faq: [
      { q: "¿El Duster HS 4x4 lleva reductora?", a: "No es un todoterreno con reductora clásica, pero su sistema de tracción total y su despeje superan a la media de SUV del segmento en pista." },
      { q: "¿Diésel o gasolina en el Duster HS?", a: "El Blue dCi 1.5 para muchos kilómetros; el ECO-G GLP para minimizar el gasto por kilómetro en uso mixto." },
    ],
  }),

  /* ── Volkswagen (nuevos modelos) ─────────────────────────── */
  g({
    id: "volkswagen:passat:b8", modelId: "volkswagen:passat", code: "B8 (3G)", slug: "b8",
    startYear: 2014, endYear: 2023, bodyType: "Berlina y Variant", lengthMm: 4767, bootLitres: 586,
    oneLiner: "Berlina familiar de kilómetros: 2.0 TDI sobrio, Variant con maletero enorme y confort de categoría superior.",
    intro:
      "La octava generación del Passat sobre plataforma MQB es una de las berlinas familiares más racionales de ocasión. Motores 1.4/1.5/2.0 TSI, 1.6/2.0 TDI y el híbrido enchufable GTE. El Variant tiene un maletero de referencia. Revisar la DSG y, en GTE, la batería.",
    verdict: "Mucho coche por el dinero. Passat Variant 2.0 TDI 150 con historial es de lo más recomendable en familiares.",
    strengths: ["Maletero y habitabilidad de clase superior", "2.0 TDI muy sobrio en viaje", "Confort y aislamiento notables"],
    watchouts: ["Mecatrónica DSG en uso urbano", "EGR y AdBlue en los 2.0 TDI", "GTE: revisar salud de batería y cargador"],
    faq: [
      { q: "¿Qué maletero tiene el Passat Variant B8?", a: "En torno a 650 litros con los asientos en posición normal, de los mayores del segmento." },
      { q: "¿El Passat GTE de ocasión compensa?", a: "Solo si puedes enchufarlo a diario; si no, cargas con el peso y el precio del sistema sin aprovecharlo." },
    ],
  }),
  g({
    id: "volkswagen:t-roc:a11", modelId: "volkswagen:t-roc", code: "A1 (A11)", slug: "a11",
    startYear: 2017, bodyType: "SUV", lengthMm: 4234, bootLitres: 445,
    oneLiner: "SUV compacto sobre base de Golf: dinámico de conducir, con mecánicas del Grupo VW muy conocidas.",
    intro:
      "El T-Roc comparte plataforma MQB con Golf y León. Gama 1.0/1.5 TSI, 2.0 TSI 4Motion y 2.0 TDI. El interior de primeras series usaba plásticos duros que el restyling de 2022 mejoró. Revisar DSG y, en 4Motion, el Haldex.",
    verdict: "SUV urbano ágil y sin sorpresas. El 1.5 TSI para ciudad, el 2.0 TDI para carretera.",
    strengths: ["Comportamiento dinámico por encima de la media", "Mecánicas MQB conocidas", "Buena imagen de ocasión"],
    watchouts: ["Plásticos interiores duros antes del restyling de 2022", "Mecatrónica DSG en uso urbano", "Haldex en versiones 4Motion (cambio de aceite)"],
    faq: [
      { q: "¿El T-Roc es un Golf más alto?", a: "Comparte plataforma y motores con el Golf; cambian la carrocería SUV, la posición de conducción y el ajuste de suspensión." },
      { q: "¿1.0 o 1.5 TSI en el T-Roc?", a: "El 1.0 TSI cumple en ciudad; el 1.5 TSI va más holgado en carretera y con el coche cargado." },
    ],
  }),
  g({
    id: "volkswagen:touran:5t", modelId: "volkswagen:touran", code: "5T", slug: "5t",
    startYear: 2015, bodyType: "Monovolumen 5/7 plazas", lengthMm: 4527, bootLitres: 743,
    oneLiner: "Monovolumen familiar de verdad: 7 plazas usables, maletero enorme y mecánica del Grupo VW.",
    intro:
      "La tercera generación del Touran sobre MQB es de los pocos monovolúmenes compactos que quedan. Motores 1.2/1.5 TSI y 1.6/2.0 TDI. Las plazas de la tercera fila son aprovechables para niños y el maletero con 5 plazas es enorme.",
    verdict: "La compra racional si necesitas 7 plazas de verdad. El 1.5 TSI para uso urbano-mixto, el 2.0 TDI para carretera.",
    strengths: ["Habitabilidad y maletero de referencia", "Modularidad de asientos muy práctica", "Mecánicas conocidas"],
    watchouts: ["Mecatrónica DSG en uso urbano", "Tercera fila justa para adultos", "EGR/AdBlue en los TDI"],
    faq: [
      { q: "¿El Touran 5T tiene 7 plazas de serie?", a: "Depende del acabado; muchas unidades llevan la tercera fila opcional. Verifica que la unidad concreta la tenga si la necesitas." },
      { q: "¿Qué maletero tiene con 5 plazas?", a: "Más de 700 litros, de los mayores de cualquier compacto o familiar." },
    ],
  }),
  g({
    id: "volkswagen:up:aa", modelId: "volkswagen:up", code: "AA / GG", slug: "aa",
    startYear: 2011, endYear: 2023, bodyType: "Urbano 3 y 5 puertas", lengthMm: 3600, bootLitres: 251,
    oneLiner: "El urbano bien hecho: interior aprovechado, buen tacto y el 1.0 atmosférico o el e-up! eléctrico.",
    intro:
      "El VW up! (gemelo de SEAT Mii y Škoda Citigo) es un urbano de calidad superior a la media del segmento. Motores 1.0 atmosférico de 60/75 CV, 1.0 TSI de 90/115 CV y la versión eléctrica e-up!. Mecánica sencilla y barata.",
    verdict: "El mejor urbano por refinamiento y percepción de calidad. El 1.0 atmosférico basta para ciudad; el e-up! si haces trayectos cortos.",
    strengths: ["Interior bien aprovechado y bien acabado para el segmento", "Mecánica 1.0 muy fiable y barata", "Buen tacto de conducción"],
    watchouts: ["1.0 atmosférico justo en autovía y cargado", "Equipamiento básico en acabados de acceso", "e-up!: autonomía real modesta en las primeras series"],
    faq: [
      { q: "¿El VW up! es lo mismo que el SEAT Mii?", a: "Sí, junto con el Škoda Citigo son el mismo coche con distinto emblema y pequeños detalles de equipamiento y precio." },
      { q: "¿El e-up! sirve para ciudad?", a: "Sí, es su terreno; para viajes largos la autonomía y la carga son limitadas, sobre todo en las unidades anteriores a 2020." },
    ],
  }),

  /* ── Audi (nuevos modelos) ──────────────────────────────── */
  g({
    id: "audi:q3:f3", modelId: "audi:q3", code: "F3", slug: "f3",
    startYear: 2018, bodyType: "SUV", lengthMm: 4485, bootLitres: 530,
    oneLiner: "SUV premium compacto sobre MQB: buen espacio, interior de calidad y mecánicas compartidas con Tiguan y Ateca.",
    intro:
      "La segunda generación del Q3 creció en espacio y tecnología. Motores 1.5/2.0 TSI y 2.0 TDI, con tracción quattro opcional. Comparte plataforma con Tiguan, Ateca y Karoq, así que valen los mismos consejos: revisar DSG y Haldex.",
    verdict: "SUV premium racional. El 35 TFSI para ciudad y el 35 TDI para quien hace kilómetros.",
    strengths: ["Interior de calidad y buena tecnología", "Espacio y maletero holgados", "Mecánicas conocidas del Grupo VW"],
    watchouts: ["Mecatrónica DSG en uso urbano", "Haldex en versiones quattro (mantenimiento)", "Precio de ocasión con prima frente a Tiguan/Ateca"],
    faq: [
      { q: "¿El Q3 F3 es un Tiguan premium?", a: "Comparte plataforma y motores; cambian el diseño, los acabados y el ajuste, con un precio de ocasión superior." },
      { q: "¿Necesito quattro en el Q3?", a: "Solo si vives en zona de nieve, arrastras remolque o haces pista; para uso normal la tracción delantera consume menos y basta." },
    ],
  }),
  g({
    id: "audi:q5:fy", modelId: "audi:q5", code: "FY", slug: "fy",
    startYear: 2017, bodyType: "SUV", lengthMm: 4663, bootLitres: 520,
    oneLiner: "SUV premium de kilómetros: 2.0 TDI quattro sobrio, buen confort y calidad de construcción.",
    intro:
      "La segunda generación del Q5 sobre plataforma MLB evo. Motores 2.0 TFSI y 2.0 TDI, tracción quattro de serie en la mayoría, y el híbrido enchufable 55 TFSI e. El restyling de 2020 renovó la multimedia. Vigilar el sistema de admisión de los diésel y la mecatrónica de la S tronic.",
    verdict: "SUV premium equilibrado. El 40 TDI quattro con caja S tronic y mantenimiento oficial es la combinación más buscada.",
    strengths: ["Confort y aislamiento de nivel alto", "2.0 TDI quattro sobrio en viaje", "Calidad de construcción"],
    watchouts: ["EGR y admisión en los 2.0 TDI", "Mecatrónica S tronic en uso urbano", "Coste de mantenimiento de la tracción quattro"],
    faq: [
      { q: "¿El Q5 FY 2.0 TDI consume mucho?", a: "En viaje puede moverse en torno a 6 l/100 km reales para un SUV de su tamaño y peso." },
      { q: "¿Merece la pena el Q5 55 TFSI e?", a: "Solo si cargas a diario y haces trayectos cortos; si no, el sobreprecio y el peso no compensan." },
    ],
  }),
  g({
    id: "audi:a1:gb", modelId: "audi:a1", code: "GB (Mk2)", slug: "gb",
    startYear: 2018, bodyType: "Utilitario 5 puertas", lengthMm: 4029, bootLitres: 335,
    oneLiner: "Utilitario premium sobre MQB A0: mismo fondo que Polo e Ibiza, con acabado e imagen de Audi.",
    intro:
      "La segunda generación del A1 usa la plataforma MQB A0 de Polo e Ibiza. Motores 1.0/1.5/2.0 TSI gasolina (sin diésel). Interior digital y buena percepción de calidad; el precio de ocasión mantiene una prima notable sobre sus primos.",
    verdict: "Utilitario premium si valoras la imagen y el interior. El 30 TFSI (1.0) para ciudad, el 35 TFSI (1.5) para carretera.",
    strengths: ["Percepción de calidad e imagen de marca", "Interior tecnológico", "Mecánicas 1.0/1.5 TSI conocidas"],
    watchouts: ["Sin versión diésel", "Precio de ocasión alto frente a Polo/Ibiza", "Carbonilla en admisión del TSI en uso solo urbano"],
    faq: [
      { q: "¿El A1 GB es un Polo con emblema de Audi?", a: "Comparte plataforma y motores con Polo e Ibiza; cambian diseño, acabados, tecnología y precio." },
      { q: "¿Hay A1 diésel?", a: "No, la segunda generación solo se ofreció con motores de gasolina TSI." },
    ],
  }),

  /* ── BMW (nuevos modelos) ───────────────────────────────── */
  g({
    id: "bmw:x1:f48", modelId: "bmw:x1", code: "F48", slug: "f48",
    startYear: 2015, endYear: 2022, bodyType: "SUV", lengthMm: 4447, bootLitres: 505,
    oneLiner: "El primer X1 con tracción delantera: más espacio y practicidad, con los puntos del B47 diésel a vigilar.",
    intro:
      "La segunda generación del X1 pasó a la plataforma delantera UKL (compartida con MINI y Serie 2 Active Tourer). Ganó habitabilidad y maletero. Motores B38/B48 gasolina y B47 diésel, con tracción sDrive o xDrive. Revisar cadena y EGR del B47 y la caja de doble embrague en versiones potentes.",
    verdict: "SUV compacto premium práctico. El sDrive18d con B47 y mantenimiento al día es la compra más racional.",
    strengths: ["Espacio interior y maletero muy buenos para el tamaño", "Diésel B47 sobrio en viaje", "Buena posición de conducción"],
    watchouts: ["Cadena de distribución y EGR del B47 diésel", "Caja de doble embrague en versiones más potentes", "Neumáticos runflat caros"],
    faq: [
      { q: "¿El X1 F48 es de tracción trasera?", a: "No, es el primer X1 con tracción delantera (o total xDrive en algunas versiones)." },
      { q: "¿Qué motor lleva el X1 sDrive18d F48?", a: "El diésel 2.0 de la familia B47 (B47C20), con unos 150 CV." },
    ],
  }),
  g({
    id: "bmw:x3:g01", modelId: "bmw:x3", code: "G01", slug: "g01",
    startYear: 2017, bodyType: "SUV", lengthMm: 4708, bootLitres: 550,
    oneLiner: "SUV medio premium de kilómetros: el xDrive20d combina consumo bajo, tracción total y buen aplomo.",
    intro:
      "La tercera generación del X3 sobre plataforma CLAR (trasera de base). Motores B47/B48 de 4 cilindros y B57 de 6 cilindros diésel, con tracción xDrive. El restyling de 2021 renovó la multimedia. Vigilar cadena y EGR de los diésel y, si la equipa, la suspensión adaptativa.",
    verdict: "SUV medio muy capaz. El xDrive20d con B47 y mantenimiento documentado es la opción de kilómetros.",
    strengths: ["Buen aplomo y tacto de conducción para un SUV", "xDrive20d con consumos contenidos", "Interior sólido y bien construido"],
    watchouts: ["Cadena de distribución y EGR de los diésel B47", "Coste de neumáticos y frenos", "Reparaciones de electrónica caras fuera de garantía"],
    faq: [
      { q: "¿Cuánto consume un X3 xDrive20d G01?", a: "En viaje puede moverse en torno a 6-6,5 l/100 km reales para un SUV de tracción total de ese tamaño." },
      { q: "¿20d o 30d en el X3 G01?", a: "El 30d (seis cilindros) es más suave y contundente, pero más caro de comprar y mantener. Para uso normal, el 20d cumple de sobra." },
    ],
  }),
  g({
    id: "bmw:serie-4:g22", modelId: "bmw:serie-4", code: "G22 / G23 / G26", slug: "g22",
    startYear: 2020, bodyType: "Coupé, Cabrio y Gran Coupé", lengthMm: 4768, bootLitres: 440,
    oneLiner: "El Serie 3 G20 con carrocería más atractiva: mismo fondo mecánico, imagen de coupé y Gran Coupé práctico.",
    intro:
      "La segunda generación del Serie 4 comparte plataforma y motores con el Serie 3 G20. El Gran Coupé de cinco puertas es el más práctico. Motores B48 gasolina y B47 diésel, con opción xDrive. Valen los mismos consejos que para el Serie 3.",
    verdict: "Si te gusta la estética y no necesitas el maletero de una berlina, es un Serie 3 con más encanto. El 420d Gran Coupé es la versión más equilibrada de ocasión.",
    strengths: ["Diseño más deseable que la berlina equivalente", "Gran Coupé une línea coupé y portón práctico", "Mecánicas compartidas con el Serie 3, conocidas"],
    watchouts: ["Mismos puntos que el Serie 3 G20 (cadena B47, bomba de agua B48)", "Cabrio: revisar capota y sellados", "Precio de ocasión con prima sobre el Serie 3"],
    faq: [
      { q: "¿El Serie 4 comparte motor con el Serie 3?", a: "Sí, la gama mecánica y las cajas son esencialmente las mismas que las del Serie 3 G20." },
      { q: "¿Coupé o Gran Coupé?", a: "El Gran Coupé tiene cuatro puertas, portón y más practicidad; el Coupé de dos puertas prioriza la estética." },
    ],
  }),

  /* ── Mercedes-Benz (nuevos modelos) ─────────────────────── */
  g({
    id: "mercedes-benz:clase-b:w247", modelId: "mercedes-benz:clase-b", code: "W247", slug: "w247",
    startYear: 2018, bodyType: "Monovolumen compacto", lengthMm: 4419, bootLitres: 455,
    oneLiner: "La Clase A en formato práctico: más altura, más maletero y mejor acceso, con el mismo interior MBUX.",
    intro:
      "La tercera generación de la Clase B comparte plataforma y motores con la Clase A W177. Diésel OM608 (180 d) y OM654 (200 d/220 d), gasolina 1.3 y 2.0. Interior digital MBUX. Revisar la caja 7G-DCT y el mantenimiento del AdBlue.",
    verdict: "La opción sensata si quieres un compacto premium más práctico que la Clase A. El B 200 d con OM654 es la versión diésel a buscar.",
    strengths: ["Habitabilidad y maletero superiores a la Clase A", "Buen acceso y visibilidad", "Interior MBUX moderno"],
    watchouts: ["Tirones de la caja 7G-DCT en frío y maniobras", "Mantenimiento del AdBlue en los diésel", "Reparaciones de pantallas y electrónica caras"],
    faq: [
      { q: "¿La Clase B W247 es más práctica que la Clase A?", a: "Sí: más altura interior, mejor acceso a las plazas traseras y algo más de maletero, con la misma base mecánica." },
      { q: "¿Qué motor lleva el B 180 d?", a: "Un diésel 1.5 de origen Renault (familia OM608), con unos 116 CV." },
    ],
  }),
  g({
    id: "mercedes-benz:gla:h247", modelId: "mercedes-benz:gla", code: "H247", slug: "h247",
    startYear: 2020, bodyType: "SUV", lengthMm: 4410, bootLitres: 435,
    oneLiner: "SUV compacto premium sobre la base de la Clase A: más alto y práctico, con el interior MBUX de dos pantallas.",
    intro:
      "La segunda generación del GLA comparte plataforma con la Clase A W177. Motores 1.3 y 2.0 gasolina, OM654 diésel y el híbrido enchufable 250 e. Revisar la caja de doble embrague y el AdBlue de los diésel.",
    verdict: "SUV premium compacto con buena tecnología. El GLA 200 d es la opción diésel más equilibrada de ocasión.",
    strengths: ["Interior MBUX moderno y bien acabado", "Posición de conducción alta y buen acceso", "OM654 diésel silencioso"],
    watchouts: ["Caja 7G/8G-DCT: tacto en maniobras y en frío", "Mantenimiento del AdBlue", "Maletero reducido en la versión híbrida enchufable"],
    faq: [
      { q: "¿El GLA H247 es un Clase A más alto?", a: "Comparte plataforma, motores e interior con la Clase A; añade carrocería SUV, más altura libre y una postura de conducción elevada." },
      { q: "¿Autonomía del GLA 250 e?", a: "Homologa en torno a 60-70 km eléctricos WLTP; en uso real algo menos." },
    ],
  }),
  g({
    id: "mercedes-benz:glc:x253", modelId: "mercedes-benz:glc", code: "X253", slug: "x253",
    startYear: 2015, endYear: 2022, bodyType: "SUV y SUV Coupé", lengthMm: 4656, bootLitres: 550,
    oneLiner: "SUV medio premium de kilómetros: el GLC 220 d 4MATIC combina confort, tracción total y consumo contenido.",
    intro:
      "La primera generación del GLC (sustituto del GLK) sobre plataforma de la Clase C W205. Diésel OM651 2.1 hasta 2019 y OM654 2.0 después; gasolina 2.0 y el híbrido enchufable 350 e. El restyling de 2019 renovó multimedia y motores. Vigilar admisión y EGR de los OM651.",
    verdict: "SUV medio premium racional de ocasión. El GLC 220 d 4MATIC con OM654 (2019 en adelante) es la opción más equilibrada.",
    strengths: ["Confort de marcha y aislamiento notables", "Tracción total 4MATIC de serie en muchas versiones", "Interior sólido"],
    watchouts: ["Colector de admisión y EGR en los diésel OM651", "Suspensión neumática AIRMATIC (coste si falla)", "Reparaciones de electrónica caras"],
    faq: [
      { q: "¿OM651 u OM654 en el GLC 220 d?", a: "El OM654 (desde 2019) es más silencioso y moderno; el OM651 anterior es más ruidoso pero muy probado." },
      { q: "¿El GLC Coupé pierde mucho maletero?", a: "Pierde algo de capacidad y sobre todo altura de carga frente al SUV normal, a cambio de la línea de techo descendente." },
    ],
  }),

  /* ── SEAT (nuevos modelos) ──────────────────────────────── */
  g({
    id: "seat:arona:kj7", modelId: "seat:arona", code: "KJ7", slug: "kj7",
    startYear: 2017, bodyType: "SUV", lengthMm: 4138, bootLitres: 400,
    oneLiner: "SUV pequeño sobre base de Ibiza: práctico, con buen maletero para el segmento y mecánicas 1.0/1.5 TSI.",
    intro:
      "El SEAT Arona comparte plataforma MQB A0 con la Ibiza. Motores 1.0 TSI, 1.5 TSI y, en su día, 1.6 TDI y GLP. Buen maletero y habitabilidad para un B-SUV. Revisar la DSG si la equipa.",
    verdict: "B-SUV racional y bien resuelto. El 1.0 TSI 110 con caja manual es la compra más equilibrada.",
    strengths: ["Buen maletero y habitabilidad para el segmento", "1.0 TSI elástico y sobrio", "Mecánicas conocidas del Grupo VW"],
    watchouts: ["Carbonilla en admisión del TSI en uso solo urbano", "Mecatrónica DSG en uso urbano", "Plásticos interiores algo justos en acabados de acceso"],
    faq: [
      { q: "¿El Arona es un Ibiza más alto?", a: "Comparte plataforma y motores con la Ibiza; añade carrocería SUV, más altura libre y algo más de maletero." },
      { q: "¿Hay Arona diésel?", a: "Las primeras series ofrecieron el 1.6 TDI; después la gama pasó a gasolina TSI y GLP." },
    ],
  }),
  g({
    id: "seat:tarraco:kn2", modelId: "seat:tarraco", code: "KN2", slug: "kn2",
    startYear: 2018, bodyType: "SUV 7 plazas", lengthMm: 4735, bootLitres: 700,
    oneLiner: "El SUV grande de SEAT: 7 plazas, plataforma del Tiguan Allspace y mecánicas del Grupo VW.",
    intro:
      "El Tarraco comparte plataforma MQB con Tiguan Allspace y Škoda Kodiaq. Motores 1.5/2.0 TSI y 2.0 TDI, con opción 4Drive y el híbrido enchufable e-Hybrid. Tercera fila para uso ocasional. Revisar DSG y Haldex.",
    verdict: "SUV familiar grande y racional. El 2.0 TDI 150 para quien hace kilómetros; el 1.5 TSI para uso urbano-mixto.",
    strengths: ["Espacio y maletero muy amplios", "Tercera fila usable ocasionalmente", "Mecánicas conocidas del Grupo VW"],
    watchouts: ["Mecatrónica DSG en uso urbano", "Haldex en versiones 4Drive (mantenimiento)", "e-Hybrid: maletero y precio penalizados si no se carga"],
    faq: [
      { q: "¿El Tarraco es un Kodiaq de SEAT?", a: "Comparten plataforma y motores; cambian diseño, ajuste de suspensión y equipamiento." },
      { q: "¿La tercera fila del Tarraco vale para adultos?", a: "Para trayectos cortos o niños; para adultos en viaje largo se queda justa, como en casi todos los SUV de 7 plazas de este tamaño." },
    ],
  }),

  /* ── Škoda (nuevos modelos) ─────────────────────────────── */
  g({
    id: "skoda:fabia:nj", modelId: "skoda:fabia", code: "NJ (Mk3)", slug: "nj",
    startYear: 2014, endYear: 2021, bodyType: "Utilitario 5 puertas y Combi", lengthMm: 3997, bootLitres: 330,
    oneLiner: "Utilitario práctico y racional: maletero grande para el segmento, mecánicas VAG y precio de ocasión contenido.",
    intro:
      "La tercera generación de la Fabia sobre plataforma PQ26. Motores 1.0 MPI/TSI, 1.2 TSI y 1.4 TDI. Maletero y habitabilidad de referencia en el segmento B. El restyling de 2018 mejoró faros y multimedia.",
    verdict: "Utilitario de bajo riesgo con el 1.0 TSI o el 1.0 MPI; el Combi si necesitas maletero.",
    strengths: ["Maletero y habitabilidad de referencia", "Detalles prácticos 'Simply Clever'", "Mecánica VAG conocida"],
    watchouts: ["1.0 MPI atmosférico justo con carga", "Cadena del 1.2 TSI en las primeras unidades", "Multimedia básica antes del restyling"],
    faq: [
      { q: "¿La Fabia NJ es fiable?", a: "Mecánicamente sí, sobre todo con los 1.0 atmosférico o TSI. El punto flojo son los acabados de las versiones básicas." },
      { q: "¿Qué maletero tiene la Fabia Combi?", a: "En torno a 530 litros, uno de los mayores del segmento B." },
    ],
  }),
  g({
    id: "skoda:superb:3v", modelId: "skoda:superb", code: "3V (B8)", slug: "3v",
    startYear: 2015, bodyType: "Berlina liftback y Combi", lengthMm: 4869, bootLitres: 625,
    oneLiner: "El rey del espacio a precio de berlina media: habitabilidad de clase E y mecánica del Passat.",
    intro:
      "La tercera generación del Superb sobre plataforma MQB comparte motores con el Passat B8. Gama 1.4/1.5/2.0 TSI, 1.6/2.0 TDI y el híbrido enchufable iV. El Combi tiene un maletero enorme. Revisar DSG y, en 4x4, el Haldex.",
    verdict: "La compra racional si necesitas mucho espacio por poco dinero. Superb Combi 2.0 TDI 150 con historial es de lo más recomendable.",
    strengths: ["Habitabilidad trasera y maletero de clase superior", "2.0 TDI muy sobrio en viaje", "Confort y equipamiento por el dinero"],
    watchouts: ["Mecatrónica DSG en uso urbano", "EGR/AdBlue en los 2.0 TDI", "Haldex en versiones 4x4 (mantenimiento)"],
    faq: [
      { q: "¿El Superb 3V es un Passat con más espacio?", a: "Comparte plataforma y motores con el Passat B8, con más longitud, más espacio trasero y precio más ajustado." },
      { q: "¿Qué maletero tiene el Superb Combi?", a: "En torno a 660 litros, de los mayores de cualquier familiar del mercado." },
    ],
  }),
  g({
    id: "skoda:kamiq:nw4", modelId: "skoda:kamiq", code: "NW4", slug: "nw4",
    startYear: 2019, bodyType: "SUV", lengthMm: 4241, bootLitres: 400,
    oneLiner: "B-SUV práctico y bien resuelto: maletero amplio, buena habitabilidad y mecánicas 1.0/1.5 TSI.",
    intro:
      "El Škoda Kamiq comparte plataforma MQB A0 con Ibiza y Arona. Motores 1.0 TSI, 1.5 TSI y, en su día, 1.6 TDI y GLP. Uno de los B-SUV más espaciosos y racionales. Revisar la DSG si la equipa.",
    verdict: "B-SUV racional con el 1.0 TSI 110; opción muy recomendable para uso familiar ocasional.",
    strengths: ["Maletero y habitabilidad de referencia en el segmento", "Detalles prácticos 'Simply Clever'", "1.0 TSI elástico y sobrio"],
    watchouts: ["Carbonilla en admisión del TSI en uso solo urbano", "Mecatrónica DSG en uso urbano", "Plásticos duros en acabados de acceso"],
    faq: [
      { q: "¿El Kamiq es un Arona checo?", a: "Comparten plataforma y motores; el Kamiq suele ofrecer algo más de espacio y practicidad." },
      { q: "¿1.0 o 1.5 TSI en el Kamiq?", a: "El 1.0 TSI 110 cumple de sobra; el 1.5 TSI va más holgado en carretera y cargado." },
    ],
  }),
  g({
    id: "skoda:scala:nw1", modelId: "skoda:scala", code: "NW1", slug: "nw1",
    startYear: 2019, bodyType: "Compacto 5 puertas", lengthMm: 4362, bootLitres: 467,
    oneLiner: "Compacto con maletero de familiar: el sustituto del Rapid, práctico y con mecánicas MQB A0.",
    intro:
      "El Škoda Scala sobre plataforma MQB A0 ocupa el hueco entre Fabia y Octavia. Motores 1.0 TSI, 1.5 TSI y 1.6 TDI. Su gran baza es un maletero enorme para un compacto y una habitabilidad muy buena.",
    verdict: "Compacto racional si priorizas espacio y precio. El 1.0 TSI 110 es la compra más equilibrada.",
    strengths: ["Maletero enorme para un compacto", "Buena habitabilidad", "Mecánicas conocidas y precio contenido"],
    watchouts: ["Plásticos duros en acabados de acceso", "Mecatrónica DSG en uso urbano", "Insonorización mejorable frente a rivales premium"],
    faq: [
      { q: "¿El Scala es un Octavia pequeño?", a: "Es más corto y sencillo que el Octavia, pero comparte filosofía práctica y ofrece un maletero muy grande para su tamaño." },
      { q: "¿Hay Scala diésel?", a: "Sí, con el 1.6 TDI en las primeras series; después la gama se centró en gasolina TSI." },
    ],
  }),

  /* ── Toyota (nuevos modelos) ────────────────────────────── */
  g({
    id: "toyota:rav4:xa50", modelId: "toyota:rav4", code: "XA50", slug: "xa50",
    startYear: 2018, bodyType: "SUV", lengthMm: 4600, bootLitres: 580,
    oneLiner: "SUV familiar híbrido de referencia por fiabilidad: el 2.5 Hybrid con consumo contenido y opción de tracción total.",
    intro:
      "La quinta generación del RAV4 se vende en España sobre todo con el híbrido 2.5 (218-222 CV de sistema) y también como híbrido enchufable Plug-in. Mecánica sin turbo ni embrague convencional, con la fiabilidad marca de la casa. La tracción total E-Four añade un motor eléctrico en el eje trasero.",
    verdict: "SUV familiar de tranquilidad total. El 2.5 Hybrid es la compra racional; el Plug-in solo si cargas a diario.",
    strengths: ["Fiabilidad mecánica sobresaliente", "Consumo contenido para un SUV grande", "Mantenimiento barato y espaciado"],
    watchouts: ["El cambio e-CVT 'estira' de vueltas al acelerar con fuerza", "Insonorización mejorable frente a rivales premium", "Plug-in: sobreprecio que solo se amortiza cargando"],
    faq: [
      { q: "¿El RAV4 Hybrid tiene tracción total?", a: "Opcionalmente, con el sistema E-Four que añade un motor eléctrico en el eje trasero; no hay árbol de transmisión mecánico." },
      { q: "¿Cuánto consume el RAV4 2.5 Hybrid?", a: "En uso mixto suele moverse en torno a 6 l/100 km reales, cifra baja para su tamaño y peso." },
    ],
  }),
  g({
    id: "toyota:aygo:ab40", modelId: "toyota:aygo", code: "AB40", slug: "ab40",
    startYear: 2014, endYear: 2022, bodyType: "Urbano 3 y 5 puertas", lengthMm: 3465, bootLitres: 168,
    oneLiner: "Urbano mínimo y fiable: el 1.0 VVT-i atmosférico, mantenimiento barato y cero sorpresas mecánicas.",
    intro:
      "La segunda generación del Aygo (gemelo de Peugeot 108 y Citroën C1) monta el tricilíndrico 1.0 VVT-i atmosférico. Coche pensado para ciudad: maletero mínimo y poco aislamiento, pero mecánica muy fiable y económica.",
    verdict: "Urbano puro para quien quiere gastar lo mínimo. Fiable y barato; olvídate de autovías largas.",
    strengths: ["Fiabilidad y mantenimiento muy baratos", "Fácil de aparcar y manejar en ciudad", "Consumo urbano contenido"],
    watchouts: ["Maletero y plazas traseras mínimos", "Poca insonorización y ruido en autovía", "Equipamiento básico en acabados de acceso"],
    faq: [
      { q: "¿El Aygo AB40 es el mismo coche que el Peugeot 108?", a: "Sí, junto con el Citroën C1 comparten plataforma, motor y carrocería con pequeños cambios estéticos." },
      { q: "¿Sirve para carretera?", a: "Para tramos cortos sí; en autovía larga es ruidoso y va justo de fuerza, sobre todo cargado." },
    ],
  }),

  /* ── Nissan (nuevos modelos) ────────────────────────────── */
  g({
    id: "nissan:x-trail:t32", modelId: "nissan:x-trail", code: "T32", slug: "t32",
    startYear: 2014, endYear: 2022, bodyType: "SUV 5 y 7 plazas", lengthMm: 4690, bootLitres: 565,
    oneLiner: "SUV familiar con opción de 7 plazas: hermano mayor del Qashqai, con el 1.6 dCi y el 1.3 DIG-T como motores.",
    intro:
      "La tercera generación del X-Trail comparte plataforma con el Qashqai J11. Motores 1.6 dCi diésel y 1.3/1.6 DIG-T gasolina, con opción de tercera fila. La caja CVT Xtronic de algunas versiones conviene probarla bien.",
    verdict: "SUV familiar racional. El 1.6 dCi con caja manual es la compra más tranquila; la tercera fila solo para uso ocasional.",
    strengths: ["Espacio y maletero holgados", "Opción de 7 plazas poco común en el segmento", "1.6 dCi sobrio"],
    watchouts: ["Caja CVT Xtronic: tacto y fiabilidad a largo plazo", "Turbo y volante bimasa del dCi con kilómetros", "Tercera fila muy justa para adultos"],
    faq: [
      { q: "¿El X-Trail T32 es un Qashqai grande?", a: "Comparte plataforma y motores con el Qashqai J11; es más largo, con más maletero y opción de tercera fila." },
      { q: "¿La caja automática del X-Trail es fiable?", a: "La CVT Xtronic funciona bien mantenida, pero es cara de reparar y su tacto es elástico. Pruébala en frío y en caliente." },
    ],
  }),
  g({
    id: "nissan:micra:k14", modelId: "nissan:micra", code: "K14", slug: "k14",
    startYear: 2017, endYear: 2023, bodyType: "Utilitario 5 puertas", lengthMm: 3999, bootLitres: 300,
    oneLiner: "Utilitario con diseño moderno sobre plataforma de Clio: motores 1.0 y 0.9 IG-T de la Alianza.",
    intro:
      "La quinta generación del Micra se apoya en la plataforma CMF-B de la Alianza (Clio, Captur). Motores 1.0 atmosférico, 0.9/1.0 IG-T turbo y 1.5 dCi diésel. Más largo y con mejor comportamiento que el Micra anterior, aunque con maletero y plazas traseras algo justos.",
    verdict: "Utilitario correcto con el 1.0 IG-T turbo; el 1.0 atmosférico se queda corto con carga.",
    strengths: ["Diseño moderno y buen comportamiento", "Plataforma compartida con Clio/Captur", "0.9/1.0 IG-T elásticos"],
    watchouts: ["1.0 atmosférico justo de fuerza", "Espacio trasero y maletero ajustados", "Multimedia básica en acabados de acceso"],
    faq: [
      { q: "¿El Micra K14 comparte mecánica con el Clio?", a: "Sí, comparte la plataforma CMF-B y buena parte de los motores con Clio y Captur." },
      { q: "¿Hay Micra diésel?", a: "Las primeras series ofrecieron el 1.5 dCi; después la gama pasó solo a gasolina." },
    ],
  }),

  /* ── Peugeot (nuevos modelos) ───────────────────────────── */
  g({
    id: "peugeot:2008:p24", modelId: "peugeot:2008", code: "P24 (Mk2)", slug: "p24",
    startYear: 2019, bodyType: "SUV", lengthMm: 4300, bootLitres: 434,
    oneLiner: "B-SUV de diseño e interior i-Cockpit; gama PureTech, BlueHDi y la variante eléctrica e-2008.",
    intro:
      "La segunda generación del 2008 sobre plataforma CMP comparte base con 208, Corsa y Mokka. Motores 1.2 PureTech gasolina, 1.5 BlueHDi diésel y eléctrico. Aplican las cautelas del PureTech con la correa en las series iniciales.",
    verdict: "B-SUV con gancho visual. El 1.5 BlueHDi con historial es la opción más tranquila; con PureTech, verificar la correa.",
    strengths: ["Diseño exterior e interior atractivos", "Buen maletero para el segmento", "Opción eléctrica e-2008"],
    watchouts: ["Correa de distribución 'húmeda' del 1.2 PureTech (series iniciales)", "Sistema AdBlue en el BlueHDi", "Ergonomía del i-Cockpit no gusta a todos"],
    faq: [
      { q: "¿El 2008 Mk2 comparte mecánica con el 208?", a: "Sí, plataforma CMP y toda la gama de motores, incluida la versión eléctrica." },
      { q: "¿El PureTech del 2008 tiene el problema de la correa?", a: "Las unidades iniciales sí; conviene verificar el estado y el historial de la correa bañada en aceite." },
    ],
  }),
  g({
    id: "peugeot:5008:p87", modelId: "peugeot:5008", code: "P87 (Mk2)", slug: "p87",
    startYear: 2017, endYear: 2024, bodyType: "SUV 7 plazas", lengthMm: 4641, bootLitres: 780,
    oneLiner: "SUV de 7 plazas con maletero gigante: el hermano grande del 3008, con las mismas mecánicas PSA.",
    intro:
      "La segunda generación del 5008 dejó de ser monovolumen para convertirse en SUV de 7 plazas sobre plataforma EMP2, compartida con el 3008. Motores 1.2/1.6 PureTech y 1.5/2.0 BlueHDi. Tercera fila con asientos extraíbles.",
    verdict: "SUV familiar de 7 plazas racional. El 1.5/2.0 BlueHDi para quien hace kilómetros; revisar la correa si es PureTech.",
    strengths: ["Maletero enorme y modularidad de la tercera fila", "Interior vistoso y bien equipado", "BlueHDi 2.0 con buena reputación"],
    watchouts: ["Correa 'húmeda' del PureTech en series iniciales", "Sistema AdBlue en los diésel", "Tercera fila justa para adultos en viaje largo"],
    faq: [
      { q: "¿El 5008 Mk2 es un 3008 con 7 plazas?", a: "Comparten plataforma y motores; el 5008 es más largo y añade una tercera fila de asientos extraíbles." },
      { q: "¿Qué motor del 5008 es más fiable?", a: "El BlueHDi 2.0 tiene muy buena reputación; el 1.5 BlueHDi también, cuidando el AdBlue." },
    ],
  }),
  g({
    id: "peugeot:508:r8", modelId: "peugeot:508", code: "R8 (Mk2)", slug: "r8",
    startYear: 2018, bodyType: "Berlina fastback y SW", lengthMm: 4750, bootLitres: 487,
    oneLiner: "Berlina de diseño con portón trasero: imagen premium, i-Cockpit y gama PureTech, BlueHDi e híbrido enchufable.",
    intro:
      "La segunda generación del 508 apostó por una carrocería fastback más baja y deportiva. Motores 1.6 PureTech, 1.5/2.0 BlueHDi y el híbrido enchufable Hybrid. El SW familiar mantiene la línea. Aplican las cautelas habituales de PSA (correa PureTech, AdBlue).",
    verdict: "Berlina con personalidad. El 2.0 BlueHDi para kilómetros; el Hybrid solo si lo enchufas.",
    strengths: ["Diseño exterior muy logrado", "Buen equipamiento tecnológico", "BlueHDi 2.0 sobrio en viaje"],
    watchouts: ["Correa 'húmeda' del 1.6 PureTech en series iniciales", "Ergonomía del i-Cockpit y visibilidad trasera", "Hybrid: maletero y precio penalizados si no se carga"],
    faq: [
      { q: "¿El 508 Mk2 es una berlina o un fastback?", a: "Es una berlina con portón trasero y línea de fastback; combina estética de coupé con la practicidad de un portón." },
      { q: "¿Qué autonomía tiene el 508 Hybrid?", a: "Homologa en torno a 50-55 km eléctricos WLTP; en uso real algo menos." },
    ],
  }),

  /* ── Renault (nuevos modelos) ───────────────────────────── */
  g({
    id: "renault:kadjar:ha", modelId: "renault:kadjar", code: "HA / HL", slug: "ha",
    startYear: 2015, endYear: 2022, bodyType: "SUV", lengthMm: 4489, bootLitres: 472,
    oneLiner: "SUV compacto hermano del Qashqai J11: 1.5 dCi sobrio, 1.3 TCe moderno y buen espacio interior.",
    intro:
      "El Renault Kadjar comparte plataforma CMF con el Qashqai J11. Motores 1.5/1.6 dCi diésel y 1.2/1.3 TCe gasolina. El restyling de 2019 estrenó el 1.3 TCe y mejoró el interior. Aplican las cautelas del 1.2 TCe (consumo de aceite) en las primeras series.",
    verdict: "SUV familiar racional. El 1.5 dCi con caja manual es la compra más tranquila; el 1.3 TCe del restyling, la opción gasolina.",
    strengths: ["Buen espacio interior y maletero", "1.5 dCi muy sobrio", "Confort de suspensión"],
    watchouts: ["Consumo de aceite del 1.2 TCe (2015-2018)", "Caja automática EDC: tirones a baja velocidad", "Turbo y volante bimasa del dCi con kilómetros"],
    faq: [
      { q: "¿El Kadjar es un Qashqai francés?", a: "Comparten plataforma y motores con el Qashqai J11; cambian diseño, equipamiento y ajuste de suspensión." },
      { q: "¿Qué motor del Kadjar comprar?", a: "El 1.5 dCi para carretera; en gasolina, el 1.3 TCe del restyling de 2019 antes que el 1.2 TCe inicial." },
    ],
  }),
  g({
    id: "renault:scenic:j9", modelId: "renault:scenic", code: "IV (J9)", slug: "j9",
    startYear: 2016, endYear: 2022, bodyType: "Monovolumen", lengthMm: 4406, bootLitres: 506,
    oneLiner: "Monovolumen con estética de crossover y ruedas grandes: práctico, cómodo y con el 1.5 dCi de siempre.",
    intro:
      "La cuarta generación del Scénic adoptó ruedas de 20 pulgadas de serie y una imagen más SUV. Motores 1.2/1.3 TCe gasolina y 1.5/1.7 dCi diésel, además del Grand Scénic de 7 plazas. Confort de marcha bueno; revisar la caja EDC.",
    verdict: "Monovolumen cómodo y práctico. El 1.5 dCi para kilómetros; el Grand Scénic si necesitas 7 plazas.",
    strengths: ["Confort de suspensión por encima de la media", "Habitabilidad y modularidad", "1.5 dCi sobrio"],
    watchouts: ["Consumo de aceite del 1.2 TCe en primeras series", "Neumáticos de 20\" caros de reemplazar", "Caja EDC de doble embrague en uso urbano"],
    faq: [
      { q: "¿El Scénic IV es un monovolumen o un SUV?", a: "Es un monovolumen con estética de crossover: ruedas grandes e imagen SUV, pero carrocería y altura de monovolumen." },
      { q: "¿El Grand Scénic tiene 7 plazas de verdad?", a: "Sí, con una tercera fila usable para niños o trayectos cortos, típica del segmento." },
    ],
  }),
  g({
    id: "renault:twingo:iii", modelId: "renault:twingo", code: "III", slug: "iii",
    startYear: 2014, endYear: 2023, bodyType: "Urbano 5 puertas", lengthMm: 3595, bootLitres: 188,
    oneLiner: "Urbano con motor trasero y giro cortísimo: ágil como pocos en ciudad, con maletero mínimo.",
    intro:
      "La tercera generación del Twingo, desarrollada con Smart, coloca el motor detrás y bajo el maletero. Eso da un radio de giro excepcional y buena habitabilidad delantera. Motores 1.0 SCe atmosférico y 0.9 TCe turbo. Poco maletero y acceso a la mecánica más complejo.",
    verdict: "El urbano más ágil de aparcar. El 0.9 TCe para algo de brío; el 1.0 SCe basta para ciudad pura.",
    strengths: ["Radio de giro y agilidad urbana excepcionales", "Buena habitabilidad delantera para el tamaño", "Diseño simpático"],
    watchouts: ["Maletero mínimo y sin apenas hueco delantero", "Acceso a la mecánica trasera más costoso en taller", "1.0 SCe justo en cuesta y en autovía"],
    faq: [
      { q: "¿Por qué el Twingo III lleva el motor detrás?", a: "Se desarrolló junto al Smart ForFour; el motor trasero permite un giro muy cerrado y ruedas delanteras que giran mucho." },
      { q: "¿Sirve para carretera?", a: "Para tramos cortos; en autovía es ruidoso y el 1.0 atmosférico va escaso, sobre todo cargado." },
    ],
  }),
  g({
    id: "renault:austral:1", modelId: "renault:austral", code: "1ª gen", slug: "1",
    startYear: 2022, bodyType: "SUV", lengthMm: 4510, bootLitres: 500,
    oneLiner: "El sustituto del Kadjar: SUV compacto con híbrido E-Tech eficiente y micro-hibridación de 48 V.",
    intro:
      "El Renault Austral sustituye al Kadjar sobre la plataforma CMF-CD. La gama se centra en el híbrido E-Tech full hybrid (200 CV) y el mild-hybrid de 48 V, con el 1.2 TCe de base. Interior muy tecnológico con pantalla vertical.",
    verdict: "SUV compacto moderno. El E-Tech híbrido para consumo urbano bajo; el mild-hybrid como opción más asequible.",
    strengths: ["Híbrido E-Tech eficiente en ciudad", "Interior tecnológico y bien acabado", "Buen espacio y maletero"],
    watchouts: ["Modelo reciente: historial de fiabilidad todavía corto", "Caja multimodo del E-Tech: tacto peculiar", "Precio de ocasión aún alto"],
    faq: [
      { q: "¿El Austral sustituye al Kadjar?", a: "Sí, es su relevo directo, con plataforma nueva y foco en la hibridación." },
      { q: "¿Hay Austral diésel?", a: "No, la gama se basa en gasolina: 1.2 TCe mild-hybrid de 48 V y el híbrido E-Tech." },
    ],
  }),

  /* ── Dacia (nuevos modelos) ─────────────────────────────── */
  g({
    id: "dacia:jogger:1", modelId: "dacia:jogger", code: "1ª gen", slug: "1",
    startYear: 2021, bodyType: "Familiar 7 plazas", lengthMm: 4547, bootLitres: 607,
    oneLiner: "Familiar de 7 plazas al precio de un utilitario: mucho espacio, poco lujo y mecánica probada del grupo Renault.",
    intro:
      "El Dacia Jogger combina carrocería de familiar alargado con 7 plazas. Motores TCe 1.0 gasolina, ECO-G GLP y el híbrido 1.6 (Hybrid 140). Las plazas de la tercera fila son extraíbles. Coche honesto y funcional.",
    verdict: "La forma más barata de mover a 7 personas. TCe/GLP para minimizar coste, híbrido para uso urbano.",
    strengths: ["7 plazas a precio de utilitario", "Maletero enorme con 5 plazas", "Mecánica del grupo Renault probada"],
    watchouts: ["Materiales e insonorización básicos", "TCe 1.0 justo con el coche lleno", "Equipamiento de asistencias limitado en acabados bajos"],
    faq: [
      { q: "¿El Jogger tiene 7 plazas de serie?", a: "Depende del acabado; la tercera fila es opcional en las versiones de acceso y extraíble." },
      { q: "¿Diésel o gasolina en el Jogger?", a: "No hay diésel: TCe 1.0 gasolina, ECO-G GLP (el más barato de usar) e híbrido 1.6." },
    ],
  }),
  g({
    id: "dacia:logan:iii", modelId: "dacia:logan", code: "III", slug: "iii",
    startYear: 2020, bodyType: "Berlina", lengthMm: 4359, bootLitres: 528,
    oneLiner: "Berlina económica con maletero enorme: plataforma moderna del Clio y mecánica sencilla.",
    intro:
      "La tercera generación del Logan adopta la plataforma CMF-B del Clio, con un salto de seguridad y comportamiento. Motores TCe 1.0 gasolina y ECO-G GLP. Maletero de 528 litros y precio mínimo.",
    verdict: "La berlina más barata del mercado. ECO-G GLP para minimizar el gasto por kilómetro.",
    strengths: ["Precio de compra y mantenimiento mínimos", "Maletero enorme", "Plataforma moderna compartida con Clio"],
    watchouts: ["Materiales e insonorización básicos", "TCe 1.0 justo con carga", "Equipamiento de asistencias limitado en acabados bajos"],
    faq: [
      { q: "¿El Logan III comparte plataforma con el Clio?", a: "Sí, usa la plataforma CMF-B, lo que mejora mucho la seguridad y el comportamiento frente al Logan anterior." },
      { q: "¿Cuánto maletero tiene?", a: "En torno a 528 litros, muy por encima de la media de las berlinas compactas." },
    ],
  }),

  /* ── Ford (nuevos modelos) ──────────────────────────────── */
  g({
    id: "ford:kuga:mk3", modelId: "ford:kuga", code: "Mk3", slug: "mk3",
    startYear: 2019, bodyType: "SUV", lengthMm: 4614, bootLitres: 475,
    oneLiner: "SUV familiar que se conduce bien: gama amplia con 1.5 EcoBoost, 1.5 EcoBlue, híbrido e híbrido enchufable.",
    intro:
      "La tercera generación del Kuga sobre plataforma C2 ofrece una de las gamas más completas del segmento: 1.5 EcoBoost gasolina, 1.5/2.0 EcoBlue diésel, híbrido (FHEV) e híbrido enchufable (PHEV). Buen comportamiento dinámico. Revisar la correa 'húmeda' del EcoBlue.",
    verdict: "SUV familiar equilibrado. El 1.5 EcoBlue para kilómetros, el híbrido para uso urbano-mixto, el PHEV solo si cargas.",
    strengths: ["Comportamiento dinámico por encima de la media", "Gama de motores muy completa", "Buen espacio y maletero (con banqueta deslizante)"],
    watchouts: ["Correa de distribución 'húmeda' del 1.5 EcoBlue (intervalo estricto)", "PHEV: hubo campañas por la batería en las primeras unidades", "Multimedia SYNC 3 algo desfasada en primeras series"],
    faq: [
      { q: "¿El Kuga PHEV tuvo problemas?", a: "Las primeras unidades tuvieron una campaña por riesgo de sobrecalentamiento de la batería; conviene verificar que la unidad esté actualizada." },
      { q: "¿Qué maletero tiene el Kuga Mk3?", a: "Entre 435 y 580 litros según la posición de la banqueta trasera deslizante (menos en las versiones electrificadas)." },
    ],
  }),
  g({
    id: "ford:mondeo:mk5", modelId: "ford:mondeo", code: "Mk5 (CD391)", slug: "mk5",
    startYear: 2014, endYear: 2022, bodyType: "Berlina, Sportbreak y híbrido", lengthMm: 4871, bootLitres: 500,
    oneLiner: "Berlina grande de ocasión muy barata: mucho coche por el dinero, con el 2.0 TDCi y el híbrido HEV.",
    intro:
      "La última generación del Mondeo en Europa. Motores 1.5/2.0 EcoBoost gasolina, 1.5/2.0 TDCi diésel y una versión híbrida (solo berlina). Espacio y confort de categoría superior a precio de ganga en el usado. Revisar la caja Powershift en los diésel automáticos.",
    verdict: "Mucha berlina por poco dinero. El 2.0 TDCi manual es la compra más tranquila; el híbrido para uso urbano.",
    strengths: ["Espacio y confort de clase superior", "Precio de ocasión muy bajo", "Sportbreak con maletero enorme"],
    watchouts: ["Caja automática Powershift de doble embrague (tirones, campañas)", "EGR y turbo del 2.0 TDCi con kilómetros", "Consumo alto del híbrido en autovía"],
    faq: [
      { q: "¿El Mondeo Mk5 híbrido se enchufa?", a: "No, es un híbrido autorrecargable; solo está disponible en carrocería berlina." },
      { q: "¿La caja automática del Mondeo diésel es fiable?", a: "La Powershift de doble embrague dio tirones y desgaste en muchas unidades. Si puedes, elige el manual o revisa el historial de campañas." },
    ],
  }),

  /* ── Hyundai / Kia (nuevos modelos) ─────────────────────── */
  g({
    id: "hyundai:i20:bc3", modelId: "hyundai:i20", code: "BC3", slug: "bc3",
    startYear: 2020, bodyType: "Utilitario 5 puertas", lengthMm: 4040, bootLitres: 352,
    oneLiner: "Utilitario racional con garantía de 5 años: 1.0 T-GDi con o sin 48 V y buen maletero para el segmento.",
    intro:
      "La tercera generación del i20 sobre plataforma K2. Motores 1.0 T-GDi (con opción mild-hybrid de 48 V) y 1.2 atmosférico. Buen maletero y habitabilidad, y el respaldo de la garantía de fábrica de 5 años.",
    verdict: "Utilitario de bajo riesgo con el 1.0 T-GDi 100. La garantía larga es un plus en el usado reciente.",
    strengths: ["Garantía de fábrica de 5 años", "Buen maletero y habitabilidad", "1.0 T-GDi elástico"],
    watchouts: ["Carbonilla en admisión del T-GDi en uso solo urbano", "1.2 atmosférico justo de fuerza", "Multimedia básica en acabados de acceso"],
    faq: [
      { q: "¿El i20 mantiene la garantía si lo compro usado?", a: "Sí, la garantía de 5 años de Hyundai es de fábrica y se transfiere al nuevo propietario mientras esté vigente y con las revisiones al día." },
      { q: "¿1.0 T-GDi o 1.2 atmosférico?", a: "El 1.0 T-GDi turbo es claramente preferible salvo que el uso sea urbano puro y el precio del atmosférico sea muy inferior." },
    ],
  }),
  g({
    id: "hyundai:kona:os", modelId: "hyundai:kona", code: "OS", slug: "os",
    startYear: 2017, endYear: 2023, bodyType: "SUV", lengthMm: 4165, bootLitres: 361,
    oneLiner: "B-SUV con gama muy completa: gasolina 1.0/1.6 T-GDi, diésel 1.6 CRDi, híbrido y eléctrico con buena autonomía.",
    intro:
      "La primera generación del Kona ofreció desde muy pronto versión eléctrica con autonomía real alta para su época. Motores 1.0/1.6 T-GDi gasolina, 1.6 CRDi diésel, híbrido 1.6 y eléctrico. Garantía de 5 años. Revisar la caja DCT de doble embrague.",
    verdict: "B-SUV muy versátil. El 1.0 T-GDi para ciudad, el híbrido para uso mixto, el eléctrico si te cuadra la autonomía.",
    strengths: ["Gama de motores muy amplia, incluido eléctrico", "Garantía de fábrica de 5 años", "Buen equipamiento de serie"],
    watchouts: ["Caja DCT de doble embrague: tacto en maniobras y en frío", "Maletero justo en las versiones no eléctricas", "Kona EV: campañas de batería en unidades 2018-2020"],
    faq: [
      { q: "¿El Kona eléctrico tuvo problemas de batería?", a: "Hubo una campaña mundial en unidades 2018-2020 por riesgo de incendio de la batería; conviene verificar que la unidad tenga la actualización o la batería sustituida." },
      { q: "¿Qué autonomía tiene el Kona EV de 64 kWh?", a: "Homologa en torno a 449 km WLTP; en uso real y con frío, bastante menos." },
    ],
  }),
  g({
    id: "kia:niro:de", modelId: "kia:niro", code: "DE", slug: "de",
    startYear: 2016, endYear: 2022, bodyType: "SUV", lengthMm: 4375, bootLitres: 427,
    oneLiner: "SUV compacto solo electrificado: híbrido, híbrido enchufable y eléctrico, con 7 años de garantía Kia.",
    intro:
      "La primera generación del Niro nació sin motor de combustión puro: híbrido 1.6 GDi, híbrido enchufable y eléctrico (e-Niro) con buena autonomía. A diferencia de Toyota, el híbrido usa una caja automática de doble embrague convencional. Garantía de 7 años.",
    verdict: "SUV electrificado racional con la garantía más larga del mercado. El híbrido para uso mixto; el e-Niro si te cuadra la autonomía.",
    strengths: ["Garantía de fábrica de 7 años", "Conducción 'normal' con caja DCT (no e-CVT)", "e-Niro con buena autonomía real"],
    watchouts: ["Caja DCT de doble embrague: tacto en maniobras", "Consumo del híbrido algo mayor que un Toyota en ciudad", "Maletero reducido en la versión enchufable"],
    faq: [
      { q: "¿El Niro híbrido se conduce como un Toyota?", a: "No exactamente: usa una caja automática de doble embrague de 6 marchas, con cambios perceptibles, en vez del e-CVT de Toyota." },
      { q: "¿La garantía de 7 años se transfiere?", a: "Sí, es de fábrica y ligada al coche mientras esté vigente y con las revisiones al día." },
    ],
  }),
  g({
    id: "kia:picanto:ja", modelId: "kia:picanto", code: "JA", slug: "ja",
    startYear: 2017, bodyType: "Urbano 5 puertas", lengthMm: 3595, bootLitres: 255,
    oneLiner: "Urbano con maletero de récord en su clase y 7 años de garantía: 1.0 y 1.25 atmosféricos, sencillos y fiables.",
    intro:
      "La tercera generación del Picanto ofrece uno de los maleteros más grandes del segmento A. Motores 1.0 y 1.25 atmosféricos y un 1.0 T-GDi turbo. Mecánica sencilla, barata de mantener y con la garantía de 7 años de Kia.",
    verdict: "De los mejores urbanos por practicidad y garantía. El 1.25 atmosférico basta para ciudad; el 1.0 T-GDi si sales a carretera.",
    strengths: ["Maletero de referencia en el segmento A", "Garantía de fábrica de 7 años", "Mecánica atmosférica sencilla y fiable"],
    watchouts: ["Atmosféricos justos de fuerza en autovía y cargados", "Insonorización básica", "Equipamiento de seguridad limitado en acabados de acceso"],
    faq: [
      { q: "¿Cuánto maletero tiene el Picanto JA?", a: "En torno a 255 litros, de los mayores del segmento de urbanos." },
      { q: "¿Qué motor del Picanto comprar?", a: "El 1.25 atmosférico para uso urbano; el 1.0 T-GDi turbo si haces carretera con frecuencia." },
    ],
  }),
  g({
    id: "kia:rio:yb", modelId: "kia:rio", code: "YB", slug: "yb",
    startYear: 2017, bodyType: "Utilitario 5 puertas", lengthMm: 4065, bootLitres: 325,
    oneLiner: "Utilitario racional con 7 años de garantía: 1.0 T-GDi con o sin 48 V y 1.2 atmosférico.",
    intro:
      "La cuarta generación del Rio comparte base con el Hyundai i20 de su época. Motores 1.0 T-GDi (con opción mild-hybrid de 48 V), 1.2 y 1.4 atmosféricos. Buen maletero y el respaldo de la garantía de 7 años.",
    verdict: "Utilitario de bajo riesgo con el 1.0 T-GDi 100 y la garantía más larga del segmento.",
    strengths: ["Garantía de fábrica de 7 años", "Buen maletero y habitabilidad", "1.0 T-GDi elástico"],
    watchouts: ["Carbonilla en admisión del T-GDi en uso solo urbano", "Atmosféricos justos de fuerza", "Multimedia básica en acabados de acceso"],
    faq: [
      { q: "¿El Rio YB es un i20 con emblema Kia?", a: "Comparten plataforma y motores de su generación; cambian diseño, equipamiento y la garantía (7 años Kia)." },
      { q: "¿Merece la pena el mild-hybrid de 48 V?", a: "Suaviza el Start&Stop y reduce algo el consumo urbano; el ahorro real es modesto." },
    ],
  }),
  g({
    id: "kia:stonic:yb", modelId: "kia:stonic", code: "YB", slug: "yb",
    startYear: 2017, bodyType: "SUV", lengthMm: 4140, bootLitres: 352,
    oneLiner: "B-SUV sobre base del Rio: 1.0 T-GDi ágil, buen maletero y 7 años de garantía Kia.",
    intro:
      "El Kia Stonic comparte plataforma con el Rio YB. Motores 1.0 T-GDi (con opción 48 V), 1.2 atmosférico y, en su día, 1.6 CRDi diésel. B-SUV racional con buen maletero y la garantía de 7 años.",
    verdict: "B-SUV racional con el 1.0 T-GDi 100 y la garantía más larga del segmento.",
    strengths: ["Garantía de fábrica de 7 años", "1.0 T-GDi elástico y sobrio", "Buen maletero para el segmento"],
    watchouts: ["Carbonilla en admisión del T-GDi en uso solo urbano", "1.2 atmosférico justo de fuerza", "Plásticos duros en acabados de acceso"],
    faq: [
      { q: "¿El Stonic es un Rio más alto?", a: "Comparte plataforma y motores con el Rio; añade carrocería SUV y algo más de altura libre." },
      { q: "¿Hay Stonic diésel?", a: "Las primeras series ofrecieron el 1.6 CRDi; después la gama se centró en el 1.0 T-GDi y el 1.2 atmosférico." },
    ],
  }),

  /* ── Opel ───────────────────────────────────────────────── */
  g({
    id: "opel:corsa:f", modelId: "opel:corsa", code: "F", slug: "f",
    startYear: 2019, bodyType: "Utilitario 5 puertas", lengthMm: 4060, bootLitres: 309,
    oneLiner: "El primer Corsa de la era Stellantis: gemelo del Peugeot 208, con PureTech, BlueHDi y el eléctrico Corsa-e.",
    intro:
      "La sexta generación del Corsa pasó a la plataforma CMP de PSA y comparte casi todo con el Peugeot 208. Motores 1.2 PureTech gasolina, 1.5 BlueHDi diésel y eléctrico. Aplican las mismas cautelas del PureTech con la correa en las series iniciales.",
    verdict: "Utilitario racional. El 1.2 PureTech (verificando correa) o el eléctrico Corsa-e para ciudad; el 1.5 BlueHDi para kilómetros.",
    strengths: ["Base moderna compartida con el 208", "Opción eléctrica Corsa-e", "Buen equipamiento de seguridad en versiones recientes"],
    watchouts: ["Correa de distribución 'húmeda' del 1.2 PureTech (series iniciales)", "Sistema AdBlue en el BlueHDi", "Plásticos interiores duros"],
    faq: [
      { q: "¿El Corsa F es un Peugeot 208 con otro emblema?", a: "Comparten plataforma CMP, motores y buena parte de las piezas; cambian diseño, interior y ajuste." },
      { q: "¿El PureTech del Corsa F tiene el problema de la correa?", a: "Las unidades iniciales sí; conviene verificar el estado y el historial de la correa bañada en aceite." },
    ],
  }),
  g({
    id: "opel:astra:k", modelId: "opel:astra", code: "K", slug: "k",
    startYear: 2015, endYear: 2021, bodyType: "Compacto 5 puertas y Sports Tourer", lengthMm: 4370, bootLitres: 370,
    oneLiner: "El último Astra de la era GM: ligero, ágil y con el 1.6 CDTi 'whisper diesel' propio de Opel.",
    intro:
      "La generación K del Astra (todavía sobre plataforma GM) destacó por su bajo peso y buen comportamiento. Motores 1.0/1.4 Turbo gasolina y 1.6 CDTi diésel propio de Opel. El Sports Tourer familiar tiene buen maletero. Vigilar EGR/DPF de los diésel y la bomba de agua de los gasolina.",
    verdict: "Compacto ágil y barato de ocasión. El 1.6 CDTi para kilómetros; el 1.4 Turbo para uso mixto.",
    strengths: ["Bajo peso y comportamiento ágil", "1.6 CDTi silencioso para su clase", "Precio de ocasión contenido"],
    watchouts: ["EGR y DPF de los diésel en uso urbano", "Consumo de aceite y bomba de agua en algún 1.4 Turbo", "Multimedia IntelliLink básica en acabados de acceso"],
    faq: [
      { q: "¿El Astra K es de la era Opel-GM u Opel-PSA?", a: "Es de la era GM; el Astra L posterior (2021) ya usa plataforma PSA/Stellantis." },
      { q: "¿El 1.6 CDTi del Astra K es fiable?", a: "Con mantenimiento correcto es sobrio y silencioso; el punto a vigilar es el sistema de gases (EGR/DPF) en coches muy urbanos." },
    ],
  }),
  g({
    id: "opel:mokka:b", modelId: "opel:mokka", code: "B", slug: "b",
    startYear: 2020, bodyType: "SUV", lengthMm: 4151, bootLitres: 350,
    oneLiner: "B-SUV de diseño rompedor sobre plataforma Stellantis: PureTech, BlueHDi y el eléctrico Mokka-e.",
    intro:
      "La segunda generación del Mokka estrenó el lenguaje de diseño 'Vizor' de Opel sobre la plataforma CMP/e-CMP de Stellantis. Motores 1.2 PureTech, 1.5 BlueHDi y eléctrico. Comparte casi todo con Peugeot 2008 y Citroën C3 Aircross.",
    verdict: "B-SUV con imagen fuerte. El 1.2 PureTech (verificando correa) para ciudad; el 1.5 BlueHDi para kilómetros.",
    strengths: ["Diseño exterior diferenciado", "Base moderna compartida con Peugeot/Citroën", "Opción eléctrica Mokka-e"],
    watchouts: ["Correa 'húmeda' del 1.2 PureTech en series iniciales", "Maletero justo para el segmento", "Plásticos interiores duros"],
    faq: [
      { q: "¿El Mokka B comparte mecánica con el Peugeot 2008?", a: "Sí, plataforma CMP y toda la gama de motores, incluida la versión eléctrica." },
      { q: "¿El Mokka B es fiable?", a: "La base mecánica es la del grupo Stellantis; el punto a vigilar es la correa del PureTech en las primeras unidades." },
    ],
  }),
  g({
    id: "opel:crossland:p2qo", modelId: "opel:crossland", code: "P2QO", slug: "p2qo",
    startYear: 2017, endYear: 2024, bodyType: "SUV", lengthMm: 4212, bootLitres: 410,
    oneLiner: "B-SUV práctico y familiar sobre plataforma PSA: banqueta trasera deslizante y buen maletero.",
    intro:
      "El Opel Crossland (Crossland X hasta 2020) comparte plataforma CMP con Peugeot 2008 y Citroën C3 Aircross. Motores 1.2 PureTech gasolina y 1.5 BlueHDi diésel. Banqueta trasera deslizante para priorizar espacio o maletero.",
    verdict: "B-SUV racional y práctico. El 1.2 PureTech (verificando correa) para ciudad; el 1.5 BlueHDi para kilómetros.",
    strengths: ["Modularidad de la banqueta trasera deslizante", "Buen maletero para el segmento", "Mecánicas PSA conocidas"],
    watchouts: ["Correa 'húmeda' del 1.2 PureTech en series iniciales", "Comportamiento más de monovolumen que de SUV", "Multimedia básica en acabados de acceso"],
    faq: [
      { q: "¿El Crossland es un SUV o un monovolumen alto?", a: "Es un B-SUV con enfoque práctico: altura y modularidad de monovolumen, sin pretensiones de campo." },
      { q: "¿Comparte mecánica con el Citroën C3 Aircross?", a: "Sí, plataforma y motores del grupo PSA/Stellantis." },
    ],
  }),
  g({
    id: "opel:grandland:a18", modelId: "opel:grandland", code: "A18", slug: "a18",
    startYear: 2017, endYear: 2024, bodyType: "SUV", lengthMm: 4477, bootLitres: 514,
    oneLiner: "SUV compacto hermano del Peugeot 3008: PureTech, BlueHDi e híbrido enchufable Hybrid4 con tracción total.",
    intro:
      "El Opel Grandland (Grandland X hasta 2021) comparte plataforma EMP2 con el Peugeot 3008 y el Citroën C5 Aircross. Motores 1.2/1.6 PureTech, 1.5/2.0 BlueHDi e híbrido enchufable, este último con tracción total en la versión Hybrid4.",
    verdict: "SUV familiar racional. El 1.5 BlueHDi con historial es la opción más tranquila; con PureTech, verificar la correa.",
    strengths: ["Buen espacio y maletero", "Mecánicas compartidas con el 3008, conocidas", "BlueHDi 2.0 con buena reputación"],
    watchouts: ["Correa 'húmeda' del PureTech en series iniciales", "Sistema AdBlue en los diésel", "Hybrid4: coste de mantenimiento y batería"],
    faq: [
      { q: "¿El Grandland es un Peugeot 3008 de Opel?", a: "Comparten plataforma y motores; cambian diseño, interior y ajuste de suspensión." },
      { q: "¿El Grandland Hybrid4 tiene tracción total?", a: "Sí, añade un motor eléctrico en el eje trasero que le da tracción total en determinadas condiciones." },
    ],
  }),
  g({
    id: "opel:insignia:b", modelId: "opel:insignia", code: "B (Z18)", slug: "b",
    startYear: 2017, endYear: 2022, bodyType: "Berlina Grand Sport y Sports Tourer", lengthMm: 4897, bootLitres: 490,
    oneLiner: "Berlina grande de ocasión muy barata: mucho espacio y confort, con el 1.6/2.0 CDTi y la tracción total opcional.",
    intro:
      "La segunda generación del Insignia (era GM) creció en tamaño y bajó de peso. Motores 1.5/2.0 Turbo gasolina y 1.6/2.0 CDTi diésel, con opción de tracción total. El Sports Tourer tiene un maletero enorme. Vigilar EGR/DPF de los diésel.",
    verdict: "Mucha berlina por muy poco dinero. El 1.6 CDTi para uso sensato; el 2.0 CDTi para viaje y carga.",
    strengths: ["Espacio y confort de categoría superior", "Precio de ocasión muy bajo", "Sports Tourer con maletero enorme"],
    watchouts: ["EGR y DPF de los diésel en uso urbano", "Coste de mantenimiento de la tracción total", "Multimedia y asistencias básicas en acabados de acceso"],
    faq: [
      { q: "¿El Insignia B es de Opel-GM o de Stellantis?", a: "Es de la era GM. No hubo una tercera generación: el Insignia se descatalogó tras la B." },
      { q: "¿Qué diésel del Insignia B comprar?", a: "El 1.6 CDTi para uso mixto y el 2.0 CDTi (a veces con tracción total) para viaje y carga; ambos, cuidando el sistema de gases." },
    ],
  }),

  /* ── Citroën ────────────────────────────────────────────── */
  g({
    id: "citroen:c3:iii", modelId: "citroen:c3", code: "III (SX/SW)", slug: "iii",
    startYear: 2016, bodyType: "Utilitario 5 puertas", lengthMm: 3996, bootLitres: 300,
    oneLiner: "Utilitario cómodo y con personalidad: suspensión blanda, asientos mullidos y la cámara ConnectedCAM.",
    intro:
      "La tercera generación del C3 apostó por el confort y el diseño personalizable (Airbump). Motores 1.2 PureTech gasolina y 1.5/1.6 BlueHDi diésel. Comodidad por encima de la media del segmento; a cambio, comportamiento más blando. Aplican las cautelas del PureTech con la correa.",
    verdict: "Utilitario para quien prioriza confort. El 1.2 PureTech (verificando correa) para ciudad; el BlueHDi para kilómetros.",
    strengths: ["Confort de suspensión y asientos por encima de la media", "Diseño personalizable", "Buen consumo del BlueHDi"],
    watchouts: ["Correa 'húmeda' del 1.2 PureTech en series iniciales", "Comportamiento blando y balanceo en curva", "Multimedia lenta en acabados de acceso"],
    faq: [
      { q: "¿El C3 III es cómodo?", a: "Sí, es de los utilitarios más confortables del segmento en amortiguación y asientos; a cambio balancea más en curva." },
      { q: "¿El PureTech del C3 tiene el problema de la correa?", a: "Las unidades 2016-2021 sí; conviene verificar el estado y el historial de la correa bañada en aceite." },
    ],
  }),
  g({
    id: "citroen:c3-aircross:a88", modelId: "citroen:c3-aircross", code: "A88", slug: "a88",
    startYear: 2017, bodyType: "SUV", lengthMm: 4154, bootLitres: 410,
    oneLiner: "B-SUV práctico y modular sobre plataforma PSA: banqueta trasera deslizante y buen maletero.",
    intro:
      "El C3 Aircross comparte plataforma CMP con Peugeot 2008 y Opel Crossland. Motores 1.2 PureTech y 1.5/1.6 BlueHDi. Banqueta trasera deslizante y buena habitabilidad. El restyling de 2021 renovó el frontal.",
    verdict: "B-SUV racional y práctico. El 1.2 PureTech (verificando correa) para ciudad; el BlueHDi para kilómetros.",
    strengths: ["Modularidad de la banqueta trasera", "Buen maletero y habitabilidad", "Confort de marcha"],
    watchouts: ["Correa 'húmeda' del 1.2 PureTech en series iniciales", "Comportamiento blando en curva", "Multimedia básica en acabados de acceso"],
    faq: [
      { q: "¿El C3 Aircross comparte mecánica con el Peugeot 2008?", a: "Sí, plataforma CMP y motores del grupo PSA/Stellantis." },
      { q: "¿Tiene tracción total?", a: "No; ofrece un sistema de control de tracción 'Grip Control' con modos, pero siempre con tracción delantera." },
    ],
  }),
  g({
    id: "citroen:c4:iii", modelId: "citroen:c4", code: "III (C41)", slug: "iii",
    startYear: 2020, bodyType: "Compacto 5 puertas (crossover)", lengthMm: 4360, bootLitres: 380,
    oneLiner: "Compacto con estética de crossover y suspensión con topes hidráulicos: confort por bandera, con PureTech, BlueHDi y ë-C4 eléctrico.",
    intro:
      "La tercera generación del C4 combina carrocería de compacto elevado con la 'Suspensión con Topes Hidráulicos Progresivos' de Citroën. Motores 1.2 PureTech, 1.5 BlueHDi y el eléctrico ë-C4. Prioriza confort y aislamiento.",
    verdict: "Compacto cómodo y diferente. El 1.5 BlueHDi para kilómetros; el ë-C4 para ciudad; con PureTech, verificar la correa.",
    strengths: ["Confort de suspensión de referencia en el segmento", "Asientos Advanced Comfort mullidos", "Opción eléctrica ë-C4"],
    watchouts: ["Correa 'húmeda' del 1.2 PureTech en series iniciales", "Comportamiento blando y dirección poco incisiva", "Maletero justo frente a rivales de tamaño similar"],
    faq: [
      { q: "¿El C4 III es un SUV?", a: "Es un compacto con carrocería elevada y aire de crossover, pero siempre de tracción delantera y sin pretensiones de campo." },
      { q: "¿Qué autonomía tiene el ë-C4?", a: "Homologa en torno a 350-420 km WLTP según versión; en uso real y con frío, bastante menos." },
    ],
  }),
  g({
    id: "citroen:c5-aircross:c84", modelId: "citroen:c5-aircross", code: "C84", slug: "c84",
    startYear: 2018, bodyType: "SUV", lengthMm: 4500, bootLitres: 580,
    oneLiner: "SUV compacto centrado en el confort: suspensión con topes hidráulicos, asientos mullidos y tres plazas traseras individuales.",
    intro:
      "El C5 Aircross comparte plataforma EMP2 con Peugeot 3008 y Opel Grandland, pero con un ajuste claramente orientado al confort. Motores 1.2/1.6 PureTech, 1.5/2.0 BlueHDi e híbrido enchufable. Tres asientos traseros independientes y deslizables.",
    verdict: "El SUV compacto más cómodo del grupo PSA. El 1.5 BlueHDi para kilómetros; el híbrido enchufable solo si cargas.",
    strengths: ["Confort de suspensión y asientos superior a sus hermanos", "Tres plazas traseras individuales y deslizables", "Buen maletero"],
    watchouts: ["Correa 'húmeda' del PureTech en series iniciales", "Sistema AdBlue en los diésel", "Comportamiento blando en curva"],
    faq: [
      { q: "¿El C5 Aircross es más cómodo que el Peugeot 3008?", a: "Comparten plataforma, pero el ajuste de suspensión y los asientos del C5 Aircross están más orientados al confort." },
      { q: "¿Tiene 5 o 7 plazas?", a: "Solo 5, pero con tres asientos traseros independientes que se deslizan y abaten por separado." },
    ],
  }),
  g({
    id: "citroen:berlingo:iii", modelId: "citroen:berlingo", code: "III (K9)", slug: "iii",
    startYear: 2018, bodyType: "Furgoneta de pasajeros 5/7 plazas", lengthMm: 4403, bootLitres: 775,
    oneLiner: "La furgoneta de pasajeros por excelencia: espacio y maletero descomunales, puertas correderas y opción de 7 plazas.",
    intro:
      "La tercera generación del Berlingo (gemelo de Peugeot Rifter y Opel Combo Life) sobre plataforma EMP2. Motores 1.2 PureTech y 1.5 BlueHDi, además del eléctrico ë-Berlingo. Dos longitudes (M y XL) y hasta 7 plazas. Practicidad máxima a cambio de comportamiento de furgoneta.",
    verdict: "Imbatible en espacio por el dinero. El 1.5 BlueHDi para kilómetros; el ë-Berlingo para reparto urbano y familias que cargan a diario.",
    strengths: ["Espacio interior y maletero descomunales", "Puertas laterales correderas", "Opción de 7 plazas (versión XL)"],
    watchouts: ["Correa 'húmeda' del 1.2 PureTech en series iniciales", "Comportamiento y aislamiento de furgoneta", "Consumo alto en la versión de gasolina"],
    faq: [
      { q: "¿El Berlingo es un coche o una furgoneta?", a: "Es una furgoneta de pasajeros: mecánica de coche, carrocería y practicidad de furgón. Prioriza espacio sobre confort y dinámica." },
      { q: "¿Cuántas plazas tiene?", a: "5 de serie; la versión XL (más larga) ofrece una tercera fila para 7 plazas." },
    ],
  }),

  /* ── Mazda ──────────────────────────────────────────────── */
  g({
    id: "mazda:2:dj", modelId: "mazda:2", code: "DJ", slug: "dj",
    startYear: 2014, bodyType: "Utilitario 5 puertas", lengthMm: 4065, bootLitres: 280,
    oneLiner: "Utilitario que se conduce como un coche grande: Skyactiv-G atmosférico, buen tacto y mecánica muy fiable.",
    intro:
      "La cuarta generación del Mazda2 monta el 1.5 Skyactiv-G atmosférico (75-115 CV) y un 1.5 Skyactiv-D diésel. Sin turbo: respuesta lineal, mantenimiento sencillo y gran fiabilidad. El restyling de 2019-2020 añadió mild-hybrid de 24 V.",
    verdict: "De los utilitarios más agradables de conducir y más fiables. El 1.5 Skyactiv-G de 90 CV es el punto dulce.",
    strengths: ["Tacto de conducción y calidad percibida superiores a la media", "Mecánica atmosférica muy fiable", "Mantenimiento sencillo y barato"],
    watchouts: ["Sin turbo: hay que revolucionarlo para ir con brío", "Maletero y plazas traseras algo justos", "Consumo urbano no tan bajo como un turbo pequeño"],
    faq: [
      { q: "¿El Mazda2 DJ es fiable?", a: "Mucho: el motor Skyactiv-G atmosférico no tiene turbo ni correa bañada en aceite, y la marca tiene buena reputación de fiabilidad." },
      { q: "¿Hay Mazda2 híbrido?", a: "El DJ lleva mild-hybrid de 24 V desde 2019-2020. Aparte, existe un 'Mazda2 Hybrid' que en realidad es un Toyota Yaris con emblema Mazda." },
    ],
  }),
  g({
    id: "mazda:3:bp", modelId: "mazda:3", code: "BP", slug: "bp",
    startYear: 2019, bodyType: "Compacto 5 puertas y Sedán", lengthMm: 4460, bootLitres: 358,
    oneLiner: "Compacto premium japonés: interior de gran calidad, Skyactiv-G/X gasolina y Skyactiv-D 1.8, con mecánica muy fiable.",
    intro:
      "La cuarta generación del Mazda3 subió el listón de calidad interior. Motores 2.0 Skyactiv-G (con mild-hybrid), 2.0 e-Skyactiv X (ignición por compresión) y 1.8 Skyactiv-D diésel. Sin turbo en gasolina: respuesta lineal y gran fiabilidad; consumo urbano no tan bajo como rivales sobrealimentados.",
    verdict: "Compacto premium alternativo. El 2.0 Skyactiv-G 122 es la compra más racional; el Skyactiv-X, solo si te compensa el sobreprecio.",
    strengths: ["Calidad interior y percepción de marca", "Mecánica atmosférica fiable y sencilla", "Comportamiento noble"],
    watchouts: ["Consumo urbano del gasolina atmosférico mayor que un turbo pequeño", "Maletero justo en la carrocería 5 puertas", "Skyactiv-X: ahorro real modesto frente al sobreprecio"],
    faq: [
      { q: "¿Qué es el motor Skyactiv-X?", a: "Un gasolina que se enciende por compresión (como un diésel) en ciertas condiciones para gastar menos. En la práctica el ahorro frente al Skyactiv-G 2.0 es pequeño." },
      { q: "¿El Mazda3 BP es fiable?", a: "Sí, la mecánica Skyactiv atmosférica tiene buena reputación; el diésel 1.8 pide recorridos largos y aceite específico." },
    ],
  }),
  g({
    id: "mazda:cx-30:dm", modelId: "mazda:cx-30", code: "DM", slug: "dm",
    startYear: 2019, bodyType: "SUV", lengthMm: 4395, bootLitres: 430,
    oneLiner: "El SUV del Mazda3: mismo interior de calidad y mecánica Skyactiv, con postura elevada y algo más de maletero.",
    intro:
      "El CX-30 comparte plataforma y motores con el Mazda3 BP. Skyactiv-G 2.0 (con mild-hybrid), e-Skyactiv X y Skyactiv-D 1.8, con tracción total opcional. B-SUV premium con calidad interior por encima de la media.",
    verdict: "B-SUV premium alternativo. El 2.0 Skyactiv-G 122/150 es la compra más racional.",
    strengths: ["Calidad interior y percepción de marca", "Mecánica Skyactiv fiable", "Buen equilibrio entre confort y dinámica"],
    watchouts: ["Consumo urbano del gasolina atmosférico", "Maletero algo justo para el segmento", "Skyactiv-X: sobreprecio poco justificado"],
    faq: [
      { q: "¿El CX-30 es un Mazda3 más alto?", a: "Comparte plataforma, motores e interior con el Mazda3; añade carrocería SUV, postura elevada y algo más de maletero." },
      { q: "¿Tiene tracción total?", a: "Opcional (i-Activ AWD) en varias versiones; para uso normal la delantera basta y consume menos." },
    ],
  }),
  g({
    id: "mazda:cx-5:kf", modelId: "mazda:cx-5", code: "KF", slug: "kf",
    startYear: 2017, bodyType: "SUV", lengthMm: 4550, bootLitres: 510,
    oneLiner: "SUV medio que se conduce fino: Skyactiv-G 2.0/2.5 gasolina y Skyactiv-D 2.2 diésel, con mecánica muy fiable.",
    intro:
      "La segunda generación del CX-5 mantiene la mecánica Skyactiv sin downsizing extremo. Gasolina 2.0 y 2.5 atmosféricos y diésel 2.2 (150/184 CV), con tracción total opcional. Interior que subió de calidad con los restyling. Fiabilidad por encima de la media del segmento.",
    verdict: "SUV medio noble y fiable. El 2.2 Skyactiv-D para kilómetros; el 2.0 gasolina para uso mixto sin prisas.",
    strengths: ["Comportamiento y tacto de conducción por encima de la media", "Mecánica Skyactiv fiable y sin sobrealimentación agresiva", "Calidad interior creciente"],
    watchouts: ["Skyactiv-D 2.2: carbonilla y dilución de aceite si es uso solo urbano", "Consumo del 2.5 gasolina algo alto", "Multimedia sin pantalla táctil en marcha (control por rueda)"],
    faq: [
      { q: "¿El diésel 2.2 del CX-5 da problemas?", a: "En uso mayoritariamente urbano puede acumular carbonilla y diluir aceite. Con recorridos largos y aceite específico es un motor sólido." },
      { q: "¿2.0 o 2.5 gasolina en el CX-5?", a: "El 2.5 va más holgado, sobre todo con tracción total, a cambio de más consumo. El 2.0 basta para uso tranquilo." },
    ],
  }),
  g({
    id: "mazda:mx-5:nd", modelId: "mazda:mx-5", code: "ND", slug: "nd",
    startYear: 2015, bodyType: "Descapotable 2 plazas", lengthMm: 3915, bootLitres: 130,
    oneLiner: "El roadster de referencia: ligero, de tracción trasera y con el Skyactiv-G 1.5/2.0 atmosférico. Puro placer de conducir.",
    intro:
      "La cuarta generación del MX-5 volvió a las raíces: poco peso (bajo 1.100 kg), tracción trasera y motores atmosféricos 1.5 (132 CV) y 2.0 (160-184 CV). También en versión RF de techo rígido retráctil. Fiable y barato de mantener para un descapotable.",
    verdict: "El descapotable divertido por antonomasia. El 1.5 para agilidad pura; el 2.0 para algo más de empuje.",
    strengths: ["Ligereza y equilibrio de chasis excepcionales", "Tracción trasera y cambio manual preciso", "Mecánica atmosférica fiable y económica"],
    watchouts: ["Solo 2 plazas y maletero mínimo", "Aislamiento acústico escaso con la capota puesta", "Poco práctico como único coche"],
    faq: [
      { q: "¿1.5 o 2.0 en el MX-5 ND?", a: "El 1.5 es más juguetón y ágil; el 2.0 (sobre todo tras la actualización a 184 CV de 2018) tiene más brío y sube más de vueltas." },
      { q: "¿El MX-5 ND es fiable?", a: "Sí, la mecánica Skyactiv atmosférica y la trasera son sencillas y probadas; es de los descapotables más baratos de mantener." },
    ],
  }),

  /* ── Fiat ───────────────────────────────────────────────── */
  g({
    id: "fiat:500:312", modelId: "fiat:500", code: "312", slug: "312",
    startYear: 2007, endYear: 2024, bodyType: "Urbano 3 puertas y Cabrio", lengthMm: 3571, bootLitres: 185,
    oneLiner: "Icono urbano de diseño: se compra con el corazón. Motor 1.2 atmosférico fiable y 0.9 TwinAir con carácter.",
    intro:
      "El Fiat 500 (312) tuvo una vida comercial larguísima con múltiples restyling. Motores 1.2 atmosférico, 0.9 TwinAir bicilíndrico turbo, 1.0 FireFly mild-hybrid y 1.3 MultiJet diésel. Compra emocional: se elige por estética, no por espacio ni por dinámica.",
    verdict: "Urbano de estilo. El 1.2 atmosférico es el más sencillo y fiable; el TwinAir tiene gracia pero gasta más de lo que promete.",
    strengths: ["Diseño atemporal y muy personalizable", "1.2 atmosférico fiable y barato", "Fácil de aparcar"],
    watchouts: ["Plazas traseras y maletero mínimos", "Consumo real del TwinAir lejos del homologado", "Materiales y aislamiento básicos"],
    faq: [
      { q: "¿Qué motor del Fiat 500 comprar?", a: "El 1.2 atmosférico por sencillez y fiabilidad. El 0.9 TwinAir tiene carácter pero consume más y algunas unidades gastan aceite." },
      { q: "¿El Fiat 500 eléctrico es este?", a: "No. El 500e eléctrico es un modelo nuevo y distinto (plataforma propia), no un 312 con batería." },
    ],
  }),
  g({
    id: "fiat:panda:319", modelId: "fiat:panda", code: "319", slug: "319",
    startYear: 2011, bodyType: "Urbano 5 puertas", lengthMm: 3686, bootLitres: 225,
    oneLiner: "Urbano práctico y honesto: interior aprovechado, opción 4x4 real y motores 1.2 atmosférico, TwinAir y GLP.",
    intro:
      "La tercera generación del Panda es un urbano funcional con una habitabilidad sorprendente para su tamaño. Motores 1.2 atmosférico, 0.9 TwinAir, 1.0 FireFly mild-hybrid, GLP y el 1.3 MultiJet diésel. La versión 4x4 es un todoterreno pequeño de verdad, muy apreciado en zonas rurales.",
    verdict: "Urbano racional. El 1.2 o el GLP para ciudad; el Panda 4x4 si vives en zona de montaña o pistas.",
    strengths: ["Habitabilidad aprovechada para el tamaño", "Panda 4x4 con capacidad real en pista", "Mecánica sencilla y barata"],
    watchouts: ["Materiales e insonorización básicos", "Consumo real del TwinAir", "Equipamiento de seguridad limitado en acabados de acceso"],
    faq: [
      { q: "¿El Panda 4x4 es un todoterreno de verdad?", a: "Para su tamaño, sí: tracción total permanente y buen despeje lo hacen muy capaz en pista y nieve, dentro de sus limitaciones de potencia." },
      { q: "¿Qué motor del Panda es más recomendable?", a: "El 1.2 atmosférico o la versión GLP por sencillez y coste de uso; el TwinAir tiene gracia pero gasta más." },
    ],
  }),
  g({
    id: "fiat:tipo:356", modelId: "fiat:tipo", code: "356", slug: "356",
    startYear: 2015, bodyType: "Compacto 5 puertas, Sedán y SW", lengthMm: 4368, bootLitres: 440,
    oneLiner: "Compacto barato y espacioso: pensado para ofrecer mucho por poco dinero, con mecánicas conocidas del grupo.",
    intro:
      "El Fiat Tipo (356) nació con vocación de coche 'value': carrocería grande, maletero amplio y precio contenido. Motores 1.4 atmosférico, 1.0/1.4/1.6 FireFly, 1.3/1.6 MultiJet diésel. Acabados y tecnología básicos, pero espacio de sobra.",
    verdict: "Mucho coche por poco dinero. El 1.6 MultiJet para kilómetros; el 1.4 gasolina para uso urbano sin prisas.",
    strengths: ["Espacio y maletero por encima de su precio", "SW familiar muy práctico", "Mecánicas del grupo conocidas"],
    watchouts: ["Materiales e insonorización básicos", "Motores atmosféricos justos de fuerza", "Multimedia y asistencias limitadas en acabados de acceso"],
    faq: [
      { q: "¿El Fiat Tipo es fiable?", a: "Mecánicamente usa motores conocidos del grupo (FireFly y MultiJet); lo justo son los acabados y el equipamiento, no la mecánica." },
      { q: "¿Qué maletero tiene el Tipo SW?", a: "En torno a 550 litros, muy amplio para el precio del coche." },
    ],
  }),
  g({
    id: "fiat:500x:334", modelId: "fiat:500x", code: "334", slug: "334",
    startYear: 2014, bodyType: "SUV", lengthMm: 4248, bootLitres: 350,
    oneLiner: "B-SUV con estética del Fiat 500: base compartida con Jeep Renegade y motores FireFly y MultiJet.",
    intro:
      "El Fiat 500X comparte plataforma con el Jeep Renegade. Motores 1.0/1.3/1.4 FireFly gasolina y 1.3/1.6 MultiJet diésel, con opción de tracción total en las primeras series. Estética simpática derivada del 500; comportamiento y consumo del montón.",
    verdict: "B-SUV de imagen. El 1.6 MultiJet para kilómetros; el 1.0/1.3 FireFly para ciudad.",
    strengths: ["Estética diferenciada derivada del Fiat 500", "Base compartida con el Jeep Renegade", "Buena posición de conducción"],
    watchouts: ["Consumo real algo alto", "Materiales interiores mejorables", "Caja de doble embrague de algunas versiones (tacto)"],
    faq: [
      { q: "¿El 500X es un Jeep Renegade con carrocería Fiat?", a: "Comparten plataforma y motores; cambian diseño, ajuste y, sobre todo, la capacidad todoterreno (el Renegade Trailhawk va mucho más allá)." },
      { q: "¿Hay 500X 4x4?", a: "Las primeras series ofrecieron tracción total con el 1.4 MultiAir y el 2.0 MultiJet; después la gama pasó a solo tracción delantera." },
    ],
  }),

  /* ── MINI ───────────────────────────────────────────────── */
  g({
    id: "mini:3-puertas:f56", modelId: "mini:3-puertas", code: "F56", slug: "f56",
    startYear: 2014, endYear: 2024, bodyType: "Utilitario 3 puertas", lengthMm: 3850, bootLitres: 211,
    oneLiner: "El MINI 'de verdad': el más ágil y con más carácter, con motores BMW B38/B48 y B37 diésel.",
    intro:
      "La tercera generación del MINI 3 puertas (F56) sobre plataforma UKL de BMW. Motores B38 (Cooper 1.5), B48 (Cooper S 2.0) y B37 diésel (One D/Cooper D). Tacto de conducción de referencia en el segmento; maletero y plazas traseras mínimos. El restyling de 2018 estrenó faros y multimedia.",
    verdict: "El utilitario más divertido de conducir. El Cooper 1.5 es el punto dulce; el Cooper S para quien quiere prestaciones.",
    strengths: ["Agilidad y tacto de conducción de referencia", "Calidad percibida e imagen", "Motores BMW conocidos"],
    watchouts: ["Maletero y plazas traseras mínimos", "Carbonilla en admisión de los gasolina de inyección directa", "Neumáticos runflat y recambios caros"],
    faq: [
      { q: "¿Qué motor lleva el MINI Cooper F56?", a: "El tricilíndrico 1.5 turbo de BMW (B38), con unos 136 CV. El Cooper S monta el 2.0 (B48) de unos 192 CV." },
      { q: "¿El MINI F56 es práctico?", a: "No es su fuerte: el maletero y el espacio trasero del 3 puertas son mínimos. Para algo de practicidad, el 5 puertas o el Countryman." },
    ],
  }),
  g({
    id: "mini:5-puertas:f55", modelId: "mini:5-puertas", code: "F55", slug: "f55",
    startYear: 2014, endYear: 2024, bodyType: "Utilitario 5 puertas", lengthMm: 3982, bootLitres: 278,
    oneLiner: "El MINI con dos puertas más y algo más de maletero: casi todo el carácter del 3 puertas, con un punto más de practicidad.",
    intro:
      "El MINI 5 puertas (F55) alarga la carrocería del F56 para añadir puertas traseras y algo de maletero. Mismos motores BMW B38/B48/B37. Sigue siendo un coche de conductor, no una familiar, pero gana usabilidad diaria.",
    verdict: "La versión sensata del MINI para uso diario. El Cooper 1.5 con 5 puertas es la compra más equilibrada.",
    strengths: ["Casi la misma agilidad que el 3 puertas", "Puertas traseras y maletero más usables", "Motores BMW conocidos"],
    watchouts: ["Sigue siendo justo de espacio para una familia", "Carbonilla en admisión de los gasolina de inyección directa", "Recambios y neumáticos caros"],
    faq: [
      { q: "¿Cuánto más grande es el MINI 5 puertas?", a: "Unos 16 cm más largo que el 3 puertas, con puertas traseras propias y algo más de maletero y espacio para las piernas atrás." },
      { q: "¿Pierde tacto frente al 3 puertas?", a: "Muy poco; sigue siendo de los utilitarios más ágiles del mercado." },
    ],
  }),
  g({
    id: "mini:countryman:f60", modelId: "mini:countryman", code: "F60", slug: "f60",
    startYear: 2017, endYear: 2024, bodyType: "SUV", lengthMm: 4299, bootLitres: 450,
    oneLiner: "El MINI práctico: SUV compacto sobre plataforma BMW, con espacio real, opción ALL4 y versión híbrida enchufable.",
    intro:
      "La segunda generación del Countryman comparte plataforma UKL con el BMW X1 F48. Motores B38/B48 gasolina, B37/B47 diésel, tracción ALL4 opcional y el híbrido enchufable Cooper SE ALL4. Es el MINI con espacio y maletero de verdad.",
    verdict: "El MINI para quien necesita espacio. El Cooper D o el Cooper 1.5 son las opciones racionales; el SE si cargas a diario.",
    strengths: ["Espacio y maletero reales", "Comparte mecánica con el BMW X1", "Opción de tracción total ALL4"],
    watchouts: ["Cadena y EGR de los diésel B47", "Recambios y neumáticos caros", "Cooper SE: autonomía eléctrica modesta"],
    faq: [
      { q: "¿El Countryman F60 es un BMW X1?", a: "Comparte plataforma y motores con el X1 F48; cambian diseño, interior y ajuste, con un aire mucho más 'MINI'." },
      { q: "¿Qué autonomía tiene el Countryman SE híbrido enchufable?", a: "Homologa en torno a 40-55 km eléctricos WLTP; en uso real, algo menos." },
    ],
  }),

  /* ── Volvo ──────────────────────────────────────────────── */
  g({
    id: "volvo:xc40:536", modelId: "volvo:xc40", code: "536", slug: "536",
    startYear: 2017, bodyType: "SUV", lengthMm: 4425, bootLitres: 460,
    oneLiner: "SUV compacto premium con enfoque en seguridad y diseño escandinavo: gasolina T3/T4, diésel D3/D4 y versiones híbridas.",
    intro:
      "El XC40 sobre plataforma CMA fue el primer Volvo compacto moderno. Motores 2.0 T3/T4/T5 gasolina, 2.0 D3/D4 diésel, mild-hybrid B3/B4 y el híbrido enchufable T4/T5 Recharge, además del eléctrico. Interior de calidad y equipamiento de seguridad de serie muy completo.",
    verdict: "SUV compacto premium con personalidad. El D4 diésel para kilómetros; el B4 mild-hybrid para uso mixto.",
    strengths: ["Diseño e interior diferenciados", "Equipamiento de seguridad muy completo de serie", "Buen espacio y practicidad (detalles de habitáculo)"],
    watchouts: ["Consumo de aceite y cadena en algún 2.0 gasolina de primeras series", "Caja automática Aisin: revisar mantenimiento (cambio de aceite)", "Reparaciones de electrónica caras fuera de garantía"],
    faq: [
      { q: "¿Qué motor del XC40 comprar?", a: "El D4 diésel para muchos kilómetros; el B4 gasolina mild-hybrid para uso mixto; el Recharge enchufable solo si cargas a diario." },
      { q: "¿El XC40 es fiable?", a: "En general sí; conviene revisar el historial de consumo de aceite en los 2.0 gasolina iniciales y el mantenimiento de la caja automática." },
    ],
  }),
  g({
    id: "volvo:xc60:246", modelId: "volvo:xc60", code: "246", slug: "246",
    startYear: 2017, bodyType: "SUV", lengthMm: 4688, bootLitres: 505,
    oneLiner: "SUV medio premium centrado en confort y seguridad: D4 diésel sobrio, B5 mild-hybrid y T6/T8 híbridos enchufables.",
    intro:
      "La segunda generación del XC60 sobre plataforma SPA. Motores 2.0 D3/D4 diésel, 2.0 T5 gasolina, mild-hybrid B4/B5 y los híbridos enchufables T6/T8 Recharge. Confort de marcha y aislamiento de nivel alto; el equipamiento de seguridad es una de sus señas.",
    verdict: "SUV medio premium confortable. El D4 diésel para kilómetros; el B5 mild-hybrid para uso mixto; el T8 solo si cargas.",
    strengths: ["Confort de marcha y aislamiento notables", "Equipamiento de seguridad muy completo", "Interior de gran calidad"],
    watchouts: ["Admisión y EGR de los 2.0 diésel con kilómetros", "Mantenimiento de la caja automática Aisin", "T8: complejidad y coste de la batería y el sistema"],
    faq: [
      { q: "¿Qué autonomía tiene el XC60 T8 Recharge?", a: "Según versión y año, en torno a 45-80 km WLTP; en uso real y con frío, bastante menos." },
      { q: "¿D4 o B5 en el XC60?", a: "El D4 diésel para quien hace muchos kilómetros de autovía; el B5 gasolina mild-hybrid para uso mixto con menos kilómetros anuales." },
    ],
  }),
  g({
    id: "volvo:v40:525", modelId: "volvo:v40", code: "525/526", slug: "525",
    startYear: 2012, endYear: 2019, bodyType: "Compacto 5 puertas", lengthMm: 4370, bootLitres: 335,
    oneLiner: "Compacto premium de ocasión con mucha seguridad por el dinero: D2/D3/D4 diésel y T2/T3 gasolina.",
    intro:
      "El Volvo V40 fue el compacto premium de la marca hasta 2019. Motores diésel D2 1.6/2.0, D3/D4 2.0 y gasolina T2/T3/T4/T5. Los primeros años montaban mecánicas de origen Ford/PSA; desde 2015-2016, los Drive-E propios (más eficientes). Equipamiento de seguridad muy completo, incluido airbag de peatón.",
    verdict: "Compra premium de ocasión con mucho contenido por el dinero. Busca un D2/D3 Drive-E (2016 en adelante) con historial.",
    strengths: ["Equipamiento de seguridad muy completo para su época", "Diésel Drive-E eficientes", "Diseño e interior que envejecen bien"],
    watchouts: ["Distinguir mecánicas antiguas (Ford/PSA) de las Drive-E propias", "Maletero justo para el segmento", "Caja Powershift de doble embrague en versiones antiguas"],
    faq: [
      { q: "¿Qué V40 comprar de segunda mano?", a: "Preferiblemente del restyling de 2016 en adelante, con motor Drive-E propio (D2/D3 diésel o T2/T3 gasolina) e historial de mantenimiento." },
      { q: "¿El V40 tiene buen maletero?", a: "Es de los más justos de su segmento; si necesitas espacio, un Golf o un Focus familiar rinden más." },
    ],
  }),

  /* ── Honda ──────────────────────────────────────────────── */
  g({
    id: "honda:civic:x", modelId: "honda:civic", code: "X (FC/FK)", slug: "x",
    startYear: 2017, endYear: 2021, bodyType: "Compacto 5 puertas y Sedán", lengthMm: 4518, bootLitres: 478,
    oneLiner: "Compacto japonés de conducción noble y maletero enorme: 1.0/1.5 VTEC Turbo gasolina y 1.6 i-DTEC diésel.",
    intro:
      "La décima generación del Civic bajó el centro de gravedad y mejoró el comportamiento. Motores 1.0 y 1.5 VTEC Turbo gasolina y 1.6 i-DTEC diésel. Maletero de referencia en el segmento. Algunos 1.0/1.5 Turbo de 2016-2018 tuvieron dilución de gasolina en el aceite en uso urbano en frío.",
    verdict: "Compacto racional y fiable. El 1.0 VTEC Turbo para ciudad, el 1.6 i-DTEC para kilómetros; vigilar dilución de aceite en los turbo iniciales.",
    strengths: ["Comportamiento y tacto de conducción por encima de la media", "Maletero enorme para el segmento", "Fiabilidad general de la marca"],
    watchouts: ["Dilución de gasolina en el aceite en 1.0/1.5 Turbo de 2016-2018 (uso urbano en frío)", "Visibilidad trasera reducida por el diseño", "Multimedia poco intuitiva antes de actualizaciones"],
    faq: [
      { q: "¿El Civic X 1.5 Turbo diluye aceite?", a: "Algunas unidades 2016-2018 en climas fríos y uso urbano sí; Honda aplicó actualizaciones de software. Revisar historial y nivel/olor del aceite." },
      { q: "¿Qué maletero tiene el Civic X 5 puertas?", a: "En torno a 478 litros, de los mayores del segmento de compactos." },
    ],
  }),
  g({
    id: "honda:jazz:gr", modelId: "honda:jazz", code: "GR (Mk4)", slug: "gr",
    startYear: 2020, bodyType: "Utilitario 5 puertas", lengthMm: 4044, bootLitres: 304,
    oneLiner: "Utilitario híbrido con habitabilidad de coche mayor: los asientos 'mágicos' y la fiabilidad marca de la casa.",
    intro:
      "La cuarta generación del Jazz se vende solo con el híbrido e:HEV (1.5 + motores eléctricos, sin caja convencional). Mantiene los asientos traseros 'Magic Seats' que se pliegan de formas únicas y una habitabilidad sorprendente para el tamaño exterior.",
    verdict: "El utilitario más práctico y de los más fiables. Ideal para ciudad y uso familiar ocasional.",
    strengths: ["Habitabilidad y modularidad de referencia (Magic Seats)", "Híbrido e:HEV eficiente en ciudad", "Fiabilidad y mantenimiento contenido"],
    watchouts: ["Motor ruidoso al acelerar con fuerza", "Precio de ocasión alto frente a rivales no híbridos", "Aislamiento y prestaciones justas en autovía"],
    faq: [
      { q: "¿El Jazz GR se enchufa?", a: "No, es un híbrido autorrecargable e:HEV; en ciudad circula casi siempre en eléctrico con el motor como generador." },
      { q: "¿Qué son los Magic Seats?", a: "Asientos traseros que se pliegan hacia abajo (suelo plano) o cuya banqueta sube en vertical, permitiendo cargar objetos altos detrás de las plazas delanteras." },
    ],
  }),
  g({
    id: "honda:hr-v:ru", modelId: "honda:hr-v", code: "RU (Mk2)", slug: "ru",
    startYear: 2015, endYear: 2021, bodyType: "SUV", lengthMm: 4294, bootLitres: 470,
    oneLiner: "B-SUV práctico con los Magic Seats del Jazz: buen maletero, habitabilidad y el 1.5/1.6 de Honda.",
    intro:
      "La segunda generación del HR-V comparte base con el Jazz de su época. Motores 1.5 i-VTEC atmosférico, 1.5 VTEC Turbo y 1.6 i-DTEC diésel. Hereda los asientos traseros modulares 'Magic Seats' y ofrece un maletero muy bueno para el segmento.",
    verdict: "B-SUV racional y fiable. El 1.5 atmosférico para ciudad sin prisas; el 1.6 i-DTEC para kilómetros.",
    strengths: ["Maletero y modularidad de referencia (Magic Seats)", "Fiabilidad general de la marca", "Buena habitabilidad para el tamaño"],
    watchouts: ["1.5 atmosférico justo de fuerza y con CVT elástica", "Multimedia poco intuitiva", "Dilución de aceite en el 1.5 Turbo de primeras series"],
    faq: [
      { q: "¿El HR-V RU comparte plataforma con el Jazz?", a: "Sí, deriva del Jazz de su generación e incluye sus asientos traseros modulares." },
      { q: "¿La caja CVT del HR-V da problemas?", a: "Es fiable con mantenimiento, pero su tacto es elástico y el motor sube de vueltas al acelerar. Pruébala antes de comprar." },
    ],
  }),
  g({
    id: "honda:cr-v:rw", modelId: "honda:cr-v", code: "RW (Mk5)", slug: "rw",
    startYear: 2018, endYear: 2023, bodyType: "SUV 5 y 7 plazas", lengthMm: 4600, bootLitres: 561,
    oneLiner: "SUV familiar fiable con opción de 7 plazas: 1.5 VTEC Turbo gasolina y el híbrido i-MMD, muy eficiente en ciudad.",
    intro:
      "La quinta generación del CR-V se vende con el 1.5 VTEC Turbo gasolina (5 o 7 plazas) y el híbrido i-MMD 2.0 (solo 5 plazas). Espacio y habitabilidad de referencia. El 1.5 Turbo de primeras series tuvo dilución de aceite en climas fríos.",
    verdict: "SUV familiar de tranquilidad. El híbrido i-MMD para uso urbano-mixto; el 1.5 Turbo si necesitas 7 plazas.",
    strengths: ["Espacio y habitabilidad de referencia", "Híbrido i-MMD muy eficiente en ciudad", "Fiabilidad general de la marca"],
    watchouts: ["Dilución de gasolina en el aceite del 1.5 Turbo (2018-2019, climas fríos)", "El híbrido no ofrece la variante de 7 plazas", "Consumo del 1.5 Turbo algo alto en autovía"],
    faq: [
      { q: "¿El CR-V híbrido tiene 7 plazas?", a: "No; la tercera fila solo está disponible con el 1.5 VTEC Turbo de gasolina." },
      { q: "¿El 1.5 Turbo del CR-V diluye aceite?", a: "Algunas unidades de 2018-2019 en climas fríos sí. Honda aplicó actualizaciones; revisar historial y nivel/olor del aceite." },
    ],
  }),
];

/* ═══════════════════════════════════════════════════════════════
   SEGUNDA AMPLIACIÓN — nuevas marcas (Alfa Romeo, Jeep, Land Rover,
   Lexus, DS, Suzuki, Mitsubishi, smart, Tesla, MG) y más modelos de
   las marcas ya presentes. Mismo criterio: datos orientativos.
   ═══════════════════════════════════════════════════════════════ */
const extraGenerations2: Generation[] = [
  /* ── Alfa Romeo ─────────────────────────────────────────── */
  g({
    id: "alfa-romeo:giulietta:940", modelId: "alfa-romeo:giulietta", code: "940", slug: "940",
    startYear: 2010, endYear: 2020, bodyType: "Compacto 5 puertas", lengthMm: 4351, bootLitres: 350,
    oneLiner: "Compacto italiano de carácter: dirección directa y buen chasis, con el 1.6/2.0 JTDm como motores de referencia.",
    intro:
      "La Giulietta apostó por el placer de conducir en el segmento compacto. Motores 1.4 TB Multiair gasolina y 1.6/2.0 JTDm diésel. El interior y algunos componentes eléctricos envejecen peor que la mecánica; a cambio, el chasis y la dirección están por encima de la media.",
    verdict: "Compacto con alma para quien prioriza cómo se conduce. El 1.6 JTDm es la compra más razonable de ocasión.",
    strengths: ["Dirección y chasis divertidos para el segmento", "Diseño que envejece bien", "1.6 JTDm sobrio"],
    watchouts: ["Electrónica y sensores con más averías que la media alemana", "Depreciación rápida (a favor del comprador de ocasión)", "Red de talleres más reducida que las generalistas"],
    faq: [
      { q: "¿La Giulietta es fiable?", a: "La mecánica es razonablemente sólida; el punto débil suele ser la electrónica y algunos sensores, más que el motor o la caja." },
      { q: "¿Qué diésel de la Giulietta comprar?", a: "El 1.6 JTDm para uso normal; el 2.0 JTDm si buscas más empuje y no te importa algo más de consumo." },
    ],
  }),
  g({
    id: "alfa-romeo:giulia:952", modelId: "alfa-romeo:giulia", code: "952", slug: "952",
    startYear: 2016, bodyType: "Berlina", lengthMm: 4643, bootLitres: 480,
    oneLiner: "Berlina de tracción trasera con ADN deportivo: la alternativa italiana al Serie 3, con el 2.0 diésel como opción racional.",
    intro:
      "La Giulia recuperó la tracción trasera para Alfa Romeo, con un chasis muy celebrado por la prensa especializada. Motores 2.0 Turbo gasolina, 2.0 JTDm diésel y la versión Quadrifoglio con V6 biturbo. Fiabilidad percibida por debajo de las alemanas, pero con un tacto de conducción distinto.",
    verdict: "Para quien busca algo diferente a las berlinas alemanas. El 2.0 JTDm de 160 CV es la compra más sensata.",
    strengths: ["Chasis y dirección de referencia en el segmento", "Diseño elegante y diferenciado", "Buen equilibrio de peso (motor trasero de la caja)"],
    watchouts: ["Fiabilidad percibida inferior a rivales alemanes", "Red de talleres y recambios más limitada", "Depreciación rápida"],
    faq: [
      { q: "¿La Giulia es de tracción trasera?", a: "Sí, con tracción total Q4 opcional en varias versiones." },
      { q: "¿Qué motor de la Giulia comprar de ocasión?", a: "El 2.0 JTDm diésel para uso normal; el 2.0 Turbo gasolina si haces pocos kilómetros." },
    ],
  }),
  g({
    id: "alfa-romeo:stelvio:949", modelId: "alfa-romeo:stelvio", code: "949", slug: "949",
    startYear: 2017, bodyType: "SUV", lengthMm: 4687, bootLitres: 525,
    oneLiner: "El SUV que mejor se conduce de su segmento: base de la Giulia, con tracción total Q4 y el 2.0 diésel como motor lógico.",
    intro:
      "El Stelvio comparte plataforma y filosofía con la Giulia. Motores 2.0 Turbo gasolina, 2.0 JTDm diésel y la versión Quadrifoglio con V6 biturbo. Chasis muy celebrado para un SUV; fiabilidad percibida algo por debajo de las alemanas.",
    verdict: "SUV con carácter deportivo poco común en el segmento. El 2.0 JTDm Q4 es la compra más equilibrada.",
    strengths: ["Comportamiento dinámico de referencia entre los SUV", "Diseño diferenciado", "Tracción total Q4 de serie en varias versiones"],
    watchouts: ["Fiabilidad percibida inferior a rivales alemanes", "Red de talleres más limitada", "Consumo alto en las versiones más potentes"],
    faq: [
      { q: "¿El Stelvio tiene tracción total?", a: "Sí, el sistema Q4 está disponible (y es de serie en varias versiones), con reparto de par hacia el eje trasero por defecto." },
      { q: "¿El Stelvio es fiable?", a: "Razonablemente, aunque la percepción general está por debajo de SUV alemanes equivalentes; revisar bien el historial de mantenimiento." },
    ],
  }),
  g({
    id: "alfa-romeo:mito:955", modelId: "alfa-romeo:mito", code: "955", slug: "955",
    startYear: 2008, endYear: 2018, bodyType: "Utilitario 3 puertas", lengthMm: 4063, bootLitres: 270,
    oneLiner: "Utilitario de diseño muy cuidado: se compra por estética y tacto, con el 1.3 JTDm como diésel más sobrio.",
    intro:
      "El MiTo comparte base con el Opel Corsa D/E de su época, con un chasis afinado por Alfa Romeo. Motores 0.9 TwinAir, 1.4 TB Multiair gasolina y 1.3/1.6 JTDm diésel. Compra emocional: diseño y tacto por encima de espacio y practicidad.",
    verdict: "Utilitario de estilo. El 1.3 JTDm para consumo bajo; el 1.4 TB Multiair para algo más de brío.",
    strengths: ["Diseño y acabado interior cuidados", "Buen tacto de dirección para el segmento", "1.3 JTDm muy sobrio"],
    watchouts: ["Maletero y plazas traseras reducidos", "Electrónica y sensores más delicados que la media", "Recambios y mano de obra más caros que un utilitario generalista"],
    faq: [
      { q: "¿El MiTo comparte plataforma con el Opel Corsa?", a: "Sí, con la generación Corsa D/E, aunque con un chasis y una suspensión propios afinados por Alfa Romeo." },
      { q: "¿Es práctico para el día a día?", a: "No es su punto fuerte: solo 3 puertas y maletero y plazas traseras justos. Se elige por estética y conducción." },
    ],
  }),

  /* ── Jeep ───────────────────────────────────────────────── */
  g({
    id: "jeep:renegade:bu", modelId: "jeep:renegade", code: "BU", slug: "bu",
    startYear: 2014, bodyType: "SUV", lengthMm: 4245, bootLitres: 351,
    oneLiner: "SUV pequeño con look de todoterreno de verdad: comparte base con el Fiat 500X, con opción 4x4 Active Drive.",
    intro:
      "El Jeep Renegade comparte plataforma con el Fiat 500X. Motores 1.0/1.3 FireFly gasolina y 1.6/2.0 MultiJet diésel, con tracción total 4x4 en varias versiones. Estética robusta y buena capacidad todocamino para el segmento; comportamiento en asfalto más blando que un SUV convencional.",
    verdict: "SUV pequeño con vocación aventurera. El 1.6 MultiJet para carretera; el 4x4 si de verdad pisas pista.",
    strengths: ["Estética y detalles de diseño diferenciados", "Buena capacidad todocamino para el segmento con 4x4", "Base mecánica compartida con Fiat 500X, conocida"],
    watchouts: ["Consumo real algo alto", "Comportamiento en carretera más blando que rivales convencionales", "Materiales interiores mejorables en acabados de acceso"],
    faq: [
      { q: "¿El Renegade es un todoterreno de verdad?", a: "Las versiones Trailhawk con 4x4 y reductora tienen capacidad real fuera de asfalto; las de tracción delantera son un SUV convencional con estética robusta." },
      { q: "¿Qué motor del Renegade comprar?", a: "El 1.6 MultiJet diésel para uso normal; el 1.3 FireFly turbo gasolina si haces pocos kilómetros." },
    ],
  }),
  g({
    id: "jeep:compass:mp", modelId: "jeep:compass", code: "MP", slug: "mp",
    startYear: 2017, bodyType: "SUV", lengthMm: 4404, bootLitres: 438,
    oneLiner: "SUV compacto familiar con opción 4x4 real: comparte base con el Renegade, con más espacio y equipamiento.",
    intro:
      "El Compass MP comparte plataforma con el Renegade pero con más tamaño y equipamiento. Motores 1.3/1.6 FireFly gasolina y 1.6 MultiJet diésel, con 4x4 Active Drive opcional. Buena posición de conducción y capacidad todocamino para el segmento.",
    verdict: "SUV familiar con carácter aventurero. El 1.6 MultiJet para kilómetros; el 4x4 si de verdad lo necesitas.",
    strengths: ["Buen espacio y posición de conducción", "Capacidad todocamino real con 4x4", "Diseño robusto y diferenciado"],
    watchouts: ["Consumo real algo alto", "Multimedia y asistencias básicas en acabados de acceso", "Depreciación algo más rápida que las referencias del segmento"],
    faq: [
      { q: "¿El Compass es un Renegade grande?", a: "Comparte plataforma y buena parte de los motores; es más largo, con más espacio interior y equipamiento." },
      { q: "¿Necesito el 4x4 en el Compass?", a: "Solo si haces pista o vives en zona de nieve habitual; para uso normal la tracción delantera basta y consume menos." },
    ],
  }),

  /* ── Land Rover ─────────────────────────────────────────── */
  g({
    id: "land-rover:evoque:l551", modelId: "land-rover:evoque", code: "L551 (2ª gen)", slug: "l551",
    startYear: 2019, bodyType: "SUV", lengthMm: 4371, bootLitres: 591,
    oneLiner: "SUV premium compacto de diseño: motores Ingenium propios, buen maletero y capacidad todocamino de sobra para el uso normal.",
    intro:
      "La segunda generación del Evoque mantiene el diseño de referencia del segmento. Motores Ingenium 2.0 diésel (D150/D180/D240) y gasolina (P200/P250), con mild-hybrid de 48 V en varias versiones y tracción total. Interior de calidad; mantenimiento notablemente más caro que un SUV generalista.",
    verdict: "SUV premium de diseño. El D180 diésel con mantenimiento documentado es la opción más razonable de ocasión.",
    strengths: ["Diseño de referencia en el segmento premium", "Buena capacidad todocamino para el uso real", "Interior de calidad"],
    watchouts: ["Coste de mantenimiento y reparaciones elevado", "Electrónica compleja y sensible", "Consumo real alto para su tamaño"],
    faq: [
      { q: "¿El Evoque es fiable?", a: "Ha mejorado respecto a generaciones anteriores, pero sigue teniendo un coste de mantenimiento y de reparaciones por encima de la media del segmento." },
      { q: "¿Qué motor del Evoque comprar?", a: "El D180 diésel para uso mixto con kilómetros; el P200/P250 gasolina si haces pocos kilómetros al año." },
    ],
  }),
  g({
    id: "land-rover:discovery-sport:l550", modelId: "land-rover:discovery-sport", code: "L550", slug: "l550",
    startYear: 2019, bodyType: "SUV 5/7 plazas", lengthMm: 4597, bootLitres: 897,
    oneLiner: "SUV familiar premium con opción de 7 plazas: capacidad todocamino real y motores Ingenium compartidos con el Evoque.",
    intro:
      "El Discovery Sport comparte plataforma y motores Ingenium con el Evoque, con más espacio y una tercera fila opcional. Diésel D150/D180/D240 y gasolina P200/P250, con tracción total. Capacidad todocamino de referencia en el segmento premium.",
    verdict: "SUV familiar premium con capacidad real. El D180 con historial documentado es la opción más sensata.",
    strengths: ["Espacio y opción de 7 plazas poco común en SUV premium", "Capacidad todocamino de referencia", "Motores Ingenium compartidos con el Evoque"],
    watchouts: ["Coste de mantenimiento y reparaciones elevado", "Tercera fila muy justa para adultos", "Consumo real alto"],
    faq: [
      { q: "¿El Discovery Sport tiene 7 plazas de verdad?", a: "La tercera fila es opcional y sirve para niños o trayectos cortos, como en la mayoría de SUV de 7 plazas de este tamaño." },
      { q: "¿Comparte motor con el Evoque?", a: "Sí, la gama Ingenium diésel y gasolina es la misma en ambos modelos." },
    ],
  }),

  /* ── Lexus ──────────────────────────────────────────────── */
  g({
    id: "lexus:ct:default", modelId: "lexus:ct", code: "ZWA10", slug: "zwa10",
    startYear: 2011, endYear: 2020, bodyType: "Compacto 5 puertas", lengthMm: 4360, bootLitres: 375,
    oneLiner: "Compacto premium híbrido de fiabilidad japonesa: comparte mecánica con el Toyota Prius/Auris de su época.",
    intro:
      "El Lexus CT 200h fue el compacto de acceso a la marca. Híbrido 1.8 (compartido con Toyota) con la fiabilidad y el bajo mantenimiento marca de la casa. Prestaciones ajustadas si se exige, pero consumo urbano muy bajo y cero sustos mecánicos.",
    verdict: "Compacto premium de tranquilidad total. Ideal para quien hace ciudad y quiere cero disgustos mecánicos.",
    strengths: ["Fiabilidad mecánica sobresaliente", "Consumo urbano muy bajo", "Interior de calidad Lexus"],
    watchouts: ["Prestaciones ajustadas al exigir el motor", "Maletero algo reducido por la batería", "Suspensión firme en las versiones F Sport"],
    faq: [
      { q: "¿El CT 200h comparte motor con el Prius?", a: "Sí, el conjunto híbrido 1.8 es esencialmente el mismo que el del Toyota Prius/Auris Hybrid de su época." },
      { q: "¿Se enchufa?", a: "No, es un híbrido autorrecargable, sin versión enchufable." },
    ],
  }),
  g({
    id: "lexus:nx:az10", modelId: "lexus:nx", code: "AZ10", slug: "az10",
    startYear: 2014, endYear: 2021, bodyType: "SUV", lengthMm: 4640, bootLitres: 475,
    oneLiner: "SUV premium japonés con diseño rompedor: el NX 300h híbrido combina fiabilidad Toyota/Lexus con acabado de nivel superior.",
    intro:
      "El NX aportó un diseño muy angular a la gama SUV de Lexus. Motores 2.0 turbo gasolina (NX 200t/300) y el híbrido 2.5 (NX 300h). El híbrido, con tracción total E-Four opcional, hereda la fiabilidad habitual de la marca.",
    verdict: "SUV premium con la fiabilidad de Lexus. El NX 300h híbrido es la compra más razonable de ocasión.",
    strengths: ["Fiabilidad mecánica y bajo mantenimiento", "Diseño diferenciado", "Interior de calidad"],
    watchouts: ["Maletero algo reducido en el híbrido", "Visibilidad trasera limitada por el diseño", "Precio de ocasión con prima sobre rivales generalistas"],
    faq: [
      { q: "¿El NX 300h tiene tracción total?", a: "Opcionalmente, con el sistema E-Four que añade un motor eléctrico en el eje trasero." },
      { q: "¿Qué NX comprar de ocasión?", a: "El 300h híbrido para tranquilidad y consumo bajo; el 200t/300 turbo gasolina si buscas más prestaciones y haces menos kilómetros." },
    ],
  }),
  g({
    id: "lexus:ux:default", modelId: "lexus:ux", code: "MZAA10", slug: "mzaa10",
    startYear: 2018, bodyType: "SUV", lengthMm: 4495, bootLitres: 320,
    oneLiner: "SUV compacto premium solo con híbrido: el UX 250h combina consumo bajísimo con la fiabilidad de Lexus.",
    intro:
      "El UX es el SUV compacto de Lexus, con el híbrido 2.0 (UX 250h) como única mecánica de combustión, además de la versión eléctrica UX 300e. Maletero reducido para el segmento; a cambio, fiabilidad y consumo de referencia.",
    verdict: "SUV compacto premium de bajo mantenimiento. El UX 250h es de lo más tranquilo que se puede comprar.",
    strengths: ["Fiabilidad y bajo mantenimiento", "Consumo urbano muy bajo", "Interior de calidad"],
    watchouts: ["Maletero reducido para el segmento", "Prestaciones ajustadas al exigir", "Visibilidad trasera limitada"],
    faq: [
      { q: "¿El UX 250h tiene tracción total?", a: "Sí, opcionalmente con el sistema E-Four de motor eléctrico trasero." },
      { q: "¿Qué maletero tiene el UX?", a: "Unos 320 litros, por debajo de la media del segmento debido al paquete de baterías." },
    ],
  }),
  g({
    id: "lexus:rx:al20", modelId: "lexus:rx", code: "AL20 (4ª gen)", slug: "al20",
    startYear: 2015, endYear: 2022, bodyType: "SUV", lengthMm: 4890, bootLitres: 539,
    oneLiner: "SUV premium grande de referencia en fiabilidad: el RX 450h híbrido lleva décadas siendo una apuesta segura.",
    intro:
      "La cuarta generación del RX consolidó el diseño angular de Lexus. Híbrido 3.5 V6 (RX 450h) con tracción total E-Four, y gasolina turbo 2.0 (RX 200t/300) en menor medida. Fiabilidad de referencia en el segmento SUV premium.",
    verdict: "SUV premium grande con la fiabilidad más probada del segmento. El RX 450h es una compra de mucha tranquilidad.",
    strengths: ["Fiabilidad de referencia en SUV premium", "Confort de marcha notable", "Tracción total E-Four de serie en el híbrido"],
    watchouts: ["Consumo alto fuera de ciudad pese a ser híbrido", "Maletero algo justo para el tamaño exterior", "Precio de ocasión con prima sobre rivales alemanes"],
    faq: [
      { q: "¿El RX 450h es fiable?", a: "Muy: es de los SUV premium con mejor reputación de fiabilidad y menor coste de mantenimiento del segmento." },
      { q: "¿Cuánto consume el RX 450h fuera de ciudad?", a: "En autovía puede subir a 8-9 l/100 km reales; su punto fuerte es el consumo urbano y mixto." },
    ],
  }),

  /* ── DS Automobiles ─────────────────────────────────────── */
  g({
    id: "ds:ds3-crossback:default", modelId: "ds:ds3-crossback", code: "1ª gen", slug: "1",
    startYear: 2019, bodyType: "SUV", lengthMm: 4118, bootLitres: 350,
    oneLiner: "B-SUV premium sobre base PSA: interior con acabados diferenciados y la opción eléctrica E-Tense.",
    intro:
      "El DS 3 Crossback comparte plataforma CMP con Peugeot 2008 y Opel Mokka, con un posicionamiento premium en acabados. Motores 1.2 PureTech, 1.5 BlueHDi y eléctrico E-Tense. Aplican las mismas cautelas del PureTech con la correa en series iniciales.",
    verdict: "B-SUV premium de imagen. El E-Tense para ciudad; el 1.2 PureTech (verificando correa) o el BlueHDi para el resto.",
    strengths: ["Acabados interiores diferenciados", "Base mecánica conocida del grupo Stellantis", "Opción eléctrica E-Tense"],
    watchouts: ["Correa 'húmeda' del 1.2 PureTech en series iniciales", "Visibilidad y maletero algo justos", "Red de talleres DS más reducida"],
    faq: [
      { q: "¿El DS 3 Crossback es un Peugeot 2008 de lujo?", a: "Comparten plataforma y motores; DS apuesta por acabados y materiales interiores más cuidados y una imagen premium." },
      { q: "¿Qué autonomía tiene el E-Tense?", a: "Homologa en torno a 320 km WLTP; en uso real, algo menos según climatización y velocidad." },
    ],
  }),
  g({
    id: "ds:ds7-crossback:default", modelId: "ds:ds7-crossback", code: "1ª gen", slug: "1",
    startYear: 2018, bodyType: "SUV", lengthMm: 4573, bootLitres: 555,
    oneLiner: "SUV premium francés con suspensión activa opcional: PureTech, BlueHDi e híbrido enchufable E-Tense 4x4.",
    intro:
      "El DS 7 Crossback es el buque insignia de la marca, con la suspensión activa 'DS Active Scan' opcional que lee la carretera con cámara. Motores 1.2/1.6 PureTech, 1.5/2.0 BlueHDi e híbrido enchufable E-Tense con tracción total.",
    verdict: "SUV premium diferenciado. El BlueHDi para kilómetros; el E-Tense 4x4 solo si cargas a diario.",
    strengths: ["Confort de suspensión (Active Scan en versiones que la equipan)", "Interior con materiales cuidados", "E-Tense con tracción total eléctrica"],
    watchouts: ["Correa 'húmeda' del PureTech en series iniciales", "Electrónica compleja en las versiones con Active Scan", "Red de talleres DS más reducida"],
    faq: [
      { q: "¿Qué es la suspensión DS Active Scan?", a: "Un sistema opcional que usa una cámara para leer el estado de la carretera y anticipar la respuesta de la suspensión." },
      { q: "¿El E-Tense 4x4 tiene tracción total?", a: "Sí, mediante un motor eléctrico en el eje trasero, además de la combustión y el eléctrico delanteros." },
    ],
  }),
  g({
    id: "ds:ds4:default", modelId: "ds:ds4", code: "2ª gen", slug: "2",
    startYear: 2021, bodyType: "Compacto 5 puertas (crossover)", lengthMm: 4400, bootLitres: 430,
    oneLiner: "Compacto premium con aire de crossover: PureTech, BlueHDi e híbrido enchufable, con acabados diferenciados.",
    intro:
      "La segunda generación del DS 4 (ya sin el 'Citroën' del nombre) comparte plataforma EMP2 con el Peugeot 308 y el Opel Astra L. Motores 1.2 PureTech, 1.5 BlueHDi e híbrido enchufable E-Tense 225/360.",
    verdict: "Compacto premium diferenciado. El BlueHDi para kilómetros; el E-Tense solo si cargas a diario.",
    strengths: ["Acabados y materiales interiores cuidados", "Base mecánica moderna de Stellantis", "Buen equipamiento de confort"],
    watchouts: ["Modelo reciente: historial de fiabilidad todavía corto", "Visibilidad trasera limitada por el diseño", "Red de talleres DS más reducida"],
    faq: [
      { q: "¿El DS 4 es un Peugeot 308 de lujo?", a: "Comparte plataforma y buena parte de los motores; DS apuesta por un posicionamiento y unos acabados premium." },
      { q: "¿Hay DS 4 Cross?", a: "Sí, una variante con protecciones y look ligeramente más de crossover, sin cambios mecánicos relevantes." },
    ],
  }),

  /* ── Suzuki ─────────────────────────────────────────────── */
  g({
    id: "suzuki:swift:az", modelId: "suzuki:swift", code: "ZC/AZ", slug: "az",
    startYear: 2017, bodyType: "Utilitario 5 puertas", lengthMm: 3840, bootLitres: 265,
    oneLiner: "Utilitario ligero y ágil: de los más divertidos de conducir del segmento, con mecánica sencilla y muy fiable.",
    intro:
      "El Swift de esta generación bajó de peso respecto a la anterior, lo que se nota en el comportamiento. Motores 1.2 Dualjet mild-hybrid atmosférico y 1.4 Boosterjet turbo (Swift Sport), con opción de tracción total AllGrip.",
    verdict: "Utilitario ágil y fiable. El 1.2 Dualjet para uso normal; el Swift Sport 1.4 Boosterjet si buscas diversión.",
    strengths: ["Ligereza y agilidad de conducción", "Mecánica sencilla y muy fiable", "Opción de tracción total AllGrip poco común en el segmento"],
    watchouts: ["Maletero pequeño para el segmento", "Insonorización básica", "Equipamiento de asistencias limitado en acabados de acceso"],
    faq: [
      { q: "¿El Swift es fiable?", a: "Mucho: mecánica sencilla, sin turbo en la versión de acceso y con la reputación de fiabilidad habitual de Suzuki." },
      { q: "¿El Swift tiene tracción total?", a: "Opcionalmente, con el sistema AllGrip, poco habitual en un utilitario de este tamaño." },
    ],
  }),
  g({
    id: "suzuki:vitara:ly", modelId: "suzuki:vitara", code: "LY", slug: "ly",
    startYear: 2015, bodyType: "SUV", lengthMm: 4175, bootLitres: 375,
    oneLiner: "B-SUV con capacidad todocamino real disponible: 1.4 Boosterjet turbo y tracción total AllGrip opcional.",
    intro:
      "El Vitara LY recuperó el espíritu todocamino accesible de la saga Suzuki. Motores 1.0/1.4 Boosterjet turbo gasolina y 1.6 diésel (en su día), con tracción total AllGrip opcional y modos de conducción para pista.",
    verdict: "B-SUV honesto con capacidad real. El 1.4 Boosterjet AllGrip es la versión más completa.",
    strengths: ["Capacidad todocamino real con AllGrip", "Mecánica sencilla y fiable", "Buen precio de compra y mantenimiento"],
    watchouts: ["Insonorización y materiales básicos", "Equipamiento tecnológico limitado frente a rivales generalistas", "Maletero algo justo"],
    faq: [
      { q: "¿El Vitara AllGrip es un 4x4 de verdad?", a: "Tiene tracción total con modos de conducción (nieve, barro, bloqueo) que le dan una capacidad real superior a la media de los B-SUV, sin ser un todoterreno puro." },
      { q: "¿Hay Vitara híbrido?", a: "Las versiones más recientes incorporan mild-hybrid de 48 V sobre el motor Boosterjet." },
    ],
  }),
  g({
    id: "suzuki:jimny:jb74", modelId: "suzuki:jimny", code: "JB74", slug: "jb74",
    startYear: 2018, bodyType: "Todoterreno", lengthMm: 3480, bootLitres: 85,
    oneLiner: "El todoterreno pequeño de verdad: chasis en escalera, reductora y tracción total conectable. Poco práctico, mucha capacidad.",
    intro:
      "El Jimny JB74 es de los pocos todoterrenos auténticos que quedan a este tamaño: chasis en escalera, suspensión de eje rígido y caja reductora. Motor 1.5 atmosférico. Maletero y confort de carretera muy limitados a cambio de capacidad todocamino genuina.",
    verdict: "Para quien de verdad necesita ir fuera de pista. Poco coche para el día a día familiar.",
    strengths: ["Capacidad todocamino genuina (reductora, ejes rígidos)", "Mecánica sencilla y muy fiable", "Tamaño compacto para moverse por pistas estrechas"],
    watchouts: ["Maletero y plazas traseras casi inexistentes", "Comportamiento en carretera y autovía incómodo", "Consumo alto para su tamaño"],
    faq: [
      { q: "¿El Jimny es un todoterreno de verdad?", a: "Sí, con chasis en escalera, ejes rígidos y reductora: capacidad genuina muy por encima de cualquier B-SUV con 'modo nieve'." },
      { q: "¿Sirve como coche familiar?", a: "No es su terreno: maletero mínimo y solo 4 plazas muy justas. Es un coche especializado." },
    ],
  }),

  /* ── Mitsubishi ─────────────────────────────────────────── */
  g({
    id: "mitsubishi:asx:ga", modelId: "mitsubishi:asx", code: "GA (restyling)", slug: "ga",
    startYear: 2016, endYear: 2023, bodyType: "SUV", lengthMm: 4365, bootLitres: 393,
    oneLiner: "SUV compacto sencillo y sin sobresaltos: mecánica atmosférica conocida y opción de tracción total 4WD.",
    intro:
      "El ASX es un SUV compacto de planteamiento conservador. Motor 1.6 MIVEC atmosférico gasolina y, en su día, 1.6/2.2 diésel, con tracción total 4WD opcional. Mecánica sencilla, sin turbo ni correa bañada en aceite.",
    verdict: "SUV sin sorpresas. El 1.6 MIVEC para uso urbano-mixto sin prisas.",
    strengths: ["Mecánica sencilla y fiable", "Buena garantía de fábrica en su día", "Precio de ocasión contenido"],
    watchouts: ["1.6 atmosférico justo de fuerza con carga", "Diseño y tecnología algo desfasados frente a rivales recientes", "Insonorización básica"],
    faq: [
      { q: "¿El ASX es fiable?", a: "Sí, es una mecánica sencilla y muy probada, sin turbo en la versión de acceso ni correa bañada en aceite." },
      { q: "¿Tiene tracción total?", a: "Opcionalmente, con el sistema 4WD en varias versiones." },
    ],
  }),
  g({
    id: "mitsubishi:outlander:phev3", modelId: "mitsubishi:outlander", code: "III PHEV", slug: "iii-phev",
    startYear: 2013, endYear: 2021, bodyType: "SUV 5/7 plazas", lengthMm: 4695, bootLitres: 463,
    oneLiner: "El SUV híbrido enchufable pionero: años de recorrido en el mercado, tracción total 100% eléctrica y mecánica muy probada.",
    intro:
      "El Outlander PHEV fue de los primeros híbridos enchufables masivos, con tracción total mediante dos motores eléctricos (uno por eje) y un 2.4 de gasolina como generador/apoyo. Años de historial en flotas y particulares avalan su fiabilidad; conviene revisar el estado de la batería en unidades de más recorrido.",
    verdict: "Híbrido enchufable de fiabilidad probada por el tiempo. Ideal si puedes cargarlo a diario y aprovechas la tracción total eléctrica.",
    strengths: ["Tecnología PHEV muy probada por los años en el mercado", "Tracción total sin transmisión mecánica", "Espacio y maletero de SUV familiar"],
    watchouts: ["Consumo alto en autovía si la batería está descargada", "Revisar salud de la batería de tracción en unidades de muchos km", "Maletero algo reducido por el paquete de baterías"],
    faq: [
      { q: "¿Cuánta autonomía eléctrica tiene el Outlander PHEV?", a: "Según año y versión, entre 30 y 45 km WLTP aproximadamente; en uso real, algo menos con climatización." },
      { q: "¿Cómo funciona la tracción total del Outlander PHEV?", a: "Cada eje lleva su propio motor eléctrico; no hay eje de transmisión mecánico entre ambos." },
    ],
  }),
  g({
    id: "mitsubishi:space-star:default", modelId: "mitsubishi:space-star", code: "3ª gen", slug: "3",
    startYear: 2013, bodyType: "Urbano 5 puertas", lengthMm: 3845, bootLitres: 235,
    oneLiner: "Urbano económico con buen maletero para su clase: mecánica atmosférica sencilla y garantía de fábrica larga.",
    intro:
      "El Space Star es un urbano de planteamiento económico, con motor 1.0/1.2 atmosférico. Maletero y habitabilidad correctos para el segmento; materiales e insonorización básicos, compensados por un precio de compra y mantenimiento bajos.",
    verdict: "Urbano de bajo coste con mecánica fiable. Correcto para ciudad, justo en autovía.",
    strengths: ["Precio de compra y mantenimiento bajos", "Buen maletero para el segmento", "Mecánica atmosférica sencilla"],
    watchouts: ["Insonorización y materiales básicos", "Motor justo de fuerza en autovía", "Equipamiento de seguridad limitado en acabados de acceso"],
    faq: [
      { q: "¿El Space Star es fiable?", a: "Sí, mecánica sencilla y atmosférica sin complicaciones; el punto flojo son los acabados, no el motor." },
      { q: "¿Qué maletero tiene?", a: "En torno a 235 litros, por encima de la media de los urbanos de su tamaño." },
    ],
  }),

  /* ── smart ──────────────────────────────────────────────── */
  g({
    id: "smart:fortwo:453", modelId: "smart:fortwo", code: "453", slug: "453",
    startYear: 2014, endYear: 2023, bodyType: "Urbano 2 plazas", lengthMm: 2695, bootLitres: 260,
    oneLiner: "El urbano más corto del mercado: aparca donde nadie más puede, con motor trasero y giro cortísimo. También en eléctrico.",
    intro:
      "El smart ForTwo (453), desarrollado junto a Renault (base compartida con el Twingo III), lleva el motor detrás. Versión de gasolina 1.0 (atmosférico o turbo) y la eléctrica EQ ForTwo. Pensado en exclusiva para ciudad: dos plazas y maletero mínimo.",
    verdict: "El urbano definitivo para aparcar sin esfuerzo. Nada de espacio ni de autovía; solo ciudad.",
    strengths: ["Facilidad de aparcamiento y giro incomparables", "Versión eléctrica EQ con buena autonomía urbana", "Mecánica sencilla"],
    watchouts: ["Solo 2 plazas y maletero mínimo", "Incómodo y ruidoso en autovía", "Precio de ocasión no siempre bajo pese al tamaño"],
    faq: [
      { q: "¿El smart ForTwo 453 comparte base con el Twingo?", a: "Sí, se desarrolló junto a Renault y comparte plataforma con el Twingo III, con el motor también en posición trasera." },
      { q: "¿Cuánta autonomía tiene el smart eléctrico?", a: "Homologa en torno a 130-160 km WLTP según año; en ciudad, suficiente para el uso típico de un urbano." },
    ],
  }),
  g({
    id: "smart:forfour:453", modelId: "smart:forfour", code: "453", slug: "453",
    startYear: 2014, endYear: 2022, bodyType: "Urbano 5 puertas", lengthMm: 3495, bootLitres: 185,
    oneLiner: "El smart con cuatro plazas de verdad: mismo giro cortísimo que el ForTwo, con algo más de espacio y maletero.",
    intro:
      "El ForFour comparte plataforma y motor trasero con el ForTwo y el Twingo III. Motor 1.0 (atmosférico o turbo) y versión eléctrica EQ. Gana practicidad frente al ForTwo sin perder demasiada agilidad urbana.",
    verdict: "La opción práctica de la gama smart. Sigue siendo pequeño, pero con cuatro plazas usables.",
    strengths: ["Giro y agilidad urbana heredados del ForTwo", "Cuatro plazas reales", "Mecánica sencilla"],
    watchouts: ["Maletero todavía reducido", "Justo en autovía y con el coche cargado", "Insonorización básica"],
    faq: [
      { q: "¿El ForFour es un Twingo con emblema smart?", a: "Comparten plataforma y motor trasero; cambian diseño, acabados y algún detalle de equipamiento." },
      { q: "¿Merece la pena frente al ForTwo?", a: "Si necesitas llevar pasajeros atrás con cierta regularidad, sí; si vas a ir casi siempre solo o en pareja, el ForTwo gira aún mejor." },
    ],
  }),

  /* ── Tesla ──────────────────────────────────────────────── */
  g({
    id: "tesla:model-3:default", modelId: "tesla:model-3", code: "1ª gen", slug: "1",
    startYear: 2019, bodyType: "Berlina eléctrica", lengthMm: 4694, bootLitres: 425,
    oneLiner: "La berlina eléctrica que popularizó Tesla: autonomía alta, carga rápida en su red de Supercargadores y actualizaciones por software.",
    intro:
      "El Model 3 fue el primer Tesla realmente masivo. Versiones de tracción trasera (Standard/Long Range) y total (Dual Motor/Performance). Sin motor de combustión: mantenimiento mínimo. El acceso a la red de Supercargadores y las actualizaciones de software (OTA) son parte central de la propuesta.",
    verdict: "Eléctrico de referencia por autonomía y red de carga. Revisar el estado de la batería y del sistema de asistencia a la conducción de la unidad concreta.",
    strengths: ["Autonomía real alta para su clase", "Acceso a la red de Supercargadores", "Actualizaciones de software (OTA) constantes"],
    watchouts: ["Ajustes de carrocería y calidad de acabado variables según año de fabricación", "Reparaciones de carrocería caras y con talleres limitados", "Neumáticos de desgaste algo más rápido por el peso"],
    faq: [
      { q: "¿Cuánta autonomía tiene el Model 3?", a: "Según versión y año, entre unos 400 y más de 600 km WLTP; en uso real e invierno, entre un 15-25% menos." },
      { q: "¿Hay que hacer mantenimiento a un Tesla?", a: "Mucho menos que a un coche de combustión: sin aceite de motor ni distribución. Sí hay que atender frenos, neumáticos, filtro de habitáculo y el líquido refrigerante de la batería." },
    ],
  }),
  g({
    id: "tesla:model-y:default", modelId: "tesla:model-y", code: "1ª gen", slug: "1",
    startYear: 2021, bodyType: "SUV eléctrico", lengthMm: 4751, bootLitres: 854,
    oneLiner: "El SUV eléctrico más vendido del mundo: base del Model 3 con más altura y maletero, y la misma filosofía de actualizaciones OTA.",
    intro:
      "El Model Y comparte plataforma con el Model 3, con carrocería de SUV y más maletero (incluido el hueco delantero). Versiones de tracción total Dual Motor y Performance. Misma mecánica sin apenas mantenimiento mecánico y acceso a Supercargadores.",
    verdict: "SUV eléctrico con mucho espacio y autonomía. Revisar historial de batería y de reparaciones de carrocería.",
    strengths: ["Maletero muy amplio (incluido el frontal)", "Autonomía real alta", "Acceso a la red de Supercargadores"],
    watchouts: ["Reparaciones de carrocería caras y con talleres limitados", "Consumo real algo mayor que el Model 3 por el peso y la aerodinámica", "Ajustes de acabado variables según año"],
    faq: [
      { q: "¿El Model Y es un Model 3 más alto?", a: "Comparte plataforma y motores; añade carrocería SUV, más altura y un maletero considerablemente mayor." },
      { q: "¿Qué autonomía real tiene el Model Y?", a: "Entre 350 y 500 km reales según versión, clima y velocidad, con cifras WLTP homologadas más altas." },
    ],
  }),

  /* ── MG ─────────────────────────────────────────────────── */
  g({
    id: "mg:zs:default", modelId: "mg:zs", code: "1ª gen (restyling)", slug: "1",
    startYear: 2021, bodyType: "SUV", lengthMm: 4400, bootLitres: 448,
    oneLiner: "B-SUV de mucho equipamiento por poco dinero: gasolina 1.5 atmosférico y turbo, y la versión eléctrica ZS EV con buena relación precio/autonomía.",
    intro:
      "El MG ZS apuesta por equipamiento y garantía amplia (7 años en muchos mercados) a precio de entrada. Motor 1.5 VTi-Tech atmosférico, 1.5 T-GDI turbo y la versión eléctrica ZS EV. Historial de fiabilidad todavía corto en Europa, pero con buena acogida inicial.",
    verdict: "B-SUV de mucho contenido por el precio. El eléctrico ZS EV es de los más asequibles del mercado.",
    strengths: ["Mucho equipamiento de serie para su precio", "Garantía de fábrica amplia", "ZS EV con buena relación precio/autonomía"],
    watchouts: ["Historial de fiabilidad todavía corto en el mercado europeo", "Red de talleres más reducida que las marcas establecidas", "Retención de valor por confirmar a largo plazo"],
    faq: [
      { q: "¿El MG ZS es fiable?", a: "Es pronto para tener un historial largo en Europa; la garantía de fábrica amplia compensa parte de esa incertidumbre." },
      { q: "¿Qué autonomía tiene el ZS EV?", a: "En torno a 320-440 km WLTP según batería y año; de las opciones eléctricas más económicas del mercado." },
    ],
  }),
  g({
    id: "mg:mg4:default", modelId: "mg:mg4", code: "1ª gen", slug: "1",
    startYear: 2022, bodyType: "Compacto eléctrico", lengthMm: 4287, bootLitres: 363,
    oneLiner: "Compacto eléctrico de plataforma dedicada: buen comportamiento, precio competitivo y carga rápida de serie.",
    intro:
      "El MG4 es el eléctrico compacto de la marca sobre una plataforma pensada desde cero para baterías, con tracción trasera en varias versiones. Buen comportamiento dinámico para un eléctrico de su precio, con carga rápida de serie en la mayoría de acabados.",
    verdict: "Eléctrico compacto de buena relación precio/prestaciones. Historial de fiabilidad todavía corto pero acogida inicial positiva.",
    strengths: ["Precio competitivo para un eléctrico de plataforma dedicada", "Buen comportamiento dinámico (tracción trasera)", "Carga rápida de serie en la mayoría de versiones"],
    watchouts: ["Historial de fiabilidad todavía corto", "Red de talleres más reducida", "Retención de valor por confirmar a largo plazo"],
    faq: [
      { q: "¿El MG4 tiene tracción trasera?", a: "Sí, en la mayoría de versiones, algo poco habitual en eléctricos compactos de este precio." },
      { q: "¿Qué autonomía tiene el MG4?", a: "Según batería, entre unos 350 y 520 km WLTP." },
    ],
  }),
];

/* ═══════════════════════════════════════════════════════════════
   TERCERA AMPLIACIÓN — más modelos de las marcas ya presentes:
   grandes berlinas/SUV, eléctricos y monovolúmenes.
   ═══════════════════════════════════════════════════════════════ */
const extraGenerations3: Generation[] = [
  /* ── BMW ────────────────────────────────────────────────── */
  g({
    id: "bmw:x5:g05", modelId: "bmw:x5", code: "G05", slug: "g05",
    startYear: 2018, bodyType: "SUV", lengthMm: 4922, bootLitres: 650,
    oneLiner: "SUV grande premium de referencia: el xDrive30d combina empuje, confort y consumo razonable para su tamaño.",
    intro:
      "La cuarta generación del X5 sobre plataforma CLAR. Motores B47/B57 diésel (25d/30d/40d) y B58 gasolina (40i), además del híbrido enchufable 45e. Confort y dinámica de referencia en el segmento; mantenimiento y neumáticos caros.",
    verdict: "SUV grande muy completo. El xDrive30d con mantenimiento documentado es la compra más razonable.",
    strengths: ["Confort de marcha y tecnología de vanguardia", "Motores B57/B58 refinados y potentes", "Buen comportamiento para su tamaño y peso"],
    watchouts: ["Coste de mantenimiento, neumáticos y frenos elevado", "Suspensión neumática (coste si falla)", "Reparaciones de electrónica caras fuera de garantía"],
    faq: [
      { q: "¿Qué motor del X5 G05 es más recomendable?", a: "El xDrive30d con el diésel de 6 cilindros ofrece el mejor equilibrio entre prestaciones, refinamiento y consumo." },
      { q: "¿El X5 45e híbrido enchufable compensa?", a: "Solo si cargas a diario y haces trayectos cortos con frecuencia; si no, el sobrepeso y el precio no se amortizan." },
    ],
  }),
  g({
    id: "bmw:serie-2-active-tourer:f45", modelId: "bmw:serie-2-active-tourer", code: "F45/U06", slug: "f45",
    startYear: 2014, bodyType: "Monovolumen compacto", lengthMm: 4374, bootLitres: 468,
    oneLiner: "El BMW con tracción delantera y forma de monovolumen: espacio familiar con motores B38/B47 conocidos.",
    intro:
      "El Serie 2 Active Tourer fue el primer BMW de tracción delantera con carrocería de monovolumen compacto, sobre la plataforma UKL compartida con MINI. Motores B38/B48 gasolina y B37/B47 diésel. Buen espacio interior; comportamiento más práctico que deportivo.",
    verdict: "Monovolumen premium práctico. El 218d con B47 y mantenimiento al día es la opción más razonable.",
    strengths: ["Espacio y practicidad poco habituales en un BMW", "Motores B38/B47 conocidos", "Buena habitabilidad para el tamaño exterior"],
    watchouts: ["Cadena y EGR de los diésel B47", "Comportamiento menos deportivo que el resto de la gama BMW", "Neumáticos runflat caros"],
    faq: [
      { q: "¿Por qué el Active Tourer es de tracción delantera?", a: "Usa la plataforma UKL compartida con MINI, orientada a maximizar espacio interior en vez de dinámica trasera." },
      { q: "¿Tiene versión de 7 plazas?", a: "Sí, la variante Gran Tourer (alargada) ofrece una tercera fila opcional." },
    ],
  }),
  g({
    id: "bmw:serie-7:g11", modelId: "bmw:serie-7", code: "G11/G12", slug: "g11",
    startYear: 2015, endYear: 2022, bodyType: "Berlina de representación", lengthMm: 5098, bootLitres: 515,
    oneLiner: "La berlina insignia de BMW: confort, tecnología y motores refinados, con un coste de mantenimiento acorde a su categoría.",
    intro:
      "La sexta generación del Serie 7 aportó chasis de aluminio y fibra de carbono para reducir peso. Motores B57 diésel (730d/740d), B58 gasolina (740i) y V8/híbrido enchufable en las versiones altas. Tecnología y confort de referencia; mantenimiento y reparaciones muy caros fuera de garantía.",
    verdict: "Berlina de representación con mucho contenido tecnológico. El 730d es la compra más razonable si asumes el coste de mantenimiento.",
    strengths: ["Confort y aislamiento de referencia", "Tecnología y equipamiento de vanguardia en su época", "Motores B57/B58 muy refinados"],
    watchouts: ["Coste de mantenimiento y reparaciones muy elevado", "Suspensión neumática e electrónica compleja", "Depreciación rápida (a favor del comprador de ocasión con presupuesto de mantenimiento)"],
    faq: [
      { q: "¿El Serie 7 G11 es fiable?", a: "Mecánicamente sólido, pero la enorme cantidad de electrónica y sistemas de confort eleva el riesgo y coste de averías fuera de garantía." },
      { q: "¿Qué motor del Serie 7 G11 elegir?", a: "El 730d ofrece el mejor equilibrio; los V8 y el híbrido enchufable son para quien no mira el coste de mantenimiento." },
    ],
  }),

  /* ── Audi ───────────────────────────────────────────────── */
  g({
    id: "audi:a6:c8", modelId: "audi:a6", code: "C8", slug: "c8",
    startYear: 2018, bodyType: "Berlina y Avant", lengthMm: 4939, bootLitres: 530,
    oneLiner: "Berlina grande premium con mucha tecnología: el 40 TDI es el motor de kilómetros, con mild-hybrid de 48 V en toda la gama.",
    intro:
      "La octava generación del A6 estrena mild-hybrid de 48 V en toda la gama. Motores 40/45/50 TDI diésel y 40/45/55 TFSI gasolina, con tracción quattro en las versiones altas. Interior muy digital (doble pantalla táctil). Mantenimiento y neumáticos caros.",
    verdict: "Berlina grande muy completa. El 40 TDI con historial documentado es la compra más razonable.",
    strengths: ["Confort y aislamiento de nivel alto", "Interior muy tecnológico", "Motores TDI sobrios en autovía"],
    watchouts: ["EGR y sistema AdBlue en los TDI", "Coste de mantenimiento y neumáticos elevado", "Pantallas táctiles: reparación cara si fallan"],
    faq: [
      { q: "¿Qué significa el mild-hybrid de 48 V en el A6 C8?", a: "Un pequeño motor eléctrico ayuda al motor térmico en arranques y aceleraciones suaves, reduciendo algo el consumo y suavizando el Start&Stop." },
      { q: "¿A6 Avant o berlina?", a: "El Avant (familiar) añade un maletero notablemente mayor con la misma mecánica; la berlina prioriza la estética." },
    ],
  }),
  g({
    id: "audi:q7:4m", modelId: "audi:q7", code: "4M", slug: "4m",
    startYear: 2015, bodyType: "SUV 7 plazas", lengthMm: 5063, bootLitres: 770,
    oneLiner: "SUV grande premium de 7 plazas: el 50 TDI ofrece mucho par y confort para viajar en familia con equipaje.",
    intro:
      "La segunda generación del Q7 bajó notablemente de peso respecto a la anterior. Motores 45/50 TDI diésel y 55 TFSI gasolina, con quattro de serie y tercera fila. Confort de referencia; mantenimiento y neumáticos muy caros.",
    verdict: "SUV grande de 7 plazas muy capaz. El 45/50 TDI con mantenimiento documentado es la opción más razonable.",
    strengths: ["Espacio real de 7 plazas y maletero enorme", "Confort de marcha de referencia", "Tracción quattro de serie"],
    watchouts: ["Coste de mantenimiento, neumáticos y frenos muy elevado", "Suspensión neumática (coste si falla)", "Consumo real alto"],
    faq: [
      { q: "¿El Q7 tiene 7 plazas de verdad?", a: "Sí, con una tercera fila más usable para adultos que en SUV más pequeños, gracias a su gran tamaño." },
      { q: "¿Qué motor del Q7 es más recomendable?", a: "El 50 TDI para quien hace muchos kilómetros con carga; el 45 TDI para un uso algo más comedido." },
    ],
  }),
  g({
    id: "audi:tt:fv", modelId: "audi:tt", code: "FV (3ª gen)", slug: "fv",
    startYear: 2014, endYear: 2023, bodyType: "Coupé y Roadster", lengthMm: 4191, bootLitres: 305,
    oneLiner: "Coupé compacto de diseño icónico: el 2.0 TFSI ofrece buenas prestaciones con la fiabilidad de las mecánicas del Grupo VW.",
    intro:
      "La tercera generación del TT comparte plataforma MQB con el Golf/A3. Motores 1.8/2.0 TFSI gasolina y 2.0 TDI (en su día), con tracción quattro opcional en las versiones más potentes (TTS/TT RS con 5 cilindros). Maletero y plazas traseras simbólicos.",
    verdict: "Coupé de imagen con mecánica conocida. El 2.0 TFSI 230 CV es la compra más equilibrada.",
    strengths: ["Diseño icónico y buena calidad de construcción", "Mecánicas MQB conocidas y fiables", "Comportamiento ágil"],
    watchouts: ["Maletero y plazas traseras casi inexistentes", "Poco práctico como único coche", "Precio de ocasión con prima sobre mecánicas equivalentes de Golf/A3"],
    faq: [
      { q: "¿El TT FV comparte mecánica con el Golf?", a: "Sí, plataforma MQB y motores TFSI/TDI del Grupo VW, con un chasis y una puesta a punto propios más deportivos." },
      { q: "¿El TT tiene plazas traseras usables?", a: "Son simbólicas, solo para trayectos muy cortos o para bolsos; no es un coche de 4 plazas reales." },
    ],
  }),

  /* ── Mercedes-Benz ──────────────────────────────────────── */
  g({
    id: "mercedes-benz:clase-e:w213", modelId: "mercedes-benz:clase-e", code: "W213", slug: "w213",
    startYear: 2016, endYear: 2023, bodyType: "Berlina y Estate", lengthMm: 4923, bootLitres: 540,
    oneLiner: "Berlina grande premium de kilómetros: el E 220 d combina confort, tecnología y consumo bajo para su tamaño.",
    intro:
      "La quinta generación de la Clase E introdujo un salto tecnológico notable (doble pantalla, asistentes de conducción avanzados). Diésel OM654 (220 d) y OM656 de 6 cilindros (300 d), gasolina M264, e híbrido enchufable. Confort y tecnología de referencia.",
    verdict: "Berlina grande muy completa. El E 220 d con mantenimiento documentado es la opción más razonable.",
    strengths: ["Confort de marcha y tecnología de asistencia avanzada", "OM654/OM656 diésel silenciosos y sobrios", "Estate con maletero de referencia"],
    watchouts: ["Coste de mantenimiento y reparaciones elevado", "Suspensión neumática AIRMATIC (coste si falla)", "Sistemas de asistencia complejos y caros de reparar/calibrar"],
    faq: [
      { q: "¿Qué diésel de la Clase E W213 elegir?", a: "El OM654 (220 d) para uso normal; el OM656 de 6 cilindros (300 d) si buscas más refinamiento y no te importa el coste añadido." },
      { q: "¿La Clase E Estate tiene buen maletero?", a: "Sí, en torno a 640 litros, de los mejores de su categoría." },
    ],
  }),
  g({
    id: "mercedes-benz:gle:w167", modelId: "mercedes-benz:gle", code: "W167", slug: "w167",
    startYear: 2019, bodyType: "SUV 5/7 plazas", lengthMm: 4924, bootLitres: 630,
    oneLiner: "SUV grande premium con opción de 7 plazas: suspensión E-Active Body Control opcional y motores OM656/M256 refinados.",
    intro:
      "La cuarta generación del GLE ofrece suspensión neumática con control activo por eje (E-Active Body Control) opcional, además de motores diésel OM656 (300 d/350 d) y gasolina de 6 cilindros con mild-hybrid. Tercera fila opcional. Mantenimiento y reparaciones muy caros.",
    verdict: "SUV grande muy tecnológico. El 300 d con mantenimiento documentado es la opción más razonable.",
    strengths: ["Confort de marcha excepcional (con E-Active Body Control)", "Motores de 6 cilindros refinados", "Espacio y opción de 7 plazas"],
    watchouts: ["Coste de mantenimiento y reparaciones muy elevado", "Suspensión neumática compleja (coste si falla)", "Consumo real alto"],
    faq: [
      { q: "¿Qué es el E-Active Body Control?", a: "Un sistema de suspensión activa que ajusta cada rueda de forma independiente, incluso puede inclinar el coche en curva; es opcional y caro de reparar si falla." },
      { q: "¿El GLE tiene 7 plazas de verdad?", a: "La tercera fila opcional es más usable que en SUV más pequeños, gracias al tamaño del coche." },
    ],
  }),

  /* ── Volkswagen ─────────────────────────────────────────── */
  g({
    id: "volkswagen:arteon:3h", modelId: "volkswagen:arteon", code: "3H", slug: "3h",
    startYear: 2017, bodyType: "Berlina liftback y Shooting Brake", lengthMm: 4862, bootLitres: 563,
    oneLiner: "El Passat con imagen de coupé: liftback elegante con mecánicas del Grupo VW conocidas y buen maletero.",
    intro:
      "El Arteon comparte plataforma MQB con el Passat B8, con una carrocería liftback más estilizada. Motores 1.5/2.0 TSI y 2.0 TDI, con opción 4Motion. El Shooting Brake añade practicidad de familiar. Revisar DSG y EGR/AdBlue de los diésel.",
    verdict: "Berlina de imagen con mecánica de bajo riesgo. El 2.0 TDI 150/190 es la compra más razonable.",
    strengths: ["Diseño elegante con maletero práctico", "Mecánicas MQB conocidas", "Shooting Brake con buen espacio de carga"],
    watchouts: ["Mecatrónica DSG en uso urbano", "EGR/AdBlue en los diésel", "Visibilidad trasera reducida por el diseño"],
    faq: [
      { q: "¿El Arteon es un Passat con otra carrocería?", a: "Comparte plataforma y motores con el Passat B8; el Arteon apuesta por una línea de liftback más deportiva." },
      { q: "¿Qué maletero tiene el Arteon Shooting Brake?", a: "En torno a 590 litros, superior al de la variante liftback." },
    ],
  }),
  g({
    id: "volkswagen:t-cross:c1", modelId: "volkswagen:t-cross", code: "C1", slug: "c1",
    startYear: 2019, bodyType: "SUV", lengthMm: 4127, bootLitres: 385,
    oneLiner: "B-SUV sobre plataforma de Polo: buen maletero para el segmento y mecánicas 1.0/1.5 TSI muy conocidas.",
    intro:
      "El T-Cross comparte plataforma MQB A0 con el Polo. Motores 1.0 TSI y 1.5 TSI, con banqueta trasera deslizante en varias versiones. B-SUV racional con buen equilibrio espacio/precio.",
    verdict: "B-SUV de bajo riesgo. El 1.0 TSI 110 con caja manual es la compra más equilibrada.",
    strengths: ["Buen maletero y modularidad (banqueta deslizante)", "Mecánicas TSI conocidas y fiables", "Precio de ocasión contenido"],
    watchouts: ["Carbonilla en admisión del TSI en uso solo urbano", "Sin versión diésel en la mayoría de mercados", "Plásticos duros en acabados de acceso"],
    faq: [
      { q: "¿El T-Cross es un Polo más alto?", a: "Comparte plataforma y motores con el Polo; añade carrocería SUV, más altura libre y una banqueta trasera deslizante." },
      { q: "¿Hay T-Cross diésel?", a: "En España se comercializó sobre todo en gasolina TSI; el diésel fue anecdótico en la gama." },
    ],
  }),
  g({
    id: "volkswagen:caddy:5", modelId: "volkswagen:caddy", code: "5 (SB)", slug: "5",
    startYear: 2020, bodyType: "Furgoneta de pasajeros 5/7 plazas", lengthMm: 4501, bootLitres: 1213,
    oneLiner: "La furgoneta de pasajeros premium: acabado de turismo, maletero descomunal y mecánicas del Grupo VW.",
    intro:
      "La quinta generación del Caddy pasó a la plataforma MQB, ganando dinámica y tecnología de turismo. Motores 1.5 TSI gasolina y 2.0 TDI diésel, con opción de 7 plazas y tracción 4Motion. Espacio y maletero muy por encima de un SUV convencional.",
    verdict: "Máximo espacio con acabado de turismo. El 2.0 TDI para kilómetros es la opción más racional.",
    strengths: ["Espacio interior y maletero descomunales", "Acabado y tecnología de turismo, no de furgón", "Opción de 7 plazas"],
    watchouts: ["Comportamiento y aislamiento de furgoneta", "Consumo alto con el coche cargado", "Mecatrónica DSG en uso urbano"],
    faq: [
      { q: "¿El Caddy 5 se conduce como un coche?", a: "Mucho mejor que generaciones anteriores gracias a la plataforma MQB, aunque sigue notándose que es una furgoneta adaptada." },
      { q: "¿Cuánto maletero tiene con 5 plazas?", a: "Más de 1.200 litros, muy por encima de cualquier SUV o monovolumen convencional." },
    ],
  }),
  g({
    id: "volkswagen:id3:default", modelId: "volkswagen:id3", code: "1ª gen", slug: "1",
    startYear: 2020, bodyType: "Compacto eléctrico", lengthMm: 4261, bootLitres: 385,
    oneLiner: "El primer eléctrico de plataforma dedicada de VW: tracción trasera, buen espacio interior y varias capacidades de batería.",
    intro:
      "El ID.3 estrena la plataforma MEB, pensada desde cero para eléctricos, con motor en el eje trasero. Varias capacidades de batería (Pro, Pro S) con distinta autonomía. Interior muy digital; software con fallos notables en las primeras unidades, corregidos por actualizaciones.",
    verdict: "Eléctrico compacto con buen espacio interior. Revisar que el software esté actualizado en unidades de primeras series.",
    strengths: ["Buen espacio interior gracias al suelo plano de la plataforma MEB", "Tracción trasera y buen comportamiento", "Varias capacidades de batería según necesidad"],
    watchouts: ["Software con fallos en las primeras unidades (2020-2021)", "Autonomía real inferior a la homologada, sobre todo en invierno", "Acabados interiores con materiales duros"],
    faq: [
      { q: "¿El ID.3 tuvo problemas de software?", a: "Las primeras unidades (2020) tuvieron fallos de infoentretenimiento y funciones que llegaron por actualización; conviene comprobar que el software esté al día." },
      { q: "¿Qué autonomía real tiene el ID.3?", a: "Según batería, entre 300 y 450 km WLTP homologados; en uso real e invierno, un 20-30% menos." },
    ],
  }),
  g({
    id: "volkswagen:id4:default", modelId: "volkswagen:id4", code: "1ª gen", slug: "1",
    startYear: 2021, bodyType: "SUV eléctrico", lengthMm: 4584, bootLitres: 543,
    oneLiner: "El SUV eléctrico de VW sobre plataforma MEB: buen maletero, tracción trasera o total y varias capacidades de batería.",
    intro:
      "El ID.4 comparte plataforma MEB con el ID.3, en carrocería SUV. Versiones de tracción trasera y total (GTX). Buen espacio y maletero; mismas cautelas de software que el ID.3 en las primeras unidades.",
    verdict: "SUV eléctrico racional. Revisar autonomía real de la unidad y que el software esté actualizado.",
    strengths: ["Buen maletero y espacio interior", "Varias capacidades de batería y tracción total en el GTX", "Comportamiento equilibrado"],
    watchouts: ["Software con fallos en unidades de primeras series", "Autonomía real inferior a la homologada en invierno", "Precio de ocasión aún alto frente a rivales de combustión"],
    faq: [
      { q: "¿El ID.4 GTX tiene tracción total?", a: "Sí, con un motor eléctrico adicional en el eje delantero además del trasero." },
      { q: "¿Qué autonomía real tiene el ID.4?", a: "Entre 300 y 400 km reales según batería, clima y velocidad, con cifras WLTP algo más altas." },
    ],
  }),

  /* ── Toyota ─────────────────────────────────────────────── */
  g({
    id: "toyota:prius:xw50", modelId: "toyota:prius", code: "XW50", slug: "xw50",
    startYear: 2016, endYear: 2022, bodyType: "Compacto híbrido", lengthMm: 4540, bootLitres: 502,
    oneLiner: "El híbrido que lo empezó todo: consumo bajísimo y la fiabilidad más probada del mercado, con versión enchufable.",
    intro:
      "La cuarta generación del Prius (XW50) sobre plataforma TNGA mejoró notablemente el comportamiento respecto a generaciones anteriores. Híbrido 1.8 (compartido con Corolla) y la versión enchufable Prius Plug-in con mayor autonomía eléctrica. Fiabilidad de referencia.",
    verdict: "El híbrido de más confianza del mercado. Consumo urbano excepcional y mantenimiento barato.",
    strengths: ["Fiabilidad mecánica de referencia", "Consumo muy bajo en cualquier uso", "Maletero amplio para un compacto híbrido"],
    watchouts: ["Diseño exterior que no gusta a todos", "Visibilidad trasera limitada por el diseño", "Plug-in: autonomía eléctrica modesta frente a rivales más recientes"],
    faq: [
      { q: "¿El Prius sigue siendo el híbrido más fiable?", a: "Es de los históricos con mejor reputación: la tecnología lleva más de dos décadas en el mercado con muy pocos sustos mecánicos." },
      { q: "¿Cuánta autonomía eléctrica tiene el Prius Plug-in?", a: "En torno a 50 km WLTP; en uso real, algo menos con climatización." },
    ],
  }),
  g({
    id: "toyota:camry:xv70", modelId: "toyota:camry", code: "XV70", slug: "xv70",
    startYear: 2019, bodyType: "Berlina", lengthMm: 4885, bootLitres: 524,
    oneLiner: "Berlina grande solo híbrida en Europa: consumo bajo para su tamaño y la fiabilidad marca de la casa.",
    intro:
      "El Camry volvió al mercado europeo únicamente en versión híbrida 2.5 (218 CV de sistema). Espacio y confort de berlina grande con consumo de compacto híbrido en ciudad. Mecánica sin turbo ni embrague convencional.",
    verdict: "Berlina grande de tranquilidad total. Consumo muy contenido para su tamaño y fiabilidad de referencia.",
    strengths: ["Fiabilidad mecánica sobresaliente", "Consumo bajo para una berlina de su tamaño", "Confort y espacio interior notables"],
    watchouts: ["El cambio e-CVT 'estira' de vueltas al exigir el motor", "Maletero algo justo por la batería", "Diseño y dinámica más conservadores que rivales premium"],
    faq: [
      { q: "¿El Camry se vende con motor de gasolina puro en España?", a: "No, en el mercado europeo solo se ofrece en versión híbrida." },
      { q: "¿Cuánto consume el Camry Hybrid?", a: "En uso mixto puede moverse en torno a 5-5,5 l/100 km reales, una cifra baja para una berlina de su tamaño." },
    ],
  }),
  g({
    id: "toyota:land-cruiser:j150", modelId: "toyota:land-cruiser", code: "J150", slug: "j150",
    startYear: 2009, endYear: 2021, bodyType: "Todoterreno 5/7 plazas", lengthMm: 4825, bootLitres: 621,
    oneLiner: "El todoterreno de referencia por fiabilidad y capacidad real: chasis independiente, reductora y el 2.8 D-4D como motor de la última etapa.",
    intro:
      "El Land Cruiser J150 mantiene el planteamiento de todoterreno auténtico: chasis independiente, reductora y tracción total permanente o conectable según versión. Motor 2.8 D-4D diésel (en la última etapa) y anteriormente 3.0 D-4D. Reputación de fiabilidad y durabilidad extrema.",
    verdict: "El todoterreno para quien de verdad necesita capacidad off-road duradera. Mantenimiento caro pero mecánica extremadamente fiable.",
    strengths: ["Capacidad todocamino y durabilidad de referencia", "Fiabilidad mecánica extrema con mantenimiento correcto", "Buena retención de valor"],
    watchouts: ["Consumo alto para su tamaño y peso", "Precio de compra y mantenimiento elevados", "Comportamiento en carretera propio de un todoterreno, no de un SUV de carretera"],
    faq: [
      { q: "¿El Land Cruiser J150 es fiable?", a: "Es de los todoterrenos con mejor reputación de durabilidad del mercado, muy usado en flotas exigentes y ONG por esa razón." },
      { q: "¿Tiene reductora?", a: "Sí, con chasis independiente y reductora real, muy por encima de la capacidad de cualquier SUV de carretera con tracción total." },
    ],
  }),

  /* ── Ford ───────────────────────────────────────────────── */
  g({
    id: "ford:s-max:mk2", modelId: "ford:s-max", code: "Mk2", slug: "mk2",
    startYear: 2015, bodyType: "Monovolumen 7 plazas", lengthMm: 4796, bootLitres: 700,
    oneLiner: "Monovolumen grande que se conduce como una berlina: 7 plazas reales y el 2.0 EcoBlue como motor de kilómetros.",
    intro:
      "El S-Max Mk2 destaca por un comportamiento dinámico poco habitual en un monovolumen de su tamaño. Motores 1.5/2.0 EcoBoost gasolina y 2.0 EcoBlue diésel, con caja automática Powershift en varias versiones. Siete plazas con buen espacio en la tercera fila.",
    verdict: "Monovolumen de 7 plazas muy racional. El 2.0 EcoBlue con historial es la compra más recomendable.",
    strengths: ["Comportamiento dinámico por encima de la media del segmento", "Buen espacio en las 7 plazas", "2.0 EcoBlue sobrio"],
    watchouts: ["Caja Powershift de doble embrague (tirones, revisar historial)", "Consumo alto en las versiones de gasolina", "Precio de ocasión de las versiones altas todavía elevado"],
    faq: [
      { q: "¿El S-Max tiene 7 plazas de verdad?", a: "Sí, es de los monovolúmenes con mejor espacio en la tercera fila, usable por adultos en trayectos moderados." },
      { q: "¿La caja Powershift del S-Max es fiable?", a: "Puede dar tirones y desgaste en uso urbano intensivo; revisa el historial de mantenimiento y si ha recibido actualizaciones." },
    ],
  }),
  g({
    id: "ford:ranger:p703", modelId: "ford:ranger", code: "P703 (3ª gen)", slug: "p703",
    startYear: 2022, bodyType: "Pick-up", lengthMm: 5370, bootLitres: 0,
    oneLiner: "Pick-up de trabajo y ocio con buena dinámica de conducción: el 2.0 EcoBlue biturbo como motor de referencia.",
    intro:
      "La tercera generación del Ranger comparte base con la nueva Volkswagen Amarok. Motores 2.0 EcoBlue mono y biturbo diésel, con tracción total conectable o permanente según versión. Capacidad de carga y remolque de referencia en el segmento.",
    verdict: "Pick-up muy completo para trabajo y uso mixto. El 2.0 EcoBlue biturbo es la opción con más empuje.",
    strengths: ["Capacidad de carga y remolque de referencia", "Buena dinámica de conducción para un pick-up", "Tracción total con reductora en varias versiones"],
    watchouts: ["Consumo alto con el vehículo cargado", "Tamaño exterior grande para uso urbano", "Precio de mantenimiento superior a un turismo"],
    faq: [
      { q: "¿El Ranger P703 comparte plataforma con el VW Amarok?", a: "Sí, la nueva generación de ambos pick-ups se desarrolló conjuntamente entre Ford y Volkswagen." },
      { q: "¿Cuánto puede remolcar el Ranger?", a: "Hasta 3.500 kg en las versiones con mayor capacidad, cifra de referencia en el segmento." },
    ],
  }),
  g({
    id: "ford:mustang:s550", modelId: "ford:mustang", code: "S550", slug: "s550",
    startYear: 2015, endYear: 2023, bodyType: "Coupé deportivo y Cabrio", lengthMm: 4784, bootLitres: 408,
    oneLiner: "El deportivo americano accesible en Europa: V8 5.0 atmosférico con sonido de referencia, también en versión 2.3 EcoBoost turbo.",
    intro:
      "El Mustang S550 fue el primero vendido oficialmente en Europa con volante a la izquierda de serie y suspensión trasera independiente (mejora notable sobre generaciones anteriores). Motor V8 5.0 atmosférico (GT) y 2.3 EcoBoost turbo de 4 cilindros. Compra emocional por excelencia.",
    verdict: "Deportivo de imagen y sonido. El V8 GT para la experiencia completa; el EcoBoost para algo más de sobriedad.",
    strengths: ["Sonido y carácter del V8 atmosférico", "Suspensión trasera independiente (mejora notable sobre modelos anteriores)", "Precio de ocasión relativamente accesible para un V8"],
    watchouts: ["Consumo alto, sobre todo en el V8", "Coste de seguro elevado por su categoría", "Mantenimiento y recambios de un V8 americano en Europa"],
    faq: [
      { q: "¿El Mustang S550 tiene suspensión trasera independiente?", a: "Sí, a diferencia de generaciones anteriores con eje rígido; mejora mucho el comportamiento en curva y el confort." },
      { q: "¿V8 o EcoBoost en el Mustang?", a: "El V8 GT da la experiencia sonora y de prestaciones completa; el 2.3 EcoBoost es más sobrio y ligero de manejar en el día a día." },
    ],
  }),

  /* ── Renault ────────────────────────────────────────────── */
  g({
    id: "renault:zoe:bf", modelId: "renault:zoe", code: "BF (restyling)", slug: "bf",
    startYear: 2019, endYear: 2024, bodyType: "Utilitario eléctrico", lengthMm: 4087, bootLitres: 338,
    oneLiner: "El eléctrico urbano pionero de Renault: buena autonomía real para su clase y motor propio sin depender de licencias.",
    intro:
      "El Zoe en su versión con batería de 52 kWh (ZE50) mejoró notablemente la autonomía respecto a generaciones anteriores. Motor eléctrico R135/R110 propio de Renault. Uno de los eléctricos con más recorrido comercial en Europa, con buen historial de fiabilidad de la batería.",
    verdict: "Eléctrico urbano de referencia por autonomía y precio de ocasión. Revisar el estado de la batería (algunas se alquilaban aparte en unidades antiguas).",
    strengths: ["Buena autonomía real para un eléctrico urbano", "Amplio historial de uso que avala la fiabilidad de la batería", "Precio de ocasión ya accesible"],
    watchouts: ["Algunas unidades antiguas tenían la batería en alquiler (verificar la propiedad al comprar)", "Carga rápida limitada en versiones con cargador monofásico Caméléon", "Maletero algo justo para el segmento"],
    faq: [
      { q: "¿Todas las Zoe tienen la batería en propiedad?", a: "No siempre: durante años Renault ofreció la opción de alquilar la batería aparte. Al comprar de segunda mano, verifica si la unidad incluye la batería en propiedad." },
      { q: "¿Qué autonomía real tiene la Zoe ZE50?", a: "Entre 250 y 300 km reales según climatización y velocidad, con una cifra WLTP homologada algo más alta." },
    ],
  }),
  g({
    id: "renault:espace:v", modelId: "renault:espace", code: "V (RFE)", slug: "v",
    startYear: 2015, bodyType: "SUV / Monovolumen 7 plazas", lengthMm: 4855, bootLitres: 680,
    oneLiner: "El monovolumen histórico reconvertido en SUV grande: 7 plazas, buen confort y el 1.6/2.0 dCi como motores de referencia.",
    intro:
      "La quinta generación del Espace abandonó la carrocería de monovolumen puro por una imagen más de SUV/crossover grande. Motores 1.3/1.8 TCe gasolina y 1.6/2.0 dCi diésel. Tercera fila plegable en el suelo; confort de marcha por encima de la media.",
    verdict: "SUV/monovolumen familiar racional. El 1.6/2.0 dCi con historial es la opción más recomendable.",
    strengths: ["Buen espacio y confort de marcha", "Tercera fila que se pliega totalmente en el suelo", "Diseño más moderno que generaciones anteriores"],
    watchouts: ["Caja automática EDC de doble embrague (tirones)", "Consumo alto en gasolina TCe", "Electrónica y sensores con averías ocasionales"],
    faq: [
      { q: "¿El Espace V sigue siendo un monovolumen?", a: "Su carrocería se acerca más a un SUV/crossover grande, aunque mantiene la vocación de 7 plazas del Espace clásico." },
      { q: "¿Qué maletero tiene con 5 plazas?", a: "En torno a 680 litros, muy amplio gracias a que la tercera fila se pliega a ras de suelo." },
    ],
  }),
  g({
    id: "renault:talisman:default", modelId: "renault:talisman", code: "1ª gen", slug: "1",
    startYear: 2015, endYear: 2022, bodyType: "Berlina y Estate", lengthMm: 4849, bootLitres: 572,
    oneLiner: "Berlina grande de ocasión muy barata: buen confort y maletero, con el 1.6/1.7/2.0 dCi como motores de referencia.",
    intro:
      "El Talisman fue el buque insignia de Renault en berlinas, con suspensión trasera multibrazo y opción de amortiguación pilotada. Motores 1.3/1.6/2.0 TCe gasolina y 1.6/1.7/2.0 dCi diésel. Precio de ocasión muy competitivo frente a berlinas alemanas equivalentes.",
    verdict: "Mucha berlina por poco dinero. El 1.6/1.7 dCi con historial es la opción más razonable.",
    strengths: ["Confort de marcha (amortiguación pilotada opcional)", "Espacio y maletero de categoría superior", "Precio de ocasión muy competitivo"],
    watchouts: ["EGR y turbo del dCi con muchos kilómetros", "Caja automática EDC en uso urbano", "Electrónica y sensores con averías ocasionales"],
    faq: [
      { q: "¿Qué es la amortiguación pilotada del Talisman?", a: "Un sistema opcional que ajusta la dureza de la suspensión según el modo de conducción y el estado de la carretera." },
      { q: "¿Qué maletero tiene el Talisman Estate?", a: "En torno a 572-608 litros según año, de los mayores de su categoría." },
    ],
  }),

  /* ── Peugeot ────────────────────────────────────────────── */
  g({
    id: "peugeot:108:default", modelId: "peugeot:108", code: "1ª gen", slug: "1",
    startYear: 2014, endYear: 2022, bodyType: "Urbano 3 y 5 puertas", lengthMm: 3475, bootLitres: 196,
    oneLiner: "Urbano gemelo del Toyota Aygo: mecánica atmosférica muy fiable y mantenimiento mínimo.",
    intro:
      "El 108 se desarrolló junto a Toyota (Aygo) y Citroën (C1) sobre la misma plataforma y con el mismo motor 1.0 VVT-i atmosférico. Coche pensado en exclusiva para ciudad: maletero mínimo y poco aislamiento, mecánica muy fiable y barata.",
    verdict: "Urbano puro de mantenimiento mínimo. Igual de recomendable que su gemelo Toyota Aygo.",
    strengths: ["Fiabilidad y mantenimiento muy baratos (motor Toyota)", "Fácil de aparcar y manejar en ciudad", "Precio de ocasión bajo"],
    watchouts: ["Maletero y plazas traseras mínimos", "Poca insonorización en autovía", "Equipamiento básico en acabados de acceso"],
    faq: [
      { q: "¿El 108 es lo mismo que el Toyota Aygo?", a: "Sí, junto con el Citroën C1 comparten plataforma, motor 1.0 VVT-i y carrocería, con cambios estéticos y de equipamiento." },
      { q: "¿Hay 108 descapotable?", a: "Sí, la versión Top! con techo de lona retráctil." },
    ],
  }),
  g({
    id: "peugeot:rifter:default", modelId: "peugeot:rifter", code: "K9", slug: "k9",
    startYear: 2018, bodyType: "Furgoneta de pasajeros 5/7 plazas", lengthMm: 4403, bootLitres: 775,
    oneLiner: "La furgoneta de pasajeros de Peugeot: gemela del Citroën Berlingo, con espacio y maletero descomunales.",
    intro:
      "El Rifter comparte plataforma EMP2 con el Citroën Berlingo y el Opel Combo Life. Motores 1.2 PureTech y 1.5 BlueHDi, además del eléctrico e-Rifter. Dos longitudes y hasta 7 plazas. Practicidad máxima a cambio de comportamiento de furgoneta.",
    verdict: "Imbatible en espacio por el dinero. El 1.5 BlueHDi para kilómetros; el e-Rifter para reparto urbano y familias que cargan a diario.",
    strengths: ["Espacio interior y maletero descomunales", "Puertas laterales correderas", "Opción de 7 plazas (versión Long)"],
    watchouts: ["Correa 'húmeda' del 1.2 PureTech en series iniciales", "Comportamiento y aislamiento de furgoneta", "Consumo alto en la versión de gasolina"],
    faq: [
      { q: "¿El Rifter es lo mismo que el Citroën Berlingo?", a: "Sí, junto con el Opel Combo Life comparten plataforma, motores y carrocería, con diferencias de diseño y equipamiento." },
      { q: "¿Cuántas plazas tiene?", a: "5 de serie; la versión Long (más larga) ofrece una tercera fila para 7 plazas." },
    ],
  }),
  g({
    id: "peugeot:408:default", modelId: "peugeot:408", code: "1ª gen (Fastback)", slug: "1",
    startYear: 2022, bodyType: "Berlina fastback", lengthMm: 4690, bootLitres: 536,
    oneLiner: "Fastback entre compacto y SUV: diseño muy personal, gama PureTech, BlueHDi e híbrido enchufable.",
    intro:
      "El 408 propone una carrocería a medio camino entre berlina y SUV, sobre plataforma EMP2 compartida con el 308. Motores 1.2 PureTech, 1.5 BlueHDi e híbrido enchufable Hybrid 180/225. Diseño muy distintivo; comportamiento y consumo similares al 308.",
    verdict: "Berlina fastback de imagen fuerte. El BlueHDi para kilómetros; el Hybrid solo si cargas a diario.",
    strengths: ["Diseño muy diferenciado", "Base mecánica conocida (comparte con el 308)", "Buen equipamiento tecnológico"],
    watchouts: ["Correa 'húmeda' del PureTech en series iniciales", "Visibilidad trasera limitada por el diseño", "Modelo reciente: historial de fiabilidad todavía corto"],
    faq: [
      { q: "¿El 408 es un SUV o una berlina?", a: "Peugeot lo define como fastback: carrocería elevada como un SUV pero con silueta y comportamiento más de berlina." },
      { q: "¿Comparte plataforma con el 308?", a: "Sí, plataforma EMP2 y buena parte de la gama de motores." },
    ],
  }),

  /* ── Opel ───────────────────────────────────────────────── */
  g({
    id: "opel:zafira:life", modelId: "opel:zafira", code: "Life (K9)", slug: "life",
    startYear: 2019, bodyType: "Furgoneta de pasajeros 7/8/9 plazas", lengthMm: 4959, bootLitres: 1063,
    oneLiner: "Furgoneta de pasajeros grande: hasta 9 plazas y maletero descomunal, sobre plataforma EMP2 de Stellantis.",
    intro:
      "El Zafira Life comparte plataforma con el Citroën SpaceTourer y el Peugeot Traveller. Motor 2.0 BlueHDi diésel en varias potencias, con hasta 9 plazas configurables. Pensado para familias muy numerosas o uso profesional de pasajeros.",
    verdict: "La opción de más plazas y espacio del mercado. El 2.0 BlueHDi 150/180 es la compra más razonable.",
    strengths: ["Hasta 9 plazas configurables", "Maletero y espacio de carga descomunales", "Motor 2.0 BlueHDi sobrio para el tamaño del vehículo"],
    watchouts: ["Comportamiento y aislamiento de furgoneta grande", "Consumo alto con el vehículo cargado", "Tamaño exterior poco práctico para aparcar en ciudad"],
    faq: [
      { q: "¿El Zafira Life es una furgoneta o un monovolumen?", a: "Mecánicamente es una furgoneta de pasajeros adaptada, con acabado e insonorización mejorados respecto a un furgón de reparto." },
      { q: "¿Cuántas plazas puede llevar?", a: "Hasta 9 según configuración y longitud de carrocería." },
    ],
  }),
  g({
    id: "opel:adam:default", modelId: "opel:adam", code: "1ª gen", slug: "1",
    startYear: 2013, endYear: 2019, bodyType: "Urbano 3 puertas", lengthMm: 3698, bootLitres: 170,
    oneLiner: "Urbano de diseño muy personalizable: se compra por estética, con motores 1.0/1.4 atmosféricos y turbo sencillos.",
    intro:
      "El Opel Adam apostó por la personalización extrema (colores, techos, detalles interiores) en el segmento urbano. Motores 1.0 turbo (Ecotec) y 1.2/1.4 atmosféricos. Mecánica sencilla del grupo GM/Opel de su época; maletero y plazas traseras mínimos.",
    verdict: "Urbano de estilo. El 1.0 turbo para algo de brío; el 1.4 atmosférico para sencillez máxima.",
    strengths: ["Personalización de diseño muy amplia", "Mecánica sencilla y conocida", "Buen tacto de conducción para el segmento"],
    watchouts: ["Maletero y plazas traseras mínimos", "Consumo real del 1.0 turbo por encima del homologado en algunas unidades", "Descatalogado: recambios de carrocería específicos más limitados"],
    faq: [
      { q: "¿El Adam es práctico?", a: "No es su fuerte: solo 3 puertas y maletero muy pequeño. Se elige sobre todo por diseño y personalización." },
      { q: "¿Qué motor del Adam es más recomendable?", a: "El 1.4 atmosférico por sencillez; el 1.0 turbo si buscas algo más de empuje." },
    ],
  }),

  /* ── SEAT / CUPRA ───────────────────────────────────────── */
  g({
    id: "seat:alhambra:7n", modelId: "seat:alhambra", code: "7N", slug: "7n",
    startYear: 2010, bodyType: "Monovolumen 7 plazas", lengthMm: 4854, bootLitres: 267,
    oneLiner: "El monovolumen grande de SEAT: puertas correderas, 7 plazas reales y mecánica del Grupo VW compartida con el Sharan.",
    intro:
      "El Alhambra 7N comparte plataforma y motores con el Volkswagen Sharan. Motores 1.4 TSI, 2.0 TSI gasolina y 2.0 TDI diésel, con puertas correderas traseras de serie. Espacio y practicidad de referencia en monovolúmenes grandes.",
    verdict: "Monovolumen de 7 plazas muy racional. El 2.0 TDI 150 con historial es la compra más recomendable.",
    strengths: ["Puertas correderas y acceso muy cómodo a las plazas traseras", "7 plazas realmente usables por adultos", "Mecánicas del Grupo VW conocidas"],
    watchouts: ["Mecatrónica DSG en uso urbano", "EGR/AdBlue en los TDI", "Consumo alto por el tamaño y peso del vehículo"],
    faq: [
      { q: "¿El Alhambra es un Sharan con otro nombre?", a: "Comparten plataforma, motores y carrocería casi por completo; cambian detalles de diseño y equipamiento." },
      { q: "¿La tercera fila del Alhambra sirve para adultos?", a: "Sí, es de los monovolúmenes con mejor espacio en la tercera fila para trayectos largos." },
    ],
  }),
  g({
    id: "seat:mii:default", modelId: "seat:mii", code: "1ª gen", slug: "1",
    startYear: 2012, endYear: 2019, bodyType: "Urbano 3/5 puertas", lengthMm: 3557, bootLitres: 251,
    oneLiner: "Urbano gemelo del VW up!: interior aprovechado y mecánica 1.0 muy fiable, también en versión eléctrica Mii Electric.",
    intro:
      "El SEAT Mii comparte plataforma y motores con el Volkswagen up! y el Škoda Citigo. Motor 1.0 atmosférico y la versión eléctrica Mii Electric al final de su vida comercial. Interior bien aprovechado para el tamaño exterior.",
    verdict: "Urbano de calidad superior a la media del segmento. El 1.0 atmosférico basta para ciudad.",
    strengths: ["Interior bien aprovechado y bien acabado para el segmento", "Mecánica 1.0 muy fiable y barata", "Precio de ocasión bajo"],
    watchouts: ["Motor atmosférico justo en autovía y cargado", "Equipamiento básico en acabados de acceso", "Mii Electric: autonomía real modesta"],
    faq: [
      { q: "¿El Mii es lo mismo que el VW up!?", a: "Sí, junto con el Škoda Citigo son el mismo coche con distinto emblema y pequeños detalles de equipamiento y precio." },
      { q: "¿Qué autonomía tiene el Mii Electric?", a: "En torno a 260 km WLTP homologados; en uso real, bastante menos." },
    ],
  }),
  g({
    id: "cupra:born:default", modelId: "cupra:born", code: "1ª gen", slug: "1",
    startYear: 2021, bodyType: "Compacto eléctrico", lengthMm: 4322, bootLitres: 385,
    oneLiner: "El eléctrico deportivo de CUPRA sobre plataforma MEB: comparte base con el VW ID.3, con un ajuste más dinámico.",
    intro:
      "El Born es el primer eléctrico de CUPRA, sobre la plataforma MEB compartida con el VW ID.3. Motor eléctrico trasero con varias capacidades de batería, incluida la versión e-Boost de mayor potencia. Ajuste de suspensión y dirección más deportivo que sus hermanos del grupo.",
    verdict: "Eléctrico compacto con más carácter deportivo que el ID.3. Revisar autonomía real y actualizaciones de software.",
    strengths: ["Comportamiento más dinámico que el ID.3 equivalente", "Buen espacio interior gracias a la plataforma MEB", "Varias capacidades de batería según necesidad"],
    watchouts: ["Software con fallos en unidades de primeras series (heredado del ID.3)", "Autonomía real inferior a la homologada en invierno", "Precio de ocasión aún alto"],
    faq: [
      { q: "¿El Born es un ID.3 de CUPRA?", a: "Comparte plataforma MEB y motor con el VW ID.3; CUPRA ajusta suspensión, dirección y estética con un enfoque más deportivo." },
      { q: "¿Qué autonomía real tiene el Born?", a: "Entre 300 y 400 km reales según batería, clima y velocidad." },
    ],
  }),

  /* ── Škoda ──────────────────────────────────────────────── */
  g({
    id: "skoda:enyaq:default", modelId: "skoda:enyaq", code: "1ª gen", slug: "1",
    startYear: 2021, bodyType: "SUV eléctrico", lengthMm: 4649, bootLitres: 585,
    oneLiner: "El SUV eléctrico más espacioso del grupo MEB: maletero enorme y detalles prácticos 'Simply Clever' aplicados a un eléctrico.",
    intro:
      "El Enyaq comparte plataforma MEB con ID.4 y Born, en la carrocería SUV más espaciosa del trío. Tracción trasera o total (RS), con varias capacidades de batería. Detalles prácticos típicos de Škoda incluso en un eléctrico (paraguas, rascador integrado).",
    verdict: "SUV eléctrico muy racional por espacio y maletero. Revisar autonomía real y actualizaciones de software.",
    strengths: ["Maletero y espacio interior de referencia entre los eléctricos MEB", "Detalles prácticos 'Simply Clever'", "Varias capacidades de batería"],
    watchouts: ["Software con fallos en unidades de primeras series (heredado de la plataforma MEB)", "Autonomía real inferior a la homologada en invierno", "Precio de ocasión aún alto"],
    faq: [
      { q: "¿El Enyaq es un ID.4 de Škoda?", a: "Comparte plataforma MEB y motores con el VW ID.4; Škoda ofrece más espacio y detalles prácticos propios." },
      { q: "¿Qué autonomía real tiene el Enyaq?", a: "Entre 300 y 400 km reales según batería, clima y velocidad." },
    ],
  }),
  g({
    id: "skoda:kodiaq:ns7", modelId: "skoda:kodiaq", code: "NS7", slug: "ns7",
    startYear: 2016, bodyType: "SUV 7 plazas", lengthMm: 4697, bootLitres: 720,
    oneLiner: "SUV familiar grande con 7 plazas y maletero enorme: mecánicas del Grupo VW conocidas y precio de ocasión razonable.",
    intro:
      "El Kodiaq comparte plataforma MQB con Tiguan Allspace y SEAT Tarraco. Motores 1.5/2.0 TSI y 2.0 TDI, con tracción 4x4 opcional y tercera fila. Buen equilibrio entre espacio, precio y mecánica conocida.",
    verdict: "SUV familiar de 7 plazas muy racional. El 2.0 TDI 150 con historial es la compra más recomendable.",
    strengths: ["Espacio y maletero de referencia entre los SUV de 7 plazas", "Mecánicas MQB conocidas", "Buena relación precio/producto"],
    watchouts: ["Mecatrónica DSG en uso urbano", "Haldex en versiones 4x4 (mantenimiento)", "Tercera fila justa para adultos en viaje largo"],
    faq: [
      { q: "¿El Kodiaq es un Tiguan Allspace de Škoda?", a: "Comparten plataforma y motores; el Kodiaq ofrece algo más de espacio y un precio de ocasión generalmente inferior." },
      { q: "¿Qué maletero tiene el Kodiaq con 5 plazas?", a: "En torno a 720 litros, de los mayores de su categoría." },
    ],
  }),
  g({
    id: "skoda:yeti:5l", modelId: "skoda:yeti", code: "5L", slug: "5l",
    startYear: 2009, endYear: 2017, bodyType: "SUV", lengthMm: 4222, bootLitres: 405,
    oneLiner: "SUV compacto muy querido por su practicidad: visibilidad excelente, buen maletero y mecánicas VAG muy conocidas.",
    intro:
      "El Yeti se ganó fama por su diseño funcional y su excelente visibilidad, poco habitual en SUV posteriores. Motores 1.2/1.4/1.8 TSI gasolina y 1.6/2.0 TDI diésel, con tracción 4x4 opcional. Descatalogado, pero muy apreciado en el mercado de ocasión.",
    verdict: "SUV compacto muy práctico y de bajo riesgo. El 2.0 TDI 4x4 con historial es la compra más recomendable.",
    strengths: ["Visibilidad y ergonomía de referencia", "Buen maletero y habitabilidad para su tamaño", "Mecánicas VAG muy conocidas"],
    watchouts: ["Descatalogado: verificar disponibilidad de algunas piezas de carrocería", "Haldex en versiones 4x4 (mantenimiento)", "EGR y turbo del TDI con muchos kilómetros"],
    faq: [
      { q: "¿Por qué el Yeti es tan apreciado de segunda mano?", a: "Por su diseño funcional, su excelente visibilidad y una mecánica VAG muy conocida y fiable, en un tamaño muy manejable." },
      { q: "¿El Yeti sigue teniendo buena disponibilidad de recambios?", a: "Al estar descatalogado desde 2017, algunas piezas específicas de carrocería pueden tardar más, aunque la mecánica comparte piezas con Golf/Octavia de su época." },
    ],
  }),

  /* ── Nissan ─────────────────────────────────────────────── */
  g({
    id: "nissan:leaf:ze1", modelId: "nissan:leaf", code: "ZE1 (2ª gen)", slug: "ze1",
    startYear: 2017, bodyType: "Compacto eléctrico", lengthMm: 4490, bootLitres: 435,
    oneLiner: "Uno de los eléctricos con más recorrido comercial del mundo: mecánica muy probada y buen maletero para el segmento.",
    intro:
      "La segunda generación del Leaf mejoró diseño, autonomía y prestaciones respecto al primer Leaf. Motor eléctrico propio de Nissan, con baterías de 40 o 62 kWh (e+). Sin refrigeración líquida de la batería en la mayoría de versiones, a diferencia de otros rivales.",
    verdict: "Eléctrico compacto de mecánica muy probada. Revisar el estado de salud de la batería (barras de capacidad) antes de comprar.",
    strengths: ["Mecánica eléctrica muy probada por los años en el mercado", "Buen maletero para un eléctrico compacto", "Precio de ocasión ya accesible"],
    watchouts: ["Batería sin refrigeración líquida en la mayoría de versiones: más sensible a la carga rápida frecuente", "Revisar el estado de salud (SOH) de la batería antes de comprar", "Autonomía real inferior a la homologada en invierno"],
    faq: [
      { q: "¿Cómo sé el estado de la batería de un Leaf de segunda mano?", a: "El propio salpicadero muestra unas 'barras' de capacidad de la batería (SOH); menos de 12 barras sobre 12 indica ya cierta degradación a revisar." },
      { q: "¿Qué autonomía real tiene el Leaf e+ (62 kWh)?", a: "En torno a 300-350 km reales según clima y velocidad, con una cifra WLTP homologada más alta." },
    ],
  }),
  g({
    id: "nissan:note:e12", modelId: "nissan:note", code: "E12", slug: "e12",
    startYear: 2013, endYear: 2020, bodyType: "Utilitario 5 puertas", lengthMm: 4100, bootLitres: 411,
    oneLiner: "Utilitario con maletero de familiar: buen espacio para su tamaño, con motores sencillos y sobrios.",
    intro:
      "El Note E12 destacó por su maletero, muy por encima de la media de los utilitarios de su tamaño. Motores 1.2 atmosférico, 0.9/1.2 turbo (DIG-T/IG-T) y 1.5 dCi diésel. Mecánica sencilla y sin grandes sorpresas.",
    verdict: "Utilitario muy práctico por espacio. El 1.5 dCi para kilómetros; el 1.2 atmosférico para ciudad.",
    strengths: ["Maletero muy por encima de la media del segmento", "Mecánica sencilla y fiable", "Buena visibilidad y ergonomía"],
    watchouts: ["1.2 atmosférico justo de fuerza con carga", "Insonorización básica", "Equipamiento tecnológico limitado frente a rivales más recientes"],
    faq: [
      { q: "¿Qué maletero tiene el Note E12?", a: "En torno a 411 litros, muy por encima de la media de los utilitarios de su tamaño." },
      { q: "¿Hay Note híbrido?", a: "Sí, en Japón se vendió con el sistema e-Power; en Europa la mayoría de unidades son de combustión convencional." },
    ],
  }),

  /* ── Mazda ──────────────────────────────────────────────── */
  g({
    id: "mazda:6:gj", modelId: "mazda:6", code: "GJ (restyling)", slug: "gj",
    startYear: 2018, endYear: 2023, bodyType: "Berlina y Wagon", lengthMm: 4865, bootLitres: 506,
    oneLiner: "Berlina/familiar grande que se conduce con soltura: mecánica Skyactiv atmosférica, sin turbo ni sobresaltos.",
    intro:
      "El Mazda6 de su última etapa (restyling GJ) ofrece motores Skyactiv-G 2.0/2.5 gasolina y Skyactiv-D 2.2 diésel. Chasis noble y buen tacto de conducción para una berlina grande; interior de calidad creciente en las últimas series.",
    verdict: "Berlina/familiar grande de mecánica fiable. El Skyactiv-D 2.2 para kilómetros; el 2.0 gasolina para uso sin prisas.",
    strengths: ["Comportamiento y tacto de conducción por encima de la media", "Mecánica Skyactiv fiable sin sobrealimentación agresiva", "Wagon con buen maletero"],
    watchouts: ["Skyactiv-D 2.2: carbonilla y dilución de aceite si es uso solo urbano", "Consumo del 2.5 gasolina algo alto", "Multimedia sin pantalla táctil en marcha"],
    faq: [
      { q: "¿El Mazda6 Wagon tiene buen maletero?", a: "Sí, en torno a 506 litros, competitivo frente a berlinas y familiares generalistas de tamaño similar." },
      { q: "¿El diésel 2.2 del Mazda6 da problemas?", a: "En uso mayoritariamente urbano puede acumular carbonilla y diluir aceite; con recorridos largos es un motor sólido y sobrio." },
    ],
  }),
  g({
    id: "mazda:cx-3:dk", modelId: "mazda:cx-3", code: "DK", slug: "dk",
    startYear: 2015, endYear: 2021, bodyType: "SUV", lengthMm: 4275, bootLitres: 350,
    oneLiner: "B-SUV con tacto de conducción por encima de la media: mecánica Skyactiv atmosférica, sin turbo.",
    intro:
      "El CX-3 comparte base con el Mazda2 de su época. Motores Skyactiv-G 2.0 gasolina y Skyactiv-D 1.5 diésel, con tracción total opcional (i-Activ AWD). Interior de calidad superior a la media del segmento; maletero algo justo.",
    verdict: "B-SUV noble y fiable. El Skyactiv-G 2.0 para uso normal; el Skyactiv-D 1.5 si haces más kilómetros.",
    strengths: ["Tacto de conducción por encima de la media del segmento", "Calidad interior superior a la media", "Mecánica Skyactiv fiable"],
    watchouts: ["Maletero algo justo para el segmento", "Consumo urbano del gasolina atmosférico", "Plazas traseras algo reducidas"],
    faq: [
      { q: "¿El CX-3 es un Mazda2 más alto?", a: "Comparte plataforma y motores con el Mazda2 de su época; añade carrocería SUV y algo más de altura libre." },
      { q: "¿Tiene tracción total?", a: "Opcionalmente, con el sistema i-Activ AWD en varias versiones." },
    ],
  }),
  g({
    id: "mazda:mx-30:default", modelId: "mazda:mx-30", code: "1ª gen", slug: "1",
    startYear: 2020, bodyType: "SUV eléctrico/híbrido", lengthMm: 4395, bootLitres: 366,
    oneLiner: "El eléctrico de Mazda con puertas traseras 'de suicidio': autonomía modesta pero comportamiento noble, también en híbrido ligero.",
    intro:
      "El MX-30 combina un diseño particular (puertas traseras sin pilar central, abisagradas al revés) con una batería relativamente pequeña priorizando el comportamiento sobre la autonomía máxima. También existe una versión mild-hybrid de gasolina (Skyactiv-X/G).",
    verdict: "Eléctrico de diseño y comportamiento cuidados, con autonomía limitada. Pensado para uso urbano y trayectos cortos.",
    strengths: ["Comportamiento dinámico noble para un eléctrico", "Diseño interior con materiales reciclados y detalles cuidados", "Puertas traseras que facilitan el acceso"],
    watchouts: ["Autonomía real modesta frente a rivales eléctricos", "Maletero y plazas traseras reducidos por el diseño", "Las puertas traseras necesitan la delantera abierta para usarse"],
    faq: [
      { q: "¿Qué autonomía real tiene el MX-30 eléctrico?", a: "En torno a 180-200 km reales, notablemente inferior a otros eléctricos de tamaño similar: Mazda priorizó peso y comportamiento sobre autonomía máxima." },
      { q: "¿Las puertas traseras se pueden abrir de forma independiente?", a: "No, hay que abrir primero la puerta delantera del mismo lado; es un diseño más estético que funcional." },
    ],
  }),

  /* ── Hyundai ────────────────────────────────────────────── */
  g({
    id: "hyundai:i10:ac3", modelId: "hyundai:i10", code: "AC3", slug: "ac3",
    startYear: 2019, bodyType: "Urbano 5 puertas", lengthMm: 3670, bootLitres: 252,
    oneLiner: "Urbano con maletero y equipamiento por encima de la media: 1.0/1.2 atmosférico y la garantía de 5 años de Hyundai.",
    intro:
      "La tercera generación del i10 creció ligeramente para ganar espacio interior y maletero. Motores 1.0 y 1.2 atmosféricos, sin turbo. Buen equipamiento de serie para el segmento y garantía de fábrica de 5 años.",
    verdict: "Urbano racional con buen respaldo de garantía. El 1.2 atmosférico para algo más de holgura en autovía.",
    strengths: ["Garantía de fábrica de 5 años", "Buen maletero y equipamiento para el segmento", "Mecánica atmosférica sencilla y fiable"],
    watchouts: ["1.0 atmosférico justo de fuerza con carga", "Insonorización básica en autovía", "Equipamiento de asistencias limitado en acabados de acceso"],
    faq: [
      { q: "¿El i10 AC3 mantiene la garantía si lo compro usado?", a: "Sí, la garantía de 5 años de Hyundai es de fábrica y se transfiere mientras esté vigente y con las revisiones al día." },
      { q: "¿1.0 o 1.2 en el i10?", a: "El 1.2 va más holgado en autovía y con el coche cargado; el 1.0 basta para uso urbano puro." },
    ],
  }),
  g({
    id: "hyundai:santa-fe:tm", modelId: "hyundai:santa-fe", code: "TM", slug: "tm",
    startYear: 2018, bodyType: "SUV 7 plazas", lengthMm: 4785, bootLitres: 634,
    oneLiner: "SUV familiar grande con 7 plazas y garantía de 5 años: el 2.2 CRDi es el motor de kilómetros, con híbrido en las últimas series.",
    intro:
      "La cuarta generación del Santa Fe creció en tamaño respecto a la anterior. Motores 2.2 CRDi diésel, 2.5/1.6 T-GDi gasolina e híbrido/híbrido enchufable en el restyling. Tracción total HTRAC opcional y tercera fila. Buen respaldo de garantía.",
    verdict: "SUV familiar de 7 plazas muy completo. El 2.2 CRDi con historial es la compra más razonable.",
    strengths: ["Espacio y maletero de referencia entre SUV de 7 plazas", "Garantía de fábrica de 5 años", "Buen equipamiento de serie"],
    watchouts: ["Caja automática de doble embrague en versiones que la montan", "Consumo alto en las versiones de gasolina", "Tercera fila justa para adultos en viaje largo"],
    faq: [
      { q: "¿El Santa Fe TM tiene 7 plazas de serie?", a: "Depende del mercado y acabado; en muchas configuraciones la tercera fila es opcional." },
      { q: "¿Qué motor del Santa Fe es más recomendable?", a: "El 2.2 CRDi para quien hace muchos kilómetros; el híbrido del restyling para uso más urbano." },
    ],
  }),
  g({
    id: "hyundai:ioniq:ae", modelId: "hyundai:ioniq", code: "AE", slug: "ae",
    startYear: 2016, endYear: 2022, bodyType: "Compacto híbrido/eléctrico", lengthMm: 4470, bootLitres: 443,
    oneLiner: "El único modelo vendido en híbrido, híbrido enchufable y 100% eléctrico con la misma carrocería: fiabilidad y consumo muy competitivos.",
    intro:
      "El Ioniq se ofreció con tres mecánicas sobre la misma base: híbrido 1.6 GDi, híbrido enchufable y eléctrico puro. Buen maletero para un compacto electrificado y garantía de fábrica de 5 años (8 años en la batería del eléctrico).",
    verdict: "Compacto electrificado muy racional. El híbrido para tranquilidad total; el eléctrico si la autonomía te cuadra.",
    strengths: ["Tres mecánicas electrificadas sobre la misma carrocería", "Garantía de batería de 8 años en el eléctrico", "Buen maletero para un compacto electrificado"],
    watchouts: ["Diseño exterior conservador", "Autonomía del eléctrico modesta frente a rivales más recientes", "Caja automática de doble embrague en el híbrido (no e-CVT)"],
    faq: [
      { q: "¿Qué autonomía tiene el Ioniq Electric?", a: "Según año y batería, entre 280 y 311 km WLTP homologados; en uso real, algo menos." },
      { q: "¿El Ioniq híbrido usa e-CVT como Toyota?", a: "No, usa una caja automática de doble embrague de 6 velocidades, con cambios de marcha perceptibles a diferencia del e-CVT." },
    ],
  }),
  g({
    id: "hyundai:ioniq-5:default", modelId: "hyundai:ioniq-5", code: "NE", slug: "ne",
    startYear: 2021, bodyType: "SUV eléctrico", lengthMm: 4635, bootLitres: 527,
    oneLiner: "Eléctrico de plataforma dedicada (E-GMP) con carga ultrarrápida de serie: de los más avanzados técnicamente de su generación.",
    intro:
      "El Ioniq 5 estrena la plataforma E-GMP de 800 V, que permite cargar del 10 al 80% en unos 18 minutos en cargadores rápidos. Diseño retro-futurista con habitáculo muy espacioso gracias al suelo plano. Tracción trasera o total según versión.",
    verdict: "Eléctrico técnicamente muy avanzado. La carga ultrarrápida de serie es una ventaja real frente a la mayoría de rivales de su época.",
    strengths: ["Carga ultrarrápida (800 V) de serie", "Habitáculo muy espacioso gracias al suelo plano", "Garantía de batería de 8 años"],
    watchouts: ["Precio de ocasión todavía alto", "Visibilidad trasera limitada por el diseño", "Maletero delantero (frunk) pequeño en las versiones de tracción total"],
    faq: [
      { q: "¿Qué significa la carga a 800 V del Ioniq 5?", a: "Permite recargar del 10 al 80% en unos 18 minutos en un cargador ultrarrápido compatible, muy por debajo del tiempo habitual en eléctricos de 400 V." },
      { q: "¿Qué autonomía real tiene el Ioniq 5?", a: "Entre 350 y 450 km reales según batería, tracción, clima y velocidad." },
    ],
  }),

  /* ── Kia ────────────────────────────────────────────────── */
  g({
    id: "kia:optima:jf", modelId: "kia:optima", code: "JF", slug: "jf",
    startYear: 2015, endYear: 2020, bodyType: "Berlina y Sportswagon", lengthMm: 4855, bootLitres: 510,
    oneLiner: "Berlina grande de ocasión muy barata: buen equipamiento, 7 años de garantía y el 1.7 CRDi como motor de kilómetros.",
    intro:
      "El Kia Optima JF ofreció mucho equipamiento por el precio, con la garantía de 7 años de la marca como respaldo. Motores 1.7 CRDi diésel, 1.6/2.0 T-GDi gasolina e híbrido/híbrido enchufable en algunas versiones. El Sportswagon familiar tiene buen maletero.",
    verdict: "Berlina grande muy completa por poco dinero. El 1.7 CRDi con historial es la compra más recomendable.",
    strengths: ["Mucho equipamiento de serie para su precio", "Garantía de fábrica de 7 años", "Sportswagon con buen maletero"],
    watchouts: ["Caja automática de doble embrague en versiones que la montan", "Consumo alto en las versiones de gasolina turbo grandes", "Depreciación rápida (a favor del comprador de ocasión)"],
    faq: [
      { q: "¿La garantía de 7 años del Optima se transfiere al comprar usado?", a: "Sí, es de fábrica y se transfiere mientras esté vigente y con las revisiones al día." },
      { q: "¿Qué maletero tiene el Optima Sportswagon?", a: "En torno a 552 litros, muy competitivo frente a familiares generalistas de tamaño similar." },
    ],
  }),
  g({
    id: "kia:xceed:cd", modelId: "kia:xceed", code: "CD", slug: "cd",
    startYear: 2019, bodyType: "SUV crossover", lengthMm: 4395, bootLitres: 426,
    oneLiner: "El Ceed con aire de SUV: más altura y protecciones, con las mismas mecánicas y la garantía de 7 años de Kia.",
    intro:
      "El XCeed comparte plataforma y motores con el Ceed, con una carrocería crossover de techo más inclinado. Motores 1.0/1.5 T-GDi gasolina, 1.6 CRDi diésel e híbrido enchufable. Buen equilibrio entre imagen de SUV y comportamiento de compacto.",
    verdict: "Crossover racional con la garantía más larga del segmento. El 1.5 T-GDi mHEV o el 1.6 CRDi son las compras más equilibradas.",
    strengths: ["Garantía de fábrica de 7 años", "Comportamiento más ágil que un SUV convencional", "Mecánicas compartidas con el Ceed, conocidas"],
    watchouts: ["Carbonilla en admisión de los T-GDi con uso solo urbano", "Maletero algo justo para su tamaño exterior", "PHEV solo rentable si se carga a diario"],
    faq: [
      { q: "¿El XCeed es un SUV de verdad?", a: "Es más bien un crossover: más altura y protecciones que el Ceed, pero sin capacidad todocamino ni tracción total." },
      { q: "¿Comparte mecánica con el Ceed?", a: "Sí, plataforma y motores son los mismos que los del Kia Ceed de su generación." },
    ],
  }),
  g({
    id: "kia:soul:sk3", modelId: "kia:soul", code: "SK3", slug: "sk3",
    startYear: 2019, bodyType: "SUV compacto", lengthMm: 4195, bootLitres: 315,
    oneLiner: "SUV compacto de diseño muy personal: buen espacio interior y garantía de 7 años, con motor 1.6 atmosférico.",
    intro:
      "El Soul SK3 mantiene el diseño cuadrado y personal que caracteriza al modelo desde su origen. Motor 1.6 atmosférico gasolina en la mayoría de mercados europeos, con versión eléctrica (Soul EV) en varios países. Buen espacio interior gracias a la forma de la carrocería.",
    verdict: "SUV compacto de diseño diferenciado y garantía larga. El 1.6 atmosférico para uso normal sin prisas.",
    strengths: ["Diseño muy personal y buen espacio interior", "Garantía de fábrica de 7 años", "Buena visibilidad gracias a la carrocería cuadrada"],
    watchouts: ["1.6 atmosférico justo de fuerza en autovía cargado", "Oferta y disponibilidad limitadas en algunos mercados europeos", "Consumo real algo alto para su tamaño"],
    faq: [
      { q: "¿El Soul se vende con motor diésel?", a: "En Europa la gama se centró en gasolina atmosférico y, en algunos mercados, en la versión 100% eléctrica." },
      { q: "¿Qué espacio interior ofrece?", a: "Gracias a su carrocería cuadrada, el espacio para la cabeza y la sensación de amplitud están por encima de la media de su segmento." },
    ],
  }),
  g({
    id: "kia:ev6:default", modelId: "kia:ev6", code: "CV", slug: "cv",
    startYear: 2021, bodyType: "SUV eléctrico", lengthMm: 4680, bootLitres: 480,
    oneLiner: "El eléctrico deportivo de Kia sobre la misma plataforma E-GMP que el Ioniq 5: carga ultrarrápida y comportamiento más dinámico.",
    intro:
      "El EV6 comparte plataforma E-GMP de 800 V con el Hyundai Ioniq 5, con un diseño y un ajuste de suspensión más deportivos. Versiones de tracción trasera y total (GT-Line/GT), con carga ultrarrápida de serie. Garantía de batería de 7 años.",
    verdict: "Eléctrico técnicamente muy avanzado con más carácter deportivo que el Ioniq 5. Carga ultrarrápida como ventaja real.",
    strengths: ["Carga ultrarrápida (800 V) de serie", "Comportamiento más dinámico que el Ioniq 5 equivalente", "Garantía de batería de 7 años"],
    watchouts: ["Precio de ocasión todavía alto", "Visibilidad trasera limitada por el diseño", "Maletero algo menor que el del Ioniq 5"],
    faq: [
      { q: "¿El EV6 es un Ioniq 5 de Kia?", a: "Comparte plataforma E-GMP y mecánica con el Hyundai Ioniq 5; Kia ajusta diseño, suspensión y dirección con un enfoque más deportivo." },
      { q: "¿Qué autonomía real tiene el EV6?", a: "Entre 350 y 450 km reales según batería, tracción, clima y velocidad." },
    ],
  }),

  /* ── Fiat ───────────────────────────────────────────────── */
  g({
    id: "fiat:punto:199", modelId: "fiat:punto", code: "199 (Grande Punto / Punto Evo)", slug: "199",
    startYear: 2005, endYear: 2018, bodyType: "Utilitario 3/5 puertas", lengthMm: 4030, bootLitres: 275,
    oneLiner: "Uno de los utilitarios de ocasión más baratos de comprar: motores 1.2/1.4 gasolina y 1.3 MultiJet diésel muy conocidos.",
    intro:
      "El Grande Punto y su evolución Punto Evo/Punto tuvieron una vida comercial muy larga, lo que se traduce en precios de ocasión muy bajos. Motores 1.2/1.4 gasolina atmosférico y turbo, y 1.3/1.6 MultiJet diésel. Mecánica sencilla y muy conocida en talleres.",
    verdict: "Coste de compra mínimo. El 1.3 MultiJet para consumo bajo; el 1.2 atmosférico para sencillez máxima.",
    strengths: ["Precio de compra y mantenimiento muy bajos", "Mecánica sencilla y muy conocida en cualquier taller", "Oferta muy amplia en el mercado de ocasión"],
    watchouts: ["Antigüedad de diseño y equipamiento de seguridad limitado en versiones más viejas", "Insonorización básica", "Óxido en bajos en unidades mal cuidadas"],
    faq: [
      { q: "¿Qué diferencia hay entre Grande Punto y Punto Evo?", a: "El Punto Evo (2009) es un restyling del Grande Punto con retoques estéticos, mejoras de motor y de equipamiento." },
      { q: "¿Es fiable el 1.3 MultiJet?", a: "Sí, es un diésel muy extendido y probado en el grupo Fiat/PSA; conviene revisar el estado del DPF y la EGR en uso muy urbano." },
    ],
  }),
  g({
    id: "fiat:doblo:263", modelId: "fiat:doblo", code: "263 (2ª gen)", slug: "263",
    startYear: 2010, endYear: 2022, bodyType: "Furgoneta de pasajeros 5/7 plazas", lengthMm: 4400, bootLitres: 790,
    oneLiner: "Furgoneta de pasajeros muy práctica y barata: espacio enorme para el precio, con motores 1.3/1.6/2.0 MultiJet diésel.",
    intro:
      "El Doblò en su versión de pasajeros ofrece un espacio interior y de carga muy por encima de su precio. Motores 1.4/1.6 gasolina y 1.3/1.6/2.0 MultiJet diésel, con puertas correderas traseras. Comportamiento y aislamiento de furgoneta.",
    verdict: "Espacio máximo al precio mínimo. El 1.6 MultiJet para kilómetros es la compra más razonable.",
    strengths: ["Espacio interior y de carga muy por encima de su precio", "Puertas correderas traseras", "Precio de compra y mantenimiento bajos"],
    watchouts: ["Comportamiento y aislamiento de furgoneta", "Materiales interiores básicos", "Consumo alto con el vehículo cargado"],
    faq: [
      { q: "¿El Doblò es cómodo para viajar?", a: "Prioriza espacio sobre confort: va bien para trayectos cortos y medios, con aislamiento acústico inferior a un monovolumen de turismo." },
      { q: "¿Cuántas plazas puede llevar?", a: "Hasta 7 en la versión larga con tercera fila." },
    ],
  }),
  g({
    id: "fiat:500l:default", modelId: "fiat:500l", code: "1ª gen", slug: "1",
    startYear: 2012, endYear: 2023, bodyType: "Monovolumen compacto", lengthMm: 4147, bootLitres: 400,
    oneLiner: "El Fiat 500 convertido en monovolumen compacto: hereda el diseño pero gana espacio y maletero.",
    intro:
      "El 500L toma el lenguaje de diseño del 500 y lo aplica a una carrocería de monovolumen compacto con más espacio y maletero. Motores 0.9 TwinAir, 1.4 atmosférico gasolina y 1.3/1.6 MultiJet diésel. Comportamiento más de monovolumen que de urbano ágil.",
    verdict: "Alternativa práctica al 500 clásico. El 1.6 MultiJet para kilómetros; el 1.4 para uso urbano-mixto.",
    strengths: ["Espacio y maletero muy superiores al 500 clásico", "Diseño reconocible de la familia 500", "Buena posición de conducción elevada"],
    watchouts: ["Consumo real del TwinAir por encima del homologado", "Comportamiento menos ágil que el 500 original", "Insonorización mejorable en autovía"],
    faq: [
      { q: "¿El 500L es un monovolumen o un SUV?", a: "Es un monovolumen compacto: más alto y espacioso que un utilitario, sin pretensiones todocamino." },
      { q: "¿Comparte motor con el 500 clásico?", a: "Sí, la gama de motores (TwinAir, atmosférico, MultiJet) es esencialmente la misma." },
    ],
  }),

  /* ── Citroën ────────────────────────────────────────────── */
  g({
    id: "citroen:c1:b4", modelId: "citroen:c1", code: "B4 (2ª gen)", slug: "b4",
    startYear: 2014, endYear: 2022, bodyType: "Urbano 3/5 puertas", lengthMm: 3465, bootLitres: 196,
    oneLiner: "Urbano gemelo del Toyota Aygo y el Peugeot 108: mecánica 1.0 VVT-i atmosférica, muy fiable y barata.",
    intro:
      "El C1 se desarrolló junto a Toyota (Aygo) y Peugeot (108) sobre la misma plataforma y con el mismo motor. Coche pensado en exclusiva para ciudad: maletero mínimo, mecánica muy fiable y mantenimiento barato.",
    verdict: "Urbano puro de mantenimiento mínimo. Igual de recomendable que sus gemelos Aygo y 108.",
    strengths: ["Fiabilidad y mantenimiento muy baratos (motor Toyota)", "Fácil de aparcar y manejar en ciudad", "Precio de ocasión bajo"],
    watchouts: ["Maletero y plazas traseras mínimos", "Poca insonorización en autovía", "Equipamiento básico en acabados de acceso"],
    faq: [
      { q: "¿El C1 es lo mismo que el Toyota Aygo?", a: "Sí, junto con el Peugeot 108 comparten plataforma, motor 1.0 VVT-i y carrocería, con cambios estéticos y de equipamiento." },
      { q: "¿Hay C1 descapotable?", a: "Sí, la versión Airscape con techo de lona retráctil." },
    ],
  }),
  g({
    id: "citroen:c4-picasso:b78", modelId: "citroen:c4-picasso", code: "B78 / SpaceTourer", slug: "b78",
    startYear: 2013, endYear: 2022, bodyType: "Monovolumen 5/7 plazas", lengthMm: 4428, bootLitres: 537,
    oneLiner: "Monovolumen con parabrisas panorámico característico: buen espacio y confort, con motores PureTech y BlueHDi.",
    intro:
      "El C4 Picasso (rebautizado C4 SpaceTourer en el restyling) destaca por su parabrisas panorámico y su luminosidad interior. Motores 1.2/1.6 PureTech gasolina y 1.6/2.0 BlueHDi diésel, con opción de 7 plazas en el Grand C4 Picasso. Confort de marcha por encima de la media.",
    verdict: "Monovolumen cómodo y luminoso. El 1.6 BlueHDi con historial es la compra más recomendable.",
    strengths: ["Luminosidad y parabrisas panorámico característicos", "Confort de suspensión por encima de la media", "Grand C4 Picasso con 7 plazas"],
    watchouts: ["Correa 'húmeda' del PureTech en series iniciales", "Sistema AdBlue en los diésel más recientes", "Electrónica y sensores con averías ocasionales"],
    faq: [
      { q: "¿Qué diferencia hay entre C4 Picasso y Grand C4 Picasso?", a: "El Grand C4 Picasso es la versión alargada con tercera fila para 7 plazas; el C4 Picasso normal tiene 5 plazas." },
      { q: "¿El C4 Picasso es lo mismo que el C4 SpaceTourer?", a: "Sí, SpaceTourer es el nombre que recibió el modelo tras el restyling, sin cambios mecánicos relevantes." },
    ],
  }),

  /* ── Volvo ──────────────────────────────────────────────── */
  g({
    id: "volvo:xc90:256", modelId: "volvo:xc90", code: "256 (2ª gen)", slug: "256",
    startYear: 2015, bodyType: "SUV 7 plazas", lengthMm: 4953, bootLitres: 721,
    oneLiner: "SUV grande premium de 7 plazas centrado en seguridad y confort: el D5 diésel y el B5 mild-hybrid son los motores de referencia.",
    intro:
      "La segunda generación del XC90 relanzó la gama grande de Volvo con un diseño escandinavo muy celebrado. Motores 2.0 D5 diésel (con tracción total de serie), B5/B6 mild-hybrid gasolina y el híbrido enchufable T8 Recharge. Equipamiento de seguridad de referencia y tercera fila usable.",
    verdict: "SUV grande premium muy completo. El D5 con mantenimiento documentado es la opción más razonable.",
    strengths: ["Equipamiento de seguridad y confort de referencia", "Tercera fila más usable que en SUV más pequeños", "Diseño e interior de gran calidad"],
    watchouts: ["Coste de mantenimiento y reparaciones elevado", "Admisión y EGR del D5 con kilómetros", "Mantenimiento de la caja automática Aisin"],
    faq: [
      { q: "¿El XC90 D5 tiene tracción total de serie?", a: "Sí, todas las versiones diésel D5 llevan tracción total AWD de serie." },
      { q: "¿Qué autonomía tiene el XC90 T8 Recharge?", a: "Según año y batería, entre 40 y 77 km WLTP eléctricos; en uso real, algo menos." },
    ],
  }),
  g({
    id: "volvo:v60:225", modelId: "volvo:v60", code: "225 (2ª gen)", slug: "225",
    startYear: 2018, bodyType: "Familiar", lengthMm: 4761, bootLitres: 529,
    oneLiner: "Familiar premium de diseño muy cuidado: el D4 diésel Drive-E combina consumo bajo con un maletero muy competente.",
    intro:
      "La segunda generación del V60 comparte plataforma SPA con el XC60 y el S90. Motores 2.0 D3/D4 diésel, gasolina T4/T5 y mild-hybrid B4/B5, además del híbrido enchufable T6/T8. Diseño y calidad interior de referencia en el segmento familiar premium.",
    verdict: "Familiar premium muy completo. El D4 con mantenimiento documentado es la opción más razonable.",
    strengths: ["Diseño y calidad interior de referencia", "Buen maletero y practicidad para el segmento", "Consumo contenido en los diésel Drive-E"],
    watchouts: ["Admisión y EGR de los diésel con kilómetros", "Mantenimiento de la caja automática Aisin", "Coste de mantenimiento superior a un familiar generalista"],
    faq: [
      { q: "¿Qué maletero tiene el V60?", a: "En torno a 529 litros, competitivo frente a familiares premium de tamaño similar." },
      { q: "¿D3 o D4 en el V60?", a: "El D4 ofrece más empuje para viaje y carga; el D3 es suficiente para un uso más tranquilo y algo más económico." },
    ],
  }),
  g({
    id: "volvo:s60:224", modelId: "volvo:s60", code: "224 (3ª gen)", slug: "224",
    startYear: 2018, bodyType: "Berlina", lengthMm: 4761, bootLitres: 442,
    oneLiner: "Berlina premium hermana del V60: mismo interior y mecánica, sin versión diésel en las últimas series (todo gasolina/híbrido).",
    intro:
      "La tercera generación del S60 comparte plataforma y motores con el V60, aunque en mercados como el estadounidense se dejó de ofrecer diésel; en Europa convivieron ambas gamas según año. Mild-hybrid B4/B5 gasolina e híbrido enchufable T6/T8 Recharge.",
    verdict: "Berlina premium con el mismo contenido que el V60. Elige según prioricéis maletero (V60) o estética de berlina (S60).",
    strengths: ["Diseño y calidad interior de referencia", "Mecánicas compartidas con el V60, bien conocidas", "Buen equipamiento de seguridad"],
    watchouts: ["Maletero inferior al del V60 familiar", "Coste de mantenimiento superior a un generalista", "Disponibilidad de diésel limitada en las últimas series"],
    faq: [
      { q: "¿El S60 tiene versión diésel?", a: "Depende del año y mercado: las últimas series se centraron en gasolina mild-hybrid e híbrido enchufable." },
      { q: "¿S60 o V60?", a: "Mecánicamente son iguales; el V60 ofrece mucho más maletero, el S60 prioriza la estética de berlina." },
    ],
  }),

  /* ── MINI ───────────────────────────────────────────────── */
  g({
    id: "mini:clubman:f54", modelId: "mini:clubman", code: "F54", slug: "f54",
    startYear: 2015, bodyType: "Familiar", lengthMm: 4253, bootLitres: 360,
    oneLiner: "El MINI más práctico con puertas traseras partidas: mismos motores B38/B48/B47 que el resto de la gama.",
    intro:
      "El Clubman F54 es el MINI más largo y práctico, con sus características puertas traseras partidas ('barn doors') y opción de tracción total ALL4. Motores B38/B48 gasolina y B37/B47 diésel, compartidos con el resto de la gama MINI/BMW UKL.",
    verdict: "El MINI para quien necesita algo más de espacio sin renunciar al carácter de la marca. El Cooper D es la compra más razonable.",
    strengths: ["Más espacio y maletero que el resto de la gama MINI", "Mecánicas BMW conocidas", "Opción de tracción total ALL4"],
    watchouts: ["Cadena y EGR de los diésel B47", "Recambios y neumáticos caros", "Visibilidad trasera reducida por las puertas partidas"],
    faq: [
      { q: "¿Qué son las puertas 'barn doors' del Clubman?", a: "Un portón trasero dividido en dos hojas que se abren hacia los lados, un guiño de diseño heredado de generaciones anteriores del modelo." },
      { q: "¿El Clubman comparte motor con el Countryman?", a: "Sí, ambos usan la gama de motores BMW B38/B48/B47 sobre la plataforma UKL." },
    ],
  }),
];

/* ═══════════════════════════════════════════════════════════════
   CUARTA AMPLIACIÓN — generaciones de los años 2000-2010 muy
   presentes en el mercado de ocasión español (el tramo de precio
   más buscado), sobre modelos ya existentes + 4 modelos nuevos
   imprescindibles de esa época (207, Auris, Avensis, Sorento).
   ═══════════════════════════════════════════════════════════════ */
const extraGenerations4: Generation[] = [
  g({
    id: "bmw:serie-3:e90", modelId: "bmw:serie-3", code: "E90/E91", slug: "e90",
    startYear: 2005, endYear: 2012, bodyType: "Berlina y Touring", lengthMm: 4520, bootLitres: 460,
    oneLiner: "El Serie 3 que consolidó la fama de la berlina deportiva alemana; el 320d es de los diésel más buscados de ocasión, con el punto débil conocido de la cadena N47.",
    intro:
      "La quinta generación del Serie 3 (E90 berlina, E91 Touring) es un clásico del usado premium. Motores N43/N46 gasolina y N47 diésel (2007 en adelante; antes M47). El N47 de los primeros años tiene fama justificada de desgaste de cadena de distribución; conviene exigir historial.",
    verdict: "Berlina deportiva de ocasión muy buscada. El 320d con historial de cadena documentado es la compra más razonable.",
    strengths: ["Tracción trasera y dinámica de conducción de referencia", "Precio de ocasión ya muy accesible", "Touring con buen maletero"],
    watchouts: ["Cadena de distribución del N47 (2007-2010), especialmente delicada en esta generación", "Caja de aguas bajo el parabrisas que puede filtrar y mojar la electrónica", "Suspensión y bujes con desgaste típico de un coche de más de 15 años"],
    faq: [
      { q: "¿El 320d E90 tiene problemas de cadena?", a: "Los N47 de 2007-2010 son los más afectados por el estiramiento de la cadena; exige historial de revisión o sustitución antes de comprar." },
      { q: "¿Qué motor gasolina lleva el 320i E90?", a: "El N46, atmosférico de 6 cilindros en las primeras series y 4 cilindros después; motor con buena reputación de fiabilidad." },
    ],
  }),
  g({
    id: "bmw:serie-5:f10", modelId: "bmw:serie-5", code: "F10/F11", slug: "f10",
    startYear: 2010, endYear: 2017, bodyType: "Berlina y Touring", lengthMm: 4899, bootLitres: 520,
    oneLiner: "Berlina grande de kilómetros muy asentada en el usado: el 520d combina consumo bajo y confort a un precio ya muy razonable.",
    intro:
      "La sexta generación del Serie 5 (F10/F11) es una berlina grande muy racional de ocasión. Motores N47/B47 diésel y N20/N52 gasolina. El N47 de primeras series comparte la cautela de la cadena de distribución del resto de la familia; el B47 posterior (desde ~2015) es más tranquilo.",
    verdict: "Mucha berlina por poco dinero. El 520d con B47 y mantenimiento documentado es la compra más razonable; con N47, exigir historial de cadena.",
    strengths: ["Confort y aislamiento de nivel superior para su precio de ocasión", "520d con consumo muy bajo para su tamaño", "Touring con maletero de referencia"],
    watchouts: ["Cadena de distribución del N47 en unidades de primeras series", "Suspensión neumática trasera si la equipa (coste si falla)", "Reparaciones de electrónica caras fuera de garantía"],
    faq: [
      { q: "¿Qué diferencia hay entre el N47 y el B47 del 520d F10?", a: "El N47 se montó hasta aproximadamente 2015 y es el que arrastra la fama de la cadena; el B47 posterior mejoró ese punto." },
      { q: "¿El F10 Touring tiene buen maletero?", a: "Sí, en torno a 560 litros, muy competitivo para un familiar premium de ocasión." },
    ],
  }),
  g({
    id: "mercedes-benz:clase-c:w204", modelId: "mercedes-benz:clase-c", code: "W204", slug: "w204",
    startYear: 2007, endYear: 2014, bodyType: "Berlina, Estate y Coupé", lengthMm: 4581, bootLitres: 475,
    oneLiner: "Berlina premium de ocasión ya muy asequible: el C 220 CDI es sobrio y fiable, con la calidad de construcción típica de Mercedes de esa época.",
    intro:
      "La tercera generación de la Clase C (W204) es una compra premium de ocasión con precio ya muy contenido. Motores OM651 diésel (desde 2008) y M271 gasolina turbo. El OM651 es un diésel muy extendido y fiable con mantenimiento correcto; la EGR y el colector de admisión piden atención con kilómetros.",
    verdict: "Berlina premium muy asequible de ocasión. El C 220 CDI con historial documentado es la compra más razonable.",
    strengths: ["Calidad de construcción e interior por encima de su precio de ocasión", "OM651 diésel sobrio y muy extendido", "Estate con buen maletero"],
    watchouts: ["Colector de admisión y EGR del OM651 con kilómetros", "Óxido en pasos de rueda en unidades mal cuidadas", "Suspensión y bujes con desgaste típico de un coche de más de 12 años"],
    faq: [
      { q: "¿El C 220 CDI W204 es fiable?", a: "Con mantenimiento correcto sí; el motor OM651 es uno de los diésel más extendidos y probados de Mercedes de esa década." },
      { q: "¿Qué diferencia hay entre el Coupé y la berlina W204?", a: "El Coupé tiene dos puertas y una línea más deportiva; la berlina y el Estate priorizan espacio y practicidad." },
    ],
  }),
  g({
    id: "mercedes-benz:clase-a:w176", modelId: "mercedes-benz:clase-a", code: "W176", slug: "w176",
    startYear: 2012, endYear: 2018, bodyType: "Compacto 5 puertas", lengthMm: 4292, bootLitres: 341,
    oneLiner: "La Clase A que cambió de tracción delantera y de imagen: compacto premium con el A 200 CDI/220 CDI como diésel de referencia.",
    intro:
      "La tercera generación de la Clase A (W176) abandonó la carrocería monovolumen por un compacto deportivo de tracción delantera. Motores OM651/OM626 diésel y M270 gasolina turbo, con caja de doble embrague 7G-DCT en muchas versiones. Precio de ocasión ya muy asequible para la imagen que ofrece.",
    verdict: "Compacto premium accesible de ocasión. El A 200 CDI con historial es la compra más razonable.",
    strengths: ["Diseño deportivo y buena calidad percibida", "Precio de ocasión ya contenido para un compacto premium", "Motores diésel sobrios"],
    watchouts: ["Tirones de la caja 7G-DCT en frío y maniobras", "Maletero algo justo para el segmento", "Suspensión firme en versiones AMG Line"],
    faq: [
      { q: "¿La Clase A W176 es la primera con tracción delantera?", a: "Sí, la generación anterior (W169) mantenía un planteamiento de monovolumen compacto; el W176 pasó a compacto deportivo de tracción delantera." },
      { q: "¿Qué maletero tiene la Clase A W176?", a: "En torno a 341 litros, algo por debajo de la media de compactos generalistas de su tamaño." },
    ],
  }),
  g({
    id: "volkswagen:golf:mk5", modelId: "volkswagen:golf", code: "Mk5", slug: "mk5",
    startYear: 2003, endYear: 2008, bodyType: "Compacto 5 puertas y Variant", lengthMm: 4204, bootLitres: 350,
    oneLiner: "El Golf que redefinió la calidad de construcción del segmento; el 1.9 TDI PD es de los diésel más indestructibles jamás fabricados.",
    intro:
      "La quinta generación del Golf dio un salto de calidad de construcción notable frente a la anterior. Motores 1.6/2.0 FSI gasolina y 1.9/2.0 TDI PD diésel (inyector-bomba). El 1.9 TDI PD tiene fama de gran robustez mecánica; revisar colector de admisión, EGR y volante bimasa con muchos kilómetros.",
    verdict: "Compra de ocasión muy madura y barata. El 1.9 TDI PD con historial de mantenimiento es de lo más recomendable en ese rango de precio.",
    strengths: ["Calidad de construcción que marcó un antes y un después en el segmento", "1.9 TDI PD extremadamente robusto en la mecánica base", "Precio de ocasión ya muy accesible"],
    watchouts: ["Colector de admisión (aletas de torbellino) del 1.9 TDI PD", "Consumo de aceite en el 2.0 FSI atmosférico de primeras series", "Antigüedad general: suspensión, bujes y electrónica de más de 18 años"],
    faq: [
      { q: "¿El Golf V 1.9 TDI PD es fiable?", a: "La mecánica base es de las más robustas jamás fabricadas por el Grupo VW; los puntos a vigilar son el colector de admisión, la EGR y el volante bimasa, no el bloque motor." },
      { q: "¿Qué significa TDI PD?", a: "Pumpe-Düse (bomba-inyector): cada cilindro tiene su propio inyector con bomba integrada, en vez de un sistema common-rail centralizado." },
    ],
  }),
  g({
    id: "volkswagen:passat:b6", modelId: "volkswagen:passat", code: "B6 (3C)", slug: "b6",
    startYear: 2005, endYear: 2010, bodyType: "Berlina y Variant", lengthMm: 4765, bootLitres: 565,
    oneLiner: "Berlina grande de ocasión muy barata: el 2.0 TDI PD combina consumo bajo y un maletero de referencia a precio mínimo.",
    intro:
      "El Passat B6 introdujo la plataforma PQ46 con un salto notable de confort y aislamiento. Motores 1.8/2.0 FSI y TSI gasolina, y 1.9/2.0 TDI PD diésel. Buen equilibrio espacio/precio en el mercado de ocasión más económico.",
    verdict: "Mucha berlina por muy poco dinero. El 2.0 TDI PD con historial documentado es la compra más razonable.",
    strengths: ["Confort y aislamiento notables para su precio de ocasión", "Maletero y espacio de categoría superior", "Variant con maletero enorme"],
    watchouts: ["Colector de admisión y EGR del TDI PD", "Consumo de aceite en el 2.0 FSI atmosférico", "Antigüedad general: componentes de suspensión y electrónica de casi 20 años"],
    faq: [
      { q: "¿Qué maletero tiene el Passat B6 Variant?", a: "En torno a 603 litros, de los mayores de su categoría incluso comparado con familiares actuales." },
      { q: "¿El Passat B6 TSI consume aceite?", a: "Algunas unidades del 1.8/2.0 TSI de primeras series sí, por el diseño de los segmentos; conviene revisar el historial de consumo." },
    ],
  }),
  g({
    id: "seat:leon:1p", modelId: "seat:leon", code: "1P (Mk2)", slug: "1p",
    startYear: 2005, endYear: 2012, bodyType: "Compacto 5 puertas", lengthMm: 4351, bootLitres: 341,
    oneLiner: "Compacto deportivo de ocasión muy barato: comparte plataforma con el Golf V/VI, con el 1.9/2.0 TDI como motor de referencia.",
    intro:
      "La segunda generación del León (1P) comparte plataforma PQ35 con el Golf V/VI y el Audi A3 8P. Motores 1.6/2.0 FSI/TSI gasolina y 1.9/2.0 TDI PD diésel, incluida la deportiva Cupra. Precio de ocasión muy contenido para la dinámica que ofrece.",
    verdict: "Compacto deportivo de ocasión muy asequible. El 2.0 TDI con historial es la compra más razonable.",
    strengths: ["Buen comportamiento dinámico para su precio de ocasión", "Mecánicas compartidas con Golf V/VI, muy conocidas", "Precio ya muy accesible"],
    watchouts: ["Colector de admisión y EGR del TDI PD", "Antigüedad general: suspensión y bujes de más de 15 años", "Consumo de aceite en gasolina FSI de primeras series"],
    faq: [
      { q: "¿El León 1P comparte plataforma con el Golf V?", a: "Sí, ambos usan la plataforma PQ35 del Grupo VW, con motores muy similares." },
      { q: "¿Qué es el León 1P Cupra?", a: "La versión deportiva con el 2.0 TFSI de hasta 240 CV, muy apreciada de ocasión por su relación prestaciones/precio." },
    ],
  }),
  g({
    id: "renault:megane:ii", modelId: "renault:megane", code: "II", slug: "ii",
    startYear: 2002, endYear: 2008, bodyType: "Compacto 5 puertas y Break", lengthMm: 4210, bootLitres: 340,
    oneLiner: "Compacto de diseño muy personal en su época, hoy uno de los usados más baratos del mercado: el 1.5 dCi es el motor de referencia.",
    intro:
      "La segunda generación del Mégane, con un diseño trasero muy característico, es hoy uno de los compactos de ocasión más económicos. Motores 1.4/1.6 16V gasolina y 1.5/1.9 dCi diésel. Mecánica sencilla y muy conocida; el precio de compra es su gran baza.",
    verdict: "Coste de compra mínimo. El 1.5 dCi con historial es la opción más razonable; revisar el estado general por la antigüedad.",
    strengths: ["Precio de compra muy bajo", "1.5 dCi sobrio y muy extendido", "Mecánica sencilla y conocida en cualquier taller"],
    watchouts: ["Antigüedad general: suspensión, bujes y electrónica de casi 20 años", "Óxido en bajos en unidades mal cuidadas", "Equipamiento de seguridad muy por debajo de los estándares actuales"],
    faq: [
      { q: "¿Merece la pena comprar un Mégane II en 2026?", a: "Solo como coche de bajo presupuesto y kilómetros moderados; su equipamiento de seguridad está muy por debajo de un compacto actual." },
      { q: "¿El 1.5 dCi del Mégane II es fiable?", a: "Es un motor muy extendido y fiable con mantenimiento correcto; el turbo y el volante bimasa son los puntos a vigilar con muchos kilómetros." },
    ],
  }),
  g({
    id: "renault:clio:iii", modelId: "renault:clio", code: "III", slug: "iii",
    startYear: 2005, endYear: 2012, bodyType: "Utilitario 5 puertas", lengthMm: 4023, bootLitres: 288,
    oneLiner: "Utilitario de ocasión barato y sencillo: el 1.5 dCi es de los diésel más extendidos de Europa, con mecánica muy conocida.",
    intro:
      "La tercera generación del Clio es un utilitario de ocasión muy económico. Motores 1.2/1.4/1.6 16V gasolina y 1.5 dCi diésel. Mecánica sencilla, sin turbo en los gasolina atmosféricos ni correa bañada en aceite.",
    verdict: "Utilitario de coste mínimo. El 1.5 dCi para consumo bajo; el 1.2 16V para sencillez máxima.",
    strengths: ["Precio de compra y mantenimiento muy bajos", "1.5 dCi muy sobrio y extendido", "Mecánica sencilla sin sobresaltos"],
    watchouts: ["Antigüedad general: suspensión y electrónica de casi 20 años", "Equipamiento de seguridad limitado para los estándares actuales", "Óxido en bajos en unidades mal cuidadas"],
    faq: [
      { q: "¿El Clio III es fiable?", a: "Mecánicamente sencillo y muy probado; el punto a vigilar con la edad es el estado general de suspensión, frenos y electrónica, no el motor." },
      { q: "¿Qué diésel lleva el Clio III?", a: "El 1.5 dCi, uno de los motores más fabricados de Europa, en potencias de 65 a 105 CV según año." },
    ],
  }),
  g({
    id: "renault:scenic:ii", modelId: "renault:scenic", code: "II", slug: "ii",
    startYear: 2003, endYear: 2009, bodyType: "Monovolumen", lengthMm: 4259, bootLitres: 428,
    oneLiner: "Monovolumen de ocasión muy barato con buen espacio interior: el 1.9 dCi es el motor de referencia para quien hace kilómetros.",
    intro:
      "La segunda generación del Scénic mantiene la vocación práctica y modular del original. Motores 1.6 16V gasolina y 1.5/1.9 dCi diésel, con el Grand Scénic de 7 plazas como variante. Precio de ocasión muy contenido para el espacio que ofrece.",
    verdict: "Monovolumen familiar de coste mínimo. El 1.9 dCi con historial es la opción más razonable para kilómetros.",
    strengths: ["Buen espacio interior y maletero para su precio", "Modularidad de asientos típica del Scénic", "Precio de compra muy bajo"],
    watchouts: ["Antigüedad general: suspensión, bujes y electrónica de casi 20 años", "Turbo y volante bimasa del dCi con muchos kilómetros", "Equipamiento de seguridad por debajo de los estándares actuales"],
    faq: [
      { q: "¿El Scénic II Grand tiene 7 plazas?", a: "Sí, la versión Grand Scénic alarga la carrocería para alojar una tercera fila, con espacio ajustado para niños o trayectos cortos." },
      { q: "¿Merece la pena de ocasión en 2026?", a: "Como coche de presupuesto muy ajustado y espacio familiar, sí; su equipamiento de seguridad es muy inferior al de un monovolumen actual." },
    ],
  }),
  g({
    id: "peugeot:207:default", modelId: "peugeot:207", code: "1ª gen", slug: "1",
    startYear: 2006, endYear: 2014, bodyType: "Utilitario 3 y 5 puertas, SW y CC", lengthMm: 4030, bootLitres: 270,
    oneLiner: "El sustituto del 206, con más espacio y mejor comportamiento; el 1.6 HDi es el diésel más extendido, el 1.6 THP ofrece más brío en gasolina.",
    intro:
      "El 207 mejoró notablemente el comportamiento y la insonorización respecto al 206. Motores 1.4/1.6 16V gasolina, 1.6 THP turbo (co-desarrollado con BMW) y 1.4/1.6 HDi diésel. El THP de primeras series tiene historial de estiramiento de cadena de distribución en algunas unidades.",
    verdict: "Utilitario de ocasión muy barato. El 1.6 HDi con historial es la compra más razonable; con THP, revisar la cadena.",
    strengths: ["Buen comportamiento y aislamiento para su época", "1.6 HDi sobrio y muy extendido", "Precio de compra muy bajo"],
    watchouts: ["Cadena de distribución del 1.6 THP en algunas unidades de primeras series", "Antigüedad general: suspensión y electrónica de más de 12 años en las unidades más recientes", "Óxido en bajos en unidades mal cuidadas"],
    faq: [
      { q: "¿El 207 1.6 THP da problemas de cadena?", a: "Algunas unidades de primeras series han reportado estiramiento de cadena; conviene revisar el historial y el ruido en arranque en frío." },
      { q: "¿Qué es el 207 CC?", a: "La versión descapotable con techo rígido retráctil, sobre la base mecánica del 207 convencional." },
    ],
  }),
  g({
    id: "peugeot:308:t7", modelId: "peugeot:308", code: "T7 (1ª gen)", slug: "t7",
    startYear: 2007, endYear: 2013, bodyType: "Compacto 5 puertas y SW", lengthMm: 4276, bootLitres: 348,
    oneLiner: "El primer 308: sustituto del 307, con el 1.6 HDi como motor de referencia y precio de ocasión ya muy contenido.",
    intro:
      "La primera generación del 308 (T7) es un compacto de ocasión asequible. Motores 1.4/1.6 16V y 1.6 THP gasolina, y 1.6/2.0 HDi diésel. El SW (familiar) tiene buen maletero. Mismas cautelas del 1.6 THP que en el 207 de la misma época.",
    verdict: "Compacto de ocasión barato. El 1.6 HDi con historial es la compra más razonable.",
    strengths: ["Precio de compra ya muy bajo", "1.6 HDi sobrio y extendido", "SW con buen maletero para su clase"],
    watchouts: ["Cadena de distribución del 1.6 THP en algunas unidades", "Antigüedad general: suspensión y electrónica de más de 13 años", "EGR y FAP del HDi con uso muy urbano"],
    faq: [
      { q: "¿El 308 T7 es el mismo coche que el actual 308?", a: "No, es la primera generación (2007-2013), muy distinta mecánica y tecnológicamente del 308 actual sobre plataforma EMP2." },
      { q: "¿Qué diésel del 308 T7 es más recomendable?", a: "El 1.6 HDi de 90-112 CV para uso normal; el 2.0 HDi si buscas más empuje en carretera." },
    ],
  }),
  g({
    id: "citroen:c4:i", modelId: "citroen:c4", code: "I", slug: "i",
    startYear: 2004, endYear: 2010, bodyType: "Compacto 3/5 puertas", lengthMm: 4260, bootLitres: 314,
    oneLiner: "El primer C4: diseño arriesgado para su época, hoy un compacto de ocasión muy barato con el 1.6 HDi como motor de referencia.",
    intro:
      "La primera generación del C4 (berlina Coupé de 3 puertas y 5 puertas convencional) comparte base con el Peugeot 307/308 de la época. Motores 1.4/1.6 16V gasolina y 1.6 HDi diésel. Precio de ocasión ya muy contenido.",
    verdict: "Compacto de ocasión de coste mínimo. El 1.6 HDi con historial es la compra más razonable.",
    strengths: ["Diseño diferenciado para su época", "1.6 HDi sobrio y extendido", "Precio de compra muy bajo"],
    watchouts: ["Antigüedad general: suspensión y electrónica de más de 15 años", "EGR y FAP del HDi con uso muy urbano", "Dirección asistida eléctrica con averías ocasionales por la edad"],
    faq: [
      { q: "¿El C4 Coupé y el C4 normal son el mismo coche?", a: "Comparten plataforma y motores; el Coupé es de 3 puertas con techo más bajo y línea más deportiva." },
      { q: "¿Merece la pena en 2026?", a: "Solo como coche de presupuesto muy ajustado; su equipamiento de seguridad está muy por debajo de un compacto actual." },
    ],
  }),
  g({
    id: "citroen:c3:ii", modelId: "citroen:c3", code: "II", slug: "ii",
    startYear: 2009, endYear: 2016, bodyType: "Utilitario 5 puertas", lengthMm: 3941, bootLitres: 300,
    oneLiner: "Utilitario de ocasión barato con buen maletero para su clase: el 1.4 HDi es el diésel de referencia, sencillo y sobrio.",
    intro:
      "La segunda generación del C3 destacó por su luneta trasera panorámica (Airscape opcional con techo descapotable de lona). Motores 1.1/1.4/1.6 16V gasolina y 1.4/1.6 HDi diésel. Precio de ocasión ya contenido.",
    verdict: "Utilitario de ocasión de coste bajo. El 1.4 HDi con historial es la compra más razonable.",
    strengths: ["Buena visibilidad delantera gracias a la luneta panorámica", "1.4/1.6 HDi sobrios y extendidos", "Precio de compra contenido"],
    watchouts: ["Antigüedad general: suspensión y electrónica de más de 10 años en las unidades más recientes", "EGR y FAP del HDi con uso muy urbano", "Equipamiento de seguridad por debajo de un C3 actual"],
    faq: [
      { q: "¿Qué es el C3 Airscape?", a: "Una versión con techo de lona retráctil sobre gran parte del techo, manteniendo la carrocería de 5 puertas convencional." },
      { q: "¿El C3 II es fiable?", a: "Mecánicamente sencillo y sin grandes sorpresas; el punto a vigilar con la edad es el estado general, no el motor." },
    ],
  }),
  g({
    id: "opel:astra:h", modelId: "opel:astra", code: "H", slug: "h",
    startYear: 2004, endYear: 2009, bodyType: "Compacto 3/5 puertas y Caravan", lengthMm: 4278, bootLitres: 380,
    oneLiner: "Uno de los compactos de ocasión más abundantes en España: el 1.7/1.9 CDTi es el diésel de referencia, con precio ya mínimo.",
    intro:
      "La tercera generación del Astra (H) es uno de los compactos de ocasión más numerosos del parque español. Motores 1.4/1.6/1.8 16V gasolina y 1.3/1.7/1.9 CDTi diésel (los CDTi grandes con tecnología de Fiat/GM). El Caravan (familiar) tiene buen maletero.",
    verdict: "Compacto de ocasión de coste mínimo. El 1.7 CDTi con historial es la compra más razonable.",
    strengths: ["Precio de compra muy bajo y oferta abundante", "1.7/1.9 CDTi sobrios", "Caravan con buen maletero para su clase"],
    watchouts: ["Antigüedad general: suspensión y electrónica de casi 20 años", "EGR y turbo del CDTi con muchos kilómetros", "Correa de distribución con intervalo a respetar"],
    faq: [
      { q: "¿El Astra H es fiable?", a: "Mecánicamente sencillo y muy conocido en cualquier taller; el punto a vigilar con la edad es el estado general del coche, no el motor." },
      { q: "¿Qué diferencia hay entre el CDTi 1.7 y el 1.9?", a: "El 1.9 CDTi ofrece más par y prestaciones, con un consumo algo superior; el 1.7 CDTi es más sobrio para uso normal." },
    ],
  }),
  g({
    id: "opel:astra:j", modelId: "opel:astra", code: "J", slug: "j",
    startYear: 2009, endYear: 2015, bodyType: "Compacto 5 puertas y Sports Tourer", lengthMm: 4419, bootLitres: 350,
    oneLiner: "Compacto de ocasión con buen comportamiento y precio ya muy contenido: el 1.7 CDTi y el 2.0 CDTi son los diésel de referencia.",
    intro:
      "La cuarta generación del Astra (J) mejoró notablemente el diseño y el comportamiento respecto al Astra H. Motores 1.4/1.6/1.8 16V y 1.4/1.6 Turbo gasolina, y 1.3/1.7/2.0 CDTi diésel. El Sports Tourer familiar tiene buen maletero.",
    verdict: "Compacto de ocasión racional y ya muy asequible. El 1.7 CDTi con historial es la compra más razonable.",
    strengths: ["Buen comportamiento y confort para su precio de ocasión", "1.7/2.0 CDTi sobrios", "Sports Tourer con buen maletero"],
    watchouts: ["EGR y DPF del CDTi en uso urbano", "Correa de distribución con intervalo a respetar", "Multimedia IntelliLink básica en las versiones que la montan"],
    faq: [
      { q: "¿El Astra J es mejor que el Astra H?", a: "Sí, mejora diseño, comportamiento y consumo; a cambio, de ocasión suele costar algo más que el H por ser más reciente." },
      { q: "¿Qué maletero tiene el Astra J Sports Tourer?", a: "En torno a 500 litros, competitivo frente a familiares compactos generalistas de su época." },
    ],
  }),
  g({
    id: "ford:focus:mk2", modelId: "ford:focus", code: "Mk2", slug: "mk2",
    startYear: 2004, endYear: 2011, bodyType: "Compacto 3/5 puertas y Familiar", lengthMm: 4342, bootLitres: 385,
    oneLiner: "Uno de los compactos de ocasión más recomendables de su precio: el chasis Ford sigue siendo de lo mejor, con el 1.6 TDCi como diésel de referencia.",
    intro:
      "La segunda generación del Focus mantuvo el comportamiento dinámico de referencia del segmento a un precio de ocasión ya muy bajo. Motores 1.4/1.6/1.8/2.0 16V gasolina y 1.6/1.8/2.0 TDCi diésel (el 1.6 TDCi compartido con PSA). El restyling de 2008 mejoró interior y motores.",
    verdict: "De los compactos de ocasión más recomendables por dinámica y precio. El 1.6 TDCi con historial es la compra más razonable.",
    strengths: ["Comportamiento y tacto de conducción de referencia para su precio", "1.6 TDCi sobrio y extendido", "Oferta abundante y precios muy bajos"],
    watchouts: ["EGR y turbo del TDCi con muchos kilómetros", "Antigüedad general: suspensión y electrónica de hasta 20 años", "Correa de distribución con intervalo a respetar"],
    faq: [
      { q: "¿El Focus Mk2 sigue siendo divertido de conducir?", a: "Sí, es de los compactos de su época con mejor chasis y dirección, una referencia que Ford mantuvo en generaciones posteriores." },
      { q: "¿Qué diferencia hay entre el Focus Mk2 pre y post restyling?", a: "El restyling de 2008 trajo un frontal renovado, mejor interior y motores diésel más modernos y eficientes." },
    ],
  }),
  g({
    id: "ford:fiesta:mk7", modelId: "ford:fiesta", code: "Mk7", slug: "mk7",
    startYear: 2008, endYear: 2017, bodyType: "Utilitario 3 y 5 puertas", lengthMm: 3950, bootLitres: 290,
    oneLiner: "Utilitario de ocasión muy recomendable por dinámica y precio: el 1.4/1.6 TDCi es sobrio, el 1.25/1.4 Duratec gasolina, sencillo y fiable.",
    intro:
      "La sexta generación del Fiesta (Mk7) mantuvo el buen chasis Ford a un precio de ocasión muy asequible. Motores 1.25/1.4/1.6 Duratec gasolina y 1.4/1.6 TDCi diésel (compartido con PSA), con el 1.0 EcoBoost turbo en el restyling de 2013. Buen comportamiento para el segmento.",
    verdict: "Utilitario de ocasión muy recomendable. El 1.4 TDCi para consumo bajo; el 1.25 Duratec para sencillez máxima.",
    strengths: ["Comportamiento y tacto de conducción de referencia en el segmento", "1.4/1.6 TDCi sobrios", "Oferta abundante y precios ya bajos"],
    watchouts: ["EGR y turbo del TDCi con muchos kilómetros", "Correa de distribución con intervalo a respetar", "1.0 EcoBoost de primeras series: revisar historial de refrigeración"],
    faq: [
      { q: "¿Qué Fiesta Mk7 comprar de ocasión?", a: "El restyling de 2013 con el 1.0 EcoBoost o el 1.5 TDCi es la opción más moderna; las unidades anteriores con 1.25 Duratec o 1.4 TDCi son más baratas y igual de sencillas." },
      { q: "¿El Fiesta Mk7 es divertido de conducir?", a: "Sí, mantiene el buen chasis que caracteriza a la saga Fiesta, de lo mejor del segmento en su época." },
    ],
  }),
  g({
    id: "toyota:auris:i", modelId: "toyota:auris", code: "E150 (1ª gen)", slug: "e150",
    startYear: 2007, endYear: 2012, bodyType: "Compacto 5 puertas", lengthMm: 4220, bootLitres: 354,
    oneLiner: "El sustituto del Corolla en Europa: compacto de ocasión muy fiable, con el 1.6 Valvematic gasolina y el 2.0 D-4D diésel como motores de referencia.",
    intro:
      "El Auris sustituyó al Corolla en el mercado europeo. Motores 1.33/1.4/1.6/1.8 gasolina atmosférico y 1.4/2.0 D-4D diésel, con la primera versión híbrida (HSD) llegando en 2010. Fiabilidad de referencia típica de Toyota de esa época.",
    verdict: "Compacto de ocasión muy fiable y sin sorpresas. El 1.6 Valvematic o el 2.0 D-4D son las compras más razonables.",
    strengths: ["Fiabilidad mecánica de referencia", "Motores sin turbo ni correa bañada en aceite", "Mantenimiento barato y espaciado"],
    watchouts: ["Diseño e interior algo anodinos para su época", "Antigüedad general: suspensión y electrónica de casi 20 años", "Prestaciones ajustadas en las versiones de acceso"],
    faq: [
      { q: "¿El Auris es lo mismo que el Corolla?", a: "El Auris fue el nombre europeo del compacto Toyota entre 2007 y 2018, cuando la marca recuperó el nombre Corolla a nivel global." },
      { q: "¿Hay Auris híbrido de primera generación?", a: "Sí, desde 2010 se ofreció una versión HSD 1.8 híbrida, precursora del actual sistema de Corolla." },
    ],
  }),
  g({
    id: "toyota:avensis:t27", modelId: "toyota:avensis", code: "T27", slug: "t27",
    startYear: 2009, endYear: 2018, bodyType: "Berlina y Wagon", lengthMm: 4695, bootLitres: 509,
    oneLiner: "Berlina/familiar grande de fiabilidad de referencia: el 2.0 D-4D es sobrio y muy probado, con un Wagon de maletero enorme.",
    intro:
      "La tercera generación del Avensis apostó por la solidez y la fiabilidad más que por el diseño llamativo. Motores 1.6/1.8/2.0 gasolina atmosférico y 1.6/2.0/2.2 D-4D diésel. El Wagon (familiar) tiene uno de los maleteros más grandes de su categoría.",
    verdict: "Berlina/familiar grande de mucha confianza. El 2.0 D-4D con mantenimiento correcto es la compra más razonable.",
    strengths: ["Fiabilidad mecánica de referencia", "Wagon con maletero de los mayores de su categoría", "Mantenimiento barato y espaciado"],
    watchouts: ["Diseño e interior conservadores", "Antigüedad general en las unidades más viejas", "Prestaciones ajustadas en las versiones de acceso"],
    faq: [
      { q: "¿Qué maletero tiene el Avensis Wagon?", a: "En torno a 543 litros, uno de los mayores entre los familiares grandes de su época." },
      { q: "¿El Avensis T27 es fiable?", a: "Muy: es de los modelos con mejor reputación de durabilidad de su segmento, con mantenimiento correcto y sin grandes sorpresas mecánicas." },
    ],
  }),
  g({
    id: "honda:cr-v:mk4", modelId: "honda:cr-v", code: "Mk4 (RM)", slug: "mk4",
    startYear: 2012, endYear: 2018, bodyType: "SUV", lengthMm: 4570, bootLitres: 589,
    oneLiner: "SUV familiar de fiabilidad de referencia: el 2.2 i-DTEC ofrece buen par y consumo, con la solidez mecánica habitual de Honda.",
    intro:
      "La cuarta generación del CR-V (RM) mantuvo el planteamiento sensato y fiable de la saga. Motores 2.0 i-VTEC gasolina y 2.2 i-DTEC diésel, con tracción total Real Time 4WD opcional. Buen maletero y habitabilidad para la época.",
    verdict: "SUV familiar de mucha confianza. El 2.2 i-DTEC con mantenimiento correcto es la compra más razonable.",
    strengths: ["Fiabilidad mecánica de referencia", "2.2 i-DTEC con buen par y consumo contenido", "Buen maletero y habitabilidad"],
    watchouts: ["EGR y filtro de partículas del i-DTEC con uso muy urbano", "Antigüedad general en las unidades más viejas de la gama", "Consumo del 2.0 i-VTEC gasolina algo alto"],
    faq: [
      { q: "¿El CR-V Mk4 tiene tracción total?", a: "Sí, opcionalmente con el sistema Real Time 4WD, que conecta el eje trasero automáticamente cuando detecta pérdida de tracción." },
      { q: "¿Es fiable el 2.2 i-DTEC?", a: "Sí, es un diésel propio de Honda muy bien considerado; el filtro de partículas y la EGR piden uso de carretera para no acumular problemas." },
    ],
  }),
  g({
    id: "kia:ceed:jd", modelId: "kia:ceed", code: "JD (2ª gen)", slug: "jd",
    startYear: 2012, endYear: 2018, bodyType: "Compacto 5 puertas, SW y Pro_cee'd", lengthMm: 4310, bootLitres: 380,
    oneLiner: "Compacto de ocasión con 7 años de garantía Kia: el 1.6 CRDi es el diésel de referencia, con precio ya muy contenido.",
    intro:
      "La segunda generación del Ceed (JD) ofreció ya un diseño y una calidad percibida notables para su precio, con el respaldo de la garantía de 7 años de Kia. Motores 1.4/1.6/1.6 T-GDi gasolina y 1.4/1.6 CRDi diésel. El SW (familiar) y el Pro_cee'd (3 puertas deportivo) amplían la gama de carrocerías.",
    verdict: "Compacto de ocasión racional con la garantía más larga del segmento. El 1.6 CRDi con historial es la compra más razonable.",
    strengths: ["Garantía de fábrica de 7 años (si aún está vigente)", "Buena calidad percibida para su precio de ocasión", "1.6 CRDi sobrio"],
    watchouts: ["Carbonilla en admisión del T-GDi en uso solo urbano", "EGR y DPF del CRDi en uso muy urbano", "Multimedia básica en acabados de acceso"],
    faq: [
      { q: "¿El Ceed JD todavía tiene garantía vigente?", a: "Depende del año de matriculación: la garantía de 7 años solo sigue vigente en las unidades más recientes de esta generación." },
      { q: "¿Qué es el Pro_cee'd JD?", a: "La versión de 3 puertas y línea más deportiva del Ceed de esta generación, con la misma gama mecánica." },
    ],
  }),
  g({
    id: "kia:sorento:um", modelId: "kia:sorento", code: "UM (3ª gen)", slug: "um",
    startYear: 2015, endYear: 2020, bodyType: "SUV 7 plazas", lengthMm: 4780, bootLitres: 605,
    oneLiner: "SUV familiar grande con 7 plazas y garantía de 7 años: el 2.2 CRDi ofrece buen par para viajar cargado y remolcar.",
    intro:
      "La tercera generación del Sorento (UM) es un SUV grande de 7 plazas con buen equipamiento y el respaldo de la garantía de 7 años de Kia. Motor 2.2 CRDi diésel (motor principal en Europa), con tracción total AWD opcional. Tercera fila más usable que en SUV más pequeños.",
    verdict: "SUV familiar de 7 plazas muy completo. El 2.2 CRDi con historial documentado es la compra más razonable.",
    strengths: ["Espacio y maletero de referencia entre SUV de 7 plazas", "Garantía de fábrica de 7 años (si aún vigente)", "2.2 CRDi con buen par para carga y remolque"],
    watchouts: ["EGR y sistema de postratamiento del CRDi con mantenimiento exigente", "Consumo alto con el vehículo cargado", "Tercera fila justa para adultos en viaje largo"],
    faq: [
      { q: "¿El Sorento UM tiene tracción total?", a: "Sí, opcionalmente con el sistema AWD, especialmente recomendable si vas a remolcar o circular con nieve." },
      { q: "¿Qué maletero tiene el Sorento UM con 5 plazas?", a: "En torno a 605 litros, de los mayores de su categoría con la tercera fila plegada." },
    ],
  }),
  g({
    id: "skoda:octavia:1z", modelId: "skoda:octavia", code: "1Z (2ª gen)", slug: "1z",
    startYear: 2004, endYear: 2013, bodyType: "Berlina liftback y Combi", lengthMm: 4569, bootLitres: 560,
    oneLiner: "Uno de los usados con mejor relación espacio/precio del mercado: el 1.9/2.0 TDI PD es extremadamente robusto, con un Combi de maletero enorme.",
    intro:
      "La segunda generación del Octavia (1Z) comparte plataforma con el Golf V. Motores 1.4/1.6/2.0 FSI gasolina y 1.9/2.0 TDI PD diésel. El Combi (familiar) tiene uno de los maleteros más grandes de cualquier compacto, clásico o actual.",
    verdict: "De los usados con mejor relación espacio/precio del mercado. El 1.9 TDI PD con historial es la compra más recomendable.",
    strengths: ["Maletero y habitabilidad de referencia, incluso comparado con coches actuales", "1.9/2.0 TDI PD extremadamente robustos en la mecánica base", "Precio de ocasión ya muy accesible"],
    watchouts: ["Colector de admisión (aletas de torbellino) del TDI PD", "Consumo de aceite en el 2.0 FSI atmosférico de primeras series", "Antigüedad general: suspensión y electrónica de hasta 20 años"],
    faq: [
      { q: "¿Qué maletero tiene el Octavia Combi 1Z?", a: "En torno a 580 litros, una cifra que iguala o supera a muchos familiares actuales de segmento superior." },
      { q: "¿El Octavia 1Z comparte motor con el Golf V?", a: "Sí, plataforma PQ35 y gama de motores prácticamente idénticas." },
    ],
  }),
  g({
    id: "audi:a6:c6", modelId: "audi:a6", code: "C6", slug: "c6",
    startYear: 2004, endYear: 2011, bodyType: "Berlina y Avant", lengthMm: 4915, bootLitres: 546,
    oneLiner: "Berlina grande premium de ocasión ya muy asequible: el 2.7/3.0 TDI ofrece refinamiento y par sobrados para viajar.",
    intro:
      "La tercera generación del A6 (C6) es una berlina grande premium con precio de ocasión ya muy contenido. Motores 2.0 TFSI y V6/V8 gasolina, y 2.0/2.7/3.0 TDI diésel, con tracción quattro en las versiones de 6 cilindros. Confort y calidad de construcción de referencia para su precio.",
    verdict: "Mucha berlina premium por poco dinero. El 2.7/3.0 TDI con mantenimiento documentado es la compra más razonable.",
    strengths: ["Confort y calidad de construcción por encima de su precio de ocasión", "Diésel V6 refinado y con mucho par", "Avant con maletero de referencia"],
    watchouts: ["Coste de mantenimiento superior a un generalista pese al precio de compra bajo", "EGR y sistema de inyección del TDI con muchos kilómetros", "Antigüedad general: suspensión neumática y electrónica de hasta 20 años"],
    faq: [
      { q: "¿El A6 C6 es una buena compra de ocasión barata?", a: "Mecánicamente sí, sobre todo los diésel V6; conviene presupuestar un mantenimiento superior al de un coche generalista de precio similar." },
      { q: "¿Qué diferencia hay entre el 2.7 TDI y el 3.0 TDI?", a: "El 3.0 TDI ofrece más potencia y suavidad; el 2.7 TDI es algo más sobrio en consumo para un uso similar." },
    ],
  }),
  g({
    id: "audi:a4:b7", modelId: "audi:a4", code: "B6/B7", slug: "b6-b7",
    startYear: 2000, endYear: 2007, bodyType: "Berlina y Avant", lengthMm: 4586, bootLitres: 460,
    oneLiner: "Berlina premium de ocasión ya muy barata: el 2.0 TDI PD es sobrio y robusto, con precio de compra mínimo para la imagen que ofrece.",
    intro:
      "Las generaciones B6 y B7 del A4 comparten plataforma y planteamiento mecánico, con el restyling B7 (2004) aportando mejoras de diseño y equipamiento. Motores 1.8T/2.0 FSI gasolina y 1.9/2.0 TDI PD diésel, con quattro opcional. Precio de ocasión ya muy accesible.",
    verdict: "Berlina premium de coste mínimo. El 2.0 TDI PD con historial es la compra más razonable.",
    strengths: ["Precio de compra muy bajo para una berlina premium", "2.0 TDI PD sobrio y robusto en la mecánica base", "Buena calidad de construcción para su antigüedad"],
    watchouts: ["Colector de admisión y EGR del TDI PD con kilómetros", "Antigüedad general: suspensión, bujes y electrónica de más de 18 años", "Consumo de aceite en el 1.8T de algunas unidades"],
    faq: [
      { q: "¿Qué diferencia hay entre el A4 B6 y el B7?", a: "El B7 (2004) es un restyling del B6 con cambios de diseño, algún motor actualizado y mejoras de equipamiento." },
      { q: "¿Merece la pena un A4 B6/B7 en 2026?", a: "Como berlina premium de presupuesto muy ajustado, sí; conviene presupuestar un mantenimiento algo superior al de un generalista de la misma edad." },
    ],
  }),
  g({
    id: "hyundai:i30:gd", modelId: "hyundai:i30", code: "GD (2ª gen)", slug: "gd",
    startYear: 2012, endYear: 2017, bodyType: "Compacto 5 puertas y Tourer", lengthMm: 4300, bootLitres: 378,
    oneLiner: "Compacto de ocasión con 5 años de garantía Hyundai: el 1.6 CRDi es el diésel de referencia, con precio ya muy contenido.",
    intro:
      "La segunda generación del i30 (GD) ofreció ya un diseño maduro y buena calidad percibida, con el respaldo de la garantía de 5 años de Hyundai. Motores 1.4/1.6/1.6 T-GDi gasolina y 1.4/1.6 CRDi diésel. El Tourer (familiar) amplía la practicidad.",
    verdict: "Compacto de ocasión racional con buen respaldo de garantía. El 1.6 CRDi con historial es la compra más razonable.",
    strengths: ["Garantía de fábrica de 5 años (si aún vigente)", "Buena calidad percibida para su precio de ocasión", "1.6 CRDi sobrio"],
    watchouts: ["EGR y DPF del CRDi en uso muy urbano", "Multimedia básica en acabados de acceso", "Carbonilla en admisión del T-GDi en uso solo urbano"],
    faq: [
      { q: "¿El i30 GD todavía tiene garantía vigente?", a: "Depende del año de matriculación: la garantía de 5 años solo sigue vigente en las unidades más recientes de esta generación." },
      { q: "¿Qué maletero tiene el i30 GD Tourer?", a: "En torno a 528 litros, competitivo frente a familiares compactos de su época." },
    ],
  }),
  g({
    id: "mazda:3:bl", modelId: "mazda:3", code: "BL (2ª gen)", slug: "bl",
    startYear: 2009, endYear: 2013, bodyType: "Compacto 5 puertas y Sedán", lengthMm: 4460, bootLitres: 340,
    oneLiner: "Compacto de ocasión con buen tacto de conducción, típico de Mazda: el 1.6 MZ-CD diésel es sobrio, el 2.0 MZR gasolina, sencillo y fiable.",
    intro:
      "La segunda generación del Mazda3 (BL) mantuvo el ADN de conducción divertida de la marca. Motores 1.6/2.0 MZR gasolina atmosférico y 1.6 MZ-CD diésel (motor de origen PSA/Ford). Precio de ocasión ya contenido para lo que ofrece en dinámica.",
    verdict: "Compacto de ocasión con buen comportamiento. El 1.6 MZ-CD para consumo bajo; el 2.0 MZR para sencillez máxima sin turbo.",
    strengths: ["Comportamiento y tacto de conducción por encima de la media de su época", "2.0 MZR atmosférico sencillo y fiable", "Precio de ocasión ya contenido"],
    watchouts: ["EGR y FAP del 1.6 MZ-CD con uso muy urbano", "Antigüedad general: suspensión y electrónica de más de 13 años", "Multimedia básica o inexistente en acabados de acceso"],
    faq: [
      { q: "¿El Mazda3 BL comparte motor diésel con Peugeot/Citroën?", a: "Sí, el 1.6 MZ-CD es una variante del motor DV6 de PSA (el mismo bloque que el 1.6 HDi), con calibración propia de Mazda." },
      { q: "¿Vale la pena el 2.0 MZR atmosférico?", a: "Es una mecánica muy sencilla y fiable sin turbo; a cambio el consumo no baja tanto como en un diésel de la época." },
    ],
  }),
  g({
    id: "seat:ibiza:6l", modelId: "seat:ibiza", code: "6L (3ª gen)", slug: "6l",
    startYear: 2002, endYear: 2008, bodyType: "Utilitario 3 y 5 puertas", lengthMm: 3934, bootLitres: 292,
    oneLiner: "Utilitario de ocasión de coste mínimo: comparte plataforma con el Polo/Fabia de la época, con el 1.9 TDI PD como motor de referencia.",
    intro:
      "La tercera generación de la Ibiza (6L) comparte plataforma PQ24 con el Polo y el Škoda Fabia de esos años. Motores 1.2/1.4/1.6 gasolina atmosférico y 1.4/1.9 TDI PD diésel, incluida la deportiva Cupra/FR. Precio de compra ya muy bajo.",
    verdict: "Utilitario de ocasión de coste mínimo. El 1.9 TDI con historial es la compra más razonable para quien hace kilómetros.",
    strengths: ["Precio de compra muy bajo", "1.9 TDI PD robusto en la mecánica base", "Mecánica sencilla y muy conocida en cualquier taller"],
    watchouts: ["Colector de admisión y EGR del TDI PD con kilómetros", "Antigüedad general: suspensión y electrónica de casi 20 años", "Equipamiento de seguridad muy por debajo de los estándares actuales"],
    faq: [
      { q: "¿La Ibiza 6L comparte plataforma con el Polo de esa época?", a: "Sí, plataforma PQ24 compartida con el Volkswagen Polo y el Škoda Fabia de la misma generación." },
      { q: "¿Merece la pena en 2026?", a: "Solo como coche de presupuesto muy ajustado; su equipamiento de seguridad está muy por debajo de una Ibiza actual." },
    ],
  }),
];

/** Todas las generaciones: base + cuatro ampliaciones. */
export const generations: Generation[] = [
  ...baseGenerations,
  ...extraGenerations,
  ...extraGenerations2,
  ...extraGenerations3,
  ...extraGenerations4,
];
