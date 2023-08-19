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

        var pButton = document.querySelector('.playstore-button');
        if(gameLink != "")
        {
            pButton.href = gameLink;
            pButton.style.opacity = '1';
        } else{
            pButton.style.opacity = '0';
        }
        

        document.querySelector('.game-details').style.display = 'block';

        const gameDetails = document.querySelector('.game-details');
        gameDetails.style.animation = 'none'; // Réinitialisation de l'animation
        setTimeout(() => {
            gameDetails.style.animation = 'fadeInUp 1s forwards';
        }, 10);
    });
});
