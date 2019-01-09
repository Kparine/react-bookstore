import React from 'react'


function CartItem({author, title, pages, price }){

  return (
    <div className="collection-item">
      <div className="row">
        <div className="col-md-2">{title}</div>
        <div className="col-md-2">{author}</div>
        <div className="col-md-2">${price}</div>

      </div>
    </div>
  )
}

export default CartItem