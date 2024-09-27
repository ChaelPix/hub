document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const infoBoxes = document.querySelectorAll('.info-box');
    let activeIndex = 0;

    // Fonction pour afficher la bonne info-box
    function showInfo(index) {
        infoBoxes.forEach((box, i) => {
            if (i === index) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
        activeIndex = index;
    }

    // Au survol des cercles
    circles.forEach(circle => {
        circle.addEventListener('mouseenter', () => {
            const index = parseInt(circle.getAttribute('data-index'));
            showInfo(index);
        });
    });

    // Garder le dernier rectangle actif lorsque la souris quitte les cercles
    circles.forEach(circle => {
        circle.addEventListener('mouseleave', () => {
            showInfo(activeIndex);
        });
    });

    // Initialiser avec le premier info-box actif
    showInfo(activeIndex);
});
