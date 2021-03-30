import React from 'react'
import PieChartStyled, {
  PieChartContentStyled,
  PieChartLegendsStyled,
  PieChartLegendStyled,
} from './PieChartStyled'
import ChartJsPie, { IChartJsPieItem } from '../../atoms/ChartJsPie/ChartJsPie'
import Frame from '../Frame/Frame'
import ChartLegend from '../ChartLegend/ChartLegend'
import { ThemeContext } from 'styled-components'
import { getHexByColor } from '../../../utils/theme'

interface IProps {
  title: string
  items: IChartJsPieItem[]
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
              <PieChartLegendStyled>
                <ChartLegend
                  color={getHexByColor(theme, 'primary')}
                  value={30}
                  percent={30}
                >
                  Кек
                </ChartLegend>
              </PieChartLegendStyled>
              <PieChartLegendStyled>
                <ChartLegend
                  color={getHexByColor(theme, 'orange')}
                  value={30}
                  percent={30}
                >
                  Кек
                </ChartLegend>
              </PieChartLegendStyled>
              <PieChartLegendStyled>
                <ChartLegend
                  color={getHexByColor(theme, 'red')}
                  value={30}
                  percent={30}
                >
                  Кек
                </ChartLegend>
              </PieChartLegendStyled>
              <PieChartLegendStyled>
                <ChartLegend
                  color={getHexByColor(theme, 'green')}
                  value={30}
                  percent={30}
                >
                  Кек
                </ChartLegend>
              </PieChartLegendStyled>
            </PieChartLegendsStyled>
          </Frame>
        )}
      </ThemeContext.Consumer>
    </PieChartStyled>
  )
}

export default PieChart
