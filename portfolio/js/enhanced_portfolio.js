import { projects } from './projects.js';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

// Dev Vibes Entry Animation
function initDevVibesAnimation() {
    // Remove code loader after image loads
    setTimeout(() => {
        const codeLoader = document.querySelector('.code-loader');
        if (codeLoader) {
            codeLoader.style.opacity = '0';
            setTimeout(() => {
                codeLoader.remove();
            }, 300);
        }
    }, 800);
}

// --- Tag Category & Modern Color System ---
const TAG_CATEGORY_MAP = {
    // Languages
    'C++': 'Language', 'C#': 'Language', 'Python': 'Language', 'PHP/SQL': 'Language', 'Javascript': 'Language', 'Js': 'Language',
    // Frameworks/Libraries
    'Unity': 'Framework', 'SFML C++': 'Framework', 'Tkinter': 'Framework', 'Tailwind CSS': 'Framework', 'OpenCV': 'Framework', 'YOLO': 'Framework', 'Regex': 'Framework', 'ROS2': 'Framework', 'ROS1': 'Framework', 'Arduino': 'Framework',
    // Platforms
    'Android': 'Platform', 'Linux': 'Platform', 'MetaXR': 'Platform',
    // Types
    'Game': 'Type', 'VR': 'Type', 'Software': 'Type', 'AI': 'Type', 'Robotics': 'Type', 'Networking': 'Type', 'PlayStore': 'Competition', 'Web': 'Type', 'Computer Vision': 'Type', 'Machine Learning': 'Type', 'LLM': 'Type',
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
    'Type',
    'Platform',
    'Competition',
    'Special',
    'Default',
];

function getTagCategory(tag) {
    return TAG_CATEGORY_MAP[tag] || 'Default';
}

function getTagStyle(tag) {
    const category = getTagCategory(tag);
    return CATEGORY_STYLE_MAP[category] || CATEGORY_STYLE_MAP['Default'];
}

function sortTagsByCategory(tags) {
    return tags.slice().sort((a, b) => {
        const catA = CATEGORY_ORDER.indexOf(getTagCategory(a));
        const catB = CATEGORY_ORDER.indexOf(getTagCategory(b));
        if (catA !== catB) return catA - catB;
        return a.localeCompare(b);
    });
}

// Backend-only tags that shouldn't be displayed as badges
function isBackendTag(tag) {
    // support multiple spellings just in case
    const backendTags = new Set(['Highlights', 'highlights', 'hihlights', 'AIproject', 'Aiproject', 'gameProject']);
    return backendTags.has(tag);
}

// Categorize projects
function categorizeProjects() {
    const isHighlight = (p) => ['Highlights', 'highlights', 'hihlights'].some(t => p.tags.includes(t));
    const isGame = (p) => p.tags.includes('gameProject');
    const isAI = (p) => p.tags.includes('AIproject') || p.tags.includes('Aiproject');

    const highlights = projects.filter(isHighlight);
    const games = projects.filter(p => isGame(p) && !isHighlight(p));
    // projects container = AI projects section; strictly AI tags only
    const regularProjects = projects.filter(p => isAI(p) && !isHighlight(p) && !isGame(p));

    return { highlights, games, regularProjects };
}

