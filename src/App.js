import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';

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
      <React.Fragment>
          <div className='app__container'>
          <div className='app__container--left'>
            <h1 className='app__header'>Welcome to your day</h1>
          </div>
          <div className='app__container--right'>
            <textarea
              className='app__input'
              onChange={this.handleInputChange}
            />
            <div className='app__button--container'>
              <button
                className='app__button'
                onClick={(e) => this.processInput(e, 'sentiment')}>Get Sentiment</button>
              <button
                className='app__button app__button--no-left-border'
                onClick={(e) => this.processInput(e, 'keyPhrases')}>Get KeyPhrases</button>
            </div>
            <div>
              <p>{this.state.sentiment.Sentiment}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
