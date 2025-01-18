Guide de Survie pour l'Examen IA41
==================================

Exercices Types et Techniques de Résolution
-------------------------------------------

1. CSP (Problème de Satisfaction de Contraintes)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Étapes de résolution**:
1. Dessiner le graphe avec:
   - Nœuds = variables (X1, X2...)
   - Arcs = contraintes entre variables
   - Noter les domaines
2. Pour chaque contrainte:
   - Lister les tuples autorisés
   - Éliminer les valeurs impossibles
3. Trouver les solutions en:
   - Commençant par les variables les plus contraintes
   - Vérifiant à chaque étape les contraintes

**Exemple Rapide**:
::

    X = {X1, X2}
    D = {1,2,3} pour chaque variable
    C = {X1 < X2}

    1. Graphe: X1 --(<)-- X2
    2. Solutions possibles:
       X1=1, X2=2
       X1=1, X2=3
       X1=2, X2=3

2. Alpha-Beta
^^^^^^^^^^^^^

**Méthode mécanique**:
1. Dessiner l'arbre:
   - MAX aux niveaux pairs
   - MIN aux niveaux impairs
   
2. Pour chaque nœud:
   - Noter [α,β]
   - α = meilleure valeur pour MAX
   - β = meilleure valeur pour MIN
   
3. Élagage si:
   - α ≥ β dans un nœud

**Astuce**: Commencer par [−∞,+∞] à la racine

3. A* (Recherche de Chemin)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Procédure fixe**:
1. Pour chaque nœud, noter:
   - g(n) = coût réel depuis départ
   - h(n) = estimation jusqu'à l'arrivée
   - f(n) = g(n) + h(n)

2. À chaque étape:
   - Choisir nœud avec plus petit f
   - Développer ses voisins
   - Mettre à jour les listes OPEN/CLOSED

**Tableau type**:
::

    Iter | Nœud | g(n) | h(n) | f(n) | OPEN | CLOSED
    1    | A    | 0    | 10   | 10   | B,C  | A
    2    | ...

4. Prolog
^^^^^^^^^

**Patterns récurrents**:

1. Manipuler des listes:
::

    % Tête et queue
    [H|T]
    
    % Concaténation
    append(L1,L2,L3)
    
    % Longueur
    length(L,N)

2. Comptage/Accumulation:
::

    count([],Acc,Acc).
    count([H|T],Acc,R) :-
        NewAcc is Acc + 1,
        count(T,NewAcc,R).

3. Vérification de conditions:
::

    % Membre d'une liste
    member(X,L)
    
    % Test numérique
    N > 0

Vérifications Pour l'Examen
---------------------------

1. **CSP**:
   - Graphe complet?
   - Toutes contraintes notées?
   - Solutions vérifiées?

2. **Alpha-Beta**:
   - [α,β] sur chaque nœud?
   - Élagages marqués?
   - Valeurs propagées correctement?

3. **A***:
   - g(n) + h(n) = f(n)?
   - OPEN/CLOSED à jour?
   - Chemin optimal trouvé?

4. **Prolog**:
   - Cas de base?
   - Récursion correcte?
   - Tests unitaires?

Rappels Essentiels
------------------

1. **CSP**:
   - Variables + Domaines + Contraintes
   - Arcs = contraintes binaires
   - Solution = affectation complète valide

2. **Alpha-Beta**:
   - Extension de MinMax
   - Élagage quand α ≥ β
   - Même résultat que MinMax

3. **A***:
   - f(n) = g(n) + h(n)
   - h(n) doit être admissible
   - Garantit chemin optimal

4. **Prolog**:
   - Tout en majuscule = variable
   - _ = variable anonyme
   - ! = cut (arrêt backtracking)
