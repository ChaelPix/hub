const gameDetails = document.querySelector('.game-details');
const playstoreButton = document.querySelector('.playstore-button');
const githubButton = document.querySelector('.github-button');
const itchButton = document.querySelector('.itch-button');
let actualTitle = "";

document.querySelectorAll('.games-grid button').forEach(button => {
    let hoverTimeout;

    button.addEventListener('mouseover', function() {
        clearTimeout(hoverTimeout); 

        if(actualTitle !== this.dataset.title)
        {
            hoverTimeout = setTimeout(() => {
                gameDetails.querySelector('.game-title').textContent = this.dataset.title;
                actualTitle = this.dataset.title;
                gameDetails.querySelector('.game-genre').textContent = this.dataset.genre;
                gameDetails.querySelector('.game-description').textContent = this.dataset.description;
    
                playstoreButton.href = this.dataset.link || '#';
                playstoreButton.style.opacity = this.dataset.link ? '1' : '0';
    
                githubButton.href = this.dataset.gt || '#';
                githubButton.style.opacity = this.dataset.gt ? '1' : '0';
    
                itchButton.href = this.dataset.itch || '#';
                itchButton.style.opacity = this.dataset.itch ? '1' : '0';

                gameDetails.style.animation = 'none';
                setTimeout(() => {
                    gameDetails.style.animation = 'fadeInUp 1s forwards';
                }, 125);
    
                gameDetails.style.display = 'block';
            }, 350);
        }
       
    });

    button.addEventListener('mouseout', function() {
        clearTimeout(hoverTimeout);
    });
});


