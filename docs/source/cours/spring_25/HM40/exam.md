# Cheat Sheet HM40 - Anticipation Examen

## I. Fondements Théoriques et Cognitifs

### 1. Conception Centrée Utilisateur (CCU)

| Concept | Description | Justification / Nécessité | Argument Ontologique |
|---|---|---|---|
| **Définition** | Paradigme de conception qui place les besoins, les capacités et les limites des utilisateurs finaux au centre de chaque étape du processus de développement (analyse, conception, évaluation). | - Améliore l'utilisabilité, l'utilité, l'acceptabilité. <br> - Réduit les erreurs d'utilisation, les coûts de formation/support. <br> - Augmente la satisfaction et la productivité de l'utilisateur. | L'utilisateur EST le centre du système interactif. Le système n'existe que PAR et POUR l'utilisateur. Sans utilisateur, l'IHM n'a pas de raison d'être. |
| **Processus typique** | 1. Comprendre le contexte d'usage. <br> 2. Spécifier les exigences utilisateur. <br> 3. Produire des solutions de conception. <br> 4. Évaluer les solutions (itératif). | - Permet d'éviter de concevoir un système basé sur les suppositions des concepteurs. | - |

**Questions d'examen typiques :**
*   **Sujet 2021, Q1**: "La conception « centrée utilisateur » est un paradigme essentiel dans le développement des IHM. Expliquez en quoi cela consiste et justifier de sa nécessité. Pour aller plus vite, on pourra utiliser un argument ontologique qui place l’utilisateur effectivement au centre du système."

**Fréquence estimée**: Fréquent (explicitement une fois, mais fondamental pour de nombreuses questions de conception/critique).
<div style="page-break-before: always;"></div>

### 2. Modèle du Processeur Humain (MHP) - Mémoire

| Type de Mémoire | Caractéristiques Spécifiques (vs Ordinateur) | Capacité | Durée | Simulation Logicielle & Exemples |
|---|---|---|---|---|
| **Mémoire Sensorielle (Iconique, Échoïque)** | Tampon brut, pré-attentif, spécifique à la modalité. | Grande (quasi-totalité du champ sensoriel). | Très courte (<1s pour iconique, 2-4s pour échoïque). | - **Effets visuels de persistance rétinienne** (ex: animations fluides >24fps). <br> - **Systèmes de reconnaissance vocale** qui peuvent avoir besoin de "retenir" le son brut un court instant. |
| **Mémoire de Travail (MDT) / Court Terme** | Capacité limitée, sensible aux interférences, nécessite répétition/encodage. Contient infos activées. | Limitée (7 +/- 2 chunks d'information). | Courte (15-30s sans répétition). | - **Limitation du nombre d'options visibles simultanément** (menus courts). <br> - **Affichage temporaire d'infos contextuelles** (tooltips). <br> - **Applications qui rappellent des actions récentes** (historique court). |
| **Mémoire à Long Terme (MLT)** | Capacité virtuellement illimitée, structurée sémantiquement, encodage/récupération complexes. | Vaste, quasi-illimitée. | Potentiellement toute la vie. | - **Systèmes d'aide à la mémorisation** (ex: Anki, cartes flash). <br> - **Bases de connaissances** avec structures sémantiques (ontologies). <br> - **Systèmes de recommandation** basés sur l'historique long. |
| **Différences Clés avec Ordinateur** | - Humaine: associative, contextuelle, faillible, reconstructive. <br> - Ordinateur: adressable, précise, littérale. | - | - | - |

**Questions d'examen typiques :**
*   **Sujet 2021, Q2**: "Selon le modèle du « processeur humain » la mémoire humaine possède des caractéristiques spécifiques qui la différencient de la mémoire d’un ordinateur du marché. Préciser ces caractéristiques. Peut-on implémenter et simuler ce type fonctionnement dans des applications logicielles. Donner des exemples."

**Fréquence estimée**: Occasionnel.
<div style="page-break-before: always;"></div>

### 3. Perception et Gestalt

| Concept | Description | Principes de la Gestalt Applicables | Exemple Figure (Sujet 2021) |
|---|---|---|---|
| **Perception Structurée** | La perception n'est pas un enregistrement passif mais une organisation active des stimuli sensoriels en formes signifiantes (Gestalts). | - **Loi de Clôture**: Tendance à percevoir des formes complètes même si elles sont incomplètes. <br> - **Loi de la Bonne Forme (Prégnance)**: Les éléments sont perçus comme appartenant aux formes les plus simples et stables possibles. <br> - **Figure/Fond**: Tendance à distinguer une figure principale se détachant d'un fond. | La figure (non fournie ici, mais typiquement un vase de Rubin ou des formes ambiguës) illustre ces principes. Par exemple, si c'est le vase de Rubin : <br> - On voit soit un vase (figure) et deux profils (fond), soit l'inverse. <br> - Notre cerveau "clôt" les lignes pour former le vase ou les profils. |
| **Intentionnalité de la perception** | La perception est dirigée vers quelque chose, elle a un objet. Ce que nous voyons dépend de nos attentes, de notre attention. | - | "Que *voyez-vous*?" implique une interprétation active. |

**Principaux Principes de la Gestalt :**
*   **Proximité**: Éléments proches perçus comme un groupe.
*   **Similarité**: Éléments semblables perçus comme un groupe.
*   **Continuité**: L'œil suit les lignes/courbes continues.
*   **Clôture**: Tendance à compléter les formes.
*   **Destin Commun**: Éléments se déplaçant dans la même direction perçus comme un groupe.
*   **Figure/Fond**: Distinction d'un objet principal sur un arrière-plan.
*   **Prégnance (Bonne Forme)**: Perception de la structure la plus simple/cohérente.

**Questions d'examen typiques :**
*   **Sujet 2021, Q3**: "La perception est structurée et relève de l’intentionnalité. Par exemple, « que » voyez-vous sur la figure suivante : [...] Préciser quels principes de la Gestalt sont applicables à cette perception."
*   **Sujet 2023, Q4**: "Donner un arbre de structure pour respectivement les cas a) et b) ci-dessous. Préciser le sujet pragmatique s’il existe. Quelle propriété visuelle fait la différence ici ?" (Les propriétés visuelles sont souvent expliquées par la Gestalt)
*   **Sujet 2022, Q9**: "Donner un arbre de structure pour respectivement les cas a) et b) ci-dessous. Préciser le sujet pragmatique s’il existe. Quelle propriété visuelle fait la différence ici ?" (Idem)
*   **Sujet 2025, Ex6 Q1**: "Donner un diagramme de structure pour la figure a). Quel attribut domine, expliquez."

**Fréquence estimée**: Très fréquent (souvent lié à l'analyse de structure d'écran).
<div style="page-break-before: always;"></div>

### 4. Métaphores en IHM

| Type de Métaphore | Domaine Source (Connu) | Domaine Cible (Nouveau/Abstrait) | Relation | Exemple Application | Problème Potentiel |
|---|---|---|---|---|---|
| **Structurelle** | Organisation spatiale (ex: bureau physique) | Organisation de l'OS/Application | Organisation, actions possibles | Bureau (Desktop) avec dossiers, fichiers, corbeille. | Inadéquation (ex: corbeille ne se remplit pas physiquement), limitations (on ne peut pas "jeter" un fichier par la fenêtre). |
| **Fonctionnelle** | Objet connu et sa fonction (ex: ciseaux) | Fonction logicielle (ex: couper du texte) | Similitude de fonction | Icône "ciseaux" pour "Couper", "pinceau" pour "Formater". | La fonction peut être plus complexe ou différente (ex: couper/coller vs. couper du papier). |
| **Organisationnelle** | Structure d'une organisation (ex: hiérarchie d'une entreprise) | Structure de données/navigation | Hiérarchie, flux | Systèmes de fichiers arborescents, menus déroulants. | Rigidité, ne reflète pas toujours la meilleure organisation pour l'utilisateur. |
| **Relationnelle / De Processus** | Processus du monde réel (ex: faire ses courses) | Processus logiciel (ex: e-commerce) | Séquence d'étapes, interactions | Panier d'achat virtuel, étapes de commande. | Peut masquer des étapes techniques ou induire des attentes erronées sur le processus réel. |
| **Visuelle (Iconique)** | Apparence d'un objet (ex: une enveloppe) | Représentation d'une fonction/donnée (ex: email) | Ressemblance visuelle | Icône d'enveloppe pour Email, loupe pour Recherche. | Compréhension culturelle, ambiguïté, abstraction (disquette pour "Sauvegarder"). |

