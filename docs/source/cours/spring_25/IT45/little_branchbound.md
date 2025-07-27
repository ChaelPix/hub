# TSP – Algorithme de Little   (Branch & Bound)

1. **Initialisation**
   - Matrice D = (d_ij) des distances, d_ii = ∞.
   - z_best = +∞, Solution_best = [].

2. **Réduction**
   - Soustraire le min de chaque ligne, puis de chaque colonne.
   - borne minimale = somme des valeurs soustraites
   - z = borne minimale.

3. **Séparation**
   - Pour chaque zéro, calculer la pénalité = min ligne + min colonne (autour).
   - Choisir le zéro de pénalité max : (i,j).

4. **Branchement**
   - **Inclure (i,j)** : supprimer ligne i, colonne j, interdire (j,i), réduire, MAJ z.
   - **Exclure (i,j)** : mettre d_ij = ∞, réduire, MAJ z.
   - Ajouter les deux nœuds à la pile.

5. **Élagage**
   - Si z ≥ z_best, abandonner la branche.
   - Si solution complète et z < z_best, MAJ z_best et Solution_best.

6. **Fin**
   - Solution_best = circuit optimal.

