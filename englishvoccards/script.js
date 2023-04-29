let words = [];
let currentCard = 0;
const card = document.getElementById('definition');
const answerInput = document.getElementById('answer');
const answerContainer = document.getElementById('answerContainer');
const form = document.querySelector('form');
const submitButton = document.querySelector('button');
const nextButton = document.getElementById('nextButton');

// Charger les données à partir du fichier JSON
fetch('words.json')
    .then(response => response.json())
    .then(data => {
        words = data;
        card.textContent = words[currentCard].definition;
    });

card.textContent = words[currentCard].definition;

function checkAnswer() {
    if (answerInput.value.trim().toLowerCase() === words[currentCard].word) {
        card.classList.remove("incorrect");
        card.classList.add("correct");
        submitButton.style.display = "none";
        nextButton.style.display = "block";
        answerContainer.textContent = '';
        answerContainer.style.display = 'none';
        answerInput.disabled = true;
        setTimeout(function () {
            nextCard();
        }, 1000);
    } else {
        card.classList.remove("correct");
        card.classList.add("incorrect");
        answerContainer.textContent = 'La réponse correcte est : ' + words[currentCard].word;
        answerContainer.style.display = 'block';
        submitButton.style.display = "none";
        nextButton.style.display = "block";
        answerInput.disabled = true;
    }
}

function nextCard() {
    currentCard = (currentCard + 1) % words.length;
    card.classList.remove("incorrect");
    card.classList.remove("correct");
    answerContainer.textContent = '';
    answerContainer.style.display = 'none';
    card.textContent = words[currentCard].definition;
    answerInput.value = '';
    answerInput.disabled = false;
    submitButton.style.display = "block";
    nextButton.style.display = "none";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkAnswer();
});

nextButton.addEventListener("click", nextCard);
