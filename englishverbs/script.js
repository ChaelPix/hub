const irregularVerbs = [
    ["be", "was/were", "been", "être"],
    ["bear", "bore", "born(e)", "porter/supporter"],
    ["beat", "beat", "beaten", "battre"],
    ["become", "became", "become", "devenir"],
    ["begin", "began", "begun", "commencer"],
    ["bend", "bent", "bent", "(se) courber"],
    ["bet", "bet", "bet", "parier"],
    ["bite", "bit", "bitten", "mordre"],
    ["blow", "blew", "blown", "souffler"],
    ["break", "broke", "broken", "casser"],
    ["bring", "brought", "brought", "apporter"],
    ["build", "built", "built", "construire"],
    ["burn", "burnt/burned", "burnt/burned", "brûler"],
    ["buy", "bought", "bought", "acheter"],
    ["catch", "caught", "caught", "attraper"],
    ["choose", "chose", "chosen", "choisir"],
    ["come", "came", "come", "venir"],
    ["cost", "cost", "cost", "coûter"],
    ["creep", "crept", "crept", "ramper"],
    ["cut", "cut", "cut", "(dé)couper"],
    ["do", "did", "done", "faire"],
    ["draw", "drew", "drawn", "dessiner/tirer"],
    ["dream", "dreamt/dreamed", "dreamt/dreamed", "rêver"],
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
    ["grow", "grew", "grown", "grandir (faire pousser)"],
    ["hang", "hung/hanged", "hung/hanged", "(sus)pendre"],
    ["have", "had", "had", "avoir"],
    ["hear", "heard", "heard", "entendre"],
    ["hide", "hid", "hidden", "cacher"],
    ["hit", "hit", "hit", "frapper"],
    ["hold", "held", "held", "tenir"],
    ["hurt", "hurt", "hurt", "blesser"],
    ["keep", "kept", "kept", "garder"],
    ["kneel", "knelt/kneeled", "knelt/kneeled", "s'agenouiller"],
    ["knit", "knit/knitted", "knit/knitted", "tricoter"],
    ["know", "knew", "known", "savoir"],
    ["lay", "laid", "laid", "étendre/poser"],
    ["lead", "led", "led", "mener/guider"],
    ["lean", "leant/leaned", "leant/leaned", "(s')appuyer"],
    ["learn", "learnt/learned", "learnt/learned", "apprendre"]
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