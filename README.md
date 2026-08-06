# Gerardo Avalos — Portfolio

Portafolio personal estático (HTML5 + CSS3 + JavaScript vanilla), listo para
publicarse en GitHub Pages sin backend.

**Demo local:** abre `index.html` en el navegador, o sirve la carpeta con
cualquier servidor estático (`npx serve .`, `python3 -m http.server`, etc.).

## Estructura del proyecto

```
/
├── index.html              # Documento único con todas las secciones
├── styles/
│   ├── base.css             # Tokens de diseño (color, tipografía, espaciado)
│   ├── layout.css            # Loader, navbar, progreso de scroll, footer
│   ├── hero.css               # Sección hero + ventana "IDE" animada
│   ├── about.css               # Sección "Sobre mí" + estadísticas
│   ├── skills.css               # Tarjetas de habilidades
│   ├── projects.css              # Grid de proyectos, filtros, buscador
│   ├── timeline-contact.css       # Línea de tiempo + contacto
│   ├── animations.css              # Cursor, reveals, utilidades
│   └── responsive.css               # Ajustes responsivos globales
├── scripts/
│   ├── projects-data.js     # ⭐ Array de proyectos — edítalo para añadir nuevos
│   └── main.js               # Toda la lógica interactiva
├── assets/
│   ├── images/                # Ilustraciones SVG (retrato, thumbnails, OG cover)
│   ├── icons/
│   └── resume/                # CV en PDF (reemplázalo por el tuyo)
├── favicon/                    # favicon.svg / .ico, apple-touch-icon, manifest
├── robots.txt
├── sitemap.xml
└── README.md
```

## Cómo añadir un nuevo proyecto

Todo el grid de proyectos se genera desde un solo arreglo. Abre
`scripts/projects-data.js` y agrega un objeto a `PROJECTS`:

```js
{
  title: 'Nombre del proyecto',
  description: 'Descripción breve y clara.',
  image: 'assets/images/mi-proyecto.svg', // o .png/.jpg
  tech: ['Python', 'Pygame'],
  category: 'game-dev', // game-dev | software | ai-ml | iot
  status: 'Completado', // Completado | En progreso | Próximamente
  github: 'https://github.com/GerhardAvs/mi-repo',
  demo: 'https://mi-demo.com' // o null si no hay demo
}
```

La tarjeta se dibuja automáticamente, respeta los filtros de categoría y el
buscador — no es necesario tocar HTML ni CSS.

## Personalización rápida

- **Colores / tipografía:** variables CSS en `styles/base.css` (`:root`).
- **Enlace de LinkedIn:** reemplaza el `href="#"` en los elementos con id
  `linkedin-link`, `linkedin-card` y `linkedin-footer` en `index.html`.
- **CV:** sustituye `assets/resume/Gerardo_Avalos_CV.pdf` por tu currículum.
- **Retrato:** reemplaza `assets/images/profile.svg` por una foto real
  (recomendado: `.webp`, 600×600, mismo `alt` descriptivo).
- **Meta / SEO:** actualiza `og:url`, `canonical` y `sitemap.xml` con tu
  dominio final de GitHub Pages.

## Notas de diseño

Esta versión prioriza un aspecto contenido y "hecho a mano": paleta de dos
acentos (`#3B82F6` / `#06B6D4`), fondo gris oscuro (no negro puro), sombras
suaves en lugar de resplandores, esquinas poco redondeadas y una sola
animación por interacción (fade/slide, sin rebotes ni parallax). Cada sección
usa una composición distinta a propósito:

- **About** — dos columnas editoriales (narrativa + ficha de datos), no
  tarjetas de estadísticas genéricas.
- **Skills** — filas tipo "hoja de especificaciones", no una grilla de
  tarjetas repetida.
- **Projects** — un proyecto destacado a ancho completo, seguido de una
  grilla contenida; es el foco visual de la página.
- **Timeline** — lista tipo changelog.
- **Contact** — lista de contacto plana, sin panel con gradiente.

## Características incluidas

- Modo oscuro / claro con preferencia guardada en `localStorage`.
- Ventana de código estática ("IDE window") como elemento distintivo del hero.
- Subtítulo animado con Typed.js (uso puntual, no decorativo).
- Animaciones de scroll breves con AOS + fallback propio con `IntersectionObserver`.
- Filtrado y búsqueda de proyectos en tiempo real.
- Barra de progreso de scroll delgada, botón "volver arriba", navbar con estado activo.
- Menú móvil accesible, foco visible, enlace "saltar al contenido".
- SEO: metaetiquetas Open Graph/Twitter, JSON-LD, `robots.txt`, `sitemap.xml`.

Se eliminaron intencionalmente la pantalla de carga, el cursor personalizado
y el fondo de partículas de la versión anterior: no aportaban información,
sumaban JavaScript innecesario y son un patrón reconocible de "portafolio
generado por IA".

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz de un repositorio (o a la
   rama `gh-pages`).
2. En **Settings → Pages**, selecciona la rama y carpeta raíz.
3. Actualiza las URLs en `index.html`, `robots.txt` y `sitemap.xml` con tu
   dominio real de GitHub Pages.

## Rendimiento y accesibilidad

- Sin frameworks pesados: CSS y JS a mano, sin build step.
- Imágenes SVG ligeras con `loading="lazy"` y dimensiones explícitas.
- Fuentes con `font-display: swap` y `preconnect`.
- Contraste de color, `aria-label`s y foco visible en toda la interfaz.
- `prefers-reduced-motion` respetado en animaciones y partículas.

---

Diseñado y construido para Gerardo Avalos — Villahermosa, Tabasco, México.
