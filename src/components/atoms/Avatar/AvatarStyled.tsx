import styled, { css, DefaultTheme } from 'styled-components'
import { TAvatarSize } from './Avatar'

interface IProps {
  size: TAvatarSize
  imageSource: string
  theme: DefaultTheme
}

const AvatarStyled = styled.div<IProps>`
  ${({ theme, size, imageSource }) => css`
    ${() => {
      let width = theme.sizes.stepSize * 4
      let height = theme.sizes.stepSize * 4

      switch (size) {
        case 'normal':
          width = theme.sizes.stepSize * 4
          height = theme.sizes.stepSize * 4
          break
        case 'large':
          width = theme.sizes.stepSize * 5
          height = theme.sizes.stepSize * 5
          break
      }

      return css`
        width: ${width}px;
        height: ${height}px;
      `
    }}

    background-image: url(${imageSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  `}
`

export default AvatarStyled
