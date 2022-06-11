# Whitepaper

Carpet DeFi is a new type of protocol based loosely on the workings of WAND Investments and Moon Vault. It has its own code and its own tokenomics, based around a single token, $CARPET.

Carpet DeFi is designed in such a way that buying and selling the $CARPET are the only moments where your investment lowers a little in value. All the time in between, where you’re holding on to your $CARPET, works to increase the $CARPET price.

Holding on to your $CARPET for long enough will therefore guarantee profit. Yet how does this work? That must be magic, right? Well, that’s why we’re a magical Carpet Store, selling magical $CARPET.

We’d also like to emphasise that we’re a Carpet Store, not a rug store. Rugs stay on the ground, really tying rooms together. Carpets fly high towards the moon.

## TL;DR

If you buy or sell $CARPET, you pay a trade tax. The longer you hold $CARPET the more value you’ll have.

## Protocol Design

The Carpet Store is a very interesting place. It has a Counter, a Backing Treasury, a Risk Treasury, and, of course, $CARPET.

### CARPET

The $CARPET token is at the center of the Carpet DeFi ecosystem. It is the token traded inside the Counter. Rather than being a stablecoin, $CARPET is an upcoin. $CARPET is collateralized by the stablecoins inside the Backing Treasury.

### Counter

The Counter is the only place where you can buy or sell $CARPET.

Our Carpet store knows it has this monopoly, and therefore you overpay when you buy $CARPET and you get underpaid when you sell $CARPET.

In normal DeFi terms we call this buy tax and sell tax, and it is essential for the workings of the Carpet DeFi protocol. The Carpet DeFi buy and sell taxes start reasonably high and will decline based on trading volume.

### Backing Treasury

The Backing Treasury (BT) is a smart contract filled with stablecoins, and the combined value of the stablecoins in the wallet is the measurement of the value of $CARPET through this simple formula: `BT value / supply of $CARPET = price of $CARPET`.

**Essentially, the value in the backing treasury always equals the current market cap of $CARPET.** The backing treasury invests a large percentage of its stablecoins in low risk yield strategies. A portion of the Backing Treasury is kept liquid at all times to more easily pay people who want to sell their $CARPET.

In case of very large sells, the Backing Treasury will draw from its invested funds to pay, which increases the gas price for the transaction but otherwise makes no difference for the seller.

### Risk Treasury

**The Risk Treasury (RT) is an arbitrary wallet.** It gets partly supplied by the buy and sell tax, just like the BT.

However, it has not a direct relation to $CARPET price, but rather an indirect one. The influx of funds coming into the RT is used by the Carpet DeFi team for investments that require a higher risk tolerance but also carry a higher reward potential.

A part of the RT is also used for protocol expenses, for possible giveaways or prizes, and for payment of the core team. The RT indirectly influences the price of $CARPET because earnings from its investments are funnelled towards the Backing Treasury, increasing the price of $CARPET.

## The workings of only up

How come the $CARPET price will only ever go up? This question can be answered
quite simply using the price formula: `BT value / supply of $CARPET = price of $CARPET`

### Buy $CARPET, number go up

When you buy $CARPET, you pay a buy tax. More value in stablecoins enters the Backing Treasury than value in $CARPET gets minted by the Counter to send to your wallet. The result is a larger value increase in the BT than in $CARPET supply, resulting in an increased $CARPET price.

:::info Example
Assume a total $CARPET supply of 1000 CARPET, and $1000 in the Backing Treasury, so the $CARPET price is 1000 / 1000 = 1$. Also assume a fee of 20%, 15% going to the Backing Treasury and the other 5% going to buying truckloads of vacuum cleaners.

Someone buys 100 $CARPET and pays 20% tax, of which 15% goes to the BT.

The new $CARPET price is `1000 + 95 / 1000 + 80 = 1.014`. $CARPET price has increased 1.4%, wow!
:::

### Sell $CARPET, number go up

When you sell $CARPET, you pay a sell tax. More value in $CARPET gets burned by the Counter than you get stablecoin value in return. The result is a larger value decrease in $CARPET supply than in the BT, resulting in an increased $CARPET price.

:::info Example

Assume a total $CARPET supply of 1000 CARPET, and $1000 in the Backing Treasury, so the $CARPET price is 1000 / 1000 = 1$. Also assume a fee of 20%, 15% going to the Backing Treasury and the other 5% going to funding our secret world domination plans.

Someone sells 100 $CARPET and 20% is discounted from the amount they receive, which will be 80 dollars. New $CARPET price = `1000 - 80 / 1000 - 100 = 1.022`. $CARPET price has increased 2.2%.

:::

### Low risk BT investments

While the BT is holding on to investor stablecoins, it invests them in low risk protocols such as lending platforms. Even if nobody sells or buys $CARPET, the value in the BT will still increase through these
investments, increasing the price of $CARPET.

### High risk RT investments

The portion of the buy tax and the sell tax that is not sent to the BT, gets sent to the RT. A portion of the value in the RT gets invested by the Carpet DeFi team and if those investments result in returns, a large portion of those returns are funneled back into the BT, increasing $CARPET value.

Even if all RT investments go awry and all value in the RT is lost, it will not negatively affect $CARPET price.

### Whale dump immunity

Bogdanoff ain’t got nothing on us. We welcome any sell with open arms.

## Risks

No DeFi protocol is without risks, and we’d like to be clear about them.

### Exploits and hacks

All cryptocurrency is code, and code can have mistakes in it. Translating human language to Solidity can generate typos and translation errors, allowing hackers to exploit loopholes.

To minimize this risk, we will use static analysis tools and will get our contracts audited. This does not remove all smart contract risk.

