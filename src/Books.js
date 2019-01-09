import React from 'react'

const btnStyle = {
  background: '#7ea8ea'
};
const rowStyle = {
  fontFamily: 'sans-serif'
};


function Books ({id, title, author, pages, price ,inCart}) {
  return (
  <div className="list-group-item">
    <div className="row" style={rowStyle}>
      <div className="col-md-3">{title}</div>
      <div className="col-md-2">{author}</div>
      <div className="col-md-2">{pages} pages</div>
      <div className="col-md-2">${price}</div>

      <button className="col-md-2 btn add-button" style={btnStyle}><strong>🛒  </strong>  Add to Cart</button>
    </div>
  </div>
  )
}

export default Books

// onClick={() => handleAddToCart(id)}