// Create highlight card (special design)
function createHighlightCard(project) {
    const card = document.createElement('div');
    card.className = 'highlight-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center';

    const tagList = project.tags.filter(t => !isBackendTag(t));
    const sortedTags = sortTagsByCategory(tagList);
    
    let mediaContent = '';
    if (project.video_preview) {
        const cacheBuster = `v=1&id=${encodeURIComponent(project.id)}`;
        const videoSrc = project.video_preview.includes('?')
            ? `${project.video_preview}&${cacheBuster}`
            : `${project.video_preview}?${cacheBuster}`;
        mediaContent = `
            <div class="highlight-media group aspect-video cursor-pointer">
                <img src="${project.image}" alt="${project.title}" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 card-img" />
                <video src="${videoSrc}"
                       class="absolute inset-0 w-full h-full object-cover hidden card-video"
                       muted loop playsinline preload="metadata"></video>
            </div>
        `;
    } else {
        mediaContent = `
            <div class="highlight-media aspect-video">
                <img src="${project.image}" alt="${project.title}" 
                     class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
        `;
    }

    card.innerHTML = `
        ${mediaContent}
        <div class="space-y-8">
            <div class="space-y-6">
                <h3 class="font-display text-3xl lg:text-4xl font-black text-white leading-tight">${project.title}</h3>
                <p class="text-white/80 text-lg leading-relaxed">${project.description}</p>
                ${project.date ? `<p class="text-sm font-medium text-gradient">${project.date}</p>` : ''}
            </div>
            <div class="flex flex-wrap gap-2">
                ${sortedTags.map(tag => `<div class="${getTagStyle(tag)} text-xs px-3 py-1.5 rounded-full font-medium">${tag}</div>`).join('')}
            </div>
            <button class="btn-premium text-white inline-flex items-center" onclick="openPopup('${project.id}')">
                Learn More
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </button>
        </div>
    `;

    // Add video hover functionality
    if (project.video_preview) {
        const mediaDiv = card.querySelector('.group');
        const img = card.querySelector('.card-img');
        const video = card.querySelector('.card-video');
        if (mediaDiv && img && video) {
            mediaDiv.addEventListener('mouseenter', () => {
                img.classList.add('hidden');
                video.classList.remove('hidden');
                video.currentTime = 0;
                video.play();
            });
            mediaDiv.addEventListener('mouseleave', () => {
                video.pause();
                video.classList.add('hidden');
                img.classList.remove('hidden');
            });
        }
    }

    return card;
}

