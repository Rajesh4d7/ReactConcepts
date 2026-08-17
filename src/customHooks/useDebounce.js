import {useState, useRef} from 'react';

const useDebounce = ({delay = 300}) => {
    const [value, setValue] = useState(null);
    const timerRef = useRef(null);

    const handleDebounce = (newValue) => {
        if(!newValue) return

        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            timerRef.current = null;
            setValue(newValue);
        }, delay);
    }

    return [value, handleDebounce];
}

export default useDebounce;