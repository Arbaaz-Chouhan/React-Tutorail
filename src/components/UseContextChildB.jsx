import React from "react";
import UseContextChildC from "./UseContextChildC"; // ✅ Correct Import

function UseContextChildB() {
    return (
        <div>
            <UseContextChildC />
        </div>
    );
}

export default UseContextChildB;
