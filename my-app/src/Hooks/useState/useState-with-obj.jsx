import React, {useState} from 'react'

const initState = {
    fname : "Adnan",
    lname : "chouhan",
}

function ObjectUseState() {
const [person,setPerson] = useState(initState);


// This is wrong way (Mutating State)
// const changeName = () => {
//     person.fname = "Arbaaz";
//     person.lname =  "Khan";
//     setPerson(person);
// }

// This is right way (immutable update)
const changeName = () => {
const newPerson = {...person}
        newPerson.fname = "Arbaaz";
        newPerson.lname =  "Khan";
        setPerson(newPerson);
    }

console.log("ObjectUseState Render")

  return (
    <div>
      <button onClick = {changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState;