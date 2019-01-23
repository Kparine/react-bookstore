import React, { Component } from 'react';
import Books from './Books'


export default class BookList extends Component {
  constructor(props) {
    super(props)
  }

searchBook = (ele) => {
console.log(ele.title);

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
        filteredBooks.sort(this.byColumns).map(book => <Books 
        key={book.id} 
        toggleCart={this.props.toggleCart}
        editing={this.props.editing}
        updateBook={this.props.updateBook}
        createBook={this.props.createBook}
        removeBook={this.props.removeBook}
        getBooks={this.props.getBooks}
        {...book}/>) :
        <div> <strong>Book Does Not Exist...</strong></div>
        }
    </div>
    )}
}


