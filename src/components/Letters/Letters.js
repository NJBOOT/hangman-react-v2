import React from "react";
import classes from "./Letters.module.css";
import LetterBox from "../LetterBox/LetterBox";

const Letters = props => {
  return (
    <div className={classes.Letters}>
      {props.answerArray.map((el, i) => (
        <LetterBox key={i} el={el} />
      ))}
    </div>
  );
};

export default Letters;
