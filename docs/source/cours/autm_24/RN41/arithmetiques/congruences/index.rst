==========
Congruance
==========

.. contents::
   :depth: 2
   :local:

Cours : Les Congruences
=======================

1. Division Euclidienne
-----------------------

La division euclidienne est un concept fondamental pour les congruences. Elle permet de diviser un entier :math:`a` par un entier non nul :math:`p` de la forme suivante :

.. math::

   a = p \times q + r

où :
- :math:`a` est le dividende,
- :math:`p` est le diviseur,
- :math:`q` est le quotient,
- :math:`r` est le reste, tel que :math:`0 \leq r < p`.

Le reste :math:`r` est noté :math:`a \mod p`, ou :math:`a [p]`.

**Exemple** :  
Divisons :math:`a = 25` par :math:`p = 6` :

.. math::

   25 = 6 \times 4 + 1

On obtient un quotient de 4 et un reste de 1. Donc, :math:`25 \mod 6 = 1`.

---

2. Congruence et Propriétés
---------------------------

La congruence est une relation entre deux entiers qui indique qu'ils ont le même reste dans une division euclidienne par un entier :math:`p`. On dit que deux entiers :math:`a` et :math:`b` sont **congrus modulo** :math:`p`, et on note :

.. math::

   a \equiv b \ (\text{mod} \ p)

Cela signifie que :math:`a` et :math:`b` donnent le même reste lorsqu’ils sont divisés par :math:`p`, ou encore que :math:`p` divise :math:`a - b` :

.. math::

   p \ | \ (a - b)

Propriétés des congruences :

1. **Symétrie** :  
   Si :math:`a \equiv b \ [p]`, alors :math:`b \equiv a \ [p]`.

2. **Compatibilité avec l'addition** :  
   Si :math:`a \equiv b \ [p]` et :math:`c \equiv d \ [p]`, alors :

   .. math::

      a + c \equiv b + d \ [p]

3. **Compatibilité avec la multiplication** :  
   Si :math:`a \equiv b \ [p]` et :math:`c \equiv d \ [p]`, alors :

   .. math::

      a \times c \equiv b \times d \ [p]

4. **Transitivité** :  
   Si :math:`a \equiv b \ [p]` et :math:`b \equiv c \ [p]`, alors :

   .. math::

      a \equiv c \ [p]

5. **Congruence avec des puissances** :  
   Si :math:`a \equiv b \ [p]`, alors pour tout entier naturel :math:`n` :

   .. math::

      a^n \equiv b^n \ [p]

**Exemple** :  
Prenons :math:`a = 25`, :math:`b = 37` et :math:`p = 6`. Nous avons :

.. math::

   25 \mod 6 = 1 \quad \text{et} \quad 37 \mod 6 = 1

Donc, :math:`25 \equiv 37 \ [6]`, car :math:`25 - 37 = -12` est un multiple de 6.

---

3. Calcul du reste et congruences négatives
-------------------------------------------

Le calcul du reste pour un entier négatif est un peu particulier. Lorsque :math:`a < 0`, nous avons deux méthodes pour calculer :math:`a \mod p` :

1. **Méthode directe avec la valeur absolue** :  
   On calcule d'abord le reste pour :math:`|a| \mod p`, puis on soustrait ce reste à :math:`p`.

   **Exemple** : Calculons :math:`-84 \mod 17`.  
   On commence par calculer :math:`84 \mod 17`.

   .. math::

      84 = 4 \times 17 + 16

   Donc :math:`84 \mod 17 = 16`.  
   Ensuite, :math:`-84 \mod 17 = 17 - 16 = 1`.

2. **Méthode par ajustement** :  
   On utilise la formule suivante :

   .. math::

      a \mod p = p - (p - a \mod p)

   **Exemple** : Calculons encore :math:`-84 \mod 17` en utilisant cette formule :

   .. math::

      -84 \mod 17 = 17 - (17 - (101 \mod 17)) = 17 - (17 - 16) = 1

---

4. Exemples et exercices d'application
--------------------------------------

1. **Exemple 1** : Calculer le reste dans la division euclidienne de :math:`5416` par :math:`3`.  
   :math:`54 \equiv 0 \ [3]`, et donc :math:`5416 \equiv 0 \ [3]`. Le reste est :math:`0`.

2. **Exemple 2** : Calculer le reste de la division euclidienne de :math:`2117` par :math:`4`.  
   :math:`21 \equiv 1 \ [4]`, donc :math:`2117 \equiv 1 \ [4]`. Le reste est :math:`1`.

