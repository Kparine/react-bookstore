import React, { Component } from 'react';
import NavHeader from './NavHeader';
import Footer from './Footer'
import BookList from './BookList';


class App extends Component {
  constructor(props){
    super(props)


    handleChange = (e) => {
      this.setState({
        [e.target.name]: [e.target.value]
      })
    }
  
    searchBook = (ele) => {
      const normTitle = ele.title.toLowerCase()
      const normAuthor = ele.author.toLowerCase()
      const normSearchString = this.state.searchString.toLowerCase()

      return normTitle.includes(normSearchString) || normAuthor.includes(normSearchString)
    }
    byColumns = (a, b) => {
      return a[this.state.sortBy] > b[this.state.sortBy] ? 1 : -1
    }
  
  }

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
