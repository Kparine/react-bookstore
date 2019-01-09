import React, { Component } from 'react'
import SearchBar from './SearchBar'


function NavHeader(props) {
  return (
    <nav className="navbar navbar-dark bg-info">
      <a className="navbar-brand" href="#"><strong>🛒 Cart </strong></a>
      <SearchBar />
    </nav>
  )
}

export default NavHeader