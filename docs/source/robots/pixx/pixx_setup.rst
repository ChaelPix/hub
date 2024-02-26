=====
Setup
=====

.. danger::

    En cours de construction

"pixx" est le robot conçu pour les finales Worldskills 2024 à Lyon. Il reprend le nom du robot des nationales 2023 : "Pix". Il fonctionne sous `Ros2 Humble <https://docs.ros.org/en/humble/index.html/>`_.

.. contents:: Sommaire
    :depth: 4

Environnement
#############

Installation de l'ordinateur
****************************

Repos `setupUbuntu22 <https://github.com/ChaelPix/Setup-Ubuntu22>`_. 
Il contient un fichier pc_setup.sh permettant d'installer ce qui est nécessaire à l'environnement de travail.

.. code-block::

    cd ~
    git clone https://github.com/ChaelPix/Setup-Ubuntu22.git
    sudo chmod +x setup.sh
    ./setup.sh

Au démarrage du script, il demandera :
- Adresse Mail pour la clé ssh et git config
- Username pour git config
- Mdp sudo

Le script va :

- Mettre à jour le système
- Installer Ros2
    - Setup des sources
    - Installation de Ros2 Desktop Full
    - Initialiser Rosdep
    - Installer Gazebo
    - Créer un alias "pixxdomain" pour "export ROS_DOMAIN_ID=33"
- Installer des outils
    - Terminator
    - Visual Studio Code
    - Git
- Création Clé ssh
    - Génération de la clé en rsa 4096
    - Création d'un alias "showssh" 
    - Activation de ssh argent
- Installer Driver Graphiques
- Installer Chrony et mettre le Pc en serveur NTP pour la raspberry


Installation de Pixx
####################

Repos `pixx_ws <https://github.com/ChaelPix/setup-Ubuntu22>`_. 

Cela crée les workspaces et clones les packages.