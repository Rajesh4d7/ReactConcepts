import 'react';
import useDebounce from '../hooks/useDebounce';

const DebounceComponent = () => {
    const [value, handleDebounce] = useDebounce({delay: 500});

    return (
        <div>
            <h2>useDebounce hook</h2>
            <p>Requirement: Implement a custom hook for debouncing function calls.</p>
            <input type="text" placeholder="Type something..." onKeyDown={(e) => handleDebounce(e.target.value)} />
            <p>Debounced Value: {value}</p>
        </div>
    );
}

export default DebounceComponent;