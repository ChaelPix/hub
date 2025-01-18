Guide de Survie Alpha-Beta pour l'Examen
========================================

Lecture de l'Énoncé
-------------------

1. **Identifier les éléments clés**:
   - Qui joue MAX/MIN? (ici IA = MIN)
   - État initial? (ici n=8 jetons)
   - Règles de coup valide? (ici: diviser en 2 piles différentes)
   - Format de représentation? (ici: liste triée des piles >2)

2. **Exemple de Coups**:
   ::
   
      État (8) → possibilités:
      - Diviser en (5,3)
      - Diviser en (6,2) [ne compte pas car 2 n'apparaît pas]
      - Diviser en (4,4) [invalide car piles identiques]

Méthode de Construction de l'Arbre
----------------------------------

1. **Niveau Initial (MAX)**:
   ::
   
      [8]
      /  \
     [5,3] [6,2]   ← Premier niveau = coups possibles
     
2. **Règles de Construction**:
   - Trier les piles par ordre décroissant
   - Ignorer les piles ≤ 2
   - Alterner MAX/MIN à chaque niveau
   - S'arrêter quand plus de coup possible

Application Alpha-Beta
----------------------

1. **Initialisation**:
   - Racine: [-∞,+∞]
   - MAX cherche à augmenter α
   - MIN cherche à diminuer β

2. **Règles d'Élagage**:
   ::
   
      Si nœud MAX et α ≥ β: couper branches restantes
      Si nœud MIN et α ≥ β: couper branches restantes

3. **Exemple**:
   ::

      [-∞,+∞]
         [8]
        /   \
   [5,3]     [6,2]
   [-2,4]    [-1,2] ✗  ← Élagué car α≥β

CLARIFICATION: Représentation des Nœuds
---------------------------------------

**Les nœuds représentent les ÉTATS**:
::

    État initial [8]
                /    \
           [5,3]     [6,2]     [7,1] aussi possible!
           /   \     /   \     /    \
      [3,2]  [4,1] [4,2] [5,1] ...  ...

**Règles de notation**:
- Toujours trier les piles par ordre décroissant
- Ne garder que les piles > 2
- Exemple: [4,3,2,1] devient [4,3]

Les VALEURS des nœuds:
::

    Pour n=8:
                     [2]         ← Valeur finale propagée
                    /   \
                 [2]    [3]     ← MIN choisit minimum
                /  \   /  \
              [2] [4] [3] [5]   ← Valeurs des positions

Arbre Complet pour n=8
----------------------
::

    Niveau 0 (MAX)        [8][-∞,+∞]
                      ____/   |   \____
                     /        |        \
    Niveau 1 (MIN) [5,3]   [6,2]    [7,1]
                   [-3,2]  [-2,∞]✗  [-1,∞]✗
                   /    \
    Niveau 2     [3,2]  [4,1]
    (MAX)        [2,4]  [1,3]

Comment Évaluer les Positions
-----------------------------

1. **Position finale**:
   - Plus de coup possible = PERTE (-1)
   - Dernier coup joué = GAIN (+1)

2. **Exemple**:
   ::
   
       [5,3]              ← Position non finale
        |
       [3,2]              ← Position finale (plus de coups)
        ↓
       Valeur = -1        ← Le joueur qui arrive ici a perdu

3. **Propagation**:
   ::
   
      Position    | Qui joue  | Valeur
      [3,2]       | Fin      | -1 (PERTE)
      [4,1]       | Fin      | -1 (PERTE)
      [5,3]       | MIN      | -1 (minimum)
      [8]         | MAX      |  2 (maximum)

ATTENTION: Pièges Courants
--------------------------
1. Ne pas oublier [7,1] qui est aussi un coup valide
2. Bien marquer les valeurs ET les [α,β]
3. Propager du bas vers le haut
4. Vérifier l'alternance MAX/MIN

Résolution Pas à Pas
--------------------

1. **Pour n=8**:
   ::
   
      État       Coups Possibles
      (8)     → (5,3), (6,2)
      (5,3)   → (3,2), (4,1)
      (6,2)   → (4,2), (5,1)

2. **Construction Arbre**:
   ::
   
      [8][-∞,+∞]
      /          \
   [5,3][-3,2]   [6,2][-2,∞]✗
   /    \
   ...    ...

3. **Propagation Valeurs**:
   - De bas en haut
   - MAX prend maximum des fils
   - MIN prend minimum des fils

RÈGLE D'OR: Toujours du Bas vers le Haut!
-----------------------------------------

**Pourquoi?**:
::

   [?]   ← On ne peut pas savoir cette valeur...
    |
   [?]   ← ...ni celle-ci...
    |
   [2]   ← ...tant qu'on ne connaît pas les valeurs du bas!

**Méthode pratique**:
::

   1. Commencer par les feuilles (états finaux)
      [2]   [3]   [1]   [4]
   
   2. Remonter niveau par niveau:
         [3]
        /   \
      [2]   [3]   ← MIN prend min(2,3) = 2
   
   3. Continuer jusqu'à la racine:
      [3]            ← MAX prend max(2,4)
     /   \
   [2]    [4]       ← MIN prend min(3,4) pour branche droite

**Exemple Visuel**:
::

                    [3]            ← ÉTAPE 3: MAX choisit max(2,4)
                   /   \
                [2]    [4]        ← ÉTAPE 2: MIN choisit min
               /  \    /  \
            [2]   [3] [4]  [5]   ← ÉTAPE 1: On commence ici!

Trouver Premier Coup IA
-----------------------

1. **Méthode**:
   - IA = MIN, prend branche avec plus petite valeur
   - Regarder valeurs β du premier niveau

2. **Exemple**:
   ::

      Si niveau 1:
      (5,3) → β = 2
      (6,2) → β = 4
      → IA choisit (5,3)

Déterminer le Gagnant
---------------------

1. **Règles**:
   - Valeur finale positive → MAX gagne
   - Valeur finale négative → MIN gagne
   - Valeur = 0 → Match nul

2. **Note**: Le gagnant est déterminé par la valeur à la racine

Tips pour l'Examen
------------------

1. **Ne pas oublier**:
   - Trier les piles
   - Ignorer piles ≤ 2
   - Noter [α,β] sur CHAQUE nœud

2. **Vérifications**:
   - Coups valides uniquement
   - Alternance MAX/MIN
   - Propagation correcte des valeurs

3. **Gain de temps**:
   - Commencer par branches extrêmes
   - Marquer élagages avec ✗
   - Vérifier cohérence des valeurs
