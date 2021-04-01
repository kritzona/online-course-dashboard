import { createGlobalStyle, css, DefaultTheme } from 'styled-components'
import { generateFontStyle } from '../../components/atoms/Text/TextStyled'

interface IProps {
  theme: DefaultTheme
}

const GlobalStyle = createGlobalStyle<IProps>`
  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: subpixel-antialiased;

      font-family: 'Gilroy Regular', sans-serif;
      ${generateFontStyle(theme, 'normal', 'medium')}

      color: ${theme.colors.blackColor};
      background-color: ${theme.colors.backgroundColor};
    }

    input,
    textarea {
      font-family: 'Gilroy Regular', sans-serif;
      ${generateFontStyle(theme, 'normal', 'medium')}
    }

    a {
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
  `}
`

export default GlobalStyle
