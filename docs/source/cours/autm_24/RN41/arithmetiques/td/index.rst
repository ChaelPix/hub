==
TD
==

.. raw:: html

    <a href="td.pdf" target="_blank">TD PDF</a>

Exercice 1 : Chiffrement de Hill
--------------------------------

La matrice de chiffrement est :math:`A = \begin{pmatrix} 9 & 4 \\ 7 & 3 \end{pmatrix}`.

**Question : Crypter le mot "ESPION"**

1. **Convertir les lettres en nombres selon le tableau** :
   - E = 4
   - S = 18
   - P = 15
   - I = 8
   - O = 14
   - N = 13

2. **Former les paires de lettres** :
   - :math:`(E, S) \rightarrow (4, 18)`
   - :math:`(P, I) \rightarrow (15, 8)`
   - :math:`(O, N) \rightarrow (14, 13)`

3. **Multiplier chaque paire par la matrice :math:`A`** :
   - Pour :math:`(4, 18)` :

     .. math::

        A \times \begin{pmatrix} 4 \\ 18 \end{pmatrix} = \begin{pmatrix} 9 \times 4 + 4 \times 18 \\ 7 \times 4 + 3 \times 18 \end{pmatrix} = \begin{pmatrix} 108 \\ 86 \end{pmatrix} \mod 26 = \begin{pmatrix} 4 \\ 8 \end{pmatrix}

     Le résultat est :math:`(E, I)`.

   - Pour :math:`(15, 8)` :

     .. math::

        A \times \begin{pmatrix} 15 \\ 8 \end{pmatrix} = \begin{pmatrix} 9 \times 15 + 4 \times 8 \\ 7 \times 15 + 3 \times 8 \end{pmatrix} = \begin{pmatrix} 183 \\ 141 \end{pmatrix} \mod 26 = \begin{pmatrix} 1 \\ 11 \end{pmatrix}

     Le résultat est :math:`(B, L)`.

   - Pour :math:`(14, 13)` :

     .. math::

        A \times \begin{pmatrix} 14 \\ 13 \end{pmatrix} = \begin{pmatrix} 9 \times 14 + 4 \times 13 \\ 7 \times 14 + 3 \times 13 \end{pmatrix} = \begin{pmatrix} 182 \\ 137 \end{pmatrix} \mod 26 = \begin{pmatrix} 0 \\ 7 \end{pmatrix}

     Le résultat est :math:`(A, H)`.

**Conclusion** : Le mot "ESPION" est crypté en **"EIBLAH"**.

---

Exercice 2 : Produits et ordres de présentation
-----------------------------------------------

L'énoncé indique qu'une entreprise fabrique 28 produits, numérotés de 0 à 27, et souhaite les afficher dans un ordre précis sans répétition.

**Question 1 :**

**a. Décomposer 28 en produit de facteurs premiers**

.. math::

   28 = 2^2 \times 7

**b. Calculer le PGCD de 12 et 28**

1. Utilisons l'algorithme d'Euclide :

   .. math::

      28 = 2 \times 12 + 4
      12 = 3 \times 4 + 0

   Le PGCD de 12 et 28 est donc **4**.

**c. Les nombres 15 et 28 sont-ils premiers entre eux ?**

1. Calculons leur PGCD avec l'algorithme d'Euclide :

   .. math::

      28 = 1 \times 15 + 13
      15 = 1 \times 13 + 2
      13 = 6 \times 2 + 1
      2 = 2 \times 1 + 0

   Le PGCD est 1, donc 15 et 28 sont **premiers entre eux**.

---

**Question 2 : Compléter la liste pour :math:`a = 12`**

- La liste pour :math:`a = 12` démarre avec :math:`0`, puis on ajoute :math:`12 \mod 28`.  
  Les premiers résultats sont :

  .. math::

     0, 12, 24, 8, 20, 4, 16, 2, 14, 26, 10

---

**Question 3 : Ce choix permet-il de présenter tous les produits ?**

- Non, car 12 et 28 ont un PGCD supérieur à 1, donc le choix de :math:`a = 12` ne permet **pas** de générer tous les produits.

---

**Question 4 : Quels :math:`a` permettent de former la liste complète ?**

- Le critère est que :math:`\text{pgcd}(a, 28) = 1`. Parmi les choix donnés : :math:`a = 1, 3, 5, 25` sont les seuls à vérifier cette condition.

---

Exercice 3 : Authentification avec cryptage affine
--------------------------------------------------

Le cryptage affine est défini par :

.. math::

   y = (a \times x + b) \mod 26

où :math:`a = 9` et :math:`b = 15`.

**Question 1 : Le serveur utilise la clé :math:`(9, 15)`**

**a. Montrer que la lettre "C" est codée par "H"**

1. La lettre "C" a pour rang :math:`x = 2`.
2. Appliquons la formule du cryptage affine :

   .. math::

      y = (9 \times 2 + 15) \mod 26 = (18 + 15) \mod 26 = 33 \mod 26 = 7

3. Le rang :math:`y = 7` correspond à la lettre "H".

**Conclusion** : La lettre **"C"** est codée par **"H"**.

---

**b. Par quelle lettre est codée la lettre "E" ?**

1. La lettre "E" a pour rang :math:`x = 4`.
2. Appliquons la formule du cryptage affine :

   .. math::

      y = (9 \times 4 + 15) \mod 26 = (36 + 15) \mod 26 = 51 \mod 26 = 25

3. Le rang :math:`y = 25` correspond à la lettre "Z".

**Conclusion** : La lettre **"E"** est codée par **"Z"**.

---

**Question 2 : Décoder la lettre "V"**

Nous devons résoudre l'équation :

.. math::

   9x + 15 \equiv 21 \mod 26

---

**a. Trouver un entier :math:`c` tel que :math:`9c \equiv 1 \mod 26`**

- Utilisons l'algorithme d'Euclide étendu :

   .. math::

      26 = 2 \times 9 + 8
      9 = 1 \times 8 + 1

   En remontant, on trouve que l'inverse de 9 modulo 26 est :math:`3`.

---

**b. Montrer que :math:`x = 18`**

1. Multiplions l'équation :math:`9x + 15 \equiv 21 \mod 26` par 3 (l'inverse de 9) :

   .. math::

      3 \times (9x + 15) \equiv 3 \times 21 \mod 26

   Ce qui donne :

   .. math::

      x + 45 \equiv 63 \mod 26 \implies x \equiv 63 - 45 = 18 \mod 26

---

**c. Décoder la lettre "V"**

Le rang :math:`x = 18` correspond à la lettre **"S"**.

---

Résumé des Techniques Utilisées
-------------------------------

1. **Chiffrement de Hill** : Nous avons utilisé la multiplication de matrices mod 26 pour crypter des paires de lettres, en appliquant la méthode de calcul matriciel vue dans le cours.

2. **Cryptage affine** : La fonction affine de cryptage a été utilisée pour coder et décoder des lettres, en appliquant les formules de cryptage affine et l'algorithme d'Euclide étendu pour calculer l'inverse modulo.
