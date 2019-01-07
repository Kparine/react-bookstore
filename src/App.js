import React, { Component } from 'react';
import axios from 'axios'
import Book from './Books'
import Cart from './Cart'
import NavHeader from './NavHeader';
import Footer from './Footer'


class App extends Component {

  render() {
    return (
      <div className="App">
       <NavHeader />
       <Footer />
      </div>
    );
  }
}

export default App;
