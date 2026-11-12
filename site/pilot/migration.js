// Public source migration snapshots. No authentication, raw HTML or live-account claims.
export const migratedPages = {
  "academy-arithmetic-of-losses": {
    "title": "The arithmetic of losses",
    "eyebrow": "Trading Academy · Module 1 — Why slow wins · Lesson 1/4 · Lesson 1 of 22 in the curriculum · ~7 min read",
    "intro": "Lose 30% of your account and you need 43% — not 30% — just to get back to even. That asymmetry is not a slogan; it is division. It is also the single most important piece of arithmetic in trading, and every rule in this academy exists because of it.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "+100% the gain required to erase a 50% loss — not the 50% most people guess. The table below runs the same division at six other drawdowns.",
          "Ask a new trader what gain undoes a 30% loss and most will say 30%. It isn't, because after the loss you are working from a smaller account: the road back is longer than the fall. The whole relationship fits in one line:",
          "required gain = drawdown ÷ (1 − drawdown)",
          "Look at the shape, not the numbers. Losses under roughly 20% sit on the flat part: annoying, recoverable, survivable many times over. Past 50%, the curve turns vertical — each extra percent lost adds many percent to the bill. The market does not care that this feels unfair. Division does not negotiate.",
          "Now connect it to leverage. At 20× leverage, a 5% move against you does not put you 5% down — it wipes the position's entire margin. Major cryptocurrencies routinely move several percent in an ordinary day, on no news at all. A 20× position rarely loses to bad analysis; it loses to a Tuesday.",
          "This is why \"slow\" is not a temperament choice on this site — it is the strategy. If you never take the big hit, you never owe the vertical part of the curve. Everything else in this academy — position sizing, portfolio heat, correlation — is machinery for staying on the flat part.",
          "Try the numbers yourself with the free drawdown & recovery calculator : enter any loss, see the bill, and see how long repayment takes at a monthly pace you choose.",
          "Leverage, liquidation, and an ordinary Tuesday →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "+100% the gain required to erase a 50% loss — not the 50% most people guess. The table below runs the same division at six other drawdowns."
          },
          {
            "type": "paragraph",
            "text": "Ask a new trader what gain undoes a 30% loss and most will say 30%. It isn't, because after the loss you are working from a smaller account: the road back is longer than the fall. The whole relationship fits in one line:"
          },
          {
            "type": "paragraph",
            "text": "required gain = drawdown ÷ (1 − drawdown)"
          },
          {
            "type": "table",
            "headers": [
              "You lose…",
              "You need…",
              "What that feels like"
            ],
            "rows": [
              [
                "10%",
                "+11%",
                "an inconvenience"
              ],
              [
                "20%",
                "+25%",
                "a bad stretch you can absorb"
              ],
              [
                "30%",
                "+43%",
                "months of disciplined work"
              ],
              [
                "50%",
                "+100%",
                "you must now double your account"
              ],
              [
                "70%",
                "+233%",
                "most traders never come back from here"
              ],
              [
                "90%",
                "+900%",
                "a 10× — effectively starting over"
              ]
            ]
          },
          {
            "type": "figure",
            "src": "assets/migrated/recovery-curve.png",
            "alt": "Chart of required recovery gain versus drawdown: the curve is shallow below a 20 percent drawdown and near-vertical past 60 percent",
            "caption": "The recovery curve. It is flat where careful traders live and vertical where leveraged gambles end up. Pure arithmetic — no market data, no assumptions about you."
          },
          {
            "type": "paragraph",
            "text": "Look at the shape, not the numbers. Losses under roughly 20% sit on the flat part: annoying, recoverable, survivable many times over. Past 50%, the curve turns vertical — each extra percent lost adds many percent to the bill. The market does not care that this feels unfair. Division does not negotiate."
          },
          {
            "type": "paragraph",
            "text": "Now connect it to leverage. At 20× leverage, a 5% move against you does not put you 5% down — it wipes the position's entire margin. Major cryptocurrencies routinely move several percent in an ordinary day, on no news at all. A 20× position rarely loses to bad analysis; it loses to a Tuesday."
          },
          {
            "type": "paragraph",
            "text": "This is why \"slow\" is not a temperament choice on this site — it is the strategy. If you never take the big hit, you never owe the vertical part of the curve. Everything else in this academy — position sizing, portfolio heat, correlation — is machinery for staying on the flat part."
          },
          {
            "type": "paragraph",
            "text": "Try the numbers yourself with the free drawdown & recovery calculator : enter any loss, see the bill, and see how long repayment takes at a monthly pace you choose."
          },
          {
            "type": "paragraph",
            "text": "Leverage, liquidation, and an ordinary Tuesday →"
          }
        ],
        "links": [
          {
            "label": "drawdown & recovery calculator",
            "url": "?page=academy-recovery-calculator"
          },
          {
            "label": "Leverage, liquidation, and an ordinary Tuesday →",
            "url": "?page=academy-leverage-and-liquidation"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/arithmetic-of-losses.html",
      "capturedAt": "2026-11-12T14:36:55.879555+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-leverage-and-liquidation": {
    "title": "Leverage, liquidation, and an ordinary Tuesday",
    "eyebrow": "Trading Academy · Module 1 — Why slow wins · Lesson 2/4 · Lesson 2 of 22 in the curriculum · ~6 min read",
    "intro": "At 20× leverage, the market does not need a crash to take everything you put up — a 5% move against you, the kind major coins make on a slow news day, is 100% of your margin. The distance to liquidation is one division: roughly 100 ÷ leverage.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "5% an ordinary day's move for a major crypto — and, at 20× leverage, enough to wipe the position's entire margin. No news required.",
          "Two words first. Leverage means trading with borrowed exposure: at 10×, you put up $1,000 of your own money — the margin — and control a $10,000 position (all figures here hypothetical). Gains and losses are computed on that hypothetical $10,000, but your cushion is only the $1,000. Liquidation is the exchange force-closing that position when the loss has eaten the cushion. It is not a warning — the margin is simply gone.",
          "How far does price have to move against you before that happens? Approximately 100 ÷ leverage, in percent:",
          "Simplified: the true distance is slightly shorter because of maintenance margin — the full lesson computes it. The right-hand column is illustrative of commonly observed magnitudes, not a statistic.",
          "Hold the last two rows against the previous lesson's recovery curve: liquidation is a 100% loss of that margin, and 100% losses live on the vertical wall. This is why the signals published on this site use 3× and 5× on isolated margin, and nothing higher — at those levels, only a move that takes weeks can reach the margin, and every published signal carries a stop-loss far inside that distance.",
          "The full lesson computes the true liquidation distance including maintenance margin, works through why \"I'll close it before it gets there\" fails in practice (gaps, cascades, and the fact that you sleep), compares what liquidation does under isolated versus cross margin, explains what leverage is actually for , and ends with an exercise: computing the liquidation distance of a position you were tempted by.",
          "← The arithmetic of losses Expectancy: why win rate isn't the score →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "5% an ordinary day's move for a major crypto — and, at 20× leverage, enough to wipe the position's entire margin. No news required."
          },
          {
            "type": "paragraph",
            "text": "Two words first. Leverage means trading with borrowed exposure: at 10×, you put up $1,000 of your own money — the margin — and control a $10,000 position (all figures here hypothetical). Gains and losses are computed on that hypothetical $10,000, but your cushion is only the $1,000. Liquidation is the exchange force-closing that position when the loss has eaten the cushion. It is not a warning — the margin is simply gone."
          },
          {
            "type": "paragraph",
            "text": "How far does price have to move against you before that happens? Approximately 100 ÷ leverage, in percent:"
          },
          {
            "type": "table",
            "headers": [
              "Leverage",
              "Move that wipes the margin",
              "In crypto terms, roughly…"
            ],
            "rows": [
              [
                "3×",
                "≈ 33%",
                "a genuine bear leg, weeks or months in the making"
              ],
              [
                "5×",
                "≈ 20%",
                "a sharp correction — a bad week or two"
              ],
              [
                "10×",
                "≈ 10%",
                "a strongly red day; several arrive every quarter"
              ],
              [
                "20×",
                "≈ 5%",
                "an ordinary Tuesday — no news required"
              ],
              [
                "50×",
                "≈ 2%",
                "an hour of routine chop"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Simplified: the true distance is slightly shorter because of maintenance margin — the full lesson computes it. The right-hand column is illustrative of commonly observed magnitudes, not a statistic."
          },
          {
            "type": "figure",
            "src": "assets/migrated/liquidation-distance.png",
            "alt": "Bar chart of the adverse price move that wipes a position's margin at 3x, 5x, 10x, 20x and 50x leverage, with a shaded band marking an ordinary day's range for a major cryptocurrency",
            "caption": "The bars are the cushion; the shaded band is what a normal day can do. At 20× and beyond, the bar sits inside the band."
          },
          {
            "type": "paragraph",
            "text": "Hold the last two rows against the previous lesson's recovery curve: liquidation is a 100% loss of that margin, and 100% losses live on the vertical wall. This is why the signals published on this site use 3× and 5× on isolated margin, and nothing higher — at those levels, only a move that takes weeks can reach the margin, and every published signal carries a stop-loss far inside that distance."
          },
          {
            "type": "paragraph",
            "text": "The full lesson computes the true liquidation distance including maintenance margin, works through why \"I'll close it before it gets there\" fails in practice (gaps, cascades, and the fact that you sleep), compares what liquidation does under isolated versus cross margin, explains what leverage is actually for , and ends with an exercise: computing the liquidation distance of a position you were tempted by."
          },
          {
            "type": "paragraph",
            "text": "← The arithmetic of losses Expectancy: why win rate isn't the score →"
          }
        ],
        "links": [
          {
            "label": "← The arithmetic of losses",
            "url": "?page=academy-arithmetic-of-losses"
          },
          {
            "label": "Expectancy: why win rate isn't the score →",
            "url": "?page=academy-expectancy"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/leverage-and-liquidation.html",
      "capturedAt": "2026-11-12T14:36:56.038818+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-expectancy": {
    "title": "Expectancy: why win rate isn't the score",
    "eyebrow": "Trading Academy · Module 1 — Why slow wins · Lesson 3/4 · Lesson 3 of 22 in the curriculum · ~6 min read",
    "intro": "A system that wins seven trades out of ten can lose money. A system that loses six out of ten can be excellent. How often you win is not the score — the score is expectancy: how much you make when right, times how often, minus how much you lose when wrong, times how often.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration.",
          "The source’s statement about track-record R-multiples and headline win percentages is older wording; the current evidence is a before-fee signal model with different fields."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "One unit makes this easy to compute: the R-multiple . R is simply the amount you risked on a trade — the distance from entry to stop-loss, in money. A trade that hits its stop is −1R. A trade that makes twice what it risked is +2R. Measuring in R strips out account size and lets any two trades, or any two systems, be compared honestly.",
          "Now compare two systems — both invented for this page, neither is real:",
          "Both systems are hypothetical, constructed for arithmetic. Expectancy = (share of wins × average win) − (share of losses × average loss), everything in R.",
          "System A is wrong more often than it is right — and produces eight times what B does, because its winners are two and a half times its losers, while B's winners are half the size of its losers. B, meanwhile, delivers the thing that feels like skill: being right seven times out of ten. That feeling is exactly what makes win frequency such an effective sales number, and such a poor measure of a method. It is one factor of two, and often the less important one.",
          "This is also why you will not find a headline win-percentage anywhere on this site: our track record lists every closed trade with its R-multiple and sample counts instead, because that is the honest form of the information.",
          "The full lesson works both systems through per-100-trades arithmetic by hand, shows a hypothetical system that wins seven of ten and still bleeds money, explains why high-frequency-of-winning systems so often hide exactly that shape, and ends with an exercise: computing the expectancy of both systems yourself, then of your own trading — and the reason to distrust that last number.",
          "← Leverage, liquidation, and an ordinary Tuesday Survive first: compounding needs a survivor →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "One unit makes this easy to compute: the R-multiple . R is simply the amount you risked on a trade — the distance from entry to stop-loss, in money. A trade that hits its stop is −1R. A trade that makes twice what it risked is +2R. Measuring in R strips out account size and lets any two trades, or any two systems, be compared honestly."
          },
          {
            "type": "paragraph",
            "text": "Now compare two systems — both invented for this page, neither is real:"
          },
          {
            "type": "table",
            "headers": [
              "",
              "System A (hypothetical)",
              "System B (hypothetical)"
            ],
            "rows": [
              [
                "Wins",
                "4 of every 10 trades",
                "7 of every 10 trades"
              ],
              [
                "Average winner",
                "+2.5R",
                "+0.5R"
              ],
              [
                "Average loser",
                "−1R",
                "−1R"
              ],
              [
                "Expectancy per trade",
                "+0.40R",
                "+0.05R"
              ],
              [
                "Per 100 trades",
                "+40R",
                "+5R"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Both systems are hypothetical, constructed for arithmetic. Expectancy = (share of wins × average win) − (share of losses × average loss), everything in R."
          },
          {
            "type": "figure",
            "src": "assets/migrated/expectancy-comparison.png",
            "alt": "Bar chart comparing expectancy per trade for two hypothetical trading systems: System A, which wins 4 of every 10 trades, at plus 0.40 R per trade, versus System B, which wins 7 of every 10 trades, at plus 0.05 R per trade",
            "caption": "Same table, as a picture. System A wins less often and makes eight times more per trade — the win-rate bar looks worse; the expectancy bar is the score."
          },
          {
            "type": "paragraph",
            "text": "System A is wrong more often than it is right — and produces eight times what B does, because its winners are two and a half times its losers, while B's winners are half the size of its losers. B, meanwhile, delivers the thing that feels like skill: being right seven times out of ten. That feeling is exactly what makes win frequency such an effective sales number, and such a poor measure of a method. It is one factor of two, and often the less important one."
          },
          {
            "type": "paragraph",
            "text": "This is also why you will not find a headline win-percentage anywhere on this site: our track record lists every closed trade with its R-multiple and sample counts instead, because that is the honest form of the information."
          },
          {
            "type": "paragraph",
            "text": "The full lesson works both systems through per-100-trades arithmetic by hand, shows a hypothetical system that wins seven of ten and still bleeds money, explains why high-frequency-of-winning systems so often hide exactly that shape, and ends with an exercise: computing the expectancy of both systems yourself, then of your own trading — and the reason to distrust that last number."
          },
          {
            "type": "paragraph",
            "text": "← Leverage, liquidation, and an ordinary Tuesday Survive first: compounding needs a survivor →"
          }
        ],
        "links": [
          {
            "label": "track record",
            "url": "?page=evidence"
          },
          {
            "label": "← Leverage, liquidation, and an ordinary Tuesday",
            "url": "?page=academy-leverage-and-liquidation"
          },
          {
            "label": "Survive first: compounding needs a survivor →",
            "url": "?page=academy-survive-first"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/expectancy.html",
      "capturedAt": "2026-11-12T14:36:55.896841+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-survive-first": {
    "title": "Survive first: compounding needs a survivor",
    "eyebrow": "Trading Academy · Module 1 — Why slow wins · Lesson 4/4 · Lesson 4 of 22 in the curriculum · ~6 min read",
    "intro": "Compounding is the strongest force available to a trader, and it has one non-negotiable requirement: an account that is still there. Steady-small beats boom-bust not as a temperament or a virtue, but as multiplication.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Compare two hypothetical traders over one year. A compounds a modest +2% every month. B is spectacular: +10% every month for eleven months — then one −60% month, a single visit to the leveraged wipeout that lesson 1.2 priced. Both paths are inventions for this arithmetic; neither is a forecast.",
          "Hypothetical paths, chosen for arithmetic. A: 1.02 12 = 1.268. B: 1.10 11 × 0.40 = 1.141.",
          "Read the bottom two rows together. B's average month is more than twice A's — and B still finishes far behind, because an account does not experience the average of its months. It experiences the product , and multiplication shows no mercy to one bad factor. A single ×0.40 quietly cancels years of brilliance; a single ×0 cancels everything, permanently — there is no sequence of later returns that multiplies zero back into an account. Ruin is not a large loss. It is the end of compounding itself.",
          "Ruin is not a large loss. It is the end of compounding itself.",
          "That is the organising principle of this entire academy, stated once and early: survive first . The recovery curve of lesson 1.1 says deep holes cost years; this lesson says the deepest hole cannot be climbed at all. Everything that follows — sizing, portfolio heat, correlation — is machinery for making sure the multiplication never meets its fatal factor.",
          "The full lesson charts both hypothetical paths month by month, explains the arithmetic-versus-geometric-mean gap in plain words (why volatile paths always pay less than their average suggests), makes \"ruin is an absorbing state\" precise, and shows with streak arithmetic how position sizing buys the number of attempts an edge needs before it can show up.",
          "← Expectancy: why win rate isn't the score Fixed-fractional sizing: the 1-2% idea →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Compare two hypothetical traders over one year. A compounds a modest +2% every month. B is spectacular: +10% every month for eleven months — then one −60% month, a single visit to the leveraged wipeout that lesson 1.2 priced. Both paths are inventions for this arithmetic; neither is a forecast."
          },
          {
            "type": "table",
            "headers": [
              "",
              "Trader A (hypothetical)",
              "Trader B (hypothetical)"
            ],
            "rows": [
              [
                "The twelve months",
                "+2% every month",
                "+10% for eleven months, one −60%"
              ],
              [
                "Average month",
                "+2.0%",
                "+4.2%"
              ],
              [
                "Year-end result",
                "+26.8%",
                "+14.1%"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Hypothetical paths, chosen for arithmetic. A: 1.02 12 = 1.268. B: 1.10 11 × 0.40 = 1.141."
          },
          {
            "type": "paragraph",
            "text": "Read the bottom two rows together. B's average month is more than twice A's — and B still finishes far behind, because an account does not experience the average of its months. It experiences the product , and multiplication shows no mercy to one bad factor. A single ×0.40 quietly cancels years of brilliance; a single ×0 cancels everything, permanently — there is no sequence of later returns that multiplies zero back into an account. Ruin is not a large loss. It is the end of compounding itself."
          },
          {
            "type": "paragraph",
            "text": "Ruin is not a large loss. It is the end of compounding itself."
          },
          {
            "type": "figure",
            "src": "assets/migrated/compounding-vs-recovery.png",
            "alt": "Line chart of two hypothetical indexed equity paths over 36 monthly steps: a steady small-gain path climbing smoothly, and a boom path that rises fast, takes a single 60 percent drop midway, and finishes below the steady path",
            "caption": "Two hypothetical equity paths, indexed to 100 — arithmetic, not a forecast. The boom path spends its first act far ahead. One −60% month later, it spends the rest of the chart repaying the recovery curve while the steady path just keeps multiplying."
          },
          {
            "type": "paragraph",
            "text": "That is the organising principle of this entire academy, stated once and early: survive first . The recovery curve of lesson 1.1 says deep holes cost years; this lesson says the deepest hole cannot be climbed at all. Everything that follows — sizing, portfolio heat, correlation — is machinery for making sure the multiplication never meets its fatal factor."
          },
          {
            "type": "paragraph",
            "text": "The full lesson charts both hypothetical paths month by month, explains the arithmetic-versus-geometric-mean gap in plain words (why volatile paths always pay less than their average suggests), makes \"ruin is an absorbing state\" precise, and shows with streak arithmetic how position sizing buys the number of attempts an edge needs before it can show up."
          },
          {
            "type": "paragraph",
            "text": "← Expectancy: why win rate isn't the score Fixed-fractional sizing: the 1-2% idea →"
          }
        ],
        "links": [
          {
            "label": "lesson 1.2",
            "url": "?page=academy-leverage-and-liquidation"
          },
          {
            "label": "lesson 1.1",
            "url": "?page=academy-arithmetic-of-losses"
          },
          {
            "label": "← Expectancy: why win rate isn't the score",
            "url": "?page=academy-expectancy"
          },
          {
            "label": "Fixed-fractional sizing: the 1-2% idea →",
            "url": "?page=academy-risk-per-trade"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/survive-first.html",
      "capturedAt": "2026-11-12T14:36:56.301368+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-risk-per-trade": {
    "title": "Fixed-fractional sizing: the 1-2% idea",
    "eyebrow": "Trading Academy · Module 2 — Capital & risk management · Lesson 1/4 · Lesson 5 of 22 in the curriculum · ~7 min read",
    "intro": "Accounts are rarely destroyed by bad entries. They are destroyed by good-sized bets on bad entries — and by the fact that nobody decided the size at all. Fixed-fractional sizing is one rule that decides it for you: risk the same small fraction of the account on every trade.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Two definitions first, because they are conflated constantly. Position size is how much you buy. Risk is what you lose if the trade hits its stop-loss. The fixed-fraction rule fixes the second number — say 1% of current equity — and lets the first one follow from it:",
          "position size = (account × risk fraction) ÷ stop distance",
          "A worked hypothetical: a $10,000 account risking 1% has $100 on the line. A coin at $50 with a stop at $46 has an 8% stop distance. Position size = $100 ÷ 8% = $1,250 — 25 coins. If the stop is hit, 25 coins × $4 = $100. Exactly 1%, by construction, on every trade, whatever the coin and however wide the stop.",
          "Why the fraction must be small is streak arithmetic. Ten consecutive losses — a run that ordinary variance eventually deals to careful methods — does this to that same hypothetical account at three risk settings:",
          "Hypothetical streaks, each trade losing exactly the risked fraction; recovery bills from lesson 1.1 's formula.",
          "Same account, same trades, same streak of bad luck — one setting shrugs it off and the others owe the vertical part of the recovery curve. Lesson 1.1 made the same point with a drawdown budget: at 1% risk, a 20% budget survives 22 consecutive losses; at 5%, it is gone inside five.",
          "Same account, same trades, same streak of bad luck — one setting shrugs it off and the others owe the vertical part of the recovery curve.",
          "The full lesson works the sizing formula through three risk levels on the same trade, charts the ten-loss streak, explains why this curriculum's arithmetic keeps pointing back to the 1–2% range rather than 0.1% or 5%, shows why leverage is an implementation detail of a size you already chose — not a way to choose it — and ends with an exercise: sizing one hypothetical trade three ways.",
          "← Survive first: compounding needs a survivor Portfolio heat: your real position is the sum →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Two definitions first, because they are conflated constantly. Position size is how much you buy. Risk is what you lose if the trade hits its stop-loss. The fixed-fraction rule fixes the second number — say 1% of current equity — and lets the first one follow from it:"
          },
          {
            "type": "paragraph",
            "text": "position size = (account × risk fraction) ÷ stop distance"
          },
          {
            "type": "paragraph",
            "text": "A worked hypothetical: a $10,000 account risking 1% has $100 on the line. A coin at $50 with a stop at $46 has an 8% stop distance. Position size = $100 ÷ 8% = $1,250 — 25 coins. If the stop is hit, 25 coins × $4 = $100. Exactly 1%, by construction, on every trade, whatever the coin and however wide the stop."
          },
          {
            "type": "paragraph",
            "text": "Why the fraction must be small is streak arithmetic. Ten consecutive losses — a run that ordinary variance eventually deals to careful methods — does this to that same hypothetical account at three risk settings:"
          },
          {
            "type": "table",
            "headers": [
              "Risk per trade",
              "After 10 straight losses",
              "Gain needed to recover"
            ],
            "rows": [
              [
                "1%",
                "−9.6%",
                "+10.6%"
              ],
              [
                "5%",
                "−40.1%",
                "+67%"
              ],
              [
                "10%",
                "−65.1%",
                "+187%"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Hypothetical streaks, each trade losing exactly the risked fraction; recovery bills from lesson 1.1 's formula."
          },
          {
            "type": "paragraph",
            "text": "Same account, same trades, same streak of bad luck — one setting shrugs it off and the others owe the vertical part of the recovery curve. Lesson 1.1 made the same point with a drawdown budget: at 1% risk, a 20% budget survives 22 consecutive losses; at 5%, it is gone inside five."
          },
          {
            "type": "paragraph",
            "text": "Same account, same trades, same streak of bad luck — one setting shrugs it off and the others owe the vertical part of the recovery curve."
          },
          {
            "type": "figure",
            "src": "assets/migrated/streak-drawdown.png",
            "alt": "Line chart of three hypothetical equity curves, indexed to 100, through ten consecutive full-risk losing trades at 1 percent, 5 percent and 10 percent risk per trade: the 1 percent curve drifts down to about 90, the 5 percent curve falls to about 60, and the 10 percent curve collapses to about 35",
            "caption": "Ten straight full-risk losses, three risk settings, all hypothetical. Trade quality is identical on every line — the only difference is size."
          },
          {
            "type": "paragraph",
            "text": "The full lesson works the sizing formula through three risk levels on the same trade, charts the ten-loss streak, explains why this curriculum's arithmetic keeps pointing back to the 1–2% range rather than 0.1% or 5%, shows why leverage is an implementation detail of a size you already chose — not a way to choose it — and ends with an exercise: sizing one hypothetical trade three ways."
          },
          {
            "type": "paragraph",
            "text": "← Survive first: compounding needs a survivor Portfolio heat: your real position is the sum →"
          }
        ],
        "links": [
          {
            "label": "lesson 1.1",
            "url": "?page=academy-arithmetic-of-losses"
          },
          {
            "label": "← Survive first: compounding needs a survivor",
            "url": "?page=academy-survive-first"
          },
          {
            "label": "Portfolio heat: your real position is the sum →",
            "url": "?page=academy-portfolio-heat"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/risk-per-trade.html",
      "capturedAt": "2026-11-12T14:36:56.205679+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-portfolio-heat": {
    "title": "Portfolio heat: your real position is the sum",
    "eyebrow": "Trading Academy · Module 2 — Capital & risk management · Lesson 2/4 · Lesson 6 of 22 in the curriculum · ~6 min read",
    "intro": "The previous lesson sized one trade. Nobody holds one trade. Portfolio heat is the sum of everything you could lose if every open stop were hit today — and five careful 2% positions add up to a 10% day before correlation has said a word.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "10% what five separately-reasonable 2%-risk positions add up to if every stop hits the same day — half of a 20% drawdown budget, gone in one session.",
          "Heat is the simplest portfolio number there is: for each open position, take the loss its stop-loss would realise; add them up; divide by the account. Per-trade sizing from the previous lesson caps each term in that sum. Nothing so far caps the sum itself:",
          "Hypothetical book; the 20% drawdown budget is the one lesson 1.1 's hypothetical trader chose, and a −10% day sends a +11% recovery bill by that lesson's formula.",
          "The mistake this lesson exists to prevent is thinking in trades when the account thinks in totals. Each position was sized as \"a small bet\"; the book was never sized at all. A trader who would refuse a single 10% position has built one out of five reasonable pieces — and on the day it goes wrong, the account does not care that the 10% arrived in instalments.",
          "The habit that fixes it costs one division: know your heat before adding any position, and give the total its own cap, decided in advance, the same way the per-trade fraction was. When new heat would break the cap, the setup may be excellent — the answer is still no, or something else closes first.",
          "The full lesson works through a hypothetical four-position book line by line, shows how a heat cap follows from the drawdown budget you already chose, explains why heat is a floor on the worst day rather than a ceiling (gaps), covers refusing good setups when the book is full — and ends with an exercise: computing the heat of a sample book yourself.",
          "← Fixed-fractional sizing: the 1-2% idea Five alt longs is one bet →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "10% what five separately-reasonable 2%-risk positions add up to if every stop hits the same day — half of a 20% drawdown budget, gone in one session."
          },
          {
            "type": "paragraph",
            "text": "Heat is the simplest portfolio number there is: for each open position, take the loss its stop-loss would realise; add them up; divide by the account. Per-trade sizing from the previous lesson caps each term in that sum. Nothing so far caps the sum itself:"
          },
          {
            "type": "table",
            "headers": [
              "Open positions (2% risk each)",
              "Portfolio heat",
              "The day every stop hits"
            ],
            "rows": [
              [
                "1",
                "2%",
                "an ordinary losing day"
              ],
              [
                "3",
                "6%",
                "a bad day"
              ],
              [
                "5",
                "10%",
                "half of a 20% drawdown budget, in one day"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Hypothetical book; the 20% drawdown budget is the one lesson 1.1 's hypothetical trader chose, and a −10% day sends a +11% recovery bill by that lesson's formula."
          },
          {
            "type": "paragraph",
            "text": "The mistake this lesson exists to prevent is thinking in trades when the account thinks in totals. Each position was sized as \"a small bet\"; the book was never sized at all. A trader who would refuse a single 10% position has built one out of five reasonable pieces — and on the day it goes wrong, the account does not care that the 10% arrived in instalments."
          },
          {
            "type": "paragraph",
            "text": "The habit that fixes it costs one division: know your heat before adding any position, and give the total its own cap, decided in advance, the same way the per-trade fraction was. When new heat would break the cap, the setup may be excellent — the answer is still no, or something else closes first."
          },
          {
            "type": "paragraph",
            "text": "The full lesson works through a hypothetical four-position book line by line, shows how a heat cap follows from the drawdown budget you already chose, explains why heat is a floor on the worst day rather than a ceiling (gaps), covers refusing good setups when the book is full — and ends with an exercise: computing the heat of a sample book yourself."
          },
          {
            "type": "paragraph",
            "text": "← Fixed-fractional sizing: the 1-2% idea Five alt longs is one bet →"
          }
        ],
        "links": [
          {
            "label": "the previous lesson",
            "url": "?page=academy-risk-per-trade"
          },
          {
            "label": "lesson 1.1",
            "url": "?page=academy-arithmetic-of-losses"
          },
          {
            "label": "← Fixed-fractional sizing: the 1-2% idea",
            "url": "?page=academy-risk-per-trade"
          },
          {
            "label": "Five alt longs is one bet →",
            "url": "?page=academy-correlation-one-bet"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/portfolio-heat.html",
      "capturedAt": "2026-11-12T14:36:56.116393+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-correlation-one-bet": {
    "title": "Five alt longs is one bet",
    "eyebrow": "Trading Academy · Module 2 — Capital & risk management · Lesson 3/4 · Lesson 7 of 22 in the curriculum · ~6 min read",
    "intro": "You bought five different alts, so you're diversified — right? On a red day, crypto disagrees. Five alt longs usually behave like one large bet on \"crypto goes up\", and your real position size is closer to the sum than the average.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration.",
          "The source’s “own momentum basket” reference is not the current public spot offering."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Diversification works when assets move independently: one falls, another doesn't, the portfolio wobbles instead of lurching. Crypto in calm weather looks independent enough — coins have their own news, their own communities, their own charts. That appearance is what the red day takes away.",
          "When Bitcoin drops hard, almost everything drops with it, and usually harder. The technical phrase is that correlations rise toward one in stress — the plain version is that on the day diversification would have paid you, it resigns. Whatever story each alt had on the way up, on the way down they share a single story: leveraged crypto positions being cut.",
          "Hypothetical book for illustration — the risk numbers are the fixed-fraction sizing from the previous lesson .",
          "This is not an argument against holding several coins. It is an argument for honest accounting: size the group like the single bet it is. If your rule is \"never risk more than 2% on one idea\", five correlated alt longs are one idea.",
          "The full lesson works through what actually happens to alt baskets on Bitcoin's worst days, how to group a watchlist into real bets (layer-1s together, memes together, almost everything with BTC), where genuine diversification in crypto does exist — including why our own momentum basket is built long-winners- minus -short-losers precisely so the shared \"crypto up\" bet cancels out — and ends with an exercise: grouping your own watchlist into the bets it truly contains.",
          "← Portfolio heat: your real position is the sum Sizing down: the only free defense →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Diversification works when assets move independently: one falls, another doesn't, the portfolio wobbles instead of lurching. Crypto in calm weather looks independent enough — coins have their own news, their own communities, their own charts. That appearance is what the red day takes away."
          },
          {
            "type": "paragraph",
            "text": "When Bitcoin drops hard, almost everything drops with it, and usually harder. The technical phrase is that correlations rise toward one in stress — the plain version is that on the day diversification would have paid you, it resigns. Whatever story each alt had on the way up, on the way down they share a single story: leveraged crypto positions being cut."
          },
          {
            "type": "table",
            "headers": [
              "What your book says",
              "What your book is"
            ],
            "rows": [
              [
                "5 positions, different coins, 2% risk each",
                "≈ one position risking ~10% on \"crypto up\""
              ],
              [
                "\"diversified across ecosystems\"",
                "diversified across tickers, not across outcomes"
              ],
              [
                "5 independent decisions",
                "1 decision, made 5 times"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Hypothetical book for illustration — the risk numbers are the fixed-fraction sizing from the previous lesson ."
          },
          {
            "type": "paragraph",
            "text": "This is not an argument against holding several coins. It is an argument for honest accounting: size the group like the single bet it is. If your rule is \"never risk more than 2% on one idea\", five correlated alt longs are one idea."
          },
          {
            "type": "paragraph",
            "text": "The full lesson works through what actually happens to alt baskets on Bitcoin's worst days, how to group a watchlist into real bets (layer-1s together, memes together, almost everything with BTC), where genuine diversification in crypto does exist — including why our own momentum basket is built long-winners- minus -short-losers precisely so the shared \"crypto up\" bet cancels out — and ends with an exercise: grouping your own watchlist into the bets it truly contains."
          },
          {
            "type": "paragraph",
            "text": "← Portfolio heat: your real position is the sum Sizing down: the only free defense →"
          }
        ],
        "links": [
          {
            "label": "previous lesson",
            "url": "?page=academy-risk-per-trade"
          },
          {
            "label": "← Portfolio heat: your real position is the sum",
            "url": "?page=academy-portfolio-heat"
          },
          {
            "label": "Sizing down: the only free defense →",
            "url": "?page=academy-when-to-size-down"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/correlation-one-bet.html",
      "capturedAt": "2026-11-12T14:36:55.853251+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-when-to-size-down": {
    "title": "Sizing down: the only free defense",
    "eyebrow": "Trading Academy · Module 2 — Capital & risk management · Lesson 4/4 · Lesson 8 of 22 in the curriculum · ~7 min read",
    "intro": "Every defense in trading has a price — hedges cost carry, stops cost whipsaws, sitting out costs the trades that worked. Cutting position size is the exception: it needs no forecast, no new skill, no product, and it is reversible tomorrow. The whole discipline is knowing, in advance, when it is mandatory.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "The arithmetic case is one line long. Every number in lesson 2.1 scales with the risk fraction, so halving size halves the pace at which any losing stretch digs. The hypothetical 20% drawdown budget from lesson 1.1 that survives 22 consecutive losses at 1% risk survives 44 of them at 0.5%. Sizing down does not predict the streak or end it — it buys time to find out what the streak is, while the account stays off the vertical part of the recovery curve.",
          "What it costs is proportionally smaller results for as long as the reduction is in force — a symmetric, temporary price for protection against the asymmetric, permanent thing. That trade is available at any moment, in any market, at zero fees. Almost nobody takes it, because the moments that demand it are exactly the moments a person wants size most : down money, sure the turn is near, owed a comeback.",
          "Which is why the decision cannot be left to the moment. It has to exist as written if-then rules, drafted while calm:",
          "A shape, not a prescription — the full lesson is about filling in your own numbers before you need them.",
          "The full lesson works through each trigger and the arithmetic behind it, shows why \"revenge sizing\" is the account-killer sequel to the first loss (with the doubling-down numbers), draws the line between sizing down and stopping entirely, and ends with an exercise: writing your own if-then table and putting it where you place orders.",
          "← Five alt longs is one bet Spot, futures, perpetuals: what you're actually buying →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The arithmetic case is one line long. Every number in lesson 2.1 scales with the risk fraction, so halving size halves the pace at which any losing stretch digs. The hypothetical 20% drawdown budget from lesson 1.1 that survives 22 consecutive losses at 1% risk survives 44 of them at 0.5%. Sizing down does not predict the streak or end it — it buys time to find out what the streak is, while the account stays off the vertical part of the recovery curve."
          },
          {
            "type": "paragraph",
            "text": "What it costs is proportionally smaller results for as long as the reduction is in force — a symmetric, temporary price for protection against the asymmetric, permanent thing. That trade is available at any moment, in any market, at zero fees. Almost nobody takes it, because the moments that demand it are exactly the moments a person wants size most : down money, sure the turn is near, owed a comeback."
          },
          {
            "type": "paragraph",
            "text": "Which is why the decision cannot be left to the moment. It has to exist as written if-then rules, drafted while calm:"
          },
          {
            "type": "table",
            "headers": [
              "If…",
              "Then…"
            ],
            "rows": [
              [
                "drawdown from high-water crosses a preset line",
                "halve the risk fraction"
              ],
              [
                "a preset run of consecutive losses arrives",
                "halve it again"
              ],
              [
                "the system is new, changed, or in a market it wasn't built in",
                "start at half size or less"
              ],
              [
                "the urge is to size up to win it back",
                "smallest size, or stop for the day"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "A shape, not a prescription — the full lesson is about filling in your own numbers before you need them."
          },
          {
            "type": "paragraph",
            "text": "The full lesson works through each trigger and the arithmetic behind it, shows why \"revenge sizing\" is the account-killer sequel to the first loss (with the doubling-down numbers), draws the line between sizing down and stopping entirely, and ends with an exercise: writing your own if-then table and putting it where you place orders."
          },
          {
            "type": "paragraph",
            "text": "← Five alt longs is one bet Spot, futures, perpetuals: what you're actually buying →"
          }
        ],
        "links": [
          {
            "label": "lesson 2.1",
            "url": "?page=academy-risk-per-trade"
          },
          {
            "label": "lesson 1.1",
            "url": "?page=academy-arithmetic-of-losses"
          },
          {
            "label": "← Five alt longs is one bet",
            "url": "?page=academy-correlation-one-bet"
          },
          {
            "label": "Spot, futures, perpetuals: what you're actually buying →",
            "url": "?page=academy-spot-futures-perps"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/when-to-size-down.html",
      "capturedAt": "2026-11-12T14:36:56.463278+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-spot-futures-perps": {
    "title": "Spot, futures, perpetuals: what you're actually buying",
    "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 1/6 · Lesson 9 of 22 in the curriculum · ~6 min read",
    "intro": "The same coin trades as three different things: the coin itself, a contract with an expiry date, and a contract that never expires. They show nearly the same price and carry completely different risks — and most crypto trading happens in the third one.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Buy spot and you own the coin. It can sit on the exchange or move to your own wallet; nothing about it expires, nothing can be liquidated, and the worst case is the price going to zero. Buy a future and you own no coin at all — only a contract whose value tracks the price. Traditional futures carry an expiry date: on that day the contract settles, which is the mechanism that forces its price and the real price back together. Crypto's signature instrument, the perpetual (perp), is a future with the expiry deleted — it can be held forever, and a balancing payment called funding does the job the expiry date used to do.",
          "Why does the distinction matter to a beginner? Because every mechanic the rest of this module covers — margin, funding, open interest, liquidation cascades — exists only on the contract side of that table. Spot is slow and survivable by construction: no leverage, no liquidation, mistakes age gently. That is not an accident of taste — it is why our own signals are spot only: they are followable by someone still learning, with the whole failure class of this module removed.",
          "The full lesson goes through what ownership versus exposure actually means, why perpetuals came to dominate crypto volume, what \"USDT-M\" and contract conventions mean when you first open a futures screen, which instrument suits which job — and a three-panel diagram of the tethers holding each price to reality.",
          "← Sizing down: the only free defense Margin: isolated vs cross →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Buy spot and you own the coin. It can sit on the exchange or move to your own wallet; nothing about it expires, nothing can be liquidated, and the worst case is the price going to zero. Buy a future and you own no coin at all — only a contract whose value tracks the price. Traditional futures carry an expiry date: on that day the contract settles, which is the mechanism that forces its price and the real price back together. Crypto's signature instrument, the perpetual (perp), is a future with the expiry deleted — it can be held forever, and a balancing payment called funding does the job the expiry date used to do."
          },
          {
            "type": "table",
            "headers": [
              "",
              "Spot",
              "Dated future",
              "Perpetual"
            ],
            "rows": [
              [
                "You hold",
                "the coin itself",
                "a contract",
                "a contract"
              ],
              [
                "Expiry",
                "none",
                "fixed date",
                "none — ever"
              ],
              [
                "Kept near the real price by",
                "it is the real price",
                "settlement at expiry",
                "funding payments"
              ],
              [
                "Leverage / shorting",
                "no",
                "yes",
                "yes"
              ],
              [
                "Liquidation possible",
                "no",
                "yes",
                "yes"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Why does the distinction matter to a beginner? Because every mechanic the rest of this module covers — margin, funding, open interest, liquidation cascades — exists only on the contract side of that table. Spot is slow and survivable by construction: no leverage, no liquidation, mistakes age gently. That is not an accident of taste — it is why our own signals are spot only: they are followable by someone still learning, with the whole failure class of this module removed."
          },
          {
            "type": "paragraph",
            "text": "The full lesson goes through what ownership versus exposure actually means, why perpetuals came to dominate crypto volume, what \"USDT-M\" and contract conventions mean when you first open a futures screen, which instrument suits which job — and a three-panel diagram of the tethers holding each price to reality."
          },
          {
            "type": "paragraph",
            "text": "← Sizing down: the only free defense Margin: isolated vs cross →"
          }
        ],
        "links": [
          {
            "label": "← Sizing down: the only free defense",
            "url": "?page=academy-when-to-size-down"
          },
          {
            "label": "Margin: isolated vs cross →",
            "url": "?page=academy-margin-isolated-vs-cross"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/spot-futures-perps.html",
      "capturedAt": "2026-11-12T14:36:56.285650+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-margin-isolated-vs-cross": {
    "title": "Margin: isolated vs cross",
    "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 2/6 · Lesson 10 of 22 in the curriculum · ~6 min read",
    "intro": "Before your first leveraged trade, your exchange asks a quiet question with loud consequences: isolated or cross margin? One caps a bad trade's damage at its own stake. The other quietly signs your whole wallet as collateral for it.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Margin is the deposit backing a leveraged position — the cushion losses eat before the exchange force-closes you ( lesson 1.2 ). The margin mode decides how big that cushion is allowed to get. Under isolated margin, each position has its own walled-off collateral: when the loss reaches that wall, the position is liquidated and the damage stops there. Under cross margin, every position draws on the entire futures wallet: a losing trade keeps pulling in your remaining balance — including the margin behind your other, healthy positions — and is only liquidated when there is nothing left to pull.",
          "Cross feels efficient — positions \"help each other out\" and liquidations are rarer. That is exactly the trap: it converts many small, survivable failures into one rare, total one. The account that dies from a single trade is almost always a cross-margin account.",
          "A fact about how this site's own signals are produced, stated as fact rather than advice: our system uses isolated margin on every position, without exception — cross has never been on its table. A single trade can cost its own margin; it can never consume the account.",
          "The full lesson walks one losing trade through both modes with a worked hypothetical — same entry, same crash, a 4× difference in what it costs — covers why cross feels safer right up until it isn't, what a margin call means in each mode, and ends with an exercise tracing a trade of your own through both sets of rules.",
          "← Spot, futures, perpetuals: what you're actually buying Funding: the price of a crowded trade →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Margin is the deposit backing a leveraged position — the cushion losses eat before the exchange force-closes you ( lesson 1.2 ). The margin mode decides how big that cushion is allowed to get. Under isolated margin, each position has its own walled-off collateral: when the loss reaches that wall, the position is liquidated and the damage stops there. Under cross margin, every position draws on the entire futures wallet: a losing trade keeps pulling in your remaining balance — including the margin behind your other, healthy positions — and is only liquidated when there is nothing left to pull."
          },
          {
            "type": "table",
            "headers": [
              "",
              "Isolated",
              "Cross"
            ],
            "rows": [
              [
                "Collateral behind one position",
                "its own margin only",
                "the whole wallet"
              ],
              [
                "Liquidation arrives",
                "early, per position",
                "late — after the wallet is drained"
              ],
              [
                "Worst case of ONE bad trade",
                "that trade's margin",
                "everything"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Cross feels efficient — positions \"help each other out\" and liquidations are rarer. That is exactly the trap: it converts many small, survivable failures into one rare, total one. The account that dies from a single trade is almost always a cross-margin account."
          },
          {
            "type": "paragraph",
            "text": "A fact about how this site's own signals are produced, stated as fact rather than advice: our system uses isolated margin on every position, without exception — cross has never been on its table. A single trade can cost its own margin; it can never consume the account."
          },
          {
            "type": "paragraph",
            "text": "The full lesson walks one losing trade through both modes with a worked hypothetical — same entry, same crash, a 4× difference in what it costs — covers why cross feels safer right up until it isn't, what a margin call means in each mode, and ends with an exercise tracing a trade of your own through both sets of rules."
          },
          {
            "type": "paragraph",
            "text": "← Spot, futures, perpetuals: what you're actually buying Funding: the price of a crowded trade →"
          }
        ],
        "links": [
          {
            "label": "lesson 1.2",
            "url": "?page=academy-leverage-and-liquidation"
          },
          {
            "label": "← Spot, futures, perpetuals: what you're actually buying",
            "url": "?page=academy-spot-futures-perps"
          },
          {
            "label": "Funding: the price of a crowded trade →",
            "url": "?page=academy-funding-rates"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/margin-isolated-vs-cross.html",
      "capturedAt": "2026-11-12T14:36:56.115082+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-funding-rates": {
    "title": "Funding: the price of a crowded trade",
    "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 3/6 · Lesson 11 of 22 in the curriculum · ~6 min read",
    "intro": "Every 8 hours, one side of the perpetual-futures market pays the other to stay in the trade. That small payment — the funding rate — is the closest thing crypto has to an honest, real-money opinion poll, and you can read it for free.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "A perpetual future is a bet on a coin's price that never expires. With no expiry date forcing the bet and the real price back together, exchanges use a balancing payment instead: when the perp trades above the real (spot) price, people holding longs pay people holding shorts; when it trades below, shorts pay longs. The payment repeats every 8 hours and its size — usually a few hundredths of a percent — is the funding rate.",
          "Why should you care about a number that small? Because of what it reveals. Funding is positive when longs outnumber shorts badly enough that they will pay to keep the position. The more extreme the rate, the more crowded — and the more expensive — that side of the boat has become.",
          "One honest caveat before the folklore starts: positive funding is normal in rising markets, sometimes for months. Funding is not a sell signal by itself — it is a crowding gauge, most interesting at its extremes, and even extremes resolve in more than one way.",
          "You can watch this live right now: the free dashboard carries a funding board showing the most extreme rates among roughly 143 perpetual markets in our own database — the exact raw material one of our strategies trades against.",
          "The full lesson turns the rate into intuition: how to annualise a funding rate so its cost stops looking small, what persistent extremes have historically accompanied (and the failure modes of trading them naively), how our Funding channel uses positioning extremes as raw material, and an exercise reading three real rows off the live board.",
          "← Margin: isolated vs cross Open interest: reading who's in the pool →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A perpetual future is a bet on a coin's price that never expires. With no expiry date forcing the bet and the real price back together, exchanges use a balancing payment instead: when the perp trades above the real (spot) price, people holding longs pay people holding shorts; when it trades below, shorts pay longs. The payment repeats every 8 hours and its size — usually a few hundredths of a percent — is the funding rate."
          },
          {
            "type": "paragraph",
            "text": "Why should you care about a number that small? Because of what it reveals. Funding is positive when longs outnumber shorts badly enough that they will pay to keep the position. The more extreme the rate, the more crowded — and the more expensive — that side of the boat has become."
          },
          {
            "type": "table",
            "headers": [
              "Reading",
              "Mechanically means",
              "Crowding read"
            ],
            "rows": [
              [
                "Funding ≈ 0",
                "perp glued to spot",
                "no strong lean either way"
              ],
              [
                "Persistently positive",
                "longs paying shorts, 3× a day",
                "the crowd is long and paying rent for it"
              ],
              [
                "Sharply negative",
                "shorts paying longs",
                "the crowd is short — often after a scary drop"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "One honest caveat before the folklore starts: positive funding is normal in rising markets, sometimes for months. Funding is not a sell signal by itself — it is a crowding gauge, most interesting at its extremes, and even extremes resolve in more than one way."
          },
          {
            "type": "paragraph",
            "text": "You can watch this live right now: the free dashboard carries a funding board showing the most extreme rates among roughly 143 perpetual markets in our own database — the exact raw material one of our strategies trades against."
          },
          {
            "type": "paragraph",
            "text": "The full lesson turns the rate into intuition: how to annualise a funding rate so its cost stops looking small, what persistent extremes have historically accompanied (and the failure modes of trading them naively), how our Funding channel uses positioning extremes as raw material, and an exercise reading three real rows off the live board."
          },
          {
            "type": "paragraph",
            "text": "← Margin: isolated vs cross Open interest: reading who's in the pool →"
          }
        ],
        "links": [
          {
            "label": "free dashboard",
            "url": "?page=market"
          },
          {
            "label": "← Margin: isolated vs cross",
            "url": "?page=academy-margin-isolated-vs-cross"
          },
          {
            "label": "Open interest: reading who's in the pool →",
            "url": "?page=academy-open-interest"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/funding-rates.html",
      "capturedAt": "2026-11-12T14:36:55.902215+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-open-interest": {
    "title": "Open interest: reading who's in the pool",
    "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 4/6 · Lesson 12 of 22 in the curriculum · ~6 min read",
    "intro": "Price tells you what happened. Open interest tells you who did it — new money arriving, or old positions leaving. The same green candle can mean either, and they age very differently.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Open interest (OI) is the total number of futures contracts currently open. Every contract has a long on one side and a short on the other, so OI counts live pairs of opposing bets. When a new buyer meets a new seller, OI rises; when an existing long and an existing short both close, OI falls. Rising OI means new positions are being opened; falling OI means positions are closing. That is the whole definition — the value comes from reading it next to price.",
          "Why it matters: a rally powered by longs opening is new conviction; the same rally on falling OI is shorts covering — forced buying that stops when the last short is out. A drop with shorts piling in is pressure; a drop on falling OI is exhaustion, old longs leaving rather than anyone new attacking. Same candles, different fuel, different tendencies afterwards — tendencies, not certainties.",
          "You can practise immediately: the free dashboard 's OI-flow table runs exactly this quadrant logic live on BTC, ETH and SOL, printing the price and OI changes and the plain-word verdict — longs opening, shorts opening, longs closing, or short covering — over 15-minute and 1-hour windows.",
          "The full lesson teaches the quadrant slowly with a worked walk through each corner, explains how OI differs from volume (a transfer between traders moves volume but not OI), covers the divergences worth noticing and the honest limits of all of it, and ends with an exercise classifying three live dashboard rows before peeking at the label.",
          "← Funding: the price of a crowded trade Liquidation cascades: how crypto really moves →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Open interest (OI) is the total number of futures contracts currently open. Every contract has a long on one side and a short on the other, so OI counts live pairs of opposing bets. When a new buyer meets a new seller, OI rises; when an existing long and an existing short both close, OI falls. Rising OI means new positions are being opened; falling OI means positions are closing. That is the whole definition — the value comes from reading it next to price."
          },
          {
            "type": "table",
            "headers": [
              "Price",
              "OI rising",
              "OI falling"
            ],
            "rows": [
              [
                "Up",
                "Longs opening — new money buying",
                "Short covering — shorts buying their way out"
              ],
              [
                "Down",
                "Shorts opening — new money selling",
                "Longs closing — longs giving up"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Why it matters: a rally powered by longs opening is new conviction; the same rally on falling OI is shorts covering — forced buying that stops when the last short is out. A drop with shorts piling in is pressure; a drop on falling OI is exhaustion, old longs leaving rather than anyone new attacking. Same candles, different fuel, different tendencies afterwards — tendencies, not certainties."
          },
          {
            "type": "paragraph",
            "text": "You can practise immediately: the free dashboard 's OI-flow table runs exactly this quadrant logic live on BTC, ETH and SOL, printing the price and OI changes and the plain-word verdict — longs opening, shorts opening, longs closing, or short covering — over 15-minute and 1-hour windows."
          },
          {
            "type": "paragraph",
            "text": "The full lesson teaches the quadrant slowly with a worked walk through each corner, explains how OI differs from volume (a transfer between traders moves volume but not OI), covers the divergences worth noticing and the honest limits of all of it, and ends with an exercise classifying three live dashboard rows before peeking at the label."
          },
          {
            "type": "paragraph",
            "text": "← Funding: the price of a crowded trade Liquidation cascades: how crypto really moves →"
          }
        ],
        "links": [
          {
            "label": "free dashboard",
            "url": "?page=market"
          },
          {
            "label": "← Funding: the price of a crowded trade",
            "url": "?page=academy-funding-rates"
          },
          {
            "label": "Liquidation cascades: how crypto really moves →",
            "url": "?page=academy-liquidation-cascades"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/open-interest.html",
      "capturedAt": "2026-11-12T14:36:56.092323+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-liquidation-cascades": {
    "title": "Liquidation cascades: how crypto really moves",
    "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 5/6 · Lesson 13 of 22 in the curriculum · ~6 min read",
    "intro": "Crypto's most violent moves are not caused by news. They are caused by leverage: forced sellers creating forced sellers, in a chain reaction called a liquidation cascade — mechanical, not informational.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Recall from lesson 1.2 that a leveraged position is force-closed when its loss eats its margin, and that the distance to that point is roughly 100 ÷ leverage. Now put many such positions on the same coin at once. The most-leveraged longs sit closest to the current price. An ordinary dip reaches them first — and here is the mechanism: a liquidation is not a warning, it is a market sell order , placed by the exchange, at whatever price is available. That forced selling pushes price lower, which reaches the next tier of longs, whose forced selling pushes lower still.",
          "Cascades overshoot because the selling is forced, not chosen: nobody in the chain is weighing value, and order books are at their thinnest exactly when the selling is heaviest. The same physics runs upward against shorts — a short squeeze is a cascade with the sign flipped.",
          "The free dashboard watches both ends of this live: the liquidations table shows how many dollars of longs and shorts were force-closed each day, and the flush-state tracker classifies, from our own study of past flushes, how far a crash has climbed back and whether the low is likely in.",
          "The full lesson walks the anatomy step by step with a diagram, shows why liquidation clusters form at obvious chart levels, explains what the flush-state odds actually measure, and is honest about the limit: you cannot reliably front-run a cascade. The usable lesson is defensive — how not to be the fuel.",
          "← Open interest: reading who's in the pool Weekend drift: what happens when the market reopens →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Recall from lesson 1.2 that a leveraged position is force-closed when its loss eats its margin, and that the distance to that point is roughly 100 ÷ leverage. Now put many such positions on the same coin at once. The most-leveraged longs sit closest to the current price. An ordinary dip reaches them first — and here is the mechanism: a liquidation is not a warning, it is a market sell order , placed by the exchange, at whatever price is available. That forced selling pushes price lower, which reaches the next tier of longs, whose forced selling pushes lower still."
          },
          {
            "type": "table",
            "headers": [
              "Stage",
              "What happens"
            ],
            "rows": [
              [
                "Trigger",
                "an ordinary dip reaches the most-leveraged longs"
              ],
              [
                "Chain",
                "their forced selling triggers the next tier, and the next"
              ],
              [
                "Overshoot",
                "forced sellers can't wait for a fair price — they sell at any price"
              ],
              [
                "Aftermath",
                "forced sellers exhausted; sharp snapbacks are common — a tendency, not a rule"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Cascades overshoot because the selling is forced, not chosen: nobody in the chain is weighing value, and order books are at their thinnest exactly when the selling is heaviest. The same physics runs upward against shorts — a short squeeze is a cascade with the sign flipped."
          },
          {
            "type": "paragraph",
            "text": "The free dashboard watches both ends of this live: the liquidations table shows how many dollars of longs and shorts were force-closed each day, and the flush-state tracker classifies, from our own study of past flushes, how far a crash has climbed back and whether the low is likely in."
          },
          {
            "type": "paragraph",
            "text": "The full lesson walks the anatomy step by step with a diagram, shows why liquidation clusters form at obvious chart levels, explains what the flush-state odds actually measure, and is honest about the limit: you cannot reliably front-run a cascade. The usable lesson is defensive — how not to be the fuel."
          },
          {
            "type": "paragraph",
            "text": "← Open interest: reading who's in the pool Weekend drift: what happens when the market reopens →"
          }
        ],
        "links": [
          {
            "label": "lesson 1.2",
            "url": "?page=academy-leverage-and-liquidation"
          },
          {
            "label": "free dashboard",
            "url": "?page=market"
          },
          {
            "label": "← Open interest: reading who's in the pool",
            "url": "?page=academy-open-interest"
          },
          {
            "label": "Weekend drift: what happens when the market reopens →",
            "url": "?page=academy-weekend-drift"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/liquidation-cascades.html",
      "capturedAt": "2026-11-12T14:36:56.049767+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-weekend-drift": {
    "title": "Weekend drift: what happens when the market reopens",
    "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 6/6 · Lesson 14 of 22 in the curriculum · ~12 min read",
    "intro": "Crypto never closes, but the people trading it mostly do. Weekend books are thin, weekend moves are small, and most of them come back. That last part gets sold as an edge. It isn't — and seeing why is worth more than the fact itself.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Through Saturday and Sunday the order books thin out. Fewer participants, smaller size resting at each price, and the same order pushes further than it would on a Wednesday. The result is not chaos — it is the opposite. Measured over our own hourly price history for BTC, ETH and SOL since January 2024, the typical weekend move is less than half the size of an ordinary two-day move during the week.",
          "There used to be a second thing worth watching. CME — a regulated US futures exchange — closed over the weekend while crypto kept trading, so Monday reopened at whatever price spot had wandered to. The difference was the famous \"CME gap\". That mechanism ended on 29 May 2026, when CME moved to near-continuous crypto trading. No closure, no gap. Any weekend gap you see quoted now formed before that date.",
          "Here is the trap. Weekend moves do return to their starting price more often than weekday moves do — 65% within two days against 45%. That looks decisive until you ask the question that should follow every statistic like it: compared to what? Smaller moves come back more often for reasons that have nothing to do with the calendar; there is simply less distance to travel. Match weekend moves against weekday moves of the same size and almost all of that gap disappears. What little is left then depends on an arbitrary choice about how you pick the comparison windows — change it and the leftover swings from mildly positive to mildly negative.",
          "The full lesson works through the whole comparison: how the measurement is built, why \"it filled eventually\" is very nearly always true given enough time, what the reopen actually looks like hour by hour, how we tested our own answer and watched it fall apart, and what happened when we tried trading this directly. It closes with the transferable part — a short method for taking any claim of this shape and finding out what it is really telling you.",
          "← Liquidation cascades: how crypto really moves Timeframes: one market, many stories →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Through Saturday and Sunday the order books thin out. Fewer participants, smaller size resting at each price, and the same order pushes further than it would on a Wednesday. The result is not chaos — it is the opposite. Measured over our own hourly price history for BTC, ETH and SOL since January 2024, the typical weekend move is less than half the size of an ordinary two-day move during the week."
          },
          {
            "type": "table",
            "headers": [
              "Coin",
              "Typical weekend move",
              "Typical weekday 49h move"
            ],
            "rows": [
              [
                "BTC",
                "0.88%",
                "2.45%"
              ],
              [
                "ETH",
                "1.37%",
                "3.19%"
              ],
              [
                "SOL",
                "2.34%",
                "3.95%"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "There used to be a second thing worth watching. CME — a regulated US futures exchange — closed over the weekend while crypto kept trading, so Monday reopened at whatever price spot had wandered to. The difference was the famous \"CME gap\". That mechanism ended on 29 May 2026, when CME moved to near-continuous crypto trading. No closure, no gap. Any weekend gap you see quoted now formed before that date."
          },
          {
            "type": "figure",
            "src": "assets/migrated/weekend-drift.png",
            "alt": "Dot chart with five rows, one per method of sampling weekday comparison windows: every 49, 73, 98, 121 and 168 hours. Each row plots two points joined by a line — the raw weekend advantage in revert rate within 48 hours, and the same figure after matching on move size. The raw values cluster between plus 13.9 and plus 20.1 percentage points, all well to the right of a marked zero line. The matched values scatter across zero, from minus 1.5 to plus 7.8 percentage points.",
            "caption": "The right-hand points are the claim as usually told — large, and stable however you sample. The left-hand points are the same comparison after matching on move size. They land anywhere from −1.5 to +7.8 depending on a choice with no right answer, which is what a result that isn't really there looks like."
          },
          {
            "type": "paragraph",
            "text": "Here is the trap. Weekend moves do return to their starting price more often than weekday moves do — 65% within two days against 45%. That looks decisive until you ask the question that should follow every statistic like it: compared to what? Smaller moves come back more often for reasons that have nothing to do with the calendar; there is simply less distance to travel. Match weekend moves against weekday moves of the same size and almost all of that gap disappears. What little is left then depends on an arbitrary choice about how you pick the comparison windows — change it and the leftover swings from mildly positive to mildly negative."
          },
          {
            "type": "paragraph",
            "text": "The full lesson works through the whole comparison: how the measurement is built, why \"it filled eventually\" is very nearly always true given enough time, what the reopen actually looks like hour by hour, how we tested our own answer and watched it fall apart, and what happened when we tried trading this directly. It closes with the transferable part — a short method for taking any claim of this shape and finding out what it is really telling you."
          },
          {
            "type": "paragraph",
            "text": "← Liquidation cascades: how crypto really moves Timeframes: one market, many stories →"
          }
        ],
        "links": [
          {
            "label": "← Liquidation cascades: how crypto really moves",
            "url": "?page=academy-liquidation-cascades"
          },
          {
            "label": "Timeframes: one market, many stories →",
            "url": "?page=academy-timeframes"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/weekend-drift.html",
      "capturedAt": "2026-11-12T14:36:56.345469+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-timeframes": {
    "title": "Timeframes: one market, many stories",
    "eyebrow": "Trading Academy · Module 4 — Reading charts honestly · Lesson 1/4 · Lesson 15 of 22 in the curriculum · ~6 min read",
    "intro": "Pull up the same coin at the same moment: the 1-hour chart shows a downtrend, the weekly shows an uptrend. Neither chart is lying. Every timeframe tells a true story about a different question — and most chart confusion is two questions being answered at once.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "A candle is not the market; it is a summary. One weekly bar compresses about 672 fifteen-minute bars — and every trade inside them — into four numbers: open, high, low, close. Zooming in decompresses the summary; zooming out re-compresses it. The market is the same either way. What changes is the question the chart is answering, and how long the answer stays useful.",
          "Two consequences follow. First: conflicting signals across timeframes are the normal state of a market, not a data error. A pullback inside an uptrend is a short-term downtrend — the disagreement isn't a contradiction to resolve, it's the structure itself. Second: more zoom is not more insight. Zooming in multiplies detail about the past, not knowledge about the future; mostly it multiplies the number of \"signals\" available to a trader looking for one.",
          "The practical defense is boring: pick a home timeframe — the one your patience, your schedule and your stop distances actually live on — and read the others as context, not as overrides. The expensive failure mode is switching timeframes mid-trade , and it almost always happens in one direction: zooming out to find a chart on which a losing position still looks fine.",
          "The full lesson walks one synthetic move through all four timeframes at once — four true, mutually contradictory stories about the same price — shows why a signal ages at the speed of the timeframe that produced it, dissects the mid-trade switch trap, explains how our own strategies have their timeframe fixed in code before any trade, and ends with an exercise in writing all four stories yourself.",
          "← Weekend drift: what happens when the market reopens Trend or range: the first question →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A candle is not the market; it is a summary. One weekly bar compresses about 672 fifteen-minute bars — and every trade inside them — into four numbers: open, high, low, close. Zooming in decompresses the summary; zooming out re-compresses it. The market is the same either way. What changes is the question the chart is answering, and how long the answer stays useful."
          },
          {
            "type": "table",
            "headers": [
              "Timeframe",
              "It is a statement about…",
              "The statement goes stale in…"
            ],
            "rows": [
              [
                "15m – 1h",
                "what traders are doing right now",
                "hours"
              ],
              [
                "4h",
                "this week's battle",
                "days"
              ],
              [
                "1d",
                "the swing- and position-trade picture",
                "weeks"
              ],
              [
                "1w",
                "which part of the cycle you are in",
                "months"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Two consequences follow. First: conflicting signals across timeframes are the normal state of a market, not a data error. A pullback inside an uptrend is a short-term downtrend — the disagreement isn't a contradiction to resolve, it's the structure itself. Second: more zoom is not more insight. Zooming in multiplies detail about the past, not knowledge about the future; mostly it multiplies the number of \"signals\" available to a trader looking for one."
          },
          {
            "type": "paragraph",
            "text": "The practical defense is boring: pick a home timeframe — the one your patience, your schedule and your stop distances actually live on — and read the others as context, not as overrides. The expensive failure mode is switching timeframes mid-trade , and it almost always happens in one direction: zooming out to find a chart on which a losing position still looks fine."
          },
          {
            "type": "paragraph",
            "text": "The full lesson walks one synthetic move through all four timeframes at once — four true, mutually contradictory stories about the same price — shows why a signal ages at the speed of the timeframe that produced it, dissects the mid-trade switch trap, explains how our own strategies have their timeframe fixed in code before any trade, and ends with an exercise in writing all four stories yourself."
          },
          {
            "type": "paragraph",
            "text": "← Weekend drift: what happens when the market reopens Trend or range: the first question →"
          }
        ],
        "links": [
          {
            "label": "← Weekend drift: what happens when the market reopens",
            "url": "?page=academy-weekend-drift"
          },
          {
            "label": "Trend or range: the first question →",
            "url": "?page=academy-trend-vs-range"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/timeframes.html",
      "capturedAt": "2026-11-12T14:36:56.305264+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-trend-vs-range": {
    "title": "Trend or range: the first question",
    "eyebrow": "Trading Academy · Module 4 — Reading charts honestly · Lesson 2/4 · Lesson 16 of 22 in the curriculum · ~6 min read",
    "intro": "Every strategy is secretly a bet on market character. Trend tools need price to keep going; range tools need it to come back. Running one in the other's market is the most common systematic way to lose — same tool, same discipline, wrong tape.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Markets spend their time in two broad regimes. In a trend , price moves directionally and stays away from its recent average — pullbacks are shallow and the extremes keep extending. In a range , price oscillates around an anchor — every push toward an edge tends to stall and rotate back. The same setup means opposite things in each. A break above recent highs in a trending market is often continuation — the entry trend-followers wait for. The identical break in a ranging market is usually the top of the box: the worst price anyone paid that week.",
          "So before any setup, ask the first question: which market is this? Not \"is this pattern bullish\" — patterns don't have meanings on their own; they have meanings inside a regime . The free dashboard 's trend matrix scores this live for major coins: for each coin and timeframe it shows how far price sits from its recent average, measured in units of that coin's typical bar-to-bar movement (ATR). Rows that light up one colour across timeframes are trending; rows of small, mixed numbers are chop.",
          "The full lesson gives the classification in plain words — the same logic the matrix computes — walks through why mean reversion dies in trends and breakouts die in ranges rather than just asserting it, explains why our own portfolio holds separate strategies for separate regimes instead of one that claims both, and then makes the honest admission most chart courses skip: regime is only obvious in hindsight, and what that means for how much weight this skill can actually carry.",
          "← Timeframes: one market, many stories Support and resistance are zones, not lines →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Markets spend their time in two broad regimes. In a trend , price moves directionally and stays away from its recent average — pullbacks are shallow and the extremes keep extending. In a range , price oscillates around an anchor — every push toward an edge tends to stall and rotate back. The same setup means opposite things in each. A break above recent highs in a trending market is often continuation — the entry trend-followers wait for. The identical break in a ranging market is usually the top of the box: the worst price anyone paid that week."
          },
          {
            "type": "table",
            "headers": [
              "Tool",
              "Needs a market that…",
              "Fails structurally when…"
            ],
            "rows": [
              [
                "Mean reversion — fading strength, buying dips",
                "snaps back to its average",
                "the market trends: the \"extreme\" keeps extending, and the dip keeps dipping"
              ],
              [
                "Breakout / trend-following — buying strength",
                "keeps going once it moves",
                "the market ranges: every break stalls at the edge and rotates back"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "So before any setup, ask the first question: which market is this? Not \"is this pattern bullish\" — patterns don't have meanings on their own; they have meanings inside a regime . The free dashboard 's trend matrix scores this live for major coins: for each coin and timeframe it shows how far price sits from its recent average, measured in units of that coin's typical bar-to-bar movement (ATR). Rows that light up one colour across timeframes are trending; rows of small, mixed numbers are chop."
          },
          {
            "type": "paragraph",
            "text": "The full lesson gives the classification in plain words — the same logic the matrix computes — walks through why mean reversion dies in trends and breakouts die in ranges rather than just asserting it, explains why our own portfolio holds separate strategies for separate regimes instead of one that claims both, and then makes the honest admission most chart courses skip: regime is only obvious in hindsight, and what that means for how much weight this skill can actually carry."
          },
          {
            "type": "paragraph",
            "text": "← Timeframes: one market, many stories Support and resistance are zones, not lines →"
          }
        ],
        "links": [
          {
            "label": "free dashboard",
            "url": "?page=market"
          },
          {
            "label": "← Timeframes: one market, many stories",
            "url": "?page=academy-timeframes"
          },
          {
            "label": "Support and resistance are zones, not lines →",
            "url": "?page=academy-zones-not-lines"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/trend-vs-range.html",
      "capturedAt": "2026-11-12T14:36:56.336838+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-zones-not-lines": {
    "title": "Support and resistance are zones, not lines",
    "eyebrow": "Trading Academy · Module 4 — Reading charts honestly · Lesson 3/4 · Lesson 17 of 22 in the curriculum · ~7 min read",
    "intro": "Draw a line under a low, watch price pierce it by half a percent, stop you out, and reverse. The lesson is not that support \"failed\". The lesson is that support was never a line — it is an area where many people's decisions cluster.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Levels exist for an unglamorous reason: memory and clustering. A prior swing low is where buyers last won a fight — and where the trapped sellers from that fight are waiting. A round number is where humans anchor orders because humans think in round numbers. Old highs are full of buyers who have been underwater ever since, promising themselves they'll exit \"once it gets back to what I paid\". None of these decisions land on a single tick. They smear across a region — different accounts, different entries, different pain thresholds — so the market's interest in an area is shaped like a band , not a line.",
          "Treating a zone as a line manufactures false precision, and it bills you twice. Your limit order at the exact line misses the turn by a hair — or fills only when price is slicing straight through. And your stop parked at the line sits at the point of maximum ambiguity, inside everyone else's ambiguity, exactly where ordinary overshoot lives. Note what a zone is even when drawn well: a region where a reaction would be informative — not a promise that a reaction is coming. Zones get run straight through every week. The level tells you where to pay attention; it does not tell you what happens there.",
          "The full lesson covers why zones form and how wide to draw them, what volume genuinely confirms at a level — with the caveats crypto volume needs — where entries and stops honestly belong relative to a zone's edges, the self-fulfilling element stated plainly, and an exercise in drawing three zones the honest way.",
          "← Trend or range: the first question What technical analysis can and cannot do →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Levels exist for an unglamorous reason: memory and clustering. A prior swing low is where buyers last won a fight — and where the trapped sellers from that fight are waiting. A round number is where humans anchor orders because humans think in round numbers. Old highs are full of buyers who have been underwater ever since, promising themselves they'll exit \"once it gets back to what I paid\". None of these decisions land on a single tick. They smear across a region — different accounts, different entries, different pain thresholds — so the market's interest in an area is shaped like a band , not a line."
          },
          {
            "type": "figure",
            "src": "assets/migrated/zones-not-lines.png",
            "alt": "Constructed price series tested against a shaded band from 96 to 100 with a dashed line at 98: the series pierces the line on four separate tests while turning back up inside the band each time, then on the fifth test breaks clean through the band and trends away below it",
            "caption": "Constructed data, not a real market: the same series \"breaks\" the line four times while turning inside the zone — and then breaks the zone too. A level is a region of interest — not a price, not a prediction, and not a promise. A stop at the line dies on every test; a stop beyond the far edge survives until the level genuinely fails."
          },
          {
            "type": "paragraph",
            "text": "Treating a zone as a line manufactures false precision, and it bills you twice. Your limit order at the exact line misses the turn by a hair — or fills only when price is slicing straight through. And your stop parked at the line sits at the point of maximum ambiguity, inside everyone else's ambiguity, exactly where ordinary overshoot lives. Note what a zone is even when drawn well: a region where a reaction would be informative — not a promise that a reaction is coming. Zones get run straight through every week. The level tells you where to pay attention; it does not tell you what happens there."
          },
          {
            "type": "paragraph",
            "text": "The full lesson covers why zones form and how wide to draw them, what volume genuinely confirms at a level — with the caveats crypto volume needs — where entries and stops honestly belong relative to a zone's edges, the self-fulfilling element stated plainly, and an exercise in drawing three zones the honest way."
          },
          {
            "type": "paragraph",
            "text": "← Trend or range: the first question What technical analysis can and cannot do →"
          }
        ],
        "links": [
          {
            "label": "← Trend or range: the first question",
            "url": "?page=academy-trend-vs-range"
          },
          {
            "label": "What technical analysis can and cannot do →",
            "url": "?page=academy-what-ta-can-do"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/zones-not-lines.html",
      "capturedAt": "2026-11-12T14:36:56.458484+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-what-ta-can-do": {
    "title": "What technical analysis can and cannot do",
    "eyebrow": "Trading Academy · Module 4 — Reading charts honestly · Lesson 4/4 · Lesson 18 of 22 in the curriculum · ~7 min read",
    "intro": "Technical analysis cannot predict the future. We know because we test it — on years of data, at real cost, with the enthusiasm of people who would love it to work. Here is what survives that testing, and why TA is still worth learning anyway.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Most trading education has a quiet conflict of interest: patterns are easy to teach, satisfying to spot, and they photograph well — so their predictive power gets oversold. We run backtests for a living, so we will just tell you what we've found. Most classic chart folklore, tested honestly, does nothing. Some of it is backwards. When we tested the popular \"wick rejection\" candle lore on our own data, the signal pointed the opposite way from the folklore. When we tested \"volatility squeeze leads to breakout\", the compression mostly just… persisted. These are our results on our data — not universal laws — but they should recalibrate how much trust a pretty pattern deserves by default.",
          "So why teach charts at all? Because prediction was never the real job. TA earns its place doing four humbler things:",
          "Notice what's missing: \"telling you what happens next.\" A chart describes what buyers and sellers have already done. That description is genuinely useful for structuring a decision — and genuinely useless as a crystal ball. Anyone selling you certainty from candle shapes is selling the photograph, not the future.",
          "The full lesson goes further: each of the four jobs worked through with examples, the specific pieces of folklore our testing retired (and the honest caveats about what our tests can't rule out), why a consistent mediocre framework beats an inconsistent brilliant one once sizing and journaling exist, and a short field guide to reading anyone else's TA content critically — including ours.",
          "← Support and resistance are zones, not lines Ten trades tell you nothing →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Most trading education has a quiet conflict of interest: patterns are easy to teach, satisfying to spot, and they photograph well — so their predictive power gets oversold. We run backtests for a living, so we will just tell you what we've found. Most classic chart folklore, tested honestly, does nothing. Some of it is backwards. When we tested the popular \"wick rejection\" candle lore on our own data, the signal pointed the opposite way from the folklore. When we tested \"volatility squeeze leads to breakout\", the compression mostly just… persisted. These are our results on our data — not universal laws — but they should recalibrate how much trust a pretty pattern deserves by default."
          },
          {
            "type": "paragraph",
            "text": "So why teach charts at all? Because prediction was never the real job. TA earns its place doing four humbler things:"
          },
          {
            "type": "table",
            "headers": [
              "Job",
              "What it actually gives you"
            ],
            "rows": [
              [
                "Defining risk",
                "a non-arbitrary place for a stop — which makes position sizing computable at all"
              ],
              [
                "Consistency",
                "the same read of the same chart every time, which is what makes results reviewable"
              ],
              [
                "Shared landmarks",
                "levels enough participants watch that reactions there are at least explicable"
              ],
              [
                "Selectivity",
                "a reason to not trade most of the time — underrated, and measurable"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Notice what's missing: \"telling you what happens next.\" A chart describes what buyers and sellers have already done. That description is genuinely useful for structuring a decision — and genuinely useless as a crystal ball. Anyone selling you certainty from candle shapes is selling the photograph, not the future."
          },
          {
            "type": "paragraph",
            "text": "The full lesson goes further: each of the four jobs worked through with examples, the specific pieces of folklore our testing retired (and the honest caveats about what our tests can't rule out), why a consistent mediocre framework beats an inconsistent brilliant one once sizing and journaling exist, and a short field guide to reading anyone else's TA content critically — including ours."
          },
          {
            "type": "paragraph",
            "text": "← Support and resistance are zones, not lines Ten trades tell you nothing →"
          }
        ],
        "links": [
          {
            "label": "← Support and resistance are zones, not lines",
            "url": "?page=academy-zones-not-lines"
          },
          {
            "label": "Ten trades tell you nothing →",
            "url": "?page=academy-variance-and-sample-size"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/what-ta-can-do.html",
      "capturedAt": "2026-11-12T14:36:56.406282+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-variance-and-sample-size": {
    "title": "Ten trades tell you nothing",
    "eyebrow": "Trading Academy · Module 5 — The long game · Lesson 1/4 · Lesson 19 of 22 in the curriculum · ~6 min read",
    "intro": "Ten trades is the sample most opinions about trading are built on — a screenshot month, a hot streak, a bad first week. This lesson runs one fixed hypothetical system thousands of times and shows what ten trades can actually prove: almost nothing. Judging a method — or a person — on ten trades is astrology with a spreadsheet.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "The system, invented for this page: it wins 4 trades in every 10 on average, winners pay +2R, losers cost −1R (R as defined in lesson 1.3 — the amount risked). Its expectancy is 0.4 × 2R − 0.6 × 1R = +0.2R per trade : a genuinely profitable method, which over ten trades should average +2R. Now watch what \"should\" means. Five consecutive ten-trade stretches, simulated from that same unchanging system:",
          "Simulated draws from one fixed hypothetical system — same rules, same edge, every column. The five average exactly +2R; no single stretch is obliged to.",
          "Nothing changed between stretch 2 and stretch 4 — not the rules, not the edge, not the discipline. The +11R stretch would screenshot beautifully; the −7R stretch feels like proof the method is broken; both are the same coin thrown ten times. Across all possible ten-trade stretches, this profitable system finishes negative 38.2% of the time. More than a third of its own two-week windows look like a losing method, forever, by construction.",
          "38.2% of all ten-trade stretches from this same profitable, unchanging system finish negative — exact binomial arithmetic, not a sampled estimate.",
          "The corollary reaches everything you read online: anyone showing you hand-picked ten-trade windows can harvest the right-hand tail of exactly this spread, with no edge at all. Small samples are not weak evidence — they are raw material for whichever story the seller prefers.",
          "The full lesson shows the whole distribution — 2,000 simulated stretches in one histogram — puts honest numbers on how many trades a verdict really needs (hundreds, not tens), counts the losing streaks a working system routinely serves, explains how survivorship turns luck into advertising, shows why our own track record publishes losers and sample counts, and ends with an exercise in reading the histogram without flinching.",
          "← What technical analysis can and cannot do The journal is the edge you control →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The system, invented for this page: it wins 4 trades in every 10 on average, winners pay +2R, losers cost −1R (R as defined in lesson 1.3 — the amount risked). Its expectancy is 0.4 × 2R − 0.6 × 1R = +0.2R per trade : a genuinely profitable method, which over ten trades should average +2R. Now watch what \"should\" means. Five consecutive ten-trade stretches, simulated from that same unchanging system:"
          },
          {
            "type": "table",
            "headers": [
              "Stretch",
              "1",
              "2",
              "3",
              "4",
              "5"
            ],
            "rows": [
              [
                "Ten-trade total",
                "−4R",
                "+11R",
                "+2R",
                "−7R",
                "+8R"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Simulated draws from one fixed hypothetical system — same rules, same edge, every column. The five average exactly +2R; no single stretch is obliged to."
          },
          {
            "type": "paragraph",
            "text": "Nothing changed between stretch 2 and stretch 4 — not the rules, not the edge, not the discipline. The +11R stretch would screenshot beautifully; the −7R stretch feels like proof the method is broken; both are the same coin thrown ten times. Across all possible ten-trade stretches, this profitable system finishes negative 38.2% of the time. More than a third of its own two-week windows look like a losing method, forever, by construction."
          },
          {
            "type": "paragraph",
            "text": "38.2% of all ten-trade stretches from this same profitable, unchanging system finish negative — exact binomial arithmetic, not a sampled estimate."
          },
          {
            "type": "figure",
            "src": "assets/migrated/ten-trade-samples.png",
            "alt": "Histogram of 2,000 simulated ten-trade R totals from one fixed hypothetical system that wins 4 trades in 10 at +2R and loses at −1R. X axis: sum of 10 trades in R, with totals landing only on −10, −7, −4, −1, +2, +5, +8, +11, +14 and +17. Y axis: count of simulated ten-trade stretches. A dashed vertical line marks the mean at +2.0R, and an annotation reads: same system, every bar — spread is luck alone",
            "caption": "2,000 simulated ten-trade stretches from ONE fixed hypothetical system. Every bar — the −10R disaster on the far left, the +17R miracle on the far right — is the same method, obeyed perfectly. The spread is luck and nothing else."
          },
          {
            "type": "paragraph",
            "text": "The corollary reaches everything you read online: anyone showing you hand-picked ten-trade windows can harvest the right-hand tail of exactly this spread, with no edge at all. Small samples are not weak evidence — they are raw material for whichever story the seller prefers."
          },
          {
            "type": "paragraph",
            "text": "The full lesson shows the whole distribution — 2,000 simulated stretches in one histogram — puts honest numbers on how many trades a verdict really needs (hundreds, not tens), counts the losing streaks a working system routinely serves, explains how survivorship turns luck into advertising, shows why our own track record publishes losers and sample counts, and ends with an exercise in reading the histogram without flinching."
          },
          {
            "type": "paragraph",
            "text": "← What technical analysis can and cannot do The journal is the edge you control →"
          }
        ],
        "links": [
          {
            "label": "lesson 1.3",
            "url": "?page=academy-expectancy"
          },
          {
            "label": "track record",
            "url": "?page=evidence"
          },
          {
            "label": "← What technical analysis can and cannot do",
            "url": "?page=academy-what-ta-can-do"
          },
          {
            "label": "The journal is the edge you control →",
            "url": "?page=academy-journaling"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/variance-and-sample-size.html",
      "capturedAt": "2026-11-12T14:36:56.354223+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-journaling": {
    "title": "The journal is the edge you control",
    "eyebrow": "Trading Academy · Module 5 — The long game · Lesson 2/4 · Lesson 20 of 22 in the curriculum · ~6 min read",
    "intro": "You cannot review decisions you didn't record. Every other lesson in this academy leans on numbers — expectancy, heat, sample size — and every one of those numbers has the same source: a written record of what you did and why. Without a journal, your trading history is whatever your memory feels like telling you today. With one, it is data.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Lesson 5.1 showed that verdicts need hundreds of trades. A journal is how those trades stop evaporating. But its deeper job is stranger and more valuable: it separates decision quality from outcome quality . A good decision can lose money — routinely does, four times in ten for the hypothetical system we keep using — and a terrible decision can get paid. Outcomes arrive mixed with luck; decisions are the only part you control. A journal is the instrument that tells the two apart, and nothing else in trading does.",
          "The minimum viable version is seven fields, and only seven: the date ; the setup — which of your rules fired; the entry reason, written before the outcome is known ; the size and risk — units, stop, and the fraction of the account on the line; the exit and its reason ; the outcome in R ; and the lesson , even when the lesson is \"nothing to fix\". Two minutes per trade. No spreadsheet wizardry, no screenshots of your feelings — just those seven answers, every trade, no exceptions.",
          "The field doing the heavy lifting is the third one. A reason written before the trade resolves is a testable claim; a reason recalled afterwards is an alibi. Memory is an unreliable co-author — it quietly rewrites entries to fit endings — and the only defence is to get the reason on paper while you genuinely don't know how the story ends.",
          "The full lesson lays out the seven-field template as a table you can copy, fills in a complete hypothetical example week — including a losing week's arithmetic and the one trade in it that actually deserved the blame — walks through a twenty-minute weekly review ritual with the four questions that matter, and ends with the exercise the whole module has been building to: journaling your next five trades with the template, and grading the decisions instead of the outcomes.",
          "← Ten trades tell you nothing The first loss: why most people quit here →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Lesson 5.1 showed that verdicts need hundreds of trades. A journal is how those trades stop evaporating. But its deeper job is stranger and more valuable: it separates decision quality from outcome quality . A good decision can lose money — routinely does, four times in ten for the hypothetical system we keep using — and a terrible decision can get paid. Outcomes arrive mixed with luck; decisions are the only part you control. A journal is the instrument that tells the two apart, and nothing else in trading does."
          },
          {
            "type": "paragraph",
            "text": "The minimum viable version is seven fields, and only seven: the date ; the setup — which of your rules fired; the entry reason, written before the outcome is known ; the size and risk — units, stop, and the fraction of the account on the line; the exit and its reason ; the outcome in R ; and the lesson , even when the lesson is \"nothing to fix\". Two minutes per trade. No spreadsheet wizardry, no screenshots of your feelings — just those seven answers, every trade, no exceptions."
          },
          {
            "type": "paragraph",
            "text": "The field doing the heavy lifting is the third one. A reason written before the trade resolves is a testable claim; a reason recalled afterwards is an alibi. Memory is an unreliable co-author — it quietly rewrites entries to fit endings — and the only defence is to get the reason on paper while you genuinely don't know how the story ends."
          },
          {
            "type": "paragraph",
            "text": "The full lesson lays out the seven-field template as a table you can copy, fills in a complete hypothetical example week — including a losing week's arithmetic and the one trade in it that actually deserved the blame — walks through a twenty-minute weekly review ritual with the four questions that matter, and ends with the exercise the whole module has been building to: journaling your next five trades with the template, and grading the decisions instead of the outcomes."
          },
          {
            "type": "paragraph",
            "text": "← Ten trades tell you nothing The first loss: why most people quit here →"
          }
        ],
        "links": [
          {
            "label": "Lesson 5.1",
            "url": "?page=academy-variance-and-sample-size"
          },
          {
            "label": "← Ten trades tell you nothing",
            "url": "?page=academy-variance-and-sample-size"
          },
          {
            "label": "The first loss: why most people quit here →",
            "url": "?page=academy-first-loss"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/journaling.html",
      "capturedAt": "2026-11-12T14:36:55.903278+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-first-loss": {
    "title": "The first loss: why most people quit here",
    "eyebrow": "Trading Academy · Module 5 — The long game · Lesson 3/4 · Lesson 21 of 22 in the curriculum · ~7 min read",
    "intro": "If you are reading this the week it happened — the first loss that was real money, really gone — this lesson was written for you, and it is not going to cheerlead. The loss is real. The feeling is real. What the feeling is telling you, though, is mostly wrong, and the gap between the two is where most trading careers end.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Here is the uncomfortable arithmetic of a first loss. Take the fixed hypothetical system this module keeps reusing — a profitable method that wins 4 trades in 10, +2R winners, −1R losers. Its very first trade is a loss 60 times in 100. A profitable method, working exactly as designed, opens with a loss more often than not . Starting 0-for-3 happens to about one launch in five; even 0-for-5 arrives roughly once in thirteen. None of those starts is evidence of anything. Yet the first loss is where most people quit — not the tenth, the first — because it does not feel like a data point. It feels like a verdict.",
          "It does not feel like a data point. It feels like a verdict.",
          "That feeling has a name: loss aversion. Psychologists have measured it for decades — a loss weighs roughly twice as heavily in the mind as a gain of the same size. It is not weakness and it does not go away with experience; it is the factory setting. The defence is not to feel differently. The defence is to know, in advance, that the feeling is coming, that it is disproportionate by design, and that it is about to hand you the urge to do exactly the wrong thing at exactly the wrong time.",
          "Because quitting after loss number one has a precise statistical meaning: you stop on a sample of one, negative — the least informative dataset it is possible to own, made permanent by walking away.",
          "The full lesson works through what a normal bad start looks like for a working system, prices the first loss against the recovery arithmetic of lesson 1.1 — the number is smaller than the feeling by an order of magnitude, if you sized like Module 2 — and builds the real defence: a falsification rule, written before you need it, that defines in numbers what would actually mean the approach has failed. The exercise is writing yours.",
          "← The journal is the edge you control Losing months, and following a system you didn't invent →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Here is the uncomfortable arithmetic of a first loss. Take the fixed hypothetical system this module keeps reusing — a profitable method that wins 4 trades in 10, +2R winners, −1R losers. Its very first trade is a loss 60 times in 100. A profitable method, working exactly as designed, opens with a loss more often than not . Starting 0-for-3 happens to about one launch in five; even 0-for-5 arrives roughly once in thirteen. None of those starts is evidence of anything. Yet the first loss is where most people quit — not the tenth, the first — because it does not feel like a data point. It feels like a verdict."
          },
          {
            "type": "paragraph",
            "text": "It does not feel like a data point. It feels like a verdict."
          },
          {
            "type": "paragraph",
            "text": "That feeling has a name: loss aversion. Psychologists have measured it for decades — a loss weighs roughly twice as heavily in the mind as a gain of the same size. It is not weakness and it does not go away with experience; it is the factory setting. The defence is not to feel differently. The defence is to know, in advance, that the feeling is coming, that it is disproportionate by design, and that it is about to hand you the urge to do exactly the wrong thing at exactly the wrong time."
          },
          {
            "type": "paragraph",
            "text": "Because quitting after loss number one has a precise statistical meaning: you stop on a sample of one, negative — the least informative dataset it is possible to own, made permanent by walking away."
          },
          {
            "type": "paragraph",
            "text": "The full lesson works through what a normal bad start looks like for a working system, prices the first loss against the recovery arithmetic of lesson 1.1 — the number is smaller than the feeling by an order of magnitude, if you sized like Module 2 — and builds the real defence: a falsification rule, written before you need it, that defines in numbers what would actually mean the approach has failed. The exercise is writing yours."
          },
          {
            "type": "paragraph",
            "text": "← The journal is the edge you control Losing months, and following a system you didn't invent →"
          }
        ],
        "links": [
          {
            "label": "← The journal is the edge you control",
            "url": "?page=academy-journaling"
          },
          {
            "label": "Losing months, and following a system you didn't invent →",
            "url": "?page=academy-losing-months"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/first-loss.html",
      "capturedAt": "2026-11-12T14:36:55.907923+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-losing-months": {
    "title": "Losing months, and following a system you didn't invent",
    "eyebrow": "Trading Academy · Module 5 — The long game · Lesson 4/4 · Lesson 22 of 22 in the curriculum · ~6 min read",
    "intro": "Every real system has losing months. Not most — every. If you are living through one right now, especially your first, this lesson was written to be read exactly here: mid-drawdown, mid-doubt, cursor hovering over the off switch. And it makes one more claim that matters if the system you follow is one you didn't invent — ours, or anyone's: the strongest urge to override the rules arrives at precisely the moment overriding them destroys the most information.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "First, the schedule. Take this module's fixed hypothetical system — profitable, +0.2R expectancy per trade — and let it trade a 20-trade month. It finishes that month at or below zero one month in four , exactly. Three losing months in a typical year, and about one year in sixteen opens with two of them back to back — from a method that is working, obeyed perfectly, edge intact. A losing month is not a malfunction. It is weather, and lesson 5.1 printed the forecast.",
          "Honesty requires the mirror image too: a winning month is no more proof the method works than a losing month is proof it died. Both are single bars from the same histogram. The only instrument that separates a working system from a broken one is sample size — hundreds of trades — and the only way to collect a sample that large is to survive long enough, at small enough size, to still be there when it arrives.",
          "Which is where the override temptation comes in. Skipping signals after losses feels like prudence. It is actually a silent redesign: the system you are now trading — \"the old one, minus whatever scared me\" — has no backtest, no track record, and no sample, and it was designed by the least calm version of you.",
          "The full lesson works the monthly arithmetic, shows why discretionary interference clusters at drawdown bottoms, states the rule for following a system you didn't write — take all its signals or none — and draws the line where abandoning a system is not weakness but correctness. It ends with the only promise this academy makes, and it is not the one sales pages make.",
          "← The first loss: why most people quit here"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "First, the schedule. Take this module's fixed hypothetical system — profitable, +0.2R expectancy per trade — and let it trade a 20-trade month. It finishes that month at or below zero one month in four , exactly. Three losing months in a typical year, and about one year in sixteen opens with two of them back to back — from a method that is working, obeyed perfectly, edge intact. A losing month is not a malfunction. It is weather, and lesson 5.1 printed the forecast."
          },
          {
            "type": "paragraph",
            "text": "Honesty requires the mirror image too: a winning month is no more proof the method works than a losing month is proof it died. Both are single bars from the same histogram. The only instrument that separates a working system from a broken one is sample size — hundreds of trades — and the only way to collect a sample that large is to survive long enough, at small enough size, to still be there when it arrives."
          },
          {
            "type": "paragraph",
            "text": "Which is where the override temptation comes in. Skipping signals after losses feels like prudence. It is actually a silent redesign: the system you are now trading — \"the old one, minus whatever scared me\" — has no backtest, no track record, and no sample, and it was designed by the least calm version of you."
          },
          {
            "type": "paragraph",
            "text": "The full lesson works the monthly arithmetic, shows why discretionary interference clusters at drawdown bottoms, states the rule for following a system you didn't write — take all its signals or none — and draws the line where abandoning a system is not weakness but correctness. It ends with the only promise this academy makes, and it is not the one sales pages make."
          },
          {
            "type": "paragraph",
            "text": "← The first loss: why most people quit here"
          }
        ],
        "links": [
          {
            "label": "lesson 5.1",
            "url": "?page=academy-variance-and-sample-size"
          },
          {
            "label": "← The first loss: why most people quit here",
            "url": "?page=academy-first-loss"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The academy teaches method and arithmetic — it does not and cannot promise trading results. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/losing-months.html",
      "capturedAt": "2026-11-12T14:36:56.115749+00:00",
      "scope": "Public lesson portion captured 12 November 2026. Generic futures/stop-based examples are not this current spot strategy."
    },
    "gateNotice": "Public portion migrated in full. The original site gates the remainder for members. No member token was used and that remainder is not available here.",
    "gateSourceText": "The rest of this lesson — the worked examples, the exercises, and how our own system applies it — is included with any paid NoGuru subscription. Members receive a personal access link by Telegram DM; open it once and every lesson unlocks on this device.",
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ]
  },
  "academy-recovery-calculator": {
    "title": "Drawdown & recovery calculator",
    "eyebrow": "Trading Academy · Capstone — free, no signup",
    "intro": "The arithmetic from The arithmetic of losses , live: enter a loss, see the bill. Then pick a monthly pace — a hypothetical assumption you choose, not a number anyone is promising — and see how long repayment takes.",
    "kind": "academy-lesson",
    "sections": [
      {
        "id": "current-context",
        "title": "Read this lesson in context",
        "body": [
          "This is the original public lesson portion. Its hypothetical examples teach general trading concepts. References to futures, stops, other strategies or older track-record formats are not statements of NoGuru’s current spot configuration."
        ],
        "links": [
          {
            "label": "Current NoGuru mechanics",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Drawdown (%):",
          "Hypothetical recovery pace (% per month, your assumption):",
          "All outputs are arithmetic consequences of YOUR two inputs. The pace is hypothetical — nothing on this site suggests any particular pace is achievable, and real results do not arrive in steady monthly installments."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Drawdown (%):"
          },
          {
            "type": "paragraph",
            "text": "Hypothetical recovery pace (% per month, your assumption):"
          },
          {
            "type": "paragraph",
            "text": "All outputs are arithmetic consequences of YOUR two inputs. The pace is hypothetical — nothing on this site suggests any particular pace is achievable, and real results do not arrive in steady monthly installments."
          }
        ],
        "links": []
      },
      {
        "id": "reference-table",
        "title": "Reference table",
        "body": [
          "This calculator shows what recovery requires — not what any system, channel, or pace achieves . It is arithmetic, not a forecast. Back to the curriculum ."
        ],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Drawdown",
              "Required gain"
            ],
            "rows": [
              [
                "10%",
                "+11%"
              ],
              [
                "20%",
                "+25%"
              ],
              [
                "30%",
                "+43%"
              ],
              [
                "50%",
                "+100%"
              ],
              [
                "70%",
                "+233%"
              ],
              [
                "90%",
                "+900%"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "This calculator shows what recovery requires — not what any system, channel, or pace achieves . It is arithmetic, not a forecast. Back to the curriculum ."
          }
        ],
        "links": [
          {
            "label": "the curriculum",
            "url": "?page=academy"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. This calculator performs arithmetic on numbers you enter — it does not model, project, or promise any trading result. Nothing here is investment advice."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/recovery-calculator.html",
      "capturedAt": "2026-11-12T14:36:56.199586+00:00",
      "scope": "Captured public text. This is source material, not an authenticated account or newly verified live implementation."
    },
    "links": [
      {
        "label": "All Academy lessons",
        "url": "?page=academy"
      },
      {
        "label": "Current strategy mechanics",
        "url": "?page=learn"
      }
    ],
    "widget": "recovery",
    "gateNotice": null
  },
  "academy": {
    "title": "The full public Academy collection.",
    "eyebrow": "22 lessons across 5 modules",
    "intro": "Every available public lesson is here, with its original examples, tables and figures. The member-only remainder stays gated; current strategy mechanics are explained separately.",
    "kind": "academy-index",
    "cards": [
      {
        "eyebrow": "Trading Academy · Module 1 — Why slow wins · Lesson 1/4 · Lesson 1 of 22 in the curriculum · ~7 min read",
        "title": "The arithmetic of losses",
        "body": [
          "Lose 30% of your account and you need 43% — not 30% — just to get back to even. That asymmetry is not a slogan; it is division. It is also the single most important piece of arithmetic in trading, and every rule in this academy exists because of it."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-arithmetic-of-losses"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 1 — Why slow wins · Lesson 2/4 · Lesson 2 of 22 in the curriculum · ~6 min read",
        "title": "Leverage, liquidation, and an ordinary Tuesday",
        "body": [
          "At 20× leverage, the market does not need a crash to take everything you put up — a 5% move against you, the kind major coins make on a slow news day, is 100% of your margin. The distance to liquidation is one division: roughly 100 ÷ leverage."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-leverage-and-liquidation"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 1 — Why slow wins · Lesson 3/4 · Lesson 3 of 22 in the curriculum · ~6 min read",
        "title": "Expectancy: why win rate isn't the score",
        "body": [
          "A system that wins seven trades out of ten can lose money. A system that loses six out of ten can be excellent. How often you win is not the score — the score is expectancy: how much you make when right, times how often, minus how much you lose when wrong, times how often."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-expectancy"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 1 — Why slow wins · Lesson 4/4 · Lesson 4 of 22 in the curriculum · ~6 min read",
        "title": "Survive first: compounding needs a survivor",
        "body": [
          "Compounding is the strongest force available to a trader, and it has one non-negotiable requirement: an account that is still there. Steady-small beats boom-bust not as a temperament or a virtue, but as multiplication."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-survive-first"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 2 — Capital & risk management · Lesson 1/4 · Lesson 5 of 22 in the curriculum · ~7 min read",
        "title": "Fixed-fractional sizing: the 1-2% idea",
        "body": [
          "Accounts are rarely destroyed by bad entries. They are destroyed by good-sized bets on bad entries — and by the fact that nobody decided the size at all. Fixed-fractional sizing is one rule that decides it for you: risk the same small fraction of the account on every trade."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-risk-per-trade"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 2 — Capital & risk management · Lesson 2/4 · Lesson 6 of 22 in the curriculum · ~6 min read",
        "title": "Portfolio heat: your real position is the sum",
        "body": [
          "The previous lesson sized one trade. Nobody holds one trade. Portfolio heat is the sum of everything you could lose if every open stop were hit today — and five careful 2% positions add up to a 10% day before correlation has said a word."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-portfolio-heat"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 2 — Capital & risk management · Lesson 3/4 · Lesson 7 of 22 in the curriculum · ~6 min read",
        "title": "Five alt longs is one bet",
        "body": [
          "You bought five different alts, so you're diversified — right? On a red day, crypto disagrees. Five alt longs usually behave like one large bet on \"crypto goes up\", and your real position size is closer to the sum than the average."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-correlation-one-bet"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 2 — Capital & risk management · Lesson 4/4 · Lesson 8 of 22 in the curriculum · ~7 min read",
        "title": "Sizing down: the only free defense",
        "body": [
          "Every defense in trading has a price — hedges cost carry, stops cost whipsaws, sitting out costs the trades that worked. Cutting position size is the exception: it needs no forecast, no new skill, no product, and it is reversible tomorrow. The whole discipline is knowing, in advance, when it is mandatory."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-when-to-size-down"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 1/6 · Lesson 9 of 22 in the curriculum · ~6 min read",
        "title": "Spot, futures, perpetuals: what you're actually buying",
        "body": [
          "The same coin trades as three different things: the coin itself, a contract with an expiry date, and a contract that never expires. They show nearly the same price and carry completely different risks — and most crypto trading happens in the third one."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-spot-futures-perps"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 2/6 · Lesson 10 of 22 in the curriculum · ~6 min read",
        "title": "Margin: isolated vs cross",
        "body": [
          "Before your first leveraged trade, your exchange asks a quiet question with loud consequences: isolated or cross margin? One caps a bad trade's damage at its own stake. The other quietly signs your whole wallet as collateral for it."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-margin-isolated-vs-cross"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 3/6 · Lesson 11 of 22 in the curriculum · ~6 min read",
        "title": "Funding: the price of a crowded trade",
        "body": [
          "Every 8 hours, one side of the perpetual-futures market pays the other to stay in the trade. That small payment — the funding rate — is the closest thing crypto has to an honest, real-money opinion poll, and you can read it for free."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-funding-rates"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 4/6 · Lesson 12 of 22 in the curriculum · ~6 min read",
        "title": "Open interest: reading who's in the pool",
        "body": [
          "Price tells you what happened. Open interest tells you who did it — new money arriving, or old positions leaving. The same green candle can mean either, and they age very differently."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-open-interest"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 5/6 · Lesson 13 of 22 in the curriculum · ~6 min read",
        "title": "Liquidation cascades: how crypto really moves",
        "body": [
          "Crypto's most violent moves are not caused by news. They are caused by leverage: forced sellers creating forced sellers, in a chain reaction called a liquidation cascade — mechanical, not informational."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-liquidation-cascades"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 3 — Market fundamentals · Lesson 6/6 · Lesson 14 of 22 in the curriculum · ~12 min read",
        "title": "Weekend drift: what happens when the market reopens",
        "body": [
          "Crypto never closes, but the people trading it mostly do. Weekend books are thin, weekend moves are small, and most of them come back. That last part gets sold as an edge. It isn't — and seeing why is worth more than the fact itself."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-weekend-drift"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 4 — Reading charts honestly · Lesson 1/4 · Lesson 15 of 22 in the curriculum · ~6 min read",
        "title": "Timeframes: one market, many stories",
        "body": [
          "Pull up the same coin at the same moment: the 1-hour chart shows a downtrend, the weekly shows an uptrend. Neither chart is lying. Every timeframe tells a true story about a different question — and most chart confusion is two questions being answered at once."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-timeframes"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 4 — Reading charts honestly · Lesson 2/4 · Lesson 16 of 22 in the curriculum · ~6 min read",
        "title": "Trend or range: the first question",
        "body": [
          "Every strategy is secretly a bet on market character. Trend tools need price to keep going; range tools need it to come back. Running one in the other's market is the most common systematic way to lose — same tool, same discipline, wrong tape."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-trend-vs-range"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 4 — Reading charts honestly · Lesson 3/4 · Lesson 17 of 22 in the curriculum · ~7 min read",
        "title": "Support and resistance are zones, not lines",
        "body": [
          "Draw a line under a low, watch price pierce it by half a percent, stop you out, and reverse. The lesson is not that support \"failed\". The lesson is that support was never a line — it is an area where many people's decisions cluster."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-zones-not-lines"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 4 — Reading charts honestly · Lesson 4/4 · Lesson 18 of 22 in the curriculum · ~7 min read",
        "title": "What technical analysis can and cannot do",
        "body": [
          "Technical analysis cannot predict the future. We know because we test it — on years of data, at real cost, with the enthusiasm of people who would love it to work. Here is what survives that testing, and why TA is still worth learning anyway."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-what-ta-can-do"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 5 — The long game · Lesson 1/4 · Lesson 19 of 22 in the curriculum · ~6 min read",
        "title": "Ten trades tell you nothing",
        "body": [
          "Ten trades is the sample most opinions about trading are built on — a screenshot month, a hot streak, a bad first week. This lesson runs one fixed hypothetical system thousands of times and shows what ten trades can actually prove: almost nothing. Judging a method — or a person — on ten trades is astrology with a spreadsheet."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-variance-and-sample-size"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 5 — The long game · Lesson 2/4 · Lesson 20 of 22 in the curriculum · ~6 min read",
        "title": "The journal is the edge you control",
        "body": [
          "You cannot review decisions you didn't record. Every other lesson in this academy leans on numbers — expectancy, heat, sample size — and every one of those numbers has the same source: a written record of what you did and why. Without a journal, your trading history is whatever your memory feels like telling you today. With one, it is data."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-journaling"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 5 — The long game · Lesson 3/4 · Lesson 21 of 22 in the curriculum · ~7 min read",
        "title": "The first loss: why most people quit here",
        "body": [
          "If you are reading this the week it happened — the first loss that was real money, really gone — this lesson was written for you, and it is not going to cheerlead. The loss is real. The feeling is real. What the feeling is telling you, though, is mostly wrong, and the gap between the two is where most trading careers end."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-first-loss"
          }
        ]
      },
      {
        "eyebrow": "Trading Academy · Module 5 — The long game · Lesson 4/4 · Lesson 22 of 22 in the curriculum · ~6 min read",
        "title": "Losing months, and following a system you didn't invent",
        "body": [
          "Every real system has losing months. Not most — every. If you are living through one right now, especially your first, this lesson was written to be read exactly here: mid-drawdown, mid-doubt, cursor hovering over the off switch. And it makes one more claim that matters if the system you follow is one you didn't invent — ours, or anyone's: the strongest urge to override the rules arrives at precisely the moment overriding them destroys the most information."
        ],
        "note": "Full public portion; member-only remainder unavailable.",
        "links": [
          {
            "label": "Read the public lesson",
            "url": "?page=academy-losing-months"
          }
        ]
      }
    ],
    "sections": [
      {
        "id": "calculator",
        "title": "Drawdown and recovery calculator",
        "body": [
          "The public calculator is available locally. Its monthly pace is an assumption you choose, not a strategy forecast."
        ],
        "links": [
          {
            "label": "Use the recovery calculator",
            "url": "?page=academy-recovery-calculator"
          },
          {
            "label": "Read the current strategy basics",
            "url": "?page=learn"
          }
        ]
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/academy/",
      "capturedAt": "2026-11-12T14:36:55.566547+00:00",
      "scope": "Captured public text; dates and examples belong to this source snapshot."
    }
  },
  "digest-2026-11-12-daily": {
    "title": "1048 cycles completed since 1 August, 2 sold below cost, 20 more in progress",
    "eyebrow": "Digest archive · daily · 2026-11-12",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-12. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "Since 1 August the system has completed 1048 cycles, 2 of them sold below cost, and it now holds 20 cycles in progress after 8 buys on 3 coins in the last 24 hours, bought as prices came down and ready for the next leg up. In the last 24 hours it closed 1 cycle. Over the last 7 days it completed 18 cycles, none sold below cost. Profit was booked in 15 of 16 weeks since launch, and the published return is 10.31% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 28 (Fear), the total market value is 2.47 trillion US dollars, down 0.29% over 24 hours, and Bitcoin's share is 59.88%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily record of what the automated Stepgrid Hybrid system closed and holds, plus today's market readings."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-12-daily",
      "capturedAt": "2026-11-12T14:36:56.835899+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-11-daily": {
    "title": "26 cycles closed in the last 7 days, none sold below cost, 20 more in progress",
    "eyebrow": "Digest archive · daily · 2026-11-11",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-11. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system holds 20 cycles in progress, with 13 buys on 3 coins in the last 24 hours, bought as prices came down and ready for the next leg up. It closed 1 cycle in the last 24 hours. Over the last 7 days it completed 26 cycles, none sold below cost. Since 1 August: 1047 cycles completed, 2 sold below cost. Profit was booked in 15 of 16 weeks, at 10.41% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed reads 29 (Fear), the total market value is 2.48 trillion US dollars, down 1.43% over 24 hours, and Bitcoin's share is 59.77%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain record of what the automated Stepgrid Hybrid system did and where the market stands today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-11-daily",
      "capturedAt": "2026-11-12T14:36:56.832203+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-10-daily": {
    "title": "Typical cycle 4.0 hours: 79% of all cycles since launch sold within a day",
    "eyebrow": "Digest archive · daily · 2026-11-10",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-10. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "A typical cycle runs 4.0 hours, and 79% of all cycles since launch sold within a day. In the last 7 days the system completed 25 cycles, none sold below cost, with 20 cycles in progress. Since 1 August 2026 it has completed 1046 cycles, 2 of them sold below cost. Profit was booked in 15 of 16 weeks, and the published return is 10.5% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 32 (\"Fear\"), the total market value is 2.51 trillion US dollars, up 0.37% over 24 hours, with Bitcoin at 59.6% of the market."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language record of what the automated Stepgrid Hybrid system closed and holds, plus today's market readings."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-10-daily",
      "capturedAt": "2026-11-12T14:36:56.980875+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-09-daily": {
    "title": "Market down 2.26% in 24 hours: the system closed 2 cycles, none below cost",
    "eyebrow": "Digest archive · daily · 2026-11-09",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-09. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The total market fell 2.26% in the last 24 hours, and in those same 24 hours the system completed 2 cycles, none sold below cost, profiting from the winners such as ETHFI. Over the last 7 days it completed 21 cycles, none sold below cost, with 20 cycles in progress. Since 1 August: 1042 cycles completed, 2 sold below cost. 79% of all cycles since launch sold within a day, and the published return is 10.51% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 29 (Fear), the total market value is 2.47 trillion US dollars, and Bitcoin's share is 60.17%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language summary of what the Stepgrid Hybrid system did and where the market stands today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-09-daily",
      "capturedAt": "2026-11-12T14:36:56.938323+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-08-weekly": {
    "title": "Weekly digest: profit booked in nearly every week since launch, and barely a cycle sold below cost",
    "eyebrow": "Digest archive · weekly · 2026-11-08",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-08. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "This week the system completed 20 cycles, and none of them sold below cost. Across all cycles since launch, 79% were sold within a day. The busiest week so far ran to 11 October, with 82 cycles completed. The system also holds 20 cycles in progress."
        ],
        "links": []
      },
      {
        "id": "week-review",
        "title": "Week in review",
        "body": [
          "10.61% a month on allocated funds before trading fees.",
          "Profit booked in 14 of the 15 weeks since launch.",
          "1041 cycles completed since 1 August, 2 sold below cost.",
          "August 2026: 285 cycles from 1 August; September 2026: 502, the busiest month; October 2026: 234; November 2026: 20 so far.",
          "Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain weekly record of what the automated Stepgrid Hybrid system actually did with its signal cycles."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-08-weekly",
      "capturedAt": "2026-11-12T14:36:56.820932+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-08-daily": {
    "title": "1040 cycles since 1 August, just 2 sold below cost, 20 in progress today",
    "eyebrow": "Digest archive · daily · 2026-11-08",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-08. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "Since 1 August the system has completed 1040 cycles, 2 of them sold below cost. It holds 20 cycles in progress, with 7 buys on 3 coins in the last 24 hours, bought as prices came down and ready for the next leg up. In the last 24 hours it closed 1 cycle, none below cost; over the last 7 days it closed 19 cycles, none below cost. Profit was booked in 14 of the 15 weeks since launch. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 28 (Fear), with the total market value at 2.56 trillion US dollars, down 0.31% over the last 24 hours, and Bitcoin's share at 59.32%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain record of what the automated Stepgrid Hybrid system did with its buys and sales, plus today's broad market readings."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-08-daily",
      "capturedAt": "2026-11-12T14:36:56.861414+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-07-daily": {
    "title": "Last 7 days: the system closed 20 cycles, none sold below cost",
    "eyebrow": "Digest archive · daily · 2026-11-07",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-07. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "In the last 7 days the system completed 20 cycles, none of them sold below cost, and it has 20 cycles in progress. Since 1 August it has completed 1039 cycles in total, 2 of which sold below cost. Profit was booked in 14 of the 15 weeks since launch, and 79% of all cycles since launch sold within a day. The published return is 10.71% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "The Fear & Greed index reads 25 (Extreme Fear), the total market value stands at 2.57 trillion US dollars, up 0.36% over 24 hours, with Bitcoin at 59.29% of the market."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain summary of what the automated Stepgrid Hybrid system completed and how the wider crypto market looks today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-07-daily",
      "capturedAt": "2026-11-12T14:36:56.891236+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-06-daily": {
    "title": "Market down 5.49% in 24 hours: the system closed 4 cycles, none below cost",
    "eyebrow": "Digest archive · daily · 2026-11-06",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-06. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The total market fell 5.49% over the last 24 hours, and in the same 24 hours the system completed 4 cycles, none sold below cost, profiting from the winners such as ZEC and ETHFI. Over the last 7 days it completed 18 cycles, none sold below cost, with 20 cycles in progress. Since 1 August it has completed 1034 cycles, 2 of them sold below cost. 79% of all cycles since launch sold within a day, and the published return is 10.8% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 28 (Fear), the total market value is 2.56 trillion US dollars, and Bitcoin's share is 59.16%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily record of what the automated Stepgrid Hybrid strategy closed and holds, plus a short snapshot of the wider market."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-06-daily",
      "capturedAt": "2026-11-12T14:36:56.912788+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-05-daily": {
    "title": "Profit booked in 14 of 15 weeks since launch, with 23 cycles completed in the last 7 days",
    "eyebrow": "Digest archive · daily · 2026-11-05",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-05. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system booked profit in 14 of its 15 weeks since launch. In the last 7 days it completed 23 cycles, none sold below cost, with 20 cycles in progress. Since 1 August it has completed 1030 cycles, 2 of them sold below cost. 79% of all cycles since launch sold within a day, and the published return is 10.88% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 50 (Neutral), with the total market value at 2.71 trillion US dollars, up 3.01% over 24 hours, and Bitcoin's share at 59.56%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language record of what the Stepgrid Hybrid strategy completed, alongside today's broad market readings."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-05-daily",
      "capturedAt": "2026-11-12T14:36:56.956427+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-04-daily": {
    "title": "1021 cycles completed since 1 August, 2 sold below cost, with 20 cycles in progress",
    "eyebrow": "Digest archive · daily · 2026-11-04",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-04. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system holds 20 cycles in progress, with 3 buys on 2 coins in the last 24 hours, bought as prices came down and ready for the next leg up. Since 1 August it has completed 1021 cycles, of which 2 sold below cost. In the last 7 days it completed 18 cycles, none sold below cost. Profit was booked in 13 of 15 weeks since launch, and the published return is 10.89% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "The Fear & Greed index reads 34 (Fear), the total market value stands at $2.63 trillion, up 1.47% over 24 hours, with Bitcoin at 59.34% of the market."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily record of what the automated Stepgrid Hybrid strategy did and where the wider market stands."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-04-daily",
      "capturedAt": "2026-11-12T14:36:56.981091+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-03-daily": {
    "title": "This week: 26 cycles completed, none sold below cost, and 20 cycles in progress",
    "eyebrow": "Digest archive · daily · 2026-11-03",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-03. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system is holding 20 cycles in progress, with 9 buys on 3 coins in the last 24 hours, bought as prices came down and ready for the next leg up. Over the last 7 days it completed 26 cycles, none sold below cost. Since 1 August 2026 it has completed 1021 cycles, 2 of them sold below cost. 79% of all cycles since launch were sold within a day, and the published return is 11.0% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 26 (Fear), the total market value is 2.59 trillion US dollars, down 1.85% over 24 hours, with Bitcoin's share at 59.25%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily summary of what the automated Stepgrid Hybrid strategy did and how the wider crypto market stands."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-03-daily",
      "capturedAt": "2026-11-12T14:36:57.250993+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-02-daily": {
    "title": "Fast cycles: typical 3.8 hours, with 20 cycles in progress and 5 fresh buys",
    "eyebrow": "Digest archive · daily · 2026-11-02",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-02. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system holds 20 cycles in progress, with 5 buys on 2 coins in the last 24 hours, bought as prices came down and ready for the next leg up. A typical cycle runs 3.8 hours, and 79% of all cycles since launch sold within a day. Over the last 7 days it completed 31 cycles, none sold below cost. Since 1 August: 1021 cycles completed, 2 sold below cost, with a published 11.12% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 37 (Fear), the total market value is 2.61 trillion US dollars, up 0.09% over 24 hours, and Bitcoin's share is 59.99%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily record of what the automated Stepgrid Hybrid system did and how the wider market looks today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-02-daily",
      "capturedAt": "2026-11-12T14:36:57.015309+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-01-weekly": {
    "title": "Weekly digest: 1021 cycles completed since launch, 2 sold below cost",
    "eyebrow": "Digest archive · weekly · 2026-11-01",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-01. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "This week the system completed 33 cycles, none sold below cost, with 20 cycles in progress. Since launch, 79% of all cycles have been sold within a day. The busiest week so far ran to 27 September with 215 cycles."
        ],
        "links": []
      },
      {
        "id": "week-review",
        "title": "Week in review",
        "body": [
          "11.24% a month on allocated funds before trading fees.",
          "Profit booked in 13 of the 14 weeks since launch.",
          "1021 cycles completed since 1 August, 2 sold below cost.",
          "August 2026: 285 cycles from 1 August; September 2026: 502, the busiest month; October 2026: 234; November 2026: 0 so far.",
          "Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain record of what the automated Stepgrid Hybrid system has done, week by week, since it started."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-01-weekly",
      "capturedAt": "2026-11-12T14:36:57.081532+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-11-01-daily": {
    "title": "Profit booked in 13 of the 14 weeks since launch",
    "eyebrow": "Digest archive · daily · 2026-11-01",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-11-01. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "Profit booked in 13 of the 14 weeks since launch. The system holds 20 cycles in progress, with 4 buys on 3 coins in the last 24 hours, bought as prices came down and ready for the next leg up. It closed 2 cycles in the last 24 hours, none below cost. Last 7 days: 33 cycles completed, none sold below cost. Since 1 August: 1021 cycles completed, 2 sold below cost, at 11.24% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 34 (Fear), the total market value is 2.64 trillion US dollars, up 0.72% over 24 hours, with Bitcoin's share at 59.27%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain record of what the automated Stepgrid Hybrid system did and where the wider market stands today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-11-01-daily",
      "capturedAt": "2026-11-12T14:36:57.058945+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-30-daily": {
    "title": "This week: 28 cycles completed in the last 7 days, none sold below cost",
    "eyebrow": "Digest archive · daily · 2026-10-30",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-30. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "In the last 7 days the system completed 28 cycles, none of them sold below cost, with 20 cycles still in progress. Since 1 August it has completed 1016 cycles in total, of which 2 sold below cost. Profit was booked in 13 of 14 weeks since launch, and 79% of all cycles since launch were sold within a day. The published return is 11.42% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "The Fear & Greed index reads 30 (Fear), the total market value stands at 2.65 trillion US dollars, down 1.72% over 24 hours, with Bitcoin's share at 59.38%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language record of what the automated Stepgrid Hybrid strategy did and where the market stands today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-30-daily",
      "capturedAt": "2026-11-12T14:36:57.081842+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-29-daily": {
    "title": "Speed first: the typical cycle ran 3.8 hours, with 19 cycles closed in the last 7 days",
    "eyebrow": "Digest archive · daily · 2026-10-29",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-29. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The typical cycle ran 3.8 hours, and 79% of all cycles since launch sold within a day. In the last 7 days the system completed 19 cycles, none of them sold below cost, and 20 cycles are in progress. Since 1 August it has completed 1007 cycles, 2 of which sold below cost. Profit was booked in 13 of 14 weeks since launch. The published return is 11.47% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 51 (Neutral), the total market value is 2.7 trillion US dollars, down 1.14% over the last 24 hours, and Bitcoin's share is 59.5%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain summary of what the automated Stepgrid Hybrid system did over the past week and where the wider crypto market stands today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-29-daily",
      "capturedAt": "2026-11-12T14:36:57.080627+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-28-daily": {
    "title": "Profit booked in 13 of 14 weeks since launch",
    "eyebrow": "Digest archive · daily · 2026-10-28",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-28. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system has booked profit in 13 of the 14 weeks since it started. In the last 7 days it completed 22 cycles, none sold below cost, with 20 cycles still in progress. Since 1 August it has completed 1003 cycles, of which 2 sold below cost. Of all cycles since launch, 79% were sold within a day. The published return is 11.49% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 51 (Neutral), total market value is 2.73 trillion US dollars, up 1.56% over 24 hours, with Bitcoin at 59.4% of the market."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily record of what the automated Stepgrid Hybrid system closed and holds, plus a snapshot of the wider market."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-28-daily",
      "capturedAt": "2026-11-12T14:36:57.129714+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-27-daily": {
    "title": "995 cycles closed since 1 August, 2 sold below cost",
    "eyebrow": "Digest archive · daily · 2026-10-27",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-27. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "Since 1 August the system has completed 995 cycles, of which 2 sold below cost. In the last 7 days it closed 29 cycles, none sold below cost, and 20 cycles are in progress. Profit was booked in 13 of the 14 weeks since launch, and 79% of all cycles since launch were sold within a day. The published return is 11.59% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 48 (Neutral), the total market value is 2.69 trillion US dollars, down 0.24% over 24 hours, with Bitcoin at 59.43% of the market."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily record of what the Stepgrid Hybrid strategy closed and holds, plus today's market readings."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-27-daily",
      "capturedAt": "2026-11-12T14:36:58.141295+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-26-daily": {
    "title": "30 cycles closed in the last 7 days, none sold below cost, with 20 more in progress",
    "eyebrow": "Digest archive · daily · 2026-10-26",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-26. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system holds 20 cycles in progress, including 5 buys on 3 coins in the last 24 hours, bought as prices came down and ready for the next leg up. In the last 24 hours it closed 2 cycles, none sold below cost. Over the last 7 days it completed 30 cycles, none sold below cost. Since 1 August it has completed 990 cycles, 2 of them sold below cost. Profit was booked in 12 of 14 weeks, and the published return is 11.69% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 50 (Neutral), the total market value is 2.67 trillion US dollars, down 0.71% over 24 hours, and Bitcoin's share is 60.05%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily record of what the automated Stepgrid Hybrid strategy did and how the wider market looked today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-26-daily",
      "capturedAt": "2026-11-12T14:36:57.189861+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-25-weekly": {
    "title": "Weekly digest: profit booked in 12 of 13 weeks since launch, 988 cycles completed",
    "eyebrow": "Digest archive · weekly · 2026-10-25",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-25. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "This week the system completed 33 cycles and none sold below cost, with 20 cycles in progress. Since launch, 79% of all cycles have sold within a day. The busiest week closed 215 cycles to 27 September. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "week-review",
        "title": "Week in review",
        "body": [
          "11.81% a month on allocated funds before trading fees.",
          "Profit booked in 12 of 13 weeks since launch.",
          "988 cycles completed since 1 August, 2 sold below cost.",
          "August 2026 from 1 August: 285 cycles; September 2026: 502, the busiest month; October 2026 so far: 201.",
          "Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain weekly record of what the Stepgrid Hybrid system actually did, taken from its own published results."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-25-weekly",
      "capturedAt": "2026-11-12T14:36:57.212934+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-25-daily": {
    "title": "20 cycles in progress and ready for the next leg up; a typical cycle closes in 3.8 hours",
    "eyebrow": "Digest archive · daily · 2026-10-25",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-25. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system holds 20 cycles in progress, with 22 buys on 10 coins in the last 24 hours, bought as prices came down and ready for the next leg up. A typical cycle closes in 3.8 hours, and 79% of all cycles since launch sold within a day. Over the last 7 days it completed 33 cycles, none sold below cost. Since 1 August it has completed 988 cycles, 2 of them sold below cost, with a published 11.81% a month on allocated funds before trading fees. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 54 (Neutral), with the total market value at $2.72 trillion, down 0.24% over 24 hours, and Bitcoin's share at 59.49%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language record of what the Stepgrid Hybrid strategy did and how the wider market looked today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-25-daily",
      "capturedAt": "2026-11-12T14:36:57.254901+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-24-daily": {
    "title": "17 cycles in progress and ready for the next leg up; profit booked in 23 of 23 weeks since launch",
    "eyebrow": "Digest archive · daily · 2026-10-24",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-24. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system holds 17 cycles in progress, with 11 buys on 8 coins in the last 24 hours, bought as prices came down and ready for the next leg up. Profit was booked in 23 of 23 weeks since launch. Over the last 7 days it completed 1 cycle, with 0 sold below cost. Since 21 May it has completed 1048 cycles, 0 sold below cost, at a published 6.36% a month on allocated funds before trading fees, at this rate 76% a year with profit taken out. Start with 14 days free: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 51 (Neutral), with the total market value at 2.72 trillion US dollars, down 1.3% over 24 hours, and Bitcoin's share at 59.46%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language record of what the automated Stepgrid Hybrid strategy did and what the wider market looked like today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-24-daily",
      "capturedAt": "2026-11-12T14:36:57.250083+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-23-daily": {
    "title": "15 cycles in progress and ready for the next leg up; 1048 cycles since launch, none sold below cost",
    "eyebrow": "Digest archive · daily · 2026-10-23",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-23. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system is holding 15 cycles in progress, bought as prices came down and ready for the next leg up. Since 21 May it has completed 1048 cycles, and none sold below cost. In the last 7 days it completed 1 cycle, with none sold below cost. Profit was booked in 23 of 23 weeks since launch, and 78% of all cycles since launch were sold within a day. The published return is 6.4% a month on allocated funds before trading fees, and at this rate 77% a year with profit taken out. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 50 (Neutral), the total market value is $2.76 trillion, down 0.78% over the last 24 hours, and Bitcoin's share is 59.44%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language record of what the automated Stepgrid Hybrid system did and how the wider crypto market looked today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-23-daily",
      "capturedAt": "2026-11-12T14:36:57.304528+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-21-daily": {
    "title": "Fast turnaround: a typical cycle closes in 3.6 hours, and 78% sold within a day",
    "eyebrow": "Digest archive · daily · 2026-10-21",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-21. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The typical cycle closes in 3.6 hours, and 78% of all cycles since launch sold within a day. In the last 7 days the system completed 1 cycle, with 0 sold below cost, and it holds 15 cycles in progress. Since 21 May it has completed 1048 cycles, none sold below cost. The published return is 6.18% a month on allocated funds before trading fees, and at this rate 74% a year with profit taken out. Profit was booked in 23 of the 23 weeks since launch. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 63 (Greed), the total market value is 2.79 trillion US dollars, up 1.31% over 24 hours, with Bitcoin's share at 59.51%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language summary of what the automated Stepgrid Hybrid system did and where the wider crypto market stands today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-21-daily",
      "capturedAt": "2026-11-12T14:36:57.322489+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-20-daily": {
    "title": "Profit booked in 22 of the 23 weeks since launch, and no cycle sold below cost",
    "eyebrow": "Digest archive · daily · 2026-10-20",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-20. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "Profit booked in 22 of the 23 weeks since launch. The system holds 16 cycles in progress, with 8 buys on 8 coins in the last 24 hours, bought as prices came down and ready for the next leg up. Over the last 7 days it completed 1 cycle, with none sold below cost. Since 21 May: 1047 cycles completed, none sold below cost. The published return is 6.49% a month on allocated funds before trading fees, at this rate 78% a year with profit taken out. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 55 (Greed), with the total market value at $2.75 trillion, down 1.11% over 24 hours, and Bitcoin's share at 59.59%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily summary of what the automated Stepgrid Hybrid system did and where the wider crypto market stands."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-20-daily",
      "capturedAt": "2026-11-12T14:36:57.382891+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-19-daily": {
    "title": "Track record: 1047 cycles completed since 21 May, none sold below cost",
    "eyebrow": "Digest archive · daily · 2026-10-19",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-19. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "Since 21 May the system has completed 1047 cycles and none sold below cost. It is holding 16 cycles in progress, bought as prices came down and ready for the next leg up. Over the last 7 days it completed 1 cycle, with none sold below cost. Profit was booked in 22 of 23 weeks since launch. The published return is 6.87% a month on allocated funds before trading fees, and at this rate 82% a year with profit taken out. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 59 (Greed), with the total market value at 2.77 trillion US dollars, up 1.05% over 24 hours, and Bitcoin's share at 60.16%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language summary of what the automated Stepgrid Hybrid system completed and what the wider crypto market looks like today."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-19-daily",
      "capturedAt": "2026-11-12T14:36:57.365671+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-18-weekly": {
    "title": "Weekly digest: profit booked in every week since launch, and not one cycle sold below cost",
    "eyebrow": "Digest archive · weekly · 2026-10-18",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-18. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "This week the system completed 20 cycles, none sold below cost, with 16 cycles in progress. Since launch, 79% of all cycles were sold within a day. The busiest week ran to 27 September with 203 cycles."
        ],
        "links": []
      },
      {
        "id": "week-review",
        "title": "Week in review",
        "body": [
          "6.88% a month on allocated funds before trading fees, at this rate 83% a year with profit taken out, or 122% reinvested monthly.",
          "Profit booked in 22 of 22 weeks since launch.",
          "1047 cycles completed since 21 May, none sold below cost.",
          "24 cycles from 21 May, 45 in June, 85 in July, 249 in August, 503 in September, the busiest month, and 141 so far in October.",
          "Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain weekly summary of what the automated Stepgrid Hybrid strategy recorded in its public track record."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-18-weekly",
      "capturedAt": "2026-11-12T14:36:57.382485+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-18-daily": {
    "title": "16 cycles in progress, and 20 cycles completed in the last 7 days with none sold below cost",
    "eyebrow": "Digest archive · daily · 2026-10-18",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-18. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system is holding 16 cycles in progress, bought as prices came down and ready for the next leg up. In the last 7 days it completed 20 cycles, and none sold below cost. Since 21 May it has completed 1047 cycles, none sold below cost. Profit was booked in 22 of 22 weeks since launch. The published return is 6.88% a month on allocated funds before trading fees, and at this rate 83% a year with profit taken out. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 53 (Neutral), the total market value is 2.75 trillion US dollars, down 0.15% over 24 hours, with Bitcoin's share at 59.49%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language record of what the automated Stepgrid Hybrid system did with its cycles, alongside today's broad market readings."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-18-daily",
      "capturedAt": "2026-11-12T14:36:57.442800+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-17-daily": {
    "title": "16 cycles in progress, and a typical cycle sold in 3.6 hours",
    "eyebrow": "Digest archive · daily · 2026-10-17",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-17. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system holds 16 cycles in progress, bought as prices came down and ready for the next leg up. A typical cycle has been sold in 3.6 hours, and 79% of all cycles since launch were sold within a day. Over the last 7 days it completed 50 cycles, none sold below cost. Since 21 May: 1047 cycles completed, none sold below cost, with a published 6.89% a month on allocated funds before trading fees — at this rate 83% a year with profit taken out. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 55 (Greed), the total market value is 2.76 trillion US dollars, down 0.8% over 24 hours, and Bitcoin's share is 59.3%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language record of what the automated Stepgrid Hybrid system did and where the market stands today."
        ],
        "links": []
      },
      {
        "id": "correction-note",
        "title": "Published correction",
        "body": [
          "Corrected 18 October 2026: the 24-hour market figure. The data source used at first read 2 to 3 points too low."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-17-daily",
      "capturedAt": "2026-11-12T14:36:57.443968+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-16-daily": {
    "title": "Profit booked in 22 of 22 weeks since launch, with 16 cycles in progress",
    "eyebrow": "Digest archive · daily · 2026-10-16",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-16. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "Profit booked in 22 of 22 weeks since launch. Right now the system holds 16 cycles in progress, bought as prices came down and ready for the next leg up. In the last 7 days it completed 61 cycles, none sold below cost. Since 21 May it has closed 1047 cycles, none sold below cost. The published return is 6.9% a month on allocated funds before trading fees, and at this rate 83% a year with profit taken out. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "The Fear & Greed index reads 63 (Greed), with the total market value at 2.78 trillion US dollars, up 1.9% over 24 hours, and Bitcoin's share at 59.26%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily summary of what the automated Stepgrid Hybrid strategy closed and holds, plus the day's broad market readings."
        ],
        "links": []
      },
      {
        "id": "correction-note",
        "title": "Published correction",
        "body": [
          "Corrected 18 October 2026: the 24-hour market figure. The data source used at first read 2 to 3 points too low."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-16-daily",
      "capturedAt": "2026-11-12T14:36:57.486726+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-15-daily": {
    "title": "16 cycles in progress, 1047 cycles closed since 21 May and none sold below cost",
    "eyebrow": "Digest archive · daily · 2026-10-15",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-15. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The system holds 16 cycles in progress, bought as prices came down, ready for the next leg up. Since 21 May it has completed 1047 cycles and not one of them sold below cost. In the last 7 days it closed 75 cycles, again none below cost. Profit was booked in 22 of 22 weeks since launch. The published return is 6.92% a month on allocated funds before trading fees, and at this rate 83% a year with profit taken out. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed is at 53 (Neutral), the total market value stands at $2.73 trillion, down 3.6% over 24 hours, with Bitcoin at 59.49% of the market."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language daily record of what the Stepgrid Hybrid system completed and what the wider market looked like today."
        ],
        "links": []
      },
      {
        "id": "correction-note",
        "title": "Published correction",
        "body": [
          "Corrected 18 October 2026: the 24-hour market figure. The data source used at first read 2 to 3 points too low."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-15-daily",
      "capturedAt": "2026-11-12T14:36:57.510149+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-14-daily": {
    "title": "76 cycles closed in the last 7 days, none sold below cost, with 16 cycles in progress",
    "eyebrow": "Digest archive · daily · 2026-10-14",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-14. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "Right now the system holds 16 cycles in progress, bought as prices came down and ready for the next leg up. Over the last 7 days it completed 76 cycles, none sold below cost. Since 21 May that is 1047 cycles completed, none sold below cost. Profit was booked in 22 of 22 weeks since launch, and the published return is 6.93% a month on allocated funds before trading fees, at this rate 83% a year with profit taken out. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 62 (Greed), the total market value is 2.8 trillion US dollars, down 0.5% over 24 hours, with Bitcoin at 59.81% of the market."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain-language summary of what the automated Stepgrid Hybrid system did and where the market stands today."
        ],
        "links": []
      },
      {
        "id": "correction-note",
        "title": "Published correction",
        "body": [
          "Corrected 18 October 2026: the 24-hour market figure. The data source used at first read 2 to 3 points too low."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-14-daily",
      "capturedAt": "2026-11-12T14:36:57.490688+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-13-daily": {
    "title": "Typical cycle 3.6 hours: 79% of cycles sold within a day, 83 closed in the last 7 days",
    "eyebrow": "Digest archive · daily · 2026-10-13",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-13. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "A typical cycle ran 3.6 hours, and 79% of all cycles since launch sold within a day. In the last 7 days the system completed 83 cycles, none sold below cost, with 17 cycles still in progress. Since 21 May the totals are 1046 cycles completed and none sold below cost. Profit was booked in 22 of 22 weeks since launch. The published return is 6.97% a month on allocated funds before trading fees, and at this rate 84% a year with profit taken out. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed reads 57 (Greed), the total market value is 2.83 trillion US dollars, down 0.9% over the last 24 hours, and Bitcoin's share is 59.18%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily summary of what the automated Stepgrid Hybrid system completed and how the wider crypto market stands today."
        ],
        "links": []
      },
      {
        "id": "correction-note",
        "title": "Published correction",
        "body": [
          "Corrected 18 October 2026: the 24-hour market figure. The data source used at first read 2 to 3 points too low."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-13-daily",
      "capturedAt": "2026-11-12T14:38:40.537273+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-12-daily": {
    "title": "Market up 1.4% in 24 hours: the system closed 19 cycles, none below cost",
    "eyebrow": "Digest archive · daily · 2026-10-12",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-12. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The total market rose 1.4% over the last 24 hours; the system completed 19 cycles in that time, 0 sold below cost, profiting from the winners such as ETHFI and STRK. In the last 7 days: 87 cycles completed, 0 sold below cost, 17 in progress. Since 21 May, 1046 cycles completed and none sold below cost. Profit booked in 22 of 22 weeks, at 6.93% a month on allocated funds before trading fees — at this rate 83% a year with profit taken out. Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Fear & Greed sits at 69 (Greed), the total market value is 2.82 trillion US dollars and Bitcoin's share is 59.52%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a short daily record of what the automated Stepgrid Hybrid system completed and where the wider market stands."
        ],
        "links": []
      },
      {
        "id": "correction-note",
        "title": "Published correction",
        "body": [
          "Corrected 18 October 2026: the 24-hour market figure. The data source used at first read 2 to 3 points too low."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-12-daily",
      "capturedAt": "2026-11-12T14:36:57.541311+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-11-weekly": {
    "title": "Weekly digest: profit booked every week since launch, and not one cycle sold below cost",
    "eyebrow": "Digest archive · weekly · 2026-10-11",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-11. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "This week the Stepgrid Hybrid system completed 81 cycles, and none of them sold below cost. Across the whole public record, 78% of all cycles have been sold within a day of buying. The busiest week so far was the 199 cycles in the week to 27 September, and 17 cycles are still running now."
        ],
        "links": []
      },
      {
        "id": "week-review",
        "title": "Week in review",
        "body": [
          "6.86% a month on allocated funds before trading fees, at this rate 82% a year with profit taken out, or 122% reinvested monthly.",
          "Profit booked in 21 of 21 weeks since launch.",
          "1027 cycles completed since 21 May, none sold below cost.",
          "Month by month: 24 from 21 May, 45 June, 85 July, 249 August, 503 September (busiest), 121 October so far.",
          "Start with a free week: noguru.io/pricing.html"
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This weekly digest sums up the public track record of the automated Stepgrid Hybrid system."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-11-weekly",
      "capturedAt": "2026-11-12T14:38:40.604407+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-11-daily": {
    "title": "Daily digest, 11 October 06:30 UTC: market up 0.4% in 24 hours, 30 cycles completed in the same day, none sold below cost",
    "eyebrow": "Digest archive · daily · 2026-10-11",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-11. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The total market rose 0.4% over the last 24 hours, and in those same 24 hours the system completed 30 cycles, 0 of which sold below cost, profiting from the winners such as STRK and INJ. Over the last 7 days the Stepgrid Hybrid strategy completed 81 cycles, and 0 of them sold below cost. There are 17 cycles still in progress. Since 21 May 2026 the system has completed 1027 cycles, with 0 sold below cost. The published return on allocated funds before trading fees is 6.86% per month."
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "Today's Fear & Greed reading is 61, labelled Greed.",
          "The total market value stands at 2.81 trillion US dollars, with Bitcoin's share at 59.17%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily summary of what the automated Stepgrid Hybrid system did and what the wider market looked like at the time of writing."
        ],
        "links": []
      },
      {
        "id": "correction-note",
        "title": "Published correction",
        "body": [
          "Corrected 18 October 2026: the 24-hour market figure. The data source used at first read 2 to 3 points too low."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-11-daily",
      "capturedAt": "2026-11-12T14:38:40.678038+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-10-daily": {
    "title": "Daily digest, 10 October 06:30 UTC: market up 0.5% in 24 hours, 11 cycles completed in the same day, none sold below cost",
    "eyebrow": "Digest archive · daily · 2026-10-10",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-10. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "The total market value rose 0.5% over the last 24 hours. In those same 24 hours the system completed 11 cycles, and none of them sold below cost. The coins closed in profit were ASTER, DYDX, JUP, ONDO, STRK and WLD. Over the last 7 days the system completed 68 cycles, with none sold below cost, and 17 cycles are still in progress. Since 21 May 2026 it has completed 997 cycles, none of which sold below cost. The published return on allocated funds before trading fees is 5.14% per month."
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "The Fear & Greed index reads 64, labelled Greed.",
          "The total market value stands at 2.81 trillion US dollars, with Bitcoin at 59.1% of it."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily summary of what the automated Stepgrid Hybrid system did and where the wider crypto market stands."
        ],
        "links": []
      },
      {
        "id": "correction-note",
        "title": "Published correction",
        "body": [
          "Corrected 18 October 2026: the 24-hour market figure. The data source used at first read 2 to 3 points too low."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-10-daily",
      "capturedAt": "2026-11-12T14:38:40.764009+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-09-daily": {
    "title": "Daily digest, 09 October 06:30 UTC: 69 cycles completed in the last 7 days, none sold below cost, 17 still in progress",
    "eyebrow": "Digest archive · daily · 2026-10-09",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-09. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "In the last 7 days the Stepgrid Hybrid strategy completed 69 cycles. Of those, 0 were sold below cost. Another 17 cycles are still in progress. Since the start date of 2026-05-21, the system has completed 986 cycles in total, with 0 sold below cost. The published return on allocated funds, before trading fees, is 5.12% per month. A cycle means one or more buys of a coin that are sold together. Figures come from the public track record at noguru.io/track-record.html."
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "The Fear & Greed Index reads 59 today, labelled Greed.",
          "Total market value stands at 2.8 trillion US dollars, down 1.0% over 24 hours, with Bitcoin's share at 59.06%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a short daily summary of what the automated Stepgrid Hybrid system did over the past week, plus a snapshot of overall market conditions."
        ],
        "links": []
      },
      {
        "id": "correction-note",
        "title": "Published correction",
        "body": [
          "Corrected 18 October 2026: the 24-hour market figure. The data source used at first read 2 to 3 points too low."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-09-daily",
      "capturedAt": "2026-11-12T14:38:40.836688+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest-2026-10-08-daily": {
    "title": "Daily digest, 08 October 06:30 UTC: 63 cycles completed in the last 7 days, none sold below cost, 17 still in progress",
    "eyebrow": "Digest archive · daily · 2026-10-08",
    "intro": "The available original public entry, preserved with its date and source scope.",
    "kind": "digest-entry",
    "sections": [
      {
        "id": "context",
        "title": "A dated publication, not today’s account",
        "body": [
          "The original wording and figures below belong to 2026-10-08. Older entries use different source populations and cutoffs. Completed-cycle figures do not establish whole-account returns; reported short durations exclude positions still waiting. Historical offers and recovery language are not current terms or promises."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current costs and setup",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "body": [
          "In the last 7 days the system completed 63 cycles with the Stepgrid Hybrid strategy. Of those, 0 sold below cost. A further 17 cycles are in progress. Since 2026-05-21, the system has completed 972 cycles, of which 0 sold below cost. The published return on allocated funds before trading fees is 5.04% per month. Figures come from the public track record at noguru.io/track-record.html."
        ],
        "links": []
      },
      {
        "id": "market-picture",
        "title": "Market picture",
        "body": [
          "The Fear & Greed reading today is 64, labelled Greed.",
          "Total market value stands at 2.82 trillion US dollars, down 2.0% over 24 hours, with Bitcoin's share at 58.74%."
        ],
        "links": []
      },
      {
        "id": "novice-note",
        "title": "Publication note",
        "body": [
          "This digest is a plain daily summary of what the automated system completed and where the wider crypto market stands today."
        ],
        "links": []
      },
      {
        "id": "correction-note",
        "title": "Published correction",
        "body": [
          "Corrected 18 October 2026: the 24-hour market figure. The data source used at first read 2 to 3 points too low."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digest/2026-10-08-daily",
      "capturedAt": "2026-11-12T14:38:40.898283+00:00",
      "scope": "Dated public commentary, not a customer account or a fresh report generated by this preview."
    }
  },
  "digest": {
    "title": "Read the dated digest archive.",
    "eyebrow": "39 public entries · captured 12 November 2026",
    "intro": "Every entry listed by the captured public index is available here. These are dated publications, not newly generated reports or your account.",
    "kind": "digest-index",
    "sections": [
      {
        "id": "dates",
        "title": "Keep dates and source populations together",
        "body": [
          "Coverage dates describe a result’s period. Observation or generation time describes when it was measured or built. Fetch time is when the browser received it. Older digests may use different start dates and cutoffs; do not merge them into a new performance series."
        ],
        "links": [
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Current market context and episodes",
            "url": "?page=market"
          }
        ]
      },
      {
        "id": "2026-11-12-daily",
        "title": "2026-11-12 · daily",
        "body": [
          "1048 cycles completed since 1 August, 2 sold below cost, 20 more in progress"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-12-daily"
          }
        ]
      },
      {
        "id": "2026-11-11-daily",
        "title": "2026-11-11 · daily",
        "body": [
          "26 cycles closed in the last 7 days, none sold below cost, 20 more in progress"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-11-daily"
          }
        ]
      },
      {
        "id": "2026-11-10-daily",
        "title": "2026-11-10 · daily",
        "body": [
          "Typical cycle 4.0 hours: 79% of all cycles since launch sold within a day"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-10-daily"
          }
        ]
      },
      {
        "id": "2026-11-09-daily",
        "title": "2026-11-09 · daily",
        "body": [
          "Market down 2.26% in 24 hours: the system closed 2 cycles, none below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-09-daily"
          }
        ]
      },
      {
        "id": "2026-11-08-weekly",
        "title": "2026-11-08 · weekly",
        "body": [
          "Weekly digest: profit booked in nearly every week since launch, and barely a cycle sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-08-weekly"
          }
        ]
      },
      {
        "id": "2026-11-08-daily",
        "title": "2026-11-08 · daily",
        "body": [
          "1040 cycles since 1 August, just 2 sold below cost, 20 in progress today"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-08-daily"
          }
        ]
      },
      {
        "id": "2026-11-07-daily",
        "title": "2026-11-07 · daily",
        "body": [
          "Last 7 days: the system closed 20 cycles, none sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-07-daily"
          }
        ]
      },
      {
        "id": "2026-11-06-daily",
        "title": "2026-11-06 · daily",
        "body": [
          "Market down 5.49% in 24 hours: the system closed 4 cycles, none below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-06-daily"
          }
        ]
      },
      {
        "id": "2026-11-05-daily",
        "title": "2026-11-05 · daily",
        "body": [
          "Profit booked in 14 of 15 weeks since launch, with 23 cycles completed in the last 7 days"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-05-daily"
          }
        ]
      },
      {
        "id": "2026-11-04-daily",
        "title": "2026-11-04 · daily",
        "body": [
          "1021 cycles completed since 1 August, 2 sold below cost, with 20 cycles in progress"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-04-daily"
          }
        ]
      },
      {
        "id": "2026-11-03-daily",
        "title": "2026-11-03 · daily",
        "body": [
          "This week: 26 cycles completed, none sold below cost, and 20 cycles in progress"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-03-daily"
          }
        ]
      },
      {
        "id": "2026-11-02-daily",
        "title": "2026-11-02 · daily",
        "body": [
          "Fast cycles: typical 3.8 hours, with 20 cycles in progress and 5 fresh buys"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-02-daily"
          }
        ]
      },
      {
        "id": "2026-11-01-weekly",
        "title": "2026-11-01 · weekly",
        "body": [
          "Weekly digest: 1021 cycles completed since launch, 2 sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-01-weekly"
          }
        ]
      },
      {
        "id": "2026-11-01-daily",
        "title": "2026-11-01 · daily",
        "body": [
          "Profit booked in 13 of the 14 weeks since launch"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-11-01-daily"
          }
        ]
      },
      {
        "id": "2026-10-30-daily",
        "title": "2026-10-30 · daily",
        "body": [
          "This week: 28 cycles completed in the last 7 days, none sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-30-daily"
          }
        ]
      },
      {
        "id": "2026-10-29-daily",
        "title": "2026-10-29 · daily",
        "body": [
          "Speed first: the typical cycle ran 3.8 hours, with 19 cycles closed in the last 7 days"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-29-daily"
          }
        ]
      },
      {
        "id": "2026-10-28-daily",
        "title": "2026-10-28 · daily",
        "body": [
          "Profit booked in 13 of 14 weeks since launch"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-28-daily"
          }
        ]
      },
      {
        "id": "2026-10-27-daily",
        "title": "2026-10-27 · daily",
        "body": [
          "995 cycles closed since 1 August, 2 sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-27-daily"
          }
        ]
      },
      {
        "id": "2026-10-26-daily",
        "title": "2026-10-26 · daily",
        "body": [
          "30 cycles closed in the last 7 days, none sold below cost, with 20 more in progress"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-26-daily"
          }
        ]
      },
      {
        "id": "2026-10-25-weekly",
        "title": "2026-10-25 · weekly",
        "body": [
          "Weekly digest: profit booked in 12 of 13 weeks since launch, 988 cycles completed"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-25-weekly"
          }
        ]
      },
      {
        "id": "2026-10-25-daily",
        "title": "2026-10-25 · daily",
        "body": [
          "20 cycles in progress and ready for the next leg up; a typical cycle closes in 3.8 hours"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-25-daily"
          }
        ]
      },
      {
        "id": "2026-10-24-daily",
        "title": "2026-10-24 · daily",
        "body": [
          "17 cycles in progress and ready for the next leg up; profit booked in 23 of 23 weeks since launch"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-24-daily"
          }
        ]
      },
      {
        "id": "2026-10-23-daily",
        "title": "2026-10-23 · daily",
        "body": [
          "15 cycles in progress and ready for the next leg up; 1048 cycles since launch, none sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-23-daily"
          }
        ]
      },
      {
        "id": "2026-10-21-daily",
        "title": "2026-10-21 · daily",
        "body": [
          "Fast turnaround: a typical cycle closes in 3.6 hours, and 78% sold within a day"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-21-daily"
          }
        ]
      },
      {
        "id": "2026-10-20-daily",
        "title": "2026-10-20 · daily",
        "body": [
          "Profit booked in 22 of the 23 weeks since launch, and no cycle sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-20-daily"
          }
        ]
      },
      {
        "id": "2026-10-19-daily",
        "title": "2026-10-19 · daily",
        "body": [
          "Track record: 1047 cycles completed since 21 May, none sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-19-daily"
          }
        ]
      },
      {
        "id": "2026-10-18-weekly",
        "title": "2026-10-18 · weekly",
        "body": [
          "Weekly digest: profit booked in every week since launch, and not one cycle sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-18-weekly"
          }
        ]
      },
      {
        "id": "2026-10-18-daily",
        "title": "2026-10-18 · daily",
        "body": [
          "16 cycles in progress, and 20 cycles completed in the last 7 days with none sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-18-daily"
          }
        ]
      },
      {
        "id": "2026-10-17-daily",
        "title": "2026-10-17 · daily",
        "body": [
          "16 cycles in progress, and a typical cycle sold in 3.6 hours"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-17-daily"
          }
        ]
      },
      {
        "id": "2026-10-16-daily",
        "title": "2026-10-16 · daily",
        "body": [
          "Profit booked in 22 of 22 weeks since launch, with 16 cycles in progress"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-16-daily"
          }
        ]
      },
      {
        "id": "2026-10-15-daily",
        "title": "2026-10-15 · daily",
        "body": [
          "16 cycles in progress, 1047 cycles closed since 21 May and none sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-15-daily"
          }
        ]
      },
      {
        "id": "2026-10-14-daily",
        "title": "2026-10-14 · daily",
        "body": [
          "76 cycles closed in the last 7 days, none sold below cost, with 16 cycles in progress"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-14-daily"
          }
        ]
      },
      {
        "id": "2026-10-13-daily",
        "title": "2026-10-13 · daily",
        "body": [
          "Typical cycle 3.6 hours: 79% of cycles sold within a day, 83 closed in the last 7 days"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-13-daily"
          }
        ]
      },
      {
        "id": "2026-10-12-daily",
        "title": "2026-10-12 · daily",
        "body": [
          "Market up 1.4% in 24 hours: the system closed 19 cycles, none below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-12-daily"
          }
        ]
      },
      {
        "id": "2026-10-11-weekly",
        "title": "2026-10-11 · weekly",
        "body": [
          "Weekly digest: profit booked every week since launch, and not one cycle sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-11-weekly"
          }
        ]
      },
      {
        "id": "2026-10-11-daily",
        "title": "2026-10-11 · daily",
        "body": [
          "Daily digest, 11 October 06:30 UTC: market up 0.4% in 24 hours, 30 cycles completed in the same day, none sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-11-daily"
          }
        ]
      },
      {
        "id": "2026-10-10-daily",
        "title": "2026-10-10 · daily",
        "body": [
          "Daily digest, 10 October 06:30 UTC: market up 0.5% in 24 hours, 11 cycles completed in the same day, none sold below cost"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-10-daily"
          }
        ]
      },
      {
        "id": "2026-10-09-daily",
        "title": "2026-10-09 · daily",
        "body": [
          "Daily digest, 09 October 06:30 UTC: 69 cycles completed in the last 7 days, none sold below cost, 17 still in progress"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-09-daily"
          }
        ]
      },
      {
        "id": "2026-10-08-daily",
        "title": "2026-10-08 · daily",
        "body": [
          "Daily digest, 08 October 06:30 UTC: 63 cycles completed in the last 7 days, none sold below cost, 17 still in progress"
        ],
        "links": [
          {
            "label": "Read this dated entry",
            "url": "?page=digest-2026-10-08-daily"
          }
        ]
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/api/public/digests",
      "capturedAt": "2026-11-12T14:36:56.708614+00:00",
      "scope": "Complete captured index; no automatic future-archive update is promised."
    }
  },
  "source-glossary": {
    "title": "Original public glossary wording.",
    "eyebrow": "Captured source edition · 42 terms",
    "intro": "Original definitions preserved for traceability. The current glossary corrects cycle guarantees, stop-loss certainty and current-product scope.",
    "kind": "historical-source",
    "sections": [
      {
        "id": "cycle",
        "title": "Cycle",
        "body": [
          "One or more buys on a coin, sold together at a gain. A cycle starts with the first buy, may add lower buys as the price falls, and completes when the whole lot is sold above its average cost.",
          "Why it matters: It is the unit Stepgrid's track record counts: cycles completed, cycles in progress. A rung (one buy) is not a result; the cycle is."
        ],
        "links": []
      },
      {
        "id": "ladder-rung",
        "title": "Ladder / rung",
        "body": [
          "The set of buy prices for one coin, posted in up to five signals, each part lower than the last. One buy is a rung; the whole set is the ladder.",
          "Why it matters: The lower rungs only fill if the price falls, so a ladder needs money kept in reserve for them — that reserve is what buys the dip."
        ],
        "links": []
      },
      {
        "id": "dca-grid",
        "title": "DCA / grid",
        "body": [
          "Dollar-cost averaging: buying in fixed steps as price falls, at pre-planned levels (a 'grid' or 'ladder') decided before price is known, then selling the whole stack at one target.",
          "Why it matters: It converts volatility itself into the source of profit, with no prediction of direction required — at the cost of capital sitting tied up during drawdowns."
        ],
        "links": []
      },
      {
        "id": "signal",
        "title": "Signal",
        "body": [
          "Our signal is a message: the coin, the buy prices of the ladder and the sale target. Cornix reads it and places the orders.",
          "Why it matters: Everything in it is a price known at the moment it is posted, so a signal can be checked afterwards against what actually happened — that is what makes the track record possible."
        ],
        "links": []
      },
      {
        "id": "cornix",
        "title": "Cornix",
        "body": [
          "A widely used bot that reads signals from Telegram channels and automatically executes them on your own exchange account through API keys you control.",
          "Why it matters: It trades for you around the clock, on your own exchange account. The access it needs should always be trade-only, never withdrawal-enabled."
        ],
        "links": []
      },
      {
        "id": "api-key",
        "title": "API key",
        "body": [
          "Credentials an exchange issues so a program — a trading bot, for instance — can act on an account without a password, placing and managing orders on your behalf.",
          "Why it matters: Exchanges let a key's permissions be scoped narrowly. A trade-only key can place and close orders; a key with withdrawal permission enabled can move funds off the exchange entirely. Those are very different risk levels, and a key connected to any signal bot should never have withdrawals enabled."
        ],
        "links": []
      },
      {
        "id": "compounding",
        "title": "Compounding",
        "body": [
          "Growth applied to a base that already includes prior gains or losses — each period multiplies the account rather than adding to it. An account experiences the product of its returns over time, not their average.",
          "Why it matters: One very bad period permanently cancels multiplication that came before it: a single ×0 in the chain zeroes everything after it, no matter how strong the earlier periods were. It's the arithmetic reason surviving is treated as a precondition for growing, not a separate goal.",
          "Free lesson: Survive first: compounding needs a survivor"
        ],
        "links": [
          {
            "label": "Survive first: compounding needs a survivor",
            "url": "?page=academy-survive-first"
          }
        ]
      },
      {
        "id": "drawdown",
        "title": "Drawdown",
        "body": [
          "The decline from an account's equity peak to the lowest point that follows, usually expressed in percent. Because percentage losses and gains aren't symmetric, the gain needed to recover is always larger than the loss: required gain = drawdown ÷ (1 − drawdown).",
          "Why it matters: A 10% loss needs +11% back; a 50% loss needs +100%; a 90% loss needs +900%. Drawdown, not any single bad trade, is what actually forces people to abandon strategies — position sizing exists to keep it on the shallow part of that curve.",
          "Free lesson: The arithmetic of losses"
        ],
        "links": [
          {
            "label": "The arithmetic of losses",
            "url": "?page=academy-arithmetic-of-losses"
          }
        ]
      },
      {
        "id": "backtest",
        "title": "Backtest",
        "body": [
          "Running a trading strategy's rules against historical price data to see how it would have performed, before any live signal is published from it.",
          "Why it matters: A backtest can show a rule was consistent with the past; it cannot prove the future will resemble it. Costs, slippage and look-ahead bias — accidentally using information that wasn't actually available at the time — are the most common ways a backtest overstates what a live version would do.",
          "How a strategy gets validated before it reaches a channel"
        ],
        "links": [
          {
            "label": "How a strategy gets validated before it reaches a channel",
            "url": "?page=methodology"
          }
        ]
      },
      {
        "id": "spot-vs-futures",
        "title": "Spot, futures & perpetuals",
        "body": [
          "Spot means buying the actual coin — it can sit on the exchange or move to your own wallet, nothing about it expires, and the worst case is the price going to zero. A future is a contract that tracks a coin's price without you owning the coin; traditional futures carry an expiry date, which is the mechanism that forces the contract price and the real price back together. A perpetual future (\"perp\") is a future with the expiry deleted — it can be held forever, and a recurring payment called funding does the job the expiry date used to do.",
          "Why it matters: Leverage, shorting and liquidation exist only on the contract side of that list. Spot is slow and survivable by construction — no leverage, no liquidation price — which is why it suits someone still learning.",
          "Common misconception: \"Futures\" doesn't mean a riskier coin. It's the same coin wrapped in a different contract, with a different set of rules for how far and how fast you can lose.",
          "Free lesson: Spot, futures, perpetuals: what you're actually buying"
        ],
        "links": [
          {
            "label": "Spot, futures, perpetuals: what you're actually buying",
            "url": "?page=academy-spot-futures-perps"
          }
        ]
      },
      {
        "id": "long-short",
        "title": "Long / Short",
        "body": [
          "Long means betting a price rises: buy now, aim to sell higher later. Short means betting it falls — on futures, you can sell borrowed exposure first and buy it back cheaper, profiting from the drop.",
          "Why it matters: Shorting makes the down half of the market tradeable. Without it, the only way to make money is a move up."
        ],
        "links": []
      },
      {
        "id": "funding-rate",
        "title": "Funding rate",
        "body": [
          "A payment exchanged every 8 hours between long and short holders of a perpetual future, sized as a small percentage of position value. It exists because perpetuals never expire, so nothing else forces their price back to the real (spot) price: when the perp trades above spot, longs pay shorts; when it trades below, shorts pay longs.",
          "Why it matters: The size of the rate is a real-money read on crowding. The more extreme it is, the more one side is paying to stay in the trade — and the more lopsided that side of the market has become.",
          "Common misconception: Positive funding is not a sell signal by itself. It's normal, sometimes for months, in a genuinely rising market — a crowding gauge, most informative at its extremes, and even extremes resolve more than one way.",
          "Free lesson: Funding: the price of a crowded trade"
        ],
        "links": [
          {
            "label": "Funding: the price of a crowded trade",
            "url": "?page=academy-funding-rates"
          }
        ]
      },
      {
        "id": "open-interest",
        "title": "Open interest (OI)",
        "body": [
          "The total number of futures contracts currently open on a market. Every contract pairs one long with one short, so OI counts live pairs of opposing bets: it rises when a new buyer meets a new seller, and falls when an existing long and an existing short both close.",
          "Why it matters: Price alone tells you what happened; price next to OI tells you who did it. A rally on rising OI is new money opening longs; the same rally on falling OI is shorts buying their way out (short covering) — different fuel, a different tendency afterwards.",
          "Free lesson: Open interest: reading who's in the pool"
        ],
        "links": [
          {
            "label": "Open interest: reading who's in the pool",
            "url": "?page=academy-open-interest"
          }
        ]
      },
      {
        "id": "long-short-ratio",
        "title": "Long/short ratio",
        "body": [
          "The share of futures accounts on an exchange currently positioned long versus short, usually shown as a ratio like 1.8:1.",
          "Why it matters: A crowding gauge, same family as funding: when almost everyone is already long, there is little fresh buying left to push price further, and cascades trigger more easily.",
          "Common misconception: A lopsided ratio is not a standalone reversal trigger — it reads best alongside funding and open interest, not on its own."
        ],
        "links": []
      },
      {
        "id": "liquidation-flush",
        "title": "Liquidation cascade (flush)",
        "body": [
          "A chain reaction where leveraged positions are force-closed one after another. A liquidation is not a warning — it is an automatic market order placed by the exchange at whatever price is available, and that forced trade pushes price further, reaching the next tier of leveraged positions in turn.",
          "Why it matters: The moves it produces overshoot because the selling (or buying) is forced, not chosen: nobody in the chain is weighing value, and order books are thinnest exactly when the flow is heaviest. The same mechanic running upward against shorts is a short squeeze.",
          "Free lesson: Liquidation cascades: how crypto really moves"
        ],
        "links": [
          {
            "label": "Liquidation cascades: how crypto really moves",
            "url": "?page=academy-liquidation-cascades"
          }
        ]
      },
      {
        "id": "cme-gap",
        "title": "CME gap",
        "body": [
          "Historical — CME moved to 24/7 crypto trading on 2026-05-29, so these no longer form. CME is a regulated US futures exchange. Until that date its crypto futures closed over the weekend while crypto itself carried on trading, so Monday's CME chart opened away from Friday's close — that distance was the gap. The unfilled ones from before the cutover are still real price levels, but the phenomenon itself is finished.",
          "Why it matters: Enough traders watch these levels that they are worth knowing about. But the widely-quoted fill rates trace back to articles that do not contain the numbers they are credited with, so measure rather than repeat: on our own history most gaps were eventually revisited — and price revisits ANY level that distance away roughly half the time anyway, purely from ordinary volatility. The gap is a level of interest, not a magnet.",
          "Common misconception: 'Usually fills' is not 'guaranteed to fill soon', and it is not an edge. Some gaps stay open for months, and a fill rate quoted without its baseline tells you almost nothing.",
          "Free lesson: Weekend drift: what happens when the market reopens"
        ],
        "links": [
          {
            "label": "Weekend drift: what happens when the market reopens",
            "url": "?page=academy-weekend-drift"
          }
        ]
      },
      {
        "id": "fear-greed",
        "title": "Fear & Greed Index",
        "body": [
          "A 0-100 crypto sentiment index (alternative.me) combining volatility, volume, social activity and dominance. 0 = extreme fear, 100 = extreme greed.",
          "Why it matters: Useful mainly at the extremes, as contrarian context rather than a trade trigger on its own."
        ],
        "links": []
      },
      {
        "id": "btc-dominance",
        "title": "BTC dominance",
        "body": [
          "Bitcoin's share of the total crypto market capitalization.",
          "Why it matters: Rising dominance usually means money concentrating in the biggest, most liquid asset; falling dominance typically accompanies broader altcoin strength."
        ],
        "links": []
      },
      {
        "id": "market-neutral-basket",
        "title": "Market-neutral basket",
        "body": [
          "A basket trade that goes long a group of relatively stronger assets and short a group of relatively weaker ones at the same time, sized so a broad market move up or down mostly cancels out between the two sides.",
          "Why it matters: Ordinary spreading across several coins isn't automatically diversified — in a crypto sell-off, correlations rise toward one, and several separate long positions can behave like a single leveraged bet on 'crypto up.' Pairing longs with shorts is one of the few structures that actually reduces that shared exposure.",
          "Free lesson: Five alt longs is one bet"
        ],
        "links": [
          {
            "label": "Five alt longs is one bet",
            "url": "?page=academy-correlation-one-bet"
          }
        ]
      },
      {
        "id": "leverage",
        "title": "Leverage",
        "body": [
          "Trading with borrowed exposure: at 10X, $1,000 of your own money (the margin) controls a $10,000 position. Gains and losses are computed on the full $10,000, not the $1,000 posted — profit and loss are both multiplied relative to the stake.",
          "Why it matters: Leverage is the single biggest lever on how fast a losing streak can end an account. The higher it goes, the smaller the adverse move needed to wipe the margin — roughly 100 ÷ leverage, in percent.",
          "Common misconception: Higher leverage is not a 'more confident' or 'better' version of a trade. It changes only how much a given price move costs you — never whether the trade is right.",
          "Free lesson: Leverage, liquidation, and an ordinary Tuesday"
        ],
        "links": [
          {
            "label": "Leverage, liquidation, and an ordinary Tuesday",
            "url": "?page=academy-leverage-and-liquidation"
          }
        ]
      },
      {
        "id": "isolated-margin",
        "title": "Isolated margin",
        "body": [
          "A margin mode where each position has its own walled-off collateral. When a position's losses eat that collateral, only that position is force-closed (liquidated) — the rest of the account is untouched.",
          "Why it matters: It caps the damage of any single bad trade at that trade's own margin. The alternative, cross margin, lets a losing position draw on the entire futures wallet — including the margin behind healthy, unrelated positions — until nothing is left.",
          "Common misconception: Cross margin isn't the 'safer' choice because liquidations happen less often under it. That's the trap: it converts many small, survivable failures into one rare, total one.",
          "Free lesson: Margin: isolated vs cross"
        ],
        "links": [
          {
            "label": "Margin: isolated vs cross",
            "url": "?page=academy-margin-isolated-vs-cross"
          }
        ]
      },
      {
        "id": "maintenance-margin",
        "title": "Maintenance margin",
        "body": [
          "The minimum collateral a leveraged position must keep to stay open. Losses eat the margin down toward this floor; once they cross it, the exchange liquidates the position — slightly before the collateral technically reaches zero.",
          "Why it matters: It's why 'distance to liquidation ≈ 100 ÷ leverage' is a rough upper bound, not exact: maintenance margin shortens the real distance a little further."
        ],
        "links": []
      },
      {
        "id": "hedge-mode",
        "title": "Hedge mode",
        "body": [
          "A futures account mode that allows one long AND one short position on the same trading pair at the same time, tracked as separate slots instead of netting into one.",
          "Why it matters: It lets a short-term short coexist with a longer-term long on the same coin instead of the two cancelling out. Only a second position in the same direction is blocked, because it would simply merge with the first."
        ],
        "links": []
      },
      {
        "id": "stop-loss",
        "title": "Stop loss (SL)",
        "body": [
          "A price set in advance at which a losing position closes automatically, capping the loss at a known amount before the trade is ever placed.",
          "Why it matters: The stop is the trade's maximum planned loss, and it's the number a position-sizing calculation needs (risk fraction ÷ stop distance = size). A signal without a stop isn't a plan — it's a hope.",
          "Free lesson: Fixed-fractional sizing: the 1-2% idea"
        ],
        "links": [
          {
            "label": "Fixed-fractional sizing: the 1-2% idea",
            "url": "?page=academy-risk-per-trade"
          }
        ]
      },
      {
        "id": "take-profit",
        "title": "Take profit (TP)",
        "body": [
          "A price set in advance at which a winning position closes automatically, usually sized as a multiple of the stop distance — which is what fixes the trade's reward-to-risk ratio before entry.",
          "Why it matters: Deciding the exit before entry removes the least reliable decision-maker in trading: you, mid-trade, watching the number move."
        ],
        "links": []
      },
      {
        "id": "position-sizing",
        "title": "Position sizing",
        "body": [
          "How much of an account is committed to a single trade. Fixed-fractional sizing sets it by fixing the dollar risk first — a small percentage of the account, commonly 1-2% — then computing size backward from the stop distance: position size = (account × risk fraction) ÷ stop distance.",
          "Why it matters: The size setting, more than entry quality, decides whether a losing streak is survivable. The same run of losses that a 1%-risk account shrugs off can put a 10%-risk account down by more than half — identical trades, identical luck, only the size differs.",
          "Free lesson: Fixed-fractional sizing: the 1-2% idea"
        ],
        "links": [
          {
            "label": "Fixed-fractional sizing: the 1-2% idea",
            "url": "?page=academy-risk-per-trade"
          }
        ]
      },
      {
        "id": "portfolio-heat",
        "title": "Portfolio heat",
        "body": [
          "The sum of what every open position would lose if all of its stops were hit today, expressed as a percentage of the account. Per-trade sizing caps each position's own risk; nothing caps the total unless heat gets its own limit.",
          "Why it matters: Five careful 2%-risk positions add up to a 10% day before correlation even enters the picture. An account experiences totals, even when every position was individually sized as 'small.'",
          "Free lesson: Portfolio heat: your real position is the sum"
        ],
        "links": [
          {
            "label": "Portfolio heat: your real position is the sum",
            "url": "?page=academy-portfolio-heat"
          }
        ]
      },
      {
        "id": "correlation",
        "title": "Correlation",
        "body": [
          "How much two assets' prices move together. In calm markets, crypto coins can look loosely correlated — different news, different communities. Under stress, correlations tend to move toward one: when Bitcoin drops hard, most coins drop with it, usually harder.",
          "Why it matters: A handful of altcoin longs isn't automatically diversified. On the day diversification would have paid off, it typically disappears, and the group behaves like one large leveraged bet on 'crypto up' rather than several independent decisions.",
          "Free lesson: Five alt longs is one bet"
        ],
        "links": [
          {
            "label": "Five alt longs is one bet",
            "url": "?page=academy-correlation-one-bet"
          }
        ]
      },
      {
        "id": "sizing-down",
        "title": "Sizing down",
        "body": [
          "Cutting position size — temporarily and deliberately — in response to a preset trigger: a drawdown threshold, a run of consecutive losses, a new or untested system, or a market it wasn't built for.",
          "Why it matters: It's the one risk defense that costs nothing, needs no forecast, and is reversible the moment conditions change. Halving the risk fraction roughly doubles how long a losing streak can run before a drawdown budget is spent.",
          "Free lesson: Sizing down: the only free defense"
        ],
        "links": [
          {
            "label": "Sizing down: the only free defense",
            "url": "?page=academy-when-to-size-down"
          }
        ]
      },
      {
        "id": "atr",
        "title": "ATR (Average True Range)",
        "body": [
          "A measure of how far an asset typically moves per bar (candle), averaged over recent history — one ATR is roughly 'a normal move' for that asset on that timeframe.",
          "Why it matters: Saying a move is '3 ATR' works across coins with completely different price scales; it turns 'big move' from a subjective impression into a number that's comparable across markets."
        ],
        "links": []
      },
      {
        "id": "ema",
        "title": "EMA (Exponential Moving Average)",
        "body": [
          "An average of recent closing prices that weights the newest prices more heavily than older ones, drawn as a smoothed line on a chart.",
          "Why it matters: Price sitting above a rising EMA is the simplest widely used definition of an uptrend — a building block other trend reads are constructed from, not a signal by itself."
        ],
        "links": []
      },
      {
        "id": "timeframe",
        "title": "Timeframe",
        "body": [
          "The period each candle (bar) on a chart represents — 15 minutes, 1 hour, 4 hours, a day, a week. The same coin, at the same moment, can show a downtrend on one timeframe and an uptrend on another without either chart being wrong.",
          "Why it matters: Conflicting reads across timeframes are the normal state of a market, not an error to resolve — a pullback inside a larger uptrend genuinely is a downtrend on a smaller one. Picking a home timeframe and treating the rest as context (never switching mid-trade to make a losing position look better) is the practical discipline.",
          "Free lesson: Timeframes: one market, many stories"
        ],
        "links": [
          {
            "label": "Timeframes: one market, many stories",
            "url": "?page=academy-timeframes"
          }
        ]
      },
      {
        "id": "trend-vs-range",
        "title": "Trend vs range (market regime)",
        "body": [
          "The two broad states a market spends its time in. In a trend, price moves directionally and pullbacks stay shallow; in a range, price oscillates around an anchor and pushes toward the edges tend to stall and rotate back.",
          "Why it matters: Every strategy is effectively built for one of the two — trend tools need price to keep going, range tools need it to come back — and running one in the other's market is a common, purely structural way to lose, independent of execution quality.",
          "Free lesson: Trend or range: the first question"
        ],
        "links": [
          {
            "label": "Trend or range: the first question",
            "url": "?page=academy-trend-vs-range"
          }
        ]
      },
      {
        "id": "support-resistance",
        "title": "Support & resistance (zone)",
        "body": [
          "A price area where buying or selling interest tends to cluster — a prior swing low, a round number, an old high many people bought near. It's a band, not a single price, because the decisions that create it don't all land on one tick.",
          "Why it matters: Treating a zone as an exact line manufactures false precision: a stop parked exactly at the line sits at the point of maximum ambiguity, right where ordinary overshoot lives. A zone marks where a reaction would be informative — not a promise that one is coming.",
          "Common misconception: A tested level that gets 'broken' by a hair and then reverses isn't a failed level — it's a line drawn where a zone should have been.",
          "Free lesson: Support and resistance are zones, not lines"
        ],
        "links": [
          {
            "label": "Support and resistance are zones, not lines",
            "url": "?page=academy-zones-not-lines"
          }
        ]
      },
      {
        "id": "technical-analysis",
        "title": "Technical analysis (TA)",
        "body": [
          "Reading price charts and derived indicators to structure a trading decision. It does not predict the future — most classic chart folklore, tested honestly against real data, does little or nothing, and some of it runs backwards from its popular version.",
          "Why it matters: What it reliably does: gives a non-arbitrary place for a stop (which makes sizing computable at all), makes the same chart read the same way every time (so results are reviewable), and gives shared landmarks that enough participants watch to make reactions near them at least explicable.",
          "Free lesson: What technical analysis can and cannot do"
        ],
        "links": [
          {
            "label": "What technical analysis can and cannot do",
            "url": "?page=academy-what-ta-can-do"
          }
        ]
      },
      {
        "id": "sample-size",
        "title": "Sample size (small-sample risk)",
        "body": [
          "How many trades (or months) a result is based on. Ten trades from a genuinely working method can still show a losing stretch, and a losing method can produce a great-looking ten-trade run — purely from ordinary variance, with no change in the underlying edge.",
          "Why it matters: Verdicts about whether a method works need hundreds of trades, not tens. A screenshot, a hot week, or a single bad month proves close to nothing about the underlying edge by itself.",
          "Free lesson: Ten trades tell you nothing"
        ],
        "links": [
          {
            "label": "Ten trades tell you nothing",
            "url": "?page=academy-variance-and-sample-size"
          }
        ]
      },
      {
        "id": "losing-streak",
        "title": "Losing streak",
        "body": [
          "A run of consecutive losing trades, or a losing month. Every real trading method produces them — a working, unchanged system with a genuine edge still finishes a meaningful share of its own short stretches in the red, by variance alone.",
          "Why it matters: A losing streak by itself is not evidence a method has stopped working — but it is exactly the moment the strongest urge to override or abandon the rules shows up, and overriding at that point replaces a system with a track record for one that has none.",
          "Free lesson: Losing months, and following a system you didn't invent"
        ],
        "links": [
          {
            "label": "Losing months, and following a system you didn't invent",
            "url": "?page=academy-losing-months"
          }
        ]
      },
      {
        "id": "expectancy",
        "title": "Expectancy",
        "body": [
          "The average result a trading method produces per trade, combining how often it wins with how much it wins and loses by: (win rate × average win) − (loss rate × average loss), measured in R (see R-multiple). It's the actual scorecard for a method — win rate alone is not.",
          "Why it matters: A system that wins 4 trades in 10 with large winners can out-earn one that wins 7 in 10 with small ones. Frequency of being right is a different question from profitability, and the two can point in opposite directions.",
          "Free lesson: Expectancy: why win rate isn't the score"
        ],
        "links": [
          {
            "label": "Expectancy: why win rate isn't the score",
            "url": "?page=academy-expectancy"
          }
        ]
      },
      {
        "id": "r-multiple",
        "title": "R-multiple",
        "body": [
          "A trade's result expressed as a multiple of what was risked on it, rather than in dollars or percent. If a trade's stop-loss defines $100 of risk, a trade that hits its stop is −1R; a trade that makes $200 before exit is +2R.",
          "Why it matters: Measuring in R strips out account size and position size, so two trades — or two entire systems — can be compared honestly regardless of how much capital or leverage sat behind either one.",
          "Free lesson: Expectancy: why win rate isn't the score"
        ],
        "links": [
          {
            "label": "Expectancy: why win rate isn't the score",
            "url": "?page=academy-expectancy"
          }
        ]
      },
      {
        "id": "win-rate",
        "title": "Win rate",
        "body": [
          "The share of closed trades that were profitable, out of all closed trades.",
          "Why it matters: Alone it says almost nothing — a 90% win rate with rare, oversized losers can still lose money overall. It's one half of expectancy; read it together with average win and average loss size, never by itself.",
          "Free lesson: Expectancy: why win rate isn't the score"
        ],
        "links": [
          {
            "label": "Expectancy: why win rate isn't the score",
            "url": "?page=academy-expectancy"
          }
        ]
      },
      {
        "id": "loss-aversion",
        "title": "Loss aversion",
        "body": [
          "The well-documented tendency to weigh a loss roughly twice as heavily, emotionally, as a same-sized gain — an ordinary feature of human decision-making, not a personal weakness or a sign of an unsuitable temperament.",
          "Why it matters: It's a large part of why a first real trading loss feels like proof of failure even when it's a normal, expected outcome from a working method — a system that wins 4 trades in 10 loses on its very first trade more often than not.",
          "Free lesson: The first loss: why most people quit here"
        ],
        "links": [
          {
            "label": "The first loss: why most people quit here",
            "url": "?page=academy-first-loss"
          }
        ]
      },
      {
        "id": "trading-journal",
        "title": "Trading journal",
        "body": [
          "A written record of each trade — what was decided, why, and with what size — logged before the outcome is known. A minimum useful version covers seven fields: date, setup, entry reason, size and risk, exit and its reason, result in R, and the lesson.",
          "Why it matters: It's the tool that separates decision quality from outcome quality. A good decision can lose money and a bad one can get paid; without a written record, that distinction disappears into memory, which quietly rewrites itself to fit how the trade ended.",
          "Free lesson: The journal is the edge you control"
        ],
        "links": [
          {
            "label": "The journal is the edge you control",
            "url": "?page=academy-journaling"
          }
        ]
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/glossary.html",
      "capturedAt": "2026-11-12T14:36:55.576061+00:00",
      "scope": "Captured public text; dates and examples belong to this source snapshot."
    }
  },
  "impressum": {
    "title": "Impressum",
    "eyebrow": "Public source snapshot",
    "intro": "Original noguru.io provider text, captured 12 November 2026. It describes that service and does not activate a subscription or establish that every provision is the operative policy for this local prototype.",
    "kind": "legal-source",
    "sections": [
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "NoGuru is operated by:",
          "NoGuru LLC 940 E 3rd St Ste 203 Casper, WY 82601, USA",
          "E-mail: noguru_noguru@proton.me Telegram: the NoGuru gate bot (see How it works )",
          "Responsible for content: NoGuru LLC, address as above.",
          "Anti-impersonation notice: our ONLY official surfaces are noguru.io, the Telegram channels linked from this site, and the gate bot named on the checkout page. We never DM first, never ask for your keys or seed phrase, and never offer \"account management.\""
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru is operated by:"
          },
          {
            "type": "paragraph",
            "text": "NoGuru LLC 940 E 3rd St Ste 203 Casper, WY 82601, USA"
          },
          {
            "type": "paragraph",
            "text": "E-mail: noguru_noguru@proton.me Telegram: the NoGuru gate bot (see How it works )"
          },
          {
            "type": "paragraph",
            "text": "Responsible for content: NoGuru LLC, address as above."
          },
          {
            "type": "paragraph",
            "text": "Anti-impersonation notice: our ONLY official surfaces are noguru.io, the Telegram channels linked from this site, and the gate bot named on the checkout page. We never DM first, never ask for your keys or seed phrase, and never offer \"account management.\""
          }
        ],
        "links": [
          {
            "label": "noguru_noguru@proton.me",
            "url": "https://noguru.io/cdn-cgi/l/email-protection#630d0c041611163c0d0c041611162313110c170c0d4d0e06"
          },
          {
            "label": "How it works",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. Signals are information about what an automated system did or would do — not investment advice or portfolio management. Past results do not guarantee future returns."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/legal/impressum.html",
      "capturedAt": "2026-11-12T14:36:55.651028+00:00",
      "scope": "Captured public text. This is source material, not an authenticated account or newly verified live implementation."
    }
  },
  "privacy": {
    "title": "Privacy policy",
    "eyebrow": "Public source snapshot",
    "intro": "Original noguru.io provider text, captured 12 November 2026. It describes that service and does not activate a subscription or establish that every provision is the operative policy for this local prototype.",
    "kind": "legal-source",
    "sections": [
      {
        "id": "applicable-law",
        "title": "Applicable law",
        "body": [
          "The controller is NoGuru LLC, 940 E 3rd St Ste 203, Casper, WY 82601, USA (see the Impressum ). Art. 3(2) GDPR reaches non-EU controllers that offer goods or services to people in the EU, which this site does, so GDPR applies to our processing of EU visitors' data . The Swiss Federal Act on Data Protection (FADP) applies where our processing has an effect in Switzerland (Art. 3 FADP). Where the two differ we apply whichever gives you the stronger protection."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The controller is NoGuru LLC, 940 E 3rd St Ste 203, Casper, WY 82601, USA (see the Impressum ). Art. 3(2) GDPR reaches non-EU controllers that offer goods or services to people in the EU, which this site does, so GDPR applies to our processing of EU visitors' data . The Swiss Federal Act on Data Protection (FADP) applies where our processing has an effect in Switzerland (Art. 3 FADP). Where the two differ we apply whichever gives you the stronger protection."
          }
        ],
        "links": [
          {
            "label": "Impressum",
            "url": "?page=impressum"
          }
        ]
      },
      {
        "id": "what-we-collect-and-why",
        "title": "What we collect, and why",
        "body": [
          "Checkout: your Telegram username (to deliver channel invites), the invoice's payment address and on-chain transaction data (to detect your payment), and — once you message our bot — your Telegram chat ID (to send invites, renewal reminders and receipts). Legal basis: contract performance (Art. 6(1)(b) GDPR).",
          "On-chain data is public by nature — the blockchain itself is outside anyone's deletion power. We store only the link between an invoice and its transaction.",
          "Website: we run no third-party analytics, no advertising trackers, and set no cookies. Our web server and Cloudflare (our CDN/DDoS provider, processing IP addresses to serve the site — Art. 6(1)(f) GDPR) keep short-lived technical logs."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Checkout: your Telegram username (to deliver channel invites), the invoice's payment address and on-chain transaction data (to detect your payment), and — once you message our bot — your Telegram chat ID (to send invites, renewal reminders and receipts). Legal basis: contract performance (Art. 6(1)(b) GDPR)."
          },
          {
            "type": "paragraph",
            "text": "On-chain data is public by nature — the blockchain itself is outside anyone's deletion power. We store only the link between an invoice and its transaction."
          },
          {
            "type": "paragraph",
            "text": "Website: we run no third-party analytics, no advertising trackers, and set no cookies. Our web server and Cloudflare (our CDN/DDoS provider, processing IP addresses to serve the site — Art. 6(1)(f) GDPR) keep short-lived technical logs."
          }
        ],
        "links": []
      },
      {
        "id": "retention",
        "title": "Retention",
        "body": [
          "Invoice and payment records are kept as long as the bookkeeping and tax rules that apply to NoGuru LLC require, and no longer than 10 years. Telegram identifiers are deleted on request once no active subscription and no retention duty remains."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Invoice and payment records are kept as long as the bookkeeping and tax rules that apply to NoGuru LLC require, and no longer than 10 years. Telegram identifiers are deleted on request once no active subscription and no retention duty remains."
          }
        ],
        "links": []
      },
      {
        "id": "your-rights",
        "title": "Your rights",
        "body": [
          "Access, rectification, erasure, restriction, portability, objection — under Art. 15-21 GDPR if you are in the EU, and under the FADP if you are in Switzerland — and complaint to a supervisory authority (your EU member state's data protection authority, or the Swiss FDPIC). Contact: noguru_noguru@proton.me ."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Access, rectification, erasure, restriction, portability, objection — under Art. 15-21 GDPR if you are in the EU, and under the FADP if you are in Switzerland — and complaint to a supervisory authority (your EU member state's data protection authority, or the Swiss FDPIC). Contact: noguru_noguru@proton.me ."
          }
        ],
        "links": [
          {
            "label": "noguru_noguru@proton.me",
            "url": "https://noguru.io/cdn-cgi/l/email-protection#0e6061697b7c7b516061697b7c7b4e7e7c617a616020636b"
          }
        ]
      },
      {
        "id": "recipients",
        "title": "Recipients",
        "body": [
          "Cloudflare, Inc. (CDN/security; EU-US Data Privacy Framework participant); Telegram (message delivery — governed by Telegram's own terms once you use it); no one else. We never sell data."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cloudflare, Inc. (CDN/security; EU-US Data Privacy Framework participant); Telegram (message delivery — governed by Telegram's own terms once you use it); no one else. We never sell data."
          }
        ],
        "links": []
      },
      {
        "id": "youtube",
        "title": "YouTube",
        "body": [
          "Our YouTube channel is published through YouTube API Services. We upload our own videos only and collect no data about viewers through the API. When you watch our videos, YouTube's Terms of Service and the Google Privacy Policy apply."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Our YouTube channel is published through YouTube API Services. We upload our own videos only and collect no data about viewers through the API. When you watch our videos, YouTube's Terms of Service and the Google Privacy Policy apply."
          }
        ],
        "links": [
          {
            "label": "YouTube's Terms of Service",
            "url": "https://www.youtube.com/t/terms"
          },
          {
            "label": "Google Privacy Policy",
            "url": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. Signals are information about what an automated system did or would do — not investment advice or portfolio management. Past results do not guarantee future returns."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/legal/privacy.html",
      "capturedAt": "2026-11-12T14:36:55.650868+00:00",
      "scope": "Captured public text. This is source material, not an authenticated account or newly verified live implementation."
    }
  },
  "terms": {
    "title": "Terms of Service",
    "eyebrow": "Public source snapshot",
    "intro": "Original noguru.io provider text, captured 12 November 2026. It describes that service and does not activate a subscription or establish that every provision is the operative policy for this local prototype.",
    "kind": "legal-source",
    "sections": [
      {
        "id": "1-who-we-are",
        "title": "1. Who we are",
        "body": [
          "noguru.io and the NoGuru channels are operated by NoGuru LLC, 940 E 3rd St Ste 203, Casper, WY 82601, USA ( noguru_noguru@proton.me )."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "noguru.io and the NoGuru channels are operated by NoGuru LLC, 940 E 3rd St Ste 203, Casper, WY 82601, USA ( noguru_noguru@proton.me )."
          }
        ],
        "links": [
          {
            "label": "noguru_noguru@proton.me",
            "url": "https://noguru.io/cdn-cgi/l/email-protection#3f5150584a4d4a605150584a4d4a7f4f4d504b505111525a"
          }
        ]
      },
      {
        "id": "2-what-the-service-is",
        "title": "2. What the service is",
        "body": [
          "NoGuru publishes the signals of an automated, rule-based crypto spot strategy (Stepgrid Hybrid) in a private Telegram channel, and its results on noguru.io. It is information about what an automated system does. It is not investment advice, not a personal recommendation and not portfolio management. We never hold your money, your exchange account or your keys. The risk disclaimer is part of these terms."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru publishes the signals of an automated, rule-based crypto spot strategy (Stepgrid Hybrid) in a private Telegram channel, and its results on noguru.io. It is information about what an automated system does. It is not investment advice, not a personal recommendation and not portfolio management. We never hold your money, your exchange account or your keys. The risk disclaimer is part of these terms."
          }
        ],
        "links": [
          {
            "label": "risk disclaimer",
            "url": "?page=disclaimer"
          }
        ]
      },
      {
        "id": "3-14-days-free",
        "title": "3. 14 days free",
        "body": [
          "14 days free, once per Telegram account. Access ends after 14 days unless you pay."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "14 days free, once per Telegram account. Access ends after 14 days unless you pay."
          }
        ],
        "links": []
      },
      {
        "id": "4-subscription-and-payment",
        "title": "4. Subscription and payment",
        "body": [
          "The price is shown on the pricing page . You pay in crypto through the invoice shown at checkout. A payment buys access for the period it states. It does not renew by itself: to continue, you pay again. Payments are not refundable ; the 14 days free are there to test the setup first."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The price is shown on the pricing page . You pay in crypto through the invoice shown at checkout. A payment buys access for the period it states. It does not renew by itself: to continue, you pay again. Payments are not refundable ; the 14 days free are there to test the setup first."
          }
        ],
        "links": [
          {
            "label": "pricing page",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "5-your-access-is-personal",
        "title": "5. Your access is personal",
        "body": [
          "Forwarding or reselling the signals, or sharing your invite, is not allowed."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Forwarding or reselling the signals, or sharing your invite, is not allowed."
          }
        ],
        "links": []
      },
      {
        "id": "6-no-guarantee",
        "title": "6. No guarantee",
        "body": [
          "Past results do not predict future ones. Your results depend on your own settings, exchange and timing. Telegram, exchanges and auto-trading tools such as Cornix are run by third parties; we do not control their availability or behaviour. The service can be interrupted.",
          "NoGuru delivers the signals only. The connection between Cornix and your exchange, and the execution of orders on your account, are not our responsibility."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Past results do not predict future ones. Your results depend on your own settings, exchange and timing. Telegram, exchanges and auto-trading tools such as Cornix are run by third parties; we do not control their availability or behaviour. The service can be interrupted."
          },
          {
            "type": "paragraph",
            "text": "NoGuru delivers the signals only. The connection between Cornix and your exchange, and the execution of orders on your account, are not our responsibility."
          }
        ],
        "links": []
      },
      {
        "id": "7-liability",
        "title": "7. Liability",
        "body": [
          "We are not liable for trading losses. Otherwise, to the extent the law allows, our liability is limited to the fees you paid in the 12 months before the claim."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "We are not liable for trading losses. Otherwise, to the extent the law allows, our liability is limited to the fees you paid in the 12 months before the claim."
          }
        ],
        "links": []
      },
      {
        "id": "8-ending-access",
        "title": "8. Ending access",
        "body": [
          "You can stop at any time by not paying again. We may end access without refund if these terms are broken (for example by reselling the signals)."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "You can stop at any time by not paying again. We may end access without refund if these terms are broken (for example by reselling the signals)."
          }
        ],
        "links": []
      },
      {
        "id": "9-youtube",
        "title": "9. YouTube",
        "body": [
          "Our videos are published through YouTube API Services. By watching them on YouTube you agree to YouTube's Terms of Service ; the Google Privacy Policy applies there."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Our videos are published through YouTube API Services. By watching them on YouTube you agree to YouTube's Terms of Service ; the Google Privacy Policy applies there."
          }
        ],
        "links": [
          {
            "label": "YouTube's Terms of Service",
            "url": "https://www.youtube.com/t/terms"
          },
          {
            "label": "Google Privacy Policy",
            "url": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "id": "10-changes",
        "title": "10. Changes",
        "body": [
          "We can change these terms. The version shown when you paid applies to that payment."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "We can change these terms. The version shown when you paid applies to that payment."
          }
        ],
        "links": []
      },
      {
        "id": "11-governing-law",
        "title": "11. Governing law",
        "body": [
          "The laws of the State of Wyoming, USA."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The laws of the State of Wyoming, USA."
          }
        ],
        "links": []
      },
      {
        "id": "12-contact",
        "title": "12. Contact",
        "body": [
          "noguru_noguru@proton.me , or the NoGuru gate bot on Telegram.",
          "Version 2026-11-01."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "noguru_noguru@proton.me , or the NoGuru gate bot on Telegram."
          },
          {
            "type": "paragraph",
            "text": "Version 2026-11-01."
          }
        ],
        "links": [
          {
            "label": "noguru_noguru@proton.me",
            "url": "https://noguru.io/cdn-cgi/l/email-protection#bed0d1d9cbcccbe1d0d1d9cbcccbfececcd1cad1d090d3db"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. Signals are information about what an automated system did or would do — not investment advice or portfolio management. Past results do not guarantee future returns."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/legal/terms.html",
      "capturedAt": "2026-11-12T14:36:55.677745+00:00",
      "scope": "Captured public text. This is source material, not an authenticated account or newly verified live implementation."
    }
  },
  "disclaimer": {
    "title": "Risk disclaimer",
    "eyebrow": "Public source snapshot",
    "intro": "Original noguru.io provider text, captured 12 November 2026. It describes that service and does not activate a subscription or establish that every provision is the operative policy for this local prototype.",
    "kind": "legal-source",
    "sections": [
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Nothing on this site or in any NoGuru channel is investment advice, a personal recommendation, or portfolio management. Signals are information about what an automated system did under its own rules. Whether and how you act on them is entirely your decision and your responsibility.",
          "Trading cryptocurrencies — especially with leverage — involves substantial risk of loss. You can lose the entire amount committed to a position, and with cross-margin settings (which we never use or recommend) more than that. Do not trade with money you cannot afford to lose entirely.",
          "Past performance does not predict future results. Track-record figures assume the exact sizing stated in each signal, execution at or near the stated prices, and exchange conditions that may not repeat.",
          "Auto-execution via third-party tools (e.g. Cornix) adds its own risks: configuration errors, API outages, and venue differences can produce results that deviate from the published record.",
          "We are not licensed as an investment firm, broker, or portfolio manager in any jurisdiction. Availability of leveraged products differs by residence — you are responsible for compliance with your local rules."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Nothing on this site or in any NoGuru channel is investment advice, a personal recommendation, or portfolio management. Signals are information about what an automated system did under its own rules. Whether and how you act on them is entirely your decision and your responsibility."
          },
          {
            "type": "paragraph",
            "text": "Trading cryptocurrencies — especially with leverage — involves substantial risk of loss. You can lose the entire amount committed to a position, and with cross-margin settings (which we never use or recommend) more than that. Do not trade with money you cannot afford to lose entirely."
          },
          {
            "type": "paragraph",
            "text": "Past performance does not predict future results. Track-record figures assume the exact sizing stated in each signal, execution at or near the stated prices, and exchange conditions that may not repeat."
          },
          {
            "type": "paragraph",
            "text": "Auto-execution via third-party tools (e.g. Cornix) adds its own risks: configuration errors, API outages, and venue differences can produce results that deviate from the published record."
          },
          {
            "type": "paragraph",
            "text": "We are not licensed as an investment firm, broker, or portfolio manager in any jurisdiction. Availability of leveraged products differs by residence — you are responsible for compliance with your local rules."
          }
        ],
        "links": []
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. Signals are information about what an automated system did or would do — not investment advice or portfolio management. Past results do not guarantee future returns."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/legal/disclaimer.html",
      "capturedAt": "2026-11-12T14:36:55.585993+00:00",
      "scope": "Captured public text. This is source material, not an authenticated account or newly verified live implementation."
    }
  },
  "methodology": {
    "title": "Methodology",
    "eyebrow": "Live — the record",
    "intro": "Original Methodology, dated 29 July 2026. Its live/virtual ledger description predates the current public signal-replay disclosure; it is not verification of today’s producer or customer execution.",
    "kind": "historical-source",
    "sections": [
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Last updated: 2026-07-29. How the strategies behind the channels are built, validated, retired — and what we refuse to do."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Last updated: 2026-07-29. How the strategies behind the channels are built, validated, retired — and what we refuse to do."
          }
        ],
        "links": []
      },
      {
        "id": "where-signals-come-from",
        "title": "Where signals come from",
        "body": [
          "Every channel is driven by a fully automated strategy running on our own infrastructure, fed by exchange market data (candles, funding rates, open interest). No discretionary trades, no \"the analyst feels bullish.\" When a strategy opens or closes, the publishing pipeline formats it as a signal and posts it — the same event stream also writes the public track record."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Every channel is driven by a fully automated strategy running on our own infrastructure, fed by exchange market data (candles, funding rates, open interest). No discretionary trades, no \"the analyst feels bullish.\" When a strategy opens or closes, the publishing pipeline formats it as a signal and posts it — the same event stream also writes the public track record."
          }
        ],
        "links": []
      },
      {
        "id": "validation-before-publication",
        "title": "Validation before publication",
        "body": [
          "A strategy reaches a channel only after: historical backtesting with realistic fees, funding and slippage; out-of-sample checks (a config that only works on the data it was tuned on is discarded); and live execution with our own money. Every channel is live before it publishes."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A strategy reaches a channel only after: historical backtesting with realistic fees, funding and slippage; out-of-sample checks (a config that only works on the data it was tuned on is discarded); and live execution with our own money. Every channel is live before it publishes."
          }
        ],
        "links": []
      },
      {
        "id": "what-we-refuse-to-do",
        "title": "What we refuse to do",
        "body": [
          "No edited or invented \"PnL screenshots.\" No deleting losing signals. No accuracy-percentage marketing. No countdown-timer discounts. No profit promises — anyone promising returns in leveraged crypto is lying to you."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "No edited or invented \"PnL screenshots.\" No deleting losing signals. No accuracy-percentage marketing. No countdown-timer discounts. No profit promises — anyone promising returns in leveraged crypto is lying to you."
          }
        ],
        "links": []
      },
      {
        "id": "data-on-this-site",
        "title": "Data on this site",
        "body": [
          "The dashboard tables are computed from exchange data our system ingests continuously; public context widgets credit their sources (alternative.me, CoinGecko, Binance public data). Track-record rows are generated from the signal pipeline's own database: the trade ledger for rows a channel actually executed, and read-only signal logs for rows marked VIRTUAL — a trade not actually taken live, either pre-launch history or a leg a hedge-mode slot collision blocked, priced off live prices with real fee and funding assumptions. Both kinds are read from the same automated pipeline; nothing on the page is typed in by hand. When a strategy's configuration is retired and replaced outright, trades from the retired configuration are out of scope for the channel and are excluded — that is a product-scope decision, not a way to drop a losing trade, and any channel it applies to says so directly on the track-record page.",
          "Wins and losses both, written by the same pipeline this page describes. Nobody types a number in by hand."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The dashboard tables are computed from exchange data our system ingests continuously; public context widgets credit their sources (alternative.me, CoinGecko, Binance public data). Track-record rows are generated from the signal pipeline's own database: the trade ledger for rows a channel actually executed, and read-only signal logs for rows marked VIRTUAL — a trade not actually taken live, either pre-launch history or a leg a hedge-mode slot collision blocked, priced off live prices with real fee and funding assumptions. Both kinds are read from the same automated pipeline; nothing on the page is typed in by hand. When a strategy's configuration is retired and replaced outright, trades from the retired configuration are out of scope for the channel and are excluded — that is a product-scope decision, not a way to drop a losing trade, and any channel it applies to says so directly on the track-record page."
          },
          {
            "type": "paragraph",
            "text": "Wins and losses both, written by the same pipeline this page describes. Nobody types a number in by hand."
          }
        ],
        "links": [
          {
            "label": "Inspect it",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. Signals are information about what an automated system did or would do — not investment advice or portfolio management. Past results do not guarantee future returns."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/methodology.html",
      "capturedAt": "2026-11-12T14:36:55.668732+00:00",
      "scope": "Captured public text. This is source material, not an authenticated account or newly verified live implementation."
    }
  },
  "source-how-it-works": {
    "title": "How it works",
    "eyebrow": "Live — market mood",
    "intro": "Captured original source wording. It contains older outcome assurances or static figures; use the current internal explanation and evidence for this journey.",
    "kind": "historical-source",
    "sections": [
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "From zero to auto-traded signals in five steps. Links marked Ad are affiliate links — they cost you nothing extra and sometimes get you a discount; we may earn a commission.",
          "Prefer to watch? The setup in 20 seconds ."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "From zero to auto-traded signals in five steps. Links marked Ad are affiliate links — they cost you nothing extra and sometimes get you a discount; we may earn a commission."
          },
          {
            "type": "paragraph",
            "text": "Prefer to watch? The setup in 20 seconds ."
          }
        ],
        "links": [
          {
            "label": "The setup in 20 seconds",
            "url": "https://youtube.com/shorts/DrMmjJWJ-U4"
          }
        ]
      },
      {
        "id": "step-1-an-exchange-account",
        "title": "Step 1 — an exchange account",
        "body": [
          "Stepgrid is spot only: you are buying and selling actual coins. Any exchange that lists them and works with Cornix will do; the system is most tested on Binance."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Stepgrid is spot only: you are buying and selling actual coins. Any exchange that lists them and works with Cornix will do; the system is most tested on Binance."
          }
        ],
        "links": []
      },
      {
        "id": "step-2-a-sub-account-for-stepgrid-only",
        "title": "Step 2 — a sub-account for Stepgrid only",
        "body": [
          "Open a sub-account on your exchange and move into it only the funds you set aside for Stepgrid. Every signal tells Cornix what share of the account to buy with, so the account must hold nothing else. Mixed with other bots, those shares would be taken from their funds too, and the reserve that buys the deep dips would be spent before it’s needed. Your exchange’s help pages explain how to create a sub-account and an API key for it (enable spot trading, never withdrawals)."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Open a sub-account on your exchange and move into it only the funds you set aside for Stepgrid. Every signal tells Cornix what share of the account to buy with, so the account must hold nothing else. Mixed with other bots, those shares would be taken from their funds too, and the reserve that buys the deep dips would be spent before it’s needed. Your exchange’s help pages explain how to create a sub-account and an API key for it (enable spot trading, never withdrawals)."
          }
        ],
        "links": []
      },
      {
        "id": "step-3-connect-cornix",
        "title": "Step 3 — connect Cornix",
        "body": [
          "Connect the sub-account to Cornix. First join our Stepgrid channel with the invite link our bot sends you, using the Telegram account linked to your Cornix.",
          "New to Cornix? Create your account first: Ad our Cornix sign-up link , free for 14 days, no card.",
          "Quickest: open our bot in Cornix , check the account and tap Create & Activate — your copy follows the channel with our settings. The same page shows the results of our trading signals (Cornix login needed).",
          "By hand: create a Signals Bot in Cornix that follows the channel. On the General tab: set a fallback amount (3 %, Percentage) and tick “Only use if not defined by group” — then each signal’s own amount is used. Leave every other Cornix setting at its default."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Connect the sub-account to Cornix. First join our Stepgrid channel with the invite link our bot sends you, using the Telegram account linked to your Cornix."
          },
          {
            "type": "paragraph",
            "text": "New to Cornix? Create your account first: Ad our Cornix sign-up link , free for 14 days, no card."
          },
          {
            "type": "paragraph",
            "text": "Quickest: open our bot in Cornix , check the account and tap Create & Activate — your copy follows the channel with our settings. The same page shows the results of our trading signals (Cornix login needed)."
          },
          {
            "type": "paragraph",
            "text": "By hand: create a Signals Bot in Cornix that follows the channel. On the General tab: set a fallback amount (3 %, Percentage) and tick “Only use if not defined by group” — then each signal’s own amount is used. Leave every other Cornix setting at its default."
          }
        ],
        "links": [
          {
            "label": "our Cornix sign-up link",
            "url": "?page=trial"
          },
          {
            "label": "our bot in Cornix",
            "url": "?page=trial"
          }
        ]
      },
      {
        "id": "step-4-the-14-days-free",
        "title": "Step 4 — the 14 days free",
        "body": [
          "Fourteen days, no payment details, nothing to cancel. Use it to confirm the machinery works on your setup: signals arrive, your exchange accepts them, the buy orders land at the published prices, and a cycle sells when it reaches its target.",
          "Two weeks show the plumbing works, nothing more. To really judge performance 1 – 3 months of continuous, uninterrupted operation are needed. That’s why we have a track record you can check for yourself ."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Fourteen days, no payment details, nothing to cancel. Use it to confirm the machinery works on your setup: signals arrive, your exchange accepts them, the buy orders land at the published prices, and a cycle sells when it reaches its target."
          },
          {
            "type": "paragraph",
            "text": "Two weeks show the plumbing works, nothing more. To really judge performance 1 – 3 months of continuous, uninterrupted operation are needed. That’s why we have a track record you can check for yourself ."
          }
        ],
        "links": [
          {
            "label": "track record you can check for yourself",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "why-do-you-publish-the-cycles-that-went-badly",
        "title": "Why do you publish the cycles that went badly?",
        "body": [
          "Because a record with them removed is fiction. The track record is generated by the same pipeline that posts the signals, and no cycle is ever deleted for its outcome. Most cycles are done within hours. The rare one that takes months is in there too, at the price it finally sold for, counted like any other."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Because a record with them removed is fiction. The track record is generated by the same pipeline that posts the signals, and no cycle is ever deleted for its outcome. Most cycles are done within hours. The rare one that takes months is in there too, at the price it finally sold for, counted like any other."
          }
        ],
        "links": []
      },
      {
        "id": "can-a-cycle-lose-money",
        "title": "Can a cycle lose money?",
        "body": [
          "The system does not sell a cycle below its cost, so a completed cycle is a gain. The one thing to understand is a cycle that takes long: if a coin falls and stays down, the ladder is fully invested and that capital is tied up until the price recovers — not lost, but not earning either. It is uncommon — about 1 cycle in 80 runs past a month — and we have had a few. Our cycles in progress are published too, so you can see it for yourself."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The system does not sell a cycle below its cost, so a completed cycle is a gain. The one thing to understand is a cycle that takes long: if a coin falls and stays down, the ladder is fully invested and that capital is tied up until the price recovers — not lost, but not earning either. It is uncommon — about 1 cycle in 80 runs past a month — and we have had a few. Our cycles in progress are published too, so you can see it for yourself."
          }
        ],
        "links": []
      },
      {
        "id": "do-i-need-cornix",
        "title": "Do I need Cornix?",
        "body": [
          "Yes — the strategy is delivered through Cornix, and it is fully automatic. It trades the signals for you, around the clock, which is what makes your results match ours. It works with all the exchanges listed above and many more, and your exchange keys stay with you, with no withdrawal rights."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Yes — the strategy is delivered through Cornix, and it is fully automatic. It trades the signals for you, around the clock, which is what makes your results match ours. It works with all the exchanges listed above and many more, and your exchange keys stay with you, with no withdrawal rights."
          }
        ],
        "links": []
      },
      {
        "id": "how-do-renewals-work",
        "title": "How do renewals work?",
        "body": [
          "Choose 1, 3, 6 or 12 months — 10%, 15% and 20% off the longer terms. Three days before expiry the bot sends a fresh invoice; unpaid subscriptions get a 24-hour grace period, then channel access ends. Rejoin any time; a founding price ends with the subscription.",
          "Fear & Greed, refreshed continuously. The machine doesn't care — it trades the plan either way. Setting that up once is what these steps are for."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Choose 1, 3, 6 or 12 months — 10%, 15% and 20% off the longer terms. Three days before expiry the bot sends a fresh invoice; unpaid subscriptions get a 24-hour grace period, then channel access ends. Rejoin any time; a founding price ends with the subscription."
          },
          {
            "type": "paragraph",
            "text": "Fear & Greed, refreshed continuously. The machine doesn't care — it trades the plan either way. Setting that up once is what these steps are for."
          }
        ],
        "links": []
      },
      {
        "id": "leveraged-trading",
        "title": "Leveraged trading",
        "body": [
          "In testing and optimisation now. We will not put it on sale until it has earned its place."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "In testing and optimisation now. We will not put it on sale until it has earned its place."
          }
        ],
        "links": []
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. Signals are information about what an automated system did or would do — not investment advice or portfolio management. Past results do not guarantee future returns."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/how-it-works.html",
      "capturedAt": "2026-11-12T14:36:55.563238+00:00",
      "scope": "Captured public text. This is source material, not an authenticated account or newly verified live implementation."
    }
  },
  "source-pricing": {
    "title": "One strategy. $49 a month, founding price. 14 days free.",
    "eyebrow": "Live — the machine right now",
    "intro": "Captured original source wording. It contains older outcome assurances or static figures; use the current internal explanation and evidence for this journey.",
    "kind": "historical-source",
    "sections": [
      {
        "id": "founding-5-up-to-4-months-free",
        "title": "🔥 Founding 5 — up to 4 months free",
        "body": [
          "The first 5 traders who run NoGuru through Cornix get 3 months free, plus one month for opening an exchange account through our link.",
          "New to Cornix? Ad Create your Cornix account here : free for 14 days, and 10% off a yearly plan after.",
          "Offer not available for UK residents.",
          "1 month free for opening an exchange account through our link. Founding price $49 instead of $99 for the first 100 subscribers.",
          "Spot buying, made intelligent. Stepgrid buys only when the price comes down to meet it, takes the gain when it recovers, and puts the same money straight back to work — usually within hours. You own the coins outright the whole time — nothing is borrowed, so nothing can be force-sold out from under you."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The first 5 traders who run NoGuru through Cornix get 3 months free, plus one month for opening an exchange account through our link."
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Start with 14 days free: below",
              "Connect the channel in Cornix ( how ) — Cornix is free for 14 days, no card needed. The Founding 5 months start once you are on a paid Cornix plan; the demo workspace does not count",
              "Message @noguru_signals and the 3 months are added to your 14 days free",
              "Opened an exchange account through our link? Send /exchange <exchange> <UID> to @NoGuruMembers_bot for the fourth month"
            ]
          },
          {
            "type": "paragraph",
            "text": "New to Cornix? Ad Create your Cornix account here : free for 14 days, and 10% off a yearly plan after."
          },
          {
            "type": "paragraph",
            "text": "Offer not available for UK residents."
          },
          {
            "type": "paragraph",
            "text": "1 month free for opening an exchange account through our link. Founding price $49 instead of $99 for the first 100 subscribers."
          },
          {
            "type": "paragraph",
            "text": "Spot buying, made intelligent. Stepgrid buys only when the price comes down to meet it, takes the gain when it recovers, and puts the same money straight back to work — usually within hours. You own the coins outright the whole time — nothing is borrowed, so nothing can be force-sold out from under you."
          }
        ],
        "links": [
          {
            "label": "below",
            "url": "?page=pricing#checkout-card"
          },
          {
            "label": "how",
            "url": "?page=how-it-works"
          },
          {
            "label": "@noguru_signals",
            "url": "https://t.me/noguru_signals"
          },
          {
            "label": "@NoGuruMembers_bot",
            "url": "?page=trial"
          },
          {
            "label": "Create your Cornix account here",
            "url": "?page=trial"
          }
        ]
      },
      {
        "id": "our-published-signals-day-by-day",
        "title": "Our published signals, day by day",
        "body": [
          "Every signal we publish, traded the way a bot following the channel trades it — updated every morning.",
          "Copy the bot in Cornix →",
          "Published signals sized at today’s buy sizes on $38,600, before fees.",
          "A cycle is one or more buys on a coin, sold together at a gain. Three in four sell within a day. Every completed cycle is listed, with the date it opened, the date it sold and what it made →",
          "Not compounded. Profit was taken out each month, not reinvested. Per year at this rate: — with profit taken out, — if reinvested monthly."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Every signal we publish, traded the way a bot following the channel trades it — updated every morning."
          },
          {
            "type": "paragraph",
            "text": "Copy the bot in Cornix →"
          },
          {
            "type": "paragraph",
            "text": "Published signals sized at today’s buy sizes on $38,600, before fees."
          },
          {
            "type": "paragraph",
            "text": "A cycle is one or more buys on a coin, sold together at a gain. Three in four sell within a day. Every completed cycle is listed, with the date it opened, the date it sold and what it made →"
          },
          {
            "type": "paragraph",
            "text": "Not compounded. Profit was taken out each month, not reinvested. Per year at this rate: — with profit taken out, — if reinvested monthly."
          }
        ],
        "links": [
          {
            "label": "Copy the bot in Cornix →",
            "url": "?page=trial"
          },
          {
            "label": "↓ What happens in a crash",
            "url": "?page=pricing#crash"
          },
          {
            "label": "Every completed cycle is listed, with the date it opened, the date it sold and what it made →",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "every-kind-of-market-since-late-2023",
        "title": "Every kind of market since late 2023",
        "body": [
          "Each pair of bars is one stretch of market — bull, alt season, sideways or bear — with today’s rules replayed over it, and holding Bitcoin through the same stretch beside it. It made money in all seventeen. Bitcoin lost in five.",
          "A replay of today’s rules on past prices, November 2023 – July 2026; the published signals from 1 August 2026. Per month on allocated funds, before fees. Updated weekly."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Each pair of bars is one stretch of market — bull, alt season, sideways or bear — with today’s rules replayed over it, and holding Bitcoin through the same stretch beside it. It made money in all seventeen. Bitcoin lost in five."
          },
          {
            "type": "figure",
            "src": "assets/migrated/source-pricing-figure-1.svg",
            "alt": "Stepgrid against holding Bitcoin and against the typical altcoin, per month on allocated funds, across 17 market stretches from November 2023 to November 2026 (a replay of today's rules, then the published signals). Stepgrid positive in 17 of 17; Bitcoin negative in 5; the typical altcoin negative in 13. Hover a stretch for its figures.",
            "caption": "Captured historical source figure; its period and source scope are retained."
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Bull, 15 Nov 2023 – 21 Jan 2024 Stepgrid, replay of today's rules: +11.0% per month on allocated funds Holding Bitcoin: +4.7% per month The typical altcoin: -5.5% per month 73% of 182 altcoins fell over this stretch Open bags at the end: -2.9% of the allocation (not sold, not in the bar) 10 of 17 of today's coins had prices for the whole stretch",
              "Bull, 11 Feb 2024 – 26 May 2024 Stepgrid, replay of today's rules: +10.5% per month on allocated funds Holding Bitcoin: +12.7% per month The typical altcoin: +2.3% per month 41% of 207 altcoins fell over this stretch Open bags at the end: -20.3% of the allocation (not sold, not in the bar) 11 of 17 of today's coins had prices for the whole stretch",
              "Alt season, 3 Mar 2024 – 12 Apr 2024 Stepgrid, replay of today's rules: +20.4% per month on allocated funds Holding Bitcoin: +8.5% per month The typical altcoin: -4.5% per month 59% of 204 altcoins fell over this stretch Open bags at the end: -5.6% of the allocation (not sold, not in the bar) 12 of 17 of today's coins had prices for the whole stretch",
              "Sideways, 26 May 2024 – 5 Aug 2024 Stepgrid, replay of today's rules: +6.0% per month on allocated funds Holding Bitcoin: -6.6% per month The typical altcoin: -20.2% per month 97% of 214 altcoins fell over this stretch Open bags at the end: -19.7% of the allocation (not sold, not in the bar) 15 of 17 of today's coins had prices for the whole stretch",
              "Bear, 5 Aug 2024 – 17 Sep 2024 Stepgrid, replay of today's rules: +6.0% per month on allocated funds Holding Bitcoin: +5.6% per month The typical altcoin: +6.7% per month 22% of 229 altcoins fell over this stretch Open bags at the end: -8.1% of the allocation (not sold, not in the bar) 15 of 17 of today's coins had prices for the whole stretch",
              "Sideways, 17 Sep 2024 – 6 Nov 2024 Stepgrid, replay of today's rules: +9.4% per month on allocated funds Holding Bitcoin: +9.3% per month The typical altcoin: -1.8% per month 62% of 241 altcoins fell over this stretch Open bags at the end: -15.6% of the allocation (not sold, not in the bar) 15 of 17 of today's coins had prices for the whole stretch",
              "Alt season, 6 Nov 2024 – 9 Jan 2025 Stepgrid, replay of today's rules: +35.0% per month on allocated funds Holding Bitcoin: +12.5% per month The typical altcoin: +6.8% per month 32% of 286 altcoins fell over this stretch Open bags at the end: -20.0% of the allocation (not sold, not in the bar) 15 of 17 of today's coins had prices for the whole stretch",
              "Bull, 9 Nov 2024 – 4 Feb 2025 Stepgrid, replay of today's rules: +25.1% per month on allocated funds Holding Bitcoin: +11.4% per month The typical altcoin: -9.8% per month 79% of 298 altcoins fell over this stretch Open bags at the end: -41.9% of the allocation (not sold, not in the bar) 15 of 17 of today's coins had prices for the whole stretch",
              "Sideways, 4 Feb 2025 – 9 Mar 2025 Stepgrid, replay of today's rules: +8.2% per month on allocated funds Holding Bitcoin: -11.2% per month The typical altcoin: -18.8% per month 90% of 307 altcoins fell over this stretch Open bags at the end: -8.5% of the allocation (not sold, not in the bar) 15 of 17 of today's coins had prices for the whole stretch",
              "Bear, 9 Mar 2025 – 22 Apr 2025 Stepgrid, replay of today's rules: +2.1% per month on allocated funds Holding Bitcoin: +5.9% per month The typical altcoin: -4.5% per month 65% of 337 altcoins fell over this stretch Open bags at the end: -4.6% of the allocation (not sold, not in the bar) 15 of 17 of today's coins had prices for the whole stretch",
              "Alt season, 10 May 2025 – 11 Jun 2025 Stepgrid, replay of today's rules: +19.4% per month on allocated funds Holding Bitcoin: +5.1% per month The typical altcoin: -17.2% per month 83% of 369 altcoins fell over this stretch Open bags at the end: -5.3% of the allocation (not sold, not in the bar) 16 of 17 of today's coins had prices for the whole stretch",
              "Sideways, 11 Jun 2025 – 4 Nov 2025 Stepgrid, replay of today's rules: +9.3% per month on allocated funds Holding Bitcoin: -0.4% per month The typical altcoin: -9.1% per month 84% of 470 altcoins fell over this stretch Open bags at the end: -32.8% of the allocation (not sold, not in the bar) 16 of 17 of today's coins had prices for the whole stretch",
              "Bear, 4 Nov 2025 – 30 Apr 2026 Stepgrid, replay of today's rules: +1.5% per month on allocated funds Holding Bitcoin: -4.4% per month The typical altcoin: -7.7% per month 85% of 527 altcoins fell over this stretch Open bags at the end: -7.2% of the allocation (not sold, not in the bar) 17 of 17 of today's coins had prices for the whole stretch",
              "Sideways, 30 Apr 2026 – 9 Jun 2026 Stepgrid, replay of today's rules: +4.9% per month on allocated funds Holding Bitcoin: -13.6% per month The typical altcoin: -17.5% per month 82% of 534 altcoins fell over this stretch Open bags at the end: -4.9% of the allocation (not sold, not in the bar) 14 of 17 of today's coins had prices for the whole stretch",
              "Bear, 9 Jun 2026 – 1 Aug 2026 Stepgrid, replay of today's rules: +2.5% per month on allocated funds Holding Bitcoin: +1.1% per month The typical altcoin: -5.7% per month 70% of 541 altcoins fell over this stretch Open bags at the end: -3.6% of the allocation (not sold, not in the bar) 16 of 17 of today's coins had prices for the whole stretch",
              "Bear, 1 Aug 2026 – 19 Aug 2026 Stepgrid, published signals: +2.0% per month on allocated funds Holding Bitcoin: +5.1% per month The typical altcoin: -0.1% per month 50% of 541 altcoins fell over this stretch Open ladders at the end: -0.7% of the allocation (not sold, not in the bar) 46 published cycles on 10 coins, sized at today's buy sizes on $38,600",
              "Alt season, 22 Aug 2026 – 18 Oct 2026 Stepgrid, published signals: +13.6% per month on allocated funds Holding Bitcoin: +3.1% per month The typical altcoin: +0.0% per month 48% of 546 altcoins fell over this stretch Open ladders at the end: -11.4% of the allocation (not sold, not in the bar) 766 published cycles on 17 coins, sized at today's buy sizes on $38,600"
            ]
          },
          {
            "type": "paragraph",
            "text": "A replay of today’s rules on past prices, November 2023 – July 2026; the published signals from 1 August 2026. Per month on allocated funds, before fees. Updated weekly."
          }
        ],
        "links": []
      },
      {
        "id": "spot-buying-with-a-twist",
        "title": "Spot buying, with a twist",
        "body": [
          "People will tell you this is just DCA. It isn’t — and the difference is the whole reason it works.",
          "That last row is the point: the money comes back on every cycle and goes again, so the return doesn’t depend on a coin going up — only on it coming back. The same capital, used over and over.",
          "It runs a fleet of coins at once, each with its own ladder and its own exit, re-tuned as markets change and retired when they stop paying. That tuning is what the subscription buys — not a setting you copy once.",
          "The risk is a cycle that stalls. If a coin falls and stays down, the ladder runs out of steps and that money waits, earning nothing until the price comes back. It is uncommon — five cycles out of 711 have taken longer than a month — but it is the real cost of this method, and it is why the reserve below matters."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "People will tell you this is just DCA. It isn’t — and the difference is the whole reason it works."
          },
          {
            "type": "table",
            "headers": [
              "",
              "Ordinary DCA",
              "Stepgrid"
            ],
            "rows": [
              [
                "When it buys",
                "On a schedule, whatever the price",
                "Only when the price falls to a level planned in advance"
              ],
              [
                "Each buy",
                "Sometimes higher, sometimes lower",
                "Always lower than the one before"
              ],
              [
                "When it sells",
                "Never. You hold and hope",
                "As soon as the average has recovered"
              ],
              [
                "How long",
                "Years",
                "Median four hours"
              ],
              [
                "Your money",
                "Tied up",
                "Freed on every sale and put straight back to work"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "That last row is the point: the money comes back on every cycle and goes again, so the return doesn’t depend on a coin going up — only on it coming back. The same capital, used over and over."
          },
          {
            "type": "paragraph",
            "text": "It runs a fleet of coins at once, each with its own ladder and its own exit, re-tuned as markets change and retired when they stop paying. That tuning is what the subscription buys — not a setting you copy once."
          },
          {
            "type": "paragraph",
            "text": "The risk is a cycle that stalls. If a coin falls and stays down, the ladder runs out of steps and that money waits, earning nothing until the price comes back. It is uncommon — five cycles out of 711 have taken longer than a month — but it is the real cost of this method, and it is why the reserve below matters."
          }
        ],
        "links": []
      },
      {
        "id": "your-money-stays-ready-to-buy-the-dip",
        "title": "Your money stays ready to buy the dip",
        "body": [
          "On our own book only about a quarter of it is in coins on an average day. The rest is loaded and waiting for the steps further down — the ones that buy the drop everyone else is selling into. That is why the October 2025 crash was a profit for this strategy: 39 cycles sold within six hours of the low, because the funds were there to buy it.",
          "So let the bot do its job. You can change the settings — more steps, wider spacing, bigger size — and it might well make more. It also raises your risk substantially: a deeper ladder commits more of your money at the worst moment and holds it longer. Spending the reserve elsewhere or selling the coins by hand because it looks uncomfortable do the same thing. The figures on this page describe an account that doesn’t interfere. Change them and you are running your own strategy, at your own risk."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "On our own book only about a quarter of it is in coins on an average day. The rest is loaded and waiting for the steps further down — the ones that buy the drop everyone else is selling into. That is why the October 2025 crash was a profit for this strategy: 39 cycles sold within six hours of the low, because the funds were there to buy it."
          },
          {
            "type": "paragraph",
            "text": "So let the bot do its job. You can change the settings — more steps, wider spacing, bigger size — and it might well make more. It also raises your risk substantially: a deeper ladder commits more of your money at the worst moment and holds it longer. Spending the reserve elsewhere or selling the coins by hand because it looks uncomfortable do the same thing. The figures on this page describe an account that doesn’t interfere. Change them and you are running your own strategy, at your own risk."
          }
        ],
        "links": []
      },
      {
        "id": "crash",
        "title": "What happens in a crash",
        "body": [
          "A sudden crash is usually good for this. A long slide after a top is not. A ladder of waiting buy orders is exactly what a violent drop runs into, and the recovery is what it sells into. Replayed against six real episodes with today’s rules, the worst the account was ever worth, how long it stayed under water, and where it stood later — as a share of the money set aside:",
          "A fast crash is bought and sold within days or weeks. What costs time is a slow slide after a top: the bags wait below cost while the other coins keep cycling.",
          "That is the worst thing that has happened to these rules in four years of replayed prices, 2022 – 2026, and it is the number to judge them by — an account started just before the October 2025 top: the ladders filled near the high, the market then slid for a year, and the bags still wait below cost. The episodes that hurt are not the fast ones. They are the slow slides that never come back.",
          "The 2022 episodes ran on the 9 of today’s 17 coins that existed then.",
          "Why owning the coins matters. Trade with borrowed money and a deep enough drop ends it for you — you are sold out at the bottom and not there for the recovery. Own the coins and nobody can take them off you: the drop is on paper, and you can wait.",
          "Owning them does not protect you from the exchange itself failing — that is what happened to people on FTX, whatever they were trading. Choose your exchange deliberately and do not keep everything in one place."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A sudden crash is usually good for this. A long slide after a top is not. A ladder of waiting buy orders is exactly what a violent drop runs into, and the recovery is what it sells into. Replayed against six real episodes with today’s rules, the worst the account was ever worth, how long it stayed under water, and where it stood later — as a share of the money set aside:"
          },
          {
            "type": "table",
            "headers": [
              "",
              "Worst day",
              "Back at even after",
              "Later"
            ],
            "rows": [
              [
                "FTX collapse, November 2022",
                "−4.0%",
                "162 days",
                "+45% by end 2023"
              ],
              [
                "June 2022, 3AC and Celsius",
                "−6.6%",
                "55 days",
                "+48% by end 2023"
              ],
              [
                "Bear market from November 2025",
                "−7.9%",
                "251 days",
                "+17% today"
              ],
              [
                "LUNA crash, May 2022",
                "−14.6%",
                "368 days",
                "+36% by end 2023"
              ],
              [
                "February 2025 tariff crash",
                "−15.9%",
                "109 days",
                "+17% today"
              ],
              [
                "The top before October 2025",
                "−48.1%",
                "still",
                "−35% today — our worst case. The typical coin of the fleet fell −47% ."
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "A fast crash is bought and sold within days or weeks. What costs time is a slow slide after a top: the bags wait below cost while the other coins keep cycling."
          },
          {
            "type": "paragraph",
            "text": "That is the worst thing that has happened to these rules in four years of replayed prices, 2022 – 2026, and it is the number to judge them by — an account started just before the October 2025 top: the ladders filled near the high, the market then slid for a year, and the bags still wait below cost. The episodes that hurt are not the fast ones. They are the slow slides that never come back."
          },
          {
            "type": "paragraph",
            "text": "The 2022 episodes ran on the 9 of today’s 17 coins that existed then."
          },
          {
            "type": "paragraph",
            "text": "Why owning the coins matters. Trade with borrowed money and a deep enough drop ends it for you — you are sold out at the bottom and not there for the recovery. Own the coins and nobody can take them off you: the drop is on paper, and you can wait."
          },
          {
            "type": "paragraph",
            "text": "Owning them does not protect you from the exchange itself failing — that is what happened to people on FTX, whatever they were trading. Choose your exchange deliberately and do not keep everything in one place."
          }
        ],
        "links": []
      },
      {
        "id": "the-truth-about-costs",
        "title": "The truth about costs",
        "body": [
          "A $49 subscription has to pay for itself, and that is only possible above a certain size — At roughly — invested, the strategy is expected to earn about what the subscription costs and nothing more. Below that you are paying us to run a grid that makes less than the fee.",
          "That is the one figure you cannot work out without our numbers, so we publish it with transparency in mind. The calculation is based on the numbers on the top of this page."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A $49 subscription has to pay for itself, and that is only possible above a certain size — At roughly — invested, the strategy is expected to earn about what the subscription costs and nothing more. Below that you are paying us to run a grid that makes less than the fee."
          },
          {
            "type": "paragraph",
            "text": "That is the one figure you cannot work out without our numbers, so we publish it with transparency in mind. The calculation is based on the numbers on the top of this page."
          }
        ],
        "links": []
      },
      {
        "id": "the-14-days-free-prove-the-plumbing",
        "title": "The 14 days free prove the plumbing",
        "body": [
          "Cornix is free for 14 days too, no card needed.",
          "Use it to watch the machinery run: signals arrive, your exchange takes them, the buy orders land at the published prices, and the cycle sells at its target. Two weeks prove all of that — and the track record is there for the returns.",
          "Give it three months. For the strategy to prove it actually works, it needs three months to show how it performs in different market conditions. Remember that in order to make a profit, the market needs to move, also down, not just up.",
          "1 month is a demo — compounding needs runway. $ 44 a month instead of $ 49 . Start →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix is free for 14 days too, no card needed."
          },
          {
            "type": "paragraph",
            "text": "Use it to watch the machinery run: signals arrive, your exchange takes them, the buy orders land at the published prices, and the cycle sells at its target. Two weeks prove all of that — and the track record is there for the returns."
          },
          {
            "type": "paragraph",
            "text": "Give it three months. For the strategy to prove it actually works, it needs three months to show how it performs in different market conditions. Remember that in order to make a profit, the market needs to move, also down, not just up."
          },
          {
            "type": "paragraph",
            "text": "1 month is a demo — compounding needs runway. $ 44 a month instead of $ 49 . Start →"
          }
        ],
        "links": [
          {
            "label": "the track record",
            "url": "?page=evidence"
          },
          {
            "label": "Start →",
            "url": "?page=pricing#checkout-card"
          }
        ]
      },
      {
        "id": "free-months",
        "title": "Free months",
        "body": [
          "Two ways to earn them. They stack, with no cap:",
          "Both are credited automatically. Your referral link is in the bot (send /ref ); for an exchange, send the bot /exchange <exchange> <your UID> . The exchanges are listed on How it works ."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Two ways to earn them. They stack, with no cap:"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Open an exchange account through our link — one month per exchange.",
              "Bring a subscriber — one month free once they have paid for three ."
            ]
          },
          {
            "type": "paragraph",
            "text": "Both are credited automatically. Your referral link is in the bot (send /ref ); for an exchange, send the bot /exchange <exchange> <your UID> . The exchanges are listed on How it works ."
          }
        ],
        "links": [
          {
            "label": "How it works",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "start",
        "title": "Start",
        "body": [
          "$49 /month after 14 days free",
          "Founding price for the first 100 subscribers: $49/month, kept for as long as the subscription stays active. After the first 100, new subscriptions are $99/month.",
          "No card, no account. When you subscribe you pay in crypto: BTC on-chain, USDT on Ethereum, Arbitrum or Tron, or USDC on Ethereum, Base or Arbitrum.",
          "1 Your Telegram username",
          "The bot sends your channel invite and your Academy link there.",
          "2 What do you want to do",
          "Start with 14 days free — $0 1 month — $49 3 months — save 10% 6 months — save 15% 12 months — save 20%",
          "3 Start",
          "Start my 14 days free",
          "Nothing to pay. The 14 days end by themselves. After the agreement, open @NoGuruMembers_bot and tap Start: your invite arrives there.",
          "3 Pay with",
          "USDT (Ethereum / Arbitrum) USDT (Tron) USDC (Ethereum / Base / Arbitrum) BTC (on-chain)",
          "Pay",
          "You get a payment page. Once the payment clears, the bot sends your invite automatically. Already a member? Paying before your days end costs you nothing: the new term starts when they end.",
          "Cycles in progress right now, straight from the ledger — counts only."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "$49 /month after 14 days free"
          },
          {
            "type": "paragraph",
            "text": "Founding price for the first 100 subscribers: $49/month, kept for as long as the subscription stays active. After the first 100, new subscriptions are $99/month."
          },
          {
            "type": "paragraph",
            "text": "No card, no account. When you subscribe you pay in crypto: BTC on-chain, USDT on Ethereum, Arbitrum or Tron, or USDC on Ethereum, Base or Arbitrum."
          },
          {
            "type": "paragraph",
            "text": "1 Your Telegram username"
          },
          {
            "type": "paragraph",
            "text": "The bot sends your channel invite and your Academy link there."
          },
          {
            "type": "paragraph",
            "text": "2 What do you want to do"
          },
          {
            "type": "paragraph",
            "text": "Start with 14 days free — $0 1 month — $49 3 months — save 10% 6 months — save 15% 12 months — save 20%"
          },
          {
            "type": "paragraph",
            "text": "3 Start"
          },
          {
            "type": "paragraph",
            "text": "Start my 14 days free"
          },
          {
            "type": "paragraph",
            "text": "Nothing to pay. The 14 days end by themselves. After the agreement, open @NoGuruMembers_bot and tap Start: your invite arrives there."
          },
          {
            "type": "paragraph",
            "text": "3 Pay with"
          },
          {
            "type": "paragraph",
            "text": "USDT (Ethereum / Arbitrum) USDT (Tron) USDC (Ethereum / Base / Arbitrum) BTC (on-chain)"
          },
          {
            "type": "paragraph",
            "text": "Pay"
          },
          {
            "type": "paragraph",
            "text": "You get a payment page. Once the payment clears, the bot sends your invite automatically. Already a member? Paying before your days end costs you nothing: the new term starts when they end."
          },
          {
            "type": "paragraph",
            "text": "Cycles in progress right now, straight from the ledger — counts only."
          }
        ],
        "links": []
      },
      {
        "id": "leveraged-trading",
        "title": "Leveraged trading",
        "body": [
          "In testing and optimisation now. We will not put it on sale until it has earned its place."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "In testing and optimisation now. We will not put it on sale until it has earned its place."
          }
        ],
        "links": []
      },
      {
        "id": "source-risk-note",
        "title": "Original source risk note",
        "body": [
          "Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor. Signals are information about what an automated system did or would do — not investment advice or portfolio management. Past results do not guarantee future returns."
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/pricing.html",
      "capturedAt": "2026-11-12T14:36:55.681391+00:00",
      "scope": "Captured public text. This is source material, not an authenticated account or newly verified live implementation."
    }
  },
  "source-home": {
    "title": "You don’t watch charts. Our Cornix Bot does.",
    "eyebrow": "NoGuru - No Hype, just signals",
    "intro": "Captured original source wording. It contains older outcome assurances or static figures; use the current internal explanation and evidence for this journey.",
    "kind": "historical-source",
    "sections": [
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Spot signals for Cornix, with a track record you can check. Now available to the public.",
          "Start 14 days free",
          "No card, no payment details. No commitment, no subscription to cancel.",
          "🔥 Founding 5: the first 5 who run it through a paid Cornix plan get 3 months free.",
          "Founding price: $49 a month for the first 100 subscribers, kept for as long as you stay. $99 after. All details"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Spot signals for Cornix, with a track record you can check. Now available to the public."
          },
          {
            "type": "paragraph",
            "text": "Start 14 days free"
          },
          {
            "type": "paragraph",
            "text": "No card, no payment details. No commitment, no subscription to cancel."
          },
          {
            "type": "paragraph",
            "text": "🔥 Founding 5: the first 5 who run it through a paid Cornix plan get 3 months free."
          },
          {
            "type": "paragraph",
            "text": "Founding price: $49 a month for the first 100 subscribers, kept for as long as you stay. $99 after. All details"
          }
        ],
        "links": [
          {
            "label": "Start 14 days free",
            "url": "?page=trial"
          },
          {
            "label": "All details",
            "url": "?page=pricing#founding"
          }
        ]
      },
      {
        "id": "done-with-20x",
        "title": "Done with 20x?",
        "body": [
          "At 20x, a routine daily move is your whole margin. Stepgrid trades spot, so there is no margin to lose.",
          "Spot buying made intelligent. Behind every signal: coins picked by rules and re-checked every night, buys placed only where the price comes down to meet them, each buy sized to the market’s trend, funds held back for a crash, and profit taken at every cycle’s target."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "At 20x, a routine daily move is your whole margin. Stepgrid trades spot, so there is no margin to lose."
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Peace of mind. No liquidation, no margin call at 3 a.m., no stop taken out by a wick.",
              "Less risk. No leverage. A coin that falls is bought again lower, not closed at a loss.",
              "Profit that stays. Gains compound instead of round-tripping back to zero."
            ]
          },
          {
            "type": "paragraph",
            "text": "Spot buying made intelligent. Behind every signal: coins picked by rules and re-checked every night, buys placed only where the price comes down to meet them, each buy sized to the market’s trend, funds held back for a crash, and profit taken at every cycle’s target."
          }
        ],
        "links": []
      },
      {
        "id": "check-it-before-you-try",
        "title": "Check it before you try",
        "body": [
          "Our published signals, traded the way your Cornix bot trades them, on allocated funds. Updated every morning.",
          "Every cycle is on the track record , the slow ones included."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Our published signals, traded the way your Cornix bot trades them, on allocated funds. Updated every morning."
          },
          {
            "type": "paragraph",
            "text": "Every cycle is on the track record , the slow ones included."
          }
        ],
        "links": [
          {
            "label": "track record",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "your-funds-stay-on-your-exchange",
        "title": "Your funds stay on your exchange",
        "body": [
          "Cornix trades with API keys that cannot withdraw. Stop the bot whenever you like; the coins stay yours."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix trades with API keys that cannot withdraw. Stop the bot whenever you like; the coins stay yours."
          }
        ],
        "links": []
      },
      {
        "id": "14-days-free-from-us-14-days-free-from-cornix",
        "title": "14 days free from us, 14 days free from Cornix",
        "body": [
          "No card, no payment details.",
          "Start 14 days free",
          "No Cornix account yet? Ad Register here , 10% off a yearly plan after the trial.",
          "Past results do not guarantee future returns. Offer not available for UK residents."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "No card, no payment details."
          },
          {
            "type": "paragraph",
            "text": "Start 14 days free"
          },
          {
            "type": "paragraph",
            "text": "No Cornix account yet? Ad Register here , 10% off a yearly plan after the trial."
          },
          {
            "type": "paragraph",
            "text": "Past results do not guarantee future returns. Offer not available for UK residents."
          }
        ],
        "links": [
          {
            "label": "Start 14 days free",
            "url": "?page=trial"
          },
          {
            "label": "Register here",
            "url": "?page=trial"
          }
        ]
      }
    ],
    "source": {
      "label": "Original NoGuru public source",
      "url": "https://noguru.io/",
      "capturedAt": "2026-11-12T14:36:55.566626+00:00",
      "scope": "Captured public text. This is source material, not an authenticated account or newly verified live implementation."
    }
  },
  "about": {
    "title": "A process you can inspect. Without a guru to follow.",
    "eyebrow": "About NoGuru",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "built-around-a-repeatable-process",
        "title": "Built around a repeatable process.",
        "body": [
          "A trading plan involves more than choosing a coin. There are price levels to watch, orders to place and open holdings to keep track of. NoGuru brings those routine steps into a strategy that Cornix can execute in your exchange account.",
          "The routine is automated. The decision stays yours. You still choose your setup and capital, monitor what happens and decide how to manage your exposure."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A trading plan involves more than choosing a coin. There are price levels to watch, orders to place and open holdings to keep track of. NoGuru brings those routine steps into a strategy that Cornix can execute in your exchange account."
          },
          {
            "type": "paragraph",
            "text": "The routine is automated. The decision stays yours. You still choose your setup and capital, monitor what happens and decide how to manage your exposure."
          }
        ],
        "links": []
      },
      {
        "id": "what-noguru-does",
        "title": "What NoGuru does",
        "body": [
          "The strategy stages purchases at planned price levels and sets a target sale for the combined holding. Its buys follow price conditions rather than a fixed weekly or monthly schedule. Cornix translates those instructions into orders in each subscriber's exchange account.",
          "The public website sometimes calls the strategy “Stepgrid.” These pages cover the public NoGuru service through Cornix; the explanations and evidence relate to that service."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The strategy stages purchases at planned price levels and sets a target sale for the combined holding. Its buys follow price conditions rather than a fixed weekly or monthly schedule. Cornix translates those instructions into orders in each subscriber's exchange account."
          },
          {
            "type": "paragraph",
            "text": "The public website sometimes calls the strategy “Stepgrid.” These pages cover the public NoGuru service through Cornix; the explanations and evidence relate to that service."
          }
        ],
        "links": []
      },
      {
        "id": "what-remains-yours",
        "title": "What remains yours",
        "body": [
          "You choose whether to participate, select an eligible exchange, configure your account and monitor its operation. Coins and trading funds remain at your exchange. The strategy uses no leverage and no stop-loss; open holdings can lose value or remain unsold.",
          "Understand the risks and responsibilities →",
          "Our explanation, in three lines"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "You choose whether to participate, select an eligible exchange, configure your account and monitor its operation. Coins and trading funds remain at your exchange. The strategy uses no leverage and no stop-loss; open holdings can lose value or remain unsold."
          },
          {
            "type": "paragraph",
            "text": "Understand the risks and responsibilities →"
          },
          {
            "type": "paragraph",
            "text": "Our explanation, in three lines"
          }
        ],
        "links": [
          {
            "label": "Understand the risks and responsibilities →",
            "url": "?page=risks"
          }
        ]
      },
      {
        "id": "understand-the-mechanism",
        "title": "Understand the mechanism.",
        "body": [
          "Know how orders change your average purchase price and exposure."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Know how orders change your average purchase price and exposure."
          }
        ],
        "links": []
      },
      {
        "id": "read-the-whole-picture",
        "title": "Read the whole picture.",
        "body": [
          "Completed gains, open holdings, costs and evidence limitations belong together."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Completed gains, open holdings, costs and evidence limitations belong together."
          }
        ],
        "links": []
      },
      {
        "id": "make-your-own-decision",
        "title": "Make your own decision.",
        "body": [
          "Use the explanation to assess the setup and commitment for yourself."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Use the explanation to assess the setup and commitment for yourself."
          }
        ],
        "links": [
          {
            "label": "Start with the process →",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "who-is-responsible",
        "title": "Who is responsible?",
        "body": [
          "NoGuru’s operator develops and controls the proprietary strategy. Cornix executes its instructions through the connection to your exchange. Automation still depends on human decisions, account setup and ongoing oversight.",
          "These pages explain the service and its risks. They do not assess your personal circumstances or suitability.",
          "Provider identity and business details remain incomplete in this review preview. They must be verified before a customer launch."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru’s operator develops and controls the proprietary strategy. Cornix executes its instructions through the connection to your exchange. Automation still depends on human decisions, account setup and ongoing oversight."
          },
          {
            "type": "paragraph",
            "text": "These pages explain the service and its risks. They do not assess your personal circumstances or suitability."
          },
          {
            "type": "paragraph",
            "text": "Provider identity and business details remain incomplete in this review preview. They must be verified before a customer launch."
          }
        ],
        "links": [
          {
            "label": "Provider information and review status →",
            "url": "?page=impressum"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/about.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "faq": {
    "title": "The things worth asking before you start.",
    "eyebrow": "Questions & answers",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "what-exactly-am-i-subscribing-to",
        "title": "What exactly am I subscribing to?",
        "body": [
          "NoGuru supplies a proprietary strategy and rule-based spot buy and sell instructions. Cornix is the separate service that submits orders in your exchange account. This reduces manual order entry. You connect a dedicated exchange sub-account, set aside the trading funds and follow the documented provider settings. You do not transfer trading capital to NoGuru. See the three roles →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru supplies a proprietary strategy and rule-based spot buy and sell instructions. Cornix is the separate service that submits orders in your exchange account. This reduces manual order entry. You connect a dedicated exchange sub-account, set aside the trading funds and follow the documented provider settings. You do not transfer trading capital to NoGuru. See the three roles →"
          }
        ],
        "links": [
          {
            "label": "See the three roles →",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "what-does-spot-trading-mean-here",
        "title": "What does spot trading mean here?",
        "body": [
          "You buy and hold actual coins in your exchange account, rather than a leveraged contract tracking their price. Leverage means taking a larger position than the money you put down. Losses can then force that position to close, known as liquidation. NoGuru’s intended setup uses no leverage. The coins can still keep falling, and exchange and operational risks remain. See what happens at the exchange →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "You buy and hold actual coins in your exchange account, rather than a leveraged contract tracking their price. Leverage means taking a larger position than the money you put down. Losses can then force that position to close, known as liquidation. NoGuru’s intended setup uses no leverage. The coins can still keep falling, and exchange and operational risks remain. See what happens at the exchange →"
          }
        ],
        "links": [
          {
            "label": "See what happens at the exchange →",
            "url": "?page=how-it-works#responsibilities"
          }
        ]
      },
      {
        "id": "is-this-the-same-as-regular-dca",
        "title": "Is this the same as regular DCA?",
        "body": [
          "Calendar-based dollar-cost averaging buys a chosen amount at regular intervals, regardless of price. NoGuru responds to price conditions with staged buys and target sales. A lower buy can reduce average cost, while committing more money to the coin. The exact selection, entry and sizing rules remain proprietary. Follow the trading process →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Calendar-based dollar-cost averaging buys a chosen amount at regular intervals, regardless of price. NoGuru responds to price conditions with staged buys and target sales. A lower buy can reduce average cost, while committing more money to the coin. The exact selection, entry and sizing rules remain proprietary. Follow the trading process →"
          }
        ],
        "links": [
          {
            "label": "Follow the trading process →",
            "url": "?page=how-it-works#strategy"
          }
        ]
      },
      {
        "id": "how-much-should-i-put-in",
        "title": "How much should I put in?",
        "body": [
          "There is no amount we can choose for you. Your ability to bear a loss, exchange minimum orders, pair coverage and strategy sizing all matter. The scenario explorer uses arbitrary amounts to explain arithmetic, not to recommend a deposit or claim a profitable minimum."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "There is no amount we can choose for you. Your ability to bear a loss, exchange minimum orders, pair coverage and strategy sizing all matter. The scenario explorer uses arbitrary amounts to explain arithmetic, not to recommend a deposit or claim a profitable minimum."
          }
        ],
        "links": [
          {
            "label": "scenario explorer",
            "url": "?page=examples"
          }
        ]
      },
      {
        "id": "how-long-do-i-have-to-hold",
        "title": "How long do I have to hold?",
        "body": [
          "There is no fixed holding period. A cycle ends only if its sale executes or you close it yourself. Positions can remain below cost for months or indefinitely; a recovery may never arrive. Closed-cycle duration statistics omit still-open holdings."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "There is no fixed holding period. A cycle ends only if its sale executes or you close it yourself. Positions can remain below cost for months or indefinitely; a recovery may never arrive. Closed-cycle duration statistics omit still-open holdings."
          }
        ],
        "links": []
      },
      {
        "id": "can-it-lose-money",
        "title": "Can it lose money?",
        "body": [
          "Yes. Coins can lose most or all of their value, fees can exceed gross gains, and execution can differ from the signal model. NoGuru intentionally has no stop-loss: the strategy does not close a holding at a defined loss. Unsold losses still reduce your account’s value, and recovery is not assured. Read the risks →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Yes. Coins can lose most or all of their value, fees can exceed gross gains, and execution can differ from the signal model. NoGuru intentionally has no stop-loss: the strategy does not close a holding at a defined loss. Unsold losses still reduce your account’s value, and recovery is not assured. Read the risks →"
          }
        ],
        "links": [
          {
            "label": "Read the risks →",
            "url": "?page=risks"
          }
        ]
      },
      {
        "id": "why-buy-again-when-the-price-falls",
        "title": "Why buy again when the price falls?",
        "body": [
          "A lower-price purchase can reduce the average paid per coin. It also commits more money to that coin. A target above the new average may still be below your first purchase price. This does not identify a bottom or guarantee recovery. Walk through the numbers →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A lower-price purchase can reduce the average paid per coin. It also commits more money to that coin. A target above the new average may still be below your first purchase price. This does not identify a bottom or guarantee recovery. Walk through the numbers →"
          }
        ],
        "links": [
          {
            "label": "Walk through the numbers →",
            "url": "?page=examples"
          }
        ]
      },
      {
        "id": "are-published-gains-what-i-would-earn",
        "title": "Are published gains what I would earn?",
        "body": [
          "No. The public record is an operator-published signal model at its stated sizing and before fees. Your start time, fills, settings, exchange and costs differ. Completed gains also exclude open losses. How to read the record →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "No. The public record is an operator-published signal model at its stated sizing and before fees. Your start time, fills, settings, exchange and costs differ. Completed gains also exclude open losses. How to read the record →"
          }
        ],
        "links": [
          {
            "label": "How to read the record →",
            "url": "?page=methodology"
          }
        ]
      },
      {
        "id": "do-i-need-both-noguru-and-cornix",
        "title": "Do I need both NoGuru and Cornix?",
        "body": [
          "The public NoGuru route uses Cornix for automated execution. Advanced is sufficient for the standard NoGuru Signals Bot setup; Premium is not the required minimum. They have separate access and billing arrangements. Cornix’s demo environment is free independently of its live Premium trial; NoGuru channel access remains separate. Cornix promotions may affect its cost, subject to eligibility. Compare the costs →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The public NoGuru route uses Cornix for automated execution. Advanced is sufficient for the standard NoGuru Signals Bot setup; Premium is not the required minimum. They have separate access and billing arrangements. Cornix’s demo environment is free independently of its live Premium trial; NoGuru channel access remains separate. Cornix promotions may affect its cost, subject to eligibility. Compare the costs →"
          }
        ],
        "links": [
          {
            "label": "Compare the costs →",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "do-the-two-14-day-trials-start-together",
        "title": "Do the two 14-day trials start together?",
        "body": [
          "The two trials have separate clocks. Cornix starts its trial on the first trade, including a demo or backtest. Check the NoGuru activation and expiry shown by the membership bot; do not assume starting one starts or extends the other. See the trial guide →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The two trials have separate clocks. Cornix starts its trial on the first trade, including a demo or backtest. Check the NoGuru activation and expiry shown by the membership bot; do not assume starting one starts or extends the other. See the trial guide →"
          }
        ],
        "links": [
          {
            "label": "See the trial guide →",
            "url": "?page=setup-guide"
          }
        ]
      },
      {
        "id": "how-do-noguru-payments-and-renewals-work",
        "title": "How do NoGuru payments and renewals work?",
        "body": [
          "NoGuru gives 14 days free once per Telegram account. To continue after free access ends, pay the crypto invoice for your chosen 1, 3, 6 or 12-month period. Published discounts for 3, 6 and 12 months are 10%, 15% and 20%. NoGuru does not renew automatically.",
          "The bot sends a fresh invoice three days before paid expiry. If you do not renew a paid subscription, a 24-hour grace period applies before channel access ends. The founding rate ends if the subscription lapses. This grace period does not extend the 14-day trial; any earned free access is separate. Read the payment and renewal rules →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru gives 14 days free once per Telegram account. To continue after free access ends, pay the crypto invoice for your chosen 1, 3, 6 or 12-month period. Published discounts for 3, 6 and 12 months are 10%, 15% and 20%. NoGuru does not renew automatically."
          },
          {
            "type": "paragraph",
            "text": "The bot sends a fresh invoice three days before paid expiry. If you do not renew a paid subscription, a 24-hour grace period applies before channel access ends. The founding rate ends if the subscription lapses. This grace period does not extend the 14-day trial; any earned free access is separate. Read the payment and renewal rules →"
          }
        ],
        "links": [
          {
            "label": "Read the payment and renewal rules →",
            "url": "?page=pricing#renewals"
          }
        ]
      },
      {
        "id": "is-cornix-s-48-hour-rule-the-same-as-noguru-s-grace-period",
        "title": "Is Cornix’s 48-hour rule the same as NoGuru’s grace period?",
        "body": [
          "No. NoGuru’s 24-hour grace period concerns paid membership renewal. Cornix’s standard paid-expiry rule continues managing open trades for 48 hours, then closes them internally; the holdings remain at the exchange. Cornix’s billing guide also states 48 hours of management after a free trial ends without payment. Legacy Cornix accounts and failed PayPal renewals have separate rules. Read Cornix’s billing and expiry rules ↗"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "No. NoGuru’s 24-hour grace period concerns paid membership renewal. Cornix’s standard paid-expiry rule continues managing open trades for 48 hours, then closes them internally; the holdings remain at the exchange. Cornix’s billing guide also states 48 hours of management after a free trial ends without payment. Legacy Cornix accounts and failed PayPal renewals have separate rules. Read Cornix’s billing and expiry rules ↗"
          }
        ],
        "links": [
          {
            "label": "Read Cornix’s billing and expiry rules ↗",
            "url": "https://help.cornix.io/en/articles/11892443-managing-subscription-payments-upgrades-and-fees"
          }
        ]
      },
      {
        "id": "which-setup-settings-do-i-use",
        "title": "Which setup settings do I use?",
        "body": [
          "Use a dedicated sub-account containing only the funds allocated to NoGuru. Enable spot trading on its API connection, never withdrawals. Join the invited channel using the Telegram account linked to Cornix. The operator’s shared-bot route copies its settings after you check the account and choose Create & Activate.",
          "For manual setup, create a Cornix Signals Bot following the channel. Set a 3% Percentage fallback , check “Only use if not defined by group” so each signal’s own amount takes precedence, and leave other settings at defaults. The 3% fallback is not an instruction to override every signal’s size. Follow the original NoGuru setup →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Use a dedicated sub-account containing only the funds allocated to NoGuru. Enable spot trading on its API connection, never withdrawals. Join the invited channel using the Telegram account linked to Cornix. The operator’s shared-bot route copies its settings after you check the account and choose Create & Activate."
          },
          {
            "type": "paragraph",
            "text": "For manual setup, create a Cornix Signals Bot following the channel. Set a 3% Percentage fallback , check “Only use if not defined by group” so each signal’s own amount takes precedence, and leave other settings at defaults. The 3% fallback is not an instruction to override every signal’s size. Follow the original NoGuru setup →"
          }
        ],
        "links": [
          {
            "label": "Follow the original NoGuru setup →",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "can-noguru-withdraw-my-funds",
        "title": "Can NoGuru withdraw my funds?",
        "body": [
          "The intended API setup permits trading with withdrawals disabled. Your assets remain at your exchange. That limits one permission; it does not eliminate malicious trading, exchange custody or operational risk. Never share your secret key."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The intended API setup permits trading with withdrawals disabled. Your assets remain at your exchange. That limits one permission; it does not eliminate malicious trading, exchange custody or operational risk. Never share your secret key."
          }
        ],
        "links": []
      },
      {
        "id": "which-exchanges-can-i-use",
        "title": "Which exchanges can I use?",
        "body": [
          "Cornix supports several venues and product types. NoGuru identifies Binance as its most-tested setup. Check the specific NoGuru configuration as well as Cornix support: spot features, pairs, country restrictions and your account entity all matter. See every listed exchange →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix supports several venues and product types. NoGuru identifies Binance as its most-tested setup. Check the specific NoGuru configuration as well as Cornix support: spot features, pairs, country restrictions and your account entity all matter. See every listed exchange →"
          }
        ],
        "links": [
          {
            "label": "See every listed exchange →",
            "url": "?page=exchanges"
          }
        ]
      },
      {
        "id": "what-happens-when-i-stop-or-cancel",
        "title": "What happens when I stop or cancel?",
        "body": [
          "NoGuru renews manually; stop paying by not renewing its invoice. Cornix billing has its own cancellation controls. Stopping a bot and closing a trade are separate: Cornix offers keeping coins or selling at market after a fill. Neither cancelling a bill nor revoking an API key automatically sells coins. Inspect pending orders and holdings, read the actual confirmation, and verify the result. Understand stopping →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru renews manually; stop paying by not renewing its invoice. Cornix billing has its own cancellation controls. Stopping a bot and closing a trade are separate: Cornix offers keeping coins or selling at market after a fill. Neither cancelling a bill nor revoking an API key automatically sells coins. Inspect pending orders and holdings, read the actual confirmation, and verify the result. Understand stopping →"
          }
        ],
        "links": [
          {
            "label": "Understand stopping →",
            "url": "?page=risks"
          }
        ]
      },
      {
        "id": "can-i-automatically-accumulate-bitcoin",
        "title": "Can I automatically accumulate Bitcoin?",
        "body": [
          "Automatic conversion of profits into BTC is not a verified feature of the public NoGuru/Cornix offer. Any manual exchange conversion is your own separate action and can reduce funds available to the strategy."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Automatic conversion of profits into BTC is not a verified feature of the public NoGuru/Cornix offer. Any manual exchange conversion is your own separate action and can reduce funds available to the strategy."
          }
        ],
        "links": []
      },
      {
        "id": "is-it-completely-hands-off",
        "title": "Is it completely hands-off?",
        "body": [
          "Cornix executes the signals automatically once configured; you do not enter every order by hand. NoGuru’s setup guide asks you to use the trial to check signal arrival and execution. Reviewing balances, holdings, alerts and expiry dates is practical oversight, not a requirement to watch charts constantly or approve each trade manually. See the documented setup →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix executes the signals automatically once configured; you do not enter every order by hand. NoGuru’s setup guide asks you to use the trial to check signal arrival and execution. Reviewing balances, holdings, alerts and expiry dates is practical oversight, not a requirement to watch charts constantly or approve each trade manually. See the documented setup →"
          }
        ],
        "links": [
          {
            "label": "See the documented setup →",
            "url": "?page=faq#faq-setup"
          }
        ]
      },
      {
        "id": "where-can-i-learn-the-terminology",
        "title": "Where can I learn the terminology?",
        "body": [
          "The glossary explains common terms, and the Academy groups deeper lessons. Generic lessons about leverage or stop-losses do not describe NoGuru's actual spot/no-stop configuration.",
          "Your next question"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The glossary explains common terms, and the Academy groups deeper lessons. Generic lessons about leverage or stop-losses do not describe NoGuru's actual spot/no-stop configuration."
          },
          {
            "type": "paragraph",
            "text": "Your next question"
          }
        ],
        "links": [
          {
            "label": "glossary",
            "url": "?page=glossary"
          },
          {
            "label": "Academy",
            "url": "?page=academy"
          }
        ]
      },
      {
        "id": "take-it-one-question-at-a-time",
        "title": "Take it one question at a time.",
        "body": [
          "This is a guide to the site's reviewed answers, not an AI or a human adviser. Choose a topic or type a question to match a saved topic. Nothing you type is sent to a server or saved between visits.",
          "Prefer a regular FAQ? Browse every answer →",
          "Start wherever you are. I can explain the process, the costs, the two trials, or what happens when a coin keeps falling.",
          "Use general questions; never enter account details or API secrets. No personalised investment advice."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "This is a guide to the site's reviewed answers, not an AI or a human adviser. Choose a topic or type a question to match a saved topic. Nothing you type is sent to a server or saved between visits."
          },
          {
            "type": "paragraph",
            "text": "Prefer a regular FAQ? Browse every answer →"
          },
          {
            "type": "paragraph",
            "text": "Start wherever you are. I can explain the process, the costs, the two trials, or what happens when a coin keeps falling."
          },
          {
            "type": "paragraph",
            "text": "Use general questions; never enter account details or API secrets. No personalised investment advice."
          }
        ],
        "links": [
          {
            "label": "Prefer a regular FAQ? Browse every answer →",
            "url": "?page=faq#all-questions"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/faq.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "exchanges": {
    "title": "Compatibility is a starting point. Check the whole setup.",
    "eyebrow": "Exchanges / checked 31 Oct 2026",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "check-cornix-service-eligibility-first",
        "title": "Check Cornix service eligibility first.",
        "body": [
          "Cornix’s published terms restrict access for several jurisdictions, including the US, UK and Canada. Their criteria extend beyond residence to other connections such as citizenship. Read the full Cornix terms ↗ , checked 31 October 2026 (page dated 4 September 2023). No worldwide eligibility is implied. Exchange access, NoGuru configuration and promotional eligibility are separate checks.",
          "01 / Cornix compatibility"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix’s published terms restrict access for several jurisdictions, including the US, UK and Canada. Their criteria extend beyond residence to other connections such as citizenship. Read the full Cornix terms ↗ , checked 31 October 2026 (page dated 4 September 2023). No worldwide eligibility is implied. Exchange access, NoGuru configuration and promotional eligibility are separate checks."
          },
          {
            "type": "paragraph",
            "text": "01 / Cornix compatibility"
          }
        ],
        "links": [
          {
            "label": "full Cornix terms ↗",
            "url": "https://cornix.io/terms/"
          }
        ]
      },
      {
        "id": "can-it-connect",
        "title": "Can it connect?",
        "body": [
          "The venue, account domain and product type must be supported by Cornix. Spot and futures support are different.",
          "02 / NoGuru configuration"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The venue, account domain and product type must be supported by Cornix. Spot and futures support are different."
          },
          {
            "type": "paragraph",
            "text": "02 / NoGuru configuration"
          }
        ],
        "links": []
      },
      {
        "id": "can-this-strategy-run",
        "title": "Can this strategy run?",
        "body": [
          "The signal channel, spot pairs, order sizes, reserve and dedicated account must match a verified setup.",
          "03 / Your eligibility"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The signal channel, spot pairs, order sizes, reserve and dedicated account must match a verified setup."
          },
          {
            "type": "paragraph",
            "text": "03 / Your eligibility"
          }
        ],
        "links": []
      },
      {
        "id": "may-you-use-it",
        "title": "May you use it?",
        "body": [
          "Residency, exchange entity, account access and local restrictions must all permit the proposed use."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Residency, exchange entity, account access and local restrictions must all permit the proposed use."
          }
        ],
        "links": []
      },
      {
        "id": "which-setup-does-noguru-describe",
        "title": "Which setup does NoGuru describe?",
        "body": [
          "NoGuru’s setup guide describes Binance as its most-tested venue. For any venue, confirm that the NoGuru channel, pairs and settings work with your specific account. A Cornix integration is not confirmation of NoGuru support.",
          "Cornix’s guide names the 12 venues shown here, although its heading says “13 exchanges”."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru’s setup guide describes Binance as its most-tested venue. For any venue, confirm that the NoGuru channel, pairs and settings work with your specific account. A Cornix integration is not confirmation of NoGuru support."
          },
          {
            "type": "table",
            "headers": [
              "Venue",
              "Cornix products",
              "NoGuru setup",
              "Country, account & feature limits",
              "Official guide"
            ],
            "rows": [
              [
                "Binance",
                "Spot, Futures, Inverse Spot: Listed",
                "NoGuru describes Binance as its most-tested venue; actual account and country still need verification",
                "Check the exchange’s country rules, account entity and supported pairs before activation. Binance.us is explicitly unsupported by Cornix. Cornix says Binance subaccounts require manual API creation; do not promise Quick Connect for this setup.",
                "Binance setup ↗"
              ],
              [
                "Bybit",
                "Spot, Futures, Inverse Spot: Listed",
                "Cornix spot integration; confirm NoGuru configuration before use",
                "Check the exchange’s country rules, account entity and supported pairs before activation. Bybit.eu is explicitly unsupported by Cornix.",
                "Bybit setup ↗"
              ],
              [
                "OKX",
                "Spot, Futures, Inverse Spot: Listed",
                "Cornix spot integration; confirm NoGuru configuration before use",
                "Check the exchange’s country rules, account entity and supported pairs before activation. Cornix’s Help Center lists only okx.com and excludes okx.eu and okx.us. Its Europe page separately says my.okx.com (OKX EU) connects for spot and futures. The documentation differs on regional coverage; check the exact account domain and NoGuru pair and sub-account configuration.",
                "OKX setup ↗"
              ],
              [
                "Bitget",
                "Spot, Futures, Inverse Spot: Listed",
                "Cornix spot integration; confirm NoGuru configuration before use",
                "Check the exchange’s country rules, account entity and supported pairs before activation.",
                "Bitget setup ↗"
              ],
              [
                "KuCoin",
                "Spot, Futures Spot: Listed",
                "Cornix spot integration; confirm NoGuru configuration before use",
                "Check the exchange’s country rules, account entity and supported pairs before activation.",
                "KuCoin setup ↗"
              ],
              [
                "BingX",
                "Spot, Futures Spot: Listed",
                "Cornix spot integration; confirm NoGuru configuration before use",
                "Check the exchange’s country rules, account entity and supported pairs before activation.",
                "BingX setup ↗"
              ],
              [
                "Coinbase",
                "Spot Spot: Listed",
                "Cornix spot integration; confirm NoGuru configuration before use",
                "Check the exchange’s country rules, account entity and supported pairs before activation.",
                "Coinbase setup ↗"
              ],
              [
                "Huobi.pro / HTX",
                "Spot Spot: Listed",
                "Cornix spot integration; confirm NoGuru configuration before use",
                "Check the exchange’s country rules, account entity and supported pairs before activation.",
                "Huobi.pro setup ↗"
              ],
              [
                "MEXC",
                "Spot, Futures Spot: Listed",
                "Cornix spot integration; confirm NoGuru configuration before use",
                "Check the exchange’s country rules, account entity and supported pairs before activation. Cornix currently offers Premium features at no additional charge for connected MEXC accounts only, with no fixed campaign end date. This does not establish NoGuru configuration/country eligibility.",
                "MEXC setup ↗"
              ],
              [
                "Kraken",
                "Spot Spot: Listed",
                "Cornix spot integration; confirm NoGuru configuration before use",
                "Check the exchange’s country rules, account entity and supported pairs before activation.",
                "Kraken setup ↗"
              ],
              [
                "Hyperliquid",
                "Futures Spot: Conflicting sources",
                "No confirmed Cornix spot route for NoGuru",
                "Check the exchange’s country rules, account entity and supported pairs before activation. Cornix Help Center lists futures only, but Cornix Europe marketing says spot and futures. Treat spot support as conflicted/unconfirmed. Cornix API guide says Hyperliquid subaccounts are not supported, conflicting with NoGuru dedicated-subaccount requirement.",
                "Hyperliquid setup ↗"
              ],
              [
                "BloFin",
                "Futures, Inverse Spot: Not listed",
                "No confirmed Cornix spot route for NoGuru",
                "Check the exchange’s country rules, account entity and supported pairs before activation.",
                "BloFin setup ↗"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Cornix’s guide names the 12 venues shown here, although its heading says “13 exchanges”."
          }
        ],
        "links": [
          {
            "label": "Binance setup ↗",
            "url": "https://help.cornix.io/en/articles/10205046-how-to-create-and-update-api-keys-binance-spot-futures-and-coin-m"
          },
          {
            "label": "Bybit setup ↗",
            "url": "https://help.cornix.io/en/articles/5814845-how-to-create-and-update-api-keys-bybit-spot-futures"
          },
          {
            "label": "OKX setup ↗",
            "url": "https://help.cornix.io/en/articles/8050448-how-to-create-api-keys-okx-spot-futures"
          },
          {
            "label": "Bitget setup ↗",
            "url": "https://help.cornix.io/en/articles/9138072-how-to-create-api-keys-bitget-spot-futures"
          },
          {
            "label": "KuCoin setup ↗",
            "url": "https://help.cornix.io/en/articles/8056904-how-to-create-api-keys-kucoin-spot-futures"
          },
          {
            "label": "BingX setup ↗",
            "url": "https://help.cornix.io/en/articles/11470179-how-to-create-api-keys-bingx-spot-futures"
          },
          {
            "label": "Coinbase setup ↗",
            "url": "https://help.cornix.io/en/articles/9669489-how-to-create-api-keys-coinbase-spot"
          },
          {
            "label": "Huobi.pro setup ↗",
            "url": "https://help.cornix.io/en/articles/5814849-how-to-create-api-keys-huobi"
          },
          {
            "label": "MEXC setup ↗",
            "url": "https://help.cornix.io/en/articles/14688162-how-to-create-api-keys-mexc-futures-and-spot"
          },
          {
            "label": "Kraken setup ↗",
            "url": "https://help.cornix.io/en/articles/16034148-how-to-create-api-keys-kraken-spot"
          },
          {
            "label": "Hyperliquid setup ↗",
            "url": "https://help.cornix.io/en/articles/11010094-how-to-create-api-keys-hyperliquid"
          },
          {
            "label": "BloFin setup ↗",
            "url": "https://help.cornix.io/en/articles/13158910-how-to-create-api-keys-blofin-futures-inverse"
          }
        ]
      },
      {
        "id": "the-domain-can-change-the-answer",
        "title": "The domain can change the answer.",
        "body": [
          "Cornix’s support guide explicitly excludes Binance.us and Bybit.eu. For OKX, its Help Center excludes okx.eu and okx.us, while its Europe page separately describes my.okx.com (OKX EU) support. The table above preserves that conflict. A similar name or logo does not make regional accounts interchangeable.",
          "NoGuru's linked Cornix offer excludes UK residents. Cornix’s service terms also carry restrictions; see the separate eligibility checkpoint above. NoGuru’s own country scope still needs confirmation."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix’s support guide explicitly excludes Binance.us and Bybit.eu. For OKX, its Help Center excludes okx.eu and okx.us, while its Europe page separately describes my.okx.com (OKX EU) support. The table above preserves that conflict. A similar name or logo does not make regional accounts interchangeable."
          },
          {
            "type": "paragraph",
            "text": "NoGuru's linked Cornix offer excludes UK residents. Cornix’s service terms also carry restrictions; see the separate eligibility checkpoint above. NoGuru’s own country scope still needs confirmation."
          }
        ],
        "links": []
      },
      {
        "id": "before-connecting-a-real-account",
        "title": "Before connecting a real account",
        "body": [
          "Do not use a VPN, false country information or another workaround to access a restricted venue."
        ],
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Confirm residency and the exchange's actual legal entity.",
              "Check spot API access, all required pairs and order minimums.",
              "Confirm the NoGuru channel supports that exact configuration.",
              "Use the required dedicated account or subaccount.",
              "Allow only required trading permissions; disable withdrawals."
            ]
          },
          {
            "type": "paragraph",
            "text": "Do not use a VPN, false country information or another workaround to access a restricted venue."
          }
        ],
        "links": []
      },
      {
        "id": "a-setup-guide-is-not-an-endorsement",
        "title": "A setup guide is not an endorsement.",
        "body": [
          "The links explain Cornix's connection process. They do not establish exchange safety, solvency, a suitable allocation or NoGuru eligibility. Hyperliquid's spot support is inconsistent across Cornix pages and its guide says subaccounts are unsupported; no NoGuru spot route is confirmed there. BloFin is listed for futures and inverse products, not spot.",
          "Binance subaccounts require manual API keys under Cornix's instructions; do not assume Quick Connect works for that setup. Follow the current official guide without sharing secrets."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The links explain Cornix's connection process. They do not establish exchange safety, solvency, a suitable allocation or NoGuru eligibility. Hyperliquid's spot support is inconsistent across Cornix pages and its guide says subaccounts are unsupported; no NoGuru spot route is confirmed there. BloFin is listed for futures and inverse products, not spot."
          },
          {
            "type": "paragraph",
            "text": "Binance subaccounts require manual API keys under Cornix's instructions; do not assume Quick Connect works for that setup. Follow the current official guide without sharing secrets."
          }
        ],
        "links": [
          {
            "label": "Go to the onboarding sequence →",
            "url": "?page=setup-guide"
          }
        ]
      },
      {
        "id": "sources-scope",
        "title": "Sources & scope",
        "body": [
          "Exchange directory checked 31 October 2026; the OKX regional-source statements were corrected against Cornix’s current pages on 1 November 2026. Published offers can change; your actual eligibility and checkout terms control."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Exchange directory checked 31 October 2026; the OKX regional-source statements were corrected against Cornix’s current pages on 1 November 2026. Published offers can change; your actual eligibility and checkout terms control."
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Cornix supported exchanges ↗",
              "NoGuru current setup ↗",
              "Cornix Europe availability ↗"
            ]
          }
        ],
        "links": [
          {
            "label": "Cornix supported exchanges ↗",
            "url": "https://help.cornix.io/en/articles/5814836-supported-exchanges"
          },
          {
            "label": "NoGuru current setup ↗",
            "url": "?page=how-it-works"
          },
          {
            "label": "Cornix Europe availability ↗",
            "url": "https://cornix.io/europe/"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/exchanges.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "resources": {
    "title": "Know where the next click takes you.",
    "eyebrow": "Official links & learning paths",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Understand the basics"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Understand the basics"
          }
        ],
        "links": []
      },
      {
        "id": "new-to-this",
        "title": "New to this?",
        "body": [
          "Start with the three services and trade process . Try a worked example , then read the risks . Use the glossary whenever a term is unfamiliar.",
          "Inspect the details"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Start with the three services and trade process . Try a worked example , then read the risks . Use the glossary whenever a term is unfamiliar."
          },
          {
            "type": "paragraph",
            "text": "Inspect the details"
          }
        ],
        "links": [
          {
            "label": "the three services and trade process",
            "url": "?page=how-it-works"
          },
          {
            "label": "a worked example",
            "url": "?page=examples"
          },
          {
            "label": "the risks",
            "url": "?page=risks"
          },
          {
            "label": "glossary",
            "url": "?page=glossary"
          }
        ]
      },
      {
        "id": "know-crypto",
        "title": "Know crypto?",
        "body": [
          "Go directly to the dated record and its measurement limits . Then check costs , exchange configuration and setup .",
          "Ask the next question"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Go directly to the dated record and its measurement limits . Then check costs , exchange configuration and setup ."
          },
          {
            "type": "paragraph",
            "text": "Ask the next question"
          }
        ],
        "links": [
          {
            "label": "the dated record",
            "url": "?page=evidence"
          },
          {
            "label": "its measurement limits",
            "url": "?page=methodology"
          },
          {
            "label": "costs",
            "url": "?page=pricing"
          },
          {
            "label": "exchange configuration",
            "url": "?page=exchanges"
          },
          {
            "label": "setup",
            "url": "?page=setup-guide"
          }
        ]
      },
      {
        "id": "still-exploring",
        "title": "Still exploring?",
        "body": [
          "The conversational guide routes you to saved answers. The Academy explains deeper concepts. The daily archive preserves historical notes with their limits."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The conversational guide routes you to saved answers. The Academy explains deeper concepts. The daily archive preserves historical notes with their limits."
          }
        ],
        "links": [
          {
            "label": "conversational guide",
            "url": "?page=learn"
          },
          {
            "label": "Academy",
            "url": "?page=academy"
          },
          {
            "label": "daily archive",
            "url": "?page=digest"
          }
        ]
      },
      {
        "id": "product-setup",
        "title": "Product & setup",
        "body": [],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Destination",
              "Why open it",
              "Keep in mind"
            ],
            "rows": [
              [
                "NoGuru membership bot ↗",
                "Review trial eligibility, membership and access in Telegram.",
                "This preview does not activate the bot or complete signup. Confirm the actual offer and expiry before proceeding."
              ],
              [
                "Current official setup guide ↗",
                "Find the existing Cornix setup steps and screenshots.",
                "The operator documents a dedicated Stepgrid sub-account and two Cornix setup paths, including the exact manual settings. Follow the setup steps →"
              ],
              [
                "NoGuru’s shared Cornix bot ↗",
                "Open the operator’s shared bot page.",
                "This is a shared-bot setup link, not a Cornix Marketplace listing. Cornix login may be required to copy it. Check the account and live or demo environment before making a copy. Start with NoGuru access and the setup guide →"
              ],
              [
                "NoGuru's Cornix signup link ↗ (Ad / referral link)",
                "Open the currently published signup destination.",
                "It includes referral attribution. A click does not establish discount, country eligibility or trial entitlement. Cornix is a separate service."
              ],
              [
                "Cornix demo explained ↗",
                "Read how the free simulated environment works.",
                "Free demo access and live Premium trial entitlement are different; channel membership is separate again."
              ],
              [
                "Cornix Help Center ↗",
                "Read current documentation for tools, billing and API connections.",
                "Platform functionality is broader than the actual NoGuru strategy."
              ],
              [
                "Existing setup short ↗",
                "Watch the video linked from the current setup page.",
                "Interfaces and offers can change. Follow the current written instructions and this site's evidence boundaries."
              ]
            ]
          }
        ],
        "links": [
          {
            "label": "NoGuru membership bot ↗",
            "url": "?page=trial"
          },
          {
            "label": "Current official setup guide ↗",
            "url": "?page=how-it-works"
          },
          {
            "label": "Follow the setup steps →",
            "url": "?page=setup-guide#setup"
          },
          {
            "label": "NoGuru’s shared Cornix bot ↗",
            "url": "?page=trial"
          },
          {
            "label": "Start with NoGuru access and the setup guide →",
            "url": "?page=setup-guide#next-step"
          },
          {
            "label": "NoGuru's Cornix signup link ↗ (Ad / referral link)",
            "url": "?page=trial"
          },
          {
            "label": "Cornix demo explained ↗",
            "url": "https://cornix.io/features/demo-account/"
          },
          {
            "label": "Cornix Help Center ↗",
            "url": "https://help.cornix.io/"
          },
          {
            "label": "Existing setup short ↗",
            "url": "https://youtube.com/shorts/DrMmjJWJ-U4"
          }
        ]
      },
      {
        "id": "ask-the-service-that-handles-it",
        "title": "Ask the service that handles it.",
        "body": [
          "NoGuru, Cornix and your exchange have different responsibilities."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru, Cornix and your exchange have different responsibilities."
          }
        ],
        "links": []
      },
      {
        "id": "noguru-access-signals",
        "title": "NoGuru access & signals",
        "body": [
          "For membership or strategy questions, NoGuru publishes this email address in its official contact notice.",
          "noguru_noguru@proton.me",
          "View the published contact notice ↗ · checked 2 November 2026."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "For membership or strategy questions, NoGuru publishes this email address in its official contact notice."
          },
          {
            "type": "paragraph",
            "text": "noguru_noguru@proton.me"
          },
          {
            "type": "paragraph",
            "text": "View the published contact notice ↗ · checked 2 November 2026."
          }
        ],
        "links": [
          {
            "label": "View the published contact notice ↗",
            "url": "?page=impressum"
          }
        ]
      },
      {
        "id": "cornix-tools-connection",
        "title": "Cornix tools & connection",
        "body": [
          "For Cornix screens, bot controls, subscription billing or its API connection, use Cornix’s own help and support routes."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "For Cornix screens, bot controls, subscription billing or its API connection, use Cornix’s own help and support routes."
          }
        ],
        "links": [
          {
            "label": "Cornix Help Center ↗",
            "url": "https://help.cornix.io/"
          }
        ]
      },
      {
        "id": "your-exchange-account",
        "title": "Your exchange account",
        "body": [
          "For exchange identity checks, deposits, withdrawals or account access, use support inside the exchange’s official app or website.",
          "Never send a password, API secret or seed phrase. Do not give anyone withdrawal permission or control of your account."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "For exchange identity checks, deposits, withdrawals or account access, use support inside the exchange’s official app or website."
          },
          {
            "type": "paragraph",
            "text": "Never send a password, API secret or seed phrase. Do not give anyone withdrawal permission or control of your account."
          }
        ],
        "links": [
          {
            "label": "Check the exchange setup information →",
            "url": "?page=exchanges"
          }
        ]
      },
      {
        "id": "recognise-official-noguru-contacts",
        "title": "Recognise official NoGuru contacts.",
        "body": [
          "NoGuru’s published anti-impersonation notice identifies noguru.io, the Telegram channels linked from that site and the membership bot named on its pricing page as its official surfaces. The notice says NoGuru never messages first, asks for keys or seed phrases, or offers account management.",
          "Start from the official links on this page. An unsolicited message claiming to be NoGuru is not a reason to share credentials or transfer control of an account. Read the operator’s anti-impersonation notice ↗",
          "Published contact policy checked 1 November 2026. This identifies the operator’s stated contact practice; it does not verify a person who sends you a message."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru’s published anti-impersonation notice identifies noguru.io, the Telegram channels linked from that site and the membership bot named on its pricing page as its official surfaces. The notice says NoGuru never messages first, asks for keys or seed phrases, or offers account management."
          },
          {
            "type": "paragraph",
            "text": "Start from the official links on this page. An unsolicited message claiming to be NoGuru is not a reason to share credentials or transfer control of an account. Read the operator’s anti-impersonation notice ↗"
          },
          {
            "type": "paragraph",
            "text": "Published contact policy checked 1 November 2026. This identifies the operator’s stated contact practice; it does not verify a person who sends you a message."
          }
        ],
        "links": [
          {
            "label": "Read the operator’s anti-impersonation notice ↗",
            "url": "?page=impressum"
          }
        ]
      },
      {
        "id": "public-channels-from-the-existing-site",
        "title": "Public channels from the existing site.",
        "body": [
          "These are NoGuru’s public channels. Each service controls availability and moderation.",
          "Exchange referral links are not listed here because they do not establish NoGuru configuration or country eligibility. Existing earned access is preserved; check the entitlement conditions ."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "These are NoGuru’s public channels. Each service controls availability and moderation."
          },
          {
            "type": "paragraph",
            "text": "Exchange referral links are not listed here because they do not establish NoGuru configuration or country eligibility. Existing earned access is preserved; check the entitlement conditions ."
          }
        ],
        "links": [
          {
            "label": "the entitlement conditions",
            "url": "?page=pricing#entitlements"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/resources.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "risks": {
    "title": "Automation changes the work. It does not remove the risk.",
    "eyebrow": "Before you allocate",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "you-can-lose-the-money-you-allocate",
        "title": "You can lose the money you allocate.",
        "body": [
          "A target sale is an instruction, not a promise that the market will reach that price. A loss still exists when a coin is unsold. Do not rely on trading proceeds to meet essential expenses."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A target sale is an instruction, not a promise that the market will reach that price. A loss still exists when a coin is unsold. Do not rely on trading proceeds to meet essential expenses."
          }
        ],
        "links": []
      },
      {
        "id": "lower-prices-can-keep-getting-lower",
        "title": "Lower prices can keep getting lower.",
        "body": [
          "Additional buys can reduce the average purchase price, but increase the amount exposed to the same coin. A token may lose most or all of its value, lose liquidity or be delisted."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Additional buys can reduce the average purchase price, but increase the amount exposed to the same coin. A token may lose most or all of its value, lose liquidity or be delisted."
          }
        ],
        "links": []
      },
      {
        "id": "there-is-no-promised-holding-period",
        "title": "There is no promised holding period.",
        "body": [
          "Capital in an open position is not free cash. Holdings can remain below cost for months or longer. Waiting does not guarantee recovery, and selling early may realise a loss."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Capital in an open position is not free cash. Holdings can remain below cost for months or longer. Waiting does not guarantee recovery, and selling early may realise a loss."
          }
        ],
        "links": []
      },
      {
        "id": "where-automation-can-break-down",
        "title": "Where automation can break down.",
        "body": [
          "There are several systems between a signal and a completed sale. You remain responsible for checking what actually happened."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "There are several systems between a signal and a completed sale. You remain responsible for checking what actually happened."
          }
        ],
        "links": []
      },
      {
        "id": "signals-execution",
        "title": "Signals & execution",
        "body": [
          "Messages, APIs or services can fail or arrive late. Orders may be rejected, partially filled or executed at a different price. Your settings, start time and available balance affect the result."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Messages, APIs or services can fail or arrive late. Orders may be rejected, partially filled or executed at a different price. Your settings, start time and available balance affect the result."
          }
        ],
        "links": []
      },
      {
        "id": "the-exchange-api-key",
        "title": "The exchange & API key",
        "body": [
          "Your assets remain with your exchange, subject to its custody, security and solvency risks. Trading-only permission limits withdrawals; a compromised key can still cause harmful trades."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Your assets remain with your exchange, subject to its custody, security and solvency risks. Trading-only permission limits withdrawals; a compromised key can still cause harmful trades."
          }
        ],
        "links": []
      },
      {
        "id": "costs-concentration",
        "title": "Costs & concentration",
        "body": [
          "Trading fees, spread, slippage and two separate subscription arrangements can outweigh gross gains. Several coins may fall together. Reserve cash does not guarantee protection.",
          "Stay in control"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trading fees, spread, slippage and two separate subscription arrangements can outweigh gross gains. Several coins may fall together. Reserve cash does not guarantee protection."
          },
          {
            "type": "paragraph",
            "text": "Stay in control"
          }
        ],
        "links": []
      },
      {
        "id": "monitoring-is-still-part-of-the-job",
        "title": "Monitoring is still part of the job.",
        "body": [
          "Check open positions, available funds, Cornix alerts, rejected orders and API permissions. Review renewal dates and exchange notices. No particular checking frequency can guarantee that a failure is caught in time."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Check open positions, available funds, Cornix alerts, rejected orders and API permissions. Review renewal dates and exchange notices. No particular checking frequency can guarantee that a failure is caught in time."
          }
        ],
        "links": [
          {
            "label": "See the setup checks →",
            "url": "?page=setup-guide#before-live"
          }
        ]
      },
      {
        "id": "if-you-want-to-stop",
        "title": "If you want to stop",
        "body": [
          "Pausing, cancelling or letting a trial expire does not automatically sell your coins."
        ],
        "blocks": [
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Inspect. Check coins, cash and pending orders at the exchange, compare them with Cornix, and note both expiry dates.",
              "Choose. Stopping new entries, ending automated management and selling coins are different decisions. Check the actual controls and consequences. A manual sale can realise a loss and incur fees.",
              "Verify. Check the result in each service and manage each subscription separately. Revoking an API key stops automation through it; it does not itself sell coins or confirm that every exchange order is cancelled."
            ]
          },
          {
            "type": "paragraph",
            "text": "Pausing, cancelling or letting a trial expire does not automatically sell your coins."
          }
        ],
        "links": []
      },
      {
        "id": "three-different-actions-billing-automation-and-holdings",
        "title": "Three different actions: billing, automation and holdings",
        "body": [
          "NoGuru billing: it is manually renewed by crypto invoice. To stop renewing, do not pay the next invoice. The published paid-renewal rules explain the reminder, grace period and access ending.",
          "Cornix billing: for billing managed in Cornix, its guide uses Billing → My Plan to cancel automatic renewal. Apple-managed subscriptions are cancelled through Apple. Crypto renewal is manual. Cancelling future billing retains access through the paid period; deleting an app or stopping trading does not cancel the bill.",
          "Bot and trade controls: Cornix bulk deactivation asks whether to keep or close open trades. Closing an unfilled trade cancels its pending orders. For a filled trade, Cornix offers a choice to keep the coins while cancelling orders, or sell at the current market price. A market sale can realise a loss and incur fees. Read the actual confirmation and verify orders and holdings at your exchange.",
          "Cornix cancellation by payment method ↗ · Bot deactivation choices ↗ · Close-trade choices ↗",
          "One specific gap remains: the reviewed documentation does not fully explain new entries, existing ladder/target management and later signal edits after NoGuru channel access is removed while Cornix remains active. Cornix’s platform-expiry rule does not answer that different case.",
          "Evidence, with limits"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru billing: it is manually renewed by crypto invoice. To stop renewing, do not pay the next invoice. The published paid-renewal rules explain the reminder, grace period and access ending."
          },
          {
            "type": "paragraph",
            "text": "Cornix billing: for billing managed in Cornix, its guide uses Billing → My Plan to cancel automatic renewal. Apple-managed subscriptions are cancelled through Apple. Crypto renewal is manual. Cancelling future billing retains access through the paid period; deleting an app or stopping trading does not cancel the bill."
          },
          {
            "type": "paragraph",
            "text": "Bot and trade controls: Cornix bulk deactivation asks whether to keep or close open trades. Closing an unfilled trade cancels its pending orders. For a filled trade, Cornix offers a choice to keep the coins while cancelling orders, or sell at the current market price. A market sale can realise a loss and incur fees. Read the actual confirmation and verify orders and holdings at your exchange."
          },
          {
            "type": "paragraph",
            "text": "Cornix cancellation by payment method ↗ · Bot deactivation choices ↗ · Close-trade choices ↗"
          },
          {
            "type": "paragraph",
            "text": "One specific gap remains: the reviewed documentation does not fully explain new entries, existing ladder/target management and later signal edits after NoGuru channel access is removed while Cornix remains active. Cornix’s platform-expiry rule does not answer that different case."
          },
          {
            "type": "paragraph",
            "text": "Evidence, with limits"
          }
        ],
        "links": [
          {
            "label": "published paid-renewal rules",
            "url": "?page=pricing#renewals"
          },
          {
            "label": "Cornix cancellation by payment method ↗",
            "url": "https://help.cornix.io/en/articles/14220111-how-to-manage-and-cancel-subscription-auto-renewal"
          },
          {
            "label": "Bot deactivation choices ↗",
            "url": "https://help.cornix.io/en/articles/7900358-bulk-actions-on-bots"
          },
          {
            "label": "Close-trade choices ↗",
            "url": "https://help.cornix.io/en/articles/5814888-close-trade"
          }
        ]
      },
      {
        "id": "closed-gains-are-only-part-of-the-picture",
        "title": "Closed gains are only part of the picture.",
        "body": [
          "A record of completed cycles excludes unrealised gains and losses in open holdings. It also does not tell you what a particular subscriber earned after fees and subscriptions."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A record of completed cycles excludes unrealised gains and losses in open holdings. It also does not tell you what a particular subscriber earned after fees and subscriptions."
          }
        ],
        "links": []
      },
      {
        "id": "sources-scope",
        "title": "Sources & scope",
        "body": [
          "Original risk sources checked 31 October 2026. The documented cancellation, bot deactivation and close-trade choices were checked against Cornix’s guides on 1 November 2026. No account controls were used in this review."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Original risk sources checked 31 October 2026. The documented cancellation, bot deactivation and close-trade choices were checked against Cornix’s guides on 1 November 2026. No account controls were used in this review."
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "NoGuru public risk disclaimer ↗",
              "Cornix trial and expiry guide ↗"
            ]
          }
        ],
        "links": [
          {
            "label": "NoGuru public risk disclaimer ↗",
            "url": "?page=disclaimer"
          },
          {
            "label": "Cornix trial and expiry guide ↗",
            "url": "https://help.cornix.io/en/articles/5814827-cornix-free-trial"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/risks.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "setup-guide": {
    "title": "Understand it first. Then try the workflow.",
    "eyebrow": "Getting started",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope.",
          "Older interactive controls are not imported as working inputs. The current worked explanation and setup preview are the local interactive routes."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Open setup preview",
            "url": "?page=setup"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Educational information, not financial advice. A free subscription trial does not make live trading risk-free."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Educational information, not financial advice. A free subscription trial does not make live trading risk-free."
          }
        ],
        "links": []
      },
      {
        "id": "next-step-title",
        "title": "Your next step.",
        "body": [
          "Opens NoGuru’s official service. Review the terms and acknowledgements there. Once per Telegram account; no payment details required. Cornix setup and its trial are separate. Opening a link alone does not activate access.",
          "Want to understand the tools first? Read the Cornix demo instructions ↗ . Simulated funds need no exchange account or API key; NoGuru channel access remains separate."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Opens NoGuru’s official service. Review the terms and acknowledgements there. Once per Telegram account; no payment details required. Cornix setup and its trial are separate. Opening a link alone does not activate access."
          },
          {
            "type": "paragraph",
            "text": "Want to understand the tools first? Read the Cornix demo instructions ↗ . Simulated funds need no exchange account or API key; NoGuru channel access remains separate."
          }
        ],
        "links": [
          {
            "label": "Read the Cornix demo instructions ↗",
            "url": "https://help.cornix.io/en/articles/9853159-demo-accounts-risk-free-trading"
          }
        ]
      },
      {
        "id": "first-check-service-eligibility",
        "title": "First, check service eligibility.",
        "body": [
          "Cornix service restrictions are broader than a promotional offer. Check country and account eligibility before activating either service.",
          "Strategy access"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix service restrictions are broader than a promotional offer. Check country and account eligibility before activating either service."
          },
          {
            "type": "paragraph",
            "text": "Strategy access"
          }
        ],
        "links": [
          {
            "label": "country and account eligibility",
            "url": "?page=exchanges#eligibility"
          }
        ]
      },
      {
        "id": "noguru",
        "title": "NoGuru",
        "body": [
          "Execution tools"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Execution tools"
          }
        ],
        "links": []
      },
      {
        "id": "cornix",
        "title": "Cornix",
        "body": [
          "Starting one trial does not start, reset or extend the other. Write down both expiry dates before enabling real trades. A free trial can still expose real money to market losses if you choose live trading.",
          "Cornix’s free built-in demo uses simulated funds and needs no funded exchange account or API key. Follow channels with a demo Signals Bot; channel access remains separate. A demo cannot verify live exchange fills. Read the demo instructions ↗"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Starting one trial does not start, reset or extend the other. Write down both expiry dates before enabling real trades. A free trial can still expose real money to market losses if you choose live trading."
          },
          {
            "type": "paragraph",
            "text": "Cornix’s free built-in demo uses simulated funds and needs no funded exchange account or API key. Follow channels with a demo Signals Bot; channel access remains separate. A demo cannot verify live exchange fills. Read the demo instructions ↗"
          }
        ],
        "links": [
          {
            "label": "free built-in demo",
            "url": "https://cornix.io/features/demo-account/"
          },
          {
            "label": "Read the demo instructions ↗",
            "url": "https://help.cornix.io/en/articles/9853159-demo-accounts-risk-free-trading"
          }
        ]
      },
      {
        "id": "a-practical-order-for-getting-ready",
        "title": "A practical order for getting ready.",
        "body": [
          "These are NoGuru’s published operator settings for Stepgrid, not a personal recommendation about how much money to commit. You can begin with Cornix’s built-in demo without funding an exchange or creating an API key. The live-account steps below apply when you choose to connect real funds.",
          "Before live trading"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "These are NoGuru’s published operator settings for Stepgrid, not a personal recommendation about how much money to commit. You can begin with Cornix’s built-in demo without funding an exchange or creating an API key. The live-account steps below apply when you choose to connect real funds."
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Understand the strategy and what happens when prices fall Read how the buys and target work , inspect the published record , and try the favourable and adverse scenarios . The strategy has no stop-loss, and there is no fixed holding period.",
              "Check service eligibility and, for live trading, your exchange Check Cornix’s service terms and the exchange comparison . A live exchange account needs eligible spot trading, the required pairs, sub-account support and an API connection that Cornix supports. NoGuru identifies Binance as its most-tested venue; that does not override exchange or country restrictions.",
              "Request NoGuru access, then join the private channel On NoGuru’s original signup page ↗ , enter your Telegram username. Choose Start with 14 days free , or select a paid term and payment asset. Before submission, the page requires four acknowledgements: The terms and risk disclaimer. The setup instructions, including that different settings produce different results. The risk that holdings remain below cost while waiting for a recovery. NoGuru supplies signals; Cornix’s exchange connection and order execution are separate responsibilities. The published free-access flow then directs you to open @NoGuruMembers_bot ↗ and tap Start for invitation delivery. The paid route creates a crypto invoice; the site says the invitation is sent after payment clears. The pricing page also offers a direct Telegram trial route. Use the bot’s invitation to join the Stepgrid channel with the same Telegram account linked to Cornix . The bot also supplies the Academy link. Opening a link alone does not confirm that access has activated. NoGuru gives 14 days free once per Telegram account, without payment details. Check your access start and expiry dates in the NoGuru membership bot. Cornix has a separate trial clock, starting with its first created trade.",
              "Register with Cornix, then choose demo or live Cornix supports email or Telegram registration. In its setup flow, Continue with a Demo Account uses simulated funds; I want to explore instead skips optional setup. The built-in demo needs no exchange or API connection. Cornix does not support connecting external exchange demo accounts or testnets through an API. Link the Telegram account you will use for NoGuru. For a live setup, create and connect the dedicated exchange sub-account described in the next step. Review the official plans and trial rules . Registration alone does not start Cornix’s trial; the first created trade, including a demo or backtest, does. Cornix registration and setup guide ↗",
              "For live trading, create a Stepgrid-only sub-account Demo users can skip this exchange step. For live trading, move only the funds allocated to this strategy into that sub-account. Each signal sizes its buy as a percentage of the whole connected account. Other bots or unrelated funds in the same account would affect that sizing and could consume the reserve intended for deeper buys. Use your exchange’s instructions to create the sub-account and its API connection. Enable spot trading; never enable withdrawals. Keep the reserved funds available for the strategy’s lower buy levels.",
              "Copy the bot, or enter the documented settings Copy route: open NoGuru’s published bot in Cornix ↗ , check the selected account and environment, then choose Create & Activate if you intend to enable the copy. Cornix login is required. Select the intended live or demo environment and check the exchange account before making a copy. Manual route: create a Signals Bot following the invited Stepgrid channel. On its General tab, set the fallback amount to 3% , choose Percentage , and tick “Only use if not defined by group” . Leave every other Cornix setting at its default. The checkbox lets each signal’s own amount take precedence. The 3% value is a fallback, not an instruction to make every buy 3% of your account. Create saves an inactive bot. Create & Activate enables it to open trades when subsequent signals arrive. For simulated signal following, use a demo Signals Bot . Cornix’s separate One Click Follow feature is live-only; it is not the demo bot-copy route. Read Cornix’s Signals Bot controls ↗",
              "Review the setup and monitor what actually happens Check the selected account, channel, spot pairs, available reserve and alerts. Compare Cornix’s trade view with orders and fills at your exchange. A configured bot is not proof that a trade filled. Demo activity is simulated; it does not verify live execution."
            ]
          },
          {
            "type": "paragraph",
            "text": "Before live trading"
          }
        ],
        "links": [
          {
            "label": "how the buys and target work",
            "url": "?page=how-it-works"
          },
          {
            "label": "published record",
            "url": "?page=evidence"
          },
          {
            "label": "favourable and adverse scenarios",
            "url": "?page=examples"
          },
          {
            "label": "exchange comparison",
            "url": "?page=exchanges"
          },
          {
            "label": "NoGuru’s original signup page ↗",
            "url": "?page=pricing#checkout-card"
          },
          {
            "label": "@NoGuruMembers_bot ↗",
            "url": "?page=trial"
          },
          {
            "label": "official plans",
            "url": "https://cornix.io/pricing/"
          },
          {
            "label": "trial rules",
            "url": "https://help.cornix.io/en/articles/5814827-cornix-free-trial"
          },
          {
            "label": "Cornix registration and setup guide ↗",
            "url": "https://help.cornix.io/en/articles/11892628-getting-started-with-cornix"
          },
          {
            "label": "NoGuru’s published bot in Cornix ↗",
            "url": "?page=trial"
          },
          {
            "label": "Read Cornix’s Signals Bot controls ↗",
            "url": "https://help.cornix.io/en/articles/8800211-how-to-create-a-signals-bot-a-step-by-step-guide"
          }
        ]
      },
      {
        "id": "your-money-your-deliberate-choice",
        "title": "Your money. Your deliberate choice.",
        "body": [
          "There is no recommended deposit in this preview. Exchange minimum orders, the number of pairs and sizing rules affect whether a particular setup can operate. Confirm them without treating a historical model allocation as personal advice.",
          "Never give anyone withdrawal permission, share an API secret in a chat, or bypass an exchange's country restrictions."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "There is no recommended deposit in this preview. Exchange minimum orders, the number of pairs and sizing rules affect whether a particular setup can operate. Confirm them without treating a historical model allocation as personal advice."
          },
          {
            "type": "paragraph",
            "text": "Never give anyone withdrawal permission, share an API secret in a chat, or bypass an exchange's country restrictions."
          }
        ],
        "links": [
          {
            "label": "Read the practical risk checklist →",
            "url": "?page=risks"
          }
        ]
      },
      {
        "id": "what-14-days-can-tell-you",
        "title": "What 14 days can tell you",
        "body": [],
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Whether you understand the workflow and controls.",
              "Whether the chosen setup connects and processes signals as intended.",
              "How monitoring, messages and account views feel to use.",
              "Whether the costs and responsibility fit your expectations."
            ]
          }
        ],
        "links": []
      },
      {
        "id": "what-14-days-cannot-establish",
        "title": "What 14 days cannot establish",
        "body": [
          "Reliable long-term performance, a typical holding period, resilience through different markets, or a guarantee that even one cycle will complete.",
          "Free access and paid renewals"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Reliable long-term performance, a typical holding period, resilience through different markets, or a guarantee that even one cycle will complete."
          },
          {
            "type": "paragraph",
            "text": "Free access and paid renewals"
          }
        ],
        "links": []
      },
      {
        "id": "noguru-free-access-expiry",
        "title": "NoGuru free-access expiry",
        "body": [
          "The 14-day access ends unless you pay or have earned additional free access. There is no automatic charge or cancellation to arrange. Channel access ending does not automatically sell coins or cancel exchange orders."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The 14-day access ends unless you pay or have earned additional free access. There is no automatic charge or cancellation to arrange. Channel access ending does not automatically sell coins or cancel exchange orders."
          }
        ],
        "links": []
      },
      {
        "id": "paid-noguru-renewal",
        "title": "Paid NoGuru renewal",
        "body": [
          "NoGuru does not renew automatically. The bot sends a fresh crypto invoice three days before a paid period expires. If it remains unpaid, the renewal rules allow a 24-hour grace period, then channel access ends. The founding rate ends if the subscription lapses; you can rejoin at the rate then available.",
          "The 24-hour renewal grace is separate from the free trial. Inspect your Cornix bot, pending orders and holdings before access ends; do not apply Cornix’s subscription-expiry rules to NoGuru channel removal."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru does not renew automatically. The bot sends a fresh crypto invoice three days before a paid period expires. If it remains unpaid, the renewal rules allow a 24-hour grace period, then channel access ends. The founding rate ends if the subscription lapses; you can rejoin at the rate then available."
          },
          {
            "type": "paragraph",
            "text": "The 24-hour renewal grace is separate from the free trial. Inspect your Cornix bot, pending orders and holdings before access ends; do not apply Cornix’s subscription-expiry rules to NoGuru channel removal."
          }
        ],
        "links": []
      },
      {
        "id": "cornix-free-trial-expiry",
        "title": "Cornix free-trial expiry",
        "body": [
          "Without a paid plan, Cornix makes the account inactive but continues managing existing trades for 48 hours. It then closes those trades within Cornix; they remain open at the exchange. This is not an automatic market sale. Cornix’s separately free demo remains available."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Without a paid plan, Cornix makes the account inactive but continues managing existing trades for 48 hours. It then closes those trades within Cornix; they remain open at the exchange. This is not an automatic market sale. Cornix’s separately free demo remains available."
          }
        ],
        "links": []
      },
      {
        "id": "paid-cornix-expiry",
        "title": "Paid Cornix expiry",
        "body": [
          "For current accounts, Cornix documents the same 48-hour management window after a paid subscription expires, followed by internal closure while positions remain at the exchange. Inactive accounts cannot create new trades, bots or connections.",
          "Separate exceptions apply: accounts created before 18 February 2026 can return to the legacy Free plan with existing trades still managed. A failed PayPal renewal has its own 72-hour payment-retry grace. These are different cases, not extra time to add to every expiry. See Cornix’s paid-expiry guide and billing rules .",
          "Decide whether to subscribe, stop new entries while managing existing holdings, or close positions yourself. Each has different costs and risks."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "For current accounts, Cornix documents the same 48-hour management window after a paid subscription expires, followed by internal closure while positions remain at the exchange. Inactive accounts cannot create new trades, bots or connections."
          },
          {
            "type": "paragraph",
            "text": "Separate exceptions apply: accounts created before 18 February 2026 can return to the legacy Free plan with existing trades still managed. A failed PayPal renewal has its own 72-hour payment-retry grace. These are different cases, not extra time to add to every expiry. See Cornix’s paid-expiry guide and billing rules ."
          },
          {
            "type": "paragraph",
            "text": "Decide whether to subscribe, stop new entries while managing existing holdings, or close positions yourself. Each has different costs and risks."
          }
        ],
        "links": [
          {
            "label": "Cornix’s paid-expiry guide",
            "url": "https://help.cornix.io/en/articles/5814831-subscription-expired"
          },
          {
            "label": "billing rules",
            "url": "https://help.cornix.io/en/articles/11892443-managing-subscription-payments-upgrades-and-fees"
          }
        ]
      },
      {
        "id": "official-setup-references",
        "title": "Official setup references",
        "body": [
          "Need help with a particular step? Find the right official support route →",
          "The sequence above follows NoGuru’s published Stepgrid setup. Its shared-bot page and manual settings are linked directly so you can review the instructions before making a copy. Cornix screens and exchange eligibility can change.",
          "This review explains the workflow without activating trials, taking payment or connecting an account. Provider information and final contract details remain incomplete for a customer launch."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Need help with a particular step? Find the right official support route →"
          },
          {
            "type": "paragraph",
            "text": "The sequence above follows NoGuru’s published Stepgrid setup. Its shared-bot page and manual settings are linked directly so you can review the instructions before making a copy. Cornix screens and exchange eligibility can change."
          },
          {
            "type": "paragraph",
            "text": "This review explains the workflow without activating trials, taking payment or connecting an account. Provider information and final contract details remain incomplete for a customer launch."
          }
        ],
        "links": [
          {
            "label": "Find the right official support route →",
            "url": "?page=resources#support"
          },
          {
            "label": "Provider information",
            "url": "?page=impressum"
          }
        ]
      },
      {
        "id": "sources-scope",
        "title": "Sources & scope",
        "body": [
          "Public information checked 1 November 2026. Published offers can change; your actual eligibility and checkout terms control."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Public information checked 1 November 2026. Published offers can change; your actual eligibility and checkout terms control."
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "NoGuru setup, bot configuration and paid-renewal timing ↗",
              "NoGuru free-access and manual-payment terms ↗",
              "NoGuru trial and offers ↗",
              "Cornix built-in demo, Signals Bots and live-only One Click Follow ↗",
              "Cornix Create versus Create & Activate ↗",
              "Cornix free trial ↗",
              "Cornix payment timing, fees and trial expiry ↗",
              "Cornix paid-subscription expiry ↗"
            ]
          }
        ],
        "links": [
          {
            "label": "NoGuru setup, bot configuration and paid-renewal timing ↗",
            "url": "?page=how-it-works"
          },
          {
            "label": "NoGuru free-access and manual-payment terms ↗",
            "url": "?page=terms"
          },
          {
            "label": "NoGuru trial and offers ↗",
            "url": "?page=pricing"
          },
          {
            "label": "Cornix built-in demo, Signals Bots and live-only One Click Follow ↗",
            "url": "https://help.cornix.io/en/articles/9853159-demo-accounts-risk-free-trading"
          },
          {
            "label": "Cornix Create versus Create & Activate ↗",
            "url": "https://help.cornix.io/en/articles/8800211-how-to-create-a-signals-bot-a-step-by-step-guide"
          },
          {
            "label": "Cornix free trial ↗",
            "url": "https://help.cornix.io/en/articles/5814827-cornix-free-trial"
          },
          {
            "label": "Cornix payment timing, fees and trial expiry ↗",
            "url": "https://help.cornix.io/en/articles/11892443-managing-subscription-payments-upgrades-and-fees"
          },
          {
            "label": "Cornix paid-subscription expiry ↗",
            "url": "https://help.cornix.io/en/articles/5814831-subscription-expired"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/getting-started.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "market-stress": {
    "title": "A sharp fall tests more than your patience.",
    "eyebrow": "A recent market event / a separate illustration",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Market observations and hypothetical scenarios are educational, not financial advice. They do not establish NoGuru or subscriber performance."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Market observations and hypothetical scenarios are educational, not financial advice. They do not establish NoGuru or subscriber performance."
          }
        ],
        "links": []
      },
      {
        "id": "29-30-october-2026-a-sharp-btc-decline",
        "title": "29–30 October 2026: a sharp BTC decline.",
        "body": [
          "Primary Binance BTC/USDT spot data, checked 31 October. A single venue’s prices, not a global price or a NoGuru account return.",
          "Selected reference"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Primary Binance BTC/USDT spot data, checked 31 October. A single venue’s prices, not a global price or a NoGuru account return."
          },
          {
            "type": "figure",
            "src": "assets/migrated/btc-october-decline.svg",
            "alt": "BTC hourly prices fell below the chosen reference and had not fully recovered at the saved latest observation.",
            "caption": "Hourly close/latest line; the intrahour low is shown separately. The latest 31 October hourly candle may be incomplete. Time labels are UTC; Zurich was UTC+1."
          },
          {
            "type": "paragraph",
            "text": "Selected reference"
          }
        ],
        "links": []
      },
      {
        "id": "80-848-64-usdt",
        "title": "80,848.64 USDT",
        "body": [
          "29 Oct, 21:00 Zurich: the opening of a chosen reference minute, not an assertion of the exact event start.",
          "Wider sample low"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "29 Oct, 21:00 Zurich: the opening of a chosen reference minute, not an assertion of the exact event start."
          },
          {
            "type": "paragraph",
            "text": "Wider sample low"
          }
        ],
        "links": []
      },
      {
        "id": "76-325-98-usdt",
        "title": "76,325.98 USDT",
        "body": [
          "30 Oct, 19:00–19:59 Zurich. About 5.59% below the reference. The hourly data does not establish the exact second.",
          "Latest saved observation"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "30 Oct, 19:00–19:59 Zurich. About 5.59% below the reference. The hourly data does not establish the exact second."
          },
          {
            "type": "paragraph",
            "text": "Latest saved observation"
          }
        ],
        "links": []
      },
      {
        "id": "77-526-01-usdt",
        "title": "77,526.01 USDT",
        "body": [
          "31 Oct, 14:00 hourly candle, Zurich. Still about 4.11% below the reference; not a claim of full BTC recovery."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "31 Oct, 14:00 hourly candle, Zurich. Still about 4.11% below the reference; not a claim of full BTC recovery."
          }
        ],
        "links": []
      },
      {
        "id": "this-establishes-a-market-event-not-a-strategy-outcome",
        "title": "This establishes a market event—not a strategy outcome.",
        "body": [
          "The retrieved data does not prove how NoGuru or a subscriber account performed through it. A portfolio can hold different assets and cash, and its value can change through trades, deposits, withdrawals and fees. A reconciled public NoGuru case study is not established.",
          "Sources: Binance public market-data documentation ↗ · Exact hourly retrieval ↗",
          "A separate, hypothetical 100 → 85 → 100 path"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The retrieved data does not prove how NoGuru or a subscriber account performed through it. A portfolio can hold different assets and cash, and its value can change through trades, deposits, withdrawals and fees. A reconciled public NoGuru case study is not established."
          },
          {
            "type": "paragraph",
            "text": "Sources: Binance public market-data documentation ↗ · Exact hourly retrieval ↗"
          },
          {
            "type": "paragraph",
            "text": "A separate, hypothetical 100 → 85 → 100 path"
          }
        ],
        "links": [
          {
            "label": "Binance public market-data documentation ↗",
            "url": "https://developers.binance.com/en/docs/catalog/core-trading-spot-trading/api/rest-api/market"
          },
          {
            "label": "Exact hourly retrieval ↗",
            "url": "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&startTime=1793059200000&endTime=1793491200000&limit=200"
          }
        ]
      },
      {
        "id": "now-isolate-the-mechanics",
        "title": "Now isolate the mechanics.",
        "body": [
          "A different instrument"
        ],
        "blocks": [
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Before the fall: price 100 Assume you buy 1 coin for 100 units of quote currency in unleveraged spot. No debt or leverage is involved. You hold the coin.",
              "At the trough: price 85 The coin is worth 85: a 15% unrealised loss before costs. There is no leveraged liquidation threshold, but there is real loss of value. Any additional buy would commit more capital and needs its own accounting.",
              "A possible later recovery: price 100 If the price returns to 100, the unchanged 1-coin holding has its original gross market value. Fees can still leave a net loss. This path is assumed; no date or recovery probability is implied.",
              "The other branch: price 40—or lower The same coin may instead fall further and never return. Its value would be 40, a 60% loss before costs. NoGuru's lack of a stop-loss does not limit that downside."
            ]
          },
          {
            "type": "paragraph",
            "text": "A different instrument"
          }
        ],
        "links": []
      },
      {
        "id": "what-could-happen-with-leverage",
        "title": "What could happen with leverage?",
        "body": [
          "Take a hypothetical long of 1 coin entered at 100 with 10× leverage , funded with 10 units of isolated collateral . Assume no extra margin, no fees or funding, and maintenance margin equal to 0.5% of current notional.",
          "Margin equity at price P is 10 + (P − 100). Under these simplified assumptions the liquidation boundary is where that equals 0.005 × P: approximately 90.45 ."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Take a hypothetical long of 1 coin entered at 100 with 10× leverage , funded with 10 units of isolated collateral . Assume no extra margin, no fees or funding, and maintenance margin equal to 0.5% of current notional."
          },
          {
            "type": "paragraph",
            "text": "Margin equity at price P is 10 + (P − 100). Under these simplified assumptions the liquidation boundary is where that equals 0.005 × P: approximately 90.45 ."
          }
        ],
        "links": []
      },
      {
        "id": "a-fall-to-85-crosses-that-assumed-boundary",
        "title": "A fall to 85 crosses that assumed boundary.",
        "body": [
          "The position could be liquidated before reaching the trough. A later price recovery would not restore a position already closed by liquidation. A substantial part of the isolated collateral could be lost.",
          "This is not a universal threshold. Actual venues use mark prices, maintenance tiers, fees, funding and liquidation rules. Cross margin or added collateral changes the exposure. A short position has different directional risk. See the official liquidation mechanics ↗ ; this is a technical source, not a venue recommendation."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The position could be liquidated before reaching the trough. A later price recovery would not restore a position already closed by liquidation. A substantial part of the isolated collateral could be lost."
          },
          {
            "type": "paragraph",
            "text": "This is not a universal threshold. Actual venues use mark prices, maintenance tiers, fees, funding and liquidation rules. Cross margin or added collateral changes the exposure. A short position has different directional risk. See the official liquidation mechanics ↗ ; this is a technical source, not a venue recommendation."
          }
        ],
        "links": [
          {
            "label": "the official liquidation mechanics ↗",
            "url": "https://www.bybit.com/en/help-center/article/UTA-Trading-Rules-Liquidation-Process"
          }
        ]
      },
      {
        "id": "what-would-prove-that-a-wallet-recovered",
        "title": "What would prove that a wallet recovered?",
        "body": [
          "Comparable pre-event, trough and later equity snapshots in the same valuation currency, reconciled for deposits, withdrawals, transfers, fees, open positions and asset prices. A higher balance alone cannot isolate strategy performance.",
          "A public signal model or a scaled demo cannot substitute for a subscriber's reconciled account. Results from a different implementation cannot establish results for the public NoGuru service."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Comparable pre-event, trough and later equity snapshots in the same valuation currency, reconciled for deposits, withdrawals, transfers, fees, open positions and asset prices. A higher balance alone cannot isolate strategy performance."
          },
          {
            "type": "paragraph",
            "text": "A public signal model or a scaled demo cannot substitute for a subscriber's reconciled account. Results from a different implementation cannot establish results for the public NoGuru service."
          }
        ],
        "links": []
      },
      {
        "id": "what-noguru-s-rules-can-do",
        "title": "What NoGuru's rules can do",
        "body": [
          "When conditions call for it, planned lower buys can reduce average cost while increasing committed exposure. The target sale can be above that new average and below the first buy. If recovery does not reach the target, the holding remains open."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "When conditions call for it, planned lower buys can reduce average cost while increasing committed exposure. The target sale can be above that new average and below the first buy. If recovery does not reach the target, the holding remains open."
          }
        ],
        "links": [
          {
            "label": "Explore the two-buy arithmetic →",
            "url": "?page=examples"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/market-stress.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "examples": {
    "title": "What happens to the money?",
    "eyebrow": "A worked example / not a forecast",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope.",
          "Older interactive controls are not imported as working inputs. The current worked explanation and setup preview are the local interactive routes."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          },
          {
            "label": "Open setup preview",
            "url": "?page=setup"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Educational illustration, not financial advice. Assumed prices and fills explain the arithmetic; they do not predict results or recommend an amount.",
          "Set the illustration",
          "An arbitrary teaching amount, not a deposit recommendation. Each buy uses 10% before fees. Unspent cash is not proof of enough reserve for a real strategy.",
          "Fee paid in quote currency, on each executed buy and sale. Actual venue fees differ.",
          "Illustration only. The two buys are assumed to fill. No days, expected frequency or market prediction are implied."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Educational illustration, not financial advice. Assumed prices and fills explain the arithmetic; they do not predict results or recommend an amount."
          },
          {
            "type": "paragraph",
            "text": "Set the illustration"
          },
          {
            "type": "paragraph",
            "text": "An arbitrary teaching amount, not a deposit recommendation. Each buy uses 10% before fees. Unspent cash is not proof of enough reserve for a real strategy."
          },
          {
            "type": "paragraph",
            "text": "Fee paid in quote currency, on each executed buy and sale. Actual venue fees differ."
          },
          {
            "type": "figure",
            "src": "assets/migrated/examples-figure-1.svg",
            "alt": "What happens to the money?",
            "caption": "Captured historical source figure; its period and source scope are retained."
          },
          {
            "type": "paragraph",
            "text": "Illustration only. The two buys are assumed to fill. No days, expected frequency or market prediction are implied."
          }
        ],
        "links": []
      },
      {
        "id": "target-reached-in-this-assumed-path",
        "title": "Target reached in this assumed path.",
        "body": [
          "Both purchases sell together. A completed sale releases proceeds; another cycle is possible, not guaranteed. The next buy is not necessarily below this sale."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Both purchases sell together. A completed sale releases proceeds; another cycle is possible, not guaranteed. The next buy is not necessarily below this sale."
          }
        ],
        "links": []
      },
      {
        "id": "compare-all-three-assumed-endpoints",
        "title": "Compare all three assumed endpoints.",
        "body": [
          "Same starting balance and fees. No probability, timing or typical outcome is implied."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Same starting balance and fees. No probability, timing or typical outcome is implied."
          },
          {
            "type": "table",
            "headers": [
              "Assumed endpoint",
              "Cash",
              "Open holdings",
              "Total value",
              "Change"
            ],
            "rows": [
              [
                "Target reached at 92",
                "1,006.59",
                "0.00",
                "1,006.59",
                "+6.59"
              ],
              [
                "Still open at 84",
                "799.80",
                "189.00",
                "988.80",
                "−11.20"
              ],
              [
                "Still open at 60",
                "799.80",
                "135.00",
                "934.80",
                "−65.20"
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "follow-each-piece-of-the-account",
        "title": "Follow each piece of the account.",
        "body": [
          "All values below use the same illustrative allocation. Reserve cash and open holdings are shown separately."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "All values below use the same illustrative allocation. Reserve cash and open holdings are shown separately."
          },
          {
            "type": "table",
            "headers": [
              "Item",
              "Calculation",
              "Example result"
            ],
            "rows": [
              [
                "First buy",
                "10% of allocation ÷ 100 per coin",
                "100.00 buys 1.0000 coins"
              ],
              [
                "Second buy",
                "10% of allocation ÷ 80 per coin",
                "100.00 buys 1.2500 coins"
              ],
              [
                "Combined cost & quantity",
                "Total buy notional ÷ total coins",
                "200.00 ÷ 2.2500 = 88.89 per coin"
              ],
              [
                "Target",
                "Average cost × 1.035",
                "92.00 per coin · 3.5% above average, before fees"
              ],
              [
                "Buy fees",
                "Total buy notional × chosen fee",
                "0.20"
              ],
              [
                "Cash after buys",
                "Allocation − buy cost − buy fees",
                "799.80"
              ],
              [
                "Holding or sale value",
                "Coins × assumed final price",
                "207.00 sold at 92"
              ],
              [
                "Sale fee",
                "Only charged if sale executes",
                "0.21"
              ],
              [
                "Cash + current holdings",
                "Account value after executed trade fees",
                "1,006.59"
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "the-target-can-be-below-your-first-buy",
        "title": "The target can be below your first buy.",
        "body": [
          "Here, the target of 92 is below the first price of 100 but above the combined average of 88.89. The lower buy changes the average because you acquire more coins for the same amount. It also increases exposed capital. This is a teaching example, not NoGuru's proprietary thresholds or sizing schedule."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Here, the target of 92 is below the first price of 100 but above the combined average of 88.89. The lower buy changes the average because you acquire more coins for the same amount. It also increases exposed capital. This is a teaching example, not NoGuru's proprietary thresholds or sizing schedule."
          }
        ],
        "links": []
      },
      {
        "id": "how-long-does-this-take",
        "title": "How long does this take?",
        "body": [
          "There is no time axis in days because there is no defensible fixed answer. A target might be reached quickly, much later or never. An open holding remains exposed until sold.",
          "A 14-day trial may end with all of these buys still open. It evaluates setup and experience; it cannot prove reliable performance or a holding period."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "There is no time axis in days because there is no defensible fixed answer. A target might be reached quickly, much later or never. An open holding remains exposed until sold."
          },
          {
            "type": "paragraph",
            "text": "A 14-day trial may end with all of these buys still open. It evaluates setup and experience; it cannot prove reliable performance or a holding period."
          }
        ],
        "links": [
          {
            "label": "Plan for trial expiry →",
            "url": "?page=setup-guide#expiry"
          }
        ]
      },
      {
        "id": "what-this-illustration-leaves-out",
        "title": "What this illustration leaves out",
        "body": [
          "Partial fills, price gaps, slippage, spreads, changing targets, additional buys, multiple coins, order minimums, funding transfers and taxes. NoGuru and Cornix subscription bills are paid separately in USD; they are not silently treated as USDT or deducted from this example.",
          "USDT itself has issuer, market and depegging risks. A one-to-one USD conversion is not assumed here."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Partial fills, price gaps, slippage, spreads, changing targets, additional buys, multiple coins, order minimums, funding transfers and taxes. NoGuru and Cornix subscription bills are paid separately in USD; they are not silently treated as USDT or deducted from this example."
          },
          {
            "type": "paragraph",
            "text": "USDT itself has issuer, market and depegging risks. A one-to-one USD conversion is not assumed here."
          }
        ],
        "links": [
          {
            "label": "See the separate subscription costs →",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "what-changes-in-a-sharp-fall",
        "title": "What changes in a sharp fall?",
        "body": [
          "Unleveraged spot has no leveraged liquidation trigger. That does not prevent a large loss or make recovery inevitable."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Unleveraged spot has no leveraged liquidation trigger. That does not prevent a large loss or make recovery inevitable."
          }
        ],
        "links": [
          {
            "label": "Explore a defined stress scenario →",
            "url": "?page=market-stress"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/examples.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "review-home": {
    "title": "Trade crypto. No guru required.",
    "eyebrow": "Paid crypto strategy · Cornix execution",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Less manual trading. Your capital is still at risk.",
          "A schematic, not a forecast or trade history. Targets relate to the combined holding’s average cost; prices and waiting times vary."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Less manual trading. Your capital is still at risk."
          },
          {
            "type": "figure",
            "src": "assets/migrated/review-home-figure-1.svg",
            "alt": "Trade crypto. No guru required.",
            "caption": "Captured historical source figure; its period and source scope are retained."
          },
          {
            "type": "figure",
            "src": "assets/migrated/review-home-figure-2.svg",
            "alt": "Trade crypto. No guru required.",
            "caption": "Captured historical source figure; its period and source scope are retained."
          },
          {
            "type": "paragraph",
            "text": "A schematic, not a forecast or trade history. Targets relate to the combined holding’s average cost; prices and waiting times vary."
          }
        ],
        "links": []
      },
      {
        "id": "you-have-better-things-to-watch-than-charts",
        "title": "You have better things to watch than charts.",
        "body": [
          "Once connected and configured, Cornix automatically places NoGuru’s planned buy and target-sale orders in your exchange account. Buys follow price levels rather than a fixed weekly or monthly calendar. A target sale still depends on the price reaching it and the order executing."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Once connected and configured, Cornix automatically places NoGuru’s planned buy and target-sale orders in your exchange account. Buys follow price levels rather than a fixed weekly or monthly calendar. A target sale still depends on the price reaching it and the order executing."
          }
        ],
        "links": []
      },
      {
        "id": "planned-buys",
        "title": "Planned buys.",
        "body": [
          "Purchases at lower levels change the average price paid for a coin. They also commit more of your capital."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Purchases at lower levels change the average price paid for a coin. They also commit more of your capital."
          }
        ],
        "links": []
      },
      {
        "id": "a-target-sale",
        "title": "A target sale.",
        "body": [
          "The strategy aims to close the combined holding above its average cost. Fees matter, and a sale is never guaranteed."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The strategy aims to close the combined holding above its average cost. Fees matter, and a sale is never guaranteed."
          }
        ],
        "links": []
      },
      {
        "id": "after-a-sale",
        "title": "After a sale.",
        "body": [
          "Sale proceeds can become available for another trade. Money in a holding that has not sold remains exposed to price changes."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sale proceeds can become available for another trade. Money in a holding that has not sold remains exposed to price changes."
          }
        ],
        "links": []
      },
      {
        "id": "why-we-built-this-bot",
        "title": "Why we built this bot.",
        "body": [
          "Buying crypto is only the beginning. There are more decisions to make: when to add, when to aim for a sale, and how to follow the same plan when prices move. We built NoGuru to automate that routine through a defined set of rules. Cornix places the orders in your exchange account, so you do not have to enter each trade yourself.",
          "You choose how much to commit, check the setup and keep an eye on your holdings. Your funds stay in your own exchange account.",
          "What’s included in your subscription"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Buying crypto is only the beginning. There are more decisions to make: when to add, when to aim for a sale, and how to follow the same plan when prices move. We built NoGuru to automate that routine through a defined set of rules. Cornix places the orders in your exchange account, so you do not have to enter each trade yourself."
          },
          {
            "type": "paragraph",
            "text": "You choose how much to commit, check the setup and keep an eye on your holdings. Your funds stay in your own exchange account."
          },
          {
            "type": "paragraph",
            "text": "What’s included in your subscription"
          }
        ],
        "links": [
          {
            "label": "What’s included in your subscription",
            "url": "?page=how-it-works#subscription-covers"
          }
        ]
      },
      {
        "id": "your-exchange-account-who-does-what",
        "title": "Your exchange account. Who does what.",
        "body": [
          "Cornix places the orders. Withdrawal permission stays disabled in the intended setup. Trading and API access still carry risk.",
          "Your part: choose an eligible setup, check permissions and sizing, and monitor orders and open holdings."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix places the orders. Withdrawal permission stays disabled in the intended setup. Trading and API access still carry risk."
          },
          {
            "type": "paragraph",
            "text": "Your part: choose an eligible setup, check permissions and sizing, and monitor orders and open holdings."
          },
          {
            "type": "figure",
            "src": "assets/migrated/joined-no-mark.svg",
            "alt": "Trade crypto. No guru required."
          }
        ],
        "links": []
      },
      {
        "id": "noguru",
        "title": "NoGuru",
        "body": [
          "Provides the strategy and instructions."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Provides the strategy and instructions."
          }
        ],
        "links": []
      },
      {
        "id": "cornix",
        "title": "Cornix",
        "body": [
          "Executes instructions through the API connection."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Executes instructions through the API connection."
          }
        ],
        "links": []
      },
      {
        "id": "your-exchange",
        "title": "Your exchange",
        "body": [
          "Holds your funds and carries out the orders."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Holds your funds and carries out the orders."
          }
        ],
        "links": []
      },
      {
        "id": "a-record-you-can-inspect",
        "title": "A record you can inspect.",
        "body": [
          "Published model observations, before fees. Educational information, not financial advice or a forecast. Open holdings can lose value."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Published model observations, before fees. Educational information, not financial advice or a forecast. Open holdings can lose value."
          }
        ],
        "links": []
      },
      {
        "id": "completed-cycles",
        "title": "Completed cycles",
        "body": [
          "Published signal model · not subscriber executions"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Published signal model · not subscriber executions"
          }
        ],
        "links": []
      },
      {
        "id": "sales-below-cost",
        "title": "Sales below cost",
        "body": [
          "Completed trades can include losses"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Completed trades can include losses"
          }
        ],
        "links": []
      },
      {
        "id": "cycles-still-open",
        "title": "Cycles still open",
        "body": [
          "Their future outcome remains unknown"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Their future outcome remains unknown"
          }
        ],
        "links": []
      },
      {
        "id": "open-holdings-versus-cost",
        "title": "Open holdings versus cost",
        "body": [
          "Open cost: 119.1% of reference allocation",
          "Latest completed rows in the saved ledger"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Open cost: 119.1% of reference allocation"
          },
          {
            "type": "figure",
            "src": "assets/migrated/published-signals-2026-10-31.svg",
            "alt": "Original operator chart showing accumulated completed profit and daily gross profit, excluding open losses.",
            "caption": "Actual published chart · earlier source snapshot. Generated 31 Oct 2026, 07:30:11 (timezone unspecified): approximately +33.8% completed profit on allocation, before fees, with 1,018 cycles. The later ledger summary above has 1,019 cycles. The observations are separately dated; neither is portfolio equity."
          },
          {
            "type": "paragraph",
            "text": "Latest completed rows in the saved ledger"
          }
        ],
        "links": []
      },
      {
        "id": "look-beyond-the-headline",
        "title": "Look beyond the headline.",
        "body": [
          "These are anonymous public signal-model rows. Cycle percentages describe those completed purchases and sales, not what a subscriber earned on their whole account.",
          "Dates are UTC. Open holdings remain exposed, and trading and subscription costs are excluded.",
          "Completed profit is not your total account return. Open holdings, fees and subscription costs matter. This dated operator-published model is not a live feed, an audited customer return or a forecast."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "These are anonymous public signal-model rows. Cycle percentages describe those completed purchases and sales, not what a subscriber earned on their whole account."
          },
          {
            "type": "paragraph",
            "text": "Dates are UTC. Open holdings remain exposed, and trading and subscription costs are excluded."
          },
          {
            "type": "table",
            "headers": [
              "Opened",
              "Closed",
              "Buys",
              "Result"
            ],
            "rows": [
              [
                "30 Oct",
                "31 Oct",
                "4",
                "+1.71%"
              ],
              [
                "30 Oct",
                "30 Oct",
                "1",
                "+1.91%"
              ],
              [
                "29 Oct",
                "30 Oct",
                "11",
                "+1.80%"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Completed profit is not your total account return. Open holdings, fees and subscription costs matter. This dated operator-published model is not a live feed, an audited customer return or a forecast."
          }
        ],
        "links": []
      },
      {
        "id": "understand-what-can-go-wrong",
        "title": "Understand what can go wrong.",
        "body": [
          "The strategy has no stop-loss. A lower average purchase price is not protection against a lasting loss."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The strategy has no stop-loss. A lower average purchase price is not protection against a lasting loss."
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "! A coin may never recover. Holdings can remain below cost for months, fall much further, or lose their value.",
              "! Open trades tie up capital. There is no promised holding period. Money in an open position is still exposed to the market.",
              "! Automation still needs oversight. Fees, exchange or API failures and missed execution affect outcomes. Pausing does not automatically sell holdings."
            ]
          }
        ],
        "links": [
          {
            "label": "Read the full risk guide →",
            "url": "?page=risks"
          }
        ]
      },
      {
        "id": "know-the-costs-before-you-start",
        "title": "Know the costs before you start.",
        "body": [
          "NoGuru supplies the strategy. Cornix is the separate execution subscription. Exchange fees and trading capital sit outside both."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru supplies the strategy. Cornix is the separate execution subscription. Exchange fees and trading capital sit outside both."
          }
        ],
        "links": [
          {
            "label": "See the full pricing picture →",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "explore-the-trial",
        "title": "Explore the trial.",
        "body": [
          "A 14-day trial can help you assess the setup; it cannot establish long-term performance."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A 14-day trial can help you assess the setup; it cannot establish long-term performance."
          }
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/index.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "review-how-it-works": {
    "title": "A trading plan. With the moving parts explained.",
    "eyebrow": "How NoGuru works",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "buy-in-steps-aim-for-a-recovery",
        "title": "Buy in steps. Aim for a recovery.",
        "body": [
          "The strategy responds to price conditions with staged buys and target sales. It is different from buying a fixed amount on a calendar, often called dollar-cost averaging (DCA). The exact selection, timing and sizing rules remain proprietary.",
          "A schematic, not a forecast or trade history. Targets relate to the combined holding’s average cost; prices and waiting times vary."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The strategy responds to price conditions with staged buys and target sales. It is different from buying a fixed amount on a calendar, often called dollar-cost averaging (DCA). The exact selection, timing and sizing rules remain proprietary."
          },
          {
            "type": "figure",
            "src": "assets/migrated/review-how-it-works-figure-1.svg",
            "alt": "A trading plan. With the moving parts explained.",
            "caption": "Captured historical source figure; its period and source scope are retained."
          },
          {
            "type": "figure",
            "src": "assets/migrated/review-how-it-works-figure-2.svg",
            "alt": "A trading plan. With the moving parts explained.",
            "caption": "Captured historical source figure; its period and source scope are retained."
          },
          {
            "type": "paragraph",
            "text": "A schematic, not a forecast or trade history. Targets relate to the combined holding’s average cost; prices and waiting times vary."
          }
        ],
        "links": []
      },
      {
        "id": "the-price-reaches-a-sale-target",
        "title": "The price reaches a sale target.",
        "body": [
          "Each cycle groups purchases of a coin with the sale intended to close the combined holding. Lower buys can reduce its average cost. A sale may then happen above that average while still below the first purchase price. Fees reduce any gain.",
          "After a completed sale, proceeds may be used for later trades. The next cycle has its own prices and timing; its first buy need not be below the previous sale."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Each cycle groups purchases of a coin with the sale intended to close the combined holding. Lower buys can reduce its average cost. A sale may then happen above that average while still below the first purchase price. Fees reduce any gain."
          },
          {
            "type": "paragraph",
            "text": "After a completed sale, proceeds may be used for later trades. The next cycle has its own prices and timing; its first buy need not be below the previous sale."
          }
        ],
        "links": []
      },
      {
        "id": "the-price-keeps-falling",
        "title": "The price keeps falling.",
        "body": [
          "Additional purchases use more cash and increase exposure. There is no stop-loss to close the holding at a defined loss. The coin can remain below cost for a long time, fall much further, or never recover to the target.",
          "Open holdings tie up capital. There is no guaranteed exit, recovery, repeat cycle or maximum waiting time."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Additional purchases use more cash and increase exposure. There is no stop-loss to close the holding at a defined loss. The coin can remain below cost for a long time, fall much further, or never recover to the target."
          },
          {
            "type": "paragraph",
            "text": "Open holdings tie up capital. There is no guaranteed exit, recovery, repeat cycle or maximum waiting time."
          }
        ],
        "links": []
      },
      {
        "id": "what-s-included-in-your-subscription",
        "title": "What’s included in your subscription",
        "body": [
          "NoGuru access covers an ongoing strategy, not just a bot setting copied once. The published Stepgrid approach combines coin selection, individual trading plans and adjustments as markets change.",
          "NoGuru supplies those instructions. Cornix is the separate service that places orders, and your exchange holds the funds. The exact selection, sizing and tuning logic remains proprietary.",
          "Strategy description: NoGuru’s published overview and subscription explanation , checked 1 November 2026. These describe the operator’s process, not an assurance of performance."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru access covers an ongoing strategy, not just a bot setting copied once. The published Stepgrid approach combines coin selection, individual trading plans and adjustments as markets change."
          },
          {
            "type": "paragraph",
            "text": "NoGuru supplies those instructions. Cornix is the separate service that places orders, and your exchange holds the funds. The exact selection, sizing and tuning logic remains proprietary."
          },
          {
            "type": "paragraph",
            "text": "Strategy description: NoGuru’s published overview and subscription explanation , checked 1 November 2026. These describe the operator’s process, not an assurance of performance."
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Coins selected and reviewed by rules. The strategy selects coins using rules and re-checks that selection every night.",
              "Price-level entries and trend-based sizing. Buys wait at planned lower price levels. Each buy’s size responds to the market’s trend, rather than using a fixed calendar purchase.",
              "A reserve for deeper buys. Part of the allocation is held back for lower steps in the plan. Spending that reserve elsewhere changes the funds available when a deeper buy arrives.",
              "A separate ladder and exit for each coin. Several coins can have active plans at once. Each has its own sequence of buys and target for selling the combined holding. Reaching that target is not guaranteed.",
              "Ongoing tuning as conditions change. NoGuru re-tunes coin-specific plans as markets change and can retire coins from the strategy. This continuing work is part of the subscription; it does not ensure that a coin recovers or a trade succeeds."
            ]
          }
        ],
        "links": [
          {
            "label": "NoGuru’s published overview",
            "url": "?page=story"
          },
          {
            "label": "subscription explanation",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "three-services-your-account",
        "title": "Three services. Your account.",
        "body": [
          "Spot means holding the actual coins at your exchange, rather than a leveraged price contract. Without borrowing or margin, this setup avoids forced closure caused by losses on a leveraged position. Coin values can still fall severely. Your trading capital stays at the exchange, not with NoGuru."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Spot means holding the actual coins at your exchange, rather than a leveraged price contract. Without borrowing or margin, this setup avoids forced closure caused by losses on a leveraged position. Coin values can still fall severely. Your trading capital stays at the exchange, not with NoGuru."
          },
          {
            "type": "table",
            "headers": [
              "Part of the setup",
              "What it does",
              "What you do there"
            ],
            "rows": [
              [
                "NoGuru",
                "NoGuru’s proprietary strategy produces the buy and sell instructions. NoGuru manages access to its signal service.",
                "Review the approach and terms, start eligible trial access through the membership bot, and manage your NoGuru subscription."
              ],
              [
                "Cornix",
                "A separate platform receives instructions and submits orders through the exchange API connection.",
                "Create your Cornix account, check trial eligibility, link the exchange, configure the signal bot and review execution."
              ],
              [
                "Your exchange",
                "Holds the funds and coins; accepts, fills or rejects orders. Its trading rules, fees and availability apply.",
                "Confirm account and country eligibility, complete its checks, choose your allocation and permissions, and monitor your balance and holdings."
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "trade-permission-is-powerful",
        "title": "Trade permission is powerful.",
        "body": [
          "Withdrawal permission should remain disabled in the intended setup. That does not remove trading losses, API misuse, security incidents or exchange failure. Never share your login, seed phrase or API secret in a support conversation."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Withdrawal permission should remain disabled in the intended setup. That does not remove trading losses, API misuse, security incidents or exchange failure. Never share your login, seed phrase or API secret in a support conversation."
          }
        ],
        "links": []
      },
      {
        "id": "less-manual-order-entry-a-setup-you-still-oversee",
        "title": "Less manual order entry. A setup you still oversee.",
        "body": [],
        "blocks": [
          {
            "type": "list",
            "ordered": true,
            "items": [
              "You choose whether the approach fits. Understand the absence of a stop-loss, the possibility of long holds, the separate bills and the limits of the published record before allocating anything.",
              "You set up the connection. Use a dedicated Stepgrid-only sub-account with spot trading enabled and withdrawals disabled. Join the private channel with the Telegram account linked to Cornix, then copy the operator’s bot or apply its documented Signals Bot settings. Follow the setup sequence and exact fallback settings .",
              "You keep an eye on operation. Cornix handles routine order submission. You check whether orders actually fill, connections remain active and reserves suit the chosen setup. Review open holdings, costs and expiry dates; automation does not remove those decisions.",
              "You decide when to change or stop. Stopping new instructions, cancelling a subscription and selling an existing holding are different actions. Review open orders and positions at your exchange before making changes."
            ]
          }
        ],
        "links": [
          {
            "label": "Follow the setup sequence and exact fallback settings",
            "url": "?page=setup-guide#setup"
          }
        ]
      },
      {
        "id": "where-does-the-profit-go",
        "title": "Where does the profit go?",
        "body": [
          "A completed spot sale produces proceeds in the exchange account. Automatic conversion of profits to Bitcoin is not a verified feature of the public NoGuru service.",
          "Any separate conversion is your action at the exchange and can affect the funds available for future trades."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A completed spot sale produces proceeds in the exchange account. Automatic conversion of profits to Bitcoin is not a verified feature of the public NoGuru service."
          },
          {
            "type": "paragraph",
            "text": "Any separate conversion is your action at the exchange and can affect the funds available for future trades."
          }
        ],
        "links": [
          {
            "label": "More practical answers →",
            "url": "?page=faq"
          }
        ]
      },
      {
        "id": "the-record-shows-a-model-your-execution-can-differ",
        "title": "The record shows a model. Your execution can differ.",
        "body": [
          "Timing, configuration, exchange prices, order fills and fees affect subscriber outcomes. Closed-cycle figures alone leave out the current value of unsold holdings."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Timing, configuration, exchange prices, order fills and fees affect subscriber outcomes. Closed-cycle figures alone leave out the current value of unsold holdings."
          }
        ],
        "links": []
      },
      {
        "id": "make-your-first-step-an-informed-one",
        "title": "Make your first step an informed one.",
        "body": [
          "Explore the separate NoGuru and Cornix trials, including their start times, costs and expiry behavior."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Explore the separate NoGuru and Cornix trials, including their start times, costs and expiry behavior."
          }
        ],
        "links": [
          {
            "label": "See the setup and trials →",
            "url": "?page=setup-guide"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/how-it-works.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "review-pricing": {
    "title": "Two services. One clear cost picture.",
    "eyebrow": "Pricing",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "All subscription prices below are in US dollars (USD).",
          "01 / NoGuru"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "All subscription prices below are in US dollars (USD)."
          },
          {
            "type": "paragraph",
            "text": "01 / NoGuru"
          }
        ],
        "links": []
      },
      {
        "id": "for-the-first-100-subscribers",
        "title": "For the first 100 subscribers",
        "body": [
          "Keep the $49 monthly rate for as long as your subscription continues without a break. The founding rate ends if your subscription lapses. You can rejoin at the rate then available.",
          "Later new subscribers pay $99 USD/month. Your membership checkout shows which rate applies to you.",
          "Choose a 1, 3, 6 or 12-month term. The longer-term discounts are 10%, 15% and 20% for 3, 6 and 12 months respectively.",
          "What’s included in your subscription",
          "02 / Cornix"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Keep the $49 monthly rate for as long as your subscription continues without a break. The founding rate ends if your subscription lapses. You can rejoin at the rate then available."
          },
          {
            "type": "paragraph",
            "text": "Later new subscribers pay $99 USD/month. Your membership checkout shows which rate applies to you."
          },
          {
            "type": "paragraph",
            "text": "Choose a 1, 3, 6 or 12-month term. The longer-term discounts are 10%, 15% and 20% for 3, 6 and 12 months respectively."
          },
          {
            "type": "paragraph",
            "text": "What’s included in your subscription"
          },
          {
            "type": "paragraph",
            "text": "02 / Cornix"
          }
        ],
        "links": [
          {
            "label": "What’s included in your subscription",
            "url": "?page=how-it-works#subscription-covers"
          }
        ]
      },
      {
        "id": "advanced-on-monthly-billing",
        "title": "Advanced, on monthly billing",
        "body": [
          "Cornix Advanced is sufficient for the standard NoGuru Signals Bot setup; Premium is not required. Advanced includes three active Signals Bots and two API slots. The advertised annual option is $32.99 a month equivalent, or $395.88 for 12 months before fees, paid upfront. NoGuru is billed separately.",
          "Cornix has its own service eligibility rules , trial, subscriptions and promotions. Extra bots, connections or backtesting can require different limits."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix Advanced is sufficient for the standard NoGuru Signals Bot setup; Premium is not required. Advanced includes three active Signals Bots and two API slots. The advertised annual option is $32.99 a month equivalent, or $395.88 for 12 months before fees, paid upfront. NoGuru is billed separately."
          },
          {
            "type": "paragraph",
            "text": "Cornix has its own service eligibility rules , trial, subscriptions and promotions. Extra bots, connections or backtesting can require different limits."
          }
        ],
        "links": [
          {
            "label": "service eligibility rules",
            "url": "?page=exchanges#eligibility"
          }
        ]
      },
      {
        "id": "what-the-two-subscriptions-add-up-to",
        "title": "What the two subscriptions add up to",
        "body": [
          "With Cornix Advanced on monthly billing, the first-100 NoGuru rate adds up to $98.90 USD/month ($49 + $49.90). For later new NoGuru subscribers, the total is $148.90 USD/month ($99 + $49.90). Trading fees, payment and network costs, and any applicable taxes are additional. These totals describe subscription costs, not what trading will earn.",
          "With annual Cornix, the first-100 combination is equivalent to $81.99 a month, or $131.99 for later new NoGuru subscribers. This uses $395.88 as the 12-month Cornix amount calculated from its advertised monthly equivalent; Cornix is paid upfront and NoGuru separately. Existing credits and applicable Cornix promotions can change the bill.",
          "These combined examples use undiscounted one-month NoGuru billing with no earned free access. Longer NoGuru terms have their own discounts and upfront invoice."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "With Cornix Advanced on monthly billing, the first-100 NoGuru rate adds up to $98.90 USD/month ($49 + $49.90). For later new NoGuru subscribers, the total is $148.90 USD/month ($99 + $49.90). Trading fees, payment and network costs, and any applicable taxes are additional. These totals describe subscription costs, not what trading will earn."
          },
          {
            "type": "paragraph",
            "text": "With annual Cornix, the first-100 combination is equivalent to $81.99 a month, or $131.99 for later new NoGuru subscribers. This uses $395.88 as the 12-month Cornix amount calculated from its advertised monthly equivalent; Cornix is paid upfront and NoGuru separately. Existing credits and applicable Cornix promotions can change the bill."
          },
          {
            "type": "paragraph",
            "text": "These combined examples use undiscounted one-month NoGuru billing with no earned free access. Longer NoGuru terms have their own discounts and upfront invoice."
          }
        ],
        "links": []
      },
      {
        "id": "keep-the-other-costs-visible",
        "title": "Keep the other costs visible.",
        "body": [
          "Small percentages still matter when trades repeat or gross gains are small."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Small percentages still matter when trades repeat or gross gains are small."
          }
        ],
        "links": []
      },
      {
        "id": "exchange-costs",
        "title": "Exchange costs",
        "body": [
          "Buy and sell fees, spreads and slippage vary by venue, pair, order and account tier. They are excluded from the published gross signal-model record."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Buy and sell fees, spreads and slippage vary by venue, pair, order and account tier. They are excluded from the published gross signal-model record."
          }
        ],
        "links": []
      },
      {
        "id": "payment-costs",
        "title": "Payment costs",
        "body": [
          "Cornix's billing guide states that crypto subscription invoices add 5%. Network costs and possible mobile taxes are separate. NoGuru crypto payments can also incur network costs."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix's billing guide states that crypto subscription invoices add 5%. Network costs and possible mobile taxes are separate. NoGuru crypto payments can also incur network costs."
          }
        ],
        "links": []
      },
      {
        "id": "trading-capital",
        "title": "Trading capital",
        "body": [
          "The funds used for orders stay at your exchange. They are neither a subscription fee nor protected savings. Open holdings can lose value or remain tied up.",
          "Existing offers & entitlements"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The funds used for orders stay at your exchange. They are neither a subscription fee nor protected savings. Open holdings can lose value or remain tied up."
          },
          {
            "type": "paragraph",
            "text": "Existing offers & entitlements"
          }
        ],
        "links": []
      },
      {
        "id": "founding-5-three-additional-noguru-months",
        "title": "Founding 5: three additional NoGuru months",
        "body": [
          "The published Founding 5 offer gives the first five qualifying traders three additional NoGuru months after they run NoGuru through a paid Cornix plan. A demo workspace does not qualify. The published claim route is @noguru_signals. Remaining places are not shown here; any credit already earned remains part of your membership."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The published Founding 5 offer gives the first five qualifying traders three additional NoGuru months after they run NoGuru through a paid Cornix plan. A demo workspace does not qualify. The published claim route is @noguru_signals. Remaining places are not shown here; any credit already earned remains part of your membership."
          }
        ],
        "links": []
      },
      {
        "id": "exchange-and-customer-referral-rewards",
        "title": "Exchange and customer referral rewards",
        "body": [
          "NoGuru publishes one free month for opening an exchange account through its link, once per exchange, and one month after a referred subscriber has paid for three months. These rewards stack without a cap. The operator says qualifying rewards are credited automatically. In @NoGuruMembers_bot, use /ref for your referral link and /exchange <exchange> <UID> for the exchange claim. Only use the official membership bot for account identifiers. These are the published instructions; your membership shows the actual credits. Cornix charges remain separate."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru publishes one free month for opening an exchange account through its link, once per exchange, and one month after a referred subscriber has paid for three months. These rewards stack without a cap. The operator says qualifying rewards are credited automatically. In @NoGuruMembers_bot, use /ref for your referral link and /exchange <exchange> <UID> for the exchange claim. Only use the official membership bot for account identifiers. These are the published instructions; your membership shows the actual credits. Cornix charges remain separate."
          }
        ],
        "links": []
      },
      {
        "id": "1-3-6-or-12-months-of-noguru",
        "title": "1, 3, 6 or 12 months of NoGuru",
        "body": [
          "Payment covers the chosen period upfront; the first-100 and continuous-subscription rules determine the founding rate. Your invoice identifies your applicable price and access dates. Existing earned access, Cornix, exchange trading fees and crypto network costs are separate."
        ],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Term",
              "Founding rate",
              "Later new subscriber",
              "Term discount"
            ],
            "rows": [
              [
                "1 month",
                "$49.00",
                "$99.00",
                "—"
              ],
              [
                "3 months",
                "$132.30",
                "$267.30",
                "10%"
              ],
              [
                "6 months",
                "$249.90",
                "$504.90",
                "15%"
              ],
              [
                "12 months",
                "$470.40",
                "$950.40",
                "20%"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Payment covers the chosen period upfront; the first-100 and continuous-subscription rules determine the founding rate. Your invoice identifies your applicable price and access dates. Existing earned access, Cornix, exchange trading fees and crypto network costs are separate."
          }
        ],
        "links": []
      },
      {
        "id": "cornix-promotions-including-mexc",
        "title": "Cornix promotions, including MEXC",
        "body": [
          "Cornix currently advertises Premium features at no extra charge for connected MEXC accounts from 1 June 2026, with no fixed campaign end date. That does not confirm your country eligibility, NoGuru pairs, configured bot or any NoGuru reward. Do not choose a restricted exchange to obtain a promotion.",
          "Read Cornix's MEXC campaign conditions ↗",
          "A linked annual Cornix offer has its own eligibility conditions and excludes UK residents. Check Cornix service eligibility as well as the offer terms; a promotion does not override country restrictions."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cornix currently advertises Premium features at no extra charge for connected MEXC accounts from 1 June 2026, with no fixed campaign end date. That does not confirm your country eligibility, NoGuru pairs, configured bot or any NoGuru reward. Do not choose a restricted exchange to obtain a promotion."
          },
          {
            "type": "paragraph",
            "text": "Read Cornix's MEXC campaign conditions ↗"
          },
          {
            "type": "paragraph",
            "text": "A linked annual Cornix offer has its own eligibility conditions and excludes UK residents. Check Cornix service eligibility as well as the offer terms; a promotion does not override country restrictions."
          }
        ],
        "links": [
          {
            "label": "Read Cornix's MEXC campaign conditions ↗",
            "url": "https://help.cornix.io/en/articles/15272411-free-cornix-plan-for-mexc-traders"
          }
        ]
      },
      {
        "id": "renewal-cancellation-and-refunds",
        "title": "Renewal, cancellation and refunds",
        "body": [
          "NoGuru does not renew automatically. You pay a crypto invoice for the access period it states. Published payment choices are BTC on-chain; USDT on Ethereum, Arbitrum or Tron; and USDC on Ethereum, Base or Arbitrum. Use the asset and network specified by your invoice. The bot sends a fresh invoice three days before expiry. If a paid subscription is not renewed, there is a 24-hour grace period, then channel access ends. The founding rate ends if the subscription lapses; you can rejoin at the rate then available. To stop renewing, do not pay the next invoice.",
          "The free NoGuru trial ends after 14 days unless you pay or have earned additional access. The paid-renewal grace period is not a trial extension. Cornix has separate billing and expiry rules; neither service ending automatically sells your coins.",
          "The published NoGuru terms state that payments are non-refundable; applicable legal cancellation and refund rights still need to be reflected in the final contract. Read the provider and terms status before making a commitment.",
          "Read the subscription terms →"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru does not renew automatically. You pay a crypto invoice for the access period it states. Published payment choices are BTC on-chain; USDT on Ethereum, Arbitrum or Tron; and USDC on Ethereum, Base or Arbitrum. Use the asset and network specified by your invoice. The bot sends a fresh invoice three days before expiry. If a paid subscription is not renewed, there is a 24-hour grace period, then channel access ends. The founding rate ends if the subscription lapses; you can rejoin at the rate then available. To stop renewing, do not pay the next invoice."
          },
          {
            "type": "paragraph",
            "text": "The free NoGuru trial ends after 14 days unless you pay or have earned additional access. The paid-renewal grace period is not a trial extension. Cornix has separate billing and expiry rules; neither service ending automatically sells your coins."
          },
          {
            "type": "paragraph",
            "text": "The published NoGuru terms state that payments are non-refundable; applicable legal cancellation and refund rights still need to be reflected in the final contract. Read the provider and terms status before making a commitment."
          },
          {
            "type": "paragraph",
            "text": "Read the subscription terms →"
          }
        ],
        "links": [
          {
            "label": "Read the subscription terms →",
            "url": "?page=terms"
          }
        ]
      },
      {
        "id": "understand-the-commitment-before-you-make-it",
        "title": "Understand the commitment before you make it.",
        "body": [
          "A 14-day trial lets you assess the setup and experience. It does not establish a reliable long-term return or guarantee a completed trade."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A 14-day trial lets you assess the setup and experience. It does not establish a reliable long-term return or guarantee a completed trade."
          }
        ],
        "links": [
          {
            "label": "See the two trial timelines →",
            "url": "?page=setup-guide"
          }
        ]
      },
      {
        "id": "sources-scope",
        "title": "Sources & scope",
        "body": [
          "NoGuru rates, subscription terms and renewal rules checked against the original operator pages on 1 November 2026. Cornix plan features and published prices were rechecked on 1 November 2026. The $395.88 annual comparison is calculated from the advertised $32.99 monthly equivalent, before fees; no individual invoice was issued during this review. Read the full price and conditions in each service’s checkout before paying."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "NoGuru rates, subscription terms and renewal rules checked against the original operator pages on 1 November 2026. Cornix plan features and published prices were rechecked on 1 November 2026. The $395.88 annual comparison is calculated from the advertised $32.99 monthly equivalent, before fees; no individual invoice was issued during this review. Read the full price and conditions in each service’s checkout before paying."
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "NoGuru published pricing ↗",
              "NoGuru original setup and renewal FAQ ↗",
              "NoGuru published term totals ↗",
              "NoGuru current published terms ↗",
              "Cornix plans ↗",
              "Cornix payments and fees ↗",
              "Cornix MEXC promotion ↗"
            ]
          }
        ],
        "links": [
          {
            "label": "NoGuru published pricing ↗",
            "url": "?page=pricing"
          },
          {
            "label": "NoGuru original setup and renewal FAQ ↗",
            "url": "?page=how-it-works"
          },
          {
            "label": "NoGuru published term totals ↗",
            "url": "https://noguru.io/data/sizing.json"
          },
          {
            "label": "NoGuru current published terms ↗",
            "url": "?page=terms"
          },
          {
            "label": "Cornix plans ↗",
            "url": "https://cornix.io/pricing/"
          },
          {
            "label": "Cornix payments and fees ↗",
            "url": "https://help.cornix.io/en/articles/11892443-managing-subscription-payments-upgrades-and-fees"
          },
          {
            "label": "Cornix MEXC promotion ↗",
            "url": "https://help.cornix.io/en/articles/15272411-free-cornix-plan-for-mexc-traders"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/pricing.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "review-glossary": {
    "title": "Less jargon. More understanding.",
    "eyebrow": "Plain-language glossary",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "53 terms available."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "53 terms available."
          }
        ],
        "links": []
      },
      {
        "id": "cycle",
        "title": "Cycle",
        "body": [
          "One or more buys grouped with the sale that closes the holding. A still-open cycle has no completed-sale result. Completion does not guarantee a profit."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "One or more buys grouped with the sale that closes the holding. A still-open cycle has no completed-sale result. Completion does not guarantee a profit."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "signal",
        "title": "Signal",
        "body": [
          "An instruction from the strategy, such as planned buy levels and a target sale. Cornix uses the instruction to manage orders."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "An instruction from the strategy, such as planned buy levels and a target sale. Cornix uses the instruction to manage orders."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "ladder-rung",
        "title": "Ladder / rung",
        "body": [
          "A set of planned buy levels; a rung is one buy within it. Unfilled orders and filled holdings have different effects on available cash."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A set of planned buy levels; a rung is one buy within it. Unfilled orders and filled holdings have different effects on available cash."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=examples"
          }
        ]
      },
      {
        "id": "average-cost",
        "title": "Average cost",
        "body": [
          "Total purchase cost divided by the quantity bought, before any costs excluded from the calculation. Further lower buys can reduce the average while increasing exposure."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Total purchase cost divided by the quantity bought, before any costs excluded from the calculation. Further lower buys can reduce the average while increasing exposure."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=examples"
          }
        ]
      },
      {
        "id": "target-sale-take-profit",
        "title": "Target sale / take profit",
        "body": [
          "A planned sale level. Reaching a quoted market price does not guarantee an order fills at that price or that a net profit remains after costs."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A planned sale level. Reaching a quoted market price does not guarantee an order fills at that price or that a net profit remains after costs."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "allocation",
        "title": "Allocation",
        "body": [
          "The capital assigned to a strategy or account. A result stated on allocated funds uses a different base from a result on the cost of one trade."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The capital assigned to a strategy or account. A result stated on allocated funds uses a different base from a result on the cost of one trade."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=methodology"
          }
        ]
      },
      {
        "id": "reserve-cash",
        "title": "Reserve cash",
        "body": [
          "Funds retained for additional orders or other account needs. Cash converted into a holding becomes exposed to that asset’s price."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Funds retained for additional orders or other account needs. Cash converted into a holding becomes exposed to that asset’s price."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=examples"
          }
        ]
      },
      {
        "id": "cornix",
        "title": "Cornix",
        "body": [
          "The separate automation service that receives instructions and places orders through your exchange connection. Its subscription and trial are separate from NoGuru’s."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The separate automation service that receives instructions and places orders through your exchange connection. Its subscription and trial are separate from NoGuru’s."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=setup-guide"
          }
        ]
      },
      {
        "id": "exchange",
        "title": "Exchange",
        "body": [
          "The venue and account where coins are bought, sold and held. Availability, supported spot markets and API features vary by customer and country."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The venue and account where coins are bought, sold and held. Availability, supported spot markets and API features vary by customer and country."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=exchanges"
          }
        ]
      },
      {
        "id": "api-key",
        "title": "API key",
        "body": [
          "Credentials that allow software to act on an exchange account with defined permissions. The intended setup enables required trading access and disables withdrawals. Keep secrets private."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Credentials that allow software to act on an exchange account with defined permissions. The intended setup enables required trading access and disables withdrawals. Keep secrets private."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=setup-guide"
          }
        ]
      },
      {
        "id": "spot",
        "title": "Spot",
        "body": [
          "Buying the actual asset in the intended unleveraged NoGuru setup. Spot can still lose most or all of its value.",
          "A future is a price-linked contract rather than ownership of the coin and normally has an expiry. A perpetual contract has no fixed expiry and uses a funding mechanism. These are different instruments from NoGuru’s intended spot holdings."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Buying the actual asset in the intended unleveraged NoGuru setup. Spot can still lose most or all of its value."
          },
          {
            "type": "paragraph",
            "text": "A future is a price-linked contract rather than ownership of the coin and normally has an expiry. A perpetual contract has no fixed expiry and uses a funding mechanism. These are different instruments from NoGuru’s intended spot holdings."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-spot-futures-perps"
          }
        ]
      },
      {
        "id": "grid-and-dca",
        "title": "Grid and DCA",
        "body": [
          "A grid uses defined price levels; recurring-purchase DCA commonly uses time intervals. “Averaging down” means adding lower-priced purchases. These terms do not establish that a strategy profits."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A grid uses defined price levels; recurring-purchase DCA commonly uses time intervals. “Averaging down” means adding lower-priced purchases. These terms do not establish that a strategy profits."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=how-it-works"
          }
        ]
      },
      {
        "id": "realised-result",
        "title": "Realised result",
        "body": [
          "A gain or loss recognised on a completed sale. State whether trading fees and other costs are included."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A gain or loss recognised on a completed sale. State whether trading fees and other costs are included."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "unrealised-result",
        "title": "Unrealised result",
        "body": [
          "The current market value of an unsold holding compared with its cost. It affects wealth even before the asset is sold."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The current market value of an unsold holding compared with its cost. It affects wealth even before the asset is sold."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=risks"
          }
        ]
      },
      {
        "id": "portfolio-equity",
        "title": "Portfolio equity",
        "body": [
          "Cash plus the current value of holdings, less relevant liabilities. Deposits, withdrawals and costs must be accounted for when calculating return."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cash plus the current value of holdings, less relevant liabilities. Deposits, withdrawals and costs must be accounted for when calculating return."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=methodology"
          }
        ]
      },
      {
        "id": "published-signal-model",
        "title": "Published signal model",
        "body": [
          "A record calculated from published instructions with specified sizing and assumptions. It is not a customer account statement."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A record calculated from published instructions with specified sizing and assumptions. It is not a customer account statement."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=methodology"
          }
        ]
      },
      {
        "id": "backtest-historical-replay",
        "title": "Backtest / historical replay",
        "body": [
          "Applying rules to historical data under stated assumptions. It can be affected by costs, selection, look-ahead bias and overfitting."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Applying rules to historical data under stated assumptions. It can be affected by costs, selection, look-ahead bias and overfitting."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=methodology"
          }
        ]
      },
      {
        "id": "drawdown",
        "title": "Drawdown",
        "body": [
          "A fall from a prior value or peak, with the measurement basis stated. The gain needed to recover a loss is larger than the loss percentage."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A fall from a prior value or peak, with the measurement basis stated. The gain needed to recover a loss is larger than the loss percentage."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-arithmetic-of-losses"
          }
        ]
      },
      {
        "id": "compounding",
        "title": "Compounding",
        "body": [
          "Applying a gain or loss to a base that includes previous changes. +20% then −20% produces −4%, with no other cash flows."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Applying a gain or loss to a base that includes previous changes. +20% then −20% produces −4%, with no other cash flows."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-survive-first"
          }
        ]
      },
      {
        "id": "win-rate",
        "title": "Win rate",
        "body": [
          "Profitable completed trades divided by the completed trades counted. It omits the magnitude of outcomes and may omit open losses."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Profitable completed trades divided by the completed trades counted. It omits the magnitude of outcomes and may omit open losses."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-expectancy"
          }
        ]
      },
      {
        "id": "losing-streak",
        "title": "Losing streak",
        "body": [
          "A sequence of losing trades. A losing month describes a period’s combined result and need not mean every trade lost. Short stretches can vary even when the rules stay unchanged.",
          "A streak alone cannot prove that a method has, or has lost, an advantage. Review costs, execution, open holdings and any changes to the rules; continuing is still a choice."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A sequence of losing trades. A losing month describes a period’s combined result and need not mean every trade lost. Short stretches can vary even when the rules stay unchanged."
          },
          {
            "type": "paragraph",
            "text": "A streak alone cannot prove that a method has, or has lost, an advantage. Review costs, execution, open holdings and any changes to the rules; continuing is still a choice."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-losing-months"
          }
        ]
      },
      {
        "id": "expectancy",
        "title": "Expectancy",
        "body": [
          "An arithmetic average combining outcome sizes and frequencies under stated assumptions. Estimated historical expectancy is not a future promise."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "An arithmetic average combining outcome sizes and frequencies under stated assumptions. Estimated historical expectancy is not a future promise."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-expectancy"
          }
        ]
      },
      {
        "id": "r-multiple",
        "title": "R-multiple",
        "body": [
          "A result expressed relative to a defined planned risk unit, often based on a stop. NoGuru has no stop-loss, so that convention cannot create a capped loss for it."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A result expressed relative to a defined planned risk unit, often based on a stop. NoGuru has no stop-loss, so that convention cannot create a capped loss for it."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-risk-per-trade"
          }
        ]
      },
      {
        "id": "slippage",
        "title": "Slippage",
        "body": [
          "The difference between an expected price and the executed price. It can be favourable or adverse and can grow when liquidity is thin."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The difference between an expected price and the executed price. It can be favourable or adverse and can grow when liquidity is thin."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=risks"
          }
        ]
      },
      {
        "id": "trading-fee",
        "title": "Trading fee",
        "body": [
          "A venue charge on execution. Buys and sells can each incur fees; rate, tier, order type and payment asset matter."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A venue charge on execution. Buys and sells can each incur fees; rate, tier, order type and payment asset matter."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=pricing"
          }
        ]
      },
      {
        "id": "sample-size",
        "title": "Sample size",
        "body": [
          "The observations used to support a claim. Dependence, selection and the range of market conditions matter alongside the number of rows."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The observations used to support a claim. Dependence, selection and the range of market conditions matter alongside the number of rows."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-variance-and-sample-size"
          }
        ]
      },
      {
        "id": "long-short",
        "title": "Long / short",
        "body": [
          "A long exposure benefits from a rise; a short exposure benefits from a fall before costs. Public NoGuru does not provide a short or hedged basket feature."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A long exposure benefits from a rise; a short exposure benefits from a fall before costs. Public NoGuru does not provide a short or hedged basket feature."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-spot-futures-perps"
          }
        ]
      },
      {
        "id": "leverage",
        "title": "Leverage",
        "body": [
          "Exposure larger than the money posted as collateral. It magnifies both gains and losses relative to that collateral."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Exposure larger than the money posted as collateral. It magnifies both gains and losses relative to that collateral."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-leverage-and-liquidation"
          }
        ]
      },
      {
        "id": "liquidation",
        "title": "Liquidation",
        "body": [
          "A venue’s forced reduction or closure of a leveraged position under its collateral rules. It differs from voluntarily selling spot coins."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A venue’s forced reduction or closure of a leveraged position under its collateral rules. It differs from voluntarily selling spot coins."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-liquidation-cascades"
          }
        ]
      },
      {
        "id": "liquidation-cascade-flush",
        "title": "Liquidation cascade (flush)",
        "body": [
          "A sequence of forced closures of leveraged positions. Those orders can move the market enough to trigger further closures, amplifying a fall or a rise against short positions.",
          "This is a market mechanism, not a claim that NoGuru uses leverage. Its unleveraged spot holdings can still lose value during the resulting price move."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A sequence of forced closures of leveraged positions. Those orders can move the market enough to trigger further closures, amplifying a fall or a rise against short positions."
          },
          {
            "type": "paragraph",
            "text": "This is a market mechanism, not a claim that NoGuru uses leverage. Its unleveraged spot holdings can still lose value during the resulting price move."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-liquidation-cascades"
          }
        ]
      },
      {
        "id": "isolated-cross-margin",
        "title": "Isolated / cross margin",
        "body": [
          "Collateral assigned to a position versus collateral shared across eligible positions under the venue’s rules. Neither is a NoGuru onboarding step."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Collateral assigned to a position versus collateral shared across eligible positions under the venue’s rules. Neither is a NoGuru onboarding step."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-margin-isolated-vs-cross"
          }
        ]
      },
      {
        "id": "maintenance-margin",
        "title": "Maintenance margin",
        "body": [
          "The collateral requirement for keeping a leveraged position open. Exact formulas depend on the product and venue."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The collateral requirement for keeping a leveraged position open. Exact formulas depend on the product and venue."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-leverage-and-liquidation"
          }
        ]
      },
      {
        "id": "hedge-mode",
        "title": "Hedge mode",
        "body": [
          "A derivative account convention that can track opposite positions separately. It is not a promise of risk elimination."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A derivative account convention that can track opposite positions separately. It is not a promise of risk elimination."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-margin-isolated-vs-cross"
          }
        ]
      },
      {
        "id": "funding-rate",
        "title": "Funding rate",
        "body": [
          "A recurring payment mechanism in perpetual contracts. Rate and settlement interval vary; this is not a cost of an ordinary unleveraged spot holding."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A recurring payment mechanism in perpetual contracts. Rate and settlement interval vary; this is not a cost of an ordinary unleveraged spot holding."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-funding-rates"
          }
        ]
      },
      {
        "id": "open-interest",
        "title": "Open interest",
        "body": [
          "Outstanding derivative contracts under a venue’s counting method. Each contract has two sides; changes alone do not reveal every participant’s intent."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Outstanding derivative contracts under a venue’s counting method. Each contract has two sides; changes alone do not reveal every participant’s intent."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-open-interest"
          }
        ]
      },
      {
        "id": "long-short-ratio",
        "title": "Long/short ratio",
        "body": [
          "A provider-defined comparison of long and short accounts or positions. Check what is counted before interpreting the number."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A provider-defined comparison of long and short accounts or positions. Check what is counted before interpreting the number."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=market"
          }
        ]
      },
      {
        "id": "correlation",
        "title": "Correlation",
        "body": [
          "How returns moved together over a stated sample. It can change and does not guarantee diversification."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "How returns moved together over a stated sample. It can change and does not guarantee diversification."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-correlation-one-bet"
          }
        ]
      },
      {
        "id": "position-sizing",
        "title": "Position sizing",
        "body": [
          "The amount of capital or exposure committed to a trade. Generic stop-based sizing starts with a planned loss budget and stop distance; that calculation does not guarantee the execution price or cap a loss.",
          "NoGuru’s documented setup instead uses signal-defined account percentages and a reserve for deeper buys. A generic 1–2% stop-risk formula is not a NoGuru bot setting."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The amount of capital or exposure committed to a trade. Generic stop-based sizing starts with a planned loss budget and stop distance; that calculation does not guarantee the execution price or cap a loss."
          },
          {
            "type": "paragraph",
            "text": "NoGuru’s documented setup instead uses signal-defined account percentages and a reserve for deeper buys. A generic 1–2% stop-risk formula is not a NoGuru bot setting."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-risk-per-trade"
          }
        ]
      },
      {
        "id": "sizing-down",
        "title": "Sizing down",
        "body": [
          "Deliberately reducing the size of future trades, often following a review trigger set in advance. It does not automatically sell existing holdings or cancel pending orders.",
          "Changing NoGuru’s sizing or spending its reserve changes the documented setup and makes its published results less comparable with your account."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Deliberately reducing the size of future trades, often following a review trigger set in advance. It does not automatically sell existing holdings or cancel pending orders."
          },
          {
            "type": "paragraph",
            "text": "Changing NoGuru’s sizing or spending its reserve changes the documented setup and makes its published results less comparable with your account."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-when-to-size-down"
          }
        ]
      },
      {
        "id": "portfolio-heat",
        "title": "Portfolio heat",
        "body": [
          "Usually the aggregate planned stop-based risk of a portfolio. Without stops, exposure and current market value need separate treatment."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Usually the aggregate planned stop-based risk of a portfolio. Without stops, exposure and current market value need separate treatment."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-portfolio-heat"
          }
        ]
      },
      {
        "id": "stop-loss",
        "title": "Stop-loss",
        "body": [
          "An instruction intended to exit under specified conditions. Execution is not guaranteed at the chosen price. NoGuru intentionally has no stop-loss."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "An instruction intended to exit under specified conditions. Execution is not guaranteed at the chosen price. NoGuru intentionally has no stop-loss."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=risks"
          }
        ]
      },
      {
        "id": "atr",
        "title": "ATR",
        "body": [
          "Average True Range: a measure of recent price movement per bar. It describes the selected history rather than a guaranteed future range."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Average True Range: a measure of recent price movement per bar. It describes the selected history rather than a guaranteed future range."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-timeframes"
          }
        ]
      },
      {
        "id": "ema",
        "title": "EMA",
        "body": [
          "Exponential Moving Average: a smoothed price series giving greater weight to recent observations."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Exponential Moving Average: a smoothed price series giving greater weight to recent observations."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-timeframes"
          }
        ]
      },
      {
        "id": "timeframe",
        "title": "Timeframe",
        "body": [
          "The period represented by a chart bar. Different timeframes can describe different directions at the same moment."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The period represented by a chart bar. Different timeframes can describe different directions at the same moment."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-timeframes"
          }
        ]
      },
      {
        "id": "trend-range",
        "title": "Trend / range",
        "body": [
          "Descriptions of directional movement or repeated movement within an area over a chosen period. Conditions can change."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Descriptions of directional movement or repeated movement within an area over a chosen period. Conditions can change."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-trend-vs-range"
          }
        ]
      },
      {
        "id": "support-resistance",
        "title": "Support / resistance",
        "body": [
          "Price areas used as reference points for possible buying or selling interest. They can fail and do not identify a guaranteed turn."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Price areas used as reference points for possible buying or selling interest. They can fail and do not identify a guaranteed turn."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-zones-not-lines"
          }
        ]
      },
      {
        "id": "technical-analysis",
        "title": "Technical analysis",
        "body": [
          "Using price, volume and derived indicators to describe markets or define rules. A chart pattern is not proof of a profitable forecast."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Using price, volume and derived indicators to describe markets or define rules. A chart pattern is not proof of a profitable forecast."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-what-ta-can-do"
          }
        ]
      },
      {
        "id": "cme-gap",
        "title": "CME gap",
        "body": [
          "A difference between successive futures session prices while other markets continued trading. Historical closure patterns must not be assumed to match current venue hours."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A difference between successive futures session prices while other markets continued trading. Historical closure patterns must not be assumed to match current venue hours."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-weekend-drift"
          }
        ]
      },
      {
        "id": "fear-greed-index",
        "title": "Fear & Greed Index",
        "body": [
          "A provider’s composite sentiment measure. It is contextual information, not a reliable buy or sell instruction."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A provider’s composite sentiment measure. It is contextual information, not a reliable buy or sell instruction."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=market"
          }
        ]
      },
      {
        "id": "btc-dominance",
        "title": "BTC dominance",
        "body": [
          "Bitcoin’s share of the market capitalisation in a provider’s measured asset universe. Changes do not identify a certain price path."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bitcoin’s share of the market capitalisation in a provider’s measured asset universe. Changes do not identify a certain price path."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=market"
          }
        ]
      },
      {
        "id": "market-neutral-basket",
        "title": "Market-neutral basket",
        "body": [
          "An approach combining offsetting exposures to reduce a defined market sensitivity. It is not risk-free and is not the public NoGuru spot product."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "An approach combining offsetting exposures to reduce a defined market sensitivity. It is not risk-free and is not the public NoGuru spot product."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-correlation-one-bet"
          }
        ]
      },
      {
        "id": "loss-aversion",
        "title": "Loss aversion",
        "body": [
          "A tendency for losses to feel more consequential than similar gains. It does not make a trading loss harmless or require you to continue trading."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A tendency for losses to feel more consequential than similar gains. It does not make a trading loss harmless or require you to continue trading."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-first-loss"
          }
        ]
      },
      {
        "id": "trading-journal",
        "title": "Trading journal",
        "body": [
          "A record of decisions, execution, open exposure and outcomes that supports review without relying only on memory."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "A record of decisions, execution, open exposure and outcomes that supports review without relying only on memory."
          }
        ],
        "links": [
          {
            "label": "Read the explanation →",
            "url": "?page=academy-journaling"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/glossary.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "review-methodology": {
    "title": "Ask what the number actually measures.",
    "eyebrow": "Evidence / methodology",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Evidence",
              "What it describes",
              "What it does not establish"
            ],
            "rows": [
              [
                "Published signal model",
                "Published instructions, valued using the record's stated buy sizing and allocation.",
                "Your actual fills, fees, account equity or future returns."
              ],
              [
                "Historical replay / backtest",
                "Rules applied to historical data under explicit assumptions.",
                "Actual live execution or how future markets will behave."
              ],
              [
                "Operator account",
                "A specific dated account and accounting scope.",
                "The result for every subscriber or for another product."
              ],
              [
                "Subscriber outcome",
                "An individual account, with deposits, withdrawals, costs and holdings reconciled.",
                "A typical outcome without representative evidence. No new subscriber result is verified here."
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "closed-profit-is-not-account-equity",
        "title": "Closed profit is not account equity.",
        "body": [
          "The public model starts on 1 August 2026 and uses the buy amounts at the saved snapshot. Accumulated profit from completed cycles excludes the unrealised value changes of coins still held and excludes exchange and subscription costs.",
          "A completed-profit percentage on allocated funds and an open-loss percentage on open cost have different denominators. Adding them does not produce a meaningful total return."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The public model starts on 1 August 2026 and uses the buy amounts at the saved snapshot. Accumulated profit from completed cycles excludes the unrealised value changes of coins still held and excludes exchange and subscription costs."
          },
          {
            "type": "paragraph",
            "text": "A completed-profit percentage on allocated funds and an open-loss percentage on open cost have different denominators. Adding them does not produce a meaningful total return."
          }
        ],
        "links": []
      },
      {
        "id": "the-account-picture-needs-all-of-this",
        "title": "The account picture needs all of this",
        "body": [
          "From strategy development to the record"
        ],
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Cash and current value of every open holding.",
              "Deposits, withdrawals and starting capital.",
              "Realised proceeds and cost basis.",
              "Trading fees and other costs.",
              "The same timestamp, currency and scope for each item."
            ]
          },
          {
            "type": "paragraph",
            "text": "From strategy development to the record"
          }
        ],
        "links": [
          {
            "label": "See the accounting in a worked example →",
            "url": "?page=examples"
          }
        ]
      },
      {
        "id": "strategy-development-and-recordkeeping",
        "title": "Strategy development and recordkeeping.",
        "body": [
          "The operator’s methodology, dated 29 July 2026 and captured on 31 October, describes the process below across its channels. This is an attributed development description, not an independent audit of the current NoGuru spot service."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The operator’s methodology, dated 29 July 2026 and captured on 31 October, describes the process below across its channels. This is an attributed development description, not an independent audit of the current NoGuru spot service."
          }
        ],
        "links": []
      },
      {
        "id": "strategy-events-become-signals-and-records",
        "title": "Strategy events become signals and records.",
        "body": [
          "The operator describes automated strategies running on its own infrastructure using exchange market data. When a strategy opens or closes a trade, a publishing process turns that event into a channel signal. The same event stream supplies the database used for the public record.",
          "That relationship connects the strategy event, published instruction and recorded row. It does not establish that every customer order filled, or that every displayed row represents a live trade."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The operator describes automated strategies running on its own infrastructure using exchange market data. When a strategy opens or closes a trade, a publishing process turns that event into a channel signal. The same event stream supplies the database used for the public record."
          },
          {
            "type": "paragraph",
            "text": "That relationship connects the strategy event, published instruction and recorded row. It does not establish that every customer order filled, or that every displayed row represents a live trade."
          }
        ],
        "links": []
      },
      {
        "id": "historical-tests-then-data-outside-the-tuning-sample",
        "title": "Historical tests, then data outside the tuning sample.",
        "body": [
          "The stated development process includes historical backtesting with fees, slippage and, where relevant to the instrument, funding costs. It then checks configurations on data they were not tuned on; configurations that work only on the tuning sample are rejected.",
          "The source also describes testing with the operator’s own money. That broader claim does not verify every channel or row as live: the same document includes virtual and pre-launch records. Test datasets, settings and out-of-sample reports have not been independently audited here."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The stated development process includes historical backtesting with fees, slippage and, where relevant to the instrument, funding costs. It then checks configurations on data they were not tuned on; configurations that work only on the tuning sample are rejected."
          },
          {
            "type": "paragraph",
            "text": "The source also describes testing with the operator’s own money. That broader claim does not verify every channel or row as live: the same document includes virtual and pre-launch records. Test datasets, settings and out-of-sample reports have not been independently audited here."
          }
        ],
        "links": []
      },
      {
        "id": "recordkeeping-commitments-and-their-limits",
        "title": "Recordkeeping commitments and their limits",
        "body": [
          "The source states commitments against fabricated profit screenshots, selectively deleting losing signals, accuracy-only marketing and profit promises. These are the operator’s stated commitments, not proof that the record is complete or error-free. Declared exclusions, virtual rows and later corrections still need their own scope and version history.",
          "Source: operator methodology (current URL) ↗ . This URL may change; the description above uses the captured version. Its wider channel description should not be read as a promise that NoGuru uses every market-data input or instrument it mentions."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The source states commitments against fabricated profit screenshots, selectively deleting losing signals, accuracy-only marketing and profit promises. These are the operator’s stated commitments, not proof that the record is complete or error-free. Declared exclusions, virtual rows and later corrections still need their own scope and version history."
          },
          {
            "type": "paragraph",
            "text": "Source: operator methodology (current URL) ↗ . This URL may change; the description above uses the captured version. Its wider channel description should not be read as a promise that NoGuru uses every market-data input or instrument it mentions."
          }
        ],
        "links": [
          {
            "label": "Read the exclusions and correction caveats →",
            "url": "?page=methodology#record-scope"
          },
          {
            "label": "operator methodology (current URL) ↗",
            "url": "?page=methodology"
          }
        ]
      },
      {
        "id": "record-scope",
        "title": "Scope and unresolved history",
        "body": [
          "The existing public methodology allows exclusions for retired configurations and describes virtual rows for applicable channels. Those scope choices matter when interpreting coverage. An operator-published record is not automatically a complete or independent audit.",
          "Historical public-record corrections still require clear documentation of the affected versions and rows before relying on affected claims. No audit of all subscriber returns is established here.",
          "Older daily digests used different reporting bases. They are retained as dated historical material , with context, and should not be combined into a fresh continuous return series."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The existing public methodology allows exclusions for retired configurations and describes virtual rows for applicable channels. Those scope choices matter when interpreting coverage. An operator-published record is not automatically a complete or independent audit."
          },
          {
            "type": "paragraph",
            "text": "Historical public-record corrections still require clear documentation of the affected versions and rows before relying on affected claims. No audit of all subscriber returns is established here."
          },
          {
            "type": "paragraph",
            "text": "Older daily digests used different reporting bases. They are retained as dated historical material , with context, and should not be combined into a fresh continuous return series."
          }
        ],
        "links": [
          {
            "label": "dated historical material",
            "url": "?page=digest"
          }
        ]
      },
      {
        "id": "how-this-preview-presents-data",
        "title": "How this preview presents data",
        "body": [
          "Each snapshot states its source date, sizing basis, fee treatment and open exposure. No invented trade feed, customer result or “live” badge is used. A locally saved snapshot does not refresh itself.",
          "Charts marked “illustrative” explain a mechanism. Their price paths have no predictive meaning. The scenario explorer performs deterministic arithmetic and assumes fills only to make the accounting visible."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Each snapshot states its source date, sizing basis, fee treatment and open exposure. No invented trade feed, customer result or “live” badge is used. A locally saved snapshot does not refresh itself."
          },
          {
            "type": "paragraph",
            "text": "Charts marked “illustrative” explain a mechanism. Their price paths have no predictive meaning. The scenario explorer performs deterministic arithmetic and assumes fills only to make the accounting visible."
          }
        ],
        "links": []
      },
      {
        "id": "sources-scope",
        "title": "Sources & scope",
        "body": [
          "Operator sources captured 31 October 2026; development description reviewed 1 November 2026. The captured methodology is dated 29 July 2026. Current operator URLs below may change and are not independent verification. The dated record page links the saved public ledger and chart, with their separate timestamps, fee treatment and open-exposure limits."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Operator sources captured 31 October 2026; development description reviewed 1 November 2026. The captured methodology is dated 29 July 2026. Current operator URLs below may change and are not independent verification. The dated record page links the saved public ledger and chart, with their separate timestamps, fee treatment and open-exposure limits."
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Operator methodology (current URL) ↗",
              "Operator record page (current URL) ↗"
            ]
          }
        ],
        "links": [
          {
            "label": "dated record page",
            "url": "?page=evidence"
          },
          {
            "label": "Operator methodology (current URL) ↗",
            "url": "?page=methodology"
          },
          {
            "label": "Operator record page (current URL) ↗",
            "url": "?page=evidence"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/methodology.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "review-track-record": {
    "title": "See what closed. And what is still exposed.",
    "eyebrow": "The published record / saved 31 Oct 2026",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Historical signal-model observations, before fees. This is educational information, not financial advice or a forecast of your account results.",
          "Completed cycles",
          "1,019",
          "1,017 positive and 2 negative rows in the saved public ledger. Not a guarantee of future gains.",
          "Still open",
          "20",
          "Unfinished cycles remain exposed. Their eventual duration and outcome are unknown.",
          "Open holdings vs cost",
          "−12.2%",
          "Unrealised change on the cost of open holdings, before costs. This is not a percentage of total portfolio equity.",
          "All three figures: one public ledger API snapshot retrieved 31 October 2026. Saved data, not a live feed. Source does not expose a snapshot-generation time."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Historical signal-model observations, before fees. This is educational information, not financial advice or a forecast of your account results."
          },
          {
            "type": "paragraph",
            "text": "Completed cycles"
          },
          {
            "type": "paragraph",
            "text": "1,019"
          },
          {
            "type": "paragraph",
            "text": "1,017 positive and 2 negative rows in the saved public ledger. Not a guarantee of future gains."
          },
          {
            "type": "paragraph",
            "text": "Still open"
          },
          {
            "type": "paragraph",
            "text": "20"
          },
          {
            "type": "paragraph",
            "text": "Unfinished cycles remain exposed. Their eventual duration and outcome are unknown."
          },
          {
            "type": "paragraph",
            "text": "Open holdings vs cost"
          },
          {
            "type": "paragraph",
            "text": "−12.2%"
          },
          {
            "type": "paragraph",
            "text": "Unrealised change on the cost of open holdings, before costs. This is not a percentage of total portfolio equity."
          },
          {
            "type": "paragraph",
            "text": "All three figures: one public ledger API snapshot retrieved 31 October 2026. Saved data, not a live feed. Source does not expose a snapshot-generation time."
          }
        ],
        "links": []
      },
      {
        "id": "keep-open-exposure-in-view",
        "title": "Keep open exposure in view.",
        "body": [
          "The same response reports open-holding cost at 119.1% of its reference allocation (the amount used as its comparison base) . That denominator is not a verified subscriber account balance. Do not interpret it as leverage or combine it with closed-profit percentages to calculate a portfolio return. Allocation and sizing reconciliation remain necessary for that claim."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The same response reports open-holding cost at 119.1% of its reference allocation (the amount used as its comparison base) . That denominator is not a verified subscriber account balance. Do not interpret it as leverage or combine it with closed-profit percentages to calculate a portfolio return. Allocation and sizing reconciliation remain necessary for that claim."
          }
        ],
        "links": []
      },
      {
        "id": "the-operator-s-published-profit-chart",
        "title": "The operator's published profit chart.",
        "body": [
          "This is the actual saved chart, not the concept image or an invented return curve. Read its earlier timestamp separately from the ledger snapshot above.",
          "This curve excludes the unrealised losses of open positions. It is not account equity, a subscriber result or an expected-return curve. The original artifact is retained so its scope and labels can be inspected."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "This is the actual saved chart, not the concept image or an invented return curve. Read its earlier timestamp separately from the ledger snapshot above."
          },
          {
            "type": "figure",
            "src": "assets/migrated/published-signals-2026-10-31.svg",
            "alt": "Operator published completed-profit chart from August to October 2026; approximately 33.8 percent gross completed profit, 1,018 completed cycles, before fees. This excludes open-holding losses.",
            "caption": "Original published SVG, generated 31 October 2026 at 07:30:11 (source timezone unspecified): 1,018 cycles and approximately +33.8% accumulated completed profit on allocation, before fees. It predates the separate 1,019-row ledger snapshot. These are two identified observations, not one synchronised dataset."
          },
          {
            "type": "paragraph",
            "text": "This curve excludes the unrealised losses of open positions. It is not account equity, a subscriber result or an expected-return curve. The original artifact is retained so its scope and labels can be inspected."
          }
        ],
        "links": []
      },
      {
        "id": "look-inside-the-completed-cycles",
        "title": "Look inside the completed cycles.",
        "body": [
          "Public anonymous rows, with no coin names at source. Percentage results relate to the cycle, not a whole account. Dates below are UTC.",
          "A cycle-level percentage is not weighted by your actual allocation. Adding row percentages would not reproduce a portfolio return."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Public anonymous rows, with no coin names at source. Percentage results relate to the cycle, not a whole account. Dates below are UTC."
          },
          {
            "type": "table",
            "headers": [
              "Opened (UTC)",
              "Closed (UTC)",
              "Buy steps",
              "Cycle result"
            ],
            "rows": [
              [
                "2026-10-30",
                "2026-10-31",
                "4",
                "+1.71%"
              ],
              [
                "2026-10-30",
                "2026-10-30",
                "1",
                "+1.91%"
              ],
              [
                "2026-10-29",
                "2026-10-30",
                "11",
                "+1.80%"
              ],
              [
                "2026-10-29",
                "2026-10-29",
                "1",
                "+3.18%"
              ],
              [
                "2026-10-29",
                "2026-10-29",
                "1",
                "+1.77%"
              ],
              [
                "2026-10-29",
                "2026-10-29",
                "1",
                "+1.89%"
              ],
              [
                "2026-10-29",
                "2026-10-29",
                "1",
                "+2.79%"
              ],
              [
                "2026-10-29",
                "2026-10-29",
                "1",
                "+1.82%"
              ],
              [
                "2026-10-26",
                "2026-10-29",
                "2",
                "+1.91%"
              ],
              [
                "2026-10-28",
                "2026-10-29",
                "5",
                "+2.30%"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "A cycle-level percentage is not weighted by your actual allocation. Adding row percentages would not reproduce a portfolio return."
          }
        ],
        "links": [
          {
            "label": "Download the 1,019 public rows ↓",
            "url": "https://vimo33.github.io/noguru-review/assets/evidence/closed-cycles.csv"
          }
        ]
      },
      {
        "id": "the-evidence-is-useful-when-its-limits-stay-visible",
        "title": "The evidence is useful when its limits stay visible.",
        "body": [
          "Execution, timing, settings, fees and open holdings all affect a real account. Historical outcomes cannot promise a recovery or a future result."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Execution, timing, settings, fees and open holdings all affect a real account. Historical outcomes cannot promise a recovery or a future result."
          }
        ],
        "links": []
      },
      {
        "id": "sources-scope",
        "title": "Sources & scope",
        "body": [
          "Operator sources captured 31 October 2026. The current operator URLs below may change; they are not independent verification. For the figures shown here, inspect the saved ledger CSV , saved ledger JSON and saved chart . The chart and ledger have separate timestamps and measurement limits, as explained above."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Operator sources captured 31 October 2026. The current operator URLs below may change; they are not independent verification. For the figures shown here, inspect the saved ledger CSV , saved ledger JSON and saved chart . The chart and ledger have separate timestamps and measurement limits, as explained above."
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Operator record page (current URL) ↗",
              "Operator ledger endpoint (current URL) ↗",
              "Operator chart (current URL) ↗"
            ]
          }
        ],
        "links": [
          {
            "label": "saved ledger CSV",
            "url": "https://vimo33.github.io/noguru-review/assets/evidence/closed-cycles.csv"
          },
          {
            "label": "saved ledger JSON",
            "url": "https://vimo33.github.io/noguru-review/assets/evidence/closed-cycles.json"
          },
          {
            "label": "saved chart",
            "url": "https://vimo33.github.io/noguru-review/assets/evidence/published-signals-2026-10-31.svg"
          },
          {
            "label": "Operator record page (current URL) ↗",
            "url": "?page=evidence"
          },
          {
            "label": "Operator ledger endpoint (current URL) ↗",
            "url": "https://noguru.io/api/public/track-record"
          },
          {
            "label": "Operator chart (current URL) ↗",
            "url": "https://noguru.io/data/published_signals.svg"
          }
        ]
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/track-record.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  },
  "review-market": {
    "title": "Know what you’re looking at.",
    "eyebrow": "Market context · Saved 31 October 2026",
    "intro": "Dated prior review reading, preserved locally. Current prices, provider details and source scope take precedence; this is not a new performance claim.",
    "kind": "prior-review",
    "sections": [
      {
        "id": "current-context",
        "title": "Current context",
        "body": [
          "This review text predates the checked current public terms. The public provider is NoGuru LLC; current NoGuru and Cornix prices and separate trials are on the internal Pricing and Trial pages. References to historical figures keep their original period and model scope."
        ],
        "links": [
          {
            "label": "Checked pricing",
            "url": "?page=pricing"
          },
          {
            "label": "Provider source",
            "url": "?page=impressum"
          },
          {
            "label": "Current evidence",
            "url": "?page=evidence"
          }
        ]
      },
      {
        "id": "public-reading",
        "title": "Public reading",
        "body": [
          "Each panel keeps its own source time where available. Values are not refreshed. The original dashboard remains linked above; a delayed or missing feed should never be treated as a trading signal."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Each panel keeps its own source time where available. Values are not refreshed. The original dashboard remains linked above; a delayed or missing feed should never be treated as a trading signal."
          }
        ],
        "links": [
          {
            "label": "Open the existing live dashboard ↗",
            "url": "?page=market"
          }
        ]
      },
      {
        "id": "the-broad-picture",
        "title": "The broad picture",
        "body": [
          "Market size and sentiment describe a provider’s measured universe. They do not show where prices must go next."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Market size and sentiment describe a provider’s measured universe. They do not show where prices must go next."
          }
        ],
        "links": []
      },
      {
        "id": "market-overview",
        "title": "Market overview",
        "body": [
          "The two change fields have different source bases. They are shown separately, without treating them as the same measure.",
          "Captured 31 October 2026 · Source timestamp: 2026-10-31T13:26:16+00:00. Public source"
        ],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Measure",
              "Snapshot"
            ],
            "rows": [
              [
                "Total crypto market capitalisation",
                "$2.63 trillion"
              ],
              [
                "Bitcoin share",
                "59.24%"
              ],
              [
                "Ethereum share",
                "10.44%"
              ],
              [
                "24h change: top-250 source series",
                "+0.31%"
              ],
              [
                "24h change: separate CoinGecko total field",
                "-2.52%"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "The two change fields have different source bases. They are shown separately, without treating them as the same measure."
          },
          {
            "type": "paragraph",
            "text": "Captured 31 October 2026 · Source timestamp: 2026-10-31T13:26:16+00:00. Public source"
          }
        ],
        "links": [
          {
            "label": "Public source",
            "url": "https://noguru.io/api/public/global"
          }
        ]
      },
      {
        "id": "fear-greed",
        "title": "Fear & Greed",
        "body": [
          "30 / 100",
          "Fear · source observation 2026-10-31 00:00 UTC",
          "A composite sentiment reading attributed to alternative.me by the public dashboard. A low score is not a buy instruction; a high score is not a sell instruction.",
          "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "30 / 100"
          },
          {
            "type": "paragraph",
            "text": "Fear · source observation 2026-10-31 00:00 UTC"
          },
          {
            "type": "paragraph",
            "text": "A composite sentiment reading attributed to alternative.me by the public dashboard. A low score is not a buy instruction; a high score is not a sell instruction."
          },
          {
            "type": "table",
            "headers": [
              "Observation, UTC",
              "Index",
              "Label"
            ],
            "rows": [
              [
                "31 Oct",
                "30",
                "Fear"
              ],
              [
                "30 Oct",
                "30",
                "Fear"
              ],
              [
                "29 Oct",
                "51",
                "Neutral"
              ],
              [
                "28 Oct",
                "51",
                "Neutral"
              ],
              [
                "27 Oct",
                "48",
                "Neutral"
              ],
              [
                "26 Oct",
                "50",
                "Neutral"
              ],
              [
                "25 Oct",
                "54",
                "Neutral"
              ],
              [
                "24 Oct",
                "51",
                "Neutral"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
          }
        ],
        "links": [
          {
            "label": "Public source",
            "url": "https://noguru.io/api/public/fng"
          }
        ]
      },
      {
        "id": "trend-matrix",
        "title": "Trend matrix",
        "body": [
          "Price’s distance above or below its recent average, measured in units of recent typical bar movement (ATR).",
          "Positive and negative numbers describe the chosen history. Agreement across timeframes does not guarantee continuation; disagreement does not guarantee a range.",
          "Captured 31 October 2026 · Source timestamp: 2026-10-31 13:18:55.740973+00:00. Public source"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Price’s distance above or below its recent average, measured in units of recent typical bar movement (ATR)."
          },
          {
            "type": "table",
            "headers": [
              "Coin",
              "1h",
              "4h",
              "1d",
              "1w"
            ],
            "rows": [
              [
                "AVAX",
                "0.40",
                "-0.63",
                "-1.59",
                "0.01"
              ],
              [
                "BNB",
                "0.58",
                "-0.86",
                "-1.33",
                "0.69"
              ],
              [
                "BTC",
                "0.43",
                "-0.93",
                "-1.85",
                "0.60"
              ],
              [
                "ETH",
                "1.11",
                "-0.76",
                "-1.69",
                "0.02"
              ],
              [
                "LDO",
                "-0.34",
                "-1.13",
                "-1.59",
                "-0.25"
              ],
              [
                "LINK",
                "1.46",
                "0.34",
                "-0.76",
                "0.13"
              ],
              [
                "SOL",
                "0.25",
                "-0.93",
                "-1.77",
                "0.24"
              ],
              [
                "XMR",
                "-0.06",
                "-0.04",
                "0.07",
                "1.60"
              ],
              [
                "XRP",
                "-0.07",
                "-0.85",
                "-1.27",
                "-0.22"
              ],
              [
                "ZEC",
                "1.20",
                "0.29",
                "0.22",
                "1.08"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Positive and negative numbers describe the chosen history. Agreement across timeframes does not guarantee continuation; disagreement does not guarantee a range."
          },
          {
            "type": "paragraph",
            "text": "Captured 31 October 2026 · Source timestamp: 2026-10-31 13:18:55.740973+00:00. Public source"
          }
        ],
        "links": [
          {
            "label": "Public source",
            "url": "https://noguru.io/api/public/trend-matrix"
          }
        ]
      },
      {
        "id": "session-reference-levels",
        "title": "Session reference levels",
        "body": [
          "Where the market traded within each defined window.",
          "Crypto price windows continue over the weekend. These are fixed time windows, not a claim that Tokyo, London or New York stock exchanges are open."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Where the market traded within each defined window."
          },
          {
            "type": "paragraph",
            "text": "Crypto price windows continue over the weekend. These are fixed time windows, not a claim that Tokyo, London or New York stock exchanges are open."
          }
        ],
        "links": []
      },
      {
        "id": "btc-source-price-77-490-85",
        "title": "BTC · source price 77,490.85",
        "body": [],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Window",
              "UTC interval",
              "Low",
              "High"
            ],
            "rows": [
              [
                "Asia",
                "00:00-08:00",
                "77,114.01",
                "77,654.44"
              ],
              [
                "London",
                "07:00-16:00",
                "77,262.72",
                "77,745.33"
              ],
              [
                "New York",
                "12:00-21:00",
                "77,478",
                "77,745.33"
              ],
              [
                "Prior UTC day",
                "00:00–24:00",
                "76,325.98",
                "78,804.01"
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "eth-source-price-2-249-34",
        "title": "ETH · source price 2,249.34",
        "body": [],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Window",
              "UTC interval",
              "Low",
              "High"
            ],
            "rows": [
              [
                "Asia",
                "00:00-08:00",
                "2,237",
                "2,252.62"
              ],
              [
                "London",
                "07:00-16:00",
                "2,238.57",
                "2,255.58"
              ],
              [
                "New York",
                "12:00-21:00",
                "2,247.32",
                "2,255.58"
              ],
              [
                "Prior UTC day",
                "00:00–24:00",
                "2,174.08",
                "2,262.49"
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "sol-source-price-95-85",
        "title": "SOL · source price 95.85",
        "body": [],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Window",
              "UTC interval",
              "Low",
              "High"
            ],
            "rows": [
              [
                "Asia",
                "00:00-08:00",
                "95.54",
                "97.09"
              ],
              [
                "London",
                "07:00-16:00",
                "95.23",
                "96.44"
              ],
              [
                "New York",
                "12:00-21:00",
                "95.77",
                "96.44"
              ],
              [
                "Prior UTC day",
                "00:00–24:00",
                "92.34",
                "98.59"
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "bnb-source-price-705-47",
        "title": "BNB · source price 705.47",
        "body": [],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Window",
              "UTC interval",
              "Low",
              "High"
            ],
            "rows": [
              [
                "Asia",
                "00:00-08:00",
                "699.89",
                "710.83"
              ],
              [
                "London",
                "07:00-16:00",
                "698.79",
                "707.19"
              ],
              [
                "New York",
                "12:00-21:00",
                "704.36",
                "707.19"
              ],
              [
                "Prior UTC day",
                "00:00–24:00",
                "682.16",
                "722.08"
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "xrp-source-price-1-2483",
        "title": "XRP · source price 1.2483",
        "body": [],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Window",
              "UTC interval",
              "Low",
              "High"
            ],
            "rows": [
              [
                "Asia",
                "00:00-08:00",
                "1.2424",
                "1.2623"
              ],
              [
                "London",
                "07:00-16:00",
                "1.2439",
                "1.2524"
              ],
              [
                "New York",
                "12:00-21:00",
                "1.2472",
                "1.2524"
              ],
              [
                "Prior UTC day",
                "00:00–24:00",
                "1.2002",
                "1.2739"
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "doge-source-price-0-07537",
        "title": "DOGE · source price 0.07537",
        "body": [],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Window",
              "UTC interval",
              "Low",
              "High"
            ],
            "rows": [
              [
                "Asia",
                "00:00-08:00",
                "0.07496",
                "0.07645"
              ],
              [
                "London",
                "07:00-16:00",
                "0.07485",
                "0.07559"
              ],
              [
                "New York",
                "12:00-21:00",
                "0.07523",
                "0.07559"
              ],
              [
                "Prior UTC day",
                "00:00–24:00",
                "0.0722",
                "0.07682"
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "ada-source-price-0-1928",
        "title": "ADA · source price 0.1928",
        "body": [],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Window",
              "UTC interval",
              "Low",
              "High"
            ],
            "rows": [
              [
                "Asia",
                "00:00-08:00",
                "0.1926",
                "0.197"
              ],
              [
                "London",
                "07:00-16:00",
                "0.192",
                "0.1937"
              ],
              [
                "New York",
                "12:00-21:00",
                "0.1923",
                "0.1933"
              ],
              [
                "Prior UTC day",
                "00:00–24:00",
                "0.182",
                "0.1956"
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "link-source-price-11-587",
        "title": "LINK · source price 11.587",
        "body": [],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Window",
              "UTC interval",
              "Low",
              "High"
            ],
            "rows": [
              [
                "Asia",
                "00:00-08:00",
                "11.333",
                "11.749"
              ],
              [
                "London",
                "07:00-16:00",
                "11.324",
                "11.632"
              ],
              [
                "New York",
                "12:00-21:00",
                "11.508",
                "11.632"
              ],
              [
                "Prior UTC day",
                "00:00–24:00",
                "10.273",
                "11.474"
              ]
            ]
          }
        ],
        "links": []
      },
      {
        "id": "avax-source-price-8-502",
        "title": "AVAX · source price 8.502",
        "body": [
          "Trading above an earlier high or below an earlier low is an observation, not proof of the next direction.",
          "Captured 31 October 2026 · Source timestamp: 2026-10-31T13:35:24.279680+00:00. Public source"
        ],
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Window",
              "UTC interval",
              "Low",
              "High"
            ],
            "rows": [
              [
                "Asia",
                "00:00-08:00",
                "8.442",
                "8.66"
              ],
              [
                "London",
                "07:00-16:00",
                "8.407",
                "8.529"
              ],
              [
                "New York",
                "12:00-21:00",
                "8.452",
                "8.525"
              ],
              [
                "Prior UTC day",
                "00:00–24:00",
                "8",
                "8.686"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Trading above an earlier high or below an earlier low is an observation, not proof of the next direction."
          },
          {
            "type": "paragraph",
            "text": "Captured 31 October 2026 · Source timestamp: 2026-10-31T13:35:24.279680+00:00. Public source"
          }
        ],
        "links": [
          {
            "label": "Public source",
            "url": "https://noguru.io/api/public/session-levels"
          }
        ]
      },
      {
        "id": "price-and-open-interest",
        "title": "Price and open interest",
        "body": [
          "Open interest counts outstanding derivative contracts. Every contract has two sides.",
          "Changes do not directly reveal every trader’s intention. Interpretive labels such as “new longs” or “short covering” are not facts about individual accounts.",
          "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Open interest counts outstanding derivative contracts. Every contract has two sides."
          },
          {
            "type": "table",
            "headers": [
              "Coin",
              "15m price",
              "15m open interest",
              "1h price",
              "1h open interest"
            ],
            "rows": [
              [
                "BTC",
                "-0.02%",
                "+0.06%",
                "-0.14%",
                "-0.11%"
              ],
              [
                "ETH",
                "+0.06%",
                "+0.02%",
                "-0.01%",
                "-0.33%"
              ],
              [
                "SOL",
                "-0.04%",
                "-0.03%",
                "-0.15%",
                "-0.35%"
              ],
              [
                "BNB",
                "-0.02%",
                "-0.04%",
                "+0.05%",
                "-0.60%"
              ],
              [
                "XRP",
                "+0.06%",
                "+0.09%",
                "-0.14%",
                "-0.06%"
              ],
              [
                "DOGE",
                "+0.08%",
                "-0.05%",
                "+0.01%",
                "-0.13%"
              ],
              [
                "ADA",
                "+0.05%",
                "+0.09%",
                "-0.05%",
                "+0.61%"
              ],
              [
                "LINK",
                "+0.05%",
                "+0.09%",
                "+0.16%",
                "+0.39%"
              ],
              [
                "AVAX",
                "-0.06%",
                "-0.07%",
                "+0.33%",
                "-0.09%"
              ],
              [
                "LTC",
                "+0.13%",
                "+0.09%",
                "+0.15%",
                "+0.33%"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Changes do not directly reveal every trader’s intention. Interpretive labels such as “new longs” or “short covering” are not facts about individual accounts."
          },
          {
            "type": "paragraph",
            "text": "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
          }
        ],
        "links": [
          {
            "label": "Public source",
            "url": "https://noguru.io/api/public/oi-flow"
          }
        ]
      },
      {
        "id": "perpetual-funding",
        "title": "Perpetual funding",
        "body": [
          "Payments between the sides of a perpetual contract. The public board selects rate extremes, not all markets.",
          "The original board labels its latest column as an 8-hour rate. Settlement intervals can vary by contract; verify the venue’s specification. NoGuru’s public spot product does not use these perpetual contracts.",
          "Captured 31 October 2026 · Source timestamp: 2026-10-31 08:00:00+00:00. Public source"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Payments between the sides of a perpetual contract. The public board selects rate extremes, not all markets."
          },
          {
            "type": "table",
            "headers": [
              "Coin",
              "Reported latest rate",
              "Reported 24h sum"
            ],
            "rows": [
              [
                "BOT",
                "+0.0836%",
                "-0.5096%"
              ],
              [
                "KOMA",
                "+0.0726%",
                "+0.1638%"
              ],
              [
                "TRADOOR",
                "+0.0663%",
                "+0.2044%"
              ],
              [
                "ESPORTS",
                "+0.0614%",
                "+0.4234%"
              ],
              [
                "PIPPIN",
                "+0.0562%",
                "+0.2048%"
              ],
              [
                "FIGHT",
                "+0.0560%",
                "+0.1202%"
              ],
              [
                "CYS",
                "+0.0557%",
                "+0.2214%"
              ],
              [
                "BROCCOLIF3B",
                "+0.0526%",
                "+0.2667%"
              ],
              [
                "TAKE",
                "+0.0524%",
                "+0.1960%"
              ],
              [
                "POWER",
                "+0.0474%",
                "+0.1312%"
              ],
              [
                "M",
                "+0.0458%",
                "+0.0772%"
              ],
              [
                "XNY",
                "+0.0448%",
                "+0.2246%"
              ],
              [
                "T",
                "-0.0457%",
                "-0.2085%"
              ],
              [
                "CELO",
                "-0.0576%",
                "-0.1381%"
              ],
              [
                "Q",
                "-0.0586%",
                "-2.1086%"
              ],
              [
                "SAND",
                "-0.0660%",
                "-0.1417%"
              ],
              [
                "HOT",
                "-0.0747%",
                "-1.3905%"
              ],
              [
                "NIL",
                "-0.0963%",
                "-1.5471%"
              ],
              [
                "RSR",
                "-0.1703%",
                "-0.2941%"
              ],
              [
                "BLUR",
                "-0.1735%",
                "-2.6933%"
              ],
              [
                "CVC",
                "-0.1760%",
                "-0.4632%"
              ],
              [
                "GTC",
                "-0.4676%",
                "-1.3973%"
              ],
              [
                "WET",
                "-0.5333%",
                "-1.7648%"
              ],
              [
                "LSK",
                "-0.9263%",
                "-3.5647%"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "The original board labels its latest column as an 8-hour rate. Settlement intervals can vary by contract; verify the venue’s specification. NoGuru’s public spot product does not use these perpetual contracts."
          },
          {
            "type": "paragraph",
            "text": "Captured 31 October 2026 · Source timestamp: 2026-10-31 08:00:00+00:00. Public source"
          }
        ],
        "links": [
          {
            "label": "Public source",
            "url": "https://noguru.io/api/public/funding-board"
          }
        ]
      },
      {
        "id": "long-and-short-account-shares",
        "title": "Long and short account shares",
        "body": [
          "The original dashboard attributes this measure to Binance futures account data.",
          "Account counts do not equal notional position sizes. A larger share of long accounts cannot tell you by itself whether the market will rise or fall.",
          "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The original dashboard attributes this measure to Binance futures account data."
          },
          {
            "type": "table",
            "headers": [
              "Coin",
              "Long accounts",
              "Short accounts",
              "Ratio"
            ],
            "rows": [
              [
                "BTC",
                "72.5%",
                "27.5%",
                "2.64"
              ],
              [
                "ETH",
                "74.4%",
                "25.6%",
                "2.90"
              ],
              [
                "SOL",
                "75.5%",
                "24.5%",
                "3.08"
              ],
              [
                "BNB",
                "73.3%",
                "26.7%",
                "2.74"
              ],
              [
                "XRP",
                "73.1%",
                "26.9%",
                "2.72"
              ],
              [
                "DOGE",
                "70.2%",
                "29.8%",
                "2.35"
              ],
              [
                "ADA",
                "65.1%",
                "34.8%",
                "1.87"
              ],
              [
                "LINK",
                "64.3%",
                "35.7%",
                "1.80"
              ],
              [
                "AVAX",
                "60.7%",
                "39.4%",
                "1.54"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Account counts do not equal notional position sizes. A larger share of long accounts cannot tell you by itself whether the market will rise or fall."
          },
          {
            "type": "paragraph",
            "text": "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
          }
        ],
        "links": [
          {
            "label": "Public source",
            "url": "https://noguru.io/api/public/long-short"
          }
        ]
      },
      {
        "id": "sharp-fall-observations",
        "title": "Sharp-fall observations",
        "body": [
          "The public dashboard classifies sharp moves and tracks recovery reference levels.",
          "A “stabilizing” or “confirmed” model state does not establish a market bottom. The original feed’s “low is in” probabilities are not reproduced as forward-looking odds: their underlying sample and validation were not inspected for this rebuild. NoGuru does not identify guaranteed bottoms.",
          "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The public dashboard classifies sharp moves and tracks recovery reference levels."
          },
          {
            "type": "table",
            "headers": [
              "Coin",
              "Source state",
              "Recorded low",
              "Latest source price",
              "Halfway back to prior high"
            ],
            "rows": [
              [
                "BTC",
                "stabilizing",
                "76,325.98",
                "77,490.85",
                "78,597"
              ],
              [
                "ETH",
                "stabilizing",
                "2,174.08",
                "2,249.34",
                "2,266.88"
              ],
              [
                "SOL",
                "stabilizing",
                "92.34",
                "95.85",
                "97.4"
              ],
              [
                "BNB",
                "stabilizing",
                "680",
                "705.47",
                "716.505"
              ],
              [
                "DOGE",
                "stabilizing",
                "0.0722",
                "0.07537",
                "0.07589"
              ],
              [
                "ADA",
                "stabilizing",
                "0.182",
                "0.1928",
                "0.1942"
              ],
              [
                "AVAX",
                "stabilizing",
                "8",
                "8.502",
                "8.5075"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "A “stabilizing” or “confirmed” model state does not establish a market bottom. The original feed’s “low is in” probabilities are not reproduced as forward-looking odds: their underlying sample and validation were not inspected for this rebuild. NoGuru does not identify guaranteed bottoms."
          },
          {
            "type": "paragraph",
            "text": "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
          }
        ],
        "links": [
          {
            "label": "Public source",
            "url": "https://noguru.io/api/public/flush-state"
          }
        ]
      },
      {
        "id": "earlier-sharp-fall-episodes",
        "title": "Earlier sharp-fall episodes",
        "body": [
          "Dated observations from the same public feed.",
          "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Dated observations from the same public feed."
          },
          {
            "type": "table",
            "headers": [
              "Coin",
              "Triggered, UTC",
              "Drop",
              "Recorded low",
              "Status at source snapshot"
            ],
            "rows": [
              [
                "BTC",
                "2026-10-29 20:30",
                "5.62%",
                "76,325.98",
                "Still below prior high"
              ],
              [
                "XRP",
                "2026-10-29 20:00",
                "7.2%",
                "1.2002",
                "Still below prior high"
              ],
              [
                "DOGE",
                "2026-10-29 20:00",
                "9.27%",
                "0.0722",
                "Still below prior high"
              ],
              [
                "BNB",
                "2026-10-29 10:15",
                "9.7%",
                "680",
                "Still below prior high"
              ],
              [
                "ETH",
                "2026-10-29 01:45",
                "7.87%",
                "2,174.08",
                "Still below prior high"
              ],
              [
                "SOL",
                "2026-10-29 01:45",
                "9.88%",
                "92.34",
                "Still below prior high"
              ],
              [
                "LINK",
                "2026-10-29 01:45",
                "13.22%",
                "10.273",
                "Still below prior high"
              ],
              [
                "AVAX",
                "2026-10-29 01:45",
                "11.26%",
                "8",
                "Still below prior high"
              ],
              [
                "ADA",
                "2026-10-28 12:30",
                "12.42%",
                "0.182",
                "Still below prior high"
              ],
              [
                "ETH",
                "2026-10-25 23:30",
                "2.36%",
                "2,293.09",
                "Prior high reclaimed"
              ],
              [
                "BTC",
                "2026-10-24 14:15",
                "1.94%",
                "79,220.74",
                "Prior high reclaimed"
              ],
              [
                "SOL",
                "2026-10-23 22:45",
                "5.17%",
                "98.62",
                "Still below prior high"
              ],
              [
                "XRP",
                "2026-10-23 22:45",
                "4.11%",
                "1.2546",
                "Prior high reclaimed"
              ],
              [
                "DOGE",
                "2026-10-23 22:45",
                "5.79%",
                "0.07478",
                "Prior high reclaimed"
              ],
              [
                "LINK",
                "2026-10-23 22:45",
                "6.25%",
                "11.2",
                "Prior high reclaimed"
              ],
              [
                "AVAX",
                "2026-10-23 22:45",
                "5.07%",
                "8.675",
                "Still below prior high"
              ],
              [
                "ETH",
                "2026-10-22 16:45",
                "5.42%",
                "2,282.46",
                "Still below prior high"
              ],
              [
                "BNB",
                "2026-10-22 16:45",
                "2.21%",
                "718",
                "Prior high reclaimed"
              ],
              [
                "ADA",
                "2026-10-22 16:45",
                "7.05%",
                "0.2005",
                "Still below prior high"
              ],
              [
                "BTC",
                "2026-10-22 02:15",
                "4.54%",
                "80,513",
                "Still below prior high"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
          }
        ],
        "links": [
          {
            "label": "Public source",
            "url": "https://noguru.io/api/public/flush-state"
          }
        ]
      },
      {
        "id": "liquidation-history-unavailable",
        "title": "Liquidation history unavailable",
        "body": [
          "The source returned no rows and marked its liquidation history stale.",
          "No liquidation totals are shown. Empty data does not mean zero liquidations.",
          "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The source returned no rows and marked its liquidation history stale."
          },
          {
            "type": "paragraph",
            "text": "No liquidation totals are shown. Empty data does not mean zero liquidations."
          },
          {
            "type": "paragraph",
            "text": "Captured 31 October 2026 · No snapshot timestamp supplied by this endpoint. Public source"
          }
        ],
        "links": [
          {
            "label": "Check the original dashboard →",
            "url": "?page=market"
          },
          {
            "label": "Public source",
            "url": "https://noguru.io/api/public/liquidations"
          }
        ]
      },
      {
        "id": "dates-and-trading-hours",
        "title": "Dates and trading hours",
        "body": [
          "Schedules should be read at the official source when making an operational decision."
        ],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Schedules should be read at the official source when making an operational decision."
          }
        ],
        "links": []
      }
    ],
    "source": {
      "label": "Prior shareable review snapshot (base 5235ebf)",
      "url": "https://vimo33.github.io/noguru-review/market.html",
      "capturedAt": "2026-11-12T14:52:03.054671+00:00",
      "scope": "Historical review content. Current terms, identity and evidence scope are given by the current internal pages; old figures are not today’s results."
    }
  }
};
