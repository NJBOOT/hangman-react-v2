import React from "react";
import classes from "./Nav.module.css";
const Nav = props => {
  return (
    <nav className={classes.Nav}>
      <h1 style={{ marginLeft: 20 }}>React Hangman</h1>
      <ul>
        <li>
          Wins: <strong>{props.wins}</strong>
        </li>
        <li>
          Guessed Letters:{" "}
          <span style={{ textTransform: "uppercase" }}>
            <strong>{props.guessed}</strong>
          </span>
        </li>
        <li>
          Guesses Left: <strong>{props.guessesLeft}</strong>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
