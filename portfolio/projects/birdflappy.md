# AI Learns to Play Flappy Bird with NEAT

## Project Goal
This project demonstrates the power of neuroevolution by training an Artificial Intelligence to master the notoriously difficult game Flappy Bird from scratch. Using the **NEAT (NeuroEvolution of Augmenting Topologies)** algorithm, I created a system where generations of AI "birds" learn and adapt, evolving complex neural networks to navigate the game's obstacles without any pre-programmed strategies.

<div style="margin-bottom: 1rem;">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; border-radius: 8px;">
        <iframe src="https://www.youtube.com/embed/mEfjpr5itfc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    </div>
    <p style="text-align: center; font-style: italic; margin-top: 0.5rem;">Demo</p>
</div>

## Designing the AI's Brain
The success of this project relied on two key components: the neural network's inputs and the function that would guide its learning.

### Neural Network Architecture
Each bird is controlled by its own neural network. The network starts simple and grows more complex through evolution.

-   **Input Layer (5 Neurons)**: Provides the AI with real-time data about its environment.
    -   Bird's Y-position
    -   Bird's vertical velocity
    -   Horizontal distance to the next pipe
    -   Y-position of the top pipe
    -   Y-position of the bottom pipe
-   **Output Layer (1 Neuron)**: Makes a single decision.
    -   A value > 0.5 triggers the bird to "flap."
-   **Hidden Layers**:
    -   Start with zero hidden neurons.
    -   The NEAT algorithm dynamically adds nodes and connections through mutation, allowing the AI to develop its own internal logic.

### The Fitness Function: My Guiding Hand
The key to successful learning was engineering a nuanced fitness function. This function scores each bird's performance, determining its chances of "reproducing." I designed it to reward not just survival, but *smart* behavior.

-   **Base Score**:
    -   `+0.1` points for every frame it stays alive.
    -   `+10.0` points for each pipe successfully passed.
-   **Behavioral Bonus**:
    -   A continuous reward for staying centered between the pipes. This encourages stable flight rather than frantic flapping. The bonus was calculated as:
        ```
        Bonus = max(0, 1 - |birdY - gapCenterY| / 150)
        ```
-   **Penalties**:
    -   Instant death (fitness reset to 0) for hitting a pipe or the screen boundaries.

> The top-performing AI successfully navigated over **600+ pipes**, evolving from random behavior to a superhuman player in just 9 generations.
