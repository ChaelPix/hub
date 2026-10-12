# Portfolio architecture guide

This directory is a vanilla HTML/CSS/ES-module portfolio. Keep it framework-free unless the owner explicitly requests a migration. The homepage is a single white document: about, timeline, publications, and projects.

## Commands

- `npm run build:once` compiles `input.css` into `output.css`.
- `npm run build` watches the CSS source during development.
- `npm run serve` serves the directory locally.
- `npm run check` validates project metadata, referenced preview files, timeline links, publication files, and the about/timeline/publications/projects landmarks.

Always edit `input.css`; `output.css` is generated. Run both `npm run build:once` and `npm run check` after relevant changes.

## Main modules

- `index.html` contains the sidebar, about figure, timeline, publications, and project landmarks, and the shared case-study `<dialog>`.
- `input.css` owns the document layout, Computer Modern type, sidebars, about-figure parallax and tape, timeline hover rows, publication grid, project lists with hover video, the case-study dialog, and reduced-motion overrides.
- `js/enhanced_portfolio.js` is the application controller. It normalizes project data, renders the timeline, publications, and project lists, manages dialog history, and processes Markdown.
- `js/projects.js` is the project database. Preserve the object-based static export and explicit metadata described in `ADDING_PROJECTS.md`.
- `js/timeline.js` is the editable milestone database. Optional `section` is `'experience'`, `'competition'`, or `'education'`. Education rows use a mortarboard instead of a photo. The page renders one newest-first list.
- `js/publications.js` is the publication database. Each row needs `title`, `venue`, `type`, `place`, `date`, and `url`. Optional `image` is the poster; optional `logo` sits to the left of the title.
- `js/contact.js` constructs the email address only after an Email button is clicked. Do not put the complete address in HTML, visible text, data attributes, or a static `mailto:` URL.
- `projects/<id>.md` contains case studies loaded into the existing dialog.
- `enhanced_portfolio-check.mjs` is the repository-specific data and structure check.

Type is Computer Modern Serif (Overleaf `article` default), loaded from `index.html`. Do not introduce Inter, Space Grotesk, Geist, or similar UI defaults.

## Page model

Native document scroll. No scene snap, wheel, or highlight path.

1. Centered document title **Portfolio**, then an article-style **Abstract** (centered label, indented justified body).
2. `#about` — **About me** with the research-poster portrait, short justified copy, and the podium figure (landscape, taped). Pointer parallax moves only the foreground cutout.
3. `#timeline` — one newest-first list with a persistent rail and white dots. The left year is the parsed **end** year (`2022-24` → `2024`). Consecutive rows that share that year get one vertical label, sitting on the oldest row of that year. Optional `date` (else `year`) sits on the right so months and ranges can still be shown. Optional `image` sits between the rail and the title. `imageFit: 'contain'` shows a full logo inside the same circular size. Education rows (`section: 'education'`) show a mortarboard instead of a photo. Hover animates the row; a click opens the case study when `projectId` is set.
4. `#publications` — a grid of papers. Each card is a taped poster, then venue, type, place, date, then optional venue logo beside the title. It opens the external URL.
5. `#projects` — **Project works**, grouped as Highlight works, then Robotics / CV, Games / XR, then Engineering. Highlights are duplicated: they appear in Highlight works and again in their category group. Each group has a left rail and white dots, filling on hover like the timeline. Left years use the same end-year parsing as the timeline, with the label on the oldest row of that year; the date on the right of the row stays. Landscape stills are the larger row thumbnails, with a small tape strip on top. On a pointer with hover, `video_preview` plays on row hover; on touch it plays while the thumbnail is on screen. Date sits in a reserved column beside the title, never in the description flow. Rows with `highlightOrder` or a Highlights tag get four diagonal corner tapes with glitter. A row click opens the case study.

A left sidebar holds a circular WorldSkills portrait beside the name, in-page links (plain nested project groups), and icon-only Email / GitHub / LinkedIn. On compact widths it becomes a Menu drawer.

`#project-<id>` must open the matching Markdown dialog. Closing uses browser history. A visit that lands directly on that hash keeps a main-page history entry underneath, so Close and Back stay on the portfolio.

## Project data and filters

Every project needs `id`, `title`, `description`, `date`, `sortDate`, `categories`, and `highlightOrder`. `displayTitle` is optional. A legacy scalar `category` is still normalized during migration.

`categories` is an array containing one or more of `robotics`, `games`, `xr`, and `other`. After Highlight works, the page groups remaining work as Robotics / CV, then Games / XR, then Engineering. A project appears in the first matching category group only; highlights are also listed in Highlight works.

- Robotics and computer vision share **Robotics / CV**.
- Games and XR share **Games / XR**.
- Remaining work is **Engineering**.
- Migration normalization adds Robotics/CV for tags such as `Computer Vision` and `OpenCV`.
- Migration normalization adds XR for tags such as `XR/VR`, `MetaXR`, `ARCore`, `Mixed Reality`, or `Augmented Reality`.

## Navigation and dialog invariants

- Keep dialog focus restoration, Escape handling, external-link processing, and video controls intact.
The case-study dialog uses the same white document language as the page, with paper-ticket headings, a stamped header, and a ticket Close control. Open and close fade the overlay and slide the shell; `prefers-reduced-motion` skips that motion.
- The email address must remain absent from the static DOM.
- Keep visible focus states and 44px minimum touch targets.
- `prefers-reduced-motion` must disable about parallax, hover/in-view video, dialog enter/leave motion, highlight-tape sparkle, and decorative motion without removing navigation or the mobile sidebar drawer.

## Editing cautions

The worktree may contain owner-authored staged changes in `js/projects.js` or Markdown case studies. Do not reset, overwrite, or restage unrelated changes. New visual work should preserve project content and case-study wording unless the request explicitly includes copy editing.
