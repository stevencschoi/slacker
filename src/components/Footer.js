import React from "react";
import "../styles/Footer.scss";

export default function Footer(props) {
  return (
    <footer>
      <div className="logo">
        <img src={props.logo} alt="company logo"></img>
      </div>
      <p>&#169; {props.company} </p>
    </footer>
  );
}
