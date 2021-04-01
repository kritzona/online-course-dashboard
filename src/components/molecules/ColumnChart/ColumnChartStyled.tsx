import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const ColumnChartStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
  `}
`

export default ColumnChartStyled
