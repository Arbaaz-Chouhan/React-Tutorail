import React, { useContext } from "react";
import { data1, data2 } from "./MainUseContext"; // ✅ Correct Import

function UseContextChildC() {
    let fname = useContext(data1);
    let lname = useContext(data2);

    return (
        <h1>Hello, My First Name is {fname} and My Last Name is {lname}</h1>
    );
}

export default UseContextChildC;
