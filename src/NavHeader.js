import React from 'react'
import SearchBar from './SearchBar'

const headStyle = {
  background: '#577ab2'
}

function NavHeader(props) {
  return (
    <nav className="navbar navbar-dark" style={headStyle}>
      <a href='/' className="navbar-brand"><strong><span role='img' aria-label='book'>📚 </span> BookStore. </strong></a>
      <SearchBar handleSearch={props.handleSearch} />
    </nav>
  )
}

export default NavHeader