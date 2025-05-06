import { projects } from './projects.js';

// --- Tag Category & Modern Color System ---
const TAG_CATEGORY_MAP = {
    // Languages
    'C++': 'Language', 'C#': 'Language', 'Python': 'Language', 'PHP': 'Language', 'SQL': 'Language', 'Javascript': 'Language', 'Js': 'Language',
    // Frameworks/Libraries
    'Unity': 'Framework', 'SFML': 'Framework', 'Tkinter': 'Framework', 'Tailwind CSS': 'Framework', 'OpenCV': 'Framework', 'YOLO': 'Framework', 'Regex': 'Framework', 'ROS2': 'Framework', 'ROS1': 'Framework', 'Arduino': 'Framework',
    // Platforms
    'Android': 'Platform', 'Linux': 'Platform', 'MetaXR': 'Platform',
    // Types
    'Game': 'Type', 'VR': 'Type', 'Software': 'Type', 'AI': 'Type', 'Robotics': 'Type', 'Networking': 'Type', 'GooglePlay': 'Type', 'Web': 'Type', 'Computer Vision': 'Type', 'Machine Learning': 'Type',
    // Special
    'Highlights': 'Special', 
    // Competition/Events
    'WorldSkills': 'Competition', 'Competition': 'Competition',
    // Others
    'Sphink': 'Default', 'Hypercasual MVPs': 'Default', 'School': 'Default', 'WIP': 'Default'

};

const CATEGORY_STYLE_MAP = {
    'Language':    'badge bg-sky-900 text-sky-100 border-sky-400',
    'Framework':   'badge bg-emerald-900 text-emerald-100 border-emerald-400',
    'Platform':    'badge bg-fuchsia-900 text-fuchsia-100 border-fuchsia-400',
    'Type':        'badge bg-orange-900 text-orange-100 border-orange-400',
    'Competition': 'badge bg-rose-900 text-rose-100 border-rose-400',
    'Special':     'badge bg-yellow-800 text-yellow-100 border-yellow-400',
    'Default':     'badge bg-zinc-700 text-zinc-100 border-zinc-400',
};

const CATEGORY_ORDER = [
    'Language',
    'Framework',
    'Platform',
    'Type',
    'Competition',
    'Special',
    'Default',
];

const CATEGORY_SOLID_BG_MAP = {
    'Language':    'bg-sky-300',
    'Framework':   'bg-emerald-300',
    'Platform':    'bg-fuchsia-300',
    'Type':        'bg-orange-300',
    'Competition': 'bg-rose-300',
    'Special':     'bg-yellow-300',
    'Default':     'bg-zinc-300',
};

function getTagCategory(tag) {
    return TAG_CATEGORY_MAP[tag] || 'Default';
}

function getTagStyle(tag) {
    const category = getTagCategory(tag);
    return CATEGORY_STYLE_MAP[category] || CATEGORY_STYLE_MAP['Default'];
}

function getTagSolidBg(tag) {
    const category = getTagCategory(tag);
    return CATEGORY_SOLID_BG_MAP[category] || CATEGORY_SOLID_BG_MAP['Default'];
}

function sortTagsByCategory(tags) {
    return tags.slice().sort((a, b) => {
        const catA = CATEGORY_ORDER.indexOf(getTagCategory(a));
        const catB = CATEGORY_ORDER.indexOf(getTagCategory(b));
        if (catA !== catB) return catA - catB;
        return a.localeCompare(b);
    });
}

