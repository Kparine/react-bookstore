import React from 'react'
import CartItem from './CartItem'

function Cart(props){
  return (
    <div className="container">
    <h1>Your Cart Item(s)</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Book</div>
            <div className="col-md-8">Price</div>
            <div className="col-md-8">Quantity</div>
          </div>
        </div>
        { props.CartList.map(({Book : title, author, price, quantity, id })=> 
        <CartItem 
        key= { id }
        title= { title }
        author= { author }
        price= { price }
        quantity= { quantity }
        />
        )}
      </div>
    </div>
  )
}
export default Cart