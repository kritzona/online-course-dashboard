import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const AverageMarkStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default AverageMarkStyled
