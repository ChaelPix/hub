import { projects as projectData } from './projects.js';
import { timeline } from './timeline.js';
import { publications } from './publications.js';
import { setupContactEmail } from './contact.js';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

const INTERNAL_TAGS = new Set([
  'Highlights', 'highlights', 'hihlights', 'AIproject', 'Aiproject',
  'gameProject', 'softwareProject'
]);
const CATEGORY_LABELS = {
  robotics: 'Robotics / CV',
  games: 'Games',
  xr: 'XR',
  other: 'Engineering'
};
const PROJECT_GROUPS = [
  { id: 'robotics', label: 'Robotics / CV works', match: project => project.categories.includes('robotics') },
  { id: 'play', label: 'Games / XR works', match: project => project.categories.includes('games') || project.categories.includes('xr') },
  { id: 'engineering', label: 'Engineering works', match: () => true }
];
const CV_TAGS = new Set(['computer vision', 'opencv', 'vision']);
const XR_TAGS = new Set(['xr/vr', 'metaxr', 'arcore', 'augmented reality', 'mixed reality', 'vr', 'ar']);
const VALID_CATEGORIES = new Set(['robotics', 'games', 'xr', 'other']);
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const hoverPreviewQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
})[character]);

function normalizeCategories(project) {
  const tags = (project.tags || []).map(tag => String(tag).toLowerCase());
  const explicit = Array.isArray(project.categories) ? project.categories : [project.category];
  const categories = explicit.filter(category => VALID_CATEGORIES.has(category));
  if (tags.some(tag => CV_TAGS.has(tag)) && !categories.includes('robotics')) categories.push('robotics');
  if (tags.some(tag => XR_TAGS.has(tag)) && !categories.includes('xr')) categories.push('xr');
  if (tags.includes('gameproject') && !categories.includes('games')) categories.push('games');
  if (!categories.length) categories.push('other');
  return [...new Set(categories)];
}

function legacySortDate(project) {
  const years = project.date?.match(/20\d{2}/g);
  return years?.length ? `${years.at(-1)}-01-01` : '0000-01-01';
}

const projects = projectData
  .map((project, sourceIndex) => {
    const categories = normalizeCategories(project);
    return {
      ...project,
      sourceIndex,
      categories,
      category: VALID_CATEGORIES.has(project.category) ? project.category : categories[0],
      highlightOrder: Number.isFinite(project.highlightOrder) ? project.highlightOrder : null,
      sortDate: project.sortDate || legacySortDate(project)
    };
  })
  .sort((first, second) => second.sortDate.localeCompare(first.sortDate) || first.sourceIndex - second.sourceIndex);

const elements = {
  aboutFigure: document.querySelector('#about-figure'),
  timelineRoot: document.querySelector('#timeline-root'),
  publicationRoot: document.querySelector('#publication-root'),
  projectLists: document.querySelector('#project-lists'),
  sidebar: document.querySelector('#site-sidebar'),
  sidebarToggle: document.querySelector('[data-sidebar-toggle]'),
  sidebarBackdrop: document.querySelector('[data-sidebar-close]'),
  dialog: document.querySelector('#project-dialog'),
  dialogTitle: document.querySelector('#dialog-title'),
  dialogContent: document.querySelector('#dialog-content')
};

let markdownVideoObserver;
let previewVideoObserver;
let lastFocusedElement;
let dialogClosing = false;
let dialogMotionToken = 0;
const DIALOG_CLOSE_MS = 280;

function visibleTags(project, limit = 5) {
  return (project.tags || []).filter(tag => !INTERNAL_TAGS.has(tag)).slice(0, limit);
}

function displayTitle(project) {
  return project.displayTitle || project.title;
}

function isHighlight(project) {
  if (Number.isFinite(project.highlightOrder)) return true;
  return (project.tags || []).some(tag => {
    const label = String(tag).toLowerCase();
    return label === 'highlights' || label === 'hihlights';
  });
}

