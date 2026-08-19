import 'react';
import LanguageContainerContextState from './context-examples/language-context/LanguageContainerContextState'
import LanguageContainerContextReducer from './reducer-context-examples/locale-context-reducer/LanguageContainerContextReducer'
import TaskContainer from './reducer-examples/todo-task/TaskContainer'
import './ReactHooksContainer.css'

const ReactHooksContainer = () => {
  return (
    <div>
      <h2>React Hooks</h2>
      <div className='reactHooksContainer'>
        <LanguageContainerContextState/>
        <LanguageContainerContextReducer />
        <TaskContainer />
      </div>
    </div>
  );
}

export default ReactHooksContainer;