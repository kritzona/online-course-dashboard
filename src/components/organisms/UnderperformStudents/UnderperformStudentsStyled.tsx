import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const UnderperformStudentsStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default UnderperformStudentsStyled
