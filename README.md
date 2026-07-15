# danieloa.com — personal portfolio

Static site deployed to Cloudflare Pages from `main`.

## Quick start

```bash
npm run serve          # build + preview at http://localhost:8080
npm run build          # regenerate derived files
npm run validate       # build + consistency checks
./deploy.sh "message"  # bump version, validate, push to GitHub
```

## What to edit

| Change | File |
|--------|------|
| Email, links, stats, GA ID | `scripts/site.config.js` |
| FAQ (EN + ES) | `content/faq.json` |
| Case study content | `content/case-studies/*.json` |
| Visible copy (nav, hero, services…) | `translations.js` |
| Styles | `style.css` |
| Behavior | `script.js` |

After editing, run `npm run build` (or `npm run serve`).

## Build pipeline

`scripts/build.mjs` generates:

- `site-config.js` — runtime config for the browser
- `llms.txt`, `sitemap.xml`
- `case-i18n.js` and `case-studies/*.html`
- FAQ schema + FAQ items in `translations.js`
- Cache-busted asset URLs (`asset-version.txt`)

## Project layout

```
content/           # source data (faq, case studies)
scripts/           # site.config.js, build, validate, templates
index.html         # main page (hand-edited structure)
translations.js    # i18n copy (FAQ items auto-synced)
```

## Deploy

Push to `main` ? GitHub Actions ? Cloudflare Pages (`danieloa` project).

Do not commit `.wrangler/` (local Cloudflare CLI cache).
