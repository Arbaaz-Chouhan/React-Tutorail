import { useState, useEffect } from "react";

function UseStat() { // ✅ Capitalized component name
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("contunu");

    }, [])
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

export default UseStat; // ✅ Default export
