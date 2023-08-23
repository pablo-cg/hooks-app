import React from 'react';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const HomePage = () => {
  const ctx = useContext(UserContext);

  return (
    <>
      <h1>Home Page</h1>
      <pre aria-label="pre">{JSON.stringify(ctx?.user, null, 2)}</pre>
    </>
  );
};
