import React, { Component } from 'react';

class Feedback extends Component {
  render() {
    return (
      <div>
        <span>0</span>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </div>
    );
  }
}

export default Feedback;
