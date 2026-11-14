# NoGuru: questions for the engine's builder on how we describe the engine

14 November 2026

## Summary

An outside review of the new site made some fair points and some claims we cannot back up. Before we change how the site describes the engine, we need answers on five topics:

1. How the sale works, because it is not fixed at 2%.
2. What the cap on buying really is.
3. Whether keeping a reserve to add in a crash is something we can describe.
4. What we may say about how the engine finds its opportunities.
5. How to describe NoGuru in one plain line.

> **Note:** the outside review was done with an adversarial AI, asked to find weaknesses in the site. Its criticisms are useful, but its facts and figures were not checked by a person, and several do not match the public record. That is why this document asks before anything is changed.

Each section says what the public record shows, what we would like to say, and the questions. Short answers are enough. All figures are from the public track record, 1 August to 14 November 2026, 1,048 finished trades, before fees.

## 1. The sale is not fixed at 2%

The site said the bot sells "about 2% above its average". That undersells it and is not accurate. The record shows a spread:

| Result of a finished trade | Share of the 1,048 trades |
| --- | --- |
| Typical trade (the middle one) | +2.2% |
| Average of all trades | +2.6% |
| Made more than 3% | 20% (211 trades) |
| Made more than 6% | 4.5% (47 trades) |
| Made more than 10% | 0.9% (9 trades) |
| Best trade | +27.3% |

The site now says: selling starts about 2% above a coin's average, then the bot follows the price up and sells when the rise runs out. The home page shows the typical trade, the share above 3% and the best trade, read live from the record.

**Questions**

1. Is that description correct? If not, how would you put it in one or two sentences?
2. What is the exact starting point, and how far behind the price does it follow? May we publish either number, or only "about 2%"?
3. Is the follow-the-price part set by NoGuru's signal, or is it a Cornix setting a subscriber could change or get wrong?
4. Do sales get bigger in strongly rising markets? The review claims 6% to 25% in bull markets. The record has 47 trades above 6% in a choppy period. Is there replay data for a bull stretch we could cite?
5. Two trades closed below cost. How does that happen, in one sentence we can publish?

## 2. The cap on buying

The review says the bot is capped at three purchases per coin ("a strict 3-rung cap") and that this is why one bad coin can never drain the account. It gives our own library as the source, but the library does not say that. We understand there is a cap, so we need the real rule.

The record's count of purchases per finished trade does not look like a cap of three:

| Purchases in the trade | Trades | Share |
| --- | --- | --- |
| 1 | 536 | 51% |
| 2 | 223 | 21% |
| 3 | 85 | 8% |
| 4 or more | 204 | 19% |
| Highest | 24 purchases in one trade | |

**Questions**

1. What exactly is capped: purchases per coin, the share of the money one coin can take, the number of coins held at once, or something else?
2. What are the numbers?
3. How do trades with 4 to 24 purchases fit with the cap? Are those several separate ladders on the same coin counted as one trade?
4. What is the most one coin can take of the account? Can one coin ever use up all the cash?
5. What may we publish: the exact numbers, or only "a fixed limit per coin"?
6. The record shows 20 open trades, together 27.7% below cost, and "134.9% allocated in trades". What is that percentage measured against? The review claims 80% to 85% of the money stays free to keep trading; we cannot see that in the record.
7. The review says "13 winning trades offset one stuck position at minus 50%". Is that arithmetic you would stand behind, and with which sizes?

## 3. Keeping a reserve to add in a crash

The idea: a subscriber puts only part of their money into the bot, for example 70%, and keeps the rest aside. When a crash has filled the bot's positions and buying has paused, they add the reserve, so the bot can open new trades at low prices while the older ones wait.

Today the site only says: if cash runs out, buying pauses until a sale frees some up.

**Questions**

1. Does it work technically? If someone adds USDT to the sub-account while positions are open, does the bot use it for new trades?
2. Does adding money change the size of purchases on trades that are already open?
3. Has this been tested or replayed, for example through the October 2025 top? What did it change?
4. If you think it is sound, what split would you suggest, and when should the reserve go in?
5. Are you comfortable with the site describing it?

One caution: telling people when to add money is close to financial advice, and it puts more money at risk at the worst moment. If agreed, the site would describe it as an option some people choose, with that risk stated, and not as a recommendation.

## 4. How the engine finds its opportunities

The review has a fair point here. The site says the bot "watches the market and picks a handful of coins". That sounds like any free bot built into an exchange, and it hides the work the engine does. We would like to say more, but only what is true and what can be made public.

**Questions**

1. What does the engine look at when it chooses a coin and a moment to buy? A plain list is enough.
2. Which of that may we say publicly, and which stays private?
3. How many coins does it watch, and how many does it trade at once?
4. How often are the coins and the settings reviewed, and is that automatic or done by a person?
5. In one sentence: what does NoGuru do that a built-in exchange bot does not?
6. The review wrote that the engine "screens order-book depth, liquidity and volatility". Is that true? We will not publish it unless confirmed.

A first plain wording to correct: "It watches [number] coins around the clock and works out, coin by coin, where to buy, how much, and when to sell. Doing that by hand would take a spreadsheet and no sleep."

## 5. NoGuru in one plain line

The review suggests calling NoGuru an "Automated Cloud Volatility Harvester". We think that is too technical for the people we are talking to, and "cloud" only says where the engine runs. But the idea underneath is true and worth saying: the bot earns from prices moving up and down, not from guessing which way they go.

Three plain ways to say it:

- **A.** "It earns from the ups and downs, not from guessing where prices go."
- **B.** "Prices swing all day. The bot collects a little from each swing."
- **C.** "You don't have to pick the winner. It trades the movement."

**Questions**

1. Is "it earns from movement, not direction" an accurate description of the strategy?
2. Where does it stop being true? For example, when the market only falls for months.
3. Which wording do you prefer, or is there a phrase you use yourself?
4. Who do we speak to first: people new to this, which is the current voice, or experienced investors with 10,000 USDT and more, which is what the review recommends?

## Other things to know

- **Pricing page.** It now leads with NoGuru alone at $49 a month, treats Cornix as where the bot runs today, and shows the pay-back figure again: about $520 of trading money earns the $49 at the record's pace of 9.58% a month on allocated funds. It uses the formula from the old pricing page, rounded up instead of down. Please confirm that the allocated-funds rate is the right one to use.
- **Countries.** The Cornix section lists the 20 countries Cornix's terms exclude.
- **Market background.** The review ties NoGuru to tokenised assets and AI agents paying each other. Its figures come from blog posts, a Binance Square post and a YouTube video, not from the original data. None of it is on the site. If a "why now" section is wanted, it will be rebuilt from original sources.
- **The opening film.** Replacing the scroll-through opening with a proper explainer video on the home screen is under consideration.

## What happens with the answers

The wording is updated in a local version and reviewed, and nothing goes live until that exact version is approved. Nothing in this document changes the live site.

Contact assessment: not applicable. These are internal questions; no outreach to anyone is proposed.
