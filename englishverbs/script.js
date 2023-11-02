const irregularVerbs = [
    ["be", "was/were", "been", "être"],
    ["bear", "bore", "born", "porter"],
    ["beat", "beat", "beaten", "battre"],
    ["become", "became", "become", "devenir"],
    ["begin", "began", "begun", "commencer"],
    ["bend", "bent", "bent", "courber"],
    ["bet", "bet", "bet", "parier"],
    ["bite", "bit", "bitten", "mordre"],
    ["blow", "blew", "blown", "souffler"],
    ["break", "broke", "broken", "casser"],
    ["bring", "brought", "brought", "apporter"],
    ["build", "built", "built", "construire"],
    ["burn", "burnt", "burnt", "brûler"],
    ["buy", "bought", "bought", "acheter"],
    ["catch", "caught", "caught", "attraper"],
    ["choose", "chose", "chosen", "choisir"],
    ["come", "came", "come", "venir"],
    ["cost", "cost", "cost", "coûter"],
    ["creep", "crept", "crept", "ramper"],
    ["cut", "cut", "cut", "couper"],
    ["do", "did", "done", "faire"],
    ["draw", "drew", "drawn", "dessiner"],
    ["dream", "dreamt", "dreamt", "rêver"],
    ["drink", "drank", "drunk", "boire"],
    ["drive", "drove", "driven", "conduire"],
    ["eat", "ate", "eaten", "manger"],
    ["fall", "fell", "fallen", "tomber"],
    ["feed", "fed", "fed", "nourrir"],
    ["feel", "felt", "felt", "se sentir"],
    ["fight", "fought", "fought", "combattre"],
    ["find", "found", "found", "trouver"],
    ["fly", "flew", "flown", "voler"],
    ["forbid", "forbade", "forbidden", "interdire"],
    ["foresee", "foresaw", "foreseen", "prédire"],
    ["forget", "forgot", "forgotten", "oublier"],
    ["forgive", "forgave", "forgiven", "pardonner"],
    ["freeze", "froze", "frozen", "geler"],
    ["get", "got", "got", "obtenir"],
    ["give", "gave", "given", "donner"],
    ["go", "went", "gone", "aller"],
    ["grow", "grew", "grown", "grandir"],
    ["hang", "hung", "hung", "pendre"],
    ["have", "had", "had", "avoir"],
    ["hear", "heard", "heard", "entendre"],
    ["hide", "hid", "hidden", "cacher"],
    ["hit", "hit", "hit", "frapper"],
    ["hold", "held", "held", "tenir"],
    ["hurt", "hurt", "hurt", "blesser"],
    ["keep", "kept", "kept", "garder"],
    ["kneel", "knelt", "knelt", "s'agenouiller"],
    ["knit", "knit", "knit", "tricoter"],
    ["know", "knew", "known", "savoir"],
    ["lay", "laid", "laid", "étendre"],
    ["lead", "led", "led", "mener"],
    ["lean", "leant", "leant", "s'appuyer"],
    ["learn", "learnt", "learnt", "apprendre"]
];

let currentVerbs = [];
let isValidation = false;

console.log("Nombre de verbes irréguliers :", irregularVerbs.length);
function generateRow(verb) {
    const row = document.createElement("tr");
    const randomIndexToFill = Math.floor(Math.random() * 4);

    for (let i = 0; i < 4; i++) {
        const cell = document.createElement("td");
        if (i === randomIndexToFill) {
            cell.textContent = verb[i];
        } else {
            const input = document.createElement("input");
            input.type = "text";
            input.dataset.index = i;
            cell.appendChild(input);
        }
        row.appendChild(cell);
    }

    return row;
}


function fillTable() {
    const table = document.getElementById("irregularVerbs");
    currentVerbs = [];

    const remainingVerbs = [...irregularVerbs];

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * remainingVerbs.length);
        const selectedVerb = remainingVerbs[randomIndex];

        currentVerbs.push(selectedVerb);

        remainingVerbs.splice(randomIndex, 1);

        const newRow = generateRow(selectedVerb);
        table.appendChild(newRow);
    }
}


function resetTable() {
    const table = document.getElementById("irregularVerbs");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    fillTable();
}

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function checkAnswer(input, answer) {
    const mainAnswer = answer.split(" (")[0];
    input = input.split(" (")[0];
    return removeAccents(input.toLowerCase()) === removeAccents(mainAnswer.toLowerCase());
}



function validate() {
    const inputs = document.querySelectorAll("input");
    let correctCount = 0;

    inputs.forEach((input) => {
        const row = input.parentElement.parentElement;
        const rowIndex = row.rowIndex - 1;
        const columnIndex = parseInt(input.dataset.index);

        if (checkAnswer(input.value.trim(), currentVerbs[rowIndex][columnIndex])) {
            input.classList.add("correct");
            correctCount++;
        } else {
            input.classList.add("incorrect");
            const correctAnswer = document.createElement("span");
            correctAnswer.textContent = currentVerbs[rowIndex][columnIndex];
            correctAnswer.classList.add("correct-answer");
            input.parentElement.appendChild(correctAnswer);
        }
    });

    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Votre score est de ${correctCount} sur ${inputs.length}.`;

    const actionButton = document.getElementById("actionButton");
    actionButton.textContent = "Recommencer";
    isValidation = true;

    correctCount = (correctCount / 30 * 20);

    const correctCountSpan = document.createElement("span");
    correctCountSpan.style.color = "red";

    if (correctCount % 1 === 0) {
        correctCountSpan.textContent = correctCount.toFixed(0);
    } else {
        correctCountSpan.textContent = correctCount.toFixed(1);
    }

    const outOfSpan = document.createElement("span");
    outOfSpan.textContent = "/20.";
    outOfSpan.style.color = "red";

    scoreDisplay.textContent = "Vous avez reçu la note de ";
    scoreDisplay.appendChild(correctCountSpan);
    scoreDisplay.appendChild(outOfSpan);

    actionButton.textContent = "Recommencer";
    isValidation = true;
}

document.getElementById("actionButton").addEventListener("click", () => {
    if (isValidation) {
        resetTable();
        document.getElementById("score").textContent = "";
        document.getElementById("actionButton").textContent = "Valider";
        isValidation = false;
    } else {
        validate();
    }
});

fillTable();