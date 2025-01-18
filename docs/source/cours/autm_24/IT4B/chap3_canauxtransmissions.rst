Mini-Guide Canaux de Transmission pour les Examens
==================================================

Les 3 Concepts Essentiels
-------------------------

1. **Canal de transmission = {X, Y, p(yi/xj)}**:
   - X = alphabet d'entrée
   - Y = alphabet de sortie
   - p(yi/xj) = probabilités de transition

2. **Types de canaux**:
   - Canal symétrique (même proba par ligne/colonne)
   - Canal binaire symétrique (CBS)
   - Canal à effacement

3. **Capacité C = maxp(x) I(X,Y)**:
   - Pour canal symétrique: utiliser équiprobabilité
   - C = 1 - H2(p) pour CBS
   - C = 1 - p pour canal à effacement

Formules Fondamentales
----------------------

.. math::

   I(X,Y) &= H(X) - H(X|Y) = H(Y) - H(Y|X) \\
   H_2(p) &= -p\log_2(p) - (1-p)\log_2(1-p) \\
   C &= \max_{p(x)} I(X,Y)

Procédure de Calcul de la Capacité
----------------------------------

1. **Si canal symétrique**:
   - Poser p(xi) = 1/n pour tout i
   - Calculer I(X,Y) directement

2. **Si canal non symétrique**:
   - Calculer H(Y) et H(Y|X)
   - Maximiser I(X,Y)

3. **Pour vérifier transmission possible**:
   - Calculer H'(S) = H(S) × DS
   - Calculer C' = C × DC
   - Vérifier H'(S) < C'

Exemple CBS Résolu
------------------
Canal binaire symétrique p = 0.1:
::

    Entrée X | Sortie Y | Probabilité
    0 → 0     | 0.9
    0 → 1     | 0.1
    1 → 0     | 0.1
    1 → 1     | 0.9

1. Comme symétrique, p(X=0) = p(X=1) = 1/2

2. Calcul H(Y):
   - p(Y=0) = p(Y=1) = 1/2
   - H(Y) = 1 bit

3. Calcul H(Y|X):
   - H(Y|X) = H2(0.1)

4. Capacité:
   C = 1 - H2(0.1) ≈ 0.531 bits

Vérifications Importantes
-------------------------

1. **Pour tout canal**:
   - Somme des probabilités par ligne = 1
   - 0 ≤ C ≤ log2(min(|X|,|Y|))
   - C = 0 pour canal inutile

2. **Pour transmission**:
   - H'(S) < C'
   - DS × H(S) < DC × C

Pièges à Éviter
---------------

1. **Ne pas oublier**:
   - Vérifier symétrie avant calcul
   - Convertir unités (Kbits/s)
   - Vérifier somme = 1

2. **Attention à**:
   - Bien identifier le type de canal
   - Utiliser la bonne formule de capacité
   - Convertir log2 en bits

Pour l'Examen
-------------

1. Identifier le type de canal
2. Appliquer procédure correspondante
3. Pour transmission: comparer H'(S) et C'
4. Vérifier unités et conversions
