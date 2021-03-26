import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const ChartJsPieStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default ChartJsPieStyled
