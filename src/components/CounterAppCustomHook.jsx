import { useCounter } from '../hooks';

export const CounterAppCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <section className="border rounded p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Counter App With Custom Hook</h1>
      <span>Counter: {counter}</span>
      <div className="flex gap-3">
        <button className="border rounded px-2" onClick={reset}>
          Reset
        </button>
        <button className="border rounded px-2" onClick={() => decrement()}>
          -1
        </button>
        <button className="border rounded px-2" onClick={() => decrement(5)}>
          -5
        </button>
        <button className="border rounded px-2" onClick={() => decrement(10)}>
          -10
        </button>
        <button className="border rounded px-2" onClick={() => increment()}>
          +1
        </button>
        <button className="border rounded px-2" onClick={() => increment(5)}>
          +5
        </button>
        <button className="border rounded px-2" onClick={() => increment(10)}>
          +10
        </button>
      </div>
    </section>
  );
};
