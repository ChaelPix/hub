import { projects } from './projects.js';
import { setupContactEmail } from './contact.js';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

const INTERNAL_TAGS = new Set(['Highlights', 'highlights', 'hihlights', 'AIproject', 'Aiproject', 'gameProject', 'softwareProject']);
const FEATURED_IDS = ['sara_internship', 'ws_lyon24'];

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  })[char]);
}

function projectCategory(project) {
  const tags = project.tags || [];
  if (tags.some(tag => ['Robotics', 'Computer Vision', 'ROS1', 'ROS2'].includes(tag))) return 'robotics';
  if (tags.includes('gameProject')) return 'games';
  return 'software';
}

function categoryLabel(category) {
  return { robotics: 'Robotics + CV', games: 'Game / XR', software: 'Software + AI' }[category];
}

function visibleTags(project, limit = 4) {
  return (project.tags || []).filter(tag => !INTERNAL_TAGS.has(tag)).slice(0, limit);
}

function dateScore(date = '') {
  const years = date.match(/20\d{2}/g);
  if (!years) return 0;
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthPattern = new RegExp(monthNames.join('|'), 'g');
  const monthMatches = date.match(monthPattern) || [];
  const lastMonth = monthNames.indexOf(monthMatches[monthMatches.length - 1]) + 1;
  return Number(years[years.length - 1]) * 12 + Math.max(lastMonth, 0);
}

function renderFeatured() {
  const container = document.querySelector('#featured-projects');
  const featured = FEATURED_IDS.map(id => projects.find(project => project.id === id)).filter(Boolean);

  container.innerHTML = featured.map((project, index) => {
    const tags = visibleTags(project).join(' · ');
    const video = project.video_preview
      ? `<video src="${escapeHtml(project.video_preview)}" muted loop playsinline preload="metadata" aria-hidden="true"></video>`
      : '';
    return `
      <article class="feature-card reveal" data-project-id="${escapeHtml(project.id)}" ${project.video_preview ? 'data-preview' : ''} tabindex="0" role="button" aria-label="Open ${escapeHtml(project.title)} case study">
        <div class="feature-media">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy" />
          ${video}
          ${project.video_preview ? '<span class="preview-label">Hover preview ▶</span>' : ''}
        </div>
        <div class="feature-copy">
          <span class="feature-number">0${index + 1} / ${escapeHtml(categoryLabel(projectCategory(project)))}</span>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <div class="feature-footer"><span>${escapeHtml(project.date || '')}</span><span>${escapeHtml(tags)}</span></div>
        </div>
      </article>`;
  }).join('');

}

function renderProjectGrid() {
  const container = document.querySelector('#project-grid');
  const sorted = [...projects].sort((a, b) => dateScore(b.date) - dateScore(a.date));

  container.innerHTML = sorted.map((project, index) => {
    const category = projectCategory(project);
    const video = project.video_preview
      ? `<video src="${escapeHtml(project.video_preview)}" muted loop playsinline preload="metadata" aria-hidden="true"></video>`
      : '';
    return `
      <article class="project-card reveal" data-category="${category}" data-orientation="${project.isPortrait ? 'portrait' : 'landscape'}" data-rank="${index}" data-project-id="${escapeHtml(project.id)}" ${project.video_preview ? 'data-preview' : ''} tabindex="0" role="button" aria-label="Open ${escapeHtml(project.title)} case study">
        <div class="project-media">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy" />
          ${video}
          <span class="project-type">${escapeHtml(categoryLabel(category))}</span>
          ${project.video_preview ? '<span class="preview-label">Hover preview ▶</span>' : ''}
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="project-card-desc">${escapeHtml(project.description)}</p>
        <div class="project-card-bottom"><span>${escapeHtml(project.date || 'Personal project')}</span><span>View ↗</span></div>
      </article>`;
  }).join('');
}

