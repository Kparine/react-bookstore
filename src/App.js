import React, { Component } from 'react';
import NavHeader from './NavHeader';
import BookList from './BookList';
import Footer from './Footer'
import axios from 'axios'
import CartList from './CartList';
import NewBook from './Admin'

const url = process.env.REACT_APP_BASE_URL


class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      searchString: '',
      sortBy:'title',
      books: [],
      inCart: [],
      editing: false,
      Admin: false
    }
  }
    
  handleSearch = (e) => {
    this.setState({
      searchString: e.target.value
    })
  }

    toggleAdmin = () => {
      this.setState({
        editing: !this.state.editing
      })
    }

 


////////////////////////////// TOGGLE CART //////////////////////////////

    toggleCart = async(id) => {
      const book = this.state.books.find(book => book.id === id)
          
      if (book.inCart){
        this.removeFromCart(id)
      } else { 
        this.addToCart(id, book)
      }
    }
     addToCart = async(id, book) => {
      await axios.patch(`${url}/cart/add/${id}`)
      this.getBooks()
    }

     removeFromCart = async(id) => {
      await axios.patch(`${url}/cart/remove/${id}`)
     
      this.getBooks()
    }

////////////////////////////// ADD BOOK //////////////////////////////

    Book = async (book) => {
      try {
        await axios.post(`${url}/books`, book);
        this.getBooks()
      } catch(err) {
        console.log(err)
      }
      this.getBooks()
    }

////////////////////////////// DELETE BOOK //////////////////////////////

removeBook = async (id, book) => {
  try {
    await axios.put(`${url}/books/${id}`, book)
    this.getLibrary()
  } catch(err) {
    console.log(err)
  }
}

////////////////////////////// EDIT BOOK //////////////////////////////

    updateBook = async(id, book) => {
      await axios.patch(`${url}/books/${id}`)
    }

/////////////////////////// RENDER BOOKS ///////////////////////////

    getBooks = async () => {
      try {
        const response = await axios.get(url)
        this.setState({
          books: response.data,
          inCart: response.data.filter(book => book.inCart === true)
        })
      } 
      catch(err){
        console.log(err)
      }
    }

    componentDidMount() {
    this.getBooks()
  }

  render() {    
    return (
      <div className="App">
        <NavHeader handleSearch={this.handleSearch} value={this.state.searchString}  />
          <BookList 
          books={this.state.books} 
          toggleCart={this.toggleCart} 
          searchString={this.state.searchString} 
          sortBy={this.props.sortBy}
          editing={this.state.editing} 
          />        
           {
            this.state.inCart.length ?  
          <CartList
              inCart={ this.state.inCart }
              toggleCart={ this.toggleCart }
            /> :  null
           }
              { this.state.editing ?
           <NewBook onClick={this.handleNewBook} updateBook={this.updateBook}/>
           : null
           }
          <Footer editing={this.state.editing}
            toggleAdmin= { this.toggleAdmin }
          />
      </div>
    );
  }
}
export default App;