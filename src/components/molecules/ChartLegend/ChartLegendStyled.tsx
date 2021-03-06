import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const ChartLegendStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > *:not(:first-child):not(:empty) {
      margin-left: ${theme.sizes.stepSize}px;
    }
  `}
`
export const ChartLegendWestStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: ${theme.colors.greyColor};

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 1.2}px;
    }
  `}
`
export const ChartLegendEastStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export const ChartLegendValuesStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize / 3}px;
    }
  `}
`
export const ChartLegendValueStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const ChartLegendAddValueStyled = styled.div<IProps>`
  ${({ theme }) => css`
    color: ${theme.colors.greyColor};
  `}
`

export default ChartLegendStyled
