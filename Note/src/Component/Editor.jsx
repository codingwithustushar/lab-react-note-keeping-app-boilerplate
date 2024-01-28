import React from 'react';
import '../App.css';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value }); 
  };

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea className="input-text" onChange={this.handleChange} value={this.state.inputValue} />
        </div>
        <div className="output">
          <h3>Pro Note</h3>
          <div className="output-text">{this.state.inputValue}</div> {/* Updated reference to state variable */}
        </div>
      </div>
    );
  }
}
