# CSP

## Introduction
- Un CSP (Constraint Satisfaction Problem) consiste à trouver une affectation 
  de valeurs aux variables qui satisfait toutes les contraintes.
- Parfait pour modéliser des problèmes comme les N dames, emplois du temps, etc.

## Définition d'un CSP
- Notation : P = (X, D, C)
  - X : Variables (ex. X1, X2, ...)
  - D : Domaines, ensemble des valeurs possibles pour chaque variable.
  - C : Contraintes, relations qui doivent être respectées entre les variables.

## Types de Contraintes
- **Unaire :** Concerne une seule variable.
- **Binaire :** Concerne deux variables (ex. X ≠ Y).
- **N-aire :** Concerne n variables (ex. allDifferent pour un ensemble de variables).

## Méthodes de Résolution
### Backtracking (BT)
- Procédure récursive qui instancie les variables une par une.
- À chaque étape, on vérifie la consistance de l'instanciation.
- Revenir en arrière dès qu'une contrainte est violée.

### Arc Consistency (AC)
- Filtre les domaines en éliminant les valeurs qui ne peuvent aboutir à une solution.
- Algorithmes AC3, AC4, etc., permettent de réduire l'espace de recherche.
- Astuce : Appliquer AC avant le BT pour optimiser.

## Pseudo-code Backtracking
```
BT(V, A):
    Si V est vide, alors A est une solution.
    Sinon:
        Choisir xi dans V.
        Pour chaque valeur v dans D(xi):
            Si A ∪ {xi = v} est consistante:
                BT(V - {xi}, A ∪ {xi = v})
```