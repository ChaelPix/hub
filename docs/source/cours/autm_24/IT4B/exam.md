# IT4B - Guide Pratique pour l'Examen

## Concepts Fondamentaux

### 1. Source Sans Mémoire
- Une source qui émet des symboles de façon indépendante
- Caractérisée par les probabilités de ses symboles (p(A), p(B), etc.)
- Débit symboles (DS) : nombre de symboles émis par seconde

### 2. Entropie
- Mesure l'information moyenne par symbole
- Pour une source binaire : H(S) = -p(A)log₂(p(A)) - p(B)log₂(p(B))
- Débit d'entropie = H × DS

### 3. Canal Binaire Symétrique
- Caractérisé par sa probabilité d'erreur (p)
- Capacité du canal : C = 1 - H₂(p)
- Débit d'utilisation (DC) en bits/sec

## Méthodes de Codage

### 1. Codage de Huffman
1. Classer les symboles par probabilités décroissantes
2. Regrouper les deux plus petites probabilités
3. Attribuer 0 à gauche, 1 à droite
4. Répéter jusqu'à obtenir l'arbre complet

#### Performance
- Longueur moyenne (n) des mots codes
- Taux de réduction = nouveau_débit/ancien_débit

### 2. Codage Canal
- Ajout de bits de contrôle pour détecter/corriger les erreurs
- Distance minimale (dmin) : nombre minimum de positions différentes entre deux mots codes
- Capacité de correction = ⌊(dmin-1)/2⌋

#### Matrices importantes
1. Matrice génératrice (G)
   - Forme systématique : [Ik|P]
   - Génère tous les mots codes

2. Matrice de contrôle (H)
   - Détecte les erreurs
   - HyT = syndrome

## Méthode de Résolution

1. Vérifier le théorème de Shannon :
   - Calculer H(S)
   - Calculer C
   - Vérifier H ≤ C

2. Pour le codage source :
   - Calculer les probabilités des extensions
   - Construire l'arbre de Huffman
   - Calculer le taux de compression

3. Pour le codage canal :
   - Déterminer les mots codes
   - Calculer dmin
   - Utiliser les matrices G et H
   - Corriger les erreurs avec la table des syndromes

## Étapes de Résolution Systématique

### 1. Question Préliminaire (Théorème de Shannon)
1. Calculer H(S) = -p(A)log₂(p(A)) - p(B)log₂(p(B))
2. Calculer C = 1 - H₂(p) pour le canal
3. Multiplier H(S) par DS pour avoir le débit d'entropie
4. Multiplier C par DC pour avoir la capacité totale
5. Vérifier si H ≤ C

### 2. Codage Source (Huffman)
1. Pour trouver l'ordre d'extension M:
   - Utiliser H(S) ≤ n ≤ H(S) + 1/M
   - Si on veut réduire de X%, alors n ≤ (100-X)/100
   - En déduire M minimum

2. Pour construire le code Huffman:
   - Calculer les probabilités: p(AAA) = p(A)³, etc.
   - Les classer par ordre décroissant
   - Regrouper les 2 plus petites
   - 0 à gauche, 1 à droite

3. Calcul du taux de réduction:
   - Longueur moyenne = Σ(pi × longueur_moti)
   - Taux = longueur_moyenne/ordre_extension

### 3. Codage Canal
1. Pour trouver les bits de contrôle:
   - Utiliser DC/DS = (k+r)/k
   où k = bits information, r = bits contrôle

2. Pour la matrice de contrôle:
   - Écrire les équations de contrôle
   - Former G = [Ik|P]
   - En déduire H = [Pt|In-k]

3. Pour corriger une erreur:
   - Calculer le syndrome S = HyT
   - Utiliser la table des syndromes
   - Corriger avec le vecteur de correction

## Astuces pour l'Examen
- Toujours commencer par vérifier Shannon
- Pour Huffman, dessiner l'arbre proprement
- Noter les puissances de 2 décroissantes dans les probabilités
- Pour le canal, commencer par les mots codes simples (00000)
- Vérifier la cohérence des résultats

## Formules Importantes

- H₂(p) = -p log₂(p) - (1-p)log₂(1-p)
- Débit d'entropie = H × DS
- Capacité = DC × (1 - H₂(p))
- Taux de réduction = n/nombre_bits_original

## Formules à Connaître
```
H(S) = -Σ pi log₂(pi)
C = 1 - H₂(p)
Taux réduction = longueur_moyenne/ordre_extension
dmin = minimum différences entre mots codes

## Exemples Pratiques

### Exemple 1: Vérification du Théorème de Shannon
Données:
- Source S{A,B} avec p(A)=0,98 et p(B)=0,02
- DS = 300K symboles/sec
- Canal avec p=0,05 et DC=280kbits/sec

1. Calcul de H(S):
   ```
   H(S) = -(0,98 log₂(0,98) + 0,02 log₂(0,02))
   H(S) = 0,1414 bits/symbole
   ```

2. Calcul de C:
   ```
   H₂(0,05) = -(0,05 log₂(0,05) + 0,95 log₂(0,95))
   C = 1 - H₂(0,05) = 0,7136 bits
   ```

3. Vérification finale:
   ```
   Débit d'entropie = 300K × 0,1414 = 42,42 kbits/sec
   Capacité totale = 280K × 0,7136 = 199,8 kbits/sec
   42,42K < 199,8K → Transmission possible
   ```

### Exemple 2: Codage Huffman d'ordre 3
Pour S{A,B} avec p(A)=0,98 et p(B)=0,02:

1. Calcul des probabilités d'ordre 3:
   ```
   p(AAA) = 0,98³ = 0,941
   p(AAB) = 0,98² × 0,02 = 0,019
   p(ABA) = 0,98 × 0,02 × 0,98 = 0,019
   p(ABB) = 0,98 × 0,02² = 0,00039
   etc.
   ```

2. Arbre de Huffman résultant:
   ```
   AAA → 1
   AAB → 011
   ABA → 010
   BAA → 001
   ABB → 00011
   BAB → 00010
   BBA → 00001
   BBB → 00000
   ```

3. Taux de réduction:
   ```
   n = (1×0,941 + 3×0,019×3 + 5×0,00039×4) = 1,118
   taux = 1,118/3 = 0,373 → réduction de 62,7%
   ```

### Exemple 3: Codage Canal C(5,2)
Pour un code avec:
```
c₁ = i₁
c₂ = i₂
c₃ = i₁ + i₂
```

1. Mots codes:
   ```
   00 → 00000
   01 → 01011
   10 → 10101
   11 → 11110
   ```

2. Matrices:
   ```
   G = [1 0 | 1 0 1]
       [0 1 | 0 1 1]

   H = [1 0 1 0 0]
       [0 1 0 1 0]
       [1 1 0 0 1]
   ```

3. Correction d'erreur:
   Pour y = 11010
   ```
   Syndrome = HyᵀT = 100
   Vecteur correction = 00100
   Mot corrigé = 11110
   ```
