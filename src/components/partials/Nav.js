import React, { useContext } from "react";
import "../../styles/Header.scss";
import NavLink from "./NavLink";
import { UserContext } from "../UserContext";

export default function Nav() {
  const info = useContext(UserContext);
  return (
    <nav>
      <ul>
        <NavLink path="/">Home</NavLink>
        <NavLink path="/about">About</NavLink>
        <NavLink path="/profile">{info.firstName}</NavLink>
      </ul>
    </nav>
  );
}
