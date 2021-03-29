import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const CountStudentsStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default CountStudentsStyled
