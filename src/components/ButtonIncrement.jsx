import React from 'react';

export const ButtonIncrement = React.memo(({ increment }) => {
  console.log(
    '🚀 ~ file: ButtonIncrement.jsx:8 ~ ButtonIncrement ~ ButtonIncrement',
  );
  return (
    <button className="border rounded px-2" onClick={() => increment()}>
      +1
    </button>
  );
});
