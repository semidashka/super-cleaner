import create from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create(set => {
  return {
    rooms: [
      { name: 'Kitchen', id: nanoid(), assignee: null, status: true },
      { name: 'Bathroom', id: nanoid(), assignee: null, status: false },
      { name: 'Hall', id: nanoid(), assignee: null, status: false },
      { name: 'Living-room', id: nanoid(), assignee: null, status: false },
    ],
    flatmates: [
      {
        name: 'Maria',
        id: '777',
        photo: `https://randomuser.me/api/portraits/women/7.jpg`,
      },
      {
        name: 'Eugen',
        id: nanoid(),
        photo: `https://randomuser.me/api/portraits/men/7.jpg`,
      },
      {
        name: 'Daria',
        id: nanoid(),
        photo: `https://randomuser.me/api/portraits/women/8.jpg`,
      },
      {
        name: 'Katze',
        id: nanoid(),
        photo: `https://sm.mashable.com/t/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.1248.png`,
      },
    ],
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
          assignedRooms: flatmateId => set(state => {}),
        };
      });
    },
  };
});

export default useStore;
