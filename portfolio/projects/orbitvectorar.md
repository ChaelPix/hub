# OrbitVectorAR: Pushing the Boundaries of a School Project

<div style="display: flex; justify-content: center;">
    <img src="img/projects/orbitvectorar/app_title.png" alt="OrbitVectorAR Logo" style="max-width:200px; width: 100%; height: auto; border-radius: 8px;">
</div>

What began as a standard school assignment to create a simple service app, I decided to push far beyond the curriculum. As a team of two, I took the lead on developing an entire Android application from the ground up, transforming the project into a complete, physics-based augmented reality game published on the Google Play Store. My partner handled the backend services, while I engineered the core AR experience, game logic, UI, and the entire asset pipeline.

## Project Demo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 1rem;">
    <iframe src="https://www.youtube.com/embed/WQnmt3orwIM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## The Core Concept: A Celestial Puzzle
OrbitVectorAR is an AR puzzle game where players shoot arrows at targets by skillfully using the gravitational pull of procedurally generated planets and moons that appear in their real-world environment.

<div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
  <img src="img/projects/orbitvectorar/ar1.jpg" alt="OrbitVectorAR Gameplay 1" style="width: 32%; min-width: 250px; border-radius: 8px;">
  <img src="img/projects/orbitvectorar/ar2.jpg" alt="OrbitVectorAR Gameplay 2" style="width: 32%; min-width: 250px; border-radius: 8px;">
  <img src="img/projects/orbitvectorar/ar3.jpg" alt="OrbitVectorAR Gameplay 3" style="width: 32%; min-width: 250px; border-radius: 8px;">
</div>

---

## Technical Deep Dive: Engineering a Complete AR Experience

As the sole developer of the client application, I engineered several complex systems from scratch. Here’s a look at the core components:

### 1. The Physics Engine: Simulating a Solar System
The heart of the game is a custom physics engine I built to handle all celestial mechanics.
- **Real-time Newtonian Gravity**: I implemented the `F = G * (m1*m2)/r²` gravitational formula to realistically simulate the pull of every planet and moon on the arrow, including protection against singularities.
- **Predictive Trajectory Simulation**: Before firing, the game simulates and displays the arrow's future path in real-time, allowing players to visualize the complex gravitational effects and aim their shots strategically.
- **"Forgiving" Collision System**: I designed a smart collision system where the physical collision radius of objects differs from their visual radius, allowing for more exciting and fair "close-call" shots.

### 2. The Content Engine: Procedural Generation & Dynamic Delivery
- **Intelligent Level Generation**: Every level is unique, generated on the fly by a custom algorithm that adaptively increases difficulty while ensuring every puzzle is solvable.
- **Dynamic Asset Delivery Pipeline**: I built a complete pipeline to add new content (like cosmetic skins) to the game **without needing to release an app update**.
    - **Client-Side**: On launch, the app fetches a list of all available skins from the server and downloads only the missing 3D models and textures to the device's local storage.
    - **Server-Side**: We set up a simple web interface for uploading new assets, which are then immediately available to all players.
- **AI-Powered Asset Creation & Optimization**: To rapidly create a variety of unique skins, I used AI tools to generate initial 3D models. I then developed a **custom Blender addon in Python** to automatically process these models, remeshing and baking textures to optimize them for mobile performance, **reducing file sizes by over 1000%**.

### 3. The AR Engine: Performance and Stability
- **Smart Anchor Placement**: To combat unstable AR tracking, I designed a system that waits for tracking to stabilize before placing the game world. It includes an intelligent fallback to place the anchor at a safe distance if no surface is found, ensuring the game starts quickly and reliably.
- **Zero-Allocation Rendering Loop**: I created a pool of reusable matrices for all 3D transformations. This completely avoids memory allocation during the render loop, eliminating stutter caused by garbage collection.
- **Gapless Audio Engine**: To solve a common Android bug causing audible gaps in looping music, I engineered a custom dual `MediaPlayer` system. It prepares the next loop while the current one is playing, ensuring a seamless, professional-sounding audio experience.

### 4. The Application Layer: Modern UI & Quality Assurance
- **Full-Featured UI with Jetpack Compose**: I built a complete, modern UI fully integrated with the backend, including a dynamic shop, player inventory, and global leaderboard.
- **Robust Testing Strategy**: To ensure quality, I implemented a multi-layered testing strategy, including **Unit Tests** for the core physics engine and math utilities, and **UI Tests** for critical user flows like the registration process.

<!-- grid-3 -->
<div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
    <img src="img/projects/orbitvectorar/screen_shop.png" alt="Shop Screen" style="width: 30%; min-width: 200px; border-radius: 8px;">
    <img src="img/projects/orbitvectorar/screen_equip.png" alt="Equip Screen" style="width: 30%; min-width: 200px; border-radius: 8px;">
    <img src="img/projects/orbitvectorar/screen_lead.png" alt="Leaderboard Screen" style="width: 30%; min-width: 200px; border-radius: 8px;">
</div>
<!-- end-grid -->

---

## Technology Stack

| Area | Technology |
|---|---|
| **Application & Pipeline (My Work)** | Kotlin, ARCore, Jetpack Compose, OpenGL, Blender (Python) |
| **Backend (Partner's Work)** | PHP, MySQL, Apache |