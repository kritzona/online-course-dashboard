import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const HoursSpentStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default HoursSpentStyled
