document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const infoBoxes = document.querySelectorAll('.info-box');
    let activeIndex = 0;

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        const triangleTop = document.querySelector('.triangle-top');
        const triangleBottom = document.querySelector('.triangle-bottom');

        triangleTop.style.animationName = 'slideTopClose';
        triangleBottom.style.animationName = 'slideBottomClose';
        triangleTop.style.animationDuration = '1s';
        triangleBottom.style.animationDuration = '1s';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000); 
    });

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

    circles.forEach(circle => {
        circle.addEventListener('mouseenter', () => {
            const index = parseInt(circle.getAttribute('data-index'));
            showInfo(index);
        });
    });

    circles.forEach(circle => {
        circle.addEventListener('mouseleave', () => {
            showInfo(activeIndex);
        });
    });

    showInfo(activeIndex);
});
