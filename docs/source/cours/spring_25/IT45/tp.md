**2 Exercice : Assemblage de 2 produits**

Une entreprise fabrique 2 produits P1 et P2 a partir de 3 composants a, b, c. Pour fabriquer un produit P1,
l’entreprise a besoin de 2 composants a, 2 composants b et 1 composant c. Un produit P2 requiert, quant a lui, 3
composants a, 1 composant b et 3 composant c. Les disponibilites en composants a, b et c sont respectivement de
180, 120 et 150. Les gains marginaux des produits P1 et P2 sont de 3€ et 4€. On cherche a determiner le nombre
de produits P1 et P2 a fabriquer pour realiser le benefice maximal.

1. En posant x1 et x2 le nombre de produits P1 et P2 fabriques, formuler ce programme lineaire en indiquant
la fonction objectif et les trois contraintes qui correspondent au nombre maximum de composants a, b et c
disponibles.

$P1 = 2a + 2b + 1c$
$P2 = 3a + 1b + 3c$

a | b | c
---|---|---
| 180 | 120 | 150

$Max_z = 3x_1 + 4x_2$ *où 3 et 4 sont les gains de P1 et P2*

Contraintes :
- $2x_1 + 3x_2 ≤ 180$ (composant a)
- $2x_1 + 1x_2 ≤ 120$ (composant b)
- $1x_1 + 3x_2 ≤ 150$ (composant c)
- $x_1, x_2 ≥ 0$ (non-négativité)

3. Ecrire le modele de ce programme en utilisant le formalisme GLPK

```bash
glpsol -m glpk.mod --output solution.txt
```

Programme Octave :
```python
c = [3; 4];         % Gains pour P1 et P2
A = [2, 3;          % Composant a: 2 pour P1, 3 pour P2
     2, 1;          % Composant b: 2 pour P1, 1 pour P2
     1, 3];         % Composant c: 1 pour P1, 3 pour P2
b = [180; 120; 150]; % Disponibilités des composants
lb = [0; 0];        % x1 ≥ 0, x2 ≥ 0
ctype = "UUU";      % Toutes les contraintes sont ≤
sense = -1;         % maximiser = -1

[x, fval] = glpk(c, A, b, lb, [], ctype, [], sense);


printf("Solution optimale:\n");
printf("  Produits P1 à fabriquer: %.0f\n", x(1));
printf("  Produits P2 à fabriquer: %.0f\n", x(2));
printf("Bénéfice maximal: %.0f €\n", fval);
```

Programme GMPL :
```c#
/* Modèle d'assemblage pour 2 produits et 3 composants */

/* Variables de décision */
var x1 >= 0; # nombre de produits P1
var x2 >= 0; # nombre de produits P2

/* Contraintes */
s.t. composant_a: 2*x1 + 3*x2 <= 180;
s.t. composant_b: 2*x1 + 1*x2 <= 120;
s.t. composant_c: 1*x1 + 3*x2 <= 150;

/* Objectif */
maximize profit: 3*x1 + 4*x2;

/* Instructions pour résoudre et afficher */
solve;

printf "Solution optimale:\n";
printf "  Produits P1 à fabriquer: %g\n", x1;
printf "  Produits P2 à fabriquer: %g\n", x2;
printf "Bénéfice maximal: %g €\n", profit;

end;
```

4. Ecrire le modele de ce programme en utilisant le formalisme AMPL

```python
# Déclaration des variables
var x1 >= 0;  # nombre de produits P1
var x2 >= 0;  # nombre de produits P2

# Contraintes sur les ressources disponibles
subject to composant_a: 2*x1 + 3*x2 <= 180;
subject to composant_b: 2*x1 + 1*x2 <= 120;
subject to composant_c: 1*x1 + 3*x2 <= 150;

# Objectif à maximiser
maximize objz: 3*x1 + 4*x2;

# Résoudre le modèle
solve;

# Afficher les résultats
display x1, x2, objz;
```

6. Quelle est la solution optimale de ce programme lineaire et le gain correspondant ?

```
Solution optimale:
  Produits P1 à fabriquer: 45
  Produits P2 à fabriquer: 30
Bénéfice maximal: 255 €
```

**3 Exercice : Assemblage de n produits**

>On veut maintenant generaliser ce premier modele a la fabrication de n produits a partir de m composants. Les
hypotheses suivantes sont retenues. <br>
>Le produit $j$ rapporte un gain marginal $c_j$ ; le nombre de composants $i$ necessaires pour fabriquer le produit j est $a_i,j$ et le nombre maximum de composants $i$ est de $b_i$. 

Dans ces conditions :
1. On posant $x_j$ le nombre de produits $j$ fabriques, ecrire le nouveau modele mathematique en precisant la
fonction objectif et les contraintes
- (a) definir la fonction objectif en fonction des $x_j$ et des gains unitaires $c_j$ pour $j = 1..n$
- (b) definir pour tout composant $i = 1..m$ la contrainte qui limite son utilisation a sa quantite disponible $b_i$.

→ $x_j$ = nombre d'unités du produit j à fabriquer (pour j = 1 à n)

$Max Z = c1*x1 + c2*x2 + ... + cn*xn$

$Max Z = ∑(j=1..n) cj*xj$

Pour le composant 1: a11*x1 + a12*x2 + ... + a1n*xn ≤ b1
Pour le composant 2: a21*x1 + a22*x2 + ... + a2n*xn ≤ b2
...
Pour le composant m: am1*x1 + am2*x2 + ... + amn*xn ≤ bm

$∑(j=1 à n) aij*xj ≤ bi pour i = 1,2,...,m$

$xj ≥ 0 pour j = 1,2,...,n$

Du coup, ici n = 2, m = 3.
MaxZ = 3*x1 + 4*x2



2. Ecrire le programme parametrique GMPL en utilisant les donnees de l’exercice precedent pour alimenter le
modele.
(a) declaration des ensembles d’indices
- declarer un parametre nbr prod a 2 et nbr compo a 3
1
- declarer un ensemble de produits nomme P RODUCT S de 1 a nbr prod et un ensemble de composants
COMP O de 1 a nbr compo
(b) Declaration des parametres et des variables
- declarer les gains des produits comme un parametre indice sur l’ensemble des produits
- declarer le tableau relatif au nombre maximum de composant bindice sur les composants
- declarer le tableau a, indice sur les ensembles COMP O et P RODUCT S. a[i][j] represente le nombre
de composants i pour fabriquer le produit j
- declarer la variable x indice sur les produits fabriques
(c) Ecriture des contraintes et de l’objectif
- definir une contrainte indicee qui verifie que pour chaque composant sa consommation est inferieure
a sa disponibilite en stock
- definir l’objectif a maximiser par une somme indicee sur tous les produits du gain unitaire multiplie
par la quantite fabriquee
(d) Initialisation des parametres dans la section data
- initialiser le tableau c avec les valeurs 3 et 4
- faire de mˆeme pour les autres parametres