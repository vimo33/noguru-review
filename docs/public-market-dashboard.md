# Public Market widgets

Updated 14 November 2026.

The existing homepage Menu → Market context link opens `read/?page=market`. The original reading header, menu, footer, call to action and origin breadcrumb remain the surrounding interface. `dashboard.html` redirects to that route. The homepage and film experience are unchanged by this integration.

`dashboard-data.js` fetches and interprets ten existing public JSON sources at `https://noguru.io/api/public/`: `flush-state`, `oi-flow`, `trend-matrix`, `session-levels`, `funding-board`, `long-short`, `liquidations`, `fng`, `global` and `calendar`. There is no authenticated account integration or replacement data provider. An unavailable source is reported independently; missing readings are not converted to zero.

`dashboard.js` exports `createDashboardController(root)`. The existing reader router creates one controller mounted at `#market-dashboard`, starts it only on Market and stops it when leaving. Stopping aborts requests, invalidates late responses, clears the timer and removes controller listeners. Hidden tabs pause requests; a visible Market page can refresh every 60 seconds. Manual refresh and the auto-refresh toggle stay within the widget area. Same-Market section jumps replace the current history entry so one Back action returns to the page that opened Market.

Every selector in `dashboard.css` is scoped to `#market-dashboard`. Keep shared reader styles and navigation independent of the widgets. Source observation times and fetch times are distinct; an unknown observation time stays unknown. Funding settlement times are per row; trend distance is measured in ATR units. These readings provide market context, not a trading recommendation.

Validation covered 35 data assertions, 81 controller checks and 42 targeted history checks, including Chromium and WebKit, root and project-prefix paths. Independent review also compared the approved shell and exercised native navigation. Lifecycle and repeat navigation checks used captured response fixtures; live availability was checked separately. These checks do not establish continuous provider availability.

Known limits at review: the original liquidation endpoint returned an empty stale payload, and one live QA batch received HTTP 429 responses. Both are surfaced as unavailable data. The approved reading header already overflowed at a 320px viewport (338px document width); that shared header was preserved. The dashboard content fits at that width, and 390px and desktop layouts were checked.

This is a software implementation note with no proposed contact action; contact assessment is not applicable.