**Problème général des métaphores**:
*   **Incomplétude**: La métaphore ne couvre jamais totalement le domaine cible.
*   **Incohérence**: Certains aspects de la source contredisent le cible.
*   **Limitations**: Peut brider l'innovation en restant trop collé à la source.
*   **Culturelle**: Peut ne pas être comprise universellement.

**Questions d'examen typiques :**
*   **Sujet 2021, Q4**: "L’usage des métaphores est très fréquent [...] Citer 4 types de métaphores que vous pouvez rencontrer soit dans les logiciels, soit dans des méthodes de conception ? rappeler domaine source et domaine cible et leur relation. Quel problème peut induire la métaphore ?"

**Fréquence estimée**: Occasionnel.
<div style="page-break-before: always;"></div>

### 5. Conditions de Satisfaction (CdS)

| Concept | Description | Exemple: Portier Humain | Exemple: Cellule Photo-électrique |
|---|---|---|---|
| **CdS d'une fonction** | Ensemble des critères qui doivent être remplis pour que la fonction soit considérée comme accomplie avec succès, du point de vue de l'objectif visé. | **Fonction**: Assurer l'accès contrôlé et l'accueil. <br> **CdS**: <br> - Porte s'ouvre pour les clients autorisés. <br> - Porte reste fermée pour les non-autorisés. <br> - Clients accueillis poliment. <br> - Flux de passage fluide. <br> - Sécurité assurée (pas d'intrusion). <br> - Information donnée si besoin. | **Fonction**: Ouvrir/fermer la porte automatiquement. <br> **CdS**: <br> - Porte s'ouvre si détection de mouvement/présence dans la zone définie. <br> - Porte se ferme après un délai sans détection. <br> - Sécurité (ne pas coincer qqn). <br> - Fiabilité de la détection. |
| **CdS d'une action** | Ensemble des états du monde qui doivent être atteints pour que l'action soit considérée comme réussie par l'agent qui l'exécute, en accord avec son intention. | Action: "Enfoncer un clou avec un marteau" <br> Intention: Fixer deux planches. <br> CdS: <br> - Le clou est entièrement enfoncé. <br> - Les planches sont solidement fixées. <br> - Le bois n'est pas fendu. <br> - Le clou est droit. | - |

**Questions d'examen typiques :**
*   **Sujet 2021, Q5**: "La notion de fonction comporte des conditions de satisfaction. Quels sont les conditions de satisfaction de la fonction de « portier d’un grand magasin » ? [...] Supposez qu’on remplace le portier humain par un mécanisme de cellule photo-électrique. Quelles sont les conditions de satisfaction de la fonction implémentée ?"
*   **Sujet 2021, Q7**: "Essayez de justifier cette règle [retour d'information] en se fondant sur la théorie de l’action, en montrant en quoi ce besoin est implicite dans les conditions de satisfaction de l’action, après avoir rappelé en quoi elles consistent."
*   **Sujet 2023, Q1 (partiel)**: "Quel état mental est indissociable d’une action en général ? Expliciter les conditions de satisfaction de l’action « enfoncer un clou avec un marteau »."

**Fréquence estimée**: Fréquent.
<div style="page-break-before: always;"></div>

### 6. Perception et Capteurs

| Terme | Interprétation dans "une action physique perçue est un acte capté par un dispositif physique d’entrée" (pour la cellule photo-électrique) | Conclusion |
|---|---|---|
| **"Perception" du capteur** | Il ne s'agit pas d'une perception réelle au sens humain (avec conscience, interprétation sémantique, etc.). C'est une **détection** : le capteur réagit à un stimulus physique (variation de lumière, coupure de faisceau) pour lequel il est conçu. Il convertit ce stimulus en un signal (électrique). | Le mot "perception" est utilisé ici par **analogie** ou de manière **métaphorique**. Il s'agit d'une "perception relative à l'observateur/concepteur" qui a attribué une signification à l'état du capteur. <br> **Ce dont il s'agit**: Une transduction d'un phénomène physique en un signal interprétable par le système. L'interprétation (la "sémantique" de l'action) est assignée par le concepteur du système. |

**Questions d'examen typiques :**
*   **Sujet 2021, Q6**: "Reprenons la cellule photo-électrique du point précédent, comment interpréter le sens du mot « perception » dans ce cas ? S’agit-il d’une perception réelle du capteur ? quelle conclusion en tirer ? Sinon, expliciter ce dont il s’agit."
*   **Sujet 2023, Q1 (partiel)**: "Dans quelle mesure peut-on dire qu’un ordinateur numérique avec ses périphériques et son programme « perçoit » les actions utilisateur, puis « réfléchit » et « agit » en conséquence. Ce vocabulaire est-il trompeur ? de quoi s’agit-il ? quelle débat cela pose-t-il ?"

**Fréquence estimée**: Fréquent.
<div style="page-break-before: always;"></div>

### 7. Retour d'Information (Feedback) et Théorie de l'Action

*   **Théorie de l'Action (simplifiée)**: Une action est initiée par une **intention** (but à atteindre). L'exécution de l'action vise à faire passer le monde d'un état initial à un état final désiré, qui correspond aux **Conditions de Satisfaction (CdS)** de l'action.
*   **Rôle du Feedback**:
    1.  **Indiquer que l'action a été prise en compte** (le système a "entendu").
    2.  **Montrer l'état actuel du système** suite à l'action.
    3.  **Permettre à l'utilisateur d'évaluer si ses CdS sont en train d'être atteintes** ou ont été atteintes.
    4.  **Permettre de corriger/ajuster l'action** si l'état n'est pas celui attendu (boucle de contrôle).
*   **Justification du besoin de feedback en temps réel**: Si le feedback est différé ou absent, l'utilisateur ne peut pas savoir si son action a eu l'effet escompté, s'il doit attendre, ou s'il doit agir différemment. Cela brise la boucle d'interaction et rend difficile l'atteinte des CdS. Le "temps réel" est relatif à la tolérance humaine pour la tâche (cf. temps de réponse de Miller).

**Questions d'examen typiques :**
*   **Sujet 2021, Q7**: "Le retour d’information en temps réel est essentiel comme critère d’ergonomie [...]. Essayez de justifier cette règle en se fondant sur la théorie de l’action, en montrant en quoi ce besoin est implicite dans les conditions de satisfaction de l’action, après avoir rappelé en quoi elles consistent."
*   **Sujet 2021, Ex. Conception Q1**: "Le collègue vous fournit dans un premier une fonction de type boite noire [...]. Quel problème spécifique cette première approche pose-t-elle au concepteur de l’interface graphique ?" (Le problème est le manque de feedback en temps réel).

**Fréquence estimée**: Fréquent.
<div style="page-break-before: always;"></div>

### 8. Subjectif / Objectif & Intentionnalité

| Distinction | Description | Exemples |
|---|---|---|
| **Jugement épistémiquement subjectif / Entité ontologiquement objective** | Jugement basé sur une opinion personnelle, une préférence, à propos de quelque chose qui existe indépendamment de l'esprit. | Entité: Une chaise (existe réellement). Jugement: "Cette chaise est inconfortable" (dépend de qui s'assoit). "Ce site web est moche." |
| **Jugement épistémiquement objectif / Entité ontologiquement subjective** | Jugement basé sur des faits vérifiables, à propos de quelque chose qui n'existe que dans l'esprit ou par convention. | Entité: Une douleur (ressentie par qqn). Jugement: "Jean dit qu'il a mal à la tête" (c'est un fait qu'il le dit). "Ce personnage de jeu vidéo est populaire." (popularité mesurable). |
| **Intentionnalité Intrinsèque** | Capacité d'un système à avoir ses propres buts, états mentaux (croyances, désirs) de manière inhérente, non dérivée. (Débattu pour les IA). Critère: autonomie de la finalité. | Humains > Animaux supérieurs (primates) > Animaux (chien). |
| **Intentionnalité Relative (ou dérivée)** | Capacité d'un système à manifester des comportements orientés vers un but, mais ces buts/états mentaux sont assignés par un agent extérieur (concepteur, utilisateur). Critère: finalité assignée. | Thermostat (maintenir T°) > Porte automatique (ouvrir/fermer) > Programme "Hello World" (afficher texte). |
| **Entité virtuelle** | Ontologie: Existe en tant qu'information, structure de données, ou simulation dans un système informatique. Sa "réalité" est celle d'une construction logique et informationnelle. Elle est **réelle en tant qu'entité virtuelle**, produisant des effets dans le monde virtuel et parfois physique (via des actionneurs). Elle n'a pas de substantialité physique propre en dehors de son support matériel. | Un avatar dans un jeu, un fichier sur un disque. |
| **État mental indissociable d'une action** | **L'intention**. Une action est un comportement dirigé par un but, une intention de produire un certain résultat. Sans intention, c'est un simple mouvement ou réflexe. | Enfoncer un clou: intention de fixer. |

