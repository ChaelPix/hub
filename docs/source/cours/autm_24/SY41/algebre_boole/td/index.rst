=================
Correction du TD1
=================

.. contents::
   :depth: 2
   :local:

2.1. Équations logiques sous forme canonique
--------------------------------------------

Pour exprimer les fonctions sous forme canonique, il faut les écrire en somme de mintermes lorsque la sortie est égale à 1 dans la table de vérité.

- **S0** : Les lignes où S0 vaut 1 dans la table de vérité sont les lignes 2, 4, 5, et 6 (en comptant à partir de 0).

  - Ligne 2 : :math:`a'b'c`
  - Ligne 4 : :math:`ab'c'`
  - Ligne 5 : :math:`abc'`
  - Ligne 6 : :math:`abc`

  La forme canonique de :math:`S0` est donc :

  .. math::

     S0 = a'b'c + ab'c' + abc' + abc

- **S1** : Les lignes où S1 vaut 1 dans la table de vérité sont les lignes 1, 2, 4, et 5.

  - Ligne 1 : :math:`a'b'c'`
  - Ligne 2 : :math:`a'b'c`
  - Ligne 4 : :math:`ab'c'`
  - Ligne 5 : :math:`abc'`

  La forme canonique de :math:`S1` est donc :

  .. math::

     S1 = a'b'c' + a'b'c + ab'c' + abc'

- **S2** : Les lignes où S2 vaut 1 dans la table de vérité sont les lignes 0, 2, et 3.

  - Ligne 0 : :math:`a'b'c'`
  - Ligne 2 : :math:`a'b'c`
  - Ligne 3 : :math:`a'bc`

  La forme canonique de :math:`S2` est donc :

  .. math::

     S2 = a'b'c' + a'b'c + a'bc

2.2. Simplification des équations
---------------------------------

L'objectif est maintenant de simplifier les équations obtenues à l'aide des propriétés de l'algèbre de Boole.

Simplification de S0
~~~~~~~~~~~~~~~~~~~~

L'équation de départ pour :math:`S0` est :

.. math::

   S0 = a'b'c + ab'c' + abc' + abc

On regroupe les termes communs :

.. math::

   S0 = ab'c' + ac + a'b'c

Cette expression est simplifiée et ne peut plus être réduite.

Simplification de S1
~~~~~~~~~~~~~~~~~~~~

L'équation de départ pour :math:`S1` est :

.. math::

   S1 = a'b'c' + a'b'c + ab'c' + abc'

On utilise la factorisation :

