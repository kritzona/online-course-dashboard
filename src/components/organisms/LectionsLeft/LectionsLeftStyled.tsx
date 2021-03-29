import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const LectionsLeftStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default LectionsLeftStyled
