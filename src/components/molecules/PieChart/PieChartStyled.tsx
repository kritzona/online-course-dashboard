import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const PieChartStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default PieChartStyled
