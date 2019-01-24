import React, { Component } from 'react';
import NavHeader from './NavHeader';
import BookList from './BookList';
import Books from './Books';
import Footer from './Footer'
import axios from 'axios'
import CartList from './CartList';
import NewBook from './NewBook'
import EditBook from './EditBook'

const url = process.env.REACT_APP_BASE_URL


class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      books: [
        { id: 0, title: 'Steve', author: 'Author 1', pages: '200', price: 0, inCart: false },
      ],
      searchString: '',
      sortBy:'title',      
      inCart: [],
      editing: false,
      editBook: null,

      // editBook: false,
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
        editing: !this.state.editing,
        editBook: !this.state.editing ? this.state.editBook : null
      })
      this.getBooks()
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

   addBook = async (book) => {
    try {
      await axios.post(url, book)
      this.getBooks()
    } catch (err) {
      console.log(err)
    }
  }
/////////////////////////// REMOVE BOOKS ///////////////////////////

  removeBook = async(id) => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${id}`)

        this.setState({
          books: this.state.books.filter(book => book.id !== res.data.id)
        })
    } catch(err){
        console.log(err)
    }
  }

/////////////////////////// EDIT BOOKS ///////////////////////////

 showEditBook = (id) => {
    let editing = this.state.books.find(book => book.id === id)
    // console.log(editing);
    this.setState({
      editBook: editing
    })
  }  

/////////////////////////// RENDER BOOKS ///////////////////////////

  getBooks = async () => {
    try {
      const response = await axios.get(url)
      this.setState({
        books: response.data,
        keys: ['author', 'title'],
        inCart: response.data.filter(book => book.inCart === true),

        //keys: Object.keys(response.data) // use if you want all the keys
      })
    } catch (err) {
      console.log(err)
    }
  }
    

  componentDidMount() {
    this.getBooks()
  }

  setAdmin = (show, editing) => {
    this.setState({Admin: show, editing, editBook: null})
  }

  render() {    
    return (
      <div className="App">
        <NavHeader handleSearch={this.handleSearch} value={this.state.searchString}  />
          {
            this.state.editBook ? <Books {...this.state.editBook} editing={this.state.editing}/>
              :<BookList 
                books={this.state.books} 
                toggleCart={this.toggleCart} 
                searchString={this.state.searchString} 
                sortBy={this.props.sortBy}
                editing={this.state.editing}
                editBook={this.editBook}
                removeBook={this.removeBook}
                updateBook={this.updateBook}
                showEditBook={this.showEditBook}
              />
          } 
           {
            this.state.inCart.length ?  
          <CartList
              inCart={ this.state.inCart }
              toggleCart={ this.toggleCart }
            /> :  null
           }
          { 
               this.state.editBook ?
                <EditBook
                showEditBook={this.showEditBook} getBooks={this.getBooks} {...this.state.editBook}
                setAdmin={this.setAdmin}
                />           
              :
              <NewBook addBook={this.addBook} getBooks={this.getBooks}/>
              
           }
          <Footer editing={this.state.editing}
            toggleAdmin= { this.toggleAdmin }
          />
      </div>
    );
  }
}
export default App;