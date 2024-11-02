# Tips

## 1. **Changer de mentalité : Déclaratif vs Impératif**
- En C++ et dans d'autres langages impératifs, vous dites à l'ordinateur **comment** accomplir une tâche, étape par étape.
- En Prolog, vous décrivez **ce qui est vrai** et laissez Prolog **découvrir comment** cela peut être vrai en explorant les faits et les règles.

**Analogie** : Imaginez que vous dites à un ami « Je veux que tu trouves le chemin entre la maison et le parc. » En C++, vous donneriez des instructions précises (« Va tout droit pendant 100 mètres, tourne à gauche, etc. »). En Prolog, vous diriez « Le chemin existe si la maison est connectée à la rue, et la rue est connectée au parc. » Ensuite, l'ami explore ces connexions pour trouver la route.

## 2. **La Base : Faits et Règles**
**Faits** : Des déclarations simples sur le monde.
```prolog
ami(jean, paul).
parent(marie, jean).
```
Cela dit simplement que Jean est l'ami de Paul, et Marie est la mère de Jean. Pas de logique conditionnelle ici.

**Règles** : Des relations basées sur d'autres faits ou règles.
```prolog
grandparent(X, Y) :- parent(X, Z), parent(Z, Y).
```
Cela dit que X est le grand-parent de Y si X est le parent de Z et Z est le parent de Y.

**Exercice pour comprendre** : Essayez d'écrire des faits simples sur votre famille ou vos amis et de créer des règles qui expriment des relations comme « cousin », « oncle », etc.

## 3. **Comment raisonner en Prolog ?**
- **Posez-vous des questions** : Pour chaque règle ou fait, demandez-vous : *Quelles conditions doivent être remplies pour que cela soit vrai ?*
- **Réfléchissez en termes de résultats attendus** : Prolog va explorer toutes les combinaisons possibles de faits et de règles pour satisfaire la requête.

## 4. **Exemple détaillé : Prédicat `membre`**
Prenons le prédicat simple qui vérifie si un élément est dans une liste :
```prolog
membre(X, [X|_]).        % Cas de base : X est la tête de la liste, donc c'est un membre.
membre(X, [_|R]) :- membre(X, R).  % Cas récursif : Cherche X dans le reste de la liste.
```

**Comment cela fonctionne ?**
- **Cas de base** : Si l'élément `X` est la tête de la liste (le premier élément), Prolog réussit immédiatement.
- **Cas récursif** : Si l'élément `X` n'est pas la tête, Prolog ignore la tête (symbolisée par `_`) et cherche `X` dans le reste de la liste `R`.

**Déclenchement du déclic** : Visualisez cela comme un processus de filtrage. Imaginez un jeu de cartes. Si vous cherchez un `7` :
1. Vous regardez la première carte. Si c'est un `7`, vous avez terminé.
2. Si ce n'est pas le cas, vous passez à la carte suivante et répétez.

## 5. **Le Cut (`!`) et le Backtracking**
Le `cut` est un moyen de limiter la recherche. Imaginez que Prolog est un détective qui essaie toutes les options possibles pour résoudre un cas. Le `cut` dit au détective : « Ne cherche plus d'autres solutions possibles ici. Tu as trouvé ce que tu veux. »

**Exemple** :
```prolog
positif(X) :- X > 0, !, write('Nombre positif'), nl.
positif(_) :- write('Nombre non positif'), nl.
```
- Si `X > 0` est vrai, Prolog affiche « Nombre positif » et s'arrête (à cause du `!`).
- Si `X > 0` échoue, il continue et exécute la deuxième règle, affichant « Nombre non positif ».

**Analogie C++** : C'est un peu comme utiliser un `return` ou un `break` dans un `if` pour arrêter l'exécution et ne pas vérifier d'autres conditions.

## 6. **Approche pas à pas pour créer un prédicat**

1. **Comprendre le problème** : Lisez et décomposez ce qui est demandé.
2. **Définir le cas de base** : Quelles sont les conditions minimales pour que le prédicat réussisse ?
3. **Ajouter la récursion** : Comment le prédicat doit-il se comporter lorsqu'il s'appelle sur des sous-problèmes ?
4. **Tester mentalement** : Simulez des exécutions sur papier.

**Exemple complet : Calcul de la longueur d'une liste**
```prolog
longueur([], 0).               % Cas de base : La longueur d'une liste vide est 0.
longueur([_|R], N) :-          % Cas récursif : On ignore la tête et on mesure la queue.
    longueur(R, N1),           % Appel récursif sur la queue.
    N is N1 + 1.               % N est la longueur de la queue + 1.
```