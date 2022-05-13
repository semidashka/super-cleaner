import styled from 'styled-components';

import useStore from '../src/useStore';

import Card from '../components/Card';
import StatusCircle from '../components/StatusCircle';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const rooms = useStore(state => state.rooms);

  return (
    <>
      {rooms.map(room => (
        <Card key={room.id} name={room.name}>
          {room.name}

          <StatusCircle status={room.status} />
          <ul>
            <li>assignee: {room.assignee}</li>
            <li>cleaned: {room.status}</li>
          </ul>
          <button>delete</button>
        </Card>
      ))}
    </>
  );
}
