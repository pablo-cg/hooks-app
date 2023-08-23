import { useRef } from 'react';

export const FocusInputApp = () => {
  const inputRef = useRef();

  function setFocus() {
    inputRef.current.select();
  }

  return (
    <section className="border rounded p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Focus Input App</h1>
      <input
        ref={inputRef}
        type="text"
        className="max-w-xs rounded px-2 py-1"
        placeholder="Username"
        name="username"
      />
      <button className="border rounded px-2 max-w-xs" onClick={setFocus}>
        Set Focus
      </button>
    </section>
  );
};
