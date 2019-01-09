import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div className="field navbar-item">
        <p className="control has-icons-left">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search Title" aria-label="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit"><strong>Search</strong></button>
          </form>
        </p>
      </div>
    )
  }
}

export default SearchBar