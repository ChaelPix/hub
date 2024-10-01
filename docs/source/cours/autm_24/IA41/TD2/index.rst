===
TD2
===

.. contents::
   :depth: 2
   :local:

Chapitre 1. **Prédicat `adjacent(E1, E2, L)`**
###############################################

Ce prédicat vérifie si deux éléments `E1` et `E2` apparaissent l'un à côté de l'autre dans une liste `L`, dans cet ordre.

Section : Idée principale
==========================

On parcourt la liste pour vérifier si la tête est `E1` et le deuxième élément est `E2`. Sinon, on continue avec le reste de la liste.

Sous-section : Implémentation
------------------------------

.. code-block:: prolog

    adjacent(E1, E2, [E1, E2 | _]). % Cas où E1 et E2 sont les deux premiers éléments.
    adjacent(E1, E2, [_ | T]) :- 
        adjacent(E1, E2, T). % Appel récursif sur le reste de la liste.

Sous-section : Explications
---------------------------

- La première règle dit que si les deux premiers éléments de la liste sont `E1` et `E2`, alors le prédicat réussit.
- Sinon, on ignore le premier élément et on vérifie la sous-liste (appel récursif).

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- adjacent(a, b, [x, y, a, b, c]).
    true.

    ?- adjacent(a, b, [x, y, a, c, b]).
    false.


Chapitre 2. **Prédicat `traduit(Lc, Lm)`**
##########################################

Ce prédicat traduit une liste de chiffres en une liste de mots correspondants. Pour cela, on utilise une correspondance entre chiffres et mots.

Section : Idée principale
==========================

On définit une correspondance entre chaque chiffre et son équivalent en mot, et on applique cette traduction récursivement à chaque élément de la liste.

Sous-section : Implémentation
-----------------------------

.. code-block:: prolog

    % Traductions de base
    traduction(1, un).
    traduction(2, deux).
    traduction(3, trois).
    traduction(4, quatre).
    traduction(5, cinq).
    traduction(6, six).
    traduction(7, sept).
    traduction(8, huit).
    traduction(9, neuf).
    traduction(0, zero).

    % Traduction de la liste
    traduit([], []). % Cas de base : une liste vide reste vide.
    traduit([C|T1], [M|T2]) :- 
        traduction(C, M), % Traduction du premier élément
        traduit(T1, T2). % Traduction du reste de la liste

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- traduit([1, 5, 8], [un, cinq, huit]).
    true.

    ?- traduit([5, 8, 2], L).
    L = [cinq, huit, deux].

    ?- traduit(L, [un, deux, quatre]).
    L = [1, 2, 4].


Chapitre 3. **Prédicat `insere(E, N, Lo, Lr)`**
###############################################

Ce prédicat insère un élément `E` à la position `N` dans la liste `Lo`, pour obtenir une nouvelle liste `Lr`.

Section : Idée principale
==========================

On parcourt la liste jusqu'à atteindre la position N, où l'on insère l'élément `E`.

Sous-section : Implémentation
-----------------------------

.. code-block:: prolog

    insere(E, 1, Lo, [E|Lo]). % Insère E en première position.
    insere(E, N, [H|T], [H|R]) :- 
        N > 1, 
        N1 is N - 1, % Décrémente N
        insere(E, N1, T, R). % Récursion sur le reste de la liste

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- insere(x, 3, [a, b, c, d], L).
    L = [a, b, x, c, d].

    ?- insere(x, 8, [a, b, c, d], L).
    L = [a, b, c, d, x].


Chapitre 4. **Prédicat `concat(L1, L2, L3)`**
#############################################

Ce prédicat vérifie si `L3` est la concaténation des listes `L1` et `L2`.

Section : Idée principale
==========================

On construit une nouvelle liste en ajoutant chaque élément de `L1` à la tête de la concaténation de `L2`.

Sous-section : Implémentation
-----------------------------

