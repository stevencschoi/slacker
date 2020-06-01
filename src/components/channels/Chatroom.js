import React from "react";
import Chatbox from "./Chatbox";

export default function Chatroom() {
  return (
    <div>
      <h3>{/*name of user you are messaging */}</h3>
      <ul>{/* messages display here */}</ul>
      <Chatbox />
    </div>
  );
}
