# CONSTRU ROKCAST S.A.S. — Presentación comercial

Port a React (Vite) de la presentación comercial que originalmente era un único
archivo HTML autocontenido de 2.8 MB con todas las imágenes embebidas en base64.

El resultado es visualmente idéntico al original: 11 de las 12 secciones son
pixel-idénticas en un diff automatizado a 1440px, y la única diferencia es el
texto del pie de página, que se cambió a propósito (ya no aplica "archivo
autocontenido · funcionamiento offline").

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
public/img/           Los 14 assets extraídos del HTML original (13 webp + el mapa SVG)
src/
  main.jsx            Monta React. Importa base.css ANTES que App (ver nota abajo)
  App.jsx             Composición de las 12 secciones
  data/
    content.js        Todos los textos del sitio (capacidades, timeline, proyectos…)
    coverage.js       Puntos de cobertura + proyección geográfica del mapa
  hooks/
    useReveal.js      Animación de entrada al hacer scroll
    useActiveSection.js  Resaltado del enlace activo en el menú
  components/         Un .jsx + un .css por sección
  styles/base.css     Variables de color, tipografía base y utilidades compartidas
legacy/               El HTML original, como referencia
```

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

## Qué cambió respecto al original

- Las imágenes base64 se extrajeron a `public/img/`. El HTML pasó de 2.8 MB a un
  bundle de ~53 KB gzip más las imágenes cacheadas por separado.
- El geovisor de cobertura, que se construía con `document.createElementNS` y
  manipulación manual del DOM, ahora es SVG declarativo en React con estado.
  Se le añadió navegación por teclado (`Tab` + `Enter`) sobre los puntos del mapa.
- Los textos y los datos de cobertura salieron del marcado a `src/data/`.
- Se respeta `prefers-reduced-motion`: las animaciones de entrada se desactivan.
- Los datos de contacto del pie ahora son enlaces `tel:` y `mailto:`.
- Las tarjetas de Capacidades pasaron de ser decorativas a abrir un modal con
  el detalle de cada frente (ver la sección anterior).

## Pendiente conocido

El menú de navegación se oculta por completo en pantallas de menos de 820px,
igual que en el original. No hay menú hamburguesa. Si se quiere navegación en
móvil, hay que añadirla: es el cambio más útil que le falta al sitio.
