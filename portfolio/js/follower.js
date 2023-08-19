//---------------Follow Mouse
const follower = document.getElementById('follower');
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX -  follower.offsetWidth / 2;
    mouseY = e.clientY - follower.offsetHeight / 2;
    follower.style.display = 'block'; 
});

function animate() {
    posX += (mouseX - posX) * 0.25; 
    posY += (mouseY - posY) * 0.25;
    posY -= 35;
    
    follower.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(animate);
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

if (isTouchDevice()) {
  follower.style.opacity = 0;
} else {
  animate();
}
