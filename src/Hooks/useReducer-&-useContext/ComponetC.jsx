import React, { useContext } from 'react'
import { CountContext } from '../../App'
function ComponetC() {
    const countContext = useContext(CountContext);

    return (
        <div>
            Componet C
            <button onClick={() => countContext.countDispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => countContext.countDispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => countContext.countDispatch({ type: "RESET" })}>Reset</button>
        </div>
    )
}


export default ComponetC
