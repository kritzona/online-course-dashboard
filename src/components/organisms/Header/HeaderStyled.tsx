import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const HeaderStyled = styled.header<IProps>`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.whiteColor};
    padding-top: ${theme.sizes.stepSize * 1.8}px;
    padding-bottom: ${theme.sizes.stepSize * 1.8}px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  `}
`
export const HeaderContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`
export const HeaderWestStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const HeaderEastStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 2}px;
    }
  `}
`
export const HeaderDelimiterStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 1px;
    height: 64px;
    background-color: ${theme.colors.lightGreyColor};
  `}
`

export default HeaderStyled
