import {useState} from 'react'
import useOnClickOutside from '../customHooks/useOnClickOutside'

const ClickOutSideComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useOnClickOutside(()=>setIsOpen(false));
    
    return (
        <div>
            <h2>useOnClickOutside hook</h2>
            <p>Requirement: Implement a custom hook to detect clicks outside a specified element.</p>
            <button onClick={()=>{
                setIsOpen( prevValue => !prevValue)

            }}>Toggle</button>

            {isOpen && <ul ref={ref}>
                <li>Apple</li>
                <li>Mango</li>
                <li>Papaya</li>
                <li>Pineapple</li>
            </ul>}
        </div>
    );
} 

export default ClickOutSideComponent;