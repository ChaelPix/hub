# Dijkstra en Théorie des Graphes

![Diagramme Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

## Introduction
- Dijkstra est un algorithme de recherche du plus court chemin dans un graphe pondéré à poids non négatifs.
- Il se base sur l'exploration progressive des sommets en étendant le chemin le moins coûteux.

## Composants et Propriétés
- distance(u): Coût minimal connu du sommet de départ jusqu'au sommet u.
- prédécesseur(u): Permet de reconstruire le chemin optimal.
- L'algorithme garantit l'optimalité si les poids sont non négatifs.

## Fonctionnement
1. Initialiser la distance du point de départ à 0, toutes les autres à l'infini.
2. Placer tous les sommets non visités dans un ensemble.
3. Tant qu'il reste des sommets non visités :
   - Sélectionner le sommet u avec la distance minimale.
   - Pour chaque voisin v de u, si le chemin via u est meilleur, mettre à jour distance(v) et prédécesseur(v).
   - Marquer u comme visité.

## Pseudo-code
```
Initialiser:
    Pour chaque sommet u de G:
         distance(u) = ∞, prédécesseur(u) = null
    distance(depart) = 0
    Q = ensemble de tous les sommets

Tant que Q n'est pas vide :
    u = sommet de Q avec distance(u) minimale
    Retirer u de Q
    Pour chaque voisin v de u:
         Si v est encore dans Q et distance(u) + coût(u,v) < distance(v) :
             distance(v) = distance(u) + coût(u,v)
             prédécesseur(v) = u
```

