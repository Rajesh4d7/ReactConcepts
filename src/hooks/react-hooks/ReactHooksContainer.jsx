import 'react';
import LanguageContainer from './context-examples/language-context/LanguageContainer'
import './ReactHooksContainer.css'

const ReactHooksContainer = () => {
  return (
    <div>
      <h2>React Hooks</h2>
      <div className='reactHooksContainer'>
        <LanguageContainer/>
      </div>
    </div>
  );
}

export default ReactHooksContainer;