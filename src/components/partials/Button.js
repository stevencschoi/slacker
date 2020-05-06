import React from "react";
import "../../styles/partials/Button.scss";
const classNames = require("classnames");

export default function Button(props) {
  // add class to button based on props
  const buttonClass = classNames({
    "btn btn-sm follow btn-primary": props.default,
    "login-button": props.loginButton,
  });
  return (
    <button
      className={buttonClass}
      onSubmit={props.onSubmit}
      // disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
