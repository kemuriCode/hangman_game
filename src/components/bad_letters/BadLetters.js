import React, { Component } from 'react';

class BadLetters extends Component {
  getBadLetters() {
    const wrong = this.props.guessedLetters.filter(letter => !this.props.word.split('').includes(letter));
    return wrong;
  }

  render() {
    return (
      <div>
        <h4>bad shots:<p className="text-danger">{this.getBadLetters()}</p></h4>
      </div>
    );
  }
}

export default BadLetters;
