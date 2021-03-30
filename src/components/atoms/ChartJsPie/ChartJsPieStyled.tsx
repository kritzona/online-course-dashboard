import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const ChartJsPieStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: max-content;
    height: max-content;
    position: relative;
  `}
`

export const ChartJsPieCoreWrapperStyled = styled.div<IProps>`
  ${({ theme }) => css`
    position: absolute;
    top: calc(50% - (150px / 2) - 1px);
    left: calc(50% - (150px / 2) + 1px);
  `}
`
export const ChartJsPieCoreStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 150px;
    height: 150px;
    background-color: ${theme.colors.whiteColor};
    border-radius: 50%;
  `}
`
export const ChartJsPieCoreIconStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.whiteColor};
    border-radius: 50%;
    position: absolute;
    top: calc(50% - (100px / 2));
    left: calc(50% - (100px / 2));
    box-shadow: ${theme.effects.defaultBoxShadow};
  `}
`

export default ChartJsPieStyled
