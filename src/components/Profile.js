import React, { useContext } from "react";
import Button from "./partials/Button";
import "../styles/Profile.scss";
import { UserContext } from "./UserContext";

export default function Profile() {
  const info = useContext(UserContext);
  return (
    <div className="profile">
      <header>
        <h3>Profile</h3>
        <Button collapse>
          <i className="fas fa-times"></i>
        </Button>
      </header>
      <div className="profile-pic">
        <img src={info.avatar} alt="avatar" />
      </div>
      <div className="profile-actions">
        <Button>Message</Button>
        <Button>Edit Profile</Button>
        <Button>
          <i className="fas fa-ellipsis-v"></i>
        </Button>
      </div>
      <div>
        <h2>
          {info.firstName} {info.lastName}
        </h2>
      </div>
    </div>
  );
}

// if user is online, display:
// {isOnline && <i className="fas fa-circle"></i>}
// {!isOnline && <i className="far fa-circle"></i>}
