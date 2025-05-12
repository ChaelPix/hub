# Fiche Révision Cybersécurité (Focus 1h30 : Asymétrique, DH & Rôle de RSA)
# + Notions Clés du Cours (pour copie double)

---

## I. Concepts Fondamentaux de Sécurité (Issues du Cours)

### 1. Scénario de Base & Menaces

*   **Hypothèse :** Échanges sur réseau public (tout est visible, interceptable).
*   **Menaces :**
    *   **Écoute (Confidentialité) :** Ex: Wireshark.
    *   **Usurpation d'identité (Authentification) :**
        *   **Homme du Milieu (MitM) :** Ex: Ettercap. S'interpose, modifie/lit.
        *   **Attaque par Rejeu :** Réutiliser des messages interceptés.

### 2. Authentification : Évolution

*   **Protocole 1 (MDP en clair) :** ID + MDP -> **Problème : MDP lisible par tous.**
*   **Fonction à Sens Unique (FSU) - `y = f(x)` :**
    *   `y` facile à calculer depuis `x`.
    *   `x` "impossible" à calculer depuis `y` (dépend puissance de calcul -> obsolescence).
    *   **Types :**
        *   **Fonction de Hachage (`H(x)`) :** Entrée taille variable -> sortie taille fixe (empreinte).
            *   *Ex : MD5 (cassé), SHA-1 (faible), SHA-2 (SHA-256, SHA-512), SHA-3.*
            *   *Propriétés : Résistance préimage, 2nde préimage (collision), différentielle.*
        *   Générateur de Nombres Pseudo-Aléatoires (PRNG). Utiliser version "cryptographiquement sûre" (CSPRNG).
*   **Protocole 2 (FSU simple) :** ID + `y = H(MDP)` -> **Problèmes :** `y` connu, réutilisable si même MDP ailleurs (Rainbow tables).
*   **Salage (Salt `r`) :**
    *   **Protocole 3 :** ID + `y = H(MDP + r)` (ou `H(r + MDP)` ou `H(r || MDP || r)`...). Le sel `r` est unique par utilisateur/MDP, stocké avec `y`.
    *   **Avantage :** `y` unique même si MDP identiques. Invalide les tables arc-en-ciel généralisées.
    *   **Précautions Sel :** Unique, long, généré aléatoirement à chaque création/modif MDP.
    *   **Problème :** `y` (avec `r` connu) peut toujours être rejoué. N'empêche pas attaque par dictionnaire ciblée (mais sur 1 utilisateur).
*   **Hachage Itératif / Fonctions de Dérivation de Clé (KDF) :**
    *   Ex: **PBKDF2** (Password-Based Key Derivation Function 2), **Bcrypt**, **Scrypt**, **Argon2**.
    *   Principe : Appliquer `H` (souvent HMAC-SHAx) de nombreuses fois (`c` itérations).
    *   `DK = PBKDF2(PRF, Password, Salt, c, dkLen)` où PRF est une fonction pseudo-aléatoire (ex: HMAC-SHA256).
    *   **Stockage :** Utilisateur, Sel, Hash issu de PBKDF2, Nombre d'itérations `c`.
    *   **But :** Ralentir significativement les attaques par force brute/dictionnaire.
*   **Fonction à Sens Unique à Brèche Secrète (Trapdoor One-Way Function) - `y = f_k(x)` :**
    *   `y` facile à calculer depuis `x`.
    *   `x` impossible à calculer depuis `y` **SANS** connaître la "brèche" (la clé secrète `k`).
    *   Si `k` est connue, `x = f_k^(-1)(y)` est facile.
    *   **Base du chiffrement (symétrique et asymétrique).** `k` est la clé de chiffrement/déchiffrement.
