import React, { createContext, useContext,useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';
import { findItemIndexById } from '../utils/findItemIndexById';
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider = ({children}: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData)
  return(
    <AppStateContext.Provider value={{state, dispatch}}>
      {children}
    </AppStateContext.Provider>
  )
}
export const useAppState = () => {
  return useContext(AppStateContext)
}

type Action = 
| {
  type: "ADD_LIST"
  payload:string
  }
| {
  type: "ADD_TASK"
  payload:{ text: string; taskId:string}
  }


const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST":{
      const visibilityExemple = "Too visible"
      return {
        ...state,
        lists: [
          ...state.lists,
          {id:uuidv4(), text: action.payload, tasks:[]}
        ]
      }
    }
    case "ADD_TASK": {
      const visibilityExemple = "Too visible"
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.taskId
      )
      state.lists[targetLaneIndex].tasks.push({
        id: uuidv4(),
        text: action.payload.text
      })
      return {
        ...state
      }
    }
    default: { 
      return state
    }
  }
}

const appData: AppState = {
  lists: [
    {
      id:"0",
      text:"To Do",
      tasks:[{ id:"c0", text:"Create Component"}]
    },
    {
      id:"0",
      text:"In Progress",
      tasks:[{ id:"c2", text:"Learning Typescript"}]
    },
    {
      id:"0",
      text:"Done",
      tasks:[{ id:"c3", text:"Almost finish my tasks"}]
    },
  ],
}

interface AppStateContextProps {
  state: AppState
  dispatch: AppState
}
interface Task {
  id: string,
  text: string
}
interface List {
  id: string,
  text: string,
  tasks: Task[]
}

export interface AppState {
  lists: List[]
}


