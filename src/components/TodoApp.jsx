import { useTodos } from '../hooks';
import { TodoForm, TodoList } from './todos';

export const TodoApp = () => {
  const { todos, handleAddTodo, handleDeleteTodo, handleToggleTodo, totals } =
    useTodos();

  return (
    <section className="border rounded p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Todo App</h1>

      <div className="grid grid-cols-2 gap-4">
        <section className="flex flex-col gap-4">
          <h2 className="text-lg underline">Todos List:</h2>
          <div className="flex justify-around italic">
            <small>Pendientes: {totals.undone}</small>
            <small>Listos: {totals.done}</small>
            <small>Total: {totals.all}</small>
          </div>

          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </section>

        <TodoForm onAddTodo={handleAddTodo} />
      </div>
    </section>
  );
};
