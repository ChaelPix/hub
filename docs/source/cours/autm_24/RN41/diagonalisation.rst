Guide de Survie : Diagonalisation en Examen
===========================================

.. warning::
   Ce guide est optimisé pour l'examen avec une Casio Graph 35+E

Avant de Commencer
------------------
1. Enregistrer dans la calculatrice:
   * Menu MATRIX
   * Créer MAT A (matrice donnée)
   * Créer MAT I (matrice identité de même taille)

Recette pour Matrices 2×2
-------------------------

ÉTAPE 1: Polynôme Caractéristique
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Pour A = [a b]
          [c d]

1. **Calculer det(A - λI)**:
   * p(λ) = (a-λ)(d-λ) - bc
   * = λ² - (a+d)λ + (ad-bc)
   * [CALC] Menu EQUA pour résoudre p(λ) = 0

2. **Noter les valeurs propres λ₁ et λ₂**:
   * Si λ₁ ≠ λ₂: Continue
   * Si λ₁ = λ₂: Vérifier si A déjà diagonale

ÉTAPE 2: Vecteurs Propres
~~~~~~~~~~~~~~~~~~~~~~~~~
Pour chaque λ:

1. **Former (A - λI)**:
   * [CALC] MAT A - λ×MAT I

2. **Résoudre (A - λI)X = 0**:
   * Une équation suffit souvent
   * Exprimer y en fonction de x
   * Simplifier avec des nombres entiers

ÉTAPE 3: Matrices P et D
~~~~~~~~~~~~~~~~~~~~~~~~
1. **Matrice P**: Mettre les vecteurs en colonnes
2. **Matrice D**: Mettre les λ sur la diagonale

Exemple du Final (2×2)
----------------------
A = [0   1]
    [y -4+2x]

1. **Polynôme**:
   * p(λ) = λ² - 2xλ + (4-y)
   * [CALC] Δ = 4x² + 4y - 16
   * Diagonalisable si x² + y > 4

2. **Résolution**:
   Pour λ₁ et λ₂ trouvés:
   * (A - λᵢI)X = 0
   * Former P avec les vecteurs trouvés
   * D = [λ₁  0]
         [0  λ₂]

Cas Spéciaux Fréquents
----------------------
1. **Matrice Triangulaire**:
   * Valeurs propres = diagonale
   * Exemple du TD: [3 0 0]
                   [2 2 0]
                   [1 1 1]
   * λ₁ = 3, λ₂ = 2, λ₃ = 1

2. **Questions de Cours**:
   * Si λ est v.p. de A:
     * λⁿ est v.p. de Aⁿ
     * 1/λ est v.p. de A⁻¹
   * det(A) = produit des v.p.
   * tr(A) = somme des v.p.

Vérifications Finales
---------------------
1. P⁻¹AP = D
2. Les vecteurs sont en nombres entiers
3. Ne pas oublier la condition de diagonalisation

Formules des Déterminants (À APPRENDRE PAR CŒUR)
------------------------------------------------

1. DÉTERMINANT 2×2
~~~~~~~~~~~~~~~~~~
Pour |a b|
        |c d|

det = ad - bc

.. tip::
   Mémo visuel: Produit diagonale principale - Produit diagonale secondaire

2. DÉTERMINANT 3×3 (Méthode de Sarrus)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Pour |a b c|
        |d e f|
        |g h i|

det = a×e×i + b×f×g + c×d×h - (c×e×g + a×f×h + b×d×i)

.. tip::
   Mémo: 
   1. Recopier les 2 premières colonnes à droite
   2. Somme des produits descendants (→) 
   3. Moins somme des produits montants (←)

3. EXEMPLES COURANTS
~~~~~~~~~~~~~~~~~~~~

A) Pour det(A - λI) en 2×2:
   |a-λ  b |
   |c    d-λ|
   = (a-λ)(d-λ) - bc
   = λ² - (a+d)λ + (ad-bc)

B) Pour det(A - λI) en 3×3:
   |a-λ  b    c |
   |d    e-λ  f |
   |g    h    i-λ|
   = -λ³ + (a+e+i)λ² - ...

4. ASTUCES RAPIDES
~~~~~~~~~~~~~~~~~~
* Si matrice triangulaire: det = produit diagonale
* Pour A - λI: toujours développer en factorisant λ
* Vérifier que le terme de plus haut degré est (-1)ⁿλⁿ

.. warning::
   En examen: Factoriser le polynôme caractéristique 
   pour trouver les valeurs propres plus facilement !

Simplification des Vecteurs Propres - Guide Express
---------------------------------------------------

1. RÈGLE D'OR
~~~~~~~~~~~~~
* Toujours choisir les nombres entiers les plus petits possibles
* Si x est libre, on prend souvent x = 1

2. CAS TYPIQUES
~~~~~~~~~~~~~~~
A) Cas: y = x
   * Solution: x = 1, y = 1
   * Vecteur: e = [1]
              [1]

B) Cas: y = -x
   * Solution: x = 1, y = -1
   * Vecteur: e = [ 1]
              [-1]

C) Cas: y = 2x
   * Solution: x = 1, y = 2
   * Vecteur: e = [1]
              [2]

3. CAS AVEC FRACTIONS
~~~~~~~~~~~~~~~~~~~~~
Si vous obtenez y = x/2:
1. Multiplier tout par 2
2. Prendre x = 2, y = 1
3. Vecteur final: e = [2]
                     [1]

4. EXEMPLE DU FINAL
~~~~~~~~~~~~~~~~~~~
Pour (A - λI)X = 0:

1. Si vous obtenez: y = -3x
   * Prendre x = 1
   * Donc y = -3
   * e = [ 1]
         [-3]

2. Si vous obtenez: y = x + z et z libre
   * Prendre x = 1, z = 0
   * Donc y = 1
   * e = [1]
         [1]
         [0]

5. VÉRIFICATION
~~~~~~~~~~~~~~~
* Les composantes doivent être des entiers
* Le vecteur doit être le plus simple possible
* [CALC] Vérifier Ae = λe

.. tip::
   Si tous les coefficients sont des fractions, 
   multipliez le vecteur par leur dénominateur commun 
   pour obtenir des entiers.

.. tip::
   En examen:
   * Commencer par les cas spéciaux
   * Privilégier les calculs simples
   * Vérifier la cohérence des résultats
