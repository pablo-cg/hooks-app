import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../src/components/todos/TodoItem';

describe('<TodoItem /> Tests', () => {
  const todoMock = {
    id: 1,
    description: 'Hacer testing a TodoItem',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe Mostrar el todo pendiente de completar', () => {
    render(
      <TodoItem
        todo={todoMock}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const todoIcon = screen.getByLabelText('todo-icon');
    const todoDescription = screen.getByLabelText('todo-description');

    expect(todoIcon.innerHTML).toContain('❌');
    expect(todoDescription.innerHTML).toContain(todoMock.description);
    expect(todoDescription.className).not.toContain('line-through');
  });

  test('Debe Mostrar el todo completado', () => {
    todoMock.done = true;

    render(
      <TodoItem
        todo={todoMock}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const todoIcon = screen.getByLabelText('todo-icon');
    const todoDescription = screen.getByLabelText('todo-description');

    expect(todoIcon.innerHTML).toContain('✅');
    expect(todoDescription.innerHTML).toContain(todoMock.description);
    expect(todoDescription.className).toContain('line-through');
  });

  test('Debe llamar toggleTodo al hacer click en el div del todo', () => {
    render(
      <TodoItem
        todo={todoMock}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const todoDiv = screen.getByLabelText('todo');

    fireEvent.click(todoDiv);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todoMock.id);
  });

  test('Debe llamar deleteTodo al hacer click en botón borrar', () => {
    render(
      <TodoItem
        todo={todoMock}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const btnDelete = screen.getByLabelText('btn-delete');

    fireEvent.click(btnDelete);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todoMock.id);
  });
});
