import {useReducer} from 'react'
import LanguageContext from './hooks/useContextLocale'
import getlocaleReducer from './hooks/useLocaleWithReducer'
import TestChildComponent from './components/TestChildComponent'

const LanguageContainerContextReducer = () => {
    const {initialState, translationReducer} = getlocaleReducer()
    const [state, dispatch] = useReducer( translationReducer, initialState)
    
   return ( 
    <LanguageContext.Provider value={{state, dispatch}} >
        <div>
            <h1>Localization changes with Reducer + Context</h1>
            <p>Requirement: implimenting the locale translation using context + reducer</p>
            <TestChildComponent />
        </div>
    </LanguageContext.Provider>
   )
}

export default LanguageContainerContextReducer