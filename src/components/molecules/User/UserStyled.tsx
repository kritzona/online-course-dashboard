import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const UserStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: max-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize}px;
    }
  `}
`
export const UserInfoStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const UserInfoFullnameStyled = styled.div<IProps>`
  ${({ theme }) => css`
    text-align: right;
  `}
`
export const UserInfoPostStyled = styled.div<IProps>`
  ${({ theme }) => css`
    text-align: right;
    color: ${theme.colors.greyColor};
  `}
`
export const UserAvatarStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const UserButtonStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default UserStyled
