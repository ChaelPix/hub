import { projects as projectData } from './projects.js';
import { timeline } from './timeline.js';
import { setupContactEmail } from './contact.js';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

const INTERNAL_TAGS = new Set([
  'Highlights', 'highlights', 'hihlights', 'AIproject', 'Aiproject',
  'gameProject', 'softwareProject'
]);
const CATEGORY_LABELS = {
  all: 'All projects',
  highlights: 'Highlights',
  robotics: 'Robotics / CV',
  games: 'Games',
  xr: 'XR',
  other: 'Other'
};
const CATEGORY_ORDER = Object.keys(CATEGORY_LABELS);
const CV_TAGS = new Set(['computer vision', 'opencv', 'vision']);
const XR_TAGS = new Set(['xr/vr', 'metaxr', 'arcore', 'augmented reality', 'mixed reality', 'vr', 'ar']);
const VALID_CATEGORIES = new Set(['robotics', 'games', 'xr', 'other']);
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const compactWheelQuery = window.matchMedia('(max-width: 900px)');

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
  home: document.querySelector('#home'),
  highlights: document.querySelector('#highlights'),
  pathTrack: document.querySelector('#highlight-path-track'),
  pathList: document.querySelector('#highlight-path-list'),
  projects: document.querySelector('#projects'),
  timeline: document.querySelector('#timeline-list'),
  mediaStage: document.querySelector('#project-media-stage'),
  wheel: document.querySelector('#project-wheel'),
  dial: document.querySelector('#project-dial'),
  categoryOrbit: document.querySelector('.category-orbit'),
  kicker: document.querySelector('#project-kicker'),
  title: document.querySelector('#project-title'),
  description: document.querySelector('#project-description'),
  tags: document.querySelector('#project-tags'),
  copy: document.querySelector('.project-copy'),
  dialog: document.querySelector('#project-dialog'),
  dialogTitle: document.querySelector('#dialog-title'),
  dialogContent: document.querySelector('#dialog-content')
};

let activeCategory = 'all';
const categoryIndices = new Map(Object.keys(CATEGORY_LABELS).map(category => [category, 0]));
let mediaRenderToken = 0;
let activeProjectId = null;
let sceneTransitionLocked = false;
let explorerLocked = false;
let explorerUnlockGuard = false;
let wheelVisualIndex = 0;
let wheelTargetIndex = 0;
let wheelMotionFrame = 0;
let wheelMotionTime = 0;
let wheelSettleTimer;
let pendingWheelCommit;
let suppressWheelClickUntil = 0;
let copyTransitionToken = 0;
let markdownVideoObserver;
let lastFocusedElement;
const previewPreloadCache = new Map();
let renderedWheelCategory;

function visibleTags(project, limit = 4) {
  return (project.tags || []).filter(tag => !INTERNAL_TAGS.has(tag)).slice(0, limit);
}

function displayTitle(project) {
  return project.displayTitle || project.title;
}

function projectCategoryLabel(project) {
  return project.categories
    .slice(0, 2)
    .map(category => CATEGORY_LABELS[category] || category)
    .join(' + ');
}

function projectBadgeLabel(project) {
  return visibleTags(project, 1)[0] || projectCategoryLabel(project);
}

function fitProjectTitle() {
  const title = elements.title;
  title.style.removeProperty('font-size');
  const minimumSize = window.innerWidth <= 600 ? 17 : window.innerWidth <= 900 ? 22 : 27;
  let size = Number.parseFloat(getComputedStyle(title).fontSize);
  let attempts = 0;
  while (attempts < 48 && size > minimumSize) {
    const style = getComputedStyle(title);
    const lineHeight = Number.parseFloat(style.lineHeight);
    const padding = Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom);
    if (title.scrollHeight <= lineHeight * 2 + padding + 2) break;
    size -= 1;
    title.style.fontSize = `${size}px`;
    attempts += 1;
  }
}

function populateProjectCopy(project) {
  const shortTitle = displayTitle(project);
  elements.copy.classList.toggle('has-long-title', shortTitle.length > 34);
  elements.copy.classList.toggle('has-very-long-title', shortTitle.length > 55);
  elements.kicker.textContent = projectBadgeLabel(project);
  elements.title.textContent = shortTitle;
  elements.description.textContent = project.description;
  const tags = visibleTags(project, 4);
  const tagLabels = tags.length ? tags : project.categories.map(category => CATEGORY_LABELS[category]);
  elements.tags.innerHTML = tagLabels.map(tag => `<span>${escapeHtml(tag)}</span>`).join('');
  elements.tags.setAttribute('aria-label', tagLabels.join(', '));
  fitProjectTitle();
}

