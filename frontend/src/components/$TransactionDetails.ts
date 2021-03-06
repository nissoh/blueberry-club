// import { attrBehavior } from "@aelea/dom"
// import { O } from '@aelea/core'
// import { $element, $text, component, style } from "@aelea/dom"
// import { $column, $NumberTicker, $row, layoutSheet } from "@aelea/ui-components"
// import { pallete } from "@aelea/ui-components-theme"
// import { TransactionReceipt, TransactionResponse } from "@ethersproject/providers"
// import { filter, take } from "@most/core"
// import { map, skipRepeats, startWith, switchLatest } from "@most/core"

// import { shortenTxAddress } from "@gambitdao/gmx-middleware"
// import { getTxExplorerUrl, IWalletLink } from "@gambitdao/wallet-link"
// import { Stream } from "@most/types"
// import { IEthereumProvider } from "eip1193-provider"





// const $status = $text(style({ color: pallete.foreground, fontStyle: 'italic', fontSize: '19px', padding: '3px 0' }))

// const $success = $column(
//   // $icon({ $content: $check, fill: pallete.positive, width: '55px', viewBox: '0 0 24 24', svgOps: style({ margin: '0 auto' }) }),
//   $status(`Success`)
// )

// const $pending = $column(
//   // $spinner(style({  width: '55px', height: '55px', }))(),
//   $status(`Pending`)
// )

// const $failed = $status(style({ color: pallete.negative }))()


// export const $Transaction = <T extends TransactionResponse>(
//   tx: Stream<Promise<T>>,
//   walletLink: IWalletLink<IEthereumProvider>
// ) => component(() => {

//   const txDetails = walletLink.provider.waitForTransaction(transactionHash)
//   const confirmations = map(details => details?.confirmations ?? 0, tx)

//   const $status = O(
//     map((details: TransactionReceipt) => details?.status),
//     skipRepeats,
//     filter(status => Number.isInteger(status)),
//     map(status => {
//       return status === 1 ? $success : $failed
//     }),
//     startWith($pending),
//     switchLatest
//   )(tx)

//   const txSucceeded = take(1, filter(tx => typeof tx?.status == 'number' && tx.status === 1, txDetails))


//   return [
//     $column(layoutSheet.spacingBig, style({ alignItems: 'center' }))(
//       $status,

//       $row(layoutSheet.spacingTiny)(
//         $text('Confirmations: '),
//         $NumberTicker({ incrementColor: pallete.positive, decrementColor: pallete.message, value$: confirmations })
//       ),

//       $row(layoutSheet.spacing)(
//         $text('Tx Hash: '),
//         $element('a')(style({ color: pallete.primary }), attrBehavior(map(chain => {
//           const href = chain ? getTxExplorerUrl(chain, transactionHash) : ''
//           return { href }
//         }, walletLink.network)))(
//           $text(shortenTxAddress(transactionHash))
//         )
//       )

//     ),
//     { txDetails, txSucceeded }
//   ]
// })