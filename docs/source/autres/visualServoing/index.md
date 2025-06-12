# Visual Servoing

paper: http://rainbow-doc.irisa.fr/pdf/2006_ieee_ram_chaumette.pdf


**Objectif principal :** Contrôler le mouvement d'un robot pour qu'il atteigne une position désirée par rapport à un objet, en utilisant uniquement ce que la caméra voit.

### Concepts Clés

1.  **Erreur à minimiser :** Le robot compare ce qu'il voit (image actuelle) avec ce qu'il *devrait* voir (image désirée). La différence entre les deux est "l'erreur" `e(t)` que le robot essaie de réduire à zéro.
    *   `e(t) = s(m(t),a) − s*`
        *   `m(t)` : mesures de l'image (ex: coordonnées de points).
        *   `a` : paramètres additionnels (ex: caractéristiques de la caméra).
        *   `s*` : valeurs désirées des caractéristiques visuelles.

2.  **Caractéristiques visuelles (s) :** Ce sont les informations extraites de l'image que le robot utilise pour se guider. Par exemple, les coordonnées de points spécifiques sur un objet.

3.  **Matrice d'interaction (L<sub>s</sub>) :** C'est une matrice mathématique cruciale. Elle relie la vitesse de la caméra ( `v_c` ) aux changements des caractéristiques visuelles ( `ṡ` ) dans l'image.
    *   `ṡ = L_s * v_c`

4.  **Loi de commande :** C'est la règle qui calcule la vitesse à donner au robot pour réduire l'erreur. Une forme simple est : `v_c = -λ * L_e^+ * e` où `λ` est un gain (contrôle la vitesse de réaction) et `L_e^+` est une approximation de l'inverse de la matrice d'interaction.

### Deux Grandes Approches (Algorithmes)

#### 1. Asservissement Visuel Basé Image (IBVS - Image-Based Visual Servo control)

*   **Comment ça marche ?**
    *   Les caractéristiques visuelles `s` sont définies directement dans l'image (ex: coordonnées en pixels des coins d'un objet).
    *   Le robot essaie de faire coïncider les coordonnées actuelles de ces points avec leurs coordonnées désirées dans l'image.
*   **Matrice d'interaction pour un point (L<sub>x</sub>) :**
    *   Elle dépend de la profondeur `Z` du point par rapport à la caméra et des coordonnées `(x, y)` du point dans l'image.
    *   `L_x = [[-1/Z, 0, x/Z, xy, -(1+x²), y], [0, -1/Z, y/Z, 1+y², -xy, -x]]` (Ceci est pour un seul point, on empile ces matrices si on a plusieurs points).
*   **Approximation de L<sub>e</sub><sup>+</sup> :**
    *   Utiliser `L_e^*` (matrice d'interaction à la position désirée) : simple car constant, mais peut donner des trajectoires bizarres si on est loin du but.
    *   Utiliser `L_e` (matrice d'interaction à la position actuelle) : les points dans l'image suivent des lignes droites, mais la trajectoire 3D du robot peut être mauvaise.
    *   Utiliser la moyenne des deux `1/2(L_e + L_e^*)^+` : souvent le meilleur compromis pour des trajectoires douces.
*   **Avantages :**
    *   Robuste aux erreurs de calibration de la caméra et au bruit dans l'image.
*   **Inconvénients :**
    *   La trajectoire 3D du robot peut être imprévisible et non optimale.
    *   Risque de "minimums locaux" (le robot pense avoir fini mais n'est pas au bon endroit) ou de problèmes si les objets sortent du champ de vision.

#### 2. Asservissement Visuel Basé Position (PBVS - Position-Based Visual Servo control)

*   **Comment ça marche ?**
    *   On estime d'abord la pose 3D (position et orientation) de la caméra par rapport à l'objet.
    *   Les caractéristiques visuelles `s` sont directement ces paramètres de pose 3D (ex: la distance et l'angle par rapport à l'objet).
    *   Le robot essaie d'amener sa pose actuelle à la pose désirée.
*   **Loi de commande (exemple) :**
    *   Si `s = (c*t_c, θu)` (translation de la caméra désirée vers actuelle, rotation), la commande est :
        *   `v_c = -λ * R * c*t_c` (vitesse linéaire)
        *   `ω_c = -λ * θu` (vitesse angulaire)
        Ici, `R` est la matrice de rotation de l'orientation actuelle vers l'orientation désirée.
*   **Avantages :**
    *   Permet un contrôle direct de la trajectoire 3D de la caméra, qui peut être optimale.
*   **Inconvénients :**
    *   Très sensible aux erreurs de calibration et à la précision de l'estimation de la pose 3D. Une petite erreur dans l'image peut entraîner une grande erreur sur la pose estimée.
    *   Nécessite de connaître le modèle 3D de l'objet.

### Stabilité

*   **IBVS :** Généralement, seule une stabilité locale peut être garantie (le système converge s'il est déjà proche du but). Il y a un risque de tomber dans des minimums locaux.
*   **PBVS :** Peut offrir une stabilité globale (converge de plus loin) si l'estimation de la pose est parfaite. Cependant, les erreurs d'estimation peuvent rendre le système instable.

### En résumé pour un néophyte

Imagine que tu veux garer une voiture (le robot) exactement devant une porte (la cible) en regardant uniquement à travers une caméra fixée sur la voiture.

*   **IBVS, c'est comme si tu essayais de superposer des points que tu vois dans ta caméra (ex: les coins de la porte) avec une image de référence où ces points sont bien placés.** Tu te concentres sur ce que tu vois directement dans l'image. Ça marche bien même si ta caméra n'est pas parfaite, mais parfois la voiture peut faire des détours étranges.
*   **PBVS, c'est comme si tu calculais d'abord à quelle distance et sous quel angle tu es de la porte, puis tu commandes à la voiture d'aller à "0 mètre, 0 degré" par rapport à la porte.** Tu planifies ton mouvement dans l'espace 3D. Ça peut donner une trajectoire plus directe, mais si ton calcul de distance/angle est un peu faux, tu risques de ne pas te garer correctement ou de faire des erreurs.

Aucune méthode n'est parfaite; le choix dépend de l'application et des compromis acceptables.