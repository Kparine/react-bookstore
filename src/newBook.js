import React from 'react'


function newBook(props) {
  return (
    <div>
    <form onSubmit={(event) => {
        props.handleNewBook(
          event.target.title.value,
          event.target.author.value,
          event.target.pages.value,
          event.target.price.value
        )}
      }>
        <div className="form-group">
          <input type='text' className='form-control' id='title' required />
        </div>
        <div className="form-group">
          <input type='text' className='form-control' id='author' required />
        </div>
        <div className="form-group">
          <input type='text' className='form-control' id='pages' required />
        </div>
        <div className="form-group">
          <input type='text' className='form-control' id='price' required />
        </div>
      </form>
    </div>
  )
}
export default newBook