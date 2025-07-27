# Corrections Ciblées "Philosophie & Concepts" - Sujets HM40

## SUJET D’EXAMEN HM 40 – 22 juin 2021

### Exercice. Questions de cours.

**1) La conception « centrée utilisateur » est un paradigme essentiel dans le développement des IHM. Expliquez en quoi cela consiste et justifier de sa nécessité. Pour aller plus vite, on pourra utiliser un argument ontologique qui place l’utilisateur effectivement au centre du système.**

*   **Consistance**: La Conception Centrée Utilisateur (CCU) est une approche de conception et de développement qui met les besoins, les attentes, les capacités et les limitations des utilisateurs finaux au cœur de chaque étape du processus. Cela implique de comprendre qui sont les utilisateurs, leur contexte d'usage, leurs tâches, puis de concevoir, prototyper et évaluer itérativement des solutions en impliquant activement les utilisateurs.
*   **Nécessité**:
    *   **Adéquation**: Pour s'assurer que le système est utile (fait ce qu'il faut) et utilisable (le fait bien et facilement).
    *   **Efficacité & Efficience**: Réduire les erreurs, augmenter la productivité, diminuer le temps d'apprentissage.
    *   **Satisfaction & Acceptation**: Un système adapté est mieux accepté et plus agréable à utiliser.
    *   **Réduction des coûts**: Moins de refontes coûteuses tardives, moins de support client.
*   **Argument Ontologique**: Ontologiquement, un système interactif (et son IHM) n'a de raison d'être que par et pour l'utilisateur. L'utilisateur n'est pas une simple "entrée" ou "sortie" du système, il est la finalité même du système. L'IHM est le lieu de la rencontre entre l'intention de l'utilisateur et les capacités du système. Sans l'utilisateur et sa perspective, l'IHM est un artefact sans signification pratique. L'utilisateur *est* donc au centre parce que le système est défini par rapport à lui.

**2) Selon le modèle du « processeur humain » la mémoire humaine possède des caractéristiques spécifiques qui la différencient de la mémoire d’un ordinateur du marché. Préciser ces caractéristiques. Peut-on implémenter et simuler ce type fonctionnement dans des applications logicielles. Donner des exemples.**

*   **Caractéristiques spécifiques de la mémoire humaine (vs. ordinateur)**:
    *   **Mémoire de Travail (MDT)**: Capacité très limitée (7+/-2 chunks), volatile (15-30s sans répétition), sensible aux interférences. L'ordinateur a une RAM vaste et stable.
    *   **Encodage/Récupération**: Humaine est associative, sémantique, contextuelle, sujette à l'oubli et à la reconstruction (erreurs). Ordinateur est basé sur l'adressage, littéral, précis.
    *   **Organisation**: MLT humaine est un réseau sémantique complexe. Ordinateur stocke par fichiers/blocs.
    *   **Faillibilité**: Mémoire humaine est faillible, reconstructive. Mémoire ordinateur (hors panne) est fiable.
*   **Implémentation/Simulation logicielle**:
    *   Oui, partiellement. On ne recrée pas la conscience ou l'expérience subjective de la mémoire.
    *   **MDT**: Applications qui limitent la quantité d'informations actives (ex: pas plus de X options critiques visibles), qui utilisent des "chunks" (regroupements logiques), qui rappellent les dernières actions.
        *   *Exemple*: Affichage temporaire de tooltips, limitation du nombre d'items dans un menu déroulant critique, "undo" limité aux dernières actions.
    *   **MLT**: Systèmes basés sur des réseaux sémantiques (ontologies), systèmes d'indexation par mots-clés (simule l'accès associatif), systèmes de recommandation basés sur l'historique (simule l'apprentissage).
        *   *Exemple*: Moteurs de recherche, systèmes d'aide à la mémorisation (Anki), assistants personnels qui apprennent les préférences.

**3) La perception est structurée et relève de l’intentionnalité. Par exemple, « que » voyez-vous sur la figure suivante : [Figure ambigüe type Vase de Rubin] Préciser quels principes de la Gestalt sont applicables à cette perception.**

*   **Perception structurée et intentionnalité**:
    *   La perception n'est pas un enregistrement passif de stimuli bruts. Le cerveau organise activement les informations sensorielles en formes cohérentes et signifiantes (Gestalts).
    *   L'intentionnalité de la perception signifie qu'elle est toujours "perception de quelque chose". Elle est dirigée, orientée par l'attention, les attentes, les connaissances préalables. Ce que l'on *voit* est une interprétation.