function transitionProjectCopy(project, direction, animate) {
  const token = ++copyTransitionToken;
  elements.copy.dataset.direction = String(Math.sign(direction));
  const enter = () => {
    if (token !== copyTransitionToken) return;
    populateProjectCopy(project);
    elements.copy.classList.remove('is-leaving');
    elements.copy.classList.remove('is-entering');
    void elements.copy.offsetWidth;
    elements.copy.classList.add('is-entering');
    window.setTimeout(() => {
      if (token === copyTransitionToken) elements.copy.classList.remove('is-entering');
    }, 520);
  };

  if (!animate || reduceMotionQuery.matches) {
    elements.copy.classList.remove('is-leaving', 'is-entering');
    populateProjectCopy(project);
    return;
  }

  elements.copy.classList.remove('is-entering');
  elements.copy.classList.add('is-leaving');
  window.setTimeout(enter, 225);
}

function projectsFor(category = activeCategory) {
  if (category === 'highlights') {
    return projects.filter(project => project.highlightOrder !== null);
  }
  if (category === 'all') return projects;
  return projects.filter(project => project.categories.includes(category));
}

function clampIndex(index, length) {
  return length ? Math.max(0, Math.min(length - 1, index)) : 0;
}

function activeList() {
  return projectsFor(activeCategory);
}

function activeIndex() {
  const list = activeList();
  return clampIndex(categoryIndices.get(activeCategory) || 0, list.length);
}

function activeProject() {
  return activeList()[activeIndex()];
}

function highlightProjects() {
  return projects
    .filter(project => project.highlightOrder !== null)
    .sort((first, second) => first.sortDate.localeCompare(second.sortDate) || first.sourceIndex - second.sourceIndex);
}

function projectYear(project) {
  return (project.sortDate || '').slice(0, 4) || (project.date?.match(/20\d{2}/) || [''])[0];
}

function projectTicketInnerHTML(project, { stamp, includeVideo = false } = {}) {
  const thumbnail = project.image
    ? `<img src="${escapeHtml(project.image)}" alt="" loading="${includeVideo ? 'lazy' : 'eager'}" decoding="async" />`
    : `<span class="wheel-placeholder">No preview yet</span>`;
  const video = includeVideo && project.video_preview
    ? `<video src="${escapeHtml(project.video_preview)}" muted loop playsinline preload="metadata"${project.image ? ` poster="${escapeHtml(project.image)}"` : ''}></video>`
    : '';
  const crown = project.highlightOrder !== null
    ? '<span class="wheel-card-crown" aria-hidden="true"><img src="img/icons/icon_crown.png" alt="" /></span>'
    : '';
  return `
    <span class="wheel-ticket">
      <span class="wheel-card-media">${thumbnail}${video}</span>
      <span class="wheel-card-action"><strong>View more</strong><small>Open case study ↗</small></span>
      <span class="wheel-card-stamp">${escapeHtml(stamp)}</span>
      ${crown}
      <span class="wheel-card-copy">
        <small>${escapeHtml(projectCategoryLabel(project))}</small>
        <strong>${escapeHtml(displayTitle(project))}</strong>
        <em>${escapeHtml(project.date || '')}</em>
      </span>
    </span>`;
}

const PATH_TILTS = [-3.4, 2.6, -1.9, 3.2, -2.8, 1.6, -3.9, 2.2, -1.3, 2.9];
const PATH_YEAR_TILTS = [8, -6, 4, -9, 7, -3, 5, -8, 6, -4];

function pathStopStyle(index, total) {
  const compact = compactWheelQuery.matches;
  const progress = total <= 1 ? .5 : index / (total - 1);
  const top = 6 + progress * 78;
  const left = compact ? 58 + (index % 2 ? 5 : -7) : index % 2 ? 66 : 24;
  const drift = compact ? 0 : (index % 3 === 0 ? -3 : index % 3 === 1 ? 4 : 1);
  return `--stop-top:${top.toFixed(2)}%;--stop-x:${left + drift}%;--tilt:${PATH_TILTS[index % 10]}deg;--year-tilt:${PATH_YEAR_TILTS[index % 10]}deg;--stop-index:${index}`;
}

