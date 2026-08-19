import {useReducer} from 'react'
import AddTask from './components/AddTask'
import TasksList from './components/TasksList'
import TasksCount from './components/TasksCount'
import reducer from './hooks/taskReducer'
import TaskContext from './hooks/taskContext'

const TaskContainer = () => {
    const { initialState, taskReducer } = reducer()
    const [ state, dispatch ] = useReducer(taskReducer, initialState)

    return (
        <TaskContext.Provider value={{state, dispatch}} >
            <div>
                <h1>To do task using reducer hook</h1>
                <p>Requirement: To do task using useReducer</p>
                <AddTask />
                <TasksList />
                <TasksCount />
            </div>
        </TaskContext.Provider>
    )
}

export default TaskContainer
