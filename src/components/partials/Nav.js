import React from "react";
import "../../styles/Header.scss";

export default function Nav(props) {
  return (
    <nav>
      <ul>{props.links}</ul>
    </nav>
  );
}
