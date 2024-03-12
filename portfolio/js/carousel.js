let currentIndex = 0;
const pages = document.querySelectorAll('.carousel-page');
const totalPages = pages.length;

function updateArrowVisibility() {
    const prevArrow = document.querySelector('.carousel-prev');
    const nextArrow = document.querySelector('.carousel-next');

    if (currentIndex === 0) {
        prevArrow.style.display = 'none'; 
    } else {
        prevArrow.style.display = 'block'; 
    }

    if (currentIndex === totalPages - 1) {
        nextArrow.style.display = 'none'; 
    } else {
        nextArrow.style.display = 'block'; 
    }
}

function fadeInElements(page) {
    const elementsToFadeIn = page.querySelectorAll('h2, .carousel-images img, .carousel-description, p');

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
    const currentPage = pages[currentIndex];
    const elementsToFadeOut = currentPage.querySelectorAll('h2, .carousel-images img, .carousel-description, p');
    elementsToFadeOut.forEach(element => element.style.opacity = 0);
    
    currentIndex = (currentIndex + n + totalPages) % totalPages;

    const newPage = pages[currentIndex];
    fadeInElements(newPage); 

    document.querySelector('.carousel-container').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateArrowVisibility();
}

document.addEventListener("DOMContentLoaded", () => {
    fadeInElements(pages[currentIndex]);
});

