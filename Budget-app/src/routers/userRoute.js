import React from "react";
import { Navigate } from "react-router-dom";
import UserList from "../features/admin/UserList";
import UserDashboard from "../features/users/UserDashboard";

export const userRoute = [
  {
    path: "/",
    exact: true,
    element: <Navigate to="/user-dashboard" />,
  },
  {
    path: "/user-dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/friend-list",
    element: <UserList />,
  },
];