*   **Principes de la Gestalt (pour une figure type Vase de Rubin)**:
    *   **Figure/Fond**: Le principe le plus évident. On perçoit soit un vase (figure) sur un fond (les profils), soit deux profils (figure) sur un fond (le vase). L'organisation figure/fond est instable et peut basculer.
    *   **Clôture**: Notre esprit tend à "fermer" les contours pour percevoir des formes complètes (le vase ou les profils) même si les lignes sont partagées.
    *   **Symétrie/Bonne Forme (Prégnance)**: Le cerveau préfère les interprétations qui résultent en formes simples, régulières et symétriques. Le vase et les profils sont des formes "fortes".

**4) L’usage des métaphores [...]. Citer 4 types de métaphores [...] ? rappeler domaine source et domaine cible et leur relation. Quel problème peut induire la métaphore ?**

*   (Voir la cheat sheet pour les types : Structurelle, Fonctionnelle, Organisationnelle, Visuelle/Iconique, Relationnelle/Processus).
*   **Problèmes potentiels induits par la métaphore**:
    *   **Inadéquation/Limitations**: La métaphore peut ne pas couvrir tous les aspects du domaine cible ou introduire des connotations du domaine source non pertinentes (ex: la corbeille ne se "remplit" pas et ne "sent pas mauvais").
    *   **Incohérence**: Certains aspects de la métaphore peuvent être en conflit avec la réalité du système (ex: "couper" du texte ne le détruit pas comme couper du papier).
    *   **Bridage de l'innovation**: S'accrocher trop à une métaphore peut empêcher de concevoir des fonctionnalités nouvelles qui n'ont pas d'équivalent direct dans le domaine source.
    *   **Barrière culturelle**: Une métaphore peut être évidente dans une culture et opaque dans une autre (ex: une boîte aux lettres américaine vs. européenne).
    *   **Fausse affordance**: Suggérer des actions qui ne sont pas possibles ou qui ont des effets inattendus.

**5) La notion de fonction comporte des conditions de satisfaction. Quels sont les conditions de satisfaction de la fonction de « portier d’un grand magasin » ? [...] cellule photo-électrique. Quelles sont les conditions de satisfaction de la fonction implémentée ?**

*   **Conditions de Satisfaction (CdS)**: Critères objectifs permettant de juger si une fonction a été accomplie avec succès par rapport à son but.
*   **Portier Humain**:
    *   **Fonction**: Gérer l'accès, accueillir, informer, assurer la sécurité de base à l'entrée.
    *   **CdS**:
        *   Clients légitimes entrent facilement.
        *   Personnes non désirées sont empêchées d'entrer (avec discernement).
        *   Les clients sont accueillis (sourire, mot de bienvenue).
        *   Le flux de passage est fluide.
        *   Les clients peuvent obtenir des renseignements de base.
        *   Un sentiment de sécurité est maintenu à l'entrée.
*   **Cellule Photo-électrique**:
    *   **Fonction implémentée**: Ouvrir et fermer automatiquement une porte lors d'une détection de passage.
    *   **CdS**:
        *   La porte s'ouvre lorsqu'une personne/objet franchit le faisceau/zone de détection.
        *   La porte reste ouverte tant que la présence est détectée (ou pendant une temporisation adéquate).
        *   La porte se ferme après un délai approprié sans détection.
        *   La porte ne se ferme pas sur quelqu'un (sécurité anti-pincement).
        *   Le système est fiable (détecte correctement, ne tombe pas en panne).
    *   *Différence clé*: La cellule n'accueille pas, n'informe pas, ne filtre pas selon la "légitimité" (autre que la simple présence physique). Sa fonction est une sous-partie très mécanisée de celle du portier humain.

**6) « une action physique perçue est un acte capté par un dispositif physique d’entrée ». Reprenons la cellule photo-électrique [...], comment interpréter le sens du mot « perception » dans ce cas ? S’agit-il d’une perception réelle du capteur ? [...]**

