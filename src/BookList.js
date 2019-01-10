import React, { Component } from 'react';
import axios from 'axios'
import Books from './Books'

const url = process.env.REACT_APP_BASE_URL


export default class BookList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

//////////////////////// GET ALL BOOKS ////////////////////////

async componentDidMount(){
  this.getBooks()
}


getBooks = async () => {
  try {
    const response = await axios.get(url)
    this.setState({
      books: response.data
    })
  } 
  catch(err){
    console.log(err)
  }
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
  const filteredBooks = this.state.books.filter(this.searchBook)
   return (
    <div>
      {
        filteredBooks.length !== 0 ?
        filteredBooks.sort(this.byColumns).map(book => <Books {...book}/>) :
        <div> Title does not exist...</div>
        }
    </div>
    )}
}

