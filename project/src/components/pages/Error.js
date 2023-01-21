import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

    const errorData = useRouteError()

    console.log("safafsf",errorData)
  return (
    <div>
        <h1>OOPS!</h1>
        <h2>Some thing went wrong</h2>
        <h2>{errorData.status}{" : "}{errorData.statusText}</h2>
    </div>
  )
}

export default Error