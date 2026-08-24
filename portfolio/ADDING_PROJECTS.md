# Adding a project

The project dial is generated from `js/projects.js`. Add a project object there and, when a full write-up is available, add a matching `projects/<id>.md` case study.

```js
{
  title: "Warehouse Robot",
  displayTitle: "Warehouse Robot", // optional shorter title for the stage and wheel
  description: "One short, factual sentence about what the project does.",
  image: "img/projects/warehouse_robot/card.jpg",
  video_preview: "img/projects/warehouse_robot/preview.mp4",
  tags: ["ROS2", "C++", "Computer Vision"],
  id: "warehouse_robot",
  date: "July 2026",
  sortDate: "2026-07-31",
  categories: ["robotics", "xr"],
  highlightOrder: null
}
```

Required fields:

- `id`: unique lowercase slug; it also names the Markdown file.
- `title` and `description`: the short copy shown over the preview.
- `displayTitle`: optional shorter editorial title for the explorer. The full `title` is still used by the case-study dialog and accessible labels.
- `date`: human-readable display date.
- `sortDate`: ISO `YYYY-MM-DD` value used for reliable newest-first ordering.
- `categories`: one or more of `robotics`, `games`, `xr`, or `other`. A project may belong to several filters. Legacy scalar `category` remains supported during migration.
- `highlightOrder`: `null` for normal projects or a number to include the project in Highlights. Highlighted projects are still shown newest-first by `sortDate`.

Media behavior:

1. `video_preview` is preferred when present.
2. `image` is used if the video is missing or cannot load.
3. If both are empty, the dial generates an intentional typographic project plate.

Preview media is always displayed with `object-fit: contain` on black, so portrait, landscape, square, and ultrawide assets are never cropped. Short, muted MP4 loops are recommended; provide an image poster even when a video exists so the wheel has a thumbnail and the stage has a fallback.

Legacy `isPortrait`, scalar `category`, and internal tags such as `gameProject`, `AIproject`, and `Highlights` remain readable during migration, but new projects should use the explicit `categories` array and `highlightOrder`.

Robotics and computer vision share the **Robotics / CV** filter. `Computer Vision` and `OpenCV` tags automatically add that membership during migration. Likewise, XR tags automatically add XR membership, so older projects already appear in useful combinations such as Games + XR or Robotics/CV + XR.

The career timeline is independent from the project list. Edit `js/timeline.js` and use an optional `projectId` to make a milestone open the corresponding case study.

Run `npm run build:once` after changing styles, or `npm run build` while developing.
