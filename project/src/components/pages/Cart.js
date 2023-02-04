import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {clearCart } from '../../utils/cartSlice'


function Cart() {

    const disptch = useDispatch();

    const clear = () => {

        disptch(clearCart())
    }


  return (
    <div>
        <h1>Hello I am cart </h1>
        <button onClick={() => clear()}>clear</button>
    </div>
  )
}

export default Cart