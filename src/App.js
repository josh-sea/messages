import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MessagesContainer from './components/MessagesContainer'
import Form from './components/Form'


class App extends Component {
  state={
    messages: [],
    messageInForm: {real_name: '', message: ''},
  }

  componentDidMount() {
    fetch('http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages')
      .then(response => response.json())
      .then(messages => {
        this.setState({ messages })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify({
        message: this.state.message
      })
    })
      .then(response => response.json())
      .then(newMessage => this.setState({
        messages:[newMessage, ...this.state.messages]
      }))
      event.target.reset();
  }

  handleChange = (e) => {
    e.persist()
    this.setState(prevState =>{
      return {messageInForm: {...prevState.messageInForm, [e.target.name]: e.target.value}
      }
    })
  }

  handleEdit = (message) => {
    this.setState({
      messageInForm: {message: message.message, real_name: message.real_name}
    })
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <h1> Messages App </h1>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} messageInForm={this.state.messageInForm}/>
        <MessagesContainer messages={this.state.messages} handleEdit={this.handleEdit}/>
      </div>
    );
  }
}

export default App;

//
