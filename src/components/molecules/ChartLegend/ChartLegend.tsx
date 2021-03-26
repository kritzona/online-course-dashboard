import React from 'react'
import ChartLegendStyled from './ChartLegendStyled'
import Dot from '../../atoms/Dot/Dot'
import Text from '../../atoms/Text/Text'

interface IProps {
  color: string
  children?: React.ReactNode
}

const ChartLegend = (props: IProps) => {
  return (
    <ChartLegendStyled>
      <Dot color={props.color} />
      <Text type="span" size="normal" weight="medium">
        {props.children}
      </Text>
    </ChartLegendStyled>
  )
}

export default ChartLegend
