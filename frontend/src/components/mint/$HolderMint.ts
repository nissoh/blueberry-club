import { Behavior, replayLatest, combineArray, combineObject } from "@aelea/core"
import { component, style, $text } from "@aelea/dom"
import { $column, layoutSheet, $row, state } from "@aelea/ui-components"
import { formatFixed } from "@ethersproject/bignumber"
import { ContractTransaction } from "@ethersproject/contracts"
import { IToken, LabItemSale, MintRule } from "@gambitdao/gbc-middleware"
import { $alert } from "@gambitdao/ui-components"
import { IWalletLink } from "@gambitdao/wallet-link"
import { awaitPromises, switchLatest, empty, multicast, startWith, snapshot, map } from "@most/core"
import { $SelectBerries } from "../$SelectBerries"
import { connectGbc } from "../../logic/contract/gbc"
import { connectLab } from "../../logic/contract/lab"
import { connectManager } from "../../logic/contract/manager"
import { connectHolderSale } from "../../logic/contract/sale"
import { WALLET } from "../../logic/provider"
import { queryOwnerV2 } from "../../logic/query"
import { $ButtonPrimary } from "../form/$Button"
import { $displayMintEvents } from "./mintUtils2"
import { $IntermediateConnectButton } from "../../components/$ConnectAccount"
import { IEthereumProvider } from "eip1193-provider"

interface MintCmp {
  item: LabItemSale
  mintRule: MintRule
  walletLink: IWalletLink
  walletStore: state.BrowserStore<WALLET, "walletStore">
}

export const $GbcWhitelist = (config: MintCmp) => component((
  [clickMintWhitelist, clickMintWhitelistTether]: Behavior<PointerEvent, Promise<ContractTransaction>>,
  [selectTokensForWhitelist, selectTokensForWhitelistTether]: Behavior<IToken[], IToken[]>,
  [walletChange, walletChangeTether]: Behavior<IEthereumProvider | null, IEthereumProvider | null>,

) => {

  const saleWallet = connectHolderSale(config.walletLink, config.item.contractAddress)
  const gbcWallet = connectGbc(config.walletLink)
  const managerWallet = connectManager(config.walletLink)
  const labWallet = connectLab(config.walletLink)

  const owner = multicast(awaitPromises(map(async n => {
    if (n === null) {
      return null
    }
    return queryOwnerV2(n)
  }, config.walletLink.account)))


  return [
    switchLatest(map(tokenList => {
      const $noBerriesOwnedMsg = $alert($text(`Connected account does not own any GBC's`))
      const chosenTokens = replayLatest(multicast(startWith([], selectTokensForWhitelist)))

      const ownerTokenList = awaitPromises(combineArray(async (owner, sale) => {
        if (owner === null) {
          return []
        }
        const items = (await Promise.all(
          owner?.ownedTokens.map(async token => {
            const isUsed = await sale.isNftUsed(token.id)
            return { token, isUsed }
          })
        )).filter(x => x.isUsed === false).map(x => x.token)

        return items
      }, owner, saleWallet.contract))


      return $column(layoutSheet.spacing)(
        $row(layoutSheet.spacing, style({ alignItems: 'flex-start' }))(

          switchLatest(map(list => {

            return $SelectBerries({
              placeholder: 'Select Berries',
              options: list
            })({
              select: selectTokensForWhitelistTether()
            })
          }, ownerTokenList)),


          $IntermediateConnectButton({
            walletStore: config.walletStore,
            $container: $column(layoutSheet.spacingBig),
            $display: map(() => {

              return $ButtonPrimary({
                disabled: map(s => s.length === 0, chosenTokens),
                buttonOp: style({ alignSelf: 'flex-end' }),
                $content: switchLatest(
                  map(({ chosenTokens }) => {
                    if (chosenTokens.length === 0) {
                      return $text('Select amount')
                    }


                    const cost = BigInt(chosenTokens.length) * config.mintRule.cost
                    const costUsd = formatFixed(cost, 18)


                    return $text(`Mint (${cost > 0n ? costUsd + 'ETH' : 'Free'})`)

                  }, combineObject({ chosenTokens }))
                ),
              })({
                click: clickMintWhitelistTether(
                  snapshot(async ({ selectTokensForWhitelist, saleContract, account }) => {

                    if ((saleContract === null || !account)) {
                      throw new Error(`Unable to resolve contract`)
                    }

                    const idList = selectTokensForWhitelist.map(x => x.id)

                    const cost = BigInt(selectTokensForWhitelist.length) * config.mintRule.cost
                    const contractAction = saleContract.nftMint(idList, { value: cost })

                    return contractAction
                  }, combineObject({ selectTokensForWhitelist: chosenTokens, saleContract: saleWallet.contract, account: config.walletLink.account })),
                )
              })
            }),
            ensureNetwork: true,
            walletLink: config.walletLink
          })({
            walletChange: walletChangeTether(),
          })

        ),
        tokenList.length === 0 ? $noBerriesOwnedMsg : empty(),

        $displayMintEvents(labWallet.contract, clickMintWhitelist)
      )

    }, gbcWallet.tokenList)),


    { walletChange }
  ]
})