import styled from 'styled-components';

import useStore from '../../src/useStore';

import { AppName, PageTitleBig } from '../../components/ComponetsStore';
import StatusCircle from '../../components/StatusCircle';

export default function Room(roomId) {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);

  return (
    <>
      <AppName>Super Clean</AppName>
      <PageTitleBig>{rooms[0].name}</PageTitleBig>
      <main>
        <div>
          <p>Assignee:</p>
          <select
            onChange={event => {
              rooms[0].assigneeID = event.target.value;
            }}
          >
            {flatmates.map(flatmate => (
              <option value={flatmate.id}>{flatmate.name}</option>
            ))}
          </select>
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
