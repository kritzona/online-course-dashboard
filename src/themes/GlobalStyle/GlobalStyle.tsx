import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const GlobalStyle = createGlobalStyle<IProps>`
  ${({ theme }) => css``}
`

export default GlobalStyle
