import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

function MainRoute() {
  const routes = useRoutes([
    {
        path:"/",
        element:<HomePage />
    }
  ])

  return routes;
}

export default MainRoute