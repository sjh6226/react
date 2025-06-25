import React, { useCallback } from 'react';

const NumberButton = React.memo(({ number, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(number);
  }, [number, onClick]);

  return <button onClick={handleClick}>{number}</button>;
});

export default NumberButton;