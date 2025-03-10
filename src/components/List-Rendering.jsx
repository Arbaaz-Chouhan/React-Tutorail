import React from "react";

function ListRendering(){
    const person  =  ["Arbaaz","Adnan","Fayyaz"];
    const result = person.map((name, index) => <h2 key={index}>{name}</h2>);

    return  <div>{result}</div>    
}

export default ListRendering; 
