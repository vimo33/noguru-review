// Editorial preview; supplier review is pending. Temporary macOS Daniel audio.
export const externalLinks = {
  trial: 'https://t.me/NoGuruMembers_bot?start=trial_cornixpage',
  cornix: 'https://dashboard.cornix.io/register',
  setup: '?page=how-it-works',
  pricing: '?page=pricing',
  evidence: '?page=evidence',
  academy: '?page=learn',
  glossary: '?page=glossary',
};

export const costs = {
  noGuruFounding: 49, noGuruStandard: 99, cornixMonthly: 49.90,
  supplierCapitalGuidance: 3000, checkedDate: '2026-11-12',
};

const audioDurations = {
  "meet-01": 12.658,
  "meet-02": 10.197,
  "meet-03": 7.861,
  "choose-01": 9.454,
  "choose-02": 9.706,
  "choose-03": 8.29,
  "cycle-01": 6.783,
  "cycle-02": 7.558,
  "cycle-03": 8.659,
  "cycle-04": 10.731,
  "evidence-01": 9.286,
  "evidence-02": 10.788,
  "evidence-03": 9.848,
  "yours-01": 9.616,
  "yours-02": 9.673,
  "yours-03": 9.603,
  "begin-01": 9.999,
  "begin-02": 10.983,
  "begin-03": 7.965
};

const audioVersions = {
  "meet-01": "30558aa3ce40",
  "meet-02": "fb0433105771",
  "meet-03": "7677bef010f8",
  "choose-01": "a817cf22a7d3",
  "choose-02": "4766db3a380a",
  "choose-03": "d864db0678f3",
  "cycle-01": "673c098fc82b",
  "cycle-02": "4565efbce005",
  "cycle-03": "0c92707d6dd7",
  "cycle-04": "0dfc7391f239",
  "evidence-01": "1e4961d452e8",
  "evidence-02": "d3033a9e5558",
  "evidence-03": "d6a1c0bf38a3",
  "yours-01": "fd0c829c2180",
  "yours-02": "baa74061f38c",
  "yours-03": "406e1222d303",
  "begin-01": "8041a42374c4",
  "begin-02": "f2eaa70b272d",
  "begin-03": "f7e06622fd61"
};

const cue = (id, text, gesture, world, highlight) => ({
  id, text, gesture, world, highlight, audio: `audio/${id}.m4a?v=${audioVersions[id]}`, duration: audioDurations[id],
});

