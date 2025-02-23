# First-Seconds CPI Rules

## The Neuroscience of Instant Comprehension  

### Cognitive Processing Limitations  
Research shows mobile users allocate **400–600 milliseconds** to evaluate ad relevance before swiping away[5]. Hybrid puzzle games face heightened scrutiny because their dual casual/mid-core nature risks confusing audiences if not instantly contextualized. Successful ads leverage:  
- **Preattentive visual processing**: The brain identifies basic shapes/colors in 200ms  
- **Saccadic eye movements**: Users fixate on central focal points first  
- **Auditory priming**: Sound cues accelerate pattern recognition  

**Example:** *Royal Match* ads use a radial burst of gold particles around matched tiles (preattentive motion) paired with a ascending chime (auditory priming) to communicate match-3 mechanics before conscious processing begins[5].  

---

## Visual Implementation Framework  

### 1. Focal Point Composition  
| Element          | Specification                          | Purpose                           |  
|-------------------|----------------------------------------|-----------------------------------|  
| Core Mechanic     | 55–60% of frame area                  | Instant genre recognition         |  
| Progress System   | 15–20% (e.g., level counter)          | Depth signaling                   |  
| Reward Preview    | 10–15% (floating gem/coin)            | Motivation hook                   |  
| Negative Space    | 15% minimum                           | Reduce cognitive load             |  

**Color Contrast Guidelines:**  
- **Primary mechanic:** RGB values with ≥30% luminance difference from background  
- **Interactive elements:** #FFD700 (gold) or #00FF00 (green) for positive valence  
- **Avoid:** Analogous color schemes causing blending (e.g., blue on teal)  

---

## Audio-Visual Synergy Tactics  

### 1. Millisecond-Precise Sound Design  
- **0–300ms:** High-frequency "ping" (2000–4000Hz) draws attention  
- **300–600ms:** Descending melodic motif establishes genre (e.g., puzzle chimes)  
- **600–1000ms:** Bass thump on tile match/placement confirms action  

**Case Study:** *Triple Tile* ads use a **C6 piano note** (1046.5Hz) at 0:00.4 synchronized with a tile rotation, achieving 19% higher 1-second retention vs. silent opens[5].  

---

## Platform-Specific Optimization  

### 1. TikTok/Reels Vertical Format (9:16)  
- **Focal Pyramid Layout:**  
```
   Top 20%: Brand logo (animated 3D flip)  
   Middle 50%: Core gameplay (zoomed 120%)  
   Bottom 30%: Progress bar + CTA button  
```
- **Auto-Play Sound Strategy:**  
  - 0:00–0:01: Game SFX only (no music)  
  - 0:01+: Background music fade-in  

### 2. Meta Feed Ads (1:1 Square)  
- **Radial Attention Flow:**  
```
   Center: Mechanic demonstration  
   Clockwise from top-right:  
   1. Level counter  
   2. Currency tally  
   3. Character avatar  
```
- **Silent Auto-Play Adaptation:**  
  - Use motion trails/particle effects to emphasize actions  
  - Animated arrows guide eye movement  

---

## Hybrid-Specific Layering  

