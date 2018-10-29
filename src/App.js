import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: '',
      sentiment: {
        Sentiment: null,
      },
    }
  }

  processInput = async (e, operation) => {
    e.preventDefault();
    const {data} = await axios.post(`http://127.0.0.1:5000/${operation}`, {
      data: this.state.entry
    });
    this.setState({
      sentiment: data,
    })
  }


  handleInputChange = (e) => {
    this.setState({
      entry: e.target.value,
    });
  }


  render = () => {
    return (
      <div className="App">
        <h1>Welcome to your day</h1>
        <textarea
          onChange={this.handleInputChange}
        />
        <div>
          <button onClick={(e) => this.processInput(e, 'sentiment')}>Get Sentiment</button>
          <button onClick={(e) => this.processInput(e, 'keyPhrases')}>Get KeyPhrases</button>
        </div>
        <div>
          <p>{this.state.sentiment.Sentiment}</p>
        </div>
      </div>
    );
  }
}
