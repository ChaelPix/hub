# Alpha-Beta

[AlphaBeta-Video](https://www.youtube.com/watch?v=l-hh51ncgDI&ab_channel=SebastianLague)

## Bases d'Alpha-Beta
- Implémentation d'un algorithme Minimax avec élagage (pruning).
- Chaque nœud possède une valeur associée et un intervalle [α, β].
- MAX cherche à maximiser α, MIN cherche à minimiser β.

## Algorithme
- Initialiser la racine avec [α = -∞, β = +∞].
- Pour chaque nœud, mettre à jour :
  - Si MAX : α = max(α, valeur_fils)
  - Si MIN : β = min(β, valeur_fils)
- Couper la branche dès que α ≥ β.

## Exemple de Calcul
```
État initial: [8]
   /      \
[5,3]    [6,2]
   ...
// Exemple : Si pour [5,3] β devient 2 et [6,2] donne une valeur supérieure, on arrête d'explorer [6,2].
```

## Rappel des Notations
- Nœuds : représentent des états du jeu.
- Valeurs : déterminées en remontant les valeurs des feuilles.
- [α, β] : Plancher pour MAX et plafond pour MIN.
