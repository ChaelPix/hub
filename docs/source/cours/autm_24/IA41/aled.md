# Guide de Survie CSP pour l'Examen IA41

## Les 3 Éléments à Retenir d'un CSP

1. **La Structure**: CSP = (X, D, C)
   - X = Variables (x1, x2, ..., xn)
   - D = Domaines des variables
   - C = Contraintes

2. **Les Types de Contraintes**:
   - Unaires (1 variable)
   - Binaires (2 variables)
   - N-aires (n variables)

3. **Les Caractéristiques**:
   - Arité = nombre de variables impliquées
   - Relation = ensemble de tuples autorisés
   - Extension vs Intension

## Méthode de Résolution en Exam

1. **Identifier le CSP**:
   ```
   X = Liste des variables
   D = Domaines pour chaque variable
   C = Liste des contraintes (vi, ri)
   ```

2. **Vérifier la Consistance**:
   - Arc-consistance: pour chaque paire de variables
   - Nœud-consistance: pour chaque variable seule

3. **Appliquer l'algorithme Backtrack**:
   ```
   a. Choisir variable non instanciée
   b. Choisir valeur du domaine
   c. Vérifier contraintes
   d. Si échec: backtrack
   e. Si succès: continuer
   ```

## Exemple Type d'Examen

## Comment Traiter les Exercices Types d'Examen CSP

### Type 1: Représentation d'un CSP donné
**Quand on vous donne**: X, D, C avec les relations

**Méthode**:
1. Dessiner le graphe:
   ```
   a. Un nœud par variable
   b. Une arête entre deux variables si contrainte entre elles
   c. Noter domaines à côté des nœuds
   d. Noter relations sur les arêtes
   ```

2. Exemple:
   ```
   Donné:
   X = {X1, X2}
   D = {1,2,3} pour chaque variable
   C = {(X1,X2), {(1,2), (2,3)}}

   Dessin:
   [X1:{1,2,3}] --- {(1,2),(2,3)} --- [X2:{1,2,3}]
   ```

### Type 2: Trouver Toutes les Solutions
**Méthode systématique**:
1. Partir du graphe dessiné
2. Pour chaque variable:
   ```
   - Noter toutes les valeurs possibles
   - Éliminer celles qui violent les contraintes
   - Propager les contraintes aux autres variables
   ```
3. Exemple de tableau de résolution:
   ```
   | X1 | X2 | Valide? | Pourquoi?
   |----|----|---------|-----------
   | 1  | 2  | Oui     | Respecte (1,2)
   | 1  | 3  | Non     | Pas dans relations
   | 2  | 3  | Oui     | Respecte (2,3)
   ```

### Type 3: Questions de Consistance
**Pour vérifier la consistance d'arc**:
1. Pour chaque paire de variables (Xi,Xj):
   ```
   - Pour chaque valeur de Xi
   - Vérifier existence valeur compatible dans Xj
   - Si non: éliminer la valeur de Xi
   ```

2. Exemple:
   ```
   Pour X1-X2 avec C={(1,2),(2,3)}:
   X1=1 → OK (compatible avec 2)
   X1=2 → OK (compatible avec 3)
   X1=3 → Non (aucune valeur compatible)
   ```

### Type 4: Construire une Solution
**Méthode backtrack**:
1. Commencer par variable la plus contrainte
2. Noter dans un tableau:
   ```
   Niveau | Variable | Valeur | Contraintes OK?
   1      | X1      | 1      | Oui
   2      | X2      | 2      | Oui
   ```
3. Si échec: retour arrière et essai valeur suivante

### Vérification Finale
- Solutions complètes?
- Toutes contraintes respectées?
- Pas de solution oubliée?

### Pièges à Éviter
1. **Ne pas oublier de**:
   - Vérifier toutes les contraintes
   - Noter les valeurs impossibles
   - Justifier les éliminations

2. **Attention à**:
   - L'ordre des variables
   - La propagation des contraintes
   - La complétude des solutions