.. code-block:: prolog

    concat([], L2, L2). % Cas de base : concaténer une liste vide avec L2 donne L2.
    concat([H|T], L2, [H|R]) :- 
        concat(T, L2, R). % Récursion pour ajouter chaque élément de L1 à la tête de L3.

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- concat([a, b, c], [1, 2], L).
    L = [a, b, c, 1, 2].

    ?- concat([a, b, c], [1, 2], [a, b, c, 1, 2]).
    true.


Chapitre 5. **Prédicat `equi(L1, L2)`**
#######################################

Ce prédicat vérifie si les listes `L1` et `L2` ne diffèrent que par des occurrences du caractère `*`.

Section : Idée principale
==========================

On parcourt les deux listes et on vérifie que les éléments sont égaux ou qu'un des deux éléments est `*`.

Sous-section : Implémentation
-----------------------------

.. code-block:: prolog

    equi([], []). % Cas de base : deux listes vides sont équivalentes.
    equi([H1|T1], [H2|T2]) :- 
        (H1 = H2 ; H1 = '*' ; H2 = '*'), % Vérifie si les éléments sont égaux ou si l'un est *
        equi(T1, T2). % Récursion sur le reste des listes

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- equi([a, b, c, d], [*, a, *, b, c, d]).
    true.

    ?- equi([*, a, b, *, c], [a, *, b, c, *, *]).
    true.

    ?- equi([a, b, c], [a, *, d, b, c]).
    false.


Chapitre 6. **Prédicat `cons_liste_ordonnee(L1, L2, L3)`**
###########################################################

Ce prédicat fusionne deux listes triées `L1` et `L2` pour obtenir une nouvelle liste triée `L3`.

Section : Idée principale
==========================

On compare les premiers éléments des deux listes et on ajoute le plus petit à `L3`, en continuant récursivement.

Sous-section : Implémentation
-----------------------------

.. code-block:: prolog

    cons_liste_ordonnee([], L, L). % Cas où L1 est vide : le résultat est L2.
    cons_liste_ordonnee(L, [], L). % Cas où L2 est vide : le résultat est L1.
    cons_liste_ordonnee([H1|T1], [H2|T2], [H1|R]) :- 
        H1 =< H2, 
        cons_liste_ordonnee(T1, [H2|T2], R). % H1 est plus petit, on l'ajoute.
    cons_liste_ordonnee([H1|T1], [H2|T2], [H2|R]) :- 
        H1 > H2, 
        cons_liste_ordonnee([H1|T1], T2, R). % H2 est plus petit, on l'ajoute.

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- cons_liste_ordonnee([-67, 8, 15], [-99, -45, 0, 5], L).
    L = [-99, -67, -45, 0, 5, 8, 15].

    ?- cons_liste_ordonnee([5, 7], [1, 3, 20], L).
    L = [1, 3, 5, 7, 20].


Chapitre 7. **Prédicat `permut(L1, L2)`**
#########################################

Ce prédicat vérifie si `L2` est une permutation de `L1`, c'est-à-dire que les deux listes contiennent les mêmes éléments, mais dans un ordre différent.

Section : Idée principale
==========================

Une liste `L2` est une permutation de `L1` si on peut réarranger les éléments de `L1` pour obtenir `L2`. Cela signifie qu'un élément de `L1` doit apparaître dans `L2`, et qu'on doit vérifier récursivement pour le reste des éléments.

Sous-section : Implémentation
-----------------------------

.. code-block:: prolog

    permut([], []). % Cas de base : deux listes vides sont des permutations.
    permut([H|T], L2) :- 
        select(H, L2, R), % Retire H de L2 pour obtenir R
        permut(T, R). % Vérifie si T est une permutation de R.

Sous-section : Explications
---------------------------

- Le prédicat `select/3` en Prolog retire un élément de la liste, ce qui est utile pour vérifier si les éléments de `L1` correspondent à ceux de `L2`.

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- permut([a, b, c], [b, a, c]).
    true.

    ?- permut([a, b, c], [a, c, d]).
    false.