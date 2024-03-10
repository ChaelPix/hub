let currentIndex = 0;
const pages = document.querySelectorAll('.carousel-page');
const totalPages = pages.length;

function updateArrowVisibility() {
    const prevArrow = document.querySelector('.carousel-prev');
    const nextArrow = document.querySelector('.carousel-next');

    if (currentIndex === 0) {
        prevArrow.style.display = 'none'; // Cache la flèche gauche si sur la première page
    } else {
        prevArrow.style.display = 'block'; // Affiche la flèche gauche si pas sur la première page
    }

    if (currentIndex === totalPages - 1) {
        nextArrow.style.display = 'none'; // Cache la flèche droite si sur la dernière page
    } else {
        nextArrow.style.display = 'block'; // Affiche la flèche droite si pas sur la dernière page
    }
}

// Fonction pour ajouter l'animation fade-in aux éléments
function fadeInElements(page) {
    // Sélection de tous les éléments à animer
    const elementsToFadeIn = page.querySelectorAll('h2, .carousel-images img, .carousel-description');

    elementsToFadeIn.forEach((element, index) => {
        element.style.opacity = 0;
    });
    elementsToFadeIn.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
        }, (index + 1) * 300); 
    });
}

document.querySelector('.carousel-next').addEventListener('click', function() {
    changePage(1);
});

document.querySelector('.carousel-prev').addEventListener('click', function() {
    changePage(-1);
});

function changePage(n) {
    // Retirer la classe fade-in de tous les éléments de la page actuelle
    const currentPage = pages[currentIndex];
    const elementsToFadeOut = currentPage.querySelectorAll('h2, .carousel-images img, .carousel-description');
    elementsToFadeOut.forEach(element => element.style.opacity = 0);
    
    currentIndex = (currentIndex + n + totalPages) % totalPages;

    // Sélectionner la nouvelle page et y appliquer fade-in
    const newPage = pages[currentIndex];
    fadeInElements(newPage); // Appel de la fonction pour animer les éléments

    document.querySelector('.carousel-container').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateArrowVisibility();
}

// Initialise le carrousel pour afficher la première page avec l'animation
document.addEventListener("DOMContentLoaded", () => {
    fadeInElements(pages[currentIndex]);
});
