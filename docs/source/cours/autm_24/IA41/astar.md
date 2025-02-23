# A*

## Introduction
- A* est un algorithme de recherche de chemin optimal.
- Il combine coût réel et heuristique pour guider l'exploration.

## Composants Clés
- g(n): Coût du chemin depuis le départ jusqu'au noeud n.
- h(n): Estimation du coût restant pour atteindre la destination.
- f(n): Somme g(n) + h(n) donnant le coût total estimé.

## Fonctionnement
1. Initialiser la liste ouverte avec le point de départ.
2. Sélectionner le noeud n avec le plus petit f(n) dans la liste ouverte.
3. Si n est la destination, arrêter et reconstruire le chemin.
4. Sinon, déplacer n vers la liste fermée.
5. Pour chaque voisin v de n :
   - Si v est déjà exploré, ignorer.
   - Calculer tentative_g = g(n) + coût(n, v).
   - Si v n'est pas dans la liste ouverte ou si tentative_g est inférieur à g(v) :
     - Mettre à jour g(v), h(v) et f(v).
     - Définir n comme parent de v.
     - Ajouter v dans la liste ouverte si nécessaire.
6. Répéter jusqu'à atteindre la destination ou épuiser les possibilités.

## Pseudo-code
```
Initialiser open_list avec le point de départ
Tant que open_list n'est pas vide :
    n = noeud avec le plus petit f(n) dans open_list
    Si n est la destination :
         Retourner le chemin construit
    Déplacer n de open_list à closed_list
    Pour chaque voisin v de n :
         Si v est dans closed_list, ignorer
         tentative_g = g(n) + coût(n, v)
         Si v n'est pas dans open_list ou tentative_g < g(v) :
              g(v) = tentative_g
              h(v) = estimée(v, destination)
              f(v) = g(v) + h(v)
              Parent(v) = n
              Si v n'est pas dans open_list, l'ajouter
```