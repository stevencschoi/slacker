import React, { useContext } from "react";
import Nav from "./partials/Nav";
import Login from "./partials/Login";
import "../styles/Header.scss";
import { UserContext } from "./UserContext";
import { useUserData } from "../helpers/useUserData";

export default function Header(props) {
  const info = useContext(UserContext);
  const { handleSubmitLogut } = useUserData();

  return (
    <header>
      <div className="logo">
        <img src={info[0].logo} alt="company logo"></img>
      </div>
      <div className="left">
        <h2>{info[0].company}</h2>
      </div>
      <Nav />
      {info[0].isLoggedIn ? <div>Hello, {info[0].firstName}<button onClick={handleSubmitLogut}>Logout</button></div> : <Login />}
      {/* <Login /> */}
    </header>
  );
}

// if user is logged in, display:
// {isLoggedIn ? Hello, info.firstName : Don't have an account? Sign up today!}
