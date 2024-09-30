===========================
TD Manipulation de Bits (C)
===========================

.. contents::
   :depth: 2
   :local:

Exercice 1
==========

.. code-block:: c

   #include <stdint.h>  // Pour les types entiers fixes comme uint32_t

   int main() {
       // 1. Chargement en mémoire de la valeur 32 bits 0xFFFFFFFF à l'adresse 0x1000
       uint32_t *ptr = (uint32_t *) 0x1000;  // Pointeur vers l'adresse 0x1000
       *ptr = 0xFFFFFFFF;  // Écriture de la valeur 0xFFFFFFFF à l'adresse 0x1000

       // 2. Chargement dans une variable locale a, la valeur d'une donnée 32 bits en mémoire à l'adresse 0x1000
       uint32_t a = *ptr;  // Chargement de la valeur stockée à l'adresse 0x1000 dans a

       // 3. Mise à 1 du bit numéro 3 d'une variable d'adresse p. Les autres bits doivent rester inchangés
       uint32_t *p = &a;  // Pointeur vers une variable (ici, pour l'exemple, on pointe vers a)
       *p |= (1 << 3);  // Mise à 1 du bit 3 (position 3)

       // 4. Mise à 0 du bit numéro 5 d'une variable d'adresse p. Les autres bits doivent rester inchangés
       *p &= ~(1 << 5);  // Mise à 0 du bit 5 (position 5)

       // 5. Si le bit numéro n d'une variable a est à 1 alors mettre le bit m d'une variable b à 1
       uint32_t b = 0;  // Déclaration de la variable b
       int n = 2, m = 4;  // Exemple : on vérifie le bit n = 2 de a et on modifie le bit m = 4 de b
       if (a & (1 << n)) {  // Si le bit n de a est à 1
           b |= (1 << m);  // On met le bit m de b à 1
       }

       // 6. Si le bit numéro n d'une variable a est à 0 alors mettre le bit m d'une variable b à 0
       if (!(a & (1 << n))) {  // Si le bit n de a est à 0
           b &= ~(1 << m);  // On met le bit m de b à 0
       }

       return 0;
   }

Explications
------------

1. **Chargement de la valeur à l'adresse 0x1000** : On utilise un pointeur pour accéder directement à une adresse mémoire et y stocker une valeur.
2. **Lecture d'une valeur en mémoire** : On lit une valeur à partir d'une adresse mémoire dans une variable locale.
3. **Mise à 1 d'un bit** : Utilisation de l'opérateur bitwise OR (``|``) et du décalage de bits (``1 << 3``) pour modifier le bit spécifique sans toucher aux autres.
4. **Mise à 0 d'un bit** : Utilisation de l'opérateur AND avec une inversion (``~``) pour forcer un bit à 0 tout en préservant les autres bits.
5. **Vérification et modification de bits entre deux variables** : Utilisation des opérations bitwise pour vérifier l'état d'un bit dans une variable et modifier un bit spécifique dans une autre variable.

---

Exercice 2
==========

1. Fonction pour déterminer le nombre de bits à 1 d'un entier
-------------------------------------------------------------

Cette fonction utilise l'opérateur bitwise AND pour compter les bits à 1 dans un entier.

.. code-block:: c

   #include <stdint.h>  // Pour les types entiers fixes comme uint32_t

   // Fonction pour compter le nombre de bits à 1 d'un entier
   int compter_bits_1(uint32_t n) {
       int count = 0;
       while (n) {
           count += n & 1;  // Ajoute 1 si le bit de poids faible est 1
           n >>= 1;  // Décale les bits vers la droite
       }
       return count;
   }

Explication
-----------

- On parcourt tous les bits de l'entier en le décalant vers la droite et on utilise l'opérateur AND (``n & 1``) pour vérifier si le bit de poids faible est 1.
- On incrémente un compteur chaque fois qu'on trouve un bit à 1.

---

2. Fonction pour inverser tous les bits d'un nombre entier
----------------------------------------------------------

Cette fonction inverse tous les bits de l'entier passé en paramètre, c'est-à-dire le poids faible devient le poids fort et ainsi de suite.

