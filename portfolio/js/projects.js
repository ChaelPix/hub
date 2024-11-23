// project data
const projects = [
    {
        "title": "WORLDSKILLS LYON24 🏅 - ROS2 Autonomous Robot",
        "description": "I built for the <b>international competition</b> of Worldskills a robot ables to navigate and interract with environnement by using his arm.",
        "image": "img/worldskills/pict_pixx_1.jpg",
        "tags": ["Highlights", "Robotics", "ROS2", "C++", "Python", "YOLO", "OpenCV"],
        "category": "worldskills",
        "id": "portfolio-website"
    },
    {
        "title": "AustriaSkills23 - ROS2 Autonomous Robot",
        "description": "I built for the Worldskills Austria national competition a little robot ables to navigate autonomously",
        "image": "img/worldskills/robot_austria.jpg",
        "tags": ["Robotics", "ROS2", "C++"],
        "category": "worldskills",
        "id": "portfolio-website"
    },
    {
        "title": "Wordskills FNAT 23 🥈 - ROS1 Autonomous Robot",
        "description": "I built for the the <b>national competition</b> of Worldskills a little robot ables to navigate autonomously",
        "image": "img/worldskills/robot_fnat.jpg",
        "tags": ["Robotics", "ROS1", "C++", "OpenCV"],
        "category": "worldskills",
        "id": "portfolio-website"
    },
];

function generateCards(filteredProjects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // clear container

    (filteredProjects || projects).forEach((project, index) => {
        // create card
        const card = document.createElement('a');
        card.href = `src/xxx.html?category=${project.category}&id=${project.id}`;
        card.className = `card bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-shadow duration-500 block animate-slide-in-up`;
        card.style.animationDelay = `${index * 0.05}s`;

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
                <h2 class="card-title">${project.title}</h2>
                <p>${project.description}</p>
                <div class="card-actions justify-end">
                    ${project.tags.map(tag => `<div class="badge badge-outline hover:scale-105 duration-300">${tag}</div>`).join('')}
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

function generateTags() {
    const tagsContainer = document.getElementById('tags-container');
    tagsContainer.innerHTML = '';

    // extract unique tags
    const allTags = new Set();
    projects.forEach(project => project.tags.forEach(tag => allTags.add(tag)));

    // ensure "Highlights" is the second tag
    const tagsArray = [
        "Reset",
        "Highlights",
        ...Array.from(allTags)
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
            tagButton.textContent = tag;
            tagButton.onclick = () => {
                resetTagStyles();
                tagButton.className = 'cursor-pointer badge badge-accent transform scale-110';
                const filteredProjects = projects.filter(project => project.tags.includes(tag));
                generateCards(filteredProjects);
            };
        } else {
            tagButton.className = 'cursor-pointer badge badge-primary badge-outline transform hover:scale-110 duration-300';
            tagButton.textContent = tag;
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
        if (tag.textContent === "Highlights") {
            tag.className = 'cursor-pointer badge badge-accent badge-outline transform hover:scale-110 duration-300';
        } else {
            tag.className = 'cursor-pointer badge badge-primary badge-outline transform hover:scale-110 duration-300';
        }
    });
}

generateTags();
generateCards();
