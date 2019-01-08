import React, { Component } from 'react';
import axios from 'axios'
import Books from './BookList'
import Cart from './Cart'
import NavHeader from './NavHeader';
import Footer from './Footer'
import BookList from './BookList';


class App extends Component {

  render() {
    return (
      <div className="App">
       <NavHeader />
       <BookList />
       <Footer />
      </div>
    );
  }
}

export default App;
