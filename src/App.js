import React, { Component } from 'react';
import DiaryEntry from './DiaryEntry';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [<DiaryEntry />], // TODO: this will be a json populated list
      isTextArea: null,
      isText: null,
      onBoardingComplete: false,
    }
  }

  addEntry = () => {
    const entries = this.state.entries.concat(<DiaryEntry />)
    this.setState({
      entries,
    });
  }

  handleOnboarding = (e) => {
    this.setState({
      [e.target.name]: true, 
      onBoardingComplete: !this.state.onBoardingComplete,
    })
  }

  renderOnboarding = () => {
    if (this.state.onBoardingComplete) return;
    const titleMessage = `
    Welcome to the Smart Diary™. Before we begin, do you prefer
    to write in long form prose or short, bulleted lists?
    `;
    return (
      <div>
        <h1>{titleMessage}</h1>
        <div>
          <button
            name='isTextArea'
            onClick={this.handleOnboarding}>
            Prose
          </button>
          <button
            name='isText'
            onClick={this.handleOnboarding}>
            Bulleted Lists
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderOnboarding()}
        {this.state.onBoardingComplete && 
          this.state.entries.map(entry => entry)
        }
      </div>
    );
  }
}
