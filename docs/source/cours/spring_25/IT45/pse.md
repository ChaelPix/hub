# Problème du sac à dos binaire

- n objets, valeur ci et volume ai
- Capacité du sac : B
- Variables : xi ∈ {0,1}

1. **Relaxation continue (PLVC)**
   - Remplacer xi ∈ {0,1} par xi ∈ [0,1].
   - **résoudre la relaxation :**
     1. Calculer ci/ai pour chaque objet.
     2. Trier les objets par ce rapport décroissant.
     3. Remplir le sac en prenant les objets dans l'ordre :
        - Si l'objet rentre, xi=1.
        - Sinon, prendre une fraction : xi = (place restante)/(ai) (c'est-à-dire, on prend juste la quantité qui rentre pour finir de remplir le sac).
     4. Arrêter dès que le sac est plein.
   - → solution où certains xi peuvent être fractionnaires.
   - La valeur obtenue est borne max.

2. **Test d'intégralité**
   - Si tous les xi sont 0 ou 1 : solution entière, c'est optimal pour ce nœud.
   - Sinon, choisir une variable fractionnaire (ex : x2 = 0,5).

3. **Séparation (Branchement)**
   - Créer 2 sous-problèmes :
     - xi = 0
     - xi = 1
   - Pour chaque sous-problème, recommencer à l'étape 1.

4. **Pruning**
   - Si la borne du sous-problème ≤ z trouvé, couper.


