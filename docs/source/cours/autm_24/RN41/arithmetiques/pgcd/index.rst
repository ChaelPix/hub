PGCD
====

.. contents::
   :depth: 2
   :local:

1. Définition du PGCD
---------------------

Le **PGCD** (Plus Grand Commun Diviseur) de deux entiers :math:`a` et :math:`b` est le plus grand entier qui divise à la fois :math:`a` et :math:`b` sans laisser de reste. On note le PGCD de :math:`a` et :math:`b` comme suit :

.. math::

   \text{pgcd}(a, b)

**Propriétés du PGCD :**

1. :math:`\text{pgcd}(a, b) \leq \min(a, b)`, c'est-à-dire que le PGCD est toujours inférieur ou égal aux deux nombres.
2. Si :math:`b` divise :math:`a`, alors :math:`\text{pgcd}(a, b) = b`.
3. Si :math:`a = 0`, alors :math:`\text{pgcd}(0, b) = b` pour tout :math:`b`.
4. Le PGCD est **symétrique** : :math:`\text{pgcd}(a, b) = \text{pgcd}(b, a)`.

**Exemple** :  
Soit :math:`a = 18` et :math:`b = 24`. Les diviseurs de 18 sont :math:`1, 2, 3, 6, 9, 18`, et ceux de 24 sont :math:`1, 2, 3, 4, 6, 8, 12, 24`. Le plus grand diviseur commun est 6, donc :

.. math::

   \text{pgcd}(18, 24) = 6

---

2. Théorème de Gauss
---------------------

Le **Théorème de Gauss** traite des relations entre le PGCD et les opérations de multiplication. Il est utilisé pour simplifier les calculs de divisibilité. Il peut se formuler ainsi :

