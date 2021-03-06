import React, { useContext } from "react";
import NavLink from "./partials/NavLink";
import "../styles/Footer.scss";
import { UserContext } from "./UserContext";

export default function Footer() {
  const info = useContext(UserContext);
  return (
    <footer>
      {/*<div className="logo">
        <img src={info.logo} alt="company logo"></img>
      </div>*/}
      <div>
        <p>&#169; {info[0].company} </p>
      </div>
      <div>
        <ul className="social">
          <NavLink path={info[0].github}>
            <i className="fab fa-github"></i>
          </NavLink>
          <NavLink path={info[0].instagram}>
            <i className="fab fa-instagram-square"></i>
          </NavLink>
          <NavLink path={info[0].twitter}>
            <i className="fab fa-twitter"></i>
          </NavLink>
          <NavLink path={info[0].linkedin}>
            <i className="fab fa-linkedin"></i>
          </NavLink>
        </ul>
      </div>
    </footer>
  );
}
