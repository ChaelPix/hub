document.addEventListener('DOMContentLoaded', function() {
    const triangleTop = document.querySelector('.triangle-top');
    const triangleBottom = document.querySelector('.triangle-bottom');

    triangleTop.style.animationName = 'slideTop';
    triangleBottom.style.animationName = 'slideBottom';
    triangleTop.style.animationDuration = '1.5s';
    triangleBottom.style.animationDuration = '1.5s';

    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('mouseover', function() {
            button.classList.add('active');
        });
        button.addEventListener('mouseout', function() {
            button.classList.remove('active');
        });
        
        button.addEventListener('click', function() {
            triangleTop.style.animationName = 'slideTopClose';
            triangleBottom.style.animationName = 'slideBottomClose';
            triangleTop.style.animationDuration = '1s';
            triangleBottom.style.animationDuration = '1s';

            setTimeout(() => {
                window.location.href = button.getAttribute('data-href');
            }, 1000); 
        });
    });
});
