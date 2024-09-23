================
Algèbre de Boole
================

Introduction
------------

L'algèbre de Boole est un système mathématique qui manipule des variables logiques prenant deux valeurs possibles : **0** (faux) ou **1** (vrai). Elle est fondamentale en informatique pour le développement de circuits logiques et la programmation.

Variables Booléennes
--------------------

Une **variable booléenne** est une variable qui ne peut prendre que les valeurs 0 ou 1.

Opérateurs Logiques
-------------------

### NON (¬)

Inverse la valeur de la variable.

::

   | A | ¬A |
   |---|----|
   | 0 |  1 |
   | 1 |  0 |

### ET (∧)

Le résultat est 1 si **toutes** les variables sont à 1.

::

   | A | B | A ∧ B |
   |---|---|-------|
   | 0 | 0 |   0   |
   | 0 | 1 |   0   |
   | 1 | 0 |   0   |
   | 1 | 1 |   1   |

### OU (∨)

Le résultat est 1 si **au moins** une variable est à 1.

::

   | A | B | A ∨ B |
   |---|---|-------|
   | 0 | 0 |   0   |
   | 0 | 1 |   1   |
   | 1 | 0 |   1   |
   | 1 | 1 |   1   |

Lois de l'Algèbre de Boole
--------------------------

- **Identité**

  - A ∨ 0 = A
  - A ∧ 1 = A

- **Domination**

  - A ∨ 1 = 1
  - A ∧ 0 = 0

- **Idempotence**

  - A ∨ A = A
  - A ∧ A = A

- **Commutativité**

  - A ∨ B = B ∨ A
  - A ∧ B = B ∧ A

- **Associativité**

  - (A ∨ B) ∨ C = A ∨ (B ∨ C)
  - (A ∧ B) ∧ C = A ∧ (B ∧ C)

- **Distributivité**

  - A ∨ (B ∧ C) = (A ∨ B) ∧ (A ∨ C)
  - A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)

- **Double Négation**

  - ¬(¬A) = A

- **Loi de De Morgan**

  - ¬(A ∨ B) = ¬A ∧ ¬B
  - ¬(A ∧ B) = ¬A ∨ ¬B

Simplification d'Expressions
----------------------------

Pour simplifier une expression booléenne, appliquez les lois ci-dessus.

**Exemple 1**

Simplifier : **A ∨ (A ∧ B)**

**Solution :**

1. Appliquer la loi d'absorption : A ∨ (A ∧ B) = A

**Exemple 2**

Simplifier : **(A ∨ B) ∧ (A ∨ ¬B)**

**Solution :**

1. Appliquer la distributivité :
   (A ∨ B) ∧ (A ∨ ¬B) = A ∨ (B ∧ ¬B)
2. Sachant que B ∧ ¬B = 0 :
   A ∨ 0 = A
