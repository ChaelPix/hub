================
Nombres Premiers
================

.. contents::
   :depth: 2
   :local:

Cours : Les Nombres Premiers
============================

1. Définition et Propriétés des Nombres Premiers
------------------------------------------------

Un **nombre premier** est un entier naturel :math:`p \geq 2` qui ne possède que deux diviseurs : 1 et lui-même. Autrement dit, un entier :math:`p` est premier si :math:`p` ne peut être divisé exactement (sans reste) que par 1 et :math:`p`.

**Exemples de nombres premiers** :
- 2, 3, 5, 7, 11, 13, 17, 19, 23, etc.

**Remarque** : 2 est le seul nombre premier pair, tous les autres nombres premiers sont impairs.

Propriétés importantes des nombres premiers :
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. **Existence infinie des nombres premiers** :  
   Il existe une infinité de nombres premiers. C'est un résultat démontré par Euclide.

2. **Décomposition en facteurs premiers** :  
   Tout entier naturel :math:`n \geq 2` peut être écrit comme un produit de nombres premiers :

   .. math::

      n = p_1^{k_1} \times p_2^{k_2} \times \cdots \times p_s^{k_s}

   où :math:`p_1, p_2, \dots, p_s` sont des nombres premiers distincts et :math:`k_1, k_2, \dots, k_s` sont des entiers naturels non nuls. Cette décomposition est unique à l'ordre près des facteurs.

3. **Vérification de la primalité** :  
   Pour vérifier si un nombre :math:`n` est premier, il suffit de tester s'il est divisible par un nombre premier inférieur ou égal à :math:`\sqrt{n}`. Si aucun diviseur n'est trouvé, alors :math:`n` est premier.

   **Exemple** :  
   Pour savoir si 29 est premier, on vérifie qu’il n'est divisible par aucun nombre premier inférieur ou égal à :math:`\sqrt{29}`, soit les nombres 2, 3, 5. Comme 29 n'est divisible par aucun de ces nombres, c'est un nombre premier.

---

2. Petit Théorème de Fermat
---------------------------

Le **Petit Théorème de Fermat** est une propriété fondamentale des nombres premiers en théorie des nombres. Il énonce que, si :math:`p` est un nombre premier et que :math:`a` est un entier qui n'est pas divisible par :math:`p`, alors :

.. math::

   a^{p-1} \equiv 1 \pmod{p}

Cela signifie que :math:`a^{p-1}`, lorsqu'il est divisé par :math:`p`, donne un reste de 1.

**Remarque** : Si :math:`a` est un multiple de :math:`p`, alors :math:`a \equiv 0 \pmod{p}`, et le théorème ne s'applique pas dans ce cas.

**Formulation alternative** :  
Si :math:`p` est un nombre premier, alors pour tout entier :math:`a`, on a :

.. math::

   a^p \equiv a \pmod{p}

Cette formulation est utile pour résoudre des congruences avec des puissances modulo un nombre premier.

---

3. Exemples et Exercices sur les Nombres Premiers
-------------------------------------------------

Exemple 1 : Application directe du petit théorème de Fermat
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Calculons :math:`3^{6} \mod 7`.

- :math:`p = 7` est un nombre premier, et :math:`a = 3` n'est pas divisible par 7. D'après le petit théorème de Fermat, on a :

  .. math::

     3^{7-1} \equiv 1 \pmod{7} \quad \text{soit} \quad 3^6 \equiv 1 \pmod{7}

  Donc, :math:`3^6 \mod 7 = 1`.

Exemple 2 : Calcul de grandes puissances modulo un nombre premier
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Calculons :math:`2^{10} \mod 11`.

- Puisque 11 est un nombre premier, nous pouvons utiliser le petit théorème de Fermat :

  .. math::

     2^{11-1} = 2^{10} \equiv 1 \pmod{11}

  Donc :math:`2^{10} \mod 11 = 1`.

Exemple 3 : Vérification si un nombre est premier
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Déterminons si 47 est un nombre premier.

- Il faut tester la divisibilité de 47 par les nombres premiers inférieurs ou égaux à :math:`\sqrt{47}` (soit environ 6.86). Nous testons donc 2, 3, 5 :
  - 47 n'est pas divisible par 2 (car 47 est impair),
  - :math:`47 \div 3 \approx 15.67`, donc non divisible,
  - :math:`47 \div 5 \approx 9.4`, donc non divisible.
  
  Aucun des nombres premiers inférieurs ou égaux à :math:`\sqrt{47}` ne divise 47, donc 47 est un nombre premier.

---

Exercices d'application
========================

1. **Exercice 1** :  
   Utilisez le petit théorème de Fermat pour calculer :math:`5^{100} \mod 11`.
   
   **Solution** :  
   11 est un nombre premier, donc d’après le petit théorème de Fermat, on sait que :

   .. math::

      5^{10} \equiv 1 \pmod{11}

   Maintenant, écrivons :math:`5^{100}` comme :math:`(5^{10})^{10}`. D’après la relation ci-dessus :

   .. math::

      5^{100} = (5^{10})^{10} \equiv 1^{10} = 1 \pmod{11}

   Donc :math:`5^{100} \mod 11 = 1`.

2. **Exercice 2** :  
   Déterminer si 61 est un nombre premier.
   
   **Solution** :  
   Testons la divisibilité de 61 par les nombres premiers inférieurs ou égaux à :math:`\sqrt{61} \approx 7.81`. Nous testons donc 2, 3, 5, 7 :
   - 61 n'est pas divisible par 2 (car 61 est impair),
   - :math:`61 \div 3 \approx 20.33`, donc non divisible,
   - :math:`61 \div 5 = 12.2`, donc non divisible,
   - :math:`61 \div 7 \approx 8.71`, donc non divisible.
   
   Aucun des nombres premiers inférieurs ou égaux à :math:`\sqrt{61}` ne divise 61, donc 61 est un nombre premier.

3. **Exercice 3** :  
   Calculer :math:`7^{20} \mod 13`.
   
   **Solution** :  
   Puisque 13 est un nombre premier, on peut utiliser le petit théorème de Fermat. On a :

   .. math::

      7^{12} \equiv 1 \pmod{13}

   Écrivons :math:`7^{20}` comme :math:`7^{12} \times 7^8`. On sait que :math:`7^{12} \equiv 1`, donc il suffit de calculer :math:`7^8 \mod 13`.

   D'abord, calculons :math:`7^2 \mod 13` :

   .. math::

      7^2 = 49 \equiv 10 \pmod{13}

   Ensuite, :math:`7^4 = (7^2)^2 = 10^2 = 100 \equiv 9 \pmod{13}`.
   Finalement, :math:`7^8 = (7^4)^2 = 9^2 = 81 \equiv 3 \pmod{13}`.

   Donc, :math:`7^{20} \equiv 7^8 \equiv 3 \pmod{13}`.

---

Résumé des techniques essentielles pour les nombres premiers :
==============================================================

1. **Vérification de la primalité** :  
   Pour déterminer si un nombre :math:`n` est premier, vérifiez s'il n'est divisible par aucun nombre premier inférieur ou égal à :math:`\sqrt{n}`.

2. **Utilisation du petit théorème de Fermat** :  
   Si :math:`p` est un nombre premier et que :math:`a` n'est pas divisible par :math:`p`, alors :math:`a^{p-1} \equiv 1 \pmod{p}`. Ce théorème simplifie considérablement les calculs de grandes puissances modulo un nombre premier.

3. **Décomposition en facteurs premiers** :  
   Chaque entier peut être décomposé de manière unique en produit de nombres premiers