import { DefaultTheme } from 'styled-components'
import { TColor } from '../themes/LightTheme/LightTheme'

export const getHexByColor = (theme: DefaultTheme, color: TColor) => {
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

  return hexColor
}
