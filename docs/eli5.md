# ELI5: What is Carpet?

This is a simple explanation of how Carpet works, good for both people who are new to the DeFi space and people who know a lot about the DeFi space.

## Assumptions

We assume that:

- You know what a protocol, a token, a wallet, an exchange and a smart contract is. Basic DeFi stuff.

## Words you should know

- Backing Treasury: a smart contract that guarantees the value of CARPET, it holds "stablecoins" which are dollar equivalents on the blockchain.
- CARPET: Our token that always goes up.

# Let's get on to it!

There are tons of exchanges all around, like Uniswap, PancakeSwap, etc. Those decentralized exchanges (DEXes) use pricing algorithms to calculate the price, some using very simple ones and others with complex ones.

Now, of course, the pricing algorithm has to make sense so you can't just set "price is 1000", because with a price different to the rest of the market, people can just buy on your exchange and sell on another, or the other way around, meaning that you (or whoever's providing the liquidity) loses money.

Here at Carpet DeFi, we have our own exchange called the Counter, and the only way more CARPET tokens are created is through the counter. Our pricing algorithm is this simple division: `backing treasury value / CARPET total supply`.

:::info

The "total supply" is exactly what it looks like. It's the total amount of CARPET in existence.

"Backing treasury value" is basically the value of the backing treasury's assets, like how much money it has.

:::

## Why go up?

### Exchange Tax

Now, when you buy $CARPET, you pay an exchange tax.

More value in USD enters the Backing Treasury
than value in $CARPET gets created by the Counter to send to your wallet.

The result is a larger value increase in the Backing Treasury than in $CARPET supply, meaning an increased $CARPET price.

For example, assume a total $CARPET supply of 1000 CARPET, and $1000 in the Backing Treasury, so the $CARPET price is 1000 / 1000 = 1$. Also assume a fee of 20%, 15% going to the Backing Treasury and the other 5% going to establishing a penguin empire.

Someone buys 100 $CARPET and pays 20% tax, and 15 dollars goes to the Backing Treasury. This person only receives 80 CARPET because of the fee.

The new $CARPET price is `1000 + 95 / 1000 + 80 = 1.014`. $CARPET price goes up 1.4%, wow!

That's the same with sells (just, instead of minting 80% of it, burn 100% of it). Simply use a subtraction instead of an addition.

### Transaction Tax

Whenever you send CARPET to another wallet, you need to pay a fee on that. At the start it's 30% but it'll get lowered.

For example, let's say the transaction tax is `20%` and `15%` gets "burned" to reduce the total supply, and assume a total $CARPET supply of `1000 CARPET`, and `$1000` in the Backing Treasury, so the $CARPET price is `1$`.

You decide to give 100 CARPET to your friend, what a nice person you are!

The protocol takes 20 CARPET, burning 15 and doing other stuff with the 5 CARPET. Your friend gets 80 CARPET.

The price of CARPET now goes up. If you apply the formula: `1000 / 1000 - 20 = 1.0204`, as you can see, **the total backing value did not change but the supply decreased. Price goes up.**

## Any questions?

Come join our awesome community where you can ask away at everything!

- [Read the FAQ](../community/faq)
- [Join the Discord server](https://discord.gg/TrFAXpBsWU)