3. **Exemple 3** : Trouver le reste de la division de :math:`1001000` par :math:`13`.  
   D'abord, on simplifie :

   .. math::

      100 \equiv 9 \ [13], \quad 100^2 \equiv 3 \ [13], \quad 100^3 \equiv 1 \ [13]

   Donc, :math:`1001000 \equiv 9 \ [13]`.

---

5. Application en cryptographie avec des matrices
-------------------------------------------------

Les congruences jouent un rôle clé dans le chiffrement de messages. Voici un exemple de cryptographie utilisant des congruences avec des matrices.

Principe du chiffrement avec des matrices :
1. Alice et Bob choisissent une matrice :math:`M` carrée d'ordre 2, à coefficients entiers.
2. Chaque lettre du message est codée par une matrice colonne :math:`(x, y)`.
3. Alice envoie à Bob un message en remplaçant chaque lettre par une matrice colonne, puis en multipliant chaque matrice par :math:`M`.
4. Le résultat est ensuite réduit modulo :math:`p` (souvent 5 dans cet exemple) pour obtenir la matrice codée.
5. Bob reçoit les matrices codées et utilise l'inverse de :math:`M` modulo :math:`p` pour décoder le message.

Exemple détaillé :  
Soit la matrice :math:`M = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}` et le message à coder "TE".

- La lettre "T" est représentée par la matrice colonne :math:`\begin{pmatrix} 4 \\ 3 \end{pmatrix}`.

   .. math::

      M \times \begin{pmatrix} 4 \\ 3 \end{pmatrix} = \begin{pmatrix} 10 \\ 24 \end{pmatrix} \equiv \begin{pmatrix} 0 \\ 4 \end{pmatrix} \ [5]

   Donc "T" est codée par "U" (correspondant à :math:`(0, 4)`).

- La lettre "E" est représentée par la matrice :math:`\begin{pmatrix} 4 \\ 0 \end{pmatrix}`.

   .. math::

      M \times \begin{pmatrix} 4 \\ 0 \end{pmatrix} = \begin{pmatrix} 4 \\ 12 \end{pmatrix} \equiv \begin{pmatrix} 4 \\ 2 \end{pmatrix} \ [5]

   Donc "E" est codée par "O" (correspondant à :math:`(4, 2)`).

Ainsi, le message "TE" est codé en "UO".

---

Techniques : Récapitulatif des méthodes essentielles sur les congruences
========================================================================

1. Calcul du modulo avec un entier négatif
------------------------------------------

Pour calculer :math:`a \mod p` lorsque :math:`a` est négatif, il existe deux méthodes simples :

**Méthode 1 : Par ajustement avec le module positif**

1. Calculez :math:`|a| \mod p`, le reste de la division de la valeur absolue de :math:`a` par :math:`p`.
2. Soustrayez ce reste à :math:`p`.

.. math::

   a \mod p = p - (|a| \mod p)

**Exemple** :  
Calculons :math:`-84 \mod 17`.

- :math:`84 \mod 17 = 16` (car :math:`84 = 4 \times 17 + 16`).
- :math:`-84 \mod 17 = 17 - 16 = 1`.

**Méthode 2 : Par la formule modifiée**

.. math::

   a \mod p = p - (p - a \mod p)

**Exemple** : Calculons encore :math:`-84 \mod 17` :

.. math::

   -84 \mod 17 = 17 - (17 - 16) = 1

---

2. Calcul du modulo d’une puissance élevée :math:`a^x \mod p`
-------------------------------------------------------------

Lorsque vous devez calculer :math:`a^x \mod p` pour un grand :math:`x`, il est préférable de décomposer la puissance en plusieurs étapes afin de simplifier le calcul.

Méthode : Utilisation des puissances successives
1. Commencez par décomposer la puissance en utilisant les carrés successifs.
2. Réduisez chaque étape modulo :math:`p` pour éviter de manipuler des nombres trop grands.

**Exemple** :  
Calculons :math:`100^{1000} \mod 13`.

- Commencez par calculer :math:`100 \mod 13` :

   .. math::

      100 \equiv 9 \ [13]

- Ensuite, :math:`100^2 \equiv 9^2 = 81 \equiv 3 \ [13]`.
- Puis :math:`100^3 \equiv 9^3 = 729 \equiv 1 \ [13]`.
- Donc :math:`100^{1000} \equiv 9^{1000} \equiv 9^{3 \times 333 + 1} \equiv (9^3)^{333} \times 9 \equiv 1^{333} \times 9 = 9 \ [13]`.

