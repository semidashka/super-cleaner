import styled from 'styled-components';

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
`;
