# SURF Lab Website

Final static website for SURF Lab — Smart Urban Remote Sensing Futures.

## Pages

- `index.html` — Home
- `research.html` — Research
- `members.html` — Members overview
- `professors.html` — Professor profile, education, honors, awards, and service
- `teams.html` — Team page
- `publications.html` — Publications with image area and DOI links
- `news.html` — NEWS and gallery-style updates
- `contact.html` — Contact

## Final updates

- Removed the right-side Home hero card containing the university logo / research-framework summary.
- Removed the Pusan National University logo image from the Home page.
- Kept the transparent SURF logo in the Home hero, navigation bar, and footer.
- Kept the simplified menu structure: Home, Research, Members, Publications, NEWS, Contact.
- Kept the Members submenu: Professors and Teams.
- Kept Publications as the single journal-paper page with thumbnail and DOI areas.

## Local preview

Open `index.html` directly in a browser, or run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Custom font setup

This version is configured to use Nanum Human:

- `NanumHumanLight.woff` for body text
- `NanumHumanRegular.woff` for headings, navigation, buttons, and emphasized text

Place both font files in:

```text
assets/fonts/
```

The CSS already includes the required `@font-face` rules. If the files are not present, the website falls back to common system fonts.
