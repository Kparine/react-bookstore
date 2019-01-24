import React, { Component } from 'react'
import axios from 'axios'

const url = process.env.REACT_APP_BASE_URL

export default class NewBook extends Component{
  constructor(props){
    super(props)

    this.state = {
      title: '',
      author: '',
      pages: 0,
      price: 0
    }
  }

  onSubmit = (e) => {
    e.preventDefault()   
     
    axios.post(url, {
     title: this.state.title,
     author: this.state.author,
     pages: parseInt(this.state.pages),
     price: parseInt(this.state.price)
    })
      .then(() => {
        this.props.getBooks()
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleChange = (e) => {   
     
    this.setState({...this.state,
      [e.target.name]: e.target.value
    })
  }


  render() { 

    return (
      <form className="md-3" data-book={this.state.id} onSubmit={this.onSubmit}>
        <div className="form-group">
        <br></br>
          <label htmlFor="title"><strong>Add A New Book...</strong>
            <input name="title" type="text" placeholder="Title..." style={{paddingLeft: '10px'}} className="form-control" onChange={this.handleChange} value={this.state.title} required />
          </label>

          <label htmlFor="author">
            <input name="author" type="text" placeholder="Author..." className="form-control" onChange={this.handleChange} value={this.state.author}  required />
          </label>

          <label htmlFor="pages">
            <input name="pages" type="number" placeholder="Pages..." className="form-control" onChange={this.handleChange} value={this.state.pages} required />
          </label>

          <label htmlFor="price">
            <input name="price" type="number" placeholder="Price..." className="form-control" onChange={this.handleChange} value={this.state.price} required />
          </label>        
          
          <button type="submit" className="btn btn-outline-success">Submit</button>
        </div>

      </form>
      )
  }
}