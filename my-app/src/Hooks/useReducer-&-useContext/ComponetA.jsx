import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponetA() {
    const countContext = useContext(CountContext);

    return (
        <div>
            Componet A
            <button onClick={() => countContext.countDispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => countContext.countDispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => countContext.countDispatch({ type: "RESET" })}>Reset</button>
        </div>
    )
}

export default ComponetA
