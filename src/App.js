import React, { Component } from 'react';
import NavHeader from './NavHeader';
import Footer from './Footer'
import BookList from './BookList';


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
  



  render() {
    return (
      <div className="App">
       <NavHeader handleSearch={this.handleSearch} value={this.state.searchString}  />
       <BookList searchString={this.state.searchString} sortBy={this.props.sortBy}/> 
       <Footer />
      </div>
    );
  }
}

export default App;