Ainsi, :math:`100^{1000} \mod 13 = 9`.

---

3. Propriétés des congruences à connaître
-----------------------------------------

1. **Addition et soustraction** :

.. math::

   a \equiv b \ [p] \quad \text{implique} \quad a \pm c \equiv b \pm c \ [p]

**Exemple** : Si :math:`25 \equiv 1 \ [6]`, alors :math:`25 + 2 \equiv 1 + 2 \equiv 3 \ [6]`.

2. **Multiplication** :

.. math::

   a \equiv b \ [p] \quad \text{implique} \quad ac \equiv bc \ [p]

**Exemple** : Si :math:`25 \equiv 1 \ [6]`, alors :math:`25 \times 4 \equiv 1 \times 4 \equiv 4 \ [6]`.

3. **Transitivité** :

.. math::

   a \equiv b \ [p] \quad \text{et} \quad b \equiv c \ [p] \quad \text{implique} \quad a \equiv c \ [p]

4. **Compatibilité avec les puissances** :

.. math::

   a \equiv b \ [p] \quad \text{implique} \quad a^n \equiv b^n \ [p]

**Exemple** : Si :math:`2 \equiv 5 \ [3]`, alors :math:`2^3 \equiv 5^3 \ [3]`, soit :math:`8 \equiv 125 \equiv 2 \ [3]`.

---

4. Méthodes pour résoudre des congruences
-----------------------------------------

Parfois, vous devez résoudre des équations sous forme de congruence, comme :math:`ax \equiv b \ [p]`. Voici la méthode à suivre :

Étapes :
1. **Simplification** : Si possible, simplifiez la congruence.
2. **Inverse modulo** : Si vous devez isoler :math:`x`, vous devez souvent calculer l'inverse de :math:`a \mod p`.
3. **Résolution** : Multipliez les deux côtés de l’équation par l’inverse de :math:`a` modulo :math:`p`.

**Exemple** : Résolvons :math:`7x \equiv 3 \ [11]`.

- Trouvons l'inverse de :math:`7 \mod 11` (c'est-à-dire :math:`c` tel que :math:`7c \equiv 1 \ [11]`).
  En appliquant l'algorithme d'Euclide, on trouve que l'inverse de :math:`7 \mod 11` est :math:`8`.
- Multiplions les deux côtés de l’équation par :math:`8` :

   .. math::

      8 \times 7x \equiv 8 \times 3 \ [11] \quad \Rightarrow \quad x \equiv 24 \ [11] \quad \Rightarrow \quad x \equiv 2 \ [11]

---

5. Résolution de congruences multiples
--------------------------------------

Pour résoudre des systèmes de congruences simultanées comme :

.. math::

   \begin{cases}
   x \equiv a \ [p_1] \\
   x \equiv b \ [p_2]
   \end{cases}

Méthode : Utilisation du **théorème des restes chinois**.

1. Trouver un nombre :math:`x` qui vérifie chacune des congruences. Ce théorème s'applique lorsque les modules :math:`p_1` et :math:`p_2` sont premiers entre eux.

**Exemple** :  
Trouvons :math:`x` tel que :

.. math::

   \begin{cases}
   x \equiv 2 \ [3] \\
   x \equiv 3 \ [5]
   \end{cases}

Étapes :
1. Prenez :math:`x = 3k + 2`, car :math:`x \equiv 2 \ [3]`.
2. Résolvez :math:`3k + 2 \equiv 3 \ [5]`, ce qui donne :math:`3k \equiv 1 \ [5]`.
3. L'inverse de 3 modulo 5 est 2. Donc :math:`k \equiv 2 \ [5]`.
4. Prenez :math:`k = 5m + 2`, donc :math:`x = 3(5m + 2) + 2 = 15m + 8`.
Finalement, :math:`x \equiv 8 \ [15]`.

---

Résumé des techniques essentielles
==================================

1. **Pour un modulo avec un entier négatif** :  
   Utilisez soit la méthode par soustraction du reste, soit la formule ajustée.

2. **Pour des puissances élevées** :  
   Décomposez les puissances en étapes et simplifiez à chaque étape modulo :math:`p`.

3. **Maîtrisez les propriétés des congruences** (addition, multiplication, transitivité, compatibilité avec les puissances).

4. **Résolution de congruences** :  
   Utilisez l'inverse modulo pour résoudre les congruences linéaires.

5. **Systèmes de congruences** :  
   Appliquez le théorème des restes chinois pour résoudre les systèmes avec des modules premiers entre eux.