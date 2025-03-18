import React from "react";
import UseContextChildB from "./UseContextChildB"; // ✅ Correct Import

function UseContextChildA() {
    return (
        <div>
            <UseContextChildB />
        </div>
    );
}

export default UseContextChildA;
