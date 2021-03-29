import styled, { css, DefaultTheme } from 'styled-components'
import { TColor } from '../../../themes/LightTheme/LightTheme'
import { rgba } from 'polished'

interface IProps {
  color: TColor
  theme: DefaultTheme
}

const CircleIconStyled = styled.div<IProps>`
  ${({ theme, color }) => css`
    width: ${theme.sizes.stepSize * 7}px;
    height: ${theme.sizes.stepSize * 7}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    ${() => {
      let hexColor = theme.colors.primaryColor

      switch (color) {
        case 'primary':
          hexColor = theme.colors.primaryColor
          break
        case 'accent':
          hexColor = theme.colors.accentColor
          break
        case 'red':
          hexColor = theme.colors.redColor
          break
        case 'green':
          hexColor = theme.colors.greenColor
          break
        case 'blue':
          hexColor = theme.colors.blueColor
          break
        case 'orange':
          hexColor = theme.colors.orangeColor
          break
        case 'aqua':
          hexColor = theme.colors.aquaColor
          break
      }

      return css`
        background-color: ${rgba(hexColor, 0.05)};
      `
    }}
  `}
`

export default CircleIconStyled
