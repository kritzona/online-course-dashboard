import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const CardStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.whiteColor};
    border-radius: ${theme.sizes.borderRadius}px;
    box-shadow: ${theme.effects.cardBoxShadow};
    overflow: hidden;
  `}
`

export default CardStyled
