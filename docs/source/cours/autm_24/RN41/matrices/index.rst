========
Matrices
========

.. contents::
   :depth: 2
   :local:

Multiplication de deux matrices
===============================

Pour multiplier deux matrices :math:`A` et :math:`B`, il faut suivre ces étapes :

Étape 1 : Vérification de la compatibilité des dimensions
---------------------------------------------------------

Soit :math:`A` une matrice de taille :math:`n \times p` et :math:`B` une matrice de taille :math:`p \times q`. Le produit :math:`A \times B` est **défini uniquement** si le nombre de colonnes de :math:`A` (c’est-à-dire :math:`p`) est égal au nombre de lignes de :math:`B` (c’est-à-dire :math:`p`).

Étape 2 : Taille de la matrice résultante
-----------------------------------------

La matrice :math:`C = A \times B` aura une taille de :math:`n \times q`. Autrement dit, :math:`C` aura le même nombre de lignes que :math:`A` et le même nombre de colonnes que :math:`B`.

Étape 3 : Calcul de chaque élément de la matrice résultante
-----------------------------------------------------------

Les éléments :math:`c_{ij}` de la matrice :math:`C` sont obtenus en calculant le produit scalaire de la ième ligne de :math:`A` et de la jème colonne de :math:`B`. Chaque élément :math:`c_{ij}` est donné par la formule suivante :

.. math::

   c_{ij} = \sum_{k=1}^{p} a_{ik} \times b_{kj}

où :math:`a_{ik}` est l'élément de la ième ligne et la kème colonne de :math:`A`, et :math:`b_{kj}` est l'élément de la kème ligne et la jème colonne de :math:`B`.

Exemple détaillé
----------------

Soit :math:`A = \begin{pmatrix} 2 & 3 & -1 \\ 1 & 5 & 0 \end{pmatrix}` et :math:`B = \begin{pmatrix} 1 & 0 \\ 4 & 1 \\ -2 & 3 \end{pmatrix}`.

**Étape 1 : Vérification des dimensions**  
:math:`A` est de taille :math:`2 \times 3` (2 lignes et 3 colonnes) et :math:`B` est de taille :math:`3 \times 2` (3 lignes et 2 colonnes). Le produit :math:`A \times B` est donc possible.

**Étape 2 : Taille de la matrice résultante**  
La matrice résultante :math:`C` sera de taille :math:`2 \times 2`.

**Étape 3 : Calcul des éléments de :math:`C`**  
- :math:`c_{11} = (2 \times 1) + (3 \times 4) + (-1 \times -2) = 2 + 12 + 2 = 16`
- :math:`c_{12} = (2 \times 0) + (3 \times 1) + (-1 \times 3) = 0 + 3 - 3 = 0`
- :math:`c_{21} = (1 \times 1) + (5 \times 4) + (0 \times -2) = 1 + 20 + 0 = 21`
- :math:`c_{22} = (1 \times 0) + (5 \times 1) + (0 \times 3) = 0 + 5 + 0 = 5`

Donc :math:`C = \begin{pmatrix} 16 & 0 \\ 21 & 5 \end{pmatrix}`.

---

Conditions d'inversibilité d'une matrice
========================================

Une matrice carrée :math:`A` (de taille :math:`n \times n`) est **inversible** si, et seulement si, son déterminant est différent de zéro :

.. math::

   \det(A) \neq 0

Si cette condition est remplie, alors il existe une matrice :math:`A^{-1}` telle que :

.. math::

   A \times A^{-1} = A^{-1} \times A = I_n

où :math:`I_n` est la matrice identité d'ordre :math:`n` (matrice carrée avec des 1 sur la diagonale principale et des 0 ailleurs).

---

Inversion d'une matrice carrée
==============================

Cas des matrices :math:`2 \times 2`
-----------------------------------

Pour une matrice :math:`2 \times 2`, l'inverse est assez simple à calculer. Soit :math:`A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}`. Si :math:`\det(A) = ad - bc \neq 0`, alors l'inverse de :math:`A` est donné par la formule suivante :

