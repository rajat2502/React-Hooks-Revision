import React, { useContext } from "react";
import { CountContext } from "../App";

function Component6() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>Component 6</h1>
      <button onClick={() => countContext.countDispatch("inc")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("dec")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default Component6;
