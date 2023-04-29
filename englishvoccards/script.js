fetch("words.json")
    .then((response) => response.json())
    .then((data) => {
        let words = data;

        let currentCard = 0;
        const card = document.getElementById("definition");
        const answerInput = document.getElementById("answer");
        const answerContainer = document.getElementById("answerContainer");
        const nextButton = document.getElementById("nextButton");
        const form = document.querySelector("form");

        card.textContent = words[currentCard].definition;

        function getRandomCardIndex() {
            return Math.floor(Math.random() * words.length);
        }

        function checkAnswer() {
            if (answerInput.value.trim().toLowerCase() === words[currentCard].word) {
                card.classList.remove("incorrect");
                card.classList.add("correct");
                answerContainer.textContent = "";
                answerContainer.style.display = "none";
                answerInput.disabled = true;
                setTimeout(function () {
                    nextCard();
                }, 1000);
            } else {
                card.classList.remove("correct");
                card.classList.add("incorrect");
                answerContainer.textContent =
                    "La réponse correcte est : " + words[currentCard].word;
                answerContainer.style.display = "block";
                answerInput.disabled = true;
            }
            nextButton.style.display = "block";
        }

        function nextCard() {
            currentCard = getRandomCardIndex();
            card.classList.remove("incorrect");
            card.classList.remove("correct");
            answerContainer.textContent = "";
            answerContainer.style.display = "none";
            card.textContent = words[currentCard].definition;
            answerInput.value = "";
            answerInput.disabled = false;
            nextButton.style.display = "none";
        }

        nextButton.addEventListener("click", nextCard);

        // Ajoutez cet événement pour éviter la soumission du formulaire
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            checkAnswer();
        });

        nextButton.addEventListener("click", nextCard);
        nextCard();
    })
    .catch((error) => {
        console.error("Error fetching words:", error);
    });
