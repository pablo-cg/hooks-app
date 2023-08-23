const initialState = [
  {
    id: 1,
    todo: 'Ver el Curso de React',
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === 'add') {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();
console.log('🚀 ~ file: intro-reducer.js:14 ~ todos:', todos);

const newTodo = {
  id: 2,
  todo: 'Hacer un portfolio',
  done: false,
};

const addTodoAction = {
  type: 'add',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
console.log('🚀 ~ file: intro-reducer.js:28 ~ todos:', todos);
