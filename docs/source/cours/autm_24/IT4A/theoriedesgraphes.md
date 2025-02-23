# Théorie des Graphes

## Introduction
La théorie des graphes étudie les structures composées de sommets (ou nœuds) et d'arêtes reliant ces sommets. Ce document synthétise les notions essentielles et fournit des exemples pratiques.

## Concepts Fondamentaux
| Élément   | Description                                             |
|-----------|---------------------------------------------------------|
| **Sommet**| Un point ou nœud dans le graphe.                         |
| **Arête** | Connexion entre deux sommets.                           |
| **Chemin**| Succession d'arêtes reliant une séquence de sommets.     |
| **Cycle** | Chemin fermé sans répéter d'arêtes.                     |

## Types de Graphes
- **Graphes Orientés** : Les arêtes ont une direction (ex. A → B).
- **Graphes Non Orientés** : Les arêtes n'ont pas de direction particulière.
- **Graphes Pondérés** : Chaque arête est associée à une valeur ou un coût.

## Représentation des Graphes
### Matrice d'Adjacence
Représente la connexion entre les sommets par une matrice.
|         | A | B | C |
|---------|---|---|---|
| **A**   | 0 | 1 | 0 |
| **B**   | 1 | 0 | 1 |
| **C**   | 0 | 1 | 0 |

### Liste d'Adjacence
Représente pour chaque sommet la liste de ses voisins.
| Sommet | Voisins   |
|--------|-----------|
| A      | B         |
| B      | A, C      |
| C      | B         |

## Algorithmes de Parcours
- **DFS (Depth-First Search)** : Parcours en profondeur.
- **BFS (Breadth-First Search)** : Parcours en largeur.

#### Exemple de Parcours BFS (Tableau d'Itération)
Pour le graphe précédent, en partant de A :
| Étape | Sommets visités | File d'attente       |
|-------|-----------------|----------------------|
| 1     | A               | [B]                  |
| 2     | A, B            | [C]                  |
| 3     | A, B, C         | []                   |

## Exemples Pratiques
**Graphe Simple Non Orienté :**
| Arête  | Description               |
|--------|---------------------------|
| A - B  | Arc reliant A à B         |
| B - C  | Arc reliant B à C         |
| C - D  | Arc reliant C à D         |
| D - A  | Arc reliant D à A (cycle)  |
