import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const AppStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const AppContentStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default AppStyled
