import styled, { css, DefaultTheme } from 'styled-components';

interface IProps {
  theme: DefaultTheme
}

const ContentStyled = styled.main<IProps>`
  ${({ theme }) => css``}
`;

export default ContentStyled;
