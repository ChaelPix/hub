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
["build", "built", "built", "bâtir"],
["burn", "burnt", "burnt", "brûler"],
["burst", "burst", "burst", "éclater"],
["buy", "bought", "bought", "acheter"],
["cast", "cast", "cast", "lancer (un sort)"],
["catch", "caught", "caught", "attraper"],
["choose", "chose", "chosen", "choisir"],
["come", "came", "come", "venir"],
["cost", "cost", "cost", "coûter"],
["cut", "cut", "cut", "couper"],
["deal", "dealt", "dealt", "distribuer"],
["do", "did", "done", "faire"],
["draw", "drew", "drawn", "tirer (une carte)"],
["dream", "dreamt", "dreamt", "rêver"],
["drink", "drank", "drunk", "boire"],
["drive", "drove", "driven", "conduire"],
["eat", "ate", "eaten", "manger"],
["fall", "fell", "fallen", "tomber"],
["feed", "fed", "fed", "nourrir"],
["feel", "felt", "felt", "ressentir"],
["fight", "fought", "fought", "combattre"],
["find", "found", "found", "trouver"],
["fly", "flew", "flown", "voler (dans le ciel)"],
["forbid", "forbade", "forbidden", "interdire"],
["forget", "forgot", "forgotten", "oublier"],
["forgive", "forgave", "forgiven", "pardonner"],
["freeze", "froze", "frozen", "geler"],
["get", "got", "got/gotten", "obtenir"],
["give", "gave", "given", "donner"],
["go", "went", "gone", "aller"],
["grow", "grew", "grown", "pousser (croître)"],
["have", "had", "had", "avoir"],
["hang", "hung", "hung", "pendre"],
["hear", "heard", "heard", "entendre"],
["hide", "hid", "hidden", "cacher"],
["hit", "hit", "hit", "frapper"],
["hold", "held", "held", "tenir"],
["hurt", "hurt", "hurt", "blesser"],
["keep", "kept", "kept", "garder"],
["know", "knew", "known", "connaître"],
["lay", "laid", "laid", "poser à plat"],
["lead", "led", "led", "mener"],
["leap", "leapt", "leapt", "sauter"],
["learn", "learnt", "learnt", "apprendre"],
["leave", "left", "left", "quitter"],
["lend", "lent", "lent", "prêter"],
["let", "let", "let", "laisser"],
["lie", "lay", "lain", "être couché"],
["light", "lit", "lit", "éclairer"],
["lose", "lost", "lost", "perdre"],
["make", "made", "made", "faire"],
["mean", "meant", "meant", "signifier"],
["meet", "met", "met", "rencontrer"],
["pay", "paid", "paid", "payer"],
["put", "put", "put", "mettre"],
["read", "read", "read", "lire"],
["ride", "rode", "ridden", "monter (à cheval)"],
["ring", "rang", "rung", "sonner"],
["rise", "rose", "risen", "s'élever"],
["run", "ran", "run", "courir"],
["say", "said", "said", "dire"],
["see", "saw", "seen", "voir"],
["sell", "sold", "sold", "vendre"],
["send", "sent", "sent", "envoyer"],
["set", "set", "set", "fixer"],
["shake", "shook", "shaken", "secouer"],
["shoot", "shot", "shot", "tirer (à feu)"],
["show", "showed", "shown", "montrer"],
["shut", "shut", "shut", "fermer"],
["sing", "sang", "sung", "chanter"],
["sink", "sank", "sunk", "couler"],
["sit", "sat", "sat", "s'asseoir"],
["sleep", "slept", "slept", "dormir"],
["smell", "smelt", "smelt", "sentir"],
["speak", "spoke", "spoken", "parler"],
["spell", "spelt", "spelt", "épeler"],
["spend", "spent", "spent", "dépenser"],
["spill", "spilt", "spilt", "renverser"],
["split", "split", "split", "fendre"],
["spoil", "spoilt", "spoilt", "gâter"],
["spread", "spread", "spread", "répandre"],
["spring", "sprang", "sprung", "bondir"],
["stand", "stood", "stood", "être debout"],
["steal", "stole", "stolen", "voler (dérober)"],
["stick", "stuck", "stuck", "coller"],
["strike", "struck", "struck", "frapper"],
["swear", "swore", "sworn", "jurer"],
["sweep", "swept", "swept", "balayer"],
["swim", "swam", "swum", "nager"],
["swing", "swung", "swung", "se balancer"],
["take", "took", "taken", "prendre"],
["teach", "taught", "taught", "enseigner"],
["tear", "tore", "torn", "déchirer"],
["tell", "told", "told", "raconter"],
["think", "thought", "thought", "penser"],
["throw", "threw", "thrown", "lancer (un objet)"],
["understand", "understood", "understood", "comprendre"],
["wake", "woke", "woken", "réveiller"],
["wear", "wore", "worn", "porter (un vêtement)"],
["win", "won", "won", "gagner"],
["write", "wrote", "written", "écrire"]
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
