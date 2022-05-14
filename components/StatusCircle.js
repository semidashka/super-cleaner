import styled, { css } from 'styled-components';

const StatusCircle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background: red;
  border-radius: 50%;
  border: 1px solid black;
  transition: width 0.5s, background 0.5s;

  ${({ status }) => {
    return css`
      background: ${status ? 'lightblue' : 'darkgrey'};
    `;
  }}
`;

export default StatusCircle;
