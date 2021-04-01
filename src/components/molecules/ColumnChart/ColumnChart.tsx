import React from 'react'
import Frame from '../Frame/Frame'
import ChartJsColumn from '../../atoms/ChartJsColumn/ChartJsColumn'
import ColumnChartStyled from './ColumnChartStyled'
import ChartLegend from '../ChartLegend/ChartLegend'
import { ThemeContext } from 'styled-components'

interface IProps {
  title: string
}

const ColumnChart = (props: IProps) => {
  return (
    <ColumnChartStyled>
      <ThemeContext.Consumer>
        {(theme) => (
          <Frame
            title={props.title}
            elements={
              <>
                <ChartLegend color={theme.colors.primaryColor}>
                  Applied
                </ChartLegend>
                <ChartLegend color={theme.colors.accentColor}>Left</ChartLegend>
              </>
            }
          >
            {<ChartJsColumn />}
          </Frame>
        )}
      </ThemeContext.Consumer>
    </ColumnChartStyled>
  )
}

export default ColumnChart
