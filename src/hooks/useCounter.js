import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const decrement = (value = 1) => {
    setCounter((current) => current - value);
  };

  const increment = (value = 1) => {
    setCounter((current) => current + value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
