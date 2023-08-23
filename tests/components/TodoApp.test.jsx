import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/components/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

const mockTodos = [
  { id: 1, description: 'Test Todo Mock 1', done: false },
  { id: 2, description: 'Test Todo Mock 2', done: true },
];

const mockUseTodosReturn = {
  todos: mockTodos,
  totals: {
    done: 1,
    undone: 1,
    all: 2,
  },
  handleAddTodo: jest.fn(),
  handleDeleteTodo: jest.fn(),
  handleToggleTodo: jest.fn(),
};

describe('<TodoApp /> Tests', () => {
  test('Debe mostrar el componente correctamente', () => {
    useTodos.mockReturnValue(mockUseTodosReturn);

    render(<TodoApp />);

    expect(screen.getByText('Test Todo Mock 1')).toBeTruthy();
    expect(screen.getByText('Test Todo Mock 2')).toBeTruthy();
    expect(screen.getByRole('textbox').name).toBe('description');
  });
});
