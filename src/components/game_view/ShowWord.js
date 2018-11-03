import React, { Component } from "react";
import "./ShowWord.css";

class ShowWord extends Component {

    render() {
        const worldLetters = this.props.word.split('')

        const answer = worldLetters.map(letter => {
            let letterState = '_'
            if(this.props.guessedLetters.includes(letter)){
                letterState = letter
            }
            return letterState + ' '
        })
        return (
            <div className="ShowWord">
                <h3>{answer}</h3>
            </div>
        );
    }
}

export default ShowWord;