function layoutProjectGrid() {
  const grid = document.querySelector('#project-grid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.project-card')].filter(card => !card.hidden);
  const width = grid.clientWidth;
  const gap = 18;
  const columnCount = width >= 1100 ? 4 : width >= 650 ? 2 : 1;
  const cardWidth = (width - gap * (columnCount - 1)) / columnCount;
  const heights = Array(columnCount).fill(0);

  cards.forEach(card => {
    card.style.width = `${cardWidth}px`;
    const column = heights.indexOf(Math.min(...heights));
    card.style.left = `${column * (cardWidth + gap)}px`;
    card.style.top = `${heights[column]}px`;
    heights[column] += card.offsetHeight + gap;
  });

  grid.style.height = `${Math.max(...heights, 0) - (cards.length ? gap : 0)}px`;
}

function setupFilters() {
  const buttons = document.querySelectorAll('.filter-button');
  const cards = document.querySelectorAll('.project-card');
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
    requestAnimationFrame(layoutProjectGrid);
  }));
}

function setupVideoPreviews() {
  document.querySelectorAll('[data-preview]').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;
    card.addEventListener('mouseenter', () => {
      card.classList.add('previewing');
      video.play().catch(() => card.classList.remove('previewing'));
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('previewing');
      video.pause();
      video.currentTime = 0;
    });
  });
}

function processMarkdown(container) {
  container.querySelectorAll('img').forEach(image => {
    image.loading = 'lazy';
    image.alt ||= 'Project media';
  });
  container.querySelectorAll('video').forEach(video => {
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
  });
  container.querySelectorAll('a').forEach(link => {
    if (link.href && !link.href.startsWith(window.location.origin)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
}

const dialog = document.querySelector('#project-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogContent = document.querySelector('#dialog-content');

async function openProject(projectId, updateHash = true) {
  const project = projects.find(item => item.id === projectId);
  if (!project) return;
  dialogTitle.textContent = project.title;
  dialogContent.innerHTML = '<p class="dialog-loading">LOADING CASE STUDY…</p>';
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('dialog-open');
  if (updateHash) history.pushState({ projectId }, '', `#project-${projectId}`);

  try {
    const response = await fetch(`projects/${projectId}.md`);
    if (!response.ok) throw new Error(`Could not load projects/${projectId}.md`);
    marked.setOptions({ breaks: true, gfm: true });
    dialogContent.innerHTML = `<div class="markdown-content">${marked.parse(await response.text())}</div>`;
    processMarkdown(dialogContent);
  } catch (error) {
    dialogContent.innerHTML = `<p class="markdown-error">${escapeHtml(error.message)}. Add the matching Markdown file to publish this case study.</p>`;
  }
}

function closeProject(updateHash = true) {
  dialog.querySelectorAll('video').forEach(video => video.pause());
  dialog.close();
  document.body.classList.remove('dialog-open');
  if (updateHash && location.hash.startsWith('#project-')) history.pushState({}, '', location.pathname + location.search);
}

function setupProjectInteractions() {
  document.querySelectorAll('[data-project-id]').forEach(card => {
    card.addEventListener('click', () => openProject(card.dataset.projectId));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProject(card.dataset.projectId);
      }
    });
  });
  document.querySelector('[data-close-dialog]').addEventListener('click', () => closeProject());
  dialog.addEventListener('click', event => { if (event.target === dialog) closeProject(); });
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
}

function setupNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.mobile-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  }));
}

function setupHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return;
  let frame;
  hero.addEventListener('pointermove', event => {
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      hero.style.setProperty('--px', x.toFixed(3));
      hero.style.setProperty('--py', y.toFixed(3));
    });
  });
  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--px', 0);
    hero.style.setProperty('--py', 0);
  });
}

function setupReveal() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  elements.forEach(element => observer.observe(element));
}

function openHashProject() {
  if (!location.hash.startsWith('#project-')) return;
  openProject(location.hash.replace('#project-', ''), false);
}

setupContactEmail();
renderFeatured();
renderProjectGrid();
setupFilters();
setupVideoPreviews();
setupProjectInteractions();
setupNavigation();
setupHeroParallax();
setupReveal();
openHashProject();

requestAnimationFrame(() => requestAnimationFrame(layoutProjectGrid));
document.fonts?.ready.then(layoutProjectGrid);
window.addEventListener('resize', layoutProjectGrid);

window.addEventListener('popstate', () => {
  if (location.hash.startsWith('#project-')) openHashProject();
  else if (dialog.open) closeProject(false);
});
