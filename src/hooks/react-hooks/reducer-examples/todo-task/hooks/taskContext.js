import {createContext} from 'react'

const TaskContext = createContext({
  state: { tasks: [] },
  dispatch: () => {}
})

export default TaskContext  