import React, { useContext } from "react";
import Button from "./partials/Button";
import Footer from "./Footer";
import "../styles/Sidebar.scss";
import { UserContext } from "./UserContext";

export default function Sidebar(props) {
  const info = useContext(UserContext);
  return (
    <div className="sidebar-container">
      <div className="workplaces">
        {/* map all workplaces user logs in to */}
        wkpls
      </div>
      <div className="sidebar-head-body">
        <div className="sidebar-head">
          <div className="sidebar-info">
            <h3>Workspace Name {/* info.workspaceName */}</h3>
            <h4>
              {info.firstName} {info.lastName}
            </h4>
          </div>
          <Button message>
            <i className="far fa-edit"></i>
          </Button>
        </div>
        <div className="channels">
          {/* map all channels*/}
          channels
        </div>
      </div>
      <Footer />
    </div>
  );
}
