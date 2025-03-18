import React, { useState } from 'react'
import Child from './Child';
function Parent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Arbaaz");
    console.log("Parent Render");

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>count</button>
            <button onClick={() => setName("Adnan")}>change</button>
            <Child name={name} />
        </div>
    )
}

export default Parent
