# TSP – Heuristique du Plus Proche Voisin (matrice symétrique)

**Procédé (recette) :**
1. Choisir un sommet de départ.
2. Aller à la ville la plus proche non visitée.
3. Répéter jusqu’à ce que toutes les villes soient visitées.
4. Revenir au point de départ.

**Exemple (matrice symétrique) :**

|   | A | B | C | D |
|---|---|---|---|---|
| A | ∞ | 2 | 9 | 10|
| B | 2 | ∞ | 6 | 4 |
| C | 9 | 6 | ∞ | 8 |
| D |10 | 4 | 8 | ∞ |

Départ A :
- A → B (2)
- B → D (4)
- D → C (8)
- C → A (9)
Total = 2 + 4 + 8 + 9 = **23**

---

# TSP – Heuristique de Christofides

1. Calculer l’arbre couvrant de poids minimal (ACPM).
2. Trouver les sommets de degré impair dans l’ACPM.
3. Apparier ces sommets par paires (appariement parfait de coût minimal).
4. Fusionner ACPM + appariement → multigraphe eulérien.
5. Trouver un circuit eulérien, puis le transformer en circuit hamiltonien (TSP) en sautant les sommets déjà visités.

**Exemple (même matrice) :**
- ACPM : A–B (2), B–D (4), D–C (8)
- Sommets impairs : A, C
- Appariement min : A–C (9)
- Fusionner, trouver circuit eulérien : A–B–D–C–A
- Circuit TSP : A–B–D–C–A, coût = 2+4+8+9 = **23**
