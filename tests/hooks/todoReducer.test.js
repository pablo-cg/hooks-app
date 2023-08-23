import { todoReducer } from '../../src/hooks/todoReducer';

describe('todoReducer Tests', () => {
  const initialState = [
    {
      id: 1,
      description: 'Test todoReducer',
      done: false,
    },
  ];

  test('Debe regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('Debe agregar un todo', () => {
    const action = {
      type: 'add',
      payload: {
        id: 2,
        description: 'Test agregar un todo',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Debe eliminar un todo', () => {
    const action = {
      type: 'delete',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('Debe marcar un todo en done', () => {
    const action = {
      type: 'toggle',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    const todo = newState.find((item) => item.id === action.payload);

    expect(todo.done).toBeTruthy();
  });
});
