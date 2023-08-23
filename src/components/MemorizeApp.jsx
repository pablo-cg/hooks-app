import { useState } from 'react';
import { useCounter } from '../hooks';
import { SpanCounter } from './SpanCounter';

export const MemorizeApp = () => {
  const { counter, increment } = useCounter(420);
  const [show, setShow] = useState(true);

  return (
    <section className="border rounded p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Memorize App</h1>
      <SpanCounter value={counter} />
      <div className="flex gap-3">
        <button className="border rounded px-2" onClick={() => increment()}>
          +1
        </button>
        <button className="border rounded px-2" onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
    </section>
  );
};
