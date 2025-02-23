Codage Canal
============

Les 3 Choses à Savoir Absolument
--------------------------------

1. **Matrices importantes**:

   .. math::

      \text{Matrice génératrice G} &= [I_k | N] \text{ (forme systématique)}\\
      \text{Matrice de contrôle H} &= [N^t | I_{n-k}]\\
      \text{Syndrome} &= H y^t \text{ (y = mot reçu)}

2. **Relations clés**:
   - n = longueur totale du mot code
   - k = longueur du message original
   - r = n-k = bits de contrôle
   - dmin = distance minimale

3. **Capacités du code**:
   - Détection: dmin > t
   - Correction: dmin > 2t
   - t = nombre d'erreurs

Procédure Mécanique pour l'Examen
---------------------------------

1. **Si on donne G, trouver H**:
   a. Identifier la partie systématique [Ik | N]
   b. H = [Nt | In-k]
   c. Vérifier G × Ht = 0

2. **Si on donne H, trouver dmin**:
   - Compter le nombre minimum de colonnes dépendantes
   - Ou comparer les colonnes entre elles

3. **Pour corriger un mot reçu y**:
   a. Calculer le syndrome S = H × yt
   b. Chercher S dans la table de décodage
   c. Ajouter le vecteur de correction ε

Exemple Résolu: Code (7,4)
--------------------------
::

   G = [I4 | N] = [1000|110
                   0100|011
                   0010|111
                   0001|101]

1. Calcul de H:
   .. math::
      H = [N^t | I_3] = [1101|100
                         1011|010
                         0111|001]

2. Syndrome d'un mot reçu y = 1010111:
   - S = H × yt
   - Si S = 000: pas d'erreur
   - Si S ≠ 000: chercher dans la table

Table de Décodage Type
----------------------
::

   Syndrome | Erreur à corriger
   000      | 0000000
   100      | 1000000
   010      | 0100000
   001      | 0010000
   ...      | ...

Table de Décision Rapide
------------------------

**Pour dmin donné**:
::

   dmin = 2:  détecte 1 erreur, corrige 0
   dmin = 3:  détecte 2 erreurs, corrige 1
   dmin = 4:  détecte 3 erreurs, corrige 1
   dmin = 5:  détecte 4 erreurs, corrige 2
   dmin = 6:  détecte 5 erreurs, corrige 2
   dmin = 7:  détecte 6 erreurs, corrige 3

**Règles générales**:
- Pour détecter d erreurs: dmin > d
- Pour corriger t erreurs: dmin > 2t

Comment Savoir si un Code est Corrigeable
-----------------------------------------

1. **Code non corrigeable si**:
   - Plusieurs vecteurs de correction pour un même syndrome
   - dmin ≤ 2

2. **Code corrigeable si**:
   - Un seul vecteur de correction par syndrome
   - dmin ≥ 3
   - Le syndrome identifie uniquement l'erreur

3. **Exemple pratique**:
   ::
      
      Syndrome | Vecteur correction
      S1      | ε1, ε2   → Non corrigeable (plusieurs vecteurs)
      S2      | ε3       → Corrigeable (un seul vecteur)
      S3      | -        → Non corrigeable (pas de correction)

4. **En examen**:
   a. Calculer dmin
   b. Si dmin ≥ 3: vérifier unicité des vecteurs de correction
   c. Si ambiguïté: code non corrigeable pour ces erreurs

Vérifications Importantes
-------------------------

1. **Pour les matrices**:
   - G a k lignes et n colonnes
   - H a (n-k) lignes et n colonnes
   - GHt = 0

2. **Pour dmin**:
   - dmin ≥ 3 pour corriger 1 erreur
   - dmin ≥ 5 pour corriger 2 erreurs

3. **Pour le décodage**:
   - Syndrome nul = mot correct
   - Sinon chercher dans la table
   - Si pas dans la table = non corrigible

Pièges à Éviter
---------------

1. **Pour les matrices**:
   - Ne pas oublier la transposée pour H
   - Bien identifier Ik dans G
   - Vérifier les dimensions

2. **Pour le décodage**:
   - Vérifier l'orientation du mot reçu (yt)
   - Bien utiliser la table de décodage
   - Ne pas oublier d'ajouter ε

