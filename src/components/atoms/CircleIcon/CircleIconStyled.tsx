import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const CircleIconStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default CircleIconStyled
