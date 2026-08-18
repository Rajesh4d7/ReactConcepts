import { useContext } from "react";
import languageContext from "../contexts/LanguageContext";

const messages = {
    whatsUpText : "what's up!",
    hiText: "hi team how are you"
}

const GrandChildren = () => {
    const { locale, changeLocale, translate } = useContext(languageContext)


    const handleChange = (e) => {
        const value =  e.target.value
        changeLocale(value)
    }

    return (
        <>
             <select name="Supported Locales" label='Supported Locales' onChange={handleChange} >
                <option value=''>Supported Locales</option>
                <option value='en'>English</option>
                <option value='arb'>Arabic</option>
                <option value='fr'>French</option>
             </select>
            <h3>{translate(messages.hiText, locale)}</h3>
            <p>{translate(messages.whatsUpText, locale)}</p>
           
        </>
    )
}

export default GrandChildren