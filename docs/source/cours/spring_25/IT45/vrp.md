# VRP – Heuristique de Clarke & Wright (Savings)

**Procédé (recette) :**
1. Calculer les économies (savings) pour chaque paire de clients i, j :
   - s(i,j) = c(depot,i) + c(depot,j) – c(i,j)
2. Trier les économies par ordre décroissant.
3. Initialiser chaque client dans une tournée séparée.
4. Pour chaque paire (i,j) dans l’ordre :
   - Si i et j sont en fin/début de deux tournées différentes et fusion possible (respect capacité), fusionner les tournées.
5. Répéter jusqu’à ce qu’aucune fusion ne soit possible.

**Exemple :**
Supposons un dépôt (0) et 3 clients (1,2,3), matrice des coûts :

|   | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| 0 | ∞ | 10| 15| 20|
| 1 |10 | ∞ | 35| 25|
| 2 |15 |35 | ∞ | 30|
| 3 |20 |25 |30 | ∞ |

- Économies :
  - s(1,2) = 10+15–35 = -10
  - s(1,3) = 10+20–25 = 5
  - s(2,3) = 15+20–30 = 5
- Trier : s(1,3)=5, s(2,3)=5, s(1,2)=-10
- Départ : tournées [0-1-0], [0-2-0], [0-3-0]
- Fusion possible :
  - Fusionner 1 et 3 : [0-1-3-0]
  - Reste [0-2-0]

**Résultat :**
- Deux tournées : [0-1-3-0] et [0-2-0]

**Tableau d'ordre des économies (savings triées)** :

| Paires (i,j) | s(i,j) |
|-------------|--------|
| (1,3)       |   5    |
| (2,3)       |   5    |
| (1,2)       |  -10   |

On traite les paires dans cet ordre pour tenter les fusions :
1. (1,3) → possible, on fusionne [0-1-0] et [0-3-0] en [0-1-3-0]
2. (2,3) → 2 et 3 sont déjà dans des tournées différentes ([0-2-0] et [0-1-3-0]), on vérifie la capacité, sinon on laisse.
3. (1,2) → 1 et 2 sont déjà dans des tournées différentes, mais économie négative, donc pas intéressant.

**Calcul du coût total z*** :

- Solution initiale (tournées séparées) :
  - [0-1-0] : 0→1 (10) + 1→0 (10) = 20
  - [0-2-0] : 0→2 (15) + 2→0 (15) = 30
  - [0-3-0] : 0→3 (20) + 3→0 (20) = 40
  - z_initial = 20 + 30 + 40 = 90

- Après fusion (solution finale) :
  - [0-1-3-0] : 0→1 (10) + 1→3 (25) + 3→0 (20) = 55
  - [0-2-0] : 0→2 (15) + 2→0 (15) = 30
  - z* = 55 + 30 = **85**

- Vérification :
  - Économie totale réalisée = z_initial – z* = 90 – 85 = 5
  - Somme des savings utilisés (ici, une fusion avec s(1,3)=5)

**Conclusion** :
- Le coût total z* est bien la somme des arcs parcourus dans la solution finale.
- Les savings servent à guider les fusions, mais on calcule toujours z* à partir des tournées finales.
