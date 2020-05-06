import React from "react";
import "../../styles/Header.scss";
import NavLink from "../partials/NavLink";

export default function Nav() {
  return (
    <nav>
      <ul>
        <NavLink path="/">Home</NavLink>
        <NavLink path="/about">About</NavLink>
        <NavLink path="/blog">Blog</NavLink>
        <NavLink path="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
