import React, { Component } from 'react';
import Books from './Books'



export default class BookList extends Component {


searchBook = (ele) => {

  const normTitle = ele.title.toLowerCase()
  const normSearchString = this.props.searchString.toLowerCase()
  
  return normTitle.includes(normSearchString) 
}

byColumns = (a, b) => {
  return a[this.props.sortBy] > b[this.props.sortBy] ? 1 : -1
}

render() {
  const { books, searchString, toggleCart, editing, getBooks, editBook, createBook, removeBook, showEditBook } = this.props
  const filteredBooks = searchString ? books.filter(this.searchBook): books
  
   return (
    <div>
      {
        filteredBooks.length !== 0 ?
        filteredBooks.sort(this.byColumns).map(book => 
        
        <Books 
        key={book.id} 
        toggleCart={toggleCart}
        editing={editing}
        createBook={createBook}
        removeBook={removeBook}
        editBook={editBook}
        getBooks={getBooks}
        showEditBook={showEditBook}
        {...book}/>
        ) 
        :
        <div> <strong>Book Does Not Exist...</strong></div>
        }
    </div>
    )}
}


