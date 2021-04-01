import styled, { css, DefaultTheme } from 'styled-components'
import { generateFontStyle } from '../Text/TextStyled'

interface IProps {
  theme: DefaultTheme
}

const InputFieldStyled = styled.input.attrs((props: IProps) => ({
  type: 'text',
}))<IProps>`
  ${({ theme }) => css`
    ${generateFontStyle(theme, 'normal', 'medium')}
    color: ${theme.colors.greyColor};
    border: 0;
    outline: none;
    padding: ${theme.sizes.tnFontSize}px ${theme.sizes.tnFontSize}px;

    &::placeholder {
      color: ${theme.colors.greyColor};
    }
  `}
`

export default InputFieldStyled
