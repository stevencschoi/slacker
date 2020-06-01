import React, { useContext } from "react";
import Button from "./partials/Button";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../styles/Sidebar.scss";
import { UserContext } from "./UserContext";

export default function Sidebar(props) {
  const info = useContext(UserContext);
  return (
    <div className="sidebar-container">
      <div className="workplaces">
        {/* map all workplaces user logs in to */}
        wrkpls
      </div>
      <div className="sidebar-head-body">
        <div className="sidebar-head">
          <div className="sidebar-info">
            <h3>Workspace Name {/* info.workspaceName */}</h3>
            <h4>
              {info[0].firstName} {info[0].lastName}
            </h4>
          </div>
          <Link to="/chat/new">
            <Button message>
              <i className="far fa-edit"></i>
            </Button>
          </Link>
        </div>
        <div className="default-links">stuff</div>
        <div className="channels">
          <h3>Channels</h3>
          {/* map all channels*/}
          channels
        </div>
        <div className="dm">
          <h3>Direct messages</h3>
          {/* map recent IM conversations*/}
          direct messages
        </div>
      </div>
      <Footer />
    </div>
  );
}