function bindPathHoverVideo(root) {
  root.querySelectorAll('.path-ticket').forEach(button => {
    const video = button.querySelector('video');
    if (!video) return;
    const play = () => {
      if (reduceMotionQuery.matches) return;
      video.play().catch(() => {});
      button.classList.add('is-playing');
    };
    const pause = () => {
      video.pause();
      button.classList.remove('is-playing');
    };
    button.addEventListener('pointerenter', play);
    button.addEventListener('pointerleave', pause);
    button.addEventListener('focus', play);
    button.addEventListener('blur', pause);
  });
}

function renderHighlightPath() {
  const list = highlightProjects();
  if (elements.pathTrack) elements.pathTrack.style.setProperty('--stops', String(Math.max(list.length, 1)));
  if (!elements.pathList) return;
  if (!list.length) {
    elements.pathList.innerHTML = '<li class="path-empty">No selected work yet.</li>';
    return;
  }

  elements.pathList.innerHTML = list.map((project, index) => `
    <li class="path-stop" style="${pathStopStyle(index, list.length)}">
      <span class="path-year">${escapeHtml(projectYear(project))}</span>
      <button class="path-ticket is-highlight" type="button" data-project-id="${escapeHtml(project.id)}" aria-label="Open ${escapeHtml(project.title)} case study">
        ${projectTicketInnerHTML(project, { stamp: String(index + 1).padStart(2, '0'), includeVideo: true })}
      </button>
    </li>`).join('');

  elements.pathList.querySelectorAll('[data-project-id]').forEach(button => {
    button.addEventListener('click', () => {
      showProjectById(button.dataset.projectId);
      openProject(button.dataset.projectId);
    });
  });
  bindPathHoverVideo(elements.pathList);
  list.slice(0, 4).forEach(project => preloadProjectMedia(project, true));
}

function renderTimeline() {
  const orderedTimeline = [...timeline].reverse();
  elements.timeline.innerHTML = orderedTimeline.map((milestone, index) => {
    const progress = (index + .5) / orderedTimeline.length;
    const content = `
      <span class="timeline-dot" aria-hidden="true"></span>
      <span class="timeline-copy">
        <strong>${escapeHtml(milestone.year)}</strong>
        <b>${escapeHtml(milestone.title)}</b>
        <em>${escapeHtml(milestone.detail || '')}</em>
      </span>`;
    const interactive = milestone.projectId
      ? `<button type="button" data-timeline-project="${escapeHtml(milestone.projectId)}" aria-label="Open ${escapeHtml(milestone.title)} project">${content}</button>`
      : `<div>${content}</div>`;
    return `<li style="--timeline-top:${(progress * 100).toFixed(2)}%;--timeline-left:${index % 2 ? 11 : 0}px;--timeline-index:${index}">${interactive}</li>`;
  }).join('');

  elements.timeline.querySelectorAll('[data-timeline-project]').forEach(button => {
    button.addEventListener('click', () => {
      showProjectById(button.dataset.timelineProject);
      openProject(button.dataset.timelineProject);
    });
  });
}

function lockExplorer(updateHash = true) {
  if (explorerLocked || !elements.projects) return;
  explorerLocked = true;
  window.scrollTo({ top: elements.projects.offsetTop, behavior: 'auto' });
  document.documentElement.classList.add('explorer-locked');
  document.body.classList.add('explorer-locked');
  if (updateHash && !elements.dialog.open) history.replaceState({ scene: 'projects' }, '', '#projects');
}

function unlockExplorer() {
  if (!explorerLocked) return;
  explorerLocked = false;
  explorerUnlockGuard = true;
  document.documentElement.classList.remove('explorer-locked');
  document.body.classList.remove('explorer-locked');
  window.setTimeout(() => { explorerUnlockGuard = false; }, 120);
}

