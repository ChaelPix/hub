Absolument, je comprends ! Version ultra-condensée avec plus de focus sur les schémas et moins de blabla.

---

**Fiche de Notes Ultra-Condensée - Sécurité & Crypto (Cours 2)**

**1. Hachage & Authentification**
- **Collision:** `H(x1)=H(x2)` pour `x1≠x2`.
- **Salage (Auth):** `y = H(mdp + sel)`.
    - **Sel:** Unique/utilisateur & mdp, long, stocké avec hash. **JAMAIS réutiliser.**
    - But: Contre tables arc-en-ciel.
- *Outils recommandés:* PBKDF2, bcrypt, scrypt.

**2. Fonctions à Sens Unique (FSU) & Brèche Secrète**
- **FSU `f(x)`:** `y=f(x)` facile, `x=f⁻¹(y)` difficile.
- **FSU à Brèche Secrète `fk(x)`:** `x=fk⁻¹(y)` facile SI `k` (clé) connue. (Ex: Chiffrement)
- **Oracle Attack:** Serveur donne indices (ex: padding OK/KO) -> fuite d'infos.

**3. Chiffrement Symétrique**
- **Réseau de Feistel (Ex: DES)**


@startuml
title Réseau de Feistel (1 tour)
box "Entrée"
  participant L_i as "L_i"
  participant R_i as "R_i"
end box
participant F as "Fonction F\n(avec K_i)"
box "Sortie"
  participant L_i_plus_1 as "L_{i+1}"
  participant R_i_plus_1 as "R_{i+1}"
end box

R_i -> L_i_plus_1 : Copie
R_i -> F
L_i -> F
F -> R_i_plus_1 : XOR
note right of F : R_i_plus_1 = L_i XOR F(R_i, K_i)
note left of L_i_plus_1 : L_i_plus_1 = R_i

group Déchiffrement (avec K_i, de L_{i+1}, R_{i+1} vers L_i, R_i)
  L_i_plus_1 -> R_i : Copie (R_i = L_{i+1})
  L_i_plus_1 -> F
  R_i_plus_1 -> F
  F -> L_i : XOR (L_i = R_{i+1} XOR F(L_{i+1}, K_i))
end group
@enduml


- **Mode CBC (Cipher Block Chaining)**


@startuml
title Mode CBC

box "Chiffrement"
  actor IV as "IV (C0)"
  participant P_i as "P_i"
  participant C_i_moins_1 as "C_{i-1}"
  participant E_k as "E_k"
  participant C_i as "C_i"

  P_i -> XOR1
  C_i_moins_1 -> XOR1
  XOR1 -> E_k : P_i XOR C_{i-1}
  E_k -> C_i : E_k(P_i XOR C_{i-1})
  IV -> C_i_moins_1 : (pour i=1)
end box

box "Déchiffrement"
  actor IV_dec as "IV (C0)"
  participant C_i_dec as "C_i"
  participant C_i_moins_1_dec as "C_{i-1}"
  participant D_k as "D_k"
  participant P_i_dec as "P_i"

  C_i_dec -> D_k
  D_k -> XOR2 : D_k(C_i)
  C_i_moins_1_dec -> XOR2
  XOR2 -> P_i_dec : D_k(C_i) XOR C_{i-1}
  IV_dec -> C_i_moins_1_dec : (pour i=1)
end box
@enduml


- `C_0 = IV`. Chiff: `C_i = E_k(P_i ⊕ C_{i-1})`. Déchiff: `P_i = D_k(C_i) ⊕ C_{i-1}`.
- **Padding PKCS#7:** Bloc `B` octets. Manque `N` octets -> ajouter `N` octets de valeur `N`. Si plein, ajouter bloc `B` octets de val `B`.
    - Ex (B=8): "ABC" -> "ABC\x05\x05\x05\x05\x05".
- **Padding Oracle Attack (CBC):**
    - Kevin envoie `C'_{i-1} || C_i` à Bob. Oracle dit si `P'_i = D_k(C_i) ⊕ C'_{i-1}` a un padding correct.
    - En testant des octets de `C'_{i-1}`, Kevin déduit `D_k(C_i)`, donc `P_i`.

