import styled, { css, DefaultTheme } from 'styled-components'
import { TContentWrapperSize } from './ContentWrapper'

interface IProps {
  size?: TContentWrapperSize
  theme: DefaultTheme
}

const ContentWrapperStyled = styled.div<IProps>`
  ${({ theme, size }) => css`
    ${(!size || size === 'normal') &&
    css`
      padding: ${theme.sizes.stepSize * 2.5}px ${theme.sizes.stepSize * 3}px;
    `}
    ${size === 'large' &&
    css`
      padding: ${theme.sizes.stepSize * 4}px;
    `}
  `}
`

export default ContentWrapperStyled
