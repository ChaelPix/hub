# Markdown Project Documentation System

## Overview

Your portfolio now uses Markdown files instead of HTML for project descriptions. This makes content much easier to edit and maintain while providing a visually appealing presentation.

## How It Works

1. **File Location**: Place `.md` files in the `projects/` folder
2. **File Naming**: Must match the project ID from `projects.js` (e.g., `aissenger.md` for project with id `"aissenger"`)
3. **Automatic Processing**: The system automatically converts markdown to styled HTML when popups open

## Available Features

### Basic Markdown
- **Headings**: Use `#`, `##`, `###`, etc.
- **Bold text**: `**bold**` or `__bold__`
- **Italic text**: `*italic*` or `_italic_`
- **Lists**: Use `-` or `*` for bullets, numbers for ordered lists
- **Links**: `[Link Text](URL)`
- **Code**: `` `inline code` `` or ``` code blocks ```

### Media Elements

#### Single Images
```markdown
![Alt text](../img/projects/yourproject/image.jpg)
```

#### Single Videos
```markdown
<video src="../img/projects/yourproject/video.mp4" controls></video>
```

#### Grid Layouts
```markdown
<!-- grid-2 -->
![Image 1](../img/projects/yourproject/img1.jpg)
![Image 2](../img/projects/yourproject/img2.jpg)
<!-- end-grid -->

<!-- grid-3 -->
![Image 1](../img/projects/yourproject/img1.jpg)
![Image 2](../img/projects/yourproject/img2.jpg)
![Image 3](../img/projects/yourproject/img3.jpg)
<!-- end-grid -->
```

### Tables
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Blockquotes
```markdown
> This is a blockquote for highlighting important information or quotes.
```

### Code Blocks
```markdown
\`\`\`javascript
function example() {
    return "This is syntax highlighted code";
}
\`\`\`
```

## Styling Features

### Automatic Styling
- **Images**: Automatically centered with rounded corners and shadows
- **Videos**: Responsive with controls, lazy loading
- **Links**: Styled with hover effects, external links open in new tabs
- **Code**: Dark theme with syntax highlighting
- **Tables**: Styled with borders and alternating row colors

### Grid System
- Use `<!-- grid-2 -->` for 2-column layouts
- Use `<!-- grid-3 -->` for 3-column layouts
- Always close with `<!-- end-grid -->`
- Responsive: 1 column on mobile, specified columns on desktop

## Best Practices

### File Organization
```
projects/
├── yourproject.md
├── template.md
└── examples/
    ├── aissenger.md
    └── snake-example.md
```

### Image Paths
- Use relative paths: `../img/projects/yourproject/`
- Keep images organized in project-specific folders
- Use descriptive filenames

### Content Structure
1. **Start with H1 title** (`# Project Name`)
2. **Add overview section** with main description
3. **Include media early** to engage viewers
4. **Use sections** (`## Section Name`) to organize content
5. **End with links/resources**

### Performance Tips
- Optimize images before uploading
- Use `.jpg` for photos, `.png` for graphics with transparency
- Keep videos under 10MB when possible
- Use lazy loading attributes (automatically applied)

## Migration from HTML

To convert existing HTML files:

1. **Copy content** from HTML file
2. **Convert headings**: `<h1>` → `# `, `<h2>` → `## `
3. **Convert images**: `<img src="..." />` → `![Alt](path)`
4. **Convert videos**: Keep `<video>` tags as-is
5. **Remove HTML wrapper** elements (just keep content)
6. **Add grid comments** for layout where needed

## Troubleshooting

### Common Issues
- **File not found**: Check filename matches project ID exactly
- **Images not showing**: Verify relative path is correct
- **Grid not working**: Ensure `<!-- end-grid -->` is present
- **Styling issues**: Rebuild CSS with `npm run build:once`

### Debug Mode
Check browser console for errors when popups don't load properly.

---

*This system provides maximum flexibility while maintaining visual consistency across all project descriptions.*
