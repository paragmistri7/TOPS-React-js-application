
import { Component, useState } from "react";


function Example01 ({}) {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1> Count: {count} </h1>
            <br />
            <h1>

        <button onClick={() => setCount( 0)}>Reset</button>
        <button onClick={() => setCount(count -1)}>Down</button>
        <button onClick={() => setCount(count + 1)}>Up</button>
            </h1>
      </>
    );
  }
export default Example01