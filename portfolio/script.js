const items = document.querySelectorAll('.grid-item, .square-grid-item, .project-item');

function showItems() {
  let delay = 1000;
  items.forEach(item => {
    setTimeout(() => {
      item.style.opacity = '1';
    }, delay);
    delay += 50; 
  });
}

showItems();


ScrollReveal({
  duration: 1000, 
  distance: '1000px', 
  delay: 0, 
  easing: 'ease-in-out', 
  mobile: true, 
  reset: true 
});

ScrollReveal().reveal('.content', {duration: 1000, distance: "500px", origin: 'top'}); 
ScrollReveal().reveal('.project-item', {origin: 'left'}); 
ScrollReveal().reveal('h2', {duration: 1000, distance: "500px", origin: 'left'});
ScrollReveal().reveal('hr', {   origin: 'right' }); 
