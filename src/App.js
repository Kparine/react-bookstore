import React, { Component } from 'react';
import NavHeader from './NavHeader';
import Footer from './Footer'
import BookList from './BookList';
import axios from 'axios'
import CartList from './CartList';
import Admin from './Admin'

const url = process.env.REACT_APP_BASE_URL


class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      searchString: '',
      sortBy:'title',
      books: [],
      inCart: []
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
    
    removeFromStore = async(id) => {
      await axios.delete(`${url}/:id`)
    }
    
    addToStore = async(id) => {
      await axios.patch(`${url}/:id`)
    }

    updateStore = async(id) => {
      await axios.patch(`${url}/:id`)
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
          <BookList books={this.state.books} toggleCart={this.toggleCart} searchString={this.state.searchString} sortBy={this.props.sortBy}/> 
           {
            this.state.inCart.length ?  
            <CartList
              inCart={ this.state.inCart }
              toggleCart={ this.toggleCart }
            /> :  null
           }
            <Admin toggleAdmin={this.toggleAdmin} />  
          <Footer />
      </div>
    );
  }
}

export default App;
