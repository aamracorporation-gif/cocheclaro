import type { Generation } from "@/lib/types";

const REVIEWED = "2026-09-01";

/**
 * Generaciones. Dataset de DEMOSTRACIÓN: los textos son plausibles y están
 * redactados a partir de los campos estructurados, pero deben revisarse y
 * respaldarse con fuentes antes de publicar en producción (status: published).
 */
export const generations: Generation[] = [
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
