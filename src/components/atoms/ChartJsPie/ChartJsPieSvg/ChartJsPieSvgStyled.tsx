import styled, { css, DefaultTheme } from 'styled-components'
import { convertPercentToNumber } from '../../../../utils/math'

interface IProps {
  theme: DefaultTheme
}

const svgWidth = 181
const svgHeight = 181

const ChartJsPieSvgStyled = styled.svg.attrs(() => ({
  width: svgWidth,
  height: svgHeight,
  viewBox: `0 0 ${svgWidth} ${svgHeight}`,
}))<IProps>`
  ${({ theme }) => css``}
`

export const ChartJsPieSvgCircleStyled = styled.circle.attrs(() => ({
  r: convertPercentToNumber(svgWidth, 25, 1),
  cx: convertPercentToNumber(svgWidth, 50, 1),
  cy: convertPercentToNumber(svgHeight, 50, 1),
  fill: 'transparent',
  stroke: 'tomato',
  strokeWidth: svgWidth / 2,
  strokeDasharray: `${
    (2 * Math.PI * convertPercentToNumber(svgWidth, 25, 1) * 20) / 100
  } ${2 * Math.PI * convertPercentToNumber(svgWidth, 25, 1)}`,
}))<IProps>`
  ${({ theme }) => css``}
`

export default ChartJsPieSvgStyled
