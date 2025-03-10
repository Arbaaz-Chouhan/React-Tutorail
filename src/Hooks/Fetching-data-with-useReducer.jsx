import React, { useReducer, useEffect } from "react";
import axios from "axios";

// Initial State
const initialState = {
    loading: false,
    data: null,
    error: null
};

// Reducer Function
const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return { loading: true, data: null, error: null };
        case "FETCH_SUCCESS":
            return { loading: false, data: action.payload, error: null };
        case "FETCH_ERROR":
            return { loading: false, data: null, error: action.payload };
        default:
            return state;
    }
};

function FetchDataComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_START" });  // Start fetching
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                dispatch({ type: "FETCH_SUCCESS", payload: response.data });  // Success case
            } catch (error) {
                dispatch({ type: "FETCH_ERROR", payload: error.message });  // Error case
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Fetching Data with useReducer</h2>
            {state.loading && <p>Loading...</p>}
            {state.error && <p>Error: {state.error}</p>}
            {state.data && (
                <ul>
                    {state.data.slice(0, 5).map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FetchDataComponent;