function groupedProjects() {
  const highlightItems = projects
    .filter(isHighlight)
    .slice()
    .sort((first, second) => {
      const firstRank = Number.isFinite(first.highlightOrder) ? first.highlightOrder : Number.POSITIVE_INFINITY;
      const secondRank = Number.isFinite(second.highlightOrder) ? second.highlightOrder : Number.POSITIVE_INFINITY;
      return firstRank - secondRank || second.sortDate.localeCompare(first.sortDate) || first.sourceIndex - second.sourceIndex;
    });
  const used = new Set();
  const rest = PROJECT_GROUPS.map(group => {
    const items = projects.filter(project => !used.has(project.id) && group.match(project));
    items.forEach(project => used.add(project.id));
    return { ...group, items };
  }).filter(group => group.items.length);
  return highlightItems.length
    ? [{ id: 'highlights', label: 'Highlight works', items: highlightItems }, ...rest]
    : rest;
}

function endYear(value) {
  const text = String(value || '');
  if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0, 4);
  const years = [];
  const pattern = /20(\d{2})(?:\s*[-–—\/]\s*(?:20)?(\d{2})(?!\d))?/g;
  let match;
  while ((match = pattern.exec(text))) {
    years.push(match[2] ? `20${match[2]}` : `20${match[1]}`);
  }
  return years.at(-1) || '';
}

function yearMark(items, index, yearOf) {
  const year = yearOf(items[index]);
  if (!year) return '';
  const next = items[index + 1];
  return year !== (next ? yearOf(next) : '') ? year : '';
}

function timelineEventHTML(item, yearSpine = '') {
  const education = item.section === 'education';
  const interactive = Boolean(item.projectId);
  const position = item.imagePosition ? ` style="object-position: ${escapeHtml(item.imagePosition)}"` : '';
  const fit = item.imageFit === 'contain' ? ' is-logo' : '';
  const avatar = education
    ? '<span class="timeline-avatar is-education" aria-hidden="true"><img src="img/icons/education.svg" alt="" /></span>'
    : item.image
      ? `<span class="timeline-avatar${fit}"><img src="${escapeHtml(item.image)}" alt="" loading="lazy"${position} /></span>`
      : '';
  const when = item.date || item.year;
  const rowClass = `timeline-row${education ? ' is-education' : ''}`;
  const spine = yearSpine
    ? `<span class="timeline-year-spine">${escapeHtml(yearSpine)}</span>`
    : '';
  const inner = `
    ${avatar}
    <span class="timeline-copy">
      <b>${escapeHtml(item.title)}</b>
      <span>${escapeHtml(item.detail || '')}</span>
    </span>
    <em class="timeline-year">${escapeHtml(when)}</em>`;
  return interactive
    ? `<li>${spine}<button class="${rowClass}" type="button" data-timeline-project="${escapeHtml(item.projectId)}">${inner}</button></li>`
    : `<li>${spine}<div class="${rowClass}">${inner}</div></li>`;
}

function renderTimeline() {
  const items = timeline.slice().reverse();
  const yearOf = item => endYear(item.date || item.year);
  elements.timelineRoot.innerHTML = `
    <ol class="timeline-list">
      ${items.map((item, index) => timelineEventHTML(item, yearMark(items, index, yearOf))).join('')}
    </ol>`;

  elements.timelineRoot.querySelectorAll('[data-timeline-project]').forEach(button => {
    button.addEventListener('click', () => openProject(button.dataset.timelineProject));
  });
}

function renderPublications() {
  if (!elements.publicationRoot) return;
  if (!publications.length) {
    elements.publicationRoot.innerHTML = '<p class="project-empty">No publications yet.</p>';
    return;
  }
  elements.publicationRoot.innerHTML = `
    <ul class="publication-grid">
      ${publications.map(paper => {
        const image = paper.image
          ? `<span class="publication-frame">
              <span class="project-tape" aria-hidden="true"></span>
              <span class="publication-figure"><img src="${escapeHtml(paper.image)}" alt="" loading="lazy" /></span>
            </span>`
          : '<span class="publication-frame"><span class="publication-figure is-empty">—</span></span>';
        const logo = paper.logo
          ? `<img class="publication-logo" src="${escapeHtml(paper.logo)}" alt="" />`
          : '';
        const meta = [paper.venue, paper.type, paper.place, paper.date].filter(Boolean).join(', ');
        return `
          <li>
            <a class="publication-card" href="${escapeHtml(paper.url)}" target="_blank" rel="noopener noreferrer">
              ${image}
              <span class="publication-meta">${escapeHtml(meta)}</span>
              <span class="publication-head">
                ${logo}
                <strong class="publication-title">${escapeHtml(paper.title)}</strong>
              </span>
            </a>
          </li>`;
      }).join('')}
    </ul>`;
}

