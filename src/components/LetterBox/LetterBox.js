import React from "react";
import classes from "./LetterBox.module.css";

const LetterBox = props => {
  return (
    <div className={classes.LetterBox}>
      <div className={classes.Letter}>{props.el}</div>
    </div>
  );
};

export default LetterBox;
