import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  color: string
  theme: DefaultTheme
}

const DotStyled = styled.div<IProps>`
  ${({ theme, color }) => css`
    width: ${theme.sizes.stepSize * 0.8}px;
    height: ${theme.sizes.stepSize * 0.8}px;
    border-radius: 50%;
    background-color: ${color};
  `}
`

export default DotStyled
