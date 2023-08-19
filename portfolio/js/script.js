//Buttons
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.buttons button').forEach(button => {
      button.addEventListener('mouseover', function() {
          button.classList.add('active');
      });
      button.addEventListener('mouseout', function() {
          button.classList.remove('active');
      });
  });
});

//Triangles
window.addEventListener('resize', function() {

  const triangles = document.querySelectorAll('.triangle');

  triangles.forEach(triangle => {
      const animationName = triangle.style.animationName;
      triangle.style.animationName = 'none';
      void triangle.offsetWidth;
      triangle.style.animationName = animationName;
  });
});

