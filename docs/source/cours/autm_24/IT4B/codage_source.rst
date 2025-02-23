Codage Source
=============

Les 3 Types de Codes à Connaître
--------------------------------

1. **Code à longueur fixe**:
   - Tous les mots ont la même longueur
   - Facile mais pas optimal

2. **Code à longueur variable**:
   - Plus fréquent → mot plus court
   - Ex: Code de Huffman

3. **Code préfixe**:
   - Aucun mot n'est le début d'un autre
   - Garantit le décodage unique

Formules Essentielles
---------------------

.. math::

   \text{Longueur moyenne} &= n(C) = \sum_{i=1}^N p(x_i)n(x_i)\\
   \text{Inégalité de Kraft} &= \sum_{i=1}^N Q^{-n(x_i)} \leq 1\\
   \text{Redondance} &= R = (1 - \frac{H(X)}{\log_2(N)}) \times 100\%\\
   \text{Débit d'information} &= D \times H(X) \text{ [bits/sec]}

Méthode de Huffman en 4 Étapes
------------------------------

1. **Préparation**:
   - Lister les symboles et leurs probabilités
   - Ordonner par probabilités décroissantes

2. **Construction de l'arbre**:
   a. Prendre les 2 plus petites probabilités
   b. Les additionner → nouveau nœud
   c. Répéter jusqu'à prob = 1

3. **Attribution des bits**:
   - Gauche = 0
   - Droite = 1

4. **Lecture des codes**:
   - Suivre le chemin de la racine à chaque feuille
   - Noter les 0 et 1 rencontrés

Exemple Simple Résolu
---------------------
::

   Symboles | A   | B   | C   | D
   Prob     | 0.4 | 0.3 | 0.2 | 0.1

1. Construction de l'arbre:
   ::
      
            1.0
           /   \
         0.7   0.3(B)
        /   \
      0.4   0.3
     (A)   /   \
          0.2   0.1
          (C)   (D)

2. Codes résultants:
   - A = 0
   - B = 11
   - C = 100
   - D = 101

3. Longueur moyenne:
   n = 1×0.4 + 2×0.3 + 3×0.2 + 3×0.1 = 1.9 bits

Vérifications à Faire
---------------------

1. **Pour tout code**:
   - Somme des probabilités = 1
   - Vérifier l'inégalité de Kraft
   - n(C) ≥ H(X)

2. **Pour Huffman**:
   - Arbre binaire complet
   - Probabilités bien additionnées
   - Plus petite prob → mot le plus long

Procédure d'Examen
------------------

1. Si on demande un code:
   a. Vérifier si longueur fixe possible
   b. Si non, faire Huffman
   c. Vérifier l'inégalité de Kraft

2. Si on demande compression:
   a. Calculer H(X)
   b. Comparer avec log2(N)
   c. Calculer la redondance

3. Si on demande efficacité:
   a. Calculer n(C)
   b. Comparer avec H(X)
   c. Plus proche = plus efficace

Tips et Pièges
--------------

1. **Pièges courants**:
   - Oublier de vérifier la somme des probabilités
   - Se tromper dans l'ordre des probabilités
   - Mal additionner dans l'arbre

2. **Astuces**:
   - Toujours dessiner l'arbre proprement
   - Noter les probabilités à chaque nœud
   - Vérifier que chaque symbole a un code unique
