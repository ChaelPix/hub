# Régression linéaire par les simples carrés

```C++

#include <vector>       // Pour utiliser std::vector
#include <numeric>      // Pour std::accumulate (calculer la somme)
#include <cmath>        // Pour std::pow (calculer la puissance)
#include <stdexcept>    // Pour gérer les erreurs (ex: vecteurs vides)
#include <iostream>     // Pour l'affichage (dans main)
#include <iomanip>      // Pour std::fixed, std::setprecision (affichage propre)

// Structure pour retourner les deux paramètres du modèle (pente et ordonnée à l'origine)
struct LinearRegressionResult {
    double slope;       // La pente 'm'
    double intercept;   // L'ordonnée à l'origine 'c'
};

/**
 * @brief Calcule les paramètres d'une régression linéaire simple par la méthode des moindres carrés.
 *
 * Trouve la droite y = mx + c qui minimise la somme des carrés des erreurs
 * pour les points de données fournis.
 *
 * @param x Vecteur des valeurs de la variable indépendante.
 * @param y Vecteur des valeurs de la variable dépendante.
 * @return LinearRegressionResult contenant la pente (m) et l'ordonnée à l'origine (c).
 * @throw std::invalid_argument si les vecteurs sont vides ou de tailles différentes.
 */
LinearRegressionResult leastSquaresRegression(const std::vector<double>& x, const std::vector<double>& y) {
    // --- Vérification des entrées ---
    // S'assurer que les vecteurs ne sont pas vides et ont la même taille
    if (x.empty() || y.empty()) {
        throw std::invalid_argument("Les vecteurs d'entrée ne peuvent pas être vides.");
    }
    if (x.size() != y.size()) {
        throw std::invalid_argument("Les vecteurs x et y doivent avoir la même taille.");
    }

    size_t n = x.size(); // Nombre de points de données

    // --- Étape 1: Calculer les moyennes de x et y (x̄ et ȳ) ---
    // Utilise std::accumulate pour sommer les éléments, puis divise par n
    double sum_x = std::accumulate(x.begin(), x.end(), 0.0);
    double sum_y = std::accumulate(y.begin(), y.end(), 0.0);
    double mean_x = sum_x / n; // x̄
    double mean_y = sum_y / n; // ȳ

    // --- Étape 2: Calculer les termes pour la pente (m) ---
    // Numerateur: Σ((xᵢ - x̄)(yᵢ - ȳ))
    // Denominateur: Σ((xᵢ - x̄)²)
    double numerator = 0.0;
    double denominator = 0.0;

    for (size_t i = 0; i < n; ++i) {
        double x_diff = x[i] - mean_x; // (xᵢ - x̄)
        double y_diff = y[i] - mean_y; // (yᵢ - ȳ)

        numerator += x_diff * y_diff;        // Ajoute (xᵢ - x̄)(yᵢ - ȳ) à la somme
        denominator += std::pow(x_diff, 2); // Ajoute (xᵢ - x̄)² à la somme
    }

    // --- Étape 3: Calculer la pente (m) ---
    // Gérer le cas où toutes les valeurs x sont identiques (division par zéro)
    if (std::abs(denominator) < 1e-10) { // Utilise une petite tolérance pour la comparaison flottante
         throw std::runtime_error("Calcul impossible : toutes les valeurs x sont identiques (dénominateur nul). La ligne serait verticale.");
         // Note: Dans certains cas, on pourrait retourner une pente infinie ou une erreur spécifique.
         // Pour une régression, cela signifie que x ne peut pas prédire y.
    }
    double slope = numerator / denominator; // m = Numerateur / Denominateur

    // --- Étape 4: Calculer l'ordonnée à l'origine (c) ---
    // c = ȳ - m * x̄
    double intercept = mean_y - slope * mean_x;

    // --- Étape 5: Retourner le résultat ---
    return {slope, intercept};
}

// --- Exemple d'utilisation ---
int main() {
    // Données d'exemple simples
    std::vector<double> x_data = {1.0, 2.0, 3.0, 4.0, 5.0};
    std::vector<double> y_data = {2.0, 4.1, 5.9, 8.0, 9.9}; // Légèrement bruité autour de y = 2x

    try {
        LinearRegressionResult result = leastSquaresRegression(x_data, y_data);

        std::cout << std::fixed << std::setprecision(4); // Pour un affichage propre
        std::cout << "Régression Linéaire par Moindres Carrés" << std::endl;
        std::cout << "---------------------------------------" << std::endl;
        std::cout << "Pente (m) calculée      : " << result.slope << std::endl;
        std::cout << "Ordonnée à l'origine (c): " << result.intercept << std::endl;
        std::cout << "Équation de la droite   : y = " << result.slope << "x + " << result.intercept << std::endl;

        // Prédiction pour une nouvelle valeur x
        double x_new = 6.0;
        double y_predicted = result.slope * x_new + result.intercept;
        std::cout << "\nPrédiction pour x = " << x_new << " -> y = " << y_predicted << std::endl;

    } catch (const std::exception& e) {
        std::cerr << "Erreur: " << e.what() << std::endl;
        return 1; // Termine avec un code d'erreur
    }

    return 0; // Succès
}

```