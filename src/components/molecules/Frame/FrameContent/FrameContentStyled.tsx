import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FrameContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    height: 100%;
  `}
`

export default FrameContentStyled