export const chapters = [
  {
    id: 'meet', eyebrow: 'Meet NoGuru', title: 'An automated strategy, kept under review.',
    summary: 'NoGuru is an automated spot-trading bot that selects and reviews coins, plans purchase sizes and staged entries, and sets sale targets. Cornix executes those instructions in your exchange account.',
    cues: [
      cue('meet-01', 'NoGuru is an automated spot-trading bot that selects and reviews coins, plans purchase sizes and staged entries, and sets sale targets. Cornix executes those instructions in your exchange account.', 'greet', 'orbit', 'product'),
      cue('meet-02', 'A completed sale can release capital for another cycle. NoGuru keeps reviewing the coins and the next purchases, so the process can continue without you planning every order.', 'explain', 'orbit', 'product'),
      cue('meet-03', 'Some positions wait while others move. There is a limit to how much capital can be committed. I’ll help you see both the activity and the waiting.', 'acknowledge', 'select', 'product'),
    ],
  },
  {
    id: 'choose', eyebrow: 'Thoughtful choices, kept under review', title: 'Many coins. One maintained strategy.',
    summary: 'NoGuru reviews candidate coins and maintains future purchase sizes and levels. You choose the intended capital.',
    cues: [
      cue('choose-01', 'You choose the capital. NoGuru reviews many candidate coins and selects several for one maintained strategy, so you do not have to choose every trade yourself.', 'select', 'select', 'product'),
      cue('choose-02', 'The review informs future purchase sizes and spacing, with volatility, performance and concentration in mind. The plan is maintained as conditions change.', 'explain', 'select', 'capital'),
      cue('choose-03', 'The cash reserve supports lower entries. It varies as buys and sales happen. When available cash runs low, new buying must wait.', 'acknowledge', 'setup', 'capital'),
    ],
  },
  {
    id: 'cycle', eyebrow: 'An illustration, not a trade', title: 'Let’s follow one coin.',
    summary: 'Lower purchases change this cycle’s average. A target is an aim, not a promise.',
    cues: [
      cue('cycle-01', 'Let’s follow an illustrative cycle. Here is the first purchase: a little capital becomes a holding in one coin.', 'buy', 'buy-one', 'cycles'),
      cue('cycle-02', 'Price reaches a lower buying level. A second purchase lowers this same cycle’s weighted average cost, while committing more capital.', 'buy', 'buy-two', 'cycles'),
      cue('cycle-03', 'The target sits above that average. An eligible exit may trail a rise and seek a sale after a retreat. It is an aim, not a guaranteed outcome.', 'target', 'target', 'exits'),
      cue('cycle-04', 'A completed sale releases proceeds for possible reuse. Other cycles may wait. A separate lower cycle has its own average; the older cycle’s cost stays unchanged.', 'acknowledge', 'proceeds', 'waiting'),
    ],
  },
  {
    id: 'evidence', eyebrow: 'Look at the basis', title: 'Make room for the whole picture.',
    summary: 'Fresh public signal history and separate market context. No customer balances.',
    cues: [
      cue('evidence-01', 'This is the public signal model, before fees, rather than a customer account. Open the record to see its cycles, dates and source for yourself.', 'explain', 'evidence', 'evidence'),
      cue('evidence-02', 'Completed profit tells one part of the story. Whole account value also includes cash and holdings still waiting. This feed shows open exposure, but not a complete account balance.', 'wait', 'wait', 'evidence'),
      cue('evidence-03', 'You can inspect the same figures directly or ask me to explain them. Beside the record, the market panel gives separate context for what is happening around the strategy.', 'explain', 'evidence', 'market'),
    ],
  },
  {
    id: 'yours', eyebrow: 'A familiar companion', title: 'Make the guide feel yours.',
    summary: 'A guide name and a page accent. The robot, strategy and evidence stay the same.',
    cues: [
      cue('yours-01', 'Give your guide a name and choose an accent for this space. Next time you return, pick up the story. A familiar companion, with the same clear evidence underneath.', 'acknowledge', 'personalize', 'privacy'),
      cue('yours-02', 'When something catches your interest, open its explanation here. You can work through a purchase example, understand the costs, then return to where you were.', 'explain', 'personalize', 'product'),
      cue('yours-03', 'Keep your judgment in the loop. Open positions can fall or never recover. There is no strategy stop loss, and pausing new trades does not sell what you already hold.', 'wait', 'personalize', 'risks'),
    ],
  },
  {
    id: 'begin', eyebrow: 'Understand, then decide', title: 'Your next step is yours.',
    summary: 'Review capital, costs, risks and setup. The account remains unconnected.',
    cues: [
      cue('begin-01', 'Your account is still unconnected. We’ll review capital, the separate NoGuru and Cornix subscriptions, and a dedicated exchange setup with withdrawals disabled.', 'select', 'setup', 'setup'),
      cue('begin-02', 'The services have separate trial clocks. Cornix starts with the first created trade, including demo or backtesting. Trying the setup is different from proving future returns.', 'explain', 'setup', 'trial'),
      cue('begin-03', 'Start your free trial when you’re ready. I’ll show the steps, what each service includes, and where you can follow the strategy in action.', 'acknowledge', 'setup', 'trial'),
    ],
  },
];

