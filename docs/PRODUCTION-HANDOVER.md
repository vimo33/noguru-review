# Production hand-over

What the production server gets, and what it has to do with it. Written 16 November 2026.
Nothing here publishes anything: a production release needs an explicit go-ahead for that revision.

## What to deploy

One folder, made by one command:

```bash
node tools/bundle-production.mjs
```

It writes `dist/production/`: a production build for `https://noguru.io` and only the files its pages use
(206 files, about 5 MB on 16 November). Drafts, earlier experiments and working pages are left out; the list is in
`dist/production-left-out.txt`. The command fails, and writes nothing, if a page refers to a missing file, if
anything from the review site is left, or if a page in the sitemap is closed to search engines.

The folder is served as the web root. All links inside it are relative, and the canonical addresses, the sitemap
and the statistics ID are those of noguru.io.

Requirements: Node 20 or newer. No packages to install. The build reads the public record from
`https://noguru.io/api/public/track-record` and the referral list; with `--no-fetch` it builds without them.

## What the server has to do

1. **Rebuild once a day.** Visitors always see the live record, because the pages read it when they load. The
   figures inside the HTML are a dated snapshot for search engines and AI assistants, and a daily rebuild keeps
   that snapshot close to the record.
2. **Serve `404.html` for addresses that do not exist**, with status 404.
3. **Redirect the old `.html` addresses with a 301** where the server allows it (`/pricing.html` → `/pricing/`,
   and so on). The bundle contains a small redirect page for each as a fallback, so nothing breaks without this.
4. **Merge `robots.txt`, do not replace it.** The live file carries Cloudflare-managed content signals. The
   bundle's `robots.txt` is the site's own part.
5. **Keep these paths as they are:** `/api/public/…` and `/data/…` (the pages read them), and
   `stats.noguru.io` (visitor statistics).
6. **After the first release:** submit `https://noguru.io/sitemap.xml` in Google Search Console and Bing
   Webmaster Tools.

## Checks after a release

- `https://noguru.io/` shows the record's figures and today's date in "Snapshot of …" before scripts run.
- `https://noguru.io/robots.txt` allows search engines; no page carries `noindex` except redirects and `404.html`.
- `https://noguru.io/pricing.html` lands on `/pricing/`.
- A visit shows up in the statistics under the noguru.io website.
- `https://noguru.io/?utm_campaign=test-1` puts `trial_test-1` into the trial link.

## Still to decide before the first release

- `Google-Extended` in `tools/robots.production.txt` (kept as on the live site for now).
- Whether the wording "DCA-style" on `/dca-bot-vs-grid-bot/` is right.
