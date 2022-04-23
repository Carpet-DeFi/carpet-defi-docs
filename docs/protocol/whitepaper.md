# Whitepaper

Carpet DeFi is a new type of protocol based loosely on the workings of WAND Investments. It has its own code and its own tokenomics, based around a single token, $CARPET.

Carpet DeFi is designed in such a way that buying and selling the $CARPET are the only moments where your investment lowers a little in value. All the time in between, where you’re holding on to your $CARPET, works to increase the $CARPET price.

Holding on to your $CARPET for long enough will therefore guarantee profit. Yet how does this work? That must be magic, right? Well, that’s why we’re a magical Carpet Store, selling magical $CARPET.

We’d also like to emphasise that we’re a Carpet Store, not a rug store. Rugs stay on the ground, really tying rooms together. Carpets fly high towards the moon.

## TL;DR

If you buy or sell $CARPET, you pay a trade tax. The longer you hold $CARPET the more value you’ll have.

## The Carpet Store

The Carpet Store is a very interesting place. It has a Counter, a Backing Treasury, a Risk Treasury, and, of course, $CARPET.

### Counter

The Counter is the only place where you can buy or sell $CARPET.

Our Carpet store knows it has this monopoly, and therefore you overpay when you buy $CARPET and you get underpaid when you sell $CARPET.

In normal DeFi terms we call this buy tax and sell tax, and it is essential for the workings of the Carpet DeFi protocol. The Carpet DeFi buy and sell taxes start reasonably high and will likely decline as the protocol ages.

### Backing Treasury

The Backing Treasury (BT) is a smart contract filled with stablecoins, and the combined value of the stablecoins in the wallet is the measurement of the value of $CARPET through this simple formula: `BT value / supply of $CARPET = price of $CARPET`.

**Essentially, the value in the backing treasury always equals the current market cap of $CARPET.** The
backing treasury invests a large percentage of its stablecoins in low risk yield strategies, such as
lending on Aave or on the Anchor protocol. A portion of the Backing Treasury is kept liquid at all times to more easily pay people who want to sell their $CARPET.

In case of very large sells, the Backing Treasury will automagically draw from its invested funds to pay, which increases the gas price for the transaction, but otherwise makes no difference for the seller.

### Risk Treasury

**The Risk Treasury (RT) is another treasury wallet in the Carpet Store.** It gets partly supplied by the buy and sell tax, just like the BT.

However, it has not a direct relation to $CARPET price, but rather an indirect one. The influx of funds coming into the RT is used by the Carpet DeFi team for investments that require a higher risk tolerance but also carry a higher reward potential.

A part of the RT is also used for protocol expenses, for possible giveaways or prizes, and for payment of the core team. The RT indirectly influences the price of $CARPET because earnings from its investments are funnelled towards the Backing Treasury, increasing the price of $CARPET.

## The workings of only up

:::info

Technically, we call this the Positive Value Invariant.

:::

How come the $CARPET price will only ever go up? This question can be answered
quite simply using our formula: `BT value / supply of $CARPET = price of $CARPET`

### Buy $CARPET, number go up

When you buy $CARPET, you pay a buy tax. More value in stablecoins enters the Backing Treasury
than value in $CARPET gets minted by the Counter to send to your wallet. The result is a larger value
increase in the BT than in $CARPET supply, resulting in an increased $CARPET price.

:::info Example
Assume a total $CARPET supply of 1000 CARPET, and $1000 in the Backing Treasury, so the $CARPET price is 1000 / 1000 = 1$. Also assume a fee of 20%, 15% going to the Backing Treasury and the other 5% going to buying truckloads of vacuum cleaners.

Someone buys 100 $CARPET and pays 20% tax, of which 15% goes to the BT.

The new $CARPET price is `1000 + 95 / 1000 + 80 = 1.014`. $CARPET price has increased 1.4%, wow!
:::

### Sell $CARPET, number go up

When you sell $CARPET, you pay a sell tax. More value in $CARPET gets burned by the Counter than you get stablecoin value in return. The result is a larger value decrease in $CARPET supply than in the BT, resulting in an increased $CARPET price.

:::info Example

Assume a total $CARPET supply of 1000 CARPET, and $1000 in the Backing Treasury, so the $CARPET price is 1000 / 1000 = 1$. Also assume a fee of 20%, 15% going to the Backing Treasury and the other 5% going to funding our secret world domination plans.

Someone sells 100 $CARPET and 20% is discounted from the amount they receive, which will be 80 dollars. New $CARPET price = `1000 - 80 / 1000 - 100 = 1.022`. $CARPET price has increased 2.2%, yay!

:::

### Low risk BT investments

While the BT is holding on to investor stablecoins, it invests them in low risk protocols like Aave and
Anchor. Even if nobody sells or buys $CARPET, the value in the BT will still increase through these
investments, increasing the price of $CARPET.

### High risk RT investments

The portion of the buy tax and the sell tax that is not sent to the BT, gets sent to the RT. A portion of the value in the RT gets invested by the Carpet DeFi team and if those investments result in returns, a large portion of those returns are funneled back into the BT, increasing $CARPET value. Even if all RT investments go awry and all value in the RT is lost somehow, it will not negatively affect $CARPET price, because the RT was working with non-critical money (although losing money still sucks!)

### Whale dump immunity

Bogdanoff ain’t got nothing on us. We welcome any sell with open arms.

# Carpet Finance as a story

Some people are better at stories than at numbers. And since we’re a magical Carpet Store, we have
no trouble romanticising our tokenomics a little bit.

## Up in the clouds

