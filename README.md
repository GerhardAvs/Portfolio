# Gerardo Avalos — Portfolio

Sitio estático (HTML5 + CSS3 + JavaScript vanilla), sin frameworks ni
librerías externas de UI. Listo para GitHub Pages, sin backend.

**Demo local:** abre `index.html`, o sirve la carpeta con cualquier
servidor estático (`npx serve .`, `python3 -m http.server`, etc.).

## Filosofía de diseño

Minimalismo de producto, no de landing page: una sola familia tipográfica
(Inter + JetBrains Mono para etiquetas), blanco / negro / grises, un único
acento de color usado solo en enlaces y foco. Líneas finas en vez de
tarjetas, texto plano en vez de chips, un solo fade sutil en vez de una
librería de animaciones. Los proyectos ocupan la mayor parte de la página.

Estructura de la página (deliberadamente corta):

1. **Hero** — nombre, rol, una frase. Sin pantalla completa, sin imagen.
2. **Proyectos destacados** — el centro de la página. Índice editorial con
   capturas grandes, alternando el lado de la imagen por entrada.
3. **Sobre mí** — texto editorial de dos columnas + una ficha de datos.
4. **Tecnologías** — deliberadamente breve: tres líneas de texto plano.
5. **Contacto** — una lista simple de formas de contacto.

## Estructura del proyecto

```
/
├── index.html
├── styles/
│   ├── base.css        # Tokens, reset, tipografía, enlaces/botones
│   ├── layout.css        # Nav sticky + footer
│   ├── hero.css            # Hero tipográfico
│   ├── projects.css          # Índice editorial de proyectos
│   ├── about.css               # Sección "Sobre mí"
│   ├── tech.css                  # Stack, muy resumido
│   ├── contact.css                 # Lista de contacto
│   ├── animations.css                # Un solo fade sutil
│   └── responsive.css                  # Breakpoints globales
├── scripts/
│   ├── projects-data.js    # ⭐ Array de proyectos — edítalo para añadir nuevos
│   └── main.js               # Nav activa, tema, render de proyectos, reveal
├── assets/
│   ├── images/                # Capturas SVG en escala de grises (reemplázalas por reales)
│   └── resume/                  # CV en PDF (reemplázalo por el tuyo)
├── favicon/
├── robots.txt
├── sitemap.xml
└── README.md
```

## Cómo añadir un nuevo proyecto

Abre `scripts/projects-data.js` y agrega un objeto a `PROJECTS`. El orden
del arreglo es el orden en la página:

```js
{
  title: 'Nombre del proyecto',
  year: '2026',
  description: 'Descripción breve, sin lenguaje de marketing.',
  image: 'assets/images/mi-proyecto.svg', // idealmente una captura real
  tech: ['Python', 'Pygame'],
  github: 'https://github.com/GerhardAvs/mi-repo',
  demo: 'https://mi-demo.com' // o null si no hay demo
}
```

## Personalización rápida

- **Colores / tipografía:** variables en `styles/base.css` (`:root` y
  `[data-theme="dark"]`).
- **LinkedIn:** reemplaza el `href="#"` en `linkedin-card` y
  `linkedin-footer` en `index.html`.
- **CV:** sustituye `assets/resume/Gerardo_Avalos_CV.pdf`.
- **Capturas de proyecto:** reemplaza los SVG en `assets/images/` por
  capturas reales (`.webp` recomendado, mismo `alt` descriptivo).
- **SEO:** actualiza `og:url`, `canonical` y `sitemap.xml` con tu dominio
  final de GitHub Pages.

## Qué se eliminó a propósito

Respecto a versiones anteriores, esta se despoja de: hero a pantalla
completa, fondos con gradiente, glassmorphism, tarjetas en cada sección,
chips de tecnologías, sombras marcadas, radios de borde grandes, barra de
progreso de scroll, efecto de escritura (typing), cursor personalizado,
partículas de fondo, pantalla de carga, y las librerías externas que los
sostenían (Font Awesome, AOS, Typed.js). Ninguno de esos elementos
transmitía información — solo ocupaban espacio y JavaScript.

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz de un repositorio (o a la
   rama `gh-pages`).
2. En **Settings → Pages**, selecciona la rama y carpeta raíz.
3. Actualiza las URLs en `index.html`, `robots.txt` y `sitemap.xml` con tu
   dominio real de GitHub Pages.

---

Diseñado y construido para Gerardo Avalos — Villahermosa, Tabasco, México.
