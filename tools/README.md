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

## Releasing to production

```bash
node tools/release-production.mjs --push
```

The production server watches the branch `production` and builds whatever is pushed there. This tool takes the committed state, leaves out the paths in `tools/production-exclude.txt`, runs the server's own build and tests, stops if anything still mentions the review address, and adds one commit on top of `production`. Without `--push` it only prepares and checks. The server writes its result to `site-publish/STATUS.md` in the private data repository within about ten minutes. Going public on noguru.io is a separate switch on the server.

## The production bundle

```bash
node tools/bundle-production.mjs
```

Writes `dist/production/`: a production build and only the files its pages use. The working copy stays a review build. See `docs/PRODUCTION-HANDOVER.md`.

The record's monthly pace comes from one function, `recordPace` in `site/pilot/data.js`. Home, pricing and the build all use it.

Record figures are shown as money on one example amount, 10,000 USDT. It is set once, in `site/example.js`; the home page, pricing, the record page and the build read it from there.

## The explainer video

The home page's hero opens the video in a player over the page (`site/video.js`). It never starts by itself.

- **The files:** in `site/media/`: `noguru-explainer.mp4` (720p, the default), `noguru-explainer-1080p.mp4` (large screens), `noguru-explainer-poster.jpg` (shown before play) and `noguru-explainer.en.vtt` (captions). They come from the film's web package (`analysis/2026-11-15/explainer-video/web/`); for a new cut, copy the four files over these and keep the names. Export it with the index at the front ("fast start") so it can begin before it has fully loaded: `ffmpeg -i in.mp4 -c copy -movflags +faststart site/media/noguru-explainer.mp4`.
- **The length** on the button is read from the file when it loads; the `4:56` in `site/index.html` is what shows before that, so correct it for a new film.
- **A film that is not signed off:** add `data-draft` to the video tag in `site/index.html`; `tools/release-production.mjs` then warns on every release until it is removed. The film of 17 November is signed off.
- **A direct link:** `/?video` opens the player on arrival.

## The checkout on the pricing page

`tools/checkout.html` is the form and the agreement; `site/read/checkout.js` drives it. It is the live noguru.io checkout: the same field ids, the same three routes of the member gate (`/gate/api/price`, `/gate/api/trial`, `/gate/api/invoice`) and the same four agreement sentences, recorded on the server under `AGREEMENT_VERSION`. Change that version together with any change to the sentences, and tell the server side. On any address other than noguru.io the form shows the prices but sends nothing.

## The dated digests

Digests up to 12 November 2026 are stored in `site/pilot/migration.js`. Every later one is read by the build from the server's digest feed (`tools/digests.mjs`): the list at `https://noguru.io/api/public/digests`, then `https://noguru.io/api/public/digest/<slug>` for each digest not stored yet, one request after the other. Each becomes a page under `/digest/<slug>/`, a row in the digest index and a link in the library. A digest that cannot be read is left out and the build says how many; a stored digest is never replaced. The production server hands the build these addresses the same way as the record feeds, so its daily rebuild adds each new digest.

## What is counted

`site/track.js` sends events to Umami on every page; its header lists them. In short: time on a page (30 s, 1, 3, 5 minutes, while visible), reading depth (50%, 90%), the home page sections that were looked at, questions opened, every step of the video (`video-open`, `video-play`, `video-25`, `video-50`, `video-75`, `video-complete`, `video-close` with the seconds watched) and the clicks on the trial and sign-up links. Video progress counts seconds that really played, so dragging the bar to the end is not a full view. Nothing is stored on the visitor's device.

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

## Campaign tags on the sign-up links

`site/campaign.js` reads `utm_campaign` (or, failing that, `utm_source`) from the address a visitor lands on and writes it into the sign-up links for the rest of that visit: `trial_<tag>` for the members bot and `s=<tag>` for the tracked Cornix links. A tag must be lowercase letters, digits and hyphen, 1 to 16 characters; anything else leaves the links at `trial_cornixpage` and `s=site-home`. The trial form on the pricing page sends the same tag to `/gate/api/trial` as `src` (agreed with the server side on 17 November 2026) and sends no `src` when the visit has no campaign. The tag is kept in the browser's session storage and is gone when the tab closes.