Exemples Types d'Examen
-----------------------

1. **Question type 1**: Trouver H à partir de G
   - Identifier [Ik | N]
   - H = [Nt | In-k]

2. **Question type 2**: Corriger un mot reçu
   - Calculer S = H × yt
   - Chercher dans la table
   - y + ε = mot corrigé

3. **Question type 3**: Capacité de correction
   - Trouver dmin
   - Si dmin = 3 → corrige 1 erreur
   - Si dmin = 5 → corrige 2 erreurs

Guide de Construction Pas à Pas
-------------------------------

Construction de G à partir des équations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. **Avec équations de contrôle**:
   ::

      Si on a: c1 = i1 + i2
              c2 = i2 + i3
              c3 = i1 + i3

   Alors G = [I | N] où N contient les équations:
   ::

      G = [1 0 0 | 1 0 1
           0 1 0 | 1 1 0
           0 0 1 | 0 1 1]

2. **Vérification**:
   - Les k premières colonnes = Ik
   - Les autres colonnes = équations de contrôle

Construction de H à partir de G
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. **Si G est systématique [I | N]**:
   - Prendre Nt (transposée de N)
   - Ajouter I(n-k) à droite
   ::

      Si G = [1 0 | 1 1]
            [0 1 | 1 0]
      
      Alors H = [1 1 | 1 0]
                [1 0 | 0 1]

2. **Vérification**:
   - GHt = 0
   - Dimensions: (n-k) × n

Calcul de dmin
^^^^^^^^^^^^^^

1. **Méthode 1**: Via H
   a. Comparer les colonnes 2 à 2
   b. Comparer les sommes de colonnes
   c. Le plus petit nombre de colonnes dépendantes = dmin

2. **Méthode 2**: Via les mots du code
   a. Calculer tous les mots code avec G
   b. Comparer leurs poids de Hamming
   c. Le plus petit poids non nul = dmin

Exemple Complet
---------------
::

   Équations:
   c1 = i1 + i2
   c2 = i1
   c3 = i2

1. **Construction de G**:
   ::

      G = [1 0 | 1 1 0]  ← i1
          [0 1 | 1 0 1]  ← i2

2. **Construction de H**:
   ::

      H = [1 1 | 1 0 0]
          [1 0 | 0 1 0]
          [0 1 | 0 0 1]

3. **Calcul de dmin**:
   - Comparer colonnes de H
   - dmin = 3 car besoin de 3 colonnes minimum pour obtenir 0

4. **Capacité de correction**:
   - dmin = 3 donc t = 1
   - Peut corriger 1 erreur

Patterns d'Examen Typiques
--------------------------

Type 1: Des équations vers les matrices
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
**Si on vous donne**: Équations de type ci = ... (bits de contrôle)
**On demande**: Trouver G et H

**Méthode**:
1. Repérer k (nombre de i) et r (nombre de c)
2. n = k + r
3. Construire G = [Ik | N] où N contient les équations
4. H = [Nt | Ir]

**Exemple**:
::

   Donné: c1 = i1 + i2
          c2 = i1
          c3 = i2

   Solution:
   k = 2 (i1, i2)
   r = 3 (c1, c2, c3)
   n = 5

   G = [1 0 | 1 1 0]  ← équation pour i1
       [0 1 | 1 0 1]  ← équation pour i2

Type 2: Des mots code vers les propriétés
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
**Si on vous donne**: Liste de mots code
**On demande**: dmin, capacités de détection/correction

**Méthode**:
1. Compter les différences entre chaque paire de mots
2. Le plus petit nombre = dmin
3. Détection si dmin > t
4. Correction si dmin > 2t

**Exemple**:
::

   Mots: 00000, 11010, 10101, 01111
   dmin = 3 car minimum 3 positions différentes
   → Peut détecter 2 erreurs
   → Peut corriger 1 erreur

Type 3: Construction de la table de décodage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
**Si on vous donne**: G ou H
**On demande**: Table de syndromes

**Méthode**:
1. Si manquant, calculer H
2. Pour chaque erreur de poids 1:
   - Calculer son syndrome
   - L'ajouter à la table
3. Continuer avec poids 2 si nécessaire

