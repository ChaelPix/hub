======================
Langages des Automates
======================

.. contents::
   :depth: 2
   :local:

.. toctree::
   :maxdepth: 1

Langages et Automates
=====================

1. Langages formels
-------------------

1.1 Alphabet, Mots, et Langages

- **Alphabet** : Ensemble fini de symboles, noté :math:`\Sigma`.  
  Exemple : :math:`\Sigma = \{a, b\}`.

- **Mot** : Séquence finie de symboles de :math:`\Sigma`, notée :math:`w \in \Sigma^*`. Le mot vide est noté :math:`\varepsilon`.

- **Langage** : Ensemble de mots définis sur :math:`\Sigma`, noté :math:`L \subseteq \Sigma^*`.

---

2. Expressions Régulières
-------------------------

2.1 Définition et Symboles

Une **expression régulière** est une représentation formelle pour décrire un **langage régulier**. Les opérations de base sont :
- **Union** : :math:`E_1 | E_2` (soit :math:`E_1`, soit :math:`E_2`).
- **Concaténation** : :math:`E_1.E_2` (concaténation des mots de :math:`E_1` et :math:`E_2`).
- **Étoile de Kleene** : :math:`E^*` (itération de zéro ou plusieurs occurrences des mots de :math:`E`).

2.2 Exemple

L'expression régulière :math:`a^*b` décrit un langage formé de :
- Zéro ou plusieurs :math:`a`, suivis d'un seul :math:`b`.
Exemple : Les mots :math:`b`, :math:`ab`, :math:`aab`, etc. sont dans le langage.

2.3 Méthodologie pour construire une expression régulière

1. Identifier les motifs dans le langage : répétitions, alternances, concaténations.
2. Utiliser les symboles : 
   - :math:`|` pour les alternatives.
   - :math:`\cdot` pour la concaténation.
   - :math:`^*` pour la répétition.
3. Tester avec des mots simples du langage pour valider l'expression.

---

3. Automates
------------

3.1 Automate Fini Déterministe (AFD)

Un **automate fini déterministe (AFD)** est défini par :math:`A = (\Sigma, E, D, F, \Theta)`, où :
- :math:`\Sigma` : Alphabet.
- :math:`E` : Ensemble des états.
- :math:`D \subseteq E` : Ensemble d’états de départ.
- :math:`F \subseteq E` : Ensemble d’états acceptants.
- :math:`\Theta : E \times \Sigma \rightarrow E` : Fonction de transition.

3.2 Automate Fini Non-Déterministe (AFND)

Similaire à l'AFD, mais avec des transitions multiples possibles pour un même état et symbole :
- Fonction de transition : :math:`\Theta : E \times \Sigma \rightarrow \mathcal{P}(E)` (ensemble des parties de :math:`E`).

3.3 Conversion AFND en AFD