### Centralization

In the initial stages, the protocol will be centralized. The administrative multisig will be able to perform extremely powerful and potentially harmful actions, however we plan on decentralizing the project heavily over time.

We have a partially doxxed team working for Carpet DeFi and the doxxed members of that team are on the multisig for non-automated treasury wallets.

We are known in the DeFi seigniorage space and our honour and reputation is more valuable to us than any money we could rug.

Administrative access is on multisig wallets and not all members on the multisig wallets are doxxed, so even physical threats or other crimes would be as useless as it would be horrible.

### Depegging of stablecoins

Carpet DeFi trusts in the value of certain stablecoins. We spread risk by using multiple stablecoins instead of just one, but the depegging of even one can do a lot to our treasury. We carefully choose these stablecoins, though, and even though depegging may happen, it is often only a momentary issue that quickly gets resolved.

Also please note that we do not have plans to ever loop the Backing Treasury's investments and to ever borrow against BT assets, so a momentary drop in a stablecoin will not liquidate any of the Backing Treasury's investments.

#### Deposit restrictions on depegging

In the future, we will support multiple stablecoins in our treasury, allowing users to deposit one token and withdraw another, taking a 9.75% fee if doing so (assuming flat fees of 5% on swap).

However, this opens up the possibility of stablecoin arbitrage. Assuming one stablecoin depegs drastically, an arbitrageur may purchase and deposit this stablecoin (which we will call X) and withdraw Y, making a profit while draining away Y from the Backing Treasury.

This increases the risk massively for the Backing Treasury, as if only one stablecoin depegs severely, all the other stablecoin pools in the BT are at risk of being drained.

Our goals in the event of a depegging are to:

- Minimize damage to investor holdings
- Stay liquid for withdrawals

We do this by restricting purchases with a particular stablecoin when the price of that stable is below 0.95 USDC. This is done on-trade, and the price is pulled directly from a DEX rather than a TWAP oracle as we do not believe there is any way for a malicious actor to profit by moving the price of X upwards to bypass this sanity check, depositing X (taking a fee), then withdrawing Y.

### Wallet Hack or Scam

This is your personal safety as an investor. We view it as our communal responsibility to continuously educate investors on wallet safety and to fight an ongoing fight against scammers and hackers. Still many people get scammed or hacked and this is regrettable. Always get your information from reputable sources, make sure to double check domain names, be careful of which protocols you allow access to your coins, revoke contracts you’re no longer using, and never ever give anyone your seed phrase.

## Not a rug, and not a Ponzi either

So you understand, now, that we’re a Carpet Store, and not a rug store, but you might be wondering: is this a Ponzi scheme? Or maybe if not a Ponzi scheme, at least a Pyramid scheme? We’re not, and we’ll explain why.

### Ponzis funnel money from newer investors to pay older ones

To some people, Carpet DeFi could be considered Ponzi-like due to the fact that every buy/sell takes fees, which are returned to older investors. However, at least in the team's view, Carpet DeFi is not a Ponzi scheme or "ponzinomics" due to the fact that there are external funding sources (RT investments & BT yields) which do not require new investors entering.

### Ponzis are unsustainable

You can't sustain a Ponzi scheme. Eventually it will have to collapse as the person running the scheme does not have enough money to pay off investors. Assuming all of the BT's stablecoins remain stable, Carpet DeFi can pay out even there are 0% fees and even if everyone cashes in at once triggering a bank run.

### Ponzis are obfuscated

Carpet DeFi is open. Not only is this whitepaper as brutally honest as we can make it, but everything Carpet DeFi does is visible on the blockchain.

### Ponzi schemes use latecomers as exit liquidity

It is well known in Crypto land that everyone is looking to be an early investor. Early investors can see a token go 100x or more and then those early whales can dump their moonbags on the poor latecomers. This happened even with OG Bitcoin, where I remember a friend of mine was happy he could buy a nice burger because he had mined a Bitcoin on his home PC and sold it for €2,50. People with less appetite would have been way richer than he eventually got. All the big successful altcoins later did the same. But Carpet DeFi works differently.

Of course, early investors still profit, because the longer you hold your $CARPET, the more you’ll be in profit. But if you’re late, you’re still good. Because for those early whales to take profit, they need to sell their $CARPET, and we know what sales do to $CARPET: it increases its value. Latecomers will never have to be scared of getting dumped on by early whales, they may instead hope for such big sells. Carpet DeFi is so much not a Ponzi scheme that it could even be considered anti-Ponzi.

### Only apes lose

The most likely way to lose on your investment are in Carpet DeFi is when you overinvest and then sell too early. Anyone who can patiently HODL will be in profit with our magical $CARPET as long as the protocol functions correctly and that all stablecoins are pegged.

## Initial settings

The Carpet DeFi team plans to launch with heavier taxes and over time reduce these. The necessity of this lies in setting the protocol up. We believe that early investors will still be greatly in profit because they’ll be able to hold for the longest time, possibly even selling only after the sell taxes are lowered.

### Basic information

- Site: https://carpetde.fi
- First chain to launch on: [Avalanche C-Chain](https://avax.network)
- $CARPET contract: Not deployed yet
- BT address: Not deployed yet
- Initial exchange tax: 30%
- Initial transfer tax: 30%
- Percentage sent to BT & RT: 60% of fees to Backing (or burnt), 40% to Risk
- BT will initially accept the following stablecoins: USDC
- BT will initially invest in the following low risk protocols: N/A
- Amount BT will initially keep liquid: 100%

These initial settings will be adjusted over time, but the community will always be informed. None of this information is fixed until launch.
