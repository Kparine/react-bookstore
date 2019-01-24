import React, {Component} from 'react'
import axios from 'axios'

const url = process.env.REACT_APP_BASE_URL

  
export default class EditBook extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    
    this.state = {
      title: props.title,
      author: props.author,
      pages: props.pages,
      price: props.price,
    }
  }

  handleUpdateBook = async(id, book) => {
    await axios.put(`${url}/${id}`, book)     
    .then(() => {
        this.props.getBooks()
        this.props.setAdmin(false, false )
      })
      .catch(err => {
        console.log(err)
      })
  }

  onSubmit = (e) => {
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
    this.handleUpdateBook(this.state.id, book)
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
          <label htmlFor="title"><strong>Update Book...</strong>
            <input name="title" type="text" placeholder="Title..." style={{paddingLeft: '10px'}} className="form-control" onChange={this.handleChange} value={this.state.title} required />
          </label>

          <label htmlFor="author">
            <input name="author" type="text" placeholder="Author..." className="form-control" onChange={this.handleChange} value={this.state.author}  required />
          </label>

          <label htmlFor="pages">
            <input name="pages" type="number" placeholder="Pages..." className="form-control" onChange={this.handleChange} value={this.state.pages} required />
          </label>

          <label htmlFor="price">
            <input name="price" type="price" placeholder="Price..." className="form-control" onChange={this.handleChange} value={this.state.price} required />
          </label>        
          
          <button type="submit" className="btn btn-outline-success">Submit</button>
        </div>

      </form>
      )
  }
}