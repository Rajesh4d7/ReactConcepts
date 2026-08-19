import { useContext } from "react";
import TaskContext from "../hooks/taskContext";

const TaskList = () => {
    const { state: { tasks = [] }, dispatch } = useContext(TaskContext)

    const handleTaskAction = (id, type) => {
        dispatch({
            type,
            payload: { id }
        })
    }

    return (
        <div>
            <h3>To do task list</h3>
            {
                tasks.length > 0 && (<table border="1">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Task Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((item) => {
                            const { id, task, isCompleted } = item || {}
                            return (
                                <tr key={id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={isCompleted}
                                            onChange={() => handleTaskAction(id, 'STATUS_UPDATE')}
                                        />
                                    </td>
                                    <td>{task}</td>
                                    <td>
                                        <button onClick={() => handleTaskAction(id, 'DELETE_TASK')}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>)
            }
        </div>
    )
}

export default TaskList