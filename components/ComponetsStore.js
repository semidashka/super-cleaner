import styled from 'styled-components';

const AppName = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;
const PageTitleSmall = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const PageTitleBig = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export { AppName, PageTitleSmall, PageTitleBig };
