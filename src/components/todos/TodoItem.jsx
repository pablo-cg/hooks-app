export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="flex justify-between border rounded p-2">
      <div
        aria-label="todo"
        onClick={() => onToggleTodo(todo.id)}
        className="flex gap-1"
      >
        <span aria-label="todo-icon" className="text-base">
          {todo.done ? '✅' : '❌'}
        </span>
        <span
          aria-label="todo-description"
          className={todo.done ? 'line-through' : ''}
        >
          {todo.description}
        </span>
      </div>
      <button
        aria-label="btn-delete"
        onClick={() => onDeleteTodo(todo?.id)}
        className="border rounded px-2 max-w-xs border-red-500 text-red-50 hover:bg-red-500"
      >
        Borrar
      </button>
    </li>
  );
};