*   **Authentification par Défi-Réponse (Challenge-Response) :**
    *   **Protocole 5 (Authentification Simple) :**
        1.  Alice -> Bob : ID_Alice
        2.  Bob -> Alice : `r_t` (défi aléatoire)
        3.  Alice -> Bob : `y = f_k(r_t)` (réponse, où `k` est le secret partagé, ex: `H(MDP+sel)`)
        4.  Bob vérifie si `y == f_k(r_t)`.
    *   **Avantage :** Le secret `k` (ou MDP) ne transite pas. Empêche rejeu simple.
    *   **Problème :** Bob ne s'authentifie pas.
    *   **Protocole 6 (Authentification Mutuelle) :** Les deux s'envoient des défis et des réponses.
        *   **Vulnérabilité possible :** Attaque par réflexion/oracle si mal conçu (Kévin utilise Bob comme oracle pour répondre au défi d'Alice).

---
---

## II. Chiffrement Asymétrique (Théorie & RSA)

### 1. Principes (Rappel)

*   **Deux clés : Publique et Privée.**
*   **Confidentialité :** Chiffrer avec Publique_Dest -> Déchiffrer avec Privée_Dest.
*   **Signature :** Signer (hash) avec Privée_Emetteur -> Vérifier avec Publique_Emetteur. (Authenticité, Intégrité, Non-répudiation).
*   **Usage :** Chiffrement de petites données (clés sym.), signatures. **Rôle clé pour authentifier DH.**

### 2. Algorithme RSA

#### a. Génération des Clés (par Alice)

1.  Choisir 2 grands premiers distincts `p, q` (secrets).
2.  `n = p * q` (module, public).
3.  `φ(n) = (p-1) * (q-1)` (indicateur d'Euler, secret).
4.  Choisir `e` (exposant public) : `1 < e < φ(n)`, `pgcd(e, φ(n)) = 1`. (Souvent `e=65537`).
5.  Calculer `d` (exposant privé) : `d * e ≡ 1 (mod φ(n))`. (Inverse multiplicatif modulaire).
    *   **Clé Publique : `(n, e)`**
    *   **Clé Privée : `(n, d)`** (ou `(p, q, d, φ(n))`)

#### b. Chiffrement (Bob envoie `M` à Alice)

*   `C = M^e % n` (où `0 ≤ M < n`)

#### c. Déchiffrement (Alice reçoit `C`)

*   `M = C^d % n`

#### d. Signature (Alice signe `h(M)`)

*   `S = (h(M))^d % n`

#### e. Vérification de Signature (Bob vérifie `S` sur `h(M)`)

*   Calculer `(h(M))_verif = S^e % n`. Si `(h(M))_verif == h(M)`, signature valide.

    ---
    **Points à Noter pour la Copie Double (RSA) :**
    *   Les 5 étapes de génération de clé.
    *   Les formules de chiffrement, déchiffrement, signature, vérification.
    *   Quelles parties sont publiques/privées.
    *   La sécurité repose sur la difficulté de factoriser `n`.
    ---

---
---

## III. Protocole d'Échange de Clés Diffie-Hellman (DH)

> **Objectif :** Alice et Bob s'accordent sur une clé secrète partagée `S` via un canal public.

### 1. Paramètres Publics : `p` (grand premier), `g` (primitif de ℤ<sub>p</sub><sup>*</sup>)

### 2. Vérification d'un Élément Primitif `g` (pour un module `p`)

1.  Calculer `N = p-1`.
2.  Trouver tous les **diviseurs premiers distincts `q_1, q_2, ..., q_k` de `N`**.
3.  Pour chaque `q_i` (de `i=1` à `k`), calculer `test_i = g^(N / q_i) % p`.
4.  Si **TOUS** les `test_i ≠ 1`, alors `g` est un primitif.
    *   *Ex (TD) : `p=11, N=10`. Diviseurs premiers de 10 : `2, 5`. Tester `g=7` :*
        *   `7^(10/2) % 11 = 7^5 % 11 = 16807 % 11 = 10 ≠ 1`
        *   `7^(10/5) % 11 = 7^2 % 11 = 49 % 11 = 5 ≠ 1`
        *   *Donc, 7 est primitif.*

### 3. Algorithme / Déroulement de l'Échange Standard DH

| Acteur | Secrets Internes | Calculs Publics              | Échanges                        | Calcul Clé Secrète Commune `S`          |
| :----- | :--------------- | :--------------------------- | :------------------------------ | :------------------------------------ |
| Alice  | `a`              | `A = g^a % p`                | `A` -> Bob                      | `S = B^a % p` (après réception de B) |
| Bob    | `b`              | `B = g^b % p`                | `B` -> Alice                    | `S = A^b % p` (après réception de A) |
| *Tous* |                  |                              | `S = g^(ab) % p` (mathématiquement) |                                       |

*   **Sécurité :** Repose sur la difficulté du **Logarithme Discret (DLP)** : étant `p,g,A`, trouver `a` est dur. Et du **Problème DH Calculatoire (CDH)** : étant `p,g,A,B`, trouver `g^(ab)%p` est dur.
*   *Savoir faire les calculs de A, B, S pour des petits nombres.*
*   *Savoir retrouver `a` ou `b` par énumération pour petit `p`.*

### 4. Vulnérabilité : Attaque de l'Homme du Milieu (MitM)

*   **Cause :** `A` et `B` ne sont pas authentifiés.
*   **Scénario :** Oscar (secrets `o_A, o_B`) s'interpose.
    *   Alice calcule `A = g^a % p`. Envoie à Oscar (pensant Bob).
    *   Oscar calcule `O_A = g^(o_A) % p`. Envoie à Bob (se faisant passer pour Alice).
    *   Bob calcule `B = g^b % p`. Envoie à Oscar (pensant Alice).
    *   Oscar calcule `O_B = g^(o_B) % p`. Envoie à Alice (se faisant passer pour Bob).
*   **Clés établies :**
    *   Alice <-> Oscar : `S_AO = (O_B)^a % p = g^(o_B * a) % p`.
    *   Bob <-> Oscar : `S_BO = (O_A)^b % p = g^(o_A * b) % p`.
*   *Savoir calculer `S_AO` et `S_BO`.*

### 5. Contre-mesure à MitM : DH Authentifié (ADH)

*   Utilisation de **signatures numériques** (souvent RSA) sur `A` et `B`, avec **certificats X.509**.
    1.  Alice envoie `(A_DH, Sign_RSA_privée_Alice(h(A_DH)), Cert_Alice_RSA_pub)`.
    2.  Bob vérifie `Cert_Alice` (via AC), puis `Sign_RSA` avec clé publique RSA d'Alice.
    3.  Idem pour Bob.
*   **Rôle de RSA :** Fournir l'**authenticité** des messages DH, pas la confidentialité de A ou B.

### 6. Extensions DH (Pertinent pour compréhension)

*   **DHE (Éphémère) :** `a` et `b` (et donc `A`, `B`, `S`) sont **nouveaux à chaque session**. Fournit **Perfect Forward Secrecy (PFS)** : si la clé privée long terme (ex: RSA de signature) est compromise, les clés de session DH passées ne le sont pas.
*   **ECDH / ECDHE :** Utilise courbes elliptiques. Mêmes principes, clés plus courtes pour même sécurité.

---
---

## IV. Notions du Cours sur le Chiffrement Symétrique (Très bref, pour contexte)

*   **Symétrique = Fonction à Sens Unique à Brèche Secrète `f_k(x)`** où `k` est la **même clé** pour chiffrer et déchiffrer.
*   **Types :**
    *   **Par Flots (Stream Cipher) :** Chiffre bit/octet par bit/octet. Ex: ChaCha20.
        *   Utilise un PRNG pour étendre la clé en un flux keystream. `C = P ⊕ Keystream`.
    *   **Par Blocs (Block Cipher) :** Chiffre blocs de taille fixe (ex: AES 128 bits = 16 octets).
        *   **AES (Advanced Encryption Standard) :** Standard actuel. Clés de 128, 192, 256 bits.
            *   Architecture SPN (Substitution-Permutation Network). Opérations dans **Corps de Galois GF(2<sup>8</sup>)**.
            *   Tours multiples avec opérations : `SubBytes` (S-Box, non-linéaire), `ShiftRows` (permutation), `MixColumns` (diffusion, multiplication matricielle dans GF(2<sup>8</sup>)), `AddRoundKey` (XOR avec sous-clé).
        *   **Nécessite un Mode Opératoire** (ex: ECB, CBC, GCM) et souvent du **Bourrage** (Padding).
            *   **ECB :** `C_i = f_k(P_i)`. **NON SÉCURISÉ** (mêmes P_i -> mêmes C_i).
            *   **CBC :** `C_i = f_k(P_i ⊕ C_(i-1))` (avec `C_0 = IV`). Lie les blocs.
            *   **GCM (Galois/Counter Mode) :** Mode AEAD (Authenticated Encryption with Associated Data). Fournit confidentialité ET authenticité/intégrité. Prévient attaques type Padding Oracle.



---

## Protocole ECDH (Elliptic Curve Diffie-Hellman) - Échange de Clés

### 1. Paramètres Publics (Communs et connus de tous)

*   **Courbe Elliptique (E) :** Définie par une équation (ex: `y² = x³ + ax + b`) sur un corps fini (ex: `F_p` où `p` est un grand nombre premier).
*   **Point de Base (G) :** Un point public, fixe et bien connu sur la courbe E, avec un grand ordre. C'est l'équivalent du générateur `g` dans le DH classique.
    *   (*Note : Le "fp" que tu mentionnes dans le schéma du prof est probablement une référence au corps fini `F_p` sur lequel la courbe est définie, ou aux paramètres de la courbe qui incluent ce corps fini et le point de base G.*)

### 2. Schéma de l'Échange ECDH

| Acteur | Action                                                                 | Calculs (Opérations sur la Courbe Elliptique)      | Envoi / Réception           |
| :----- | :--------------------------------------------------------------------- | :----------------------------------------------- | :-------------------------- |
| **Alice** | 1. Choisit un **entier secret privé** aléatoire `d_A` (son "scalaire"). |                                                  |                             |
|        | 2. Calcule son **point public** `Q_A` (sa "clé publique" ECC).       | `Q_A = d_A * G` <br> *(Multiplier le point G par le scalaire d_A)* |                             |
|        | 3. Envoie `Q_A` à Bob.                                                 |                                                  | `Q_A`  -> Bob                |
| **Bob**   | 1. Choisit un **entier secret privé** aléatoire `d_B` (son "scalaire"). |                                                  |                             |
|        | 2. Calcule son **point public** `Q_B` (sa "clé publique" ECC).       | `Q_B = d_B * G` <br> *(Multiplier le point G par le scalaire d_B)* |                             |
|        | 3. Envoie `Q_B` à Alice.                                               |                                                  | `Q_B` -> Alice              |
| **Alice** | 4. Reçoit `Q_B` de Bob. <br> 5. Calcule le **point secret partagé** `S_P`. | `S_P = d_A * Q_B` <br> `(= d_A * (d_B * G))`        | Reçoit `Q_B`                |
| **Bob**   | 4. Reçoit `Q_A` d'Alice. <br> 5. Calcule le **point secret partagé** `S_P`. | `S_P = d_B * Q_A` <br> `(= d_B * (d_A * G))`        | Reçoit `Q_A`                |

*   **Explication des calculs `d * P` (Multiplication scalaire d'un point) :**
    *   Cela signifie "additionner" le point `P` à lui-même `d` fois, en utilisant l'opération d'addition spécifique définie pour les points sur la courbe elliptique.
    *   `d_A * (d_B * G) = (d_A * d_B) * G`
    *   `d_B * (d_A * G) = (d_B * d_A) * G`
    *   Puisque `d_A * d_B = d_B * d_A`, les deux calculent le **même point `S_P` sur la courbe**.

### 3. La Clé Secrète Partagée Finale

*   Le point `S_P = ( (d_A * d_B) * G )` est un point sur la courbe, ayant des coordonnées (x, y).
*   La **clé secrète partagée finale `K`** (utilisée ensuite pour un chiffrement symétrique) n'est généralement pas le point `S_P` lui-même, mais est **dérivée** de ce point.
    *   Souvent, on utilise la coordonnée `x` du point `S_P` (et parfois `y`) comme entrée d'une **Fonction de Dérivation de Clé (KDF)** pour produire `K`.
    *   Ex: `K = KDF(coordonnée_x(S_P))`

### 4. Comparaison ECDH vs DH Classique

| Caractéristique        | DH Classique (sur ℤ<sub>p</sub><sup>*</sup>)                | ECDH (sur Courbes Elliptiques)                         |
| :--------------------- | :------------------------------------------------------ | :----------------------------------------------------- |
| **Paramètres Publics** | `p` (grand premier), `g` (générateur entier)            | Paramètres de la Courbe `E` (équation, corps fini `F_p`), Point de base `G` (un point `(x,y)`) |
| **Secrets Privés**     | Entiers `a, b`                                          | Entiers (scalaires) `d_A, d_B`                         |
| **Valeurs Publiques Échangées** | Nombres entiers `A = g^a % p`, `B = g^b % p`       | **Points** sur la courbe `Q_A = d_A * G`, `Q_B = d_B * G` |
| **Opération Principale**| Exponentiation modulaire (`base^exposant % module`)     | **Multiplication scalaire** d'un point (`scalaire * Point`) |
| **Secret Partagé (Intermédiaire)** | Nombre entier `S = g^(ab) % p`                    | **Point** sur la courbe `S_P = (d_A * d_B) * G`       |
| **Clé Finale Dérivée** | Souvent `S` directement (ou `KDF(S)`)                   | Toujours `KDF(coordonnée_x(S_P), ...)`                 |
| **Problème Difficile Sous-jacent** | Logarithme Discret (DLP) : trouver `x` dans `y=g^x%p` | Logarithme Discret sur Courbes Elliptiques (ECDLP) : trouver `k` dans `Q = k*P` |
| **Taille des Clés / Valeurs (pour sécurité équivalente)** | Plus grandes (ex: 2048-3072 bits)                       | **Beaucoup plus petites** (ex: 256-384 bits)           |
| **Efficacité**         | Moins efficace (calculs plus lourds)                    | **Plus efficace** (calculs plus rapides pour même sécurité) |

### 5. Points Clés de Différence et Caractéristiques d'ECDH

*   **Nature des Objets Mathématiques :**
    *   DH Classique : Opère sur des nombres entiers dans un groupe multiplicatif modulo `p`.
    *   ECDH : Opère sur des **points** `(x,y)` qui satisfont l'équation de la courbe, formant un groupe avec une "addition" de points spécifique.
*   **"Multiplication" vs "Exponentiation" :**
    *   Dans DH classique, on "élève `g` à la puissance `a`".
    *   Dans ECDH, on "multiplie le point `G` par le scalaire `d_A`". C'est une analogie : `d_A * G` est à `G` ce que `g^a` est à `g` (en termes de structure de groupe).
*   **Avantage Principal d'ECDH : Efficacité et Taille des Clés.**
    *   Pour un niveau de sécurité donné, ECDH nécessite des clés (les scalaires `d_A, d_B`) et des paramètres (taille du corps fini `p` pour la courbe) significativement plus petits que DH classique.
    *   Cela se traduit par des calculs plus rapides, moins de données à transmettre (les coordonnées des points `Q_A, Q_B` sont plus petites que les grands nombres `A, B` du DH classique pour une sécurité équivalente).
*   **Sécurité :**
    *   Repose sur la difficulté de l'ECDLP. Pour des courbes bien choisies, l'ECDLP est considéré plus difficile à résoudre que le DLP classique pour des tailles de paramètres comparables. C'est pourquoi on peut utiliser des paramètres plus petits.
*   **Authentification :**
    *   Comme DH classique, ECDH seul **ne fournit pas d'authentification**. `Q_A` et `Q_B` doivent être authentifiés (par ex. via ECDSA et certificats) pour prévenir les attaques MitM. La version authentifiée s'appelle **ECDHE** (Elliptic Curve Diffie-Hellman Ephemeral) lorsqu'utilisée avec des clés éphémères (scalaires `d_A, d_B` générés pour chaque session) pour assurer la Perfect Forward Secrecy (PFS).

---

## ECDH (Elliptic Curve Diffie-Hellman) - Version Condensée

### 1. Principe Général

*   Comme DH, mais opérations sur **points d'une courbe elliptique (E)** au lieu de nombres `mod p`.
*   **Avantage clé :** Même sécurité avec **clés/valeurs beaucoup plus petites** -> plus rapide, moins de données.
*   Sécurité : Repose sur difficulté **ECDLP** (trouver `k` dans `Q = k * P`).

### 2. Paramètres Publics

*   **Courbe E**, Point de base **G** (un point `(x,y)` sur E).

### 3. Échange ECDH (Alice & Bob)

| Étape     | Alice                                          | Bob                                            | Échange                  |
| :-------- | :--------------------------------------------- | :--------------------------------------------- | :----------------------- |
| **Secrets** | Entier `d_A`                                   | Entier `d_B`                                   |                          |
| **Calculs Publiques** | Point `Q_A = d_A * G`                         | Point `Q_B = d_B * G`                         | `Q_A` -> Bob, `Q_B` -> Alice |
| **Calcul Secret Partagé** | Point `S_P = d_A * Q_B` <br> `(= (d_A*d_B)*G)` | Point `S_P = d_B * Q_A` <br> `(= (d_B*d_A)*G)` |                          |
| **Clé Finale** | `K = KDF(coordonnée_x(S_P))`                  | `K = KDF(coordonnée_x(S_P))`                  |                          |

*   `k * P` = "multiplication scalaire" : additionner le point `P` à lui-même `k` fois sur la courbe.

### 4. Différences Clés vs DH Classique (`g^a % p`)

|                     | DH Classique                       | ECDH                               |
| :------------------ | :--------------------------------- | :--------------------------------- |
| **Objets échangés** | Nombres `A, B`                     | **Points** `Q_A, Q_B` (coordonnées) |
| **Opération**       | Exponentiation modulaire           | Multiplication scalaire de points  |
| **Clé/Param. Taille** | Grande                             | **Petite** (pour même sécurité)    |

### 5. Authentification & PFS

*   ECDH seul : **Pas d'authentification** (vulnérable MitM).
*   **ECDHE** (Ephemeral) : `d_A, d_B` nouveaux à chaque session -> **Perfect Forward Secrecy (PFS)**.
    *   Authentification via signatures (ex: ECDSA) sur `Q_A, Q_B`.

---

---

## Protocole DH Classique (sur ℤ<sub>p</sub><sup>*</sup>) - Échange de Clés

### 1. Paramètres Publics (Communs et connus de tous)

*   `p` : Un grand nombre premier (le module).
*   `g` : Un élément primitif (générateur entier) de ℤ<sub>p</sub><sup>*</sup>.

### 2. Schéma de l'Échange DH Classique

| Acteur    | Action                                                                | Calculs (Opérations Modulo `p`)                    | Envoi / Réception        |
| :-------- | :-------------------------------------------------------------------- | :----------------------------------------------- | :----------------------- |
| **Alice** | 1. Choisit un **entier secret privé** aléatoire `a` (son "exposant"). |                                                  |                          |
|           | 2. Calcule sa **valeur publique** `A`.                                | `A = g^a % p` <br> *(Exponentiation modulaire)*   |                          |
|           | 3. Envoie `A` à Bob.                                                  |                                                  | `A`  -> Bob                |
| **Bob**   | 1. Choisit un **entier secret privé** aléatoire `b` (son "exposant"). |                                                  |                          |
|           | 2. Calcule sa **valeur publique** `B`.                                | `B = g^b % p` <br> *(Exponentiation modulaire)*   |                          |
|           | 3. Envoie `B` à Alice.                                                |                                                  | `B` -> Alice              |
| **Alice** | 4. Reçoit `B` de Bob. <br> 5. Calcule la **clé secrète partagée** `S`. | `S = B^a % p` <br> `(= (g^b)^a % p = g^(ba) % p)` | Reçoit `B`                |
| **Bob**   | 4. Reçoit `A` d'Alice. <br> 5. Calcule la **clé secrète partagée** `S`. | `S = A^b % p` <br> `(= (g^a)^b % p = g^(ab) % p)` | Reçoit `A`                |

*   **Résultat :** Alice et Bob possèdent la même clé secrète `S = g^(ab) % p`.
*   Cette valeur `S` (un entier) peut être utilisée directement comme clé symétrique ou passée dans une KDF.

---

---

## Protocole DH Classique Authentifié avec Signatures RSA (ADH)

### Prérequis

*   **Alice possède :**
    *   Clé privée RSA : `(d_RSA_A, n_RSA_A)`
    *   Clé publique RSA : `(e_RSA_A, n_RSA_A)` (dans son certificat `Cert_A`)
*   **Bob possède :**
    *   Clé privée RSA : `(d_RSA_B, n_RSA_B)`
    *   Clé publique RSA : `(e_RSA_B, n_RSA_B)` (dans son certificat `Cert_B`)
*   Chacun fait confiance à l'Autorité de Certification (AC) qui a émis les certificats de l'autre.

### 1. Paramètres Publics DH (Communs)

*   `p` : Un grand nombre premier (module DH).
*   `g` : Un élément primitif (générateur entier) de ℤ<sub>p</sub><sup>*</sup>.

### 2. Schéma de l'Échange DH Classique avec Authentification RSA

| Acteur    | Action & Secrets Internes DH/RSA                                     | Calculs DH & RSA (Signatures)                                                                                               | Envoi / Réception                                                                                             | Vérifications RSA par le Récepteur                                                                                                                                                                       |
| :-------- | :------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Alice** | 1. Secret DH `a`. <br>    Clé privée RSA `d_RSA_A`.                     | 2. Valeur publique DH : `A = g^a % p`. <br> 3. Signature de A : `Sig_A = (h(A))^(d_RSA_A) % n_RSA_A`.                           |                                                                                                               |                                                                                                                                                                                                          |
|           | 4. Envoie son message à Bob.                                         |                                                                                                                             | `(A, Sig_A, Cert_A)` -> Bob                                                                                   |                                                                                                                                                                                                          |
| **Bob**   | 1. Reçoit le message d'Alice. <br>    Secret DH `b`. <br>    Clé privée RSA `d_RSA_B`. |                                                                                                                             | Reçoit `(A, Sig_A, Cert_A)`                                                                                  | 2. **Vérifie `Cert_A`** (validité, confiance AC). <br> 3. Extrait clé publique RSA d'Alice `(e_RSA_A, n_RSA_A)` de `Cert_A`. <br> 4. **Vérifie `Sig_A`** : `(h(A))_verif = (Sig_A)^(e_RSA_A) % n_RSA_A`. <br>    Si `(h(A))_verif == h(A)`, alors `A` est authentique. |
|           | 5. Valeur publique DH : `B = g^b % p`. <br> 6. Signature de B : `Sig_B = (h(B))^(d_RSA_B) % n_RSA_B`.                           |                                                                                                                             |                                                                                                               |                                                                                                                                                                                                          |
|           | 7. Envoie son message à Alice.                                       |                                                                                                                             | `(B, Sig_B, Cert_B)` -> Alice                                                                                 |                                                                                                                                                                                                          |
| **Alice** | 6. Reçoit le message de Bob.                                        |                                                                                                                             | Reçoit `(B, Sig_B, Cert_B)`                                                                                  | 7. **Vérifie `Cert_B`**. <br> 8. Extrait clé publique RSA de Bob `(e_RSA_B, n_RSA_B)` de `Cert_B`. <br> 9. **Vérifie `Sig_B`** sur `h(B)`. <br>    Si `B` est authentique...                                      |
| **Alice** | 10. Calcule la **clé secrète partagée** `S`.                           | `S = B^a % p`                                                                                                               |                                                                                                               |                                                                                                                                                                                                          |
| **Bob**   | 8. Si `A` est authentique, calcule la **clé secrète partagée** `S`.    | `S = A^b % p`                                                                                                               |                                                                                                               |                                                                                                                                                                                                          |

*   `h()` est une fonction de hachage cryptographique (ex: SHA-256).
*   On signe le *hash* de `A` (ou `B`) pour l'efficacité et la compatibilité avec RSA.

### Explication du Rôle de RSA dans ce Schéma

1.  **Avant de faire confiance à la valeur DH reçue (`A` ou `B`)**, chaque participant vérifie son authenticité.
2.  **Certificat (`Cert_A`, `Cert_B`) :** Lie une identité (Alice, Bob) à une clé publique RSA. L'Autorité de Certification (AC) garantit ce lien. C'est le point de départ de la confiance.
3.  **Signature (`Sig_A`, `Sig_B`) :**
    *   Alice utilise sa **clé privée RSA** pour signer le *hash* de sa valeur DH `A`. Seule Alice peut produire cette signature.
    *   Bob utilise la **clé publique RSA d'Alice** (extraite de son certificat vérifié) pour vérifier la signature. Si la vérification réussit, Bob est assuré que :
        *   `A` a bien été envoyé par la propriétaire de la clé privée RSA correspondant à la clé publique du certificat (donc Alice, si le certificat est valide et digne de confiance).
        *   `A` n'a pas été modifié en transit (grâce au hash).
4.  **Conséquence :** Si Oscar intercepte `A` et le remplace par `O_A`, il ne pourra pas créer une `Sig_O_A` valide au nom d'Alice car il ne possède pas la clé privée RSA d'Alice. Bob détectera que la signature est invalide (ou absente pour `O_A`) et rejettera la communication ou `O_A`. L'attaque MitM sur les valeurs DH est ainsi contrecarrée.

**En résumé, dans ADH (Authenticated Diffie-Hellman) :**
*   **Diffie-Hellman** est utilisé pour **s'accorder sur une clé secrète `S`**.
*   **RSA (ou autre algo asymétrique de signature comme ECDSA)** est utilisé pour **authentifier les messages de l'échange DH** (`A` et `B`), garantissant que les participants sont bien ceux qu'ils prétendent être.

Ce tableau est plus complexe car il intègre deux protocoles (DH et la partie signature/vérification RSA). Pour ta feuille de notes, tu pourrais te concentrer sur les étapes clés de l'envoi et de la réception, en notant quelles clés sont utilisées pour la signature et la vérification.

---

## Opérations Modulaires de Base & Congruence (Utile pour DH, RSA, Générateurs)

| Notation / Concept              | Signification & Explication                                                                                                                               | Exemple                                                                 | Utilité Cryptographique                                                                                               |
| :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **`a % p`** <br> (Modulo)       | **Reste** de la division euclidienne de `a` par `p`. <br> Le résultat est toujours un entier `r` tel que `0 ≤ r < p`.                                        | `17 % 5 = 2` (car 17 = 3*5 + 2) <br> `-17 % 5 = 3` (car -17 = -4*5 + 3) | Opération de base dans tous les calculs DH (`g^a % p`) et RSA (`M^e % n`). Maintient les nombres dans un intervalle fini. |
| **`a ≡ b (mod p)`** <br> (Congruence) | **`a` est congru à `b` modulo `p`**. <br> Signifie que `a` et `b` ont le **même reste** lorsqu'ils sont divisés par `p`. <br> Équivalent à dire : `(a - b)` est divisible par `p`, ou `(a - b) = k*p` pour un entier `k`. | `17 ≡ 2 (mod 5)` (car 17%5=2 et 2%5=2) <br> `17 ≡ 7 (mod 5)` (car 17%5=2 et 7%5=2) | Exprime l'égalité dans l'arithmétique modulaire. Utilisé dans les définitions (ex: `d*e ≡ 1 (mod φ(n))` pour RSA). |
| **Addition Modulaire**        | `(a + b) % p`                                                                                                                                             | `(8 + 7) % 5 = 15 % 5 = 0`                                              | Opérations dans les groupes additifs (moins courant en DH/RSA, mais base des corps de Galois).                       |
| **Soustraction Modulaire**    | `(a - b) % p`. <br> Pour trouver le négatif : `-a % p` est l'élément `x` tel que `(a + x) % p = 0`.                                                        | `(3 - 7) % 5 = -4 % 5 = 1` <br> Négatif de 3 mod 5 : `(3+x)%5=0 -> x=2`. `-3%5 = 2`. | Idem.                                                                                                                 |
| **Multiplication Modulaire**  | `(a * b) % p`                                                                                                                                             | `(8 * 7) % 5 = 56 % 5 = 1`                                              | Opérations dans les groupes multiplicatifs ℤ<sub>p</sub><sup>*</sup> (DH, RSA).                                      |
| **Inverse Multiplicatif Modulaire** | `a^(-1) (mod p)` ou `inv(a, p)`. <br> C'est l'entier `x` tel que `(a * x) % p = 1` (ou `a * x ≡ 1 (mod p)`). <br> **N'existe que si `pgcd(a, p) = 1`**. <br> Calculé via l'**Algorithme d'Euclide Étendu**. | Inverse de 3 mod 7 : `(3*x)%7=1 -> x=5` car `(3*5)%7 = 15%7 = 1`. <br> `3^(-1) ≡ 5 (mod 7)`. | **Crucial pour RSA :** Calcul de `d` à partir de `e` et `φ(n)` (`d` est l'inverse de `e` mod `φ(n)`).                 |
| **Exponentiation Modulaire**  | `a^b % p`. <br> Calcul efficace via l'algorithme d'**exponentiation rapide (ou par carrés successifs)** pour éviter de calculer `a^b` (qui peut être énorme) avant de prendre le modulo. | `7^6 % 11` (DH) <br> `M^e % n` (RSA)                                     | **Opération fondamentale pour DH et RSA.**                                                                            |
| **Ordre d'un élément `a` mod `p`** | Le plus petit entier positif `k > 0` tel que `a^k ≡ 1 (mod p)`.                                                                                       | Ordre de 3 mod 7 : <br> `3^1=3, 3^2=2, 3^3=6, 3^4=4, 3^5=5, 3^6=1`. Ordre = 6. | Lié aux éléments primitifs. L'ordre d'un primitif `g` mod `p` est `p-1` (ou `φ(p)`).                               |
| **Élément Primitif (Générateur) `g` mod `p`** | `g` est un primitif si son ordre mod `p` est `p-1` (i.e., `g` génère tous les `p-1` éléments de ℤ<sub>p</sub><sup>*</sup>). <br> **Vérification :** `g^((p-1)/q) % p ≠ 1` pour tous les diviseurs premiers `q` de `p-1`. | `g=3` est primitif mod 7. `g=7` est primitif mod 11.                 | **Essentiel pour Diffie-Hellman :** `g` doit être un primitif du groupe ℤ<sub>p</sub><sup>*</sup>.                    |

### Algorithme d'Euclide Étendu (pour trouver `inv(a, n)` i.e. `x` dans `ax + ny = pgcd(a,n)`)

*   Si `pgcd(a,n) = 1`, alors `ax + ny = 1`. En prenant `mod n`, on a `ax ≡ 1 (mod n)`, donc `x` est l'inverse.
*   **Méthode :** Tableau itératif (ou récursif) basé sur les restes successifs de l'algorithme d'Euclide.
    *   *Formules de base (itératif) :*
        *   `r_i = r_(i-2) - q_i * r_(i-1)`
        *   `x_i = x_(i-2) - q_i * x_(i-1)`
        *   `y_i = y_(i-2) - q_i * y_(i-1)`
    *   Initialisation : `r_0=n, r_1=a`, `x_0=1, x_1=0` (si on cherche `inv(a,n)` pour `ax=1 mod n`), `y_0=0, y_1=1`.
    *   Quand `r_k = 1`, alors `x_k` est l'inverse de `a` modulo `n` (si `x_k` est négatif, ajouter `n`).
    *   *Il est peu probable de devoir dérouler l'algorithme complet en 1h30 sauf si c'est un cas très simple, mais comprendre son but (trouver l'inverse) est important pour RSA.*

---