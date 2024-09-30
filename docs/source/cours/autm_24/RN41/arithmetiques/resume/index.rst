======
Résumé
======

.. contents::
   :depth: 2
   :local:

1. Calcul du Modulo avec un Entier Positif ou Négatif
------------------------------------------------------

- **Pour :math:`a \mod p`** (avec :math:`a \geq 0`) :  
  Divise :math:`a` par :math:`p` et prends le reste. Exemple : :math:`27 \mod 5 = 2` (car :math:`27 = 5 \times 5 + 2`).

- **Pour :math:`a \mod p` (avec :math:`a < 0`)** :  
  Prends d'abord :math:`|a| \mod p`, puis soustrais le reste de :math:`p` si nécessaire.  
  Exemple : :math:`-23 \mod 7 = 7 - (23 \mod 7) = 7 - 2 = 5`.

---

2. Calcul de Grandes Puissances Modulo :math:`p`
------------------------------------------------

**Technique de l’exponentiation modulaire rapide** :  
Lorsque tu dois calculer une grande puissance modulo :math:`p`, décompose la puissance en utilisant les carrés successifs.

**Étapes** :
1. Réduis la base :math:`a \mod p`.
2. Calcule les carrés successifs : :math:`a^2 \mod p`, :math:`a^4 \mod p`, :math:`a^8 \mod p`, etc.
3. Multiplie les résultats des puissances correspondant à la décomposition de l'exposant.

**Exemple** : Calculons :math:`7^{23} \mod 11`.

1. Réduisons :math:`7 \mod 11 = 7`.
2. :math:`7^2 \mod 11 = 49 \mod 11 = 5`.
3. :math:`7^4 \mod 11 = (7^2)^2 \mod 11 = 5^2 \mod 11 = 25 \mod 11 = 3`.
4. :math:`7^8 \mod 11 = (7^4)^2 \mod 11 = 3^2 = 9 \mod 11 = 9`.
5. :math:`7^{16} \mod 11 = 9^2 = 81 \mod 11 = 4`.

   Maintenant, décomposons :math:`23` : :math:`23 = 16 + 4 + 2 + 1`.  
   Donc, :math:`7^{23} \mod 11 = 7^{16} \times 7^4 \times 7^2 \times 7 \mod 11`.

6. :math:`4 \times 3 \times 5 \times 7 \mod 11 = 420 \mod 11 = 2`.

---

3. Calcul de l'Inverse Modulo
------------------------------

L’inverse de :math:`a` modulo :math:`p` est l’entier :math:`c` tel que :math:`a \times c \equiv 1 \ [p]`. Pour le calculer, utilise l’**algorithme d’Euclide étendu**.

**Étapes** :

1. Applique l'algorithme d'Euclide pour trouver :math:`\text{pgcd}(a, p)`. Si :math:`\text{pgcd}(a, p) = 1`, l'inverse existe.
2. Remonte les étapes de l'algorithme pour exprimer :math:`1` comme une combinaison linéaire :math:`au + pv = 1`. Le coefficient :math:`u` est l'inverse modulo :math:`p`.

**Exemple** : Trouvons l’inverse de :math:`17 \mod 43`.

- Applique l’algorithme d’Euclide :

  .. math::

     43 = 2 \times 17 + 9, \quad 17 = 1 \times 9 + 8, \quad 9 = 1 \times 8 + 1

  Le PGCD est 1, donc l'inverse existe.

- Remontons les calculs :

  .. math::

     1 = 9 - 1 \times 8 = 9 - 1 \times (17 - 1 \times 9) = 2 \times 9 - 1 \times 17

  Puis :

  .. math::

     1 = 2 \times (43 - 2 \times 17) - 1 \times 17 = 2 \times 43 - 5 \times 17

  L'inverse est donc :math:`-5 \mod 43 = 38`. L'inverse de :math:`17 \mod 43 = 38`.

---

4. Calcul de l'Indicateur d'Euler :math:`\phi(n)`
-------------------------------------------------

L'indicateur d'Euler :math:`\phi(n)` est le nombre d'entiers compris entre 1 et :math:`n` qui sont premiers avec :math:`n`. Utilise les formules suivantes pour calculer :math:`\phi(n)` efficacement.

- **Si :math:`n` est premier** : :math:`\phi(n) = n - 1`.
- **Si :math:`n = p_1^{k_1} \times p_2^{k_2} \times \cdots \times p_r^{k_r}`** (produit de nombres premiers), alors :

  .. math::

     \phi(n) = \phi(p_1^{k_1}) \times \phi(p_2^{k_2}) \times \cdots \times \phi(p_r^{k_r})

  où :math:`\phi(p^k) = p^k - p^{k-1}`.

**Exemple** : Calculons :math:`\phi(45)`.

- :math:`45 = 3^2 \times 5`, donc :

  .. math::

     \phi(45) = (3^2 - 3) \times (5 - 1) = 6 \times 4 = 24

  Il y a 24 entiers inférieurs à 45 qui sont premiers avec 45.

---

5. Application du Théorème d'Euler
-----------------------------------

Le **théorème d'Euler** énonce que si :math:`\text{pgcd}(a, n) = 1`, alors :

.. math::

   a^{\phi(n)} \equiv 1 \ [n]

Cela permet de simplifier le calcul de grandes puissances modulo :math:`n`.

**Exemple** : Calculons :math:`7^{40} \mod 30`.

- Trouvons :math:`\phi(30)` : :math:`30 = 2 \times 3 \times 5`, donc :

  .. math::

     \phi(30) = (2-1) \times (3-1) \times (5-1) = 1 \times 2 \times 4 = 8

- D'après le théorème d'Euler, :math:`7^8 \equiv 1 \ [30]`.  
  Puisque :math:`40 = 5 \times 8`, :math:`7^{40} = (7^8)^5 \equiv 1^5 = 1 \ [30]`.

---

Résumé des Techniques pour le Calcul Mental et la Résolution d'Exercices
=========================================================================

1. **Calcul du modulo** : Utilise la division euclidienne, et si :math:`a` est négatif, ajuste en prenant :math:`p - (a \mod p)`.

2. **Exponentiation modulaire rapide** : Utilise les carrés successifs pour simplifier les grandes puissances modulo :math:`p`.

3. **Inverse modulo** : Utilise l'algorithme d'Euclide étendu pour trouver l'inverse d’un entier modulo :math:`p`, en exprimant :math:`1` comme une combinaison linéaire de :math:`a` et :math:`p`.

4. **Indicateur d’Euler :math:`\phi(n)`** : Calcule :math:`\phi(n)` avec les formules basées sur la factorisation de :math:`n`.

5. **Théorème d’Euler** : Utilise ce théorème pour simplifier le calcul des puissances mod :math:`n`, particulièrement dans les systèmes cryptographiques.