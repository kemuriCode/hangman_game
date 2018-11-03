import React, { Component } from "react";
import "./App.css";
import "./words";
import words from "./words";
import ShowWord from "./components/game_view/ShowWord";
import BadLetters from "./components/bad_letters/BadLetters";
import SubmitForm from "./components/game_view/SubmitForm";

class App extends Component {

    state = {
        word: words[Math.floor(Math.random() * words.length)], // randomowe losowanie liczb
        guessedLetters: []
    }

  render() {
    return (
      <div className="hangman">
        <h1>!HANGMAN GAME!</h1>
        <h2>let's start the game</h2>
          {this.state.word}
          <ShowWord word={this.state.word} guessedLetters={this.state.guessedLetters}/>
          <SubmitForm />
          <BadLetters word={this.state.word} guessedLetters={this.state.guessedLetters}/>
      </div>
    );
  }
}

export default App;
