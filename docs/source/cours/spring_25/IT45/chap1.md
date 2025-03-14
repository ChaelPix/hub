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

# CM : Forme standard

$Max_z = 3x_1 + 4x_2$
$2x_1 + 3x_2 + x_3 = 190$ //x_3 = var d'écart
$2x_1 + 3x_2 + x_4 = 120$
$x_1 + 3x_2 + x_5 = 150$

$x_1 \geq 0, x_2 \geq 0, x_3 \geq 0$

3 contraintes et 5 variables -> 3 variables peuvent être exprimées en fonction des 2 autres.
$x_3 = 190 - 2x_1 - 3x_2$ -> valeur de $x_1$ -> $180/3 = 60$
$x_4 = 120 - 2x_1 - 3x_2$ -> valeur de $x_1$ -> $120$
$x_5 = 150 - x_1 - 3x_2$ -> valeur de $x_1$ -> $150/3$

solution de base obtenue en annulant les variables de base.

__Itération 1__
* direction / variable entrante -> $x_2$, 1er citeu de Dantang
* valeur de $x_2$ donnée par S en annulant $x_5$ -> $x_5$ sort de la base.
* Nouvelle base $B_1$ -> $x_2, x_3, x_4$
  * (3) => $x_2 = 50 - 1/3x_1 - 1/3x_5$
  * $Max_z = 3x_1 + 4(50 - 1/3x_1 - 1/3x_5) = 3x_1 + 200 - 4/3x_1 - 4/3x_5$
  * (1) $x_3 = 180 - 2x_1 - 3x_2 = 30 - x_1 + x_5$
  * (2) $x_4 = 120 - 2x_1 - 3x_2 = 70 - 5/3x_1 + 1/3x_5 = 50 - 1/3x_1 - 1/3x_5$

Solution de base 

>$x_1 = x_5 = 0$
>
>$x3 = 30, x_5 = 70, x_2 = 30$
>
>$z = 200$

__Itération 2__

- variable entrante : $x_1$
- variable sortante : $x_3$
- nouvelle base : $B_2 = x_1, x_2, x_4$
- (1) $x_1 = 30 - x_3 - x_5$
- $Max_z = 250 - 5/3x_3 + 1/3x_5$
- (1) $x1 = 30 - x_3 - x_5$
- (2) $x_4 = 20 + 5/3x_3 - 4/3x_5$
- (3) $x_2 = 40 + 1/3x_1 - 2/3x_5$

Solution :
> $x_3 = x_5 = 0$
> $x1 = 20, x_2 = 40, x_4 = 20$
> $z = 250$

__Itération 3__

- variable entrante : $x_5$
- variable sortante : $x_4$
- (2) => $x_5 = 15 + 5/3 x_3 - 3/4x_4$ -> $x_5^x = 15$ 
- $Max_z = 255 - 5/4x_3 - 1/4x_4$ Coeff avec que négatif donc peut pas être amélioré. -> $z ^ x = 144$ 
- (1) $x_1 ^ * = 45$
- (2) $x_2 ^ * = 30$
Solution optimale.

Jusqu'à ce qu'on ne peut plus ajouter de variables.