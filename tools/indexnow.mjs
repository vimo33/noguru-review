// Tells the search engines that take part in IndexNow (Bing, Yandex, Seznam, Naver and others; not Google) which addresses changed.
//
//   node tools/indexnow.mjs            -> lists what would be sent, sends nothing
//   node tools/indexnow.mjs --send     -> sends every address in the live sitemap
//
// Run it after a release is live: the key file /<key>.txt must already be served by noguru.io.
// The key is written into the production build by tools/build-static.mjs (INDEXNOW_KEY).
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url)), HOST = 'noguru.io';
const KEY = fs.readFileSync(path.join(HERE, 'build-static.mjs'), 'utf8').match(/const INDEXNOW_KEY = '([0-9a-f]{32})'/)?.[1];
if (!KEY) { console.error('No INDEXNOW_KEY in tools/build-static.mjs.'); process.exit(1); }
const keyLocation = `https://${HOST}/${KEY}.txt`;
const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const served = await fetch(keyLocation).then(async (r) => r.ok && (await r.text()).trim() === KEY).catch(() => false);
console.log(`${urlList.length} addresses in the live sitemap. Key file ${served ? 'is served' : 'is NOT served yet'} at ${keyLocation}.`);
if (!process.argv.includes('--send')) { console.log('Nothing sent. Run again with --send.'); process.exit(0); }
if (!served) { console.error('Not sent: the key file must be live first.'); process.exit(1); }
const res = await fetch('https://api.indexnow.org/indexnow', {method: 'POST', headers: {'content-type': 'application/json; charset=utf-8'}, body: JSON.stringify({host: HOST, key: KEY, keyLocation, urlList})});
console.log(`IndexNow answered ${res.status} ${res.statusText}.`);
process.exit(res.ok ? 0 : 1);
