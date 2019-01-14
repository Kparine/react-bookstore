import React from 'react'

const btnStyle = {
  background: '#15448c',
  color: 'white'
};

const footStyle = {
  background: '#577ab2'
}

function Footer({ toggleAdmin, submitChanges}) {
  return (
    <nav className="navbar navbar-dark" style={footStyle}>
      <a className="navbar-brand"><strong>&copy;</strong> 2019</a>
      <button className="btn add-button my-2 my-sm-0" onClick={toggleAdmin} style={btnStyle}>
      
      { !toggleAdmin ?
      <span><strong>Admin.</strong></span> :
      <span><strong>Cancel</strong></span>
      } 
     </button>


      {/* <button className="btn submit-button my-2 my-sm-0" onClick={submitChanges} style={btnStyle}>
      { submitChanges ?
        <span><strong>Submit</strong></span> : null
      }
      </button>  */}
    </nav>
  )
}

export default Footer