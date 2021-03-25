import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

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
      font-size: ${theme.sizes.tnFontSize}px;
      line-height: ${theme.sizes.tnLineHeight}px;
      font-weight: ${theme.sizes.regularFontWeight};
      font-style: normal;
      font-stretch: normal;

      color: ${theme.colors.blackColor};
      background-color: ${theme.colors.backgroundColor};
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
