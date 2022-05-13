import Card from '../components/Card';
import useStore from '../src/useStore';
import Avatar from '@mui/material/Avatar';

export default function Flatmates() {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);

  return (
    <>
      {flatmates.map(flatmate => (
        <Card key={flatmate.id} name={flatmate.name}>
          <Avatar alt={flatmate.name} src={flatmate.photo} />
          <button>Open</button>
          <ul>
            {rooms.map(room => (
              <li key={room.id} name={room.name}>
                {room.name}
              </li>
            ))}
          </ul>

          {flatmate.name}
        </Card>
      ))}
    </>
  );
}
