import React, { useContext } from 'react'
import { CountContext } from '../../App'
function ComponetB() {
    const countContext = useContext(CountContext);

    return (
        <div>
            Componet B
            <button onClick={() => countContext.countDispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => countContext.countDispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => countContext.countDispatch({ type: "RESET" })}>Reset</button>
        </div>
    )
}


export default ComponetB
