import React from 'react'
import ChartLegendStyled, {
  ChartLegendAddValueStyled,
  ChartLegendEastStyled,
  ChartLegendValuesStyled,
  ChartLegendValueStyled,
  ChartLegendWestStyled,
} from './ChartLegendStyled'
import Dot from '../../atoms/Dot/Dot'
import Text from '../../atoms/Text/Text'

interface IProps {
  color: string
  value?: number
  percent?: number
  children?: React.ReactNode
}

const ChartLegend = (props: IProps) => {
  return (
    <ChartLegendStyled>
      <ChartLegendWestStyled>
        <Dot color={props.color} />
        <Text type="span" size="normal" weight="medium">
          {props.children}
        </Text>
      </ChartLegendWestStyled>
      {(props.value !== undefined || props.percent !== undefined) && (
        <ChartLegendEastStyled>
          <ChartLegendValuesStyled>
            {props.value !== undefined && (
              <ChartLegendValueStyled>
                <Text type="span" size="normal" weight="semibold">
                  {props.value}
                </Text>
              </ChartLegendValueStyled>
            )}
            {props.percent !== undefined && (
              <ChartLegendAddValueStyled>
                <Text type="span" size="normal" weight="semibold">
                  ({props.percent}%)
                </Text>
              </ChartLegendAddValueStyled>
            )}
          </ChartLegendValuesStyled>
        </ChartLegendEastStyled>
      )}
    </ChartLegendStyled>
  )
}

export default ChartLegend
