// Fichas de proyecto de la presentación v12. Cada entrada alimenta a la vez la
// tarjeta de la cuadrícula (imagen principal + 3 registros) y el modal de detalle.
//
// `showInExperience: false` deja la ficha fuera de la sección Proyectos: son los
// casos del portafolio BIM, que se muestran dentro de la sección BIM.
// `facts` sobreescribe la tabla del modal; si falta se construye a partir de
// contractor / period / status / participation.
export const PROJECTS = [
  {
    id: 'cesmag-bim',
    title: 'Digitalización integral de bloque · Universidad CESMAG',
    location: 'Pasto, Nariño',
    type: 'Caso destacado BIM · capacidad técnica del equipo',
    tags: ['Scan to BIM', 'Arquitectura + Estructura + MEP', 'Documentación técnica', 'Coordinación BIM'],
    contractor: 'Universidad CESMAG · caso técnico/académico',
    period: 'Proceso de digitalización y modelado BIM',
    status: 'Caso de capacidad técnica y documentación',
    participation: 'Levantamiento, modelado, coordinación y visualización',
    fullScope:
      'Digitalización de un bloque universitario mediante levantamiento de información existente, reconstrucción BIM del edificio y desarrollo de piezas de arquitectura, estructura y redes MEP para su análisis, coordinación y documentación.',
    process:
      'El caso consolida un flujo de trabajo Scan to BIM orientado a edificaciones existentes. Se organiza la información base, se modela el edificio por disciplinas, se generan plantas, isométricos, vistas interiores y detalles representativos, y se estructura un paquete visual que facilita la revisión técnica, la coordinación interdisciplinaria y futuras intervenciones o actualizaciones as-built.',
    images: [
      '/img/bim-cesmag-mep.webp',
      '/img/bim-1.webp',
      '/img/bim-cesmag-isometrico.webp',
      '/img/bim-2.webp',
      '/img/bim-cesmag-4.webp',
      '/img/bim-3.webp',
      '/img/bim-cesmag-rci.webp',
      '/img/bim-cesmag-5.webp',
    ],
  },
  {
    id: 'electrica-capacidad',
    title: 'Ingeniería eléctrica y energética',
    location: 'Capacidad del equipo técnico · Pasto, Colombia',
    type: 'Especialidad integrada · ingeniería eléctrica',
    tags: ['Diagnóstico', 'Tableros y distribución', 'Puesta a tierra', 'Automatización', 'Energía solar', 'Electrónica y control'],
    contractor: 'Capacidad aportada por el equipo eléctrico',
    period: 'Experiencia técnica vigente',
    status: 'Portafolio técnico incorporado a la capacidad de CONSTRU ROKCAST',
    participation: 'Diseño, diagnóstico, instalación, mantenimiento y medición',
    fullScope:
      'Portafolio integral que comprende diagnóstico de consumo energético, diagnóstico eléctrico, automatización, mantenimiento eléctrico, electrónica y control, instalación eléctrica, energía solar y medición y puesta a tierra. La especialidad se incorpora como apoyo técnico a proyectos de adecuación, mantenimiento e infraestructura.',
    process:
      'El enfoque parte de mediciones y verificación de las condiciones reales de la instalación para identificar la causa del problema y definir una solución técnica proporcionada. La experiencia documentada incluye montaje de tableros de distribución, diagnóstico de fases para balance de cargas, mediciones de sistemas de puesta a tierra y proyectos solares en Tumaco y para funcionamiento de motobombas de un acueducto local. En la presentación comercial se omiten nombres de clientes específicos y se conserva el alcance técnico.',
    images: [
      '/img/elec-1.webp',
      '/img/elec-4.webp',
      '/img/elec-2.webp',
      '/img/elec-3.webp',
      '/img/elec-5.webp',
    ],
  },
  {
    id: 'polachayan',
    title: 'Institución Educativa Polachayan',
    location: 'Túquerres, Nariño',
    type: 'Experiencia empresarial · obra ejecutada',
    tags: ['Infraestructura educativa', 'Adecuación física', 'Estructura metálica', 'En liquidación'],
    contractor: 'Municipio de Túquerres',
    period: 'Obra ejecutada · liquidación en curso',
    status: 'En proceso de liquidación',
    participation: 'Ejecución mediante Consorcio Constru-RCR',
    fullScope:
      'Mejoramiento de la calidad educativa mediante la adecuación de la infraestructura física de la Institución Educativa Polachayan del municipio de Túquerres, departamento de Nariño.',
    process:
      'El proyecto implicó intervención de infraestructura educativa en una institución en funcionamiento. Durante la ejecución se gestionó la programación de actividades frente a jornadas académicas, eventos institucionales y condiciones climáticas adversas. La obra se encuentra construida y actualmente avanza en su proceso de liquidación.',
    images: [
      '/img/hero.webp',
      '/img/proj-polachayan-2.webp',
      '/img/proj-polachayan-3.webp',
      '/img/proj-polachayan-4.webp',
    ],
  },
  {
    id: 'cancha',
    title: 'Cancha múltiple y cerramiento',
    location: 'Iscuazán · Iles, Nariño',
    type: 'Experiencia empresarial',
    tags: ['Escenario deportivo', 'Obra civil', 'Espacio público'],
    contractor: 'Municipio de Iles',
    period: '06 oct 2022 – 21 dic 2022',
    status: 'Acta final',
    participation: 'Participación registrada: 99%',
    fullScope:
      'Mejoramiento de escenario deportivo a través de la construcción de cancha múltiple y cerramiento en el sector de Iscuazán del municipio de Iles, Nariño.',
    process:
      'El registro fotográfico documenta preparación y conformación del terreno, ejecución de la placa, trabajos de concreto y terminación del escenario con equipamiento deportivo y cerramiento.',
    images: [
      '/img/proj-cancha-1.webp',
      '/img/proj-cancha-2.webp',
      '/img/proj-cancha-3.webp',
      '/img/proj-cancha-4.webp',
      '/img/proj-cancha-5.webp',
      '/img/proj-cancha-6.webp',
    ],
  },
  {
    id: 'restaurante',
    title: 'Restaurante escolar',
    location: 'I.E. José Antonio Galán · Iles, Nariño',
    type: 'Experiencia empresarial',
    tags: ['Infraestructura educativa', 'Edificación', 'Acabados'],
    contractor: 'Municipio de Iles',
    period: '08 nov 2022 – 24 abr 2023',
    status: 'Acta final',
    participation: 'Participación registrada: 99%',
    fullScope:
      'Construcción de restaurante escolar en la Institución José Antonio Galán, sede 2, básica primaria, Iles – Nariño.',
    process:
      'Las evidencias muestran la evolución desde excavaciones y elementos iniciales de obra, mampostería y cubierta, hasta acabados interiores, revestimientos y terminación de los espacios del restaurante escolar.',
    images: [
      '/img/proj-restaurante-escolar-1.webp',
      '/img/proj-restaurante-escolar-2.webp',
      '/img/proj-restaurante-escolar-3.webp',
      '/img/proj-restaurante-escolar-4.webp',
      '/img/proj-restaurante-escolar-5.webp',
      '/img/proj-restaurante-escolar-6.webp',
    ],
  },
  {
    id: 'placa',
    title: 'Mejoramiento en placa huella',
    location: 'Portachuelo · Imués, Nariño',
    type: 'Experiencia empresarial',
    tags: ['Vías rurales', 'Placa huella', 'Concreto'],
    contractor: 'Municipio de Imués',
    period: '04 may 2023 – 04 nov 2023',
    status: 'Acta final',
    participation: 'Participación registrada: 10%',
    fullScope:
      'Mejoramiento en placa huella de la vía que comunica Imués – Guaitarilla, vereda Portachuelo, en el municipio de Imués, departamento de Nariño.',
    process:
      'El registro disponible evidencia actividades de conformación de la vía, preparación de tramos, armado y fundida de elementos de concreto, así como la terminación de sectores intervenidos.',
    images: [
      '/img/proj-placa-huella-1.webp',
      '/img/proj-placa-huella-2.webp',
      '/img/proj-placa-huella-3.webp',
      '/img/proj-placa-huella-4.webp',
      '/img/proj-placa-huella-5.webp',
      '/img/proj-placa-huella-6.webp',
      '/img/proj-placa-huella-7.webp',
    ],
  },
  {
    id: 'muro',
    title: 'Muro de contención',
    location: 'Vereda San Ignacio · Sapuyes, Nariño',
    type: 'Experiencia empresarial',
    tags: ['Red vial terciaria', 'Contención', 'Estructuras'],
    contractor: 'SIIESS',
    period: '28 oct 2024 – 28 dic 2024',
    status: 'Acta final',
    participation: 'Ejecución registrada: 100%',
    fullScope:
      'Mantenimiento de la red vial terciaria mediante construcción de muro de contención en la vereda San Ignacio, municipio de Sapuyes, departamento de Nariño.',
    process:
      'La secuencia fotográfica registra excavación, preparación de cimentación, armado de acero, formaleta y construcción del elemento de contención, además de actividades posteriores asociadas a protección y relleno.',
    images: [
      '/img/proj-muro-1.webp',
      '/img/proj-muro-2.webp',
      '/img/proj-muro-3.webp',
      '/img/proj-muro-4.webp',
      '/img/proj-muro-5.webp',
      '/img/proj-muro-6.webp',
    ],
  },
  {
    id: 'educativa',
    title: 'Adecuación de infraestructura educativa',
    location: 'Bocas de Telembí y Pumbí · Roberto Payán, Nariño',
    type: 'Experiencia empresarial',
    tags: ['Restaurantes escolares', 'Mantenimiento', 'Acabados'],
    contractor: 'Alcaldía de Roberto Payán',
    period: '10 oct 2024 – 31 dic 2024',
    status: 'Acta final',
    participation: 'Ejecución registrada: 100%',
    fullScope:
      'Adecuación y mantenimiento de la infraestructura educativa en las instalaciones de los restaurantes escolares de instituciones educativas en las veredas Bocas de Telembí y Pumbí del municipio de Roberto Payán, Nariño.',
    process:
      'El registro muestra actividades de adecuación de pisos y superficies, acabados interiores, pintura y puesta a punto de espacios destinados al servicio de restaurante escolar.',
    images: [
      '/img/proj-roberto-payan-1.webp',
      '/img/proj-roberto-payan-2.webp',
      '/img/proj-roberto-payan-3.webp',
      '/img/proj-roberto-payan-4.webp',
      '/img/proj-roberto-payan-5.webp',
      '/img/proj-roberto-payan-6.webp',
    ],
  },
  {
    id: 'pavimento',
    title: 'Pavimento articulado',
    location: 'El Espino · Sapuyes, Nariño',
    type: 'Experiencia empresarial',
    tags: ['Vías', 'Urbanismo', 'Pavimento articulado'],
    contractor: 'Alcaldía de Sapuyes',
    period: '01 ago 2025 – 11 nov 2025',
    status: 'Acta final',
    participation: 'Ejecución registrada: 100%',
    fullScope:
      'Mejoramiento de vías a través de la construcción de pavimento articulado en el barrio Las Avenidas, primera etapa del corregimiento de El Espino, municipio de Sapuyes – Nariño.',
    process:
      'La documentación fotográfica permite seguir el proceso desde excavación y conformación de la vía, preparación de capas de soporte y disposición de materiales, hasta instalación de adoquín, confinamiento y terminación de la superficie vial.',
    images: [
      '/img/proj-pavimento-1.webp',
      '/img/proj-pavimento-2.webp',
      '/img/proj-pavimento-3.webp',
      '/img/proj-pavimento-4.webp',
      '/img/proj-pavimento-5.webp',
      '/img/proj-pavimento-6.webp',
      '/img/proj-pavimento-7.webp',
    ],
  },
  {
    id: 'bim-r01',
    showInExperience: false,
    title: 'Residencia R-01 · transformación de segundo nivel',
    location: 'Caso residencial · edificación existente',
    type: 'Caso BIM · levantamiento, modelado y documentación',
    tags: ['Nube de puntos', 'Revit', 'Estado existente', 'Remodelación'],
    contractor: 'Vivienda unifamiliar',
    period: 'Transformación del segundo nivel',
    status: 'Caso de portafolio BIM del equipo',
    participation: 'Levantamiento, modelado BIM y documentación arquitectónica',
    facts: [
      ['Tipología', 'Vivienda unifamiliar'],
      ['Intervención', 'Remodelación y elevación de cubierta'],
      ['Herramientas', 'Nube de puntos + Revit'],
      ['Participación', 'Levantamiento, modelado BIM y documentación arquitectónica'],
    ],
    fullScope:
      'Transformación del segundo nivel de una vivienda existente. La geometría original de la cubierta reducía la altura útil y limitaba el aprovechamiento de los espacios interiores; la propuesta eleva y redefine la cubierta para generar ambientes más amplios, cómodos y funcionales.',
    process:
      'El flujo de trabajo combina mediciones en campo y captura tridimensional mediante nube de puntos para registrar distribución, alturas, niveles y geometría existente. La información se incorpora en Revit como referencia para reconstruir y verificar el modelo BIM, a partir del cual se desarrollan plantas, secciones, elevaciones, representación de la intervención y documentación arquitectónica.',
    // Copia propia de la tarjeta del portafolio BIM: resumen y etiquetas más
    // cortos que los de la ficha completa del modal.
    card: {
      type: 'Caso BIM · portafolio técnico del equipo',
      text:
        'Levantamiento de una vivienda existente y desarrollo BIM de una propuesta para elevar y redefinir la cubierta, mejorando altura útil y aprovechamiento interior.',
      tags: ['Nube de puntos', 'Revit', 'Remodelación', 'Documentación'],
    },
    images: [
      '/img/bim-r01-1.webp',
      '/img/bim-r01-2.webp',
      '/img/bim-r01-3.webp',
      '/img/bim-r01-4.webp',
      '/img/bim-r01-5.webp',
    ],
  },
  {
    id: 'bim-r02',
    showInExperience: false,
    title: 'Residencia R-02 · ampliación',
    location: 'Caso residencial · ampliación de edificación existente',
    type: 'Caso BIM · ampliación y coordinación arquitectónica',
    tags: ['Nube de puntos', 'Revit', 'Ampliación', 'Estado existente'],
    contractor: 'Vivienda unifamiliar',
    period: 'Ampliación de primer y segundo nivel',
    status: 'Caso de portafolio BIM del equipo',
    participation: 'Levantamiento, modelado BIM y documentación arquitectónica',
    facts: [
      ['Tipología', 'Vivienda unifamiliar'],
      ['Intervención', 'Ampliación de primer y segundo nivel'],
      ['Herramientas', 'Nube de puntos + Revit'],
      ['Participación', 'Levantamiento, modelado BIM y documentación arquitectónica'],
    ],
    fullScope:
      'Ampliación y transformación de una vivienda existente en sus dos niveles. En el primer piso se extiende el área construida y sobre el nuevo volumen se desarrolla la ampliación del segundo nivel; adicionalmente se eleva y redefine la cubierta original para mejorar altura interior, distribución e integración con la construcción existente.',
    process:
      'La metodología parte del levantamiento de las condiciones existentes mediante mediciones y nube de puntos. La información sirve de referencia en Revit para reconstruir y verificar el modelo BIM y desarrollar la propuesta de ampliación, incluyendo reorganización interior, ajuste de cubierta y documentación de la transformación.',
    // Copia propia de la tarjeta del portafolio BIM: resumen y etiquetas más
    // cortos que los de la ficha completa del modal.
    card: {
      type: 'Caso BIM · portafolio técnico del equipo',
      text:
        'Modelado del estado existente y de la ampliación del primer y segundo nivel, incluyendo ajuste de cubierta e integración de la intervención con la edificación existente.',
      tags: ['Levantamiento', 'Modelo existente', 'Ampliación', 'Revit'],
    },
    images: [
      '/img/bim-r02-1.webp',
      '/img/bim-r02-2.webp',
      '/img/bim-r02-3.webp',
      '/img/bim-r02-4.webp',
    ],
  },
  {
    id: 'bim-hookah',
    showInExperience: false,
    title: 'Hookah Lounge C-01 · adecuación comercial',
    location: 'Caso de diseño interior comercial',
    type: 'Caso BIM · levantamiento y adecuación interior',
    tags: ['Diseño interior', 'Nube de puntos', 'Revit', 'Documentación'],
    contractor: 'Diseño interior comercial',
    period: 'Adecuación y distribución interior',
    status: 'Caso de portafolio BIM del equipo',
    participation: 'Levantamiento, modelado BIM, propuesta y documentación arquitectónica',
    facts: [
      ['Tipología', 'Diseño interior comercial'],
      ['Intervención', 'Adecuación de local para lounge'],
      ['Herramientas', 'Nube de puntos + Revit'],
      ['Participación', 'Levantamiento, modelado BIM, propuesta y documentación'],
    ],
    fullScope:
      'Adecuación interior de un local comercial organizada alrededor de una barra central, con zonas de estancia y mobiliario perimetral que aprovechan el área disponible y mantienen una circulación clara. La propuesta integra elementos curvos, iluminación decorativa y espacios con distintos niveles de privacidad.',
    process:
      'Se combinan levantamiento, nube de puntos y reconstrucción del estado existente en Revit. Sobre esa base se desarrolla el modelo BIM de la propuesta, la organización espacial, las vistas, elevaciones y documentación arquitectónica necesarias para comunicar la intervención.',
    // Copia propia de la tarjeta del portafolio BIM: resumen y etiquetas más
    // cortos que los de la ficha completa del modal.
    card: {
      type: 'Caso BIM · portafolio técnico del equipo',
      text:
        'Levantamiento, modelado BIM y desarrollo de una propuesta de adecuación interior con barra central, zonas de estancia, iluminación y documentación arquitectónica.',
      tags: ['Diseño comercial', 'Nube de puntos', 'BIM', 'Documentación'],
    },
    images: [
      '/img/bim-hookah-1.webp',
      '/img/bim-hookah-2.webp',
      '/img/bim-hookah-3.webp',
      '/img/bim-hookah-4.webp',
      '/img/bim-hookah-5.webp',
    ],
  },
  {
    id: 'bim-restaurante',
    showInExperience: false,
    title: 'Restaurante C-02 · adecuación y distribución',
    location: 'Caso de diseño interior comercial',
    type: 'Caso BIM · digitalización y propuesta de adecuación',
    tags: ['Adecuación', 'Nube de puntos', 'Revit', 'Diseño comercial'],
    contractor: 'Restaurante · diseño interior comercial',
    period: 'Adecuación y distribución del local',
    status: 'Caso de portafolio BIM del equipo',
    participation: 'Levantamiento, modelado BIM, propuesta y documentación arquitectónica',
    facts: [
      ['Tipología', 'Restaurante · diseño interior comercial'],
      ['Intervención', 'Adecuación y distribución del local'],
      ['Herramientas', 'Nube de puntos + Revit'],
      ['Participación', 'Levantamiento, modelado BIM, propuesta y documentación'],
    ],
    fullScope:
      'Adecuación interior de un local comercial para restaurante. La distribución organiza las áreas de comedor, atención, preparación y apoyo, utilizando la barra de servicio como elemento articulador entre la cocina y el espacio destinado a clientes.',
    process:
      'El levantamiento combina mediciones en campo y captura mediante nube de puntos. La información se incorpora a Revit para reconstruir y verificar el estado existente, desarrollar el modelo BIM de la propuesta y producir la documentación arquitectónica. La solución optimiza la circulación y articula comedor, barra y áreas de apoyo.',
    // Copia propia de la tarjeta del portafolio BIM: resumen y etiquetas más
    // cortos que los de la ficha completa del modal.
    card: {
      type: 'Caso BIM · portafolio técnico del equipo',
      text:
        'Digitalización y modelado de un local comercial para organizar comedor, atención, preparación y apoyo, articulando el espacio mediante la barra de servicio.',
      tags: ['Adecuación', 'Modelado BIM', 'Revit', 'Diseño interior'],
    },
    images: [
      '/img/bim-restaurante-1.webp',
      '/img/bim-restaurante-2.webp',
      '/img/bim-restaurante-3.webp',
      '/img/bim-restaurante-4.webp',
      '/img/bim-restaurante-5.webp',
    ],
  },
]

// La cuadrícula de la sección Proyectos; el portafolio BIM se filtra aparte.
export const GRID_PROJECTS = PROJECTS.filter((p) => p.showInExperience !== false)

export const BIM_PORTFOLIO_PROJECTS = PROJECTS.filter((p) => p.showInExperience === false)

export const findProject = (id) => PROJECTS.find((p) => p.id === id)

// Tabla de datos del modal: `facts` explícito o el conjunto por defecto.
export const projectFacts = (p) =>
  p.facts || [
    ['Contratante', p.contractor],
    ['Periodo', p.period],
    ['Estado documental', p.status],
    ['Forma / participación', p.participation],
  ]

// Las tarjetas muestran la imagen principal más tres registros; si un proyecto
// tiene menos de cuatro fotografías se repite la principal.
export const cardSideImages = (p) => [1, 2, 3].map((i) => p.images[i] || p.images[0])
