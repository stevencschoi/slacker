import React, { useContext } from "react";
import Nav from "./partials/Nav";
import Login from "./partials/Login";
import Button from "./partials/Button";
import "../styles/Header.scss";
import { UserContext } from "./UserContext";
import { useUserData } from "../helpers/useUserData";

export default function Header(props) {
  const info = useContext(UserContext);
  const { handleSubmitLogout } = useUserData();

  return (
    <header>
      <div className="logo">
        <img src={info[0].logo} alt="company logo"></img>
      </div>
      <div className="left">
        <h2>{info[0].company}</h2>
      </div>
      <Nav />
      {info[0].isLoggedIn ? (
        <div>
          Hello, {info[0].firstName}
          <Button onClick={handleSubmitLogout}>Logout</Button>
        </div>
      ) : (
        <Login />
      )}
    </header>
  );
}
