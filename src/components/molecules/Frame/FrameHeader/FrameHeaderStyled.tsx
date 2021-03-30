import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FrameHeaderStyled = styled.div<IProps>`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.lightGreyColor};
  `}
`
export const FrameHeaderContentWrapperStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`
export const FrameHeaderTitleStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const FrameHeaderElementsStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 3}px;
    }
  `}
`

export default FrameHeaderStyled
