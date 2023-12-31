import React from "react";
import { NavLink } from "react-router-dom";
import { currentRole } from "../constants/commons";

function SiderMenu() {
  return (
    <div className="sider">
      <div className="nav">
        <h1>SiderMenu</h1>

        <ul>
          <li>
            <NavLink
              className="a"
              to={
                currentRole == "admin" ? "/admin-dashboard" : "/user-dashboard"
              }
            >
              dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className="a"
              to={currentRole == "admin" ? "/user-list" : "/friend-list"}
            >
              list
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SiderMenu;
