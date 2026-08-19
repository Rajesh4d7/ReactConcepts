import { useContext } from 'react'
import TaskContext from './../hooks/taskContext'

const TasksCount = () => {
    const { state: {tasks = []} } = useContext(TaskContext) 

    const completedTaskCount = tasks.filter(task=> task.isCompleted).length
    
    return (
        <div>
            <p>Completed Tasks: {completedTaskCount}</p>
            <p>In progress Tasks: {tasks.length - completedTaskCount}</p    >
        </div>
    )
}

export default TasksCount