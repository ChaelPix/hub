# SARA: Visual Servoing for Mobile Manipulation with 360° Vision

## Overview
Six-month research internship at the **CIAD laboratory** (UTBM, France) on the **SARA** project (*See All, Reach All*). I designed and implemented a full pipeline enabling a mobile manipulator (differential drive base + 6-DOF arm) to **detect, locate, and grasp objects anywhere around it** using a single 360° camera, no search phase, no LiDAR, just vision.

This work resulted in my **first-author scientific paper** accepted to the ICPR international conference 2026! Available on [Springer](https://link.springer.com/chapter/10.1007/978-3-032-31438-3_10).

- **Lab**: CIAD, Connaissance et Intelligence Artificielle Distribuées (UR 7533)
- **Topic**: Spherical visual servoing for mobile manipulators
- **Stack**: ROS, C++, Python, Unity, C#, ViSP, OpenCV

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; border-radius: 8px;">
    <iframe src="https://www.youtube.com/embed/oC3VeolFC7M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>


## What I Built


### Spherical Visual Servoing Controller
The core idea: the **perception sphere** (what the camera sees, 360°) and the **manipulation sphere** (what the arm can reach) move together. A PBVS controller with a **spherical weighting matrix** distributes motion between the base and the arm. The behavior *orient, approach, reach* emerges from the math.

<div style="display: flex; gap: 16px; justify-content: center; align-items: center; flex-wrap: wrap;">
    <img src="img/projects/sara/spheres.jpg" alt="Perception and manipulation spheres" style="height: 350px; border-radius: 8px; object-fit: contain;">
</div>

### 360° Perception Pipeline
A YOLO detector finds the object in the equirectangular image. A virtual perspective view is extracted to remove spherical distortion, then **MegaPose** estimates the full 6D pose. The pipeline runs at ~12 Hz in tracking mode.

<!-- grid-2 -->
<div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
    <img src="img/projects/sara/yolo_360.jpg" alt="YOLO detection on 360° image" style="width: 45%; min-width: 250px; border-radius: 8px;">
    <img src="img/projects/sara/pose_estimation.jpg" alt="6D pose estimation" style="width: 45%; min-width: 250px; border-radius: 8px;">
</div>
<!-- end-grid -->

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
- Live demos at the CIAD research day and the [Inouih Festival](https://festival-inouih.fr/)

## Paper & Conference
This work resulted in a **first-author scientific paper** submitted and accepted to **ICPR 2026** (International Conference on Pattern Recognition), Lyon, August 2026.
I presented this work during a **poster session**!

<div class="markdown-media-row">
    <img src="img/projects/sara/poster.png" alt="ICPR 2026 research poster See All, Reach All">
    <img src="img/projects/sara/poster2.png" alt="ICPR 2026 research poster See All, Reach All">
</div>
