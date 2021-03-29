import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const StudentWithMarkStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`
export const StudentWithMarkWestStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const StudentWithMarkEastStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default StudentWithMarkStyled
