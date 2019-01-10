import React, { Component } from 'react';
import NavHeader from './NavHeader';
import Footer from './Footer'
import BookList from './BookList';
import axios from 'axios'
import Cart from './CartList'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      searchString: '',
      sortBy:'title'
    }
  }
    handleSearch = (e) => {
      this.setState({
        searchString: e.target.value
      })
    }
  
    toggleCart = async(id) => {
      const book = this.state.find(book => book.id === id)

      if (book.inCart){
        this.addToCart(id)
      } else {
        this.removeFromCart(id)
      }
    }

    async handleAddToCart(id) {
      await axios.put(`url/cart/add/${id}`)
        .then(() => {
          this.getBooks()
      })
    }

    async handleRemoveFromCart(id) {
      await axios.put(`url/cart/remove/${id}`)
        .then(()=> {
          this.getBooks()
        })
    }

    async removeBook(id) {
      await axios.delete(`/url/${id}`)
        .then(()=> {
          this.getBooks()
        })
    }

  render() {
    return (
      <div className="App">
       <NavHeader handleSearch={this.handleSearch} value={this.state.searchString}  />
       <BookList searchString={this.state.searchString} sortBy={this.props.sortBy}/> 
       <Footer />
       <Cart
          books={ this.state.books }
          toggleCart={ this.toggleCart }
          admin={ this.state.admin }
          />
      </div>
    );
  }
}

export default App;
