import matplotlib.pyplot as plt
import numpy as np
# Essayer d'importer la fonction de spline de scipy pour une courbe plus lisse
try:
    from scipy.interpolate import make_interp_spline
    use_spline = True
except ImportError:
    use_spline = False
    print("Attention : Scipy n'est pas installé. Utilisation d'une interpolation linéaire simple (courbe moins lisse).")
    print("Pour une meilleure courbe, installez scipy : pip install scipy")

# --- Données de l'exercice 1 ---
categories_data = {
    "Appareils à coiffer": +17,
    "Appareils d’épilation laser/lumière pulsée": +34,
    "Appareils de balnéothérapie": -24,
    "Appareils de luminothérapie": +5,
    "Appareils de massage": -13,
    "Appareils de soin des cheveux": +12,
    "Appareils de stimulation électrique": -29,
    "Appareils électrocosmétiques": -19
}
marche_global_evolution_valeur = 15

# --- Classification basée STRICTEMENT sur le cours (évolution en valeur) ---
def get_phase(evolution_valeur):
    if evolution_valeur > 10: return "Croissance"
    elif 0 < evolution_valeur <= 10: return "Maturité"
    elif evolution_valeur <= 0: return "Déclin"

categories_phases = {name: get_phase(rate) for name, rate in categories_data.items()}
phase_marche_global = get_phase(marche_global_evolution_valeur)

# --- Points clés définissant la forme "canonique" de la courbe ---
# Choisis pour refléter les changements de pente/concavité attendus
time_points = np.array([0, 1.5, 4,   7,   8.5, 10]) # Temps arbitraires
# Ventes représentatives, créant la forme S + déclin avec un pic clair
sales_points = np.array([0, 5,   55,  70,  65,  45])

# --- Création de la courbe lisse ---
time_smooth = np.linspace(time_points.min(), time_points.max(), 300)

if use_spline:
    # Utilisation de spline cubique pour une courbe lisse et continue
    spl = make_interp_spline(time_points, sales_points, k=3) # k=3 pour cubique
    sales_smooth = spl(time_smooth)
else:
    # Fallback: Interpolation linéaire
    sales_smooth = np.interp(time_smooth, time_points, sales_points)

# Assurer que les ventes ne deviennent pas négatives à cause de l'interpolation
sales_smooth[sales_smooth < 0] = 0

# --- Définition des limites VISUELLES des phases sur l'axe du temps ---
# Ajustées pour correspondre à la forme de la courbe générée par les points clés
t_lancement_fin = 1.5  # Fin de la montée initiale lente
t_croissance_fin = 5.5 # Point où la pente commence à ralentir significativement
t_maturite_fin = 8.0   # Point après le pic (vers 7) où le déclin s'amorce clairement
t_max = 10.0

# --- Création du graphique ---
plt.style.use('seaborn-v0_8-whitegrid') # Style propre
plt.figure(figsize=(13, 7.5)) # Taille légèrement ajustée

title = (f"Cycle de vie produit : catégories Beauty Tech\n"
         f"France H1 2024 vs H1 2023  |  Marché global : {phase_marche_global} ({marche_global_evolution_valeur:+g}%)")
plt.suptitle(title, fontsize=15, weight='bold', y=0.98)  # Titre ancré tout en haut

# Tracer la courbe lissée
plt.plot(time_smooth, sales_smooth, color='dodgerblue', linewidth=2.5, label="Ventes (Valeur représentative)")

# --- Délimiter et nommer les phases ---
y_max_curve = np.max(sales_smooth) # Max de la courbe lisse
y_axis_top_limit = y_max_curve * 1.35 # Espace suffisant en haut
y_label_phases = y_axis_top_limit * 0.96 # Position des labels de phase

# Lignes verticales délimitant les phases
plt.axvline(t_lancement_fin, color='darkgrey', linestyle='--', linewidth=1.2)
plt.axvline(t_croissance_fin, color='darkgrey', linestyle='--', linewidth=1.2)
plt.axvline(t_maturite_fin, color='darkgrey', linestyle='--', linewidth=1.2)

# Labels des phases
plt.text((0 + t_lancement_fin) / 2, y_label_phases, 'Lancement', ha='center', va='bottom', fontsize=11, weight='bold', color='black')
plt.text((t_lancement_fin + t_croissance_fin) / 2, y_label_phases, 'Croissance', ha='center', va='bottom', fontsize=11, weight='bold', color='black')
plt.text((t_croissance_fin + t_maturite_fin) / 2, y_label_phases, 'Maturité', ha='center', va='bottom', fontsize=11, weight='bold', color='black')
plt.text((t_maturite_fin + t_max) / 2, y_label_phases, 'Déclin', ha='center', va='bottom', fontsize=11, weight='bold', color='black')

# --- Positionner les catégories de produits de manière logique ---

# Fonction pour obtenir la position Y exacte sur la courbe pour un X donné
def get_y_on_curve(x_val):
    return np.interp(x_val, time_smooth, sales_smooth)

