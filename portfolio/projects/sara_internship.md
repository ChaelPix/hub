# SARA: Visual Servoing for Mobile Manipulation with 360° Vision

## Overview
Six-month research internship at the **CIAD laboratory** (UTBM, France) on the **SARA** project (*See All, Reach All*). I designed and implemented a full pipeline enabling a mobile manipulator (omnidirectional base + 6-DOF arm) to **detect, locate, and grasp objects anywhere around it** using a single 360° camera, no search phase, no LiDAR, just vision.

This work resulted in my **first-author scientific paper** accepted to the ICPR international conference 2026!

- **Lab**: CIAD, Connaissance et Intelligence Artificielle Distribuées (UR 7533)
- **Topic**: Spherical visual servoing for mobile manipulators
- **Stack**: ROS 2, C++, Python, PyTorch, ViSP, CoppeliaSim

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; border-radius: 8px;">
    <iframe src="https://www.youtube.com/embed/oC3VeolFC7M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>


## The Robot

<div style="display: flex; gap: 16px; justify-content: center; align-items: center; flex-wrap: wrap;">
    <img src="img/projects/sara/spheres.jpg" alt="Perception and manipulation spheres" style="height: 350px; border-radius: 8px; object-fit: contain;">
</div>

An omnidirectional base (2 DOF) carrying a Doosan arm (6 DOF) and an Insta360 ONE X2. 8 degrees of freedom total, one 360° eye.

## What I Built

### 360° Perception Pipeline
A YOLO detector finds the object in the equirectangular image. A virtual perspective view is extracted to remove spherical distortion, then **MegaPose** estimates the full 6D pose. The pipeline runs at ~12 Hz in tracking mode.

<!-- grid-2 -->
<div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
    <img src="img/projects/sara/yolo_360.jpg" alt="YOLO detection on 360° image" style="width: 45%; min-width: 250px; border-radius: 8px;">
    <img src="img/projects/sara/pose_estimation.jpg" alt="6D pose estimation" style="width: 45%; min-width: 250px; border-radius: 8px;">
</div>
<!-- end-grid -->

### Spherical Visual Servoing Controller
The core idea: the **perception sphere** (what the camera sees, 360°) and the **manipulation sphere** (what the arm can reach) move together. A PBVS controller with a **spherical weighting matrix** distributes motion between the base and the arm. The behavior *orient, approach, reach* emerges from the math, no hard-coded sequencing.

### Extrinsic Calibration via Photometric Visual Servoing
The arm itself is used as a calibration target: its 3D model is rendered into the 360° image and aligned with the real arm by minimizing the photometric error. Recalibration takes under 5 minutes.

## Results

<!-- grid-3 -->
<div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
    <img src="img/projects/sara/result_low.jpg" alt="Grasping low object" style="width: 30%; min-width: 200px; border-radius: 8px;">
    <img src="img/projects/sara/result_mid.jpg" alt="Grasping mid-height object" style="width: 30%; min-width: 200px; border-radius: 8px;">
    <img src="img/projects/sara/result_high.jpg" alt="Grasping high object" style="width: 30%; min-width: 200px; border-radius: 8px;">
</div>
<!-- end-grid -->

- **100% success rate** across all 12 tested configurations (4 directions × 3 heights)
- Spherical weighting vs. uniform: **100% vs. 25%** on low objects (uniform causes self-collision)
- Direct sim-to-real transfer, same parameters, no retuning
- Live demos at the CIAD research day and Fête de la Science, zero failures

## Paper
This work resulted in a **first-author scientific paper** submitted and accepted to the **ICPR** (International Conference on Pattern Recognition) international conference 2026:

> *See All Reach All: Spherical Vision-Based Servoing for Full-Surround Mobile Manipulation*

