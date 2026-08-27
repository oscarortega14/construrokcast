# CONSTRU ROKCAST S.A.S. — Presentación comercial

Port a React (Vite) de la presentación comercial, que originalmente era un único
archivo HTML autocontenido con todas las imágenes embebidas en base64.

La versión portada es la **v12** (que a su vez incorpora todo lo de la v11). En un
diff automatizado a 1440px contra el HTML original, todas las secciones quedan
por debajo del 0,01 % de píxeles distintos, con dos excepciones conocidas y
deliberadas:

- El **hero** (0,59 %): su fotografía era un PNG de 3,7 MB y se reencodó a WebP.
- El **pie de página** (1,5 %): el texto se cambió a propósito, ya no aplica
  "archivo autocontenido · funcionamiento offline".
- **Capacidades** mide 31px más de alto por el enlace "Ver detalle" que abre el
  modal de cada frente (mejora propia del port, ver más abajo).

El modal de proyecto es pixel-idéntico al original.

## Requisitos

Node 22 (fijado en `.mise.toml`; si usas [mise](https://mise.jdx.dev) se activa solo).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ en http://localhost:4173
```

## Despliegue en Vercel

El proyecto es un sitio estático: entra completo en la capa gratuita.

**Opción A — desde el dashboard (recomendada)**

1. Sube el repositorio a GitHub.
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Vercel detecta Vite automáticamente. No hay que tocar nada:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

**Opción B — desde la terminal**

```bash
npx vercel        # despliegue de preview
npx vercel --prod # despliegue a producción
```

No hay variables de entorno ni backend: nada que configurar.

## Estructura

```
index.html            Punto de entrada de Vite
public/img/           Los 82 assets extraídos del HTML original (80 webp, el mapa SVG)
src/
  main.jsx            Monta React. Importa base.css ANTES que App (ver nota abajo)
  App.jsx             Composición de las secciones + ProjectModalProvider
  data/
    content.js        Textos del sitio (capacidades, timeline, BIM, eléctrica…)
    projects.js       Las 13 fichas de proyecto (cuadrícula, portafolio BIM y modal)
    coverage.js       Puntos de cobertura + proyección geográfica del mapa
  hooks/
    useReveal.js      Animación de entrada al hacer scroll
    useActiveSection.js  Resaltado del enlace activo en el menú
  components/         Un .jsx + un .css por sección
  styles/base.css     Variables, tipografía base y utilidades compartidas
                      (.tag, .more-btn, .proj-type… las usan varias secciones)
legacy/               Los HTML originales v1, v11 y v12, como referencia (51 MB)
```

> `legacy/` pesa 51 MB por los tres HTML autocontenidos. Si no quieres ese peso en
> el historial de git, añádelo a `.gitignore` antes del primer `git add`.

### Nota sobre el orden de importación del CSS

En `src/main.jsx`, `base.css` se importa **antes** que `App`. Vite emite el CSS
en orden de importación, y varias secciones sobreescriben reglas base (por
ejemplo `.coverage-lead` sobre `.lead`). Si se invierte el orden, `base.css`
queda al final del bundle y gana por orden de cascada, rompiendo los colores de
los párrafos de introducción de varias secciones.

## Capacidades: tarjetas con detalle

Las 5 tarjetas de la sección Capacidades son botones que abren un modal con el
detalle de cada frente: introducción, alcance y entregables (más una nota
cuando el alcance requiere profesional con matrícula competente).

El contenido vive en `src/data/content.js`, en cada entrada de `CAPABILITIES`:

```js
{
  num: '01',
  title: 'Construcción y adecuaciones',
  text: '…',          // resumen visible en la tarjeta
  intro: '…',         // párrafo de apertura del modal
  scope: ['…'],       // lista "Alcance"
  deliverables: ['…'],// lista "Entregables"
  note: '…',          // opcional, aviso al pie del modal
}
```

Para editar los textos no hace falta tocar componentes: sólo ese archivo.

El modal usa el elemento `<dialog>` nativo, que aporta el atrapado de foco, el
cierre con `Escape` y el backdrop sin ninguna dependencia. Dos detalles no
obvios, ambos comentados en el código:

- `.capmodal-inner` tiene `overflow-y: auto`, así que es un contenedor
  desplazable y `showModal()` le daría el foco, con el anillo azul del
  navegador alrededor de todo el modal. Por eso se enfoca explícitamente el
  botón de cerrar al abrir.
- No sirve la prop `autoFocus` de React: no emite el atributo HTML, llama a
  `.focus()` durante el montaje, y `showModal()` vuelve a mover el foco después.

## Fichas de proyecto y modal de detalle (v11/v12)

Las 13 fichas viven en `src/data/projects.js`. Cada una alimenta a la vez la
tarjeta y el modal, y se reparten en dos grupos:

- `GRID_PROJECTS` (9) → la sección **Proyectos**. Incluye el caso destacado BIM
  (CESMAG) y la ficha de la especialidad eléctrica, que lleva un tratamiento
  visual propio (`.project-electric`).
- `BIM_PORTFOLIO_PROJECTS` (4) → el **portafolio BIM**, dentro de la sección BIM.
  Se marcan con `showInExperience: false`, igual que en el original.

Campos de cada ficha:

```js
{
  id: 'cancha',                  // lo usa el botón "More" para abrir el modal
  title, location, type,         // cabecera de la tarjeta y del modal
  tags: ['…'],                   // la tarjeta muestra las 3 primeras
  contractor, period,            // con status y participation forman la tabla
  status, participation,         //   de datos del modal…
  facts: [['Clave', 'Valor']],   //   …salvo que `facts` la sobreescriba
  fullScope, process,            // "Alcance" y "Proceso documentado"
  images: ['/img/…'],            // galería completa del modal
  card: { type, text, tags },    // sólo portafolio BIM: copia propia de la tarjeta
}
```

La tarjeta usa `images[0]` como imagen principal e `images[1..3]` como registros
laterales (`cardSideImages` repite la principal si hay menos de cuatro). Por eso
las galerías de `bim-hookah` y `bim-restaurante` están reordenadas un puesto
respecto al HTML original, que traía esas cuatro tarjetas escritas a mano.

### El modal se abre desde cuatro sitios

Proyectos, el caso destacado BIM, cada tarjeta del portafolio BIM y el botón de la
sección eléctrica. Como en el original hay **un solo modal montado**, pero en vez
de delegación de eventos sobre `data-project-open` se usa un contexto:

```jsx
const openProject = useOpenProject()   // de ProjectModalProvider
<button onClick={() => openProject('cancha')}>More →</button>
```

`ProjectModal` usa el elemento `<dialog>` nativo, igual que `CapabilityModal`, con
los mismos dos detalles no obvios comentados en el código: el `<dialog>` es a la
vez el contenedor con scroll (por eso se enfoca a mano el botón de cerrar) y la
prop `autoFocus` de React no sirve. Frente al original esto añade atrapado de
foco y navegación por teclado sobre las miniaturas.

## Discipline: un componente, dos secciones

`Discipline` pinta BIM (oscura) y eléctrica (clara, imágenes primero). El cuerpo
del texto sale de los datos:

- `data.bullets` → los cuatro puntos numerados (BIM).
- `data.services` + `data.moreProjectId` → la cuadrícula de ocho servicios y el
  botón de ficha (eléctrica, que en la v12 sustituyó a los bullets).

Lo que va **después** de la cuadrícula se pasa como `children`: el caso destacado
y el portafolio en BIM, la evidencia técnica en eléctrica.

## Qué cambió respecto al original

- Las imágenes base64 se extrajeron a `public/img/`. El HTML pasó de 27 MB a un
  bundle de ~67 KB gzip más las imágenes cacheadas por separado. La fotografía
  del hero venía como PNG de 3,7 MB y se reencodó a WebP (327 KB); los dos
  logotipos pasaron de PNG a WebP sin pérdida (450 KB → 140 KB).
- El geovisor de cobertura, que se construía con `document.createElementNS` y
  manipulación manual del DOM, ahora es SVG declarativo en React con estado.
  Se le añadió navegación por teclado (`Tab` + `Enter`) sobre los puntos del mapa.
- Los textos y los datos de cobertura salieron del marcado a `src/data/`.
- Se respeta `prefers-reduced-motion`: las animaciones de entrada se desactivan.
- Los datos de contacto del pie ahora son enlaces `tel:` y `mailto:`.
- Las tarjetas de Capacidades pasaron de ser decorativas a abrir un modal con
  el detalle de cada frente.
- Los botones "More" llevan `aria-label` con el nombre del proyecto: el texto
  visible "More" se repite trece veces y no distingue una ficha de otra.
- Las miniaturas del modal son botones con `aria-current`, navegables con `Tab`.

## Pendiente conocido

El menú de navegación se oculta por completo en pantallas de menos de 820px,
igual que en el original. No hay menú hamburguesa. Si se quiere navegación en
móvil, hay que añadirla: es el cambio más útil que le falta al sitio.
