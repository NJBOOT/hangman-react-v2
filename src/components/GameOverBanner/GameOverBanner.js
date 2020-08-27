import React, { Component } from "react";
import classes from "./GameOverBanner.module.css";

class GameOverBanner extends Component {
  state = {
    visible: this.props.gameOver,
  };
  render() {
    if (this.state.visible) {
      setTimeout(() => {
        this.setState({
          visible: false,
        });
      }, 5000);
      let classNames = [classes.GameOverBanner, classes.Lost, classes.Fade];
      let message = "YOU LOST";
      if (this.props.won) {
        message = "YOU WON";
        classNames[1] = classes.Won;
      }
      return this.props.gameOver ? (
        <header
          className={classNames.join(" ")}
          style={{ opacity: this.state.visible ? 1 : 0 }}
        >
          <h1>{message}</h1>
        </header>
      ) : null;
    } else {
      return null;
    }
  }
}

export default GameOverBanner;