*   **Interprétation de "perception" pour la cellule**:
    *   Ce n'est **pas une perception réelle** au sens humain (qui implique conscience, interprétation sémantique, expérience subjective).
    *   Il s'agit d'une **détection** : la cellule est un capteur qui réagit à un stimulus physique spécifique (interruption d'un faisceau lumineux, variation de réflectance infrarouge) pour lequel il est calibré.
    *   Cette détection se traduit par un changement d'état physique du capteur (ex: variation de courant), qui est ensuite converti en un signal binaire (ou analogique) interprétable par le système de contrôle de la porte.
*   **Conclusion**:
    *   Le mot "perception" est utilisé ici par **analogie** ou de manière **métaphorique**.
    *   Il s'agit d'une "perception relative à l'observateur/concepteur" : c'est le concepteur du système qui attribue une signification ("quelqu'un passe") à l'état du capteur. Le capteur lui-même n'a pas cette "compréhension".
    *   Ce dont il s'agit : une **transduction** (conversion d'une forme d'énergie/signal en une autre) d'un phénomène physique en un signal électrique, suivie d'une **interprétation programmée** de ce signal par le système logique.

**7) Le retour d’information en temps réel est essentiel [...]. Essayez de justifier cette règle en se fondant sur la théorie de l’action, en montrant en quoi ce besoin est implicite dans les conditions de satisfaction de l’action [...].**

*   **Théorie de l'action (simplifiée)**: Une action est un comportement intentionnel visant à atteindre un but. Elle comporte des **Conditions de Satisfaction (CdS)**, qui sont l'état du monde désiré une fois l'action accomplie. L'utilisateur évalue continuellement si ses actions le rapprochent de ses CdS.
*   **Rappel des CdS de l'action**: Ce sont les critères que l'utilisateur (l'agent) utilise pour déterminer si son action a réussi par rapport à son intention. Ex: "Enregistrer le fichier" -> CdS: le fichier est sur le disque, avec le bon nom, le bon contenu, et le système indique que l'opération est terminée.
*   **Justification du feedback par la théorie de l'action**:
    1.  **Visibilité de l'effet de l'action**: L'utilisateur doit pouvoir percevoir les conséquences de son action sur l'état du système.
    2.  **Évaluation par rapport aux CdS**: Le feedback permet à l'utilisateur de comparer l'état actuel du système (résultant de son action) avec l'état désiré (ses CdS).
        *   Si le feedback indique que les CdS sont atteintes (ex: message "Fichier enregistré"), l'action est terminée avec succès.
        *   Si le feedback indique un état intermédiaire (ex: barre de progression), l'utilisateur sait que l'action est en cours et peut patienter ou anticiper la suite.
        *   Si le feedback indique un échec ou un état inattendu (ex: message d'erreur), l'utilisateur sait que les CdS ne sont pas atteintes et doit entreprendre une action corrective.
    3.  **Boucle d'interaction**: Sans feedback (ou avec un feedback trop tardif), cette boucle d'évaluation est rompue. L'utilisateur est dans l'incertitude, ne sait pas si son action a été prise en compte, si elle a réussi, ou s'il doit faire autre chose. Le feedback en temps réel est donc implicitement nécessaire pour que l'utilisateur puisse gérer activement l'accomplissement de ses CdS. Il ferme la boucle perception-action-évaluation.

---
## SUJET D’EXAMEN HM 40 – 21 juin 2022

**2) Distinction subjectif/objectif (1 pt). (a) Donner un exemple de jugement épistémiquement subjectif portant sur une/des entités ontologiquement objectives. (b) Donner un exemple de jugement épistémiquement objectif portant sur une/des entités ontologiquement subjectives.**

*   **Rappel**:
    *   **Ontologique**: Relatif à l'être, à ce qui existe. Objectif = existe indépendamment de l'esprit ; Subjectif = n'existe que par l'esprit.
    *   **Épistémique**: Relatif à la connaissance, à la validité d'un jugement. Objectif = jugement vérifiable, factuel ; Subjectif = jugement basé sur l'opinion, le ressenti.
*   **(a) Jugement épistémiquement subjectif / Entité ontologiquement objective**:
    *   *Exemple*: "Cette chaise (entité ontologiquement objective, car elle existe matériellement) est inconfortable (jugement épistémiquement subjectif, car dépend de mon ressenti, non universellement vérifiable)." Autre : "Le design de cette voiture est laid."
*   **(b) Jugement épistémiquement objectif / Entité ontologiquement subjective**:
    *   *Exemple*: "Jean dit qu'il a mal à la tête." La douleur de Jean est ontologiquement subjective (elle n'existe que dans son expérience). Le fait que "Jean dit qu'il a mal" est un jugement épistémiquement objectif (on peut vérifier s'il l'a dit ou non). Autre : "La Joconde est une peinture célèbre" (la célébrité est une construction sociale, donc ontologiquement subjective, mais l'affirmation de sa célébrité est un fait vérifiable).

**3) Rôle du contexte (1 pt). Expliciter à l’aide d’exemples en quoi la sémantique d’une phrase dépend d’un arrière-plan de présupposés relatifs au contexte d’énonciation de la phrase. On prendra l’exemple de la phrase discutée en cours : « Il lui a donné la clé et il a ouvert la porte. ». On indiquera l’interprétation normale, et d’autres interprétations possibles. La sémantique est-elle intrinsèque à la syntaxe ou relative à l’observateur ?**

*   **Sémantique et contexte**: La sémantique (le sens) d'une phrase n'est pas uniquement déterminée par sa syntaxe (sa structure grammaticale). Elle dépend crucialement du contexte d'énonciation, qui inclut les connaissances partagées, la situation, les intentions des locuteurs (l'arrière-plan de présupposés).
*   **« Il lui a donné la clé et il a ouvert la porte. »**:
    *   **Interprétation normale (contexte standard)**: "Il" (Personne A) a donné une clé (appropriée pour la porte en question) à "lui" (Personne B), et la Personne B (ou A après avoir récupéré la clé) a utilisé *cette* clé pour ouvrir *cette* porte. Présupposés : la clé est fonctionnelle, la porte est ouvrable avec une clé, l'intention est d'ouvrir la porte.
    *   **Autres interprétations (contexte modifié)**:
        *   Contexte: A donne à B la clé de sa voiture, puis A ouvre la porte de la maison (avec une autre clé ou parce qu'elle n'était pas verrouillée). La "clé" et la "porte" ne sont pas directement liées.
        *   Contexte: A donne à B une "clé de compréhension" (un indice), et B "ouvre la porte" d'une nouvelle perspective (métaphorique).
        *   Contexte: A donne la clé à B, mais B est incapable d'ouvrir la porte. A la reprend et l'ouvre. Le deuxième "il" réfère à A.
