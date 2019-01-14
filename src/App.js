import React, { Component } from 'react';
import NavHeader from './NavHeader';
import Footer from './Footer'
import BookList from './BookList';
import axios from 'axios'
import CartList from './CartList';

const url = process.env.REACT_APP_BASE_URL


class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      searchString: '',
      sortBy:'title',
      books: [],
      inCart: [],
      admin: false
    }
  }
    handleSearch = (e) => {
      this.setState({
        searchString: e.target.value
      })
    }
  
    toggleCart = async(id) => {
      const book = this.state.books.find(book => book.id === id)
          
      if (book.inCart){
        this.removeFromCart(id)
      } else { 
        this.addToCart(id, book)
      }
    }
     addToCart = async(id, book) =>{
      await axios.patch(`${url}/cart/add/${id}`)
      this.getBooks()
    }

     removeFromCart = async(id) => {
      await axios.patch(`${url}/cart/remove/${id}`)
     
      this.getBooks()
    }


    async componentDidMount(){
      this.getBooks()
    }
    
    newBookHandler = (title, author, pages, price) => {
      axios.post(url, {
        title,
        author,
        pages,
        price
      })
      .then(()=> {
        this.getBooks()
      })
      .catch(err=> {
        console.log(err);
        
      })
    }


    toggleAdmin = (e) => {
      const admin = !this.state.admin
      this.setState({admin})
    }


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


  render() {    
    return (
      <div className="App">
        <NavHeader handleSearch={this.handleSearch} value={this.state.searchString}  />
          <BookList 
          books={this.state.books} 
          toggleCart={this.toggleCart} 
          searchString={this.state.searchString} 
          sortBy={this.props.sortBy} 
          admin={this.state.admin}/> 
           {
            this.state.inCart.length ?  
          <CartList
              inCart={ this.state.inCart }
              toggleCart={ this.toggleCart }
            /> :  null
           }
          <Footer />
      </div>
    );
  }
}

export default App;
