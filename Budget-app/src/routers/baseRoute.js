import React from "react";
import LoginPage from "../features/components/LoginPage";
import App from "../App";
import Protected from "../features/auth/Protected";

export const baseRoute = [
  {
    path: "/admin-login",
    element: (
      <div>
        <LoginPage data="Admin" />
      </div>
    ),
  },
  {
    path: "/user-login",
    element: (
      <div>
        <LoginPage data="User" />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Protected>
          <App />
        </Protected>
      </div>
    ),
  },
];
