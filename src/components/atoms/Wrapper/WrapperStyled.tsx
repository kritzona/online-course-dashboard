import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  paddingX?: boolean
  paddingY?: boolean
}

const WrapperStyled = styled.div<IProps>`
  ${({ theme, paddingX, paddingY }) => css`
    width: 100%;
    margin: 0 auto;
    padding: ${paddingY ? `${theme.sizes.stepSize * 4}px` : '0'}
      ${paddingX === undefined || paddingX
        ? `${theme.sizes.stepSize * 6}px`
        : '0'};
    position: relative;

    @media ${theme.mediaQueries.phablet} {
      padding: ${paddingY ? `${theme.sizes.stepSize * 3}px` : '0'}
        ${paddingX === undefined || paddingX
          ? `${theme.sizes.stepSize * 1.5}px`
          : '0'};
    }
    @media ${theme.mediaQueries.mobile} {
      padding: ${paddingY ? `${theme.sizes.stepSize * 3}px` : '0'}
        ${paddingX === undefined || paddingX
          ? `${theme.sizes.stepSize * 1.5}px`
          : '0'};
    }
  `}
`

export default WrapperStyled