.. math::

   S1 = a'b'(c' + c) + ab'c' = a'b' + ab'c'

La forme simplifiée de :math:`S1` est donc :

.. math::

   S1 = b'(a' + ac')

Simplification de S2
~~~~~~~~~~~~~~~~~~~~

L'équation de départ pour :math:`S2` est :

.. math::

   S2 = a'b'c' + a'b'c + a'bc

On regroupe les termes communs :

.. math::

   S2 = a'b'(c' + c) + a'bc = a'b' + a'bc

La forme simplifiée de :math:`S2` est donc :

.. math::

   S2 = a'b' + a'bc

---

3. Table de vérité pour une fonction logique
--------------------------------------------

Pour déterminer la table de vérité d'une fonction qui renvoie 1 si un nombre sur 4 bits \( A[3:0] \) est compris entre 3 et 8, nous devons examiner toutes les valeurs possibles de \( A[3:0] \) (soit de 0 à 15).

.. list-table:: Table de vérité
   :header-rows: 1

   * - A[3]
     - A[2]
     - A[1]
     - A[0]
     - Valeur de A
     - S (1 si \( 3 \leq A \leq 8 \))
   * - 0
     - 0
     - 0
     - 0
     - 0
     - 0
   * - 0
     - 0
     - 0
     - 1
     - 1
     - 0
   * - 0
     - 0
     - 1
     - 0
     - 2
     - 0
   * - 0
     - 0
     - 1
     - 1
     - 3
     - 1
   * - 0
     - 1
     - 0
     - 0
     - 4
     - 1
   * - 0
     - 1
     - 0
     - 1
     - 5
     - 1
   * - 0
     - 1
     - 1
     - 0
     - 6
     - 1
   * - 0
     - 1
     - 1
     - 1
     - 7
     - 1
   * - 1
     - 0
     - 0
     - 0
     - 8
     - 1
   * - 1
     - 0
     - 0
     - 1
     - 9
     - 0
   * - 1
     - 0
     - 1
     - 0
     - 10
     - 0
   * - 1
     - 0
     - 1
     - 1
     - 11
     - 0
   * - 1
     - 1
     - 0
     - 0
     - 12
     - 0
   * - 1
     - 1
     - 0
     - 1
     - 13
     - 0
   * - 1
     - 1
     - 1
     - 0
     - 14
     - 0
   * - 1
     - 1
     - 1
     - 1
     - 15
     - 0

Équation logique
~~~~~~~~~~~~~~~~

Les valeurs comprises entre 3 et 8 sont 3, 4, 5, 6, 7, et 8. Les mintermes correspondants sont :

- \( A = 3 \) : :math:`A[3]'A[2]'A[1]A[0]`
- \( A = 4 \) : :math:`A[3]'A[2]A[1]'A[0]'`
- \( A = 5 \) : :math:`A[3]'A[2]A[1]'A[0]`
- \( A = 6 \) : :math:`A[3]'A[2]A[1]A[0]'`
- \( A = 7 \) : :math:`A[3]'A[2]A[1]A[0]`
- \( A = 8 \) : :math:`A[3]A[2]'A[1]'A[0]'`

L'équation logique canonique est donc :

.. math::

   S = A[3]'A[2]'A[1]A[0] + A[3]'A[2]A[1]'A[0]' + A[3]'A[2]A[1]'A[0] + A[3]'A[2]A[1]A[0]' + A[3]'A[2]A[1]A[0] + A[3]A[2]'A[1]'A[0]'

---

4. Demi-additionneur et additionneur complet
--------------------------------------------

Table de vérité d'un demi-additionneur
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Un demi-additionneur permet d'additionner deux bits \( A_i \) et \( B_i \), produisant une somme \( S_i \) et une retenue \( C_{out} \).

.. list-table:: Table de vérité du demi-additionneur
   :header-rows: 1

   * - \( A_i \)
     - \( B_i \)
     - \( S_i \) (Somme)
     - \( C_{out} \) (Retenue)
   * - 0
     - 0
     - 0
     - 0
   * - 0
     - 1
     - 1
     - 0
   * - 1
     - 0
     - 1
     - 0
   * - 1
     - 1
     - 0
     - 1

Les équations logiques sont :

- Somme : :math:`S_i = A_i \oplus B_i`
- Retenue : :math:`C_{out} = A_i \cdot B_i`

5. Réalisation avec des portes NAND et NOR
------------------------------------------

L'objectif est de représenter l'équation :math:`S = \overline{a} \overline{b} + \overline{b} c` en utilisant uniquement des portes **NON-ET** (NAND) et des portes **NON-OU** (NOR).

Utilisation des portes **NAND**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pour utiliser uniquement des portes NAND, nous devons d'abord réécrire chaque opérateur en fonction des portes NAND.

Obtention de :math:`\overline{a}` et :math:`\overline{b}` avec des portes NAND
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

La négation d'une variable peut être obtenue avec une porte NAND à deux entrées identiques.

.. math::

   \overline{a} = \text{NAND}(a, a)
   \quad \text{et} \quad
   \overline{b} = \text{NAND}(b, b)

Réalisation de l'addition OR
''''''''''''''''''''''''''''

En utilisant la loi de De Morgan : 

.. math::

   A + B = \overline{\overline{A} \cdot \overline{B}}

On peut donc réaliser l'addition OR avec des portes NAND.

Schéma avec des portes NAND
''''''''''''''''''''''''''''
1. Utiliser des portes NAND pour obtenir :math:`\overline{a}` et :math:`\overline{b}`.
2. Calculer le produit :math:`\overline{a} \overline{b}` avec une porte NAND, puis une autre porte pour inverser le résultat.
3. Calculer :math:`\overline{b} c` avec une porte NAND et inverser l’opération.
4. Utiliser une porte NAND pour réaliser l'addition des deux produits.

Il faut 6 portes NAND en tout.

Utilisation des portes **NOR**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pour les portes NOR, on utilise la propriété que toute fonction peut être réalisée avec des portes NOR, en appliquant la loi de De Morgan.

Obtention de :math:`\overline{a}` et :math:`\overline{b}` avec des portes NOR
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
.. math::

   \overline{a} = \text{NOR}(a, a)
   \quad \text{et} \quad
   \overline{b} = \text{NOR}(b, b)

Réalisation de l'addition OR avec des portes NOR
'''''''''''''''''''''''''''''''''''''''''''''''''

.. math::

   A + B = \overline{\overline{A} \cdot \overline{B}}

Schéma avec des portes NOR
'''''''''''''''''''''''''''

1. Utiliser des portes NOR pour obtenir :math:`\overline{a}` et :math:`\overline{b}`.
2. Calculer :math:`\overline{a} \overline{b}` et :math:`\overline{b} c` avec des portes NOR.
3. Réaliser l'addition des deux produits.

Il faut également 6 portes NOR en tout.

6. Transcodeur 4B/5B
--------------------

Nous devons déterminer les équations logiques simplifiées pour les sorties \( S_4 \) à \( S_0 \) en fonction des entrées \( E_3 \) à \( E_0 \).

Table de vérité
~~~~~~~~~~~~~~~

.. list-table:: Table de vérité du transcodeur 4B/5B
   :header-rows: 1

   * - \( E_3 \)
     - \( E_2 \)
     - \( E_1 \)
     - \( E_0 \)
     - \( S_4 \)
     - \( S_3 \)
     - \( S_2 \)
     - \( S_1 \)
     - \( S_0 \)
   * - 0
     - 0
     - 0
     - 0
     - 1
     - 1
     - 1
     - 1
     - 0
   * - 0
     - 0
     - 0
     - 1
     - 0
     - 1
     - 0
     - 0
     - 1
   * - 0
     - 0
     - 1
     - 0
     - 1
     - 0
     - 1
     - 0
     - 0
   * - 0
     - 0
     - 1
     - 1
     - 1
     - 0
     - 1
     - 0
     - 1
   * - 1
     - 1
     - 1
     - 1
     - 1
     - 1
     - 0
     - 0
     - 1

Équations logiques simplifiées
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Les équations logiques sont obtenues en repérant les lignes où chaque sortie vaut 1.

Équation pour \( S_4 \)
''''''''''''''''''''''''

.. math::

   S_4 = E_3 \cdot (E_2 + \overline{E_1}) + \overline{E_3} \cdot E_2 \cdot E_0

Équation pour \( S_3 \)
''''''''''''''''''''''''

.. math::

   S_3 = \overline{E_3} \cdot (E_0 + E_1) + E_3 \cdot (E_2 + E_1)

Équation pour \( S_2 \)
''''''''''''''''''''''''

.. math::

   S_2 = \overline{E_3} \cdot (E_1 \cdot E_0) + E_3 \cdot (\overline{E_1} \cdot \overline{E_0})

Équation pour \( S_1 \)
''''''''''''''''''''''''

.. math::

   S_1 = E_0 \cdot (E_3 + E_1)

Équation pour \( S_0 \)
''''''''''''''''''''''''

.. math::

   S_0 = E_0 + (E_1 \cdot E_3)

7. Simplification d'une fonction avec des valeurs indifférentes
---------------------------------------------------------------

Nous devons simplifier l'équation booléenne d'une table de vérité non entièrement spécifiée.

Table de vérité avec des valeurs indifférentes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Les valeurs indifférentes (X) nous permettent d'ignorer certains états pour simplifier l'expression.

.. list-table:: Table de vérité avec valeurs indifférentes
   :header-rows: 1

   * - \( a \)
     - \( b \)
     - \( c \)
     - \( s \)
   * - 0
     - 0
     - 0
     - 1
   * - 0
     - 0
     - 1
     - X
   * - 0
     - 1
     - 0
     - X
   * - 0
     - 1
     - 1
     - 1
   * - 1
     - 0
     - 0
     - 1
   * - 1
     - 0
     - 1
     - X
   * - 1
     - 1
     - 0
     - X
   * - 1
     - 1
     - 1
     - 0

Équation booléenne canonique
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Les lignes où \( s = 1 \) sont :

- \( a = 0, b = 0, c = 0 \), donc :math:`\overline{a} \overline{b} \overline{c}`
- \( a = 0, b = 1, c = 1 \), donc :math:`\overline{a} b c`
- \( a = 1, b = 0, c = 0 \), donc :math:`a \overline{b} \overline{c}`

L'équation canonique est donc :

.. math::

   s = \overline{a} \overline{b} \overline{c} + \overline{a} b c + a \overline{b} \overline{c}

Simplification de l'équation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nous regroupons les termes :

.. math::

   s = \overline{b} \overline{c} (\overline{a} + a) + \overline{a} b c

Comme :math:`\overline{a} + a = 1`, cela simplifie à :

.. math::

   s = \overline{b} \overline{c} + \overline{a} b c