// Create regular project card
function createProjectCard(project, isSmall = false, noClamp = false) {
    const card = document.createElement('div');
    const isPortrait = !!project.isPortrait;
    const cardClasses = isSmall 
        ? `game-card cursor-pointer transform transition-all duration-300 ${isPortrait ? 'min-h-[380px]' : ''}`
        : 'premium-card cursor-pointer transform transition-all duration-400';
    
    card.className = cardClasses;

    const tagList = project.tags.filter(t => !isBackendTag(t));
    const sortedTags = sortTagsByCategory(tagList);

    let figureContent = '';
    const mediaWrapperClass = isPortrait && isSmall
        ? 'card-media h-full min-h-[220px] group relative overflow-hidden rounded-l-xl'
        : `card-media ${isSmall ? 'aspect-video' : 'aspect-video'} group relative overflow-hidden ${isSmall ? 'rounded-t-xl' : 'rounded-t-xl'}`;
    if (project.video_preview) {
        const cacheBuster = `v=1&id=${encodeURIComponent(project.id)}`;
        const videoSrc = project.video_preview.includes('?')
            ? `${project.video_preview}&${cacheBuster}`
            : `${project.video_preview}?${cacheBuster}`;
        figureContent = `
                        <div class="${mediaWrapperClass}">
                                <img src="${project.image}" alt="${project.title}" 
                                         class="w-full h-full ${isPortrait ? 'object-cover' : 'object-cover'} transition-transform duration-500 ${isPortrait ? '' : 'group-hover:scale-110'} card-img" />
                <video src="${videoSrc}"
                                             class="absolute inset-0 w-full h-full ${isPortrait ? 'object-cover' : 'object-cover'} hidden card-video"
                       muted loop playsinline preload="metadata"></video>
            </div>
        `;
    } else {
        figureContent = `
            <div class="${mediaWrapperClass}">
                <img src="${project.image}" alt="${project.title}" 
                     class="w-full h-full ${isPortrait ? 'object-cover' : 'object-cover'} transition-transform duration-500 ${isPortrait ? '' : 'hover:scale-110'}" />
            </div>
        `;
    }

    const cardBodyClasses = isSmall ? 'p-4 space-y-3' : 'p-6 space-y-4';
    const titleClasses = isSmall ? 'font-display text-lg font-bold text-white leading-tight' : 'font-display text-xl font-bold text-white';
    const dateClasses = isSmall ? 'text-sm text-white/50 font-medium' : 'text-sm text-white/60 font-medium';
    const descriptionClasses = isSmall
        ? `text-sm text-white/70`
        : 'text-white/80 leading-relaxed';

    if (isPortrait && isSmall) {
        // Side-by-side layout for portrait small cards
        card.innerHTML = `
            <div class="grid grid-cols-2 gap-0 items-stretch h-full">
                <div class="col-span-1 h-full">${figureContent}</div>
                <div class="col-span-1 h-full flex flex-col justify-between ${cardBodyClasses}">
                    <div class="space-y-2">
                        <h2 class="${titleClasses}">${project.title}</h2>
                        ${project.date ? `<p class="${dateClasses}">${project.date}</p>` : ''}
                        <p class="${descriptionClasses}">${project.description}</p>
                    </div>
                    <div class="flex flex-wrap gap-1.5 mt-2">
                        ${sortedTags.map(tag => 
                            `<div class="${getTagStyle(tag)} ${isSmall ? 'text-xs px-2 py-1' : 'text-xs px-2.5 py-1'} rounded-full font-medium">${tag}</div>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    } else {
        // Default stacked layout
        card.innerHTML = `
            ${figureContent}
            <div class="${cardBodyClasses}">
                <div class="space-y-2">
                    <h2 class="${titleClasses}">${project.title}</h2>
                    ${project.date ? `<p class="${dateClasses}">${project.date}</p>` : ''}
                    <p class="${descriptionClasses}">${project.description}</p>
                </div>
                <div class="flex flex-wrap gap-1.5">
                    ${sortedTags.map(tag => 
                        `<div class="${getTagStyle(tag)} ${isSmall ? 'text-xs px-2 py-1' : 'text-xs px-2.5 py-1'} rounded-full font-medium">${tag}</div>`
                    ).join('')}
                </div>
            </div>
        `;
    }

    // Add click event
    card.onclick = () => openPopup(project.id);

    // Add video hover functionality
    if (project.video_preview) {
        const figure = card.querySelector('.group');
        const img = card.querySelector('.card-img');
        const video = card.querySelector('.card-video');
        if (figure && img && video) {
            figure.addEventListener('mouseenter', () => {
                // Pause all other videos
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

    return card;
}

// Generate all project sections
function generateProjectSections() {
    const { highlights, games, regularProjects } = categorizeProjects();

    // Sort by date
    const sortByDate = (a, b) => {
        const dateA = extractDateValue(a.date);
        const dateB = extractDateValue(b.date);
        return dateB - dateA;
    };

    highlights.sort(sortByDate);
    regularProjects.sort(sortByDate);
    games.sort(sortByDate);

    // Generate highlights
    const highlightsContainer = document.getElementById('highlights-container');
    if (highlightsContainer) {
        highlightsContainer.innerHTML = '';
        highlights.forEach((project, index) => {
            const card = createHighlightCard(project);
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-fade-in');
            highlightsContainer.appendChild(card);
        });
    }

    // Generate AI projects in the projects container using the same layout as games (small cards, no truncation)
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = '';
        regularProjects.forEach((project, index) => {
            const card = createProjectCard(project, true, true);
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-fade-in');
            projectsContainer.appendChild(card);
        });
    }

    // Generate games
    const gamesContainer = document.getElementById('games-container');
    if (gamesContainer) {
        gamesContainer.innerHTML = '';
        games.forEach((project, index) => {
            const card = createProjectCard(project, true);
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-fade-in');
            gamesContainer.appendChild(card);
        });
    }
}

// Scroll tracking and navigation
function initScrollTracking() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['home', 'highlights', 'projects', 'games', 'contact'];

    // Update active nav link based on scroll position
    function updateActiveNavigation() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        let activeSection = 'home';
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                // Check if section is in viewport (with some offset)
                if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.4) {
                    activeSection = sectionId;
                }
            }
        });

        navLinks.forEach(link => {
            const target = link.getAttribute('data-target');
            if (target === activeSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Add click handlers for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            const section = document.getElementById(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add smooth scroll to all smooth-scroll elements
    document.querySelectorAll('.smooth-scroll').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const href = element.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Update on scroll
    window.addEventListener('scroll', updateActiveNavigation);
    updateActiveNavigation(); // Initial call
}

// Helper functions
function extractDateValue(date) {
    if (!date) return -Infinity;
    if (date.includes('-')) {
        const endDate = date.split('-')[1].trim();
        return parseDate(endDate);
    }
    return parseDate(date);
}

function parseDate(date) {
    const [month, year] = date.split(' ');
    const months = {
        January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
        July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
    };
    return parseInt(year) * 12 + (months[month] || 0);
}

// Popup functionality (updated for Markdown)
function openPopup(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) {
        console.error('Project not found');
        return;
    }

    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    document.documentElement.classList.add('no-scroll');
    history.pushState(null, null, `#project-${projectId}`);

    const projectUrl = document.getElementById('project-url');
    projectUrl.textContent = project.title;

    const contentContainer = document.getElementById('popup-content');
    
    // Show loading state
    contentContainer.innerHTML = '<div class="flex justify-center items-center py-12"><div class="loading loading-spinner loading-lg"></div></div>';
    
    // Load markdown file
    fetch(`projects/${projectId}.md`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load project content: ${response.statusText}`);
            }
            return response.text();
        })
        .then(markdown => {
            // Configure marked for better rendering
            marked.setOptions({
                breaks: true,
                gfm: true
            });
            
            // Convert markdown to HTML
            const html = marked.parse(markdown);
            
            // Apply styling wrapper for better presentation
            contentContainer.innerHTML = `
                <div class="markdown-content prose prose-invert prose-lg max-w-none">
                    ${html}
                </div>
            `;
            
            // Process any special elements after rendering
            processMarkdownElements(contentContainer);
        })
        .catch(error => {
            contentContainer.innerHTML = `
                <div class="text-center py-12">
                    <div class="text-red-400 text-lg mb-4">❌ Error loading project content</div>
                    <p class="text-red-300">${error.message}</p>
                    <p class="text-gray-400 text-sm mt-2">Looking for: projects/${projectId}.md</p>
                </div>
            `;
        });
}

// Process special markdown elements for better styling
function processMarkdownElements(container) {
    // Center images
    container.querySelectorAll('img').forEach(img => {
        img.className = 'mx-auto rounded-lg shadow-lg max-w-full h-auto';
        
        // Add loading lazy for performance
        img.loading = 'lazy';
        
        // Wrap standalone images in a figure for better spacing
        if (img.parentNode.tagName === 'P' && img.parentNode.children.length === 1) {
            const figure = document.createElement('figure');
            figure.className = 'my-8';
            img.parentNode.insertBefore(figure, img);
            figure.appendChild(img);
            if (img.parentNode.children.length === 0) {
                img.parentNode.remove();
            }
        }
    });
    
    // Style videos
    container.querySelectorAll('video').forEach(video => {
        video.className = 'mx-auto rounded-lg shadow-lg max-w-full h-auto';
        video.controls = true;
        video.loading = 'lazy';
        
        // Wrap videos in figure for consistency
        if (video.parentNode.tagName === 'P') {
            const figure = document.createElement('figure');
            figure.className = 'my-8';
            video.parentNode.insertBefore(figure, video);
            figure.appendChild(video);
            if (video.parentNode.children.length === 0) {
                video.parentNode.remove();
            }
        }
    });
    
    // Process grid layouts (look for comments like <!-- grid-2 --> or <!-- grid-3 -->)
    const gridComments = [];
    const walker = document.createTreeWalker(
        container,
        NodeFilter.SHOW_COMMENT,
        null,
        false
    );
    
    let node;
    while (node = walker.nextNode()) {
        if (node.nodeValue.trim().startsWith('grid-')) {
            gridComments.push(node);
        }
    }
    
    gridComments.forEach(comment => {
        const gridType = comment.nodeValue.trim();
        const match = gridType.match(/grid-(\d+)/);
        if (match) {
            const cols = parseInt(match[1]);
            const gridContainer = document.createElement('div');
            gridContainer.className = `grid grid-cols-1 md:grid-cols-${cols} gap-6 my-8`;
            
            // Collect following elements until next grid comment or end
            let current = comment.nextSibling;
            const elements = [];
            
            while (current) {
                if (current.nodeType === Node.COMMENT_NODE && current.nodeValue.trim() === 'end-grid') {
                    current.remove();
                    break;
                }
                if (current.nodeType === Node.ELEMENT_NODE) {
                    elements.push(current);
                    const next = current.nextSibling;
                    current.remove();
                    current = next;
                } else {
                    current = current.nextSibling;
                }
            }
            
            // Add elements to grid
            elements.forEach(el => {
                if (el.tagName === 'P' && el.children.length === 1 && 
                    (el.children[0].tagName === 'IMG' || el.children[0].tagName === 'VIDEO')) {
                    // Move media element directly to grid
                    gridContainer.appendChild(el.children[0]);
                } else {
                    gridContainer.appendChild(el);
                }
            });
            
            // Insert grid container
            comment.parentNode.insertBefore(gridContainer, comment);
            comment.remove();
        }
    });
    
    // Style links
    container.querySelectorAll('a').forEach(link => {
        link.className = 'text-blue-400 hover:text-blue-300 underline transition-colors';
        // Open external links in new tab
        if (link.href && !link.href.startsWith(window.location.origin)) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
    
    // Style code blocks
    container.querySelectorAll('pre').forEach(pre => {
        pre.className = 'bg-gray-900 rounded-lg p-4 overflow-x-auto';
    });
    
    container.querySelectorAll('code').forEach(code => {
        if (code.parentNode.tagName !== 'PRE') {
            code.className = 'bg-gray-800 px-2 py-1 rounded text-sm';
        }
    });
    
    // Style blockquotes
    container.querySelectorAll('blockquote').forEach(blockquote => {
        blockquote.className = 'border-l-4 border-blue-500 pl-4 italic text-gray-300 my-4';
    });
}

function checkForProjectIdInUrl() {
    const hash = location.hash;
    if (hash) {
        if (hash.startsWith('#project-')) {
            const projectId = hash.substring(9);
            openPopup(projectId);
        } else {
            const projectId = hash.substring(1);
            openPopup(projectId);
        }
    }
}

window.closePopup = function () {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
    document.getElementById('popup-content').innerHTML = '';
    document.documentElement.classList.remove('no-scroll');
    history.pushState(null, null, ' ');
};

// Make openPopup globally available
window.openPopup = openPopup;

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    generateProjectSections();
    initScrollTracking();
    checkForProjectIdInUrl();
    
    const popup = document.getElementById('popup');
    popup.addEventListener('click', (event) => {
        const container = popup.querySelector('[data-popup-container]');
        if (!container) return;
        const clickedInside = container.contains(event.target);
        if (!clickedInside) {
            window.closePopup();
        }
    });

    document.addEventListener('keydown', (e) => {
        const isVisible = !popup.classList.contains('hidden');
        if (isVisible && e.key === 'Escape') {
            window.closePopup();
        }
    });

    // Initialize dev vibes animation
    initDevVibesAnimation();
});

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    // Do nothing, wait for DOMContentLoaded
} else {
    // DOM is already loaded
    generateProjectSections();
    initScrollTracking();
}

// Outside click close is handled by the overlay click listener on #popup
