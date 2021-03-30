import React from 'react'
import ChartJsPieSvgStyled, {
  ChartJsPieSvgCircleStyled,
} from './ChartJsPieSvgStyled'

interface IProps {}

const ChartJsPieSvg = (props: IProps) => {
  return (
    <ChartJsPieSvgStyled>
      <ChartJsPieSvgCircleStyled percent={25} offset={0} color="primary" />
      <ChartJsPieSvgCircleStyled percent={25} offset={25} color="orange" />
      <ChartJsPieSvgCircleStyled percent={25} offset={50} color="red" />
      <ChartJsPieSvgCircleStyled percent={25} offset={75} color="green" />
    </ChartJsPieSvgStyled>
  )
}

export default ChartJsPieSvg
