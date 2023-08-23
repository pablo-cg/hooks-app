import { useState } from 'react';
import { ButtonIncrement } from './ButtonIncrement';
import { useCallback } from 'react';

export const CallbackHookApp = () => {
  const [counter, setCounter] = useState(20);

  const increment = useCallback(() => setCounter((curr) => curr + 1), []);

  return (
    <section className="border rounded p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Callback Hook App</h1>
      <span>Counter: {counter}</span>
      <div className="flex gap-3">
        <ButtonIncrement increment={increment} />
      </div>
    </section>
  );
};
