import { useState } from 'react'
import { isEmpty } from '../../../../../common/utils/genericFunctions'
import { TRANSLATIONS, DEFUALT_LOCALE } from '../../../constants'

const useLocale = () => {
    const [ locale, setLocale ] = useState(DEFUALT_LOCALE);

    const changeLocale = (locale) => setLocale(locale || 'en')

    const translate = (targetText = 'en', targetLocale = '') => {
        const targetTranslationObj = TRANSLATIONS.find(({text}) => text === targetText)

        if(!targetLocale) return targetTranslationObj[DEFUALT_LOCALE]

        if(isEmpty(targetTranslationObj)) {
            console.log("Translated text not available", translate)
            return targetText
        }
        return targetTranslationObj[targetLocale]
    }

    return { locale, changeLocale, translate }
}

export default useLocale