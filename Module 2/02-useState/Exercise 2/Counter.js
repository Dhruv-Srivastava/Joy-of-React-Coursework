import React from 'react';
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from 'react-feather';

function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick(type) {
    const updatedValue =
      type === 'increaseByOne'
        ? count + 1
        : type === 'increaseByTen'
          ? count + 10
          : type === 'reset'
            ? 0
            : type === 'random'
              ? Math.floor(Math.random() * 100) + 1
              : type === 'decreaseByTen'
                ? count - 10
                : count - 1;

    setCount(updatedValue);
  }

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={() => handleClick('increaseByOne')}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button onClick={() => handleClick('increaseByTen')}>
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={() => handleClick('reset')}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button onClick={() => handleClick('random')}>
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={() => handleClick('decreaseByTen')}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={() => handleClick('decreaseByOne')}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;