import React from 'react'

function Child({ name }) {

    console.log("Child Render");
    return (
        <div>
            <h1>Name : {name}</h1>
        </div>
    )
}

export default React.memo(Child)
