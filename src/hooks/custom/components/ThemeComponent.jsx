import 'react'
import useTheme from '../hooks/useTheme';
import './ThemeComponent.css';

const ThemeComponent = () => {
    const [theme, handleTheme] = useTheme();

    return (
        <div className={`${theme}-theme`}>
            <h2>useTheme hook</h2>
            <p>Requirement: Implement a custom hook for managing theme state with toggle functionality.</p>
            <p>Current theme: {theme}</p>
            <button onClick={handleTheme}>Toggle Theme</button>
        </div>
    )

}

export default ThemeComponent;