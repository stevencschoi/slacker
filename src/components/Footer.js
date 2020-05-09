import React, { useContext } from "react";
import NavLink from "./partials/NavLink";
import "../styles/Footer.scss";
import { MyContext } from "../components/MyContext";

export default function Footer() {
  const info = useContext(MyContext);
  return (
    <footer>
      {/*<div className="logo">
        <img src={info.logo} alt="company logo"></img>
      </div>*/}
      <div>
        <p>&#169; {info.company} </p>
      </div>
      <div>
        <ul className="social">
          <NavLink path={info.facebook}>
            <i className="fab fa-facebook"></i>
          </NavLink>
          <NavLink path={info.instagram}>
            <i className="fab fa-instagram-square"></i>
          </NavLink>
          <NavLink path={info.twitter}>
            <i className="fab fa-twitter"></i>
          </NavLink>
          <NavLink path={info.linkedin}>
            <i className="fab fa-linkedin"></i>
          </NavLink>
        </ul>
      </div>
    </footer>
  );
}
