# A* en Théorie des Graphes

## Introduction
- A* est un algorithme de recherche du plus court chemin dans un graphe.
- Il combine le coût réel et une estimation heuristique pour garantir l'optimalité.
- Utilisé en mathématiques pour prouver l'existence de chemins optimaux lorsque l'heuristique est admissible et cohérente.

## Composants Mathématiques
- g(n) : Coût réel du chemin depuis le sommet de départ jusqu'au sommet n.
- h(n) : Estimation (heuristique) du coût minimal pour aller de n au sommet objectif.
- f(n) = g(n) + h(n) : Fonction de coût total que l'algorithme cherche à minimiser.

## Fonctionnement et Propriétés
1. Initialiser la liste ouverte avec le sommet de départ, avec f(start)=h(start).
2. Sélectionner le sommet n ayant le plus petit f(n) dans la liste ouverte.
3. Si n est le sommet objectif, reconstruire le chemin optimal.
4. Sinon, déplacer n dans la liste fermée et pour chaque voisin v de n :
   - Calculer g(v) = g(n) + coût(n, v) et f(v) = g(v) + h(v).
   - Si v n'est pas déjà exploré ou si ce nouveau chemin est meilleur, mettre à jour ses valeurs et noter n en tant que prédécesseur.
5. Répéter tant que la liste ouverte n'est pas vide.

### Propriétés Mathématiques
- Optimalité : A* donne une solution optimale si h(n) est admissible (jamais surestime le coût réel) et cohérente.
- Complexité : Dépend du choix de l'heuristique et de la structure du graphe.
- Remarque : L'algorithme résout le problème de chemin le plus court dans un graphe pondéré à poids non négatifs.

## Pseudo-code
```
Initialiser open_list avec le sommet départ (f = h)
Tant que open_list n'est pas vide :
    n = sommet avec le plus petit f(n) dans open_list
    Si n est l'objectif :
         Retourner chemin reconstruit à partir des prédécesseurs
    Déplacer n de open_list à closed_list
    Pour chaque voisin v de n :
         g(v) = g(n) + coût(n, v)
         f(v) = g(v) + h(v)
         Si v n'est pas dans open_list ou g(v) est amélioré :
              Mettre à jour g(v), f(v) et prédécesseur de v
              Ajouter v à open_list si nécessaire
