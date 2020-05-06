import React from "react";
import Login from "./partials/Login";

export default function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src={props.logo} alt="company logo"></img>
      </div>
      <div>
        <Login />
      </div>
    </header>
  );
}
