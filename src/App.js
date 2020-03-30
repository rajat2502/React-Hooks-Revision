import React, { useReducer } from "react";

import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
// import ComponentA from "./components/ComponentA";
// import Counter1 from "./components/Counter1";
// import Counter2 from "./components/Counter2";
// import Counter3 from "./components/Counter3";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

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

export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      Count - {count}
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <Component1 />
        <Component2 />
        <Component3 />
      </CountContext.Provider>
      {/* <UserContext.Provider value="Rajat">
        <ChannelContext.Provider value="rajat2502">
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
    </div>
  );
}

export default App;
