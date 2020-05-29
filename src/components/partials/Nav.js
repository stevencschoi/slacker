import React, { useContext } from "react";
import "../../styles/Header.scss";
import NavLink from "./NavLink";
import { UserContext } from "../UserContext";

export default function Nav() {
  const info = useContext(UserContext);
  return (
    <nav>
      <ul>
        <NavLink path="/">
          <i className="fas fa-home"></i>
        </NavLink>
        <NavLink path="/about">
          <i className="far fa-question-circle"></i>
        </NavLink>
        <NavLink path="/profile">
          <i className="fas fa-user"></i>
        </NavLink>
      </ul>
    </nav>
  );
}

// { isLoggedIn ? {info.firstName} : <i className="fas fa-user"></i>}
