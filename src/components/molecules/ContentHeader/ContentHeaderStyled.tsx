import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const ContentHeaderStyled = styled.header<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`
export const ContentHeaderWestStyled = styled.div<IProps>`
  ${({ theme }) => css`
    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize}px;
    }
  `}
`
export const ContentHeaderEastStyled = styled.div<IProps>`
  ${({ theme }) => css`
    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize}px;
    }
  `}
`

export const ContentHeaderTitleStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const ContentHeaderSubtitleStyled = styled.div<IProps>`
  ${({ theme }) => css`
    color: ${theme.colors.greyColor};
  `}
`

export default ContentHeaderStyled
