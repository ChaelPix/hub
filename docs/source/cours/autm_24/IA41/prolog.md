# Prolog

## Bases de Prolog
- **Faits:** Déclarations simples, par exemple :
  ```
  parent(anne, bob).
  ```
- **Règles:** Formules logiques pour définir des relations, ex :
  ```
  grandparent(X, Z) :- parent(X, Y), parent(Y, Z).
  ```
- **Requêtes:** Pour interroger la base, ex :
  ```
  ?- grandparent(anne, Who).
  ```
- **Variables:** Elles commencent par une majuscule (ex : `X`, `Y`).

## Récursion en Prolog
- **Concept:** Une règle récursive s'appelle elle-même pour traiter des cas répétés.
- **Exemple classique:** Calcul de la longueur d'une liste.
  ```
  % Cas de base
  longueur([], 0).
  
  % Cas récursif
  longueur([_|T], N) :-
      longueur(T, N1),
      N is N1 + 1.
  ```
- **Récursion terminale:** Si le dernier appel d'une fonction est la récursion, ce qui peut optimiser l'exécution.
- **La coupe (!):** 
  - C'est un opérateur qui "coupe" l'exploration de solutions alternatives.
  - En gros, c'est comme dire "ok, on arrête de chercher d'autres réponses ici".
  - Exemple simple :
    ```
    membre(X, [X|_]) :- !.
    membre(X, [_|T]) :- membre(X, T).
    ```

## Manipulation de matrices
Pour manipuler des matrices (représentées comme des listes de listes), voici quelques astuces :
- Une matrice est [[Ligne1], [Ligne2], ...].
- Pour accéder à un élément, on peut définir des prédicats de parcours.
  
Exemple pour récupérer la première ligne et la première colonne :
  ```
  % Récupère la première ligne d'une matrice
  premiere_ligne([L|_], L).

  % Récupère le premier élément d'une liste
  premier_element([E|_], E).

  % Récupère l'élément en position (0,0) dans une matrice
  element_00(Mat, E) :-
      premiere_ligne(Mat, L),
      premier_element(L, E).
  ```
  
