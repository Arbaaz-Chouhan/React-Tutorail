import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

function DocTitleTwo() {
    const [add, setadd] = useState(0);

    useDocumentTitle(add);
    
    return (
        <div>
            <button onClick={() => setadd(add+1) }>add</button>
        </div>
    )

}

export default DocTitleTwo

