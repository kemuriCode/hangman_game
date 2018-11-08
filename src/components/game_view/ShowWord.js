import React, { Component } from 'react';

class ShowWord extends Component {
  render() {
    const worldLetters = this.props.word.split('');
    const answer = worldLetters.map((letter) => {
      let letterState = '_';
      if (this.props.guessedLetters.includes(letter)) {
        letterState = letter;
      }
      return `${letterState}`;
    });
    return (
      <div>
        <h2>{answer}</h2>
      </div>
    );
  }
}

export default ShowWord;