import React, { Component, Fragment } from "react";
import { letters, wordList } from "../../helpers";
import Letters from "../../components/Letters/Letters";
import Nav from "../../components/Nav/Nav";
import Modal from "../../components/Modal/Modal";

class Main extends Component {
  state = {
    answerArray: [],
    guessed: [],
    guessesLeft: 8,
    wins: 0,
    secretWord: "",
    gameOver: false,
    gameWon: false,
  };

  componentDidMount() {
    this.generateWord();
    document.addEventListener("keydown", this.handleUserGuess);
  }

  generateWord = () => {
    const index = Math.floor(Math.random() * wordList.length);
    const secretWord = wordList[index];
    let answerArray = [];
    secretWord.split("").forEach(el => answerArray.push(" "));
    this.setState({ secretWord: secretWord, answerArray: answerArray });
  };

  checkValidity = guess => {
    if (
      letters.includes(guess) &&
      this.state.guessesLeft > 0 &&
      !this.state.guessed.includes(guess)
    ) {
      return true;
    } else {
      return false;
    }
  };

  playAgain = () => {
    this.setState({
      answerArray: [],
      guessed: [],
      guessesLeft: 8,
      secretWord: "",
      gameOver: false,
      gameWon: false,
    });
    this.generateWord();
  };

  correctUserGuess = guess => {
    for (let i = 0; i < this.state.secretWord.length; i++) {
      if (guess === this.state.secretWord[i]) {
        let answerArray = this.state.answerArray;
        answerArray[i] = guess;
        this.setState({ answerArray: answerArray });
      }
    }
  };

  incorrectUserGuess = guess => {
    this.setState({
      guessesLeft: this.state.guessesLeft - 1,
      guessed: this.state.guessed.concat(guess),
    });
  };

  wordsMatch = () => {
    return this.state.secretWord === this.state.answerArray.join("");
  };

  gameWon = () => {
    this.setState({
      wins: this.state.wins + 1,
      gameOver: true,
      gameWon: true,
    });
  };

  handleUserGuess = e => {
    let userGuess = e.key;
    if (this.checkValidity(userGuess)) {
      if (this.state.secretWord.includes(userGuess)) {
        this.correctUserGuess(userGuess);
        if (this.wordsMatch()) {
          this.gameWon();
        }
      } else {
        this.incorrectUserGuess(userGuess);
        if (this.state.guessesLeft === 0) {
          this.setState({ gameOver: true });
        }
      }
    }
  };

  render() {
    return (
      <Fragment>
        <Nav
          wins={this.state.wins}
          guessed={this.state.guessed}
          guessesLeft={this.state.guessesLeft}
        />
        <Modal
          gameWon={this.state.gameWon}
          gameOver={this.state.gameOver}
          playAgain={this.playAgain}
          secretWord={this.state.secretWord}
        />
        <Letters answerArray={this.state.answerArray} />
      </Fragment>
    );
  }
}

export default Main;
