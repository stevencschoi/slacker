import React from "react";
import Input from "../partials/Input";
import Chatbox from "./Chatbox";
import "../../styles/channels/Chatroom.scss";

import { useMsgData } from "../../helpers/useMsgData";

export default function Chatroom() {
  const { state, findUser } = useMsgData();
  return (
    <div className="chatroom">
      <Input
        type="text"
        name="receiver"
        placeholder="Type the name of the person"
        value={state.msgInputs.receiver}
        onChange={findUser}
      />
      <ul>{/* messages display here */}</ul>
      <Chatbox />
    </div>
  );
}
