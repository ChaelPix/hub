========
Packages
========

.. danger::

    En cours de construction

"pixx" est le robot conçu pour les finales Worldskills 2024 à Lyon. Il reprend le nom du robot des nationales 2023 : "Pix". Il fonctionne sous `Ros2 Humble <https://docs.ros.org/en/humble/index.html/>`_.

.. contents:: Sommaire
    :depth: 4

`pixx_ws <https://github.com/Worldskills-France-Mobile-Robotics/pixx_ws>`_
***************************************************************************

Ce repository contient tous les repos de pixx nécessaires au robot. Il permet d'importer tous les repos sur la machine via un fichier repos.

`pixx_control <https://github.com/Worldskills-France-Mobile-Robotics/pixx_control>`_
*************************************************************************************

Ce repository utilisant ros2_control permet de contrôler le robot pixx en différenciel. Il publie l'odométrie calculée à partir des encodeurs sur pixx_controller/odom. Il lance également la communication entre le Titan et la vmxpi.

Params à changer selon le robot :
- Distance entre les 2 roues diagonales (....yalml)
- position du lidar

pixx_ydlidar
************
custom ydlidar :
https://github.com/lghrainbow/ydlidar_ros2_driver/tree/humble-devel


rf20_laser_odometry
*******************

https://github.com/MAPIRlab/rf2o_laser_odometry

pixx_localization
*****************

pixx_maps
*********

pixx_navigation
***************

pixx_gui_dashboard
******************
- Voir état robot (on/off)
- Synchroniser les dates (chronyc)
- Changer wifi Robot - Maison
- Eteindre Robot
- Fichier Paramètres
