import { useContext } from "react";
import languageContext from "../hooks/useContextLocale";
import { messages, TRANSLATIONS } from "../../../constants";
import { isEmpty } from "../../../../../common/utils/genericFunctions";

const TestGrandChildren = () => {
	const { state, dispatch } = useContext(languageContext)

	console.log("As it's parent contains context, checking rerendering even though it don't have any state, props in GrandChildren.jsx")

	const handleChange = (e) => {
		const value = e.target.value
		dispatch({
            type: 'CHANGE_LOCALE',
            payload: { locale: value }
        })
	}

	const translate = (targetText) => {
		const targetTranslation = TRANSLATIONS.find(({text}) => text === targetText)

		if(isEmpty(targetTranslation)) {
			return targetText
		}
		return targetTranslation[state.locale]
	}

	return (
		<>
			<select name="Supported Locales" label='Supported Locales' onChange={handleChange} value={state?.locale || ''}>
				<option value=''>Supported Locales</option>
				<option value='en'>English</option>
				<option value='arb'>Arabic</option>
				<option value='fr'>French</option>
			</select>
			<h3>{translate(messages.hiText)}</h3>
			<p>{translate(messages.whatsUpText)}</p>
		</>
	)
}

export default TestGrandChildren