function projectThumbHTML(project) {
  if (!project.image && !project.video_preview) {
    return '<span class="project-frame"><span class="project-thumb is-empty">—</span></span>';
  }
  const image = project.image
    ? `<img src="${escapeHtml(project.image)}" alt="" loading="lazy" />`
    : '';
  const video = project.video_preview
    ? `<video src="${escapeHtml(project.video_preview)}" muted loop playsinline preload="metadata"${project.image ? ` poster="${escapeHtml(project.image)}"` : ''}></video>`
    : '';
  const sparkles = isHighlight(project)
    ? '<span class="project-spark"></span><span class="project-spark"></span><span class="project-spark"></span><span class="project-spark"></span>'
    : '';
  const tape = isHighlight(project)
    ? '<span class="project-tape" aria-hidden="true"></span><span class="project-tape" aria-hidden="true"></span><span class="project-tape" aria-hidden="true"></span><span class="project-tape" aria-hidden="true"></span>'
    : '<span class="project-tape" aria-hidden="true"></span>';
  return `<span class="project-frame">
    ${tape}${sparkles}
    <span class="project-thumb">${image}${video}</span>
  </span>`;
}

function projectYear(project) {
  return endYear(project.sortDate) || endYear(project.date);
}

function projectRowHTML(project, yearSpine = '') {
  const tags = visibleTags(project);
  const tagLabels = tags.length ? tags : project.categories.map(category => CATEGORY_LABELS[category]);
  const portrait = project.isPortrait ? ' is-portrait' : '';
  const highlight = isHighlight(project) ? ' is-highlight' : '';
  const spine = yearSpine
    ? `<span class="timeline-year-spine">${escapeHtml(yearSpine)}</span>`
    : '';
  return `
    <li>
      ${spine}
      <button class="project-row${portrait}${highlight}" type="button" data-project-id="${escapeHtml(project.id)}">
        ${projectThumbHTML(project)}
        <span class="project-row-main">
          <span class="project-row-head">
            <strong class="project-row-title">${escapeHtml(displayTitle(project))}</strong>
            <em class="project-row-date">${escapeHtml(project.date || '')}</em>
          </span>
          <span class="project-row-copy">${escapeHtml(project.description)}</span>
          <span class="project-row-tags">${tagLabels.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</span>
        </span>
      </button>
    </li>`;
}

function setPreviewPlaying(button, playing) {
  const video = button.querySelector('video');
  if (!video) return;
  if (playing) {
    video.play().catch(() => {});
    button.classList.add('is-playing');
    return;
  }
  video.pause();
  video.currentTime = 0;
  button.classList.remove('is-playing');
}

function bindPreviewVideo(root) {
  previewVideoObserver?.disconnect();
  previewVideoObserver = undefined;
  if (reduceMotionQuery.matches) return;

  if (!hoverPreviewQuery.matches && 'IntersectionObserver' in window) {
    previewVideoObserver = new IntersectionObserver(entries => {
      if (document.body.classList.contains('dialog-open')) return;
      entries.forEach(entry => {
        const button = entry.target.closest('.project-row');
        if (button) setPreviewPlaying(button, entry.isIntersecting);
      });
    }, { threshold: 0.55, rootMargin: '-8% 0px' });
    root.querySelectorAll('.project-row video').forEach(video => {
      previewVideoObserver.observe(video.closest('.project-thumb') || video);
    });
    return;
  }

  root.querySelectorAll('.project-row').forEach(button => {
    if (!button.querySelector('video')) return;
    button.addEventListener('pointerenter', () => setPreviewPlaying(button, true));
    button.addEventListener('pointerleave', () => setPreviewPlaying(button, false));
    button.addEventListener('focus', () => setPreviewPlaying(button, true));
    button.addEventListener('blur', () => setPreviewPlaying(button, false));
  });
}

