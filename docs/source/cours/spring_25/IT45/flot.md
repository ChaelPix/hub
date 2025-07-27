# Flot Maximal (Ford-Fulkerson)

1. Initialiser tous les flots φ(i,j) = 0.
2. Tant qu'il existe un chemin améliorant de s à p (arcs non saturés) :
   - Trouver un tel chemin (BFS).
   - Calculer δ = min capacité résiduelle sur le chemin.
   - Augmenter le flot de δ sur les arcs directs, diminuer de δ sur les arcs inverses.
3. Arrêter quand plus de chemin améliorant.

# Flot Max à Coût Min (Bernard Roy)

Envoyer le plus de flot possible de s à p, avec le coût total minimal.

## Procédure

1. **Initialiser** tous les flots φ(i,j) = 0.

2. **Graphe d’écart** :
   - A partir des φ(i,j) du graphe flot maximal :
   - Pour chaque arc (i,j) du réseau :
     - Si φ(i,j) < c(i,j) :  
       → arc direct (i,j), capacité résiduelle = c(i,j) - φ(i,j), coût = p(i,j)
     - Si φ(i,j) > 0 :  
       → arc inverse (j,i), capacité = φ(i,j), coût = -p(i,j)

3. **Tant qu’il existe un chemin de s à p dans le graphe d’écart** :
   - Trouver le chemin de coût total minimal (Dijkstra/Bellman).
   - Calculer δ = plus petite capacité sur ce chemin.
   - Pour chaque arc du chemin :
     - Si arc direct (i,j) : φ(i,j) += δ
     - Si arc inverse (j,i) : φ(j,i) -= δ
   - Mettre à jour le graphe d’écart.

4. **Arrêt** : plus de chemin de s à p.

