import React from 'react'


function Books ({id, title, author, pages, price ,inCart}) {
  return (
  <div className="list-group-item">
    <div className="row">
      <div className="col-md-4">{title}</div>
      <div className="col-md-2">{author}</div>
      <div className="col-md-1">{pages} pages</div>
      <div className="col-md-1">${price}</div>

      <button className="col-md-2 btn btn-info add-button"><strong>+</strong> Add to Cart</button>
    </div>
  </div>
  )
}

export default Books

// onClick={() => handleAddToCart(id)}