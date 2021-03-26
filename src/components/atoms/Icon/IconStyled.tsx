import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  source: string
  theme: DefaultTheme
}

const IconStyled = styled.div<IProps>`
  ${({ theme, source }) => css`
    width: 24px;
    height: 24px;
    background-image: url(${source});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  `}
`

export default IconStyled
