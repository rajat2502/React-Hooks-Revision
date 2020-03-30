import React, { useContext } from "react";

import { UserContext, ChannelContext } from "../App";

function ComponentB() {
  const user = useContext(UserContext);
  const context = useContext(ChannelContext);

  return (
    <div>
      {user} - {context}
    </div>
  );
}

export default ComponentB;
