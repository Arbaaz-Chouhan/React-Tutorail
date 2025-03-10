import React, { createContext } from "react";
import UseContextChildA from "./UseContextChildA"; // ✅ Correct Import

// Creating Context
export const data1 = createContext();
export const data2 = createContext();

function MainUseContext() {
    let fname = "Arbaaz";
    let lname = "Chouhan";

    return (
        <data1.Provider value={fname}>
            <data2.Provider value={lname}>
                <UseContextChildA /> {/* ✅ Correct Component Usage */}
            </data2.Provider>
        </data1.Provider>
    );
}

export default MainUseContext;
