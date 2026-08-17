import 'react';
import useCounter from '../hooks/useCounter';

const CounterComponent = () => {
  const { count,stepDiff, increment, decrement, resetCount, handleStep } = useCounter({ initialValue: 1, maxValue: 10 });

  return (
    <div>
        <h2>useCounter hook</h2>
        <p>Requirement: Implement a custom hook for managing a counter state with increment, decrement, and reset functionality.</p>
        <p>You clicked {count} times</p>
        <input type="number" value={stepDiff} onChange={(e) => handleStep(e.target.value)} label="Increment/Decrement by" />
        <button onClick={() => increment(count + 1)}>Increment</button>
        <button onClick={() => decrement(count - 1)}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default CounterComponent;