function generateCards(filteredProjects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // clear container

    // prioritize "Highlights" projects and sort by date
    const sortedProjects = (filteredProjects || projects)
        .sort((a, b) => {
            const dateA = extractDateValue(a.date);
            const dateB = extractDateValue(b.date);

            // highlights still prioritized
            const isHighlightA = a.tags.includes("Highlights") ? 1 : 0;
            const isHighlightB = b.tags.includes("Highlights") ? 1 : 0;

            // sort by highlights first, then by date
            return isHighlightB - isHighlightA || dateB - dateA;
        });

    sortedProjects.forEach((project, index) => {
        // create card
        const card = document.createElement('div');
        card.className = `card bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-shadow duration-500 block animate-fade-in`;

        // add halo effect for "Highlights" tag
        if (project.tags.includes("Highlights")) {
            card.classList.add('ring', 'ring-accent', 'ring-offset-0');
        }

        // sort tags by category for card
        const sortedTags = sortTagsByCategory(project.tags);

        // card content
        let figureContent = '';
        if (project.video_preview) {
            // If video_preview exists, render both image and video (video hidden by default)
            figureContent = `
                <div class="relative overflow-hidden aspect-video rounded-t-xl group">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer card-img" />
                    <video src="${project.video_preview}" class="absolute inset-0 w-full h-full object-cover hidden card-video" muted loop playsinline></video>
                </div>
            `;
        } else {
            // Default: just image
            figureContent = `
                <figure class="relative overflow-hidden aspect-video rounded-t-xl">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer card-img" />
                </figure>
            `;
        }

        card.innerHTML = `
            ${figureContent}
            <div class="card-body hover:scale-105 duration-300">
                <h2 class="card-title text-base-content">${project.title}</h2>
                <p class="text-sm text-gray-500">${project.date || ''}</p>
                <p class="text-base-content">${project.description}</p>
                <div class="card-actions justify-end">
                    ${sortedTags.map(tag => `<div class="${getTagStyle(tag)} mx-0.5 my-0.5 text-xs">${tag}</div>`).join('')}
                </div>
            </div>
        `;

        // add click event to open the popup
        card.onclick = () => {
            openPopup(project.id);
        };

        // If video_preview, add hover logic to swap image/video
        if (project.video_preview) {
            const figure = card.querySelector('.group');
            const img = card.querySelector('.card-img');
            const video = card.querySelector('.card-video');
            if (figure && img && video) {
                figure.addEventListener('mouseenter', () => {
                    document.querySelectorAll('.card-video').forEach(v => {
                        if (v !== video) {
                            v.pause();
                            v.classList.add('hidden');
                            const siblingImg = v.parentElement.querySelector('.card-img');
                            if (siblingImg) siblingImg.classList.remove('hidden');
                        }
                    });
                    img.classList.add('hidden');
                    video.classList.remove('hidden');
                    video.currentTime = 0;
                    video.play();
                });
                figure.addEventListener('mouseleave', () => {
                    video.pause();
                    video.classList.add('hidden');
                    img.classList.remove('hidden');
                });
            }
        }

        container.appendChild(card);
    });
}

// helper function to extract a numerical value from the date
function extractDateValue(date) {
    if (!date) return -Infinity; // invalid or missing dates are treated as oldest

    // handle date ranges
    if (date.includes('-')) {
        const endDate = date.split('-')[1].trim(); // use the end date for sorting
        return parseDate(endDate);
    }

    // handle single dates
    return parseDate(date);
}

// helper function to convert "Month Year" into a sortable value
function parseDate(date) {
    const [month, year] = date.split(' '); // split into components
    const months = {
        January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
        July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
    };
    return parseInt(year) * 12 + (months[month] || 0); // convert to a sortable numeric value
}

let selectedTag = null;

function generateTags() {
    const tagsContainer = document.getElementById('tags-container');
    tagsContainer.innerHTML = '';
    
    // extract and count tags
    const tagOccurrences = {};
    projects.forEach(project => {
        project.tags.forEach(tag => {
            tagOccurrences[tag] = (tagOccurrences[tag] || 0) + 1;
        });
    });

    // group tags by category for sorting
    const tagsByCategory = {};
    Object.keys(tagOccurrences).forEach(tag => {
        const cat = getTagCategory(tag);
        if (!tagsByCategory[cat]) tagsByCategory[cat] = [];
        tagsByCategory[cat].push(tag);
    });

    // build sorted tag list: Reset, Highlights, then by category order
    let tagsArray = [
        "Reset",
        "Highlights",
    ];
    CATEGORY_ORDER.forEach(cat => {
        if (tagsByCategory[cat]) {
            // Remove 'Highlights' from category-sorted tags to avoid duplicate
            const filtered = tagsByCategory[cat].filter(tag => tag !== "Highlights");
            filtered.sort((a, b) => {
                const countDiff = (tagOccurrences[b] || 0) - (tagOccurrences[a] || 0);
                if (countDiff !== 0) return countDiff;
                return a.localeCompare(b);
            });
            tagsArray = tagsArray.concat(filtered);
        }
    });

    tagsArray.forEach(tag => {
        const tagButton = document.createElement('div');
        tagButton.dataset.tag = tag; // add data-tag attribute for direct selection
        if (tag === "Reset") {
            tagButton.className = 'cursor-pointer badge badge-secondary badge-outline transform hover:scale-110 duration-300';
            tagButton.textContent = tag;
            tagButton.onclick = () => {
                selectedTag = null;
                generateCards();
                generateTags(); 
                location.hash = ''; // clear hash on reset
            };
        } else if (tag === "Highlights") {
            let baseClass = `cursor-pointer ${getTagStyle(tag)} transform hover:scale-110 duration-300`;
            if (selectedTag === tag) {
                baseClass = baseClass.replace(/bg-[^\s]+-50/, 'bg-yellow-300').replace(/dark:bg-[^\s]+-900/, 'dark:bg-yellow-900');
                baseClass = baseClass.replace(/hover:scale-110/, ''); // Remove hover scale for selected
                baseClass += ' scale-110 font-bold ring-2 ring-offset-2 ring-primary/40';
            }
            tagButton.className = baseClass;
            tagButton.textContent = `${tag} (${tagOccurrences[tag] || 0})`;
            tagButton.onclick = () => {
                selectedTag = tag;
                generateCards(projects.filter(project => project.tags.includes(tag)));
                generateTags(); // re-render to update highlight
                location.hash = `#tag-${tag}`; // update URL hash for tag selection
            };
        } else {
            let baseClass = `cursor-pointer ${getTagStyle(tag)} transform hover:scale-110 duration-300`;
            if (selectedTag === tag) {
                baseClass = baseClass.replace(/bg-[^\s]+\/80/, getTagSolidBg(tag));
                baseClass = baseClass.replace(/hover:scale-110/, ''); // Remove hover scale for selected
                baseClass += ' scale-110 font-bold ring-2 ring-offset-2 ring-primary/40';
            }
            tagButton.className = baseClass;
            tagButton.textContent = `${tag} (${tagOccurrences[tag] || 0})`;
            tagButton.onclick = () => {
                selectedTag = tag;
                generateCards(projects.filter(project => project.tags.includes(tag)));
                generateTags(); // re-render to update highlight
                location.hash = `#tag-${tag}`; // update URL hash for tag selection
            };
        }
        tagsContainer.appendChild(tagButton);
    });
}

