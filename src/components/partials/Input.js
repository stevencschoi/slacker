import React from "react";
import "../../styles/partials/Input.scss";
const classNames = require("classnames");

export default function Input(props) {
  const inputClass = classNames({});
  return (
    <input
      className={inputClass}
      id={props.id}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
