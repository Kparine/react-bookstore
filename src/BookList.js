import React, { Component } from 'react';
import axios from 'axios'
import Books from './Books'

const url = process.env.REACT_APP_BASE_URL


export default class BookList extends Component {

  constructor(props) {
    super(props)
  }

//////////////////////// SEARCH ALL BOOKS ////////////////////////

searchBook = (ele) => {
  const normTitle = ele.title.toLowerCase()
  const normSearchString = this.props.searchString.toLowerCase()
  
  return normTitle.includes(normSearchString) 
}

byColumns = (a, b) => {
  return a[this.props.sortBy] > b[this.props.sortBy] ? 1 : -1
}

render() {
  const filteredBooks = this.props.books.filter(this.searchBook)
   return (
    <div>
      {
        filteredBooks.length !== 0 ?
        filteredBooks.sort(this.byColumns).map(book => <Books key={book.id} toggleCart={this.props.toggleCart} {...book}/>) :
        <div> Title does not exist...</div>
        }
    </div>
    )}
}

