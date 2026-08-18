import 'react'
import GrandChildren from './GrandChildren'

const ChildComponent = () => {
	console.log("As it's parent contains context, checking rerendering even though it don't have any state, props in ChildComponent.jsx")

	return (
		<GrandChildren />
	)
}

export default ChildComponent