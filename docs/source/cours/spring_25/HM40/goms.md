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
  - O1 : Acte de penser à l’opération à effectuer (M)
  - O2 : Déplacer les mains entre la souris et le clavier (H)
  - O3 : Déplacer la souris sur la cible (P)
  - O4 : Sélectionner (K)
  - O5 : Déplacer les mains entre la souris et le clavier (H) 
  
→ $M.H.P.K.H$

- Méthode M2 :
  - O1 : Acte de penser à l’opération à effectuer (M)
  - O2 : Frappe au clavier (K) : ctrl-n
  - O3 : Acte de penser à l’opération à effectuer (M)
  - O4 : Frappe au clavier (K) : esc-f

→ $M(K^x) . M(K^y)$

1) Ajouter des états mentaux en justifiant.
2) Déterminer les temps d’exécution. Evaluer l’inéquation TM1 < TM2, sous forme numérique puis appliquée.
3) Discuter suivant un utilisateur lambda ou expert (enlever un M).
