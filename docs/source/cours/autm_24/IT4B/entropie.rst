Mini-Guide Entropie pour les Examens
====================================

Les 3 Formules Essentielles
---------------------------

.. math::

   H(X) &= -\sum p(x_i)\log_2(p(x_i)) \text{ [entropie simple]}\\
   H(X|Y) &= \sum P(Y=y_j)H(X|Y=y_j) \text{ [entropie conditionnelle]}\\
   I(X;Y) &= H(X) - H(X|Y) \text{ [information mutuelle]}

H(X|Y) Expliqué Simplement
--------------------------

Imaginez un jeu de devinettes avec deux dés (X et Y):

**Exemple Simple**: Table de probabilités
::

   P(X,Y) | Y=1   | Y=2   | P(X) total
   X=1    | 0.3   | 0.1   | 0.4
   X=2    | 0.2   | 0.3   | 0.5
   P(Y)   | 0.5   | 0.4   | 1.0

Pour calculer H(X|Y), on fait:

1. **Pour Y=1**:
   - P(X=1|Y=1) = 0.3/0.5 = 0.6
   - P(X=2|Y=1) = 0.2/0.5 = 0.4
   - H(X|Y=1) = -(0.6log₂(0.6) + 0.4log₂(0.4))

2. **Pour Y=2**:
   - P(X=1|Y=2) = 0.1/0.4 = 0.25
   - P(X=2|Y=2) = 0.3/0.4 = 0.75
   - H(X|Y=2) = -(0.25log₂(0.25) + 0.75log₂(0.75))

3. **H(X|Y) final**:
   .. math::
      H(X|Y) = P(Y=1)H(X|Y=1) + P(Y=2)H(X|Y=2)
      = 0.5 × [\text{résultat étape 1}] + 0.4 × [\text{résultat étape 2}]

En Pratique: Comment Calculer H(X|Y)
------------------------------------

1. Pour chaque colonne Y=yj:
   a. Diviser chaque case par le total de la colonne
   b. Calculer -p×log₂(p) pour chaque résultat
   c. Sommer ces valeurs → H(X|Y=yj)

2. Multiplier chaque H(X|Y=yj) par P(Y=yj)

3. Sommer tous ces produits

Procédure Mécanique pour l'Examen
---------------------------------

1. **Étape Préparation**:
   - Ajouter une ligne de sommes pour les colonnes
   - Ajouter une colonne de sommes pour les lignes

2. **Pour chaque colonne**:
   - Diviser chaque nombre par le total de la colonne
   - Appliquer -p×log₂(p)
   - Sommer → H(X|Y=yj)

3. **Calcul final**:
   - Multiplier chaque H(X|Y=yj) par la probabilité de la colonne
   - Sommer tous ces produits

Vérification
------------
- Les sommes de probabilités = 1
- H(X|Y) ≤ H(X)
- Tous les résultats sont positifs

Exemple Minimal Résolu
----------------------
::

   P(X,Y) | Y=0  | Y=1  | Somme ligne (P(X))
   X=0    | 0.2  | 0.1  | 0.3
   X=1    | 0.3  | 0.4  | 0.7
   Somme  | 0.5  | 0.5  | 1.0 (total)

1. H(X) avec P(X):
   - H(X) = -(0.3log₂(0.3) + 0.7log₂(0.7))

2. H(X|Y=0):
   - P(X=0|Y=0) = 0.2/0.5 = 0.4
   - P(X=1|Y=0) = 0.3/0.5 = 0.6
   - H(X|Y=0) = -(0.4log₂(0.4) + 0.6log₂(0.6))

3. H(X|Y):
   - H(X|Y) = 0.5×H(X|Y=0) + 0.5×H(X|Y=1)

4. I(X;Y):
   - I(X;Y) = H(X) - H(X|Y)

C'est Tout! Pour l'Examen
-------------------------
1. Appliquer mécaniquement ces 4 étapes
2. Ne pas chercher à comprendre la théorie
3. Vérifier les sommes = 1
4. Utiliser une calculatrice pour log₂
