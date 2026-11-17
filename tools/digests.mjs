// The dated digests, read from NoGuru's own digest feed at build time.
//
// The site holds a stored copy of every digest up to 12 November 2026 (site/pilot/migration.js). Every later one
// comes from the server's two public addresses, agreed with the server side on 17 November 2026:
//   https://noguru.io/api/public/digests          {digests: [{slug, kind, date, title}]}
//   https://noguru.io/api/public/digest/<slug>    {slug, kind, date, headline, body}
// A digest that cannot be read, or does not have this shape, is left out; nothing is made up in its place.
export const DIGEST_LIST = 'https://noguru.io/api/public/digests';
export const digestAddress = (slug) => `https://noguru.io/api/public/digest/${slug}`;

const SLUG = /^(\d{4}-\d{2}-\d{2})-(daily|weekly)$/;
const text = (v) => (typeof v === 'string' && v.trim() ? [v.trim()] : []);
const lines = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === 'string' && x.trim()).map((x) => x.trim()) : text(v));

// The rows of the list that are well-formed, newest first as the server gives them.
export function readDigestList(data) {
  if (!data || !Array.isArray(data.digests)) throw new Error('The digest list has no "digests".');
  return data.digests.filter((d) => d && typeof d.slug === 'string' && SLUG.test(d.slug) && typeof d.title === 'string' && d.title.trim());
}

// One digest as a reading page, in the same shape as the stored ones. Returns null when the entry is not usable.
export function digestPage(entry, capturedAt) {
  const m = typeof entry?.slug === 'string' && entry.slug.match(SLUG);
  if (!m || entry.kind !== m[2] || entry.date !== m[1] || typeof entry.headline !== 'string' || !entry.headline.trim() || !entry.body || typeof entry.body !== 'object') return null;
  const [, date, kind] = m, body = entry.body;
  const parts = [['results', 'Results', text(body.results)], ['week-review', 'Week in review', lines(body.week_review)],
    ['market-picture', 'Market picture', lines(body.market_picture)], ['novice-note', 'Publication note', text(body.novice_note)]];
  if (!parts[0][2].length && !parts[1][2].length) return null;   // a digest with no results has nothing to show
  return {
    title: entry.headline.trim(), eyebrow: `Digest archive · ${kind} · ${date}`,
    intro: 'The available original public entry, preserved with its date and source scope.', kind: 'digest-entry',
    sections: [
      {id: 'context', title: 'A dated publication, not today’s account',
        body: [`The original wording and figures below belong to ${date}. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises.`],
        links: [{label: 'Current evidence', url: '?page=evidence'}, {label: 'Current costs and setup', url: '?page=pricing'}]},
      ...parts.filter(([, , b]) => b.length).map(([id, title, b]) => ({id, title, body: b, links: []})),
    ],
    source: {label: 'Original NoGuru public source', url: digestAddress(entry.slug), capturedAt, scope: 'Dated public commentary, not a customer account or a fresh report.'},
  };
}

// Adds the new digests to the site's pages: one page each, a row in the digest index, a link in the library.
// `entries` are the digests read from the feed, in the list's order (newest first). Returns how many were added.
export function addDigests(pages, entries, capturedAt) {
  const added = [];
  for (const entry of entries) {
    const page = digestPage(entry, capturedAt), key = `digest-${entry?.slug}`;
    if (!page || pages[key]) continue;
    pages[key] = page; added.push([entry.slug, page]);
  }
  if (!added.length) return 0;
  const index = pages.digest, rows = index.sections, first = rows.findIndex((s) => SLUG.test(s.id));
  rows.splice(first < 0 ? rows.length : first, 0, ...added.map(([slug, page]) => ({id: slug, title: `${slug.slice(0, 10)} · ${slug.slice(11)}`, body: [page.title],
    links: [{label: 'Read this dated entry', url: `?page=digest-${slug}`}]})));
  const all = rows.filter((s) => SLUG.test(s.id)), latest = all.map((s) => s.id.slice(0, 10)).sort().pop();
  index.eyebrow = `${all.length} public entries · latest ${latest}`;
  const note = rows.find((s) => s.id === 'commentary');
  if (note) note.body = ['The digest is a dated archive of strategy activity and market commentary. New entries are taken from NoGuru’s own digest feed each time this site is rebuilt.', ...note.body.slice(1)];
  const shelf = pages.library?.sections.find((s) => s.id === 'digest');
  if (shelf) shelf.links.unshift(...added.map(([slug, page]) => ({label: page.title, url: `?page=digest-${slug}`})));
  return added.length;
}
