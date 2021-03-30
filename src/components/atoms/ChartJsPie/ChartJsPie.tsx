import React, { useEffect, useState } from 'react'
import ChartJsPieStyled from './ChartJsPieStyled'
import ChartJsPieSvg from './ChartJsPieSvg/ChartJsPieSvg'
import { TColor } from '../../../themes/LightTheme/LightTheme'

export interface IChartJsPieItem {
  id: string | number
  label: string
  value: number
  color: TColor
}
interface IProps {
  items: IChartJsPieItem[]
}

export const calcTotalOfPieItems = (items: IChartJsPieItem[]) => {
  return items
    .map((item) => item.value)
    .reduce((prev, current) => prev + current, 0)
}

const ChartJsPie = (props: IProps) => {
  return (
    <ChartJsPieStyled>
      <ChartJsPieSvg items={props.items} />
    </ChartJsPieStyled>
  )
}

export default ChartJsPie
