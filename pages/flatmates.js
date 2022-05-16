import { useState } from 'react';
import Avatar from '@mui/material/Avatar';

import useStore from '../src/useStore';

import { AppName, PageTitleSmall } from '../components/ComponetsStore';
import Card from '../components/Card';
import StatusCircle from '../components/StatusCircle';

export default function Flatmates() {
  const [showRooms, setShowRooms] = useState(false);
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);

  return (
    <>
      <AppName>Super Clean</AppName>
      <PageTitleSmall>Rooms</PageTitleSmall>
      {flatmates.map(flatmate => (
        <Card key={flatmate.id}>
          <Avatar alt={flatmate.name} src={flatmate.photo} />
          <button onClick={() => setShowRooms(true)}>Open</button>
          {showRooms ? (
            <ul>
              {rooms
                .filter(room => room.assigneeId === flatmate.id)
                .map(room => (
                  <li key={room.id} name={room.name}>
                    {room.name}
                    <StatusCircle status={room.status} />
                  </li>
                ))}
            </ul>
          ) : null}
          {flatmate.name}
        </Card>
      ))}
    </>
  );
}