*   **Sémantique intrinsèque ou relative ?**: La sémantique n'est **pas purement intrinsèque** à la syntaxe. Elle est largement **relative à l'observateur** (ou plus précisément, à l'interprète) et à sa compréhension du contexte et de l'arrière-plan. La syntaxe fournit une structure, mais le sens émerge de l'interaction entre cette structure et l'ensemble des connaissances et présupposés activés par l'interprète.

**4) Intentionnalité intrinsèque/relative (1 pt). Donner une liste hiérarchisée de systèmes dits « intelligents » dont les capacités intentionnelles sont manifestement intrinsèques au système [...]. Donner une liste hiérarchisée [...] relatives à un agent extérieur [...]. Pour rappel, l’intentionnalité est la capacité de posséder des états mentaux, des buts, et d’agir par rapport à une finalité.**

*   **Intentionnalité intrinsèque** (finalité propre au système, non assignée de l'extérieur) :
    1.  Humain (états mentaux complexes, buts auto-générés, conscience de soi).
    2.  Primate supérieur (ex: chimpanzé - buts complexes, planification, outillage, théorie de l'esprit rudimentaire).
    3.  Mammifère (ex: chien - buts de survie, sociaux, apprentissage).
    *   *Critère de hiérarchisation*: Complexité des états mentaux, autonomie dans la définition des buts, capacité d'adaptation.
*   **Intentionnalité relative/dérivée** (finalité assignée par un concepteur/utilisateur) :
    1.  Système expert complexe / IA conversationnelle avancée (simule des buts complexes, mais programmés ou appris sur des données humaines).
    2.  Thermostat (but simple : maintenir une température assignée).
    3.  Porte automatique (but : s'ouvrir/se fermer sur détection, assigné par le concepteur).
    4.  Un simple script "Hello World" (but : afficher du texte, assigné par le programmeur).
    *   *Critère de hiérarchisation*: Complexité du comportement "orienté but" simulé, mais la finalité reste externe.

**5) Syntaxe/sémantique (1 pt). En quoi la distinction syntaxe/sémantique intervient-elle en conception d’IHM ? dans le modèle PAC par exemple ? Expliquer à quel niveau, comment.**

*   **Distinction en IHM**:
    *   **Syntaxe**: L'agencement des éléments de l'interface (widgets, menus), les règles d'interaction (ex: faut-il sélectionner l'objet puis l'action, ou l'inverse), l'apparence visuelle. C'est le "comment" les choses sont présentées et manipulées.
    *   **Sémantique**: La signification que l'utilisateur attribue aux éléments et aux actions, la compréhension de ce que fait le système et de comment atteindre ses buts. C'est le "quoi" et le "pourquoi".
    *   Une bonne IHM a une syntaxe claire qui supporte une sémantique non ambiguë et alignée avec les attentes de l'utilisateur.
*   **Dans le modèle PAC**:
    *   **Présentation (P)**: Gère principalement la **syntaxe** de l'interaction. Elle affiche les informations (forme, disposition) et reçoit les entrées brutes de l'utilisateur (clics, frappes).
    *   **Abstraction (A)**: Contient le noyau fonctionnel, la logique métier. Elle incarne la **sémantique** de l'application, les concepts et les données du domaine.
    *   **Contrôle (C)**: Joue un rôle de traducteur entre syntaxe et sémantique. Il reçoit des événements syntaxiques de P, les interprète (leur donne un sens sémantique) pour A, et en retour, il prend les résultats sémantiques de A et les traduit en commandes syntaxiques pour que P mette à jour l'affichage.

**6) Distinction action/activité (1 pt). Quel modèle graphique semi-formel en conception d’IHM fait-il une distinction tranchée entre action et activité. Préciser en quoi et comment. Donner un exemple.**

