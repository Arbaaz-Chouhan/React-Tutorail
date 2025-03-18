import React, { useState } from 'react'

function SimpleForm() {
    const [name, setName] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted with name: ${name} `);  
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>UserName</label>
                <input type="text"    onChange={(e) => setName(e.target.value)}/>
            </div>

            <div>
                <label>email</label>
                <input type="email" />
                
            </div>

            <button type="sumbit">Sumbit</button>
        </form>
    )
};

export default SimpleForm