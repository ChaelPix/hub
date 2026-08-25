import { existsSync, readFileSync } from 'node:fs';

function importSource(path) {
  const source = readFileSync(path, 'utf8');
  return import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
}

const [{ projects }, { timeline }, { publications }] = await Promise.all([
  importSource('./js/projects.js'),
  importSource('./js/timeline.js'),
  importSource('./js/publications.js')
]);

const errors = [];
const ids = new Set();
const highlightOrders = new Set();

projects.forEach((project, index) => {
  const location = `projects[${index}] (${project.id || 'missing id'})`;
  if (!project.id || ids.has(project.id)) errors.push(`${location}: id must be present and unique`);
  ids.add(project.id);
  if (!project.title || !project.description || !project.date) errors.push(`${location}: title, description, and date are required`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(project.sortDate || '')) errors.push(`${location}: sortDate must use YYYY-MM-DD`);
  const validCategories = new Set(['robotics', 'games', 'xr', 'other']);
  if (project.categories !== undefined) {
    if (!Array.isArray(project.categories) || !project.categories.length || project.categories.some(category => !validCategories.has(category))) {
      errors.push(`${location}: categories must be a non-empty array using robotics, games, xr, or other`);
    }
  } else if (!validCategories.has(project.category)) {
    errors.push(`${location}: invalid legacy category`);
  }
  if (project.highlightOrder !== null && !Number.isFinite(project.highlightOrder)) errors.push(`${location}: highlightOrder must be a number or null`);
  if (Number.isFinite(project.highlightOrder)) {
    if (highlightOrders.has(project.highlightOrder)) errors.push(`${location}: highlightOrder must be unique`);
    highlightOrders.add(project.highlightOrder);
  }
  ['image', 'video_preview'].forEach(field => {
    if (project[field] && !existsSync(project[field])) errors.push(`${location}: ${field} does not exist (${project[field]})`);
  });
});

timeline.forEach((milestone, index) => {
  if (!milestone.year || !milestone.title) errors.push(`timeline[${index}]: year and title are required`);
  if (milestone.section && !['experience', 'competition'].includes(milestone.section)) {
    errors.push(`timeline[${index}]: section must be experience or competition`);
  }
  if (milestone.image && !existsSync(milestone.image)) errors.push(`timeline[${index}]: image does not exist (${milestone.image})`);
  if (milestone.projectId && !ids.has(milestone.projectId)) errors.push(`timeline[${index}]: unknown projectId ${milestone.projectId}`);
});

publications.forEach((paper, index) => {
  const location = `publications[${index}]`;
  if (!paper.title || !paper.venue || !paper.type || !paper.place || !paper.date || !paper.url) {
    errors.push(`${location}: title, venue, type, place, date, and url are required`);
  }
  ['image', 'logo'].forEach(field => {
    if (paper[field] && !existsSync(paper[field])) errors.push(`${location}: ${field} does not exist (${paper[field]})`);
  });
});

const html = readFileSync('./index.html', 'utf8');
if (!html.includes('id="about"')) errors.push('index.html: missing about landmark (#about)');
if (!html.includes('id="timeline"')) errors.push('index.html: missing timeline landmark (#timeline)');
if (!html.includes('id="publications"')) errors.push('index.html: missing publications landmark (#publications)');
if (!html.includes('id="projects"')) errors.push('index.html: missing projects landmark (#projects)');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Portfolio check passed: ${projects.length} projects, ${timeline.length} milestones, ${publications.length} publications, about + timeline + publications + projects.`);
}
