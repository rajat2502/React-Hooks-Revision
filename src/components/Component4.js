import React, { useContext } from "react";
import { CountContext } from "../App";

function Component4() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>Component 4</h1>
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

export default Component4;