1. **Étape 1** : Pour chaque état de l’AFND, identifier les transitions possibles pour chaque symbole.
2. **Étape 2** : Créer de nouveaux états pour chaque ensemble d’états atteignables (construction de l'automate des sous-ensembles).
3. **Étape 3** : Définir les nouveaux états acceptants si un des états de l'AFND est acceptant.

Exemple : Un automate non-déterministe qui accepte les mots finissant par :math:`a` ou :math:`b` sera déterminisé en créant des états qui combinent les transitions possibles.

---

4. Langages Reconnaissables et Automates
----------------------------------------

4.1 Langages Reconnaissables

Un langage est dit **reconnaissable** s'il existe un automate fini qui le reconnaît. Les **langages réguliers** sont **reconnaissables** par des automates finis (AFD ou AFND).

4.2 Propriétés des Langages Réguliers

Les langages réguliers sont fermés sous les opérations suivantes :
- **Union** : :math:`L_1 \cup L_2` est régulier si :math:`L_1` et :math:`L_2` sont réguliers.
- **Intersection** : :math:`L_1 \cap L_2` est régulier si :math:`L_1` et :math:`L_2` sont réguliers.
- **Complémentaire** : :math:`\overline{L}` est régulier si :math:`L` est régulier.
- **Concaténation** : :math:`L_1.L_2` est régulier si :math:`L_1` et :math:`L_2` sont réguliers.
- **Étoile de Kleene** : :math:`L^*` est régulier si :math:`L` est régulier.

4.3 Méthodologie pour identifier si un langage est reconnaissable

1. **Analyser la structure du langage** : Déterminer si le langage peut être décrit par une expression régulière.
2. **Construire un automate** : Si vous pouvez définir un AFD ou un AFND qui accepte ce langage, alors il est reconnaissable.

---

5. Automates Minimaux
---------------------

5.1 Définition

Un **automate minimal** est un automate fini avec le plus petit nombre d'états pour un langage donné. Deux automates qui reconnaissent le même langage peuvent avoir un nombre différent d'états. La minimisation permet d'obtenir un automate le plus simple possible.

5.2 Algorithme de Minimisation (Nerode)

1. **Étape 1** : Supprimer les états inaccessibles (ceux qui ne peuvent pas être atteints depuis l'état initial).
2. **Étape 2** : Partitionner les états en classes d’équivalence en utilisant les propriétés des états acceptants et non acceptants.
3. **Étape 3** : Fusionner les états équivalents pour réduire l’automate.

5.3 Exemple de minimisation

Prenons un automate qui accepte les mots ayant un nombre pair de :math:`a` et impair de :math:`b` :
1. On définit les états pour suivre les parités.
2. On applique l'algorithme pour identifier les états redondants et les fusionner.

---

6. Langage Résiduel
-------------------

6.1 Définition

Le **langage résiduel** d’un langage :math:`L` par rapport à un mot :math:`w`, noté :math:`w^{-1}L`, est l’ensemble des mots :math:`v \in \Sigma^*` tels que :math:`wv \in L`.

6.2 Exemple

Soit :math:`L = \{aab, aacc, abc\}`, le résiduel de :math:`L` par rapport à :math:`a^2` est :math:`a^{-2}L = \{b, cc\}`.

6.3 Méthodologie pour calculer un langage résiduel

1. **Étape 1** : Trouver tous les mots du langage :math:`L` qui commencent par :math:`w`.
2. **Étape 2** : Enlever le préfixe :math:`w` de ces mots pour obtenir les mots restants dans le résiduel.

---

Listes des Automates
====================

1. Automate Fini Déterministe (AFD)
---------------------------------------

Un **Automate Fini Déterministe** est un automate dans lequel, pour chaque état et chaque symbole, il existe exactement une transition.

Table de Transition (Exemple AFD)

Soit l’automate AFD suivant défini sur l’alphabet :math:`\Sigma = \{a, b\}` qui reconnaît les mots avec un nombre pair de :math:`a`.

- États : :math:`\{q_0, q_1\}`
- État initial : :math:`q_0`
- États acceptants : :math:`q_0`

.. list-table:: 
   :header-rows: 1

   * - **État**
     - **Symbole** :math:`a`
     - **Symbole** :math:`b`
   * - :math:`q_0`
     - :math:`q_1`
     - :math:`q_0`
   * - :math:`q_1`
     - :math:`q_0`
     - :math:`q_1`

- **Explication** : :math:`q_0` correspond à un nombre pair de :math:`a`, et :math:`q_1` à un nombre impair de :math:`a`. Les transitions sur :math:`b` ne modifient pas l'état.

---

2. Automate Fini Non-Déterministe (AFND)
--------------------------------------------

Un **Automate Fini Non-Déterministe** permet plusieurs transitions pour un même état et un même symbole. Il peut aussi ne pas avoir de transition pour certains symboles dans certains états.

Table de Transition (Exemple AFND)

Considérons un AFND sur :math:`\Sigma = \{a, b\}` qui reconnaît les mots finissant par :math:`ab`.

- États : :math:`\{q_0, q_1, q_2\}`
- État initial : :math:`q_0`
- États acceptants : :math:`q_2`

.. list-table:: 
   :header-rows: 1

   * - **État**
     - **Symbole** :math:`a`
     - **Symbole** :math:`b`
   * - :math:`q_0`
     - :math:`q_0, q_1`
     - :math:`q_0`
   * - :math:`q_1`
     - :math:`-`
     - :math:`q_2`
   * - :math:`q_2`
     - :math:`-`
     - :math:`-`

- **Explication** : :math:`q_0` peut faire une transition vers lui-même ou vers :math:`q_1` avec :math:`a`. Si :math:`q_1` reçoit :math:`b`, il passe à l'état :math:`q_2`, l'état acceptant.

---

3. Automate Fini Non-Déterministe avec Transitions Épsilon (AFND-ε)
-----------------------------------------------------------------------

Un **Automate Non-Déterministe avec :math:`\varepsilon`-Transitions** permet des transitions sans lecture de symbole. Ces transitions, appelées :math:`\varepsilon`-transitions, permettent de changer d'état sans consommer de symbole.

Table de Transition (Exemple AFND-ε)

Soit un AFND-ε sur :math:`\Sigma = \{a, b\}` qui reconnaît les mots contenant :math:`a` ou :math:`b` suivi de n’importe quel nombre de :math:`b`.

- États : :math:`\{q_0, q_1, q_2, q_3\}`
- État initial : :math:`q_0`
- États acceptants : :math:`q_3`

.. list-table:: 
   :header-rows: 1

   * - **État**
     - **Symbole** :math:`a`
     - **Symbole** :math:`b`
     - **:math:`\varepsilon`-Transition**
   * - :math:`q_0`
     - :math:`q_1`
     - :math:`q_2`
     - :math:`-`
   * - :math:`q_1`
     - :math:`-`
     - :math:`q_3`
     - :math:`-`
   * - :math:`q_2`
     - :math:`-`
     - :math:`q_3`
     - :math:`-`
   * - :math:`q_3`
     - :math:`-`
     - :math:`q_3`
     - :math:`-`

- **Explication** : :math:`q_0` peut aller vers :math:`q_1` sur :math:`a`, ou vers :math:`q_2` sur :math:`b`. Dans les deux cas, on arrive à un état où on peut accepter plusieurs :math:`b`.

---

4. Automate Minimal
-----------------------

Un **Automate Minimal** est une version simplifiée d'un automate fini (AFD ou AFND), obtenue en réduisant le nombre d'états sans changer le langage reconnu. La minimisation d'un automate se fait en fusionnant les états équivalents.

Table de Transition (Exemple d'Automate Minimal)

Soit l'automate minimal pour reconnaître les mots contenant un nombre pair de :math:`a`.

- États : :math:`\{q_0, q_1\}`
- État initial : :math:`q_0`
- États acceptants : :math:`q_0`

.. list-table:: 
   :header-rows: 1

   * - **État**
     - **Symbole** :math:`a`
     - **Symbole** :math:`b`
   * - :math:`q_0`
     - :math:`q_1`
     - :math:`q_0`
   * - :math:`q_1`
     - :math:`q_0`
     - :math:`q_1`

- **Explication** : Cet automate minimal a seulement deux états pour reconnaître le langage des mots avec un nombre pair de :math:`a`. Toute redondance d'états a été éliminée.

---

5. Automate Résiduel
------------------------

Un **Automate Résiduel** représente le langage résiduel d'un langage :math:`L` par rapport à un mot :math:`w`. Le langage résiduel :math:`w^{-1}L` est l'ensemble des mots :math:`v` tels que :math:`wv \in L`.

Table de Transition (Exemple d'Automate Résiduel)

Soit un automate reconnaissant les mots finissant par "ab". Le langage résiduel par rapport à :math:`a` est l'ensemble des mots :math:`v` tels que :math:`av` finit par "ab".

- États : :math:`\{q_0, q_1, q_2\}`
- État initial : :math:`q_0`
- États acceptants : :math:`q_2`

.. list-table:: 
   :header-rows: 1

   * - **État**
     - **Symbole** :math:`a`
     - **Symbole** :math:`b`
     - **:math:`\varepsilon`-Transition**
   * - :math:`q_0`
     - :math:`q_1`
     - :math:`-`
     - :math:`-`
   * - :math:`q_1`
     - :math:`-`
     - :math:`q_2`
     - :math:`-`
   * - :math:`q_2`
     - :math:`-`
     - :math:`-`
     - :math:`-`

- **Explication** : Le résiduel par rapport à :math:`a` produit un automate où le mot suivant :math:`a` doit être :math:`b` pour finir par "ab".

---

Résumé des Automates
====================

.. list-table:: 
   :header-rows: 1

   * - **Type d'Automate**
     - **Fonction de Transition**
   * - **Automate Fini Déterministe (AFD)**
     - Chaque transition est unique pour un état et un symbole.
   * - **Automate Fini Non-Déterministe (AFND)**
     - Plusieurs transitions possibles pour un même symbole.
   * - **Automate Fini Non-Déterministe avec ε-Transitions (AFND-ε)**
     - Transitions possibles sans lire de symbole.
   * - **Automate Minimal**
     - Automate simplifié avec le moins d'états possible.
   * - **Automate Résiduel**
     - Automate représentant les sous-langages résiduels.