Si :math:`\text{pgcd}(a, b) = 1` (c'est-à-dire que :math:`a` et :math:`b` sont **premiers entre eux**), et si :math:`a` divise :math:`bc`, alors :math:`a` divise :math:`c`.

**Formellement** :  
Si :math:`\text{pgcd}(a, b) = 1` et :math:`a | bc`, alors :math:`a | c`.

**Exemple** :  
Soit :math:`a = 5`, :math:`b = 2`, et :math:`c = 15`. Nous avons :math:`\text{pgcd}(5, 2) = 1`, et :math:`5 | 30` (car :math:`30 = 5 \times 6`), donc d'après le théorème de Gauss, :math:`5 | 15`.

---

3. Recherche du PGCD par l'algorithme d'Euclide
-----------------------------------------------

L’**algorithme d’Euclide** est un moyen efficace pour calculer le PGCD de deux entiers :math:`a` et :math:`b`. Cet algorithme est basé sur la propriété suivante :

.. math::

   \text{pgcd}(a, b) = \text{pgcd}(b, r)

où :math:`r` est le reste de la division euclidienne de :math:`a` par :math:`b`. Le processus se poursuit en répétant cette opération jusqu'à obtenir un reste nul. Le dernier reste non nul est alors le PGCD.

**Étapes de l’algorithme d’Euclide** :

1. Effectuez la division euclidienne de :math:`a` par :math:`b` :

   .. math::

      a = bq + r

   où :math:`q` est le quotient et :math:`r` est le reste.

2. Remplacez :math:`a` par :math:`b` et :math:`b` par :math:`r`, puis répétez.
3. Lorsque le reste :math:`r = 0`, le dernier :math:`b` non nul est le PGCD.

**Exemple** : Calculons :math:`\text{pgcd}(1053, 325)` avec l'algorithme d'Euclide.

1. :math:`1053 = 325 \times 3 + 78` (reste 78),
2. :math:`325 = 78 \times 4 + 13` (reste 13),
3. :math:`78 = 13 \times 6 + 0` (reste 0).

Le dernier reste non nul est 13, donc :math:`\text{pgcd}(1053, 325) = 13`.

---

4. Théorème de Bézout et Coefficients de Bézout
-----------------------------------------------

Le **Théorème de Bézout** stipule que, pour deux entiers :math:`a` et :math:`b`, il existe toujours deux entiers :math:`u` et :math:`v` tels que :

.. math::

   au + bv = \text{pgcd}(a, b)

Les entiers :math:`u` et :math:`v` sont appelés les **coefficients de Bézout**. Ils peuvent être déterminés à l'aide de l'**algorithme d'Euclide généralisé**.

**Étapes pour trouver les coefficients de Bézout** :

1. Utilisez l'algorithme d'Euclide pour trouver le PGCD.
2. Revenir en arrière dans les équations de l'algorithme pour exprimer le PGCD comme une combinaison linéaire de :math:`a` et :math:`b`.

**Exemple** : Trouvons les coefficients de Bézout pour :math:`a = 1053` et :math:`b = 325`.

1. Nous avons déjà trouvé que :math:`\text{pgcd}(1053, 325) = 13`.
2. Remontons les calculs de l'algorithme d'Euclide :

   .. math::

      13 = 325 - 4 \times 78

   .. math::

      78 = 1053 - 3 \times 325

   Substituons :

   .. math::

      13 = 325 - 4 \times (1053 - 3 \times 325) = 325 \times 13 - 4 \times 1053

   Donc, :math:`u = -4` et :math:`v = 13`, et l'équation de Bézout est :

   .. math::

      -4 \times 1053 + 13 \times 325 = 13

---

5. Inverses Multiplicatifs Modulo :math:`p`
-------------------------------------------

Un entier :math:`a` possède un **inverse multiplicatif modulo** :math:`p` si et seulement si :math:`\text{pgcd}(a, p) = 1`. L’inverse multiplicatif de :math:`a` modulo :math:`p` est l’entier :math:`c` tel que :

.. math::

   a \times c \equiv 1 \pmod{p}

Pour calculer cet inverse, on peut utiliser l'**algorithme d'Euclide étendu** pour trouver les coefficients de Bézout. Si :math:`au + pv = 1`, alors :math:`u \mod p` est l’inverse de :math:`a` modulo :math:`p`.

**Exemple** : Trouvons l'inverse de 17 modulo 59.

1. Utilisons l'algorithme d'Euclide pour trouver :math:`\text{pgcd}(17, 59)` :

   .. math::

      59 = 3 \times 17 + 8

   .. math::

      17 = 2 \times 8 + 1

   .. math::

      8 = 8 \times 1 + 0

   Le PGCD est 1, donc 17 est inversible modulo 59.

2. En remontant les calculs de l'algorithme :

   .. math::

      1 = 17 - 2 \times 8

   .. math::

      1 = 17 - 2 \times (59 - 3 \times 17) = 7 \times 17 - 2 \times 59

   L’inverse de 17 modulo 59 est donc :math:`7 \mod 59 = 7`.

---

Résumé des Techniques Essentielles pour le PGCD et ses Applications :
---------------------------------------------------------------------

1. **Définition du PGCD** : Le PGCD de deux entiers est le plus grand diviseur commun aux deux nombres. Il peut être calculé grâce à l'algorithme d'Euclide.
2. **Théorème de Gauss** : Si :math:`\text{pgcd}(a, b) = 1` et :math:`a | bc`, alors :math:`a | c`. Ce théorème est utilisé pour simplifier les calculs de divisibilité.
3. **Algorithme d'Euclide** : Cet algorithme permet de trouver efficacement le PGCD en effectuant des divisions euclidiennes successives.
4. **Théorème de Bézout** : Ce théorème permet d'exprimer le PGCD de :math:`a` et :math:`b` comme une combinaison linéaire de ces deux nombres avec des coefficients de Bézout.
5. **Inverse multiplicatif modulo :math:`p`** : Pour trouver l'inverse de a mod p, utilisez l'algorithme d'Euclide étendu pour trouver les coefficients de Bézout et en déduire l’inverse.