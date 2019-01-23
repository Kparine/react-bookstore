import React, {Component} from 'react'
import axios from 'axios'

const url = process.env.REACT_APP_BASE_URL

  
export default class EditBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      author: this.props.author,
      pages: this.props.pages,
      price: this.props.price
    }
  } 

 updateBook = async(id, book) => {
      await axios.patch(`${url}/books/${id}`)
    }

  handleEditSubmit = (e) => {
    e.preventDefault()

    let book = {
      title: this.state.title,
      author: this.state.author,
      pages: this.state.pages,
      price: this.state.price
    }

    this.setState = {
      title: '',
      author: '',
      pages: '',
      price: ''
    }
    this.props.updateBook(this.state.id, book)
  }
    
render() {
    return (
      <form className="md-3" data-book={this.state.id} onSubmit={this.handleEditBook}>
        <div className="form-group">
        <br></br>
          <label htmlFor="title"><strong>Update Book...</strong>
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