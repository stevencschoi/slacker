import React from "react";
import "../../styles/partials/Login.scss";
import Input from "./Input";
import Button from "./Button";

import { useUserData } from "../../helpers/useUserData";

export default function Login() {
  const { state, handleSubmitLogin, handleInputChange } = useUserData();

  return (
    <div className="login-state">
      <form onSubmit={handleSubmitLogin}>
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
      <div className="register-words">
        Don't have an account? <a href="/register">Sign up</a> today!
      </div>
    </div>
  );
}
