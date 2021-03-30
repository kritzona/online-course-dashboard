import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const ChartJsColumnStyled = styled.div<IProps>`
  ${({ theme }) => css`
    height: 233px;
  `}
`

export default ChartJsColumnStyled
