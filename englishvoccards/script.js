let words = [];
fetch('words.json')
    .then(response => response.json())
    .then(data => {
        words = data;
        nextCard();
    });

let currentCard = 0;
const card = document.getElementById('definition');
const answerInput = document.getElementById('answer');
const answerContainer = document.getElementById('answerContainer');
const submitButton = document.getElementById('submitButton');
const nextButton = document.getElementById('nextButton');
const wordListContainer = document.getElementById('wordListContainer');
const showAllWordsButton = document.getElementById('showAllWordsButton');

function getRandomCard() {
    let card = currentCard;
    while (card == currentCard) {
        card = Math.floor(Math.random() * words.length);
    }
    return card;
}

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
        answerContainer.textContent = 'Correct anwser is: ' + words[currentCard].word;
        answerContainer.style.display = 'block';
        submitButton.style.display = "none";
        nextButton.style.display = "block";
        answerInput.disabled = true;
    }
}

function nextCard() {
    currentCard = getRandomCard();
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

function showAllWords() {
    if (wordListContainer.style.display === 'none') {
        let wordList = '<ul class="word-list">';
        words.forEach(word => {
            wordList += `<li><strong>${word.word}</strong> : ${word.definition}</li>`;
        });
        wordList += '</ul>';
        wordListContainer.innerHTML = wordList;
        wordListContainer.style.display = 'block';
        showAllWordsButton.textContent = 'Hide word list';
    } else {
        wordListContainer.style.display = 'none';
        showAllWordsButton.textContent = 'Show word list';
    }
}

function handleCheckAnswer(event) {
    event.preventDefault();
    checkAnswer();
}

function handleNextCard(event) {
    event.preventDefault();
    nextCard();
}

submitButton.addEventListener('click', handleCheckAnswer);
submitButton.addEventListener('touchend', handleCheckAnswer);
nextButton.addEventListener('click', handleNextCard);
nextButton.addEventListener('touchend', handleNextCard);

document.querySelector('form').addEventListener("submit", function (event) {
    event.preventDefault();
    checkAnswer();
});
