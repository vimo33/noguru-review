// Editorial preview, checked 12 November 2026. Plain data; no HTML or account data.
// Core explanations live here. HTTPS links identify supporting primary sources.
import {migratedPages} from './migration.js';
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
    title: 'One subscription. $49 a month, after 14 days free.',
    eyebrow: 'Pricing · prices checked 12 November 2026',
    intro: 'NoGuru is the one thing you subscribe to here. Your trading money stays in your own exchange account. Today the bot runs through Cornix; more ways to run it are planned.',
    cards: [
      {
        eyebrow: 'NoGuru · founding price', title: 'The bot', price: '$49', unit: 'a month, after 14 days free',
        body: ['The founding price is for the first 100 subscribers and stays for as long as the subscription runs. After that the price is $99 a month.', 'No card for the trial. Stop whenever you like.'],
        links: [link('Start my 14 days', '?page=setup')],
      },
      {
        eyebrow: 'When it covers its own cost', title: 'Pays for itself from about', price: '$500', unit: 'of trading money',
        body: ['At the pace of the public record, roughly this much trading money earns what the subscription costs in a month. Anything above it is yours.'],
        note: 'A pace from the past, before exchange fees. It is not a promise: months differ, and coins the bot holds can sit below cost.',
        links: [link('How this is worked out', '?page=pricing#payback')],
      },
    ],
    sections: [
      {
        id: 'noguru', title: 'What the $49 pays for',
        body: ['NoGuru picks the coins, plans each purchase and sets each sale, and keeps reviewing all of it as the market changes. You do not plan orders yourself.', 'The founding price is $49 a month while founding places last. The standard price is $99 a month. These are two alternative prices, never two charges. Confirm the current offer before paying.'],
        links: [link('Source: current NoGuru offer', 'https://noguru.io/pricing.html'), link('How it works', '?page=how-it-works')],
      },
      {
        id: 'payback', title: 'How much money makes the subscription pay for itself',
        body: ['Take the monthly price and divide it by the monthly pace of the public record. The answer is the amount of trading money that would earn exactly the subscription in a month at that pace. It is rounded up to the next $10, so it never understates what you need.', 'Below that amount you would pay more than the bot earns for you. Above it, the difference is yours. The figure moves as the record moves, so it is read from the live record each time you open this page.'],
        links: [link('See the record it comes from', '?page=evidence'), link('Completed gains and coins still held', learn('completed-and-held'))],
      },
      {
        id: 'cornix', title: 'Where it runs today: Cornix',
        body: ['NoGuru decides what to buy and sell. Cornix is the tool that places those orders in your exchange account. It is a separate company, so you set up and pay for its plan with Cornix directly, not here.', 'New Cornix users get 14 days free with no payment details. After that, Cornix Advanced costs $49.90 a month, or $32.99 a month when billed yearly. Check that the plan supports your exchange before you choose.', 'Cornix is the first place NoGuru runs. Other platforms are planned, and this page will list them when they are ready.', 'Cornix does not serve every country. Its terms prohibit use by citizens and residents of: United States, Canada, Colombia, Ecuador, Bolivia; United Kingdom, Russia, Turkey, North Macedonia; Israel, Iran, Lebanon, Syria, Egypt, Algeria, Morocco; China, Vietnam, Nepal, North Korea. They also exclude any country under country-wide sanctions and any place whose law prohibits the service. The terms say “among others”, so this list is a minimum. If you live in one of these places you cannot run NoGuru through Cornix today.', 'Cornix also does not support some regional exchange sites: Binance.US, okx.eu, okx.us and Bybit.eu.'],
        links: [link('Source: official Cornix plans', 'https://cornix.io/pricing/'), link('Source: official Cornix trial terms', 'https://help.cornix.io/en/articles/5814827-cornix-free-trial'), link('Source: Cornix terms, restricted countries (last updated 4 September 2023, read 14 November 2026)', 'https://cornix.io/terms/'), link('Source: Cornix supported exchanges (16 September 2026)', 'https://help.cornix.io/en/articles/5814836-supported-exchanges')],
      },
      {
        id: 'capital', title: 'Your trading money is not a fee',
        body: ['It stays in your own exchange account the whole time. NoGuru suggests about 3,000 USDT or more, so the bot has room to buy in several steps across several coins. Your exchange charges its normal trading fees on each order.', 'Below 500 USDT the bot does not work. At about 2,000 USDT it can fill part of its orders; above 3,000 USDT it can fill most of them. A larger amount gives the bot more room; it does not guarantee a higher percentage or a recovery.'],
        links: [link('Why cash reserves matter', learn('reserves')), link('Start your free trial', '?page=setup')],
      },
      {
        id: 'trials', title: 'What the 14 free days cover',
        body: ['Both NoGuru and Cornix are free for 14 days, and neither asks for a card. The setup on the home page starts them in the right order.', 'Cornix starts counting when your first trade is created, and that includes a demo trade. The exact start and end of the NoGuru trial have not been tested in this preview.', 'Two weeks show you how it works: purchases, sales, coins waiting. They cannot tell you what a year will bring.'],
        links: [link('What 14 days will show you', '?page=setup'), link('The two free trials', '?page=trial')],
      },
      {
        id: 'economics', title: 'A fee is certain; a trading return is not',
        body: ['The subscription is charged whether or not the month goes well. The pay-back figure uses a pace from the past and is an illustration, not a guarantee.', 'Completed trading profit is not the same as the whole account growing. Coins still held can be below what they cost.'],
        links: [link('Subscription economics', learn('subscription-economics')), link('The risks', '?page=risks')],
      },
      {
        id: 'before-starting', title: 'Before you start',
        body: ['Confirm the current offer, the trading money you intend to use, that your exchange works with Cornix, and the risks. Check that your country is not on Cornix’s restricted list. The public NoGuru offer excludes UK residents. Other country eligibility has not been assessed here.'],
        links: [link('Countries Cornix does not serve', '?page=pricing#cornix'), link('How the exchange setup works', '?page=how-it-works#setup'), link('Continue to setup', '?page=setup')],
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

// Complete public collections sit alongside the concise current-product reading.
const currentGlossary = learningPages.glossary;
const digestOrientation = learningPages.digest.sections;
Object.assign(learningPages, migratedPages);

const correctedDefinitions = {
  cycle: ['A set of purchases managed toward a sale. A cycle may contain several buys and remains open until sold. A completed cycle is not a guarantee of a gain after costs.', 'The unit counted is the completed cycle, not every planned level, filled purchase or exchange order.'],
  'ladder-rung': ['A ladder is a planned set of buying levels; a rung is one planned purchase level. Planned levels, filled purchases and completed cycles are different counts.', 'Later lower purchases happen only if the strategy conditions and available cash allow. No fixed current purchase count is established by this definition.'],
  'dca-grid': ['Calendar dollar-cost averaging buys on a schedule. Price-staged buying plans entries around price movement. NoGuru’s later purchases depend on planned levels and strategy conditions, rather than a fixed calendar.', 'A lower purchase can reduce that same cycle’s weighted average cost and increase exposure. It does not guarantee recovery.'],
  signal: ['A signal communicates strategy instructions, such as the coin, purchase sizes and levels, and an exit target. Cornix manages configured execution through your exchange account. A signal is not proof that every subscriber received the same fill.'],
  cornix: ['A separate service that manages configured trading instructions through a connection to your exchange account. Its subscription, setup and trial are separate from NoGuru’s.'],
  'api-key': ['Exchange-issued credentials allowing specified actions by another program. Real setup should permit the required spot trading and disable withdrawals. This guide does not need your credentials.'],
  'stop-loss': ['A planned instruction to exit a losing position at specified conditions. Gaps, liquidity and execution can make the actual result differ from the intended limit.', 'NoGuru’s current spot strategy has no strategy stop-loss. Generic stop-based lessons do not establish a maximum loss for it.'],
  'take-profit': ['An intended profit-taking condition. A target does not guarantee that the exchange fills an order or that the final result is profitable after costs.'],
  'market-neutral-basket': ['A general strategy concept that combines opposing exposures to reduce a shared directional bet. It is not a description of NoGuru’s current public spot strategy.'],
  'funding-rate': ['A periodic payment between long and short holders of a perpetual futures contract. Payment schedules and rates depend on the venue and contract. This is a futures concept, not a charge for holding a spot coin in this strategy.'],
};
const completeTerms = migratedPages['source-glossary'].sections.map(section => ({
  ...section,
  body: correctedDefinitions[section.id] || section.body,
}));
for (const section of currentGlossary.sections) {
  if (!completeTerms.some(term => term.id === section.id)) completeTerms.push(section);
}
learningPages.glossary = {
  title: 'The full glossary, with current strategy context.',
  eyebrow: '42 public source terms, plus current-product definitions',
  intro: 'The complete captured term collection is available here. Generic futures and stop-based concepts are distinguished from the current spot strategy. Known outcome assurances have been corrected.',
  kind: 'glossary',
  sections: completeTerms,
  source: {...migratedPages['source-glossary'].source, scope: 'Complete public term collection; specific current-product corrections are applied. The original source wording is preserved separately.'},
};
learningPages.glossary.sections.push({
  id: 'source-edition', title: 'Source wording and corrections',
  body: ['Cycle gains are not assured; buying levels are not a verified order count; stop-loss execution is not a guaranteed cap. The current product is spot only. These distinctions take precedence over older source wording.'],
  links: [link('Read the original captured glossary wording', '?page=source-glossary')],
});

for (const section of digestOrientation) {
  if (!learningPages.digest.sections.some(current => current.id === section.id)) learningPages.digest.sections.unshift(section);
}

learningPages.learn.sections.push({
  id: 'full-collection', title: 'Explore the full public collection',
  body: ['The short explanations above focus on this strategy. The complete available public Academy, including its original tables and figures, is also local. Member-only remainders remain clearly marked as unavailable.'],
  links: [link('Browse all 22 free lessons', '?page=academy'), link('Open the full glossary', '?page=glossary'), link('Browse the dated digest archive', '?page=digest')],
});

learningPages.pricing.kind = 'pricing';

learningPages.trial = {
  title: 'Two services. Two separate trial clocks.',
  eyebrow: 'After you understand the setup · checked 12 November 2026',
  intro: 'Take a moment to get comfortable with the two services and their timing. When you’re ready, the provider links are below.',
  notice: 'This preview starts neither service and leaves your exchange unconnected.',
  kind: 'trial',
  cards: [
    {eyebrow: 'Strategy access', title: 'NoGuru', price: '14 days', unit: 'free', body: ['No card or payment details. Public terms say once per Telegram account; access ends unless you pay.'], note: 'The exact activation trigger and cutoff were not tested in this preview.'},
    {eyebrow: 'Execution platform', title: 'Cornix Premium', price: '14 days', unit: 'free for new users', body: ['No payment details. The clock starts at the first created trade, including manual, smart-bot, signal, demo or backtesting trades.'], note: 'The trial is Premium; the paid plan you later choose may differ.'},
  ],
  sections: [
    {id: 'prepare', title: 'Know what you are about to connect', body: ['Review the operating capital, separate subscriptions, compatible exchange and dedicated allocation. Confirm spot-trading permissions with withdrawals disabled. Cornix does not serve every country, the United States, the United Kingdom and Canada among them; check the full list before you sign up. Your account in this guide is still unconnected.'], links: [link('Countries Cornix does not serve', '?page=pricing#cornix'), link('Return to setup preview', '?page=setup'), link('Read setup and control', '?page=how-it-works#setup'), link('Review the full cost example', '?page=pricing')]},
    {id: 'clocks', title: 'The clocks need not begin together', body: ['NoGuru access and Cornix’s first-trade-triggered trial are separate. A demo or backtest can start the Cornix clock before you place a real exchange trade. Confirm your actual dates with each service.', 'Use a trial to check setup and observed execution. It does not establish future returns. The public NoGuru offer excludes UK residents; other eligibility still needs confirmation.'], links: [link('Read the captured provider terms here', '?page=terms'), link('Primary source: Cornix’s official trial clock', 'https://help.cornix.io/en/articles/5814827-cornix-free-trial')]},
    {id: 'provider-links', title: 'Provider links, when you are ready', body: ['These intentional external links leave the local preview. NoGuru’s bot requires your own action in Telegram; Cornix registration is a separate service step. Viewing the guide starts neither.'], links: [link('Open the NoGuru provider bot — external', 'https://t.me/NoGuruMembers_bot?start=trial_cornixpage'), link('Open Cornix registration — external', 'https://dashboard.cornix.io/register')]},
  ],
  source: {label: 'Checked primary offer and trial sources', url: 'https://noguru.io/pricing.html', capturedAt: '2026-11-12', scope: 'NoGuru pricing and terms; official Cornix pricing and trial article. No activation, purchase or authenticated setup tested.'},
};

learningPages.support = {
  title: 'Find the detail you need.', eyebrow: 'Support and information',
  intro: 'Current core explanations and dated source readings share the same local journey. Original source editions keep their dates and limits visible.',
  sections: [
    {id: 'current', title: 'Current setup and service reading', body: ['Start with the roles, costs, risks and connection preview.'], links: [link('How it works', '?page=how-it-works'), link('Pricing and the combined bill', '?page=pricing'), link('Setup preview', '?page=setup'), link('Trial clocks and later provider links', '?page=trial')]},
    {id: 'questions', title: 'The available support collection', body: ['These pages preserve the available prior review reading, with current-context notes where the source is older.'], links: [link('Questions and answers', '?page=faq'), link('Exchange directory', '?page=exchanges'), link('Risks and control', '?page=risks'), link('About the service', '?page=about'), link('Setup source reading', '?page=setup-guide'), link('Worked examples source reading', '?page=examples'), link('Sharp-market-fall source reading', '?page=market-stress'), link('Resource source reading', '?page=resources')]},
    {id: 'provider', title: 'Original public provider information', body: ['The provider pages are captured source texts, not a new legal clearance or a trial activation.'], links: [link('Provider identity', '?page=impressum'), link('Terms', '?page=terms'), link('Privacy', '?page=privacy'), link('Risk disclaimer', '?page=disclaimer'), link('Historical methodology and its source conflict', '?page=methodology')]},
  ],
};

// Comparison page drafted 15 November 2026 for the searches "DCA bot vs grid bot", "grid bot" and "DCA bot".
// DRAFT: the description of Stepgrid as "DCA-style" needs the engine builder's agreement before production.
learningPages['dca-bot-vs-grid-bot'] = {
  title: 'DCA bot, grid bot or the NoGuru bot: what is the difference?',
  eyebrow: 'Compare',
  intro: 'Grid bots and DCA bots both buy as prices fall, and they are easy to mix up. Here is how each one works, when each earns and when each struggles, and where the NoGuru bot fits.',
  sections: [
    {id: 'short-answer', title: 'The short answer',
      body: ['A grid bot trades inside a price range you choose: it buys a little lower and sells a little higher, again and again, for as long as the price stays in that range.',
        'A DCA bot follows one coin down: it buys more each time the price drops by a set amount, which lowers the average cost, and sells everything once the price is back above that average.',
        'The NoGuru bot works in the DCA style on about 20 coins at once: it buys in steps as a coin falls, then sells above the average and follows the price up before it does. The settings are maintained for you and arrive as signals, so there is no range or spacing to configure.'],
      links: []},
    {id: 'grid-bot', title: 'What a grid bot does',
      body: ['You set a lowest price, a highest price and a number of steps. The bot places buy orders below the current price and sell orders above it, evenly spaced. Each time the price crosses a step and comes back, the bot has bought low and sold a step higher, and keeps the gap.',
        'It earns most when a coin moves sideways and crosses the same steps many times. It struggles when the price leaves the range. Below the range, it is left holding everything it bought on the way down and stops trading. Above the range, it has sold out and takes no part in the rest of the rise.',
        'So the result depends on choosing the range well, and on choosing it again when the market moves.'],
      links: []},
    {id: 'dca-bot', title: 'What a DCA bot does',
      body: ['In trading tools such as Cornix and 3Commas, “DCA bot” means this: the bot makes a first buy, then places further buys, often called safety orders, each time the price falls by a set percentage. Every extra buy lowers the average cost. When the price climbs a set percentage above that average, the bot sells the lot and starts again.',
        'This is different from the everyday meaning of dollar-cost averaging, which is buying a fixed amount on a calendar, say every week, and never selling.',
        'A DCA bot earns from dips that recover. It struggles in a long fall: once the last planned buy is used, it can only hold a coin that is below cost, unless you set a stop loss, which sells at a loss.'],
      links: [link('What staged buying does to the average', learn('weighted-average'))]},
    {id: 'noguru-bot', title: 'Where the NoGuru bot fits',
      body: ['The NoGuru bot buys a coin in steps as it gets cheaper, up to a fixed limit per coin and a fixed total across all coins. Selling starts about 2% above the coin’s average cost; from there the bot follows the price up and sells when the rise runs out. A finished cycle is never sold at a loss, and there is no stop loss: a coin that keeps falling is held until its price recovers.',
        'It watches about 20 established coins around the clock and decides, coin by coin, when to buy, how much, and when to sell. Coins are added and retired by rule, with a monthly review by a person.',
        'It is spot only: you own the coins and nothing is borrowed. NoGuru publishes the instructions as signals, Cornix carries them out, and the money stays in your own exchange account.'],
      links: [link('How NoGuru works, step by step', '?page=how-it-works'), link('The risks, said plainly', '?page=risks')]},
    {id: 'side-by-side', title: 'Side by side',
      body: ['Grid bot, DCA bot and the NoGuru bot compared: what you set, when each earns, when each struggles.'],
      blocks: [{type: 'table', caption: 'A grid bot, a DCA bot and the NoGuru bot compared',
        headers: ['', 'Grid bot', 'DCA bot', 'NoGuru bot'],
        rows: [
          ['What you set yourself', 'The price range, the number of steps and the amount', 'The first buy, the size and spacing of further buys, and the take-profit', 'Only how much money to set aside. The settings arrive as signals'],
          ['How it buys', 'At fixed steps inside the range', 'More each time the price drops a set amount', 'In steps as a coin falls, up to a fixed limit'],
          ['How it sells', 'One step above each buy', 'Everything, at a set percentage above the average', 'From about 2% above the average, following the price up'],
          ['Earns when', 'The price moves up and down inside the range', 'A dip recovers', 'Dips recover, across about 20 coins'],
          ['Struggles when', 'The price leaves the range', 'The price keeps falling past the last buy', 'The whole market falls for a long time: coins wait below cost and buying pauses when the cash is used'],
          ['Stop loss', 'Optional', 'Optional', 'None. It waits'],
          ['Coins', 'Usually one per bot', 'Usually one per bot', 'About 20, chosen by rule'],
          ['Your work', 'Choose and adjust the range', 'Choose and adjust the settings', 'Check Cornix from time to time'],
        ]}],
      links: []},
    {id: 'which-one', title: 'Which one suits you',
      body: ['If you enjoy designing a strategy and adjusting it as the market changes, a grid or DCA bot you configure yourself gives you every control.',
        'If you would rather run a maintained strategy and judge it by a public record, that is what the NoGuru bot is for. Its whole record is published: every finished trade, and the trades still open below cost.',
        'One thing is the same for all three. They buy as prices fall, so in a long market fall each of them can be left holding coins worth less than they cost. None of them removes that risk.'],
      links: [link('See every finished trade', '?page=record'), link('Pricing and the 14-day free trial', '?page=pricing')]},
  ],
};

const catalogGroups = [
  {id: 'journey', title: 'The current journey', keys: ['how-it-works', 'dca-bot-vs-grid-bot', 'pricing', 'trial', 'learn', 'glossary', 'academy', 'digest', 'support']},
  {id: 'academy', title: 'Every public Academy lesson and calculator', keys: Object.keys(learningPages).filter(key => key.startsWith('academy-'))},
  {id: 'digest', title: 'Every captured public digest', keys: Object.keys(learningPages).filter(key => key.startsWith('digest-'))},
  {id: 'support', title: 'Support, legal and information reading', keys: ['about', 'faq', 'exchanges', 'resources', 'risks', 'setup-guide', 'examples', 'market-stress', 'impressum', 'terms', 'privacy', 'disclaimer', 'methodology']},
  {id: 'source-editions', title: 'Traceable original source editions', keys: ['source-home', 'source-how-it-works', 'source-pricing', 'source-glossary', ...Object.keys(learningPages).filter(key => key.startsWith('review-'))]},
];
learningPages.library = {
  title: 'All the available reading, in one place.', eyebrow: 'Complete local reading catalog',
  intro: 'The free lessons, dated digest archive, full glossary and available supporting pages are local. Member-only material stays unavailable. Current live evidence and market context are separate routes.',
  sections: [
    {id: 'live', title: 'Current public data', body: ['These views request public sources rather than pretending a historical snapshot is current.'], links: [link('Evidence', '?page=evidence'), link('Market context and recent episodes', '?page=market'), link('Return to the story', '?page=story'), link('Setup preview', '?page=setup')]},
    ...catalogGroups.map(group => ({id: group.id, title: group.title, body: [], links: group.keys.map(key => link(learningPages[key].title, '?page=' + key))})),
  ],
};
learningPages['all-pages'] = learningPages.library;

// Route old anchors to the matching current explanation or preserved source,
// rather than leaving a visitor at an absent section.
const migratedAnchorTargets = {
  '?page=pricing#checkout-card': '?page=setup',
  '?page=pricing#crash': '?page=source-pricing#crash',
  '?page=pricing#founding': '?page=pricing#noguru',
  '?page=how-it-works#responsibilities': '?page=how-it-works#control',
  '?page=how-it-works#strategy': '?page=how-it-works#roles',
  '?page=pricing#renewals': '?page=terms#4-subscription-and-payment',
  '?page=pricing#entitlements': '?page=trial#clocks',
  '?page=faq#faq-setup': '?page=faq#which-setup-settings-do-i-use',
  '?page=faq#all-questions': '?page=faq',
  '?page=setup-guide#setup': '?page=setup-guide#a-practical-order-for-getting-ready',
  '?page=setup-guide#next-step': '?page=setup',
  '?page=setup-guide#before-live': '?page=how-it-works#setup',
  '?page=exchanges#eligibility': '?page=exchanges#check-cornix-service-eligibility-first',
  '?page=resources#support': '?page=resources#ask-the-service-that-handles-it',
  '?page=setup-guide#expiry': '?page=setup-guide#noguru-free-access-expiry',
  '?page=how-it-works#subscription-covers': '?page=how-it-works#roles',
  '?page=methodology#record-scope': '?page=evidence',
};
// The risks page, rewritten 15 November 2026 after the engine builder's review: lead with how the bot is
// built, then say each remaining risk plainly and specifically. It replaces the earlier migrated review text.
learningPages.risks = {
  title: 'Built to avoid forced selling. Here is what can still go wrong.',
  eyebrow: 'Risks, said plainly',
  intro: 'The bot buys real coins with your own money, never borrows, and is built to sell a coin only above its average cost. That removes the usual ways traders are forced out at a loss. These are the risks that remain.',
  sections: [
    {id: 'design', title: 'It never sells at a loss.',
      body: ['Nothing is borrowed, so nothing can be force-sold. The bot buys a coin in steps and sells only once the price is above the average of what it paid, so a finished cycle is never a loss. One detail in the record: Cornix allows at most ten buys in one trade, so a longer cycle is split into several Cornix trades. One trade of such a group can show a loss on its own; the group as a whole, which is the cycle, never does.',
        'The risk sits in the trades that are still open. While a coin is below its average cost, it is worth less than you paid for it, and that can last a long time. So only put in money you can leave alone for months, and never money you need for bills.'],
      links: [link('See every finished trade and the open ones', '?page=record')]},
    {id: 'falling-prices', title: 'When prices keep falling.',
      body: ['The bot buys more of a coin as it gets cheaper, up to a fixed limit per coin and a fixed total across all coins. After that it waits. It does not sell in a panic, and there is no stop loss.',
        'Most trades finish within a day. A few take weeks or months, and the record shows those too. The bot trades established, large coins, so a coin failing outright or being removed from an exchange is unlikely. It is not impossible, and a coin that never recovers would be a real loss.',
        'In a broad market fall several coins can be below cost at the same time. When the cash set aside for the bot is used up, buying pauses until a sale frees some.'],
      links: [link('What staged buying does to the average', learn('weighted-average')), link('Cash reserves', learn('reserves'))]},
    {id: 'signals', title: 'The signals, and what NoGuru cannot control.',
      body: ['NoGuru’s signals have been delivered without an outage since the record began on 1 August 2026. If there is ever an extended outage on NoGuru’s side, the lost time is credited to your subscription.',
        'Between a signal and a finished order there are two more services: Cornix and your exchange. NoGuru does not control them or your account settings. An order can arrive late, be rejected or fill only in part, and your own results depend on your settings, your start date and the cash in the account.',
        'It is worth opening Cornix from time to time to check that orders are going through. Three things to look at: your open trades, the cash still free, and any alerts Cornix shows.'],
      links: [link('How the three roles fit together', '?page=how-it-works#roles')]},
    {id: 'exchange-and-key', title: 'Your exchange and your key.',
      body: ['Your money stays at your exchange, in your own name, so the exchange’s security and solvency matter. Use one you trust.',
        'Cornix trades with a key you create. Allow spot trading only and keep withdrawals switched off: the key can then trade but never move money out. Keep the bot’s money in a sub-account of its own, and never paste the key anywhere but Cornix.'],
      links: [link('What an API key is', '?page=glossary#api-key')]},
    {id: 'costs', title: 'What comes off the result.',
      body: ['The record is shown before fees. Three costs come off your own result: your exchange’s trading fee on every buy and every sale, the NoGuru subscription, and the Cornix plan.',
        'The two subscriptions are fixed amounts, so they weigh more on a small account. Below about 500 USDT the bot does not work; at about 2,000 USDT it can fill part of its orders; above 3,000 USDT it can fill most of them. The pricing page shows how much trading money covers the subscription at the record’s pace.'],
      links: [link('Pricing and when it pays for itself', '?page=pricing#payback')]},
    {id: 'stopping', title: 'If you want to stop.',
      body: ['Stop the bot in Cornix. From then on it places no new orders. Stopping does not sell anything: the coins you hold stay in your exchange account, and you decide whether to keep them or sell them.',
        'Billing is separate. NoGuru is renewed by invoice, so to end it you simply don’t pay the next one. A Cornix plan is managed in Cornix.'],
      links: [link('NoGuru’s renewal terms', '?page=terms#4-subscription-and-payment'), link('How to cancel a Cornix plan', 'https://help.cornix.io/en/articles/14220111-how-to-manage-and-cancel-subscription-auto-renewal')]},
    {id: 'the-record', title: 'What the record does and doesn’t show.',
      body: ['The record is every signal NoGuru published, as a Cornix bot following the channel trades it, before fees. Finished trades and open trades are shown separately. It is not any customer’s account, and past results do not promise future ones.'],
      links: [link('The live record', '?page=record'), link('The full risk disclaimer', '?page=disclaimer')]},
  ],
};
// Data requests go to their own address.
for (const section of learningPages.privacy?.sections || []) {
  if (section.id !== 'your-rights') continue;
  const swap = (value) => (typeof value === 'string' ? value.replaceAll('hello@noguru.io', 'privacy@noguru.io') : value);
  section.body = (section.body || []).map(swap);
  section.blocks = (section.blocks || []).map((b) => ({...b, text: swap(b.text), items: b.items?.map(swap)}));
  section.links = (section.links || []).map((l) => ({...l, label: swap(l.label)}));
}

for (const page of Object.values(learningPages)) {
  for (const section of page.sections) {
    section.links = section.links.map(item => ({...item, url: migratedAnchorTargets[item.url] || item.url}));
  }
}
