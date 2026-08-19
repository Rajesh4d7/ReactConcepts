import {useContext, useRef} from 'react'
import TaskContext from "../hooks/taskContext";

const AddTask = () => {
    const { dispatch } = useContext(TaskContext)
    const taskRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(taskRef.current) {
            dispatch({
                type: 'ADD_TASK',
                payload: {
                    id: crypto.randomUUID(),
                    task: taskRef.current.value,
                    isCompleted: false
                }
            })
        }
    }

    return (
        <div>
            <h3>Add Task Form</h3>
            <form onSubmit={handleSubmit}>
                <input ref={taskRef} type="text" name="task" placeholder="Enter task name" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTask