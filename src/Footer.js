import React from 'react'

const btnStyle = {
  background: '#15448c',
  color: 'white'
}

const footStyle = {
  background: '#577ab2'
}

function Footer({ toggleAdmin }) {
  return (
    <nav className="navbar navbar-dark" style={footStyle}>
      <a href='#' className="navbar-brand"><strong>&copy;</strong> 2019</a>
      <button className="btn add-button my-2 my-sm-0" onClick={toggleAdmin} style={btnStyle}>
      <span><strong>Admin.</strong></span>  
     </button>

    </nav>
  )
}

export default Footer