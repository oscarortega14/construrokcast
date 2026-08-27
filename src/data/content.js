export const NAV_LINKS = [
  { href: '#capacidades', label: 'Capacidades' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#bim', label: 'BIM' },
  { href: '#electrica', label: 'Eléctrica' },
  { href: '#contacto', label: 'Vinculación', cta: true },
]

export const FACTS = [
  { value: '2021', label: 'Constitución empresarial' },
  { value: '2010 →', label: 'Trayectoria técnica aportada por el equipo' },
  { value: 'Regional', label: 'Escala objetivo de contratación' },
]

export const CAPABILITIES = [
  {
    num: '01',
    image: '/img/cap-construccion.webp',
    title: 'Construcción y adecuaciones',
    text: 'Obra civil, adecuaciones comerciales, remodelaciones, acabados, ampliaciones e intervenciones de infraestructura.',
    intro:
      'Ejecución directa de obra sobre infraestructura nueva y existente. Cubrimos desde la adecuación de un local en operación hasta la construcción de espacios completos, coordinando las disciplinas que cada intervención requiera.',
    scope: [
      'Obra civil y estructuras en concreto',
      'Adecuaciones y remodelaciones de locales comerciales',
      'Ampliaciones y reformas de edificaciones existentes',
      'Acabados arquitectónicos: enchapes, pintura, carpintería y cielorrasos',
      'Cerramientos, cubiertas y espacios deportivos',
      'Urbanismo, pavimentos y obras exteriores',
    ],
    deliverables: [
      'Programación de obra y control de avance',
      'Registro fotográfico por etapa',
      'Actas de entrega y planos as-built',
    ],
  },
  {
    num: '02',
    image: '/img/cap-mantenimiento.webp',
    title: 'Mantenimiento locativo',
    text: 'Atención de edificaciones existentes mediante intervenciones preventivas, correctivas y de rehabilitación.',
    intro:
      'Atención continua de sedes en operación, pensada para infraestructura comercial y multisede donde la intervención debe afectar lo menos posible la actividad del día a día.',
    scope: [
      'Planes de mantenimiento preventivo programado',
      'Atención correctiva y de urgencias',
      'Impermeabilización y reparación de cubiertas',
      'Pintura y recuperación de acabados',
      'Redes hidrosanitarias y aparatos',
      'Rehabilitación de áreas deterioradas',
    ],
    deliverables: [
      'Cronograma anual de mantenimiento',
      'Reportes de intervención por sede',
      'Registro de novedades y recomendaciones',
    ],
  },
  {
    num: '03',
    image: '/img/cap-electrica.webp',
    title: 'Ingeniería eléctrica',
    text: 'Diseño, diagnóstico, instalaciones, mantenimiento, distribución, puesta a tierra, automatización y energía.',
    intro:
      'Capacidad aportada por ingeniería eléctrica para acompañar el ciclo completo: medir la condición real de una instalación, diseñar la intervención y ejecutarla.',
    scope: [
      'Diagnóstico de instalaciones, fases y cargas',
      'Diseño de instalaciones eléctricas',
      'Acometidas, tableros y redes de distribución',
      'Puesta a tierra y mediciones en campo',
      'Iluminación interior y exterior',
      'Automatización, control y energía solar fotovoltaica',
    ],
    deliverables: [
      'Informe de diagnóstico con mediciones',
      'Planos y memorias de diseño',
      'Registro de pruebas y puesta en servicio',
    ],
    note: 'Los alcances que requieren profesional con matrícula competente se desarrollan con el especialista correspondiente.',
  },
  {
    num: '04',
    image: '/img/cap-estructuras.webp',
    title: 'Estructuras y patologías',
    text: 'Apoyo técnico para lectura de afectaciones, comportamiento de edificaciones y definición de estrategias de intervención.',
    intro:
      'Cuando una edificación presenta afectaciones, el primer problema suele ser de información. Organizamos el levantamiento técnico para que la decisión de intervención sea proporcionada al tipo de daño.',
    scope: [
      'Inspección y registro de patologías visibles',
      'Levantamiento de fisuras, humedades y corrosión',
      'Lectura de afectaciones y comportamiento de la edificación',
      'Soporte de ingeniería estructural especializada',
      'Definición de estrategias de intervención',
      'Rehabilitación y refuerzo',
    ],
    deliverables: [
      'Levantamiento y registro de lesiones',
      'Modelo y documentación del estado existente',
      'Alternativas de intervención con su alcance',
    ],
    note: 'La evaluación estructural especializada se desarrolla con el profesional competente.',
  },
  {
    num: '05',
    image: '/img/cap-bim.webp',
    title: 'BIM y digitalización',
    text: 'Levantamientos, nube de puntos, modelado arquitectónico/estructural/MEP, coordinación, planificación y documentación.',
    intro:
      'Herramientas digitales aplicadas a un fin concreto: entender mejor lo que ya está construido, coordinar antes de intervenir y dejar documentación utilizable al cierre.',
    scope: [
      'Levantamiento y Scan to BIM con captura digital móvil',
      'Procesamiento de nube de puntos',
      'Modelado en Revit: arquitectura, estructura y MEP',
      'Detección de interferencias entre disciplinas',
      'Soporte de planificación 4D y 5D',
      'Documentación y modelos As-Built',
    ],
    deliverables: [
      'Modelo federado del estado existente',
      'Planos y cortes derivados del modelo',
      'Reporte de interferencias y entregables As-Built',
    ],
  },
]

export const FLOW_STEPS = [
  { num: '01', title: 'Levantamos', text: 'Información de campo, condiciones existentes y alcance real.' },
  { num: '02', title: 'Integramos', text: 'Arquitectura, ingeniería y requerimientos de operación.' },
  { num: '03', title: 'Planeamos', text: 'Secuencias, interferencias, recursos y documentación.' },
  { num: '04', title: 'Ejecutamos', text: 'Obra civil, adecuaciones e instalaciones especializadas.' },
  { num: '05', title: 'Entregamos', text: 'Evidencias, planos, modelos y soporte técnico de cierre.' },
]

export const TIMELINE = [
  {
    year: '2010',
    title: 'Interventoría y control de infraestructura',
    text: 'Inicio de una trayectoria profesional documentada en mejoramiento vial, interventoría y seguimiento de obras.',
  },
  {
    year: '2012',
    title: 'Operación territorial y dirección de obra',
    text: 'Experiencia en vivienda, pavimentos y rehabilitación vial, incluyendo intervenciones distribuidas en múltiples municipios.',
  },
  {
    year: '2014–2019',
    title: 'Vivienda, redes, infraestructura y estudios',
    text: 'Dirección de obra, interventoría, consultoría y estudios/diseños para vías, redes de acueducto y alcantarillado, infraestructura educativa y proyectos especiales.',
  },
  {
    year: '2020–2021',
    title: 'Infraestructura vial y dirección técnica',
    text: 'Continuidad de la experiencia profesional en proyectos viales y ejecución de obra.',
  },
  {
    year: '2021',
    title: 'Constitución de CONSTRU ROKCAST S.A.S.',
    text: 'Se consolida la operación empresarial en Pasto, Nariño, integrando construcción y actividades complementarias de ingeniería civil.',
  },
  {
    year: '2026',
    title: 'Construcción + ingeniería + tecnología',
    text: 'La propuesta comercial incorpora BIM, ingeniería eléctrica, cobertura territorial y coordinación multidisciplinaria como soporte a la ejecución.',
  },
]

// Las fichas de proyecto viven en ./projects.js: alimentan la cuadrícula, el
// portafolio BIM y el modal de detalle a la vez.

export const BIM = {
  id: 'bim',
  eyebrow: '07 · DIGITALIZACIÓN Y COORDINACIÓN',
  title:
    'BIM como una fortaleza para entender, coordinar y documentar edificios existentes y nuevos.',
  lead: 'El equipo integra arquitectura, levantamientos de edificaciones existentes, captura digital móvil, nube de puntos, modelado en Revit y documentación técnica. La información de campo se transforma en modelos y entregables que permiten representar, coordinar y comunicar con mayor claridad el estado actual y las propuestas de intervención.',
  bullets: [
    {
      num: '01',
      title: 'Levantamiento y Scan to BIM',
      text: 'Captura digital móvil, levantamiento de campo y reconstrucción confiable de condiciones existentes.',
    },
    {
      num: '02',
      title: 'Modelado arquitectónico, estructural y MEP',
      text: 'Desarrollo del edificio por disciplinas para revisión técnica, coordinación y soporte documental.',
    },
    {
      num: '03',
      title: 'Coordinación y lectura del activo',
      text: 'Interferencias, organización por niveles, isométricos, vistas de detalle y apoyo para planificación.',
    },
    {
      num: '04',
      title: 'Documentación, as-built y actualización',
      text: 'Planos, modelos y entregables que facilitan mantenimiento, intervención o crecimiento del activo.',
    },
  ],
  images: ['/img/bim-1.webp', '/img/bim-2.webp', '/img/bim-3.webp'],
}

// Caso destacado de la sección BIM. Las imágenes se declaran aquí y no se
// derivan de la ficha porque la tarjeta usa un recorte propio de la galería.
export const BIM_HIGHLIGHT = {
  projectId: 'cesmag-bim',
  eyebrow: 'CASO DESTACADO BIM',
  type: 'Caso representativo · capacidad BIM del equipo',
  title: 'Digitalización integral de bloque · Universidad CESMAG',
  text: 'Proceso de levantamiento, modelado y documentación digital de un bloque universitario, mostrando la capacidad del equipo para integrar arquitectura, estructura y MEP dentro de una misma lectura BIM.',
  main: { src: '/img/bim-cesmag-mep.webp', alt: 'Modelo BIM MEP del bloque CESMAG' },
  side: [
    {
      src: '/img/bim-cesmag-isometrico.webp',
      alt: 'Isométrico arquitectónico del bloque CESMAG',
    },
    { src: '/img/bim-3.webp', alt: 'Coordinación de redes hidrosanitarias' },
    { src: '/img/bim-cesmag-rci.webp', alt: 'Sistema de red contra incendios modelado' },
  ],
  kpis: [
    { title: 'Arquitectura', text: 'Plantas, isométricos y vistas espaciales del bloque.' },
    { title: 'Estructura', text: 'Lectura de niveles, cubierta y detalles de anclaje.' },
    { title: 'MEP', text: 'Redes sanitarias y sistema contra incendios modelados.' },
  ],
  tags: ['Scan to BIM', 'Arquitectura', 'Estructura', 'MEP', 'Documentación técnica'],
}

// Portafolio BIM del equipo: las tarjetas salen de BIM_PORTFOLIO_PROJECTS.
export const BIM_PORTFOLIO = {
  eyebrow: 'PORTAFOLIO BIM DEL EQUIPO',
  title:
    'Experiencia aplicada en levantamiento, modelado y transformación de espacios existentes.',
  text: 'Estos casos complementan la capacidad BIM de CONSTRU ROKCAST con procesos de levantamiento, nube de puntos, verificación en Revit, modelado del estado existente, desarrollo de propuestas y producción de documentación gráfica. El foco se mantiene en la capacidad técnica del equipo, sin exponer información personal.',
  proof: [
    { title: 'Captura', text: 'Mediciones en campo y nube de puntos.' },
    { title: 'Reconstrucción', text: 'Modelo BIM del estado existente.' },
    { title: 'Propuesta', text: 'Remodelación, ampliación y adecuación.' },
    { title: 'Entrega', text: 'Plantas, secciones, elevaciones y visualización.' },
  ],
}

export const ELECTRICA = {
  id: 'electrica',
  eyebrow: '08 · INGENIERÍA ELÉCTRICA Y ENERGÉTICA',
  title: 'De la medición al diseño, la instalación y la optimización.',
  lead: 'Capacidad aportada por ingeniería eléctrica para proyectos residenciales, comerciales, institucionales e infraestructura, con enfoque en medición, seguridad, confiabilidad y eficiencia.',
  // v12 reemplaza los cuatro bullets numerados por una cuadrícula de ocho
  // servicios más el botón que abre la ficha completa de la especialidad.
  services: [
    {
      title: 'Diagnóstico de consumo energético',
      text: 'Lectura de comportamiento y oportunidades de optimización.',
    },
    {
      title: 'Diagnóstico eléctrico',
      text: 'Revisión técnica de fases, cargas y condiciones de operación.',
    },
    { title: 'Automatización', text: 'Soluciones de control aplicadas a necesidades específicas.' },
    {
      title: 'Mantenimiento eléctrico',
      text: 'Intervenciones correctivas y preventivas sobre sistemas existentes.',
    },
    { title: 'Electrónica y control', text: 'Integración de componentes y lógica de operación.' },
    {
      title: 'Instalación eléctrica',
      text: 'Redes, tableros, distribución y adecuaciones según alcance.',
    },
    {
      title: 'Energía solar',
      text: 'Soluciones fotovoltaicas para entornos convencionales o de difícil acceso.',
    },
    {
      title: 'Medición y puesta a tierra',
      text: 'Verificación en campo mediante instrumentación profesional.',
    },
  ],
  moreProjectId: 'electrica-capacidad',
  evidence: [
    {
      title: 'Enfoque técnico',
      text: 'Diagnóstico basado en mediciones, uso de herramientas profesionales y búsqueda de la causa del problema antes de intervenir.',
    },
    {
      title: 'Experiencia demostrada',
      text: 'Tableros de distribución, diagnóstico de fases, medición de puesta a tierra y soluciones solares para infraestructura y zonas de difícil acceso.',
    },
  ],
  images: ['/img/elec-1.webp', '/img/elec-2.webp', '/img/elec-3.webp'],
}

export const STRUCTURE_CARDS = [
  {
    title: 'Afectaciones extraordinarias',
    text: 'Apoyo técnico ante eventos que comprometan la condición de una sede.',
  },
  {
    title: 'Patologías visibles',
    text: 'Registro y organización de información de fisuras, humedad, corrosión y lesiones.',
  },
  {
    title: 'Modelado y documentación',
    text: 'Levantamiento, representación y coordinación de la intervención.',
  },
  {
    title: 'Rehabilitación',
    text: 'Integración entre diagnóstico especializado y ejecución de obra.',
  },
]

export const TEAM_PROFILES = [
  { title: 'Construcción y obra civil', text: 'Dirección, ejecución, adecuaciones y mantenimiento.' },
  { title: 'Arquitectura y BIM', text: 'Levantamiento, modelado, coordinación y documentación.' },
  { title: 'Ingeniería eléctrica', text: 'Diseño, diagnóstico, mantenimiento y energía.' },
  { title: 'Ingeniería estructural', text: 'Evaluación y soporte técnico especializado.' },
  { title: 'Supervisión de campo', text: 'Control de actividades, calidad y seguimiento.' },
  { title: 'Seguridad y gestión', text: 'Articulación de requisitos para ejecución en sitio.' },
]

export const CONTACT = {
  phone: '321 596 3345',
  email: 'comercial@construrokcast.com',
  base: 'Pasto, Nariño · Colombia',
}
