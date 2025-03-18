import React, { useState } from "react";
import axios from "axios";

function PostRequest() {
    // State to store fname & lname
    const [formData, setFormData] = useState({fname: "",lname: ""});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        axios.post("https://jsonplaceholder.typicode.com/posts", formData)
            .then((response) => {
                console.log("Response Data:", response.data);
                alert("Data Submitted Successfully!");
            })
            
    };

    return (
        <div>
            <h2>Axios POST Request</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"name="fname" placeholder="Enter First Name" value={formData.fname} onChange={handleChange} required/>
                <br />
                <input type="text" name="lname" placeholder="Enter Last Name" value={formData.lname} onChange={handleChange} required/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostRequest;
