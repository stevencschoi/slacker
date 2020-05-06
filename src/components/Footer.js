import React from "react";
import NavLink from "./partials/NavLink";
import "../styles/Footer.scss";

export default function Footer(props) {
  return (
    <footer>
      <div className="logo">
        <img src={props.logo} alt="company logo"></img>
      </div>
      <div>
        <p>&#169; {props.company} </p>
      </div>
      <div>
        <ul className="social">
          <NavLink path={props.facebook}>
            <i class="fab fa-facebook"></i>
          </NavLink>
          <NavLink path={props.instagram}>
            <i class="fab fa-instagram-square"></i>
          </NavLink>
          <NavLink path={props.twitter}>
            <i class="fab fa-twitter"></i>
          </NavLink>
          <NavLink path={props.linkedin}>
            <i class="fab fa-linkedin"></i>
          </NavLink>
        </ul>
      </div>
    </footer>
  );
}
