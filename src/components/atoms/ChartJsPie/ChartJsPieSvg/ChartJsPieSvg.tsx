import React from 'react'
import ChartJsPieSvgStyled, {
  ChartJsPieSvgCircleStyled,
} from './ChartJsPieSvgStyled'

interface IProps {}

const ChartJsPieSvg = (props: IProps) => {
  return (
    <ChartJsPieSvgStyled>
      <ChartJsPieSvgCircleStyled />
    </ChartJsPieSvgStyled>
  )
}

export default ChartJsPieSvg