*   **Modèle**: SADT (Structured Analysis and Design Technique).
*   **En quoi et comment**:
    *   Une **Activité** dans SADT est représentée par une boîte. Elle symbolise une tâche, une fonction, une transformation qui prend des entrées (Inputs) et produit des sorties (Outputs), sous l'influence de Contrôles et en utilisant des Mécanismes. Une activité peut être décomposée en sous-activités.
    *   Le terme **Action** est moins formalisé mais peut être vu de plusieurs manières :
        *   Les **Mécanismes** (flèches du bas) sont les agents ou ressources qui *réalisent* l'activité (ex: "Utilisateur", "Logiciel X"). Leur intervention est une forme d'action.
        *   Les **Contrôles** (flèches du haut) peuvent être des événements ou des commandes qui déclenchent ou modulent l'activité, ce qui s'apparente aussi à une action sur l'activité.
        *   Au niveau le plus bas de décomposition, une activité peut correspondre à une action utilisateur élémentaire. Mais SADT se concentre sur les fonctions et les flux de données plutôt que sur la séquence temporelle des actions utilisateur.
*   **Exemple**:
    *   Activité (Boîte): "Gérer la messagerie électronique"
        *   Sous-Activité: "Rédiger un nouveau message"
            *   Input: Idée du message, Destinataire(s)
            *   Output: Message envoyé
            *   Contrôle: Décision d'envoyer un message
            *   Mécanisme: Utilisateur, Clavier, Client de messagerie
    *   L'activité "Rédiger un nouveau message" est réalisée par l'utilisateur (mécanisme) qui effectue une série d'actions (taper du texte, cliquer sur "envoyer").

**7) Compétition écrit/couleur (1pt). Que tend à montrer l’effet Stroop relatif à la compétition écrit/couleur.**

*   L'effet Stroop (nommer la couleur de l'encre d'un mot de couleur, ex: le mot "BLEU" écrit en encre rouge) tend à montrer que :
    *   La **lecture du mot est un processus hautement automatisé** et rapide chez les lecteurs compétents.
    *   Ce processus automatisé de lecture (traitement sémantique du mot) **interfère** avec la tâche, moins automatisée ou plus volontaire, de nommer la couleur de l'encre (traitement perceptif de l'attribut visuel).
    *   Il y a une **compétition** entre deux processus cognitifs, et le plus automatisé (lecture) a tendance à "prendre le dessus" ou du moins à ralentir l'autre, surtout en cas d'incongruence entre le sens du mot et la couleur de l'encre.
    *   Cela met en évidence que certains traitements d'information sont prioritaires ou plus difficiles à inhiber.

**8) Compétition forme/texture/couleur (1 pt). Ordonner ces attributs visuels selon leur impact niveau perception.**

*   L'ordre général de prégnance ou d'impact perceptif (qui peut varier légèrement selon la tâche et le contexte) est souvent :
    1.  **Couleur**: Très saillante, détectée rapidement (effet "pop-out"), efficace pour l'alerte et le groupement.
    2.  **Forme**: Contours, structure globale, importante pour la reconnaissance des objets.
    3.  **Texture**: Micro-détails de surface, généralement traitée après la forme globale et la couleur.
*   *Justification rapide*: La couleur est souvent traitée de manière pré-attentive. La forme est cruciale pour l'identification. La texture ajoute des détails mais est moins discriminante à grande distance ou pour une recherche rapide.

---
## SUJET D’EXAMEN HM 40 – 22 juin 2023

