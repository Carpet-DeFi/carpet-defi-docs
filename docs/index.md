---
slug: /
sidebar_position: 0
---

# Introduction to Carpet DeFi

Carpet DeFi is a value protocol, loosely based on [WAND Investments' number-go-up technology](https://medium.com/coinmonks/wand-investments-whitepaper-reconciling-safety-sustainability-and-rewards-in-defi-ba20d96213). **Your CARPETs will always rise in value** _(unless something ridiculous happens)_

:::info

This is called the Positive Value Invariant! Your CARPET holdings will always grow in value over time, the price at one moment is always greater or equal to any price in any other previous point in time.

:::

## What? How?

> The following assumes you have basic knowledge of how AMMs (automated market makers) work, and what buy/sell taxes are.

Good question. But first, you have to forget all that you know about decentralized exchanges.

The protocol token CARPET is backed by a basket of stablecoins. Currently we plan to launch with MIM & USDC, but in the future, more stablecoins will be added.

You can only trade CARPET with the Counter (our protocol-owned exchange), rather than an external AMM, we call this **Protocol Owned Liquidity 2.0**. The protocol charges exchange fees, which make the price go up.

Price is determined by a simple formula, the `total backing value / total CARPET supply`.

:::info Some minor nitpicking

_Technically_, the exchange price is not truly the real-time backing formula. The exchange takes a "snapshot" of the result on the first trade of an exchange "epoch" (1 minute minimum), meaning you could get a pretty good deal if you buy after a whale, but be quick!

_(This technically doesn't violate the Positive Value Invariant)_

:::

### Buying makes price go up

Let's assume here that the total backing is 1000$, the total supply is 1000 CARPET (meaning price is 1:1, or 1$), the buy/sell tax is 30%, and that the whole fee is sent to the Backing Treasury.

:::info

Actually, only about 60% of the fee is sent to the backing treasury. The other 40% is sent to the risk treasury.

:::

When you purchase CARPET, you pay, for example, 100$. The protocol only gives you 70% of that due to the fee, so you get 70 CARPET.

Now, let's see the price formula: `1000 + 100 / 1000 + 70`

The CARPET supply only went up by 70, but the backing value went up by 100! This causes price per CARPET to go up to `1.02`, yay!

### Selling makes price go up

Let's assume here now that the total backing is 30,000$, the total supply is 10,000 CARPET (meaning price is 3$), the buy/sell tax is 30%, and that the whole fee is sent to the Backing Treasury.

Now this time, you're cashing out your gains, selling your 70 carpets back to the Counter. The Counter only gives you back 70% of what your carpet is worth, so you get 147$.

Now, let's see the price formula: `30,000 - 147 / 10,000 - 70`. Doing the math, the new price equates to about `3.00634`. Number go up indeed!

## More information

Some good pages to start off with would be:

- [Whitepaper](/whitepaper)
- [Treasuries](/treasuries)
- [Protocol Fees](/fees)
- [Potential Risks](/risks)
- [Official Links](/community)

# The docs are WIP. Things may change at a moment's notice.
