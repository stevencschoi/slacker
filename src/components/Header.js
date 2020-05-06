import React from "react";
import Nav from "./partials/Nav";
import Login from "./partials/Login";
import "../styles/Header.scss";

export default function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src={props.logo} alt="company logo"></img>
      </div>
      <div>
        <Nav />
      </div>
      <div>
        <Login />
      </div>
    </header>
  );
}