function goToScene(scene, updateHash = true) {
  const targets = {
    home: elements.home,
    highlights: elements.highlights,
    projects: elements.projects
  };
  const target = targets[scene];
  if (!target || sceneTransitionLocked) return;
  sceneTransitionLocked = true;
  if (scene === 'projects') {
    target.scrollIntoView({ behavior: reduceMotionQuery.matches ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(() => {
      lockExplorer(updateHash);
      sceneTransitionLocked = false;
    }, reduceMotionQuery.matches ? 30 : 420);
    return;
  }
  unlockExplorer();
  target.scrollIntoView({ behavior: reduceMotionQuery.matches ? 'auto' : 'smooth', block: 'start' });
  if (updateHash && !elements.dialog.open) history.replaceState({ scene }, '', `#${scene}`);
  window.setTimeout(() => { sceneTransitionLocked = false; }, reduceMotionQuery.matches ? 50 : 560);
}

function categoryForProject(project) {
  return 'all';
}

function showProjectById(projectId) {
  const project = projects.find(item => item.id === projectId);
  if (!project) return false;
  const category = categoryForProject(project);
  activeCategory = category;
  const list = projectsFor(category);
  categoryIndices.set(category, list.findIndex(item => item.id === projectId));
  updateCategoryControls();
  renderProject(0);
  return true;
}

function updateCategoryControls() {
  document.querySelectorAll('[data-category]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.category === activeCategory));
  });
}

function selectCategory(category) {
  if (!CATEGORY_LABELS[category] || category === activeCategory) return;
  activeCategory = category;
  updateCategoryControls();
  renderProject(0);
}

function moveProject(step) {
  const list = activeList();
  if (list.length < 2) return;
  settleWheelTo(activeIndex() + step);
}

function selectProjectAt(index) {
  const list = activeList();
  if (!list.length) return;
  settleWheelTo(clampIndex(index, list.length));
}

function renderProject(direction = 0, { skipWheel = false } = {}) {
  const list = activeList();
  const project = activeProject();
  if (!project) {
    elements.title.textContent = 'No projects yet';
    elements.description.textContent = 'This category is ready for its first project.';
    elements.tags.innerHTML = '';
    elements.wheel.innerHTML = '';
    renderProjectMedia(null);
    return;
  }

  const previousProjectId = activeProjectId;
  activeProjectId = project.id;
  transitionProjectCopy(project, direction, Boolean(previousProjectId && previousProjectId !== project.id));

  if (!skipWheel) renderWheel();
  preloadAdjacentMedia();
  renderProjectMedia(project);
}

function interpolateWheelStop(distance, center, neighbor, outer) {
  if (distance <= 1) return center + (neighbor - center) * distance;
  return neighbor + (outer - neighbor) * Math.min(1, distance - 1);
}

function wheelTransform(delta, listLength, position) {
  const compact = compactWheelQuery.matches;
  const direction = Math.sign(delta);
  const distance = Math.abs(delta);
  if (compact) {
    if (distance > 2) {
      const sideLength = Math.max(3, direction > 0 ? listLength - 1 - position : position);
      const progress = Math.max(0, Math.min(1, (distance - 2) / (sideLength - 2)));
      return [
        direction * (42 + 5 * progress),
        62 + 14 * progress,
        direction * (13 + 6 * progress),
        .5 - .1 * progress
      ];
    }
    return [
      direction * interpolateWheelStop(distance, 0, 27, 42),
      interpolateWheelStop(distance, 6, 30, 62),
      direction * interpolateWheelStop(distance, -1, 6, 13),
      interpolateWheelStop(distance, 1, .76, .5)
    ];
  }
  if (distance > 2) {
    const sideLength = Math.max(3, direction > 0 ? listLength - 1 - position : position);
    const progress = Math.max(0, Math.min(1, (distance - 2) / (sideLength - 2)));
    return [
      direction * (28 + 19 * progress),
      56 + 18 * progress,
      direction * (9 + 8 * progress),
      .62 - .18 * progress
    ];
  }
  return [
    direction * interpolateWheelStop(distance, 0, 15, 28),
    interpolateWheelStop(distance, 8, 32, 56),
    direction * interpolateWheelStop(distance, -1, 5, 9),
    interpolateWheelStop(distance, 1, .83, .62)
  ];
}

function cancelWheelMotion() {
  cancelAnimationFrame(wheelMotionFrame);
  wheelMotionFrame = 0;
  wheelMotionTime = 0;
}

function layoutWheel(position = wheelVisualIndex) {
  const list = activeList();
  if (!list.length) return;
  wheelVisualIndex = Math.max(0, Math.min(list.length - 1, position));

  elements.dial.classList.toggle('is-at-start', wheelVisualIndex <= .015);
  elements.dial.classList.toggle('is-at-end', wheelVisualIndex >= list.length - 1.015);
  const visualFocusIndex = Math.round(wheelVisualIndex);
  elements.wheel.querySelectorAll('[data-project-index]').forEach(button => {
    const index = Number(button.dataset.projectIndex);
    const delta = index - wheelVisualIndex;
    const distance = Math.abs(delta);
    const interactive = distance <= (compactWheelQuery.matches ? 1.7 : 2.35);
    const selected = index === activeIndex();
    const visualFocus = index === visualFocusIndex;
    const [x, y, rotation, scale] = wheelTransform(delta, list.length, wheelVisualIndex);
    button.classList.toggle('is-stacked', !interactive);
    button.classList.toggle('is-deep-stack', distance > (compactWheelQuery.matches ? 3 : 4));
    button.classList.toggle('is-wheel-focus', visualFocus);
    button.setAttribute('aria-selected', String(selected));
    button.setAttribute('aria-hidden', String(!interactive));
    button.tabIndex = selected && interactive ? 0 : -1;
    button.dataset.slot = delta.toFixed(3);
    const depth = visualFocus ? 10000 : Math.max(1, 8000 - Math.round(distance * 200) + (delta > 0 ? 1 : 0));
    button.style.cssText = `--slot-x:${x}vw;--slot-y:${y}px;--slot-rotation:${rotation}deg;--slot-scale:${scale};z-index:${depth};pointer-events:${interactive ? 'auto' : 'none'}`;
  });
}

function commitWheelIndex(index) {
  const list = activeList();
  const next = clampIndex(index, list.length);
  const previous = activeIndex();
  pendingWheelCommit = undefined;
  wheelVisualIndex = next;
  wheelTargetIndex = next;
  if (next !== previous) {
    categoryIndices.set(activeCategory, next);
    renderProject(Math.sign(next - previous), { skipWheel: true });
  }
  layoutWheel(next);
}

function animateWheel(timestamp) {
  const elapsed = wheelMotionTime ? Math.min(40, timestamp - wheelMotionTime) : 16;
  wheelMotionTime = timestamp;
  const difference = wheelTargetIndex - wheelVisualIndex;
  const blend = reduceMotionQuery.matches ? 1 : 1 - Math.exp(-elapsed / 72);
  wheelVisualIndex += difference * blend;
  if (Math.abs(difference) < .002) wheelVisualIndex = wheelTargetIndex;
  layoutWheel(wheelVisualIndex);
  if (wheelVisualIndex !== wheelTargetIndex) {
    wheelMotionFrame = requestAnimationFrame(animateWheel);
    return;
  }
  wheelMotionFrame = 0;
  wheelMotionTime = 0;
  if (pendingWheelCommit !== undefined) commitWheelIndex(pendingWheelCommit);
}

function startWheelMotion() {
  cancelAnimationFrame(wheelMotionFrame);
  wheelMotionTime = 0;
  wheelMotionFrame = requestAnimationFrame(animateWheel);
}

function settleWheelTo(index) {
  const list = activeList();
  if (!list.length) return;
  wheelTargetIndex = clampIndex(Math.round(index), list.length);
  pendingWheelCommit = wheelTargetIndex;
  startWheelMotion();
}

function renderWheel() {
  const list = activeList();

  if (renderedWheelCategory !== activeCategory || elements.wheel.children.length !== list.length) {
    cancelWheelMotion();
    renderedWheelCategory = activeCategory;
    elements.wheel.innerHTML = list.map((project, index) => `
        <button class="wheel-item${project.highlightOrder !== null ? ' is-highlight' : ''}" type="button" role="option" aria-selected="false" aria-label="Select ${escapeHtml(project.title)}" data-project-index="${index}">
          ${projectTicketInnerHTML(project, { stamp: String(index + 1).padStart(2, '0') })}
        </button>`).join('');
    elements.wheel.querySelectorAll('[data-project-index]').forEach(button => {
      button.addEventListener('click', event => {
        if (Date.now() < suppressWheelClickUntil) {
          event.preventDefault();
          return;
        }
        const index = Number(button.dataset.projectIndex);
        if (index === activeIndex() && Math.abs(wheelVisualIndex - index) < .025) {
          openProject(activeList()[index].id);
          return;
        }
        selectProjectAt(index);
      });
    });
  }

  wheelVisualIndex = activeIndex();
  wheelTargetIndex = wheelVisualIndex;
  pendingWheelCommit = undefined;
  layoutWheel(wheelVisualIndex);
}

function placeholderMedia(project) {
  const placeholder = document.createElement('div');
  placeholder.className = 'stage-media stage-placeholder';
  placeholder.innerHTML = project
    ? `<span>${escapeHtml(projectCategoryLabel(project))}</span><strong>${escapeHtml(project.title)}</strong>`
    : '<strong>No projects yet</strong>';
  return placeholder;
}

function mediaElement(project, preferVideo = true) {
  if (preferVideo && project.video_preview) {
    const video = document.createElement('video');
    video.className = 'stage-media';
    video.src = project.video_preview;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    return video;
  }
  if (project.image) {
    const image = document.createElement('img');
    image.className = 'stage-media';
    image.src = project.image;
    image.alt = '';
    return image;
  }
  return placeholderMedia(project);
}

function renderProjectMedia(project, preferVideo = true) {
  const token = ++mediaRenderToken;
  const next = project ? mediaElement(project, preferVideo) : placeholderMedia(null);
  elements.mediaStage.append(next);

  const reveal = () => {
    if (token !== mediaRenderToken) {
      if (next instanceof HTMLVideoElement) next.pause();
      next.remove();
      return;
    }
    requestAnimationFrame(() => next.classList.add('is-active'));
    if (next instanceof HTMLVideoElement && !reduceMotionQuery.matches) next.play().catch(() => {});
    window.setTimeout(() => {
      if (token !== mediaRenderToken) return;
      elements.mediaStage.querySelectorAll('.stage-media').forEach(item => {
        if (item === next) return;
        if (item instanceof HTMLVideoElement) item.pause();
        item.remove();
      });
    }, reduceMotionQuery.matches ? 0 : 580);
  };

  const fallback = () => {
    if (token !== mediaRenderToken) return;
    next.remove();
    if (project && preferVideo) renderProjectMedia(project, false);
    else {
      const placeholder = placeholderMedia(project);
      elements.mediaStage.append(placeholder);
      requestAnimationFrame(() => placeholder.classList.add('is-active'));
    }
  };

  if (next instanceof HTMLVideoElement) {
    next.addEventListener('loadeddata', reveal, { once: true });
    next.addEventListener('error', fallback, { once: true });
    if (next.readyState >= 2) reveal();
  } else if (next instanceof HTMLImageElement) {
    next.addEventListener('load', reveal, { once: true });
    next.addEventListener('error', fallback, { once: true });
    if (next.complete && next.naturalWidth) reveal();
  } else {
    reveal();
  }
}

function preloadProjectMedia(project, eagerVideo = false) {
  if (!project) return;
  if (project.image && !previewPreloadCache.has(project.image)) {
    const image = new Image();
    image.decoding = 'async';
    image.src = project.image;
    previewPreloadCache.set(project.image, image);
  }
  if (!project.video_preview) return;
  const cached = previewPreloadCache.get(project.video_preview);
  if (cached instanceof HTMLVideoElement) {
    if (eagerVideo && cached.preload !== 'auto') {
      cached.preload = 'auto';
      cached.load();
    }
    return;
  }
  const video = document.createElement('video');
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.preload = eagerVideo ? 'auto' : 'metadata';
  video.src = project.video_preview;
  video.load();
  previewPreloadCache.set(project.video_preview, video);
}

function preloadAdjacentMedia() {
  const list = activeList();
  if (!list.length) return;
  preloadAroundIndex(activeIndex(), list);
}

function preloadAroundIndex(index, list = activeList()) {
  const indices = new Set([-2, -1, 0, 1, 2]
    .map(offset => index + offset)
    .filter(candidate => candidate >= 0 && candidate < list.length));
  indices.forEach(candidate => preloadProjectMedia(list[candidate], true));
}

function warmCategoryEntrances() {
  const warm = () => {
    projects.forEach(project => preloadProjectMedia(project, false));
    Object.keys(CATEGORY_LABELS).forEach(category => preloadProjectMedia(projectsFor(category)[0], true));
  };
  if ('requestIdleCallback' in window) window.requestIdleCallback(warm, { timeout: 1800 });
  else window.setTimeout(warm, 700);
}

function setupFilters() {
  let categoryWheelLocked = false;
  document.querySelectorAll('[data-category]').forEach(button => {
    button.addEventListener('pointerdown', event => event.stopPropagation());
    button.addEventListener('click', event => {
      event.stopPropagation();
      selectCategory(button.dataset.category);
    });
  });

  elements.categoryOrbit?.addEventListener('wheel', event => {
    event.preventDefault();
    event.stopPropagation();
    if (categoryWheelLocked || Math.abs(event.deltaY) < 4) return;
    const current = CATEGORY_ORDER.indexOf(activeCategory);
    const direction = Math.sign(event.deltaY);
    const next = (current + direction + CATEGORY_ORDER.length) % CATEGORY_ORDER.length;
    categoryWheelLocked = true;
    selectCategory(CATEGORY_ORDER[next]);
    window.setTimeout(() => { categoryWheelLocked = false; }, 260);
  }, { passive: false });
}

function setupProjectGestures() {
  let pointer;

  elements.dial.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('.category-filter, .dial-label')) return;
    window.clearTimeout(wheelSettleTimer);
    cancelWheelMotion();
    pointer = {
      id: event.pointerId,
      startX: event.clientX,
      startPosition: wheelVisualIndex,
      moved: false
    };
  });
  elements.dial.addEventListener('pointermove', event => {
    if (!pointer || pointer.id !== event.pointerId) return;
    const distance = event.clientX - pointer.startX;
    if (Math.abs(distance) > 7 && !pointer.moved) {
      pointer.moved = true;
      elements.dial.setPointerCapture?.(event.pointerId);
      elements.dial.classList.add('is-dragging');
    }
    if (!pointer.moved) return;
    const pixelsPerProject = compactWheelQuery.matches ? 126 : 180;
    const list = activeList();
    wheelVisualIndex = Math.max(0, Math.min(list.length - 1, pointer.startPosition - distance / pixelsPerProject));
    wheelTargetIndex = wheelVisualIndex;
    layoutWheel(wheelVisualIndex);
    preloadAroundIndex(Math.round(wheelVisualIndex), list);
    event.preventDefault();
  });
  const finishDialDrag = event => {
    if (!pointer || (event?.pointerId !== undefined && pointer.id !== event.pointerId)) return;
    elements.dial.classList.remove('is-dragging');
    if (pointer.moved) suppressWheelClickUntil = Date.now() + 420;
    settleWheelTo(wheelVisualIndex);
    pointer = undefined;
  };
  elements.dial.addEventListener('pointerup', finishDialDrag);
  elements.dial.addEventListener('pointercancel', finishDialDrag);
  elements.dial.addEventListener('lostpointercapture', finishDialDrag);
  window.addEventListener('pointerup', finishDialDrag);
  window.addEventListener('pointercancel', finishDialDrag);
  window.addEventListener('blur', () => finishDialDrag());

  let sceneTouchStart;
  elements.projects.addEventListener('pointerdown', event => {
    if (!compactWheelQuery.matches || event.target.closest('button, a, .project-dial')) return;
    sceneTouchStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  });
  elements.projects.addEventListener('pointerup', event => {
    if (!sceneTouchStart || sceneTouchStart.id !== event.pointerId) return;
    const x = event.clientX - sceneTouchStart.x;
    const y = event.clientY - sceneTouchStart.y;
    if (y > 72 && Math.abs(y) > Math.abs(x) * 1.2) goToScene('highlights');
    sceneTouchStart = undefined;
  });
}

