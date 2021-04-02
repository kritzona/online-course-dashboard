import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const CardStyled = styled.section<IProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.whiteColor};
    border-radius: ${theme.sizes.borderRadius}px;
    box-shadow: ${theme.effects.cardBoxShadow};
    overflow: hidden;
  `}
`

export default CardStyled
