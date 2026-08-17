import 'react';
import usePrevious from '../customHooks/usePrevious';

const PreviousValue = () => {
  const { value, previousValue, handleValue } = usePrevious();

  return (
    <div>
        <h2>usePrevious hook</h2>
        <p>Requirement: Implement a custom hook to track the previous value of a state variable.</p>
        <input type="text" value={value || ''} onChange={(e) => handleValue(e.target.value)} placeholder="Type something..." />
        <p>Current Value: {value}</p>
        <p>Previous Value: {previousValue.current}</p>
    </div>
  );
}

export default PreviousValue;