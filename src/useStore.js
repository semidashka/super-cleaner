import create from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create(set => {
  return {
    rooms: [
      { name: 'Kitchen', id: '001', assigneeId: null, status: true },
      { name: 'Bathroom', id: '002', assigneeId: null, status: false },
      { name: 'Hall', id: '003', assigneeId: null, status: false },
      { name: 'Living-room', id: nanoid(), assigneeId: null, status: false },
    ],
    flatmates: [
      {
        name: 'Maria',
        id: '777',
        photo: `https://randomuser.me/api/portraits/women/7.jpg`,
      },
      {
        name: 'Eugen',
        id: '888',
        photo: `https://randomuser.me/api/portraits/men/7.jpg`,
      },
      {
        name: 'Daria',
        id: '555',
        photo: `https://randomuser.me/api/portraits/women/8.jpg`,
      },
      {
        name: 'Katze',
        id: nanoid(),
        photo: `https://sm.mashable.com/t/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.1248.png`,
      },
    ],
    assignRoom: (editedRoomId, flatmateId) => {
      set(state => {
        return {
          rooms: [
            ...state.rooms.filter(room => room.id !== editedRoomId),
            {
              ...state.rooms.find(room => room.id === editedRoomId),
              assigneeId: flatmateId,
            },
          ],
        };
      });
    },
    addTodo: name => {
      set(state => {
        return { todos: [...state.todos, { name, id: nanoid() }] };
      });
    },
    deleteTodo: id => {
      set(state => {
        return { todos: state.todos.filter(todo => todo.id !== id) };
      });
    },
    checkTodo: id => {
      set(state => {
        return {
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
          ),
        };
      });
    },
  };
});

export default useStore;
