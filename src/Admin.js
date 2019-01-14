import React, { Component } from 'react'

const inputField = {
  padding: '20px'
}

export default class EditBook extends Component{
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
      <form className="md-3" data-book={this.state.id} Submit={this.handleSubmit}>
        <div className="form-group">
        
        <label htmlFor="title"><strong>Title</strong>
            <input name="title" type="text" className="form-control" handleChange={this.handleChange} value={this.state.title} style={inputField} required />
          </label>

          <label htmlFor="author"><strong>Author</strong>
            <input name="author" type="text" className="form-control" handleChange={this.handleChange} value={this.state.author} style={inputField} required />
          </label>

          <label htmlFor="pages"><strong>Pages</strong>
            <input name="pages" type="text" className="form-control" handleChange={this.handleChange} value={this.state.pages} style={inputField} required />
          </label>

          <label htmlFor="price"><strong>Price</strong>
            <input name="price" type="text" className="form-control" handleChange={this.handleChange} value={this.state.price} style={inputField} required />
          </label>

        <button type="submit" className="btn btn-outline-success">Submit</button>
        <button type="submit" className="btn btn-outline-danger">Cancel</button>
        </div>

      </form>
      )
  }




}