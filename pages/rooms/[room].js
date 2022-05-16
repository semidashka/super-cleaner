import { useRouter } from 'next/router';
import styled from 'styled-components';

import useStore from '../../src/useStore';

import { AppName, PageTitleBig } from '../../components/ComponetsStore';
import StatusCircle from '../../components/StatusCircle';

export default function Room(roomId) {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);
  const assignRoom = useStore(state => state.assignRoom);
  const changeRoomStatus = useStore(state => state.changeRoomStatus);
  // const currentRoom = useStore(state => state.currentRoom);
  // const getRoomById = useStore(state => state.getRoomById);
  const ROOM_ID = '001';
  const router = useRouter();
  const { room } = router.query; //as file
  console.log(room);
  const currentRoom = rooms.find(room_ => room_.id === room);

  return (
    room && (
      <>
        <header>
          <AppName>Super Clean</AppName>
          <button onClick={() => {}}>set room</button>
          <button onClick={() => console.log(currentRoom)}>log</button>
        </header>

        <PageTitleBig>{currentRoom.name}</PageTitleBig>
        <main>
          <div>
            <p>Assignee:</p>
            <select
              onChange={event => {
                console.log(event.target.value);
                assignRoom(currentRoom.id, event.target.value);
              }}
            >
              {flatmates.map(flatmate => (
                <option key={flatmate.id} value={flatmate.id}>
                  {flatmate.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Status:</p>
            <StyledBtn
              onClick={() => {
                console.log(currentRoom);
                changeRoomStatus(currentRoom.id);
              }}
            >
              <StatusCircle status={currentRoom.status} />
            </StyledBtn>
          </div>
          <div>
            <p>Frequency:</p>
            <div>
              <p>weekly</p>
            </div>
          </div>
        </main>
      </>
    )
  );
}

const StyledBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
`;
