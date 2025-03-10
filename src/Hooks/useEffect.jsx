import React, { useState, useEffect } from "react";

function UseEffectFn() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Click count: ${count}`;
  }, [count]); 

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default UseEffectFn;
