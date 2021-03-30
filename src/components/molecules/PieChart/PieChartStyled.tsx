import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const PieChartStyled = styled.div<IProps>`
  ${({ theme }) => css`
    height: 100%;
  `}
`

export const PieChartContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding-top: ${theme.sizes.stepSize * 3}px;
    padding-bottom: ${theme.sizes.stepSize * 4}px;
  `}
`
export const PieChartLegendsStyled = styled.div<IProps>`
  ${({ theme }) => css`
    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize * 3}px;
    }
  `}
`
export const PieChartLegendStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default PieChartStyled
