import { memo } from 'react';

export const SpanCounter = memo(({ value }) => {
  console.log('🚀 ~ file: SpanCounter.jsx:5 ~ SpanCounter ');

  return <span>Counter: {value}</span>;
});
