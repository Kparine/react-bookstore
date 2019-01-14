import React from 'react'

const btnStyle = {
  background: '#7ea8ea'
};
const rowStyle = {
  fontFamily: 'sans-serif'
};


function Books ({id, title, author, pages, price ,inCart, toggleCart, editAdmin, deleteAdmin}) {
  return (
  <div className="list-group-item">
    <div className="row" style={rowStyle}>
    
      <div className="col-md-3">{title}</div>
      <div className="col-md-2">{author}</div>
      <div className="col-md-2">{pages} pages</div>
      <div className="col-md-2">{"$" + Number(price).toFixed(2)}</div>
      <button className="col-md-2 btn add-button" style={btnStyle} onClick={() => toggleCart(id)}>
      {  inCart ?
        <span><strong>🛒  </strong> Remove from Cart </span> :
        <span><strong>🛒  </strong>  Add to Cart</span> 
      }
      </button>
    </div>
  </div>
  )
}

export default Books

