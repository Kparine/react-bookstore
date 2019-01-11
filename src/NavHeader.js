import React from 'react'
import SearchBar from './SearchBar'

const headStyle = {
  background: '#577ab2'
}

function NavHeader(props) {
  return (
    <nav className="navbar navbar-dark" style={headStyle}>
      <a className="navbar-brand"><strong><span aria-label='cart'>📚 </span> BookStore. </strong></a>
      <SearchBar handleSearch={props.handleSearch} />
    </nav>
  )
}

export default NavHeader