**Exemple**:
::

   Erreur    | Syndrome
   00001     | 001  ← première colonne de H
   00010     | 010  ← deuxième colonne de H
   ...       | ...

Type 4: Correction d'un mot reçu
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
**Si on vous donne**: Mot reçu y et table de décodage
**On demande**: Correction

**Méthode**:
1. Calculer S = H × yt
2. Chercher S dans la table
3. Ajouter ε correspondant
4. Si S pas dans table = non corrigible

Comprendre les Syndromes
------------------------

**Définition simple**: 
Le syndrome est une "signature d'erreur". C'est un calcul qui permet de savoir si un mot reçu est correct ou non, et si non, quelle erreur s'est produite.

**Formule**:

.. math::
   S = H \times y^t

où:
- H est la matrice de contrôle
- y est le mot reçu
- yt est le mot reçu transposé

**Comment ça marche**:

1. **Si S = 0**:
   - Le mot reçu est probablement correct
   - Car H × (mot code)t = 0 toujours

2. **Si S ≠ 0**:
   - Une erreur s'est produite
   - Le syndrome est identique à la colonne de H correspondant à la position de l'erreur

**Exemple Pratique**:
::

   H = [1 1 0]   y = [1 0 1]
       [0 1 1]

1. Calculer S = H × yt:
   S = [1]  ← Ce syndrome indique une erreur
       [1]

2. Chercher ce syndrome dans les colonnes de H:
   - Correspond à colonne 1 de H
   - Donc erreur en position 1

**En résumé**:
- Le syndrome est un outil de détection/correction
- Il agit comme un détecteur d'erreur
- Sa valeur indique où se trouve l'erreur

Construction de la Table de Décodage: Méthode Systématique
----------------------------------------------------------

1. **Étape Préliminaire**:
   - Calculer dmin (ici = 3)
   - Le code peut corriger 1 erreur car dmin > 2t → t = 1

2. **Recensement des Syndromes**:
   - Nombre de syndromes possible = 2^(n-k) = 2^3 = 8 syndromes
   - Les syndromes vont de 000 à 111

3. **Construction de la Table**:

   a. **Première ligne**: 
      - Toujours commencer par le syndrome nul (000)
      - Vecteur de correction ε1 = (000000)
   
   b. **Erreurs de poids 1**:
      - Prendre les colonnes de H une par une
      - Chaque colonne de H = syndrome d'une erreur de poids 1
      ::
      
         Col1 de H = (1,0,1)t = S2 → ε2 = (100000)
         Col2 de H = (1,1,0)t = S3 → ε3 = (010000)
         etc...

   c. **Vérification**:
      - Une erreur en position i → vecteur de correction avec un 1 en position i
      - Le syndrome = colonne i de H

Exemple de Construction
-----------------------
::

   H = [1 1 0 1 0 0]
       [0 1 1 0 1 0]
       [1 0 1 0 0 1]

1. **Syndromes de poids 1**:
   Position 1: (100000) → S = col1 = (101)
   Position 2: (010000) → S = col2 = (110)
   etc...

2. **Table résultante**:
   ::
   
      Vect correction | Syndrome
      (000000)       | (000)  ← pas d'erreur
      (100000)       | (101)  ← erreur pos 1
      (010000)       | (110)  ← erreur pos 2
      (001000)       | (011)  ← erreur pos 3
      ...            | ...

Vérification Rapide
-------------------
1. Chaque syndrome doit apparaître une seule fois
2. Les vecteurs de correction doivent être de poids ≤ t
3. Le nombre total de syndromes = 2^(n-k)

En Pratique à l'Examen
----------------------
1. Écrire toutes les colonnes de H comme syndromes
2. Pour chaque syndrome, mettre un 1 à la position correspondante
3. Vérifier que chaque vecteur corrige bien une seule erreur

Pour un Exam Réussi
-------------------
1. S'entraîner sur ces 4 types d'exercices
2. Mémoriser les étapes de chaque type
3. Vérifier les dimensions à chaque calcul
4. S'assurer que tout est cohérent avec dmin

Pour Réussir l'Examen
---------------------

1. Apprendre par cœur la forme des matrices G et H
2. S'entraîner à repérer rapidement dmin
3. Mémoriser la procédure de décodage
4. Toujours vérifier les dimensions des matrices