.. math::

   A^{-1} = \frac{1}{\det(A)} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}

Exemple détaillé
----------------

Soit :math:`A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}`.

**Étape 1 : Calcul du déterminant**  
.. math::

   \det(A) = 1 \times 4 - 2 \times 3 = 4 - 6 = -2

Puisque :math:`\det(A) \neq 0`, la matrice est inversible.

**Étape 2 : Application de la formule**  
L'inverse de :math:`A` est donné par :

.. math::

   A^{-1} = \frac{1}{-2} \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}

.. math::

   A^{-1} = \begin{pmatrix} -2 & 1 \\ \frac{3}{2} & -\frac{1}{2} \end{pmatrix}

Cas des matrices de taille supérieure
-------------------------------------

Pour les matrices de taille :math:`n \times n` (où :math:`n > 2`), le processus est plus complexe. Voici les étapes à suivre :

Étape 1 : Calcul du déterminant
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Commencez par calculer le déterminant :math:`\det(A)`. Si :math:`\det(A) = 0`, la matrice n'est **pas inversible**. Sinon, vous pouvez continuer avec les étapes suivantes.

Étape 2 : Calcul des cofacteurs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pour chaque élément :math:`a_{ij}` de la matrice :math:`A`, il faut calculer son **cofacteur**. Le cofacteur :math:`C_{ij}` est obtenu en calculant le déterminant de la **sous-matrice** :math:`M_{ij}`, qui est obtenue en supprimant la ième ligne et la jème colonne de :math:`A`, puis en multipliant ce déterminant par :math:`(-1)^{i+j}`.

Étape 3 : Formation de la comatrice
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

La **comatrice** est la matrice composée de tous les cofacteurs. 

Étape 4 : Transposition de la comatrice
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Formez la **comatrice transposée**, qui est obtenue en prenant la transposée de la matrice des cofacteurs (c’est-à-dire en échangeant ses lignes et colonnes).

Étape 5 : Inversion de la matrice
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

L'inverse de la matrice :math:`A` est donnée par la formule suivante :

.. math::

   A^{-1} = \frac{1}{\det(A)} \times \text{com}(A)^T

Exemple détaillé pour une matrice :math:`3 \times 3`
----------------------------------------------------

Soit :math:`A = \begin{pmatrix} 3 & 2 & -3 \\ 5 & -1 & -2 \\ 1 & 1 & -1 \end{pmatrix}`.

**Étape 1 : Calcul du déterminant**  
On calcule :math:`\det(A)` par développement selon la première ligne :

.. math::

   \det(A) = 3 \times \det\begin{pmatrix} -1 & -2 \\ 1 & -1 \end{pmatrix} - 2 \times \det\begin{pmatrix} 5 & -2 \\ 1 & -1 \end{pmatrix} + (-3) \times \det\begin{pmatrix} 5 & -1 \\ 1 & 1 \end{pmatrix}

.. math::

   \det(A) = 3 \times (1 - 2) - 2 \times (-5 + 2) - 3 \times (5 + 1) = 3 \times (-1) - 2 \times (-3) - 3 \times 6

.. math::

   \det(A) = -3 + 6 - 18 = -15

**Étape 2 : Calcul des cofacteurs**  
Les cofacteurs sont calculés pour chaque élément de :math:`A`. Par exemple, pour :math:`a_{11} = 3`, le cofacteur est :

.. math::

   C_{11} = (-1)^{1+1} \times \det\begin{pmatrix} -1 & -2 \\ 1 & -1 \end{pmatrix} = 1 \times (-1) = -1

On répète ce processus pour chaque élément de la matrice :math:`A`.

**Étape 3 : Comatrice et transposée**  
La comatrice est la matrice des cofacteurs. Après transposition, on obtient la **comatrice transposée**.

**Étape 4 : Calcul de l'inverse**  
L'inverse de :math:`A` est donnée par :

.. math::

   A^{-1} = \frac{1}{\det(A)} \times \text{com}(A)^T