function pauseProjectVideos() {
  elements.projectLists?.querySelectorAll('.project-row').forEach(button => setPreviewPlaying(button, false));
}

function resumePreviewVideos() {
  if (reduceMotionQuery.matches || hoverPreviewQuery.matches) return;
  elements.projectLists?.querySelectorAll('.project-row').forEach(button => {
    const thumb = button.querySelector('.project-thumb');
    if (!thumb || !button.querySelector('video')) return;
    const rect = thumb.getBoundingClientRect();
    const view = rect.height * 0.55;
    const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    setPreviewPlaying(button, visible >= view);
  });
}

function renderProjects() {
  const groups = groupedProjects();
  if (!groups.length) {
    elements.projectLists.innerHTML = '<p class="project-empty">No projects yet.</p>';
    return;
  }

  elements.projectLists.innerHTML = groups.map(group => {
    const rows = group.items.map((project, index) => (
      projectRowHTML(project, yearMark(group.items, index, projectYear))
    )).join('');
    return `
    <div class="project-group" id="works-${escapeHtml(group.id)}">
      <h3>${escapeHtml(group.label)}</h3>
      <ul class="project-list">${rows}</ul>
    </div>`;
  }).join('');
  elements.projectLists.querySelectorAll('[data-project-id]').forEach(button => {
    button.addEventListener('click', () => openProject(button.dataset.projectId));
  });
  bindPreviewVideo(elements.projectLists);
}

function setupSidebar() {
  if (!elements.sidebar || !elements.sidebarToggle) return;
  const setOpen = open => {
    elements.sidebar.classList.toggle('is-open', open);
    elements.sidebarToggle.setAttribute('aria-expanded', String(open));
    elements.sidebarToggle.textContent = open ? 'Close' : 'Menu';
    if (elements.sidebarBackdrop) elements.sidebarBackdrop.hidden = !open;
  };
  elements.sidebarToggle.addEventListener('click', () => {
    setOpen(!elements.sidebar.classList.contains('is-open'));
  });
  elements.sidebarBackdrop?.addEventListener('click', () => setOpen(false));
  elements.sidebar.querySelectorAll('a, [data-contact-action]').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && elements.sidebar.classList.contains('is-open')) setOpen(false);
  });
  window.matchMedia('(max-width: 980px)').addEventListener('change', event => {
    if (!event.matches) setOpen(false);
  });
}

function setupAboutParallax() {
  if (!elements.aboutFigure || reduceMotionQuery.matches || window.matchMedia('(pointer: coarse)').matches) return;
  let frame;
  elements.aboutFigure.addEventListener('pointermove', event => {
    const bounds = elements.aboutFigure.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      elements.aboutFigure.style.setProperty('--pointer-x', x.toFixed(3));
      elements.aboutFigure.style.setProperty('--pointer-y', y.toFixed(3));
    });
  });
  elements.aboutFigure.addEventListener('pointerleave', () => {
    elements.aboutFigure.style.setProperty('--pointer-x', 0);
    elements.aboutFigure.style.setProperty('--pointer-y', 0);
  });
}