.. code-block:: c

   #include <stdint.h>

   // Fonction pour inverser les bits d'un entier
   uint32_t inverser_bits(uint32_t n) {
       uint32_t result = 0;
       int i;
       for (i = 0; i < 32; i++) {
           result <<= 1;  // Décale result vers la gauche
           result |= (n & 1);  // Récupère le bit de poids faible de n et le place dans result
           n >>= 1;  // Décale n vers la droite pour traiter le prochain bit
       }
       return result;
   }

Explication
-----------

- On parcourt tous les bits de l'entier d'entrée.
- Pour chaque bit, on l'ajoute dans la position correspondante du résultat en inversant l'ordre (décalage vers la gauche pour ``result``).
- On décale ensuite le nombre d'entrée vers la droite pour traiter le prochain bit.

---

3. Fonction pour inverser l'endianness d'une valeur 32 bits
-----------------------------------------------------------

Cette fonction inverse l'endianness d'un entier 32 bits, c'est-à-dire échange les octets entre eux.

.. code-block:: c

   #include <stdint.h>

   // Fonction pour inverser l'endianness d'une valeur 32 bits
   uint32_t inverser_endianness(uint32_t n) {
       return ((n >> 24) & 0x000000FF) |  // Décale l'octet 0 à la position 3
              ((n >> 8)  & 0x0000FF00) |  // Décale l'octet 1 à la position 2
              ((n << 8)  & 0x00FF0000) |  // Décale l'octet 2 à la position 1
              ((n << 24) & 0xFF000000);   // Décale l'octet 3 à la position 0
   }

Explication
-----------

- On manipule chaque octet de l'entier 32 bits en utilisant des décalages (``>>`` pour décale vers la droite, ``<<`` pour décale vers la gauche).
- On combine ces octets décalés avec des masques pour obtenir la nouvelle valeur avec les octets dans l'ordre inverse.

---

Exercice 3
==========

1.1. Conversion manuelle du nombre binaire 0,101001 en base 10
--------------------------------------------------------------

Pour convertir un nombre binaire fractionnaire en base 10, on multiplie chaque bit de la partie fractionnaire par une puissance décroissante de 2 :

.. math::

   0.101001_2 = 1 \times 2^{-1} + 0 \times 2^{-2} + 1 \times 2^{-3} + 0 \times 2^{-4} + 0 \times 2^{-5} + 1 \times 2^{-6}

En calculant chaque terme :

.. math::

   1 \times 2^{-1} = 0.5

.. math::

   1 \times 2^{-3} = 0.125

.. math::

   1 \times 2^{-6} = 0.015625

En additionnant ces valeurs :

.. math::

   0.101001_2 = 0.5 + 0.125 + 0.015625 = 0.640625_{10}

1.2. Vérification du résultat avec une calculatrice
---------------------------------------------------

En utilisant une calculatrice pour convertir :math:`0.101001_2` en base 10, le résultat est bien :math:`0.640625`.

---

1.3. Fonction en C pour convertir un Q31 en chaîne ASCII des premiers digits décimaux
-------------------------------------------------------------------------------------

Dans le format Q31, les 31 bits de poids faible représentent la partie fractionnaire (entre -1 et 1). Nous allons implémenter la fonction pour convertir cette partie binaire en une chaîne ASCII.

.. code-block:: c

   #include <stdint.h>
   #include <stdio.h>

   void q31_to_decimal_string(uint32_t q31, char *output) {
       uint32_t mask = 1 << 30;  // MSB des 31 bits décimaux
       int i;
       for (i = 0; i < 5; i++) {  // Limité aux 5 premiers bits
           if (q31 & mask) {
               output[i] = '1';
           } else {
               output[i] = '0';
           }
           mask >>= 1;
       }
       output[5] = '\0';  // Terminaison de la chaîne
   }

   int main() {
       uint32_t q31 = 0b10100100000000000000000000000000;  // Ex. 0,101001 en Q31
       char result[6];  // 5 bits + 1 caractère nul
       q31_to_decimal_string(q31, result);
       printf("Les premiers digits en binaire sont : %s\n", result);
       return 0;
   }

Explication
-----------

- On lit les 5 premiers bits du nombre Q31 (qui représente la partie fractionnaire) et les convertit en caractères ASCII (``'0'`` ou ``'1'``).
- Le masque sert à extraire chaque bit de la partie fractionnaire.

