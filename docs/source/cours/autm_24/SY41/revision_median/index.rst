================
$Révision Median
================

.. contents::
   :depth: 2
   :local:


1) Algrebe de Boole
###################

.. admonition:: Overall

    C'est toujours la même méthode, mais il faut bien lire l'énoncé et faire attention lorsqu'il y a beaucoup d'éléments.

a) Ecrire la table de vérité
****************************

- Pour des équations a,b,c :

- Ecrire la table de vérité indiviuelle de chacune des lettres
- Analyse / simplifier l'équations donnée et conclure 0 ou 1.

.. math::
    x1 = a(b+c)

.. list-table:: Table de vérité
   :header-rows: 1

   * - a
     - b 
     - c 
   * - 0
     - 0
     - 0
   * - 0
     - 0
     - 1
   * - 0
     - 1
     - 0
   * - 0
     - 1
     - 1
   * - 1
     - 0
     - 0
   * - 1
     - 0
     - 1
   * - 1
     - 1
     - 0
   * - 1
     - 1
     - 1

Il faut que a soit à 1 Et que b Ou c soit à 1. Donc :

.. list-table:: Table de vérité
   :header-rows: 1

   * - a
     - b 
     - c 
     - x1
   * - 0
     - 0
     - 0
     - 0
   * - 0
     - 0
     - 1
     - 0
   * - 0
     - 1
     - 0
     - 0
   * - 0
     - 1
     - 1
     - 0
   * - 1
     - 0
     - 0
     - 0
   * - 1
     - 0
     - 1
     - 1
   * - 1
     - 1
     - 0
     - 1
   * - 1
     - 1
     - 1
     - 1

b) Lire la table de vérité
**************************

Pour déduire une expression S, on prend chaque ligne où S = 1.

.. list-table:: Table de vérité
   :header-rows: 1

   * - a
     - b 
     - c 
     - S
   * - 0
     - 0
     - 0
     - 0
   * - 0
     - 0
     - 1
     - 1
   * - 0
     - 1
     - 0
     - 0
   * - 0
     - 1
     - 1
     - 1
   * - 1
     - 0
     - 0
     - 0
   * - 1
     - 0
     - 1
     - 1
   * - 1
     - 1
     - 0
     - 0
   * - 1
     - 1
     - 1
     - 1

Ici, 'S = 1' 4 fois. On déduit :

.. math::
    S = c + b.c + a.c + (a.b.c)

.. list-table::
   :header-rows: 1

   * - Section
     - Méthode
     - Exemple
   * - Écrire la table de vérité
     - 1. Lister toutes les combinaisons possibles des variables (a, b, c, etc.).
       2. Évaluer l'équation pour chaque ligne pour déterminer si le résultat est 0 ou 1.
     - Équation : \( x1 = a(b + c) \)
       - a = 1, b = 0, c = 1 -> \( x1 = 1 \)
   * - Analyser la table de vérité
     - 1. Vérifier chaque ligne où le résultat est 1.
       2. Identifier les combinaisons qui contribuent à \( S = 1 \) pour construire l'expression simplifiée.
     - Pour l'équation \( S \), on prend les lignes où \( S = 1 \) et les combine en somme de produits.
   * - Construire l'expression logique à partir de la table
     - 1. Pour chaque ligne où \( S = 1 \), écrire un terme logique (e.g., \( a \overline{b} c \)).
       2. Combiner ces termes avec un OR (\(+\)).
     - Exemple : Si \( S = 1 \) pour \( a = 0, b = 0, c = 1 \) et \( a = 1, b = 1, c = 1 \), alors
       
       .. math::

          S = \overline{a} \overline{b} c + abc

2) Conversions
##############

