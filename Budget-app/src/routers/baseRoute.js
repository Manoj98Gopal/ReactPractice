import React, { Suspense, lazy } from "react";
import LoginPage from "../features/components/LoginPage";
// import App from "../App";
import Protected from "../features/auth/Protected";


const App = lazy(() => import("../App"));




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
    path: "/contact",
    element: (
      <div>
        <LoginPage data="contact" />
      </div>
    ),
  },{
    path: "/About",
    element: (
      <div>
        <LoginPage data="About" />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Suspense>
          <Protected>
            <App />
          </Protected>
        </Suspense>
      </div>
    ),
  },
];
