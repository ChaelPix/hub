=================
Indicateur Euleur
=================

.. contents::
   :depth: 2
   :local:

Cours : L'Indicateur d'Euler et son Application
===============================================

1. Définition de l'indicateur d'Euler
-------------------------------------

L'**indicateur d'Euler**, ou **fonction :math:`\phi(n)`**, est une fonction arithmétique qui, pour un entier :math:`n`, donne le nombre d'entiers :math:`k` compris entre 1 et :math:`n` tels que :math:`\text{pgcd}(k, n) = 1`. Autrement dit, :math:`\phi(n)` compte le nombre d'entiers inférieurs à :math:`n` qui sont **premiers avec :math:`n`**.

**Exemple** :  
Calculons :math:`\phi(9)`.  
Les entiers inférieurs à 9 sont : 1, 2, 3, 4, 5, 6, 7, 8. Ceux qui sont premiers avec 9 sont : 1, 2, 4, 5, 7, 8 (car :math:`\text{pgcd}(3, 9) = 3` et :math:`\text{pgcd}(6, 9) = 3`).  
Donc :math:`\phi(9) = 6`.

---

2. Propriétés de l'indicateur d'Euler
-------------------------------------

La fonction :math:`\phi` possède des propriétés intéressantes qui permettent de simplifier son calcul pour différents types d'entiers.

Propriété 1 : Si :math:`n` est premier

Si :math:`n` est un nombre premier, alors :

.. math::

   \phi(n) = n - 1

En effet, tout entier inférieur à :math:`n` est premier avec :math:`n` lorsque :math:`n` est premier.

**Exemple** :  
Si :math:`n = 11`, alors :math:`\phi(11) = 11 - 1 = 10`, car tous les entiers de 1 à 10 sont premiers avec 11.

Propriété 2 : Si :math:`n` est une puissance de :math:`p`, un nombre premier

Si :math:`n = p^k` (où :math:`p` est un nombre premier et :math:`k` un entier positif), alors :

.. math::

   \phi(p^k) = p^k - p^{k-1}

Cela signifie que le nombre d'entiers inférieurs à :math:`p^k` qui sont premiers avec :math:`p^k` est obtenu en enlevant les multiples de :math:`p`.

**Exemple** :  
Si :math:`n = 5^2 = 25`, alors :

.. math::

   \phi(25) = 25 - 5 = 20

Il y a 20 entiers inférieurs à 25 qui sont premiers avec 25.

Propriété 3 : Si :math:`n` est le produit de deux nombres premiers distincts :math:`p` et :math:`q`

Si :math:`n = p \times q` où :math:`p` et :math:`q` sont deux nombres premiers distincts, alors :

.. math::

   \phi(n) = (p - 1) \times (q - 1)

Cette propriété est utilisée pour simplifier le calcul de l'indicateur d'Euler pour des produits de nombres premiers, comme dans les systèmes cryptographiques tels que RSA.

**Exemple** :  
Si :math:`n = 3 \times 7 = 21`, alors :

.. math::

   \phi(21) = (3 - 1) \times (7 - 1) = 2 \times 6 = 12

Il y a donc 12 entiers inférieurs à 21 qui sont premiers avec 21.

Propriété 4 : Fonction multiplicative

La fonction :math:`\phi(n)` est **multiplicative**. Cela signifie que si :math:`n = p_1^{k_1} \times p_2^{k_2} \times \cdots \times p_r^{k_r}`, où :math:`p_1, p_2, \dots, p_r` sont des nombres premiers distincts, alors :

.. math::

   \phi(n) = \phi(p_1^{k_1}) \times \phi(p_2^{k_2}) \times \cdots \times \phi(p_r^{k_r})

**Exemple** :  
Calculons :math:`\phi(60)`. Nous avons :math:`60 = 2^2 \times 3 \times 5`, donc :

.. math::

   \phi(60) = \phi(2^2) \times \phi(3) \times \phi(5)

.. math::

   \phi(2^2) = 4 - 2 = 2, \quad \phi(3) = 3 - 1 = 2, \quad \phi(5) = 5 - 1 = 4

.. math::

   \phi(60) = 2 \times 2 \times 4 = 16

Il y a donc 16 entiers inférieurs à 60 qui sont premiers avec 60.

---

3. Application du Théorème d'Euler
----------------------------------

Le **théorème d'Euler** est une généralisation du petit théorème de Fermat et est une application directe de l'indicateur d'Euler. Il énonce que, pour tout entier :math:`a` tel que :math:`\text{pgcd}(a, n) = 1` (c'est-à-dire que :math:`a` et :math:`n` sont premiers entre eux), on a :

