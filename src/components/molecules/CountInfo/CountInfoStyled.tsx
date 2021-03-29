import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const CountInfoStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export const CountInfoContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 3}px;
    }
  `}
`
export const CountInfoWestStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const CountInfoEastStyled = styled.div<IProps>`
  ${({ theme }) => css`
    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize}px;
    }
  `}
`

export const CountInfoIconStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const CountInfoValueStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const CountInfoDescStyled = styled.div<IProps>`
  ${({ theme }) => css`
    color: ${theme.colors.greyColor};
  `}
`

export default CountInfoStyled
