import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const SidebarStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: max-content;
    height: 100vh;
    background-color: ${theme.colors.darkPrimaryColor};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  `}
`
export const SidebarLogotypeStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const SidebarContentStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default SidebarStyled
