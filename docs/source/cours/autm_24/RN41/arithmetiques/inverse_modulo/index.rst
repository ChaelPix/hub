==============
Inverse Modulo
==============

.. contents::
   :depth: 2
   :local:

1. Définition de l'inverse modulo
----------------------------------

L'**inverse multiplicatif modulo** d'un entier :math:`a` par rapport à un entier :math:`p` est un entier :math:`c` tel que :

.. math::

   a \times c \equiv 1 \ [p]

Cela signifie que :math:`c` est l’inverse de :math:`a` modulo :math:`p`, et que lorsque :math:`a` est multiplié par :math:`c`, le résultat est congru à 1 modulo :math:`p`. L'inverse modulo existe uniquement si :math:`a` et :math:`p` sont **premiers entre eux**, c’est-à-dire si :math:`\text{pgcd}(a, p) = 1`.

**Remarque** : L'inverse modulo n'est pas toujours défini. Si :math:`a` et :math:`p` ne sont pas premiers entre eux (c'est-à-dire si :math:`\text{pgcd}(a, p) \neq 1`), alors :math:`a` n'a pas d'inverse modulo :math:`p`.

---

2. Méthode de calcul avec l'algorithme d'Euclide
------------------------------------------------

L'inverse modulo peut être calculé efficacement en utilisant l'**algorithme d'Euclide étendu**, qui est une généralisation de l'algorithme d'Euclide pour calculer le PGCD.

Étapes de l'algorithme d'Euclide étendu :

1. Appliquez l'algorithme d'Euclide pour trouver :math:`\text{pgcd}(a, p)`. Si :math:`\text{pgcd}(a, p) \neq 1`, il n'y a pas d'inverse pour :math:`a` modulo :math:`p`.
2. Si :math:`\text{pgcd}(a, p) = 1`, remontez les équations de l'algorithme d'Euclide pour exprimer 1 comme une combinaison linéaire de :math:`a` et :math:`p` :

   .. math::

      au + pv = 1

3. Le coefficient :math:`u` est l'inverse de :math:`a` modulo :math:`p`. Si :math:`u` est négatif, prenez :math:`u \mod p` pour obtenir un résultat positif.

Exemple d'algorithme d'Euclide étendu :

Calculons l'inverse de 17 modulo 43.

1. Appliquons l'algorithme d'Euclide pour trouver :math:`\text{pgcd}(17, 43)` :

   .. math::

      43 = 2 \times 17 + 9

   .. math::

      17 = 1 \times 9 + 8

   .. math::

      9 = 1 \times 8 + 1

   .. math::

      8 = 8 \times 1 + 0

Le PGCD est 1, donc 17 a bien un inverse modulo 43.

2. Remontons les équations :

   .. math::

      1 = 9 - 1 \times 8

   .. math::

      1 = 9 - 1 \times (17 - 1 \times 9) = 2 \times 9 - 1 \times 17

   .. math::

      1 = 2 \times (43 - 2 \times 17) - 1 \times 17 = 2 \times 43 - 5 \times 17

   Donc, :math:`-5 \times 17 + 2 \times 43 = 1`.

3. L'inverse de 17 modulo 43 est donc :math:`-5`. Pour obtenir un résultat positif :

   .. math::

      -5 \mod 43 = 43 - 5 = 38

   Ainsi, l'inverse de 17 modulo 43 est :math:`38`.

---

3. Exemples d'inversion modulo
-------------------------------

Exemple 1 : Trouver l'inverse de 3 modulo 11.

1. Appliquons l'algorithme d'Euclide pour trouver :math:`\text{pgcd}(3, 11)` :

   .. math::

      11 = 3 \times 3 + 2

   .. math::

      3 = 1 \times 2 + 1

   .. math::

      2 = 2 \times 1 + 0

   Le PGCD est 1, donc l'inverse existe.

2. Remontons les équations :

   .. math::

      1 = 3 - 1 \times 2

   .. math::

      1 = 3 - 1 \times (11 - 3 \times 3) = 4 \times 3 - 1 \times 11

   L'inverse de 3 modulo 11 est donc :math:`4`.

Exemple 2 : Trouver l'inverse de 7 modulo 26.

1. Appliquons l'algorithme d'Euclide :

   .. math::

      26 = 3 \times 7 + 5

   .. math::

      7 = 1 \times 5 + 2

   .. math::

      5 = 2 \times 2 + 1

   .. math::

      2 = 2 \times 1 + 0

   Le PGCD est 1, donc l'inverse existe.

2. Remontons les équations :

   .. math::

      1 = 5 - 2 \times 2 

   .. math::

      1 = 5 - 2 \times (7 - 1 \times 5) = 3 \times 5 - 2 \times 7 

   .. math::

      1 = 3 \times (26 - 3 \times 7) - 2 \times 7 = 3 \times 26 - 11 \times 7 

   L'inverse de 7 modulo 26 est donc :math:`-11`. Pour obtenir un résultat positif :

   .. math::

      -11 \mod 26 = 26 - 11 = 15

   L'inverse de 7 modulo 26 est :math:`15`.

---

4. Indicateur d'Euler
----------------------

L'**indicateur d'Euler** (ou **fonction :math:`\phi`**) est une fonction qui compte le nombre d'entiers compris entre 1 et :math:`n` qui sont premiers avec :math:`n`. En d'autres termes, pour un entier :math:`n`, :math:`\phi(n)` est le nombre d'entiers :math:`k` tels que :math:`1 \leq k < n` et :math:`\text{pgcd}(k, n) = 1`.

La fonction :math:`\phi(n)` est particulièrement utile dans le cadre de la cryptographie, notamment dans l'algorithme RSA, et joue un rôle important dans le **théorème d'Euler**.

Propriétés de l'indicateur d'Euler :

1. Si :math:`n` est premier, alors :math:`\phi(n) = n - 1`.  
   En effet, tous les entiers entre 1 et :math:`n-1` sont premiers avec :math:`n`.

2. Si :math:`n` est le produit de deux nombres premiers distincts :math:`p` et :math:`q`, alors :

   .. math::

      \phi(n) = \phi(p \times q) = (p-1) \times (q-1)
   
3. Si :math:`n = p^k` où :math:`p` est un nombre premier, alors :

   .. math::

      \phi(p^k) = p^k - p^{k-1}

Théorème d'Euler :

Le théorème d'Euler est une généralisation du petit théorème de Fermat. Il énonce que, pour tout entier :math:`a` tel que :math:`\text{pgcd}(a, n) = 1`, on a :

.. math::

   a^{\phi(n)} \equiv 1 \ [n]

C'est un résultat clé qui simplifie le calcul de grandes puissances modulo :math:`n`.

Exemple d'application de l'indicateur d'Euler :

Calculons :math:`\phi(15)`, où :math:`n = 15 = 3 \times 5`.

- Comme 15 est le produit de deux nombres premiers, on applique la propriété :

  .. math::

     \phi(15) = \phi(3 \times 5) = (3-1) \times (5-1) = 2 \times 4 = 8

  Donc, il y a 8 entiers inférieurs à 15 qui sont premiers avec 15.

---