.. list-table::
   :header-rows: 1

   * - Section
     - Méthode
     - Exemple
   * - Conversion des nombres négatifs en binaire (complément à deux)
     - 1. Convertir la valeur absolue en binaire.
       2. Inverser tous les bits (0 devient 1, 1 devient 0).
       3. Ajouter 1 au résultat.
     - -37 : `00100101` -> `11011010` + 1 = `11011011`
   * - Conversion binaire en hexadécimal et décimal
     - 1. Grouper les bits par paquets de 4 en partant de la droite.
       2. Convertir chaque groupe en sa valeur hexadécimale.
       3. Pour le décimal, calculer la somme des puissances de 2 des bits actifs.
     - `01001100` -> Hex : `4C`, Décimal : 76
   * - Addition et soustraction
     - 1. Représenter les nombres en binaire sur le même nombre de bits.
       2. Effectuer l'addition/soustraction binaire bit par bit.
       3. Vérifier le résultat pour qu'il reste dans la plage de l'intervalle (ex. 8 bits).
     - `120 - 37` : `01111000` - `00100101` = `01010011` (83 en décimal)
   * - Multiplication et division
     - 1. Multiplier les nombres bit par bit, en prenant soin de gérer les dépassements si le résultat dépasse 8 bits.
       2. Pour la division, diviser normalement et déterminer le reste si nécessaire.
     - `5 × 7` : `00000101` × `00000111` = `00011011` (35 en décimal)
   * - Addition d'un entier positif et négatif
     - 1. Représenter le nombre négatif en complément à deux.
       2. Additionner les deux nombres en binaire.
       3. Ignorer le bit de dépassement si nécessaire.
     - `37 + (-15)` : `00100101` + `11110001` = `00101110` (46 en décimal)
   * - Conversion flottant vers décimal (IEEE 754)
     - 1. Identifier le bit de signe, l'exposant, et la mantisse.
       2. Utiliser la formule : 
       
       .. math::
          (-1)^{\text{bit de signe}} \times 1.\text{mantisse} \times 2^{\text{exposant biaisé} - 127}
       
     - `74DC0000` -> Décimal : `1.1101... × 2^{21}`
   * - Conversion entier vers flottant
     - 1. Convertir l'entier en binaire.
       2. Normaliser le nombre (placer le point après le premier bit 1).
       3. Calculer l'exposant (position du point) et ajouter le biais de 127.
       4. Encoder le résultat avec le bit de signe, l'exposant et la mantisse.
     - `110110110010` -> Normalisé : `1.10110110010 × 2^{11}`, Exposant : 138
   * - Conversion décimal flottant -> binaire flottant
     - 1. Convertir la partie entière en binaire.
       2. Convertir la partie fractionnaire en binaire en multipliant par 2 et en gardant la partie entière obtenue.
       3. Combiner et normaliser (placer le point après le premier bit 1).
     - `13,52` -> `1101.1000011...`

3) Mémoires Binaires
####################


.. list-table::
   :header-rows: 1

   * - Section
     - Méthode
     - Exemple / Explication
   * - Chronogrammes
     - 1. Identifier les valeurs initiales des sorties (e.g., Q1 et Q0).
       2. Compléter le chronogramme en fonction des entrées et des fronts montants.
     - Pour un montage avec deux bascules actives sur front montant, déterminer les transitions de Q1 et Q0 sur chaque cycle d'horloge.
   * - Bascule D avec commandes de chargement et remise à zéro
     - 1. Construire la table de vérité pour les commandes `nload`, `nreset`, et `data`.
       2. Déduire l'équation logique de l'entrée D en tenant compte des priorités des commandes.
     - Équation de l'entrée D :
       
       .. math::
          D = \overline{nreset} \cdot 0 + nreset \cdot \overline{nload} \cdot \text{data} + nreset \cdot nload \cdot Q_{\text{précédent}}
   * - Compteurs synchrones
     - 1. Analyser la valeur actuelle de la mémoire (Qi).
       2. Déterminer les équations logiques (Di) pour chaque bit du compteur.
     - Compteur synchrone par 7 :
       
       .. math::
          D2 = Q2 \oplus (Q1 \cdot Q0) \quad D1 = Q1 \oplus Q0 \quad D0 = \overline{Q0}
   * - Registre universel 8 bits
     - 1. Analyser les modes de commande (S1, S0) pour définir le comportement (maintien, décalage gauche/droite, chargement).
       2. Écrire l'équation logique pour l'entrée D0 de la bascule de poids faible.
     - Équation de l'entrée D0 :
       
       .. math::
          D0 = \overline{S1} \overline{S0} \cdot Q0 + \overline{S1} S0 \cdot Q1 + S1 \overline{S0} \cdot ED + S1 S0 \cdot E0

4) C et manipulation de bits

Notions en C
************

