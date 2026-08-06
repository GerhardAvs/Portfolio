/**
 * projects-data.js
 * ---------------------------------------------------------
 * Single source of truth for project cards.
 * To add a new project, push a new object to PROJECTS below —
 * the page re-renders automatically, filters and search already
 * understand the new entry.
 *
 * Set `featured: true` on at most one project to give it the
 * full-width spotlight treatment at the top of the section.
 *
 * category values used by the filter bar:
 *   "game-dev" | "software" | "ai-ml" | "iot"
 * status values: "Completado" | "En progreso" | "Próximamente"
 * ---------------------------------------------------------
 */

const PROJECTS = [
  {
    title: 'Pizza Survivor',
    description: 'Videojuego 2D estilo "survivor" construido con Pygame. Colisiones por máscara de píxeles, movimiento diagonal normalizado y un game loop estable — resueltos a mano, sin motor de físicas externo.',
    image: 'assets/images/project-pizza-survivor.svg',
    tech: ['Python', 'Pygame'],
    category: 'game-dev',
    status: 'En progreso',
    github: 'https://github.com/GerhardAvs',
    demo: null,
    featured: true
  },
  {
    title: 'Bank Account System',
    description: 'Sistema de gestión de cuentas bancarias con operaciones de depósito, retiro y transferencia, aplicando estructuras de datos y validación robusta.',
    image: 'assets/images/project-bank-system.svg',
    tech: ['C++', 'SQL'],
    category: 'software',
    status: 'Completado',
    github: 'https://github.com/GerhardAvs',
    demo: null
  },
  {
    title: 'Pharmacy Queue Management',
    description: 'Sistema de administración de turnos para farmacia, con colas de atención, prioridades y un panel simple de seguimiento.',
    image: 'assets/images/project-pharmacy-queue.svg',
    tech: ['Java', 'SQL'],
    category: 'software',
    status: 'Completado',
    github: 'https://github.com/GerhardAvs',
    demo: null
  },
  {
    title: 'ESP32 IoT Projects',
    description: 'Colección de proyectos IoT sobre ESP32: sensores conectados, lectura en tiempo real y sincronización con Firebase.',
    image: 'assets/images/project-esp32-iot.svg',
    tech: ['Arduino', 'ESP32', 'Firebase'],
    category: 'iot',
    status: 'En progreso',
    github: 'https://github.com/GerhardAvs',
    demo: null
  },
  {
    title: 'Robotics Projects',
    description: 'Experimentos de robótica con Arduino: control de motores, sensores de distancia y lógica de navegación básica.',
    image: 'assets/images/project-robotics.svg',
    tech: ['Arduino', 'C++'],
    category: 'iot',
    status: 'En progreso',
    github: 'https://github.com/GerhardAvs',
    demo: null
  },
  {
    title: 'Machine Learning Experiments',
    description: 'Cuadernos y modelos de Machine Learning: desde clasificación clásica hasta optimización con Quantum Computing (Qiskit / PennyLane).',
    image: 'assets/images/project-machine-learning.svg',
    tech: ['Python', 'Qiskit', 'PennyLane'],
    category: 'ai-ml',
    status: 'En progreso',
    github: 'https://github.com/GerhardAvs',
    demo: null
  }
];

function projectActions(p) {
  return `
    <a href="${p.github}" class="link-inline" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> Código</a>
    ${p.demo
      ? `<a href="${p.demo}" class="link-inline" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Demo</a>`
      : `<span class="link-inline" style="opacity:.5;pointer-events:none;"><i class="fa-solid fa-clock" aria-hidden="true"></i> Demo pronto</span>`}
  `;
}

/**
 * Renders the featured project (if any) into #project-featured as a
 * full-width spotlight — the entry point recruiters see first.
 */
function renderFeaturedProject(project) {
  const target = document.getElementById('project-featured');
  if (!target) return;

  if (!project) {
    target.innerHTML = '';
    return;
  }

  target.innerHTML = `
    <article class="project-featured" data-aos="fade-up">
      <div class="project-thumb">
        <img src="${project.image}" alt="Captura del proyecto ${project.title}" width="640" height="400" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-eyebrow-row">
          <p class="eyebrow">Proyecto destacado</p>
          <span class="status-tag">${project.status}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          ${projectActions(project)}
        </div>
      </div>
    </article>
  `;
}

/**
 * Renders the remaining PROJECTS into #projects-grid.
 * Kept separate from main.js so this data file stays edit-only.
 */
function renderProjects(list) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = list.map((p, i) => `
    <article class="project-card" data-category="${p.category}" data-title="${p.title.toLowerCase()}" data-aos="fade-up" data-aos-delay="${(i % 3) * 60}">
      <div class="project-thumb">
        <img src="${p.image}" alt="Captura del proyecto ${p.title}" width="480" height="300" loading="lazy">
        <span class="project-status">${p.status}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          ${projectActions(p)}
        </div>
      </div>
    </article>
  `).join('');
}
