# Falling It: From Concept to Google Play

## Overview
After gaining experience in Unity, I set myself the challenge of mastering the entire mobile game development lifecycle. The result is *Falling It*, a casual 3D physics-based puzzle game I developed from scratch and successfully published on the Google Play Store. The core gameplay requires players to strategically interact with the environment to make an apple fall to the ground.

## Key Features
- **Full Development Lifecycle**: Managed the entire project pipeline, from initial concept and game design to final publication and post-launch support.
- **Strategic 3D Physics Gameplay**: Core mechanics built around Unity's physics engine, creating engaging and challenging puzzles.
- **Google Play Services Integration**: Implemented **Cloud Save** for seamless progress synchronization and **Leaderboards** to foster competition.
- **Monetization with In-App Purchases (IAP)**: Integrated a full IAP system for non-intrusive monetization.
- **Dynamic Content Delivery**: Used **Unity Asset Bundles** and **Unity Cloud** to deliver new maps and events without requiring app updates.
- **Player Engagement**: Implemented **Push Notifications** and time-limited events with special rewards to keep players coming back.
- **Customization & Collectibles**: Players can unlock and collect cosmetic items to personalize their character and garden area.

## Gameplay & Features in Action

<!-- grid-2 -->
<div style="display: flex; gap: 16px; justify-content: center; align-items: flex-start;">
    <div style="width: 48%;">
        <video src="../img/projects/fallingit/fit_gameplay.mp4" controls loop style="width: 100%; border-radius: 8px; border: 2px solid #333;"></video>
        <p style="text-align: center; font-style: italic; margin-top: 0.5rem;">Core Physics Puzzle Gameplay</p>
    </div>
    <div style="width: 48%;">
        <video src="../img/projects/fallingit/fit_garden.mp4" controls loop style="width: 100%; border-radius: 8px; border: 2px solid #333;"></video>
        <p style="text-align: center; font-style: italic; margin-top: 0.5rem;">Customizing the Apple & Garden</p>
    </div>
</div>
<!-- end-grid -->

<div style="display: flex; justify-content: center; margin-top: 1rem;">
    <img src="../img/projects/fallingit/fit_event.jpg" alt="Limited-time event page" style="max-width:300px; width: 100%; height: auto; border-radius: 8px; border: 2px solid #333;">
</div>
<p style="text-align: center; font-style: italic; margin-top: 0.5rem;">Event page with special features</p>

## Technical Deep Dive: Key Integrations

This project was a fantastic opportunity to work with critical mobile gaming technologies beyond the game engine itself.

### Publishing to the Google Play Store
This was my first time publishing an app. The process involved learning to properly sign an application, manage Android Studio dependencies, and navigate the Google Play Console's requirements.

<div style="display: flex; justify-content: center;">
    <a href="https://play.google.com/store/apps/details?id=com.ChaelPixCorp.FallingIt&hl=en" target="_blank">
        <img src="../img/projects/fallingit/fit_playstore.png" alt="Falling It on the Google Play Store" style="max-width: 600px; width: 100%; border-radius: 8px;">
    </a>
</div>
<p style="text-align: center; font-style: italic; margin-top: 0.5rem;"><a href="https://play.google.com/store/apps/details?id=com.ChaelPixCorp.FallingIt&hl=en" target="_blank">View Falling It on the Play Store</a></p>

### Google Play Games, IAP & Push Notifications

<!-- grid-3 -->
<div style="display: flex; gap: 16px; justify-content: center;">
    <video src="../img/projects/fallingit/fit_loading.mp4" controls loop style="width: 30%; border-radius: 8px; border: 2px solid #333;"></video>
    <video src="../img/projects/fallingit/fit_leaderboard.mp4" controls loop style="width: 30%; border-radius: 8px; border: 2px solid #333;"></video>
    <video src="../img/projects/fallingit/fit_shop.mp4" controls loop style="width: 30%; border-radius: 8px; border: 2px solid #333;"></video>
</div>
<!-- end-grid -->
<p style="text-align: center; font-style: italic; margin-top: 0.5rem;">Left to Right: Google Play Sign-In & Cloud Save, Leaderboards, In-App Purchase Shop.</p>

<!-- grid-2 -->
<div style="display: flex; gap: 16px; justify-content: center; margin-top: 1rem;">
    <img src="../img/projects/fallingit/fit_notif1.jpg" alt="Push Notification Example 1" style="width: 48%; max-width: 250px; border-radius: 8px;">
    <img src="../img/projects/fallingit/fit_notif2.jpg" alt="Push Notification Example 2" style="width: 48%; max-width: 250px; border-radius: 8px;">
</div>
<!-- end-grid -->
<p style="text-align: center; font-style: italic; margin-top: 0.5rem;">Push notifications to re-engage players.</p>

### Dynamic Content with Asset Bundles
To keep the game fresh, I used **Unity Cloud** to host and deliver asset bundles. This allows me to add new maps, events, and items dynamically without forcing players to download a new version of the app from the Play Store.

<!-- grid-2 -->
<div style="display: flex; gap: 16px; justify-content: center; align-items: center;">
    <video src="../img/projects/fallingit/fit_maps.mp4" controls loop style="width: 48%; border-radius: 8px; border: 2px solid #333;"></video>
    <img src="../img/projects/fallingit/fit_assetbundles.png" alt="Asset Bundles in Unity Cloud" style="width: 48%; border-radius: 8px;">
</div>
<!-- end-grid -->
<p style="text-align: center; font-style: italic; margin-top: 0.5rem;">Left: Maps loading dynamically from the cloud. Right: Asset bundles configured in Unity Cloud.</p>

## Lessons Learned
> This project was an invaluable crash course in the entire mobile gaming ecosystem. It taught me that a successful game is as much about its underlying infrastructure, publishing process, and live-ops strategy as it is about the core gameplay. Mastering asset bundles and cloud services was a highlight, as it unlocks the ability to create truly dynamic and evolving game experiences.