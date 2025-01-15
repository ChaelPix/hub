Guide SIMPLE du Pruning Alpha-Beta
==============================

Principe de Base
-------------
::

   Si MIN a déjà trouvé une valeur = 3
   Et que MAX peut faire MIEUX ailleurs
   → Inutile d'explorer plus loin

Exemple Visuel
-----------
::

                  MAX [-∞,+∞]
                     [8]
                    /    \
    MIN [-∞,4]  [5,3]    [6,2] [-∞,+∞]
                /    \     /   ✗
    MAX [2,4] [3,2]  [4,1]    
              /
           (2)

Comment Ça Marche
--------------

1. **Quand MIN trouve 2**:
   ::
   
      - Il sait qu'il peut forcer MAX à avoir ≤ 2
      - β = 2 devient le plafond pour cette branche

2. **Quand MAX trouve 4 ailleurs**:
   ::
   
      - Il sait qu'il peut avoir ≥ 4
      - α = 4 devient le plancher

3. **RÈGLE D'ÉLAGAGE**:
   ::
   
      Si α ≥ β:
      - MIN ne pourra jamais faire pire que β
      - MAX ne pourra jamais faire mieux que α
      → On peut couper! (pruning)

Exemple Pratique: Nim
------------------
::

    État initial (8)
         MAX [-∞,+∞]
             (8)
            /    \
    MIN   (5,3)  (6,2)
          /   \    ✗
    MAX (3,2)(4,1)

1. MIN voit que gauche donne 2
2. MAX trouve 4 dans autre branche
3. Plus besoin d'explorer (6,2)

Vérification Rapide
----------------

1. Pour chaque nœud:
   ::
   
      Si c'est MAX:
      - α = max(valeur_fils, α)
      - Couper si α ≥ β

      Si c'est MIN:
      - β = min(valeur_fils, β)
      - Couper si α ≥ β

2. Rappel:
   ::
   
      MAX cherche à augmenter α
      MIN cherche à diminuer β