function processMarkdown(container) {
  markdownVideoObserver?.disconnect();
  markdownVideoObserver = undefined;

  container.querySelectorAll('img').forEach(image => {
    image.loading = 'lazy';
    image.alt ||= 'Project media';
  });
  container.querySelectorAll('video').forEach(video => {
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
  });

  const autoplayVideos = [...container.querySelectorAll('video[data-autoplay]')];
  autoplayVideos.forEach(video => {
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
  });

  if (autoplayVideos.length && !reduceMotionQuery.matches) {
    if ('IntersectionObserver' in window) {
      markdownVideoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        });
      }, { threshold: .35 });
      autoplayVideos.forEach(video => markdownVideoObserver.observe(video));
    }
  }

  container.querySelectorAll('a').forEach(link => {
    if (link.href && !link.href.startsWith(window.location.origin)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
}

async function openProject(projectId, updateHash = true) {
  const project = projects.find(item => item.id === projectId);
  if (!project) return;
  pauseProjectVideos();
  lastFocusedElement = document.activeElement;
  elements.dialogTitle.textContent = project.title;
  elements.dialogContent.innerHTML = '<p class="dialog-loading">Loading case study…</p>';
  dialogClosing = false;
  dialogMotionToken += 1;
  elements.dialog.classList.remove('is-leaving');
  if (!elements.dialog.open) elements.dialog.showModal();
  document.body.classList.add('dialog-open');
  if (updateHash) history.pushState({ projectId }, '', `#project-${projectId}`);
  elements.dialog.querySelector('[data-close-dialog]')?.focus();

  try {
    const response = await fetch(`projects/${projectId}.md`);
    if (!response.ok) throw new Error(`Could not load projects/${projectId}.md`);
    marked.setOptions({ breaks: true, gfm: true });
    elements.dialogContent.innerHTML = `<div class="markdown-content">${marked.parse(await response.text())}</div>`;
    processMarkdown(elements.dialogContent);
  } catch (error) {
    elements.dialogContent.innerHTML = `
      <div class="markdown-error">
        <strong>Case study coming soon.</strong>
        <p>${escapeHtml(error.message)}</p>
      </div>`;
  }
}

function finishDialogClose() {
  dialogClosing = false;
  elements.dialog.classList.remove('is-leaving');
  markdownVideoObserver?.disconnect();
  markdownVideoObserver = undefined;
  elements.dialog.querySelectorAll('video').forEach(video => video.pause());
  if (elements.dialog.open) elements.dialog.close();
  document.body.classList.remove('dialog-open');
  resumePreviewVideos();
  lastFocusedElement?.focus?.();
}

function performDialogClose() {
  if (!elements.dialog.open || dialogClosing) return;
  if (reduceMotionQuery.matches) {
    finishDialogClose();
    return;
  }
  dialogClosing = true;
  const token = ++dialogMotionToken;
  elements.dialog.classList.add('is-leaving');
  let settled = false;
  const settle = () => {
    if (settled || token !== dialogMotionToken) return;
    settled = true;
    elements.dialog.removeEventListener('animationend', onAnimationEnd);
    finishDialogClose();
  };
  const onAnimationEnd = event => {
    if (event.target !== elements.dialog || event.animationName !== 'dialog-out') return;
    settle();
  };
  elements.dialog.addEventListener('animationend', onAnimationEnd);
  window.setTimeout(settle, DIALOG_CLOSE_MS);
}

function closeProject(updateHash = true) {
  if (updateHash && location.hash.startsWith('#project-')) {
    if (history.state?.projectId) {
      history.back();
      return;
    }
    // Pasted #project- links have no in-page entry behind them. Drop the
    // fragment in place so Close stays on the portfolio instead of leaving.
    history.replaceState({ portfolioRoot: true }, '', `${location.pathname}${location.search}`);
  }
  performDialogClose();
}

function setupProjectDialog() {
  elements.dialog.querySelector('[data-close-dialog]').addEventListener('click', () => closeProject());
  elements.dialog.addEventListener('click', event => {
    if (event.target === elements.dialog) closeProject();
  });
  elements.dialog.addEventListener('cancel', event => {
    event.preventDefault();
    closeProject();
  });
}

function openInitialHash() {
  if (!location.hash.startsWith('#project-')) return;
  const projectId = location.hash.replace('#project-', '');
  if (!projects.some(project => project.id === projectId)) return;
  // Put the main page under this entry so Close and Back return here.
  const hash = `#project-${projectId}`;
  history.replaceState({ portfolioRoot: true }, '', `${location.pathname}${location.search}`);
  history.pushState({ projectId }, '', hash);
  openProject(projectId, false);
}

function setupHistory() {
  window.addEventListener('popstate', () => {
    if (location.hash.startsWith('#project-')) {
      openProject(location.hash.replace('#project-', ''), false);
      return;
    }
    performDialogClose();
  });
}

setupContactEmail();
setupSidebar();
renderTimeline();
renderPublications();
renderProjects();
setupAboutParallax();
setupProjectDialog();
setupHistory();
openInitialHash();
