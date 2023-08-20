//----------------Triangles
const triangleTop = document.querySelector('.triangle-top');
const triangleBottom = document.querySelector('.triangle-bottom');
const triangles = document.querySelectorAll('.triangle');

function resetAnimations() {
  triangleTop.style.animationDuration = "1.5s";
  triangleBottom.style.animationDuration = "1.5s";
  triangleTop.style.animationName = 'slideTop';
  triangleBottom.style.animationName = 'slideBottom';
}

window.addEventListener('pageshow', function(event) {
  if (!event.persisted) {
      return;
  }
  resetAnimations();
});

window.addEventListener('resize', function() {

  triangles.forEach(triangle => {
      const animationName = triangle.style.animationName;
      triangle.style.animationName = 'none';
      void triangle.offsetWidth;
      triangle.style.animationName = animationName;
      triangle.style.animationDelay = '.25s';
  });
});


document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', function() {

      triangleBottom.style.animationName = 'slideBottomClose';
      triangleTop.style.animationName = 'slideTopClose';
      triangleTop.style.animationDuration = "1.5s";
      triangleBottom.style.animationDuration = "1.5s";

      const delayTransition = window.innerWidth > 768 ? 500 : 1250;
      setTimeout(() => {
          window.location.href = button.getAttribute('data-href');
      }, delayTransition);
  });
});






