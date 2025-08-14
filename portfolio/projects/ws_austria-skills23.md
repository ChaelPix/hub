# SkillsAustria 2023: International Training

<!-- grid-1 -->
<div style="display: flex; justify-content: center;">
    <img src="img/worldskills/austria/ws_austria23.jpg" alt="SkillsAustria 2023" style="max-width: 200px; width: 100%; height: auto; border-radius: 8px;">
</div>
<!-- end-grid -->

## The Challenge: Mastering a New System Under Pressure
As a newly selected member of the French WorldSkills Team, I was invited to participate in the Austrian national competition for training. The real challenge: **we received a brand-new, unfamiliar robot just two weeks before the event.** This was a high-speed sprint to design, build, and program a complete robotics stack from scratch.

## Technical Achievements
This competition required mastering the latest robotics standards. I developed the entire system on **ROS2 Humble** and **C++**, using a Studica VMX-pi and a Raspberry Pi.

- **Full ROS2 Navigation Stack (Nav2):** I successfully deployed the industry-standard `Nav2` framework. This involved:
    - **Mapping:** Using `slam_toolbox` to build a map with IR and ultrasonic sensors.
    - **Localization:** Implementing `AMCL` (Adaptive Monte Carlo Localization) to enable the robot to know its precise location on the map.
    - **Path Planning:** Configuring `Nav2` to handle dynamic pathfinding and obstacle avoidance for robust, intelligent navigation.
- **Advanced Vision Integration:** I used a Raspberry Pi camera with **OpenCV** for QR code detection, fully integrating the perception pipeline into the ROS2 ecosystem.

### Gallery
<!-- grid-2 -->
<div style="display: flex; gap: 16px; justify-content: center;">
    <img src="img/worldskills/austria/robot_austria.jpg" alt="Austria Competition Robot" style="width: 48%; height: auto; object-fit: contain; border-radius: 8px;">
    <img src="img/worldskills/austria/austriaskills.jpg" alt="SkillsAustria Competition Floor" style="width: 48%; height: auto; object-fit: contain; border-radius: 8px;">
</div>
<!-- end-grid -->