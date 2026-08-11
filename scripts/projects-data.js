/**
 * projects-data.js
 * ---------------------------------------------------------
 * Single source of truth for the project index. Push a new
 * object to PROJECTS to add a project — order in the array is
 * the order it appears on the page.
 * ---------------------------------------------------------
 */

const PROJECTS = [
  {
    title: 'Quantum computing for water challenges',
    year: '2026',
    description: '',
    image: 'assets/images/project-pizza-survivor.svg',
    tech: ['Python', 'Qiskit, PennyLane, MILP, QAOA'],
    github: 'https://github.com/GerhardAvs/Hackathon-LATAM-OQI-2026',
    demo: null
  },
  {
    title: 'Machine Learning: XGBoost vs lightGBM',
    year: '2026',
    description: '',
    image: 'assets/images/project-bank-system.svg',
    tech: ['Jupyter', 'Pandas, Numpy, Matplotlib, ScikitLearn'],
    github: 'https://github.com/GerhardAvs',
    demo: null
  },
  {
    title: 'Pharmacy Queue Management',
    year: '2024',
    description: 'Sistema de turnos para farmacia con colas de atención, prioridades y seguimiento en tiempo real.',
    image: 'assets/images/project-pharmacy-queue.svg',
    tech: ['Java', 'SQL'],
    github: 'https://github.com/GerhardAvs',
    demo: null
  },
  {
    title: 'ESP32 IoT Projects',
    year: '2024',
    description: 'Sensores conectados sobre ESP32 con lectura en tiempo real y sincronización a Firebase.',
    image: 'assets/images/project-esp32-iot.svg',
    tech: ['Arduino', 'ESP32', 'Firebase'],
    github: 'https://github.com/GerhardAvs',
    demo: null
  },
  {
    title: 'Robotics Projects',
    year: '2023',
    description: 'Control de motores, sensores de distancia y lógica de navegación básica sobre Arduino.',
    image: 'assets/images/project-robotics.svg',
    tech: ['Arduino', 'C++'],
    github: 'https://github.com/GerhardAvs',
    demo: null
  },
  {
    title: 'Machine Learning Experiments',
    year: '2023',
    description: 'Modelos de clasificación clásica y experimentos de optimización cuántica con Qiskit y PennyLane.',
    image: 'assets/images/project-machine-learning.svg',
    tech: ['Python', 'Qiskit', 'PennyLane'],
    github: 'https://github.com/GerhardAvs',
    demo: null
  }
];

/**
 * Renders PROJECTS into #project-list as a plain editorial index —
 * no cards, no chips, no filters. Order in the array is order on page.
 */
function renderProjects(list) {
  const target = document.getElementById('project-list');
  if (!target) return;

  target.innerHTML = list.map((p, i) => `
    <article class="project-entry reveal">
      <div class="project-media">
        <img src="${p.image}" alt="Captura del proyecto ${p.title}" width="640" height="440" loading="${i === 0 ? 'eager' : 'lazy'}">
      </div>
      <div class="project-info">
        <span class="project-index mono">${String(i + 1).padStart(2, '0')} — ${p.year}</span>
        <h3 class="project-title"><a href="${p.demo || p.github}" target="_blank" rel="noopener noreferrer">${p.title}</a></h3>
        <p class="project-desc">${p.description}</p>
        <p class="project-tech">${p.tech.join(' · ')}</p>
        <div class="project-links">
          <a href="${p.github}" class="text-link" target="_blank" rel="noopener noreferrer">Código <span class="arrow">↗</span></a>
          ${p.demo ? `<a href="${p.demo}" class="text-link" target="_blank" rel="noopener noreferrer">Demo <span class="arrow">↗</span></a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}