function driveWheelFromDelta(rawDelta, deltaMode) {
  const deltaScale = deltaMode === WheelEvent.DOM_DELTA_LINE
    ? 16
    : deltaMode === WheelEvent.DOM_DELTA_PAGE ? window.innerHeight : 1;
  const list = activeList();
  const delta = Math.max(-240, Math.min(240, rawDelta * deltaScale));
  const wheelStep = Math.sign(delta) * Math.min(.9, Math.sqrt(Math.abs(delta)) / 8);
  wheelTargetIndex = Math.max(0, Math.min(list.length - 1, wheelTargetIndex + wheelStep));
  pendingWheelCommit = undefined;
  preloadAroundIndex(Math.round(wheelTargetIndex), list);
  startWheelMotion();
  window.clearTimeout(wheelSettleTimer);
  wheelSettleTimer = window.setTimeout(() => settleWheelTo(wheelTargetIndex), 110);
}

function wheelAtStart() {
  return wheelVisualIndex <= .02 && wheelTargetIndex <= .02;
}

function setupSceneNavigation() {
  document.querySelectorAll('[data-go-highlights]').forEach(button => button.addEventListener('click', () => goToScene('highlights')));
  document.querySelectorAll('[data-go-projects]').forEach(button => button.addEventListener('click', () => goToScene('projects')));
  document.querySelectorAll('[data-go-home]').forEach(button => button.addEventListener('click', () => goToScene('home')));

  window.addEventListener('wheel', event => {
    if (elements.dialog.open) return;
    const rawDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;

    if (explorerLocked) {
      if (rawDelta < 0 && wheelAtStart()) {
        event.preventDefault();
        unlockExplorer();
        const top = Math.max(0, elements.projects.offsetTop - Math.min(96, window.innerHeight * .14));
        window.scrollTo({ top, behavior: 'auto' });
        if (!elements.dialog.open) history.replaceState({ scene: 'highlights' }, '', '#highlights');
        return;
      }
      event.preventDefault();
      if (sceneTransitionLocked) return;
      driveWheelFromDelta(rawDelta, event.deltaMode);
      return;
    }

    const explorerTop = elements.projects.getBoundingClientRect().top;
    if (rawDelta > 0 && explorerTop <= 4) {
      event.preventDefault();
      lockExplorer();
    }
  }, { passive: false });

  window.addEventListener('scroll', () => {
    if (explorerLocked || elements.dialog.open || sceneTransitionLocked || explorerUnlockGuard) return;
    if (elements.projects.getBoundingClientRect().top <= 1) lockExplorer();
  }, { passive: true });

  window.addEventListener('keydown', event => {
    if (elements.dialog.open) return;
    if (!explorerLocked) {
      if (event.key === 'Home') {
        event.preventDefault();
        goToScene('home');
      }
      return;
    }
    if (event.key === 'PageUp' || event.key === 'Home') {
      event.preventDefault();
      if (wheelAtStart()) goToScene('highlights');
      else if (event.key === 'Home') settleWheelTo(0);
      else moveProject(-1);
    } else if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(event.key)) {
      event.preventDefault();
      moveProject(1);
    } else if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      if (event.key === 'ArrowUp' && wheelAtStart()) {
        goToScene('highlights');
        return;
      }
      moveProject(-1);
    }
  });
}

