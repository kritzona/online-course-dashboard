import React from 'react'
import ChartJsPieStyled from './ChartJsPieStyled'
import ChartJsPieSvg from './ChartJsPieSvg/ChartJsPieSvg'

interface IProps {}

const ChartJsPie = (props: IProps) => {
  return (
    <ChartJsPieStyled>
      <ChartJsPieSvg />
    </ChartJsPieStyled>
  )
}

export default ChartJsPie
