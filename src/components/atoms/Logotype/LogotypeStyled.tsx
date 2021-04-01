import styled, { css, DefaultTheme } from 'styled-components'
import logoImageSource from '../../../assets/images/logo.svg'

interface IProps {
  theme: DefaultTheme
}

const LogotypeStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: ${theme.sizes.stepSize * 10}px;
    height: ${theme.sizes.stepSize * 10}px;
    background-color: ${theme.colors.primaryColor};
    background-image: url(${logoImageSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: ${theme.sizes.stepSize * 5.4}px
      ${theme.sizes.stepSize * 5.4}px;
  `}
`

export default LogotypeStyled
