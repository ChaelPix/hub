# Langages et Automates

## Introduction
Les automates sont des outils mathématiques essentiels pour étudier les langages formels. Ce document sert de référence pour comprendre, visualiser et appliquer les concepts des automates.

## Concepts Fondamentaux
| Élément         | Description                                                  |
|-----------------|--------------------------------------------------------------|
| **Alphabet**    | Ensemble des symboles utilisés.                              |
| **États**       | Positions ou conditions de l'automate.                       |
| **État Initial**| Point de départ du traitement.                               |
| **États Acceptants** | États indiquant qu'une chaîne est reconnue.             |
| **Transitions** | Règles de passage d'un état à l'autre selon un symbole.       |

## Types d'Automates

### Automate Fini Déterministe (DFA)
- Chaque paire (état, symbole) conduit à une unique transition.

### Automate Fini Non Déterministe (NFA)
- Possibilité de plusieurs transitions pour une même paire (état, symbole).
- Peut inclure des transitions spontanées (ε-transitions).

## Fonctionnement d'un Automate
1. Initialiser à l'état initial.
2. Lire la chaîne symbole par symbole.
3. Appliquer la règle de transition correspondante.
4. Accepter si l'état final atteint est un état acceptant.

## Exemple de DFA
**Description :**  
Un DFA simple avec deux états.
- États : {q0, q1}
- Alphabet : {a, b}
- État initial : q0
- États acceptants : {q1}

**Tableau des transitions :**
| État de départ | Entrée | État d'arrivée |
|----------------|--------|----------------|
| q0             | a      | q1             |
| q0             | b      | q0             |
| q1             | a      | q1             |
| q1             | b      | q0             |

## Minimisation d'un Automate
### Méthode de Nerode
- Identifier les états équivalents (reconnaissant le même langage).
- Fusionner ces états pour obtenir un automate réduit.

#### Exemple de Minimisation avec la Méthode de Nerode
**Automate initial :**
| État de départ | Entrée | État d'arrivée |
|----------------|--------|----------------|
| A              | 0      | B              |
| A              | 1      | C              |
| B              | 0      | A              |
| B              | 1      | D              |
| C              | 0      | D              |
| C              | 1      | A              |
| D              | 0,1   | D              |

Les états B et C étant équivalents, l'automate minimisé devient :

**Automate minimisé :**
| État de départ | Entrée | État d'arrivée |
|----------------|--------|----------------|
| A              | 0,1   | X              |
| X              | 0      | A              |
| X              | 1      | D              |
| D              | 0,1   | D              |

### Méthode de Moore
- Partitionner initialement : états acceptants vs non acceptants.
- Raffiner les partitions en fonction des transitions.
- Reconstruire l'automate minimal à partir des partitions finales.

#### Exemple de Minimisation avec la Méthode de Moore
**Automate initial :**
| État de départ | Entrée | État d'arrivée |
|----------------|--------|----------------|
| P              | a      | Q              |
| P              | b      | R              |
| Q              | a      | P              |
| Q              | b      | S              |
| R              | a      | S              |
| R              | b      | P              |
| S              | a,b    | S              |

Après raffinement, les états P, Q et R se regroupent. L'automate minimal devient :

**Automate minimal :**
| État de départ | Entrée | État d'arrivée |
|----------------|--------|----------------|
| P'             | a      | P'             |
| P'             | b      | S              |
| S              | a,b    | S              |

## Transformation d'un NFA en DFA
1. Construire les sous-ensembles d'états :
   - Démarrer avec {état initial + ε-transitions}.
   - Pour chaque groupe d'états, déterminer les transitions pour chaque symbole.
2. Ajouter un "état puit" pour les transitions indéfinies afin de compléter le DFA.
