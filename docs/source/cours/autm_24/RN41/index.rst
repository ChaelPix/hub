RN41
====

Suites
------

Guide pas à pas de résolution
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Comment étudier une suite
***************************

**ÉTAPE 1 : Identification du type**

.. code-block:: text

   SI la suite est de la forme uₙ₊₁ = f(uₙ)
      → C'est une suite récurrente
      → Il faut calculer les premiers termes
      → Chercher un point fixe (nombre l tel que f(l) = l)
   
   SI la suite est de la forme uₙ = f(n)
      → C'est une suite explicite
      → On peut directement étudier la monotonie

**ÉTAPE 2 : Calcul des premiers termes**

.. code-block:: text

   POUR n = 0 jusqu'à 3:
      SI suite récurrente:
         Calculer uₙ₊₁ en fonction de uₙ
      SI suite explicite:
         Remplacer n par sa valeur dans f(n)

   Exemple concret:
   uₙ₊₁ = 1/uₙ avec u₀ = 2
   u₁ = 1/2
   u₂ = 1/(1/2) = 2
   u₃ = 1/2
   → On voit que la suite oscille: 2, 1/2, 2, 1/2, ...

**ÉTAPE 3 : Étude de la monotonie**

Pour une suite explicite:

.. code-block:: text

   1. Calculer uₙ₊₁ - uₙ
   2. Factoriser si possible
   3. Étudier le signe

   Exemple: uₙ = n/(n+1)
   uₙ₊₁ - uₙ = (n+1)/(n+2) - n/(n+1)
   = [(n+1)²-n(n+2)]/[(n+2)(n+1)]
   = 1/[(n+2)(n+1)] > 0
   → Suite croissante

Pour une suite récurrente:

.. code-block:: text

   1. Tracer la courbe y = f(x)
   2. Tracer la droite y = x
   3. SI f(x) > x → suite croissante
      SI f(x) < x → suite décroissante

   Exemple: uₙ₊₁ = √(uₙ + 1)
   1. Comparer f(x) = √(x + 1) et x
   2. f(1) = √2 > 1
   3. f(2) = √3 < 2
   → Suite croissante jusqu'à 2

**ÉTAPE 4 : Convergence**

.. code-block:: text

   SI suite croissante et majorée:
      → Convergente
   SI suite décroissante et minorée:
      → Convergente
   
   Pour trouver la limite:
   1. Soit l la limite
   2. Écrire l'équation f(l) = l
   3. Résoudre

   Exemple: uₙ₊₁ = (uₙ + 2)/3
   1. Soit l la limite
   2. l = (l + 2)/3
   3. 3l = l + 2
   4. 2l = 2
   → l = 1

2. Exemples complets commentés
****************************

**Exemple 1:** Suite récurrente uₙ₊₁ = 1/(1 + uₙ), u₀ = 1

.. code-block:: text

   1. Calcul des premiers termes:
      u₀ = 1
      u₁ = 1/2
      u₂ = 2/3
      u₃ = 3/5
   
   2. Observation:
      Les termes semblent s'approcher d'un nombre
   
   3. Monotonie:
      uₙ₊₁ - uₙ = 1/(1 + uₙ) - uₙ
      = (1 - uₙ(1 + uₙ))/(1 + uₙ)
      = -(uₙ² - 1)/(1 + uₙ)
   
   4. Pour uₙ > 1: uₙ₊₁ - uₙ < 0 → décroissante
      Pour uₙ < 1: uₙ₊₁ - uₙ > 0 → croissante
   
   5. Limite:
      l = 1/(1 + l)
      l² + l - 1 = 0
      l = (√5 - 1)/2 (car l > 0)

Séries
------

Méthodologie de résolution
~~~~~~~~~~~~~~~~~~~~~~~~~

1. Identification du type de série
********************************

**Série géométrique** 

.. math::

   \sum_{n=0}^{+\infty} q^n

.. note::
   * Si |q| < 1 : Convergente, somme = 1/(1-q)
   * Si |q| ≥ 1 : Divergente
   
*Exemple pratique*:

.. code-block:: text

   ∑(1/2)ⁿ
   |q| = 1/2 < 1 donc converge
   S = 1/(1-1/2) = 2

**Série de Riemann** 

.. math::

   \sum_{n=1}^{+\infty} \frac{1}{n^α}

.. note::
   * Si α > 1 : Convergente
   * Si α ≤ 1 : Divergente

2. Tests de convergence - Mode d'emploi
************************************

**TEST 1 : Critère de comparaison**

.. code-block:: text

   Si 0 ≤ uₙ ≤ vₙ pour n assez grand :
   - Si ∑vₙ converge ⟹ ∑uₙ converge
   - Si ∑uₙ diverge ⟹ ∑vₙ diverge

*Exemple*:

.. math::

   u_n = \frac{1}{n^2+1} \text{ et } v_n = \frac{1}{n^2}

   u_n \leq v_n \text{ et } \sum v_n \text{ converge (Riemann)} \\
   \therefore \sum u_n \text{ converge}

**TEST 2 : D'Alembert (le plus utilisé)**

.. code-block:: text

   Calculer l = lim |uₙ₊₁/uₙ|
   - Si l < 1 : Convergente
   - Si l > 1 : Divergente
   - Si l = 1 : Test non concluant

*Exemple pratique*:

.. math::

   u_n = \frac{2^n}{n!}

   \frac{u_{n+1}}{u_n} = \frac{2^{n+1}}{(n+1)!} \cdot \frac{n!}{2^n} = \frac{2}{n+1} \xrightarrow[n \to +\infty]{} 0 < 1

3. Astuces pratiques
*******************

.. note::

   1. Pour les sommes de fractions rationnelles:
      * Décomposer en éléments simples
      * Comparer à une série de Riemann

   2. Pour les factorielles:
      * Utiliser D'Alembert
      * La division des termes consécutifs simplifie les calculs

   3. Pour les puissances:
      * Réécrire sous forme exponentielle
      * Utiliser les propriétés des logs

4. Exemples types d'exam
***********************

**Exemple 1: Somme télescopique**

.. math::

   \sum_{n=1}^{+\infty} (\frac{1}{n} - \frac{1}{n+1})

.. code-block:: text

   1. Reconnaître une somme télescopique
   2. Sₙ = (1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n+1))
   3. Sₙ = 1 - 1/(n+1)
   4. lim Sₙ = 1

**Exemple 2: Convergence simple**

.. math::

   \sum_{n=1}^{+\infty} \frac{n}{3^n}

.. code-block:: text

   1. Appliquer D'Alembert:
   2. |uₙ₊₁/uₙ| = |(n+1)/3ⁿ⁺¹| / |n/3ⁿ| = (n+1)/(3n)
   3. lim = 1/3 < 1
   4. Donc convergente

Diagonalisation
---------------

Complexes Quantique (Pas à l'exam)
----------------------------------

Développement Limité
--------------------

