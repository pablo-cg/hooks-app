import { useForm } from '../hooks';

export const SimpleFormAppCustomHook = () => {
  const { onInputChange, formState, resetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  return (
    <section className="border rounded p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">
        Simple Form App With Custom Hook
      </h1>
      <input
        type="text"
        className="max-w-xs rounded px-2 py-1"
        placeholder="Username"
        name="username"
        value={formState.username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="max-w-xs rounded px-2 py-1"
        placeholder="email@email.com"
        name="email"
        value={formState.email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="max-w-xs rounded px-2 py-1"
        placeholder="Password"
        name="password"
        value={formState.password}
        onChange={onInputChange}
      />
      <button className="border rounded px-2 max-w-xs" onClick={resetForm}>
        Reset
      </button>
    </section>
  );
};
