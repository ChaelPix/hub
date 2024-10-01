===
TD3
===

.. contents::
   :depth: 2
   :local:

- **Fait** : Une vérité simple dans notre système. Par exemple, on peut dire que `chat` est un animal.

  .. code-block:: prolog

      animal(chat).

  Ici, `animal(chat)` est un fait.

- **Règle** : Une règle définit une relation entre des faits. Par exemple, on peut dire qu’un être vivant est un animal s'il est un mammifère.

  .. code-block:: prolog

      animal(X) :- mammifere(X).

  Cette règle dit que X est un animal si X est un mammifère.

- **Requête** : Une question que tu poses à Prolog pour savoir si un fait ou une règle est vrai. Par exemple, on peut demander si `chat` est un animal :

  .. code-block:: prolog

      ?- animal(chat).


Partie 1. **Les Listes en Prolog**
**********************************

Les listes sont une structure de données essentielle en Prolog, très similaire à celles que tu connais peut-être dans d'autres langages comme Python. Une liste en Prolog est soit vide, soit composée d'un élément (appelé "tête") et d'une sous-liste (appelée "queue").

- Une liste vide : `[]`
- Une liste avec des éléments : `[a, b, c]`

Section : Décomposer une liste
==============================

En Prolog, une liste non vide est composée d'une **tête** et d'une **queue**.
- La **tête** est le premier élément de la liste.
- La **queue** est la liste des éléments restants.

.. code-block:: prolog

    [H|T] = [a, b, c].

- Ici, `H` unifie avec `a` (la tête) et `T` unifie avec `[b, c]` (la queue).

Sous-section : Exemple de Code : décomposition d’une liste
----------------------------------------------------------

.. code-block:: prolog

    ?- [H|T] = [a, b, c].
    H = a,
    T = [b, c].


Chapitre 2. **Unification**
###########################

L’unification est le processus par lequel Prolog tente de faire correspondre deux termes. Par exemple, si tu demandes à Prolog si deux choses sont égales, il essaiera de les "unifier".

Section : Exemple
=================

.. code-block:: prolog

    ?- X = 5.
    X = 5.

Prolog a réussi à unifier `X` avec `5`.

Sous-section : Avec des listes
------------------------------

.. code-block:: prolog

    ?- [X, Y] = [1, 2].
    X = 1,
    Y = 2.

Ici, Prolog unifie `X` avec `1` et `Y` avec `2`.


Chapitre 3. **Récursion**
#########################

La récursion est une technique essentielle dans Prolog, car il n’y a pas de boucles explicites (comme `for` ou `while`). On définit un cas de base (pour arrêter la récursion) et un cas récursif (qui appelle la fonction elle-même).

Section : Exemple : parcourir une liste
=======================================

Définissons un prédicat pour afficher chaque élément d'une liste :

.. code-block:: prolog

    afficher([]). % Cas de base : si la liste est vide, ne fais rien.
    afficher([H|T]) :- 
        writeln(H), % Affiche la tête
        afficher(T). % Récursion sur la queue.

- Le cas de base est quand la liste est vide (`[]`).
- Le cas récursif décompose la liste en tête (`H`) et queue (`T`), affiche `H`, puis appelle récursivement `afficher` pour traiter la queue.

Sous-section : Exécution
------------------------

.. code-block:: prolog

    ?- afficher([a, b, c]).
    a
    b
    c
    true.


Chapitre 4. **Conditions Logiques**
###################################

Prolog utilise des conditions logiques pour vérifier certaines situations. Le prédicat `member/2`, par exemple, vérifie si un élément est présent dans une liste.

- **Syntaxe** : `member(X, L)` vérifie si `X` est dans la liste `L`.

Section : Exemple
=================

.. code-block:: prolog

    ?- member(a, [a, b, c]).
    true.


Chapitre 5. **Négation avec `\+`**
##################################

En Prolog, le symbole `\+` représente la négation (non). Il réussit si le prédicat qui suit échoue.

Section : Exemple
=================

