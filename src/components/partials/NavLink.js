import React from "react";
import "../../styles/Header.scss";
import { Link } from "react-router-dom";
const classNames = require("classnames");

export default function NavLink(props) {
  const linkClass = classNames({});
  return (
    <Link to={props.path}>
      <li className={linkClass}>{props.children}</li>;
    </Link>
  );
}
