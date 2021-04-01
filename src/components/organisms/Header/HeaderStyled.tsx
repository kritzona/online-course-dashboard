import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const HeaderStyled = styled.header<IProps>`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.whiteColor};
    padding-top: ${theme.sizes.stepSize * 2.5}px;
    padding-bottom: ${theme.sizes.stepSize * 2.5}px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  `}
`

export default HeaderStyled
