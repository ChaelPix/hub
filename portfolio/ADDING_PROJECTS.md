# Adding a project

The project lists are generated from `js/projects.js`. Add a project object there and, when a full write-up is available, add a matching `projects/<id>.md` case study.

```js
{
  title: "Warehouse Robot",
  displayTitle: "Warehouse Robot", // optional shorter title for the list
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
- `title` and `description`: the short copy shown in the list. The full `title` is used by the case-study dialog.
- `displayTitle`: optional shorter editorial title for the list.
- `date`: human-readable display date.
- `sortDate`: ISO `YYYY-MM-DD` value used for newest-first ordering inside each group. Its year also appears vertically left of the group rail when the year changes.
- `categories`: one or more of `robotics`, `games`, `xr`, or `other`. Legacy scalar `category` remains supported during migration.
- `highlightOrder`: optional; a number still marks the row as a highlight (four diagonal glitter tapes). It is not used for grouping.

Media behavior:

1. `image` is the card thumbnail when present.
2. `video_preview` plays over the still on card hover (and in the Markdown case study when referenced there).
3. `isPortrait` keeps a taller thumbnail and contain-fit for phone-shot previews.
4. If both image and video are empty, the card shows an empty plate.

Legacy `isPortrait`, scalar `category`, and internal tags such as `gameProject`, `AIproject`, and `Highlights` remain readable during migration. New projects should use the explicit `categories` array.

The page shows three groups, first match only: **Robotics / CV**, then **Games / XR**, then **Engineering**. `Computer Vision` and `OpenCV` tags add Robotics/CV membership during migration. XR tags add Games/XR membership.

The timeline is independent from the project list. Edit `js/timeline.js`. An optional `projectId` opens the corresponding case study. Optional `image` (and `imagePosition`, e.g. `'72% 18%'`) draws a circular portrait between the rail and the title; the white dots stay. Use `imageFit: 'contain'` for logos so the full image fits in that same circle. `year` is written vertically to the left of the rail when it changes. Optional `date` is the right-hand label (months); if omitted, `year` is shown there.

Publications live in `js/publications.js`. Each entry needs `title`, `venue`, `type`, `place`, `date`, and `url`. Optional `image` is the poster; optional `logo` sits to the left of the title. The page renders them as a grid between Timeline and Projects.

Run `npm run build:once` after changing styles, or `npm run build` while developing.
