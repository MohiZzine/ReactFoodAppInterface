import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const buttonStyleList = props.className.split(" ");
  return (
    <button
      className={buttonStyleList.map((style) => classes[style]).join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
