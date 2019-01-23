import React, { Component } from 'react'
import axios from 'axios'

const url = process.env.REACT_APP_BASE_URL

export default class NewBook extends Component{
  constructor(props){
    super(props)

    this.state = {
      id: this.props.id,
      title: this.props.title,
      author: this.props.author,
      pages: this.props.pages,
      price: this.props.price
    }
  }

  createBook = (e) => {
    e.preventDefault()    
    axios.post(url, {
     title: this.state.title,
     author: this.state.author,
     pages: this.state.pages,
     price: this.state.price
    })
      .then(() => {
        this.props.getBooks()
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {    
    return (
      <form className="md-3" data-book={this.state.id} onSubmit={this.createBook}>
        <div className="form-group">
        <br></br>
          <label htmlFor="title"><strong>Add A New Book...</strong>
            <input name="title" type="text" placeholder="Title..." style={{paddingLeft: '10px'}} className="form-control" handlechange={this.handleChange} value={this.state.title} required />
          </label>

          <label htmlFor="author">
            <input name="author" type="text" placeholder="Author..." className="form-control" handlechange={this.handleChange} value={this.state.author}  required />
          </label>

          <label htmlFor="pages">
            <input name="pages" type="text" placeholder="Pages..." className="form-control" handlechange={this.handleChange} value={this.state.pages} required />
          </label>

          <label htmlFor="price">
            <input name="price" type="text" placeholder="Price..." className="form-control" handlechange={this.handleChange} value={this.state.price} required />
          </label>        
          
          <button type="submit" className="btn btn-outline-success">Submit</button>
        </div>

      </form>
      )
  }
}