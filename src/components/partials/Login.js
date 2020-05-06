import React from "react";
import "../../styles/partials/Login.scss";
import Button from "../partials/Button";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button clicked!");
  };
  return (
    <form className="user-info" onSubmit={handleSubmit}>
      <Button loginButton type="submit">
        Login
      </Button>
    </form>
  );
}
