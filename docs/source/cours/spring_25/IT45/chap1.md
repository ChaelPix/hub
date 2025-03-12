# Chap 1 - Recherche Opérationnelle

## TD Modélisation de problèmes d'optimisaiton

### Exercice 1 - *Composition d’aliments pour le bétail*

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

$$

   x_1 + x_2 + x_3 = 1

   x_1 = 1 - x_2 - x_3

   25(1 - x_2 - x_3) + 41x_2 + 39x_3 \to \min
$$

$$
   12(1 - x_2 - x_3) + 52x_2 + 42x_3 \geq 22

   12 + 40x_2 + 30x_3 \geq 22

   40x_2 + 30x_3 \geq 10

   8x_3 \geq 2

   x_3 \geq \frac{1}{4}

$$
$$
   2(1 - x_2 - x_3) + 2x_2 + 10x_3 \geq 3.6

   2 - 2x_2 - 2x_3 + 2x_2 + 10x_3 \geq 3.6

   2 + 8x_3 \geq 3.6

   8x_3 \geq 1.6

   x_3 \geq 0.2
$$
→ Tracer graphiquement les droites correspondant aux contraintes du PL (inégalités) et identifier la zone des
solutions. Résoudre géométriquement le problème.

