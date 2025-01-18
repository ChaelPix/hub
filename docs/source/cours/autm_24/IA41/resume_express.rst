RÉSUMÉ EXPRESS POUR L'EXAMEN
============================

1. CSP EN 30 SECONDES
---------------------
::

   ÉTAPE 1: À la lecture
   - X = identifier variables (ce qu'on cherche)
   - D = domaines possibles de chaque variable
   - C = règles entre variables

   ÉTAPE 2: Dessin
   X1 ---[règles]--- X2
    |                |
    |                |
   X3 ---[règles]--- X4

   ÉTAPE 3: Backtracking
   - Commencer par variable plus contrainte
   - Tester valeurs qui violent le moins
   - Si échec → retour arrière

2. A* EN 3 POINTS
-----------------
::

   1) f(n) = g(n) + h(n)
      ↑       ↑      ↑
    total   coût   estimation
           réel    jusqu'au but

   2) À CHAQUE ÉTAPE:
   - Choisir nœud avec plus petit f
   - Si égalité → celui avec plus petit h
   - Développer ce nœud

   3) TABLEAU OBLIGATOIRE:
   Iter | Nœud | g | h | f | OPEN | CLOSED
   0    | A    | 0 | 5 | 5 | B,C  | A
   1    | ...

3. MIN-MAX/ALPHA-BETA EN 4 RÈGLES
---------------------------------
::

   1) CONSTRUCTION ARBRE:
      MAX (racine)
       /    \
    MIN    MIN
     /      /
   MAX    MAX

   2) OPTIMISATIONS:
   - Éliminer coups impossibles d'abord
   - Élaguer si branche moins rentable
   - Arrêter si victoire/défaite certaine

   3) PROPAGATION:
   - MAX prend plus grande valeur fils
   - MIN prend plus petite valeur fils
   - Propager [α,β] de haut en bas

   4) ÉLAGAGE:
   Si α ≥ β → couper branche ✗

MÉMO DERNIÈRE MINUTE
--------------------

CSP:
- Toujours dessiner le graphe
- Variables = décisions à prendre
- Contraintes = règles entre variables

A*:
- f = g + h TOUJOURS
- Tableau obligatoire
- OPEN/CLOSED à jour

Alpha-Beta:
- Alterner MIN/MAX
- Noter [α,β] partout
- Élaguer dès que α ≥ β
