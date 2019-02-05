import React from 'react';
import Message from './Message'

const MessagesContainer = (props) => {
  console.log(props);

  const renderMessages = () => {
    return props.messages.map(message => {
      return <Message key={message.id} {...message} handleEdit={props.handleEdit}/>
    })
  }

  return(
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='card-columns'>
            {renderMessages()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagesContainer
