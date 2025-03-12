# Processeur Humain

## Caractéristiques

- 3 Niveaux : Physique (1101), syntaxique (Treize), sémantique (sens/signification)
- la mémoire est caractérisée par :
  - la capacité (nombre d'éléments mémorisés)
  - la persistance (durée de mémorisation)
  - le type et un cycle de base $t$
- Un mouvement est caractérisé par :
  - la vitesse de mouvement $V_{µmvt}$
  - la distance à parcourir $D_0$
  - le temps d'exécution $T = t_s + t_c + t_m$ avec :
    - $t_s$ : temps de perception $100 ms$
    - $t_c$ : temps de cognition $70 ms$
    - $t_m$ : temps moteur $70 ms$
- Mémoire Processeur != Mémoire Associative : Réseau de neuronne Vs tableaux.
  
  
## Loi de Fitts

La loi de Fitts est une loi empirique qui prédit le temps nécessaire pour atteindre une cible en fonction de la distance à parcourir et de la taille de la cible. Elle est souvent utilisée dans le domaine de l'ergonomie et de l'interaction homme-machine pour évaluer la performance des interfaces utilisateur.
Elle est formulée comme suit :
T = I * log(2D/L)
où :
• T : le temps nécessaire pour atteindre la cible
• I : une constante qui dépend de la vitesse de mouvement et de la précision
• D : la distance à parcourir pour atteindre la cible
• L : la largeur de la cible

<b>Exercice :</b>
Retrouver la formule de la loi de Fitts en considérant :
- $Xi$ : la distance à parcourir après l'exécution du ième
micromouvement
- $e$ : une constante d'erreur telle que
- $Xi/(Xi-1) = e$
- avec $e < 1$, ce qui signifie que la précision relative du mouvement est
supposée constante
- $T = n * t$ avec : t = ts + tc + tm

On a donc $X_e = D$

La précision relative du mouvement est :

$x_i/(x_{i-1}) = e$ avec $e < 1$.

Prenons $n$ le nombre de micro-mouvements pour arriver sur la cible :

$T = n * C = n(t_s, t_c, t_m) = 0.240 * n$ s.

où $t_s = 100ms$, $t_c 70ms$, $t_m = 70ms$ qui sont réciproquement le temps d'un cycle de perception, cognition et moteur.

Condition pour que la main soit la cible :

$x_n \leq L/2$
au cas limite $x_n = L/2$

par ailleurs :

$x_n = e*x_{n-1} = e^2 * x_{n-2}$
soit $x_n = e^n * x_0$
$x_n = e^n*D$

Cela donne :
$L/2 = e^n*D$

$e^n = L/2D * t .. n = -t/log(e) * log(L/2D)$

## Exo souris du STAR

Vitesse max de la main :
$V_{µmvt} = (x_{i-1} - x_i)/t$
$V_{ma} = (D_0 - e*D_0)/t$
$V_{ma} = (1-e)*D_0/t$ 
$e = 0,07$, si $D_0 = 35cm$
$V_{ma} = 0,93*35cm/0,24s = 135cm/s$