**Questions d'examen typiques :**
*   **Sujet 2022, Q2**: "(a) Donner un exemple de jugement épistémiquement subjectif portant sur une/des entités ontologiquement objectives. (b) Donner un exemple de jugement épistémiquement objectif portant sur une/des entités ontologiquement subjectives."
*   **Sujet 2022, Q4**: "Donner une liste hiérarchisée de systèmes dits « intelligents » dont les capacités intentionnelles sont manifestement intrinsèques [...]. Donner une liste hiérarchisée de systèmes [...] dont les capacités intentionnelles sont manifestement relatives [...]."
*   **Sujet 2023, Q1**: "Une entité virtuelle est-elle réelle ? dans quelle mesure ? quelle est son ontologie ? Quel état mental est indissociable d’une action en général ? [...] « un marteau a pour but d’enfoncer un clou ». Mais le fait-il avec l’intention de le faire ? pourquoi ? Dans quelle mesure peut-on dire qu’un ordinateur numérique [...] « perçoit » [...] « réfléchit » et « agit » [...]. Expliciter la notion de but en termes d’états mentaux [...]."
*   **Sujet 2025, Ex3 Q1**: "Peut-on être objectif dans ses jugements à propos de la subjectivité de l'utilisateur ? Préciser le sens des mots objectif/subjectif..."
*   **Sujet 2025, Ex3 Q2**: "Une entité virtuelle est-elle réelle ? quelle est son ontologie ?"
*   **Sujet 2025, Ex3 Q3**: "Quel état mental est indissociable d’une action en général ?"

**Fréquence estimée**: Très fréquent.
<div style="page-break-before: always;"></div>

### 9. Rôle du Contexte et Sémantique

*   **Phrase type**: "Il lui a donné la clé et il a ouvert la porte."
    *   **Interprétation normale (arrière-plan commun)**: "Il" (personne 1) a donné une clé (pour cette porte) à "lui" (personne 2), et "il" (personne 2, ou la personne 1 après avoir récupéré la clé) a utilisé CETTE clé pour ouvrir CETTE porte.
    *   **Autres interprétations (changement de contexte/arrière-plan)**:
        *   La clé n'est pas pour cette porte (clé de voiture, porte de maison).
        *   "Ouvrir la porte" est une métaphore (ouvrir une opportunité).
        *   "Il" (1) donne la clé à "Lui" (2), et "Il" (1) ouvre la porte par un autre moyen (bouton, coup de pied).
*   **Sémantique intrinsèque vs. relative à l'observateur**: La sémantique (le sens) n'est pas purement intrinsèque à la syntaxe (la structure grammaticale). Elle émerge de l'interaction entre la syntaxe, le contexte d'énonciation, et les connaissances/attentes de l'observateur (ou de l'auditeur/lecteur).

**Questions d'examen typiques :**
*   **Sujet 2022, Q3**: "Expliciter à l’aide d’exemples en quoi la sémantique d’une phrase dépend d’un arrière-plan de présupposés relatifs au contexte d’énonciation de la phrase. On prendra l’exemple de la phrase discutée en cours : « Il lui a donné la clé et il a ouvert la porte. ». On indiquera l’interprétation normale, et d’autres interprétations possibles. La sémantique est-elle intrinsèque à la syntaxe ou relative à l’observateur ?"

**Fréquence estimée**: Occasionnel.
<div style="page-break-before: always;"></div>

### 10. Syntaxe / Sémantique en IHM (et PAC)

| Niveau | Description | En IHM | Dans PAC |
|---|---|---|---|
| **Syntaxe** | Règles de formation des expressions, structure, agencement des éléments. Comment les choses sont dites/montrées. | Agencement des widgets, ordre des opérations, grammaire d'interaction (ex: sélectionner objet PUIS action). | **Présentation**: Gère l'affichage (widgets) et les entrées brutes (clics, frappes). C'est la syntaxe de l'interaction. |
| **Sémantique** | Signification, interprétation des expressions. Ce que les choses veulent dire. | Ce que l'utilisateur comprend de l'interface, la signification des icônes, l'effet des commandes. | **Abstraction**: Contient le "métier" ou la logique applicative. C'est le noyau fonctionnel qui donne du sens aux actions. **Contrôle**: Fait le lien, traduit les actions syntaxiques en commandes sémantiques pour l'Abstraction, et les résultats de l'Abstraction en feedback pour la Présentation. |

**Questions d'examen typiques :**
*   **Sujet 2022, Q5**: "En quoi la distinction syntaxe/sémantique intervient-elle en conception d’IHM ? dans le modèle PAC par exemple ? Expliquer à quel niveau, comment."
*   **Sujet 2025, Ex4**: "Mettre en évidence la décomposition entre niveaux physiques/syntaxiques/sémantiques."

**Fréquence estimée**: Fréquent.
<div style="page-break-before: always;"></div>

### 11. Distinction Action / Activité

