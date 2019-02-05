import React from 'react';

class Form extends React.Component{



  state={

  }

  //
  // const whatever = () => {
  //   let obj
  //   if(props.messageToEdit){
  //     return obj={message:props.messageToEdit.message, realName: props.messageToEdit.real_name}
  //   } else {
  //     return obj={message: null, realName: null}
  //   }
  // }


  render(){
    return(
      <div className='jumbotron'>
        <form onSubmit={this.props.handleSubmit}>
          <input onChange={this.props.handleChange} className='form-control' type='text' placeholder="Enter new message" name="message"  value={this.props.messageInForm.message}/>
          <input onChange={this.props.handleChange} className='form-control' type='text' placeholder="Enter new name" name="real_name" value={this.props.messageInForm.real_name}/>
          <input className='btn btn-dark' type='submit'/>
        </form>
      </div>

  )
}
}

export default Form
