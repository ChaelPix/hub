====================
Conversions Binaires
====================

.. contents::
   :depth: 2
   :local:

Conversion d'un nombre négatif en binaire (complément à deux)
-------------------------------------------------------------

Exemple : :math:`-37`

1. **Convertir la valeur absolue en binaire** :
   - :math:`37_{10} = 0010\ 0101_{2}`

2. **Inverser les bits** :
   - :math:`0010\ 0101 \rightarrow 1101\ 1010`

3. **Ajouter 1** :
   - :math:`1101\ 1010 + 1 = 1101\ 1011`

4. **Résultat** : :math:`-37_{10} = 1101\ 1011_{2}`

---

Addition et soustraction d'entiers signés sur 8 bits
----------------------------------------------------

Exemple : :math:`120 - 37`

1. **Convertir en binaire 8 bits** :
   - :math:`120` : :math:`0111\ 1000`
   - :math:`37` : :math:`0010\ 0101`

2. **Effectuer la soustraction** : Soustraire binaire.
   - :math:`0111\ 1000 - 0010\ 0101 = 0101\ 0011`

3. **Convertir le résultat en décimal** :
   - :math:`0101\ 0011 = 83`

Exemple : :math:`37 + (-120)`

1. **Convertir en binaire** :
   - :math:`37` : :math:`0010\ 0101`
   - :math:`-120` (complément à deux de :math:`120`) : :math:`1000\ 1000`

2. **Effectuer l'addition** :
   - :math:`0010\ 0101 + 1000\ 1000 = 1010\ 1101`

3. **Convertir le résultat en décimal** :
   - :math:`1010\ 1101 = -83`

Exemple : :math:`37 + 120` (dépassement)

1. **Convertir en binaire** :
   - :math:`37` : :math:`0010\ 0101`
   - :math:`120` : :math:`0111\ 1000`

2. **Addition** :
   - :math:`0010\ 0101 + 0111\ 1000 = 1001\ 1101`

3. **Résultat incorrect** : Comme :math:`1001\ 1101` dépasse la capacité des 8 bits signés (dépassement), le résultat est invalide.

---

Représentation des nombres binaires
-----------------------------------

Pour chaque nombre binaire, nous allons donner les trois représentations demandées : hexadécimal, décimal non signé (8 bits), et décimal signé (8 bits).

a. :math:`0100\ 1100`
- **Hexadécimal** : :math:`0100\ 1100 = 4C_{16}`
- **Décimal non signé (uint8_t)** : :math:`0100\ 1100 = 76_{10}`
- **Décimal signé (int8_t)** : :math:`0100\ 1100 = +76_{10}`

b. :math:`1000\ 1101`
- **Hexadécimal** : :math:`1000\ 1101 = 8D_{16}`
- **Décimal non signé (uint8_t)** : :math:`1000\ 1101 = 141_{10}`
- **Décimal signé (int8_t)** : :math:`1000\ 1101 = -115_{10}`

c. :math:`0101\ 1111`
- **Hexadécimal** : :math:`0101\ 1111 = 5F_{16}`
- **Décimal non signé (uint8_t)** : :math:`0101\ 1111 = 95_{10}`
- **Décimal signé (int8_t)** : :math:`0101\ 1111 = +95_{10}`

d. :math:`1110\ 0011`
- **Hexadécimal** : :math:`1110\ 0011 = E3_{16}`
- **Décimal non signé (uint8_t)** : :math:`1110\ 0011 = 227_{10}`
- **Décimal signé (int8_t)** : :math:`1110\ 0011 = -29_{10}`

e. :math:`1010\ 0110`
- **Hexadécimal** : :math:`1010\ 0110 = A6_{16}`
- **Décimal non signé (uint8_t)** : :math:`1010\ 0110 = 166_{10}`
- **Décimal signé (int8_t)** : :math:`1010\ 0110 = -90_{10}`

---

Conversion de nombres décimaux en binaire sur 8 bits (int8_t)
-------------------------------------------------------------

a. 37
- **Binaire naturel** : :math:`37 = 0010\ 0101_{2}`

b. 120
- **Binaire naturel** : :math:`120 = 0111\ 1000_{2}`

c. -37
- **Binaire naturel** : Pour les nombres négatifs, on utilise le complément à deux.
- **Inverse des bits et ajout de 1** : :math:`1101\ 1010 + 1 = 1101\ 1011`
- Donc, :math:`-37 = 1101\ 1011_{2}`

d. -1
- **Binaire naturel** : :math:`-1 = 1111\ 1111_{2}`

---

Valeurs des instructions en langage C
-------------------------------------

Pour les variables :math:`A`, :math:`B`, :math:`C`, et :math:`D` définies comme des données signées 8 bits, voici les valeurs en décimal et binaire.

a. :math:`A = 0xFE`
- Hexadécimal : :math:`FE_{16}`
- En binaire : :math:`1111\ 1110_{2}`
- En décimal (signé) : :math:`A = -2`

b. :math:`B = 10`
- En binaire : :math:`0000\ 1010_{2}`
- En décimal : :math:`10_{10}`

c. :math:`C = -1`
- En binaire : :math:`1111\ 1111_{2}`
- En décimal : :math:`-1`

d. :math:`D = 0b1010`
- En binaire : :math:`0000\ 1010_{2}`
- En décimal : :math:`10_{10}`

---

Multiplication et division
--------------------------

Multiplication : :math:`0000\ 0101 \times 0000\ 0111`

1. **Convertir en décimal** :
   - :math:`0000\ 0101 = 5`
   - :math:`0000\ 0111 = 7`

2. **Multiplier** :
   - :math:`5 \times 7 = 35`

3. **Convertir en binaire** :
   - :math:`35 = 0010\ 0011`

Division : :math:`1001 \% 11`

1. **Convertir en décimal** :
   - :math:`1001_{2} = 9`
   - :math:`11_{2} = 3`

2. **Division** :
   - :math:`9 \div 3 = 3`, reste :math:`0`

---

Conversion de flottant vers décimal (IEEE 754)
----------------------------------------------

Exemple : :math:`74DC0000`

1. **Convertir en binaire** :
   - :math:`74DC0000 = 0111\ 0100\ 1101\ 1100\ 0000\ 0000\ 0000\ 0000`

2. **Décomposer en Signe, Exposant, Mantisse** :
   - S = 0 (positif)
   - Exposant = :math:`0111\ 0100_{2} = 116`
   - Mantisse = :math:`1.1101\ 1100`

3. **Calculer la valeur** :
   - :math:`1.859375 \times 2^{-11} = 0.000907898`