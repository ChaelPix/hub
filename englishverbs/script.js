const irregularVerbs = [
["be", "was/were", "been", "être"],
["bear", "bore", "borne", "porter"],
["beat", "beat", "beaten", "battre"],
["become", "became", "become", "devenir"],
["begin", "began", "begun", "commencer"],
["bend", "bent", "bent", "courber"],
["bet", "bet", "bet", "parier"],
["bite", "bit", "bitten", "mordre"],
["bleed", "bled", "bled", "saigner"],
["blow", "blew", "blown", "souffler"],
["break", "broke", "broken", "casser"],
["breed", "bred", "bred", "élever"],
["bring", "brought", "brought", "apporter"],
["build", "built", "built", "construire"],
["burn", "burnt/burned", "burnt/burned", "brûler"],
["burst", "burst", "burst", "éclater"],
["buy", "bought", "bought", "acheter"],
["cast", "cast", "cast", "lancer"],
["catch", "caught", "caught", "attraper"],
["choose", "chose", "chosen", "choisir"],
["come", "came", "come", "venir"],
["cost", "cost", "cost", "coûter"],
["cut", "cut", "cut", "couper"],
["deal", "dealt", "dealt", "distribuer"],
["do", "did", "done", "faire"],
["draw", "drew", "drawn", "dessiner/tirer"],
["dream", "dreamt/dreamed", "dreamt/dreamed", "rêver"],
["drink", "drank", "drunk", "boire"],
["drive", "drove", "driven", "conduire"],
["eat", "ate", "eaten", "manger"],
["fall", "fell", "fallen", "tomber"],
["feed", "fed", "fed", "nourrir"],
["feel", "felt", "felt", "ressentir"],
["fight", "fought", "fought", "combattre"],
["find", "found", "found", "trouver"],
["fly", "flew", "flown", "voler"],
["forbid", "forbade", "forbidden", "interdire"],
["forget", "forgot", "forgotten", "oublier"],
["forgive", "forgave", "forgiven", "pardonner"],
["freeze", "froze", "frozen", "geler"],
["get", "got/gotten", "got/gotten", "obtenir"],
["give", "gave", "given", "donner"],
["go", "went", "gone", "aller"],
["grow", "grew", "grown", "pousser"],
["have", "had", "had", "avoir"],
["hang", "hung", "hung", "pendre"],
["hear", "heard", "heard", "entendre"],
["hide", "hid", "hidden", "cacher"],
["hit", "hit", "hit", "frapper"],
["hold", "held", "held", "tenir"],
["hurt", "hurt", "hurt", "blesser"],
["keep", "kept", "kept", "garder"],
["know", "knew", "known", "savoir"],
["lay", "laid", "laid", "poser"],
["lead", "led", "led", "conduire"],
["learn", "learnt/learned", "learnt/learned", "apprendre"],
["leave", "left", "left", "partir"],
["lend", "lent", "lent", "prêter"],
["let", "let", "let", "laisser"],
["lie", "lay", "lain", "être couché"],
["light", "lit", "lit", "allumer"],
["lose", "lost", "lost", "perdre"],
["make", "made", "made", "fabriquer"],
["mean", "meant", "meant", "signifier"],
["meet", "met", "met", "rencontrer"],
["pay", "paid", "paid", "payer"],
["put", "put", "put", "mettre"],
["read", "read", "read", "lire"],
["ride", "rode", "ridden", "monter"],
["ring", "rang", "rung", "sonner"],
["rise", "rose", "risen", "se lever"],
["run", "ran", "run", "courir"],
["say", "said", "said", "dire"],
["see", "saw", "seen", "voir"],
["seek", "sought", "sought", "chercher"],
["sell", "sold", "sold", "vendre"],
["send", "sent", "sent", "envoyer"],
["set", "set", "set", "fixer"],
["shake", "shook", "shaken", "secouer"],
["shoot", "shot", "shot", "tirer"],
["show", "showed", "shown", "montrer"],
["shut", "shut", "shut", "fermer"],
["sing", "sang", "sung", "chanter"],
["sink", "sank", "sunk", "couler"],
["sit", "sat", "sat", "s'asseoir"],
["sleep", "slept", "slept", "dormir"],
["speak", "spoke", "spoken", "parler"],
["spend", "spent", "spent", "dépenser"],
["stand", "stood", "stood", "se tenir debout"],
["steal", "stole", "stolen", "voler"],
["swim", "swam", "swum", "nager"],
["take", "took", "taken", "prendre"],
["teach", "taught", "taught", "enseigner"],
["tear", "tore", "torn", "déchirer"],
["tell", "told", "told", "raconter"],
["think", "thought", "thought", "penser"],
["throw", "threw", "thrown", "jeter"],
["understand", "understood", "understood", "comprendre"],
["wake", "woke", "woken", "réveiller"],
["wear", "wore", "worn", "porter"],
["win", "won", "won", "gagner"],
["write", "wrote", "written", "écrire"]
];

let currentVerbs = [];
let isValidation = false;

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
  
    // Créez une copie du tableau des verbes irréguliers
    const remainingVerbs = [...irregularVerbs];
  
    for (let i = 0; i < 10; i++) {
      // Sélectionnez un verbe aléatoire parmi les verbes restants
      const randomIndex = Math.floor(Math.random() * remainingVerbs.length);
      const selectedVerb = remainingVerbs[randomIndex];
  
      // Ajoutez le verbe sélectionné au tableau des verbes actuels
      currentVerbs.push(selectedVerb);
  
      // Supprimez le verbe sélectionné du tableau des verbes restants
      remainingVerbs.splice(randomIndex, 1);
  
      // Générez et ajoutez la nouvelle ligne au tableau
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
