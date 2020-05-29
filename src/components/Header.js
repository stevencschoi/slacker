import React, { useContext } from "react";
import Nav from "./partials/Nav";
import Login from "./partials/Login";
import "../styles/Header.scss";
import { UserContext } from "./UserContext";

export default function Header(props) {
  const info = useContext(UserContext);
  return (
    <header>
      <div className="logo">
        <img src={info.logo} alt="company logo"></img>
      </div>
      <h2>{info.company}</h2>
      <div>
        <Nav />
      </div>
      <div>
        <Login />
      </div>
    </header>
  );
}
