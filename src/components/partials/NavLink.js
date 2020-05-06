import React from "react";
import "../../styles/Header.scss";
const classNames = require("classnames");

export default function NavLink(props) {
  const linkClass = classNames({});
  return (
    <a href={props.path}>
      <li className={linkClass}>{props.children}</li>
    </a>
  );
}
