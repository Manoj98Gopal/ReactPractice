import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Contact from "./components/pages/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/pages/Error";
import RestrauntMenu from "./components/pages/RestrauntMenu";
import Profile from "./components/pages/Profile";
import Context from "./utils/Context";
// import Instamart from "./components/pages/Instamart";
import {Provider} from "react-redux"
import store from "./App/store";
import Cart from "./components/pages/Cart";

const Instamart = lazy(() => import("./components/pages/Instamart"));

const Applayout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <>
      <Provider store={store}>
        <Context.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </Context.Provider>
      </Provider>
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restra/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element:<Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
