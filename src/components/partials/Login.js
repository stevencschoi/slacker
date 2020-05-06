import React from "react";
import "../../styles/partials/Login.scss";
import Input from "../partials/Input";
import Button from "../partials/Button";

import { useUserData } from "../../helpers/useUserData";

export default function Login() {
  const { state, handleSubmit, handleInputChange } = useUserData();

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={state.inputs.username}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={state.inputs.password}
        onChange={handleInputChange}
      />
      <Button loginButton type="submit">
        Login
      </Button>
    </form>
  );
}
