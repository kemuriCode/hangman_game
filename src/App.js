import React, { Component } from "react";
import "./App.css";
import "./words";
import words from "./words";
import ShowWord from "./components/game_view/ShowWord";
import BadLetters from "./components/bad_letters/BadLetters";
import SubmitForm from "./components/game_view/SubmitForm";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            word: words[Math.floor(Math.random() * words.length)], // randomowe losowanie słów
            guessedLetters: [],
            guessesRemaining: 5
        }
        console.log(this.state.word)
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
        this.updateGuessesRemaining(letter)
        this.gameOver()
    }


  render() {
    return (
      <div className="hangman">
        <h1>!HANGMAN GAME!</h1>
        <h2>let's start the game</h2>
          <h3>Ile Ci żyćka zostalo: {this.state.guessesRemaining}</h3>
          <ShowWord word={this.state.word} guessedLetters={this.state.guessedLetters}/>
          <SubmitForm checkLetter={ (letter) => this.updateGameState(letter)} />
          <BadLetters word={this.state.word} guessedLetters={this.state.guessedLetters}/>
      </div>
    );
  }
}

export default App;
