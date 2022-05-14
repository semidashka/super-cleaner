import styled from 'styled-components';

import useStore from '../src/useStore';

import { AppName, PageTitleSmall } from '../components/ComponetsStore';
import Card from '../components/Card';
import StatusCircle from '../components/StatusCircle';

export default function Home() {
  const rooms = useStore(state => state.rooms);

  return (
    <>
      <AppName>Super Clean</AppName>
      <PageTitleSmall>Rooms</PageTitleSmall>
      {rooms.map(room => (
        <Card key={room.id} name={room.name}>
          {room.name}

          <StatusCircle status={room.status} />
          <ul>
            <li>assignee: {room.assignee}</li>
            <li>cleaned: {room.status}</li>
          </ul>
        </Card>
      ))}
    </>
  );
}
