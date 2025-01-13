Mini-Guide Codage Canal pour les Examens
=====================================

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
------------

1. **Pour les matrices**:
   - Ne pas oublier la transposée pour H
   - Bien identifier Ik dans G
   - Vérifier les dimensions

2. **Pour le décodage**:
   - Vérifier l'orientation du mot reçu (yt)
   - Bien utiliser la table de décodage
   - Ne pas oublier d'ajouter ε

Exemples Types d'Examen
-------------------

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
----------------------------

Construction de G à partir des équations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^

1. **Méthode 1**: Via H
   a. Comparer les colonnes 2 à 2
   b. Comparer les sommes de colonnes
   c. Le plus petit nombre de colonnes dépendantes = dmin

2. **Méthode 2**: Via les mots du code
   a. Calculer tous les mots code avec G
   b. Comparer leurs poids de Hamming
   c. Le plus petit poids non nul = dmin

Exemple Complet
------------
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
------------------------

Type 1: Des équations vers les matrices
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
**Si on vous donne**: Mot reçu y et table de décodage
**On demande**: Correction

**Méthode**:
1. Calculer S = H × yt
2. Chercher S dans la table
3. Ajouter ε correspondant
4. Si S pas dans table = non corrigible

Pour un Exam Réussi
----------------
1. S'entraîner sur ces 4 types d'exercices
2. Mémoriser les étapes de chaque type
3. Vérifier les dimensions à chaque calcul
4. S'assurer que tout est cohérent avec dmin

Pour Réussir l'Examen
------------------

1. Apprendre par cœur la forme des matrices G et H
2. S'entraîner à repérer rapidement dmin
3. Mémoriser la procédure de décodage
4. Toujours vérifier les dimensions des matrices
