# Adding a project

The whole portfolio is generated from one data file: `js/projects.js`.

1. Copy an existing project object in `js/projects.js` and change its fields.
2. Give it a unique lowercase `id` (for example `warehouse_robot`).
3. Add the card image and optional preview video under `img/projects/<id>/`.
4. Copy `projects/_template.md` to `projects/<id>.md` for the case study.

Required fields:

```js
{
  title: "Warehouse Robot",
  description: "One short, outcome-focused card description.",
  image: "img/projects/warehouse_robot/card.jpg",
  tags: ["Robotics", "ROS2", "C++"],
  id: "warehouse_robot",
  date: "July 2026"
}
```

Optional fields:

- `video_preview`: shown when hovering a featured project.
- `isPortrait`: retained for compatibility with the existing content.
- `Highlights`: add this tag for editorial metadata. To feature a project in the three large slots, add its `id` to `FEATURED_IDS` at the top of `js/enhanced_portfolio.js`.

Category routing is automatic:

- Robotics/CV: `Robotics`, `Computer Vision`, `ROS1`, or `ROS2`
- Games: `gameProject`
- Software/AI: everything else

Run `npm run build:once` for a production CSS build, or `npm run build` while editing.