| Modèle | Distinction | Exemple |
|---|---|---|
| **SADT** | - **Activité (Boîte)**: Transformation de données/matière, représente une fonction ou une tâche globale. Peut être décomposée. <br> - **Action (Flèche de Mécanisme/Support)**: Ressource ou agent qui réalise l'activité. <br> - **Action (Flèche de Contrôle)**: Contrainte ou événement qui déclenche/régule l'activité. <br> (Note: Le terme "action" est moins formel pour les flux de données I/O, mais une activité est un ensemble d'opérations/actions élémentaires). | Activité: "Rédiger un email". <br> Mécanisme: "Utilisateur", "Clavier". <br> Contrôle: "Demande d'envoi nouveau message". |
| **Modèle du Cycle d'Interaction de Norman** | Une tâche globale (but) est décomposée en intentions, séquences d'actions (opérations physiques), exécution. L'activité est plus large, la tâche est un but spécifique, l'action est l'opération élémentaire. | Activité: "Gérer ses finances". Tâche: "Payer une facture". Action: "Cliquer sur 'Valider'". |

**Questions d'examen typiques :**
*   **Sujet 2022, Q6**: "Quel modèle graphique semi-formel en conception d’IHM fait-il une distinction tranchée entre action et activité. Préciser en quoi et comment. Donner un exemple." (SADT est une réponse attendue).

**Fréquence estimée**: Occasionnel.
<div style="page-break-before: always;"></div>

### 12. Effet Stroop & Hiérarchie Attributs Visuels

*   **Effet Stroop**: Tâche: Nommer la couleur de l'encre d'un mot.
    *   Si mot = nom de couleur congruent (ex: "ROUGE" écrit en rouge) -> Rapide.
    *   Si mot = nom de couleur incongruent (ex: "BLEU" écrit en rouge) -> Plus lent, erreurs.
    *   **Montre**: La lecture du mot (sémantique) est un processus plus automatisé et interfère avec la tâche de nommer la couleur (attribut visuel). Compétition entre traitement du texte et traitement de la couleur.
*   **Hiérarchie impact perceptif des attributs visuels (général, peut varier avec contexte/tâche)**:
    1.  **Couleur** (très prégnante, pop-out effect).
    2.  **Forme** (contours, structure globale).
    3.  **Texture** (micro-structure de surface).
    *   *Note*: Pour la recherche d'icônes (Exercice 6, 2025), si les icônes sont petites et nombreuses, la couleur peut aider à un premier tri, mais la forme distinctive devient cruciale pour l'identification finale. Si toutes les icônes ont des formes similaires, la couleur peut devenir le discriminateur principal.

**Questions d'examen typiques :**
*   **Sujet 2022, Q7**: "Que tend à montrer l’effet Stroop relatif à la compétition écrit/couleur."
*   **Sujet 2022, Q8**: "Compétition forme/texture/couleur. Ordonner ces attributs visuels selon leur impact niveau perception."
*   **Sujet 2025, Ex6 Q1**: "...figure a) couleur et forme combinées [...] Quel attribut domine, expliquez."

**Fréquence estimée**: Fréquent.
<div style="page-break-before: always;"></div>

### 13. Cycle des Activités Mentales et Physiques (Interaction HM)


@startuml
skinparam actorStyle awesome
actor Utilisateur as U

rectangle "Système Informatique" as S {
  rectangle "Interface (Écran, Périphériques)" as I
  rectangle "Logique Applicative" as L
}

U --> I : Action Physique (Ex: clic souris, frappe clavier)\n<size:10>[Niveau Physique]</size>
I --> L : Entrée (Signal, Événement)\n<size:10>[Niveau Syntaxique]</size>
L --> L : Traitement (Réflexion du système)\n<size:10>[Niveau Sémantique (interne)]</size>
L --> I : Sortie (Affichage, Son)\n<size:10>[Niveau Syntaxique]</size>
I --> U : Perception (Visuelle, Auditive)\n<size:10>[Niveau Physique]</size>

note right of U
  **États Mentaux Utilisateur:**
  1. **But / Objectif** (Ex: "Envoyer un email")
  2. **Intention d'action** (Ex: "Cliquer sur 'Nouveau Message'")
  3. **Planification de la séquence d'actions**
  4. **Exécution de l'action physique** (voir flèche U -> I)
  5. **Perception du feedback** (voir flèche I -> U)
  6. **Interprétation du feedback** (Donne du sens)\n<size:10>[Niveau Sémantique (utilisateur)]</size>
  7. **Évaluation** (But atteint? CdS ok?)
end note

note top of S : La qualité d'IHM facilite la traduction\nentre les buts de l'utilisateur et les actions\nphysiques, et l'interprétation du feedback\npour minimiser la charge cognitive ("Golfe\nd'exécution" et "Golfe d'évaluation").
@enduml

**Rôle d'une IHM de qualité**: Minimiser les "golfes" (Norman):
*   **Golfe de l'exécution**: Difficulté à traduire l'intention de l'utilisateur en actions que le système comprend.
*   **Golfe de l'évaluation**: Difficulté à interpréter l'état du système et à déterminer s'il correspond au but et aux intentions de l'utilisateur.
L'IHM doit rendre les actions possibles **visibles**, fournir un **feedback clair et immédiat**, et utiliser des **mappings naturels** entre actions et effets.

**Questions d'examen typiques :**
*   **Sujet 2025, Ex4**: "Présenter par un schéma simple le cycle des activités mentales et physiques en jeu dans l'accomplissement d'une tâche avec ordinateur/écran/clavier/souris. Mettre en évidence les états mentaux, les actions physiques, les perceptions et l'interprétation. Mettre en évidence la décomposition entre niveaux physiques/syntaxiques/sémantiques. Que doit faciliter la réalisation d'une interface de qualité vis-à-vis du modèle proposé."

**Fréquence estimée**: Occasionnel (pour le schéma explicite), mais le concept est fondamental et Fréquent.
<div style="page-break-before: always;"></div>

### 14. Philosophie de la Perception

| Thèse | Description | Schéma (conceptuel) | Arguments / Objections |
|---|---|---|---|
| **Réalisme Direct** | Nous percevons directement les objets du monde tels qu'ils sont, sans intermédiaire. L'expérience visuelle EST l'objet. | Percevant <-> Objet | **Arg**: Simplicité, correspond à l'expérience naïve. <br> **Obj**: Illusions, hallucinations, différences interindividuelles, perception des couleurs (dépend de l'observateur). |
| **Thèse Représentative (Réalisme Indirect)** | Nous percevons des représentations mentales (données sensibles, "sense-data") des objets, causées par les objets externes. | Percevant <-> [Expérience Visuelle / Donnée Sensible] <--(causé par)-- Objet | **Arg**: Explique illusions (la représentation est faussée), rêves, variations. <br> **Obj**: "Voile de la perception" (comment savoir si la représentation est fidèle à l'objet réel si on n'accède jamais à l'objet directement?), risque de scepticisme. |
| **Phénoménalisme (ou Idéalisme)** | Les objets physiques n'existent pas indépendamment de l'expérience perceptive. Être, c'est être perçu (Berkeley). Ce que nous percevons SONT les données sensibles. | Percevant <-> [Expérience Visuelle / Donnée Sensible] (Objet = collection de données sensibles) | **Arg**: Évite le problème du lien entre représentation et objet réel. Cohérence logique. <br> **Obj**: Contre-intuitif (quid des objets non perçus?), solipsisme (seul mon esprit existe). |

**Questions d'examen typiques :**
*   **Sujet 2025, Ex2**: "Trois grandes approches philosophiques traditionnelles de la perception sont la thèse du réalisme direct, la thèse représentative, et le phénoménalisme. Expliquer brièvement en quoi consistent ces trois thèses et en quoi elles diffèrent l'une de l'autre. On pourra illustrer chaque cas par un schéma simple [...]. Indiquer quelles sont les arguments et objections [...]."

**Fréquence estimée**: Occasionnel.
<div style="page-break-before: always;"></div>

## II. Méthodes d'Analyse et Évaluation

### 1. Structuration d'Écran ("Structuring the Display")

*   **Objectif**: Analyser comment l'information est organisée visuellement sur un écran pour s'assurer qu'elle est facilement perceptible, compréhensible et qu'elle guide l'attention de l'utilisateur de manière logique. Identifier les groupements, les hiérarchies et les points focaux.
*   **Comment l'appliquer**:
    1.  Identifier les **unités d'information** de base (textes, icônes, images, champs).
    2.  Regrouper ces unités en **blocs fonctionnels ou sémantiques** (ex: zone de navigation, zone de contenu, zone d'actions).
    3.  Représenter ces regroupements sous forme d'un **arbre de structure** (ou diagramme d'emboîtement). La racine est l'écran entier.
    4.  Identifier le(s) **sujet(s) pragmatique(s)**: l'élément ou le bloc principal sur lequel l'attention de l'utilisateur est (ou devrait être) focalisée à un instant T pour accomplir sa tâche. Souligner ou marquer ce sujet dans l'arbre.
    5.  Analyser la **cohérence** entre la structure visuelle et la structure logique de la tâche.
*   **Diagramme de Structure (Exemple générique)**:
    
    Écran
    └── Zone Principale (Sujet Pragmatique)
        ├── Titre
        ├── Contenu
        │   ├── Paragraphe 1
        │   └── Image
        └── Boutons d'action
            ├── OK
            └── Annuler
    └── Barre Latérale
        ├── Menu Item 1
        └── Menu Item 2
    
*   **Diagramme de Transition (pour séquences d'écrans ou d'images)**: Indique comment le sujet pragmatique (focus attentionnel) évolue d'un état de l'interface à un autre.
    
    @startuml
    state "Écran 1 (Image A1)" as S1 {
      [*] --> Titre_Principal (Sujet)
    }
    state "Écran 2 (Image A2)" as S2 {
      [*] --> Détail_Image (Sujet)
    }
    S1 --> S2 : Clic sur Élément_X
    note on link: Transition du focus de Titre vers Détail
    @enduml
    
    Une séquence est plus judicieuse si la transition du sujet pragmatique est fluide, logique, et minimise la re-focalisation ou la recherche visuelle. Par exemple, si l'élément cliqué en A1 devient le sujet central de A2, ou est proche du nouveau sujet.

*   **Application (Exemple Erreur Navigateur 1 vs 2 - Sujet 2021)**
    *   **Nav1 (typiquement laconique)**:
        
        Fenêtre Erreur Nav1
        └── Message Principal (Sujet Pragmatique)
            ├── Titre Erreur (ex: "Connexion échouée")
            └── Description Technique (ex: "ERR_CONNECTION_REFUSED")
        
        Défaut: Peu d'info utile, pas d'aide.
    *   **Nav2 (plus informatif)**:
        
        Fenêtre Erreur Nav2
        └── Zone Contenu (Sujet Pragmatique)
            ├── Titre Erreur Clair (ex: "Ce site est inaccessible")
            ├── Message Principal (ex: "Impossible de trouver l'adresse IP...")
            ├── Suggestions (Sujet Pragmatique Secondaire)
            │   ├── Vérifier connexion
            │   ├── Vérifier proxy/pare-feu
            │   └── Exécuter diagnostics
            └── Bouton (ex: "Actualiser")
        
        Amélioration: Plus clair, suggestions d'actions, sujet pragmatique plus riche et orienté solution. Transition: de "constat d'échec" (Nav1) à "aide à la résolution" (Nav2).

**Questions d'examen typiques :**
*   **Sujet 2021, Ex. Structure d’écran**: "Commentez selon les principes de la structuration d’écran des deux affichages [...]. Donner les diagrammes de structure des écrans et préciser les sujets pragmatiques. Indiquer à l’aide de transitions l’intérêt des modifications [...]."
*   **Sujet 2022, Q9**: "Donner un arbre de structure pour respectivement les cas a) et b) ci-dessous. Préciser le sujet pragmatique s’il existe."
*   **Sujet 2022, Q10 (Critique d'interface)**: "Donner un diagramme de structure du popup en soulignant le(s) sujet(s) pragmatique(s)."
*   **Sujet 2023, Q4**: "Donner un arbre de structure pour respectivement les cas a) et b) ci-dessous. Préciser le sujet pragmatique s’il existe."
*   **Sujet 2023, Q6 (Critique d'interface)**: "Proposer un arbre de structure pour chacun d’eux, indiquer le/les sujets pragmatiques. Indiquez le graphe de transition [...]."
*   **Sujet 2025, Ex1 Q1**: "Expliquez de façon synthétique [...] la méthode d'analyse des structurations d'écran "structuring the display" objectif et comment l'appliquer."
*   **Sujet 2025, Ex5**: "Donner les diagrammes de structure des deux images de chaque séquence A et B, en entourant spécifiquement la succession des sujets d'attention induite par la succession des images. Donner un diagramme de transition."
*   **Sujet 2025, Ex6 Q1 & Q2**: "Donner un diagramme de structure pour la figure a). [...] Donner un diagramme de structure (commenté) permettant de faire ressortir la différence entre les deux types de représentation [b et c]."

**Fréquence estimée**: Très fréquent.
<div style="page-break-before: always;"></div>

### 2. Keystroke Level Model (KLM) - Part of GOMS

*   **Objectif**: Prédire le temps d'exécution d'une tâche par un utilisateur expert, sans erreurs, en décomposant la tâche en une séquence d'opérateurs physiques et mentaux élémentaires. Utile pour comparer des méthodes d'interaction.
*   **Comment l'appliquer**:
    1.  **Coder la méthode**: Décrire la séquence d'actions de l'utilisateur avec les opérateurs KLM.
    2.  **Insérer les opérateurs M (mentaux)**: Placer les 'M' avant chaque étape cognitivement distincte (initiation, décision, recherche d'info, etc.). Heuristiques pour placer les M (voir tableau).
    3.  **Attribuer les temps**: Utiliser les temps standards pour chaque opérateur.
    4.  **Sommer les temps**: Calculer le temps total.
    5.  **Comparer**: Comparer les temps de différentes méthodes.

*   **Opérateurs et Temps Standards (peuvent varier légèrement)**:
    | Opérateur | Description | Temps (ms) |
    |---|---|---|
    | **K** | Frappe au clavier (touche, clic souris) | 200 (varie de 80 expert à 1200 débutant) |
    | **P** | Pointer (souris/doigt vers cible) | 1100 (dépend de la loi de Fitts, moyenne) |
    | **H** | "Homing" (déplacer main entre clavier/souris) | 400 |
    | **M** | Préparation Mentale (penser, décider) | 1200 - 1350 (souvent 1300) |
    | **R(t)** | Réponse du système (attente) | t (spécifique au système) |

*   **Règles d'insertion des M (simplifiées)**:
    *   Devant chaque "unité cognitive" ou "segment" d'actions.
    *   Si une action physique dépend d'une précédente (ex: taper après avoir pointé).
    *   Avant de pointer (P) sur un objet.
    *   Avant de taper une chaîne de caractères.
    *   Avant de localiser une information sur l'écran.

*   **Exemple: Effacer 'p' caractères (Sujet 2021 & 2023)**

    *   **Méthode 1: Touche Suppression 'p' fois**
        1.  Atteindre la fin du texte à supprimer (supposons curseur déjà placé, sinon ajouter P H M)
        2.  Appuyer 'Suppr' p fois.
        *   Codage: `M [p * K]` (si p est petit et l'action est perçue comme un seul bloc)
        *   Alternative si p grand (répétition d'une intention): `M + K (1er) + (p-1) * (M_petit_pour_répéter + K)` mais KLM simplifie souvent à `M + p*K` pour ce genre de tâche répétitive simple, ou on considère une boucle `M + Boucle(p fois)(K)`. Pour rester simple : on place M avant le bloc d'action répétitive.
        *   `T1 = M + p * K`
        *   `T1 = 1300 + p * 200`

    *   **Méthode 2: Sélection Souris + 1 Touche Suppression**
        1.  Prendre la souris.
        2.  Pointer début du texte à supprimer.
        3.  Cliquer et maintenir.
        4.  Glisser jusqu'à la fin du texte.
        5.  Relâcher le clic.
        6.  Ramener main au clavier.
        7.  Appuyer 'Suppr'.
        *   Codage: `M (initier) + H (souris) + M (pointer début) + P (début) + K (clic down) + M (pointer fin) + P (fin, drag) + K (clic up) + M (retour clavier) + H (clavier) + M (suppr) + K (Suppr)`
        *   Simplification KLM courante: Drag = P. Clic down et up sont souvent 1 seul K pour sélection.
        *   Version simplifiée: `M + H(souris) + M + P(début_texte) + K(clic_et_maintenir) + P(fin_texte_en_glissant) + K(relâcher) + H(clavier) + M + K(touche_suppr)`
        *   `T2 = M + H + M + P + K + P + K + H + M + K` (K pour clic début, K pour relâcher fin)
        *   `T2 = 3*M + 2*H + 2*P + 3*K`
        *   `T2 = 3*1300 + 2*400 + 2*1100 + 3*200`
        *   `T2 = 3900 + 800 + 2200 + 600 = 7500 ms`

    *   **Comparaison**:
        *   `T1 = 1300 + 200p`
        *   `T2 = 7500`
        *   Chercher p tel que T1 = T2:
            `1300 + 200p = 7500`
            `200p = 6200`
            `p = 6200 / 200 = 31`
        *   Si p < 31, Méthode 1 (touche suppr répétée) est plus rapide.
        *   Si p > 31, Méthode 2 (sélection souris) est plus rapide.
        *   Si p = 31, temps égaux.
    *   **Conformité à l'expérience**: Oui, c'est assez intuitif. Pour quelques caractères, on utilise Backspace/Delete. Pour un long passage, la sélection est plus efficace. Le seuil de 'p' dépendra des valeurs exactes des opérateurs et de l'habileté de l'utilisateur.

**Questions d'examen typiques :**
*   **Sujet 2021, Ex. Keystroke**: "En vous appuyant sur le modèle GOMS-Keystroke, estimez le temps nécessaire pour la suppression d'un texte de p caractères adjacents et comparer les deux techniques suivant p. Suivez la méthode habituelle : codage, insertion des M, évaluation comparative et numérique."
*   **Sujet 2023, Q2**: "En vous appuyant sur le modèle Goms/Keystroke, estimez le temps nécessaire pour la suppression d'un texte de p caractères adjacents et comparez les 2 méthodes. Suivez l’approche habituelle : codage des méthodes, insertion des M, évaluation comparative et numérique suivant le paramètre p."
*   **Sujet 2025, Ex1 Q2**: "Expliquez de façon synthétique [...] la méthode KEYSTROKE: objectif et comment l'appliquer."

**Fréquence estimée**: Très fréquent.
<div style="page-break-before: always;"></div>

### 3. Vitesse de Suivi du Curseur (Sujet 2023 Q3)

*   Un mouvement de pointage est une succession de micro-mouvements (perception -> ajustement moteur -> action).
*   Si chaque micro-mouvement a une durée fixe T_micro.
*   Loi de Fitts (implicite ici): T = a + b * log2(D/L + 1). Le log2 suggère des étapes de réduction de distance.
*   Hypothèse: x_(i+1)/x_i = 0.1 => à chaque micro-mouvement, on réduit la distance restante d'un facteur 10.
*   Le cycle perception-cognition-action du MHP est de l'ordre de Tp + Tc + Tm = 70ms + 100ms + 50ms = 220 ms (valeurs MHP classiques, peuvent varier). On peut prendre ~200-250ms pour un micro-mouvement simple avec ajustement. Si on prend le cycle de base de la mémoire de travail (environ 100ms pour une opération cognitive simple), ou le temps d'une réaction simple (200ms).
    *   **Estimation durée micro-mouvement**: Souvent estimé autour de **200-250 ms** pour un cycle complet de correction (voir MHP). Le sujet ne donne pas de valeur, il faut l'estimer ou la rappeler.
*   **Vitesse maximale du suivi du curseur**:
    *   Pour que le curseur "suive" la main sans lag perceptible, le système doit rafraîchir la position du curseur au moins aussi vite que la capacité de l'utilisateur à percevoir un décalage.
    *   Si un micro-mouvement est d'environ 200ms (5 par seconde), et qu'il réduit la distance de 90%.
    *   Distance typique à parcourir sur écran 35cm (~14 pouces) : ex: 20 cm.
    *   Pour un mouvement ample (ex: traverser la moitié de l'écran, 17.5 cm) en, disons, 2 micro-mouvements principaux : ~0.4-0.5s.
    *   Vitesse = Distance / Temps = 17.5 cm / 0.5 s = 35 cm/s.
    *   Le système doit pouvoir afficher le curseur à cette vitesse sans "sauter" d'étapes perceptibles. Fréquence de rafraîchissement de la position souris > 1/(durée micro-mouvement) et idéalement bien plus.
    *   Ce n'est pas la vitesse MAXIMALE du curseur (qui peut être très rapide), mais la vitesse que le système doit pouvoir *suivre* et *afficher* de manière fluide.
    *   Une autre approche: le temps de réaction humain est ~200ms. Si le curseur a un lag > 100-200ms, il sera perçu comme déconnecté.
    *   *Note: Cette question est un peu ouverte sans plus de contraintes. L'important est le raisonnement sur les micro-mouvements et le cycle perception-action.*

**Questions d'examen typiques :**
*   **Sujet 2023, Q3**: "Un mouvement simple pour pointer un objet avec la souris met en jeu perception/cognition/action dans une succession de micromouvements chacun de durée fixe. Estimer la durée d’un micromouvement en ms. Sur cette base, quelle doit être la vitesse maximale du suivi du curseur lors du déplacement de la main pour pointer une cible. On prendra un écran de diagonale 35 cm et l’hypothèse d’une précision relative de x_(i+1)/x_i= 0.1 [...]."

**Fréquence estimée**: Occasionnel.
<div style="page-break-before: always;"></div>

### 4. Complémentarité Structuring Display & Keystroke

| Méthode | Focus | Type d'Analyse | Ce qu'elle apporte |
|---|---|---|---|
| **Structuring Display** | Organisation visuelle, perception, guidage de l'attention. | Qualitative (principalement), structurelle. | Aide à concevoir des écrans clairs, où l'information importante est saillante et la navigation logique du regard est facilitée. Impacte la **facilité de trouver l'information** (lié à M dans KLM). |
| **Keystroke (KLM)** | Efficacité temporelle des séquences d'actions physiques et mentales. | Quantitative, prédictive. | Aide à optimiser les séquences d'actions pour la rapidité, en minimisant les opérations coûteuses. Impacte le **temps d'exécution** d'une tâche une fois que l'utilisateur sait quoi faire. |
| **Complémentarité** | - Une bonne structuration d'écran **réduit les opérateurs M** (préparation mentale, recherche) dans KLM, car l'utilisateur trouve plus vite quoi faire et où cliquer. <br> - KLM peut aider à choisir entre deux designs d'interaction (ex: boutons vs. menus) qui ont été jugés acceptables du point de vue de la structuration. <br> - Structuring Display s'intéresse à "est-ce que l'utilisateur comprend et trouve ?", KLM à "combien de temps ça prend une fois qu'il a compris ?". |

**Questions d'examen typiques :**
*   **Sujet 2025, Ex1 Q3**: "En quoi ces deux méthodes [Structuring Display & Keystroke] sont-elles complémentaires ?"

**Fréquence estimée**: Occasionnel.
<div style="page-break-before: always;"></div>

## III. Modèles de Conception

### 1. SADT (Structured Analysis and Design Technique)

*   **Objectif**: Analyser et modéliser un système complexe (ici, les tâches utilisateur) de manière descendante, en se concentrant sur les fonctions/activités et les flux de données/contrôles.
*   **Éléments Clés (Actigramme A-0)**:
    *   **Boîte (Activité/Fonction)**: Verbe à l'infinitif + complément. Représente une transformation.
    *   **Flèches (Données/Contrôles/Mécanismes - ICOMs)**:
        *   **Input (Entrée)**: Données consommées/transformées par l'activité (arrive à gauche).
        *   **Control (Contrôle)**: Données/événements qui contraignent/guident l'activité (arrive en haut). NE SONT PAS transformées.
        *   **Output (Sortie)**: Données produites par l'activité (sort à droite).
        *   **Mechanism (Mécanisme/Support)**: Ressources nécessaires pour exécuter l'activité (arrive en bas, ex: utilisateur, logiciel).
*   **Approche Descendante**:
    1.  **Diagramme de Contexte (A-0)**: Une seule boîte représentant tout le système/tâche.
    2.  **Raffinement**: Chaque boîte est décomposée en un nouveau diagramme (A-1, A-2, etc.) montrant 3 à 6 sous-activités plus détaillées, avec leurs propres ICOMs. Les flèches du niveau parent doivent se retrouver sur le diagramme enfant (conservation des interfaces).

*   **Exemple SADT (très simplifié) pour "Compresser/Décompresser un fichier" (Sujet 2021)**

    **Niveau A-0: Gérer Fichier Compressé**
    
    @startuml
    left to right direction
    skinparam packageStyle rectangle
    skinparam defaultTextAlignment center

    rectangle "Utilisateur" as User
    rectangle "Noyau Fonctionnel" as Core
    rectangle "Système" as System #APPLICATION

    User <--> System

    rectangle "Gérer Fichier Compressé (A-0)" {
      rectangle "Traiter Fichier\n(Compression/Décompression)" as A0
    }

    User --|> A0 : <<Mechanism>>
    Core --|> A0 : <<Mechanism>>

    A0 -> User : Fichier traité\nRésultat Opération\n<size:10><<Output>></size>
    User -> A0 : Fichier Source\nChoix Opération (C/D)\nParamètres\n<size:10><<Input>></size>
    User -> A0 : Commande de lancement\n<size:10><<Control>></size>
    note right of A0 : Modèle de données:\nFichier (nom, chemin, taille)\nOptions (niveau compression)
    @enduml
    
    **Décomposition de A0 en A1 (Exemple avec feedback pour IHM)**
    
    @startuml
    left to right direction
    skinparam packageStyle rectangle
    skinparam defaultTextAlignment center
    
    actor User
    rectangle Core #APPLICATION

    rectangle "Traiter Fichier (A1)" {
        rectangle "1. Initialiser Traitement" as A1_1
        rectangle "2. Exécuter Opération\n(par blocs)" as A1_2 #LightBlue
        rectangle "3. Fournir Feedback Temps Réel" as A1_3
        rectangle "4. Finaliser Traitement" as A1_4
    }
    User -> A1_1 : Fichier Source\nChoix Opération\nParamètres\n<size:10><<Input (de A-0)>></size>
    User -> A1_1 : Commande de lancement\n<size:10><<Control (de A-0)>></size>
    A1_1 --|> User : <<Mechanism>>
    A1_2 --|> User : <<Mechanism>>
    A1_3 --|> User : <<Mechanism>>
    A1_4 --|> User : <<Mechanism>>
    A1_1 --|> Core : <<Mechanism>>
    A1_2 --|> Core : <<Mechanism>>
    A1_3 --|> Core : <<Mechanism>>
    A1_4 --|> Core : <<Mechanism>>


    A1_1 -> A1_2 : Fichier Prêt\nOpération Initialisée\n<size:10><<Data>></size>
    A1_2 -> A1_3 : Progression\nInfo Bloc Traité\n<size:10><<Data>></size>
    A1_3 -> User : État Progression\n<size:10><<Output (vers IHM)>></size>
    A1_2 -> A1_4 : Données Traitées\n<size:10><<Data>></size>
    A1_4 -> User : Fichier traité\nRésultat Opération\n<size:10><<Output (de A-0)>></size>

    A1_3 -> A1_2 : Demande Annulation\n<size:10><<Control (de l'IHM)>></size>

    note right of A1_2
      **Interface logicielle du noyau pour A1_2 (pour IHM):**
      - `init_compression(filePath, params)`
      - `compress_next_block()`: returns {status, progress, data_chunk}
      - `init_decompression(filePath)`
      - `decompress_next_block()`: returns {status, progress, data_chunk}
      - `cancel_operation()`
      - `get_status()`
      Cette granularité permet à A1_3 de fonctionner.
    end note
    @enduml
    
    *Problème modularité vs IHM (Sujet 2021)*: Une fonction "boîte noire" (modularité forte) qui ne retourne que le résultat final ne permet pas de feedback en cours de traitement, ce qui est crucial pour les tâches longues en IHM. L'IHM a besoin d'une interface plus granulaire du noyau fonctionnel (ex: traitement par blocs, callbacks de progression).

**Questions d'examen typiques :**
*   **Sujet 2021, Ex. Conception Q2a**: "Donner un modèle SADT selon l’approche descendante usuelle. Formaliser la description des entrées/sorties et autres éléments. Préciser l’interface logicielle du compresseur/décompresseur permettant son intégration dans l’IHM."
*   **Sujet 2022, Q11**: "Modéliser en SADT les tâches habituelles réalisées dans un utilitaire de courrier électronique. [...] On procédera de manière descendante [...]. On mettra en évidence l’aspect itératif [...] et le parallélisme possible [...]."
*   **Sujet 2023, Analyse/conception Q2**: "Donner un modèle de tâches orienté flux de données, on prendra SADT spécifiquement, de l’application en plusieurs étapes de conception descendante, en partant du diagramme global de niveau 0 et par raffinement successifs [...]."

**Fréquence estimée**: Très fréquent.
<div style="page-break-before: always;"></div>

### 2. PAC (Presentation-Abstraction-Control) / PAC-Amodeus

*   **Objectif**: Modèle d'architecture logicielle pour systèmes interactifs, favorisant la séparation des préoccupations et la modularité.
*   **Agents PAC**: Chaque agent est une trinité de composants :
    *   **Présentation (P)**: Gère l'interaction avec l'utilisateur (affichage, saisie). Aspect extérieur.
    *   **Abstraction (A)**: Contient les données et la logique métier de l'agent. Aspect intérieur, indépendant de l'interaction.
    *   **Contrôle (C)**: Assure la cohérence entre P et A, gère les flux de données/commandes, et communique avec les autres agents PAC.
*   **Structure Hiérarchique (PAC-Amodeus)**: Les agents PAC peuvent être organisés hiérarchiquement. Un agent de haut niveau coordonne des agents de plus bas niveau.
*   **Flux typique**:
    1.  Utilisateur agit sur P.
    2.  P informe son C.
    3.  C traduit l'action pour A (ou pour un autre agent C).
    4.  A exécute la logique, met à jour ses données.
    5.  A informe son C du changement.
    6.  C traduit le changement pour P.
    7.  P met à jour l'affichage.

*   **Exemple PAC-Amodeus pour Compresseur/Décompresseur (Sujet 2021)**
    
    @startuml
    package "Agent Principal (CompresseurApp)" {
      rectangle P_Main [
        **Présentation Fenêtre Principale**
        (Widgets Qt: Fenêtre, Boutons
        "Compresser", "Décompresser", "Annuler",
        Barre de progression, Zone de log)
      ]
      rectangle A_Main [
        **Abstraction Application**
        (État global: fichier sélectionné,
        opération en cours)
      ]
      rectangle C_Main [
        **Contrôle Principal**
        (Logique de l'application:
        lance/arrête le thread de travail,
        communique avec l'agent de tâche)
      ]
      P_Main <--> C_Main
      A_Main <--> C_Main
    }

    package "Agent Tâche (CompressionTask)" {
      rectangle P_Task [
        **Présentation Tâche**
        (Peut être virtuel, ou
        interface de communication
        avec C_Main pour le feedback)
      ]
      rectangle A_Task [
        **Abstraction Tâche**
        (Instance du NoyauFonctionnel,
        état de la compression/décompression:
        pourcentage, statut)
        ---
        `noyau.compress_next_block()`
        `noyau.decompress_next_block()`
      ]
      rectangle C_Task [
        **Contrôle Tâche**
        (Gère le thread/timer pour
        appeler A_Task.noyau de manière
        répétitive. Reçoit les signaux
        d'annulation. Émet des signaux
        de progression vers C_Main)
        ---
        `void run() { // dans un thread`
        `  while(!cancelled && !completed) {`
        `    result = A_Task.process_block();`
        `    emit progress_update(result.progress);`
        `    // QThread::msleep(10); // pour laisser du temps à l'UI`
        `  }`
        `}`
        `void cancel() { cancelled = true; }`
      ]
      P_Task <--> C_Task
      A_Task <--> C_Task
    }
    C_Main -- C_Task : Démarrer/Arrêter Tâche
    C_Task -- C_Main : Mettre à jour Progression/Résultat

    note right of C_Task
      **Gestion annulation/feedback (C++/Qt)**:
      - C_Task tourne dans un QThread.
      - C_Main demande l'annulation à C_Task via un signal Qt ou appel de méthode.
      - C_Task vérifie un booléen `cancelled` dans sa boucle.
      - C_Task émet des signaux Qt (ex: `progressUpdated(int)`) que P_Main (ou C_Main) connecte à des slots pour mettre à jour la barre de progression.
      - Utilisation de QTimer si pas de thread, pour appeler `process_next_block` périodiquement.
    end note
    @enduml
    

**Questions d'examen typiques :**
*   **Sujet 2021, Ex. Conception Q2b**: "Donner un modèle PAC-Amodeus de la conception logicielle de l’interface. De plus, on supposera l’utilisation d’un langage de programmation de type C++/Qt [...]. Par exemple, comment gérez-vous l’annulation de la tâche, et les autres informations renvoyées à l’utilisateur en temps-réel."
*   **Sujet 2022, Q5 (Syntaxe/Sémantique)**: "...intervient-elle en conception d’IHM ? dans le modèle PAC par exemple ? Expliquer à quel niveau, comment."
*   **Sujet 2022, Q11**: "On donnera un modèle PAC de l’IHM qui reflète le modèle de tâche [SADT]."
*   **Sujet 2023, Analyse/conception Q3**: "Proposer un modèle PAC de l'interface homme/machine et des différents écrans."

**Fréquence estimée**: Très fréquent.
<div style="page-break-before: always;"></div>

### 3. Statecharts (Diagrammes d'États-Transitions Imbriqués)

*   **Objectif**: Modéliser le comportement dynamique d'un système réactif, en particulier les aspects de contrôle de l'IHM. Gère la complexité par l'imbrication, le parallélisme et l'historique.
*   **Éléments Clés**:
    *   **État**: Condition dans laquelle le système peut se trouver (ex: "Attente de saisie", "Dessin en cours").
    *   **Transition**: Passage d'un état à un autre, déclenché par un **événement**.
    *   **Événement**: Occurrence qui peut déclencher une transition (ex: `clicSouris`, `toucheAppuyée`).
    *   **Action**: Opération exécutée lors d'une transition, ou à l'entrée/sortie d'un état.
    *   **Super-état (État composite)**: État qui contient d'autres états (imbrication).
    *   **Parallélisme (AND-states)**: États actifs simultanément.
*   **Approche Descendante/Raffinement**: Commencer par des états de haut niveau, puis raffiner chaque état en sous-états.

*   **Exemple Statechart pour Éditeur de Dessin (Sujet 2022)**

    **a) Haut Niveau d'Abstraction**
    
    @startuml
    skinparam defaultTextAlignment center
    [*] --> Repos

    state Repos {
      [*] --> PaletteActive
      PaletteActive: Attente choix outil
    }

    state ModeActif {
      state "Sélection" as Selection
      state "Texte" as Texte
      state "Rectangle" as Rectangle
      state "Cercle" as Cercle
      state "Ligne Brisée" as LigneBrisee
    }

    PaletteActive --> Selection : clicOutilSelection
    PaletteActive --> Texte : clicOutilTexte
    PaletteActive --> Rectangle : clicOutilRectangle
    PaletteActive --> Cercle : clicOutilCercle
    PaletteActive --> LigneBrisee : clicOutilLigneBrisee

    Selection --> PaletteActive : clicAutreOutil / Esc
    Texte --> PaletteActive : clicAutreOutil / Esc
    Rectangle --> PaletteActive : clicAutreOutil / Esc
    Cercle --> PaletteActive : clicAutreOutil / Esc
    LigneBrisee --> PaletteActive : clicAutreOutil / Esc

    note "Événements:\n clicOutilSelection, clicOutilTexte, ...\n clicAutreOutil, Esc" as N1
    note "États:\n Repos, PaletteActive, ModeActif,\n Selection, Texte, Rectangle, Cercle, LigneBrisee" as N2
    @enduml
    

    **b) Raffinement: Mode Sélection**
    
    @startuml
    state Selection {
      [*] --> AttenteObjet
      AttenteObjet : Pointer pour sélectionner
      AttenteObjet --> ObjetSelectionne : clicSurObjet / [objet trouvé]
      ObjetSelectionne : Objet est sélectionné (poignées visibles)
      ObjetSelectionne --> AttenteObjet : clicVide / [désélection]
      ObjetSelectionne --> Deplacement : maintenirClicSurObjetSelnDéplacerSouris
      Deplacement : Déplacer l'objet
      Deplacement --> ObjetSelectionne : relacherClic / [objet déplacé]
      ObjetSelectionne --> Deformation : maintenirClicSurPoigneeSelnDéplacerSouris
      Deformation : Déformer l'objet
      Deformation --> ObjetSelectionne : relacherClic / [objet déformé]
      ObjetSelectionne --> AttenteObjet : toucheSuppr / [supprimerObjet()]
    }
    note "Événements:\n clicSurObjet, clicVide, maintenirClic...,\n relacherClic, toucheSuppr\nActions:\n [objet trouvé], [désélection],\n [objet déplacé], [objet déformé],\n [supprimerObjet()]" as N_Sel
    @enduml
    

    **b) Raffinement: Mode Rectangle**
    
    @startuml
    state Rectangle {
      [*] --> AttentePremierPoint
      AttentePremierPoint : Pointer 1er coin
      AttentePremierPoint --> DessinRectangleEnCours : clicGauche / [memoriserPt1()]
      DessinRectangleEnCours : Déplacer souris pour définir 2e coin (feedback visuel)
      DessinRectangleEnCours --> AttentePremierPoint : clicGauche / [creerRectangle(Pt1, PtCourant), reinitPt1()] \n <size:10>(pour nouvelle insertion)</size>
      DessinRectangleEnCours --> AttentePremierPoint : clicDroit / [annulerRectangleEnCours()]
    }
    note "Événements:\n clicGauche, clicDroit\nActions:\n [memoriserPt1()], [creerRectangle()],\n [annulerRectangleEnCours()], [reinitPt1()]" as N_Rect
    @enduml
    
    (Ligne Brisée serait similaire, avec une boucle pour ajouter des points successifs jusqu'à un double-clic ou clic droit pour terminer).

**Questions d'examen typiques :**
*   **Sujet 2022, Q12**: "Le but est de décrire l’aspect contrôle de l’IHM par des diagrammes d’état transition imbriqués construits en plusieurs étapes de raffinements successifs. a) Proposer un diagramme d’état transition de haut niveau [...]. b) On veut raffiner chacun des modes de fonctionnement [...]."
*   **Sujet 2023, Analyse/conception Q4**: "Spécifier les flux de contrôle à l’aide de Statecharts imbriqués selon une approche de conception descendante également."

**Fréquence estimée**: Fréquent.
<div style="page-break-before: always;"></div>

## IV. Critique d'Interface (Basée sur Principes Ergonomiques)

Quand on critique une interface (pop-up, message d'erreur, etc.):
1.  **Diagramme de structure**: Montre l'organisation visuelle, aide à identifier le sujet pragmatique. (Voir section II.1)
2.  **Critères ergonomiques (Bastien & Scapin, Nielsen, ou implicites)**:
    *   **Guidage**: Clarté des libellés, groupement, feedback, affordance.
    *   **Charge de travail**: Limitation des éléments, pas d'infos inutiles.
    *   **Contrôle explicite**: L'utilisateur doit se sentir en contrôle (ex: annulation claire).
    *   **Adaptabilité**: Flexibilité, prise en compte des habitudes.
    *   **Gestion des erreurs**: Messages clairs, aide à la correction.
    *   **Homogénéité/Cohérence**: Consistance dans le design et le comportement.
    *   **Signifiance des codes et dénominations**: Langage utilisateur, icônes claires.
    *   **Compatibilité**: Avec les caractéristiques de l'utilisateur, ses tâches.
3.  **Proposition d'alternative**: Justifier les améliorations par rapport aux critères.

**Exemple Critique Pop-up Confirmation (Sujet 2022 Q10)**
(Image non fournie, mais imaginons un pop-up ambigu ou mal conçu)

*   **Diagramme de Structure (Exemple de mauvais pop-up)**:
    
    Pop-up Confirmation
    ├── Titre: "Alerte Système" (Sujet Pragmatique - mais vague)
    ├── Message: "Voulez-vous continuer cette opération ? (ID: 48XF)" (Technique, pas clair)
    └── Boutons
        ├── "OK" (Ambigu : OK pour continuer? OK j'ai lu?)
        └── "Cancel" (Anglais? Que fait-il?)
    
*   **Critique (hypothétique)**:
    *   **Guidage faible**: Titre vague, message technique. Que fait "continuer" ?
    *   **Signifiance faible**: "OK" est ambigu. "Cancel" peut être mal compris.
    *   **Charge de travail inutile**: ID technique.
    *   **Gestion des erreurs**: Si c'est une action destructrice, le risque n'est pas clair.
*   **Alternative Proposée**:
    
    Pop-up Confirmation Suppression
    ├── Titre: "Confirmer la Suppression" (Sujet Pragmatique - clair)
    ├── Message: "Êtes-vous sûr de vouloir supprimer définitivement le fichier 'rapport.docx' ?" (Spécifique)
    └── Boutons
        ├── "Supprimer" (Action claire, potentiellement en rouge)
        └── "Annuler" (Action claire)
    
    Justification: Titre et message clairs et spécifiques à l'action. Libellés de boutons non ambigus. Le sujet pragmatique est l'action de suppression et ses conséquences.

**Questions d'examen typiques :**
*   **Sujet 2021, Ex. Structure d’écran**: "Commentez selon les principes de la structuration d’écran des deux affichages suivants [...]. Indiquer les défauts et améliorations entre les deux versions."
*   **Sujet 2022, Q10**: "Que pensez-vous du pop-up de confirmation suivant. Donner un diagramme de structure du popup [...]. Justifier votre critique, positive ou négative, en vous appuyant sur le diagramme et les critères ergonomiques. Proposer une alternative pour le pop-up en justifiant la réponse."
*   **Sujet 2023, Q5**: "Ceci est une fenêtre [...]. Donner au moins quatre défauts ergonomiques pour la fenêtre suivante. Dessiner une nouvelle fenêtre [...] qui propose la même fonction. Lister les améliorations apportées."
*   **Sujet 2023, Q6**: "On veut évaluer les 2 messages d’alerte suivants. Proposer un arbre de structure pour chacun d’eux [...]. Indiquez le graphe de transition pour réussir à valider un effacement et précisez votre critique."

**Fréquence estimée**: Très fréquent (souvent combiné avec la structuration d'écran).

