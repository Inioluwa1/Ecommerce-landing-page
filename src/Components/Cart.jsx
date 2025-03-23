import React, {useEffect, useState} from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import "./Cart.css"

export default function Cart({count, setOpenCart}) {
  const [value, setValue] = useState()

  useEffect(() => {
    setValue(125 * count)
  }, [])

  const closeCart = () => {
    setOpenCart(false)
  }

  return (
    <div className='CartContainer'>
      {count > 0? 
      <div>
        <h2> Cart </h2>
        <div className='ItemContainer'>
          <img src='image-product-1.jpg' />
          <div className =  'AboutItem'>
            <p> Fall Limited Edition Sneakers </p>
            <p> $125.00 * {count} <strong> ${value}.00 </strong> </p>
          </div>
          <RiDeleteBin5Line color='grey' size={25} />
        </div>
        <button onClick={closeCart} > Checkout </button>
      </div>
      :
      <div className='EmptyCartContainer'>
        <p className='EmptyCart'> Your cart is empty </p>
      </div>}
    </div>
  )
}
