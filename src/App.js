import React from "react";

import "./App.css";
// import DataFetching1 from "./components/DataFetching1";
import DataFetching2 from "./components/DataFetching2";

// import ComponentA from "./components/ComponentA";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <DataFetching1 /> */}
      <DataFetching2 />
      {/* <UserContext.Provider value="Rajat">
        <ChannelContext.Provider value="rajat2502">
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
