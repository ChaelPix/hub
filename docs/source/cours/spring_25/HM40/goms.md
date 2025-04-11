# GOMS

## Définition

GOMS : Goals, Operators, Methods, and Selection rules 
→ Keystroke : clavier/souris/écran = WIMP interface.

GOMS est un modèle de la cognition humaine qui permet de prédire le temps d'exécution d'une tâche en fonction des opérations cognitives et physiques nécessaires pour l'accomplir.

Rappel temps d’exécution :

• Opérateur K : Frappe au clavier ou sélection souris : 200 ms
• Opérateur P : Déplacer la souris sur une cible : 1100 ms
• Opérateur H : Déplacer les mains entre la souris et le clavier : 400 ms
• Opérateur M : Acte de penser à l’opération à effectuer : 1300 ms

<b>Exercice -1</b>. Déplacement du curseur  via ctrl-n, esc-f.

Pour déplacer le curseur de m lignes p colonnes d’un éditeur, on dispose des 2 méthodes :
- Méthode M1 : prendre la souris, déplacer la souris au point désirer, sélectionner ;
- Méthode M2 : tant que le curseur n’est pas sur la ligne désirée taper ctrl-n (la touche ctrl peut rester enfoncée), tant que le curseur n’est pas sur le mot désiré taper esc-f (esc-f est réitérée);

1) Donner l’encodage Keystroke des méthodes.

Un mot sur l'alphabet $A = \{M, H, P, K\}$.

L'encodage Keystroke des méthodes est le suivant :
- Méthode M1 :
  - M1 = H[souris] → P[destination] → K[select] → H[clavier]
  - M1 = HPKH

    - → $MHPKH$

- Méthode M2 :

  - M2 = K[ctrl] → K^n[n] → (K[esc] → K[f])^p

    - → $K.K^m . (K.K)^p$
    - → $M(K.K^m) . (K.K)^p$

2) Déterminer les temps d’exécution. Evaluer l’inéquation TM1 < TM2, sous forme numérique puis appliquée.

$T_{M1} = T_M + 2T_H + T_p + T_K ms$

$T_{M2} = 2T_M + T_K + mT_K + 2pT_K ms$
3700 + m(1100) + 2p(1100) = 3700 + 1100m + 2200p


$T_M + 2T_H + T_p + T_K < 2T_M + T_K + mT_K + 2pT_K$

$2T_H + T_p < T_M + mT_K + 2pT_K$


1) Discuter suivant un utilisateur lambda ou expert (enlever un M).

On supprime un état mental car sinon incohérent car souris toujours mieux.

3400 < 2400 + 1100m + 2200p
3400 - 2400 < 1100m + 2200p
1000 < 1100m + 2200p
m + 2p > 1

## Exercice 0 : Ouvrir un fichier dans une arborescence.

>A l’aide de la méthode Goms basée sur le modèle du processeur humain décrivez et comparez 2 procédés pour éditer un fichier, soit en utilisant un terminal et le langage de commandes standard (ls, cd, edit), soit en utilisant un file manager et les modalités de déplacement et d’édition à la souris. Pour délimiter la tâche à réaliser, on considère qu’une fenêtre de saisie et un file manager sont déjà ouverts et sont positionnés sous le répertoire racine. L’utilisateur sait où se trouve le fichier fichier.txt, sous un répertoire rep. Il doit se positionner au bon endroit et lancer l’éditeur sur le fichier. On suppose que la profondeur est p, et que la longueur d’un nom de fichier est l. 

Quel mécanisme est le plus rapide ? A quelle condition. Justifier.

M1 Terminal :

- $K^3[edit](M.K^{l+1}[rep])^pK[enter]$

M2 Souris :
- $H[souris] -> (M -> P[souris rep] -> K^2[double clique])^p -> H[clavier]$

$M1 = K^3 (MK^{l+1})^{p-1}(K ^ { l+1})$

$M1 = K^3 (K^{l+1})^p$

$M2 = H(PK^2)^pH$

$T_{M1} < T_{M2}$

$3T_K + pT_M + lT_K + T_K < 2T_H + p(T_p + 2 T_k)$

mettre p à gauche

$l < 6.5 + 1 + 1/p$
$1 < 7.5 + 1/p$

Si $p → +\infty$ alors $l < 7.5$

-> utilisation avec Tab

M3 : Clavier sur l'explorateur

(Flèche droite/gauche/haut/bas, entrée)
l fichiers visibles

Pour trouver en moyenne l/2 fichiers.
$2 \sqrt{l/2}$

$M3 = casmoyen / (K^{\sqrt{l}})^p$
