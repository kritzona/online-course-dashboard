import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FrameContentStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default FrameContentStyled
