import React, { useState } from "react";

const initState = ["Adnan", "chouhan"];

function ArrayUseState() {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
//     persons.push("Arbaaz");
//     persons.push("Khan");
//     setPersons(persons);

const newPersons = [...persons];
newPersons.push("Arbaaz");
newPersons.push("Khan");
setPersons(newPersons);
  };

  console.log("ArrayUseState Render");
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key = {person}>{person}</div>
      ))}
    </div>
  );
}

export default ArrayUseState;