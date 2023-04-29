const irregularVerbs = [
    ["be", "was/were", "been", "être"],
    ["become", "became", "become", "devenir"],
    // Ajoutez plus de verbes irréguliers ici
];

let currentVerbs = [];
let isValidation = false;

function generateRow(verb) {
    const row = document.createElement("tr");

    for (let i = 0; i < 4; i++) {
        const cell = document.createElement("td");
        if (i === 0) {
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

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * irregularVerbs.length);
        currentVerbs.push(irregularVerbs[randomIndex]);
        const newRow = generateRow(irregularVerbs[randomIndex]);
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

function validate() {
    const inputs = document.querySelectorAll("input");
    let correctCount = 0;

    inputs.forEach((input) => {
        const row = input.parentElement.parentElement;
        const rowIndex = row.rowIndex - 1;
        const columnIndex = parseInt(input.dataset.index);

        if (input.value.trim().toLowerCase() === currentVerbs[rowIndex][columnIndex].toLowerCase()) {
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
