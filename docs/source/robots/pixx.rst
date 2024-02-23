====
Pixx
====
.. danger::

    En cours de construction

"pixx" est le robot conçu pour les finales Worldskills 2024 à Lyon. Il reprend le nom du robot des nationales 2023 : "Pix". Il fonctionne sous `Ros2 Humble <https://docs.ros.org/en/humble/index.html/>`_.

.. contents:: Sommaire
    :depth: 4

Environnement
#############

Installation Ros2 et Outils utiles (Ordinateur)
********************************************

Pour faciliter l'installation de ros2 et de d'autres outils, vous pouvez utiliser le repos `SetupUbuntu22 <https://github.com/ChaelPix/Setup-Ubuntu22>`_. Il contient un fichier setup.sh permettant d'automatiser l'installation.

.. code-block::

    cd ~
    git clone https://github.com/ChaelPix/Setup-Ubuntu22.git
    sudo chmod +x setup.sh
    ./setup.sh

Au démarrage du script, il demandera :
- Adresse Mail pour la clé ssh
- Adresse Mail pour git config
- Username pour git config

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


Synchro Heure
-------------
sudo chronyc -a makestep

Docker
------

Packages
########

pixx_drive
**********

pixx_odom
*********
https://github.com/MAPIRlab/rf2o_laser_odometry

pixx_slam
*********

pixx_gui_dashboard
**************
- Voir état robot (on/off)
- Synchroniser les dates (chronyc)
- Changer wifi Robot - Maison
- Eteindre Robot
- Fichier Paramètres

pixx_ydlidar
************
custom ydlidar :
https://github.com/lghrainbow/ydlidar_ros2_driver/tree/humble-devel

pixx_nav2_config
****************

pixx_behavior_trees
*******************

Lancer pixx
###########

Contrôle Manuelle (Manette)
***************************

Autonome
********

Installation LiDAR (Raspberry Pi)
---------------------------------

Lancer SLAM
-----------

Lancer Nav2
-----------