import React from 'react'

const btnStyle = {
  background: '#15448c',
  color: 'white'
};

const footStyle = {
  background: '#577ab2'
}

function Footer(props) {
  return (
    <nav className="navbar navbar-dark" style={footStyle}>
      <a className="navbar-brand" href="#"><strong>&copy;</strong> 2019</a>
      <button className="btn add-button my-2 my-sm-0" style={btnStyle}><strong>Admin.</strong></button>
    </nav>
  )
}

export default Footer