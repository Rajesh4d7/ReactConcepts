import { useContext } from "react";
import languageContext from "../contexts/LanguageContext";
import { messages } from "../../../constants";

const GrandChildren = () => {
	const { locale, changeLocale, translate } = useContext(languageContext)

	console.log("As it's parent contains context, checking rerendering even though it don't have any state, props in GrandChildren.jsx")

	const handleChange = (e) => {
		const value = e.target.value
		changeLocale(value)
	}

	return (
		<>
			<select name="Supported Locales" label='Supported Locales' onChange={handleChange}>
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