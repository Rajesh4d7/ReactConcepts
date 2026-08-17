import {useState, useRef} from 'react';

const usePrevious = () => {
    const [value, setValue] = useState(null);
    const previousValue = useRef(null);

    const handleValue = (newValue) => {
        setValue((prevValue) => {
           previousValue.current = prevValue;
           return newValue;
        });
    }

    return { value, previousValue, handleValue };
}

export default usePrevious;