// Editorial preview, checked 12 November 2026. Plain data; no HTML or account data.
// Core explanations live here. HTTPS links identify supporting primary sources.
const link = (label, url) => ({label, url});
const learn = id => `?page=learn#${id}`;
const glossary = id => `?page=glossary#${id}`;

export const learningPages = {
  'how-it-works': {
    title: 'What happens between a purchase and a sale?',
    eyebrow: 'How NoGuru works',
    intro: 'You choose the capital. NoGuru maintains the trading plan. Cornix executes the instructions in your exchange account.',
    sections: [
      {
        id: 'roles', title: 'One maintained strategy across several coins',
        body: ['NoGuru selects and reviews coins, plans purchase sizes and entry levels, and sets sale targets. The ongoing review informs future purchases as conditions change. You do not have to plan every order yourself.', 'Cornix carries out the configured instructions. Your cash and coins stay in your exchange account. A guide or dashboard is not itself an exchange connection.'],
        links: [link('How ongoing review works', learn('ongoing-review'))],
      },
      {
        id: 'entries', title: 'Buy at planned levels, in stages',
        body: ['The next purchase is triggered by a planned price level, rather than a date on the calendar. Several purchases can belong to one cycle. A lower-price purchase lowers that cycle’s weighted average cost and commits more capital.'],
        links: [link('See a worked average-cost example', learn('weighted-average')), link('Price stages and calendar DCA', learn('price-staged'))],
      },
      {
        id: 'sales', title: 'A sale can make capital available again',
        body: ['The strategy aims for sales above a cycle’s average cost. The supplier describes a trailing exit: once eligible, it follows a rise and seeks a sale after a retreat. A target is an aim; a fill or profit is not guaranteed.', 'A completed sale releases proceeds that may fund another cycle. The same coin can be considered again if it remains approved and the rules and available cash allow.'],
        links: [link('Target and trailing exit', glossary('target')), link('Completed results and current holdings', learn('completed-and-held'))],
      },
      {
        id: 'capacity', title: 'Some capital may still be waiting',
        body: ['Several coins can be active at once: one buying, one approaching a target, another waiting below cost. Reserves change as purchases and sales happen. There is finite buying capacity; if available cash is committed, new buying must wait.', 'A separate cycle may begin lower while an older one remains open. Each has its own average cost. Starting a new cycle does not change the old cycle’s average.'],
        links: [link('Reserves and sizing', learn('reserves')), link('Separate cycles, separate averages', learn('separate-cycles')), link('What waiting means', learn('waiting'))],
      },
      {
        id: 'setup', title: 'Keep the intended allocation separate',
        body: ['The published setup calls for a dedicated exchange subaccount holding only the capital set aside for the strategy. This keeps percentage-based instructions separate from other funds or bots.', 'Before activating anything, confirm exchange and Cornix-plan compatibility and use spot-trading API permissions with withdrawals disabled. Never paste credentials into this guide. It remains unconnected.'],
        links: [link('Review capital, subscriptions and trial clocks', '?page=pricing'), link('API key', glossary('api-key')), link('Source: original published setup', 'https://noguru.io/how-it-works.html')],
      },
      {
        id: 'control', title: 'Your judgment still matters',
        body: ['Coins can keep falling or never recover. There is no strategy stop-loss. Pausing new trades does not sell existing holdings or settle open orders; those need a separate decision. Check the account and execution as well as the signals.'],
        links: [link('Inspect the evidence', '?page=evidence'), link('Continue to setup', '?page=setup')],
      },
    ],
  },

  pricing: {
    title: 'Capital and subscriptions do different jobs.',
    eyebrow: 'Pricing and setup · checked 12 November 2026',
    intro: 'The trading capital stays in your exchange. NoGuru and Cornix are separate services, with separate subscriptions and trial clocks.',
    sections: [
      {
        id: 'noguru', title: 'NoGuru: the maintained strategy',
        body: ['The current public founding price is $49 per month while the founding offer is open. The public standard price is $99 per month. These are alternative subscription rates, not two charges.', 'The published founding offer applies to the first 100 subscribers and continues while the subscription remains active. Confirm the current offer before paying.'],
        links: [link('Source: current NoGuru offer', 'https://noguru.io/pricing.html'), link('Source: public new-buyer price table', 'https://noguru.io/gate/api/price')],
      },
      {
        id: 'cornix', title: 'Cornix: configured execution',
        body: ['Cornix Advanced currently costs $49.90 per month, or $32.99 per month equivalent billed annually. Confirm that the plan and exchange support your intended setup. Annual billing is a different commitment from monthly billing.', 'With Advanced on monthly billing, combined subscription costs would be $98.90 per month at NoGuru’s founding rate, or $148.90 at its standard rate. Exchange trading fees and other applicable costs are additional.'],
        links: [link('Source: official Cornix plans and billing', 'https://cornix.io/pricing/')],
      },
      {
        id: 'capital', title: 'Plan for the operating capital separately',
        body: ['The supplier states an operating minimum of 3,000 USDT for the strategy. Subscription charges are separate from that trading capital. A smaller amount typed into this guide is only an intention; it does not establish eligibility or activate a trade.', 'Cash is working capacity for later purchases. It can become committed in holdings, and having more capital does not guarantee a higher percentage return or recovery.'],
        links: [link('Why reserves change', learn('reserves')), link('Review your intended setup', '?page=setup')],
      },
      {
        id: 'economics', title: 'A fee is certain; a trading return is not',
        body: ['Subscriptions are costs whether or not a cycle closes profitably. A fee-equivalence calculation based on a historical monthly rate is an illustration, not a promise that the service will pay for itself.', 'Keep the trading allocation, subscription budget and possible trading losses distinct. Completed trading profit is not the same as whole-account growth or money available to withdraw.'],
        links: [link('Subscription economics', learn('subscription-economics')), link('Completed gains and current holdings', learn('completed-and-held'))],
      },
      {
        id: 'trials', title: 'Two trials, two clocks',
        body: ['NoGuru advertises 14 days free with no card. Its precise entitlement start and cutoff have not been tested in this preview.', 'New Cornix users receive a separate 14-day Premium trial with no payment details. Cornix starts its clock when the first trade is created, including a manual trade, smart bot, signal, demo or backtesting. The two clocks need not start together.', 'Use a trial to understand setup and observed execution. It cannot establish future returns. Viewing this guide starts neither service.'],
        links: [link('Review the next step here', '?page=setup'), link('Source: official Cornix trial terms', 'https://help.cornix.io/en/articles/5814827-cornix-free-trial')],
      },
      {
        id: 'before-starting', title: 'Before you start',
        body: ['Confirm the current offer, operating capital, service compatibility and risk before leaving the guide. The public NoGuru offer excludes UK residents. Other product and country eligibility has not been assessed here. Your account remains unconnected until you complete and verify a real setup.'],
        links: [link('How the exchange setup works', '?page=how-it-works#setup'), link('Continue to setup', '?page=setup')],
      },
    ],
  },

  learn: {
    title: 'Understand one useful thing at a time.',
    eyebrow: 'Learn the mechanics',
    intro: 'Eight short explanations of the choices behind the strategy. Read what is useful, then return to the same journey.',
    sections: [
      {
        id: 'price-staged', title: 'Price-staged buying and calendar DCA',
        body: ['Calendar dollar-cost averaging buys on a schedule, such as each month. This strategy plans purchase levels around price movement. A later purchase happens only if its level and the strategy’s conditions are met.', 'Both approaches spread buying across time, but they answer different questions: when the calendar says to buy, or when price reaches a planned level. Neither removes the risk that the coin keeps falling.'],
        links: [link('See the cycle illustration', '?page=story&chapter=cycle'), link('Ladder and rung', glossary('ladder'))],
      },
      {
        id: 'weighted-average', title: 'Why the average is weighted by quantity',
        body: ['Average purchase cost is the total spent divided by the total units bought. Buying more units at a lower price can reduce the average cost of that same cycle. It also increases the amount exposed to the coin.', 'The example is arithmetic before fees, not a trade recommendation or operating allocation. Lowering the average does not guarantee a sale or recovery.'],
        example: 'Spend 100 USDT at a price of 100: buy 1 unit. Spend another 100 USDT at a price of 80: buy 1.25 units. Total cost is 200 USDT for 2.25 units. The weighted average is 200 ÷ 2.25 = 88.89 USDT per unit, rounded.',
        links: [link('Follow the illustrated purchases', '?page=story&chapter=cycle'), link('Cycle', glossary('cycle'))],
      },
      {
        id: 'separate-cycles', title: 'A new lower cycle has its own average',
        body: ['If the rules and available cash allow, a smaller separate cycle may begin lower while an older one waits. Each cycle has its own purchases and average. A new cycle does not rewrite the old one.', 'A combined average across every held unit of the same coin is a different calculation. It does not mean that separate cycles have been merged or that an older exit target has changed.'],
        example: 'Illustrative same-coin holdings: cycle A has 1 unit bought at 100; cycle B has 1 unit bought at 60. A’s average remains 100, and B’s is 60. The combined holding average is 80. Those are three different measurements.',
        links: [link('What waiting uses', learn('waiting')), link('Weighted average', learn('weighted-average'))],
      },
      {
        id: 'reserves', title: 'Cash gives a later purchase room to happen',
        body: ['Reserve cash supports planned purchases that have not filled yet. Purchases commit it; completed sales may make capital available again. The reserve varies, and it can run low.', 'Sizing and spacing affect how quickly capital becomes committed. The strategy has finite capacity: an attractive level does not create cash. More capital can support purchases, but it does not guarantee higher percentage returns.'],
        links: [link('Waiting and committed capital', learn('waiting')), link('Operating capital and costs', '?page=pricing#capital')],
      },
      {
        id: 'completed-and-held', title: 'Completed results and holdings still open',
        body: ['A completed cycle has sold its holdings. Its trading result depends on its purchase and sale prices and the costs included in the calculation. A public before-fee figure must not be described as net profit after all costs.', 'Whole-account value is cash plus the current market value of holdings. Completed gains are already inside that value. Adding them again would count them twice. Holdings still open can reduce account value even while completed cycles show gains.', 'The current public signal feed shows completed cycles and open aggregates. It does not provide the cash and monetary holdings needed to reconcile a current whole account.'],
        example: 'Account value = cash + held units valued at current prices. Completed profit helps explain how that value changed; it is not another amount to add on top.',
        links: [link('Inspect the same evidence', '?page=evidence'), link('How to read source dates', '?page=digest#dates')],
      },
      {
        id: 'waiting', title: 'Waiting costs capacity as well as time',
        body: ['A cycle below its exit conditions may keep holding the coin. That capital is not available for another purchase. If much of the allocation is committed, there may be little new buying even when prices move.', 'The holding can lose market value or never recover. There is no strategy stop-loss. Pausing new trades does not close existing holdings or open orders; those need a separate decision.'],
        links: [link('Separate lower cycles', learn('separate-cycles')), link('What the setup controls', '?page=how-it-works#control')],
      },
      {
        id: 'ongoing-review', title: 'The work continues after choosing a coin',
        body: ['NoGuru maintains a strategy rather than handing over a setting once. The supplier describes continuing reviews of coin suitability, volatility, performance and concentration. These inform future purchase sizing and spacing.', 'A coin can receive less future allocation or stop receiving new purchases. That does not itself sell existing holdings or release their capital. A completed sale may be followed by another cycle in the same coin only while approval, rules and cash allow.'],
        links: [link('The division of roles', '?page=how-it-works#roles'), link('Reserve and sizing', learn('reserves'))],
      },
      {
        id: 'subscription-economics', title: 'Separate the cost from the return assumption',
        body: ['NoGuru maintains the strategy; Cornix is the separate execution service. Their subscriptions and exchange trading costs should be considered together when deciding whether the setup suits your allocation.', 'A historical monthly trading rate describes its source period and calculation basis. It is not a promised monthly income. Using it to estimate fee coverage does not establish a safe allocation, a minimum or guaranteed payback.'],
        example: 'At the checked founding rate, $49 for NoGuru plus $49.90 for Cornix Advanced monthly billing totals $98.90 per month, before exchange fees and other costs. The capital at risk is separate from that subscription bill.',
        links: [link('Checked prices and two trial clocks', '?page=pricing'), link('Current source index', '?page=digest')],
      },
    ],
  },

  glossary: {
    title: 'A few words that make the plan clearer.',
    eyebrow: 'Glossary',
    intro: 'Short definitions for this spot strategy. Examples of futures or stop-based systems elsewhere are not part of this product.',
    sections: [
      {id: 'cycle', title: 'Cycle', body: ['A set of purchases managed toward a sale. A cycle may contain several buys and remains open until sold. A completed cycle is not a guarantee of a gain after costs.'], links: [link('Follow one cycle', '?page=story&chapter=cycle')]},
      {id: 'ladder', title: 'Ladder and rung', body: ['A ladder is a planned set of buying levels. A rung is one planned purchase level. Planned levels, filled purchases and completed cycles are different counts.'], links: [link('Price-staged buying', learn('price-staged'))]},
      {id: 'average', title: 'Weighted average purchase cost', body: ['Total purchase cost divided by total units bought within the stated group, such as one cycle. Fees must be identified as included or excluded.'], links: [link('Worked example', learn('weighted-average'))]},
      {id: 'reserve', title: 'Reserve', body: ['Available cash kept for possible later purchases. It changes as purchases and sales happen and is not a fixed promised percentage.'], links: [link('Cash and sizing', learn('reserves'))]},
      {id: 'target', title: 'Target and trailing exit', body: ['A target is an intended exit condition. A trailing exit follows an eligible rise and seeks a sale after a retreat. Neither guarantees execution or profit.'], links: [link('How sales may free capital', '?page=how-it-works#sales')]},
      {id: 'realized', title: 'Completed result', body: ['The result of purchases that have been sold, under the stated fee treatment. Realized profit is part of account value; it is not extra cash to add a second time.'], links: [link('Completed results and current holdings', learn('completed-and-held'))]},
      {id: 'account-value', title: 'Account value', body: ['Cash plus holdings valued at current market prices. A before-fee completed-cycle return alone cannot tell you the whole account’s current value.'], links: [link('Read the evidence', '?page=evidence')]},
      {id: 'signal', title: 'Signal and Cornix', body: ['A signal communicates strategy instructions, such as the coin, purchase sizes and levels, and an exit target. Cornix manages configured execution through your exchange account.'], links: [link('Who does what', '?page=how-it-works#roles')]},
      {id: 'api-key', title: 'API key', body: ['Exchange-issued credentials that allow specified actions by another program. Real setup should allow the required spot trading and disable withdrawals. This guide never needs your credentials.'], links: [link('Connection preparation', '?page=how-it-works#setup')]},
      {id: 'spot', title: 'Spot', body: ['Buying and holding the actual coin rather than a leveraged futures position. Owning a coin does not prevent its price falling or the exchange failing.'], links: [link('What waiting means', learn('waiting'))]},
    ],
  },

  digest: {
    title: 'Know which source you are reading.',
    eyebrow: 'Updates and source index · checked 12 November 2026',
    intro: 'This page indexes the available public sources. It does not fabricate a new daily report or claim to show your account.',
    sections: [
      {
        id: 'signals', title: 'Published signal history',
        body: ['The Evidence view requests the public signal feed and shows its coverage window, fetch status and stated before-fee basis. It contains completed-cycle rows and open aggregates, not customer balances.', 'The server’s exact allocation normalization and a current monetary account reconciliation are not exposed. An unavailable source stays unavailable in this preview; no remembered figure silently replaces it.'],
        links: [link('Open Evidence here', '?page=evidence'), link('Primary source: public signal endpoint', 'https://noguru.io/api/public/track-record')],
      },
      {
        id: 'commentary', title: 'Dated daily and weekly commentary',
        body: ['The original digest has a dated archive of strategy activity and market commentary. At the 12 November source check, its latest listed daily entry was dated 12 November 2026. This is a checked archive status, not a promise of an ongoing refresh on this page.', 'Read each entry with its own start date and cutoff. Older entries use different source populations; daily and weekly cutoffs can differ. Commentary should not be merged into a new performance series.'],
        links: [link('Primary source: dated digest archive', 'https://noguru.io/digest/'), link('Primary source: digest index', 'https://noguru.io/api/public/digests')],
      },
      {
        id: 'market', title: 'Market context is a separate source',
        body: ['The pilot’s market panel reads a timestamped trend matrix. Its readings describe where prices sit relative to recent averages, in units of typical movement. They are not percentage returns, strategy fills or buying instructions.', 'Recent market-drop episodes on the original dashboard are market observations. Pricing’s historical crash replays are a different set of strategy scenarios. Neither is a customer account.'],
        links: [link('Primary source: trend matrix', 'https://noguru.io/api/public/trend-matrix'), link('Primary source: original market dashboard', 'https://noguru.io/dashboard.html')],
      },
      {
        id: 'dates', title: 'Three dates can mean three things',
        body: ['Coverage dates tell you which period a result describes. An observation or generation timestamp tells you when the source was measured or built. Fetch time tells you when this browser received it.', 'A fresh download can still contain old observations. Where the source supplies no generation timestamp, the guide says so rather than inventing one. Stale and failed states should remain visible.'],
        links: [link('Completed results and current holdings', learn('completed-and-held')), link('Return to your story', '?page=story')],
      },
    ],
  },
};