### Dual-Message Integration  
1. **First Frame (0:00–0:00.5):**  
   - Casual mechanic (e.g., tile swap)  
   - Single-color background (#FFFFFF/#000000)  

2. **Second Frame (0:00.5–0:01.5):**  
   - Mid-core element reveal (e.g., boss health bar)  
   - Background transitions to themed environment  

**Technical Execution:**  
- **Unity Timeline:** Blend between camera rigs at 0:00.3  
- **After Effects:** Radial wipe transition (20px feather)  

---

## Validation and Testing Protocol  

### 1. Heatmap Analysis  
- **Tool:** AI-powered gaze tracking (e.g., PlaybookUX)  
- **Success Metric:** ≥80% of viewers fixate on core mechanic within 0.8s  

### 2. A/B Test Matrix  
| Variant | Modification                  | KPI Target               |  
|---------|-------------------------------|--------------------------|  
| A       | Base creative                 | CTR Benchmark            |  
| B       | +200% particle density       | +15% 1s Retention        |  
| C       | Audio logo at 0:00.2          | +20% Brand Recall        |  
| D       | Animated CTA arrow            | +10% Installs            |  

---

## Creative Production Pipeline  

### 1. Asset Previsualization  
```
Week 1: Core mechanic isolation → 3 variations  
Week 2: Contextualization → 2 environments  
Week 3: Hybrid element integration → 4 combinations  
Week 4: Platform adaptation → 3 formats per asset  
```

### 2. Rapid Prototyping Tools  
- **FigmaMotion:** Create 150ms micro-animations  
- **Unreal Engine MetaHuman:** Generate reactive character avatars  
- **Runway ML:** AI-generated background variations  

---

## Compliance and Ethical Considerations  

### 1. [IAB Standards Adherence[6]  ]
- **Disclosure Timing:** "Ad" label integrated into HUD elements (0:00–0:01)  
- **Exit Option:** Skip button appears at 0:30 but remains inactive for first 1s  
- **Frequency Capping:** Max 3 impressions/user/day across networks  

---

## Performance Optimization Checklist  

1. Confirm mechanic occupies ≥50% frame area  
2. Verify color contrast ratio ≥4.5:1 (WebAIM)  
3. Sync key visual event with audio peak (0:00.4–0:00.6)  
4. Include animated reward preview (floating coin/gem)  
5. Test 3 CTA variants: "Play Free" vs. "Solve Now" vs. "Beat Friends"  

Sources:
- [1] <https://www.digital-clarity.com/blog/create-brand-narrative-with-ad-sequencing/>
- [2] <https://www.linkedin.com/advice/0/how-do-you-balance-creativity-clarity-your>
- [3] <https://school4seo.com/google-ads-creative-certification/youre-making-your-first-video-ad-with-the-goal-of-building-awareness-for-your-direct-to-consumer-food-company-what-should-you-do-in-the-first-five-seconds-of-the-video-ad/>
- [4] <https://www.clarityqst.com/blog/design-best-practices-for-linkedin-that-convert/>
- [5] <https://gameworldobserver.com/2023/09/22/what-is-marketability-games-engagement-cpi-test-bytebrew>
- [6] <https://www.iab.com/wp-content/uploads/2024/03/IAB_Creative_Guidelines_Best_Practices_Advertising_Gaming_March_2024.pdf>
- [7] <https://unbounce.com/ppc/write-best-google-ads-copy/>
- [8] <https://gumgum.com/blog/advertising-in-video-games-a-win-win-for-gamers-and-brands>
- [9] <https://maf.ad/en/blog/lowering-mobile-game-cpi/>
- [10] <https://www.asa.org.uk/static/46a96782-028a-4f5a-ad3a2ad01c149324/Guidance-on-the-presentation-of-mid-contract-price-increases.pdf>
- [11] <https://brentonway.com/ad-creatives-best-practices-guide/>
- [12] <https://www.mishcon.com/news/asa-rules-mobile-game-ad-was-misleading-gameplay-depicted-did-not-reflect-the-core-game-playing-experience>
- [13] <https://www.filmkraft.tv/guides/best-practices-video-ads-social>
- [14] <https://claritypotion.com/2024/04/15/30-second-fun-focusing-principle/>
- [15] <https://www.blog.udonis.co/mobile-marketing/mobile-games/casual-mobile-game-advertising>
- [16] <https://cxl.com/blog/improving-clarity/>
- [17] <https://qualifiedleads.com/fundamentals-for-good-ad-creative/>
- [18] <https://www.linkedin.com/advice/3/how-do-you-create-video-ads-capture-attention>
- [19] <https://www.arpp.org/nous-consulter/regles/regles-de-deontologie/gambling-code-v2/>
- [20] <https://www.neuronsinc.com/cases/mma>
- [21] <https://confect.io/blog/gestalt-laws-ad-examples>
- [22] <https://www.adcreative.ai/post/static-ad-creatives-for-campaign-success>
- [23] <https://www.punchydigitalmedia.com.au/blog/study-finds-video-ads-fail/>
- [24] <https://mobiledevmemo.com/mobile-ad-creative-how-to-produce-test-and-deploy-advertising-creative-at-scale/>
- [25] <https://www.reddit.com/r/PPC/comments/1cicr3k/google_ads_adviser_says_i_have_to_maximize_clicks/>
- [26] <https://www.kingstarmedia.com/our-blog/why-first-three-seconds-digital-video-ads-are-most-important>
- [27] <https://www.threads.net/@alqamah_digitalmarketer/post/DGHrthwvAdP>
- [28] <https://gumgum.com/blog/6-best-practices-for-6-second-video-ads>
- [29] <https://www.semrush.com/kb/1176-ad-clarity>
- [30] <https://supersonic.com/learn/blog/how-to-lower-cpi-after-launch-and-improve-profitability-with-creatives/>
- [31] <https://www.singular.net/blog/mobile-ads-apps/>
- [32] <https://grapeseedmedia.com/blog/the-ultimate-guide-to-adtech-terminology/>
- [33] <https://www.linkedin.com/pulse/snapshot-iabs-creative-game-advertising-guidelines-iion-global-04ydf>
- [34] <https://www.reddit.com/r/pcgaming/comments/jzuxhw/best_settingshardware_etc_for_visual_clarity_in/>
- [35] <https://www.reddit.com/r/AndroidGaming/comments/13kjskb/mobile_game_ads_are_so_long_its_faster_to_close/>
- [36] <https://www.reddit.com/r/IdleMinerTycoon/comments/17zp7m5/how_long_can_ads_be/>
- [37] <https://learn.microsoft.com/en-us/clarity/faq>
- [38] <https://www.youtube.com/watch?v=mC8QoRa8y_Q>
- [39] <https://moldstud.com/articles/p-launch-your-mobile-game-with-a-winning-ad-strategy>
- [40] <https://xmp.mobvista.com/en-blog/docs/multichannel-app-ad-guides>
- [41] <https://commercepro.capcut.com/resource/how-to-make-advertisement-videos>
- [42] <https://www.reddit.com/r/OutOfTheLoop/comments/gq52ag/whats_the_deal_with_every_video_game_advert/>
- [43] <https://customerthink.com/creativity_vs_clarity/>
- [44] <https://www.youtube.com/watch?v=ARV5QCDb2UE>
- [45] <https://naavik.co/deep-dives/evolution-of-hybridcasual-deepdive/>
- [46] <https://www.descript.com/blog/article/youtube-ad-specs>
- [47] <https://sarahsjolander.wordpress.com/2013/12/29/game-5-second-rule/>
- [48] <https://www.asa.org.uk/static/uploaded/47fc181d-d4f6-46af-8df08fe243d34415.pdf>
- [49] <https://www.reddit.com/r/AndroidGaming/comments/u0dinx/why_do_mobile_game_ads_have_3_seperate_screens/>
- [50] <https://investgame.net/wp-content/uploads/2023/07/Hybrid-Casual-Games-Playbook-SensorTower.pdf>
- [51] <https://www.iab.com/wp-content/uploads/2015/06/dig_vid_imp_meas_guidelines_finalv2.pdf>
- [52] <https://www.researchgate.net/publication/265795803_The_effectiveness_of_in-game_advertising_The_impacts_of_ad_type_and_gamead_relevance>
- [53] <https://gumgum.com/blog/advertising-in-video-games-the-new-frontier-for-marketers>
- [54] <https://www.deconstructoroffun.com/blog/2025/2/3/hybridcasual-puzzles-expanding-the-puzzle-market>
- [55] <https://www.youtube.com/watch?v=JFRvcJqA_WQ>