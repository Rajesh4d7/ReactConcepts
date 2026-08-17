import {useState, useRef} from 'react';

const useThrottle = ({delay = 300}) => {
    const [value, setValue] = useState(null);
    const timerRef = useRef(null);

    const handleThrottle = (newValue) => {
        if(!newValue) return

        if(!timerRef.current) {
           setValue(newValue);
           timerRef.current = setTimeout(() => {
                timerRef.current = null;
           }, delay);
        }
    }

    return [value, handleThrottle];
}

export default useThrottle;