# Pianu!

Pianu! is a landscape Android piano game I built in Kotlin and Jetpack Compose. You import a MIDI file, pick a hand, and play it on a class-compliant USB MIDI piano. The notation ribbon, SoundFont audio, and hit windows all share one MIDI timeline, so what you read is what you hear and what gets judged.

It is a sheet-reading trainer with an osu-style loop: timing windows, combo, a life vial, and a fast restart when you fail. The on-screen keyboard is the instrument surface, not a dashboard.

- **Platform**: Android, landscape
- **Input**: USB MIDI piano via my [fork](https://github.com/ChaelPix/USB-Midi-Android-Plugin) of Arthur Vasseur's plugin. Stock v1 registered on Quest but never opened the device; I added an Android `MidiManager` path for Horizon OS, then a later pass for recent Android (lifecycle, duplicate notes, split MIDI callbacks) so the same AAR drives Pianu.
- **Stack**: Kotlin, Jetpack Compose, FluidSynth, Bravura / SMuFL

<figure class="project-video-card project-video-wide"><video src="img/projects/pianu/pianuFUN.mp4" controls playsinline></video><figcaption>Gameplay capture from a mid-development checkpoint</figcaption></figure>

## Play on the real instrument

Notes approach on a compact ivory ribbon: treble, bass, or both, depending on the selected hand. A red playhead is the judgment line. On the keyboard, a white base circle and a shrinking coloured ring meet at onset for a 100. Left-hand notes are blue, right-hand notes are orange. Hit captions (`100` / `80` / `50`) fly to the HUD score; a miss drops locally.

Windows are tight on purpose: 100 ±50 ms, 80 ±100 ms, 50 ±160 ms. Combo scales the score. Life starts at 8; a miss spends one, and every five hits restore one. Empty the vial and the HUD, life bar, and plate fall while the keyboard stays, then the run restarts.

<div class="project-video-grid">
    <figure class="project-video-card"><img src="img/projects/pianu/card.jpg" alt="Pianu play surface with notation ribbon, HUD, and keyboard rings"><figcaption>Play: notation ribbon, life vial, and keyboard approach rings</figcaption></figure>
    <figure class="project-video-card"><img src="img/projects/pianu/catalogue.jpg" alt="Pianu catalogue with imported MIDI pieces"><figcaption>Catalogue: import MIDI, rate difficulty, keep best score</figcaption></figure>
</div>

## Catalogue, then modifiers

The library hangs off the screen edges: song chips on the right, career slab on the left. Import a Standard MIDI File, hear a SoundFont preview, and start a run from the selected piece.

On import, difficulty is not a BPM guess or a filename heuristic. The rater keeps only the playable piano stream for that hand (C2–B5, no drums). Notes that start within 24 ms count as one chord, so a six-note hit is one reading event, not six. It then slides a four-second window across the piece and measures how many of those events arrive per second. The working rate is mostly the 90th-percentile window (70%), with a little of the average and the peak so a single burst cannot pretend the whole song is hard.

That rate is scaled by what those events actually ask of the hands: chord size, leap size, how wide a hand must span, whether left and right move independently, syncopation, and the share of black keys. The result maps to a 1–10 star meter whose steps get wider at the top. Nine and ten also need a high sustained rate *and* several of those complexity signals at once. Left, right, and both are rated separately; the catalogue stars follow the Hands modifier.

Modifiers are a full-bleed loadout, not a settings page. Hands, tempo, appear speed, life, rank floors, guides, transpose, song audio, Perfection, and Auto-play all change a live score multiplier. Tempo scales the clock; appear speed only retunes how far ahead the ribbon looks. The same parsed MIDI feeds preview, engraving, and gameplay audio.

<figure class="project-video-card project-video-wide"><img src="img/projects/pianu/modifiers.jpg" alt="Pianu modifiers overlay with tempo, life, hands, and rank options"><figcaption>Modifiers overlay: one loadout for the whole catalogue</figcaption></figure>


