import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FrameStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`

export const FrameHeaderWrapperStyled = styled.header<IProps>`
  ${({ theme }) => css``}
`
export const FrameContentWrapperStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default FrameStyled
