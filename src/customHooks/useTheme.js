import {useState} from 'react';
const themeValue = localStorage.getItem('theme') || 'light';

const useTheme = () => {
    const [theme, setTheme] = useState(themeValue);

    const handleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    }

    return [theme, handleTheme];
}

export default useTheme;