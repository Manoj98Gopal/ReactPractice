import React, { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import AdminDashboard from "../features/admin/AdminDashboard";
// import UserList from "../features/admin/UserList";

const UserList = lazy(() => import("../features/admin/UserList"));

export const adminRoute = [
  {
    path: "/",
    exact: true,
    element: <Navigate to="/admin-dashboard" />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/user-list",
    element: (
      <Suspense>
        <UserList />
      </Suspense>
    ),
  },
];