Imagine that you’re climbing up in the clouds. Maybe a scene like in the Avatar movie, and please imagine to have no fear of heights. Imagine that the height of your climbing symbolises your investment portfolio. Good trades make you climb higher and bad trades make you fall a little. But you’re weary of all these difficult trades, and you’d like a simpler solution. Luckily you all carry a little lamp with a genie that is a salesperson of our magical Carpet Store. And with that genie you can order a magical $CARPET that makes the climb a lot easier.

## Jumps fuel the flying magic

When the genie summons the $CARPET, he summons it a little bit under you, so that you can jump on. And when you decide to get off the $CARPET, you’re also required to jump down. So both jumping on and off the $CARPET will make your portfolio drop a little. However, it is exactly these jumps that fuel a large part of the magic of the $CARPET, and while you’re sitting on your $CARPET, the jumping on and off of other people makes you go up all the time.

## Underlying flying magic

While the jumps of people do a lot to fuel the magic of $CARPET, there is the underlying magic of the BT and the RT investments that always make the $CARPET go up, even if nobody jumps. So comfy,
you might never want to get off again.

The End. Yay, what a wonderful story!

## Risks

No DeFi protocol is without risks, and we’d like to be clear about them.

### Exploits and hacks

All cryptocurrency is code, and code can have mistakes in it. Blockchain developers are like smart contract "lawyers", except the contracts are written in a different and highly specific language. Translating human language to Solidity can generate typos and translation errors, allowing hackers to find loopholes and exploit them. To minimize this risk, we will use static analysis tools and will get our contracts audited by experts in the field.

### Corruption

We have a partially doxxed team working for Carpet DeFi and the doxxed members of that team are on the multisig for non-automated treasury wallets. We trust each other and ourselves.

We are known in the DeFi space and our honour and reputation is more valuable to us than any money we could rug. Also, we are not a rug store, but a Carpet Store. That leaves threats or aggressive crime, but we are still on multisig wallets and not all members on the multisig wallets are doxxed, so even such crime would be as useless as it would be horrible. Once the protocol is stable, we plan to build a governance DAO in the future to decentralize the project.

### Depegging of stablecoins

Carpet DeFi trusts in the value of certain stablecoins. We spread risk by using multiple stablecoins instead of just one, but the depegging of even one can do a lot to our treasury. We carefully choose these stablecoins, though, and even though depegging happens, it is often only a momentary issue that quickly gets resolved. Also please note that the BT does not loop its investments and does not borrow against assets, so a momentary drop in a stablecoin will not liquidate any of the BT investments.

### Wallet Hack or Scam

This is your personal safety as an investor. We view it as our communal responsibility to
continuously educate investors on wallet safety and to fight an ongoing fight against scammers and
hackers. Still many people get scammed or hacked and this is regrettable. Always get your
information from reputable sources, make sure to double check domain names, be careful of which
protocols you allow access to your coins, revoke contracts you’re no longer using, and never ever
give anyone your seed phrase.

## Not a rug, and not a Ponzi either

So you understand, now, that we’re a Carpet Store, and not a rug store, but you might be wondering: is this a Ponzi scheme? Or maybe if not a Ponzi scheme, at least a Pyramid scheme? We’re not, and we’ll explain why.

### Ponzis are obfuscated

The only difference between Ponzi schemes and Pyramid schemes is that Ponzi schemes have hidden workings that its participants do not know about, so let’s tackle that first. Carpet DeFi is entirely open in everything. Not only is this whitepaper as brutally honest as we can make it, but everything Carpet DeFi does is visible on the blockchain.

### Ponzi schemes use latecomers as exit liquidity

It is well known in Crypto land that everyone is looking to be an early investor. Early investors can see a token go 100x or more and then those early whales can dump their moonbags on the poor latecomers. This happened even with OG Bitcoin, where I remember a friend of mine was happy he could buy a nice burger because he had mined a Bitcoin on his home PC and sold it for €2,50. People with less appetite would have been way richer than he eventually got. All the big successful altcoins later did the same. But Carpet DeFi works differently.

Of course, early investors still profit, because the longer you hold your $CARPET or rCARPET, the more you’ll be in profit. But if you’re late, you’re still good. Because for those early whales to take profit, they need to sell their $CARPET, and we know what sales do to $CARPET: it increases its value. Latecomers will never have to be scared of getting dumped on by early whales, they may instead hope for such big sells. Carpet DeFi is so much not a Ponzi scheme that it could even be considered anti-Ponzi.

### Only apes lose

The only way to lose on your investment in Carpet DeFi is when you overinvest and then sell too early. Anyone who can patiently HODL will be in profit with our magical $CARPET.

## Initial settings

The Carpet Defi team plans to launch with heavier taxes and over time reduce these. The necessity of this lies in setting the protocol up. We believe that early investors will still be greatly in profit because they’ll be able to hold for the longest time, possibly even selling only after the sell taxes are lowered.

### Basic information

- Site: https://carpetde.fi

- First chain to launch on: [Avalanche C-Chain](https://avax.network)

- $CARPET contract: Not deployed yet

- BT address: Not deployed yet

- RT address: Not deployed yet

- Initial exchange tax: 30%
- Initial transfer tax: 30%

- Percentage sent to BT & RT: 60% of fees to Backing (or burnt), 40% to Risk

- BT will initially accept the following stablecoins: MIM, USDC

- BT will initially invest in the following low risk
  protocols: BankerJoe

- Amount BT will initially keep liquid: 10%

These initial settings will be adjusted over time, but the community will always be informed. None of this information is fixed until launch.
