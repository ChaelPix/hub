# Portfolio architecture guide

This directory is a vanilla HTML/CSS/ES-module portfolio. Keep it framework-free unless the owner explicitly requests a migration. The homepage is intentionally only two `100svh` scenes: the identity scene and the project explorer.

## Commands

- `npm run build:once` compiles `input.css` into `output.css`.
- `npm run build` watches the CSS source during development.
- `npm run serve` serves the directory locally.
- `npm run check` validates project metadata, referenced preview files, timeline links, and the two-scene invariant.

Always edit `input.css`; `output.css` is generated. Run both `npm run build:once` and `npm run check` after relevant changes.

## Main modules

- `index.html` contains the two scenes, contact controls, category buttons, and the shared case-study `<dialog>`. It should not grow a long archive or extra page sections.
- `input.css` owns the visual system, responsive layouts, paper-note components, parallax layers, project wheel geometry, dialog styling, motion, and reduced-motion overrides.
- `js/enhanced_portfolio.js` is the application controller. It normalizes project data, renders the timeline and wheel, filters projects, coordinates scenes, manages media, gestures, keyboard input, dialog history, and Markdown processing.
- `js/projects.js` is the project database. Preserve the object-based static export and explicit metadata described in `ADDING_PROJECTS.md`.
- `js/timeline.js` is the editable milestone database. The source is chronological; `renderTimeline()` reverses it so recent milestones appear first.
- `js/contact.js` constructs the email address only after an Email button is clicked. Do not put the complete address in HTML, visible text, data attributes, or a static `mailto:` URL.
- `projects/<id>.md` contains case studies loaded into the existing dialog.
- `enhanced_portfolio-check.mjs` is the repository-specific data and structure check.

The type system is intentionally human and notebook-like rather than industrial product UI: Bricolage Grotesque for expressive display type, Atkinson Hyperlegible for prose, and Kalam for handwritten research labels and metadata. The font request lives in `index.html`; the family variables live at the top of `input.css`.

## Project data and filters

Every project needs `id`, `title`, `description`, `date`, `sortDate`, `categories`, and `highlightOrder`. `displayTitle` is optional and should be used when the complete case-study title is too long for the explorer. A legacy scalar `category` is still normalized during migration.

`categories` is an array containing one or more of `robotics`, `games`, `xr`, and `other`. This permits Games + XR and Robotics/CV + XR projects. A numeric `highlightOrder` marks Highlights membership; all filter lists, including Highlights, remain newest-first by `sortDate`.

- Robotics and computer vision share one **Robotics / CV** filter.
- Migration normalization adds Robotics/CV for tags such as `Computer Vision` and `OpenCV`.
- Migration normalization adds XR for tags such as `XR/VR`, `MetaXR`, `ARCore`, `Mixed Reality`, or `Augmented Reality`.

The filter names and derived-tag sets live near the top of `js/enhanced_portfolio.js`. `categoryIndices` preserves a separate active position for every filter. When adding a filter, update its HTML button, `CATEGORY_LABELS`, and `projectsFor()` behavior together.

## Wheel and media lifecycle

`renderWheel()` keeps every card in the active filter in the DOM. Cards are rebuilt only when the filter changes. `layoutWheel(floatPosition)` places cards from a continuous visual index, while `animateWheel()` eases toward a target. Mouse-wheel input updates that target continuously; pointer dragging updates the visual index directly and snaps only after release.

Distant cards stay mounted and eagerly decoded, then fan across the available space on each side instead of collapsing onto one transform. `wheelTransform(delta, listLength, position)` normalizes each side independently so every card receives a distinct 2D slot. `layoutWheel()` assigns exactly one `.is-wheel-focus` card and gives every ticket a unique stable depth while scrolling. Do not restore 3D transforms, `preserve-3d`, or child `translateZ`: those created browser compositing glitches and black outlines. Deep stacks keep their complete face visible but drop their expensive shadows; never hide their media/copy children. Clicking a neighboring ticket selects it. Clicking the centered ticket opens the case study; the centered card's hover/focus overlay is the only `View more` affordance.

Highlighted tickets use a warm yellow paper shade and the supplied `img/icons/icon_crown.png` asset on the upper-left corner. Do not replace it with a generated SVG crown.

`wheelTransform(delta)` defines desktop five-card and compact three-card geometry. Keep neighboring cards close enough to read as one wheel, and keep titles visible on the paper ticket. The wheel is bounded: index 0 is the left/start edge, the final index is the right/end edge, and no list may wrap.

The project rail is the low, shallow upper ring of one oversized transparent circle, modeled after the wheel ring in `web-sfx-lib-browser`. It must reach past both viewport edges and must not become a filled bottom panel. Filters live above the hand in the independent `.category-orbit` circle entering from the right; it uses staggered paper-note buttons, has its own wheel listener, and must never be nested back inside the draggable project rail.

`fitProjectTitle()` measures the rendered title and reduces its size until the complete text fits in two lines. Do not reintroduce line-clamp, ellipsis, or clipping on the main project title. `transitionProjectCopy()` waits for the staggered left exit before replacing content and applying the left-entry sequence.

Stage preview priority is video, then image, then the typographic placeholder. The full stage uses `object-fit: contain` on the same dark fibrous desk-paper surface as the case-study dialog, so media is never cropped and its letterbox/pillarbox areas belong to the visual system. Wheel thumbnails intentionally use `object-fit: cover` inside small cards.

`previewPreloadCache`, `preloadAdjacentMedia()`, and `warmCategoryEntrances()` prevent navigation stalls. The current project and two neighbors on each side are eagerly loaded. Other previews receive lighter idle warming. Do not clear this cache after every navigation.

`renderProjectMedia()` uses a render token so a late media event cannot replace a newer selection. It waits for the incoming media to become ready before crossfading and then pauses/removes the old stage media.

## Navigation and dialog invariants

- The document must remain exactly two fullscreen scenes.
- `.scene` uses `overflow: clip`, not `overflow: hidden`. Hidden overflow becomes a programmatic scroll container and focusing category controls can shift all scene content upward.
- Wheel/trackpad input on the identity scene enters the explorer. Inside the explorer it moves a continuous target and snaps after wheel input becomes idle; it never exits the scene.
- Pointer dragging follows the pointer continuously and commits only on release. Desktop also supports card click and arrow keys. Compact layouts retain the deliberate downward swipe outside the dial to return to the identity scene.
- `#project-<id>` must open the matching project and Markdown dialog. Closing uses browser history so Back/Forward remain meaningful.
- Keep dialog focus restoration, Escape handling, external-link processing, and video controls intact.
- The case-study dialog stays dark but uses the same taped-note language as the explorer: grid-paper shell, offset blue shadow, square paper controls, and rotated heading/media notes.

## Responsive and accessibility rules

- Test at 2560×1080, 1440×900, 768×1024, 390×844, and 360×800.
- Identity contacts are staggered icon notes. The email address must remain absent from the static DOM.
- The timeline stays a compact recent-first curved list on desktop and phone; do not replace it with horizontal cards.
- Category buttons must remain semantic buttons with `aria-pressed`.
- Wheel cards use `role="option"` and expose only the active card to the tab order.
- Keep visible focus states and 44px minimum touch targets.
- `prefers-reduced-motion` must disable parallax, idle motion, and autoplay without removing navigation.

## Editing cautions

The worktree may contain owner-authored staged changes in `js/projects.js` or Markdown case studies. Do not reset, overwrite, or restage unrelated changes. New visual work should preserve project content and case-study wording unless the request explicitly includes copy editing.
