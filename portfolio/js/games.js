const gameDisplay = document.querySelector('.game-display');
const gameDetails = document.querySelector('.game-details');
const playstoreButton = document.querySelector('.playstore-button');
const youtubeButton = document.querySelector('.youtube-button');

document.querySelectorAll('.games-grid button').forEach(button => {
    let hoverTimeout;

    button.addEventListener('mouseover', function() {
        clearTimeout(hoverTimeout); 

        hoverTimeout = setTimeout(() => {
            gameDisplay.style.animation = 'none';
            setTimeout(() => {
                gameDisplay.style.animation = 'fillPhone .9s forwards';
            }, 10);

            gameDisplay.style.backgroundImage = `url(${this.dataset.img})`;
            gameDetails.querySelector('.game-title').textContent = this.dataset.title;
            gameDetails.querySelector('.game-genre').textContent = this.dataset.genre;
            gameDetails.querySelector('.game-description').textContent = this.dataset.description;

            playstoreButton.href = this.dataset.link || '#';
            playstoreButton.style.opacity = this.dataset.link ? '1' : '0';

            youtubeButton.href = this.dataset.yt || '#';
            youtubeButton.style.opacity = this.dataset.yt ? '1' : '0';

            gameDetails.style.animation = 'none';
            setTimeout(() => {
                gameDetails.style.animation = 'fadeInUp 1s forwards';
            }, 125);

            gameDetails.style.display = 'block';
        }, 350);
    });

    button.addEventListener('mouseout', function() {
        clearTimeout(hoverTimeout);
    });
});