**1) Etats mentaux (4 pts).**

- **Une entité virtuelle est-elle réelle ? dans quelle mesure ? quelle est son ontologie ?**
    - Une entité virtuelle (ex: avatar, fichier, personnage de jeu) n'est **pas réelle au sens physique** (pas de masse propre, pas d'atomes).
    - Elle est **réelle en tant qu'entité informationnelle ou structurelle** : un pattern de données sur un support physique ou une construction logique dans un programme.
    - Elle est réelle par ses **effets** : elle peut être perçue, interagir avec d'autres entités virtuelles, et avoir des conséquences dans le monde physique (ex: un achat virtuel déclenche une livraison réelle).
    - **Ontologie** : construction symbolique et computationnelle, relevant d'une ontologie de l'information ou du logiciel.

- **Quel état mental est indissociable d’une action en général ? Expliciter les conditions de satisfaction de l’action « enfoncer un clou avec un marteau ». Peut-on dire qu’un marteau a l’intention d’enfoncer un clou ?**
    - **L'intention** est l'état mental indissociable de l'action : une action est dirigée par un but. Sans intention, il s'agit d'un simple mouvement.
    - **Conditions de satisfaction** pour « enfoncer un clou avec un marteau » :
        - Le clou est suffisamment enfoncé dans le matériau.
        - Le clou est droit et solide.
        - L'objet à fixer est maintenu en place.
        - Le matériau et les outils ne sont pas endommagés.
    - Un marteau n'a pas d'intention : il est un outil passif, sans états mentaux. L'intention est celle de l'utilisateur ; la finalité du marteau est **attribuée** par l'humain.

- **Dans quelle mesure peut-on dire qu’un ordinateur « perçoit », « réfléchit » et « agit » ? Ce vocabulaire est-il trompeur ? De quoi s’agit-il ? Quel débat cela pose-t-il ?**
    - On peut le dire par **analogie fonctionnelle** :
        - « Perçoit » : capteurs détectent des signaux physiques et les convertissent en données numériques (détection, pas perception consciente).
        - « Réfléchit » : le programme exécute des algorithmes (traitement d'information, pas réflexion consciente).
        - « Agit » : sorties via actionneurs (écran, haut-parleur).
    - **Vocabulaire trompeur** s'il est pris littéralement : il anthropomorphise la machine.
    - Il s'agit de **traitement programmé de l'information** ; les significations sont encodées par le programmeur.
    - **Débat** : IA forte vs. IA faible (Searle, Chambre Chinoise) : une machine peut-elle vraiment "penser" ou simule-t-elle seulement ces capacités ?

- **Notion de but en termes d’états mentaux, caractéristiques, modèle général des capacités intentionnelles, objectif général en conception d’IHM**
    - Un **but** est une représentation mentale d'un état futur désiré, associé à une **intention** (engagement d'agir), des **croyances** (sur le monde et les moyens d'agir), et des **désirs** (motivation).
    - **Caractéristiques** : spécificité, temporalité, hiérarchie.
    - **Modèle général (cycle de Norman simplifié)** :
        1. Formation du but (désir, objectif)
        2. Formation de l'intention d'agir
        3. Spécification de la séquence d'actions (planification)
        4. Exécution des actions
        5. Perception de l'état du système (feedback)
        6. Interprétation de l'état
        7. Évaluation (but atteint ?)
    - **Objectif général en conception** : faciliter ce cycle pour l'utilisateur, minimiser la charge cognitive et physique, rendre les actions visibles et compréhensibles (réduire le Golfe de l'Exécution), rendre l'état du système perceptible et interprétable (réduire le Golfe de l'Évaluation).

**3) Vitesse de suivi du curseur (2 pts).**

- **Durée d'un micromouvement** :
    - Perception : ~50-100 ms
    - Cognition : ~50-100 ms
    - Action : ~50-100 ms
    - **Total estimé** : 150-300 ms (typiquement ~200-250 ms pour un micro-ajustement).

- **Vitesse maximale de suivi du curseur** :
    - Pour un mouvement de 10 cm :
        - 1er micromouvement (0,2 s) : 9 cm → 45 cm/s
        - 2e micromouvement (0,2 s) : 0,9 cm → 4,5 cm/s
    - La vitesse de la main peut atteindre 50-100 cm/s pour des mouvements rapides.
    - Le système doit afficher le curseur sans latence perceptible (<50 ms, idéalement <16 ms).
    - Pour des mouvements contrôlés avec corrections, une vitesse de **30-50 cm/s** est raisonnable.

