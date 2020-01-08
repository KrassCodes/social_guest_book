import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = { sender: [] }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get('/messages')
    .then(response => {
      this.setState({ sender: response.data[0].sender })
      console.log(response)
      console.log(this.state)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { sender } = this.state;


    return (
      <div>
        {sender}

      </div>


    );
  }
}

export default App;