function setupHeroParallax() {
  if (reduceMotionQuery.matches || window.matchMedia('(pointer: coarse)').matches) return;
  let frame;
  elements.home.addEventListener('pointermove', event => {
    const bounds = elements.home.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      elements.home.style.setProperty('--pointer-x', x.toFixed(3));
      elements.home.style.setProperty('--pointer-y', y.toFixed(3));
    });
  });
  elements.home.addEventListener('pointerleave', () => {
    elements.home.style.setProperty('--pointer-x', 0);
    elements.home.style.setProperty('--pointer-y', 0);
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

function pausePathVideos() {
  elements.pathList?.querySelectorAll('video').forEach(video => {
    video.pause();
    video.closest('.path-ticket')?.classList.remove('is-playing');
  });
}

async function openProject(projectId, updateHash = true) {
  const project = projects.find(item => item.id === projectId);
  if (!project) return;
  pausePathVideos();
  lastFocusedElement = document.activeElement;
  elements.dialogTitle.textContent = project.title;
  elements.dialogContent.innerHTML = '<p class="dialog-loading">LOADING CASE STUDY…</p>';
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
        <p>${escapeHtml(error.message)}. The project preview remains available in the dial.</p>
      </div>`;
  }
}

function performDialogClose() {
  if (!elements.dialog.open) return;
  markdownVideoObserver?.disconnect();
  markdownVideoObserver = undefined;
  elements.dialog.querySelectorAll('video').forEach(video => video.pause());
  elements.dialog.close();
  document.body.classList.remove('dialog-open');
  lastFocusedElement?.focus?.();
}

function closeProject(updateHash = true) {
  if (updateHash && location.hash.startsWith('#project-')) {
    history.back();
    return;
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
  if (location.hash.startsWith('#project-')) {
    const projectId = location.hash.replace('#project-', '');
    if (showProjectById(projectId)) {
      history.replaceState({ scene: 'projects' }, '', '#projects');
      goToScene('projects', false);
      history.pushState({ projectId }, '', `#project-${projectId}`);
      openProject(projectId, false);
    }
  } else if (location.hash === '#projects') {
    requestAnimationFrame(() => goToScene('projects', false));
  } else if (location.hash === '#highlights') {
    requestAnimationFrame(() => goToScene('highlights', false));
  } else if (location.hash === '#home') {
    requestAnimationFrame(() => goToScene('home', false));
  }
}

function setupHistory() {
  window.addEventListener('popstate', () => {
    if (location.hash.startsWith('#project-')) {
      const projectId = location.hash.replace('#project-', '');
      showProjectById(projectId);
      goToScene('projects', false);
      openProject(projectId, false);
      return;
    }
    performDialogClose();
    if (location.hash === '#home') goToScene('home', false);
    else if (location.hash === '#projects') goToScene('projects', false);
    else goToScene('highlights', false);
  });
}

function setupResponsiveRendering() {
  let resizeFrame;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      renderHighlightPath();
      renderWheel();
      fitProjectTitle();
    });
  });
  compactWheelQuery.addEventListener('change', renderHighlightPath);
  document.fonts?.ready.then(fitProjectTitle);
}

setupContactEmail();
renderTimeline();
renderHighlightPath();
setupFilters();
setupProjectGestures();
setupSceneNavigation();
setupHeroParallax();
setupProjectDialog();
setupHistory();
setupResponsiveRendering();
renderProject();
warmCategoryEntrances();
openInitialHash();
