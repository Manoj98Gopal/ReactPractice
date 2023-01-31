import React, { useContext } from 'react'
import Context from '../utils/Context'



const Footer = () => {

  const {user} = useContext(Context)

    return(
      <h3 className='text-center text-cyan-800 p-2 m-5'> This web site developed by {user.email}</h3>
    )
  }


export default Footer