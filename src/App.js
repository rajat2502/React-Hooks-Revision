import React from "react";

import "./App.css";
import ComponentA from "./components/ComponentA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Rajat">
        <ChannelContext.Provider value="rajat2502">
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