---
## Contrôle Continu HM40 - mercredi 28 mai 2025

**Exercice 1.**
**3) En quoi ces deux méthodes [Structuring Display & Keystroke] sont-elles complémentaires ?**
*   **Structuring the Display** s'intéresse à l'organisation perceptive et cognitive de l'information à l'écran : clarté, guidage de l'attention, facilité de repérage de l'information, compréhension de la structure. Elle est qualitative et vise à réduire la charge mentale de *recherche* et d'*interprétation*. Elle impacte positivement les opérateurs **M (mentaux)** de KLM.
*   **Keystroke Level Model (KLM)** s'intéresse à l'efficacité temporelle de l'exécution d'une tâche par un utilisateur expert, une fois qu'il sait quoi faire. Elle est quantitative et vise à optimiser la séquence d'opérations physiques et mentales élémentaires.
*   **Complémentarité**:
    *   Une bonne structuration d'écran (analysée par Structuring Display) **réduit le besoin d'opérateurs M** dans KLM : si l'information est bien organisée, l'utilisateur passe moins de temps à réfléchir, chercher, décider.
    *   KLM peut aider à choisir entre différentes options de conception qui sont toutes deux bien structurées perceptivement, en se basant sur la rapidité d'exécution.
    *   Structuring Display aide à s'assurer que l'utilisateur *peut trouver* et *comprendre* quoi faire. KLM aide à estimer *combien de temps cela prendra* une fois qu'il l'a trouvé et compris. Les deux visent une meilleure utilisabilité, l'une sous l'angle perceptif/cognitif, l'autre sous l'angle de la performance temporelle.

**Exercice 2. Trois grandes approches philosophiques traditionnelles de la perception sont la thèse du réalisme direct, la thèse représentative, et le phénoménalisme. Expliquer brièvement [...].**