// resetTagStyles is no longer needed for tag highlight, but keep for compatibility if used elsewhere
function resetTagStyles() {
    const allTags = document.querySelectorAll('#tags-container .badge:not(.badge-secondary)');
    allTags.forEach(tag => {
        if (tag.textContent.includes("Highlights")) {
            tag.className = 'cursor-pointer badge bg-yellow-50 text-yellow-900 border-yellow-300 transform hover:scale-110 duration-300';
        } else {
            const tagName = tag.dataset.tag;
            let baseClass = `cursor-pointer ${getTagStyle(tagName)} transform hover:scale-110 duration-300`;
            if (selectedTag === tagName) {
                baseClass = baseClass.replace(/bg-[^\s]+\/80/, getTagSolidBg(tagName));
            }
            tag.className = baseClass;
        }
    });
}

// update openPopup to use "project-" prefix in URL
function openPopup(projectId) {
    // find the project by ID
    const project = projects.find(p => p.id === projectId);
    if (!project) {
        console.error('Project not found');
        return;
    }

    // show the popup
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');

    // block main page scroll
    document.body.classList.add('no-scroll');
    history.pushState(null, null, `#project-${projectId}`);  // updated hash prefix
    // update the project title in the toolbar
    const projectUrl = document.getElementById('project-url');
    projectUrl.textContent = project.title;

    // dynamically load the associated HTML
    const contentContainer = document.getElementById('popup-content');
    fetch(`projects/${projectId}.html`) // assumes all project HTML files are in "projects/" folder
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load project content: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            contentContainer.innerHTML = html; // insert loaded HTML into popup
        })
        .catch(error => {
            contentContainer.innerHTML = `<p class="text-red-500">Erreur : ${error.message}</p>`;
        });
}

// modify checkForProjectIdInUrl to support hash-based tag selection
function checkForProjectIdInUrl() {
    const hash = location.hash;
    if (hash) {
        if (hash.startsWith('#tag-')) {
            const tag = hash.substring(5); // remove '#tag-'
            const tagButton = document.querySelector(`#tags-container .badge[data-tag="${tag}"]`);
            if (tagButton) tagButton.click();
        } else if (hash.startsWith('#project-')) {
            const projectId = hash.substring(9); // remove '#project-'
            openPopup(projectId);
        } else {
            const projectId = hash.substring(1);
            openPopup(projectId);
        }
    }
}
// close popup
window.closePopup = function () {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
    document.getElementById('popup-content').innerHTML = '';
    document.body.classList.remove('no-scroll');

    history.pushState(null, null, ' ');
};

document.addEventListener('DOMContentLoaded', () => {
    generateTags();
    generateCards();
    checkForProjectIdInUrl();
    
    const popup = document.getElementById('popup');
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            window.closePopup();
        }
    });
});

generateTags();
generateCards();
