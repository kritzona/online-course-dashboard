import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const SearchStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `}
`

export default SearchStyled
