import 'react'
import TestGrandChildern from './TestGrandChildern'

const TestChildComponent = () => {

    console.log('testing TestChildComponent redendering or not with reducer and context without changing the props,state in TestChildComponent')

    return (
        <>
            <p>TestChildComponent</p>
            <TestGrandChildern />
        </>
    )
}

export default TestChildComponent