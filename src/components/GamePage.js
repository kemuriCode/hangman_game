import React, { Component }from 'react';
import words from "../words";
import ShowWord from "./game_view/ShowWord";
import SubmitForm from "./game_view/SubmitForm";
import BadLetters from "./bad_letters/BadLetters";
import {Link} from "react-router-dom";

class GamePage extends Component {

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
            this.setState( {
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
            alert('You Have Lost'); window.location.reload()
        } else if (this.wordIsGuessed()) {
            alert(`YOU WON! Guessed word is: ${this.state.word}`); window.location.reload()
        }
    }

    wordIsGuessed() {
        const guessState = this.state.word.split('').map(letter => {
            if(this.state.guessedLetters.includes(letter)) {
                return letter
            }
            return 0
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
            <div className="jumbotron">
                <div className="hangman">
                    <h1 className="display-3">GAME PANEL</h1>
                    <h2>Let's start the game</h2>
                    <h3>How many chances you have: {this.state.guessesRemaining}</h3>
                    <ShowWord word={this.state.word} guessedLetters={this.state.guessedLetters}/>
                    <SubmitForm checkLetter={ (letter) => this.updateGameState(letter)} />
                    <BadLetters word={this.state.word} guessedLetters={this.state.guessedLetters}/>
                        <div className="modal-footer">
                            <Link onClick={this.forceUpdate} to={'/game'} className="btn btn-primary btn-lg" herf="#" role="button">RELOAD</Link>
                            <Link onClick={this.forceUpdate} to={'/'} className="btn btn-primary btn-lg" herf="#" role="button">BACK</Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default GamePage;