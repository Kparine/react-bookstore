import React from 'react'

function CartItem({ id, author, title, price, toggleCart }){
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-2">{title}</div>
        <div className="col-md-2">{author}</div>
        <div className="col-md-2">{"$" + Number(price).toFixed(2)}</div>
        <button className="btn" onClick={()=> toggleCart(id)}>
        </button>
      </div>
    </div>
  )
}

export default CartItem