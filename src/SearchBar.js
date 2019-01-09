import React, { Component } from 'react'


const btnStyle = {
  background: '#15448c',
  color: 'smoke'
};

class SearchBar extends Component {
  render() {
    return (
      <div className="field navbar-item">
        <p className="control has-icons-left">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search by title..." aria-label="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit" style={btnStyle}><strong>Search</strong></button>
          </form>
        </p>
      </div>
    )
  }
}

export default SearchBar