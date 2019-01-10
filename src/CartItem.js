import React from 'react'
import CartList from './CartList'

function CartItem({ id,author, title, price, toggleCart }){

  return (
    <div className="collection-item">
      <div className="row">
        <div className="col-md-2">{title}</div>
        <div className="col-md-2">{author}</div>
        <div className="col-md-2">${price}</div>
        <button className="btn" onClick={()=> toggleCart(id)}>
        </button>
      </div>
    </div>
  )
}

export default CartItem