*   **Réalisme Direct**:
    *   **Thèse**: Nous percevons directement les objets du monde tels qu'ils sont, sans aucun intermédiaire mental (représentation, donnée sensible). L'expérience visuelle *est* l'objet perçu, ou du moins une relation directe à celui-ci.
    *   **Schéma**: Percevant <---> Objet du monde
    *   **Arguments**: Simplicité, correspond à notre expérience naïve de la perception (on a l'impression de voir les choses "en direct").
    *   **Objections**: Difficulté à expliquer les illusions, les hallucinations, les rêves (où l'objet perçu n'est pas présent ou est différent de la réalité), les différences interindividuelles de perception (ex: daltonisme).

*   **Thèse Représentative (ou Réalisme Indirect, ou Théorie des "sense-data")**:
    *   **Thèse**: Nous ne percevons pas directement les objets du monde, mais des représentations mentales (idées, images mentales, "sense-data") de ces objets. Ces représentations sont causées par les objets externes et sont les seuls objets de notre conscience immédiate.
    *   **Schéma**: Percevant <---> [Représentation Mentale / Donnée Sensible] <---(causée par)--- Objet du monde
    *   **Arguments**: Explique bien les illusions (la représentation est faussée), les hallucinations (représentation sans objet externe correspondant), les rêves, la variabilité de la perception.
    *   **Objections**: Crée un "voile de la perception" : si nous n'avons accès qu'à nos représentations, comment savoir si elles sont fidèles aux objets réels ? Comment sortir de nos propres représentations pour vérifier ? Risque de scepticisme quant à la connaissance du monde extérieur.

*   **Phénoménalisme (ou Idéalisme Immatériel à la Berkeley)**:
    *   **Thèse**: Les objets physiques n'existent pas indépendamment de l'esprit ou de la perception. Être, c'est être perçu ("Esse est percipi" - Berkeley) ou être capable d'être perçu. Ce que nous appelons "objet" est en réalité une collection stable de données sensibles (phénomènes). Il n'y a pas de substance matérielle "derrière" les apparences.
    *   **Schéma**: Percevant <---> [Expérience Visuelle / Donnée Sensible] (= l'Objet)
    *   **Arguments**: Évite le problème du lien entre représentation et objet réel (puisqu'ils sont la même chose ou que l'objet est la collection des sensations). Cohérence logique si l'on accepte les prémisses.
    *   **Objections**: Très contre-intuitif (quid des objets quand personne ne les perçoit ? - Berkeley résout cela par Dieu comme percepteur universel). Risque de solipsisme (seul mon esprit et mes sensations existent). Difficulté à expliquer la régularité et la cohérence du monde partagé.

**Exercice 3. Répondez aux questions.**
**1) Peut-on être objectif dans ses jugements à propos de la subjectivité de l'utilisateur ? Préciser le sens des mots objectif/subjectif dans la question précédente et étayer votre réponse avec des exemples.**
*   **Sens des mots**:
    *   **Subjectivité de l'utilisateur**: Ses ressentis personnels, ses préférences, ses opinions, ses expériences vécues (ex: "Je trouve cette interface confuse", "J'aime cette couleur"). C'est une réalité *ontologiquement subjective* (elle existe dans son esprit).
    *   **Objectif dans ses jugements**: Formuler des constats factuels, vérifiables, non biaisés par ses propres préférences, à propos de cette subjectivité. C'est une *posture épistémique objective*.
*   **Réponse**: Oui, on peut (et on doit souvent en IHM) être objectif dans ses jugements à propos de la subjectivité de l'utilisateur.
*   **Exemples**:
    *   *Jugement objectif sur une subjectivité*: "7 utilisateurs sur 10 ont déclaré (subjectivement) trouver le bouton 'Valider' difficile à localiser." Le fait que 7/10 l'aient déclaré est un fait objectif, même si leur difficulté perçue est subjective.
    *   *Jugement objectif sur une subjectivité*: "Lors du test utilisateur, M. Dupont a exprimé (subjectivement) sa frustration par un froncement de sourcils et en disant 'C'est agaçant !'." L'observation du comportement et la retranscription de la parole sont des jugements objectifs sur une manifestation de sa subjectivité.
    *   En évaluation IHM, on recueille des données subjectives (questionnaires de satisfaction, verbatims) et on les analyse de manière la plus objective possible (statistiques, catégorisation des problèmes) pour en tirer des conclusions pour la conception.

**2) Une entité virtuelle est-elle réelle ? quelle est son ontologie ?**
*   (Similaire à Sujet 2023, Q1)
*   **Réelle ?**: Non au sens physique traditionnel (pas de masse, pas d'atomes propres). Oui en tant qu'entité informationnelle, structure de données, ou simulation existant au sein d'un système informatique. Réelle par ses effets dans le monde virtuel et parfois physique.
*   **Ontologie**: Son être est celui d'une construction logique, symbolique, et computationnelle. Elle existe en tant que *pattern* d'information. Son existence dépend d'un support matériel et d'un programme qui l'interprète.

**3) Quel état mental est indissociable d’une action en général ?**
*   (Similaire à Sujet 2023, Q1)
*   **L'intention**. Une action (par opposition à un simple mouvement réflexe ou accidentel) est un comportement dirigé par un but, une finalité. L'intention est l'état mental qui consiste à se proposer d'agir d'une certaine manière pour atteindre un but.

**Exercice 4. Présenter par un schéma simple le cycle des activités mentales et physiques en jeu [...]. Mettre en évidence les états mentaux, les actions physiques, les perceptions et l'interprétation. Mettre en évidence la décomposition entre niveaux physiques/syntaxiques/sémantiques. Que doit faciliter la réalisation d'une interface de qualité vis-à-vis du modèle proposé.**
*   (Voir la cheat sheet Section I.13 pour le schéma PlantUML et la description, qui reprend le cycle de Norman avec les niveaux).
*   **Niveaux (rappel)**:
    *   **Physique**: Interaction matérielle (mouvement de la main, photons de l'écran).
    *   **Syntaxique**: Structure des commandes, agencement des éléments (ex: clic sur icône "imprimante").
    *   **Sémantique**: Signification de l'action pour l'utilisateur (ex: "envoyer le document à l'imprimante") et signification pour le système (ex: exécuter la fonction `print_document()`).
*   **Ce que doit faciliter une IHM de qualité**:
    *   **Minimiser le Golfe de l'Exécution**: Faciliter la traduction du but (sémantique utilisateur) en actions physiques/syntaxiques compréhensibles par le système. Affordances claires, mappings naturels.
    *   **Minimiser le Golfe de l'Évaluation**: Faciliter la perception de l'état du système (physique/syntaxique) et son interprétation en termes significatifs pour l'utilisateur (sémantique utilisateur) afin qu'il puisse évaluer si son but est atteint. Feedback clair, immédiat, pertinent.
    *   Assurer une **cohérence** entre les niveaux et entre les intentions de l'utilisateur et le comportement du système.
    *   **Réduire la charge cognitive** en automatisant certaines traductions syntaxe/sémantique et en rendant le système prévisible.