---

1.4. Utilisation de la fonction `sprintf` sans nombres flottants
----------------------------------------------------------------

Nous réécrivons la fonction précédente pour utiliser `sprintf` afin de formater directement les 5 bits sans manipuler de nombres flottants.

.. code-block:: c

   #include <stdint.h>
   #include <stdio.h>

   void q31_to_decimal_string_sprintf(uint32_t q31, char *output) {
       // Extraire les 5 premiers bits de la partie fractionnaire
       uint32_t fraction_part = (q31 >> 27) & 0x1F;  // Décalage pour obtenir les 5 premiers bits
       sprintf(output, "%05u", fraction_part);  // Conversion en chaîne ASCII
   }

   int main() {
       uint32_t q31 = 0b10100100000000000000000000000000;  // Ex. 0,101001 en Q31
       char result[6];
       q31_to_decimal_string_sprintf(q31, result);
       printf("Les premiers digits en binaire avec sprintf : %s\n", result);
       return 0;
   }

---

1.5. Fonction de multiplication de deux nombres Q31
---------------------------------------------------

Voici une fonction en C qui prend deux nombres Q31 en entrée et renvoie le résultat de leur multiplication sous forme de Q31.

.. code-block:: c

   #include <stdint.h>

   int32_t q31_multiply(int32_t a, int32_t b) {
       // Effectuer la multiplication en 64 bits pour éviter les débordements
       int64_t temp = (int64_t)a * (int64_t)b;
       
       // Décaler le résultat de 31 bits pour normaliser en Q31
       return (int32_t)(temp >> 31);
   }

   int main() {
       int32_t a = 0x40000000;  // Représente 0.5 en Q31
       int32_t b = 0x40000000;  // Représente 0.5 en Q31
       int32_t result = q31_multiply(a, b);
       printf("Le résultat de la multiplication en Q31 : 0x%X\n", result);
       return 0;
   }

Explication
-----------

- La multiplication est effectuée sur 64 bits pour éviter les débordements. Le résultat est ensuite décalé à droite de 31 bits pour se remettre dans le format Q31.

---

2.1. Conversion d'un entier en nombre flottant et inversement
-------------------------------------------------------------

.. code-block:: c

   #include <stdint.h>
   #include <stdio.h>

   // Conversion d'un entier en flottant
   float entier_en_flottant(int32_t a) {
       return (float)a;
   }

   // Conversion d'un flottant en entier
   int32_t flottant_en_entier(float x) {
       return (int32_t)x;
   }

   int main() {
       int32_t a = 42;
       float x = 42.5;

       // Conversion
       float resultat_flottant = entier_en_flottant(a);
       int32_t resultat_entier = flottant_en_entier(x);

       printf("Entier en flottant : %f\n", resultat_flottant);
       printf("Flottant en entier : %d\n", resultat_entier);

       return 0;
   }

Explication
-----------

- La conversion d'un entier en flottant est simple et utilise les types standards de C.
- La conversion d'un flottant en entier peut entraîner une perte d'information si le nombre flottant a une partie décimale.

---

2.2. Conversion d'une chaîne en nombre flottant et inversement
--------------------------------------------------------------

.. code-block:: c

   #include <stdio.h>
   #include <stdlib.h>

   // Conversion d'une chaîne en flottant
   float chaine_en_flottant(const char *str) {
       return atof(str);  // Fonction standard de C pour convertir une chaîne en flottant
   }

   // Conversion d'un flottant en chaîne
   void flottant_en_chaine(float x, char *output) {
       sprintf(output, "%.3f", x);  // Conversion en chaîne avec 3 chiffres après la virgule
   }

   int main() {
       char str[] = "42.567";
       char output[10];
       
       // Conversion chaîne -> flottant
       float x = chaine_en_flottant(str);
       printf("Chaîne en flottant : %f\n", x);
       
       // Conversion flottant -> chaîne
       flottant_en_chaine(x, output);
       printf("Flottant en chaîne : %s\n", output);

       return 0;
   }

Explication
-----------

- `atof` est utilisée pour convertir une chaîne en flottant.
- `sprintf` permet de formater un flottant en chaîne avec un nombre limité de décimales (ici, 3).
