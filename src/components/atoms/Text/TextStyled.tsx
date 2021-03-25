import styled, { css, DefaultTheme } from 'styled-components'
import { TTextSize, TTextTransform, TTextWeight } from './Text'
import { convertPercentToNumber } from '../../../utils/math'

interface IProps {
  size?: TTextSize
  weight?: TTextWeight
  transform?: TTextTransform

  theme: DefaultTheme
}

const generateTextTransformStyle = (transform: TTextTransform | undefined) => {
  if (transform)
    return css`
      text-transform: ${transform};
    `

  return css``
}
const generateFontSizeStyle = (
  theme: DefaultTheme,
  size: TTextSize | undefined,
) => {
  let fontSize = theme.sizes.tnFontSize
  let lineHeight = theme.sizes.tnLineHeight

  switch (size) {
    case 'large':
      fontSize = theme.sizes.tlFontSize
      lineHeight = theme.sizes.tlLineHeight
      break
    case 'medium':
      fontSize = theme.sizes.tmFontSize
      lineHeight = theme.sizes.tmLineHeight
      break
    case 'normal':
      fontSize = theme.sizes.tnFontSize
      lineHeight = theme.sizes.tnLineHeight
      break
    case 'small':
      fontSize = theme.sizes.tsFontSize
      lineHeight = theme.sizes.tsLineHeight
      break
  }

  let letterSpacing = convertPercentToNumber(fontSize, 1, 2)

  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    letter-spacing: ${letterSpacing}px;
  `
}
const generateFontWeightStyle = (
  theme: DefaultTheme,
  weight: TTextWeight | undefined,
) => {
  let fontFamily = 'Gilroy Regular'
  let fontWeight = theme.sizes.regularFontWeight

  switch (weight) {
    case 'regular':
      fontFamily = 'Gilroy Regular'
      fontWeight = theme.sizes.regularFontWeight
      break
    case 'semibold':
      fontFamily = 'Gilroy Semibold'
      fontWeight = theme.sizes.semiBoldFontWeight
      break
    case 'medium':
      fontFamily = 'Gilroy Medium'
      fontWeight = theme.sizes.mediumFontWeight
      break
    case 'bold':
      fontFamily = 'Gilroy Bold'
      fontWeight = theme.sizes.boldFontWeight
      break
  }

  return css`
    font-family: '${fontFamily}';
    font-weight: ${fontWeight};
  `
}
const generateFontStyle = (
  theme: DefaultTheme,
  size: TTextSize | undefined,
  weight: TTextWeight | undefined,
) => {
  return css`
    ${generateFontSizeStyle(theme, size)}
    ${generateFontWeightStyle(theme, weight)}
    font-style: normal;
    font-stretch: normal;
  `
}

export const TextH1Styled = styled.h1<IProps>`
  ${({ theme, transform }) => css`
    ${generateFontStyle(theme, 'large', 'semibold')}
    ${generateTextTransformStyle(transform)}
  `}
`
export const TextH2Styled = styled.h2<IProps>`
  ${({ theme, transform }) => css`
    ${generateFontStyle(theme, 'normal', 'semibold')}
    ${generateTextTransformStyle(transform)}
  `}
`
export const TextPStyled = styled.p<IProps>`
  ${({ theme, size, weight, transform }) => css`
    ${generateFontStyle(theme, size, weight)}
    ${generateTextTransformStyle(transform)}
  `}
`
export const TextSpanStyled = styled.span<IProps>`
  ${({ theme, size, weight, transform }) => css`
    ${generateFontStyle(theme, size, weight)}
    ${generateTextTransformStyle(transform)}
  `}
`
