import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const ImgCarrito = "https://imgs.search.brave.com/hhJ_TLyEPSm-AkUwXT51t62PYJVrlgESvDIAHPeZEOw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/OWJlZGIzODdhMjE2/ZDBiMDUyZjEyOGQu/cG5n"
  return (
    <div>
        <img className='imgCarrito' src={ImgCarrito} alt="imagen del carrito de compras"></img>
        <strong>4</strong>
    </div>
  )
}

export default CartWidget