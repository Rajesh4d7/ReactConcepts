import { DEFUALT_LOCALE } from '../../../constants'

const useLocaleWithReducer = () => {
	const initialState = {
		locale: DEFUALT_LOCALE,
	}

	const translationReducer = (state, {type, payload}) => {
		switch(type) {
			case 'CHANGE_LOCALE': {
				const { locale } = payload || {}
				if(!locale) {
					return ({
						...state,
						locale: DEFUALT_LOCALE
					})
				}
				return (
					{
						...state,
						locale
					}
				)
			}
			default:
				return state
		}
	}
	return { initialState,  translationReducer }
}

export default useLocaleWithReducer

