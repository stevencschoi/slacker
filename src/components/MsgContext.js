import React, { useState } from "react";

const MsgContext = React.createContext([{}, () => {}]);

const MsgContextProvider = props => {
  const [state, setState] = useState({
    msgInputs: {
      message: "",
      receiverId: "",
      senderId: "",
    },
  });

  return (
    <MsgContext.Provider value={[state, setState]}>
      {props.children}
    </MsgContext.Provider>
  );
};

export { MsgContext, MsgContextProvider };
