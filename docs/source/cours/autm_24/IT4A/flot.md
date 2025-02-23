# Graphes de Flots

## Introduction
- Un graphe de flot modélise des réseaux (réseaux de transport, télécommunications, etc.).
- On y définit un flux maximal allant de la source au puits, en respectant les capacités.

## Concepts Clés
- **Flot (f):** Quantité circulant dans le graphe.
- **Capacité (c):** Limite maximale sur chaque arc.
- **Source (s) et Puits (t):** Point de départ et d’arrivée des flux.
- **Conservation:** Pour tout sommet sauf s et t, le flux entrant est égal au flux sortant.

## Algorithme de Résolution
- **Ford-Fulkerson:** Cherche des chemins augmentants pour améliorer le flot.
- **Edmonds-Karp:** Variante utilisant une recherche en largeur pour sélectionner le chemin le plus court augmentant.

## Pseudo-code de Ford-Fulkerson
```
f = 0
Tant que existe un chemin p de s à t dans le graphe résiduel :
    δ = min{ capacité résiduelle sur p }
    Pour chaque arc (u,v) de p :
         f(u,v) += δ
         f(v,u) -= δ
    f = f + δ
Retourner f
```

## Propriétés et Théorème
- **Théorème du flot maximum/coupe minimale :** Le flot maximal est égal à la capacité minimale d'une coupe séparant s et t.
- La méthode repose sur l'amélioration itérative jusqu'à saturation.
