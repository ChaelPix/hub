# Programme de transport – Fiche méthode concise

## 1. Solution initiale : Coin Nord-Ouest
**Procédé :**
1. Placer le maximum possible dans la case (1,1) : min(offre, demande).
2. Si offre épuisée, passer à la ligne suivante (même colonne).
3. Si demande satisfaite, passer à la colonne suivante (même ligne).
4. Répéter jusqu’à remplir tout le tableau.

**Exemple :**
|   | 1 | 2 | 3 | 4 | 5 | 6 | ai |
|---|---|---|---|---|---|---|----|
| I | 9 | 9 |   |   |   |   | 18 |
| II| 2 |   |28 | 2 |   |   | 32 |
|III|   |   | 4 |10 |   |   | 14 |
|IV |   |   |   | 4 | 5 |   |  9 |
|bj | 9 |11 |28 | 6 |14 | 5 | 73 |

## 2. Solution initiale : Coût minimum (Houthaker)
**Procédé :**
1. Repérer la case de coût minimum.
2. Placer le maximum possible (min(offre, demande)).
3. Rayer ligne/colonne épuisée, recommencer sur le coût min restant.
4. Répéter jusqu’à remplir tout le tableau.

## 3. Dégénérescence
- Si le nombre d’affectations < m+n–1, il faut ajouter une case fictive (0 unité, coût 0).
- Cette case doit être placée de façon à ne pas créer de circuit fermé dans le tableau d’affectation (sinon, la solution n’est pas valide pour la méthode des potentiels).
- Astuce : placer le zéro fictif dans une case vide qui ne ferme pas de boucle/cycle.

## 4. Méthode des potentiels (amélioration)
**Procédé :**
1. Calculer les potentiels Ui (lignes) et Vj (colonnes) :
   - Pour chaque case occupée, écrire Ui + Vj = cij.
   - Fixer arbitrairement un Ui ou Vj (ex : U1 = 0).
   - Résoudre le système pour trouver tous les Ui et Vj.
2. Calculer les coûts marginaux : δij = cij – (Ui + Vj) pour chaque case vide.
3. Si tous δij ≥ 0, solution optimale.
4. Sinon, choisir la case de δij le plus négatif, tracer le cycle d’amélioration, ajuster les flux.
5. Recommencer jusqu’à optimalité.
