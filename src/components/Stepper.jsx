import { useState } from "react";

export default function Stepper({ count: _count = 0, onChange = () => {} }) {
  const [count, setCount] = useState(_count);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div>
      <button data-cy="decrement" data-testid='decrement' onClick={handleDecrement}>
        -
      </button>
      <span data-cy="counter" data-testid='count'>{count}</span>
      <button data-cy="increment" data-testid='increment' onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
