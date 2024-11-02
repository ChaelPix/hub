# Bases Prolog

## 1. **Concepts Fondamentaux**

- **Programmation déclarative** : En Prolog, on ne décrit pas *comment* faire une tâche, mais on définit *ce qui est vrai* (les faits) et *comment ces vérités interagissent* (les règles).
- **Prédicat** : Une relation entre des objets ou des faits. C'est la base des programmes en Prolog. Exemples : `parent/2`, `ami/2`.
- **Clause** : Un fait ou une règle. Les faits sont des déclarations simples, et les règles décrivent comment les faits sont liés.

## 2. **Faits**
- **Syntaxe** : `predicat(arg1, arg2, ..., argN).`
- **Exemple** : 
  ```prolog
  parent(jean, marie).
  ami(paul, luc).
  ```

## 3. **Règles**
- **Syntaxe** : `conclusion :- condition1, condition2, ..., conditionN.`
- **Exemple** : 
  ```prolog
  grandparent(X, Y) :- parent(X, Z), parent(Z, Y).
  ```
  Ici, `grandparent(X, Y)` est vrai si `X` est parent de `Z` et `Z` est parent de `Y`.

## 4. **Variables**
- Commencent toujours par une majuscule ou un underscore (`_`).
- **Exemple** : `X`, `Personne`, `_Resultat`

## 5. **Constantes**
- Commencent par une minuscule ou sont entourées d'apostrophes si elles contiennent des caractères spéciaux.
- **Exemple** : `pierre`, `'Jean-Luc'`

## 6. **Listes**
- **Syntaxe** : `[elem1, elem2, ..., elemN]`
- **Notation Tête-Reste** : `[T|R]` où `T` est la tête et `R` le reste de la liste.
- **Exemples** :
  ```prolog
  [a, b, c]         % Liste de trois éléments
  [T|R] = [1, 2, 3] % T unifie avec 1, R unifie avec [2, 3]
  ```

## 7. **Prédicats prédéfinis**
- **is/2** : Affecte le résultat d'une expression arithmétique à une variable.
  ```prolog
  X is 5 + 2. % X prend la valeur 7
  ```
- **= /2** : Teste l'égalité entre deux termes.
  ```prolog
  X = 5. % X unifie avec 5
  ```
- **\= /2** : Vérifie que deux termes ne sont pas égaux.
  ```prolog
  X \= 3. % Vrai si X n'est pas égal à 3
  ```
- **\+ /1** : Négation (vrai si l'argument échoue).
  ```prolog
  \+ parent(jean, marie). % Vrai si jean n'est pas parent de marie
  ```

## 8. **Opérateurs arithmétiques**
- **Addition** : `+`
- **Soustraction** : `-`
- **Multiplication** : `*`
- **Division entière** : `//`
- **Modulo** : `mod`
- **Exemple** :
  ```prolog
  Y is X * 2 + 3.
  ```

## 9. **Conditions et Structures de contrôle**
- Les conditions sont exprimées en enchaînant les prédicats dans les règles avec des `,` (ET logique) et `;` (OU logique).
- **Exemple** :
  ```prolog
  parent_ou_grandparent(X, Y) :- parent(X, Y) ; grandparent(X, Y).
  ```

## 10. **Appels récursifs**
- Les prédicats peuvent s'appeler eux-mêmes pour traiter des structures comme les listes.
- **Exemple** :
  ```prolog
  longueur([], 0).
  longueur([_|R], N) :- longueur(R, N1), N is N1 + 1.
  ```

## 11. **Négation (non-logique)**
- Prolog utilise la **négation par échec** (`\+`), ce qui signifie que `\+ predicat` est vrai si `predicat` échoue.

## 12. **Variables anonymes**
- Représentées par `_` et utilisées lorsqu'on n'a pas besoin de connaître la valeur d'une variable.
- **Exemple** :
  ```prolog
  membre(E, [E|_]). % E est le premier élément
  ```

## 13. **Structures complexes**
- Prolog permet de représenter des structures complexes, par exemple :
  ```prolog
  point(3, 4). % Un point 2D avec des coordonnées
  ```

## 14. **Affichage et débogage**
- **write/1** : Affiche une valeur.
  ```prolog
  write('Bonjour'), nl.
  ```
- **trace/0** : Active le traçage pour suivre l'exécution.
- **notrace/0** : Désactive le traçage.

## 15. **Mode d'argumentation**
- **+** : L'argument doit être instancié.
- **-** : L'argument est une sortie, instanciée si le prédicat réussit.
- **?** : L'argument peut être instancié ou non.

## 16. **Contrôle du flux d'exécution**
- **cut (`!`)** : Utilisé pour empêcher le backtracking au-delà d'un certain point dans un prédicat.
- **fail/0** : Force l'échec du prédicat.

---

## Exemple complet
**Prédicat pour trouver le dernier élément d'une liste** :
```prolog
dernier(X, [X]).       % Cas de base : un seul élément
dernier(X, [_|R]) :- dernier(X, R). % Cas récursif : vérifier la queue
```