import { useState } from 'react';
import { useCounter } from '../hooks';
import { useMemo } from 'react';

function bomber(iterations = 0) {
  for (let i = 0; i < iterations; i++) {
    console.log('🚀 ~ file: MemoHookApp.jsx:6 ~ bomber ~ iteration');
  }

  return `Bombed ${iterations} times`;
}

export const MemoHookApp = () => {
  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true);
  const bomberMessageMemo = useMemo(() => bomber(counter), [counter]);

  return (
    <section className="border rounded p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Memo Hook App</h1>
      <span>Counter: {counter}</span>
      <span>{bomberMessageMemo}</span>
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
