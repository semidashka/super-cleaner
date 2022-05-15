import styled from 'styled-components';

import useStore from '../../src/useStore';

import { AppName, PageTitleBig } from '../../components/ComponetsStore';
import StatusCircle from '../../components/StatusCircle';

export default function Room(roomId) {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);
  const assignRoom = useStore(state => state.assignRoom);

  return (
    <>
      <AppName>Super Clean</AppName>
      <PageTitleBig>{rooms[0].name}</PageTitleBig>
      <main>
        <div>
          <p>Assignee:</p>
          <select
            onChange={event => {
              assignRoom(rooms[0].id, event.target.value);
              console.log(rooms[0]); // Why assigneeId output in console does not change?
              console.log(flatmates);
            }}
          >
            {flatmates.map(flatmate => (
              <option key={flatmate.id} value={flatmate.id}>
                {flatmate.name}
              </option>
            ))}
          </select>
          <button onClick={() => console.log(rooms)}>log</button>
        </div>
        <div>
          <p>Status:</p>
          <StatusCircle status={rooms[0].status} />
        </div>
        <div>
          <p>Frequency:</p>
          <div>
            <p>weekly</p>
          </div>
        </div>
      </main>
    </>
  );
}
