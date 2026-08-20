# ClaviAR: 3-Second Mixed Reality Piano Calibration

## Overview
ClaviAR is a mixed-reality piano prototype built as a school project with a startup-style business analysis behind it. The core technical goal was simple to state and hard to make reliable: put on a Meta Quest, look at a real piano, and align the virtual keyboard overlay fast enough that the player can start practicing almost immediately.

In the final demo, the calibration reaches a usable alignment in about **3 seconds** in the filmed conditions. Around that calibration layer, we built a rhythm-game demo with generated piano exercises, score feedback, lives, and reward cards. The roguelike structure was mainly a way to present and stress-test the full pipeline: calibration, virtual keyboard placement, generated music, spatial notation, input judging, and player feedback.

- **Context**: PE01 entrepreneurship project + MV50 technical prototype
- **Target**: Meta Quest 3 / 3S with a real piano or MIDI keyboard
- **Stack**: Unity 2022, C#, URP, OpenXR, Meta XR / Interaction SDK

## Real Quest Demo
<video src="img/projects/claviar/claviar_demo.mp4" controls style="width: 50%; display: block; margin: 0 auto;"></video>

## MIDI Generator / Simulation Demo
<video src="img/projects/claviar/claviar_gameplay_demo.mp4" controls></video>

## The Experience

<!-- grid-3 -->
<div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
    <img src="img/projects/claviar/claviar_gameplay.png" alt="ClaviAR gameplay with spatial score and real piano" style="width: 30%; min-width: 200px; border-radius: 8px;">
    <img src="img/projects/claviar/claviar_score.png" alt="ClaviAR score and timing feedback" style="width: 30%; min-width: 200px; border-radius: 8px;">
    <img src="img/projects/claviar/claviar_rewards.png" alt="ClaviAR roguelike reward cards" style="width: 30%; min-width: 200px; border-radius: 8px;">
</div>
<!-- end-grid -->

The player sees the real keyboard through the headset, with a virtual score, timing cues, and feedback layered in mixed reality. The prototype tracks what should be played, judges timing, updates score and lives, then offers reward cards between short generated levels.

## Fast Automatic Calibration
The important computer-vision result is the user experience: ClaviAR can align the virtual keyboard with the physical piano quickly enough to keep the session flow intact. Calibration is not a small UX detail for a piano-learning app; if the overlay drifts or takes too long, the whole practice experience collapses.

The public demo focuses on the outcome rather than the implementation details: the system observes the keyboard through the Quest cameras, estimates a usable keyboard placement, and exposes that calibrated keyboard to the visual overlay and gameplay systems.

<div style="display: flex; justify-content: center;">
    <img src="img/projects/claviar/claviar_calibration_comparison.jpg" alt="ClaviAR calibration compared with PianoVision" style="width: 85%; min-width: 280px; border-radius: 8px;">
</div>

## Generated Piano Exercises
To avoid hand-authoring every demo level, we built a generator that creates short piano segments and turns them into a gameplay chart. The generated notes drive the spatial score, the keyboard timing cues, and the scoring system, while the simulation demo shows the same musical layer running without needing to film every Quest session on the real setup.

The generator made the project easier to demonstrate repeatedly: each run can produce a new short exercise, wrap it in scoring, and feed it into the mixed-reality display.

## Game Loop
The roguelike layer gives the technical pipeline a clear demo loop:

- **Calibrate** the real piano and generate the virtual keyboard overlay.
- **Generate** a short playable exercise.
- **Play** with spatial notation, timing cues, and score feedback.
- **Reward** the player with cards that change future levels.
- **Repeat** with a slightly different musical challenge.

This game structure was not the main technical claim of the project. It was the presentation layer that made the calibration, generated exercises, and scoring pipeline visible in a way people could understand quickly.

## Architecture
The prototype is split into six main systems:

- **Calibration**: Quest camera input, keyboard alignment, spatial keyboard data
- **Keyboard generation**: virtual key meshes aligned to the real piano
- **Music generation**: generated exercises and gameplay chart data
- **Display**: spatial sheet music, scrolling notes, key timing cues
- **Input**: piano input and timing events
- **Game loop**: levels, score, lives, rewards, difficulty progression

## Business and Product Work
ClaviAR was also developed as a startup-style project. We studied PianoVision and other piano-learning tools, built a value proposition, market analysis, PESTEL, Porter/SWOT, pricing assumptions, MVP scope, and launch positioning.

The product position we kept was a "game-coach" for a niche audience: Quest owners who already have a piano or keyboard and want short, motivating practice sessions. The key leverage is the mixed-reality onboarding: make calibration fast, keep the player on the real instrument, and use the game layer to make repetition feel less like homework.

## Technology Stack

| Area | Technology |
|---|---|
| **Engine** | Unity 2022, URP |
| **XR** | OpenXR, Meta XR / Interaction SDK, Quest passthrough |
| **Language** | C# |
| **Computer Vision** | Fast automatic keyboard alignment for mixed reality |
| **Music** | Procedural piano exercises and generated gameplay charts |
| **Gameplay** | Score windows, lives, reward cards, difficulty progression |

## Result
- Built a Quest prototype centered on fast real-piano calibration, with about 3-second alignment in the filmed demo conditions.
- Integrated calibration, virtual keyboard placement, generated exercises, spatial notation, scoring, and a replayable demo loop.
- Produced a technical report, final presentation, demo videos, and business dossiers around the same project.
