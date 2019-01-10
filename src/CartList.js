import React from 'react'
import CartItem from './CartItem'


const CartList = ({id, inCart, toggleCart }) => {
  return (
    <div className="container">
    <h5>Your Cart Item(s)</h5>
      <div className="list-group">
        <div className="list-group-item">
        <div className="row">
          <div className="col-md-2"><strong> Title </strong></div>
            <div className="col-md-2"><strong> Author </strong></div>
            <div className="col-md-2"><strong> Price </strong></div>
            </div>
        </div>
        {inCart.map(book => {
          return <CartItem key={book.id} {...book} toggleCart={ toggleCart }/>
        })}
      </div>
    </div>
  )
}
export default CartList