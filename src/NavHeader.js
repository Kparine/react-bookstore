import React, { Component } from 'react'
import SearchBar from './SearchBar'

const headStyle = {
  background: '#577ab2'
}

function NavHeader(props) {
  return (
    <nav className="navbar navbar-dark" style={headStyle}>
      <a className="navbar-brand" href="#"><strong>🛒 Cart </strong></a>
      <SearchBar handleSearch={props.handleSearch} />
    </nav>
  )
}

export default NavHeader