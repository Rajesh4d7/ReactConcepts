import {isEmpty} from '../../../../../common/utils/genericFunctions'

const reducer = () => {
  const initialState = {
    tasks:[{
     id: crypto.randomUUID(),
     task: 'Learn React',
     isCompleted: false
    }]
  };
 
  const taskReducer = (state, {type, payload}) => {
    switch(type) {
      case 'ADD_TASK': {
        if(isEmpty(payload)) {
          return state
        }
        else {
          return ({
            ...state,
            tasks: [...state.tasks, payload]
          })
        }
      }
      case "STATUS_UPDATE": {
        const {id} = payload
        const tasks = state.tasks.map( task => { 
          if( task.id === id ) {
            return ({
              ...task,
              isCompleted: !task.isCompleted
            })
          }
          return task
        })
        return {
          ...state,
          tasks: [...tasks]
        }
      }
      case "DELETE_TASK": {
        const {id} = payload
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== id)
        }
      }
      default:
        return state
    }
  }

  return { initialState, taskReducer }
}

export default reducer

