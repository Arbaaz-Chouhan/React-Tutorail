import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [add, setadd] = useState(0);
    const [less, setless] = useState(100);

    const multiplication = useMemo(() => {
        console.log("***********");
        return add * 10;

    }, [add])
    return (
        <div>
            <h1>{add}</h1>
            <button onClick={() => setadd(add + 1)} >add</button>
            {multiplication}
            <h1>{less}</h1>
            <button onClick={() => setless(less - 1)} >less</button>
        </div>
    )
}

export default UseMemo;
