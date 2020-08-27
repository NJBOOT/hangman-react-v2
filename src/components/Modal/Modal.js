import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = props => {
  const message = props.gameWon ? "Congrats, you won." : "Sorry, you lost";
  const word = props.gameWon ? null : (
    <h2 style={{ color: "rgb(39, 88, 104)", marginBottom: 50 }}>
      The word was{" "}
      <strong style={{ textTransform: "uppercase" }}>
        "{props.secretWord}"
      </strong>
    </h2>
  );
  return (
    <Fragment>
      <Backdrop visible={props.gameOver} />
      <div
        className={classes.Modal}
        style={{
          transform: props.gameOver ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.gameOver ? 1 : 0,
          color: props.gameWon ? "green" : "red",
        }}
      >
        <h1>{message}</h1>
        {word}
        <Button handleClick={props.playAgain}>PLAY AGAIN?</Button>
      </div>
    </Fragment>
  );
};

export default Modal;
