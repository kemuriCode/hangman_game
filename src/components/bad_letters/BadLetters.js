import React, { Component } from "react";
import "./BadLetters.css";

class BadLetters extends Component {

    getBadLetters(){
       const wrong = this.props.guessedLetters.filter(letter =>{
           return !this.props.word.split('').includes(letter)
        })
        return wrong
    }
    render() {
        return (
            <div className="BadLetters">
                <h4>bad shots: <p class="text-danger">{this.getBadLetters()}</p></h4>
            </div>
        );
    }
}

export default BadLetters;
