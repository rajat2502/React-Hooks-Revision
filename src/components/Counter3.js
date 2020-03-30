import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <p>
        Count: {count}
      </p>
      <button onClick={() => dispatch("inc")}>Increment</button>
      <button onClick={() => dispatch("dec")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        <p>
          Count Two: {countTwo}
        </p>
        <button onClick={() => dispatchTwo("inc")}>Increment</button>
        <button onClick={() => dispatchTwo("dec")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default Counter3;
