import React, { Component } from 'react'


export default class EditBook extends Component{
  constructor(props){
    super(props)


    this.state = {
      id: this.props.id,
      title: this.props.title,
      author: this.props.author,
      pages: this.props.pages,
      price: this.props.price,
      editing: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  
  handleSubmit = (e) => {
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
      <form className="md-3" data-book={this.state.id} onSubmit={this.handleSubmit}>
        <div className="form-group">
        
        <label htmlFor="title">
            <input name="title" type="text" placeholder="Title..." style={{paddingLeft: '10px'}} className="form-control" handleChange={this.handleChange} value={this.state.title} required />
          </label>

          <label htmlFor="author">
            <input name="author" type="text" placeholder="Author..." className="form-control" handleChange={this.handleChange} value={this.state.author}  required />
          </label>

          <label htmlFor="pages">
            <input name="pages" type="text" placeholder="Pages..." className="form-control" handleChange={this.handleChange} value={this.state.pages} required />
          </label>

          <label htmlFor="price">
            <input name="price" type="text" placeholder="Price..." className="form-control" handleChange={this.handleChange} value={this.state.price} required />
          </label>

        <button type="submit" className="btn btn-outline-success">Submit</button>
        <button type="submit" className="btn btn-outline-danger">Cancel</button>
        </div>

      </form>
      )
  }




}