.. list-table::
   :header-rows: 1

   * - Concept
     - Méthode / Opération
     - Exemple / Explication
   * - Définition et utilisation des opérateurs bit à bit
     - Utiliser les opérateurs `&`, `|`, `^`, `~`, `<<`, `>>` pour manipuler des bits.
     - `&` (ET logique) : `a & b` met à 1 les bits qui sont 1 dans les deux variables.
       - Exemple : `5 & 3` (0101 & 0011) donne `0001` (1).
   * - Mise à 1 d'un bit spécifique
     - Utiliser l'opérateur `|` avec un masque de bits.
     - Exemple : Mettre à 1 le bit 3 d'une variable `x` :
       
       .. code-block:: c

          x |= (1 << 3);

   * - Mise à 0 d'un bit spécifique
     - Utiliser l'opérateur `&` avec un masque de bits inversé.
     - Exemple : Mettre à 0 le bit 5 d'une variable `x` :
       
       .. code-block:: c

          x &= ~(1 << 5);

   * - Inversion d'un bit spécifique
     - Utiliser l'opérateur `^` (XOR) avec un masque de bits.
     - Exemple : Inverser le bit 2 de `x` :
       
       .. code-block:: c

          x ^= (1 << 2);

   * - Vérification de l'état d'un bit
     - Utiliser l'opérateur `&` pour tester l'état d'un bit.
     - Exemple : Vérifier si le bit 4 de `x` est à 1 :
       
       .. code-block:: c

          if (x & (1 << 4)) {
              // Le bit 4 est à 1
          }

   * - Déplacements de bits
     - Utiliser `<<` (décalage à gauche) et `>>` (décalage à droite).
     - Exemple : Décaler `x` de 2 bits vers la gauche :
       
       .. code-block:: c

          x = x << 2; // Multiplie x par 4
       
       Décaler `x` de 1 bit vers la droite :
       
       .. code-block:: c

          x = x >> 1; // Divise x par 2

   * - Compter les bits à 1 dans un entier
     - Boucler sur chaque bit et utiliser `&` pour vérifier chaque position.
     - Exemple de fonction :
       
       .. code-block:: c

          int count_ones(int n) {
              int count = 0;
              while (n) {
                  count += n & 1;
                  n >>= 1;
              }
              return count;
          }

   * - Manipulation de l'endianness
     - Utiliser des opérateurs de décalage et des masques pour inverser l'endianness.
     - Exemple de fonction pour inverser l'endianness d'un entier 32 bits :
       
       .. code-block:: c

          unsigned int reverse_endianness(unsigned int num) {
              return ((num >> 24) & 0xFF) | ((num >> 8) & 0xFF00) |
                     ((num << 8) & 0xFF0000) | ((num << 24) & 0xFF000000);
          }

   * - Utilisation des masques de bits
     - Créer des masques pour sélectionner ou modifier des bits spécifiques.
     - Exemple : Créer un masque pour les 4 bits de poids faible :
       
       .. code-block:: c

          int mask = 0xF; // 00001111


Manipulation de Bits
********************

