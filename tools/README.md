# Building the site's pages

The reading pages are real HTML files, one per page, each at its own address (`/how-it-works/`, `/pricing/`, `/track-record/`, `/academy/expectancy/`, …). Search engines, AI assistants and visitors without JavaScript get the full text.

```bash
node tools/build-static.mjs
```

```bash
node --test tests/*.cjs
```

## What the build writes into `site/`

- **One `index.html` per public page** (86 today), from the content in `site/pilot/learning.js`, drawn by the same renderer the browser used (`site/pilot/reading-ui.js`). Each has its own title, description, canonical address, social-preview tags and structured data.
- **The record as a dated snapshot.** `track-record/` lists every finished trade in its HTML, and the home page's figures are filled in. Both are replaced by the live record when the page loads. If the live feed can't be reached during the build, the pages are built without a snapshot.
- **Redirects from old addresses:** the old site's `.html` pages (`how-it-works.html`, `academy/expectancy.html`, …) and the earlier one-address reader (`read/?page=…`).
- **`sitemap.xml`** and **`robots.txt`**.
- **The home page's search tags** (between the `seo:start` / `seo:end` markers in `site/index.html`). The rest of the home page is hand-written.

Working pages from the migration (`source-*`, `review-*`, `all-pages`) are left out.

## Review build and production build

| | Review (default) | Production (`--production`) |
|---|---|---|
| Address | `https://vimo33.github.io/noguru-review` | `https://noguru.io` (or `--origin=…`) |
| Search engines | Every page `noindex, nofollow`; `robots.txt` blocks everything | Indexable; `robots.txt` from `tools/robots.production.txt` |

The review host must stay on the review build. A production build is only for the production server, and publishing either one needs Vimo's go-ahead for that revision.

## For the production server

- **Rebuild daily** so the dated snapshot stays close to the live record (visitors always see the live figures; the snapshot is what crawlers read).
- **Use real redirects (301)** from the old `.html` addresses where the server allows it. The redirect files written here are a fallback that works on any static host.
- **Merge, don't replace, `robots.txt`:** the live noguru.io file also carries Cloudflare-managed content signals.
- **Google-Extended** is still to be decided (see `tools/robots.production.txt`).

## Changing a page's search title or description

Edit the `SEO` table in `tools/build-static.mjs`, rebuild, and run the tests. The tests fail if two pages share a title or description, a link or anchor is broken, or anything points back to the old site.

## Visitor statistics (Umami)

Umami runs on NoGuru's own server (`stats.noguru.io`). `tools/analytics.json` holds the script address and one website id per hostname, so the build switches statistics on by itself: a review build counts under the review id, a production build under the production id, and a daily rebuild keeps the script without extra options.

- `--no-umami` leaves the script out.
- `--umami=<website id>` and `--umami-src=<script address>` use other values.

With statistics on, every page loads the script (counted only on the build's own hostname, and not for browsers that send "Do Not Track"), and the privacy page's sentence "we run no third-party analytics…" is replaced by the text the provider approved on 16 November 2026. Keep that text the same as on noguru.io; it lives in `tools/build-static.mjs`.

Sign-up links always carry `data-umami-event` names (`signup-trial`, `signup-cornix`, `signup-exchange-<name>`, `signup-cornix-bot`).
