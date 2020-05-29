import React, { useContext } from "react";
import "../styles/Profile.scss";
import { UserContext } from "./UserContext";

export default function Profile() {
  const info = useContext(UserContext);
  return (
    <>
      <div>
        <img className="default-avatar" src={info.avatar} alt="avatar" />
      </div>
      <h1>
        {info.firstName} {info.lastName}
      </h1>
    </>
  );
}
