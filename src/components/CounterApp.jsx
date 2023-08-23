import { useState } from 'react';

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <section className="border rounded p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Counter App</h1>
      <span>Counter: {counter}</span>
      <div className="flex gap-3">
        <button
          className="border rounded px-2"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
        <button
          className="border rounded px-2"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
        <button
          className="border rounded px-2"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
      </div>
    </section>
  );
};
