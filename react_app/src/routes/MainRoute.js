import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import Viewer from '../components/Viewer';

function MainRoute() {
  const routes = useRoutes([
    {
        path:"/",
        element:<HomePage />
    },
    {
      path:"/pdfViewer",
      element:<Viewer />
  }
  ])

  return routes;
}

export default MainRoute