Chap 1 - Recherche Opérationnelle
=================================

TD Modélisation de problèmes d'optimisation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Exercice 1 - *Composition d’aliments pour le bétail*
----------------------------------------------------
On désire déterminer la composition, à coût minimal, d’un aliment pour bétail qui est obtenu en mélangeant au
plus trois produits bruts : orge, arachide, sésame.
L’aliment ainsi conditionné devra comporter au moins 22 % de protéines et 3,6 % de graisses, pour se conformer aux exigences de la clientèle. On a indiqué ci-dessous les pourcentages de protéines et de graisses contenus, respectivement, dans l’orge, les arachides et le sésame, ainsi que le coût par tonne de chacun des produits bruts.
- Orge : 12% protéïnes, 2% graisses, 25 coût/tonne,
- Arachides : 52% protéïnes, 2% graisses, 41 coût/tonne,
- Sésame : 42% protéïnes, 10% graisses, 39 coût/tonne,


**A)** On notera xj (j=1,2,3) la fraction de tonne de produit brut j contenu dans une tonne d’aliment. Formuler
le problème algébriquement.








**B)** Montrer qu’il est possible de réduire la dimension du problème en passant de 3 inconnues à 2 inconnues.
Formuler le nouveau programme linéaire (PL).

.. math::

   x_1 + x_2 + x_3 = 1

   x_1 = 1 - x_2 - x_3

.. math::

   25(1 - x_2 - x_3) + 41x_2 + 39x_3 \to \min

.. math::

   12(1 - x_2 - x_3) + 52x_2 + 42x_3 \geq 22

   12 + 40x_2 + 30x_3 \geq 22

   40x_2 + 30x_3 \geq 10

   8x_3 \geq 2

   x_3 \geq \frac{1}{4}

.. math::

   2(1 - x_2 - x_3) + 2x_2 + 10x_3 \geq 3.6

   2 - 2x_2 - 2x_3 + 2x_2 + 10x_3 \geq 3.6

   2 + 8x_3 \geq 3.6

   8x_3 \geq 1.6

   x_3 \geq 0.2



Exercice 2 - *Problème de transport*
------------------------------------
On dispose de 2 dépôts D1 et D2 de disponibilité 8 et 9 en marchandises. Trois clients C1, C2 et C3 doivent
être servis suivant les quantités : 4, 5 et 8. L’objectif est de trouver les quantités optimales de marchandises
à transporter depuis les dépôts vers les clients de façon à minimiser le coût global de transport. Les coûts de
déplacement unitaires des marchandises (cij = coût unitaire de transport du dépôt i vers le client j) sont donnés
par les coefficients suivants :
C1 C2 C3
D1 5 3 4
D2 6 7 2
1. Mettre ce problème sous forme de programme linéaire. Peut-on éliminer la contrainte associée au client C3 ?
Pourquoi ?
2. Mettre le problème général du transport sous forme de programme linéaire. De manière générale, le problème
de transport est constitué de m entrepôts avec des disponibilités pi de marchandises et n clients avec des
demandes qj. Le coût de transport de l’entrepôt i au client j est cij par quantité transportée. Il s’agit de
trouver les quantités optimales xij entre les entrepôts i et les clients j de façon à minimiser le coût total de
transport. On suppose que la somme des demandes est égale à la somme des disponibilités.
3. Donner le programme GMPL de ce problème dans sa forme générale