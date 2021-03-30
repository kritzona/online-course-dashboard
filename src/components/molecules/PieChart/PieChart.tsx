import React from 'react'
import PieChartStyled, {
  PieChartContentStyled,
  PieChartLegendsStyled,
  PieChartLegendStyled,
} from './PieChartStyled'
import ChartJsPie, {
  calcTotalOfPieItems,
  IChartJsPieItem,
} from '../../atoms/ChartJsPie/ChartJsPie'
import Frame from '../Frame/Frame'
import ChartLegend from '../ChartLegend/ChartLegend'
import { DefaultTheme, ThemeContext } from 'styled-components'
import { getHexByColor } from '../../../utils/theme'
import { convertNumberToPercent } from '../../../utils/math'

interface IProps {
  title: string
  items: IChartJsPieItem[]
}

const generatePieChartLegends = (
  theme: DefaultTheme,
  items: IChartJsPieItem[],
) => {
  const total = calcTotalOfPieItems(items)

  return items.map((item) => {
    return (
      <PieChartLegendStyled>
        <ChartLegend
          color={getHexByColor(theme, item.color)}
          value={item.value}
          percent={convertNumberToPercent(total, item.value)}
        >
          {item.label}
        </ChartLegend>
      </PieChartLegendStyled>
    )
  })
}

const PieChart = (props: IProps) => {
  return (
    <PieChartStyled>
      <ThemeContext.Consumer>
        {(theme) => (
          <Frame title={props.title}>
            <PieChartContentStyled>
              <ChartJsPie items={props.items} />
            </PieChartContentStyled>
            <PieChartLegendsStyled>
              {generatePieChartLegends(theme, props.items)}
            </PieChartLegendsStyled>
          </Frame>
        )}
      </ThemeContext.Consumer>
    </PieChartStyled>
  )
}

export default PieChart
