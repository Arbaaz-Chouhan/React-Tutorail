import React, {useState,useCallback} from 'react'
import UseCallbackB from './useCallbackB';

function UseCallbakcA() {
const [add,setAdd] = useState(0);
const [count,setCount] = useState(0);
const Learning =  useCallback(() => {
    // some Opration
},[count]);
  return (
    <div>
      <h1>Learning useCallback</h1>
    <UseCallbackB Learning = {Learning} count = {count}/>
    <h1>{add}</h1>
    <button onClick = {() => setAdd(add + 1)}>Addition</button>
    <h1>{count}</h1>
    <button onClick = {() => setCount(count + 2)}>Increment Count</button>
    </div>
  )
}

export default UseCallbakcA;