const items = document.querySelectorAll('.grid-item');

function showItems() {
  let delay = 0;
  items.forEach(item => {
    setTimeout(() => {
      item.style.opacity = '1';
    }, delay);
    delay += 200; // Le délai d'affichage en millisecondes entre chaque élément (ici 200 ms)
  });
}

showItems();
