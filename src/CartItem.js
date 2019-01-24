import React from 'react'

function CartItem({ id, title, author, price, toggleCart }){
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-2">{title}</div>
        <div className="col-md-2">{author}</div>
        <div className="col-md-2">{price}</div>
        <button className="btn" onClick={()=> toggleCart(id)}>
        </button>
      </div>
    </div>
  )
}

export default CartItem