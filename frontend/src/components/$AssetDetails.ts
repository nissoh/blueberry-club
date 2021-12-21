import { Behavior, combineArray } from "@aelea/core"
import { $Branch, $Node, component, style, $text } from "@aelea/dom"
import { $row, layoutSheet, $icon, $column } from "@aelea/ui-components"
import { colorAlpha, pallete } from "@aelea/ui-components-theme"
import { formatReadableUSD, formatFixed } from "@gambitdao/gmx-middleware"
import { switchLatest, skipRepeatsWith, multicast, map } from "@most/core"
import { Stream } from "@most/types"
import { MouseEventParams, LineStyle, BarPrice, CrosshairMode, PriceScaleMode } from "lightweight-charts-baseline"
import { $responsiveFlex } from "../elements/$common"
import { ITreasuryAsset } from "../logic/contract"
import { $Chart } from "./chart/$Chart"


type ITreasuryMetric = {
  $iconPath: $Branch
  label: string
  symbol: string
  asset: Stream<ITreasuryAsset>
  $distribution: $Node
  priceChart: Stream<{
    series: { time: number, value: number }[],
    baselinePrice: number
  }>
  // entry: bigint
}

const EMPTY_MESSAGE = '-'


export function readableNumber(ammount: number) {
  const parts = ammount.toString().split('.')
  const [whole = '', decimal = ''] = parts

  if (whole === '' && decimal === '') {
    return EMPTY_MESSAGE
  }

  if (whole.replace(/^-/, '') === '0' || whole.length < 3) {
    const shortDecimal = decimal.slice(0, 2)
    return whole + (shortDecimal ? '.' + shortDecimal  : '')
  }


  return Number(whole).toLocaleString()
}

export const $AssetDetails = ({ label, $iconPath, asset, symbol, $distribution, priceChart }: ITreasuryMetric) => component((
  [pnlCrosshairMove, pnlCrosshairMoveTether]: Behavior<MouseEventParams, MouseEventParams>
) => [

  $responsiveFlex(style({ flex: 1, alignItems: 'center' }), layoutSheet.spacingBig)(
    
    $row(layoutSheet.spacing, style({ flex: 1, }))(
      $icon({ $content: $iconPath, viewBox: '0 0 32 32', svgOps: style({ marginTop: '3px' }), width: '34px' }),
      // $node(style({ flex: 1 }))(),
      $column(layoutSheet.spacingTiny, style({ flex: 1, alignItems: 'baseline' }))(
        $row(layoutSheet.spacingTiny, style({ alignItems: 'baseline' }) )(
          $text(style({ fontWeight: 'bold' }))(
            map(t => readableNumber(formatFixed(t.balance, 18)), asset)
          ),
          $text(style({ fontSize: '.75em', color: pallete.foreground, fontWeight: 'bold' }))(symbol),
        ),
        $text(style({ fontSize: '.75em' }))(map(t => '$' +  formatReadableUSD(t.balanceUsd), asset)),
      )
    ),

    $row(layoutSheet.spacing, style({ flex: 2, width: '100%' }))(
      style({ flex: 1 })(
        $distribution,
      ),
      $row(style({ flex: 1, minHeight: '75px', position: 'relative' }))(
        switchLatest(
          combineArray((data) => {
            // const startDate = new Date(data[0].time * 1000)
            // const endDate = new Date(data[data.length - 1].time * 1000)

            // debugger
            const lastTick = data.series[data.series.length - 1]

            return $Chart({
              initializeSeries: map((api) => {
                const series = api.addBaselineSeries({
                  baseLineWidth: 1,
                  priceLineWidth: 1,
                  topLineColor: pallete.positive,
                  topFillColor1: colorAlpha(pallete.positive, .3),
                  topFillColor2: 'transparent',
                  bottomLineColor: pallete.negative,
                  bottomFillColor1: 'transparent',
                  bottomFillColor2: colorAlpha(pallete.negative, .3),
                  baseValue: {
                    type: 'price',
                    price: data.baselinePrice,
                  },
                  baseLineStyle: LineStyle.Dotted,
                  baseLineColor: 'red',
                  lineWidth: 1,
                  baseLineVisible: true,
                  // lastValueVisible: false,
                  priceLineVisible: false,
                })

                series.createPriceLine({
                  price: data.baselinePrice,
                  color: pallete.foreground,
                  lineWidth: 1,
                  axisLabelVisible: true,
                  title: '',
                  lineStyle: LineStyle.SparseDotted,
                })


                // @ts-ignore
                series.setData([ ...data.series, ])

                setTimeout(() => {
                  api.timeScale().fitContent()
                }, 3110)


                return series
              }),
              chartConfig: {
                localization: {
                  priceFormatter: (priceValue: BarPrice) => {
                    return  `$${readableNumber(priceValue)}`
                  }
                },
                layout: {
                  fontFamily: "RelativeMono",
                  backgroundColor: 'transparent',
                  textColor: pallete.foreground,
                  fontSize: 11
                },
                crosshair: {
                  mode: CrosshairMode.Magnet,
                  horzLine: {
                    // visible: false,
                    labelBackgroundColor: pallete.foreground,
                    // labelVisible: false,
                    color: pallete.foreground,
                    width: 1,
                    style: LineStyle.SparseDotted,
                  },
                  vertLine: {
                    color: pallete.foreground,
                    labelBackgroundColor: pallete.foreground,
                    width: 1,
                    style: LineStyle.SparseDotted,
                  }
                },
                rightPriceScale: {
                  mode: PriceScaleMode.Normal,
                  autoScale: true,
                  // visible: true,
                  scaleMargins: {
                    top: 0.05,
                    bottom: 0.05,
                  }
                },
                overlayPriceScales: {
                  invertScale: true
                },
                handleScale: false,
                handleScroll: false,
                timeScale: {
                  // rightOffset: 110,
                  secondsVisible: false,
                  timeVisible: true,
                  rightOffset: 0,
                  // fixLeftEdge: true,
                  // fixRightEdge: true,
                  visible: false,
                  rightBarStaysOnScroll: true,
                },
              },
              containerOp: style({ 
                position: 'absolute', left: 0, top: 0, right: 0, bottom: 0
              }),
            })({
              crosshairMove: pnlCrosshairMoveTether(
                skipRepeatsWith((a, b) => a.point?.x === b.point?.x),
                multicast
              )
            })
          }, priceChart)
        )
      )
    )

  )

])