# morishaw.com — Handoff Guide for Any Model

**Repo:** github.com/JustEq4All/morishaw-com
**Live:** https://gilberto-morishaw.netlify.app
**Local path:** `~/.openclaw/workspace/website/astro-site/`

---

## Architecture (do not change these)

- Framework: **Astro v5**, static output
- Build: `npm run build` → outputs to `dist/`
- Deploy command:
  ```bash
  NETLIFY_AUTH_TOKEN="nfp_aQ…0218" netlify deploy --dir=dist --site="e57afca7-f021-449f-9ed6-a7441aea2a0a" --prod
  ```
- CMS: Decap CMS at `public/admin/config.yml`
- Design system: `src/styles/global.css` — bronze/off-white/ink palette

---

## Content Structure

```
src/content/
  events/       → JSON files, one per event
  writings/     → JSON files, one per publication
  talks/        → JSON files, one per talk topic
  testimonials/ → JSON files, one per testimonial
  site/         → home.json, about.json, contact.json

src/pages/      → one .astro file per page (8 pages)
public/
  images/logos/ → 12 partner logo PNGs (do not rename)
  admin/        → Decap CMS files (do not touch)
```

---

## Safe Edits (low risk)

- Add/edit a JSON file in `src/content/` — adds event, writing, talk, testimonial
- Edit text inside a `.astro` page
- Add a logo PNG to `public/images/logos/`
- Update `src/content/site/home.json`, `about.json`, `contact.json`

---

## Workflow After ANY Edit

```bash
cd ~/.openclaw/workspace/website/astro-site
npm run build
# must complete with "8 page(s) built" and 0 errors
git add -A && git commit -m "describe what changed"
git push origin master
NETLIFY_AUTH_TOKEN="nfp_aQ…0218" netlify deploy --dir=dist --site="e57afca7-f021-449f-9ed6-a7441aea2a0a" --prod
```

---

## Never Do These

- ❌ Delete or rename files in `public/admin/`
- ❌ Change CSS variable names in `global.css`
- ❌ Change `astro.config.mjs` output mode
- ❌ Deploy without running `npm run build` first
- ❌ Edit content JSON without matching schema in `src/content.config.ts`

---

## Adding Media (photos, videos)

- Place images in `public/images/` (or subfolder)
- Reference in `.astro` as `/images/filename.jpg`
- Logos → `public/images/logos/` as PNG, max ~100KB

---

## Content Schemas

### Event
```json
{
  "title": "",
  "date": "2026-09",
  "location": "",
  "role": "Speaker|Moderator|Organizer|Facilitator|Panelist|Participant",
  "url": "",
  "recap": "",
  "featured": false
}
```

### Writing
```json
{
  "title": "",
  "outlet": "",
  "year": 2026,
  "url": "",
  "summary": "",
  "format": "Op-ed|Essay|Report|Policy|Interview",
  "featured": false
}
```

### Talk
```json
{
  "title": "",
  "description": "",
  "formats": ["Keynote"],
  "order": 6
}
```

### Testimonial
```json
{
  "quote": "",
  "name": "",
  "role": "",
  "organisation": "",
  "type": "speaking|consulting|general"
}
```

---

## Key Files Quick Reference

| File | Purpose |
|---|---|
| `src/styles/global.css` | All design tokens + shared styles |
| `src/layouts/Base.astro` | HTML shell, meta tags, fonts, JSON-LD |
| `src/components/Nav.astro` | Navigation |
| `src/components/Footer.astro` | Footer |
| `src/content.config.ts` | Content collection schemas |
| `public/admin/config.yml` | Decap CMS field definitions |
| `astro.config.mjs` | Astro build config |
