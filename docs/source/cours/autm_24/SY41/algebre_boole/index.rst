==================
Algèbre de Boole
==================

.. contents::
   :local:
   :depth: 2

Introduction
------------

L'algèbre de Boole est un système mathématique qui manipule des variables logiques prenant deux valeurs possibles : **0** (faux) ou **1** (vrai). Elle est fondamentale en informatique pour le développement de circuits logiques et la programmation.

Variables Booléennes
--------------------

Une **variable booléenne** est une variable qui ne peut prendre que les valeurs 0 ou 1.

Symboles et Notations
---------------------

En algèbre de Boole, différentes notations sont utilisées pour représenter les opérations logiques. Il est essentiel de comprendre ces symboles pour manipuler correctement les expressions booléennes.

Correspondance des Symboles
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Addition (+)** : Correspond à l'opérateur **OU logique** (∨).

  **Exemple** :

  .. math::

     A + B \equiv A \lor B

- **Multiplication (absence de symbole ou ·)** : Correspond à l'opérateur **ET logique** (∧).

  **Exemple** :

  .. math::

     AB \text{ ou } A \cdot B \equiv A \land B

- **Négation (¬ ou barre au-dessus de la variable ou apostrophe ('))** : Correspond à l'opérateur **NON logique**.

  **Exemple** :

  - Si :math:`A = 1`, alors :math:`\lnot A = 0`
  - Si :math:`A = 0`, alors :math:`\lnot A = 1`

Opérateurs Logiques
-------------------

NON (¬)
~~~~~~~~

Inverse la valeur de la variable.

+-----+-----+
|  A  | ¬A  |
+=====+=====+
|  0  |  1  |
+-----+-----+
|  1  |  0  |
+-----+-----+

ET (∧)
~~~~~~

Le résultat est 1 si **toutes** les variables sont à 1.

+-----+-----+-------+
|  A  |  B  | A ∧ B |
+=====+=====+=======+
|  0  |  0  |   0   |
+-----+-----+-------+
|  0  |  1  |   0   |
+-----+-----+-------+
|  1  |  0  |   0   |
+-----+-----+-------+
|  1  |  1  |   1   |
+-----+-----+-------+

OU (∨)
~~~~~~

Le résultat est 1 si **au moins** une variable est à 1.

+-----+-----+-------+
|  A  |  B  | A ∨ B |
+=====+=====+=======+
|  0  |  0  |   0   |
+-----+-----+-------+
|  0  |  1  |   1   |
+-----+-----+-------+
|  1  |  0  |   1   |
+-----+-----+-------+
|  1  |  1  |   1   |
+-----+-----+-------+

Formes Canoniques
-----------------

Les **formes canoniques** sont des représentations standardisées des fonctions booléennes. Elles sont particulièrement utiles pour la simplification et la réalisation pratique des circuits logiques.

Forme Canonique de Somme (Sum of Products - SOP)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Définition** : Une expression est sous forme canonique de somme si elle est écrite comme une somme (**OU logique**) de produits (**ET logique**) de variables ou de leurs compléments.

- **Exemple** :

  .. math::

     F(A, B, C) = A'B'C + AB'C' + ABC

- **Utilisation** : Cette forme facilite la mise en place de circuits utilisant des portes **OU** de plusieurs entrées suivies de portes **ET**.

Forme Canonique de Produit (Product of Sums - POS)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Définition** : Une expression est sous forme canonique de produit si elle est écrite comme un produit (**ET logique**) de sommes (**OU logique**) de variables ou de leurs compléments.

- **Exemple** :

  .. math::

     F(A, B, C) = (A + B + C')(A' + B + C)(A + B' + C)

- **Utilisation** : Cette forme est utile pour la réalisation de circuits utilisant des portes **ET** de plusieurs entrées suivies de portes **OU**.

Mintermes et Maxtermes
~~~~~~~~~~~~~~~~~~~~~~

- **Minterme** : Un produit (**ET logique**) de toutes les variables, où chaque variable peut être normale ou complémentée. Un minterme est égal à 1 pour une seule combinaison des variables.

  **Exemple** : Pour \( A = 1, B = 0, C = 1 \), le minterme est \( A B' C \).

- **Maxterme** : Une somme (**OU logique**) de toutes les variables, où chaque variable peut être normale ou complémentée. Un maxterme est égal à 0 pour une seule combinaison des variables.

  **Exemple** : Pour \( A = 1, B = 0, C = 1 \), le maxterme est \( A + B' + C \).

Lois de l'Algèbre de Boole
--------------------------

Identité
~~~~~~~~

- :math:`A \lor 0 = A`
- :math:`A \land 1 = A`

Domination
~~~~~~~~~~

- :math:`A \lor 1 = 1`
- :math:`A \land 0 = 0`

Idempotence
~~~~~~~~~~~

- :math:`A \lor A = A`
- :math:`A \land A = A`

Commutativité
~~~~~~~~~~~~~

- :math:`A \lor B = B \lor A`
- :math:`A \land B = B \land A`

Associativité
~~~~~~~~~~~~~

- :math:`(A \lor B) \lor C = A \lor (B \lor C)`
- :math:`(A \land B) \land C = A \land (B \land C)`

Distributivité
~~~~~~~~~~~~~~

- :math:`A \lor (B \land C) = (A \lor B) \land (A \lor C)`
- :math:`A \land (B \lor C) = (A \land B) \lor (A \land C)`

Double Négation
~~~~~~~~~~~~~~~

- :math:`\lnot (\lnot A) = A`

Lois de De Morgan
~~~~~~~~~~~~~~~~~

- :math:`\lnot (A \lor B) = \lnot A \land \lnot B`
- :math:`\lnot (A \land B) = \lnot A \lor \lnot B`