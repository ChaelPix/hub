document.querySelectorAll('.games-grid button').forEach(button => {
    button.addEventListener('click', function() {
        const gameImg = this.getAttribute('data-img');
        const gameTitle = this.getAttribute('data-title');
        const gameGenre = this.getAttribute('data-genre');
        const gameDescription = this.getAttribute('data-description');
        const gameLink = this.getAttribute('data-link');

        document.querySelector('.game-display').style.backgroundImage = `url(${gameImg})`;
        document.querySelector('.game-title').textContent = gameTitle;
        document.querySelector('.game-genre').textContent = gameGenre;
        document.querySelector('.game-description').textContent = gameDescription;
        document.querySelector('.playstore-link').href = gameLink;

        document.querySelector('.game-details').style.display = 'block';
    });
});
