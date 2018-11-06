

# React Hangman Game

**_created by_ t0shifollow** 

## System And IDE

  * Ubuntu 18.04 LTS
  * WebStorm and sometimes VS Code


## Setup

```sh
create-react-app
yarn install # install dependencies
yarn add bootswatch # some nice looking bootstrap themes

```

## Production Start

```sh
yarn start
```

## Summary Of The Project

* randomly choose a word

* display the correctly guessed letters. (with underscores for missing letters)
* display the letters not yet guessed <br>

* form (let user guess a letter)
* check if the letter is in the word
* update guess state
* repeat until the game is over
* game over: word is guessed or out of guesses