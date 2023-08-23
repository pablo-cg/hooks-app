import React from 'react';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const ctx = useContext(UserContext);

  const user = {
    id: 1,
    name: 'Pablo',
    nick: 'dodoria',
    email: 'pablo@dodoria.dev',
  };

  return (
    <>
      <h1>Login Page</h1>
      <pre aria-label="pre">{JSON.stringify(ctx.user, null, 2)}</pre>
      <button onClick={() => ctx.setUser(user)}>Login</button>
    </>
  );
};