**4. Corps de Galois (GF)**
- **Existence:** `GF(p^n)` existe ssi `p` premier. (Ex: `GF(8)=GF(2^3)`, `GF(9)=GF(3^2)`. `GF(14)` non).
- **Représentation GF(2^n):** Polynômes de degré `< n` à coeffs dans `GF(2)=\{0,1\}`.
    - Ex `GF(2^3)`: `a2*x^2 + a1*x + a0`. `110_bin` -> `x^2+x`.
- **Addition dans GF(2^n):** XOR des coefficients (bit à bit). `a+b = a⊕b`. (Soustraction idem).
    - Ex `GF(2^3)`: `(x^2+x) + (x+1) = (110) ⊕ (011) = (101) = x^2+1`.
- **Multiplication dans GF(2^n):** Multiplication polynomiale PUIS modulo un polynôme irréductible `m(x)` de degré `n`.
    - Ex `GF(2^3)` avec `m(x)=x^3+x+1`: `(x^2+x)(x+1) = x^3+x^2+x^2+x = x^3+x`.
      `(x^3+x) mod (x^3+x+1)`. Division polynomiale : `x^3+x = 1*(x^3+x+1) + (-1) = 1*(x^3+x+1) + (1)`. Reste `1`.
      (En `GF(2)`, `-1 = +1`).
- **Inverse dans GF(p^n):** Euclide étendu pour polynômes. (Ex: trouver `A⁻¹` tel que `A*A⁻¹ ≡ 1 mod m(x)`).

**5. AES (Advanced Encryption Standard)**
- Chiffrement par bloc (128 bits = 16 octets). Clés 128, 192, 256 bits.
- **État:** Matrice 4x4 octets.
- **Tours (10, 12, ou 14):** 4 opérations (sauf dernier tour: pas de MixColumns).
    1. **SubBytes:** Substitution non-linéaire (S-Box). Chaque octet `a_ij` -> `b_ij` via table (inverse dans `GF(2^8)` + transfo affine).
    2. **ShiftRows:** Décalage circulaire des lignes (ligne 0: 0, ligne 1: 1 octet à gauche, etc.).
    3. **MixColumns:** Chaque colonne multipliée par matrice fixe dans `GF(2^8)` (`m(x)=x^8+x^4+x^3+x+1`).

        
        [d0]   [02 03 01 01] [c0]
        [d1] = [01 02 03 01] [c1]  (dans GF(2^8))
        [d2]   [01 01 02 03] [c2]
        [d3]   [03 01 01 02] [c3]
        

    4. **AddRoundKey:** XOR de l'état avec la clé de tour (dérivée de la clé principale).
- **KeyExpansion (Programmation de clé):** Génère les clés de tour.
- **Déchiffrement:** Opérations inverses (InvSubBytes, InvShiftRows, InvMixColumns, AddRoundKey).

**6. Échange de Clés Diffie-Hellman (DH)**
- But: Établir clé secrète partagée sur canal public.
- **Paramètres Publics:** Grand premier `p`, générateur `g` du groupe multiplicatif `(Z/pZ)*`.


@startuml
title Diffie-Hellman
participant Alice
participant Bob

note over Alice, Bob : Public: p, g

Alice -> Alice : Choisit secret <b>a</b>
Alice -> Alice : Calcule A = g^a mod p
Alice -> Bob : A

Bob -> Bob : Choisit secret <b>b</b>
Bob -> Bob : Calcule B = g^b mod p
Bob -> Alice : B

Alice -> Alice : S_Alice = B^a mod p = (g^b)^a = g^(ba) mod p
Bob -> Bob : S_Bob = A^b mod p = (g^a)^b = g^(ab) mod p

note over Alice, Bob : Clé secrète partagée S
@enduml


- **Sécurité:** Basée sur la difficulté du Logarithme Discret (trouver `a` si `A, g, p` connus).
- **EDH (Ephemeral DH):** `a` et `b` générés à chaque session (PFS - Perfect Forward Secrecy).
- **Vulnérabilité:** Homme du Milieu (MitM) si `A` et `B` non authentifiés.
    - Remède: Signatures sur `A` et `B`, certificats.

---
J'espère que cette version est plus proche de ce que tu cherchais ! C'est un défi de tout condenser.