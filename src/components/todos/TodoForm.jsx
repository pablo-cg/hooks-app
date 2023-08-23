import { useState } from 'react';
import { useForm } from '../../hooks';

export const TodoForm = ({ onAddTodo }) => {
  const { formState, onInputChange, resetForm } = useForm({
    description: '',
  });

  function addTodo(event) {
    event.preventDefault();

    if (!formState.description.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      description: formState.description.trim(),
      done: false,
    };

    onAddTodo(newTodo);

    resetForm();
  }

  return (
    <form onSubmit={addTodo} className="flex gap-4 justify-between h-min">
      <input
        type="text"
        className="rounded px-2 py-1 flex-1"
        placeholder="¿Qué hay que hacer?"
        name="description"
        value={formState.description}
        onChange={onInputChange}
      />
      <button type="submit" className="border rounded px-2 max-w-xs">
        Add Todo
      </button>
    </form>
  );
};
