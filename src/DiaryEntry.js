import React, {PureComponent} from 'react';

export default class DiaryEntry extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <input
        type='text'
        placeholder='Notes...'
        name='value'
        onChange={this.handleChange}
        value={this.state.value} />
    );
  }
}