.. code-block:: prolog

    ?- \+ member(a, [b, c]).
    true.

Cela signifie que `a` **n'est pas** un membre de la liste `[b, c]`.


Chapitre 6. **Exemples Pratiques : Reproduire les Exercices**
#############################################################

Maintenant que nous avons vu les bases, nous pouvons aborder les exercices :

Partie 1. Prédicat `isSet(L)`
*****************************

Ce prédicat vérifie si une liste n'a pas de doublons.

.. code-block:: prolog

    isSet([]). % Cas de base : une liste vide est un ensemble.
    isSet([H|T]) :- 
        \+ member(H, T), % Si H n'est pas dans le reste de la liste
        isSet(T). % On vérifie récursivement la queue.

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- isSet([a, b, c]).
    true.

    ?- isSet([a, b, a]).
    false.


Partie 2. Prédicat `list_to_set(L, S)`
**************************************

Ce prédicat élimine les doublons d'une liste.

.. code-block:: prolog

    list_to_set([], []). % Cas de base : une liste vide reste vide.
    list_to_set([H|T], [H|S]) :- 
        \+ member(H, T), % Si H n'est pas dans T, on le garde.
        list_to_set(T, S).
    list_to_set([H|T], S) :- 
        member(H, T), % Si H est déjà dans T, on l'ignore.
        list_to_set(T, S).

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- list_to_set([a, 1, 5, a, 8], S).
    S = [a, 1, 5, 8].


Partie 3. Prédicat `intersection(S1, S2, S3)`
*********************************************

Ce prédicat renvoie l'intersection de deux ensembles.

.. code-block:: prolog

    intersection([], _, []). % Si S1 est vide, l'intersection est vide.
    intersection([H|T], S2, [H|S3]) :- 
        member(H, S2), % Si H est dans S2, il fait partie de l'intersection.
        intersection(T, S2, S3).
    intersection([H|T], S2, S3) :- 
        \+ member(H, S2), % Si H n'est pas dans S2, on l'ignore.
        intersection(T, S2, S3).

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- intersection([x, 8, 9], [3, 1, 2, x], S).
    S = [x].


Partie 4. Prédicat `union(S1, S2, S3)`
**************************************

Ce prédicat renvoie l'union de deux ensembles.

.. code-block:: prolog

    union([], S2, S2). % L'union d'une liste vide et S2 est S2.
    union([H|T], S2, [H|S3]) :- 
        \+ member(H, S2), % Si H n'est pas dans S2, on l'ajoute.
        union(T, S2, S3).
    union([H|T], S2, S3) :- 
        member(H, S2), % Si H est déjà dans S2, on l'ignore.
        union(T, S2, S3).

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- union([a, 2, 5, b], [c, d], S).
    S = [a, 2, 5, b, c, d].


Partie 5. Prédicat `subtract(S, D, R)`
**************************************

Ce prédicat retire les éléments de D présents dans S.

.. code-block:: prolog

    subtract([], _, []). % Si S est vide, il n'y a rien à soustraire.
    subtract([H|T], D, [H|R]) :- 
        \+ member(H, D), % Si H n'est pas dans D, on le garde.
        subtract(T, D, R).
    subtract([H|T], D, R) :- 
        member(H, D), % Si H est dans D, on l'ignore.
        subtract(T, D, R).

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- subtract([a, b, c, d], [a, b], S).
    S = [c, d].


Partie 6. Prédicat `subset(S1, S2)`
***********************************

Ce prédicat vérifie si S1 est un sous-ensemble de S2.

.. code-block:: prolog

    subset([], _). % Un ensemble vide est un sous-ensemble de n'importe quel ensemble.
    subset([H|T], S2) :- 
        member(H, S2), % Si H est dans S2, on continue avec le reste de S1.
        subset(T, S2).

Sous-section : Utilisation
--------------------------

.. code-block:: prolog

    ?- subset([1, 2], [1, 2, 3, 4, 5]).
    true.

    ?- subset([1, 2, 6], [1, 2, 3, 4, 5]).
    false.