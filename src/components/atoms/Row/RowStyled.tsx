import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  gutter?: boolean
}

const RowStyled = styled.div<IProps>`
  ${({ theme, gutter }) => css`
    width: 100%;
    display: grid;
    display: -ms-grid;

    height: max-content;

    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-column-gap: ${theme.sizes.stepSize * 4}px;

    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    -ms-grid-rows: auto;

    ${gutter &&
    css`
      grid-row-gap: ${theme.sizes.stepSize * 4}px;
    `}
    ${!gutter &&
    css`
      grid-row-gap: 0;
      grid-column-gap: 0;
    `}
  `}
`

export default RowStyled
