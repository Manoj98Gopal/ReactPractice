import React from "react";
import SiderMenu from "./SiderMenu";
import { useRoutes } from "react-router-dom";
import { adminRoute } from "../routers/adminRoute";
import { userRoute } from "../routers/userRoute";
import { currentRole } from "../constants/commons";

function MainLayout() {

  let Route;

  if (currentRole === "admin") {
    Route = useRoutes(adminRoute);
  } else {
    Route = useRoutes(userRoute);
  }

  return (
    <div className="mainlayout">
      <SiderMenu />
      {Route && Route}
    </div>
  );
}

export default MainLayout;
