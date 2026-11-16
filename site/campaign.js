// Carries the campaign a visitor arrived with into the sign-up links, so a trial or a Cornix sign-up can be counted
// per channel. The tag is the landing address's utm_campaign (or utm_source), kept for the visit only.
// Formats agreed with the server side on 16 November 2026: the members bot takes trial_<tag>, the Cornix links
// take s=<tag>. One tag serves both, so it follows the stricter rule: lowercase letters, digits and hyphen, 1 to 16.
// Anything else leaves the links as they are.
const KEY = 'noguru-campaign';
const VALID = /^[a-z0-9-]{1,16}$/;

export function campaignTag(search, stored = '') {
  const params = new URLSearchParams(search);
  for (const name of ['utm_campaign', 'utm_source']) {
    const value = (params.get(name) || '').trim().toLowerCase();
    if (VALID.test(value)) return value;
  }
  return VALID.test(stored) ? stored : '';
}

export function withCampaign(href, tag) {
  if (!VALID.test(tag)) return href;
  let url; try { url = new URL(href); } catch { return href; }
  if (url.hostname === 't.me' && url.pathname === '/NoGuruMembers_bot' && /^trial_[a-z0-9-]+$/.test(url.searchParams.get('start') || '')) url.searchParams.set('start', `trial_${tag}`);
  else if (url.hostname === 'noguru.io' && /^\/api\/public\/go\/cornix-(signup|bot)$/.test(url.pathname)) url.searchParams.set('s', tag);
  else return href;
  return url.href;
}

export function applyCampaign(root = document) {
  let stored = ''; try { stored = sessionStorage.getItem(KEY) || ''; } catch { /* private mode */ }
  const tag = campaignTag(location.search, stored);
  if (!tag) return '';
  if (tag !== stored) try { sessionStorage.setItem(KEY, tag); } catch { /* private mode */ }
  for (const a of root.querySelectorAll('a[href^="https://t.me/NoGuruMembers_bot"], a[href*="/api/public/go/cornix-"]')) a.href = withCampaign(a.href, tag);
  return tag;
}
