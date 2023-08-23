import { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { useState } from 'react';

function initTodos() {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initTodos);
  const [totals, setTotals] = useState({
    done: 0,
    undone: 0,
    all: 0,
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || []);

    setTotals({
      done: todos.filter((todo) => todo.done).length,
      undone: todos.filter((todo) => !todo.done).length,
      all: todos.length,
    });
  }, [todos]);

  function handleAddTodo(todo) {
    const action = {
      type: 'add',
      payload: todo,
    };

    dispatch(action);
  }

  function handleDeleteTodo(todoId) {
    const action = {
      type: 'delete',
      payload: todoId,
    };

    dispatch(action);
  }

  function handleToggleTodo(todoId) {
    const action = {
      type: 'toggle',
      payload: todoId,
    };

    dispatch(action);
  }

  return {
    todos,
    totals,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
