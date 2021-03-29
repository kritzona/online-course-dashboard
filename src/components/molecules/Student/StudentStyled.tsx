import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const StudentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: ${theme.colors.greyColor};

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 1.5}px;
    }
  `}
`

export default StudentStyled
