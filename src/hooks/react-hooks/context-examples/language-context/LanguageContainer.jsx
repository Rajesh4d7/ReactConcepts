import 'react'
import useLocale from './hooks/useLocale'
import LanguageContext from './contexts/LanguageContext'
import ChildComponent from './components/ChildComponent'

const LanguageContainer = () => {
    const  intl =  useLocale()

    return (
        <LanguageContext.Provider value={intl}>
            <div>
                <h1>Testing locale with  language context</h1>
                <ChildComponent/>
            </div>
        </LanguageContext.Provider>
    )
}

export default LanguageContainer