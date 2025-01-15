Guide de Survie : Développements Limités en Examen
==============================================

GUIDE PANIQUE - 30min avant l'examen
=================================

DLx(y) = QUOI ?
-------------
* DL3(0) = Développement Limité à l'ordre 3 autour de 0
* Exemple: DL3(0) de f(x) = x + x² + x³ + x⁴
  → On garde que x + x² + x³ et on écrit "+ o(x³)"

o(x²) = QUOI ?
------------
* o(x²) = "négliger tout ce qui vient après x²"
* Exemple: x + x² + x³ + x⁴ = x + x² + o(x²)
* RÈGLE: écrire o(x^n) où n = ordre demandé

FORMULES DE BASE (données en exam)
------------------------------
1. e^x = 1 + x + x²/2 + x³/6 + o(x³)
2. ln(1+x) = x - x²/2 + x³/3 + o(x³)
3. sin(x) = x - x³/6 + o(x³)
4. cos(x) = 1 - x²/2 + o(x²)
5. 1/(1-x) = 1 + x + x² + o(x²)

RECETTE RAPIDE
------------
1. Fonction simple → utiliser formule du tableau
2. Produit f×g → multiplier leurs DL
3. Quotient f/g → faire (1/g)×f
4. Composée f(g(x)) → remplacer x par g(x)

EXEMPLE EXPRESS: f(x) = sin(x)/x
-----------------------------
1. sin(x) = x - x³/6 + o(x³)
2. Diviser par x:
   (x - x³/6)/x = 1 - x²/6 + o(x²)

F'(x) et F''(x) ?
---------------
* F'(x) = dérivée première
* F''(x) = dérivée seconde
* RACCOURCI: Dans DL, coefficient de x^n = F^(n)(0)/n!

TECHNIQUE DE SURVIE
----------------
1. Toujours écrire "+ o(x^n)" à la fin
2. Pour multiplication: garder que les x^n où n ≤ ordre
3. Pour division: faire comme une division classique
4. Si bloqué: utiliser la calculatrice pour vérifier

EN CAS DE PANIQUE
--------------
1. Regarder si forme ressemble à formule du tableau
2. Si produit: faire terme à terme
3. Si quotient: transformer en produit avec 1/(...)
4. Vérifier l'ordre demandé
5. Ne pas oublier o(x^n)

Formules Données en Examen
------------------------

.. note::
   Vous aurez accès au tableau des DL usuels. L'objectif est de transformer votre fonction pour utiliser ces formules.

Méthode Express en 5 Étapes
-------------------------

1. IDENTIFIER LE TYPE DE CALCUL
~~~~~~~~~~~~~~~~~~~~~~~~~~

A) Si fonction composée avec exponentielle:
   * ln(1+x) → Utiliser DL de ln
   * e^(f(x)) → faire DL de f(x) puis composer avec DL de exp

B) Si fraction:
   * Faire DL numérateur et dénominateur séparément
   * Diviser les polynômes

C) Si racine:
   * Utiliser DL de (1+x)^α avec α = 1/2

2. TROUVER L'ORDRE NÉCESSAIRE
~~~~~~~~~~~~~~~~~~~~~~~~~~
* Pour une limite: ordre = degré où apparaît la première différence
* Pour un DL: ordre demandé + 1 pour être sûr
* Pour une somme/produit: même ordre pour tous les termes

3. CALCUL PRATIQUE [CALC]
~~~~~~~~~~~~~~~~~~~~~
Pour calculer rapidement:
1. Stocker les DL intermédiaires dans la calculatrice
2. Utiliser CALC → POLY pour multiplier les polynômes
3. Ne garder que les termes jusqu'à l'ordre voulu

4. RÈGLES DE CALCUL
~~~~~~~~~~~~~~~~
* Somme: Aligner et additionner les termes de même degré
* Produit: Distribuer et ne garder que les termes ≤ ordre demandé
* Quotient: Division des polynômes avec reste

5. VÉRIFICATION
~~~~~~~~~~~~
* Les puissances de x doivent être croissantes
* Vérifier la cohérence du premier terme non nul
* [CALC] Tracer les graphes des deux fonctions autour du point

Exemple Type (Final)
-----------------
Question: f(x) = cos(x)ln(1+x) à l'ordre 4 en 0

1. **Identifier**:
   * Produit de deux fonctions
   * Besoin des DL de cos(x) et ln(1+x)

2. **Ordre**:
   * Demandé: 4
   * Faire DL à ordre 4 pour chaque fonction

3. **Application**:
   cos(x) = 1 - x²/2 + x⁴/24 + o(x⁴)
   ln(1+x) = x - x²/2 + x³/3 - x⁴/4 + o(x⁴)

4. **Multiplication**:
   * (1)(x) = x
   * (1)(-x²/2) = -x²/2
   * (-x²/2)(x) = -x³/2
   * Etc...

5. **Résultat Final**:
   f(x) = x - x²/2 - x³/6 + o(x⁴)

Pièges à Éviter
-------------
1. Ne pas oublier o(x^n) dans l'écriture
2. Bien vérifier l'ordre demandé
3. Pour les limites, factoriser par la plus grande puissance

.. tip::
   En examen: Toujours commencer par les questions sur les DL
   car elles donnent souvent des points faciles.
