import React from 'react'

const btnStyle = {
  background: '#7ea8ea'
}
const editStyle = {
  background: '#00FF7C'
}
const delStyle = {
  background: '#e25151'
}
const rowStyle = {
  fontFamily: 'sans-serif'
}


function Books ({id, title, author, pages, price ,inCart, toggleCart, removeBook, editing, editBook, toggleAdmin, getBooks, handleCreateBook}) {
  const AddCart = inCart ? 'Remove from Cart' : 'Add to Cart' 
  
  return (
  <div className="list-group-item">
    <div className="row" style={rowStyle}>
    
      <div className="col-md-3">{title}</div>
      <div className="col-md-2">{author}</div>
      <div className="col-md-2">{pages}</div>
      <div className="col-md-2">{price}</div>
      { !editing ?
      <button className="col-md-2 btn add-button" style={btnStyle} onClick={() => toggleCart(id)}>
        <span role='img' aria-label='cart'><strong><span role='img' aria-label='alt'>🛒 </span> </strong>{AddCart}</span> 
      </button>
      :
      <div>
        <button className="btn" style={editStyle} onClick={()=>editBook(id)}>✎ Edit</button>
        <span>  </span>
        <button className="btn" style={delStyle} onClick={()=>removeBook(id)}>🗑 Delete</button>
      </div>
      }
    </div>
  </div>
  )
}

export default Books

