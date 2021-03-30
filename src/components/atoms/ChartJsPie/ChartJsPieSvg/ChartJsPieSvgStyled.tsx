import styled, { css, DefaultTheme } from 'styled-components'
import {
  calcArcLength,
  calcCircumrefence,
  convertPercentToNumber,
} from '../../../../utils/math'
import { TColor } from '../../../../themes/LightTheme/LightTheme'
import { getHexByColor } from '../../../../utils/theme'

interface IChartJsPieSvgStyledProps {
  theme: DefaultTheme
}
interface IChartJsPieSvgCircleStyledProps {
  percent: number
  offset: number
  color: TColor
  theme: DefaultTheme
}

const svgWidth = 181
const svgHeight = 181
const radius = convertPercentToNumber(svgWidth, 25, 1)
const cx = convertPercentToNumber(svgWidth, 50, 1)
const cy = convertPercentToNumber(svgHeight, 50, 1)

const ChartJsPieSvgStyled = styled.svg.attrs(() => ({
  width: svgWidth,
  height: svgHeight,
  viewBox: `0 0 ${svgWidth} ${svgHeight}`,
}))<IChartJsPieSvgStyledProps>`
  ${({ theme }) => css``}
`

export const ChartJsPieSvgCircleStyled = styled.circle.attrs(
  (props: IChartJsPieSvgCircleStyledProps) => {
    return {
      r: radius,
      cx: cx,
      cy: cy,
      fill: 'transparent',
      stroke: getHexByColor(props.theme, props.color),
      strokeWidth: svgWidth / 2,
      strokeDasharray: `${calcArcLength(
        radius,
        props.percent,
      )} ${calcCircumrefence(radius)}`,
      transform: `rotate(${-90 + (props.offset * 360) / 100})`,
    }
  },
)<IChartJsPieSvgCircleStyledProps>`
  ${({ theme }) => css`
    transform-origin: center center;
  `}
`

export default ChartJsPieSvgStyled
