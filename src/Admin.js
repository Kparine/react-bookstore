import React from 'react'


function toggleAdmin({handleEdit, handleToggleAdmin}) {
  return (
     <div className="list-group-item">
      <div className="row">
        <div className="col-2">{PaymentResponse.title}</div>
        <div className="col-2">{PaymentResponse.author}</div>
        <div className="col-2">{PaymentResponse.price}</div>

        <button className="cancelBtn" onClick={()=> handleToggleAdmin}></button>
        <button className="cancelBtn" onClick={()=> handleEdit}></button>

      </div>
    </div>
  )
}
export default toggleAdmin