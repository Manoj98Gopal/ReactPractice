import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/pages/About";
import Service from "./components/pages/Service"
import Contact from "./components/pages/Contact"
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Error from "./components/pages/Error";
import RestrauntMenu from "./components/pages/RestrauntMenu";
import Profile from "./components/pages/Profile";


const Applayout = () => {

  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    
    </>
  );
}

const appRoute = createBrowserRouter([
  {
    path:"/",
    element:<Applayout />,
    errorElement:<Error />,
    children:[{
      path:"/",
      element:<Body />
    },
    {
      path:"/about",
      element:<About />,
      children:[{
        path:"profile",
        element:<Profile />
      }]
    },
    {
      path:"/service",
      element:<Service />
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"/restra/:id",
      element:<RestrauntMenu />
    }
  ]
  },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute}/>);
