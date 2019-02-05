import React from 'react';

const Message = (props) => {
  
  return(
    <div className='card' >
      <div className='card-body'>
        <h5 className='card-title'>{props.real_name}</h5>
        <p className='card-text'>{props.message}</p>
        <button id={props.id} className='btn btn-dark' onClick={() => props.handleEdit(props)}>Edit</button>
      </div>
    </div>

  )

}

export default Message
