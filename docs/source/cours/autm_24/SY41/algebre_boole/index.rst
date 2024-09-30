================
Algèbre de Boole
================

.. toctree::
  :maxdepth: 1

  td/index

---

.. contents::
   :depth: 2
   :local:


Introduction à l'algèbre de Boole
---------------------------------
L'algèbre de Boole repose sur des variables prenant des valeurs binaires (0 ou 1). Ces variables peuvent être combinées
à l'aide de portes logiques pour créer des fonctions booléennes.

Portes logiques de base :

- AND : le produit logique (noté :math:`\cdot`)

- OR : la somme logique (noté :math:`+`)

- NOT : la négation (noté :math:`\overline{A}`)

- XOR : l'exclusive OR (noté :math:`\oplus`)

Tables de vérité
----------------
Une table de vérité permet de définir les sorties d'une fonction logique pour toutes les combinaisons possibles
des entrées. 

**Méthode** : Listez toutes les combinaisons binaires possibles des entrées, puis déduisez les sorties en fonction 
de l'expression booléenne.

Exemple de table de vérité pour un demi-additionneur (addition de 2 bits) :

.. list-table:: Table de vérité pour un demi-additionneur
   :header-rows: 1
   :widths: 10 10 10 15

   * - A
     - B
     - S (Somme)
     - Cout (Retenue)
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

Formes canoniques
-----------------
Les formes canoniques permettent de représenter une fonction booléenne sous la forme d'une somme de mintermes ou 
de produits de maxtermes.

- **Somme des produits (SOP)** : on identifie les mintermes où la sortie vaut 1.
- **Produit des sommes (POS)** : on identifie les maxtermes où la sortie vaut 0.

**Exemple** :
Si vous avez la table suivante :

.. list-table:: Exemple de table avec X
   :header-rows: 1
   :widths: 10 10 10 10

   * - A
     - B
     - C
     - S
   * - 0
     - 0
     - 0
     - 1
   * - 0
     - 1
     - 0
     - X
   * - 1
     - 0
     - 1
     - 1

L'expression sous forme de SOP est :math:`S = \overline{A} \overline{B} \overline{C} + A \overline{B} C`.

Simplification d'expressions booléennes
---------------------------------------
Pour simplifier une fonction booléenne, vous pouvez appliquer des règles algébriques. 

**Règles courantes** :
- Distributivité : :math:`A + (B \cdot C) = (A + B) \cdot (A + C)`
- Absorption : :math:`A + A \cdot B = A`
- Involution : :math:`\overline{\overline{A}} = A`

**Exemple** :
Soit l'expression : :math:`S = A \cdot B + A \cdot \overline{B}`

Vous pouvez la simplifier en :math:`S = A`.

Utilisation des opérateurs complets
-----------------------------------
Les portes NAND et NOR sont des opérateurs complets, ce qui signifie qu'elles peuvent être utilisées pour réaliser 
toute fonction logique.

**Exemple avec des portes NAND** :
Pour réaliser l'expression : :math:`S = A \cdot B`, vous pouvez utiliser des portes NAND comme suit :
1. :math:`S = \overline{\overline{(A \cdot B)}}` (en utilisant deux NAND en série)

Transcodeur 4B/5B
-----------------
Un transcodeur 4B/5B est utilisé pour convertir des signaux de 4 bits en 5 bits pour éviter des séquences longues 
de 0 et de 1 dans les communications Ethernet.

**Exemple de codage** :
Si l'entrée est :math:`E[3:0] = 0000`, la sortie sera :math:`S[4:0] = 11110`.

Gestion des états indifférents (X)
----------------------------------
Les états indifférents (X) dans une table de vérité peuvent être traités pour simplifier les équations. Les X 
représentent des conditions pour lesquelles l'état de la sortie n'a pas d'importance (1 ou 0). 

**Exemple** :
Si une table de vérité contient un X, vous pouvez choisir l'état qui permet de simplifier l'expression.

Table avec X :

.. list-table:: Exemple de table avec X
   :header-rows: 1
   :widths: 10 10 10 10

   * - A
     - B
     - C
     - S
   * - 0
     - 0
     - 0
     - 1
   * - 0
     - 1
     - 0
     - X
   * - 1
     - 0
     - 0
     - 1