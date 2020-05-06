import React, { useState } from "react";
import "../../styles/partials/Login.scss";
import Input from "../partials/Input";
import Button from "../partials/Button";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button clicked!");
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form userInfo onSubmit={handleSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={inputs.username}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={inputs.password}
        onChange={handleInputChange}
      />
      <Button loginButton type="submit">
        Login
      </Button>
    </form>
  );
}
