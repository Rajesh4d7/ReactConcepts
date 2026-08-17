import  'react';
import useThrottle from '../hooks/useThrottle';

const ThrottleComponent = () => {
    const [value, handleThrottle] = useThrottle({delay: 500});

    return (
        <div>
            <h2>useThrottle hook</h2>
            <p>Requirement: Implement a custom hook for throttling function calls.</p>
            <input type="text" placeholder="Type something..." onKeyDown={(e) => handleThrottle(e.target.value)} />
            <p>Throttled Value: {value}</p>
        </div>
    );
}

export default ThrottleComponent;