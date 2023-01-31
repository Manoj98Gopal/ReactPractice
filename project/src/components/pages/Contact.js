import React, { useContext } from 'react'
import Context from '../../utils/Context';

function Contact() {

  const {user} = useContext(Context);

  console.log(user);

  return (
    <>
    <h1>Contact us</h1>
    <h1 className='text-xl p-2  font-bold'>{user.name}</h1>
    <h1 className='text-xl p-2  font-bold'>{user.email}</h1>

    </>
  )
}

export default Contact