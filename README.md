
# SURF Lab bilingual website

Static HTML/CSS/JS website for **SURF Lab — Smart Urban Remote Sensing Futures** / **부산대학교 스마트시티 원격탐사 연구실**.

## Files

- `index.html` — home
- `professor.html` — PI profile
- `research.html` — research themes with modal details
- `publications.html` — searchable/filterable publication browser
- `members.html` — PI, current member placeholders, recruiting section
- `news.html` — bilingual news page with category filters
- `styles.css` — visual design, responsive layout, bright-only theme
- `script.js` — language toggle, navigation, filters, modals, animations
- `assets/` — SVG logo and visual assets

## Language switching

The header has two buttons: `Eng` and `한글`. The selected language is saved in `localStorage`, so it persists across pages.

You can also open pages with a language query:

```text
index.html?lang=en
index.html?lang=ko
```

## Editing content

Static text is written directly in each HTML file using paired spans:

```html
<span data-lang-en>English text</span><span data-lang-ko>한국어 텍스트</span>
```

Dynamic publications, news items, and research modal details are stored in `script.js`:

- `PUBLICATIONS`
- `NEWS_ITEMS`
- `RESEARCH_THEMES`

## Local preview

The site can be opened directly by double-clicking `index.html`. For smoother editing, use VS Code Live Server or Vite.

## Notes

- The dark/bright mode toggle has been removed.
- The site uses only HTML, CSS, and JavaScript.
- No external library is required.
- Public contact information uses email only: `cheolhee.yoo@pusan.ac.kr`.
