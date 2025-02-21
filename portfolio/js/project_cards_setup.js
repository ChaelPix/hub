import { projects } from './projects.js';

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
        card.className = `card bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-shadow duration-500 block animate-fade-in `;

        // add halo effect for "Highlights" tag
        if (project.tags.includes("Highlights")) {
            card.classList.add('ring', 'ring-accent', 'ring-offset-2');
        }

        // card content
        card.innerHTML = `
            <figure class="relative overflow-hidden aspect-video">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </figure>
            <div class="card-body hover:scale-105 duration-300">
                <h2 class="card-title text-base-content">${project.title}</h2>
                <p class="text-sm text-gray-500">${project.date || ''}</p>
                <p class="text-base-content">${project.description}</p>
                <div class="card-actions justify-end">
                    ${project.tags.map(tag => `<div class="text-base-content badge badge-outline hover:scale-105 duration-300">${tag}</div>`).join('')}
                </div>
            </div>
        `;

        // add click event to open the popup
        card.onclick = () => {
            openPopup(project.id);
        };

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




function generateTags() {
    const tagsContainer = document.getElementById('tags-container');
    tagsContainer.innerHTML = '';
    
    //extract and count tags
    const tagOccurrences = {};
    projects.forEach(project => {
        project.tags.forEach(tag => {
            tagOccurrences[tag] = (tagOccurrences[tag] || 0) + 1;
        });
    });

    // ensure "Highlights" is the second tag
    const tagsArray = [
        "Reset",
        "Highlights",
        ...Array.from(Object.keys(tagOccurrences))
            .filter(tag => tag !== "Highlights")
            .sort((a, b) => a.localeCompare(b)) // sort alphabetically
    ];

    tagsArray.forEach(tag => {
        const tagButton = document.createElement('div');

        // apply unique styles for reset and highlights tags
        if (tag === "Reset") {
            tagButton.className = 'cursor-pointer badge badge-secondary badge-outline transform hover:scale-110 duration-300';
            tagButton.textContent = tag;
            tagButton.onclick = () => {
                generateCards();
                resetTagStyles();
            };
        } else if (tag === "Highlights") {
            tagButton.className = 'cursor-pointer badge badge-accent badge-outline transform scale-110'; // filled with accent color
            tagButton.textContent = `${tag} (${tagOccurrences[tag] || 0})`;
            tagButton.onclick = () => {
                resetTagStyles();
                tagButton.className = 'cursor-pointer badge badge-accent transform scale-110';
                const filteredProjects = projects.filter(project => project.tags.includes(tag));
                generateCards(filteredProjects);
            };
        } else {
            tagButton.className = 'cursor-pointer badge badge-primary badge-outline transform hover:scale-110 duration-300';
            tagButton.textContent = `${tag} (${tagOccurrences[tag] || 0})`;
            tagButton.onclick = () => {
                resetTagStyles();
                tagButton.className = 'cursor-pointer badge badge-primary transform scale-110'; // filled
                const filteredProjects = projects.filter(project => project.tags.includes(tag));
                generateCards(filteredProjects);
            };
        }

        tagsContainer.appendChild(tagButton);
    });
}

// reset tag styles
function resetTagStyles() {
    const allTags = document.querySelectorAll('#tags-container .badge:not(.badge-secondary)');
    allTags.forEach(tag => {
        if (tag.textContent.includes("Highlights")) {
            tag.className = 'cursor-pointer badge badge-accent badge-outline transform hover:scale-110 duration-300';
        } else {
            tag.className = 'cursor-pointer badge badge-primary badge-outline transform hover:scale-110 duration-300';
        }
    });
}

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
    history.pushState(null, null, `#${projectId}`);
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

function checkForProjectIdInUrl() {
    const hash = location.hash;
    if (hash) {
        const projectId = hash.substring(1);
        openPopup(projectId);
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
