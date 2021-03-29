import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FinishedHomeworksStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default FinishedHomeworksStyled
