import React from 'react'

function Books ({id, title, author, pages, inCart}) {
  return (
  <div className="list-group-item">
    <div className="row">
      <div className="col-md-4">{title}</div>
      <div className="col-md-2">{author}</div>
      <div className="col-md-2">{pages}</div>
      {/* <button className="col-md-2 btn btn-info add-button" onClick={() => handleAddToCart(id)}>Add to Cart</button>4ed */}
    </div>
  </div>
  )
}

export default Books