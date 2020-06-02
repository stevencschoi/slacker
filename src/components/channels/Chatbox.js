import React from "react";
import Input from "../partials/Input";
import Button from "../partials/Button";
import "../../styles/channels/Chatbox.scss";

import { useMsgData } from "../../helpers/useMsgData";

export default function Chatbox() {
  const { state, handleMsgChange, handleMsgSubmit } = useMsgData();

  return (
    <form onSubmit={handleMsgSubmit}>
      <Input
        type="textarea"
        name="message"
        placeholder="Message user X"
        value={state.msgInputs.message}
        onChange={handleMsgChange}
      />
      <Button type="submit">
        <i className="fas fa-paper-plane"></i>
      </Button>
    </form>
  );
}
