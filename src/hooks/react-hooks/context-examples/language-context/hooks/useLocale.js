import { useState } from 'react'
import { isEmpty } from '../../../../../common/utils/genericFunctions'

const DEFUALT_LOCALE = 'en'
const useLocale = () => {
    const [ locale, setLocale ] = useState(DEFUALT_LOCALE);

    // assume these are the translated code
    const translations = [
        {
            text: 'hi team how are you',
            en: 'hi team how are you- en',
            arb: 'hi team how are you- arb',
            fr: 'hi team how are you - fr',
        },
        {
            text: "what's up!",
            en: "what's up!- en",
            arb: "what's up!- arb",
            fr: "what's up!- fr",
        }
    ]

    const changeLocale = (locale) => setLocale(locale || 'en')

    const translate = (targetText = 'en', targetLocale = '') => {
        const targetTranslationObj = translations.find(({text}) => text === targetText)

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