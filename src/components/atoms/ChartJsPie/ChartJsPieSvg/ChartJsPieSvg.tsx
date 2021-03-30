import React from 'react'
import ChartJsPieSvgStyled, {
  ChartJsPieSvgCircleStyled,
} from './ChartJsPieSvgStyled'
import { calcTotalOfPieItems, IChartJsPieItem } from '../ChartJsPie'
import { convertNumberToPercent } from '../../../../utils/math'

interface IProps {
  items: IChartJsPieItem[]
}

export const generatePieSvgCircles = (items: IChartJsPieItem[]) => {
  const total = calcTotalOfPieItems(items)

  let offset = 0
  return items.map((item) => {
    const percent = convertNumberToPercent(total, item.value, 0)
    const currentOffset = offset

    offset = offset + percent

    console.log(item.id, percent, currentOffset, item.color, total, item.value)

    return (
      <ChartJsPieSvgCircleStyled
        key={item.id}
        percent={percent}
        offset={currentOffset}
        color={item.color}
      />
    )
  })
}

const ChartJsPieSvg = (props: IProps) => {
  return (
    <ChartJsPieSvgStyled>
      {generatePieSvgCircles(props.items)}
    </ChartJsPieSvgStyled>
  )
}

export default ChartJsPieSvg
