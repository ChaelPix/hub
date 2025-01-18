Guide ULTIME de Survie IA41
===========================

SECTION 0: Comment Utiliser ce Guide
--------------------------------
Ce guide est organisé en 3 parties, chacune correspondant à un type d'exercice d'examen. Il contient toutes les recettes mécaniques pour résoudre les exercices sans avoir à comprendre toute la théorie.

SECTION 1: CSP Pour les Nuls
----------------------------

Définition Express
^^^^^^^^^^^^^^^^^^
CSP = (X, D, C) où:
- X = Variables à trouver
- D = Valeurs possibles
- C = Règles à respecter

Méthode en 4 Étapes
^^^^^^^^^^^^^^^^^^^
1. Dessiner le graphe
2. Noter toutes les contraintes sur les arêtes
3. Vérifier les domaines
4. Trouver solutions avec backtracking

Exemples Concrets
^^^^^^^^^^^^^^^^^

1. **Exemple N-Reines**:
::

   VARIABLES: Xi = position reine ligne i
   DOMAINES: {1,...,N} pour chaque Xi
   CONTRAINTES: 
   - Pas même colonne: Xi ≠ Xj
   - Pas diagonale: |Xi - Xj| ≠ |i - j|

2. **Exemple Coloriage**:
::

   VARIABLES: Une par région
   DOMAINES: {Rouge, Vert, Bleu, Jaune}
   CONTRAINTES: Régions adjacentes ≠ couleurs

SECTION 2: A* Sans Prise de Tête
--------------------------------

Comment Remplir le Tableau A*
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1. **Colonnes Obligatoires**:
::

   Iter | Nœud | g(n) | h(n) | f(n) | OPEN | CLOSED

2. **Pour chaque ligne**:
   - g(n) = coût réel depuis départ
   - h(n) = distance Manhattan au but
   - f(n) = g(n) + h(n)
   - OPEN = nœuds à explorer
   - CLOSED = nœuds déjà explorés

Distance Manhattan Expliquée
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
::

    Pour aller de (x1,y1) à (x2,y2):
    h(n) = |x2-x1| + |y2-y1|

    Exemple: De (0,0) à (2,3)
    h(n) = |2-0| + |3-0| = 5

SECTION 3: Alpha-Beta en 5 Minutes
----------------------------------

Étapes à Suivre
^^^^^^^^^^^
1. **Dessiner l'arbre**:
::

   MAX (niveau 0)
    ├── MIN (niveau 1)
    │   ├── MAX (niveau 2)
    │   └── MAX (niveau 2)
    └── MIN (niveau 1)
        └── MAX (niveau 2)

2. **Annoter chaque nœud**:
::

   [α,β] = [-∞,+∞] au début
   α = meilleur pour MAX
   β = meilleur pour MIN

3. **Règles d'élagage**:
   - Si α ≥ β: couper branche
   - Marquer avec ✗ les branches coupées

ANNEXE: Trucs et Astuces
------------------------

Pour le CSP
^^^^^^^^^^^
- Toujours dessiner le graphe d'abord
- Commencer par les variables les plus contraintes
- Vérifier chaque solution

Pour A*
^^^^^^^
- Bien initialiser g(départ) = 0
- Mettre à jour OPEN/CLOSED systématiquement
- Toujours développer le plus petit f(n)

Pour Alpha-Beta
^^^^^^^^^^^^^^^
- Alterner MAX/MIN correctement
- Noter [-∞,+∞] sur la racine
- Ne pas oublier de propager α et β

En Cas de Panique
^^^^^^^^^^^^^^^^^
1. Relire les patterns d'exercices
2. Appliquer mécaniquement les étapes
3. Vérifier les calculs
4. Ne pas hésiter à recommencer proprement
