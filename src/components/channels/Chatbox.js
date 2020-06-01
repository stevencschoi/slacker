import React, { useState } from "react";
import Input from "../partials/Input";
import Button from "../partials/Button";

import axios from "axios";

export default function Chatbox() {
  // const { state } = useUserData();
  const [message, setMessage] = useState("");

  const handleInputChange = e => {
    e.persist();
    setMessage(e.target.value);
  };

  const submitMessage = e => {
    e.preventDefault();
    console.log("message is:", message);
  };

  return (
    <form onSubmit={submitMessage}>
      <Input
        type="text"
        name="message"
        placeholder="Message user X"
        value={message}
        onChange={handleInputChange}
      />
      <Button>
        <i className="fas fa-paper-plane"></i>
      </Button>
    </form>
  );
}
