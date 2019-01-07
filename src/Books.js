import React, { Component } from 'react';
const url = process.env.REACT_APP_BASE_URL
import axios from 'axios'


export default class BookList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [
        {id: 0, title: ' ', author:'', pages:'', inCart: false}
      ]
    }
  }

async componentDidMount(){
  this.getBooks()
}

getBooks = async () => {
  try {
    const response = await axios.get('http://localhost:8082/api/books')
    this.setState({books: response.data.books})
  } 
  catch(err){
    console.log(err)
  }
}

newBook = () => {
  axios.post('http://localhost:8082/api/books')
  .then((data) => {
    this.getBooks()
  })
  .catch(console.error)
}



render() {
   return (
    <div>
    
    </div>
    )}
}

export default Books