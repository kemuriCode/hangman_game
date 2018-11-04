import React, { Component } from "react";
import "./App.css";
import "./words";
import words from "./words";
import ShowWord from "./components/game_view/ShowWord";
import BadLetters from "./components/bad_letters/BadLetters";
import SubmitForm from "./components/game_view/SubmitForm";

class App extends Component {

    state = {
        word: words[Math.floor(Math.random() * words.length)], // randomowe losowanie słów
        guessedLetters: [],
        guessesRemaining: 5
    }

    updateGuessedLetters = (letter) => {
        if (this.state.guessedLetters.includes(letter)) {
            alert(`You already guessed ${letter}`)
        } else {
            this.setState({
                guessedLetters: [...this.state.guessedLetters, letter]
            })
        }
    }
    
    updateGuessesRemaining(letter) {
        if (!this.state.guessedLetters.includes(letter) && !this.state.word.split('').includes(letter)){
            this.setState({guessesRemaining: this.state.guessesRemaining -1})
        }
    }

    gameOver(){
        if(this.state.guessesRemaining <= 0) {
            alert('You Have Lost')
        } else if (this.wordIsGuessed()) {
            alert(`YOU WON! Guessed word is: ${this.state.word}`)
        }
    }

    wordIsGuessed(){
        const guessState = this.state.word.split('').map(letter => {
            if(this.state.guessedLetters.includes(letter)) {
                return letter
            }
        })
        return guessState.join('') === this.state.word
    }

    updateGameState(letter){
        this.updateGuessedLetters(letter)
        this.updateGuessesRemaining()
        this.gameOver()
    }


  render() {
    return (
      <div className="hangman">
        <h1>!HANGMAN GAME!</h1>
        <h2>let's start the game</h2>
          <h3>{this.state.guessesRemaining}</h3>
          {this.state.word}
          <ShowWord word={this.state.word} guessedLetters={this.state.guessedLetters}/>
          <SubmitForm updateGameState={this.updateGameState} />
          <BadLetters word={this.state.word} guessedLetters={this.state.guessedLetters}/>
      </div>
    );
  }
}

export default App;
