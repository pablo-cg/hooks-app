import { useState } from 'react';

export const SimpleFormApp = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });

  const { email, username } = formState;

  function onInputChange({ target }) {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  }

  return (
    <section className="border rounded p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Simple Form App</h1>
      <input
        type="text"
        className="max-w-xs rounded px-2 py-1"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="max-w-xs rounded px-2 py-1"
        placeholder="email@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </section>
  );
};
