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

//Follow Mouse
const follower = document.getElementById('follower');
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
    // Ajustez la position pour centrer le cercle par rapport au curseur
    mouseX = e.clientX -  follower.offsetWidth / 2;
    mouseY = e.clientY - follower.offsetHeight / 2;
    follower.style.display = 'block'; // Affichez le cercle lorsque la souris bouge
});

function animate() {
    posX += (mouseX - posX) * 0.25; // 0.05 est le facteur d'inertie, ajustez-le selon vos besoins
    posY += (mouseY - posY) * 0.25;
    posY -= 35;
    
    follower.style.transform = `translate(${posX}px, ${posY}px)`;

    requestAnimationFrame(animate);
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

if (isTouchDevice()) {
  console.log("C'est un appareil tactile!");
} else {
  console.log("Ce n'est pas un appareil tactile.");
  animate();
}