.. list-table::
   :header-rows: 1

   * - Section
     - Méthode
     - Exemple / Explication
   * - Opérations élémentaires
     - 1. Charger et lire des valeurs en mémoire avec des pointeurs.
       2. Manipuler des bits spécifiques (mise à 1, mise à 0, tests).
     - a) Charger la valeur `0xFFFFFFFF` à l'adresse `0x1000` :

       .. code-block:: c

          *(unsigned int *)0x1000 = 0xFFFFFFFF;

       b) Mettre à 1 le bit 3 de `*p` :

       .. code-block:: c

          *p |= (1 << 3);

   * - Fonctions pour la manipulation de bits
     - 1. Compter les bits à 1 avec des opérations bit à bit.
       2. Inverser les bits en utilisant des opérateurs de décalage.
       3. Changer l'endianness d'une valeur 32 bits.
     - a) Compter les bits à 1 :

       .. code-block:: c

          int count_bits(int n) {
              int count = 0;
              while (n) {
                  count += n & 1;
                  n >>= 1;
              }
              return count;
          }

       b) Inverser l'endianness :

       .. code-block:: c

          unsigned int reverse_endianness(unsigned int num) {
              return ((num >> 24) & 0xFF) | ((num >> 8) & 0xFF00) |
                     ((num << 8) & 0xFF0000) | ((num << 24) & 0xFF000000);
          }

   * - Conversion de nombre à virgule fixe
     - 1. Convertir la partie décimale d'un nombre binaire avec des multiplications.
       2. Utiliser le format Q31 pour les nombres entre -1 et 1.
     - a) Conversion de `0.101001` en base 10 :

       .. math::

          0.101001 = \frac{1}{2} + \frac{0}{4} + \frac{1}{8} + \frac{0}{16} + \frac{0}{32} + \frac{1}{64} = 0.640625

       b) Code pour extraire les premiers chiffres décimaux d'un Q31 :

       .. code-block:: c

          void q31_to_string(int q31, char *buffer) {
              int fraction = (q31 & 0x7FFFFFFF); // Exclure le bit de signe
              for (int i = 0; i < 5; ++i) {
                  fraction *= 10;
                  buffer[i] = (fraction >> 31) + '0';
                  fraction &= 0x7FFFFFFF;
              }
              buffer[5] = '\0';
          }

   * - Conversion entre entier et flottant
     - 1. Utiliser des cast pour convertir un entier en flottant et vice versa.
       2. Implémenter des fonctions pour manipuler les chaînes de caractères.
     - a) Conversion d'un entier en flottant :

       .. code-block:: c

          float int_to_float(int a) {
              return (float)a;
          }

       b) Conversion d'une chaîne en flottant :

       .. code-block:: c

          float str_to_float(const char *str) {
              float result;
              sscanf(str, "%f", &result);
              return result;
          }

Configuration de Matériel exemples
##################################

.. list-table::
   :header-rows: 1

   * - Section
     - Méthode / Notion
     - Exemple / Explication
   * - Configuration des pins GPIO
     - Savoir configurer les pins en mode entrée, sortie, et fonction alternative.
       Comprendre la différence entre push-pull et open-drain.
     - Configurer GPIOB PIN3 en sortie push-pull :

       .. code-block:: c

          GPIOB->MODER &= ~(0x3 << (3 * 2)); // Clear bits
          GPIOB->MODER |= (0x1 << (3 * 2));  // Set as output
          GPIOB->OTYPER &= ~(1 << 3);        // Set as push-pull

   * - Utilisation des registres GPIO (ODR, BSRR)
     - Comprendre comment manipuler les registres ODR pour contrôler les sorties, et BSRR pour modifier les états de bits sans affecter les autres.
     - Placer PIN3 de GPIOB à 0 avec ODR :

       .. code-block:: c

          GPIOB->ODR &= ~(1 << 3);

       Placer PIN3 de GPIOB à 0 avec BSRR :

       .. code-block:: c

          GPIOB->BSRR = (1 << (3 + 16)); // Reset bit 3

   * - Lecture de l'état des ports
     - Lire l'état d'une pin spécifique avec le registre IDR.
     - Mettre PIN3 à 1 si PIN2 est à 0 :

       .. code-block:: c

          if (!(GPIOB->IDR & (1 << 2))) {
              GPIOB->ODR |= (1 << 3);
          }

   * - Gestion des affichages à segment
     - Savoir comment connecter et contrôler un afficheur 7 segments en utilisant les ports GPIO.
     - Afficher un entier sur l'afficheur en manipulant PC0 à PD15 :

       .. code-block:: c

          void afficher_entier(unsigned int valeur) {
              GPIOC->ODR = (valeur & 0xF) << 0; // Premier afficheur
              GPIOD->ODR = (valeur >> 4) << 12; // Afficheur poids fort
          }

   * - Interfaçage d'un clavier matriciel
     - Comprendre la méthode de balayage pour détecter une touche pressée.
       Savoir comment forcer des lignes à 0 et lire l'état des colonnes.
     - Code pour forcer L2 à 0 et mettre L1, L3, L4 en haute impédance :

       .. code-block:: c

          GPIOA->ODR = (1 << 7) | (1 << 6) | (1 << 4); // Lignes en haute impédance
          GPIOA->ODR &= ~(1 << 5); // Forcer L2 à 0

   * - Notions de haute impédance (High-Z)
     - Savoir comment placer une pin en état de haute impédance.
     - Placer PIN6 de GPIOB en haute impédance (open-drain) :

       .. code-block:: c

          GPIOB->OTYPER |= (1 << 6);
          GPIOB->ODR |= (1 << 6); // Sortie en High-Z
