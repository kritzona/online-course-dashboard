import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const ListStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize * 2.5}px;
    }
  `}
`

export default ListStyled
