# AI NPC Playground: Conversational VR

## Overview
This project brings virtual characters to life by creating truly interactive, AI-powered NPCs. My goal was to move beyond scripted dialogues and implement a full pipeline of local AI tools—speech recognition, natural language processing, and text-to-speech—to enable fluid, unscripted conversations in a VR environment.

## Key Features
- **Real-Time Voice Interaction**: Utilizes **Whisper** for high-accuracy speech-to-text, allowing you to speak naturally with the NPCs.
- **Locally-Hosted AI Brain**: Powered by a **Llama 3.1 8B model** running locally, ensuring private, low-latency, and autonomous NPC responses.
- **Dynamic Lip-Sync**: A custom-coded system analyzes the generated speech audio to animate the NPC's facial blendshapes in real-time for believable dialogue delivery.
- **Unique AI Personalities**: Interact with three distinct characters, each defined by a unique prompt:
    - **Teen Girl**: Shy and reserved.
    - **Teen Boy**: Friendly and curious.
    - **Rick**: Sarcastic and rude, modeled after the character from *Rick and Morty*.
- **Full VR & Hand-Tracking Support**: Developed using the **Meta SDK** and **Unity's XR Framework** for an immersive experience on the Oculus Quest 3.

## Demo Videos

See the system in action in both a standard and a full VR environment.

<div style="margin-bottom: 1rem;">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; border-radius: 8px;">
        <iframe src="https://www.youtube.com/embed/79uKlT-lXAg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    </div>
    <p style="text-align: center; font-style: italic; margin-top: 0.5rem;">Standard Desktop Demo</p>
</div>

<div style="margin-bottom: 1rem;">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; border-radius: 8px;">
        <iframe src="https://www.youtube.com/embed/fANoMa7ZPnk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    </div>
    <p style="text-align: center; font-style: italic; margin-top: 0.5rem;">Immersive VR Demo with Hand-Tracking</p>
</div>

## Technology Stack
| Component | Technology | Implementation Details |
|---|---|---|
| **Speech Recognition** | Whisper Large V3 Turbo | Connected via Hugging Face API for fast and accurate transcription. |
| **Language Processing** | Llama 3.1 8B | Hosted on a **local server** to power the core NPC logic. |
| **Text-to-Speech** | F5TTS | Implemented via a **local server** for dynamic voice generation. |
| **Engine & Platform** | Unity, Meta SDK | Built with Unity's XR Framework for Oculus Quest 3 compatibility. |
| **Lip-Sync** | Custom C# Script | Analyzes audio output and maps phonemes to facial blendshapes. |

## Lessons Learned
> This was my first project in VR development, and it was a fantastic learning experience with the **Meta SDK** and **Unity's XR framework**. Integrating three separate AI systems (STT, NLP, TTS) into a single, responsive loop was a major challenge that honed my skills in system architecture and asynchronous programming.