const link = (label, url) => ({label, url});
export const help = {
  product: {
    title: 'What NoGuru does',
    body: 'NoGuru maintains one spot strategy across several coins: selection and review, purchase sizing and levels, and exit targets. Cornix executes configured instructions in your exchange. Completed sales may free capital for another cycle. Other holdings can keep waiting, so available cash and buying capacity matter. You still choose the capital and monitor what happens.',
    links: [link('How the strategy works', externalLinks.setup), link('Read the short learning topics', externalLinks.academy), link('Signal and Cornix definitions', `${externalLinks.glossary}#signal`)],
  },
  capital: {
    title: 'Intended capital and changing reserves',
    body: 'An amount entered here is a plan, not a deposit or an account balance. The supplier states an operating minimum of 3,000 USDT; public pricing currently omits it, and live enforcement has not been verified. Subscriptions are separate. Cash reserves vary and may run low. Several correlated coins can fall together. More capital does not guarantee higher percentage returns or recovery.',
    links: [link('Cash reserves and sizing', '?page=learn#reserves'), link('Operating capital and costs', '?page=pricing#capital')],
  },
  cycles: {
    title: 'Purchases, cycles and averages',
    body: 'A cycle can contain several purchases. A lower-price purchase reduces the weighted average cost of that same cycle and increases exposure. A separate later cycle has its own average; the older cycle’s average remains unchanged. An aggregate average across all held units of the same coin is a different calculation. The illustration does not represent actual orders, fills or a fixed purchase count.',
    links: [link('Worked weighted-average example', '?page=learn#weighted-average'), link('Separate cycles, separate averages', '?page=learn#separate-cycles')],
  },
  waiting: {
    title: 'Waiting still carries risk',
    body: 'A held position can lose market value and tie up capital indefinitely. A new smaller cycle may start lower only if the rules and available cash allow. It does not reduce the older cycle’s own cost. Stopping new buying does not release money already held. Recovery is not guaranteed.',
    links: [link('What waiting uses', '?page=learn#waiting')],
  },
  exits: {
    title: 'An exit target is an aim',
    body: 'The strategy aims for exits above a cycle’s average cost. The supplier describes trailing an eligible profit: following a rise and seeking a sale after a retreat. Exact live trailing settings are not independently verified. Targets do not guarantee fills or profit. Fees, liquidity and execution matter; public history includes below-cost sales. Re-entry into the same coin is conditional on continued approval, rules and available cash.',
    links: [link('How sales may free capital', '?page=how-it-works#sales'), link('Inspect the signal evidence', externalLinks.evidence)],
  },
  evidence: {
    title: 'Completed profit and whole account value',
    body: 'The public data is a published-signal reconstruction at current buy sizes, before fees, not a funded customer account. The since-start figure uses the delivered monthly gross rate and window length; the server’s exact allocation weighting is not exposed. Completed gains are already part of account value. Unsold losses matter too. This feed lacks current cash, monetary holdings and a complete equity ledger, so it cannot provide a current whole-account reconciliation. The earlier dated historical model is a separate dataset. Fetch time is not generation time.',
    links: [link('Inspect the evidence here', externalLinks.evidence), link('Completed results and current holdings', '?page=learn#completed-and-held')],
  },
  market: {
    title: 'Separate market context',
    body: 'The panel reads NoGuru’s public trend matrix. A positive reading places price above its recent average; a negative reading places it below, measured in typical bar-to-bar movement units, not percentage returns. Its observation time is shown. This is market context, not a strategy fill, prediction or instruction. Data marked stale, missing, malformed or unavailable must not be presented as current.',
    links: [link('Understand the market source', '?page=digest#market')],
  },
  costs: {
    title: 'Capital and costs are separate',
    body: 'Checked 12 November 2026: NoGuru’s public founding subscription is $49/month while available; the standard rate is $99/month. Cornix Advanced is a separate $49.90 monthly subscription, or $32.99/month equivalent billed annually. Plan and exchange fit need confirmation. Monthly subscription totals would be $98.90 or $148.90 before exchange fees and other costs. Supplier-stated operating capital guidance is 3,000 USDT, separate from subscriptions. A historical return rate does not establish fee payback, safety or a suitable allocation.',
    links: [link('Capital, subscriptions and trial clocks', externalLinks.pricing), link('Subscription economics', '?page=learn#subscription-economics')],
  },
  risks: {
    title: 'What you need to be comfortable with',
    body: 'Coins can fall substantially or never recover. There is no strategy stop-loss; targets do not guarantee a sale or profit. Cash can be committed for a long time. Exchange failure, fees, liquidity and execution can change results. Pausing new trades leaves existing holdings and orders needing a separate decision.',
    links: [link('Waiting and committed capital', '?page=learn#waiting'), link('Account value and completed results', '?page=learn#completed-and-held')],
  },
  setup: {
    title: 'Before a real connection',
    body: 'The guide remains unconnected. Review a dedicated exchange subaccount holding only the intended allocation, exchange compatibility, the Cornix plan and spot-trading API permissions with withdrawals disabled. Never paste credentials here. Read the setup steps here before moving to a real service connection.',
    links: [link('Read the setup explanation', `${externalLinks.setup}#setup`), link('API key', `${externalLinks.glossary}#api-key`)],
  },
  trial: {
    title: 'Two separate trials',
    body: 'NoGuru advertises 14 days free with no card; its exact entitlement start and cutoff were not tested. New Cornix users receive a separate 14-day Premium trial with no payment details. Cornix starts its clock at the first created trade, including a manual trade, smart bot, signal, demo or backtesting. These clocks need not start together. A trial checks setup and observed execution, not future returns. Viewing this guide does not activate anything. External links open a new tab. The public NoGuru offer excludes UK residents; broader eligibility has not been assessed.',
    links: [link('Review NoGuru trial and costs', externalLinks.pricing), link('Cornix’s official trial clock', 'https://help.cornix.io/en/articles/5814827-cornix-free-trial')],
  },
  privacy: {
    title: 'Personalise the guide, not the evidence',
    body: 'Your chosen name, page accent and place in the story are saved locally on this device and can be reset. The original robot’s appearance stays unchanged. Return visits resume paused. This pilot does not store financial capital, risk acceptance or account values, take credentials or connect an exchange. A personal guide name does not identify a human adviser or change the strategy’s authority. Public evidence stays the same for everyone. Narration is a temporary local macOS Daniel voice; it is not the planned Grady voice.',
    links: [],
  },
};

help['account-value'] = help.evidence;
