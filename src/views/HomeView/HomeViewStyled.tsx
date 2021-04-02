import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const HomeViewStyled = styled.article<IProps>`
  ${({ theme }) => css``}
`

export default HomeViewStyled