# Calculer les positions X pour les annotations RELATIVEMENT aux limites de phase
# (ex: 25%, 50%, 75% de la durée de la phase)
positions_x_relative = {
    "Croissance": [0.25, 0.55, 0.85], # Répartis dans la phase Croissance (1.5 -> 5.5)
    "Maturité":   [0.5],           # Centré dans la phase Maturité (5.5 -> 8.0)
    "Déclin":     [0.15, 0.40, 0.65, 0.90] # Répartis dans la phase Déclin (8.0 -> 10)
}

# Convertir les positions relatives en positions X absolues
phase_limits = {"Croissance": (t_lancement_fin, t_croissance_fin),
                "Maturité": (t_croissance_fin, t_maturite_fin),
                "Déclin": (t_maturite_fin, t_max)}

positions_x_absolute = {phase: [] for phase in positions_x_relative}
for phase, rel_pos_list in positions_x_relative.items():
    start, end = phase_limits[phase]
    duration = end - start
    for rel_pos in rel_pos_list:
        positions_x_absolute[phase].append(start + duration * rel_pos)

# Noms abrégés pour les étiquettes
label_mapping = {
    "Appareils à coiffer": "à coiffer", "Appareils d’épilation laser/lumière pulsée": "épilation laser/LP",
    "Appareils de balnéothérapie": "balnéothérapie", "Appareils de luminothérapie": "luminothérapie",
    "Appareils de massage": "massage", "Appareils de soin des cheveux": "soin des cheveux",
    "Appareils de stimulation électrique": "stimulation élec.", "Appareils électrocosmétiques": "électrocosmétiques"
}

index_positions = {"Croissance": 0, "Maturité": 0, "Déclin": 0}
vertical_offset_base = y_max_curve * 0.12 # Offset vertical de base
offset_increment = y_max_curve * 0.08     # Incrément pour éviter superposition

for name, phase in categories_phases.items():
    if phase in positions_x_absolute:
        try:
            idx = index_positions[phase]
            # Utiliser les positions X pré-calculées et logiquement espacées
            x_pos = positions_x_absolute[phase][idx]
            index_positions[phase] += 1

            # Obtenir la position Y exacte sur la courbe
            y_pos = get_y_on_curve(x_pos)

            # Stratégie d'offset vertical : alterner et augmenter l'écart si nécessaire
            offset_direction = 1 if idx % 2 == 0 else -1
            current_offset = vertical_offset_base + (idx // 2) * offset_increment
            # Ajustement spécifique pour le déclin pour mieux étaler
            if phase == "Déclin": current_offset *= 1.1

            text_y = y_pos + current_offset * offset_direction
            # Garder le texte dans les limites du graphique
            text_y = max(min(text_y, y_axis_top_limit * 0.92), -y_axis_top_limit * 0.05)

            rate = categories_data[name]
            short_name = label_mapping.get(name, name)
            label_text = f"{short_name}\n({rate:+.0f}%)"

            plt.annotate(label_text,
                         xy=(x_pos, y_pos), # Point EXACT sur la courbe
                         xytext=(x_pos, text_y), # Position du texte ajustée
                         fontsize=9.5, # Légèrement plus grand pour clarté
                         ha='center', va='center',
                         arrowprops=dict(arrowstyle="->", color='black', lw=1.0, shrinkA=0, shrinkB=5),
                         bbox=dict(boxstyle="round,pad=0.35", fc="white", ec="darkgrey", lw=0.8, alpha=0.85),
                         zorder=5 # Mettre les annotations au premier plan
                        )

        except IndexError:
            print(f"Attention : Plus de produits dans la phase '{phase}' que de positions X prédéfinies. Le produit '{name}' n'est pas affiché.")
        except Exception as e:
             print(f"Erreur lors de l'annotation de '{name}': {e}")

# --- Finalisation du graphique ---
plt.xlabel("Temps / Stades du cycle de vie", fontsize=12)
plt.ylabel("Ventes (niveau représentatif)", fontsize=12)

# Masquage des éléments superflus pour un look épuré "professionnel"
plt.grid(False) # Pas de grille
plt.xticks([])  # Pas de graduation en X (les phases suffisent)
plt.yticks([])  # Pas de graduation en Y (échelle arbitraire)
# Retirer les bordures sauf celle du bas
plt.gca().spines['top'].set_visible(False)
plt.gca().spines['right'].set_visible(False)
plt.gca().spines['left'].set_visible(False)
# Garder l'axe X visible
plt.gca().spines['bottom'].set_linewidth(1.2)
plt.gca().spines['bottom'].set_color('black')

# Note de bas de page simplifiée
footnote = ("Phases définies selon l'évolution annuelle en valeur : >10% Croissance, >0 à 10% Maturité, ≤0% Déclin.\n"
            "Courbe illustrative, positions indicatives. Source : NielsenIQ via LSA n°2813.")
plt.figtext(0.5, 0.01, footnote, ha="center", fontsize=9, style='italic', color='black', linespacing=1.3)

plt.tight_layout(rect=[0, 0.07, 1, 0.90]) # Ajuster pour titre espacé et note courte
plt.show()

# Pour sauvegarder (format vectoriel PDF recommandé pour qualité max)
# plt.savefig("cycle_vie_beauty_tech_precis.pdf")
# plt.savefig("cycle_vie_beauty_tech_precis.png", dpi=300)