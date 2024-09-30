==
TD
==

.. contents::
   :depth: 2
   :local:

Mini Cours : Techniques de Cryptage
-----------------------------------

.. contents::
   :depth: 2
   :local:

Exercice 1 : Chiffrement de Hill
--------------------------------

**Question 1 : Crypter le mot "ESPION" avec la matrice** 

.. math::

   A = \begin{pmatrix} 9 & 4 \\ 7 & 3 \end{pmatrix}

1. **Convertir les lettres en nombres** (en suivant l'ordre alphabétique : A = 0, B = 1, ..., Z = 25) :
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

3. **Chiffrement matriciel** : Multiplier chaque paire de vecteurs par la matrice :math:`A`.

   - Pour :math:`(4, 18)`, calculons :
   
   .. math::

      A \times \begin{pmatrix} 4 \\ 18 \end{pmatrix} = \begin{pmatrix} 9 & 4 \\ 7 & 3 \end{pmatrix} \times \begin{pmatrix} 4 \\ 18 \end{pmatrix} = \begin{pmatrix} 9 \times 4 + 4 \times 18 \\ 7 \times 4 + 3 \times 18 \end{pmatrix} = \begin{pmatrix} 108 \\ 86 \end{pmatrix}

   Calculons maintenant :math:`108 \mod 26` et :math:`86 \mod 26` :
   
   .. math::

      108 \mod 26 = 108 - 4 \times 26 = 4
      86 \mod 26 = 86 - 3 \times 26 = 8

   Le résultat est :math:`(4, 8)`, donc :math:`(E, S)` est crypté en :math:`(E, I)`.

   - Pour :math:`(15, 8)`, calculons :
   
   .. math::

      A \times \begin{pmatrix} 15 \\ 8 \end{pmatrix} = \begin{pmatrix} 9 \times 15 + 4 \times 8 \\ 7 \times 15 + 3 \times 8 \end{pmatrix} = \begin{pmatrix} 183 \\ 141 \end{pmatrix}

   Calculons :math:`183 \mod 26` et :math:`141 \mod 26` :
   
   .. math::

      183 \mod 26 = 183 - 7 \times 26 = 1
      141 \mod 26 = 141 - 5 \times 26 = 11

   Le résultat est :math:`(1, 11)`, donc :math:`(P, I)` est crypté en :math:`(B, L)`.

   - Pour :math:`(14, 13)`, calculons :
   
   .. math::

      A \times \begin{pmatrix} 14 \\ 13 \end{pmatrix} = \begin{pmatrix} 9 \times 14 + 4 \times 13 \\ 7 \times 14 + 3 \times 13 \end{pmatrix} = \begin{pmatrix} 182 \\ 137 \end{pmatrix}

   Calculons :math:`182 \mod 26` et :math:`137 \mod 26` :
   
   .. math::

      182 \mod 26 = 0
      137 \mod 26 = 137 - 5 \times 26 = 7

   Le résultat est :math:`(0, 7)`, donc :math:`(O, N)` est crypté en :math:`(A, H)`.

**Conclusion** : Le mot "ESPION" est crypté en **"EIBLAH"**.

---

Exercice 2 : Cryptage affine
----------------------------

Le cryptage affine est défini par la fonction :

.. math::

   y = (ax + b) \mod 26

où :math:`a = 9` et :math:`b = 15`.

**Question 1 : Montrer que la lettre "C" est codée par la lettre "H"**

1. La lettre "C" a la valeur :math:`x = 2`.  
   Appliquons la formule :

   .. math::

      y = (9 \times 2 + 15) \mod 26 = (18 + 15) \mod 26 = 33 \mod 26 = 7

   La lettre correspondant à :math:`y = 7` est "H".

**Conclusion** : La lettre "C" est codée par la lettre "H".

---

**Question 2 : Décoder la lettre "V"**

Pour décoder, nous devons résoudre l'équation affine inverse. Cela revient à résoudre :

.. math::

   9x + 15 \equiv 21 \mod 26

où 21 est la valeur de la lettre "V".

1. **Trouver l'inverse de 9 modulo 26** :  
   Utilisons l'algorithme d'Euclide étendu pour trouver l'inverse de 9 modulo 26.

   .. math::

      26 = 2 \times 9 + 8
      9 = 1 \times 8 + 1
      8 = 8 \times 1 + 0

   Le PGCD est 1, donc 9 est inversible modulo 26. Remontons les équations :

   .. math::

      1 = 9 - 1 \times 8
      1 = 9 - 1 \times (26 - 2 \times 9) = 3 \times 9 - 1 \times 26

   L'inverse de 9 modulo 26 est donc :math:`3`.

2. **Résoudre l'équation** :  
   Multiplions les deux côtés de l'équation :math:`9x + 15 \equiv 21 \mod 26` par 3 (l'inverse de 9) :

   .. math::

      3 \times (9x + 15) \equiv 3 \times 21 \mod 26

   Ce qui donne :

   .. math::

      x + 45 \equiv 63 \mod 26

   Simplifions :

   .. math::

      x \equiv 63 - 45 = 18 \mod 26

   La lettre correspondant à :math:`x = 18` est "S".

**Conclusion** : La lettre "V" est décodée en **"S"**.

---

Résumé des Techniques Utilisées
-------------------------------

1. **Chiffrement de Hill** : Nous avons utilisé la multiplication de matrices mod 26 pour crypter des paires de lettres, en appliquant la méthode de calcul matriciel vue dans le cours.

2. **Cryptage affine** : La fonction affine de cryptage a été utilisée pour coder et décoder des lettres, en appliquant les formules de cryptage affine et l'algorithme d'Euclide étendu pour calculer l'inverse modulo.