.. math::

   a^{\phi(n)} \equiv 1 \pmod{n}

Ce théorème est utilisé pour simplifier le calcul de grandes puissances modulo :math:`n`. Il est particulièrement utile dans les systèmes cryptographiques comme RSA, où l'exponentiation modulaire est courante.

Exemple d'application du théorème d'Euler :

Calculons :math:`7^{40} \mod 30`.

1. D'abord, trouvons :math:`\phi(30)`. Nous avons :math:`30 = 2 \times 3 \times 5`, donc :

.. math::

   \phi(30) = (2 - 1) \times (3 - 1) \times (5 - 1) = 1 \times 2 \times 4 = 8

Donc, :math:`\phi(30) = 8`.

2. D'après le théorème d'Euler, puisque :math:`\text{pgcd}(7, 30) = 1`, on sait que :

.. math::

   7^8 \equiv 1 \pmod{30}

3. Pour calculer :math:`7^{40} \mod 30`, nous écrivons :math:`40 = 8 \times 5`. Donc :

.. math::

   7^{40} = (7^8)^5 \equiv 1^5 = 1 \pmod{30}

Ainsi, :math:`7^{40} \mod 30 = 1`.

---

4. Exercices d'application
--------------------------

Exercice 1 : Calculer :math:`\phi(45)`

Solution :  
:math:`45 = 3^2 \times 5`, donc :

.. math::

   \phi(45) = \phi(3^2) \times \phi(5)

.. math::

   \phi(3^2) = 9 - 3 = 6, \quad \phi(5) = 5 - 1 = 4

.. math::

   \phi(45) = 6 \times 4 = 24

Il y a 24 entiers inférieurs à 45 qui sont premiers avec 45.

Exercice 2 : Calculer :math:`6^{10} \mod 35`

Solution :  
D'abord, calculons :math:`\phi(35)`. Nous avons :math:`35 = 5 \times 7`, donc :

.. math::

   \phi(35) = (5 - 1) \times (7 - 1) = 4 \times 6 = 24

D'après le théorème d'Euler, puisque :math:`\text{pgcd}(6, 35) = 1`, on sait que :

.. math::

   6^{24} \equiv 1 \pmod{35}

Pour :math:`6^{10} \mod 35`, nous devons simplement calculer l'exponentiation modulaire directement (ou en utilisant l'exponentiation rapide).  
Après calculs, :math:`6^{10} \mod 35 = 16`.

Exercice 3 : Vérification du théorème d'Euler

Vérifions que le théorème d'Euler est vérifié pour :math:`a = 4` et :math:`n = 15`.

1. Calculons :math:`\phi(15)` :

.. math::

   \phi(15) = (3 - 1) \times (5 - 1) = 2 \times 4 = 8

2. D'après le théorème d'Euler, nous devons avoir :math:`4^8 \equiv 1 \pmod{15}`.
   Calculons :math:`4^8 \mod 15` :

.. math::

   4^2 = 16 \equiv 1 \pmod{15}, \quad 4^4 = (4^2)^2 \equiv 1^2 = 1 \pmod{15}, \quad 4^8 = (4^4)^2 \equiv 1 \pmod{15}

Donc, :math:`4^8 \equiv 1 \pmod{15}`, le théorème d'Euler est vérifié.

---

Résumé des techniques essentielles pour l'indicateur d'Euler et le théorème d'Euler :
-------------------------------------------------------------------------------------

1. **Indicateur d'Euler :math:`\phi(n)`** :  
   La fonction :math:`\phi(n)` compte le nombre d'entiers inférieurs à :math:`n` qui sont premiers avec :math:`n`. Elle a des propriétés importantes, notamment pour les nombres premiers et les produits de nombres premiers.

2. **Propriétés de :math:`\phi`** :  
   Utilisez les propriétés de :math:`\phi` pour simplifier son calcul, en particulier pour les puissances de nombres premiers et les produits de nombres premiers.

3. **Théorème d'Euler** :  
   Le théorème d'Euler stipule que si :math:`\text{pgcd}(a, n) = 1`, alors :math:`a^{\phi(n)} \equiv 1 \pmod{n}`. Ce théorème est utile pour simplifier les calculs de grandes puissances modulo :math:`n`.

4. **Exercices pratiques** :  
   Utilisez le théorème d'Euler pour résoudre des problèmes impliquant des puissances élevées modulo :math:`n`, en exploitant les propriétés de la fonction :math:`\phi(n)` pour simplifier les calculs.