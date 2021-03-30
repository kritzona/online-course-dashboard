import styled, { css, DefaultTheme } from 'styled-components'
import { TColor } from '../../../themes/LightTheme/LightTheme'
import { rgba } from 'polished'
import { getHexByColor } from '../../../utils/theme'

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
      const hexColor = getHexByColor(theme, color)

      return css`
        background-color: ${rgba(hexColor, 0.05)};
      `
    }}
  `}
`

export default CircleIconStyled
