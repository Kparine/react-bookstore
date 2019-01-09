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

handleAddToCart = (id) => {
  axios.put(`url/cart/add/${id}`)
    .then(() => {
      this.getBooks()
    })
}




render() {
   return (
    <div>
      {this.state.books.map(book => <Books {...book}/>)}
    </div>
    )}
}

