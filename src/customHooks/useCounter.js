import { useState} from 'react';


const useCounter = ({ initialValue = 1, maxValue = 1 }) => {
    const [count, setCount] = useState(initialValue);
    const [stepDiff, setStepDiff] = useState(1);

    const increment =() => {
        if(count + stepDiff > maxValue) {
            return;
        }
        setCount(prevCount=>prevCount+stepDiff)
    }

    const decrement =() => {
        if( count - stepDiff < initialValue ) {
            return;
        }
        setCount(prevCount=>prevCount-stepDiff)
    }

    const resetCount = () => {
        setCount(initialValue);
    }

    const handleStep = (value) => {
        const parsedValue = parseInt(value, 10);
        if(!parsedValue) return
        setStepDiff(parsedValue);
    }

    return {count, increment, decrement, resetCount, handleStep, stepDiff};

}

export default useCounter;
