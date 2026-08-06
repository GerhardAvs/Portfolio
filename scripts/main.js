/**
 * main.js — Gerardo Avalos Portfolio
 * Only the interactivity that earns its place: navigation state,
 * theme persistence, project filtering/search, and light scroll reveal.
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------ */
  /* Footer year                                                        */
  /* ------------------------------------------------------------------ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------ */
  /* Scroll progress bar                                                */
  /* ------------------------------------------------------------------ */
  const progressBar = document.getElementById('scroll-progress');
  function updateProgress() {
    if (!progressBar) return;
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const height = h.scrollHeight - h.clientHeight;
    progressBar.style.width = height > 0 ? `${(scrolled / height) * 100}%` : '0%';
  }

  /* ------------------------------------------------------------------ */
  /* Navbar: scrolled state + active link highlighting                  */
  /* ------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('main section[id]');

  function updateNavbar() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 24);
  }

  const backToTop = document.getElementById('back-to-top');
  function updateBackToTop() {
    if (!backToTop) return;
    backToTop.classList.toggle('visible', window.scrollY > 600);
  }

  window.addEventListener('scroll', () => {
    updateProgress();
    updateNavbar();
    updateBackToTop();
  }, { passive: true });

  updateProgress();
  updateNavbar();
  updateBackToTop();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    sections.forEach((section) => navObserver.observe(section));
  }

  /* ------------------------------------------------------------------ */
  /* Mobile menu                                                        */
  /* ------------------------------------------------------------------ */
  const navToggle = document.getElementById('nav-toggle');
  const navLinksWrap = document.getElementById('nav-links');

  if (navToggle && navLinksWrap) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinksWrap.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinksWrap.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinksWrap.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Theme switcher (persisted)                                         */
  /* ------------------------------------------------------------------ */
  const themeToggle = document.getElementById('theme-toggle');
  const THEME_KEY = 'portfolio-theme';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun" aria-hidden="true"></i>';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
    }
  }

  const savedTheme = localStorage.getItem(THEME_KEY) ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const next = isLight ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Typed.js — rotating hero role + IDE return line                    */
  /* Subtle, single-purpose: no bouncing, no extra flourish.            */
  /* ------------------------------------------------------------------ */
  function initTyped() {
    const roleTarget = document.getElementById('typed-role');
    if (roleTarget && window.Typed) {
      new window.Typed('#typed-role', {
        strings: [
          'Software Engineer',
          'AI Enthusiast',
          'Python Developer',
          'Game Developer',
          'Machine Learning Student'
        ],
        typeSpeed: 42,
        backSpeed: 22,
        backDelay: 1500,
        loop: true,
        smartBackspace: true
      });
    }

    const ideTarget = document.getElementById('ide-typed-line');
    if (ideTarget && window.Typed) {
      new window.Typed('#ide-typed-line', {
        strings: ['f"Hola, soy {self.role}"'],
        typeSpeed: 26,
        showCursor: true,
        cursorChar: '▍',
        loop: false
      });
    }
  }

  if (window.Typed) {
    initTyped();
  } else {
    window.addEventListener('load', () => {
      if (window.Typed) initTyped();
    });
  }

  /* ------------------------------------------------------------------ */
  /* AOS — short, understated fades only                                */
  /* ------------------------------------------------------------------ */
  function initAOS() {
    if (window.AOS) {
      window.AOS.init({
        duration: 500,
        easing: 'ease-out-cubic',
        once: true,
        offset: 40,
        disable: prefersReducedMotion
      });
    }
  }

  if (window.AOS) {
    initAOS();
  } else {
    window.addEventListener('load', initAOS);
  }

  /* ------------------------------------------------------------------ */
  /* Projects: render featured + grid, then filter / search              */
  /* ------------------------------------------------------------------ */
  let activeFilter = 'all';
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('project-search');
  const emptyState = document.getElementById('projects-empty');

  function applyProjectFilters() {
    const cards = document.querySelectorAll('.project-card');
    const query = (searchInput && searchInput.value.trim().toLowerCase()) || '';
    let visibleCount = 0;

    cards.forEach((card) => {
      const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
      const matchesQuery = !query || card.dataset.title.includes(query);
      const show = matchesCategory && matchesQuery;
      card.classList.toggle('hide', !show);
      if (show) visibleCount += 1;
    });

    if (emptyState) emptyState.classList.toggle('show', visibleCount === 0);
  }

  if (typeof PROJECTS !== 'undefined') {
    const featured = PROJECTS.find((p) => p.featured);
    const rest = PROJECTS.filter((p) => p !== featured);

    if (typeof renderFeaturedProject === 'function') renderFeaturedProject(featured);
    if (typeof renderProjects === 'function') renderProjects(rest);
    if (window.AOS) window.AOS.refreshHard();

    applyProjectFilters();
  }

  if (filterButtons.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        applyProjectFilters();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyProjectFilters);
  }

  /* ------------------------------------------------------------------ */
  /* Generic reveal fallback for elements not using AOS                 */
  /* ------------------------------------------------------------------ */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => revealObserver.observe(el));
  }

})();
