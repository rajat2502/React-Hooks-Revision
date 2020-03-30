import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "dec":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "inc 2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "dec 2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>
        First Count: {count.firstCounter}
      </p>
      <p>
        Second Count: {count.secondCounter}
      </p>
      <button onClick={() => dispatch({ type: "inc", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "dec", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "inc", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "dec", value: 5 })}>
        Decrement 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "inc 2", value: 1 })}>
          Increment secondCounter
        </button>
        <button onClick={() => dispatch({ type: "dec 2", value: 1 })}>
          Decrement secondCounter
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter2;
